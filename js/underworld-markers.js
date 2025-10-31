/**
 * This file contains the marker data specifically for the underground map.
 * The structure is identical to markers.js, but the coordinates and markers
 * will be unique to the underground layer.
 */

export const underworldMarkerStyles = {
  // Portals
  underworld_portal_ancient: {
    icon: "icons/ancient-portal.svg",
    color: "#A9A9A9", // DarkGray
  },
  underworld_portal_blue: {
    icon: "icons/blue-portal.svg", // Using dungeon gate for blue instance portals
    color: "#00BFFF", // DeepSkyBlue
  },
  underworld_portal_small: {
    icon: "icons/small-blue.svg", // Using crystal for small, magical portals
    color: "#DA70D6", // Orchid
  },

  // Shops
  underworld_shop_generic: {
    icon: "icons/hanging-sign.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_weaponry: {
    icon: "icons/crossed-swords.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_armory: {
    icon: "icons/round-shield.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_provisioner: {
    icon: "icons/barrel.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_pub: {
    icon: "icons/beer-stein.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_bakery: {
    icon: "icons/cook.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_jewelry: {
    icon: "icons/big-diamond-ring.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_carpentry: {
    icon: "icons/hand-saw.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_leather: {
    icon: "icons/leather-boot.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_farming: {
    icon: "icons/spade.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_blacksmith: {
    icon: "icons/anvil.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_magic: {
    icon: "icons/potion-ball.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_evil_trinket: {
    icon: "icons/evil-book.svg",
    color: "#9370DB", // MediumPurple
  },
  underworld_shop_runecrafting: {
    icon: "icons/rupee.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_survey: {
    icon: "icons/scroll-unfurled.svg",
    color: "#32CD32", // LimeGreen
  },
  underworld_shop_scrolls: {
    icon: "icons/tied-scroll.svg",
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
  underworld_mine: {
    icon: "icons/mine.svg",
    color: "#d36517ff", // SaddleBrown
  },
};
/**
 * This file contains the marker data specifically for the underground map.
 * The structure is identical to markers.js, but the coordinates and markers
 * will be unique to the underground layer.
 */

export const underworldMapMarkers = {
  portals: [
    // Place: Crypts of Ryonkah Portal
    {
      category: "underground",
      type: "underworld_portal_small",
      tooltip: "Crypts of Ryonkah Portal",
      region: "Krythan",
      place: "Crypts of Ryonkah",
      details: {
        title: "Jeel Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 855, y: 2775, zoom: 5 },        
        coordinates: { x: 981, y: 2898 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Jeel_Catacombs_Ladder_Exit.png",
        lore: "Exit to Jeel above Jeel Catacombs.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_portal_small",
      tooltip: "Crypts of Ryonkah Portal",
      region: "Krythan",
      place: "Crypts of Ryonkah",
      details: {
        title: "Jeel Catacombs Exit",
        switchTo: "overworld",
        flyTo: { x: 981, y: 2898, zoom: 5 },        
        coordinates: { x: 855, y: 2775 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Jeel_Catacombs_Ladder_Exit.png",
        lore: "Exit to Jeel above Jeel Catacombs.",
        npcs: [],
        links: [],
      },
    },
    // Region: Western Isles Portals
    // Place: Spore Cave Portal
    {
      category: "underground",
      type: "underworld_portal_small",
      tooltip: "Spore Cave Level 4 Portal",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 4 Portal",
        switchTo: "underground",
        flyTo: { x: 1750, y: 2903, zoom: 5 },        
        coordinates: { x: 1508, y: 2939 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Spore_Cave_Portal.png",
        lore: "Entrance to Spore Cave Level 4, Spore Summoners dwelling.",
        npcs: [],
        links: [],
      },
    },
    // Region: Sands of Creation Portals
    // Island: Ruhura Portals
    {
      category: "underground",
      type: "underworld_portal_small",
      tooltip: "Mukarramma Dungeon Exit Portal",
      region: "Sands of Creation",
      place: "Mukarramma Dungeon",
      details: {
        title: "Mukarramma Dungeon Exit Portal",
        switchTo: "underground",
        flyTo: { x: 948, y: 4006, zoom: 5 },        
        coordinates: { x: 149, y: 3797 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Portal_Mukarramma_Dungeon.png",
        lore: "Exit to Mukarramma above the Mukarramma Dungeon.",
        npcs: [],
        links: [],
      },
    },
    // Island: Khafra Portals
    {
      category: "underground",
      type: "underworld_portal_small",
      tooltip: "Portal to Shadow Dragons",
      region: "Sands of Creation",
      place: "Elemental Cave Khafra Side",
      details: {
        title: "Portal to Shadow Dragons",
        switchTo: "overworld",
        flyTo: { x: 69, y: 3694, zoom: 5 },        
        coordinates: { x: 193, y: 3727 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Portal_Shadow_Dragons.png",
        lore: "Portal to the Shadow Dragons from the Elemental Cave Khafra Side.",
        npcs: [],
        links: [],
      },
    },

  ],
  shops: [
    // Region: 1 - Valinor Shops

    // Region: 2 - Silvest Valley Shops

    // Region: 3 - Krythan Shops

    // Region: 4 - Darkwoods Shops

    // Region: 5 - Battle Plains Shops

    // Region: 6 - Black Swamp Shops

    // Region: 7 - Highlands Shops

    // Region: 8 - Western Isles Shops

    // Region: 9 - Valley of Giants Shops

    // Region: 10 - Heartwood Coast Shops

    // Region: 11 - Tundria Shops

    // Region: 12 - Sands of Creation Shops
    // City: Ruhura Shops
    {
      category: "npc",
      type: "underworld_shop_leather",
      tooltip: "Hamad's Leatherworking Shop",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Hamad's Leatherworking Shop",
        coordinates: { x: 372, y: 4033 },
        image: "images/markers/Hamad's_Leatherworking_Shop.png",
        lore: "More information about Hamad's Leatherworking Shop is coming soon.",
        currency: "gold",
        npcs: [],
        links: [],
      },
    },

    // Region: 13 - Breakwater Shops

    // Region: 14 - Broken Finger Shops
  ],
  services_npcs: [
    // Region: 7 - Highlands Undergrounds
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
        image: "images/markers/Grell_Innkeeper.png",
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
        image: "images/markers/Grell_Town_Guardian.png",
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
        image: "images/markers/Grell_Town_Wizard_of_Insight.png",
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
    // Region: 1 - Valinor Undergrounds

    // Region:  2 - Silvest Valley Undergrounds
    // City: Silvest Undergrounds
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Silvest Library Basement Exit",
      region: "Krythan",
      place: "Silvest Library",
      details: {
        title: "Silvest Library Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 1149, y: 1362, zoom: 6 },        
        coordinates: { x: 1150, y: 1365 },// The coordinates for the Ladder inside the Silvest Library underground area.
        image: "images/markers/Silvest_Library_Basement_Exit.png",
        lore: "Exit to Silvest Library above Silvest Library Basement.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Coenred's Provisioner Shop Basement Exit",
      region: "Krythan",
      place: "Coenred's Provisioner Shop",
      details: {
        title: "Coenred's Provisioner Shop Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 1149, y: 1362, zoom: 6 },        
        coordinates: { x: 1132, y: 1363 },// The coordinates for the Ladder inside the Coenred's Provisioner Shop underground area.
        image: "images/markers/Coenred_Provisioner_Shop_Basement_Exit.png",
        lore: "Exit to Coenred's Provisioner Shop above Coenred's Provisioner Shop Basement.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_mine",
      tooltip: "Silvest Mines Exit",
      region: "Krythan",
      place: "Silvest Mines",
      details: {
        title: "Silvest Mines Exit",
        switchTo: "overworld",
        flyTo: { x: 1015, y: 1110, zoom: 6 },        
        coordinates: { x: 1007, y: 1107 },// The coordinates for the Ladder inside the Silvest Mines underground area.
        image: "images/markers/Silvest_Mines_Exit.png",
        lore: "Exit to Silvest Mines above Silvest Mines Exit.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Kobold Castle Entrance",
      region: "Krythan",
      place: "Kobold Castle",
      details: {
        title: "Kobold Castle Entrance",
        switchTo: "overworld",
        flyTo: { x: 1292, y: 1122, zoom: 6 },        
        coordinates: { x: 1292, y: 1122 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Kobold_Castle_Entrance.png",
        lore: "Exit to Kobold Castle above Kobold Castle Entrance.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Silvest Mines Exit",
      region: "Krythan",
      place: "Karzak Cove",
      details: {
        title: "Silvest Mines Exit",
        switchTo: "overworld",
        flyTo: { x: 1378, y: 1106, zoom: 6 },        
        coordinates: { x: 1368, y: 1093 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Silvest_Mine_Exit.png",
        lore: "Exit to Karzak Cove above Silvest Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Dalvon Mines Exit",
      region: "Krythan",
      place: "Karzak Cove",
      details: {
        title: "Dalvon Mines Exit",
        switchTo: "overworld",
        flyTo: { x: 1441, y: 1398, zoom: 6 },        
        coordinates: { x: 1432, y: 1399 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Exit.png",
        lore: "Exit to Karzak Cove above Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Galen's Hideout Exit",
      region: "Krythan",
      place: "Galen's Hideout",
      details: {
        title: "Galen's Hideout Exit",
        switchTo: "underground",
        flyTo: { x: 1304, y: 1112, zoom: 6 },        
        coordinates: { x: 870, y: 82 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Galens_Hideout_Exit.png",
        lore: "Exit to Galen's Hideout from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Dalvon Mines Level 2 Entrance",
      region: "Krythan",
      place: "Dalvon Mines",
      details: {
        title: "Dalvon Mines Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 1462, y: 1607, zoom: 6 },        
        coordinates: { x: 1444, y: 1475 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Level_2_Entrance.png",
        lore: "Entrance to Dalvon Mines Level 2 from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Dalvon Mines Level 2 Exit",
      region: "Krythan",
      place: "Dalvon Mines",
      details: {
        title: "Dalvon Mines Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 1444, y: 1475, zoom: 6 },        
        coordinates: { x: 1462, y: 1607 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Level_2_Exit.png",
        lore: "Exit to Dalvon Mines Level 2 from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Dalvon Mines Level 2 Entrance",
      region: "Krythan",
      place: "Dalvon Mines",
      details: {
        title: "Dalvon Mines Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 1470, y: 1607, zoom: 6 },        
        coordinates: { x: 1452, y: 1475 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Level_2_Entrance.png",
        lore: "Entrance to Dalvon Mines Level 2 from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Dalvon Mines Level 2 Entrance",
      region: "Krythan",
      place: "Dalvon Mines",
      details: {
        title: "Dalvon Mines Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 1470, y: 1607, zoom: 6 },        
        coordinates: { x: 1452, y: 1475 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Level_2_Entrance.png",
        lore: "Entrance to Dalvon Mines Level 2 from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Dalvon Mines Level 2 Exit",
      region: "Krythan",
      place: "Dalvon Mines",
      details: {
        title: "Dalvon Mines Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 1470, y: 1607, zoom: 6 },        
        coordinates: { x: 1470, y: 1607 },// The coordinates for the Ladder inside the Kobold Castle underground area.
        image: "images/markers/Karzak_Cove_Dalvon_Mine_Level_2_Exit.png",
        lore: "Exit to Dalvon Mines Level 2 from Dalvon Mines.",
        npcs: [],
        links: [],
      },
    },

    // Region: Krythan Undergrounds
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Holendar's Mansion Basement Exit",
      region: "Krythan",
      place: "Holendar's Mansion",
      details: {
        title: "Holendar's Mansion Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 820, y: 1043, zoom: 6 },        
        coordinates: { x: 823, y: 1047 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Holendar_Mansion_Basement_Exit.png",
        lore: "Exit to Holendar's Mansion above Holendar's Mansion Basement.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Holendar's Mansion Basement Exit",
      region: "Krythan",
      place: "Holendar's Mansion",
      details: {
        title: "Holendar's Mansion Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 875, y: 1062, zoom: 6 },        
        coordinates: { x: 890, y: 1080 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Holendar_Mansion_Basement_Exit.png",
        lore: "Exit to Holendar's Mansion above Holendar's Mansion Basement.",
        npcs: [],
        links: [],
      },
    },
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
      type: "underworld_ladder",
      tooltip: "Book 2 Temple Exit",
      region: "Krythan",
      place: "Hothbra",
      details: {
        title: "Book 2 Temple Exit",
        switchTo: "overworld",
        flyTo: { x: 520, y: 1064, zoom: 6 },        
        coordinates: { x: 520, y: 1064 },
        image: "images/markers/Book_2_Temple_Exit.png",
        lore: "Exit to Hothbra above Book 2 Temple.",
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
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Krythan Crypt Exit",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Exit",
        switchTo: "overworld",
        flyTo: { x: 906, y: 1028 },
        coordinates: { x: 919, y: 1031 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Exit.png",
        lore: "Exit to Krythan above Krythan Crypt.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Krythan Crypt Level 2 Entrance",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 983, y: 1061 },
        coordinates: { x: 908, y: 1016 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Entrance.png",
        lore: "Exit to Krythan above Krythan Crypt.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Krythan Crypt Level 2 Exit",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 908, y: 1016 },
        coordinates: { x: 983, y: 1061 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Level_2_Exit.png",
        lore: "Exit to Krythan above Krythan Crypt.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Krythan Crypt Level 3 Exit",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Level 3 Exit",
        switchTo: "underground",
        flyTo: { x: 978, y: 1095 },
        coordinates: { x: 1049, y: 1095 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Level_3_Entrance.png",
        lore: "Exit to Krythan above Krythan Crypt.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Krythan Crypt Level 3 Entrance",
      region: "Krythan",
      place: "Krythan Crypt",
      details: {
        title: "Krythan Crypt Level 3 Entrance",
        switchTo: "underground",
        flyTo: { x: 1049, y: 1095 },
        coordinates: { x: 978, y: 1095 },// The coordinates for the Ladder inside the Jeel Catacombs underground area.
        image: "images/markers/Krythan_Crypt_Ladder_Level_3_Entrance.png",
        lore: "Entrance to Krythan Crypt Level 3.",
        npcs: [],
        links: [],
      },
    },

    // Region: 4 - Darkwoods Undergrounds
    
    {
      category: "underground",
      type: "underworld_hole",
      tooltip: "Termigon Pit Ext",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Termigon Pit Exit",
        switchTo: "overworld",
        flyTo: { x: 761, y: 3322, zoom: 5 },
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
        flyTo: { x: 938, y: 3317, zoom: 5 },
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
        flyTo: { x: 858, y: 3349, zoom: 5 },
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
        flyTo: { x: 938, y: 3317, zoom: 5 },
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
        flyTo: { x: 792, y: 3303, zoom: 5 },
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
        flyTo: { x: 791, y: 3287, zoom: 5 },
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
        flyTo: { x: 968, y: 3303, zoom: 6 },
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
        flyTo: { x: 983, y: 3288, zoom: 6 },
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
        flyTo: { x: 1034, y: 3368, zoom: 6 },
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
        flyTo: { x: 1034, y: 3304, zoom: 6 },
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
        flyTo: { x: 1076, y: 3286, zoom: 6 },
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
        flyTo: { x: 1028, y: 3286, zoom: 6 },
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
        flyTo: { x: 807, y: 3288, zoom: 6 },
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
        flyTo: { x: 799, y: 3335, zoom: 5 },
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
        flyTo: { x: 983, y: 3335, zoom: 5 },
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
        flyTo: { x: 807, y: 3335, zoom: 5 },
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
        flyTo: { x: 807, y: 3304, zoom: 5 },
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
        flyTo: { x: 983, y: 3304, zoom: 5 },
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
        flyTo: { x: 967, y: 3287, zoom: 5 },
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
        flyTo: { x: 791, y: 3287, zoom: 5 },
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
        flyTo: { x: 779, y: 3251, zoom: 5 },
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
        flyTo: { x: 955, y: 3253, zoom: 5 },
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
        flyTo: { x: 813, y: 3221, zoom: 5 },
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
        flyTo: { x: 839, y: 3271, zoom: 5 },
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
        flyTo: { x: 1000, y: 3271, zoom: 5 },
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
        flyTo: { x: 824, y: 3271, zoom: 5 },
        coordinates: { x: 1000, y: 3271 },
        image: "images/markers/Ant_Mound_Level_2_Exit.png",
        lore: "Exit to Darkwoods above Ant Mound Level 2.",
        npcs: [],
        links: [],
      },
    },
    
    //Place: Crypts of Ryonkah underground
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Crypts of Ryonkah Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Crypts of Ryonkah Exit",
        switchTo: "overworld",
        flyTo: { x: 1028, y: 2981, zoom: 7 }, 
        coordinates: { x: 1028, y: 2981 },
        image: "images/markers/Crypt_of_Ryonkah_Exit.png",
        lore: "Exit to Darkwoods above Crypts of Ryonkah.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Crypts of Ryonkah Level 2 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Crypts of Ryonkah Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 1124, y: 2794, zoom: 7 }, 
        coordinates: { x: 963, y: 2821 },
        image: "images/markers/Crypt_of_Ryonkah_Exit.png",
        lore: "Exit to Darkwoods above Crypts of Ryonkah.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Crypts of Ryonkah Level 2 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Crypts of Ryonkah Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 963, y: 2821, zoom: 7 }, 
        coordinates: { x: 1124, y: 2794 },
        image: "images/markers/Crypt_of_Ryonkah_Exit.png",
        lore: "Exit to Crypts of Ryonkah Level 1.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Crypts of Ryonkah Level 3 Entrance",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Crypts of Ryonkah Level 3 Entrance",
        switchTo: "underground",
        flyTo: { x: 1147, y: 2919, zoom: 7 }, 
        coordinates: { x: 1032, y: 2859 },
        image: "images/markers/Crypt_of_Ryonkah_Exit.png",
        lore: "Entrance to Crypts of Ryonkah Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Crypts of Ryonkah Level 3 Exit",
      region: "Darkwoods",
      place: "Darkwoods",
      details: {
        title: "Crypts of Ryonkah Level 3 Exit",
        switchTo: "underground",
        flyTo: { x: 1032, y: 2859, zoom: 7 }, 
        coordinates: { x: 1147, y: 2919 },
        image: "images/markers/Crypt_of_Ryonkah_Exit.png",
        lore: "Exit to Crypts of Ryonkah Level 1.",
        npcs: [],
        links: [],
      },
    },

    // Place: Necropolis underground
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Necropolis Basement Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "Necropolis Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 1348, y: 2932, zoom: 6 },
        coordinates: { x: 1345, y: 2939 },
        image: "images/markers/Necropolis_Basement_Exit.png",
        lore: "Exit to Necropolis Stores above Necropolis Basement.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Necropolis Maze Tunnel Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "Necropolis Maze Tunnel Exit",
        switchTo: "overworld",
        flyTo: { x: 1363, y: 2887, zoom: 6 },
        coordinates: { x: 1363, y: 2878 },
        image: "images/markers/Necropolis_Maze_Tunnel_Exit.png",
        lore: "Exit to Necropolis Stores above Necropolis Maze Tunnel.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Necropolis Maze Tunnel Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "Necropolis Maze Tunnel Exit",
        switchTo: "overworld",
        flyTo: { x: 1379, y: 2955, zoom: 6 },
        coordinates: { x: 1365, y: 2909 },
        image: "images/markers/Necropolis_Maze_Tunnel_Exit.png",
        lore: "Exit to Necropolis Stores above Necropolis Maze Tunnel.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Necropolis Maze Tunnel Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "Necropolis Maze Tunnel Exit",
        switchTo: "overworld",
        flyTo: { x: 1386, y: 2955, zoom: 6 },
        coordinates: { x: 1372, y: 2909 },
        image: "images/markers/Necropolis_Maze_Tunnel_Exit.png",
        lore: "Entrance to Necropolis Stores above Necropolis Maze Tunnel.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Necropolis Maze Tunnel Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "Necropolis Maze Tunnel Exit",
        switchTo: "overworld",
        flyTo: { x: 1377, y: 2935, zoom: 6 },
        coordinates: { x: 1363, y: 2889 },
        image: "images/markers/Necropolis_Maze_Tunnel_Exit.png",
        lore: "Entrance to Necropolis above Necropolis Maze Tunnel.",
        npcs: [],
        links: [],
      },
    },
    // Place: McKelsky Crypt underground
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "McKelsky Crypt Exit",
      region: "Darkwoods",
      place: "Necropolis",
      details: {
        title: "McKelsky Crypt Exit",
        switchTo: "overworld",
        flyTo: { x: 1430, y: 3045, zoom: 6 },
        coordinates: { x: 1431, y: 3046 },
        image: "images/markers/McKelsky_Crypt_Exit.png",
        lore: "Entrance to Necropolis above McKelsky Crypt.",
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
        flyTo: { x: 423, y: 3430, zoom: 5 },
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
        flyTo: { x: 633, y: 3187, zoom: 4 },
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
        flyTo: { x: 628, y: 3198, zoom: 4 },
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
        flyTo: { x: 680, y: 3319, zoom: 4 },
        coordinates: { x: 679, y: 3316 },
        image: "images/markers/Cathedral_of_Joyous_Afterlife_Exit.png",
        lore: "Exit to Chlera above Cathedral of Joyous Afterlife.",
        npcs: [],
        links: [],
      },
    },

    

    // Region: 5 - Battle Plains Undergrounds
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
        flyTo: { x: 2330, y: 3620 },
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

    // Region: 6 - Black Swamp Undergrounds


    // Region: 7 - Highlands Undergrounds
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
        flyTo: { x: 2996, y: 3044 },
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
        flyTo: { x: 2996, y: 3044 },
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
        flyTo: { x: 3240, y: 3607 },
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
        flyTo: { x: 3127, y: 3222, zoom: 5 },
        coordinates: { x: 3097, y: 3221 },
        image: "images/markers/Vel_Dran_Cave_Ladder_Exit.png",
        lore: "Exit to Vel Dran.",
        npcs: [],
        links: [],
      },
    },
    // Region: 8 - Western Isles Undergrounds
    // Island: Werewolf Island Undergrounds
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Werewolf Island Pass Exit",
      region: "Western Isles",
      place: "Werewolf Island",
      details: {
        title: "Werewolf Island Pass Exit",
        switchTo: "overworld",
        flyTo: { x: 462, y: 2552, zoom: 5 },
        coordinates: { x: 477, y: 2631 },
        image: "images/markers/Werewolf_Island_Tunnels_Exit.png",
        lore: "Exit to Werewolf Island.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Werewolf Island Pass Exit",
      region: "Western Isles",
      place: "Werewolf Island",
      details: {
        title: "Werewolf Island Pass Exit",
        switchTo: "overworld",
        flyTo: { x: 450, y: 2552, zoom: 5 },
        coordinates: { x: 466, y: 2631 },
        image: "images/markers/Werewolf_Island_Tunnels_Exit.png",
        lore: "Exit to Werewolf Island.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Lycanth Crypt Exit",
      region: "Western Isles",
      place: "Lycanth Crypt",
      details: {
        title: "Lycanth Crypt Exit",
        switchTo: "overworld",
        flyTo: { x: 297, y: 2617, zoom: 5 },
        coordinates: { x: 313, y: 2627 },
        image: "images/markers/Lycanth_Crypt_Exit.png",
        lore: "Exit to Lycanth Crypt.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 4 Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 4 Exit",
        switchTo: "underground",
        flyTo: { x: 344, y: 2711, zoom: 5 }, 
        coordinates: { x: 344, y: 2711 }, // Stairs do not lead back to Spore Cave Level 4 Entrance, so using same coordinates.
        image: "images/markers/Werewolf_Cave_Level_4_Exit.png",
        lore: "Exit to Spore Cave Level 4. Mysteriously, these stairs do not lead back to the Spore Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 316, y: 2602, zoom: 5 },
        coordinates: { x: 365, y: 2582 },
        image: "images/markers/Werewolf_Cave_Exit.png",
        lore: "Exit to Spore Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 2 Entrance",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 2 Entrance",
        switchTo: "underground",
        flyTo: { x: 794, y: 2472, zoom: 5 },
        coordinates: { x: 537, y: 2521 },
        image: "images/markers/Werewolf_Cave_Level_2_Entrance.png",
        lore: "Exit to Spore Cave Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 2 Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 2 Exit",
        switchTo: "underground",
        flyTo: { x: 537, y: 2521, zoom: 5 },
        coordinates: { x: 794, y: 2472 },
        image: "images/markers/Werewolf_Cave_Level_2_Exit.png",
        lore: "Exit to Spore Cave Level 2.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 3 Entrance",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 3 Entrance",
        switchTo: "underground",
        flyTo: { x: 1688, y: 3014, zoom: 5 },
        coordinates: { x: 625, y: 2516 },
        image: "images/markers/Werewolf_Cave_Level_3_Entrance.png",
        lore: "Entrance to Spore Cave Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 3 Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 3 Exit",
        switchTo: "underground",
        flyTo: { x: 625, y: 2516, zoom: 5 },
        coordinates: { x: 1688, y: 3014 },
        image: "images/markers/Werewolf_Cave_Level_3_Exit.png",
        lore: "Exit to Spore Cave Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 3 Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 3 Exit",
        switchTo: "underground",
        flyTo: { x: 625, y: 2516, zoom: 5 },
        coordinates: { x: 1688, y: 3014 },
        image: "images/markers/Werewolf_Cave_Level_3_Exit.png",
        lore: "Exit to Spore Cave Level 3.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Spore Cave Level 4 Exit",
      region: "Western Isles",
      place: "Spore Cave",
      details: {
        title: "Spore Cave Level 4 Exit",
        switchTo: "underground",
        flyTo: { x: 344, y: 2711, zoom: 5 }, 
        coordinates: { x: 1745, y: 2902 },
        image: "images/markers/Werewolf_Cave_Level_4_Exit.png",
        lore: "Exit to Spore Cave Level 4.",
        npcs: [],
        links: [],
      },
    },

    // Region: 7 - Highlands Undergrounds

    // Region: 8 - Western Isles Undergrounds

    // Region: 9 - Valley of Giants Undergrounds

    // Region: 10 - Heartwood Coast Undergrounds

    // Region: 11 - Tundria Undergrounds

    // Region: 12 - Sands of Creation Undergrounds
    // Island: Ruhura Undergrounds
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Elemental Cave Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Elemental Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 545, y: 3838, zoom: 5 }, 
        coordinates: { x: 333, y: 3683 },
        image: "images/markers/Elemental_Cave_Exit.png",
        lore: "Exit to Elemental Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Artonian Pass Ruhura Side Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Artonian Pass Ruhura Side Exit",
        switchTo: "overworld",
        flyTo: { x: 401, y: 3793, zoom: 5 }, 
        coordinates: { x: 376, y: 3415 },
        image: "images/markers/Artonian_Pass_Ruhura_Side_Exit.png",
        lore: "Exit to Artonian Pass Ruhura Side.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Artonian Pass Greater Dragon Island Side Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Artonian Pass Greater Dragon Island Side Exit",
        switchTo: "overworld",
        flyTo: { x: 308, y: 3910, zoom: 5 }, 
        coordinates: { x: 359, y: 3495 },
        image: "images/markers/Artonian_Pass_Greater_Dragon_Island_Side_Exit.png",
        lore: "Exit to Artonian Pass Greater Dragon Island Side.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Elemental Cave Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Elemental Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 455, y: 3719, zoom: 5 }, 
        coordinates: { x: 382, y: 3675 },
        image: "images/markers/Elemental_Cave_Exit.png",
        lore: "Exit to Elemental Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Elemental Cave Exit to Khafra Side",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Elemental Cave Exit",
        switchTo: "underground",
        flyTo: { x: 57, y: 3707, zoom: 5 }, // RtoK Elemental Cave Entrance coordinates
        coordinates: { x: 314, y: 3782 },
        image: "images/markers/Elemental_Cave_Exit.png",
        lore: "Exit to Elemental Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_cave",
      tooltip: "Artonian Cave Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Artonian Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 490, y: 3652, zoom: 5 }, 
        coordinates: { x: 471, y: 3655 },
        image: "images/markers/Artonian_Cave_Exit.png",
        lore: "Exit to Artonian Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Artonian Fort Cave Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Artonian Fort Cave Exit",
        switchTo: "overworld",
        flyTo: { x: 551, y: 3656, zoom: 5 }, 
        coordinates: { x: 519, y: 3671 },
        image: "images/markers/Artonian_Fort_Cave_Exit.png",
        lore: "Exit to Artonian Fort Cave.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      id: "002", // Unique ID for this marker
      tooltip: "Lupinsix's Lair Exit",
      region: "Sands of Creation",
      place: "Ruhura Island",
      details: {
        title: "Lupinsix's Lair Exit",
        switchTo: "overworld",
        flyToId: "001", // The ID of the target marker in markers.js
        coordinates: { x: 1448, y: 3958 },
        image: "images/markers/Lupinsix's_Lair_Exit.png",
        lore: "Exit to Lupinsix's Lair.",
        npcs: [],
        links: [],
      },
    },

    // City: Ruhura Undergrounds
    {
      category: "underground",
      type: "underworld_stairs",
      tooltip: "Leather Shop Basement Exit",
      region: "Western Isles",
      place: "Ruhura",
      details: {
        title: "Leather Shop Basement Exit",
        switchTo: "overworld",
        flyTo: { x: 370, y: 4036, zoom: 5 }, 
        coordinates: { x: 370, y: 4038 },
        image: "images/markers/Leather_Shop_Basement_Exit.png",
        lore: "Exit to Leather Shop Basement.",
        npcs: [],
        links: [],
      },
    },
    // Island: Khafra Undergrounds
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Elemental Cave Khafra Side Exit",
      region: "Western Isles",
      place: "Ruhura",
      details: {
        title: "Elemental Cave Khafra Side Exit",
        switchTo: "overworld",
        flyTo: { x: 79, y: 3355, zoom: 5 }, 
        coordinates: { x: 162, y: 3597 },
        image: "images/markers/Elemental_Cave_Khafra_Side_Exit.png",
        lore: "Exit to Elemental Cave Khafra Side.",
        npcs: [],
        links: [],
      },
    },
    {
      category: "underground",
      type: "underworld_ladder",
      tooltip: "Elemental Cave Khafra Side Exit",
      region: "Western Isles",
      place: "Ruhura",
      details: {
        title: "Elemental Cave Khafra Side Exit",
        switchTo: "overworld",
        flyTo: { x: 314, y: 3782, zoom: 5 }, 
        coordinates: { x: 57, y: 3707 },
        image: "images/markers/Elemental_Cave_Khafra_Side_Exit.png",
        lore: "Exit to Elemental Cave Khafra Side.",
        npcs: [],
        links: [],
      },
    },

    // City: Khafra Undergrounds

    // Region: 13 - Breakwater Undergrounds
    

    // Region: 14 - Broken Finger Undergrounds
  ],
};