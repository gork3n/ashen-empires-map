/* filepath: d:\GitHub\ashen-empires-map\main.js */
document.addEventListener('DOMContentLoaded', () => {
  // Map configuration
  const mapExtent = [0.0, -16384.0, 16384.0, 0.0];
  const mapMinZoom = 0;
  const mapMaxZoom = 5;
  const mapMaxResolution = 1.00000000;
  const mapMinResolution = Math.pow(2, mapMaxZoom) * mapMaxResolution;
  const tileExtent = [0.0, -16384.0, 16384.0, 0.0];
  
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
  
  // Initialize map with max zoom level
  const map = new L.Map('map', {
    maxZoom: mapMaxZoom,
    minZoom: mapMinZoom,
    zoom: mapMaxZoom, // Set initial zoom to max zoom
    center: bounds.getCenter(), // Center the map on the bounds
    crs: crs,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0 // Makes the bounds completely rigid
  });
  
  // Add base map tile layer
  const baseLayer = L.tileLayer('tiles/{z}/{x}/{y}.png', {
    minZoom: mapMinZoom,
    maxZoom: mapMaxZoom,
    attribution: 'Created by Sir Chris. Tiled with QGIS Shell',
    noWrap: true,
    tms: false,
    bounds: bounds
  }).addTo(map);
  
  // Custom coordinate display
  const coordsDisplay = document.getElementById('coordinates');
  
  // Function to convert Leaflet coordinates to pixel coordinates (0,0 at top-left)
  function convertToPixelCoordinates(latlng) {
    // Convert the latlng to pixel coordinates using the map's project method
    const point = map.project(latlng, map.getMaxZoom());
    
    // Adjust coordinates to match our 0,0 at top-left system
    const pixelX = Math.round(point.x / 4);
    const pixelY = Math.round(Math.abs(point.y) / 4); // Use absolute value, make Y positive, and scale down
    
    return { x: pixelX, y: pixelY };
  }
  
  // Update coordinates on mouse move
  map.on('mousemove', function(e) {
    const coords = convertToPixelCoordinates(e.latlng);
    coordsDisplay.textContent = `X: ${coords.x}, Y: ${coords.y}`;
  });
  
  // Hide coordinates when mouse leaves the map
  map.on('mouseout', function() {
    coordsDisplay.textContent = 'X: 0, Y: 0';
  });
});