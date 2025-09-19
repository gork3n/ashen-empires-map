// Define markers by category
const mapMarkers = {
    portals: [
        /* Party Island Portals */
        { x: 440, y: 120, type: "portal", tooltip: "Portal to Lotor's Summer Palace" },
        //Done

        /* Valinor Island Portals */
        
        // Valinor Region Portals
        { x: 776, y: 100, type: "portal", tooltip: "Portal to Leave Valinor" },
        { x: 776, y: 168, type: "portal", tooltip: "Portal to Arena Viewing Area" },
        //Done


        /* Lotor's Summer Palace Portals */

        // Lotor's Summer Palace Portals
        { x: 762, y: 589, type: "portal", tooltip: "Portal to Party Island" },
        { x: 763, y: 646, type: "portal", tooltip: "Portal to PvP Island" },
        { x: 771, y: 615, type: "portal", tooltip: "Portal to Housing Realm" },
        { x: 812, y: 624, type: "portal", tooltip: "Valmond Portal" },
        { x: 822, y: 624, type: "portal", tooltip: "Krog Portal" },
        { x: 832, y: 624, type: "portal", tooltip: "Khafra or Ruhura Portal" },
        { x: 812, y: 644, type: "portal", tooltip: "Silvest Portal" },
        { x: 822, y: 644, type: "portal", tooltip: "VIP Portal" },
        { x: 832, y: 644, type: "portal", tooltip: "Whisperdale Portal" },
        { x: 812, y: 634, type: "portal", tooltip: "Parian Portal" },
        { x: 832, y: 634, type: "portal", tooltip: "Josody Portal" },
        //Done


        // Real Estate Island Portals
        { x: 663, y: 735, type: "portal", tooltip: "Portal to Lotor's Summer Palace" },


        /* Minotaur Island Portals */
        { x: 137, y: 248, type: "portal", tooltip: "Portal to Highlands" },


        /* Scorched Island Portals */
        { x: 631, y: 2102, type: "portal", tooltip: "Portal to Battle Plains" },
        { x: 720, y: 1964, type: "portal", tooltip: "Portal to Hell" },

        
        /* Krythan Island Portals */

        // Krythan Region Portals        
        { x: 585, y: 1497, type: "portal", tooltip: "Portal to East Mainlands West of Parian" },
        { x: 185, y: 1466, type: "portal", tooltip: "Portal to Northeastern Mainlands North of Josody" },
        { x: 473, y: 1896, type: "portal", tooltip: "Portal to Hell" },
        { x: 713, y: 1753, type: "portal", tooltip: "Portal to Scarab Island" },

        // Silvest Valley Region Portals
        
        

        /* Mainland Portals */

        // Darkwoods Forest Portals
        { x: 868, y: 3418, type: "portal", tooltip: "Portal to Mnemmon" },
        { x: 910, y: 3260, type: "portal", tooltip: "Portal to Mnemmon Gaol" },

        // Battle Plains Portals

        // Black Swamp Portals
        
        // Highlands Portals
        { x: 1214, y: 3173, type: "portal", tooltip: "Portal to Southern Highlands" },
        { x: 1374, y: 3033, type: "portal", tooltip: "Portal to North Highlands" },

        // Western Isles Portals

        // Hell Portals
        { x: 1052, y: 3289, type: "portal", tooltip: "Portal to Scorched Island" },
        { x: 1178, y: 3290, type: "portal", tooltip: "Portal to Krythan Island" },

        // Valley of Giants Portals

        // Heartwood Coast Portals

        // Tundria Portals

        // Sands of Creation Portals

        // Breakwater

        // Broken Finger

        

        /* Sands of Creation Portals */
        // Ruhura Side Portals
        { x: 471, y: 4038, type: "portal", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 113, y: 3477, type: "portal", tooltip: "Portal to Dragon Lair (Blue Dragons)" },

        // Khafra Side Portals
        
        { x: 201, y: 2857, type: "portal", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 26, y: 3414, type: "portal", tooltip: "Portal to Artonian Island" },
        { x: 216, y: 3386, type: "portal", tooltip: "Portal to Khafra Side" },
 
    ],
    
    docks: [
        /* Valinor Island Docks */
        // No active docks on Valinor Island as of now

        // Krythan Island Docks
        { x: 449, y: 602, type: "dock", tooltip: "Silvest Northern Island Dock" },
        { x: 266, y: 823, type: "dock", tooltip: "Jeel Dock" },
        { x: 212, y: 1129, type: "dock", tooltip: "Lotor's Castle Dock" },
        { x: 431, y: 1465, type: "dock", tooltip: "New Korelth Dock" },
        { x: 71, y: 1516, type: "dock", tooltip: "Tallem'im House Dock" },
        { x: 843, y: 1330, type: "dock", tooltip: "Scalo's Den Dock" },
        { x: 1409, y: 1098, type: "dock", tooltip: "Karzak Cove Dock" },
        { x: 1353, y: 1289, type: "dock", tooltip: "Fort Eastwatch Dock" },
        { x: 1134, y: 1473, type: "dock", tooltip: "Silvest Dock" },
        { x: 1098, y: 1516, type: "dock", tooltip: "Silvest Island Dock" },
        //Done

        // Lotor's Summer Palace Docks
        { x: 793, y: 584, type: "dock", tooltip: "Palace Dock" },
        { x: 858, y: 728, type: "dock", tooltip: "LSP Dock" },
        //Done

        // Minotaur Island Docks
        // No active docks on Minotaur Island as of now

        // Party Island Docks

        /* Mainland Docks */

        // Western Docks

        // Eastern Docks

        // Tundria Docks

        // New Royale Docks

        // New Town Docks

        // Roycroft Docks

        // Werewolf Island Docks

        // Sands of Creation Docks

        // Ruhura Side Docks

        // Khafra Side Docks
        { x: 88, y: 2693, type: "dock", tooltip: "Khafra Dock" },

    ],
    
    quests: [
        // Valinor Island Quests
        { x: 770, y: 139, type: "quest", tooltip: "Sandre (Wanders)" },
        { x: 762, y: 149, type: "quest", tooltip: "Captain of the Guard" },
        { x: 759, y: 137, type: "quest", tooltip: "Kumba Northern (Wanders)" },
        { x: 774, y: 146, type: "quest", tooltip: "Mary Locksley (Wanders)" },
        { x: 747, y: 145, type: "quest", tooltip: "Davey Logan (Wanders)" },
        { x: 744, y: 137, type: "quest", tooltip: "Imica (Wanders)" },
        { x: 734, y: 137, type: "quest", tooltip: "Timothy Jager (Wanders)" },
        { x: 750, y: 106, type: "quest", tooltip: "Sandre (Wanders)" },
        { x: 766, y: 145, type: "quest", tooltip: "Hereward (Wanders)" },
        { x: 772, y: 110, type: "quest", tooltip: "Topacia (Wanders)" },
        { x: 782, y: 116, type: "quest", tooltip: "Alchemist Baki" },
        { x: 783, y: 121, type: "quest", tooltip: "Sarah Bent" },
        { x: 783, y: 123, type: "quest", tooltip: "Serina Wilcut" },
        { x: 781, y: 125, type: "quest", tooltip: "Knight Bastrop" },
        { x: 787, y: 127, type: "quest", tooltip: "Eustacius (Wanders)" },
        { x: 788, y: 97, type: "quest", tooltip: "Curtis Leabu (Wanders)" },
        { x: 784, y: 95, type: "quest", tooltip: "Hasculf (Wanders)" },
        { x: 796, y: 158, type: "quest", tooltip: "A Young Maid (Wanders)" },
        { x: 887, y: 138, type: "quest", tooltip: "Eastern Gate Lieutenant" },
        { x: 648, y: 181, type: "quest", tooltip: "Roger Duncan" },
        { x: 648, y: 189, type: "quest", tooltip: "Paula Duncan" },



        // Krythan Island Quests


        // Lotor's Summer Palace Quests
        { x: 795, y: 603, type: "quest", tooltip: "Captain Renwood" },
        { x: 852, y: 728, type: "quest", tooltip: "Donkeo" },
        { x: 826, y: 677, type: "quest", tooltip: "Rodald (Wanders) - Rock Trolls Near Josody" },
        { x: 844, y: 699, type: "quest", tooltip: "Estiban (Wanders) - Sand Golems" },
        //Done

        // Add more quests NPCs as needed
    ],
    
    shops: [
        /*Party Island Shops*/
        { x: 438, y: 87, type: "shop_pub", tooltip: "Dalgo's Tavern" },

        /* Valinor Shops */
        { x: 749, y: 116, type: "shop_pub", tooltip: "Larodeth Lywelyn's Pub and Grub Tavern" },
        { x: 738, y: 120, type: "shop_weapon", tooltip: "Micheal Vonda's Weapon Shop" },
        { x: 733, y: 125, type: "shop_armor", tooltip: "Thomas Blackstone's Armor Shop" },
        { x: 735, y: 116, type: "shop_provisioner", tooltip: "Whiliam Rosen's Provisioner Shop" },
        { x: 772, y: 120, type: "shop_provisioner", tooltip: "Leon Elias's Provisioner Shop" },
        { x: 784, y: 115, type: "shop_generic", tooltip: "Cladius Zamilus's Magic Shop" },
        { x: 752, y: 152, type: "shop_carpentry", tooltip: "Linus Houson's Carpentry Store" },
        { x: 752, y: 153, type: "shop_generic", tooltip: "Kerry Thomas' Blacksmith Shop " },
        { x: 752, y: 154, type: "shop_leather", tooltip: "Tina Florence's Leather Shop" },
        //Done


        /* Krythan Shops */

        
        //Varg Shops
        { x: 780, y: 1193, type: "shop_generic", tooltip: "Magic Shop" },
        
        /*Lotor's Summer Palace Shops*/
        { x: 812, y: 676, type: "shop_weapon", tooltip: "O'riles Weapon Shop" },
        { x: 811, y: 683, type: "shop_armor", tooltip: "Colleen Franks' Armor Shop" },
        { x: 862, y: 715, type: "shop_generic", tooltip: "Garius' Farming Shop" },
        { x: 854, y: 712, type: "shop_carpentry", tooltip: "Tom Uslak Carpentry Shop" },
        { x: 770, y: 623, type: "shop_generic", tooltip: "Blueprint Sales" },
        { x: 772, y: 623, type: "shop_generic", tooltip: "Surveying and Tools Sales" },
        { x: 774, y: 603, type: "shop_generic", tooltip: "Wizard Swishwhich's Shop - Currency: Rune Fragment" },
        { x: 773, y: 604, type: "shop_generic", tooltip: "Wizard Blunderstone" },
        { x: 765, y: 606, type: "shop_generic", tooltip: "VIP Store" },
        { x: 764, y: 600, type: "shop_generic", tooltip: "Lotor's Gardener's Shop" },
        { x: 792, y: 595, type: "shop_generic", tooltip: "Larson Davide's Shipyard Shop" },
        { x: 794, y: 595, type: "shop_generic", tooltip: "Tides of Fate Raft Offer" },
        { x: 758, y: 679, type: "shop_generic", tooltip: "Doyle Trobush's Magic Shop" },
        { x: 791, y: 662, type: "shop_generic", tooltip: "Panteo's Runecrafting Shop" },
        { x: 791, y: 692, type: "shop_jewelry", tooltip: "Canuelle's Jewelry Shop" },
        { x: 805, y: 706, type: "shop_leather", tooltip: "Mongor's Leatherworking Shop" },
        { x: 802, y: 701, type: "shop_generic", tooltip: "Kaleic's Blacksmith Shop" },
        { x: 813, y: 700, type: "shop_provisioner", tooltip: "Mace Gurban's Provisioner Shop" },
        { x: 846, y: 729, type: "shop_pub", tooltip: "Docale's Pub" },
        //Done

    ],
    
    trainers: [
        // Trainers category encompasses various trainer and taskmaster NPCs

        // Valinor Island Trainers
        
        { x: 756, y: 113, type: "trainer", tooltip: "Tradeskill Trainers" },
        { x: 765, y: 113, type: "trainer", tooltip: "Weapon Trainers" },
        { x: 764, y: 122, type: "trainer", tooltip: "Leadership Trainers" },
        { x: 857, y: 718, type: "trainer", tooltip: "Carpentry Taskmaster" },
        { x: 863, y: 706, type: "trainer", tooltip: "Farming Taskmaster" },
        { x: 737, y: 109, type: "trainer", tooltip: "Tailoring Trainer" },
        { x: 773, y: 115, type: "trainer", tooltip: "Farming Trainer" },
        { x: 770, y: 115, type: "trainer", tooltip: "Ralnaka (Farming Information)" },
        { x: 718, y: 100, type: "trainer", tooltip: "Valinor Orb Reset" },
        { x: 778, y: 103, type: "trainer", tooltip: "Island Steward" },
        { x: 780, y: 175, type: "trainer", tooltip: "Osalka Farming Expert (Wanders)" },
        

        // Krythan Island Trainers
        
        // Lotor's Summer Palace Trainers
        { x: 776, y: 619, type: "trainer", tooltip: "Master Draftsman" },
        { x: 839, y: 708, type: "trainer", tooltip: "Henchman Trainer" },
        { x: 770, y: 620, type: "trainer", tooltip: "Real Estate Agent" },
        { x: 781, y: 609, type: "trainer", tooltip: "Lotorian Faction Officer" },
        { x: 784, y: 601, type: "trainer", tooltip: "Champion of Lotor" },
        { x: 789, y: 602, type: "trainer", tooltip: "Advanced Skill Trainer" },
        { x: 795, y: 623, type: "trainer", tooltip: "Fishing Event Judge" },
        { x: 817, y: 710, type: "trainer", tooltip: "Mining Event Judge" },
        { x: 771, y: 610, type: "trainer", tooltip: "Lotor's Steward" },
        { x: 763, y: 683, type: "trainer", tooltip: "Alchemy Taskmaster" },
        { x: 848, y: 734, type: "trainer", tooltip: "Brewing Taskmaster" },
        { x: 836, y: 733, type: "trainer", tooltip: "Neutral Faction Officer" },
        
        
        
        
        // Add more trainers
    ],
    
    spawn_good: [
        //Valinor Island Spawns
        { x: 779, y: 141, type: "spawn_good", tooltip: "Spawn Gate" },

        // Sands of Creation Spawns
        // Ruhura Side Spawns
        { x: 264, y: 3555, type: "spawn_good", tooltip: "Good Spawn Gate" },
        // Khafra Side Spawns


    ],

    spawn_evil: [
        //Krythan Island Spawns
        { x: 777, y: 873, type: "spawn_evil", tooltip: "Evil Spawn Gate" },

        // Sands of Creation Spawns
        // Ruhura Side Spawns
        { x: 376, y: 4025, type: "spawn_evil", tooltip: "Evil Spawn Gate" },

        // Khafra Side Spawns
        // No evil spawns on Khafra Side as of now
    ],

    banks: [
        //Valinor Island Banks

        { x: 744, y: 100, type: "bank", tooltip: "Bank" },
        //Lotor's Summer Palace Banks
        { x: 841, y: 681, type: "bank", tooltip: "Bank" },

        // Krythan Island Banks

        //Jeel Banks

        //Hothbra Banks

        //Varg Banks

        //Silvest Banks


        //Mainland Banks
        //Western Mainland Banks

        //Eastern Mainland Banks
        
        //Tundria Banks


        // Add more banks
    ],

    crafting: [
        // Add markers for obelisks and ruin spires here
        /* Mainland Crafting Locations */
        // Region Western Isles
        { x: 2109, y: 2734, type: "obelisk", tooltip: "Desprail Island Obelisk" },
        { x: 1033, y: 3483, type: "obelisk", tooltip: "Hell Rune Spire" },
    ],

    undergrounds: [
        /* Valinor Island Undergrounds */
        { x: 609, y: 359, type: "underground_dungeon", tooltip: "Frump's Lair" },
        { x: 875, y: 311, type: "underground_dungeon", tooltip: "Bonesnarl's Lair" }, //I need to verify this location
        { x: 763, y: 118, type: "underground_stairs", tooltip: "Stairs to Mage Trainers" },
        
        /* Lotor's Summer Palace Undergrounds */
        { x: 764, y: 754, type: "underground_dungeon", tooltip: "Sewer Entrance" },
        { x: 799, y: 709, type: "underground_stairs", tooltip: "Leatherworking and Armor Shop Basement" },
        
        /* Krythan Island Undergrounds */

        // Region: Silvest Valley Undergrounds
        { x: 967, y: 1348, type: "snake_pit", tooltip: "Snake Pit" },
        { x: 907, y: 1031, type: "underground_crypt", tooltip: "Krythan Crypt" }, // I know it's misspelled on the map but it's also misspelled in AE.
        { x: 1098, y: 1184, type: "underground_mine", tooltip: "Cliffside Mines" },

        // Region: Krythan Undergrounds
        { x: 327, y: 742, type: "snake_pit", tooltip: "Snake pit" },
        { x: 820, y: 1044, type: "underground_stairs", tooltip: "Holendar's Mansion Basement" },
        { x: 781, y: 863, type: "underground_stairs", tooltip: "Trap Door to LSP" },
        { x: 791, y: 918, type: "underground_stairs", tooltip: "Ladder to LSP Sewer (Away from evil spawn gate)" },

        /* Mainland Undergrounds */

        // Darkwoods Forest Region Undergrounds
        { x: 838, y: 3270, type: "scorpion_pit", tooltip: "Scorpion Pit" },
        { x: 760, y: 3323, type: "termigon_mound", tooltip: "Termigon Pit" },
        { x: 800, y: 3336, type: "underground_mine", tooltip: "South Astari Rune Shelter" },
        { x: 474, y: 3432, type: "snake_pit", tooltip: "Whisperdale Snake Pit" },

        // Necropolis Undergrounds
        { x: 1363, y: 2889, type: "underground_stairs", tooltip: "Trap Door to Necropolis Magic and Farm Shops (They do not work)" },
        { x: 1349, y: 2933, type: "underground_stairs", tooltip: "Ladder to inside Necropolis" },

        // Battle Plains Region Undergrounds

        // Black Swamp Region Undergrounds

        // Highlands Region Undergrounds

        // Western Isles Undergrounds
        { x: 2111, y: 2766, type: "underground_stairs", tooltip: "Shadow Temple South Entrance" },
        // Valley of Giants Undergrounds

        // Heartwood Coast Undergrounds

        // Tundria Region Undergrounds

        // Hell Undergrounds
        { x: 1209, y: 3349, type: "underground_dungeon", tooltip: "Lotorian Dungeon" },
        { x: 1308, y: 3386, type: "underground_cave", tooltip: "Horned One Cave" },

        /* Desert Lands (Not sure what to call these)*/
        /* These are the areas sounth of Werewolf Island and west of the Mainland */

        // Sands of Creation Region
        // Ruhura Side Undergrounds
        { x: 546, y: 3839, type: "underground_stairs", tooltip: "Elemental Cave" },
        { x: 309, y: 3910, type: "underground_stairs", tooltip: "East Entrance to Greater Dragon Island" },
        { x: 402, y: 3794, type: "underground_stairs", tooltip: "West Entrance to Ruhura Side" },
        { x: 455, y: 3719, type: "underground_stairs", tooltip: "Elemental Cave" },
        { x: 949, y: 4005, type: "underground_dungeon", tooltip: "Mukarramma Dungeon" },

        // Khafra Side Undergrounds
        { x: 78, y: 3354, type: "underground_stairs", tooltip: "Khafra Elemental Cave" },
        
    ],

    games_of_chance: [
        /*Lotor's Summer Palace Games*/
        { x: 839, y: 730, type: "game_of_chance", tooltip: "Malson's Demon's Eye Game" },
    ],

    information: [
        /* Valinor Island Information */

        /*Lotor's Summer Palace Information*/
        { x: 736, y: 591, type: "information", tooltip: "Fallen Warriors Memorial" },
        { x: 715, y: 602, type: "information", tooltip: "Memorial to the Lost Sons" },
        { x: 772, y: 687, type: "information", tooltip: "Jamoal the Sage (Wanders) - Exchange Race Changing Scrolls NPC" },

        // Krythan Island Information

        // Mainland Information

        // Darkwoods Forest Region Information
        { x: 1192, y: 2903, type: "information", tooltip: "The Utopia Shard" },

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


        
    ]
};

