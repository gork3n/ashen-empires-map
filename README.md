# Ashen Empires Interactive Map

> **Note:** This map is currently under active development. You may see temporary features like a red crosshair used for testing and coordinate verification. These will be removed in a future update.

An interactive map for Ashen Empires with pixel-perfect coordinates and multiple viewing options, built with OpenLayers.

## Live Demo

- **[OpenLayers Map](https://gork3n.github.io/ashen-empires-map/openlayers.html)** (Recommended)

## Table of Contents

- [Ashen Empires Interactive Map](#ashen-empires-interactive-map)
  - [Live Demo](#live-demo)
  - [Table of Contents](#table-of-contents)
  - [Customizing the Map](#customizing-the-map)
  - [Features](#features)
  - [Technical Implementation](#technical-implementation)
  - [Map Coordinates](#map-coordinates)
  - [A Note on Map \& Marker Accuracy](#a-note-on-map--marker-accuracy)
  - [Project Structure](#project-structure)
  - [Integration Guide](#integration-guide)
    - [Method 1: Using as a Standalone Page](#method-1-using-as-a-standalone-page)
    - [Method 2: Embedding in an Existing Website](#method-2-embedding-in-an-existing-website)
  - [Contributing](#contributing)
    - [How to Add or Edit Information](#how-to-add-or-edit-information)
      - [The `details` Object Structure](#the-details-object-structure)
    - [Submitting Your Changes](#submitting-your-changes)
  - [Development Plan](#development-plan)
  - [Credits](#credits)

## Customizing the Map

The map is designed to be easily configurable. Here are the key files and settings you can adjust:

- **Marker Size & Appearance**:
  - **File**: `js/map.js`
  - **Function**: `createMarkerStyle()`
  - **Settings**: Adjust `backgroundDiameter`, `iconSize`, `border`, and `shadowBlur` to change the base size and look of all markers.

- **Marker Scaling at Different Zooms**:
  - **File**: `js/map.js`
  - **Function**: `addMapMarkers()`
  - **Settings**: In the `style` function for the `markerLayer`, modify the `scale` variable's logic to control how large markers appear at different `resolution` (zoom) levels.

- **Initial Map View**:
  - **File**: `js/map.js`
  - **Variable**: `initialCenterGameCoords`
  - **Settings**: Change the `x` and `y` values to set the default location the map centers on when it first loads.

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming.
- **Precise Coordinates**: Real-time coordinate display in the footer. On desktop, it updates continuously as you move your cursor. On mobile, it updates when you tap the map.
- **Unified Filter Menu**:
  - A floating filter button opens a full-screen, touch-friendly menu on all devices for a consistent experience.
  - The menu features a centered, three-column grid layout for easy navigation and a clean aesthetic.
  - **Dynamic Toggles**: Buttons are generated dynamically for all label and marker categories.
  - **Granular Marker Filtering**: Marker categories are presented as full-width headers (e.g., 'Portals', 'Shops') that toggle the entire group. Below each header, individual sub-types (e.g., 'Ancient Portals', 'Weapon Shops') can be toggled independently, each with its own unique icon.
  - **Master Toggles**: "Show All" buttons allow you to toggle entire sections on or off at once.
- **Dynamic Markers & Labels**:
  - Markers for various categories including docks, shops, trainers, and more.
  - Portals are broken down into distinct types (Lotor's Palace, Ancient, Whirlpool, etc.) each with a unique, color-coded icon for easy identification.
  - Special markers for key NPCs like Town Stewards.
  - Markers are styled as colored circles with a white icon, providing excellent contrast and readability.
  - Tooltips on hover for all markers and major labels.
  - Labels dynamically scale their font size based on the zoom level, ensuring optimal legibility from any distance.
- **Info Flyout Panel**: Click on any marker or major label to open a detailed information panel. The panel includes coordinates, lore, and contextual information like the marker's `place` and `region`.
- **Optimized UI**:
- **Quick Tips**: A helpful, cycling tip bar at the bottom of the map to help users discover features. Click it to open a modal with a full list of game and map tips.
- **Responsive Design**: The interface is optimized for both desktop and mobile devices. The layout adapts to provide a functional and intuitive experience on any screen size, from phones to large monitors.

## Technical Implementation

This project is built using **OpenLayers**, chosen for its superior handling of custom coordinate systems and better performance with large, custom tilesets.

- **Modular JavaScript**: The code is organized into logical files:
  - `map.js`: Core map functionality, event handling, info flyout, and modal logic.
  - `filter-menu.js`: Manages the interactive filter menu.
  - `tips.js`: Powers the quick tips bar and modal.
  - `labels.js`, `markers.js`: Data files defining all labels and markers.
- **Dynamic Styling & Rendering**:
  - **Markers**: A colored circular background and a white foreground icon are drawn onto a single composite canvas. This ensures both elements scale together perfectly and provides a modern, clean look.
  - **Labels & UI Icons**: Text labels and icons in the filter menu are rendered to a canvas with custom fonts, gradients, and backgrounds. Label font size scales dynamically with the map's zoom level.
- **Responsive UI Framework**: A mobile-first approach using CSS Flexbox, Grid, and media queries creates a fluid layout that adapts to any screen size. The UI is unified across desktop and mobile for a consistent experience.
- **Performance Tuning**: The map is optimized for performance by using efficient label caching, disabling tile preloading to reduce memory usage, and hiding less important labels at far zoom levels.
- **Coordinate System**: The map accurately translates between the 32768x32768 tile-based map and the 4096x4096 in-game coordinate system, ensuring all displayed coordinates are correct.

## Map Coordinates

The map itself is rendered from a 32768x32768 pixel tileset. However, the coordinate display and all location data are based on the original in-game coordinate system where:

- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

The map automatically scales these coordinates to the larger map size. This matches the coordinate system used in-game for player location.

## A Note on Map & Marker Accuracy

This map has been rebuilt with a new, highly accurate set of tiles, resulting in near-perfect alignment with in-game coordinates.

Following this, a bulk coordinate correction was applied to all markers and labels. This change added a 4-pixel offset to center each marker perfectly within its scaled `8x8` pixel block, fixing a systemic issue where markers were anchored to the top-left corner of their coordinate space.

With this centering correction in place, the process of manually verifying each individual marker against its precise in-game location is now underway. This will correct any remaining inaccuracies from initial visual estimations and ensure pixel-perfect accuracy across the board.

## Project Structure

- `openlayers.html` - Main HTML file for the map.
- `/js/` - JavaScript files for the OpenLayers map.
- `/css/` - Stylesheets for the map and UI.
- `/tiles/` - Directory containing all map tile images
- `/images/` - Directory containing background images and assets for detail maps.

## Integration Guide

This guide explains how to use the map, either as a complete standalone page or by embedding it into an existing website.

### Method 1: Using as a Standalone Page

This is the simplest method. It gives you the full experience with the interactive sidebar, header, and all features.

1. Clone or download the repository.
2. Ensure you have the following files and folders in your project:
    - `openlayers.html`
    - `/js/` (containing `map.js`, `markers.js`, `labels.js`, `filter-menu.js`, and `tips.js`)
    - `/css/` (containing `map-styles.css`)
    - `/tiles/` (containing all map tile images)
    - `/images/` (containing background images)
3. Open `openlayers.html` in your browser. The map is ready to use.

### Method 2: Embedding in an Existing Website

To integrate the full-featured map (including the interactive sidebar) into an existing website, follow these steps.

1. **Copy Project Files**:
    Copy the following folders from this project into your website's directory:
    - `/js/`
    - `/css/`
    - `/tiles/`
    - `/images/`

2. **Add HTML Structure**: In your HTML file, add the structure for the sidebar, the main content container, the map itself, and the footer. You can copy this structure directly from `openlayers.html`.

3. **Include CSS and Fonts**:
    In the `<head>` of your HTML, link to the required stylesheets. Make sure the paths are correct for your project structure.

   ```html
    <!-- OpenLayers CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.css">
    <!-- Google Material Symbols for Icons -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <!-- Google Fonts for Labels -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&display=swap" rel="stylesheet">
    <!-- Project-specific Styles -->
    <link rel="stylesheet" href="css/map-styles.css">
   ```

4. **Include JavaScript**:
    At the end of your `<body>` tag, include the required JavaScript files in the correct order.

   ```html
    <!-- OpenLayers Library -->
    <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.js"></script>
    <!-- Project-specific Scripts (order matters) -->
    <script src="js/labels.js"></script>
    <script src="js/markers.js"></script>
    <script src="js/map.js"></script>
    <script src="js/tips.js"></script>
    <script src="js/filter-menu.js"></script>
   ```

5. **Adjust Paths**:
    If you placed the `js`, `css`, `tiles`, or `images` folders in different locations, you will need to update the paths in:
    - Your HTML file for the `<link>` and `<script>` tags.
    - `css/map-styles.css` for any `url()` paths (e.g., background images).
    - `js/map.js` for the `tileUrlFunction` if you moved the `/tiles` folder.

Once these steps are complete, the map should render and function within your page just as it does on the standalone `openlayers.html` page.

## Contributing

One of the best ways to contribute to this project is by adding or correcting the information that appears in the **Info Flyout Panel**. All location data is stored in a human-readable format in the `/js/` directory.

### How to Add or Edit Information

All data for the pop-up information panels is located in two files:

- `js/underworld-markers.js`: Contains data for all icon-based markers (shops, quests, portals, etc.).
- `js/underworld-labels.js`: Contains data for all text-based labels (cities, dungeons, landmarks, etc.).

To add or edit information, find the relevant entry in one of these files and modify its `details` object.

#### The `details` Object Structure

The `details` object holds all the information displayed in the flyout panel. Here is an example of a complete `details` object for a marker:

```javascript
{
    // ... other marker properties like type, tooltip, etc.
    "details": {
        "title": "O'riles Weapon Shop",
        "coordinates": { "x": 777, "y": 653 },
        "image": "images/shops/oriles.png",
        "lore": "O'riles is a master blacksmith who sells a variety of fine, handcrafted weapons to adventurers.",
        "npcs": [
            { "name": "O'riles", "info": "Shopkeeper and Blacksmith." },
            { "name": "Guard", "info": "Stands watch near the entrance." }
        ],
        "links": [
            { "text": "View on AE Wiki", "url": "https://wiki.ashenempires.com/index.php/O'riles_Weapon_Shop" }
        ]
    }
}
```

**Breakdown of `details` properties:**

- `title` (string): The main title shown at the top of the flyout panel.
- `coordinates` (object): The in-game `{x, y}` coordinates. This is displayed near the top.
- `image` (string, optional): The path to an image that will be displayed. The path is relative to the project's root directory (e.g., `images/locations/valinor.png`).
- `lore` (string, optional): A paragraph of text providing general information or history.
- `npcs` (array, optional): A list of important NPCs or sub-locations. Each item in the list is an object with a `name` and `info`.
- `links` (array, optional): A list of external links, such as to a wiki page. Each item is an object with `text` (the clickable text) and `url` (the web address).

You don't need to include every property. If a property like `image` or `links` is omitted, its section simply won't appear in the panel.

### Submitting Your Changes

The easiest way to contribute is to:

1. **Fork** the repository on GitHub.
2. **Edit** the `js/markers.js` or `js/labels.js` file in your fork.
3. **Submit a Pull Request** with your changes.

Your contributions will help make this map an even more valuable resource for the Ashen Empires community!

## Development Plan

To see the full list of completed, in-progress, and planned features, please see the dedicated Development Plan file. This includes a detailed breakdown of the future information system.

## Credits

Created by Sir Chris. Map tiles generated with GDAL2Tiles.
