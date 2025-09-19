// Define all map labels organized by category
const mapLabels = {
    landmarks: [
        // Add landmark labels here
        // Valinor Island Landmarks

        // Krythan Island Landmarks
        { x: 1374, y: 1435, name: "Valley of the Dead", fontSize: 30 },

        /* Mainland Landmarks */

        // Darkwood Forest Region Landmarks

        // Battle Plains Region Landmarks
        { x: 1752, y: 3404, name: "Proudblood Valley", fontSize: 30 },

    ],
    cities: [
        /* Valinor Island Cities */
        // Valinor Region Cities
        { x: 759, y: 65, name: "Valinor", fontSize: 24 },

        /* Krythan Island Cities */
        // Krythan Region Cities
        { x: 290, y: 807, name: "Jeel", fontSize: 30 },
        { x: 522, y: 1058, name: "Hothbra", fontSize: 30 },
        { x: 788, y: 1171, name: "Varg", fontSize: 30 },
        { x: 342, y: 1440, name: "New Korelth", fontSize: 30 },
        { x: 670, y: 1670, name: "Vrethpool", fontSize: 30 },
        { x: 247, y: 1116, name: "Lotor's Castle", fontSize: 30 },
        // Silvest Valley Region Cities
        { x: 1066, y: 1151, name: "Cliffside", fontSize: 30 },
        { x: 1086, y: 1355, name: "Silvest", fontSize: 30 },
        { x: 1344, y: 1282, name: "Fort Eastwatch", fontSize: 30 },


        //Scarab Island Cities
        { x: 390, y: 2183, name: "Lopal", fontSize: 30 },

        // Werewolf Island Cities
        { x: 260, y: 2623, name: "Lycanth", fontSize: 30 },

        // Sand of Creation Cities
        { x: 248, y: 2744, name: "Khafra", fontSize: 30 },
        { x: 381, y: 3979, name: "Ruhura", fontSize: 30 },

        /* Mainland Cities */

        // Darkwood Forest Region Cities
        { x: 456, y: 2825, name: "Redwake", fontSize: 30 },
        { x: 405, y: 3418, name: "Whisperdale", fontSize: 30 },
        { x: 592, y: 3389, name: "Autumn", fontSize: 30 },
        { x: 901, y: 3064, name: "Darkfell", fontSize: 30 },
        { x: 1384, y: 3151, name: "Dunmarrow", fontSize: 30 },
        { x: 1321, y: 2477, name: "Josody", fontSize: 30 },

        // Broken Finger Region Cities
        { x: 1153, y: 3712, name: "Broken Finger Town", fontSize: 20 },

        // Battle Plains Region Cities
        { x: 2220, y: 3235, name: "Desprail", fontSize: 30 },
        { x: 2403, y: 3548, name: "Chlera", fontSize: 30 },

        // Highlands Region Cities
        { x: 2636, y: 3497, name: "Samad", fontSize: 30 },
        { x: 3088, y: 3356, name: "Dawat", fontSize: 30 },
        { x: 3115, y: 3710, name: "Krog", fontSize: 30 },
        { x: 3064, y: 3978, name: "Maraket", fontSize: 30 }, 

        // Not sure which region this is
        { x: 3401, y: 3444, name: "Arda", fontSize: 30 },
        { x: 3462, y: 2939, name: "Parian", fontSize: 30 },
        { x: 3536, y: 3643, name: "Ethera Palace", fontSize: 30 },
        { x: 3602, y: 2774, name: "Darushk", fontSize: 30 },

        
        //Tundria
        { x: 2793, y: 849, name: "Hammerfist", fontSize: 24 },
        { x: 3649, y: 930, name: "Duremar", fontSize: 24 },
        { x: 1943, y: 1241, name: "Meroven", fontSize: 24 },
        { x: 2198, y: 1206, name: "Ringhaven Citadel", fontSize: 24 },
        { x: 2822, y: 1254, name: "Farstead Keep", fontSize: 24 },

        // Need to check these locations for Region name
        { x: 2626, y: 2106, name: "Valmond", fontSize: 24 },
        { x: 2497, y: 1616, name: "Teylan", fontSize: 24 },
        { x: 3274, y: 1631, name: "Syldural", fontSize: 24 },

        //Breakwater
        { x: 2448, y: 2336, name: "Roycroft", fontSize: 24 },
        { x: 1961, y: 1885, name: "New Town", fontSize: 24 },
        { x: 1457, y: 1964, name: "New Royale", fontSize: 24 },
        // Cities and Towns are done except some comments for region names above need to be filled in.
    
    ],
    
    islands: [
        //All Islands
        { x: 150, y: 70, name: "GM Island", fontSize: 30 },
        { x: 775, y: 571, name: "Lotor's Summer Palace", fontSize: 30 },
        { x: 663, y: 630, name: "Real Estate Island", fontSize: 20 },
        { x: 1090, y: 992, name: "Krythan Island", fontSize: 35 },
        { x: 940, y: 60, name: "Valinor Island", fontSize: 35 },
        { x: 421, y: 69, name: "Party Island", fontSize: 30 },
        { x: 1545, y: 546, name: "Lotor's Prison", fontSize:30 },
        { x: 137, y: 230, name: "Minotaur Island", fontSize: 30 },
        { x: 88, y: 942, name: "Guild Arena Island", fontSize: 30 },
        { x: 795, y: 2092, name: "Scorched Island", fontSize: 35 },
        { x: 1130, y: 3195, name: "Hell", fontSize: 35 },
        { x: 515, y: 640, name: "Mirthik's Island", fontSize: 14 },
        { x: 223, y: 425, name: "Deserted Island", fontSize: 14 },
        { x: 259, y: 2048, name: "Scarab Island", fontSize: 35 },
        { x: 463, y: 2495, name: "Werewolf Island", fontSize: 35 },
        { x: 350, y: 3238, name: "Dragoon Island", fontSize: 25 },
        { x: 160, y: 3792, name: "Greater Dragon Island", fontSize: 25 },
        { x: 1672, y: 1681, name: "Ettin Island", fontSize: 30 },
        { x: 3331, y: 254, name: "Northern Frost Giant Island", fontSize: 30 },
        { x: 3893, y: 1688, name: "PVP Island", fontSize: 30 },
        { x: 248, y: 3376, name: "Artonian Island", fontSize: 20 }, // Might be called something else
        
    ],
    
    dungeons: [
        // Dungeons and Lairs Here

        // Krythan Island Dungeons
        { x: 874, y: 1377, name: "Cultist Lair", fontSize: 15 },

        // Valinor Island Dungeons
        { x: 866, y: 302, name: "Bonesnarl's Lair", fontSize: 16 },


    ],
    
    caves: [
        // Caves and Mines Here

        // Krythan Island Caves
        { x: 440, y: 761, name: "Mirthik's Cave", fontSize: 16 },
        { x: 1017, y: 1109, name: "Silvest Mines", fontSize: 15 },
        { x: 1433, y: 1379, name: "Dalvon Mines", fontSize: 15 },
        { x: 1181, y: 1301, name: "Orc Cave", fontSize: 15 },
        { x: 391, y: 1318, name: "Flataga Mines", fontSize: 15 },
        // Add cave labels here
    ],
    
    interests: [
        // Valinor Island Places of Interest
        { x: 651, y: 174, name: "Duncan's Cottage", fontSize: 16 },
        { x: 570, y: 313, name: "Ruined Temple", fontSize: 16 },
        { x: 641, y: 362, name: "Lanore", fontSize: 16 },
        { x: 1083, y: 468, name: "Ecclain's Caravan", fontSize: 16 },
        { x: 1043, y: 282, name: "Valinor Ant Hill", fontSize: 16 },   
        { x: 965, y: 123, name: "Hermit's Hut", fontSize: 16 },

        // Krythan Island Places of Interest
        
        { x: 436, y: 850, name: "Crypt of Kargoth", fontSize: 14 },
        { x: 832, y: 1035, name: "Holendar's Mansion", fontSize: 15 },
        { x: 895, y: 1023, name: "Krythan Cemetary", fontSize: 15 }, // I know it's misspelled on the map but it's also misspelled in AE.
        { x: 836, y: 1279, name: "Scalo's Den", fontSize: 15 },
        { x: 1279, y: 1123, name: "Kobold Castle", fontSize: 18 },
        { x: 1376, y: 1077, name: "Karzak Cove", fontSize: 15 },
        { x: 88, y: 1503, name: "Tallem'im house", fontSize: 14 },
        { x: 516, y: 1302, name: "Wasp Hive", fontSize: 14 },
        { x: 782, y: 1532, name: "Orc Fort", fontSize: 18 },

        // Hell Places of Interest
        { x: 1104, y: 3292, name: "Talazar's Castle", fontSize: 25 },
        { x: 1200, y: 3341, name: "Minion's of Talazar's Stronghold", fontSize: 16 },


        // Darkwood Forest Places of Interest
        { x: 936, y: 2576, name: "Josody Theif Fort", fontSize: 18 },
        { x: 1030, y: 2977, name: "Crypt of Ryonkah", fontSize: 16 },
        { x: 555, y: 3158, name: "Lord Vezryl's Estate", fontSize: 16 },
        { x: 683, y: 3389, name: "Burslord's Hunting Lodge", fontSize: 16 },
        { x: 911, y: 3216, name: "Mnemmon", fontSize: 25 },
        { x: 881, y: 3390, name: "Mnemmon Gaol", fontSize: 20 },
        { x: 1358, y: 2903, name: "Necropolis", fontSize: 20 },
        { x: 815, y: 3223, name: "Astari Ruin Shelter", fontSize: 16 },
        
        // Sands of Creation Places of Interest
        // Ruhura Side Places of Interest
        { x: 943, y: 3987, name: "Ruhura Outpost", fontSize: 16 },
        { x: 842, y: 3924, name: "Sand Golem Crypt", fontSize: 16 },
        { x: 793, y: 3838, name: "Lupinsix's Lair", fontSize: 16 },
        { x: 720, y: 3682, name: "Tomna's House", fontSize: 16 },
        { x: 556, y: 3668, name: "Artonian Fort", fontSize: 16 },
        { x: 490, y: 3652, name: "Artonian Cave", fontSize: 16 },
        { x: 422, y: 3686, name: "The GateKeeper", fontSize: 16 },
        { x: 114, y: 3469, name: "Dragon Lair", fontSize: 16 },
        // Done
        
        // Khafra Side Places of Interest
        { x: 88, y: 2726, name: "Khafra Fishing Outpost", fontSize: 16 },
        { x: 313, y: 2979, name: "Baniti's Family Crypt", fontSize: 16 },
        { x: 56, y: 3026, name: "Blacktail's Crypt", fontSize: 16 },
        { x: 169, y: 3158, name: "The Guardian", fontSize: 16 },
        { x: 263, y: 3250, name: "Undead Artonian Crypt", fontSize: 16 },
        { x: 142, y: 3329, name: "Ancient Artonian Swordsman Dungeon", fontSize: 16 },
        // Done

        
        
        
        
    ],
    
    waterBodies: [
        //Valinor Island Water Bodies
        { x: 1177, y: 413, name: "Gut Rot Swamp", fontSize: 20 },

        // Krythan Island Water Bodies
        { x: 1267, y: 1220, name: "Lake Silvest", fontSize: 15 },
        { x: 390, y: 1090, name: "Queen's Lake", fontSize: 18 },
        { x: 849, y: 1156, name: "Crow Lake", fontSize: 14 },
        { x: 1040, y: 1218, name: "Chokecherry Pond", fontSize: 12 },
        // Add water body labels here

        // Sands of Creation Water Bodies
        // Ruhura Side Water Bodies

        // Khafra Side Water Bodies
        { x: 218, y: 3016, name: "Khafra Oasis", fontSize: 15 },
        { x: 91, y: 3267, name: "Chomper's Oasis", fontSize: 15 },
    ],
    
    mountains: [
        // { x: 567, y: 890, name: "Frost Peak", fontSize: 24 },
        // Add mountain labels here

        //Krog
        // Medosk Mountains add this label later when you find out which one it is.
    ]
};