# Ashen Empires Interactive Map

An interactive map for Ashen Empires with pixel-perfect coordinates and custom styling.

## Features

- **Full Map Exploration**: Navigate the entire Ashen Empires world with smooth panning and zooming
- **Precise Coordinates**: Real-time coordinate display showing exact X,Y positions
- **Custom Cursor**: Green pointer for better visibility against the map background
- **Mobile-Friendly**: Responsive design that works on desktop and mobile devices

## Technical Implementation

This interactive map uses Leaflet.js with custom configurations:

- **Custom CRS**: Simple coordinate reference system with transformation for game coordinates
- **Pixel-Perfect Mapping**: Each point on the map corresponds to exact game coordinates
- **Zoom Levels**: Multiple zoom levels (0-4) for both overview and detailed exploration
- **Bounded Navigation**: Prevents users from scrolling outside the map boundaries

## Development

The project is structured as follows:

- `index.html` - Main HTML file
- `styles.css` - All styling for the map and UI elements
- `main.js` - Core map functionality and coordinate handling
- `tiles/` - Directory containing all map tile images

### Map Coordinates

The map uses a coordinate system where:
- (0,0) is at the top-left corner
- (4096,4096) is at the bottom-right corner

This matches the coordinate system used in-game.

## Planned Features

- Layer toggling for displaying different map information
- Points of interest markers
- Search functionality for locations
- Mobile-optimized controls

## Credits

Created by Sir Chris. Map tiles generated with QGIS Shell.

## Implementation Guide

### Basic Integration

To add this map to your own website, follow these steps:

1. **Copy required files**:
   - The `/tiles` directory containing the map tiles
   - The `/images/bg.png` background image

2. **Add dependencies to your HTML**:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="anonymous">
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="anonymous"></script>
   ```

3. **Add HTML container**:
   ```html
   <div id="map" style="width: 800px; height: 600px;"></div>
   ```

4. **Add JavaScript initialization code**:
   ```javascript
   document.addEventListener('DOMContentLoaded', () => {
     // Map configuration
     const mapExtent = [0.00000000, -4096.00000000, 4096.00000000, 0.00000000];
     const mapMinZoom = 0;
     const mapMaxZoom = 4;
     const mapMaxResolution = 1.00000000;
     const mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
     const tileExtent = [0.00000000, -4096.00000000, 4096.00000000, 0.00000000];
     
     // Create custom CRS
     const crs = L.CRS.Simple;
     crs.transformation = new L.Transformation(1, -tileExtent[0], -1, tileExtent[3]);
     crs.scale = function(zoom) {
       return Math.pow(2, zoom) / mapMinResolution;
     };
     crs.zoom = function(scale) {
       return Math.log(scale * mapMinResolution) / Math.LN2;
     };
     
     // Calculate map bounds
     const southWest = crs.unproject(L.point(mapExtent[0], mapExtent[1]));
     const northEast = crs.unproject(L.point(mapExtent[2], mapExtent[3]));
     const bounds = L.latLngBounds(southWest, northEast);
     
     // Initialize map
     const map = new L.Map('map', {
       maxZoom: mapMaxZoom,
       minZoom: mapMinZoom,
       crs: crs,
       maxBounds: bounds,
       maxBoundsViscosity: 1.0 // Makes the bounds completely rigid
     });
     
     // Add tile layer
     const layer = L.tileLayer('tiles/{z}/{x}/{y}.png', {
       minZoom: mapMinZoom,
       maxZoom: mapMaxZoom,
       attribution: 'Created by Sir Chris. Tiled with QGIS Shell',
       noWrap: true,
       tms: false,
       bounds: bounds
     }).addTo(map);
     
     // Fit map to bounds
     map.fitBounds(bounds);
   });
   ```

### Styling Considerations

#### Background Color Issues

The map uses a dark blue background color (`#002131`), but due to inconsistent browser rendering, this color may not display correctly across all browsers. To ensure consistent background appearance:

1. **Use a background image**:
   ```css
   #map {
     background: #002131; 
     background-image: url('images/bg.png');
   }
   ```
   
   This provides a fallback mechanism where the image will display consistently even when the color doesn't render properly.

2. **Ensure the container fills its parent**:
   ```css
   #map { 
     width: 100%; 
     height: 100%; 
   }
   ```

### Customization Options

#### Map Container Size

Adjust the width and height of the `#map` element to fit your page layout:

```css
#map {
  width: 800px;  /* or any specific width */
  height: 600px; /* or any specific height */
}
```

#### Custom Cursor

To change the cursor to a custom green pointer when hovering over the map:

```css
#map {
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="%2300FF00" d="M3,2 L12,9 L8.5,9 L10,14 L7,14 L5.5,9 L3,9 z"/></svg>') 3 2, auto;
}
```

You can replace the SVG with your own cursor design or use a cursor image file.

## Advanced Configuration

### Changing Tile Path

If your tiles are in a different directory, update the tile path:

```javascript
const layer = L.tileLayer('your/custom/path/to/tiles/{z}/{x}/{y}.png', {
  // options
}).addTo(map);
```

### Adjusting Zoom Levels

Modify `mapMinZoom` and `mapMaxZoom` to change the available zoom levels.

### Map Bounds Restriction

The map includes bounds restriction to prevent users from panning outside the map area:

```javascript
const map = new L.Map('map', {
  // other options
  maxBounds: bounds,
  maxBoundsViscosity: 1.0 // Makes the bounds completely rigid
});
```

The `maxBoundsViscosity` value of 1.0 makes the bounds completely rigid, preventing the user from dragging the map outside its boundaries.

## Browser Compatibility

Tested and working on:
- Chrome
- Firefox
- Edge
- Safari

## Credits

- Original map created by Sir Chris
- Tiled using QGIS Shell
