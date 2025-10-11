/**
 * This file contains the marker data specifically for the underground map.
 * The structure is identical to markers.js, but the coordinates and markers
 * will be unique to the underground layer.
 */

export const undergroundMapMarkers = {
  portals: [
    // Add underground portal markers here
  ],
  shops: [
    // Add underground shop markers here
  ],
  services_npcs: [
    // Add underground service/NPC markers here
  ],
  interests: [
    
  ],
  undergrounds: [

    // Region: Highlands Undergrounds
    // Grell Tunnels
    {
      category: "underground",
      type: "underground_ladder",
      tooltip: "Grell Tunnels Exit<br><small>(Ctrl+Click for details)</small>",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Grell Exit",
        switchTo: "overworld",
        flyTo: { x: 3240, y: 3607 },
        // The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 2918, y: 3365 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Highlands above Grell.",
        npcs: [],
        links: [],
      },
    },
  ],
};