# Development Notes

This document serves as a technical companion to the `development-plan.md`. It provides detailed explanations of the codebase, implementation specifics for key features, and a place to log notes about fixes and improvements.

## Table of Contents

- File Structure Overview
- Feature Implementation Details
  - Dynamic Layer Toggling
  - Custom Markers & Icons
  - Modular Codebase
  - Location Information Panel (Info Flyout)
  - Multi-Layer Map Support
  - Responsive & Mobile-Optimized UI
  - Complete Labeling System
  - Marker & Label Position Verification
- Development Fixes Log

---

## File Structure Overview

This section describes the purpose of each file in the project, especially those not explicitly detailed in the main development plan.

### HTML

- **`openlayers.html`**: The main entry point for the application.
  - **Structure**: It defines the core HTML structure, including the main `#container`, the map div `#map`, and the page footer. It also includes placeholders for UI elements that are dynamically populated by JavaScript, such as the filter menu and info flyout.
  - **Dependencies**: It links to all necessary CSS stylesheets (OpenLayers, Google Fonts, `map-styles.css`) and JavaScript libraries/modules (OpenLayers, and the project's JS files). The order of script inclusion is critical for proper initialization.

### CSS

- **`css/map-styles.css`**: The primary stylesheet for the entire application.
  - **Scope**: Styles everything from the base layout (`html`, `body`, `#container`) to specific OpenLayers component overrides (`.ol-attribution`).
  - **Key Sections**:
    - **UI Components**: Contains styles for the filter menu, info flyout panel, tooltips, and modals.
    - **Responsive Design**: Uses `@media` queries (`min-width: 769px` and `max-width: 768px`) to adapt the layout for desktop and mobile devices. For example, it transforms the filter menu from a side panel on desktop to a bottom sheet on mobile.
    - **Map States**: Includes classes like `.underground-active` to change the map's background when switching layers.
    - **FAB (Floating Action Button)**: Styles the circular buttons for filters and other actions, positioning them in the `.fab-container`.

### JavaScript

- **`js/map.js`**: The core of the application. It initializes the OpenLayers map, manages all layers, handles user interactions, and controls major UI components like the info flyout.
- **`js/labels.js` & `js/underground-labels.js`**: Data files that export arrays of label objects for the overworld and underground maps, respectively. Each object contains coordinates, text, font size, and category.
- **`js/markers.js` & `js/underground-markers.js`**: Data files for marker data. They export marker objects grouped by category (e.g., `portals`, `shops`) and a `markerStyles` object that defines the icon and color for each marker type.
- **`js/filter-menu.js`** (Not provided, but inferred): This module is responsible for dynamically building the filter menu UI, handling its state (open/closed), and dispatching custom events (e.g., `toggle-label-category`) when a user interacts with the toggles. `map.js` listens for these events to update layer visibility.
- **`js/tips.js`** (Not provided, but inferred): This module manages the "Quick Tips" bar and the associated tips modal, handling the display logic and user interaction.

---

## Feature Implementation Details

### Dynamic Layer Toggling

- **Code**: `js/map.js`, `js/filter-menu.js`, `css/map-styles.css`
- **Explanation**:
  1.  **Layer Storage**: In `map.js`, layers for markers and labels are stored in global objects (`markerLayers`, `labelLayers`, `undergroundMarkerLayers`, etc.) where keys are the category names (e.g., 'cities', 'shops').
  2.  **Event-Driven Toggling**: The filter menu (`filter-menu.js`) dispatches custom DOM events like `toggle-marker-category` when a button is clicked. The event's `detail` object contains the `category` and its new `visible` state.
  3.  **Event Listeners**: `map.js` sets up listeners for these events. When an event is received, it looks up the corresponding layer in the storage objects and calls `layer.setVisible(e.detail.visible)`.
  4.  **Styling**: `css/map-styles.css` uses `.toggle-btn.active` and `.toggle-btn.inactive` classes to provide visual feedback, which are applied by `filter-menu.js`.

### Custom Markers & Icons

- **Code**: `js/map.js` (functions: `preloadIcons`, `createMarkerStyle`, `createUIMarkerIcon`)
- **Explanation**:
  1.  **Icon Preloading**: On startup, `preloadIcons()` fetches all SVG icon files defined in `markerStyles` and stores the resulting `Image` objects in the `markerImageCache`. This prevents rendering delays.
  2.  **Dynamic Generation**: The `createMarkerStyle()` function is the core of this feature. For a given marker type, it creates an offscreen `<canvas>`.
  3.  **Composite Drawing**: On this canvas, it draws multiple elements in order: a drop shadow, a colored background circle (color from `markerStyles`), a white border, and finally the preloaded SVG icon from `markerImageCache` on top.
  4.  **Single Style Object**: The entire canvas is used as the source for a single `ol/style/Icon`. This is highly efficient as OpenLayers only needs to manage one image per marker, and all components (background, icon) scale together perfectly.
  5.  **Caching**: Generated styles are cached in `styleCache` to avoid redundant canvas drawing for markers of the same type.
  6.  **Scaling**: The layer's `style` function in `addMapMarkers` dynamically adjusts the scale of the generated icon based on the map's current `resolution` (zoom level).

### Modular Codebase

- **Code**: `js/map.js` (import statements), `js/labels.js`, `js/markers.js`
- **Explanation**: The project uses ES6 modules. `map.js` acts as the central orchestrator, importing data and functionality from other files.
  - **Data Modules**: `labels.js` and `markers.js` are pure data files. They export JavaScript objects and arrays, completely separating the map's *data* from its *logic*. This makes it easy for contributors to add or edit locations without needing to understand the map rendering engine.
  - **Functionality Modules**: `filter-menu.js` and `tips.js` encapsulate all logic for their respective UI components, keeping `map.js` cleaner and focused on core map operations.

### Location Information Panel (Info Flyout)

- **Code**: `js/map.js` (functions: `setupInfoFlyout`, `showInfoFlyout`, `populateAndShowFlyout`), `css/map-styles.css` (`.info-flyout` styles)
- **Explanation**:
  1.  **Initialization**: `setupInfoFlyout()` injects the panel's HTML into the DOM and attaches a 'click' listener to its close button.
  2.  **Trigger**: A `singleclick` event listener on the map checks if a feature was clicked. If so, it calls `showInfoFlyout()` with the feature's properties.
  3.  **Content Population**: `populateAndShowFlyout()` receives the feature's data. It dynamically builds the inner HTML for the panel, including the title, coordinates, lore, images, and links from the `details` object.
  4.  **Mini-Map**: If the marker is a map transition link (`switchTo` and `flyTo` properties exist), it initializes a new, separate OpenLayers map instance (`flyoutMapInstance`) inside the flyout to show a preview. The `destroyFlyoutMap()` function is crucial for cleaning up this instance to prevent memory leaks.
  5.  **Animation & Styling**: CSS handles the appearance and slide-up animation. The `.visible` class, added by JavaScript, triggers a `transform: translateY(0)` to bring the panel into view.

### Multi-Layer Map Support

- **Code**: `js/map.js` (functions: `initializeMap`, `switchMap`, `setupMapToggleButtons`)
- **Explanation**:
  1.  **Tile Layers**: `initializeMap()` creates two `TileLayer` instances: `overworldTileLayer` and `undergroundTileLayer`. The underground layer is created with `visible: false`.
  2.  **Data Layers**: Separate functions (`addMapMarkers`, `addUndergroundMapMarkers`, etc.) create the vector layers for each map. Underground layers are also set to `visible: false` initially.
  3.  **Switching Logic**: The `switchMap(targetMap)` function is the central controller. It:
      - Toggles the visibility of the appropriate tile layers.
      - Iterates through the `markerLayers` and `undergroundMarkerLayers` objects, setting the visibility of all layers within them.
      - Updates the `currentMap` global variable.
      - Toggles the `.active` class on the UI buttons.
   - **ID-Based Linking**: To improve maintainability, hardcoded `flyTo` coordinates have been replaced with a `flyToId` system.
    - A `findMarkerById(id)` helper function searches a combined `allMarkers` object to locate a marker by its unique ID.
    - The `allMarkers` object is created by deep-merging `mapMarkers` and `undergroundMapMarkers` to prevent category name collisions.
    - The `switchMap` and `initializeFlyoutMap` functions now prioritize `flyToId`. They use the helper function to get the target marker's coordinates dynamically, ensuring that links between maps (e.g., dungeon entrances/exits) are always accurate even if a marker's position is updated.
    - The info flyout logic checks that `details.switchTo !== currentMap` to ensure a mini-map preview only appears when linking to a *different* map.
  - **ID Numbering Scheme**: A structured, 6-digit ID system (`M-T-RR-II`) is planned to give every marker a unique and meaningful ID.
    - **`M` (Map):** The first digit identifies which map the marker is on (`1` for Overworld, `2` for Underground, `3` for Housing Realm).
    - **`T` (Type):** The second digit defines the marker's function (`0` for standard markers, `1` for linked markers that use `flyToId`).
    - **`RR` (Region):** The third and fourth digits are a two-digit code for the marker's geographical region (e.g., `07` for Highlands), with `00` reserved for maps without regions like the Housing Realm.
    - **`II` (Instance):** The final two digits are a sequential number for the marker within its group, ensuring uniqueness. For linked markers, these are assigned in pairs (e.g., `...01` and `...02`) to maintain the connection.
    - This system provides immense scalability and makes marker data self-documenting, which will be critical for managing the large number of markers planned for the project.
      
### Responsive & Mobile-Optimized UI

- **Code**: `css/map-styles.css`
- **Explanation**: The responsive design is achieved almost entirely through CSS.
  - **Mobile-First**: The base styles are designed for mobile screens.
  - **Desktop Overrides**: A media query (`@media (min-width: 769px)`) overrides base styles for larger screens. For example, it changes the `.filter-menu` from a full-width bottom sheet to a fixed-width side panel.
  - **Flexbox & Grid**: Modern CSS layouts like Flexbox and Grid are used extensively (e.g., in `.filter-menu-content`, `.marker-subtype-container`) to create fluid and robust component layouts that adapt to different screen sizes.
  - **Viewport Units**: `vh` (viewport height) is used for the mobile filter menu (`height: 90vh`) to make it scale relative to the user's screen.

### Complete Labeling System

- **Code**: `js/map.js` (functions: `createLabelImageStyle`, `addMapLabels`)
- **Explanation**:
  1.  **Dynamic Generation**: Similar to markers, labels are not static text. The `createLabelImageStyle` function renders text onto an offscreen canvas to create an image. This allows for complex styling like gradients, outlines, and custom fonts (`KJV1611`) that are not natively supported by OpenLayers text styles.
  2.  **Dynamic Scaling**: The layer's `style` function in `addMapLabels` is called every time the map is panned or zoomed. Inside this function, a `scaleFactor` is calculated based on the map's current `resolution`. This factor is used to determine a `newFontSize`, which is then passed to `createLabelImageStyle`.
  3.  **Performance**: The result from `createLabelImageStyle` is cached using a key that includes the text, category, and font size. This ensures that a label image is only generated once for a specific zoom level, dramatically improving performance.

### Marker & Label Position Verification

- **Code**: `js/map.js` (function: `addMarkerFeature`, `addLabelFeature`)
- **Explanation**:
  - **Coordinate System**: The map uses two coordinate systems: the in-game `4096x4096` system for data entry and the OpenLayers `32768x-32768` system for rendering.
  - **Scaling**: The `scaleFactor` (`32768 / 4096 = 8`) is used to convert between them.
  - **Centering Fix**: The original issue was that a coordinate like `(100, 100)` would be placed at the top-left of the `8x8` pixel block representing that coordinate. The fix was implemented in `addMarkerFeature` and `addLabelFeature`. The calculation now is:
    - `scaledX = (x * scaleFactor) - (scaleFactor / 2)`
    - `olY = -(y * scaleFactor) + (scaleFactor / 2)`
    - This effectively moves the anchor point from the top-left of the block to its center, ensuring markers and labels are perfectly centered on their intended in-game coordinate.
  - **Pixel Shift Investigation**: This is an ongoing task. The goal is to find the source of any remaining small, consistent offsets.
    - **Note for Fix**: *A potential source could be the `olY` calculation. The addition of `(scaleFactor / 2)` might be slightly off if the tile grid origin and the visual origin have a sub-pixel discrepancy. A fix might involve adding or subtracting a small constant (e.g., `+ (scaleFactor / 2) - 1`) to systematically shift all markers.*

---

## Development Fixes Log

*Use this section to note specific fixes as they are implemented.*

### Feature: [Name of Feature]

- **Issue**: [Brief description of the problem]
- **Fix**: [Brief description of the solution and where the code was changed]
- **Date**: [YYYY-MM-DD]

---

### Example Fix

- **Feature**: Marker & Label Position Verification
- **Issue**: All markers were anchored to the top-left of their coordinate block, appearing slightly offset down and to the right of their true location.
- **Fix**: Modified the coordinate calculation in `addMarkerFeature` and `addLabelFeature`. Subtracted half of the `scaleFactor` from the X coordinate and added half to the Y coordinate to shift the anchor point to the center of the scaled pixel block.
- **Date**: 2023-10-27

---

### Feature: Coordinate System & Marker Placement

- **Issue**: The map image was missing the entire `Y: 2807` coordinate row, causing all markers and coordinates below that point to be physically shifted. Additionally, the entire coordinate system had a one-pixel offset, requiring a `1-based` system for data entry.
- **Fix**: Implemented a two-part fix in `js/map.js` to introduce logical workarounds for the physical map image flaws.
  1.  **Coordinate Display**: The `initializeCoordinateDisplay` function was updated to add `1` to all coordinates to make the system `1-based`. It also checks if the calculated `Y` is `>= 2807` and adds another `1` to it, effectively making the display "skip" the missing row.
  2.  **Marker Placement**: The `addMarkerFeature` and `addLabelFeature` functions were updated to subtract `1` from the `Y` coordinate for any marker with `y > 2807`, shifting it up to its correct physical location on the shifted map.
- **Date**: 2023-10-28