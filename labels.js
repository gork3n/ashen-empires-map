/* filepath: d:\GitHub\ashen-empires-map\labels.js */
// This file contains the map labels for Ashen Empires

// Global variable to store all labels
let mapLabels = [];
let labelsVisible = true;

// Define all map labels here
function addMapLabels(map) {
  // Function to add a label to the map
  function addLabel(x, y, text, anchor = [15, 0]) {
    const point = L.point(x, y);
    const latlng = map.unproject(point, map.getMaxZoom());
    
    const marker = L.marker(latlng, {
      icon: L.divIcon({
        className: 'map-label',
        html: text,
        iconSize: null, // Let the size be determined by the content
        iconAnchor: anchor // Position the label properly
      })
    }).addTo(map);
    
    // Add the marker to our labels array
    mapLabels.push(marker);
    
    return marker;
  }
  
  // Add all your labels here
  addLabel(800, 700, 'LSP');
  
  // Examples of more labels (uncomment to add)
  // addLabel(1500, 1200, 'Frostbane');
  // addLabel(2300, 800, 'Barloque');
  
  // Set up the toggle button functionality
  setupLabelToggle(map);
}

// Function to toggle labels visibility
function toggleLabels(map) {
  const button = document.getElementById('toggleLabels');
  
  if (labelsVisible) {
    // Hide all labels
    mapLabels.forEach(label => {
      map.removeLayer(label);
    });
    button.textContent = 'Show Labels';
    labelsVisible = false;
  } else {
    // Show all labels
    mapLabels.forEach(label => {
      map.addLayer(label);
    });
    button.textContent = 'Hide Labels';
    labelsVisible = true;
  }
}

// Setup the toggle button event listener
function setupLabelToggle(map) {
  const button = document.getElementById('toggleLabels');
  button.addEventListener('click', () => toggleLabels(map));
}