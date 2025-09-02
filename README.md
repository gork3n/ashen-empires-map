# Ashen Empires Interactive Map

An interactive map for Ashen Empires with pixel-perfect coordinates and multiple viewing options.

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming
- **Precise Coordinates**: Real-time coordinate display showing exact X,Y positions (0,0 at top-left)
- **Multiple Map Implementations**: 
  - Leaflet-based viewer with custom styling and controls (deprecated)
  - OpenLayers-based viewer with additional features (recommended)
- **Custom Background**: Themed background to match the game's aesthetic
- **Mobile-Friendly**: Responsive design that works on desktop and mobile devices

## Moving Forward with OpenLayers

**OpenLayers is now the primary implementation** for this project due to its superior handling of coordinate systems and better performance with custom tilesets. While the Leaflet implementation remains available for reference, all new development will focus on the OpenLayers version.

### Why OpenLayers?

- More precise coordinate mapping with game coordinates
- Better handling of zoom levels and tile rendering
- Easier integration with external websites
- More customization options for developers
- Cleaner code structure and better maintainability

## Current Development Status

The OpenLayers implementation is currently in active development:

- Basic map functionality is working with proper coordinate display
- Custom styled labels with Google Fonts integration (currently testing with "Fredericka the Great")
- Map bounds constraints to prevent scrolling outside the map area
- Proper styling for controls and UI elements

### In Progress:

- Separating code into dedicated JS, CSS, and HTML files for better organization
- Adding more location labels and points of interest
- Implementing additional map features and interactive elements

## Technical Implementation

This project offers two different map implementations:

### Leaflet Implementation (`/leaflet/`) - Deprecated

- Custom CRS (Coordinate Reference System) for game coordinates
- Pixel-perfect mapping where each point corresponds to exact game coordinates
- Bounded navigation that prevents scrolling outside map boundaries
- Custom cursor for better visibility

### OpenLayers Implementation (`openlayers.html`) - Recommended

- Full-featured map with OpenLayers library
- Customized coordinate display showing game coordinates (0,0 at top-left)
- Consistent styling with the game's theme
- Separate backgrounds for page and map container
- Precise coordinate mapping that maintains accuracy at all zoom levels
- Custom styled labels using Google Fonts
- Map bounds constraints to prevent viewing outside the map area

## Map Coordinates

Both implementations use a coordinate system where:
- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

This matches the coordinate system used in-game.

## Project Structure

- `openlayers.html` - Main OpenLayers implementation (recommended)
- `leaflet.html` - Main Leaflet page (deprecated)
- `/leaflet/` - Directory containing the Leaflet implementation
  - `styles.css` - Styling for Leaflet map
  - `main.js` - Core Leaflet functionality
  - `labels.js` - Functionality for labeling (NOT IN USE)
- `/tiles/` - Directory containing all map tile images
- `/images/` - Directory containing background images and assets

## Integration Guide

### Using as a Standalone Page

To use the OpenLayers map as a standalone page:

1. Copy `openlayers.html` to your website
2. Copy the `/tiles/` folder with all map tiles
3. Copy any background images from `/images/` that you need
4. The map is ready to use!

### Embedding in an Existing Website

To integrate the map into your existing fansite:

1. **Include the OpenLayers library in your page**:
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.css" type="text/css">
   <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@main/dist/en/v7.0.0/legacy/ol.js"></script>
   ```

2. **Add necessary CSS for the map and coordinate display**:
   ```html
   <style>
     #ae-map {
       width: 800px;
       height: 600px;
       border-radius: 4px;
       background: #002131 url('images/bg.png');
       overflow: hidden;
     }
     
     #ae-coordinates {
       position: absolute;
       bottom: 20px;
       left: 20px;
       z-index: 1000;
       background: rgba(0, 0, 0, 0.6);
       color: white;
       padding: 5px 10px;
       border-radius: 4px;
       font-family: 'Courier New', Courier, monospace;
     }
     
     /* Make sure the OpenLayers canvas doesn't block the background */
     .ol-layer canvas {
       background-color: transparent;
     }
     
     /* Style the attribution control */
     .ol-attribution {
       background: rgba(0, 0, 0, 0.6) !important;
       color: white !important;
     }
     
     .ol-attribution a {
       color: #9cf !important;
     }
   </style>
   ```

3. **Add containers for the map and coordinate display**:
   ```html
   <div id="ae-map"></div>
   <div id="ae-coordinates"></div>
   ```

4. **Add the complete JavaScript for map initialization**:
   ```html
   <script>
     // Custom coordinate format function to display whole numbers and adjust Y axis
     function customCoordFormat(coord) {
       if (!coord) return '';
       
       // Round to whole numbers
       var x = Math.round(coord[0]);
       
       // For Y, we need to invert the coordinate since OpenLayers has origin at bottom-left
       // and we want origin at top-left
       var y = Math.round(4096 - coord[1]);
       
       // Make sure y is within bounds
       y = Math.max(0, Math.min(4096, y));
       
       // Return formatted string
       return 'X: ' + x + ', Y: ' + y;
     }
     
     // Create a custom mouse position control
     var mousePositionControl = new ol.control.MousePosition({
       className: 'custom-mouse-position',
       target: document.getElementById('ae-coordinates'),
       coordinateFormat: customCoordFormat,
       undefinedHTML: 'X: 0, Y: 0'
     });
     
     // Initialize the map
     var map = new ol.Map({
       controls: ol.control.defaults.defaults().extend([mousePositionControl]),
       target: 'ae-map',
       layers: [
         new ol.layer.Tile({
           source: new ol.source.TileImage({
             attributions: 'Map tiles created by Sir Chris',
             tileGrid: new ol.tilegrid.TileGrid({
               extent: [0,0,4096,4096],
               origin: [0,4096],
               resolutions: [16,8,4,2,1],
               tileSize: [256, 256]
             }),
             tileUrlFunction: function(tileCoord) {
               return ('./tiles/{z}/{x}/{y}.png'
                 .replace('{z}', String(tileCoord[0]))
                 .replace('{x}', String(tileCoord[1]))
                 .replace('{y}', String(tileCoord[2])));
             },
           })
         }),
       ],
       view: new ol.View({
         center: [2048.000000, 2048.000000],
         resolution: 16.000000,
         extent: [0, 0, 4096, 4096],
         constrainOnlyCenter: false,
         showFullExtent: true
       })
     });
   </script>
   ```

5. **Copy the `/tiles/` folder** to your website in the same relative path as referenced in the code
   
6. **Copy any background images** from `/images/` that you need

7. **Adjust paths in the code** to match your website's structure:
   - Update the background image path in CSS: `background: #002131 url('YOUR_PATH/bg.png')`
   - Update the tile URL path: `'./YOUR_PATH/tiles/{z}/{x}/{y}.png'`

## Issues

Leaflet has some weird quirks that I'm having trouble finding workarounds for pixel coordinates not exact, Labels not showing up in different zoom levels where expected or showing up at wrong place entirely on initial and reloads. *I'm switching to OpenLayers.*

## Development

The map tiles are generated from the game map using QGIS Shell. The website itself is built with HTML, CSS, and JavaScript, using OpenLayers for the interactive map functionality.

## Planned Features

- Layer toggling for displaying different map information
- Points of interest markers for key locations
- Search functionality for locations
- Mobile-optimized controls
- Complete labeling system for all important locations
- Separation of code into dedicated files for better maintainability
- Interactive elements for more detailed location information

## Credits

Created by Sir Chris. Map tiles generated with QGIS Shell.
