# Development Plan

This document outlines the current status and future plans for the Ashen Empires Interactive Map project.

## Project Roadmap & Feature Status

This section is migrated from the main README to consolidate all planning details.

- ✅ **Dynamic Layer Toggling**
  - ✅ Unified filter menu for showing/hiding layers.
  - ✅ Master toggles for labels and markers.
  - ✅ State-aware buttons with active/inactive styles.
- 🚧 **Custom Markers & Icons**
  - 🚧 Custom SVG icons for all marker and label categories.
  - ✅ Markers are rendered on a colored circular background, which is drawn dynamically.
  - ✅ Markers are scaled down at far zoom levels to reduce clutter.
- ✅ **Modular Codebase**
  - ✅ Separation of concerns into `map.js`, `filter-menu.js`, `tips.js`.
  - ✅ Data-driven design using `labels.js` and `markers.js`.
- ✅ **Location Information Panel**
- 🚧 **Multi-Layer Map Support**
  - ✅ **Underground Map Layer**: A separate tile layer for the underground map has been integrated, with a UI to toggle between it and the overworld.
  - 🚧 **Underground Markers & Labels**: The filter menu is now context-aware for the underground map. Data for underground-specific markers and labels is currently being added, while work on overworld markers and labels continues.
  - 🚧 **ID-Based Marker Linking**: Replaced hardcoded `flyTo` coordinates with a `flyToId` system. This allows markers (like dungeon entrances and exits) to be dynamically linked. If a marker's location is updated, all links to it are automatically corrected, improving data integrity and maintainability.
    - **ID Numbering Scheme**: A structured, 6-digit ID system is planned to ensure organization, prevent collisions, and support all map layers. The format is `M-T-RR-II`:
      - **`M` (Map - 1st digit):** Identifies which map the marker physically exists on.
        - `1`xxxxx: **Overworld** (`markers.js`)
        - `2`xxxxx: **Underground** (`underground-markers.js`)
        - `3`xxxxx: **Housing Realm** (future `housing-markers.js`)
      - **`T` (Type - 2nd digit):** Defines the marker's primary function.
        - x`0`xxxx: **Standard Marker** (Not a link, e.g., a shop, quest NPC).
        - x`1`xxxx: **Linked Marker** (Uses `flyToId` to connect to another marker).
      - **`RR` (Region Code - 3rd and 4th digits):** A two-digit code to group markers by geographical region. This allows for up to 99 regions.
        - `00`: Reserved for maps without regions, such as the **Housing Realm**.
        - `01`: Valinor
        - `02`: Krythan
        - `03`: Silvest Valley
        - `04`: Darkwoods
        - `...` (and so on for all other regions).
      - **`II` (Instance ID - 5th and 6th digits):** A sequential, two-digit number for each unique marker within its Map, Type, and Region group.
        - This provides 99 unique IDs per group.
        - For linked markers, pairs will use sequential numbers (e.g., Entrance `111101`, Exit `211102`).
  - ⬜ **Housing Realm Map**: A dedicated map layer for the Housing Realm, with its own labels and markers. This is a long-term goal pending the creation of the map tiles (stitching, upscaling, and tiling).
- ✅ **Responsive & Mobile-Optimized UI**
  - 🚧 Fluid layout for all screen sizes.
  - ✅ Responsive filter menu: a full-screen overlay on mobile and a side panel on desktop.
  - ✅ Reverted zoom controls to default top-left position to avoid overlap with filter button on mobile.
  - 🚧 **Unified Navigation Controls**: Implemented a unified control scheme for all devices. A single click/tap triggers map transitions, while a long-press on mobile or `Ctrl+Click` on desktop opens the information panel.
- 🚧 **Complete Labeling System**
  - 🚧 Dynamic font scaling for legibility at all zoom levels.
  - 🚧 Ongoing verification and addition of all location labels.
