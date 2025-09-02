/* filepath: d:\GitHub\ashen-empires-map\labels.js */
// This file contains the map labels for Ashen Empires

// Object to store labels by category
let labelsByCategory = {
  cities: [],
  islands: [],
  mines: [],
  palaces: []
};

// Track visibility state
let labelVisibility = {
  cities: true,
  islands: true,
  mines: true,
  palaces: true
};

// Define all map labels here
function addMapLabels(map) {
  // Function to add a label to the map with inline styles
  function addLabel(x, y, text, category) {
    const point = L.point(x, y); // Use the coordinates directly
    const latlng = map.unproject(point, map.getMaxZoom());
    
    // Define styles based on category
    let styleString = 'color: white; font-family: \'Segoe UI\', Arial, sans-serif; white-space: nowrap; text-align: center; display: inline-block; width: max-content; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;';
    
    // Set font size based on category
    let fontSize;
    switch(category) {
      case 'cities':
        fontSize = 16;
        styleString += 'font-size: 16px; font-weight: bold;';
        break;
      case 'islands':
        fontSize = 24;
        styleString += 'font-size: 24px; font-style: italic;';
        break;
      case 'mines':
        fontSize = 13;
        styleString += 'font-size: 13px;';
        break;
      case 'palaces':
        fontSize = 15;
        styleString += 'font-size: 15px; font-weight: bold;';
        break;
      default:
        fontSize = 14;
        styleString += 'font-size: 14px;';
    }
    
    // Calculate estimated text width for better centering (more accurate now)
    const estimatedWidth = text.length * (fontSize * 0.6); 
    
    const marker = L.marker(latlng, {
      icon: L.divIcon({
        className: `map-label label-${category}`,
        html: `<div style="${styleString}">${text}</div>`,
        iconSize: [estimatedWidth, fontSize],
        iconAnchor: [estimatedWidth/2, fontSize], // Center at bottom of text
        popupAnchor: [0, -fontSize] // Popup appears above the text
      })
    }).addTo(map);
    
    // Add the marker to our category-specific array
    if (labelsByCategory[category]) {
      labelsByCategory[category].push(marker);
    }
    
    return marker;
  }
  
  // Add palace labels
  addLabel(767, 568, "Lotor's Summer Palace", 'palaces');
  
  // Add city/town labels
  addLabel(2413, 2311, "New Royale", 'cities');
  addLabel(1345, 2393, "Josody", 'cities');
  addLabel(3116, 3715, "Krog", 'cities');
  
  // Add island labels
  addLabel(3867, 1954, "PvP Island", 'islands');
  addLabel(704, 1923, "Scorch Island", 'islands');
  
  // Add mine/cave labels
  addLabel(1427, 1374, "Dalvon Mine", 'mines');
  
  // Initial check to show/hide labels based on current zoom
  updateLabelVisibilityByZoom(map.getZoom());
  
  // Set up zoom event handler to show/hide labels based on zoom level
  map.on('zoomend', function() {
    updateLabelVisibilityByZoom(map.getZoom());
  });
  
  // Set up the toggle buttons functionality
  setupLabelToggles(map);
}

// Function to show/hide labels based on zoom level
function updateLabelVisibilityByZoom(zoomLevel) {
  // Get all labels from all categories
  const allLabels = [].concat(
    labelsByCategory.cities,
    labelsByCategory.islands,
    labelsByCategory.mines,
    labelsByCategory.palaces
  );
  
  // Hide labels at zoom levels 0 and 1, show at 2+
  if (zoomLevel < 3) {
    // Hide all labels at low zoom levels
    allLabels.forEach(label => {
      const icon = label.getElement();
      if (icon) {
        icon.style.display = 'none';
      }
    });
  } else {
    // Show labels if their category is currently visible
    Object.keys(labelsByCategory).forEach(category => {
      if (labelVisibility[category]) {
        labelsByCategory[category].forEach(label => {
          const icon = label.getElement();
          if (icon) {
            icon.style.display = '';
          }
        });
      }
    });
  }
}

// Function to toggle visibility for a specific category
function toggleCategoryLabels(map, category) {
  const button = document.getElementById(`toggle${category.charAt(0).toUpperCase() + category.slice(1)}`);
  
  labelVisibility[category] = !labelVisibility[category];
  
  // Only update visibility if we're at zoom level 2+
  if (map.getZoom() >= 2) {
    labelsByCategory[category].forEach(label => {
      const icon = label.getElement();
      if (icon) {
        icon.style.display = labelVisibility[category] ? '' : 'none';
      }
    });
  }
  
  button.textContent = labelVisibility[category] ? 
    `Hide ${category.charAt(0).toUpperCase() + category.slice(1)}` : 
    `Show ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  
  // Update the "all" button text
  updateAllLabelsButtonText();
}

// Function to toggle all labels
function toggleAllLabels(map) {
  const button = document.getElementById('toggleAllLabels');
  const allVisible = Object.values(labelVisibility).some(v => v);
  
  // Toggle all categories
  Object.keys(labelsByCategory).forEach(category => {
    labelVisibility[category] = !allVisible;
    
    // Update button text
    document.getElementById(`toggle${category.charAt(0).toUpperCase() + category.slice(1)}`).textContent = 
      labelVisibility[category] ? 
        `Hide ${category.charAt(0).toUpperCase() + category.slice(1)}` : 
        `Show ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    
    // Only update visibility if we're at zoom level 2+
    if (map.getZoom() >= 2) {
      labelsByCategory[category].forEach(label => {
        const icon = label.getElement();
        if (icon) {
          icon.style.display = labelVisibility[category] ? '' : 'none';
        }
      });
    }
  });
  
  button.textContent = allVisible ? "Show All Labels" : "Hide All Labels";
}

// Update the All Labels button text based on current visibility state
function updateAllLabelsButtonText() {
  const button = document.getElementById('toggleAllLabels');
  const allVisible = Object.values(labelVisibility).some(v => v);
  button.textContent = allVisible ? "Hide All Labels" : "Show All Labels";
}

// Setup the toggle buttons event listeners
function setupLabelToggles(map) {
  // Category-specific toggles
  document.getElementById('toggleCities').addEventListener('click', () => toggleCategoryLabels(map, 'cities'));
  document.getElementById('toggleIslands').addEventListener('click', () => toggleCategoryLabels(map, 'islands'));
  document.getElementById('toggleMines').addEventListener('click', () => toggleCategoryLabels(map, 'mines'));
  document.getElementById('togglePalaces').addEventListener('click', () => toggleCategoryLabels(map, 'palaces'));
  
  // Toggle all labels
  document.getElementById('toggleAllLabels').addEventListener('click', () => toggleAllLabels(map));
}