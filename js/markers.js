// Define markers by category
const mapMarkers = {
    portals: [
        // Krythan Island Portals
        { x: 585, y: 1497, type: "portal", tooltip: "Portal to Parian" },
        { x: 2800, y: 849, type: "portal", tooltip: "Portal to Jeel" },
        { x: 3649, y: 950, type: "portal", tooltip: "Portal to Farstead" },
        
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
        // { x: 330, y: 815, type: "quest", tooltip: "The Mayor's Request" },
        // Add more quests
    ],
    
    shops: [
        //Krythan Island Shops

        //Varg Shops
        { x: 780, y: 1193, type: "shop", tooltip: "Magic Shop" },
        
        // Add more shops
    ],
    
    trainers: [
        // { x: 300, y: 818, type: "trainer", tooltip: "Blacksmithing Trainer" },
        
        // Add more trainers
    ],
    
    banks: [
        // { x: 318, y: 826, type: "bank", tooltip: "Jeel Bank" },
        
        // Add more banks
    ]
};

// Define marker types with appropriate Font Awesome icons and styling
// Make sure there are NO background properties here
const markerStyles = {
    portal: {
        icon: "fa-solid fa-archway",
        color: "#8A2BE2", // BlueViolet
        size: 13
    },
    dock: {
        icon: "fa-solid fa-anchor",
        color: "#1E90FF", // DodgerBlue
        size: 13
    },
    quest: {
        icon: "fa-solid fa-scroll",
        color: "#FFD700", // Gold
        size: 13
    },
    shop: {
        icon: "fa-solid fa-store",
        color: "#32CD32", // LimeGreen
        size: 13
    },
    trainer: {
        icon: "fa-solid fa-graduation-cap",
        color: "#FF8C00", // DarkOrange
        size: 13
    },
    bank: {
        icon: "fa-solid fa-landmark",
        color: "#A0522D", // Sienna
        size: 13
    }
};