- 🚧 **Expanded Information System**
- 🚧 **Marker & Label Position Verification**
  - 🚧 A bulk coordinate correction has been applied to all markers and labels to align them with the new map tiles. The process of manually verifying each individual marker against its precise in-game location is now underway to ensure pixel-perfect accuracy across the board.
  - ✅ **Coordinate Centering Correction**: A bulk coordinate correction has been applied to all markers and labels, adding an offset to center them perfectly within their scaled pixel blocks. This fixed a systemic issue where markers were anchored to the top-left corner of their coordinate space instead of the center.
  - 🚧 With the centering correction in place, the process of manually verifying each individual marker against its precise in-game location is now underway. This will correct any remaining inaccuracies from initial visual estimations.
  - ✅ **Refactor Complete:** All data has been consolidated into `markers.js` and `labels.js`. The `detail-maps.js` file has been eliminated. This improves data locality and makes it easier to manage and search.  
  - ✅ **Pixel Shift Investigation**: Fixed. The source of the minor, systemic pixel shift was identified as an issue in the original map tiles. The tiles have been completely remade, resolving the discrepancy.
    - Each marker and label object would contain its own `details`, `region`, and `place` information.  
    - `region`: The major geographical area (e.g., "Krythan", "Tundria").  
    - `place`: The specific named location where the marker is found. This could be a city ("Valinor"), a dungeon ("Kylian's Lair"), a building, or a general area ("East Krythan Fields").  
    - This structure would make it programmatically possible to implement features like "show all markers in Valinor".

        Example marker objects:

        ```javascript
        // Example 1: Standard Marker (A Shop)
        {
            id: "100701", // M-T-RR-II: 1-0-07-01 (Overworld, Standard, Highlands, Instance 01)
            type: 'overworld_shop_blacksmith',
            tooltip: "Hemos' Blacksmith Shop",
            region: 'Highlands',
            place: 'Parian',
            details: {
                title: "Hemos' Blacksmith Shop",
                coordinates: { x: 3472, y: 3064 },
                image: 'images/shops/hemos_blacksmith.png',
                lore: 'A master blacksmith offering a range of crafted goods and repair services.',
                npcs: [
                    { "name": "Hemos", "info": "Shopkeeper and Blacksmith." }
                ],
                links: []
            }
        }

        // Example 2: Linked Marker (A Dungeon Entrance)
        {
            id: "111101", // M-T-RR-II: 1-1-11-01 (Overworld, Linked, Sands of Creation, Instance 01)
            type: 'overworld_stairs',
            tooltip: "Lupinsix's Lair Entrance",
            region: 'Sands of Creation',
            place: 'Ruhura',
            details: {
                title: "Lupinsix's Lair",
                switchTo: "underground",
                flyToId: "211102", // Points to the corresponding exit marker on the underground map
                coordinates: { x: 792, y: 3848 }
            }
        }
        ```

- ✅ **Granular Marker Filtering** (Complete)
  - 🚧 Differentiated marker sub-types (e.g., `shop_weapon`, `shop_armor`, `portal_ancient`, `portal_lsp`).
  - ✅ Updated the filter menu to allow toggling these more specific sub-types, complete with unique icons and styling.
- ⬜ **Search Functionality**
  - ⬜ Implement a search bar to find locations, NPCs, and markers.
  - ⬜ Feature an auto-complete list as the user types.
  - ⬜ Require user to select an item from the list to perform the search.
  - ⬜ Include alias data for colloquial/common names to improve searchability (e.g., searching "LSP" finds "Lotor's Summer Palace").
- ⬜ **Settings Menu & Drawing Tools**
  - ⬜ Create a settings menu with functionality to change font types and styling for labels and markers.
  - ⬜ Add a feature to allow users to draw on the map and clear their drawings.
  - ⬜ Implement a search bar to find locations, NPCs, and markers.
  - ⬜ Feature an auto-complete list as the user types.
  - ⬜ Require user to select an item from the list to perform the search.
  - ⬜ Include alias data for colloquial/common names to improve searchability (e.g., searching "LSP" finds "Lotor's Summer Palace").
- ⬜ **Monster Data Layer**
  - ⬜ Mark general spawn areas for creatures using polygons, not individual spawn points.
  - ⬜ This feature is inspired by the in-game "Hunter Book" and is meant to guide players to the general vicinity of a creature. Players can then use in-game functionality to pinpoint exact locations.
- ⬜ **Visual Region Overlays**
  - ⬜ Add toggleable, colored polygon overlays to visually represent different regions (e.g., Darkwoods, Tundria).
  - ⬜ Overlays will be off by default but can be set to appear automatically when zoomed out (e.g., to level 2).
  - ⬜ Polygons will be clickable and have a central label, opening the info center with details about the region.
