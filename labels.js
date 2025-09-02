/* filepath: d:\GitHub\ashen-empires-map\labels.js */
// This file contains the map labels for Ashen Empires

// Define all map labels here
function addMapLabels(map) {
  // Function to add a label to the map
  function addLabel(x, y, text, anchor = [15, 0]) {
    const point = L.point(x, y);
    const latlng = map.unproject(point, map.getMaxZoom());
    
    return L.marker(latlng, {
      icon: L.divIcon({
        className: 'map-label',
        html: text,
        iconSize: null, // Let the size be determined by the content
        iconAnchor: anchor // Position the label properly
      })
    }).addTo(map);
  }
  
  // Add all your labels here
  addLabel(800, 700, 'LSP');
  
  // Examples of more labels (commented out for now)
  // addLabel(1500, 1200, 'Frostbane');
  // addLabel(2300, 800, 'Barloque');
}