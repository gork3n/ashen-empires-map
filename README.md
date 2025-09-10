# Ashen Empires Interactive Map

An interactive map for Ashen Empires with pixel-perfect coordinates and multiple viewing options, built with OpenLayers.

## Live Demo

- **[OpenLayers Map](https://gork3n.github.io/ashen-empires-map/openlayers.html)** (Recommended)

## Table of Contents

- [Ashen Empires Interactive Map](#ashen-empires-interactive-map)
  - [Live Demo](#live-demo)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technical Implementation](#technical-implementation)
  - [Map Coordinates](#map-coordinates)
  - [A Heads-Up About Map Accuracy](#a-heads-up-about-map-accuracy)
  - [Project Structure](#project-structure)
  - [Integration Guide](#integration-guide)
    - [Method 1: Using as a Standalone Page](#method-1-using-as-a-standalone-page)
    - [Method 2: Embedding in an Existing Website](#method-2-embedding-in-an-existing-website)
  - [Development](#development)
  - [Planned Features](#planned-features)
  - [Credits](#credits)

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming.
- **Precise Coordinates**: Real-time coordinate display showing exact X,Y positions based on the 4096x4096 in-game map.
- **Interactive Sidebar**: Collapsible sidebar with controls to toggle visibility for different categories of labels and markers.
- **Dynamic Markers & Labels**:
  - Markers for portals, docks, shops, trainers, and banks.
  - Labels for islands, cities, dungeons, and other points of interest.
  - Custom, canvas-rendered icons and text labels with shadows and gradients.
- **Informative Tooltips**: Hover over a marker to see its name and type.
- **Detail Views**: Click on major location labels (like Lotor's Summer Palace) to open a modal with a high-resolution sub-map, complete with its own markers and coordinate system.
- **Responsive Design**: The interface adapts to different screen sizes, making it mobile-friendly.

## Technical Implementation

This project is built using **OpenLayers**, chosen for its superior handling of custom coordinate systems and better performance with large, custom tilesets.

- **Modular JavaScript**: The code is organized into logical files:
  - `map.js`: Core map functionality, event handling, and modal logic.
  - `sidebar.js`: Manages the interactive sidebar controls.
  - `labels.js` & `markers.js`: Data files defining all labels and markers on the main map.
  - `detail-maps.js`: Data file containing configurations for high-resolution sub-maps.
- **Custom Rendering**: Markers and labels are rendered on-the-fly to an HTML canvas for high-quality visuals and performance.
- **Coordinate System**: The map accurately translates between the 16384x16384 tile-based map and the 4096x4096 in-game coordinate system, ensuring all displayed coordinates are correct.

## Map Coordinates

The map itself is rendered from a 16384x16384 pixel tileset. However, the coordinate display and all location data are based on the original in-game coordinate system where:

- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

The map automatically scales these coordinates to the larger map size. This matches the coordinate system used in-game for player location.

## A Heads-Up About Map Accuracy

Just a quick note about the map coordinates. You might notice that some spots are off by a few pixels. This is because of how the map was built.

I created this map by taking hundreds of screenshots and manually piecing them together in image editing software. The problem is that the in-game camera doesn't always move a perfect pixel at a time. Sometimes, it shifts by a "half-pixel," which is a tiny amount you can't even see.

My editing software can only move images by whole pixels, so I couldn't perfectly match up those tiny "half-pixel" shifts. I did my best to line everything up, but this resulted in some very small alignment errors. Think of it like a tiny texture seam you might see in a game world.

So, if a coordinate seems slightly off, this is why! It shouldn't affect usage, but I wanted to let you know.

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
    - `/js/` (containing `map.js`, `markers.js`, `labels.js`, `sidebar.js`, `detail-maps.js`)
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
    <script src="js/detail-maps.js"></script>
    <script src="js/map.js"></script>
    <script src="js/sidebar.js"></script>
   ```

5. **Adjust Paths**:
    If you placed the `js`, `css`, `tiles`, or `images` folders in different locations, you will need to update the paths in:
    - Your HTML file for the `<link>` and `<script>` tags.
    - `css/map-styles.css` for any `url()` paths (e.g., background images).
    - `js/map.js` for the `tileUrlFunction` if you moved the `/tiles` folder.

Once these steps are complete, the map should render and function within your page just as it does on the standalone `openlayers.html` page.

## Development

The map tiles were generated from the in-game map using GDAL2Tiles. The website itself is built with HTML, CSS, and JavaScript, using OpenLayers for the interactive map functionality.

## Planned Features

- ✅ Layer toggling for displaying different map information
- ✅ Points of interest markers for key locations
- ✅ Separation of code into dedicated files for better maintainability
- ✅ Interactive sidebar with dynamic controls
- ✅ Custom markers and tooltips
- ✅ Interactive elements for more detailed location information (Detail Modals)
- ⬜ Search functionality for locations
- ⬜ Mobile-optimized controls (sidebar behavior)
- ⬜ Complete labeling system for all important locations

## Credits

Created by Sir Chris. Map tiles generated with GDAL2Tiles.
