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
  underworld_quest: {
    icon: "icons/scroll-unfurled.svg",
    color: "#ccae03ff", // Goldend Ochre
  },
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
  underworld_cave: {
    icon: "icons/cave-entrance.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underworld_well: {
    icon: "icons/well.svg",
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
    // Place: Emporium Abbey NPCs
    {
      category: "npc",
      type: "underworld_quest",
      tooltip: "Holendar",
      region: "Highlands",
      place: "Emporium Abbey",
      details: {
        title: "Holendar",
        coordinates: { x: 2760, y: 3190 },
        image: "images/markers/Holendar.png",
        lore: "Holendar in the Emporium Abbey underground is part of the Guild Quest.",
        npcs: [],
        links: [{ text: "Ashen Empires Wiki (Guild Quest #5)", url: "https://ashenempires.fandom.com/wiki/Guild_Quest#5.)_Holendar" }],
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
      tooltip: "Jeel Catacombs Exit",
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
      tooltip: "Krythan Crypt Exit",
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

    // Region: Black Swamp Undergrounds

    // Region: Battle Plains Undergrounds
    // City: Chlera Undergrounds
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cherla Catacombs Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Chlera Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 2330, y: 3620 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 2359, y: 3571 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Chlera above Chlera Catacombs.",
        npcs: [],
        links: [],
      },
    },
    // City: Desprail Undergrounds x: 2119, y: 3138,
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cherla Catacombs Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Chlera Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 2230, y: 3198, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 2230, y: 3198 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Chlera above Chlera Catacombs.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Desprail Cave Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Desprail Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 2136, y: 3155, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 2119, y: 3138 },
        image: "images/markers/Desprail_Cave_Exit.png",
        lore: "Exit to Desprail Cave.",
        npcs: [],
        links: [],
      },
    },


    // Region: Highlands Undergrounds
    // Place: Minotaur Maze underground
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Minotaur Maze Exit",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Grell Exit",
        switchTo: "overworld",
        flyTo: { x: 2996, y: 3044 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 3411, y: 3105 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Highlands above Grell.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Minotaur Maze Exit",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Grell Exit",
        switchTo: "overworld",
        flyTo: { x: 2996, y: 3044 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 3419, y: 3105 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Highlands above Grell.",
        npcs: [],
        links: [],
      },
    },
    // Place: Vel Dran Cave underground
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Vel Dran Cave Exit",
      region: "Highlands",
      place: "Vel Dran Cave",
      details: {
        title: "Vel Dran Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 3288, y: 3298 },// The coordinates for the Ladder inside the Vel Dran Cave underground area.
        coordinates: { x: 3288, y: 3298 },
        image: "images/markers/Vel_Dran_Cave_Ladder_Exit.png",
        lore: "Exit to Highlands above Vel Dran Cave.",
        npcs: [],
        links: [],
      },
    },

    // City: Grell underground
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Grell Tunnels Exit",
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
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Vel Dran Exit",
      region: "Highlands",
      place: "Grell",
      details: {
        title: "Vel Dran Exit",
        switchTo: "overworld",
        flyTo: { x: 3127, y: 3222, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 3097, y: 3221 },
        image: "images/markers/Vel_Dran_Cave_Ladder_Exit.png",
        lore: "Exit to Vel Dran.",
        npcs: [],
        links: [],
      },
    },
  ],
};