- 🚧 **Detailed Sub-Maps**
  - ✅ An interactive mini-map now appears in the info flyout for map-switching markers, showing a preview of the destination.
  - ⬜ Create dedicated, high-resolution map layers for major underground dungeons that can be explored within the flyout or a modal.
- ⬜ **Housing Realm Map**
  - ⬜ A dedicated map layer for the Housing Realm.
  - ⬜ When a user clicks a housing realm portal, the map will switch to the housing realm layer and center on the corresponding spawn location.
- 🚧 **Finalize UI/UX and Styling**
  - 🚧 Replace all remaining Google Material Symbols with custom-designed SVG icons for a fully unique visual identity.
- ⬜ **Code Quality & Documentation**
  - ⬜ **Code Cleanup**: Remove temporary testing logic, and refactor any unused or redundant code to improve maintainability.
  - ⬜ **Demo & Documentation Site**: Create a dedicated site to showcase different implementation examples (e.g., standalone, embedded) and provide comprehensive documentation on how to use different map tile versions (e.g., no-scale, 4x scale, 8x scale) and integrate the map into various projects.

- ⬜ **Map Image & Coordinate System Finalization**
  - ⬜ Re-stitch the map tiles to re-introduce the missing `Y: 2807` coordinate row.
  - ⬜ Re-stitch the map tiles to correct the one-pixel offset, allowing the coordinate system to revert to a true `(0,0)` origin.
  - ⬜ Once the map image is finalized, remove the corresponding logical workarounds in `js/map.js` for the `1-based` system and the `Y: 2807` skip.

---

## Future Technical Enhancements (Long-Term)

- ✅ **Upgrade OpenLayers Version**: Plan to migrate from the legacy OpenLayers v7.0.0 to a more recent version to leverage the latest API improvements, performance enhancements, and features.
- ✅ **Higher Resolution Map Tiles**: Introduce an 8x resolution map layer to provide even greater detail when fully zoomed in. This will be particularly useful for detailed sub-maps of dungeons and cities.
- ✅ **Coordinate System Recalibration**: A long-term goal is to perform a full recalibration of the map's coordinate system. This would involve a more automated process to correct the minor pixel shifts that occurred during the manual stitching of map screenshots, resulting in near-perfect alignment with in-game coordinates across the entire world.
  - ✅ **Map Tile Recalibration**: The map has been rebuilt with a new, highly accurate set of tiles, correcting the minor pixel shifts from the original version. This has resulted in near-perfect alignment with in-game coordinates across the entire world.

---

## Information Center - Detailed Plan

This section breaks down the desired functionality and content for the information flyout panel. The goal is to create a rich, interconnected information system.

### When clicking a Marker (e.g., a specific NPC, Shop, or Dungeon Entrance)

This is the most granular level of information.

- **Displayed Information:**
  - **Name:** The name of the marker (e.g., "Captain Renwood", "Bank").
  - **Image:** A representative in-game image (e.g., a screenshot of the NPC, the shop sign, or the dungeon entrance).
  - **Coordinates:** The precise X/Y coordinates of the marker.
  - **Information/Lore:** A detailed description. For an NPC, this could be their role or quests. For a shop, what it sells. For a dungeon, what monsters are inside.
  - **Links:** External links to wikis or quest guides related to this specific marker.

### When clicking a City Label (e.g., "Valinor", "Josody")

This provides an overview of a major hub.

- **Displayed Information:**
  - **Name:** The name of the city.
  - **Coordinates:** The coordinates of the city's label.
  - **Lore:** General information or history about the city.
  - **Image:** A scenic screenshot of the city.
  - **Markers in City:** A list of all important markers within the city's boundaries (e.g., "Bank", "Micheal Vonda's Weapon Shop", "Captain of the Guard").
    - **Functionality:** Each item in this list should be clickable. Clicking an item will update the Information Center to show the detailed view for that specific marker (as described in the section above).

### When clicking an Island/Region Label (e.g., "Krythan Island")

This provides a high-level overview of a large geographical area.

- **Displayed Information:**
  - **Name:** The name of the island or region.
  - **Coordinates:** The coordinates of the label.
  - **Lore:** General information about the island's climate, history, or key characteristics.
  - **Image:** A wide, scenic screenshot of the island.
  - **Labels on Island:** A list of all other labels within that island/region (e.g., cities, dungeons, landmarks).
    - **Functionality:** Each label in this list should be clickable. Clicking a label will pan and center the map view on that label's location.
