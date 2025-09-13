// Define markers by category
const mapMarkers = {
    portals: [
        // Valinor Island Portals
        { x: 776, y: 100, type: "portal", tooltip: "Portal to Leave Valinor" },
        { x: 776, y: 168, type: "portal", tooltip: "Portal to Arena Viewing Area" },

        // Krythan Island Portals
        { x: 585, y: 1497, type: "portal", tooltip: "Portal to East Mainlands West of Parian" },
        { x: 2800, y: 849, type: "portal", tooltip: "Portal to Jeel" },
        { x: 3649, y: 950, type: "portal", tooltip: "Portal to Farstead" },
        { x: 185, y: 1466, type: "portal", tooltip: "Portal to Northeastern Mainlands North of Josody" },
        
        // Lotor's Summer Palace Portals
        { x: 762, y: 593, type: "portal", tooltip: "Portal to Party Island" },
        { x: 763, y: 646, type: "portal", tooltip: "Portal to PvP Island" },

        // Real Estate Island Portals
        { x: 663, y: 735, type: "portal", tooltip: "Portal to Lotor's Summer Palace" },


        // Minotaur Island Portals


        // Party Island Portals


        //
        
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
        { x: 792, y: 580, type: "dock", tooltip: "Palace Dock" },
        { x: 858, y: 728, type: "dock", tooltip: "LSP Dock" },
        //Done

        // Minotaur Island Docks
        // No active docks on Minotaur Island as of now

        // Party Island Docks

        /* Mainland Docks */

        // Western Docks

        // Eastern Docks

        // Tundra Docks

        // New Royale Docks

        // New Town Docks

        // Roycroft Docks
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
        
        // Add more quests NPCs as needed
    ],
    
    shops: [
        //Valinor Shops
        { x: 749, y: 116, type: "shop", tooltip: "Larodeth Lywelyn's Pub and Grub Tavern" },
        { x: 738, y: 120, type: "shop", tooltip: "Micheal Vonda's Weapon Shop" },
        { x: 733, y: 125, type: "shop", tooltip: "Thomas Blackstone's Armor Shop" },
        { x: 735, y: 116, type: "shop", tooltip: "Whiliam Rosen's Provisioner Shop" },
        { x: 772, y: 120, type: "shop", tooltip: "Leon Elias's Provisioner Shop" },
        { x: 784, y: 115, type: "shop", tooltip: "Cladius Zamilus's Alchemist Shop" },
        { x: 752, y: 152, type: "shop", tooltip: "Linus Houson's Carpentry Store" },
        { x: 752, y: 153, type: "shop", tooltip: "Kerry Thomas' Blacksmith Shop " },
        { x: 752, y: 154, type: "shop", tooltip: "Tina Florence's Leather Shop" },


        //Krythan Shops
        //Varg Shops
        { x: 780, y: 1193, type: "shop", tooltip: "Magic Shop" },
        
        /*Lotor's Summer Palace Shops*/
        { x: 812, y: 676, type: "shop", tooltip: "O'riles Weapon Shop" },
        { x: 811, y: 683, type: "shop", tooltip: "Colleen Franks' Armor Shop" },
        { x: 863, y: 715, type: "shop", tooltip: "Garius' Farming Shop" },
        { x: 854, y: 712, type: "shop", tooltip: "Tom Uslak Carpentry Shop" },

        // Add more shops
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
        
        { x: 839, y: 708, type: "trainer", tooltip: "Henchman Trainer" },
        
        // Add more trainers
    ],
    
    spawns: [
        // Add good and evil spawn gates here
        //Valinor Island Spawns
        { x: 779, y: 141, type: "spawn_good", tooltip: "Spawn Gate" },
        
        //Krythan Island Spawns

        
        // Example: { x: 123, y: 456, type: "spawn_good", tooltip: "Good Spawn Gate" }
        // Example: { x: 789, y: 101, type: "spawn_evil", tooltip: "Evil Spawn Gate" }
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
        
        //Tundra Banks


        // Add more banks
    ],

    undergrounds: [
        //Valinor Island Undergrounds
        { x: 609, y: 359, type: "underground", tooltip: "Frump's Lair" },
        { x: 875, y: 311, type: "underground", tooltip: "Bonesnarl's Lair" }, //I need to verify this location
        { x: 763, y: 118, type: "underground", tooltip: "Stairs to Mage Trainers" },
        
        //Krythan Island Undergrounds
        { x: 967, y: 1318, type: "underground", tooltip: "Snake Pit" },

        //Lotor's Summer Palace Undergrounds
        { x: 764, y: 754, type: "underground", tooltip: "Sewer Entrance" },

        
    ]
};

// Define marker types with appropriate Font Awesome icons and styling
// Make sure there are NO background properties here
const markerStyles = {
    portal: {
        icon: "sprint",
        color: "#FFD700", // Gold
        size: 18
    },
    dock: {
        icon: "anchor",
        color: "#1E90FF", // DodgerBlue
        size: 18
    },
    quest: {
        icon: "stars",
        color: "#FFD700", // Gold
        size: 18
    },
    shop: {
        icon: "store",
        color: "#32CD32", // LimeGreen
        size: 18
    },
    trainer: {
        icon: "book_2",
        color: "#FF8C00", // DarkOrange
        size: 18
    },
    spawn_good: {
        icon: "skull",
        color: "#FFFFFF", // White
        size: 18
    },
    spawn_evil: {
        icon: "skull",
        color: "#8B0000", // DarkRed (Blood Red)
        size: 18
    },
    bank: {
        icon: "account_balance",
        color: "#DBC12F", // Gold
        size: 18
    },
    underground: {
        icon: "tools_ladder",
        color: "#d36517ff", // SaddleBrown
        size: 18
    }
};
