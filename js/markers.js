const markerStyles = {
  // Portals & Docks
  portal_lsp: {
    icon: "icons/lsp-portal.svg",
    color: "#B8860B", // DarkGoldenrod - for better contrast on desert
  },
  portal_blue: {
    icon: "icons/blue-portal.svg", // Using dungeon gate for blue instance portals
    color: "#00BFFF", // DeepSkyBlue
  },
  portal_small: {
    icon: "icons/small-blue.svg", // Using crystal for small, magical portals
    color: "#DA70D6", // Orchid
  },
  portal_housing: {
    icon: "icons/bank.svg", // Placeholder, a house icon would be better
    color: "#32CD32", // LimeGreen
  },
  portal_ancient: {
    icon: "icons/ancient-portal.svg", // Using rune spire for ancient stone portals
    color: "#A9A9A9", // DarkGray
  },
  portal_whirlpool: {
    icon: "icons/whirlwind.svg", // Using vortex for whirlpool portals
    color: "#00CADD", // LightSkyBlue
  },
  dock: {
    icon: "icons/anchor.svg",
    color: "#1E90FF", // DodgerBlue
  },

  // Quests
  quest: {
    icon: "icons/scroll-unfurled.svg",
    color: "#FFD700", // Gold
  },

  // Shops
  shop_weapon: {
    icon: "icons/crossed-swords.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_armor: {
    icon: "icons/round-shield.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_generic: {
    icon: "icons/hanging-sign.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_provisioner: {
    icon: "icons/barrel.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_pub: {
    icon: "icons/beer-stein.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_jewelry: {
    icon: "icons/big-diamond-ring.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_carpentry: {
    icon: "icons/hand-saw.svg",
    color: "#32CD32", // LimeGreen
  },
  shop_leather: {
    icon: "icons/leather-boot.svg",
    color: "#32CD32", // LimeGreen
  },

  // Trainers
  trainer: {
    icon: "icons/white-book.svg",
    color: "#FF8C00", // DarkOrange
  },

  // Spawns
  spawn_good: {
    icon: "icons/death-spawn.svg",
    color: "#28a745", // A flat, visible green
  },
  spawn_evil: {
    icon: "icons/death-spawn.svg",
    color: "#8B0000", // DarkRed (Blood Red)
  },

  // Bank
  bank: {
    icon: "icons/bank.svg",
    color: "#c9b128ff", // GoldenRod
  },

  altar: {
    icon: "icons/ancient-portal.svg",
    color: "#20B2AA", // LightSeaGreen
  },

  // Crafting
  obelisk: {
    icon: "icons/crystal-shrine.svg",
    color: "#9370DB", // MediumPurple
  },

  // Undergrounds
  underground_stairs: {
    icon: "icons/3d-stairs.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_cave: {
    icon: "icons/cave-entrance.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_crypt: {
    icon: "icons/crypt-entrance.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_dungeon: {
    icon: "icons/dungeon-gate.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_mine: {
    icon: "icons/mine.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_sewer: {
    icon: "icons/trash-can.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_closed: {
    icon: "icons/closed-door-tape.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_ant: {
    icon: "icons/ant.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_scorpion: {
    icon: "icons/scorpion.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_spider: {
    icon: "icons/long-legged-spider.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_snake: {
    icon: "icons/snake.svg",
    color: "#d36517ff", // SaddleBrown
  },
  underground_termigon: {
    icon: "icons/mite.svg",
    color: "#d36517ff", // SaddleBrown
  },

  // Places of Interest
  game_of_chance: {
    icon: "icons/perspective-dice-six-faces.svg",
    color: "#32CD32", // LimeGreen
  },
  information: {
    icon: "icons/info.svg",
    color: "#00BFFF", // DeepSkyBlue
  },
  event: {
    icon: "icons/ticket.svg",
    color: "#FF1493", // DeepPink
  },
};

