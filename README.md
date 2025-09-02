# Ashen Empires Interactive Map

An interactive map for Ashen Empires with pixel-perfect coordinates and multiple viewing options.

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming
- **Precise Coordinates**: Real-time coordinate display showing exact X,Y positions (0,0 at top-left)
- **Multiple Map Implementations**: 
  - Leaflet-based viewer with custom styling and controls
  - OpenLayers-based viewer with additional features
- **Custom Background**: Themed background to match the game's aesthetic
- **Mobile-Friendly**: Responsive design that works on desktop and mobile devices

## Technical Implementation

This project offers two different map implementations:

### Leaflet Implementation (`/leaflet/`)

- Custom CRS (Coordinate Reference System) for game coordinates
- Pixel-perfect mapping where each point corresponds to exact game coordinates
- Bounded navigation that prevents scrolling outside map boundaries
- Custom cursor for better visibility

### OpenLayers Implementation (`openlayers.html`)

- Full-featured map with OpenLayers library
- Customized coordinate display showing game coordinates
- Consistent styling with the game's theme
- Separate backgrounds for page and map container

## Map Coordinates

Both implementations use a coordinate system where:
- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

This matches the coordinate system used in-game.

## Project Structure

- `openlayers.html` - Main OpenLayers implementation
- `leaflet.html` - Main Leaflet page
- `/leaflet/` - Directory containing the Leaflet implementation
  - `styles.css` - Styling for Leaflet map
  - `main.js` - Core Leaflet functionality
  - `labels.js` - Functionality for labeling (NOT IN USE)
- `/tiles/` - Directory containing all map tile images
- `/images/` - Directory containing background images and assets

## Development

The map tiles are generated from the game map using QGIS Shell. The website itself is built with HTML, CSS, and JavaScript, using either Leaflet.js or OpenLayers for the interactive map functionality.

## Planned Features

- Layer toggling for displaying different map information
- Points of interest markers
- Search functionality for locations
- Mobile-optimized controls

## Credits

Created by Sir Chris. Map tiles generated with QGIS Shell.
