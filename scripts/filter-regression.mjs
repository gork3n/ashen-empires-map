#!/usr/bin/env node
import { execFile } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import { setTimeout as delay } from 'node:timers/promises';

const CDP_PORT = Number(process.env.AE_MAP_CDP_PORT || 9222);
const MAP_URL = process.env.AE_MAP_URL || `http://127.0.0.1:8792/openlayers.html?filter-regression=${Date.now()}`;
const CHROMIUM = process.env.CHROMIUM_BIN || 'chromium';
const PROFILE = process.env.AE_MAP_BROWSER_PROFILE || '/tmp/ae-map-filter-regression-profile';

async function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(new Error(`${url} returned HTTP ${res.statusCode}: ${body}`));
          return;
        }
        resolve(JSON.parse(body));
      });
    });
    req.on('error', reject);
    req.setTimeout(3000, () => req.destroy(new Error(`Timed out fetching ${url}`)));
  });
}

async function ensureChromium() {
  try {
    return await fetchJson(`http://127.0.0.1:${CDP_PORT}/json/version`);
  } catch {
    fs.mkdirSync(PROFILE, { recursive: true });
    const child = execFile(CHROMIUM, [
      '--headless=new',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--remote-debugging-address=127.0.0.1',
      `--remote-debugging-port=${CDP_PORT}`,
      `--user-data-dir=${PROFILE}`,
      'about:blank',
    ], { detached: true, stdio: 'ignore' });
    child.unref();
    for (let i = 0; i < 30; i += 1) {
      await delay(250);
      try { return await fetchJson(`http://127.0.0.1:${CDP_PORT}/json/version`); } catch {}
    }
    throw new Error('Could not start Chromium CDP endpoint');
  }
}

async function withCdp(fn) {
  const version = await ensureChromium();
  const ws = new WebSocket(version.webSocketDebuggerUrl);
  let nextId = 1;
  const pending = new Map();
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  });
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });
  const send = (method, params = {}, sessionId = null) => {
    const id = nextId++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  };

  const target = await send('Target.createTarget', { url: 'about:blank' });
  const attach = await send('Target.attachToTarget', { targetId: target.targetId, flatten: true });
  const sessionId = attach.sessionId;
  try {
    await send('Runtime.enable', {}, sessionId);
    await send('Page.enable', {}, sessionId);
    await send('Network.enable', {}, sessionId);
    await send('Network.setCacheDisabled', { cacheDisabled: true }, sessionId);
    await send('Network.clearBrowserCache', {}, sessionId);
    await send('Page.navigate', { url: MAP_URL }, sessionId);
    await waitForExpression(send, sessionId, `document.querySelectorAll('#marker-toggles .marker-subtype-btn').length > 0 && document.querySelectorAll('#underground-label-toggles-grid .toggle-btn').length > 0`);
    return await fn(send, sessionId);
  } finally {
    await send('Target.closeTarget', { targetId: target.targetId }).catch(() => {});
    ws.close();
  }
}

function assert(condition, message, details = null) {
  if (!condition) {
    const error = new Error(message);
    error.details = details;
    throw error;
  }
}

async function waitForExpression(send, sessionId, expression, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const evaluation = await send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    }, sessionId);
    if (evaluation.result.value) return;
    await delay(250);
  }
  throw new Error(`Timed out waiting for browser condition: ${expression}`);
}

const result = await withCdp(async (send, sessionId) => {
  const expression = `(() => {
    function buttonInfo(selector) {
      const button = document.querySelector(selector);
      if (!button) return null;
      return {
        id: button.id || null,
        text: button.textContent.trim(),
        className: button.className,
        disabled: button.disabled,
        hasCanvas: Boolean(button.querySelector('canvas')),
        childNodes: Array.from(button.childNodes).map((node) => node.nodeName),
      };
    }

    const lspButtons = Array.from(document.querySelectorAll('#marker-toggles .marker-subtype-btn[data-subtype="overworld_portal_lsp"]'))
      .map((button) => ({
        category: button.dataset.category,
        text: button.textContent.trim(),
        hasCanvas: Boolean(button.querySelector('canvas')),
        childNodes: Array.from(button.childNodes).map((node) => node.nodeName),
      }));

    const undergroundLabelButtonsBefore = Array.from(document.querySelectorAll('#underground-label-toggles-grid .toggle-btn'))
      .filter((button) => !button.disabled)
      .map((button) => ({ category: button.dataset.category, active: button.classList.contains('active') }));
    document.querySelector('#show-all-underground-labels')?.click();
    const undergroundLabelButtonsAfter = Array.from(document.querySelectorAll('#underground-label-toggles-grid .toggle-btn'))
      .filter((button) => !button.disabled)
      .map((button) => ({ category: button.dataset.category, active: button.classList.contains('active') }));

    return {
      title: document.title,
      readyState: document.readyState,
      lspButtons,
      undergroundLabelMaster: buttonInfo('#show-all-underground-labels'),
      staleUnderworldLabelMaster: buttonInfo('#show-all-underworld-labels'),
      undergroundLabelButtonsBefore,
      undergroundLabelButtonsAfter,
      undergroundLabelContainerCount: document.querySelectorAll('#underground-label-toggles-grid .toggle-btn').length,
    };
  })()`;
  const evaluation = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, sessionId);
  return evaluation.result.value;
});

assert(result.readyState === 'complete', 'Map page did not finish loading', result);
assert(result.lspButtons.length >= 2, 'Expected duplicate LSP subtype buttons across categories', result.lspButtons);
assert(result.lspButtons.every((button) => button.hasCanvas), 'Every LSP subtype button should keep its own canvas icon', result.lspButtons);
assert(result.undergroundLabelMaster, 'Expected underground label master button to exist', result);
assert(!result.staleUnderworldLabelMaster, 'Stale show-all-underworld-labels ID should not exist', result);
assert(result.undergroundLabelContainerCount > 0, 'Expected underground label buttons to be generated', result);
assert(result.undergroundLabelButtonsAfter.every((button) => !button.active), 'Underground label master toggle should deactivate all enabled underground label buttons', result.undergroundLabelButtonsAfter);

console.log(JSON.stringify({ ok: true, result }, null, 2));
