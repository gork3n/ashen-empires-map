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
  - ⬜ **Housing Realm Map**: A dedicated map layer for the Housing Realm, with its own labels and markers. This is a long-term goal pending the creation of the map tiles (stitching, upscaling, and tiling).
- 🚧 **Responsive & Mobile-Optimized UI**
  - 🚧 Fluid layout for all screen sizes.
  - ✅ Responsive filter menu: a full-screen overlay on mobile and a side panel on desktop.
  - ✅ Reverted zoom controls to default top-left position to avoid overlap with filter button on mobile.
- 🚧 **Complete Labeling System**
  - 🚧 Dynamic font scaling for legibility at all zoom levels.
  - 🚧 Ongoing verification and addition of all location labels.
- 🚧 **Expanded Information System**
- 🚧 **Marker & Label Position Verification**
  - 🚧 A bulk coordinate correction has been applied to all markers and labels to align them with the new map tiles. The process of manually verifying each individual marker against its precise in-game location is now underway to ensure pixel-perfect accuracy across the board.
  - ✅ **Coordinate Centering Correction**: A bulk coordinate correction has been applied to all markers and labels, adding an offset to center them perfectly within their scaled pixel blocks. This fixed a systemic issue where markers were anchored to the top-left corner of their coordinate space instead of the center.
  - 🚧 With the centering correction in place, the process of manually verifying each individual marker against its precise in-game location is now underway. This will correct any remaining inaccuracies from initial visual estimations.
  - ✅ **Refactor Complete:** All data has been consolidated into `markers.js` and `labels.js`. The `detail-maps.js` file has been eliminated. This improves data locality and makes it easier to manage and search.
    - Each marker and label object would contain its own `details`, `region`, and `place` information.
    - `region`: The major geographical area (e.g., "Krythan", "Tundria").
    - `place`: The specific named location where the marker is found. This could be a city ("Valinor"), a dungeon ("Kylian's Lair"), a building, or a general area ("East Krythan Fields").
    - This structure would make it programmatically possible to implement features like "show all markers in Valinor".

        Example marker object:

        ```javascript
        // Region: Highlands Shops
        // City: Lotor's Summer Palace Shops
        {
            type: 'shop_weapon', // Displays a custom icon
            tooltip: 'O\'riles Weapon Shop', // Displays when mouse hovered over marker (On Desktop)
            region: 'Western Isles', // Region of marker
            place: 'Lotor\'s Summer Palace', // Specific location of marker
            details: { // Information for flyout panel
                title: 'O\'riles Weapon Shop', // Separate Title for flyout if more information needed
                coordinates: { x: 777, y: 653 }, // Coordinates for marker render location and in-game coordinates (in-game coordinates are close enough.)
                image: 'images/Oriles_Weapon_Shop.png', // Image of npc or location in-game. 
                lore: 'Sells a variety of fine weapons.', // Used for lore or information about marker
                links: [...] // Links that have more information about marker if they exist.
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
- ⬜ **Detailed Sub-Maps**
  - ⬜ Create dedicated, high-resolution map layers for major underground dungeons.
  - ⬜ When a user clicks a dungeon entrance marker, a sub-map canvas will appear, showing the dungeon map centered at the corresponding coordinates.
- ⬜ **Housing Realm Map**
  - ⬜ A dedicated map layer for the Housing Realm.
  - ⬜ When a user clicks a housing realm portal, the map will switch to the housing realm layer and center on the corresponding spawn location.
- 🚧 **Finalize UI/UX and Styling**
  - 🚧 Replace all remaining Google Material Symbols with custom-designed SVG icons for a fully unique visual identity.
- ⬜ **Code Quality & Documentation**
  - ⬜ **Code Cleanup**: Remove temporary testing logic, and refactor any unused or redundant code to improve maintainability.
  - ⬜ **Demo & Documentation Site**: Create a dedicated site to showcase different implementation examples (e.g., standalone, embedded) and provide comprehensive documentation on how to use different map tile versions (e.g., no-scale, 4x scale, 8x scale) and integrate the map into various projects.

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
