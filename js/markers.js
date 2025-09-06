// Define markers by category
const mapMarkers = {
    portals: [
        // Krythan Island Portals
        { x: 584, y: 1493, type: "portal", tooltip: "Portal to Parian" },
        { x: 2800, y: 849, type: "portal", tooltip: "Portal to Jeel" },
        { x: 3649, y: 950, type: "portal", tooltip: "Portal to Farstead" },
        
        // Island Portals
        
    ],
    
    docks: [
        { x: 264, y: 823, type: "dock", tooltip: "Jeel Dock" },
        { x: 794, y: 580, type: "dock", tooltip: "Palace Dock" },
        { x: 854, y: 730, type: "dock", tooltip: "LSP Dock" },
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
        color: "#F5D76E", // BlueViolet
        size: 12
    },
    dock: {
        icon: "fa-solid fa-anchor",
        color: "#F5D76E", // DodgerBlue
        size: 12
    },
    quest: {
        icon: "fa-solid fa-scroll",
        color: "#F5D76E", // Gold
        size: 12
    },
    shop: {
        icon: "fa-solid fa-store",
        color: "#F5D76E", // LimeGreen
        size: 12
    },
    trainer: {
        icon: "fa-solid fa-graduation-cap",
        color: "#F5D76E", // DarkOrange
        size: 12
    },
    bank: {
        icon: "fa-solid fa-landmark",
        color: "#F5D76E", // Sienna
        size: 12
    }
};