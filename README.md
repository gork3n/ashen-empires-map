# Ashen Empires Interactive Map

An interactive map for Ashen Empires with pixel-perfect coordinates and multiple viewing options.

## Live Demos

- **[OpenLayers Map](https://gork3n.github.io/ashen-empires-map/openlayers.html)** (Recommended)
- **[Leaflet Map](https://gork3n.github.io/ashen-empires-map/leaflet.html)** (Deprecated)

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming
- **Precise Coordinates**: Real-time coordinate display showing exact X,Y positions (0,0 at top-left)
- **Interactive Sidebar**: Collapsible sidebar with controls to toggle visibility for different categories of labels and markers.
- **Dynamic Markers & Labels**:
  - Markers for portals, docks, shops, trainers, and banks.
  - Labels for islands, cities, dungeons, and other points of interest.
  - Custom, canvas-rendered icons and text labels with shadows and gradients.
- **Informative Tooltips**: Hover over a marker to see its name and type.
- **Responsive Design**: The interface adapts to different screen sizes, making it mobile-friendly.

## Moving Forward with OpenLayers

**OpenLayers is now the primary implementation** for this project due to its superior handling of coordinate systems and better performance with custom tilesets. While the Leaflet implementation remains available for reference, all new development will focus on the OpenLayers version.

### Why OpenLayers?

- **Coordinate Accuracy**: More precise mapping between game coordinates and the map display.
- **Performance**: Better handling of zoom levels and tile rendering.
- **Customization**: Greater flexibility for creating custom markers, labels, and controls.
- **Maintainability**: A cleaner, more modular code structure.

## Technical Implementation

This project offers two different map implementations:

### OpenLayers Implementation (`openlayers.html`) - Recommended

- Full-featured map built with the OpenLayers library.
- Modular JavaScript files for map logic (`map.js`), sidebar controls (`sidebar.js`), marker data (`markers.js`), and label data (`labels.js`).
- Custom canvas-rendered markers and labels for high-quality visuals and performance.
- Interactive sidebar with dynamically generated toggle controls.
- Precise coordinate mapping that maintains accuracy at all zoom levels.

### Leaflet Implementation (`/leaflet-files/`) - Deprecated

- Custom CRS (Coordinate Reference System) for game coordinates
- Pixel-perfect mapping where each point corresponds to exact game coordinates
- Bounded navigation that prevents scrolling outside map boundaries
- Custom cursor for better visibility

## Map Coordinates

The map itself is 16384x16384 pixels. However, the coordinate display and all location data are based on the original in-game coordinate system where:
- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

The map automatically scales these coordinates to the larger map size. This matches the coordinate system used in-game for player location.

## Project Structure

- `openlayers.html` - Main OpenLayers implementation (recommended)
- `/js/` - JavaScript files for the OpenLayers map
  - `map.js` - Core map functionality
  - `labels.js` - Label definitions and rendering
  - `sidebar.js` - Sidebar controls and interactions
  - `markers.js` - Map marker definitions and styling
- `/css/` - Stylesheets
  - `map-styles.css` - Styling for the map and UI elements
- `/leaflet-files/` - Directory containing the Leaflet implementation
  - `leaflet.html` - Main Leaflet page (deprecated)
  - `styles.css` - Styling for Leaflet map
  - `main.js` - Core Leaflet functionality
  - `labels.js` - Functionality for labeling
- `/tiles/` - Directory containing all map tile images
- `/images/` - Directory containing background images and assets

## Integration Guide

This guide explains how to use the map, either as a complete standalone page or by embedding it into an existing website.

### Method 1: Using as a Standalone Page

This is the simplest method. It gives you the full experience with the interactive sidebar, header, and all features.

1.  Clone or download the repository.
2.  Ensure you have the following files and folders in your project:
    *   `openlayers.html`
    *   `/js/` (containing `map.js`, `markers.js`, `labels.js`, `sidebar.js`)
    *   `/css/` (containing `map-styles.css`)
    *   `/tiles/` (containing all map tile images)
    *   `/images/` (containing background images)
3.  Open `openlayers.html` in your browser. The map is ready to use.

### Method 2: Embedding in an Existing Website

To integrate the full-featured map (including the interactive sidebar) into an existing website, follow these steps.

1.  **Copy Project Files**:
    Copy the following folders from this project into your website's directory:
    *   `/js/`
    *   `/css/`
    *   `/tiles/`
    *   `/images/`

2.  **Add HTML Structure**:
    In your HTML file, add the structure for the sidebar, the main content container, the map itself, and the footer. You can copy this structure directly from `openlayers.html`.

   ```html
    <!-- Add this inside your <body> tag -->

    <!-- Sidebar -->
    <div id="sidebar" class="sidebar">
        <!-- Sidebar Header -->
        <div class="sidebar-header">
            <h2 class="sidebar-title">Ashen Empires Map</h2>
            <button id="sidebar-toggle" class="sidebar-toggle"><i class="fa-solid fa-chevron-left"></i></button>
        </div>
        <!-- Collapsed Icons -->
        <div class="sidebar-icons">
            <div id="icon-labels" class="sidebar-icon"><i class="fa-solid fa-tags"></i><span class="icon-tooltip">Labels</span></div>
            <div id="icon-markers" class="sidebar-icon"><i class="fa-solid fa-location-dot"></i><span class="icon-tooltip">Markers</span></div>
            <div id="icon-monsters" class="sidebar-icon"><i class="fa-solid fa-skull-crossbones"></i><span class="icon-tooltip">Monsters</span></div>
        </div>
        <!-- Sidebar Content -->
        <div class="sidebar-content">
            <div class="sidebar-section">
                <h3><i class="fa-solid fa-tags"></i> Labels</h3>
                <button id="show-all-labels" class="toggle-btn active"><i class="fa-solid fa-eye"></i><span>Show All</span></button>
                <div id="label-toggles"></div>
            </div>
            <div class="sidebar-section">
                <h3><i class="fa-solid fa-location-dot"></i> Markers</h3>
                <button id="show-all-markers" class="toggle-btn active"><i class="fa-solid fa-map-marker-alt"></i><span>Show All</span></button>
                <div id="marker-toggles"></div>
            </div>
        </div>
    </div>

    <!-- Main Content Container (adjust for your layout) -->
    <div id="container">
        <div id="header">
            <h1>Ashen Empires Interactive Map</h1>
        </div>
        <div id="map"></div>
    </div>

    <!-- Footer for Coordinates -->
    <div class="page-footer">
        <div id="mouse-position">X: --- | Y: ---</div>
    </div>
   ```

3.  **Include CSS and Fonts**:
    In the `<head>` of your HTML, link to the required stylesheets. Make sure the paths are correct for your project structure.

   ```html
    <!-- OpenLayers CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ol@v9.1.0/ol.css" type="text/css">
    <!-- Font Awesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Google Fonts for Labels -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&display=swap" rel="stylesheet">
    <!-- Project-specific Styles -->
    <link rel="stylesheet" href="css/map-styles.css">
   ```

4.  **Include JavaScript**:
    At the end of your `<body>` tag, include the required JavaScript files in the correct order.

   ```html
    <!-- OpenLayers Library -->
    <script src="https://cdn.jsdelivr.net/npm/ol@v9.1.0/dist/ol.js"></script>
    <!-- Project-specific Scripts (order matters) -->
    <script src="js/markers.js"></script>
    <script src="js/labels.js"></script>
    <script src="js/map.js"></script>
    <script src="js/sidebar.js"></script>
   ```

5.  **Adjust Paths**:
    If you placed the `js`, `css`, `tiles`, or `images` folders in different locations, you will need to update the paths in:
    *   Your HTML file for the `<link>` and `<script>` tags.
    *   `css/map-styles.css` for any `url()` paths (e.g., background images).
    *   `js/map.js` for the `tileUrlFunction` if you moved the `/tiles` folder.

Once these steps are complete, the map should render and function within your page just as it does on the standalone `openlayers.html` page.

## Issues

The original Leaflet implementation had issues with coordinate accuracy and label positioning at different zoom levels, which prompted the switch to OpenLayers.

## Development

The map tiles were generated from the in-game map using GDAL2Tiles. The website itself is built with HTML, CSS, and JavaScript, using OpenLayers for the interactive map functionality.

## Planned Features

- ✅ Layer toggling for displaying different map information
- ✅ Points of interest markers for key locations
- ✅ Separation of code into dedicated files for better maintainability
- ✅ Interactive sidebar with dynamic controls
- ✅ Custom markers and tooltips
- ⬜ Search functionality for locations
- ⬜ Mobile-optimized controls (sidebar behavior)
- ⬜ Complete labeling system for all important locations
- ⬜ Interactive elements for more detailed location information

## Credits

Created by Sir Chris. Map tiles generated with GDAL2Tiles.

## Implementation Options

### OpenLayers Implementation (Recommended)

This is the current recommended implementation with improved coordinate accuracy, custom styling, and better performance.

### Leaflet Implementation (Alternative)

The Leaflet implementation is provided as an alternative option but is no longer actively maintained.

To use the Leaflet version:

1. Navigate to the `leaflet-files` folder
2. Copy `leaflet.html` to your root directory
3. Ensure the `/tiles/` folder is accessible from your root
4. Open `leaflet.html` in your browser

The Leaflet implementation has some known issues with coordinate accuracy and label positioning at different zoom levels.
