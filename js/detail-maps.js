/**
 * This file contains the data for detailed sub-maps that appear in a modal.
 *
 * How to add a new detail map:
 * 1. Add a new entry to the `detailMapData` object. The key must exactly match the
 *    'name' property of the label on the main map (from js/labels.js).
 * 2. Provide the title, image details (URL, width, height), and informational HTML.
 * 3. Add markers to the `markers` array. The 'x' and 'y' coordinates are relative
 *    to the top-left corner (0,0) of the sub-map image itself.
 */
const detailMapData = {
    "Lotor's Summer Palace": {
        title: "Lotor's Summer Palace",
        image: {
            url: 'images/Lotors_Summer_Palace.png',
            width: 1272,
            height: 1116
        },
        // --- COORDINATE MAPPING CONFIGURATION ---
        origin: {
            // The coordinate on the main 4096x4096 map that corresponds to the
            // top-left corner of this sub-map's content (after accounting for offset).
            // Use the calculation method provided in the documentation to find this value.
            x: 701,
            y: 583
        },
        scale: 6, // The zoom factor of this sub-map image. (e.g., 6 means it's 600% of the original size).
        offset: {
            // The pixel padding inside the image file itself.
            // If the map content in your PNG doesn't start at the very top-left
            // pixel, use this to specify the size of the border/padding.
            x: 0,
            y: 0
        },
        // --- END COORDINATE MAPPING ---
        // --- INITIAL VIEW CONFIGURATION (OPTIONAL) ---
        // Sets the starting view for the detail map modal.
        initialView: {
            center: [636, 558], // [X, Y] pixel coordinates on the detail image (top-left origin)
            zoom: 2,            // Initial zoom level
            maxZoom: 4          // Maximum zoom level allowed
        },
        // --- END INITIAL VIEW ---
        info: `
            <h4>Welcome to the Palace!</h4>
            <p>This is a special area where you can find various shops, trainers, and quests.</p>
            <hr>
            <h5>Key Locations:</h5>
            <ul>
                <li>O'riles Weapon Shop</li>
                <li>Colleen Franks' Armor Shop</li>
                <li>Bank</li>
                <li>...and more!</li>
            </ul>
        `,
        markers: [
            // NOTE: X and Y coordinates are relative to the top-left of the Lotors_Summer_Palace.png image.
            // You can adjust these values to precisely position the markers on the sub-map.
            /* { x: 560, y: 610, type: "shop", tooltip: "O'riles Weapon Shop" },
            { x: 555, y: 650, type: "shop", tooltip: "Colleen Franks' Armor Shop" },
            { x: 920, y: 820, type: "shop", tooltip: "Garius Farming Shop" },
            { x: 880, y: 800, type: "shop", tooltip: "Tom Uslak Carpentry Shop" },
            { x: 780, y: 780, type: "trainer", tooltip: "Henchman Trainer" },
            { x: 800, y: 640, type: "bank", tooltip: "Bank" },
            { x: 280, y: 200, type: "portal", tooltip: "Portal to Party Island" },
            { x: 285, y: 450, type: "portal", tooltip: "Portal to PvP Island" },
            { x: 430, y: 120, type: "dock", tooltip: "Palace Dock" },
            { x: 900, y: 900, type: "dock", tooltip: "LSP Dock" },
            { x: 895, y: 840, type: "quest", tooltip: "Carpentry Taskmaster" },
            { x: 925, y: 770, type: "quest", tooltip: "Farming Taskmaster" },
            { x: 300, y: 1000, type: "underground", tooltip: "Sewer Entrance" }, */
        ]
    },
    "Valinor": {
        title: "Valinor",
        image: {
            url: 'images/Valinor_Island-600x.png',
            width: 4441,
            height: 3630
        },
        // --- COORDINATE MAPPING CONFIGURATION ---
        origin: {
            // The coordinate on the main 4096x4096 map that corresponds to the
            // top-left corner of this sub-map's content (after accounting for offset).
            // Use the calculation method provided in the documentation to find this value.
            x: 631,
            y: 47
        },
        scale: 6, // The zoom factor of this sub-map image. (e.g., 6 means it's 600% of the original size).
        offset: {
            // The pixel padding inside the image file itself.
            // If the map content in your PNG doesn't start at the very top-left
            // pixel, use this to specify the size of the border/padding.
            x: 526,
            y: 156
        },
        // --- FILTERING CONFIGURATION (OPTIONAL) ---
        // Use this to override parts of the calculated bounding box for fetching
        // features. This is useful for large island maps where you only want
        // to show features for a specific area, not the entire island.
        filterBbox: {
            maxY: 550,  // South extent, chosen to exclude Lotor's Summer Palace
            minX: 560   // West extent, expanded to include Frump's Lair and Ruined Temple
        },
        // --- INITIAL VIEW CONFIGURATION (OPTIONAL) ---
        // Sets the starting view for the detail map modal.
        initialView: {
            center: [1306, 618], // Center on X:761, Y:124
            zoom: 5              // Initial zoom level
        },
        // --- END INITIAL VIEW ---
        // --- END COORDINATE MAPPING ---
        info: `
            <h4>Welcome to Valinor!</h4>
            <p>This is a special area where you can find various shops, trainers, and quests.</p>
            <hr>
            <h5>Key Locations:</h5>
            <ul>
                <li>Weapon and Armor Shops</li>
                <li>Bank</li>
                <li>...and more!</li>
            </ul>
        `,
        markers: [
            // Extra markers can be added here for Valinor
        ]
    }
};