const mapMarkers = {
  portals: [
    /* Party Island Portals */
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Krythan",
      place: "Party Island",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 438, y: 118 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    /* Valinor Island Portals */

    // Valinor Region Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Leave Valinor",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Portal to Leave Valinor",
        coordinates: { x: 774, y: 98 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Leave Valinor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Arena Viewing Area",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Portal to Arena Viewing Area",
        coordinates: { x: 774, y: 166 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Arena Viewing Area is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    /* Lotor's Summer Palace Portals */

    // Lotor's Summer Palace Portals
    {
      type: "portal_small",
      tooltip: "Portal to Party Island",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Portal to Party Island",
        coordinates: { x: 760, y: 587 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Party Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to PvP Island",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Portal to PvP Island",
        coordinates: { x: 761, y: 644 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to PvP Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_housing",
      tooltip: "Portal to Housing Realm",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Portal to Housing Realm",
        coordinates: { x: 769, y: 613 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Housing Realm is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Valmond Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Valmond Portal",
        coordinates: { x: 810, y: 622 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Krog Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Krog Portal",
        coordinates: { x: 820, y: 622 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krog Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Khafra or Ruhura Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Khafra or Ruhura Portal",
        coordinates: { x: 830, y: 622 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra or Ruhura Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Silvest Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Silvest Portal",
        coordinates: { x: 810, y: 642 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "VIP Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "VIP Portal",
        coordinates: { x: 820, y: 642 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about VIP Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Whisperdale Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Whisperdale Portal",
        coordinates: { x: 830, y: 642 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whisperdale Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Parian Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Parian Portal",
        coordinates: { x: 810, y: 632 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Parian Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Josody Portal",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Josody Portal",
        coordinates: { x: 830, y: 632 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Josody Portal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    // Real Estate Island Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Krythan",
      place: "Real Estate Island",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 661, y: 733 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Minotaur Island Portals */
    {
      type: "portal_blue",
      tooltip: "Portal to Highlands",
      region: "Krythan",
      place: "Minotaur Island",
      details: {
        title: "Portal to Highlands",
        coordinates: { x: 135, y: 246 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Highlands is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Scorched Island Portals */
    {
      type: "portal_small",
      tooltip: "Portal to Battle Plains",
      region: "Western Isles",
      place: "Scorched Island",
      details: {
        title: "Portal to Battle Plains",
        coordinates: { x: 629, y: 2100 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Battle Plains is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Hell",
      region: "Western Isles",
      place: "Scorched Island",
      details: {
        title: "Portal to Hell",
        coordinates: { x: 718, y: 1962 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Hell is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Krythan Island Portals */

    // Krythan Region Portals
    {
      type: "portal_blue",
      tooltip: "Portal to Highlands West of Parian",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Portal to Highlands West of Parian",
        coordinates: { x: 583, y: 1495 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Highlands West of Parian is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_blue",
      tooltip: "Portal to Darkwoods North of Josody",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Portal to Darkwoods North of Josody",
        coordinates: { x: 183, y: 1464 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Darkwoods North of Josody is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Hell",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Portal to Hell",
        coordinates: { x: 471, y: 1894 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Hell is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Scarab Island",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Portal to Scarab Island",
        coordinates: { x: 711, y: 1751 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Scarab Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Silvest Valley Region Portals

    // Scarab Island Portals
    {
      type: "portal_small",
      tooltip: "Portal to Krythan Region",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Portal to Krythan Region",
        coordinates: { x: 471, y: 2182 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Krythan Region is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    /* Lotor's Prison Portals */
    {
      type: "portal_small",
      tooltip: "Portal to Lotor's Castle",
      region: "Krythan",
      place: "Lotor's Prison",
      details: {
        title: "Portal to Lotor's Castle",
        coordinates: { x: 1484, y: 630 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Castle is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Portals */

    // Darkwoods Forest Portals
    {
      type: "portal_blue",
      tooltip: "Portal to Krythan Island (West of New Korelth)",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Krythan Island (West of New Korelth)",
        coordinates: { x: 1350, y: 2438 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Krythan Island (West of New Korelth) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_housing",
      tooltip: "Portal to House Realm",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to House Realm",
        coordinates: { x: 1270, y: 2511 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to House Realm is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 1253, y: 2517 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_blue",
      tooltip: "Portal to Highlands (Southeast of Parian)",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Highlands (Southeast of Parian)",
        coordinates: { x: 807, y: 2837 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Highlands (Southeast of Parian) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Mnemmon",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Mnemmon",
        coordinates: { x: 866, y: 3416 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Mnemmon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Mnemmon Gaol",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Mnemmon Gaol",
        coordinates: { x: 908, y: 3258 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Mnemmon Gaol is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 471, y: 3479 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Portals
    {
      type: "portal_small",
      tooltip: "Portal to Scorched Island",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Portal to Scorched Island",
        coordinates: { x: 1599, y: 3076 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Scorched Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Portal to Proudblood Valley",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Portal to Proudblood Valley",
        coordinates: { x: 2262, y: 3704 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Proudblood Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Exit Proudblood Valley",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Exit Proudblood Valley",
        coordinates: { x: 1962, y: 3650 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Exit Proudblood Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Portals

    // Highlands Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 3414, y: 2917 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Southern Highlands (Northeast of Grell)",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Portal to Southern Highlands (Northeast of Grell)",
        coordinates: { x: 3334, y: 2807 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Southern Highlands (Northeast of Grell) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Highlands (North of Parian)",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Portal to Highlands (North of Parian)",
        coordinates: { x: 3080, y: 3547 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Highlands (North of Parian) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_blue",
      tooltip: "Portal to Darkwoods Forest (East of Redwake)",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Portal to Darkwoods Forest (East of Redwake)",
        coordinates: { x: 3767, y: 3238 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Darkwoods Forest (East of Redwake) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Western Isles Portals

    // Hell Portals
    {
      type: "portal_small",
      tooltip: "Portal to Scorched Island",
      region: "Hell",
      place: "Hell",
      details: {
        title: "Portal to Scorched Island",
        coordinates: { x: 1050, y: 3287 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Scorched Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_small",
      tooltip: "Portal to Krythan Island",
      region: "Hell",
      place: "Hell",
      details: {
        title: "Portal to Krythan Island",
        coordinates: { x: 1176, y: 3288 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Krythan Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Valley of Giants Portals

    // Heartwood Coast Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 2787, y: 2134 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Tundria Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Northern Frost Giant Island",
      region: "Tundria",
      place: "Northwest Tundria",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 1687, y: 151 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Northern Frost Giant Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sands of Creation Portals

    // Breakwater

    // Broken Finger

    /* Sands of Creation Portals */
    // Ruhura Side Portals
    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 469, y: 4036 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_blue",
      tooltip: "Portal to Dragon Lair (Blue Dragons)",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Portal to Dragon Lair (Blue Dragons)",
        coordinates: { x: 111, y: 3475 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Dragon Lair (Blue Dragons) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Khafra Side Portals

    {
      type: "portal_lsp",
      tooltip: "Portal to Lotor's Summer Palace",
      region: "Sands of Creation",
      place: "Khafra",
      details: {
        title: "Portal to Lotor's Summer Palace",
        coordinates: { x: 199, y: 2855 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Lotor's Summer Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Portal to Artonian Island",
      region: "Sands of Creation",
      place: "Khafra", // Portals with similar look to lsp portal use the same icon
      details: {
        title: "Portal to Artonian Island",
        coordinates: { x: 24, y: 3412 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Artonian Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_lsp",
      tooltip: "Portal to Khafra Side",
      region: "Sands of Creation",
      place: "Khafra", // Portals with similar look to lsp portal use the same icon
      details: {
        title: "Portal to Khafra Side",
        coordinates: { x: 214, y: 3384 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Portal to Khafra Side is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Whirlpool Portals
    // Near Broken Finger
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Obsidian Lake",
      region: "Broken Finger",
      place: "Obsidian Lake", // Lake name may change - in Obsidian Lake
      details: {
        title: "Whirlpool to Obsidian Lake",
        coordinates: { x: 1467, y: 3712 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Obsidian Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Broken Lake",
      region: "Broken Finger",
      place: "Obsidian Lake", // in Obsidian Lake
      details: {
        title: "Whirlpool to Broken Lake",
        coordinates: { x: 1537, y: 3695 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Broken Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Proudblood Sound",
      region: "Broken Finger",
      place: "Obsidian Lake", // Not sure about the name - in Obsidian Lake
      details: {
        title: "Whirlpool to Proudblood Sound",
        coordinates: { x: 1076, y: 3532 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Proudblood Sound is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Chlera
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Obsidian Lake",
      region: "Mainland",
      place: "Chlera Bay", // Near Chlera Dock
      details: {
        title: "Whirlpool to Obsidian Lake",
        coordinates: { x: 2309, y: 3722 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Obsidian Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Lotor's Prison",
      region: "Mainland",
      place: "Chlera Bay", // Near Chlera Dock
      details: {
        title: "Whirlpool to Lotor's Prison",
        coordinates: { x: 2555, y: 3665 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Lotor's Prison is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Test Island
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Jeel Docks",
      region: "Western Isles",
      place: "Test Island", // South of Test Island near Ethera Palace Docks
      details: {
        title: "Whirlpool to Jeel Docks",
        coordinates: { x: 3999, y: 3999 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Jeel Docks is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near PVP Island
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Silvest Bay",
      region: "Western Isles",
      place: "PVP Island", // Near Death Tyrant Valley - Glamara McPlum's Dock
      details: {
        title: "Whirlpool to Silvest Bay",
        coordinates: { x: 4013, y: 2424 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Silvest Bay is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Scarab Island
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Tundria East of Duremar",
      region: "Krythan",
      place: "Scarab Island", // Near Lopal and Khafra Fishing Outpost Dock
      details: {
        title: "Whirlpool to Tundria East of Duremar",
        coordinates: { x: 29, y: 2226 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Tundria East of Duremar is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Silvest Valley
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to East Highlands of Death Tyrant Valley",
      region: "Krythan",
      place: "Silvest Valley", // Near Glamara McPlum's and Parian Dock
      details: {
        title: "Whirlpool to East Highlands of Death Tyrant Valley",
        coordinates: { x: 1241, y: 1547 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to East Highlands of Death Tyrant Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Guild Arena Island
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to South of Test Island",
      region: "Krythan",
      place: "Guild Arena Island", // Closest Dock Ethera Palace Dock
      details: {
        title: "Whirlpool to South of Test Island",
        coordinates: { x: 62, y: 846 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to South of Test Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Lotor's Prison
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Chlera Bay",
      region: "Krythan",
      place: "Lotor's Prison", // Near Lotor's Prison - Karzak Cove Dock and LSP Dock
      details: {
        title: "Whirlpool to Chlera Bay",
        coordinates: { x: 1470, y: 630 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Chlera Bay is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Near Duremar
    {
      type: "portal_whirlpool",
      tooltip: "Whirlpool to Scarab Island",
      region: "Mainland",
      place: "Tundria", // Near Duremar Dock
      details: {
        title: "Whirlpool to Scarab Island",
        coordinates: { x: 3997, y: 946 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whirlpool to Scarab Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  docks: [
    /* Valinor Island Docks */
    // No active docks on Valinor Island as of now

    // Krythan Island Docks
    {
      type: "dock",
      tooltip: "Silvest Northern Island Dock",
      region: "Krythan",
      place: "Silvest Valley",
      details: {
        title: "Silvest Northern Island Dock",
        coordinates: { x: 447, y: 600 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest Northern Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Jeel Dock",
      region: "Krythan",
      place: "Jeel",
      details: {
        title: "Jeel Dock",
        coordinates: { x: 264, y: 821 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Jeel Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Lotor's Castle Dock",
      region: "Krythan",
      place: "Lotor's Castle",
      details: {
        title: "Lotor's Castle Dock",
        coordinates: { x: 210, y: 1127 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotor's Castle Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "New Korelth Dock",
      region: "Krythan",
      place: "New Korelth",
      details: {
        title: "New Korelth Dock",
        coordinates: { x: 429, y: 1463 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Korelth Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Tallem'im House Dock",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Tallem'im House Dock",
        coordinates: { x: 69, y: 1514 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tallem'im House Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Scalo's Den Dock",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Scalo's Den Dock",
        coordinates: { x: 841, y: 1328 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scalo's Den Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Karzak Cove Dock",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Karzak Cove Dock",
        coordinates: { x: 1407, y: 1096 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Karzak Cove Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Fort Eastwatch Dock",
      region: "Krythan",
      place: "Fort Eastwatch",
      details: {
        title: "Fort Eastwatch Dock",
        coordinates: { x: 1351, y: 1287 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Fort Eastwatch Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Silvest Dock",
      region: "Krythan",
      place: "Silvest",
      details: {
        title: "Silvest Dock",
        coordinates: { x: 1132, y: 1471 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Silvest Island Dock",
      region: "Krythan",
      place: "Silvest",
      details: {
        title: "Silvest Island Dock",
        coordinates: { x: 1096, y: 1514 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    // Lotor's Summer Palace Docks
    {
      type: "dock",
      tooltip: "Palace Dock",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Palace Dock",
        coordinates: { x: 791, y: 582 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Palace Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "LSP Dock",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "LSP Dock",
        coordinates: { x: 856, y: 726 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about LSP Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    // Minotaur Island Docks
    // No active docks on Minotaur Island as of now

    // Party Island Docks

    /* Mainland Docks */

    // Darkwoods Forest Docks
    {
      type: "dock",
      tooltip: "Josody Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Josody Dock",
        coordinates: { x: 1405, y: 2517 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Josody Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Redwake Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Redwake Dock",
        coordinates: { x: 403, y: 2866 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Redwake Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Dragoon Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Dragoon Dock",
        coordinates: { x: 402, y: 3220 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dragoon Dock is coming soon.",
        npcs: [],
        links: [],
      },
    }, // Just gave it a name, not sure if it's correct
    {
      type: "dock",
      tooltip: "Whisperdale Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Whisperdale Dock",
        coordinates: { x: 342, y: 3490 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whisperdale Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Darkfell Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Darkfell Dock",
        coordinates: { x: 911, y: 3120 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darkfell Dock is coming soon.",
        npcs: [],
        links: [],
      },
    }, // This is the ruins next to Dunmarrow Dock but I'm not sure what it's called Question
    {
      type: "dock",
      tooltip: "Dunmarrow Dock",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Dunmarrow Dock",
        coordinates: { x: 1363, y: 3246 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dunmarrow Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Docks
    {
      type: "dock",
      tooltip: "Wandering Spirit Dock",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Wandering Spirit Dock",
        coordinates: { x: 2009, y: 2632 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wandering Spirit Dock is coming soon.",
        npcs: [],
        links: [],
      },
    }, // This is above Shadow Temple Entrance I'm not sure what the ruins are called Question
    {
      type: "dock",
      tooltip: "Chlera Dock",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Chlera Dock",
        coordinates: { x: 2487, y: 3640 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chlera Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Battle Plains Dock",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Battle Plains Dock",
        coordinates: { x: 2598, y: 3506 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Battle Plains Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Maraket Dock",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Maraket Dock",
        coordinates: { x: 3108, y: 4019 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maraket Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Docks
    {
      type: "dock",
      tooltip: "Samad Dock",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Samad Dock",
        coordinates: { x: 2611, y: 3510 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Samad Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Highlands Docks
    {
      type: "dock",
      tooltip: "Ethera Palace Dock",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Ethera Palace Dock",
        coordinates: { x: 3596, y: 3704 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ethera Palace Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Ethera Mining Company Dock",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Ethera Mining Company Dock",
        coordinates: { x: 3612, y: 3644 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ethera Mining Company Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Highlands East Dock - East of Parian",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Highlands East Dock - East of Parian",
        coordinates: { x: 3687, y: 3157 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Highlands East Dock - East of Parian is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Glamara McPlum's Dock",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Glamara McPlum's Dock",
        coordinates: { x: 3860, y: 2580 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Glamara McPlum's Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "North Highlands Dock",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "North Highlands Dock",
        coordinates: { x: 3540, y: 1581 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about North Highlands Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Western Isles Docks
    {
      type: "dock",
      tooltip: "Ettin Island Dock",
      region: "Western Isles",
      place: "Ettin Island",
      details: {
        title: "Ettin Island Dock",
        coordinates: { x: 1705, y: 1835 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ettin Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Valley of Giants Docks
    // No Docks here to see

    // Heartwood Coast Docks
    {
      type: "dock",
      tooltip: "Valmond East Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond East Dock",
        coordinates: { x: 2590, y: 2182 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond East Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Valmond East Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond East Dock",
        coordinates: { x: 2590, y: 2194 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond East Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Valmond North Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond North Dock",
        coordinates: { x: 2653, y: 2115 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Valmond North Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond North Dock",
        coordinates: { x: 2661, y: 2129 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Valmond North Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond North Dock",
        coordinates: { x: 2676, y: 2129 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Teylan Dock",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Teylan Dock",
        coordinates: { x: 2422, y: 1640 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Teylan Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Heartwood North Dock (Northeast of Syldural)",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Heartwood North Dock (Northeast of Syldural)",
        coordinates: { x: 3512, y: 1569 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Heartwood North Dock (Northeast of Syldural) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Tundria Docks
    {
      type: "dock",
      tooltip: "Duremar Dock",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Duremar Dock",
        coordinates: { x: 3725, y: 952 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Duremar Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Southeast Tundria Dock",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Southeast Tundria Dock",
        coordinates: { x: 3620, y: 1330 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Southeast Tundria Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Bridge Dock",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Bridge Dock",
        coordinates: { x: 2029, y: 1047 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bridge Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Maroven North Dock",
      region: "Tundria",
      place: "Maroven",
      details: {
        title: "Maroven North Dock",
        coordinates: { x: 2029, y: 1239 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Maroven Dock",
      region: "Tundria",
      place: "Maroven",
      details: {
        title: "Maroven Dock",
        coordinates: { x: 1976, y: 1265 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Maroven Dock",
      region: "Tundria",
      place: "Maroven",
      details: {
        title: "Maroven Dock",
        coordinates: { x: 1987, y: 1265 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Maroven Dock",
      region: "Tundria",
      place: "Maroven",
      details: {
        title: "Maroven Dock",
        coordinates: { x: 1996, y: 1279 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Ruins of Osgarl Dock",
      region: "Tundria",
      place: "Ruins of Osgarl",
      details: {
        title: "Maroven Dock",
        coordinates: { x: 2499, y: 380 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruins of Osgarl Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Tundria Northern Dock", // Temporary name until official name is known
      region: "Tundria",
      place: "Tundria Big Finger", // Temporary name until official name is known
      details: {
        title: "Maroven Dock",
        coordinates: { x: 1970, y: 389 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruins of Osgarl Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Scarab Island Docks
    {
      type: "dock",
      tooltip: "Lopal Dock",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Lopal Dock",
        coordinates: { x: 343, y: 2269 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lopal Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    // Werewolf Island Docks
    // No active docks on Werewolf Island as of now

    // Sands of Creation Docks
    // Ruhura Side Docks
    {
      type: "dock",
      tooltip: "Ruhura Dock",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Ruhura Dock",
        coordinates: { x: 358, y: 4059 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruhura Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Greater Dragon Island Docks
    {
      type: "dock",
      tooltip: "Greater Dragon Island Dock",
      region: "Sands of Creation",
      place: "Greater Dragon Island",
      details: {
        title: "Greater Dragon Island Dock",
        coordinates: { x: 279, y: 3917 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Greater Dragon Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Khafra Side Docks
    {
      type: "dock",
      tooltip: "Khafra Fishing Outpost Dock",
      region: "Sands of Creation",
      place: "Khafra",
      details: {
        title: "Khafra Fishing Outpost Dock",
        coordinates: { x: 86, y: 2691 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra Fishing Outpost Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Khafra Dock",
      region: "Sands of Creation",
      place: "Khafra",
      details: {
        title: "Khafra Dock",
        coordinates: { x: 210, y: 2751 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Breakwater Region Docks
    // New Town Island Docks
    {
      type: "dock",
      tooltip: "New Town Dock",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "New Town Dock",
        coordinates: { x: 1972, y: 1902 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Town Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Undead Dwarven Dock",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "Undead Dwarven Dock",
        coordinates: { x: 1841, y: 1750 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Undead Dwarven Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Deadman Island Dock",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "Deadman Island Dock",
        coordinates: { x: 1795, y: 1706 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Deadman Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Roycroft Island Docks
    {
      type: "dock",
      tooltip: "Roycroft North Dock",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Roycroft North Dock",
        coordinates: { x: 2515, y: 2415 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roycroft North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Roycroft South Dock",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Roycroft South Dock",
        coordinates: { x: 2449, y: 2516 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roycroft South Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Roycroft South Dock",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Roycroft South Dock",
        coordinates: { x: 2458, y: 2516 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roycroft South Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Roycroft South Dock",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Roycroft South Dock",
        coordinates: { x: 2467, y: 2516 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roycroft South Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // New Royale Island Docks
    {
      type: "dock",
      tooltip: "Pirate Raider's Dock",
      region: "Breakwater",
      place: "New Royale Island",
      details: {
        title: "Pirate Raider's Dock",
        coordinates: { x: 1333, y: 1766 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Pirate Raider's Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "New Royal North Dock",
      region: "Breakwater",
      place: "New Royale Island",
      details: {
        title: "New Royal North Dock",
        coordinates: { x: 1438, y: 1927 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Royal North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "New Royal South Dock",
      region: "Breakwater",
      place: "New Royale Island",
      details: {
        title: "New Royal South Dock",
        coordinates: { x: 1656, y: 2300 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Royal North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "New Royal Island South Dock",
      region: "Breakwater",
      place: "New Royale Island",
      details: {
        title: "New Royal Island South Dock",
        coordinates: { x: 1298, y: 2026 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Royal North Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Crab Island Dock",
      region: "Breakwater",
      place: "Crab Island",
      details: {
        title: "New Royal Island South Dock",
        coordinates: { x: 1057, y: 2073 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Crab Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Broken Finger Region Docks
    {
      type: "dock",
      tooltip: "Broken Finger Town Dock",
      region: "Broken Finger",
      place: "Broken Finger",
      details: {
        title: "Broken Finger Town Dock",
        coordinates: { x: 1146, y: 3769 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Broken Finger Town Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "dock",
      tooltip: "Broken Finger Island Dock",
      region: "Broken Finger",
      place: "Broken Finger",
      details: {
        title: "Broken Finger Island Dock",
        coordinates: { x: 1426, y: 3835 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Broken Finger Island Dock is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  quests: [
    // Valinor Island Quests
    {
      type: "quest",
      tooltip: "Sandre (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Sandre (Wanders)",
        coordinates: { x: 768, y: 137 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sandre (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Captain of the Guard",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Captain of the Guard",
        coordinates: { x: 760, y: 147 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Captain of the Guard is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Kumba Northern (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Kumba Northern (Wanders)",
        coordinates: { x: 757, y: 135 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kumba Northern (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Mary Locksley (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Mary Locksley (Wanders)",
        coordinates: { x: 772, y: 144 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mary Locksley (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Davey Logan (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Davey Logan (Wanders)",
        coordinates: { x: 745, y: 143 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Davey Logan (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Imica (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Imica (Wanders)",
        coordinates: { x: 742, y: 135 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Imica (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Timothy Jager (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Timothy Jager (Wanders)",
        coordinates: { x: 732, y: 135 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Timothy Jager (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Sandre (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Sandre (Wanders)",
        coordinates: { x: 748, y: 104 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sandre (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Hereward (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Hereward (Wanders)",
        coordinates: { x: 764, y: 143 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hereward (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Topacia (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Topacia (Wanders)",
        coordinates: { x: 770, y: 108 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Topacia (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Alchemist Baki",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Alchemist Baki",
        coordinates: { x: 780, y: 114 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Alchemist Baki is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Sarah Bent",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Sarah Bent",
        coordinates: { x: 781, y: 119 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sarah Bent is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Serina Wilcut",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Serina Wilcut",
        coordinates: { x: 781, y: 121 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Serina Wilcut is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Knight Bastrop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Knight Bastrop",
        coordinates: { x: 779, y: 123 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Knight Bastrop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Eustacius (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Eustacius (Wanders)",
        coordinates: { x: 785, y: 125 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Eustacius (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Curtis Leabu (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Curtis Leabu (Wanders)",
        coordinates: { x: 786, y: 95 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Curtis Leabu (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Hasculf (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Hasculf (Wanders)",
        coordinates: { x: 782, y: 93 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hasculf (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "A Young Maid (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "A Young Maid (Wanders)",
        coordinates: { x: 794, y: 156 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about A Young Maid (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Eastern Gate Lieutenant",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Eastern Gate Lieutenant",
        coordinates: { x: 885, y: 136 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Eastern Gate Lieutenant is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Roger Duncan",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Roger Duncan",
        coordinates: { x: 646, y: 179 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roger Duncan is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Paula Duncan",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Paula Duncan",
        coordinates: { x: 646, y: 187 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Paula Duncan is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Quests

    // Lotor's Summer Palace Quests
    {
      type: "quest",
      tooltip: "Captain Renwood",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Captain Renwood",
        coordinates: { x: 793, y: 601 },
        image: "images/npcs/captain_renwood.png", // Placeholder image path
        lore: "Captain Renwood is a quest-giving NPC located in Lotor's Summer Palace. He is looking for heroes to assist with various tasks.",
        npcs: [],
        links: [{ text: "Captain Renwood's Quests (Wiki)", url: "#" }],
      },
    },
    {
      type: "quest",
      tooltip: "Donkeo",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Donkeo",
        coordinates: { x: 850, y: 726 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Donkeo is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Rodald (Wanders) - Rock Trolls Near Josody",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Rodald (Wanders) - Rock Trolls Near Josody",
        coordinates: { x: 824, y: 675 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Rodald (Wanders) - Rock Trolls Near Josody is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "quest",
      tooltip: "Estiban (Wanders) - Sand Golems",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Estiban (Wanders) - Sand Golems",
        coordinates: { x: 842, y: 697 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Estiban (Wanders) - Sand Golems is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    // Add more quests NPCs as needed
  ],

  shops: [
    /*Party Island Shops*/
    {
      type: "shop_pub",
      tooltip: "Dalgo's Tavern",
      region: "Krythan",
      place: "Party Island",
      details: {
        title: "Dalgo's Tavern",
        coordinates: { x: 436, y: 85 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dalgo's Tavern is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Valinor Shops */
    {
      type: "shop_pub",
      tooltip: "Larodeth Lywelyn's Pub and Grub Tavern",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Larodeth Lywelyn's Pub and Grub Tavern",
        coordinates: { x: 747, y: 114 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Larodeth Lywelyn's Pub and Grub Tavern is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_weapon",
      tooltip: "Micheal Vonda's Weapon Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Micheal Vonda's Weapon Shop",
        coordinates: { x: 736, y: 118 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Micheal Vonda's Weapon Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_armor",
      tooltip: "Thomas Blackstone's Armor Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Thomas Blackstone's Armor Shop",
        coordinates: { x: 731, y: 123 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Thomas Blackstone's Armor Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_provisioner",
      tooltip: "Whiliam Rosen's Provisioner Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Whiliam Rosen's Provisioner Shop",
        coordinates: { x: 733, y: 114 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whiliam Rosen's Provisioner Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_provisioner",
      tooltip: "Leon Elias's Provisioner Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Leon Elias's Provisioner Shop",
        coordinates: { x: 770, y: 118 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Leon Elias's Provisioner Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Cladius Zamilus's Magic Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Cladius Zamilus's Magic Shop",
        coordinates: { x: 782, y: 113 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cladius Zamilus's Magic Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_carpentry",
      tooltip: "Linus Houson's Carpentry Store",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Linus Houson's Carpentry Store",
        coordinates: { x: 750, y: 150 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Linus Houson's Carpentry Store is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Kerry Thomas' Blacksmith Shop ",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Kerry Thomas' Blacksmith Shop ",
        coordinates: { x: 750, y: 151 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kerry Thomas' Blacksmith Shop  is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_leather",
      tooltip: "Tina Florence's Leather Shop",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Tina Florence's Leather Shop",
        coordinates: { x: 750, y: 152 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tina Florence's Leather Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    /* Krythan Shops */

    //Varg Shops
    {
      type: "shop_generic",
      tooltip: "Magic Shop",
      region: "Krythan",
      place: "Varg",
      details: {
        title: "Magic Shop",
        coordinates: { x: 778, y: 1191 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Magic Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /*Lotor's Summer Palace Shops*/
    {
      type: "shop_weapon",
      tooltip: "O'riles Weapon Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "O'riles Weapon Shop",
        coordinates: { x: 810, y: 674 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about O'riles Weapon Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_armor",
      tooltip: "Colleen Franks' Armor Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Colleen Franks' Armor Shop",
        coordinates: { x: 809, y: 681 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Colleen Franks' Armor Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Garius' Farming Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Garius' Farming Shop",
        coordinates: { x: 860, y: 713 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Garius' Farming Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_carpentry",
      tooltip: "Tom Uslak Carpentry Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Tom Uslak Carpentry Shop",
        coordinates: { x: 852, y: 710 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tom Uslak Carpentry Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Blueprint Sales",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Blueprint Sales",
        coordinates: { x: 768, y: 621 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Blueprint Sales is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Surveying and Tools Sales",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Surveying and Tools Sales",
        coordinates: { x: 770, y: 621 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Surveying and Tools Sales is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Wizard Swishwhich's Shop - Currency: Rune Fragment",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Wizard Swishwhich's Shop - Currency: Rune Fragment",
        coordinates: { x: 772, y: 601 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wizard Swishwhich's Shop - Currency: Rune Fragment is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Wizard Blunderstone",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Wizard Blunderstone",
        coordinates: { x: 771, y: 602 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wizard Blunderstone is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "VIP Store",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "VIP Store",
        coordinates: { x: 763, y: 604 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about VIP Store is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Lotor's Gardener's Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Lotor's Gardener's Shop",
        coordinates: { x: 762, y: 598 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotor's Gardener's Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Larson Davide's Shipyard Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Larson Davide's Shipyard Shop",
        coordinates: { x: 790, y: 593 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Larson Davide's Shipyard Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Tides of Fate Raft Offer",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Tides of Fate Raft Offer",
        coordinates: { x: 792, y: 593 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tides of Fate Raft Offer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Doyle Trobush's Magic Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Doyle Trobush's Magic Shop",
        coordinates: { x: 756, y: 677 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Doyle Trobush's Magic Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Panteo's Runecrafting Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Panteo's Runecrafting Shop",
        coordinates: { x: 789, y: 660 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Panteo's Runecrafting Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_jewelry",
      tooltip: "Canuelle's Jewelry Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Canuelle's Jewelry Shop",
        coordinates: { x: 789, y: 690 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Canuelle's Jewelry Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_leather",
      tooltip: "Mongor's Leatherworking Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Mongor's Leatherworking Shop",
        coordinates: { x: 803, y: 704 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mongor's Leatherworking Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Kaleic's Blacksmith Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Kaleic's Blacksmith Shop",
        coordinates: { x: 800, y: 699 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kaleic's Blacksmith Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_provisioner",
      tooltip: "Mace Gurban's Provisioner Shop",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Mace Gurban's Provisioner Shop",
        coordinates: { x: 811, y: 698 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mace Gurban's Provisioner Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_pub",
      tooltip: "Docale's Pub",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Docale's Pub",
        coordinates: { x: 844, y: 727 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Docale's Pub is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done

    //Scarab Island Shops
    //Lopal Shops
    {
      type: "shop_carpentry",
      tooltip: "Ricbert's Carpentry Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Ricbert's Carpentry Shop",
        coordinates: { x: 405, y: 2192 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ricbert's Carpentry Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Berctuald's Farming Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Berctuald's Farming Shop",
        coordinates: { x: 398, y: 2194 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Berctuald's Farming Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_pub",
      tooltip: "Osric's Pub",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Osric's Pub",
        coordinates: { x: 402, y: 2219 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Osric's Pub is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_provisioner",
      tooltip: "Wulfhere's Provisioner Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Wulfhere's Provisioner Shop",
        coordinates: { x: 384, y: 2219 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wulfhere's Provisioner Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_weapon",
      tooltip: "Killjoy's Weaponry Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Killjoy's Weaponry Shop",
        coordinates: { x: 370, y: 2219 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Killjoy's Weaponry Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_armor",
      tooltip: "Harkyn's Armor Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Harkyn's Armor Shop",
        coordinates: { x: 374, y: 2215 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Harkyn's Armor Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "shop_generic",
      tooltip: "Aldulf's Magic Shop",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Aldulf's Magic Shop",
        coordinates: { x: 379, y: 2236 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Aldulf's Magic Shop is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Done
  ],

  trainers: [
    // Trainers category encompasses various trainer and taskmaster NPCs

    // Valinor Island Trainers

    {
      type: "trainer",
      tooltip: "Tradeskill Trainers",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Tradeskill Trainers",
        coordinates: { x: 754, y: 111 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tradeskill Trainers is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Weapon Trainers",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Weapon Trainers",
        coordinates: { x: 763, y: 111 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Weapon Trainers is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Leadership Trainers",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Leadership Trainers",
        coordinates: { x: 762, y: 120 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Leadership Trainers is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Carpentry Taskmaster",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Carpentry Taskmaster",
        coordinates: { x: 855, y: 716 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Carpentry Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Farming Taskmaster",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Farming Taskmaster",
        coordinates: { x: 861, y: 704 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Farming Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Tailoring Trainer",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Tailoring Trainer",
        coordinates: { x: 735, y: 107 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tailoring Trainer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Farming Trainer",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Farming Trainer",
        coordinates: { x: 771, y: 113 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Farming Trainer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Ralnaka (Farming Information)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Ralnaka (Farming Information)",
        coordinates: { x: 768, y: 113 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ralnaka (Farming Information) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Valinor Orb Reset",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Valinor Orb Reset",
        coordinates: { x: 716, y: 98 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valinor Orb Reset is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Island Steward",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Island Steward",
        coordinates: { x: 776, y: 101 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Island Steward is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Osalka Farming Expert (Wanders)",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Osalka Farming Expert (Wanders)",
        coordinates: { x: 778, y: 173 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Osalka Farming Expert (Wanders) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Trainers

    // Lotor's Summer Palace Trainers
    {
      type: "trainer",
      tooltip: "Master Draftsman",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Master Draftsman",
        coordinates: { x: 774, y: 617 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Master Draftsman is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Henchman Trainer",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Henchman Trainer",
        coordinates: { x: 837, y: 706 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Henchman Trainer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Real Estate Agent",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Real Estate Agent",
        coordinates: { x: 768, y: 618 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Real Estate Agent is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Lotorian Faction Officer",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Lotorian Faction Officer",
        coordinates: { x: 779, y: 607 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotorian Faction Officer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Champion of Lotor",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Champion of Lotor",
        coordinates: { x: 782, y: 599 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Champion of Lotor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Advanced Skill Trainer",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Advanced Skill Trainer",
        coordinates: { x: 787, y: 600 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Advanced Skill Trainer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Fishing Event Judge",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Fishing Event Judge",
        coordinates: { x: 793, y: 621 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Fishing Event Judge is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Mining Event Judge",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Mining Event Judge",
        coordinates: { x: 815, y: 708 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mining Event Judge is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Lotor's Steward",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Lotor's Steward",
        coordinates: { x: 769, y: 608 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotor's Steward is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Alchemy Taskmaster",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Alchemy Taskmaster",
        coordinates: { x: 761, y: 681 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Alchemy Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Brewing Taskmaster",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Brewing Taskmaster",
        coordinates: { x: 846, y: 732 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Brewing Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Neutral Faction Officer",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Neutral Faction Officer",
        coordinates: { x: 834, y: 731 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Neutral Faction Officer is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Trainers

    // Silvest Valley Trainers

    // Krythan Trainers

    // Scarab Island Trainers
    // Lopal Trainers
    {
      type: "trainer",
      tooltip: "Carpentry Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Carpentry Taskmaster",
        coordinates: { x: 404, y: 2196 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Carpentry Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Farming Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Farming Taskmaster",
        coordinates: { x: 392, y: 2196 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Farming Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Tailoring Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Tailoring Taskmaster",
        coordinates: { x: 407, y: 2210 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tailoring Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Brewing Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Brewing Taskmaster",
        coordinates: { x: 400, y: 2225 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Brewing Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Blacksmith Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Blacksmith Taskmaster",
        coordinates: { x: 377, y: 2213 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Blacksmith Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Leatherworking Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Leatherworking Taskmaster",
        coordinates: { x: 359, y: 2207 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Leatherworking Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "trainer",
      tooltip: "Alchemy Taskmaster",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Alchemy Taskmaster",
        coordinates: { x: 378, y: 2234 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Alchemy Taskmaster is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Add more trainers
  ],

  spawn_good: [
    //Valinor Island Spawns
    {
      type: "spawn_good",
      tooltip: "Spawn Gate",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Spawn Gate",
        coordinates: { x: 777, y: 139 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Spawns
    // Silvest Valley Spawns

    // Krythan Region Spawns

    // Scarab Island Spawns
    {
      type: "spawn_good",
      tooltip: "Good Spawn Gate",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Good Spawn Gate",
        coordinates: { x: 438, y: 2024 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Good Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sands of Creation Spawns
    // Ruhura Side Spawns
    {
      type: "spawn_good",
      tooltip: "Good Spawn Gate",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Good Spawn Gate",
        coordinates: { x: 262, y: 3553 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Good Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Khafra Side Spawns
  ],

  spawn_evil: [
    //Valinor Island Spawns

    //Krythan Island Spawns
    // Silvest Valley Region Spawns

    // Krythan Region Spawns
    {
      type: "spawn_evil",
      tooltip: "Evil Spawn Gate",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Evil Spawn Gate",
        coordinates: { x: 775, y: 871 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Evil Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Scarab Island Spawns
    {
      type: "spawn_evil",
      tooltip: "Evil Spawn Gate",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Evil Spawn Gate",
        coordinates: { x: 198, y: 2133 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Evil Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sands of Creation Spawns
    // Ruhura Side Spawns
    {
      type: "spawn_evil",
      tooltip: "Evil Spawn Gate",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Evil Spawn Gate",
        coordinates: { x: 374, y: 4023 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Evil Spawn Gate is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Khafra Side Spawns
    // No evil spawns on Khafra Side as of now
  ],

  banks: [
    //Valinor Island Banks

    {
      type: "bank",
      tooltip: "Bank",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Bank",
        coordinates: { x: 742, y: 98 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bank is coming soon.",
        npcs: [],
        links: [],
      },
    },
    //Lotor's Summer Palace Banks
    {
      type: "bank",
      tooltip: "Bank",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Bank",
        coordinates: { x: 839, y: 679 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bank is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Banks

    // Silvest Valley Banks
    //Fort Eastwatch
    {
      type: "bank",
      tooltip: "Bank",
      region: "Krythan",
      place: "Fort Eastwatch",
      details: {
        title: "Bank",
        coordinates: { x: 1351, y: 1287 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bank is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Silvest Banks
    {
      type: "bank",
      tooltip: "Bank",
      region: "Krythan",
      place: "Silvest",
      details: {
        title: "Bank",
        coordinates: { x: 1096, y: 1373 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bank is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Banks

    // Scarab Island Banks
    {
      type: "bank",
      tooltip: "Bank",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Bank",
        coordinates: { x: 417, y: 2218 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bank is coming soon.",
        npcs: [],
        links: [],
      },
    },

    //Mainland Banks
    //Western Mainland Banks

    //Eastern Mainland Banks

    //Tundria Banks

    // Add more banks
  ],

  altars: [
    {
      type: "altar",
      tooltip: "Evil Altar",
      region: "Western Isles",
      place: "Hell",
      details: {
        title: "Evil Altar",
        coordinates: { x: 1003, y: 3321 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Evil Altar is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  crafting: [
    // Add markers for obelisks and ruin spires here
    /* Mainland Crafting Locations */
    // Region Western Isles
    {
      type: "obelisk",
      tooltip: "Desprail Island Obelisk",
      region: "Western Isles",
      place: "Desprail Island",
      details: {
        title: "Desprail Island Obelisk",
        coordinates: { x: 2107, y: 2732 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Desprail Island Obelisk is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "obelisk",
      tooltip: "Hell Rune Spire",
      region: "Hell",
      place: "Hell",
      details: {
        title: "Hell Rune Spire",
        coordinates: { x: 1031, y: 3481 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hell Rune Spire is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Crafting Region: Tundria
    {
      type: "obelisk",
      tooltip: "Northwest Tundria Obelisk",
      region: "Tundria",
      place: "Northwest Tundria",
      details: {
        title: "Hammerfist Obelisk",
        coordinates: { x: 1637, y: 119 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hammerfist Obelisk is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "obelisk",
      tooltip: "Hammerfist Obelisk",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Hammerfist Obelisk",
        coordinates: { x: 2958, y: 988 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hammerfist Obelisk is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "obelisk",
      tooltip: "Tundria Rune Spire",
      region: "Tundria",
      place: "West of Trapdoor to Hammerfist Mine",
      details: {
        title: "Hammerfist Obelisk",
        coordinates: { x: 2965, y: 647 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tundria Rune Spire is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  undergrounds: [
    /* Valinor Island Undergrounds */
    {
      type: "underground_dungeon",
      tooltip: "Frump's Lair",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Frump's Lair",
        coordinates: { x: 607, y: 357 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Frump's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Bonesnarl's Lair",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Bonesnarl's Lair",
        coordinates: { x: 873, y: 309 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bonesnarl's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    }, //I need to verify this location
    {
      type: "underground_stairs",
      tooltip: "Stairs to Mage Trainers",
      region: "Valinor Island",
      place: "Valinor",
      details: {
        title: "Stairs to Mage Trainers",
        coordinates: { x: 761, y: 116 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Stairs to Mage Trainers is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Lotor's Summer Palace Undergrounds */
    {
      type: "underground_dungeon",
      tooltip: "Sewer Entrance",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Sewer Entrance",
        coordinates: { x: 762, y: 752 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sewer Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Leather and Armor Shop Basement",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Leather and Armor Shop Basement",
        coordinates: { x: 797, y: 707 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Leather and Armor Shop Basement is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Krythan Island Undergrounds */

    // Region: Silvest Valley Undergrounds
    {
      type: "underground_snake",
      tooltip: "Snake Pit",
      region: "Krythan",
      place: "Silvest Valley",
      details: {
        title: "Snake Pit",
        coordinates: { x: 965, y: 1346 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Snake Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Krythan Crypt",
      region: "Krythan",
      place: "Silvest Valley",
      details: {
        title: "Krythan Crypt",
        coordinates: { x: 905, y: 1029 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krythan Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_mine",
      tooltip: "Cliffside Mines",
      region: "Krythan",
      place: "Silvest Valley",
      details: {
        title: "Cliffside Mines",
        coordinates: { x: 1096, y: 1182 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cliffside Mines is coming soon.",
        npcs: [],
        links: [],
      },
    },

  

    // Region: Krythan Undergrounds
    {
      type: "underground_stairs",
      tooltip: "Gideon's Trapdoor",
      region: "Krythan",
      place: "Monk Island",
      details: {
        title: "Gideon's Trapdoor",
        coordinates: { x: 508, y: 582 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gideon's Trapdoor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Mirthik's Underground",
      region: "Krythan",
      place: "Mirthik's Underground",
      details: {
        title: "Gideon's Trapdoor",
        coordinates: { x: 508, y: 607 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mirthik's Underground is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Mirthik's Underground",
      region: "Krythan",
      place: "Monk Island",
      details: {
        title: "Mirthik's Underground",
        coordinates: { x: 503, y: 642 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mirthik's Trapdoor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_snake",
      tooltip: "Snake pit",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Snake pit",
        coordinates: { x: 325, y: 740 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Snake pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Holendar's Mansion Basement",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Holendar's Mansion Basement",
        coordinates: { x: 818, y: 1042 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Holendar's Mansion Basement is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Trap Door to LSP",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Trap Door to LSP",
        coordinates: { x: 779, y: 861 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Trap Door to LSP is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Ladder to LSP Sewer (Away from evil spawn gate)",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Ladder to LSP Sewer (Away from evil spawn gate)",
        coordinates: { x: 789, y: 916 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ladder to LSP Sewer (Away from evil spawn gate) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Orc Fort Tunnels",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Orc Fort Tunnels",
        coordinates: { x: 792, y: 1574 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Fort Tunnels is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Orc Fort Tunnels",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Orc Fort Tunnels",
        coordinates: { x: 753, y: 1538 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Fort Tunnels is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Talazarian Dungeon",
      region: "Krythan",
      place: "Krythan Fields",
      details: {
        title: "Talazarian Dungeon",
        coordinates: { x: 361, y: 1463 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Talazarian Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Scarab Island Undergrounds
    {
      type: "underground_crypt",
      tooltip: "Lopal Crypt", // Something very strange about this crypt.
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Lopal Crypt",
        coordinates: { x: 271, y: 2200 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lopal Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    }, 
    {
      type: "underground_mine",
      tooltip: "Scarab Island Mine",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Scarab Island Mine",
        coordinates: { x: 342, y: 2135 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scarab Island Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Lopal Catacombs",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Lopal Catacombs",
        coordinates: { x: 406, y: 2230 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lopal Catacombs is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Werewolf Island Undergrounds
    {
      type: "underground_cave",
      tooltip: "Werewolf Cave",
      region: "Krythan",
      place: "Werewolf Island",
      details: {
        title: "Werewolf Cave",
        coordinates: { x: 317, y: 2602 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Werewolf Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Lycanth Crypt",
      region: "Krythan",
      place: "Werewolf Island",
      details: {
        title: "Lycanth Crypt",
        coordinates: { x: 296, y: 2616 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lycanth Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Undergrounds */

    // Darkwoods Forest Region Undergrounds
    {
      type: "underground_spider",
      tooltip: "Shadow Spider Cave",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Shadow Spider Cave",
        coordinates: { x: 1462, y: 2674 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Shadow Spider Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Swamp Beast Cave",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Swamp Beast Cave",
        coordinates: { x: 1653, y: 2677 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Swamp Beast Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Swamp Beast Cave",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Swamp Beast Cave",
        coordinates: { x: 1571, y: 2656 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Swamp Beast Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_scorpion",
      tooltip: "Scorpion Pit",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Scorpion Pit",
        coordinates: { x: 836, y: 3268 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scorpion Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_termigon",
      tooltip: "Termigon Pit",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Termigon Pit",
        coordinates: { x: 758, y: 3321 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Termigon Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_mine",
      tooltip: "South Astari Rune Shelter",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "South Astari Rune Shelter",
        coordinates: { x: 798, y: 3334 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about South Astari Rune Shelter is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_snake",
      tooltip: "Whisperdale Snake Pit",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Whisperdale Snake Pit",
        coordinates: { x: 472, y: 3430 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whisperdale Snake Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_ant",
      tooltip: "Dunmarrow Fire Ant Pit",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Dunmarrow Fire Ant Pit",
        coordinates: { x: 1270, y: 3030 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dunmarrow Fire Ant Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "McKelsky Crypt",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "McKelsky Crypt",
        coordinates: { x: 1429, y: 3044 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about McKelsky Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Marsh Dungeon",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Marsh Dungeon",
        coordinates: { x: 481, y: 3505 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Marsh Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Cathedral of Joyous Afterlife (North Entrance)",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Cathedral of Joyous Afterlife (North Entrance)",
        coordinates: { x: 632, y: 3186 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cathedral of Joyous Afterlife (North Entrance) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Cathedral of Joyous Afterlife (South Entrance)",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "Cathedral of Joyous Afterlife (South Entrance)",
        coordinates: { x: 679, y: 3318 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cathedral of Joyous Afterlife (South Entrance) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Highlands Region Undergrounds
    {
      type: "underground_closed",
      tooltip: "Cave (CLOSED)",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Cave (CLOSED)",
        coordinates: { x: 3560, y: 1926 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cave (CLOSED) is coming soon.",
        npcs: [],
        links: [],
      },
    }, // Used to be Astari Cave but it's closed now
    {
      type: "underground_cave",
      tooltip: "Grell",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Grell",
        coordinates: { x: 3238, y: 3605 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Grell is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Grell Tunnels",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Grell Tunnels",
        coordinates: { x: 3334, y: 3594 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Grell Tunnels is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Badlands Cave",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Badlands Cave",
        coordinates: { x: 2887, y: 2881 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Badlands Cave is coming soon.",
        npcs: [],
        links: [],
      },
    }, // I'm adding this to Highlands but it could be a part of Battle Plains
    {
      type: "underground_stairs",
      tooltip: "Badlands Entrance",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Badlands Entrance",
        coordinates: { x: 2708, y: 2886 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Badlands Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Vel Dran Cave",
      region: "Mainland",
      place: "Highlands",
      details: {
        title: "Vel Dran Cave",
        coordinates: { x: 3286, y: 3299 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Vel Dran Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Necropolis Undergrounds
    {
      type: "underground_stairs",
      tooltip:
        "Trap Door to Necropolis Magic and Farm Shops (They do not work)",
      region: "Mainland",
      place: "Necropolis",
      details: {
        title:
          "Trap Door to Necropolis Magic and Farm Shops (They do not work)",
        coordinates: { x: 1361, y: 2887 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Trap Door to Necropolis Magic and Farm Shops (They do not work) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Ladder to inside Necropolis",
      region: "Mainland",
      place: "Necropolis",
      details: {
        title: "Ladder to inside Necropolis",
        coordinates: { x: 1347, y: 2931 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ladder to inside Necropolis is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Region Undergrounds
    {
      type: "underground_stairs",
      tooltip: "Chlera Catacombs",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Chlera Catacombs",
        coordinates: { x: 2328, y: 3618 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chlera Catacombs is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Desprail Cave",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Desprail Cave",
        coordinates: { x: 2135, y: 3154 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Desprail Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Badlands Cave",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Badlands Cave",
        coordinates: { x: 2289, y: 2778 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Badlands Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Deep Shadow Temple",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Deep Shadow Temple",
        coordinates: { x: 2008, y: 2674 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Deep Shadow Temple is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_snake",
      tooltip: "Krog Snake Pit",
      region: "Mainland",
      place: "Battle Plains",
      details: {
        title: "Krog Snake Pit",
        coordinates: { x: 3271, y: 3989 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krog Snake Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Region Undergrounds
    {
      type: "underground_sewer",
      tooltip: "Krog Sewer",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Krog Sewer",
        coordinates: { x: 2822, y: 3622 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krog Sewer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_sewer",
      tooltip: "Krog Sewer",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Krog Sewer",
        coordinates: { x: 3017, y: 3813 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krog Sewer is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Drakkan Crypt",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Drakkan Crypt",
        coordinates: { x: 2791, y: 3832 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Drakkan Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_sewer",
      tooltip: "Waste Tunnels",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Waste Tunnels",
        coordinates: { x: 3243, y: 3833 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Waste Tunnels is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_ant",
      tooltip: "Ant Hill",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Ant Hill",
        coordinates: { x: 3094, y: 3864 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ant Hill is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_scorpion",
      tooltip: "Scorpion",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Scorpion",
        coordinates: { x: 3129, y: 3659 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scorpion is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Valekar's Fortress Dungeon",
      region: "Mainland",
      place: "Black Swamp",
      details: {
        title: "Valekar's Fortress Dungeon",
        coordinates: { x: 3078, y: 3515 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valekar's Fortress Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Highlands Region Undergrounds

    // Western Isles Undergrounds
    {
      type: "underground_stairs",
      tooltip: "Shadow Temple South Entrance",
      region: "Western Isles",
      place: "Western Isles",
      details: {
        title: "Shadow Temple South Entrance",
        coordinates: { x: 2109, y: 2764 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Shadow Temple South Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Valley of Giants Undergrounds

    // Heartwood Coast Undergrounds
    {
      type: "underground_crypt",
      tooltip: "Gnobol Mauseleum Crypt",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Gnobol Mauseleum Crypt",
        coordinates: { x: 3078, y: 1606 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gnobol Mauseleum Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Syldural",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Syldural",
        coordinates: { x: 3272, y: 1632 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Syldural is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_snake",
      tooltip: "Valmond Skeleton Pit",
      region: "Mainland",
      place: "Heartwood Coast",
      details: {
        title: "Valmond Skeleton Pit",
        coordinates: { x: 3191, y: 1880 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond Skeleton Pit is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Tundria Region Undergrounds
    {
      type: "underground_cave",
      tooltip: "Icebane's Cavern Entrance",
      region: "Tundria",
      place: "Tundria",
      details: {
        title: "Icebane's Cavern Entrance",
        coordinates: { x: 2304, y: 1367 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Icebane's Cavern Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Maroven Crypt",
      region: "Tundria",
      place: "Tundria",
      details: {
        title: "Maroven Crypt",
        coordinates: { x: 2040, y: 1392 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Maroven Crypt",
      region: "Tundria",
      place: "Maroven",
      details: {
        title: "Maroven Crypt",
        coordinates: { x: 1990, y: 1208 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Hammerfist Mine Entrance",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Hammerfist Mine Entrance",
        coordinates: { x: 2775, y: 593 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hammerfist Mine Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Web Spinner Spider Cave",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Web Spinner Spider Cave",
        coordinates: { x: 2872, y: 963 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Web Spinner Spider Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Duremar Tomb",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Duremar Tomb",
        coordinates: { x: 3524, y: 1263 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Duremar Tomb is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_crypt",
      tooltip: "Unknown Crypt", // A Crypt with Greater Skeletons Question
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Unknown Crypt",
        coordinates: { x: 3783, y: 985 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Unknown Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    }, 
    {
      type: "underground_dungeon",
      tooltip: "Frieda's Dungeon",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Frieda's Dungeon",
        coordinates: { x: 2550, y: 438 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Frieda's Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Artraxis Dungeon",
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Artraxis Dungeon",
        coordinates: { x: 2887, y: 425 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artraxis Dungeon is coming soon. Note: This coordinate is off by a few pixels from the actual dungeon entrance. x:2888, y:423 is correct.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Darok the Banished's Jail", // Not sure on the name - Question Mark
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Artraxis Dungeon",
        coordinates: { x: 2919, y: 408 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artraxis Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Darok the Banished's Jail", // Not sure on the name - Question Mark
      region: "Mainland",
      place: "Tundria",
      details: {
        title: "Artraxis Dungeon",
        coordinates: { x: 2895, y: 442 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artraxis Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Trap Door to Hammerfist Mine", // Not sure on the name - Question Mark
      region: "Tundria",
      place: "Tundria Northeast Coast",
      details: {
        title: "Artraxis Dungeon",
        coordinates: { x: 2837, y: 612 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Trap Door to Hammerfist Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Hell Undergrounds
    {
      type: "underground_dungeon",
      tooltip: "Lotorian Dungeon",
      region: "Western Isles",
      place: "Hell",
      details: {
        title: "Lotorian Dungeon",
        coordinates: { x: 1207, y: 3347 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotorian Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "The Den of Baylor",
      region: "Western Isles",
      place: "Hell",
      details: {
        title: "The Den of Baylor",
        coordinates: { x: 1125, y: 3392 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about The Den of Baylor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Horned One Cave",
      region: "Western Isles",
      place: "Hell",
      details: {
        title: "Horned One Cave",
        coordinates: { x: 1306, y: 3384 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Horned One Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sands of Creation Region
    // Ruhura Side Undergrounds
    {
      type: "underground_cave",
      tooltip: "Ruhura Elemental Cave",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Ruhura Elemental Cave",
        coordinates: { x: 544, y: 3837 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruhura Elemental Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Artonian Pass to Ruhura Side",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Artonian Pass to Ruhura Side",
        coordinates: { x: 307, y: 3908 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artonian Pass to Ruhura Side is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Artonian Pass to Greater Dragon Island",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Artonian Pass to Greater Dragon Island",
        coordinates: { x: 400, y: 3792 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artonian Pass to Greater Dragon Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_cave",
      tooltip: "Elemental Cave",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Elemental Cave",
        coordinates: { x: 453, y: 3717 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Elemental Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Mukarramma Dungeon",
      region: "Sands of Creation",
      place: "Ruhura",
      details: {
        title: "Mukarramma Dungeon",
        coordinates: { x: 949, y: 4005 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mukarramma Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Greater Dragon Island Undergrounds
    {
      type: "underground_cave",
      tooltip: "Greater Dragon Island Cave",
      region: "Sands of Creation",
      place: "Greater Dragon Island",
      details: {
        title: "Greater Dragon Island Cave",
        coordinates: { x: 300, y: 3772 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Greater Dragon Island Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Khafra Side Undergrounds
    {
      type: "underground_cave",
      tooltip: "Khafra Elemental Cave",
      region: "Sands of Creation",
      place: "Khafra",
      details: {
        title: "Khafra Elemental Cave",
        coordinates: { x: 78, y: 3354 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra Elemental Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Breakwater Region Undergrounds
    // New Town Island Undergrounds
    {
      type: "underground_crypt",
      tooltip: "Darkwing's Lair Entrance",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "Darkwing's Lair Entrance",
        coordinates: { x: 1944, y: 1695 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darkwing's Lair Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_dungeon",
      tooltip: "Cyclops and Lion Cave",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "Cyclops and Lion Cave",
        coordinates: { x: 2038, y: 1832 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cyclops and Lion Cave is coming soon.",
        npcs: [],
        links: [],
      },
    }, // I was thinking of changing the name to New Town Mine but haven't found any info on that
    {
      type: "underground_mine",
      tooltip: "Zule's Cave Entrance",
      region: "Breakwater",
      place: "New Town Island",
      details: {
        title: "Zule's Cave Entrance",
        coordinates: { x: 2174, y: 1517 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Zule's Cave Entrance is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Roycroft Island Undergrounds
    {
      type: "underground_stairs",
      tooltip: "Son of Scalo's Hideout",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Son of Scalo's Hideout",
        coordinates: { x: 2215, y: 2260 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Son of Scalo's Hideout is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Warehouse Basement",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Warehouse Basement",
        coordinates: { x: 2458, y: 2357 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Warehouse Basement is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Underground Pass to Northern Roycroft Island",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Underground Pass to Northern Roycroft Island",
        coordinates: { x: 2310, y: 2198 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Underground Pass to Northern Roycroft Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Underground Pass to Southern Roycroft Island",
      region: "Breakwater",
      place: "Roycroft Island",
      details: {
        title: "Underground Pass to Southern Roycroft Island",
        coordinates: { x: 2310, y: 2184 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Underground Pass to Southern Roycroft Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // New Royale Island Undergrounds

    // Broken Finger Region Undergrounds
    {
      type: "underground_dungeon",
      tooltip: "Broken Finger Dungeon",
      region: "Broken Finger",
      place: "Broken Finger",
      details: {
        title: "Broken Finger Dungeon",
        coordinates: { x: 1144, y: 3658 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Broken Finger Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Trap Door to Gulley Portal ",
      region: "Broken Finger",
      place: "Broken Finger",
      details: {
        title: "Trap Door to Gulley Portal ",
        coordinates: { x: 1292, y: 3714 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Trap Door to Gulley Portal  is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "underground_stairs",
      tooltip: "Entrance to Horned Ones Cave",
      region: "Broken Finger",
      place: "Broken Finger",
      details: {
        title: "Entrance to Horned Ones Cave",
        coordinates: { x: 1212, y: 3557 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Entrance to Horned Ones Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  games_of_chance: [
    /*Lotor's Summer Palace Games*/
    {
      type: "game_of_chance",
      tooltip: "Malson's Demon's Eye Game",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Malson's Demon's Eye Game",
        coordinates: { x: 839, y: 730 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Malson's Demon's Eye Game is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Games of Chance
    // Silvest Valley Games of Chance

    // Krythan Games of Chance

    // Scarab Island Games of Chance
    {
      type: "game_of_chance",
      tooltip: "Lopal Demon Eye",
      region: "Krythan",
      place: "Scarab Island",
      details: {
        title: "Lopal Demon Eye",
        coordinates: { x: 421, y: 2197 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lopal Demon Eye is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  information: [
    /* Valinor Island Information */

    /*Lotor's Summer Palace Information*/
    {
      type: "information",
      tooltip: "Fallen Warriors Memorial",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Fallen Warriors Memorial",
        coordinates: { x: 736, y: 591 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Fallen Warriors Memorial is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "information",
      tooltip: "Memorial to the Lost Sons",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Memorial to the Lost Sons",
        coordinates: { x: 715, y: 602 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Memorial to the Lost Sons is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      type: "information",
      tooltip: "Jamoal the Sage (Wanders) - Exchange Race Changing Scrolls NPC",
      region: "Krythan",
      place: "Lotor's Summer Palace",
      details: {
        title: "Jamoal the Sage (Wanders) - Exchange Race Changing Scrolls NPC",
        coordinates: { x: 772, y: 687 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Jamoal the Sage (Wanders) - Exchange Race Changing Scrolls NPC is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Information
    // Silvest Valley Region Information

    // Krythan Region Information
    // Verthpool Information
    {
      type: "information",
      tooltip: "Grim Demonhunter",
      region: "Krythan",
      place: "Vrethpool",
      details: {
        title: "Grim Demonhunter",
        coordinates: { x: 647, y: 1709 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Grim Demonhunter is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Mainland Information

    // Darkwoods Forest Region Information
    {
      type: "information",
      tooltip: "The Utopia Shard",
      region: "Mainland",
      place: "Darkwoods Forest",
      details: {
        title: "The Utopia Shard",
        coordinates: { x: 1192, y: 2903 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about The Utopia Shard is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Region Information

    // Highlands Region Information

    // Tundria Region Information

    // Western Isles Information

    // Valley of Giants Information

    // Heartwood Coast Information

    /* Desert Lands (Not sure what to call these)*/

    // Sands of Creation Region Information

    // Khafra Information

    // Ruhura Information

    // Breakwater Region Information

    // Broken Finger Region Information
  ],
};
