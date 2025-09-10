// Define markers by category
const mapMarkers = {
    portals: [
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

        // Valinor Island Portals


        // Minotaur Island Portals


        // Party Island Portals


        //
        
    ],
    
    docks: [
        // Krythan Island Docks
        { x: 266, y: 823, type: "dock", tooltip: "Jeel Dock" },

        // Lotor's Summer Palace Docks
        { x: 792, y: 580, type: "dock", tooltip: "Palace Dock" },
        { x: 858, y: 728, type: "dock", tooltip: "LSP Dock" },

        // Valinor Island Docks

        // Minotaur Island Docks

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
        // Krythan Island Quests

        // Lotor's Summer Palace Quests
        { x: 857, y: 718, type: "quest", tooltip: "Carpentry Taskmaster" },
        { x: 863, y: 706, type: "quest", tooltip: "Farming Taskmaster" },
        // Add more quests
    ],
    
    shops: [
        /*Krythan Island Shops*/
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
        // Krythan Island Trainers
        
        // Lotor's Summer Palace Trainers
        
        { x: 839, y: 708, type: "trainer", tooltip: "Henchman Trainer" },
        
        // Add more trainers
    ],
    
    banks: [
        { x: 841, y: 681, type: "bank", tooltip: "Bank" },
        
        // Add more banks
    ],

    undergrounds: [
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
