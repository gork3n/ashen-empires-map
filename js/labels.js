// Define all map labels organized by category
const mapLabels = {
  landmarks: [
    // Add landmark labels here
    // Valinor Island Landmarks

    // Krythan Island Landmarks
    {
      name: "Valley of the Dead",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "Valley of the Dead",
        coordinates: { x: 1374, y: 1435 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valley of the Dead is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Landmarks */

    // Darkwood Forest Region Landmarks

    // Battle Plains Region Landmarks
    {
      name: "Proudblood Valley",
      fontSize: 30,
      region: "Battle Plains",
      details: {
        title: "Proudblood Valley",
        coordinates: { x: 1752, y: 3404 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Proudblood Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Region Landmarks

    // Highlands Region Landmarks
    {
      name: "Death Tyrant Valley",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Death Tyrant Valley",
        coordinates: { x: 3597, y: 2453 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Death Tyrant Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Resource Valley",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Resource Valley",
        coordinates: { x: 3417, y: 3171 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Resource Valley is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Valley of Giants Region Landmarks
    {
      name: "Valley of Giants",
      fontSize: 30,
      region: "Valley of Giants",
      details: {
        title: "Valley of Giants",
        coordinates: { x: 3067, y: 2943 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valley of Giants is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Badlands Region Landmarks
    {
      name: "Badlands",
      fontSize: 30,
      region: "Badlands",
      details: {
        title: "Badlands",
        coordinates: { x: 2825, y: 2670 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Badlands is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Heartwood Coast Region Landmarks

    // Tundria Region Landmarks

    // Breakwater Region Landmarks

    // Western Isles Region Landmarks

    // Broken Finger Region Landmarks
  ],
  cities: [
    /* Valinor Island Cities */
    // Valinor Region Cities
    {
      name: "Valinor",
      fontSize: 24,
      region: "Valinor",
      details: {
        title: "Valinor",
        coordinates: { x: 759, y: 65 },
        image: "images/Valinor_Island-600x.png",
        lore: "Valinor is the starting city for new players, providing essential services and introductory quests to help them begin their journey in the world of Ashen Empires.",
        npcs: [
          {
            name: "Larodeth Lywelyn's Pub",
            info: "A place to rest and get quests.",
          },
          {
            name: "Micheal Vonda's Weapon Shop",
            info: "Sells starter weapons.",
          },
          {
            name: "Thomas Blackstone's Armor Shop",
            info: "Sells starter armor.",
          },
          { name: "Bank", info: "Securely store your items." },
        ],
        links: [{ text: "Valinor quests on AE Wiki", url: "#" }],
      },
    },

    /* Krythan Island Cities */
    // Krythan Region Cities
    {
      name: "Jeel",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "Jeel",
        coordinates: { x: 290, y: 807 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Jeel is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Hothbra",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "Hothbra",
        coordinates: { x: 522, y: 1058 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hothbra is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Varg",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "Varg",
        coordinates: { x: 788, y: 1171 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Varg is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "New Korelth",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "New Korelth",
        coordinates: { x: 342, y: 1440 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Korelth is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Vrethpool",
      fontSize: 30,
      region: "Krythan",
      details: {
        title: "Vrethpool",
        coordinates: { x: 670, y: 1670 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Vrethpool is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lotor's Castle",
      fontSize: 30,
      region: "Silvest Valley",
      details: {
        title: "Lotor's Castle",
        coordinates: { x: 247, y: 1116 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotor's Castle is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Silvest Valley Region Cities
    {
      name: "Cliffside",
      fontSize: 30,
      region: "Silvest Valley",
      details: {
        title: "Cliffside",
        coordinates: { x: 1066, y: 1151 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cliffside is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Silvest",
      fontSize: 30,
      region: "Silvest Valley",
      details: {
        title: "Silvest",
        coordinates: { x: 1086, y: 1355 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Fort Eastwatch",
      fontSize: 30,
      region: "Silvest Valley",
      details: {
        title: "Fort Eastwatch",
        coordinates: { x: 1344, y: 1282 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Fort Eastwatch is coming soon.",
        npcs: [],
        links: [],
      },
    },



    // Werewolf Island Cities
    {
      name: "Lycanth",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Lycanth",
        coordinates: { x: 260, y: 2633 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lycanth is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sand of Creation Cities
    {
      name: "Khafra",
      fontSize: 30,
      region: "Sands of Creation",
      details: {
        title: "Khafra",
        coordinates: { x: 248, y: 2744 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ruhura",
      fontSize: 30,
      region: "Sands of Creation",
      details: {
        title: "Ruhura",
        coordinates: { x: 381, y: 3979 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruhura is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Cities */

    // Darkwood Forest Region Cities
    {
      name: "Redwake",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Redwake",
        coordinates: { x: 456, y: 2825 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Redwake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Whisperdale",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Whisperdale",
        coordinates: { x: 405, y: 3418 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Whisperdale is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Autumn",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Autumn",
        coordinates: { x: 592, y: 3389 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Autumn is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Darkfell",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Darkfell",
        coordinates: { x: 901, y: 3064 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darkfell is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dunmarrow",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Dunmarrow",
        coordinates: { x: 1384, y: 3151 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dunmarrow is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Josody",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Josody",
        coordinates: { x: 1321, y: 2477 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Josody is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Gulley",
      fontSize: 30,
      region: "Darkwoods",
      details: {
        title: "Gulley",
        coordinates: { x: 1108, y: 2755 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gulley is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Region Cities
    {
      name: "Desprail",
      fontSize: 30,
      region: "Battle Plains",
      details: {
        title: "Desprail",
        coordinates: { x: 2220, y: 3235 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Desprail is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Chlera",
      fontSize: 30,
      region: "Battle Plains",
      details: {
        title: "Chlera",
        coordinates: { x: 2403, y: 3548 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chlera is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Region Cities
    {
      name: "Samad",
      fontSize: 30,
      region: "Black Swamp",
      details: {
        title: "Samad",
        coordinates: { x: 2636, y: 3497 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Samad is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dawat",
      fontSize: 30,
      region: "Black Swamp",
      details: {
        title: "Dawat",
        coordinates: { x: 3088, y: 3356 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dawat is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Krog",
      fontSize: 30,
      region: "Black Swamp",
      details: {
        title: "Krog",
        coordinates: { x: 3115, y: 3710 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krog is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Maraket",
      fontSize: 30,
      region: "Black Swamp",
      details: {
        title: "Maraket",
        coordinates: { x: 3064, y: 3978 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maraket is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Highlands Region Cities
    {
      name: "Grell",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Grell",
        coordinates: { x: 3240, y: 3607 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Grell is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Arda",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Arda",
        coordinates: { x: 3401, y: 3444 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Arda is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Parian",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Parian",
        coordinates: { x: 3462, y: 2939 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Parian is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ethera Palace",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Ethera Palace",
        coordinates: { x: 3536, y: 3643 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ethera Palace is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Darushk",
      fontSize: 30,
      region: "Highlands",
      details: {
        title: "Darushk",
        coordinates: { x: 3746, y: 2711 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darushk is coming soon.",
        npcs: [],
        links: [],
      },
    },

    //Tundria
    {
      name: "Hammerfist",
      fontSize: 24,
      region: "Tundria",
      details: {
        title: "Hammerfist",
        coordinates: { x: 2793, y: 849 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hammerfist is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Duremar",
      fontSize: 24,
      region: "Tundria",
      details: {
        title: "Duremar",
        coordinates: { x: 3649, y: 930 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Duremar is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Maroven",
      fontSize: 24,
      region: "Tundria",
      details: {
        title: "Maroven",
        coordinates: { x: 1943, y: 1241 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Maroven is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ringhaven Citadel",
      fontSize: 24,
      region: "Tundria",
      details: {
        title: "Ringhaven Citadel",
        coordinates: { x: 2198, y: 1206 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ringhaven Citadel is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Farstead Keep",
      fontSize: 24,
      region: "Tundria",
      details: {
        title: "Farstead Keep",
        coordinates: { x: 2822, y: 1254 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Farstead Keep is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Heartwood Coast
    {
      name: "Valmond",
      fontSize: 24,
      region: "Heartwood Coast",
      details: {
        title: "Valmond",
        coordinates: { x: 2626, y: 2106 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valmond is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Teylan",
      fontSize: 24,
      region: "Heartwood Coast",
      details: {
        title: "Teylan",
        coordinates: { x: 2497, y: 1616 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Teylan is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Syldural",
      fontSize: 24,
      region: "Heartwood Coast",
      details: {
        title: "Syldural",
        coordinates: { x: 3277, y: 1637 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Syldural is coming soon.",
        npcs: [],
        links: [],
      },
    },

    //Breakwater
    {
      name: "Roycroft",
      fontSize: 35,
      region: "Breakwater",
      details: {
        title: "Roycroft",
        coordinates: { x: 2448, y: 2336 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Roycroft is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "New Town",
      fontSize: 35,
      region: "Breakwater",
      details: {
        title: "New Town",
        coordinates: { x: 1961, y: 1885 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Town is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "New Royale",
      fontSize: 35,
      region: "Breakwater",
      details: {
        title: "New Royale",
        coordinates: { x: 1393, y: 1898 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about New Royale is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Broken Finger Region Cities
    {
      name: "Broken Finger Town",
      fontSize: 20,
      region: "Broken Finger",
      details: {
        title: "Broken Finger Town",
        coordinates: { x: 1153, y: 3712 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Broken Finger Town is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  islands: [
    //Individual Islands
    {
      name: "GM Island",
      fontSize: 30,
      region: "Special",
      details: {
        title: "GM Island",
        coordinates: { x: 150, y: 70 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about GM Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Minotaur Island",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Minotaur Island",
        coordinates: { x: 137, y: 230 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Minotaur Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Party Island",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Party Island",
        coordinates: { x: 421, y: 69 },
        image: "images/Party_Island.png",
        lore: "A festive island known for celebrations. It holds the main portal to access Lotor's Summer Palace.",
        npcs: [
          { name: "Dalgo's Tavern", info: "A lively tavern on the island." },
          {
            name: "Portal to Lotor's Summer Palace",
            info: "The primary way to reach the palace.",
          },
        ],
        links: [],
      },
    },
    {
      name: "Lotor's Prison",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Lotor's Prison",
        coordinates: { x: 1545, y: 546 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lotor's Prison is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lotor's Summer Palace",
      fontSize: 30,
      region: "Special",
      details: {
        title: "Lotor's Summer Palace",
        coordinates: { x: 775, y: 571 },
        image: "images/LSP.png",
        lore: "Lotor's Summer Palace is a central hub for players, offering access to various islands, housing realms, and a wide array of shops and services. It's a safe zone bustling with activity.",
        npcs: [
          {
            name: "Captain Renwood",
            info: "Offers quests to brave adventurers.",
          },
          { name: "Donkeo", info: "A mysterious figure with unique quests." },
          { name: "O'riles Weapon Shop", info: "Sells a variety of weapons." },
          {
            name: "Colleen Franks' Armor Shop",
            info: "Provides sturdy armor for all classes.",
          },
          {
            name: "Bank",
            info: "Securely store your valuable items and gold.",
          },
        ],
        links: [{ text: "More info on Ashen Empires Wiki", url: "#" }],
      },
    },
    {
      name: "Real Estate Island",
      fontSize: 20,
      region: "Special",
      details: {
        title: "Real Estate Island",
        coordinates: { x: 663, y: 630 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Real Estate Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Guild Arena Island",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Guild Arena Island",
        coordinates: { x: 88, y: 942 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Guild Arena Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Valinor Island",
      fontSize: 35,
      region: "Valinor",
      details: {
        title: "Valinor Island",
        coordinates: { x: 940, y: 60 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valinor Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Krythan Island",
      fontSize: 35,
      region: "Special",
      details: {
        title: "Krythan Island",
        coordinates: { x: 1090, y: 992 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krythan Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lopal",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Lopal",
        coordinates: { x: 390, y: 2183 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lopal is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Scorched Island",
      fontSize: 35,
      region: "Western Isles",
      details: {
        title: "Scorched Island",
        coordinates: { x: 795, y: 2092 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scorched Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Hell",
      fontSize: 45,
      region: "Western Isles",
      details: {
        title: "Hell",
        coordinates: { x: 1130, y: 3195 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hell is coming soon.",
        npcs: [],
        links: [],
      },
    },
    
    {
      name: "Deserted Island",
      fontSize: 14,
      region: "Special",
      details: {
        title: "Deserted Island",
        coordinates: { x: 223, y: 425 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Deserted Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Scarab Island",
      fontSize: 35,
      region: "Western Isles",
      details: {
        title: "Scarab Island",
        coordinates: { x: 259, y: 2048 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scarab Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Werewolf Island",
      fontSize: 35,
      region: "Western Isles",
      details: {
        title: "Werewolf Island",
        coordinates: { x: 463, y: 2495 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Werewolf Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dragoon Island",
      fontSize: 25,
      region: "Darkwoods", // I think this is correct because of proximity to Darkwood Forest and the bridge, but it could be Western Isles. Question Mark
      details: {
        title: "Dragoon Island",
        coordinates: { x: 350, y: 3238 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dragoon Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Obelisk Island",
      fontSize: 25,
      region: "Western Isles",
      details: {
        title: "Obelisk Island",
        coordinates: { x: 2117, y: 2704 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Obelisk Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Greater Dragon Island",
      fontSize: 25,
      region: "Sands of Creation",
      details: {
        title: "Greater Dragon Island",
        coordinates: { x: 160, y: 3792 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Greater Dragon Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ettin Island",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "Ettin Island",
        coordinates: { x: 1672, y: 1681 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ettin Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Northern Frost Giant Island",
      fontSize: 30,
      region: "Tundria",
      details: {
        title: "Northern Frost Giant Island",
        coordinates: { x: 3331, y: 254 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Northern Frost Giant Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "PvP Island",
      fontSize: 30,
      region: "Western Isles",
      details: {
        title: "PvP Island",
        coordinates: { x: 3893, y: 1688 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about PvP Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Artonian Island",
      fontSize: 20,
      region: "Sands of Creation",
      details: {
        title: "Artonian Island",
        coordinates: { x: 248, y: 3376 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artonian Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Vel Dran",
      fontSize: 24,
      region: "Highlands",
      details: {
        title: "Vel Dran",
        coordinates: { x: 3153, y: 3192 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Vel Dran is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Chaos Island",
      fontSize: 24,
      region: "Battle Plains",
      details: {
        title: "Chaos Island",
        coordinates: { x: 1823, y: 3055 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chaos Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Test Island",
      fontSize: 24,
      region: "Western Isles",
      details: {
        title: "Test Island",
        coordinates: { x: 3923, y: 3728 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Test Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Unnamed Island", // Not sure on the name Question Mark
      fontSize: 20,
      region: "Tundria",
      details: {
        title: "Unnamed Island",
        coordinates: { x: 3799, y: 975 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Unnamed Island is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Crab Island", // Not sure on the name Question Mark
      fontSize: 20,
      region: "Breakwater",
      details: {
        title: "Crab Island",
        coordinates: { x: 1063, y: 1951 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Crab Island is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Sands of Creation Islands Technically might be Ruhara Island and Khafra Island, but this might be redundant. Question Mark
  ],

  dungeons: [
    // Dungeons and Lairs Here

    // Krythan Island Dungeons - Region: Krythan
    //  
    {
      name: "Cultist Lair",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Cultist Lair",
        coordinates: { x: 874, y: 1377 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cultist Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Valinor Island Dungeons - Region: Valinor
    {
      name: "Bonesnarl's Lair",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Bonesnarl's Lair",
        coordinates: { x: 866, y: 302 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Bonesnarl's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  caves: [
    // Caves and Mines Here

    // Region: Valinor

    // Krythan Island Caves
    // Region: Krythan
    {
      name: "Minion Cave",
      fontSize: 16,
      region: "Krythan",
      details: {
        title: "Minion Cave",
        coordinates: { x: 504, y: 685 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Minion Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Minion Cave",
      fontSize: 16,
      region: "Krythan",
      details: {
        title: "Minion Cave",
        coordinates: { x: 440, y: 761 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Minion Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Flataga Mines",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Flataga Mines",
        coordinates: { x: 391, y: 1318 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Flataga Mines is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Region: Silvest Valley
    {
      name: "Silvest Mines",
      fontSize: 15,
      region: "Silvest Valley",
      details: {
        title: "Silvest Mines",
        coordinates: { x: 1017, y: 1109 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Silvest Mines is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dalvon Mines",
      fontSize: 15,
      region: "Silvest Valley",
      details: {
        title: "Dalvon Mines",
        coordinates: { x: 1433, y: 1379 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dalvon Mines is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Orc Cave",
      fontSize: 15,
      region: "Silvest Valley",
      details: {
        title: "Orc Cave",
        coordinates: { x: 1181, y: 1301 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    

    /* Mainland Caves */

    // Darkwood Forest Caves
    // Region: Battle Plains
    {
      name: "Fungoid Cave",
      fontSize: 16,
      region: "Battle Plains",
      details: {
        title: "Fungoid Cave",
        coordinates: { x: 1961, y: 3762 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Fungoid Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Region: Black Swamp
    {
      name: "Ivogur's Mine",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Ivogur's Mine",
        coordinates: { x: 2963, y: 3910 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ivogur's Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Region: Highlands
    {
      name: "Zanock's Mine (East) ",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Zanock's Mine (East) ",
        coordinates: { x: 3099, y: 2390 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Zanock's Mine (East)  is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Termigon Mine",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Termigon Mine",
        coordinates: { x: 3624, y: 3596 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Termigon Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Region: Valley of Giants

    // Heartwood Coast Caves
    {
      name: "Zanock's Mine (West)",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Zanock's Mine (West)",
        coordinates: { x: 2871, y: 2358 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Zanock's Mine (West) is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Tundria Caves

    // Breakwater Caves

    // Western Isles Caves

    // Broken Finger Caves
  ],

  interests: [
    // Places of Interest Here

    // Place of Interest - Region: Valinor
    {
      name: "Duncan's Cottage",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Duncan's Cottage",
        coordinates: { x: 651, y: 174 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Duncan's Cottage is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ruined Temple",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Ruined Temple",
        coordinates: { x: 570, y: 313 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruined Temple is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lanore",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Lanore",
        coordinates: { x: 641, y: 362 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lanore is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ecclain's Caravan",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Ecclain's Caravan",
        coordinates: { x: 1083, y: 468 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ecclain's Caravan is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Valinor Ant Hill",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Valinor Ant Hill",
        coordinates: { x: 1043, y: 282 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valinor Ant Hill is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Hermit's Hut",
      fontSize: 16,
      region: "Valinor",
      details: {
        title: "Hermit's Hut",
        coordinates: { x: 965, y: 123 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hermit's Hut is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Places of Interest - Region: Krythan
    {
      name: "Gideon Cottage",
      fontSize: 16,
      region: "Krythan",
      details: {
        title: "Gideon Cottage",
        coordinates: { x: 509, y: 574 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gideon Cottage is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Mirthik's Dwelling",
      fontSize: 16,
      region: "Krythan",
      details: {
        title: "Mirthik's Dwelling",
        coordinates: { x: 508, y: 640 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mirthik's Dwelling is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Jeel Ruins",
      fontSize: 16,
      region: "Krythan",
      details: {
        title: "Jeel Ruins",
        coordinates: { x: 504, y: 753 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Jeel Ruins is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Crypt of Kargoth",
      fontSize: 14,
      region: "Krythan",
      details: {
        title: "Crypt of Kargoth",
        coordinates: { x: 436, y: 850 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Crypt of Kargoth is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ruins of Tal S'kar",
      fontSize: 14,
      region: "Krythan",
      details: {
        title: "Ruins of Tal S'kar",
        coordinates: { x: 190, y: 989 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruins of Tal S'kar is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Holendar's Mansion",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Holendar's Mansion",
        coordinates: { x: 832, y: 1035 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Holendar's Mansion is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Krythan Cemetary",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Krythan Cemetary",
        coordinates: { x: 895, y: 1023 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krythan Cemetary is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Scalo's Den",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Scalo's Den",
        coordinates: { x: 836, y: 1279 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Scalo's Den is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Kobold Castle",
      fontSize: 18,
      region: "Krythan",
      details: {
        title: "Kobold Castle",
        coordinates: { x: 1279, y: 1123 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kobold Castle is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Karzak Cove",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Karzak Cove",
        coordinates: { x: 1376, y: 1077 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Karzak Cove is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Tallem'im house",
      fontSize: 14,
      region: "Krythan",
      details: {
        title: "Tallem'im house",
        coordinates: { x: 88, y: 1503 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tallem'im house is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Wasp Hive",
      fontSize: 14,
      region: "Krythan",
      details: {
        title: "Wasp Hive",
        coordinates: { x: 516, y: 1302 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wasp Hive is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Orc Fort",
      fontSize: 18,
      region: "Krythan",
      details: {
        title: "Orc Fort",
        coordinates: { x: 782, y: 1532 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Places of Interest - Region: Western Isles 5022
    
    {
      name: "Minion's of Talazar's Stronghold",
      fontSize: 16,
      region: "Hell",
      details: {
        title: "Minion's of Talazar's Stronghold",
        coordinates: { x: 1200, y: 3341 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Minion's of Talazar's Stronghold is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Places of Interest */
    // Darkwood Forest Places of Interest
    {
      name: "Josody Theif Fort",
      fontSize: 18,
      region: "Darkwoods",
      details: {
        title: "Josody Theif Fort",
        coordinates: { x: 936, y: 2576 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Josody Theif Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Crypt of Ryonkah",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Crypt of Ryonkah",
        coordinates: { x: 1030, y: 2977 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Crypt of Ryonkah is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lord Vezryl's Estate",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Lord Vezryl's Estate",
        coordinates: { x: 555, y: 3158 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lord Vezryl's Estate is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Burslord's Hunting Lodge",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Burslord's Hunting Lodge",
        coordinates: { x: 683, y: 3389 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Burslord's Hunting Lodge is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Mnemmon",
      fontSize: 25,
      region: "Darkwoods",
      details: {
        title: "Mnemmon",
        coordinates: { x: 911, y: 3216 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mnemmon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Mnemmon Gaol",
      fontSize: 20,
      region: "Darkwoods",
      details: {
        title: "Mnemmon Gaol",
        coordinates: { x: 881, y: 3390 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Mnemmon Gaol is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Necropolis",
      fontSize: 20,
      region: "Necropolis",
      details: {
        title: "Necropolis",
        coordinates: { x: 1358, y: 2908 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Necropolis is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Astari Ruin Shelter",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Astari Ruin Shelter",
        coordinates: { x: 815, y: 3223 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Astari Ruin Shelter is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Tuvok",
      fontSize: 16,
      region: "Darkwoods", // I'm not sure if this is the Name of the place or the name of the NPC that lives there. Question Mark
      details: {
        title: "Tuvok",
        coordinates: { x: 1032, y: 2891 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tuvok is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Warg Pen",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Warg Pen",
        coordinates: { x: 1369, y: 2737 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Warg Pen is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Gadros Ruins",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Gadros Ruins",
        coordinates: { x: 1489, y: 2481 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gadros Ruins is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Shadow Forest", // Seemed like it needed a name, might have a different name Question Mark
      fontSize: 16,
      region: "Darkwoods", 
      details: {
        title: "Shadow Forest",
        coordinates: { x: 1463, y: 2710 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Shadow Forest is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Termigon Mound",
      fontSize: 16,
      region: "Darkwoods", // Changed the name from Termigon Hive to Termigon Mound, seems more fitting. Question Mark
      details: {
        title: "Termigon Mound",
        coordinates: { x: 677, y: 3520 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Termigon Mound is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Battle Plains Places of Interest
    {
      name: "Wasp Hive",
      fontSize: 16,
      region: "Battle Plains",
      details: {
        title: "Wasp Hive",
        coordinates: { x: 1657, y: 2959 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Wasp Hive is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Black Swamp Places of Interest
    {
      name: "Drakkan",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Drakkan",
        coordinates: { x: 2806, y: 3807 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Drakkan is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Kobold Outpost",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Kobold Outpost",
        coordinates: { x: 3248, y: 3818 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kobold Outpost is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Kobold Village",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Kobold Village",
        coordinates: { x: 2833, y: 3925 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kobold Village is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Temple of Agon",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Temple of Agon",
        coordinates: { x: 3118, y: 3633 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Temple of Agon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Old Ale Warehouse\n(Closed)",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Old Ale Warehouse\n(Closed)",
        coordinates: { x: 2817, y: 3261 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Old Ale Warehouse\n(Closed) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Valekar's Fortress",
      fontSize: 16,
      region: "Black Swamp",
      details: {
        title: "Valekar's Fortress",
        coordinates: { x: 3101, y: 3488 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Valekar's Fortress is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Highlands Places of Interest
    {
      name: "Emporium Abbey",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Emporium Abbey",
        coordinates: { x: 2769, y: 3166 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Emporium Abbey is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ancient Site of Minos",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Ancient Site of Minos",
        coordinates: { x: 2930, y: 3169 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ancient Site of Minos is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Minotaur Maze",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Minotaur Maze",
        coordinates: { x: 3001, y: 3040 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Minotaur Maze is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Thief Fort",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Thief Fort",
        coordinates: { x: 3177, y: 3069 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Thief Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Supply Shelter",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Supply Shelter",
        coordinates: { x: 3368, y: 2958 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Supply Shelter is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Darushk Mine",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Darushk Mine",
        coordinates: { x: 3603, y: 2775 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darushk Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Astari Cave",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Astari Cave",
        coordinates: { x: 3609, y: 2995 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Astari Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Arllandah's Lair",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Arllandah's Lair",
        coordinates: { x: 3206, y: 2629 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Arllandah's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Third Book Temple",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Third Book Temple",
        coordinates: { x: 2984, y: 2701 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Third Book Temple is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Horibus's Camp",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Horibus's Camp",
        coordinates: { x: 3468, y: 2643 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Horibus's Camp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Zanock's Mine (East) ",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Zanock's Mine (East) ",
        coordinates: { x: 3099, y: 2390 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Zanock's Mine (East)  is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Cave\n(NO ENTRY)",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Cave\n(NO ENTRY)",
        coordinates: { x: 3562, y: 1924 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cave\n(NO ENTRY) is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ethera Mining Company",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Ethera Mining Company",
        coordinates: { x: 3610, y: 3621 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ethera Mining Company is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Warg Pen",
      fontSize: 16,
      region: "Highlands",
      details: {
        title: "Warg Pen",
        coordinates: { x: 3336, y: 3734 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Warg Pen is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Valley of Giants Places of Interest

    // Heartwood Coast Places of Interest
    {
      name: "Infiltrator Camp",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Infiltrator Camp",
        coordinates: { x: 2472, y: 1506 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Infiltrator Camp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Gnobol Manor",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Gnobol Manor",
        coordinates: { x: 3096, y: 1475 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gnobol Manor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Gnobol Mauseleum",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Gnobol Mauseleum",
        coordinates: { x: 3096, y: 1569 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gnobol Mauseleum is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Hunter's Lodge",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Hunter's Lodge",
        coordinates: { x: 2939, y: 1845 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hunter's Lodge is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Talazarian Fort",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Talazarian Fort",
        coordinates: { x: 2919, y: 2257 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Talazarian Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Temple of Kuthos",
      fontSize: 16,
      region: "Heartwood Coast",
      details: {
        title: "Temple of Kuthos",
        coordinates: { x: 2759, y: 2397 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Temple of Kuthos is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Tundria Places of Interest
    {
      name: "Orc Raider Camp",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Orc Raider Camp",
        coordinates: { x: 2945, y: 1224 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Raider Camp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Elsinea Manor",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Elsinea Manor",
        coordinates: { x: 2616, y: 1249 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Elsinea Manor is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Frost Troll Coast",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Frost Troll Coast",
        coordinates: { x: 2575, y: 1129 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Frost Troll Coast is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Trapper Grayth's Dwelling",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Trapper Grayth's Dwelling",
        coordinates: { x: 3400, y: 819 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Trapper Grayth's Dwelling is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Infiltrator Camp",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Infiltrator Camp",
        coordinates: { x: 3608, y: 1039 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Infiltrator Camp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Altargrade",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Altargrade",
        coordinates: { x: 3239, y: 755 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Altargrade is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Orc Raider Fort",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Orc Raider Fort",
        coordinates: { x: 3111, y: 861 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Raider Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Hammerfist Mine",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Hammerfist Mine",
        coordinates: { x: 2777, y: 595 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Hammerfist Mine is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Stormholde",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Stormholde",
        coordinates: { x: 2563, y: 929 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Stormholde is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ruins of Osgarl",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Ruins of Osgarl",
        coordinates: { x: 2543, y: 414 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruins of Osgarl is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Castle of Artraxis",
      fontSize: 16,
      region: "Tundria",
      details: {
        title: "Castle of Artraxis",
        coordinates: { x: 2879, y: 413 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Castle of Artraxis is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Breakwater Places of Interest
    // New Royale Island Places of Interest
    {
      name: "Pirate Raider's Camp",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Pirate Raider's Camp",
        coordinates: { x: 1351, y: 1762 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Pirate Raider's Camp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Athropiniax's Temple",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Athropiniax's Temple",
        coordinates: { x: 1784, y: 2431 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Athropiniax's Temple is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // New Town Island Places of Interest
    {
      name: "Undead Dwarven Fort",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Undead Dwarven Fort",
        coordinates: { x: 1924, y: 1732 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Undead Dwarven Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Deadwing's Lair",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Deadwing's Lair",
        coordinates: { x: 1945, y: 1692 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Deadwing's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dwarf Fortress",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Dwarf Fortress",
        coordinates: { x: 2173, y: 1510 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dwarf Fortress is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Roycroft Island Places of Interest
    {
      name: "Sea Pirate Shack",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "Sea Pirate Shack",
        coordinates: { x: 2215, y: 2253 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sea Pirate Shack is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Places of Interest - Region: Western Isles
    {
      name: "Talazar's Castle",
      fontSize: 25,
      region: "Western Isles",
      details: {
        title: "Talazar's Castle",
        coordinates: { x: 1104, y: 3292 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Talazar's Castle is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Places of Interest - Region: Broken Figer

    // Places of Interest - Region: Sands of Creation
    // Places of Interest - Ruhura 
    {
      name: "Ruhura Outpost",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Ruhura Outpost",
        coordinates: { x: 943, y: 3987 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ruhura Outpost is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Sand Golem Crypt",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Sand Golem Crypt",
        coordinates: { x: 842, y: 3924 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Sand Golem Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lupinsix's Lair",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Lupinsix's Lair",
        coordinates: { x: 793, y: 3838 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lupinsix's Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Tomna's House",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Tomna's House",
        coordinates: { x: 720, y: 3682 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Tomna's House is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Artonian Fort",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Artonian Fort",
        coordinates: { x: 556, y: 3668 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artonian Fort is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Artonian Cave",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Artonian Cave",
        coordinates: { x: 490, y: 3652 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Artonian Cave is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "The GateKeeper",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "The GateKeeper",
        coordinates: { x: 422, y: 3686 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about The GateKeeper is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Dragon Lair",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Dragon Lair",
        coordinates: { x: 114, y: 3469 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Dragon Lair is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Done

    // Khafra
    {
      name: "Khafra Fishing Outpost",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Khafra Fishing Outpost",
        coordinates: { x: 88, y: 2726 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra Fishing Outpost is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Baniti's Family Crypt",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Baniti's Family Crypt",
        coordinates: { x: 313, y: 2979 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Baniti's Family Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Blacktail's Crypt",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Blacktail's Crypt",
        coordinates: { x: 56, y: 3026 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Blacktail's Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "The Guardian",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "The Guardian",
        coordinates: { x: 169, y: 3158 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about The Guardian is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Undead Artonian Crypt",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Undead Artonian Crypt",
        coordinates: { x: 263, y: 3250 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Undead Artonian Crypt is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Ancient Artonian Swordsman Dungeon",
      fontSize: 16,
      region: "Sands of Creation",
      details: {
        title: "Ancient Artonian Swordsman Dungeon",
        coordinates: { x: 142, y: 3329 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Ancient Artonian Swordsman Dungeon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    // Done
  ],

  waterBodies: [
    //Valinor Island Water Bodies
    {
      name: "Gut Rot Swamp",
      fontSize: 20,
      region: "Valinor",
      details: {
        title: "Gut Rot Swamp",
        coordinates: { x: 1177, y: 413 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Gut Rot Swamp is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Krythan Island Water Bodies

    // Silvest Valley Region Water Bodies
    {
      name: "Lake Silvest",
      fontSize: 15,
      region: "Krythan",
      details: {
        title: "Lake Silvest",
        coordinates: { x: 1267, y: 1220 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lake Silvest is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Chokecherry Pond",
      fontSize: 12,
      region: "Krythan",
      details: {
        title: "Chokecherry Pond",
        coordinates: { x: 1040, y: 1218 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chokecherry Pond is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Krythan
    {
      name: "Queen's Lake",
      fontSize: 18,
      region: "Krythan",
      details: {
        title: "Queen's Lake",
        coordinates: { x: 390, y: 1090 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Queen's Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Crow Lake",
      fontSize: 14,
      region: "Krythan",
      details: {
        title: "Crow Lake",
        coordinates: { x: 849, y: 1156 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Crow Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Krythan Swamp",
      fontSize: 20,
      region: "Krythan",
      details: {
        title: "Krythan Swamp",
        coordinates: { x: 190, y: 1766 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Krythan Swamp is coming soon.",
        npcs: [],
        links: [],
      },
    },

    /* Mainland Water Bodies */
    // Bodies of Water - Region: Darkwoods
    {
      name: "Cairn Lake",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Cairn Lake",
        coordinates: { x: 1015, y: 2869 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Cairn Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lake Mraya",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Lake Mraya",
        coordinates: { x: 778, y: 2988 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lake Mraya is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Josody Swamp",
      fontSize: 18,
      region: "Darkwoods",
      details: {
        title: "Josody Swamp",
        coordinates: { x: 1129, y: 2676 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Josody Swamp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Greenteeth Swamp", // Not sure about the name, just thought it needed one. Question Mark
      fontSize: 16,
      region: "Darkwoods", 
      details: {
        title: "Greenteeth Swamp",
        coordinates: { x: 1640, y: 2600 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Greenteeth Swamp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Darkfell Marsh",
      fontSize: 16,
      region: "Darkwoods",
      details: {
        title: "Darkfell Marsh",
        coordinates: { x: 1011, y: 3092 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Darkfell Marsh is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Battle Plains
    {
      name: "Proudblood Sound",
      fontSize: 20,
      region: "Battle Plains",
      details: {
        title: "Proudblood Sound",
        coordinates: { x: 2272, y: 3770 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Proudblood Sound is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Chlera Bay",
      fontSize: 30,
      region: "Battle Plains",
      details: {
        title: "Chlera Bay",
        coordinates: { x: 2558, y: 3713 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chlera Bay is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Battle Plains
    // There are many bodies of water in the Battle Plains, but none have specific names. I'm going to add a few especially around whirlpool portals.

    // Bodies of Water - Region: Black Swamp
    {
      name: "Vorda Swamp",
      fontSize: 20,
      region: "Black Swamp",
      details: {
        title: "Vorda Swamp",
        coordinates: { x: 2787, y: 3682 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Vorda Swamp is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Canis Lake",
      fontSize: 15,
      region: "Black Swamp",
      details: {
        title: "Canis Lake",
        coordinates: { x: 2830, y: 3509 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Canis Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lake Dresta",
      fontSize: 15,
      region: "Black Swamp",
      details: {
        title: "Lake Dresta",
        coordinates: { x: 2919, y: 3650 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lake Dresta is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Key Marsh",
      fontSize: 20,
      region: "Black Swamp",
      details: {
        title: "Key Marsh",
        coordinates: { x: 3399, y: 3924 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Key Marsh is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Highlands
    {
      name: "West Lake",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "West Lake",
        coordinates: { x: 3377, y: 2980 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about West Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Parian Lake",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Parian Lake",
        coordinates: { x: 3512, y: 2951 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Parian Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Town Lake",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Town Lake",
        coordinates: { x: 3587, y: 3115 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Town Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Kor's Lake",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Kor's Lake",
        coordinates: { x: 3576, y: 3234 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Kor's Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lake Ulthien",
      fontSize: 25,
      region: "Highlands",
      details: {
        title: "Lake Ulthien",
        coordinates: { x: 3033, y: 3229 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lake Ulthien is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Glutton Lake",
      fontSize: 25,
      region: "Highlands",
      details: {
        title: "Glutton Lake",
        coordinates: { x: 3461, y: 2702 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Glutton Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Lake Kallon",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Lake Kallon",
        coordinates: { x: 3546, y: 3412 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Lake Kallon is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Orc Pond",
      fontSize: 15,
      region: "Highlands",
      details: {
        title: "Orc Pond",
        coordinates: { x: 3183, y: 3601 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Orc Pond is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Valley of Giants
    {
      name: "Greenmead Lake",
      fontSize: 16,
      region: "Valley of Giants",
      details: {
        title: "Greenmead Lake",
        coordinates: { x: 3112, y: 2844 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Greenmead Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Heartwood Coast

    // Bodies of Water - Region: Tundria

    // Bodies of Water - Region: Breakwater
    // New Royale
    // New Town
    // Roycroft
    {
      name: "The Choke",
      fontSize: 16,
      region: "Breakwater",
      details: {
        title: "The Choke",
        coordinates: { x: 2270, y: 2177 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about The Choke is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Western Isles

    // Bodies of Water - Region: Broken Finger
    {
      name: "Broken Lake",
      fontSize: 20,
      region: "Broken Finger",
      details: {
        title: "Broken Lake",
        coordinates: { x: 1120, y: 3660 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Broken Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Obsidian Lake",
      fontSize: 25,
      region: "Broken Finger",
      details: {
        title: "Obsidian Lake",
        coordinates: { x: 1354, y: 3513 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Obsidian Lake is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Bodies of Water - Region: Sands of Creation
    // Ruhura
    // Khafra
    {
      name: "Khafra Oasis",
      fontSize: 15,
      region: "Sands of Creation",
      details: {
        title: "Khafra Oasis",
        coordinates: { x: 218, y: 3016 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Khafra Oasis is coming soon.",
        npcs: [],
        links: [],
      },
    },
    {
      name: "Chomper's Oasis",
      fontSize: 15,
      region: "Sands of Creation",
      details: {
        title: "Chomper's Oasis",
        coordinates: { x: 91, y: 3267 },
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Chomper's Oasis is coming soon.",
        npcs: [],
        links: [],
      },
    },
  ],

  mountains: [
    // I added Regions to the mountain ranges but some of them span multiple regions so I just picked one region for each mountain range. Might need to change later.
    // Mountains - Region: Valinor

    // Mountains - Region: Krythan

    // Mountains - Region: Darkwoods

    // Mountains - Region: Battle Plains

    // Mountains - Region: Black Swamp
    {
      name: "Medosk Mountains",
      fontSize: 15,
      region: "Black Swamp",
      details: {
        title: "Medosk Mountains",
        coordinates: [
          { x: 2981, y: 3533 },
          { x: 3151, y: 3847 }, // Added a second coordinate for the same label
        ],
        image: "images/placeholders/image_coming_soon.png",
        lore: "More information about Medosk Mountains is coming soon.",
        npcs: [],
        links: [],
      },
    },

    // Mountains - Region: Highlands

    // Mountains - Region: Valley of Giants

    // Mountains - Region: Heartwood Coast

    // Mountains - Region: Tundria

    // Mountains - Region: Breakwater

    // Mountains - Region: Western Isles

    // Mountains - Region: Broken Finger
    
  ],
};
