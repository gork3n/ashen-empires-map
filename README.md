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
  - [Adding and Configuring Detail Maps](#adding-and-configuring-detail-maps)
    - [Basic Structure](#basic-structure)
    - [Coordinate Mapping Methodology](#coordinate-mapping-methodology)
      - [How to Calculate the `origin`](#how-to-calculate-the-origin)
    - [Advanced Configuration](#advanced-configuration)
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
  - Markers for portals, docks, shops, trainers, banks, and spawn gates.
  - Labels for islands, cities, dungeons, and other points of interest.
  - Custom, canvas-rendered icons and text labels with shadows and gradients.
  - **Zoom-based visibility**: Markers and minor labels automatically disappear when zoomed out to reduce clutter.
- **Informative Tooltips**: Hover over any marker on the main map or in a detail view to see its name and type.
- **Detail Views**: Click on major location labels (like "Valinor") to open a modal with a high-resolution sub-map. These detail maps are highly configurable and feature:
  - Automatic inclusion of relevant markers **and labels** from the main map.
  - Custom initial view settings (center, zoom) and zoom limits.
  - Precise filtering to prevent including features from nearby, unrelated areas.
- **Quick Tips**: A helpful, cycling tip bar at the bottom of the map to help users discover features. Click it to open a modal with a full list of game and map tips.
- **Responsive Design**: The interface adapts to different screen sizes, making it mobile-friendly. However, some of the features are buggy on smaller screens. Desktop browsers recommended.

## Technical Implementation

This project is built using **OpenLayers**, chosen for its superior handling of custom coordinate systems and better performance with large, custom tilesets.

- **Modular JavaScript**: The code is organized into logical files:
  - `map.js`: Core map functionality, event handling, and modal logic.
  - `sidebar.js`: Manages the interactive sidebar controls.
  - `tips.js`: Powers the quick tips bar and modal.
  - `labels.js`, `markers.js`, `detail-maps.js`: Data files defining all labels, markers, and sub-map configurations, including advanced options for filtering and initial views.
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

## Adding and Configuring Detail Maps

Detail maps are high-resolution sub-maps that appear in a modal window when a user clicks on a major location label. All configuration for these maps is handled in `js/detail-maps.js`.

### Basic Structure

Each detail map is an object within `detailMapData`, keyed by the location's exact name from `js/labels.js`.

```javascript
"Valinor": {
    title: "Valinor",
    image: {
        url: 'images/Valinor_Island-600x.png',
        width: 4441,
        height: 3630
    },
    // ... coordinate mapping ...
    // ... filtering ...
    // ... initial view ...
    info: `... HTML content ...`,
    markers: [ /* markers specific to this map */ ]
}
```

### Coordinate Mapping Methodology

To ensure markers and labels from the main map appear correctly on a detail map, you must provide accurate coordinate mapping. This is done using the `origin`, `scale`, and `offset` properties.

-   **`scale`**: The zoom factor of the detail map image compared to the main map. If your detail image is a 600% blow-up of a region, the scale is `6`.
-   **`offset`**: The pixel padding *inside* the detail map image file. If the map content doesn't start at the very top-left pixel (0,0) of the image, `offset` defines the `x` and `y` distance to where the content begins.
-   **`origin`**: The coordinate on the main 4096x4096 map that corresponds to the top-left corner of the detail map's *content* (i.e., after accounting for the `offset`).

#### How to Calculate the `origin`

This is the most critical step. You need a single, identifiable landmark that is visible on both the main map and your new detail map image.

1.  **Find a Landmark**: Choose a distinct point, like the corner of a building or a specific marker.
2.  **Get Main Map Coordinates**: Hover over this landmark on the main map and record its coordinates from the bottom-left display (e.g., `main_X = 776`, `main_Y = 100`).
3.  **Get Detail Map Coordinates**: Open your detail map image in an editor and find the pixel coordinates of the *exact same landmark* from the top-left corner of the image file (e.g., `detail_X = 1482`, `detail_Y = 756`).
4.  **Apply the Formula**: Use the following formulas to calculate the origin.

    ```
    origin_X = main_X - ((detail_X - offset_X) / scale)
    origin_Y = main_Y - ((detail_Y - offset_Y) / scale)
    ```

    Once calculated, round the values and place them in the `origin` object. This calculation only needs to be done once per map.

### Advanced Configuration

-   **`filterBbox` (Optional)**: Use this to define a more precise area for fetching features. By default, the map fetches features from a box calculated from the image size. If your image is very large and contains unrelated nearby areas, you can use `filterBbox` to narrow the search. `minX`, `maxX`, `minY`, and `maxY` are based on the 4096x4096 main map coordinates.
    -   *Example*: `filterBbox: { maxY: 550 }` was used on the Valinor map to prevent it from showing markers from Lotor's Summer Palace to the south.

-   **`initialView` (Optional)**: Controls the initial state of the modal map.
    -   `center`: The `[X, Y]` starting coordinates, based on the pixel dimensions of the detail map image (top-left origin).
    -   `zoom`: The initial zoom level.
    -   `maxZoom`: The maximum zoom level allowed for this specific map.

## Integration Guide

This guide explains how to use the map, either as a complete standalone page or by embedding it into an existing website.

### Method 1: Using as a Standalone Page

This is the simplest method. It gives you the full experience with the interactive sidebar, header, and all features.

1. Clone or download the repository.
2. Ensure you have the following files and folders in your project:
    - `openlayers.html`
    - `/js/` (containing `map.js`, `markers.js`, `labels.js`, `sidebar.js`, `detail-maps.js`, `tips.js`)
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
    <script src="js/tips.js"></script>
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
