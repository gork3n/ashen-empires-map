# Ashen Empires Map

A Leaflet-based interactive map for Ashen Empires using tiled images.

## Implementation Guide

### Basic Integration

To add this map to your own website, follow these steps:

1. **Copy required files**:
   - The `/tiles` directory containing the map tiles
   - The `/images/bg.png` background image

2. **Add dependencies to your HTML**:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="anonymous">
   <link rel="stylesheet" href="https://unpkg.com/leaflet-mouse-position/src/L.Control.MousePosition.css">
   <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="anonymous"></script>
   <script src="https://unpkg.com/leaflet-mouse-position/src/L.Control.MousePosition.js"></script>
   ```

3. **Add HTML container**:
   ```html
   <div id="map" style="width: 800px; height: 600px;"></div>
   <input id="slider" type="range" min="0" max="1" step="0.1" value="1">
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
       maxBoundsViscosity: 1.0
     });
     
     // Add tile layer
     const layer = L.tileLayer('tiles/{z}/{x}/{y}.png', {
       minZoom: mapMinZoom,
       maxZoom: mapMaxZoom,
       attribution: 'Created by Sir Chris. Tiled by QGIS Shell',
       noWrap: true,
       tms: false,
       bounds: bounds
     }).addTo(map);
     
     // Fit map to bounds
     map.fitBounds(bounds);
     
     // Add mouse position control
     L.control.mousePosition().addTo(map);
     
     // Opacity slider
     const slider = document.getElementById('slider');
     slider.addEventListener('input', function() {
       layer.setOpacity(this.value);
     });
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

#### Slider Position

Position the opacity slider as needed:

```css
#slider {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 999;
  background: rgba(255, 255, 255, 0.7);
  padding: 5px;
  border-radius: 4px;
}
```

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

## Browser Compatibility

Tested and working on:
- Chrome
- Firefox
- Edge
- Safari

## Credits

- Original map created by Sir Chris
- Tiled using QGIS Shell
