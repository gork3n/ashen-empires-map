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
  underworld_hole: {
    icon: "icons/hole.svg",
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
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Exi1t",
        switchTo: "overworld",
        flyTo: { x: 761, y: 3322, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 852, y: 3355 },
        image: "images/markers/Termigon_Pit_Exit.png",
        lore: "Exit to Darkwoods above Termigon Pit.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 2 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 938, y: 3317, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 858, y: 3349 },
        image: "images/markers/Termigon_Pit_Level_2_Entrance.png",
        lore: "Entrance to Termigon Pit Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 2 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 858, y: 3349, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 938, y: 3317 },
        image: "images/markers/Termigon_Pit_Level_2_Exit.png",
        lore: "Exit to Termigon Pit Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 2 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 938, y: 3317, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 858, y: 3349 },
        image: "images/markers/Termigon_Pit_Level_2_Entrance.png",
        lore: "Entrance to Termigon Pit Level below Termigon Pit.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Entrance",
        switchTo: "underground",
        flyTo: { x: 792, y: 3303, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 968, y: 3303 },
        image: "images/markers/Underground_Connector_Entrance.png",
        lore: "Entrance to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Entrance",
        switchTo: "underground",
        flyTo: { x: 791, y: 3287, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 967, y: 3287 },
        image: "images/markers/Underground_Connector_Entrance.png",
        lore: "Entrance to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Exit",
        switchTo: "underground",
        flyTo: { x: 968, y: 3303, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 792, y: 3303 },
        image: "images/markers/Underground_Connector_Exit.png",
        lore: "Exit to Underground Connector above Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 3 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 3 Entrance",
        switchTo: "underground",
        flyTo: { x: 983, y: 3288, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 807, y: 3288 },
        image: "images/markers/Termigon_Pit_Level_3_Entrance.png",
        lore: "Entrance to Termigon Pit Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 4 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 4 Entrance",
        switchTo: "underground",
        flyTo: { x: 1034, y: 3368, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 1034, y: 3304 },
        image: "images/markers/Termigon_Pit_Level_4_Entrance.png",
        lore: "Entrance to Termigon Pit Level 4.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 4 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 4 Exit",
        switchTo: "underground",
        flyTo: { x: 1034, y: 3304, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 1034, y: 3368 },
        image: "images/markers/Termigon_Pit_Level_4_Exit.png",
        lore: "Exit to Termigon Pit Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 5 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 5 Entrance",
        switchTo: "underground",
        flyTo: { x: 1076, y: 3286, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 1028, y: 3286 },
        image: "images/markers/Termigon_Pit_Level_5_Entrance.png",
        lore: "Entrance to Termigon Pit Level 5.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Level 5 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Level 5 Exit",
        switchTo: "underground",
        flyTo: { x: 1028, y: 3286, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 1076, y: 3286 },
        image: "images/markers/Termigon_Pit_Level_5_Exit.png",
        lore: "Exit to Termigon Pit Level 4.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Entrance",
        switchTo: "underground",
        flyTo: { x: 807, y: 3288, zoom: 6 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 983, y: 3288 },
        image: "images/markers/Underground_Connector_Entrance.png",
        lore: "Entrance to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Triddle Cave Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Triddle Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 799, y: 3335, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 792, y: 3330 },
        image: "images/markers/Triddle_Cave_Exit.png",
        lore: "Exit to Darkwoods above Triddle Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Triddle Cave Level 2 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Triddle Cave Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 983, y: 3335, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 807, y: 3335 },
        image: "images/markers/Triddle_Cave_Level_2_Entrance.png",
        lore: "Entrance to Triddle Cave Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Triddle Cave Level 2 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Triddle Cave Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 807, y: 3335, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 983, y: 3335 },
        image: "images/markers/Triddle_Cave_Level_2_Exit.png",
        lore: "Exit to Triddle Cave Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Entrance",
        switchTo: "underground",
        flyTo: { x: 807, y: 3304, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 983, y: 3304 },
        image: "images/markers/Underground_Connector_Entrance.png",
        lore: "Entrance to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Exit",
        switchTo: "underground",
        flyTo: { x: 983, y: 3304, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 807, y: 3304 },
        image: "images/markers/Underground_Connector_Exit.png",
        lore: "Exit to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Exit",
        switchTo: "underground",
        flyTo: { x: 967, y: 3287, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 791, y: 3287 },
        image: "images/markers/Underground_Connector_Exit.png",
        lore: "Exit to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Underground Connector Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Underground Connector Entrance",
        switchTo: "underground",
        flyTo: { x: 791, y: 3287, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 967, y: 3287 },
        image: "images/markers/Underground_Connector_Entrance.png",
        lore: "Entrance to Underground Connector.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Astari Rune Shelter Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Astari Rune Shelter Entrance",
        switchTo: "underground",
        flyTo: { x: 779, y: 3251, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 955, y: 3253 },
        image: "images/markers/Astari_Rune_Shelter_Entrance.png",
        lore: "Entrance to Astari Rune Shelter.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Astari Rune Shelter Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Astari Rune Shelter Exit",
        switchTo: "underground",
        flyTo: { x: 955, y: 3253, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 779, y: 3251 },
        image: "images/markers/Astari_Rune_Shelter_Exit.png",
        lore: "Exit to Astari Rune Shelter.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Astari Rune Shelter Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Astari Rune Shelter Exit",
        switchTo: "overworld",
        flyTo: { x: 813, y: 3221, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 813, y: 3223 },
        image: "images/markers/Astari_Rune_Shelter_Exit.png",
        lore: "Exit to Darkwoods above Astari Rune Shelter.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Ant Mound Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Ant Mound Exit",
        switchTo: "overworld",
        flyTo: { x: 839, y: 3271, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 839, y: 3271 },
        image: "images/markers/Ant_Mound_Exit.png",
        lore: "Exit to Darkwoods above Ant Mound.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Ant Mound Level 2 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Ant Mound Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 1000, y: 3271, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 824, y: 3271 },
        image: "images/markers/Ant_Mound_Exit.png",
        lore: "Exit to Darkwoods above Ant Mound.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Ant Mound Level 2 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Ant Mound Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 824, y: 3271, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 1000, y: 3271 },
        image: "images/markers/Ant_Mound_Level_2_Exit.png",
        lore: "Exit to Darkwoods above Ant Mound Level 2.",
        npcs: [],
        links: [],
      },
    },

    // City: Whisperdale Undergrounds
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cherla Catacombs Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Chlera Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 423, y: 3430, zoom: 5 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 423, y: 3431 },
        image: "images/markers/Grell_Ladder_Exit.png",
        lore: "Exit to Chlera above Chlera Catacombs.",
        npcs: [],
        links: [],
      },
    },
    // Place: Cathedral of Joyous Afterlife underground
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cathedral of Joyous Afterlife Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Cathedral of Joyous Afterlife Exit",
        switchTo: "overworld",
        flyTo: { x: 633, y: 3187, zoom: 4 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 712, y: 3125 },
        image: "images/markers/Cathedral_of_Joyous_Afterlife_Ladder_Exit.png",
        lore: "Exit to Chlera above Cathedral of Joyous Afterlife.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cathedral of Joyous Afterlife Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Cathedral of Joyous Afterlife Exit",
        switchTo: "overworld",
        flyTo: { x: 628, y: 3198, zoom: 4 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 647, y: 3144 },
        image: "images/markers/Cathedral_of_Joyous_Afterlife_Exit.png",
        lore: "Exit to Chlera above Cathedral of Joyous Afterlife.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Cathedral of Joyous Afterlife Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Cathedral of Joyous Afterlife Exit",
        switchTo: "overworld",
        flyTo: { x: 680, y: 3319, zoom: 4 },// The coordinates for the Ladder inside the Grell Tunnels underground area.
        coordinates: { x: 679, y: 3316 },
        image: "images/markers/Cathedral_of_Joyous_Afterlife_Exit.png",
        lore: "Exit to Chlera above Cathedral of Joyous Afterlife.",
        npcs: [],
        links: [],
      },
    },

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
      tooltip: "Desprail Tunnels Exit",
      region: "Battle Plains",
      place: "Chlera",
      details: {
        title: "Desprail Tunnels Exit",
        switchTo: "overworld",
        flyTo: { x: 2230, y: 3198, zoom: 5 },
        coordinates: { x: 2230, y: 3198 },
        image: "images/markers/Desprail_Tunnels_Exit.png",
        lore: "Exit to Chlera above Desprail Tunnels.",
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
        flyTo: { x: 2136, y: 3155, zoom: 5 },
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