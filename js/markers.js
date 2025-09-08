// Define markers by category
const mapMarkers = {
    portals: [
        // Krythan Island Portals
        { x: 585, y: 1497, type: "portal", tooltip: "Portal to Parian" },
        { x: 2800, y: 849, type: "portal", tooltip: "Portal to Jeel" },
        { x: 3649, y: 950, type: "portal", tooltip: "Portal to Farstead" },
        
        // Island Portals
        
    ],
    
    docks: [
        { x: 266, y: 823, type: "dock", tooltip: "Jeel Dock" },
        { x: 792, y: 580, type: "dock", tooltip: "Palace Dock" },
        { x: 858, y: 728, type: "dock", tooltip: "LSP Dock" },
        // Add more docks
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
        size: 12
    },
    dock: {
        icon: "fa-solid fa-anchor",
        color: "#1E90FF", // DodgerBlue
        size: 12
    },
    quest: {
        icon: "fa-solid fa-scroll",
        color: "#FFD700", // Gold
        size: 12
    },
    shop: {
        icon: "fa-solid fa-store",
        color: "#32CD32", // LimeGreen
        size: 12
    },
    trainer: {
        icon: "fa-solid fa-graduation-cap",
        color: "#FF8C00", // DarkOrange
        size: 12
    },
    bank: {
        icon: "fa-solid fa-landmark",
        color: "#A0522D", // Sienna
        size: 12
    }
};