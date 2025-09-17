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
            url: 'images/LSP.png',
            width: 2600,
            height: 2240
        },
        // --- COORDINATE MAPPING CONFIGURATION ---
        origin: {
            // The coordinate on the main 4096x4096 map that corresponds to the
            // top-left corner of this sub-map's content (after accounting for offset).
            // Use the calculation method provided in the documentation to find this value.
            x: 510,
            y: 549
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
            center: [877, 683], // [X, Y] pixel coordinates on the detail image (top-left origin)
            zoom: 2,            // Initial zoom level
            maxZoom: 6          // Maximum zoom level allowed
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
            // No map-specific markers are needed here.
            // The system automatically pulls in relevant markers from the main map
            // based on the coordinate mapping configuration.
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
            x: 560,
            y: 47
        },
        scale: 6, // The zoom factor of this sub-map image. (e.g., 6 means it's 600% of the original size).
        offset: {
            // The pixel padding inside the image file itself.
            // If the map content in your PNG doesn't start at the very top-left
            // pixel, use this to specify the size of the border/padding.
            x: 100,
            y: 156
        },
        // --- INITIAL VIEW CONFIGURATION (OPTIONAL) ---
        // Sets the starting view for the detail map modal.
        initialView: {
            center: [1306, 618], // Center on X:761, Y:124
            zoom: 4,             // Initial zoom level
            maxZoom: 7           // Maximum zoom level allowed
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
    },
    "Party Island": {
        title: "Party Island",
        image: {
            url: 'images/Party_Island.png', // NOTE: This is a placeholder image path.
            width: 800,                     // Placeholder width.
            height: 600                     // Placeholder height.
        },
        // --- COORDINATE MAPPING CONFIGURATION ---
        // NOTE: These are placeholder values. You would need to calculate them
        // using the methodology in the README.md file once you have the image.
        origin: {
            x: 363,
            y: 37
        },
        scale: 4, // Assuming a 400% zoom level for this hypothetical map.
        offset: {
            x: 0,
            y: 0
        },
        // --- INITIAL VIEW CONFIGURATION (OPTIONAL) ---
        initialView: {
            center: [400, 300], // Center of the placeholder image.
            zoom: 2,
            maxZoom: 5
        },
        info: `
            <h4>Welcome to Party Island!</h4>
            <p>A festive place for celebration and access to Lotor's Summer Palace.</p>
            <hr>
            <h5>Key Locations:</h5>
            <ul>
                <li>Dalgo's Tavern</li>
                <li>Portal to Lotor's Summer Palace</li>
            </ul>
        `,
        markers: [] // No map-specific markers needed; they will be pulled from the main map.
    }
};