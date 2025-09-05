// Define markers by category
const mapMarkers = {
    portals: [
        { x: 320, y: 825, type: "portal", tooltip: "Portal to Hammerfist" },
        { x: 2800, y: 849, type: "portal", tooltip: "Portal to Jeel" },
        { x: 3649, y: 950, type: "portal", tooltip: "Portal to Farstead" },
        // Add more portals
    ],
    
    docks: [
        { x: 264, y: 823, type: "dock", tooltip: "Jeel Dock" },
        { x: 780, y: 590, type: "dock", tooltip: "Palace Dock" },
        { x: 2790, y: 860, type: "dock", tooltip: "Hammerfist Port" },
        // Add more docks
    ],
    
    quests: [
        { x: 330, y: 815, type: "quest", tooltip: "The Mayor's Request" },
        { x: 445, y: 765, type: "quest", tooltip: "Mirthik's Puzzle" },
        // Add more quests
    ],
    
    shops: [
        { x: 305, y: 820, type: "shop", tooltip: "General Store" },
        { x: 313, y: 828, type: "shop", tooltip: "Weapons & Armor" },
        // Add more shops
    ],
    
    trainers: [
        { x: 300, y: 818, type: "trainer", tooltip: "Blacksmithing Trainer" },
        { x: 308, y: 825, type: "trainer", tooltip: "Spell Trainer" },
        // Add more trainers
    ],
    
    banks: [
        { x: 318, y: 826, type: "bank", tooltip: "Jeel Bank" },
        { x: 2795, y: 852, type: "bank", tooltip: "Hammerfist Bank" },
        // Add more banks
    ]
};

// Define marker types with appropriate Font Awesome icons and styling
// Make sure there are NO background properties here
const markerStyles = {
    portal: {
        icon: "fa-solid fa-door-open",
        color: "#8A2BE2", // BlueViolet
        size: 16
    },
    dock: {
        icon: "fa-solid fa-anchor",
        color: "#1E90FF", // DodgerBlue
        size: 16
    },
    quest: {
        icon: "fa-solid fa-scroll",
        color: "#FFD700", // Gold
        size: 16
    },
    shop: {
        icon: "fa-solid fa-store",
        color: "#32CD32", // LimeGreen
        size: 16
    },
    trainer: {
        icon: "fa-solid fa-graduation-cap",
        color: "#FF8C00", // DarkOrange
        size: 16
    },
    bank: {
        icon: "fa-solid fa-landmark",
        color: "#A0522D", // Sienna
        size: 16
    }
};