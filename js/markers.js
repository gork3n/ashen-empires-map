// Define markers by category
const mapMarkers = {
    portals: [
        /* Party Island Portals */
        { x: 440, y: 120, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        //Done

        /* Valinor Island Portals */
        
        // Valinor Region Portals
        { x: 776, y: 100, type: "portal_lsp", tooltip: "Portal to Leave Valinor" },
        { x: 776, y: 168, type: "portal_small", tooltip: "Portal to Arena Viewing Area" },
        //Done


        /* Lotor's Summer Palace Portals */

        // Lotor's Summer Palace Portals
        { x: 762, y: 589, type: "portal_small", tooltip: "Portal to Party Island" },
        { x: 763, y: 646, type: "portal_small", tooltip: "Portal to PvP Island" },
        { x: 771, y: 615, type: "portal_housing", tooltip: "Portal to Housing Realm" },
        { x: 812, y: 624, type: "portal_lsp", tooltip: "Valmond Portal" },
        { x: 822, y: 624, type: "portal_lsp", tooltip: "Krog Portal" },
        { x: 832, y: 624, type: "portal_lsp", tooltip: "Khafra or Ruhura Portal" },
        { x: 812, y: 644, type: "portal_lsp", tooltip: "Silvest Portal" },
        { x: 822, y: 644, type: "portal_lsp", tooltip: "VIP Portal" },
        { x: 832, y: 644, type: "portal_lsp", tooltip: "Whisperdale Portal" },
        { x: 812, y: 634, type: "portal_lsp", tooltip: "Parian Portal" },
        { x: 832, y: 634, type: "portal_lsp", tooltip: "Josody Portal" },
        //Done


        // Real Estate Island Portals
        { x: 663, y: 735, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },


        /* Minotaur Island Portals */
        { x: 137, y: 248, type: "portal_blue", tooltip: "Portal to Highlands" },


        /* Scorched Island Portals */
        { x: 631, y: 2102, type: "portal_blue", tooltip: "Portal to Battle Plains" },
        { x: 720, y: 1964, type: "portal_blue", tooltip: "Portal to Hell" },

        
        /* Krythan Island Portals */

        // Krythan Region Portals        
        { x: 585, y: 1497, type: "portal_blue", tooltip: "Portal to Highlands West of Parian" },
        { x: 185, y: 1466, type: "portal_blue", tooltip: "Portal to Darkwoods North of Josody" },
        { x: 473, y: 1896, type: "portal_small", tooltip: "Portal to Hell" },
        { x: 713, y: 1753, type: "portal_small", tooltip: "Portal to Scarab Island" },

        // Silvest Valley Region Portals

        /* Lotor's Prison Portals */
        { x: 1486, y: 632, type: "portal_small", tooltip: "Portal to Lotor's Castle" },

        /* Mainland Portals */

        // Darkwoods Forest Portals
        { x: 1352, y: 2440, type: "portal_blue", tooltip: "Portal to Krythan Island (West of New Korelth)" },
        { x: 1272, y: 2513, type: "portal_housing", tooltip: "Portal to House Realm" },
        { x: 1255, y: 2519, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 809, y: 2839, type: "portal_blue", tooltip: "Portal to Highlands (Southeast of Parian)" },
        { x: 868, y: 3418, type: "portal_small", tooltip: "Portal to Mnemmon" },
        { x: 910, y: 3260, type: "portal_small", tooltip: "Portal to Mnemmon Gaol" },
        { x: 473, y: 3481, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        

        // Battle Plains Portals
        { x: 1601, y: 3078, type: "portal_small", tooltip: "Portal to Scorched Island" },
        { x: 2264, y: 3706, type: "portal_lsp", tooltip: "Portal to Proudblood Valley" },
        { x: 1964, y: 3652, type: "portal_small", tooltip: "Exit Proudblood Valley" },

        // Black Swamp Portals
        
        // Highlands Portals
        { x: 3416, y: 2919, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 3336, y: 2809, type: "portal_small", tooltip: "Portal to Southern Highlands (Northeast of Grell)" },
        { x: 3082, y: 3549, type: "portal_small", tooltip: "Portal to Highlands (North of Parian)" },
        { x: 3769, y: 3240, type: "portal_blue", tooltip: "Portal to Darkwoods Forest (East of Redwake)" },

        // Western Isles Portals

        // Hell Portals
        { x: 1052, y: 3289, type: "portal_small", tooltip: "Portal to Scorched Island" },
        { x: 1178, y: 3290, type: "portal_small", tooltip: "Portal to Krythan Island" },

        // Valley of Giants Portals

        // Heartwood Coast Portals
        { x: 2789, y: 2136, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },

        // Tundria Portals

        // Sands of Creation Portals

        // Breakwater

        // Broken Finger

        /* Sands of Creation Portals */
        // Ruhura Side Portals
        { x: 471, y: 4038, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 113, y: 3477, type: "portal_blue", tooltip: "Portal to Dragon Lair (Blue Dragons)" },

        // Khafra Side Portals
        
        { x: 201, y: 2857, type: "portal_lsp", tooltip: "Portal to Lotor's Summer Palace" },
        { x: 26, y: 3414, type: "portal_lsp", tooltip: "Portal to Artonian Island" }, // Portals with similar look to lsp portal use the same icon
        { x: 216, y: 3386, type: "portal_lsp", tooltip: "Portal to Khafra Side" }, // Portals with similar look to lsp portal use the same icon

        // Whirlpool Portals
        // Near Broken Finger 
        { x: 1469, y: 3714, type: "portal_whirlpool", tooltip: "Whirlpool to Obsidian Lake" }, // Lake name may change - in Obsidian Lake
        { x: 1539, y: 3697, type: "portal_whirlpool", tooltip: "Whirlpool to Broken Lake" }, // in Obsidian Lake
        { x: 1078, y: 3534, type: "portal_whirlpool", tooltip: "Whirlpool to Proudblood Sound" }, // Not sure about the name - in Obsidian Lake
        

        // Near Chlera
        { x: 2311, y: 3724, type: "portal_whirlpool", tooltip: "Whirlpool to Obsidian Lake" }, // Near Chlera Dock
        { x: 2557, y: 3667, type: "portal_whirlpool", tooltip: "Whirlpool to Lotor's Prison" }, // Near Chlera Dock

        // Near Test Island
        { x: 4001, y: 4001, type: "portal_whirlpool", tooltip: "Whirlpool to Jeel Docks" }, // South of Test Island near Ethera Palace Docks

        // Near PVP Island
        { x: 4015, y: 2426, type: "portal_whirlpool", tooltip: "Whirlpool to Silvest Bay" }, // Near Death Tyrant Valley - Glamara McPlum's Dock

        // Near Scarab Island
        { x: 31, y: 2228, type: "portal_whirlpool", tooltip: "Whirlpool to Tundria East of Duremar" }, // Near Lopal and Khafra Fishing Outpost Dock

        // Near Silvest Valley
        { x: 1243, y: 1549, type: "portal_whirlpool", tooltip: "Whirlpool to East Highlands of Death Tyrant Valley" }, // Near Glamara McPlum's and Parian Dock

        // Near Guild Arena Island
        { x: 64, y: 848, type: "portal_whirlpool", tooltip: "Whirlpool to South of Test Island" }, // Closest Dock Ethera Palace Dock

        // Near Lotor's Prison
        { x: 1472, y: 632, type: "portal_whirlpool", tooltip: "Whirlpool to Chlera Bay" }, // Near Lotor's Prison - Karzak Cove Dock and LSP Dock

        // Near Duremar
        { x: 3999, y: 948, type: "portal_whirlpool", tooltip: "Whirlpool to Scarab Island" }, // Near Duremar Dock
 
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

        // Darkwoods Forest Docks
        { x: 1407, y: 2519, type: "dock", tooltip: "Josody Dock" },
        { x: 405, y: 2868, type: "dock", tooltip: "Redwake Dock" },
        { x: 404, y: 3222, type: "dock", tooltip: "Dragoon Dock" }, // Just gave it a name, not sure if it's correct
        { x: 344, y: 3492, type: "dock", tooltip: "Whisperdale Dock" },
        { x: 913, y: 3122, type: "dock", tooltip: "Darkfell Dock" }, // This is the ruins next to Dunmarrow Dock but I'm not sure what it's called Question
        { x: 1365, y: 3248, type: "dock", tooltip: "Dunmarrow Dock" },

        // Battle Plains Docks
        { x: 2011, y: 2634, type: "dock", tooltip: "Wandering Spirit Dock" }, // This is above Shadow Temple Entrance I'm not sure what the ruins are called Question
        { x: 2489, y: 3642, type: "dock", tooltip: "Chlera Dock" },
        { x: 2600, y: 3508, type: "dock", tooltip: "Battle Plains Dock" },
        { x: 3110, y: 4021, type: "dock", tooltip: "Maraket Dock" },
        
        // Black Swamp Docks
        { x: 2613, y: 3512, type: "dock", tooltip: "Samad Dock" },

        // Highlands Docks
        { x: 3598, y: 3706, type: "dock", tooltip: "Ethera Palace Dock" },
        { x: 3614, y: 3646, type: "dock", tooltip: "Ethera Mining Company Dock" },
        { x: 3689, y: 3159, type: "dock", tooltip: "Highlands East Dock - East of Parian" },
        { x: 3862, y: 2582, type: "dock", tooltip: "Glamara McPlum's Dock" },
        { x: 3542, y: 1583, type: "dock", tooltip: "North Highlands Dock" },

        // Western Isles Docks
        { x: 1707, y: 1837, type: "dock", tooltip: "Ettin Island Dock" },

        // Valley of Giants Docks
        // No Docks here to see

        // Heartwood Coast Docks
        { x: 2592, y: 2184, type: "dock", tooltip: "Valmond East Dock" },
        { x: 2592, y: 2196, type: "dock", tooltip: "Valmond East Dock" },
        { x: 2655, y: 2117, type: "dock", tooltip: "Valmond North Dock" },
        { x: 2663, y: 2131, type: "dock", tooltip: "Valmond North Dock" },
        { x: 2678, y: 2131, type: "dock", tooltip: "Valmond North Dock" },
        { x: 2424, y: 1642, type: "dock", tooltip: "Teylan Dock" },
        { x: 3514, y: 1571, type: "dock", tooltip: "Heartwood North Dock (Northeast of Syldural)" },

        // Tundria Docks
        { x: 3727, y: 954, type: "dock", tooltip: "Duremar Dock" },
        { x: 3622, y: 1332, type: "dock", tooltip: "Southeast Tundria Dock" },
        { x: 2031, y: 1049, type: "dock", tooltip: "Bridge Dock" },
        { x: 2031, y: 1241, type: "dock", tooltip: "Maroven North Dock" },
        { x: 1978, y: 1267, type: "dock", tooltip: "Maroven Dock" },
        { x: 1989, y: 1267, type: "dock", tooltip: "Maroven Dock" },

        // Scarab Island Docks
        { x: 345, y: 2271, type: "dock", tooltip: "Lopal Dock" },

        // Werewolf Island Docks
        // No active docks on Werewolf Island as of now

        // Sands of Creation Docks

        // Ruhura Side Docks
        { x: 360, y: 4061, type: "dock", tooltip: "Ruhura Dock" },

        // Greater Dragon Island Docks
        { x: 281, y: 3919, type: "dock", tooltip: "Greater Dragon Island Dock" },

        // Khafra Side Docks
        { x: 88, y: 2693, type: "dock", tooltip: "Khafra Fishing Outpost Dock" },
        { x: 212, y: 2753, type: "dock", tooltip: "Khafra Dock" },

        // Breakwater Region Docks
        // New Town Island Docks
        { x: 1974, y: 1904, type: "dock", tooltip: "New Town Dock" },
        { x: 1843, y: 1752, type: "dock", tooltip: "Undead Dwarven Dock" },
        { x: 1797, y: 1708, type: "dock", tooltip: "Deadman Island Dock" },

        // Roycroft Island Docks
        { x: 2517, y: 2417, type: "dock", tooltip: "Roycroft North Dock" },
        { x: 2451, y: 2518, type: "dock", tooltip: "Roycroft South Dock" },
        { x: 2460, y: 2518, type: "dock", tooltip: "Roycroft South Dock" },
        { x: 2469, y: 2518, type: "dock", tooltip: "Roycroft South Dock" },

        // New Royale Island Docks
        { x: 1335, y: 1768, type: "dock", tooltip: "Pirate Raider's Dock" },
        { x: 1440, y: 1929, type: "dock", tooltip: "New Royal North Dock" },
        { x: 1300, y: 2028, type: "dock", tooltip: "New Royal South Dock" },
        { x: 1658, y: 2302, type: "dock", tooltip: "New Royal Island South Dock" },


        // Broken Finger Region Docks
        { x: 1148, y: 3771, type: "dock", tooltip: "Broken Finger Town Dock" },
        { x: 1428, y: 3837, type: "dock", tooltip: "Broken Finger Island Dock" },

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


        // Tundria Region
        { x: 2960, y: 990, type: "obelisk", tooltip: "Hammerfist Obelisk" },
    ],

    undergrounds: [
        /* Valinor Island Undergrounds */
        { x: 609, y: 359, type: "underground_dungeon", tooltip: "Frump's Lair" },
        { x: 875, y: 311, type: "underground_dungeon", tooltip: "Bonesnarl's Lair" }, //I need to verify this location
        { x: 763, y: 118, type: "underground_stairs", tooltip: "Stairs to Mage Trainers" },
        
        /* Lotor's Summer Palace Undergrounds */
        { x: 764, y: 754, type: "underground_dungeon", tooltip: "Sewer Entrance" },
        { x: 799, y: 709, type: "underground_stairs", tooltip: "Leather and Armor Shop Basement" },
        
        /* Krythan Island Undergrounds */

        // Region: Silvest Valley Undergrounds
        { x: 967, y: 1348, type: "underground_snake", tooltip: "Snake Pit" },
        { x: 907, y: 1031, type: "underground_crypt", tooltip: "Krythan Crypt" }, 
        { x: 1098, y: 1184, type: "underground_mine", tooltip: "Cliffside Mines" },

        // Region: Krythan Undergrounds
        { x: 327, y: 742, type: "underground_snake", tooltip: "Snake pit" },
        { x: 820, y: 1044, type: "underground_stairs", tooltip: "Holendar's Mansion Basement" },
        { x: 781, y: 863, type: "underground_stairs", tooltip: "Trap Door to LSP" },
        { x: 791, y: 918, type: "underground_stairs", tooltip: "Ladder to LSP Sewer (Away from evil spawn gate)" },

        /* Mainland Undergrounds */

        // Darkwoods Forest Region Undergrounds
        { x: 1464, y: 2676, type: "underground_spider", tooltip: "Shadow Spider Cave" },
        { x: 1655, y: 2679, type: "underground_cave", tooltip: "Swamp Beast Cave" },
        { x: 1573, y: 2658, type: "underground_cave", tooltip: "Swamp Beast Cave" },
        { x: 838, y: 3270, type: "underground_scorpion", tooltip: "Scorpion Pit" },
        { x: 760, y: 3323, type: "underground_termigon", tooltip: "Termigon Pit" },
        { x: 800, y: 3336, type: "underground_mine", tooltip: "South Astari Rune Shelter" },
        { x: 474, y: 3432, type: "underground_snake", tooltip: "Whisperdale Snake Pit" },
        { x: 1272, y: 3032, type: "underground_ant", tooltip: "Dunmarrow Fire Ant Pit" },
        { x: 1431, y: 3046, type: "underground_crypt", tooltip: "McKelsky Crypt" },
        { x: 483, y: 3507, type: "underground_dungeon", tooltip: "Marsh Dungeon" },
        { x: 634, y: 3188, type: "underground_dungeon", tooltip: "Cathedral of Joyous Afterlife (North Entrance)" },
        { x: 681, y: 3320, type: "underground_dungeon", tooltip: "Cathedral of Joyous Afterlife (South Entrance)" },

        // Highlands Region Undergrounds
        { x: 3562, y: 1928, type: "underground_closed", tooltip: "Cave (CLOSED)" }, // Used to be Astari Cave but it's closed now
        { x: 3240, y: 3607, type: "underground_cave", tooltip: "Grell" },
        { x: 3336, y: 3596, type: "underground_stairs", tooltip: "Grell Tunnels" },
        { x: 2889, y: 2883, type: "underground_stairs", tooltip: "Badlands Cave" }, // I'm adding this to Highlands but it could be a part of Battle Plains
        { x: 2710, y: 2888, type: "underground_stairs", tooltip: "Badlands Entrance" },
        { x: 3288, y: 3301, type: "underground_cave", tooltip: "Vel Dran Cave" }, 

        // Necropolis Undergrounds
        { x: 1363, y: 2889, type: "underground_stairs", tooltip: "Trap Door to Necropolis Magic and Farm Shops (They do not work)" },
        { x: 1349, y: 2933, type: "underground_stairs", tooltip: "Ladder to inside Necropolis" },

        // Battle Plains Region Undergrounds
        { x: 2330, y: 3620, type: "underground_stairs", tooltip: "Chlera Catacombs" },
        { x: 2137, y: 3156, type: "underground_cave", tooltip: "Desprail Cave" },
        { x: 2291, y: 2780, type: "underground_cave", tooltip: "Badlands Cave" },
        { x: 2010, y: 2676, type: "underground_dungeon", tooltip: "Deep Shadow Temple" },
        { x: 3273, y: 3991, type: "underground_snake", tooltip: "Krog Snake Pit" },

        // Black Swamp Region Undergrounds
        { x: 2824, y: 3624, type: "underground_sewer", tooltip: "Krog Sewer" },
        { x: 3019, y: 3815, type: "underground_sewer", tooltip: "Krog Sewer" },
        { x: 2793, y: 3834, type: "underground_crypt", tooltip: "Drakkan Crypt" },
        { x: 3245, y: 3835, type: "underground_sewer", tooltip: "Waste Tunnels" },
        { x: 3096, y: 3866, type: "underground_ant", tooltip: "Ant Hill" },
        { x: 3131, y: 3661, type: "underground_scorpion", tooltip: "Scorpion" },
        { x: 3080, y: 3517, type: "underground_dungeon", tooltip: "Valekar's Fortress Dungeon" },

        // Highlands Region Undergrounds

        // Western Isles Undergrounds
        { x: 2111, y: 2766, type: "underground_stairs", tooltip: "Shadow Temple South Entrance" },
        // Valley of Giants Undergrounds

        // Heartwood Coast Undergrounds
        { x: 3080, y: 1608, type: "underground_crypt", tooltip: "Gnobol Mauseleum Crypt" },
        { x: 3274, y: 1634, type: "underground_cave", tooltip: "Syldural" },
        { x: 3193, y: 1882, type: "underground_snake", tooltip: "Valmond Skeleton Pit" },

        // Tundria Region Undergrounds
        { x: 2306, y: 1369, type: "underground_cave", tooltip: "Icebane's Cavern Entrance" },
        { x: 2042, y: 1394, type: "underground_crypt", tooltip: "Maroven Crypt" },
        { x: 1992, y: 1210, type: "underground_crypt", tooltip: "Maroven Crypt" },
        { x: 2777, y: 595, type: "underground_dungeon", tooltip: "Hammerfist Mine Entrance" },
        { x: 2874, y: 965, type: "underground_cave", tooltip: "Web Spinner Spider Cave" },
        { x: 3526, y: 1265, type: "underground_crypt", tooltip: "Duremar Tomb" },
        { x: 3785, y: 987, type: "underground_crypt", tooltip: "Unknown Crypt" }, // A Crypt with Greater Skeletons Question
        { x: 2552, y: 440, type: "underground_dungeon", tooltip: "Frieda's Dungeon" },
        { x: 2888, y: 423, type: "underground_dungeon", tooltip: "Artraxis Dungeon" },

        // Hell Undergrounds
        { x: 1209, y: 3349, type: "underground_dungeon", tooltip: "Lotorian Dungeon" },
        { x: 1308, y: 3386, type: "underground_cave", tooltip: "Horned One Cave" },


        // Sands of Creation Region
        // Ruhura Side Undergrounds
        { x: 546, y: 3839, type: "underground_cave", tooltip: "Ruhura Elemental Cave" },
        { x: 309, y: 3910, type: "underground_stairs", tooltip: "East Entrance to Ruhura Side" },
        { x: 402, y: 3794, type: "underground_stairs", tooltip: "West Entrance to Greater Dragon Island" },
        { x: 455, y: 3719, type: "underground_cave", tooltip: "Elemental Cave" },
        { x: 949, y: 4005, type: "underground_dungeon", tooltip: "Mukarramma Dungeon" },

        // Greater Dragon Island Undergrounds
        { x: 300, y: 3772, type: "underground_cave", tooltip: "Greater Dragon Island Cave" },

        // Khafra Side Undergrounds
        { x: 78, y: 3354, type: "underground_cave", tooltip: "Khafra Elemental Cave" },

        // Breakwater Region Undergrounds
        // New Town Island Undergrounds
        { x: 1944, y: 1695, type: "underground_crypt", tooltip: "Darkwing's Lair Entrance" },
        { x: 2038, y: 1832, type: "underground_dungeon", tooltip: "Cyclops and Lion Cave" }, // I was thinking of changing the name to New Town Mine but haven't found any info on that
        { x: 2174, y: 1517, type: "underground_mine", tooltip: "Zule's Cave Entrance" },

        // Roycroft Island Undergrounds
        { x: 2215, y: 2260, type: "underground_stairs", tooltip: "Son of Scalo's Hideout" },
        { x: 2458, y: 2357, type: "underground_stairs", tooltip: "Warehouse Basement" },
        { x: 2310, y: 2198, type: "underground_stairs", tooltip: "Underground Pass to Northern Roycroft Island" },
        { x: 2310, y: 2184, type: "underground_stairs", tooltip: "Underground Pass to Southern Roycroft Island" },

        // New Royale Island Undergrounds

        // Broken Finger Region Undergrounds
        { x: 1144, y: 3658, type: "underground_dungeon", tooltip: "Broken Finger Dungeon" },
        { x: 1292, y: 3714, type: "underground_stairs", tooltip: "Trap Door to Gulley Portal " },
        { x: 1212, y: 3557, type: "underground_stairs", tooltip: "Entrance to Horned Ones Cave" },
        
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
        color: "#000000", // Black
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
        color: "#39FF14", // Neon Green
    },
    information: {
        icon: "icons/info.svg",
        color: "#00BFFF", // DeepSkyBlue
    },
    event: {
        icon: "icons/ticket.svg",
        color: "#FF1493", // DeepPink
    }
};
