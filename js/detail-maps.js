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
            width: 1341,
            height: 1212
        },
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
            { x: 560, y: 610, type: "shop", tooltip: "O'riles Weapon Shop" },
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
            { x: 300, y: 1000, type: "underground", tooltip: "Sewer Entrance" },
        ]
    }
};