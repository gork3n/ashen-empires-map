#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const reportsDir = path.join(root, 'reports');

const dataModules = [
  { key: 'overworldMarkers', label: 'Overworld markers', file: 'js/markers.js', exportName: 'mapMarkers', kind: 'marker' },
  { key: 'underworldMarkers', label: 'Underworld markers', file: 'js/underworld-markers.js', exportName: 'underworldMapMarkers', kind: 'marker' },
  { key: 'overworldLabels', label: 'Overworld labels', file: 'js/labels.js', exportName: 'mapLabels', kind: 'label' },
  { key: 'underworldLabels', label: 'Underworld labels', file: 'js/underworld-labels.js', exportName: 'underworldMapLabels', kind: 'label' },
];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function fileExists(projectPath) {
  if (!projectPath || /^(https?:|data:)/i.test(projectPath)) return true;
  return fs.existsSync(path.join(root, projectPath));
}

function normalizeWhitespace(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function detailsText(entry) {
  return normalizeWhitespace(JSON.stringify(entry.details ?? entry));
}

function isPlaceholderText(value) {
  return /coming soon|more information|placeholder|todo|tbd/i.test(value);
}

function flattenGroups(grouped) {
  const rows = [];
  for (const [group, entries] of Object.entries(grouped ?? {})) {
    if (!Array.isArray(entries)) continue;
    entries.forEach((entry, index) => {
      rows.push({ ...entry, _group: group, _index: index });
    });
  }
  return rows;
}

async function importProjectModule(file) {
  // The site is browser-ESM, but this repo does not declare package.json type=module.
  // Copying to a temporary .mjs file lets Node import the data without changing app runtime.
  const abs = path.join(root, file);
  const tmpDir = path.join(root, '.map-health-cache');
  ensureDir(tmpDir);
  const tmpFile = path.join(tmpDir, file.replace(/[\\/]/g, '__').replace(/\.js$/, '.mjs'));
  fs.writeFileSync(tmpFile, fs.readFileSync(abs, 'utf8'));
  return import(`${pathToFileURL(tmpFile).href}?t=${Date.now()}`);
}

function getImagePath(entry, kind) {
  if (kind === 'marker') return entry.details?.image;
  return entry.image ?? entry.details?.image;
}

function getCoordinates(entry, kind) {
  if (kind === 'marker') return entry.details?.coordinates ?? entry.coordinates;
  return entry.coordinates ?? entry.details?.coordinates;
}

function getTitle(entry) {
  return entry.details?.title ?? entry.title ?? entry.tooltip ?? entry.text ?? entry.name ?? '(untitled)';
}

function summarizeBy(entries, getter) {
  const counts = new Map();
  for (const entry of entries) {
    const key = getter(entry) || 'unknown';
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function auditCollection({ key, label, file, kind }, entries, allIds) {
  const imageRows = [];
  const missingImages = [];
  const placeholderRows = [];
  const connectorRows = [];
  const coordinateConnectorRows = [];
  const idConnectorRows = [];
  const missingTargetRows = [];
  const zeroTargetRows = [];
  const ids = [];

  entries.forEach((entry) => {
    const title = getTitle(entry);
    const image = getImagePath(entry, kind);
    const coordinates = getCoordinates(entry, kind);
    const rowBase = {
      file,
      group: entry._group,
      index: entry._index,
      id: entry.id ?? null,
      type: entry.type ?? entry.category ?? null,
      title,
      tooltip: entry.tooltip ?? null,
      text: entry.text ?? null,
      region: entry.region ?? entry.details?.region ?? null,
      place: entry.place ?? entry.details?.place ?? null,
      coordinates: coordinates ?? null,
    };

    if (entry.id) ids.push(entry.id);

    if (image !== undefined) {
      const imageRow = { ...rowBase, image: image || '' };
      imageRows.push(imageRow);
      if (image && !fileExists(image)) missingImages.push(imageRow);
    }

    if (isPlaceholderText(detailsText(entry))) {
      placeholderRows.push(rowBase);
    }

    const details = entry.details ?? {};
    if (details.switchTo) {
      const connector = {
        ...rowBase,
        switchTo: details.switchTo,
        flyTo: details.flyTo ?? null,
        flyToId: details.flyToId ?? null,
      };
      connectorRows.push(connector);
      if (details.flyToId) idConnectorRows.push(connector);
      if (details.flyTo && !details.flyToId) coordinateConnectorRows.push(connector);
      if (!details.flyTo && !details.flyToId) missingTargetRows.push(connector);
      if (details.flyTo && Number(details.flyTo.x) === 0 && Number(details.flyTo.y) === 0) {
        zeroTargetRows.push(connector);
      }
    }
  });

  const duplicateIds = [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
  const danglingFlyToIds = idConnectorRows.filter((row) => !allIds.has(row.flyToId));

  return {
    key,
    label,
    file,
    kind,
    totals: {
      entries: entries.length,
      groups: new Set(entries.map((entry) => entry._group)).size,
      ids: ids.length,
      uniqueIds: new Set(ids).size,
      duplicateIds: duplicateIds.length,
      imageFields: imageRows.length,
      emptyImageFields: imageRows.filter((row) => !row.image).length,
      missingImages: missingImages.length,
      placeholders: placeholderRows.length,
      connectors: connectorRows.length,
      coordinateConnectors: coordinateConnectorRows.length,
      idConnectors: idConnectorRows.length,
      connectorsMissingTarget: missingTargetRows.length,
      zeroZeroConnectorTargets: zeroTargetRows.length,
      danglingFlyToIds: danglingFlyToIds.length,
    },
    topTypes: summarizeBy(entries, (entry) => entry.type ?? entry.category ?? 'unknown').slice(0, 15),
    topRegions: summarizeBy(entries, (entry) => entry.region ?? entry.details?.region ?? 'unknown').slice(0, 15),
    samples: {
      missingImages: missingImages.slice(0, 50),
      placeholders: placeholderRows.slice(0, 50),
      zeroZeroConnectorTargets: zeroTargetRows.slice(0, 50),
      coordinateConnectors: coordinateConnectorRows.slice(0, 50),
      danglingFlyToIds: danglingFlyToIds.slice(0, 50),
      duplicateIds,
    },
    findings: {
      missingImages,
      placeholders: placeholderRows,
      zeroZeroConnectorTargets: zeroTargetRows,
      coordinateConnectors: coordinateConnectorRows,
      danglingFlyToIds,
      duplicateIds,
    },
  };
}

function csvEscape(value) {
  const s = typeof value === 'string' ? value : JSON.stringify(value ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function writeCsv(fileName, rows) {
  const columns = [
    'file', 'group', 'index', 'id', 'type', 'title', 'tooltip', 'text',
    'region', 'place', 'coordinates', 'image', 'switchTo', 'flyTo', 'flyToId'
  ];
  const lines = [columns.join(',')];
  for (const row of rows) {
    lines.push(columns.map((column) => csvEscape(row[column])).join(','));
  }
  fs.writeFileSync(path.join(reportsDir, fileName), `${lines.join('\n')}\n`);
}

function makeMarkdown(report) {
  const lines = [];
  lines.push('# Ashen Empires Map Health Report');
  lines.push('');
  lines.push(`Generated: ${report.generatedAt}`);
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push('| Collection | Entries | Missing images | Placeholders | Connectors | `flyTo` | `flyToId` | `0,0` targets | Dangling IDs |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|');
  for (const audit of report.audits) {
    const t = audit.totals;
    lines.push(`| ${audit.label} | ${t.entries} | ${t.missingImages} | ${t.placeholders} | ${t.connectors} | ${t.coordinateConnectors} | ${t.idConnectors} | ${t.zeroZeroConnectorTargets} | ${t.danglingFlyToIds} |`);
  }
  lines.push('');
  lines.push('## Recommended next queues');
  lines.push('');
  lines.push('1. Replace `0,0` connector targets first; those are visibly broken navigation points.');
  lines.push('2. Migrate connector pairs from coordinate `flyTo` to stable `flyToId` in small batches.');
  lines.push('3. Fill missing marker images by region/place using the generated CSV checklists.');
  lines.push('4. Replace placeholder info text after connector navigation is trustworthy.');
  lines.push('5. Add housing realm as a data/tile layer only after the tile storage plan is settled.');
  lines.push('');

  for (const audit of report.audits) {
    lines.push(`## ${audit.label}`);
    lines.push('');
    lines.push('```json');
    lines.push(JSON.stringify(audit.totals, null, 2));
    lines.push('```');
    lines.push('');
    if (audit.topTypes.length) {
      lines.push('### Top types');
      lines.push('');
      for (const [type, count] of audit.topTypes.slice(0, 10)) {
        lines.push(`- ${type}: ${count}`);
      }
      lines.push('');
    }
    if (audit.samples.zeroZeroConnectorTargets.length) {
      lines.push('### First `0,0` connector targets');
      lines.push('');
      for (const row of audit.samples.zeroZeroConnectorTargets.slice(0, 15)) {
        lines.push(`- ${row.file} ${row.group}[${row.index}] — ${row.title} (${row.place ?? 'unknown place'})`);
      }
      lines.push('');
    }
    if (audit.samples.missingImages.length) {
      lines.push('### First missing images');
      lines.push('');
      for (const row of audit.samples.missingImages.slice(0, 15)) {
        lines.push(`- ${row.image} — ${row.title} (${row.place ?? 'unknown place'})`);
      }
      lines.push('');
    }
  }

  lines.push('## Generated files');
  lines.push('');
  lines.push('- `reports/map-health.json` — complete machine-readable report.');
  lines.push('- `reports/map-health.md` — human-readable summary.');
  lines.push('- `reports/missing-images.csv` — image backlog.');
  lines.push('- `reports/placeholder-details.csv` — incomplete lore/info backlog.');
  lines.push('- `reports/connector-coordinate-links.csv` — coordinate-based connectors to migrate.');
  lines.push('- `reports/connector-zero-targets.csv` — visibly broken `x:0, y:0` connector targets.');
  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function main() {
  ensureDir(reportsDir);

  const loaded = [];
  const allIds = new Set();
  for (const moduleDef of dataModules) {
    const mod = await importProjectModule(moduleDef.file);
    const data = mod[moduleDef.exportName];
    const entries = flattenGroups(data);
    entries.forEach((entry) => { if (entry.id) allIds.add(entry.id); });
    loaded.push({ ...moduleDef, entries });
  }

  const audits = loaded.map((collection) => auditCollection(collection, collection.entries, allIds));
  const generatedAt = new Date().toISOString();
  const report = {
    generatedAt,
    project: 'ashen-empires-map',
    totals: {
      entries: audits.reduce((sum, audit) => sum + audit.totals.entries, 0),
      missingImages: audits.reduce((sum, audit) => sum + audit.totals.missingImages, 0),
      placeholders: audits.reduce((sum, audit) => sum + audit.totals.placeholders, 0),
      connectors: audits.reduce((sum, audit) => sum + audit.totals.connectors, 0),
      coordinateConnectors: audits.reduce((sum, audit) => sum + audit.totals.coordinateConnectors, 0),
      idConnectors: audits.reduce((sum, audit) => sum + audit.totals.idConnectors, 0),
      zeroZeroConnectorTargets: audits.reduce((sum, audit) => sum + audit.totals.zeroZeroConnectorTargets, 0),
      danglingFlyToIds: audits.reduce((sum, audit) => sum + audit.totals.danglingFlyToIds, 0),
    },
    audits,
  };

  fs.writeFileSync(path.join(reportsDir, 'map-health.json'), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(path.join(reportsDir, 'map-health.md'), makeMarkdown(report));

  writeCsv('missing-images.csv', audits.flatMap((audit) => audit.findings.missingImages));
  writeCsv('placeholder-details.csv', audits.flatMap((audit) => audit.findings.placeholders));
  writeCsv('connector-coordinate-links.csv', audits.flatMap((audit) => audit.findings.coordinateConnectors));
  writeCsv('connector-zero-targets.csv', audits.flatMap((audit) => audit.findings.zeroZeroConnectorTargets));

  fs.rmSync(path.join(root, '.map-health-cache'), { recursive: true, force: true });

  console.log(`Map health report written to ${path.relative(root, path.join(reportsDir, 'map-health.md'))}`);
  console.log(JSON.stringify(report.totals, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
