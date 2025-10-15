/**
 * This file contains the marker data specifically for the underground map.
 * The structure is identical to markers.js, but the coordinates and markers
 * will be unique to the underground layer.
 */

export const undergroundMarkerStyles = {
  // Portals
  underworld_portal_ancient: {
    icon: "icons/ancient-portal.svg",
    color: "#A9A9A9", // DarkGray
  },

  // Shops
  underworld_shop_generic: {
    icon: "icons/hanging-sign.svg",
    color: "#32CD32", // LimeGreen
  },

  // Services and NPCs
  underworld_inn_keeper: {
    icon: "icons/candle-holder.svg",
    color: "#5ba8e7ff", // Light SteelBlue
  },
  underworld_town_guardian: {
    icon: "icons/guards.svg",
    color: "#4682B4", // SteelBlue
  },
  underworld_town_wizard_of_insight: {
    icon: "icons/wizard-staff.svg",
    color: "#4682B4", // SteelBlue
  },
  underworld_bank: {
    icon: "icons/knapsack.svg",
    color: "#c9b128ff", // GoldenRod
  },

  // Underground Entrances/Exits
  underworld_stairs: {
    icon: "icons/3d-stairs.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underworld_ladder: {
    icon: "icons/ladder.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underworld_crypt: {
    icon: "icons/crypt-entrance.svg",
    color: "#d36517ff", // SaddleBrown
  },
};
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
    // Region: Highlands Undergrounds
    // Grell Tunnels
    {
      category: "npc",
      type: "underworld_inn_keeper",
      tooltip: "Grell Innkeeper",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Grell Innkeeper",
        coordinates: { x: 2860, y: 3481 },
        image: "images/markers/image_coming_soon.png",
        lore: "An innkeeper deep within the Grell tunnels.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "npc",
      type: "underworld_town_guardian",
      tooltip: "Town Guardian (Grell)",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Town Guardian",
        coordinates: { x: 2860, y: 3460 },
        image: "images/markers/image_coming_soon.png",
        lore: "The Town Guardian in Grell.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "npc",
      type: "underworld_town_wizard_of_insight",
      tooltip: "Town Wizard of Insight (Grell)",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Town Wizard of Insight",
        coordinates: { x: 2860, y: 3465 },
        image: "images/markers/image_coming_soon.png",
        lore: "The Town Wizard of Insight in Grell.",
        npcs: [],
        links: [],
      },
    },
  ],
  interests: [
    
  ],
  undergrounds: [
    // Region: Valinor Undergrounds

    // Region: Silvest Valley Undergrounds

    // Region: Krythan Undergrounds
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Jeel Catacombs Exit<br><small>(Ctrl+Click for details)</small>",
      region: "Krythan",
      place: "Jeel Catacombs",
      details: {
        title: "Jeel Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 293, y: 833 },        
        coordinates: { x: 293, y: 833 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Jeel_Catacombs_Ladder_Exit.png",
        lore: "Exit to Jeel above Jeel Catacombs.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_crypt",
      tooltip: "Krythan Crypt Exit<br><small>(Ctrl+Click for details)</small>",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Exit",
        switchTo: "overworld",
        flyTo: { x: 435, y: 851 },        
        coordinates: { x: 435, y: 851 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Exit.png",
        lore: "Exit to Krythan above Krythan Crypt.",
        npcs: [],
        links: [],
      },
    },

    // Region: Darkwoods Undergrounds


    // Region: Highlands Undergrounds
    // Grell Tunnels
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Grell Tunnels Exit<br><small>(Ctrl+Click for details)</small>",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Grell Exit",
        switchTo: "overworld",
        flyTo: { x: 3240, y: 3607 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 2918, y: 3365 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Highlands above Grell.",
        npcs: [],
        links: [],
      },
    },
  ],
};