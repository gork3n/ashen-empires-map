/**
 * This file contains the data for the information flyout panel.
 * When a label or marker is clicked, its 'name' or 'tooltip' is used as a key
 * to look up the corresponding entry in this `detailMapData` object.
 *
 * How to add a new entry:
 * 1. Add a new entry to the `detailMapData` object. The key must exactly match the
 *    'name' (for labels) or 'tooltip' (for markers) from js/labels.js or js/markers.js.
 * 2. Populate the object with the desired information. All fields are optional.
 *    - title: The main title shown in the flyout header.
 *    - coordinates: An object {x, y} for the in-game coordinates.
 *    - image: Path to a representative image.
 *    - lore: A string (can include HTML) with descriptive text.
 *    - npcs: An array of objects for related NPCs, each with a 'name' and 'info'.
 *    - links: An array of objects for external links, each with 'text' and 'url'.
 */
const detailMapData = {
    "Lotor's Summer Palace": {
        title: "Lotor's Summer Palace",
        coordinates: { x: 775, y: 571 },
        lore: "Lotor's Summer Palace is a central hub for players, offering access to various islands, housing realms, and a wide array of shops and services. It's a safe zone bustling with activity.",
        npcs: [
            { name: "Captain Renwood", info: "Offers quests to brave adventurers." },
            { name: "Donkeo", info: "A mysterious figure with unique quests." },
            { name: "O'riles Weapon Shop", info: "Sells a variety of weapons." },
            { name: "Colleen Franks' Armor Shop", info: "Provides sturdy armor for all classes." },
            { name: "Bank", info: "Securely store your valuable items and gold." }
        ],
        links: [
            { text: "More info on Ashen Empires Wiki", url: "#" }
        ]
    },
    "Valinor": {
        title: "Valinor",
        coordinates: { x: 759, y: 65 },
        image: "images/Valinor_Island-600x.png",
        lore: "Valinor is the starting city for new players, providing essential services and introductory quests to help them begin their journey in the world of Ashen Empires.",
        npcs: [
            { name: "Larodeth Lywelyn's Pub", info: "A place to rest and get quests." },
            { name: "Micheal Vonda's Weapon Shop", info: "Sells starter weapons." },
            { name: "Thomas Blackstone's Armor Shop", info: "Sells starter armor." },
            { name: "Bank", info: "Securely store your items." }
        ],
        links: [
            { text: "Valinor quests on AE Wiki", url: "#" }
        ]
    },
    "Party Island": {
        title: "Party Island",
        coordinates: { x: 421, y: 69 },
        image: "images/Party_Island.png",
        lore: "A festive island known for celebrations. It holds the main portal to access Lotor's Summer Palace.",
        npcs: [
            { name: "Dalgo's Tavern", info: "A lively tavern on the island." },
            { name: "Portal to Lotor's Summer Palace", info: "The primary way to reach the palace." }
        ],
        links: []
    },
    // Example of an entry for a specific marker (NPC)
    "Captain Renwood": {
        title: "Captain Renwood",
        coordinates: { x: 795, y: 603 },
        image: "images/npcs/captain_renwood.png", // Placeholder image path
        lore: "Captain Renwood is a quest-giving NPC located in Lotor's Summer Palace. He is looking for heroes to assist with various tasks.",
        npcs: [], // This section is for listing NPCs *within* a larger area. Not needed for a single NPC.
        links: [
            { text: "Captain Renwood's Quests (Wiki)", url: "#" }
        ]
    }
};