// Define marker types with appropriate SVG icons and styling.
// The 'icon' property should be the path to the SVG file.
const markerStyles = {
    // Portals & Docks
    portal: {
        icon: "icons/portal.svg",
        color: "#FFD700", // Gold
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
    quest_dynamic: {
        icon: "icons/jeweled-chalice.svg",
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
        color: "#FFFFFF", // White
    },
    spawn_evil: {
        icon: "icons/death-spawn.svg",
        color: "#8B0000", // DarkRed (Blood Red)
    },

    // Bank
    bank: {
        icon: "icons/bank.svg",
        color: "#DBC12F", // Gold
    },

    // Crafting
    obelisk: {
        icon: "icons/crystal-shrine.svg",
        color: "#9370DB", // MediumPurple
    },
    rune_spire: {
        icon: "icons/rune-spire.svg",
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
    
    // Places of Interest
    snake_pit: {
        icon: "icons/snake.svg",
        color: "#d36517ff", // SaddleBrown - same color as other undergrounds
    },
    scorpion_pit: {
        icon: "icons/scorpion.svg",
        color: "#d36517ff", // SaddleBrown - same color as other undergrounds
    },
    spider_pit: {
        icon: "icons/long-legged-spider.svg",
        color: "#d36517ff", // SaddleBrown - same color as other undergrounds
    },
    ant_mound: {
        icon: "icons/ant.svg",
        color: "#00BFFF", // DeepSkyBlue - same as information
    },
    termigon_mound: {
        icon: "icons/mite.svg",
        color: "#00BFFF", // DeepSkyBlue - same as information
    },
    game_of_chance: {
        icon: "icons/perspective-dice-six-faces.svg",
        color: "#39FF14", // Neon Green
    },
    information: {
        icon: "icons/info.svg",
        color: "#00BFFF", // DeepSkyBlue
    }
};
