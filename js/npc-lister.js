import { mapMarkers } from "./markers.js";

/**
 * Gathers all NPCs from markers and groups them by region, then by place.
 *
 * @returns {Object} An object where keys are region names. Each region contains
 *                   an object of places, and each place contains an array of NPCs.
 */
function getNpcsGroupedByRegionAndPlace() {
  const regions = {};

  const processMarkers = (markerCategory) => {
    markerCategory.forEach((marker) => {
      // Only process markers that are explicitly categorized as 'npc'.
      if (marker.category === 'npc') {
        const placeName = marker.place;
        const regionName = marker.region || 'Uncategorized';
        const npcName = marker.details ? marker.details.title : null;

        // We need a place name and an NPC name to proceed.
        if (placeName && npcName) {
          // If the region doesn't exist in our structure, create it.
          if (!regions[regionName]) {
            regions[regionName] = {};
          }

          // If the place doesn't exist within the region, create it.
          if (!regions[regionName][placeName]) {
            regions[regionName][placeName] = {
              name: placeName,
              npcs: []
            };
          }

          // Add the NPC to the location, checking for duplicates.
          if (!regions[regionName][placeName].npcs.some((existingNpc) => existingNpc.name === npcName)) {
            // The 'info' property is not available on individual markers, so we just add the name.
            regions[regionName][placeName].npcs.push({ name: npcName, info: '' });
          }
        }
      }
    });
  };

  // Process ONLY the categories from mapMarkers
  Object.values(mapMarkers).forEach(processMarkers);

  return regions;
}

/**
 * Renders the grouped NPC list into a specified HTML container.
 * @param {Object} regionsData - The data object from getNpcsGroupedByRegionAndPlace.
 * @param {string} containerId - The ID of the HTML element to render into.
 */
function renderNpcListToHtml(regionsData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }

  let html = '<h1>NPCs by Location</h1>';

  // Sort location keys alphabetically for a clean, predictable order.
  const sortedRegionKeys = Object.keys(regionsData).sort();

  sortedRegionKeys.forEach((regionName) => {
    const placesInRegion = regionsData[regionName];
    const sortedPlaceKeys = Object.keys(placesInRegion).sort();

    html += `<div class="region-group">`;
    html += `<h2 class="region-title">${regionName}</h2>`;

    sortedPlaceKeys.forEach((placeName) => {
      const place = placesInRegion[placeName];
      // Sort NPCs within each location alphabetically.
      const sortedNpcs = place.npcs.sort((a, b) => a.name.localeCompare(b.name));

      html += `<div class="location-group">`;
      html += `<h3 class="location-title">${place.name}</h3>`;
      html += `<ul>`;
      sortedNpcs.forEach((npc) => {
        html += `<li><strong>${npc.name}</strong>${npc.info ? `: ${npc.info}` : ""}</li>`;
      });
      html += `</ul></div>`;
    });
    html += `</div>`;
  });

  container.innerHTML = html;
}

// --- Main Execution ---
// When this script is loaded, get the data and render it.
const npcData = getNpcsGroupedByRegionAndPlace();
renderNpcListToHtml(npcData, 'npc-list-container');