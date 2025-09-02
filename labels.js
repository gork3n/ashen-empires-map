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
    let styleString = 'color: white; font-family: \'Segoe UI\', Arial, sans-serif; white-space: nowrap; text-align: center;';
    
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
    
    const marker = L.marker(latlng, {
      icon: L.divIcon({
        className: `map-label label-${category}`,
        html: `<div style="${styleString}">${text}</div>`,
        iconSize: [100, fontSize], // Set a fixed width but height based on font size
        iconAnchor: [50, 0], // Center-bottom anchor point
      })
    }).addTo(map);
    
    // Add the marker to our category-specific array
    if (labelsByCategory[category]) {
      labelsByCategory[category].push(marker);
    }
    
    return marker;
  }
  
  // Add palace labels
  addLabel(768, 544, "Lotor's Summer Palace", 'palaces');
  
  // Add city/town labels
  addLabel(2413, 2311, "New Royale", 'cities');
  addLabel(1345, 2393, "Josody", 'cities');
  addLabel(3132, 3842, "Krog", 'cities');
  
  // Add island labels
  addLabel(3867, 1954, "PvP Island", 'islands');
  addLabel(673, 1910, "Scorch Island", 'islands');
  
  // Add mine/cave labels
  addLabel(1427, 1374, "Dalvon Mine", 'mines');
  
  // Set up the toggle buttons functionality
  setupLabelToggles(map);
}

// Function to toggle visibility for a specific category
function toggleCategoryLabels(map, category) {
  const button = document.getElementById(`toggle${category.charAt(0).toUpperCase() + category.slice(1)}`);
  
  if (labelVisibility[category]) {
    // Hide category labels
    labelsByCategory[category].forEach(label => {
      map.removeLayer(label);
    });
    button.textContent = `Show ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    labelVisibility[category] = false;
  } else {
    // Show category labels
    labelsByCategory[category].forEach(label => {
      map.addLayer(label);
    });
    button.textContent = `Hide ${category.charAt(0).toUpperCase() + category.slice(1)}`;
    labelVisibility[category] = true;
  }
  
  // Update the "all" button text
  updateAllLabelsButtonText();
}

// Function to toggle all labels
function toggleAllLabels(map) {
  const button = document.getElementById('toggleAllLabels');
  const allVisible = Object.values(labelVisibility).some(v => v);
  
  // Toggle all categories
  Object.keys(labelsByCategory).forEach(category => {
    if (allVisible) {
      // Hide all
      labelsByCategory[category].forEach(label => {
        map.removeLayer(label);
      });
      document.getElementById(`toggle${category.charAt(0).toUpperCase() + category.slice(1)}`).textContent = 
        `Show ${category.charAt(0).toUpperCase() + category.slice(1)}`;
      labelVisibility[category] = false;
    } else {
      // Show all
      labelsByCategory[category].forEach(label => {
        map.addLayer(label);
      });
      document.getElementById(`toggle${category.charAt(0).toUpperCase() + category.slice(1)}`).textContent = 
        `Hide ${category.charAt(0).toUpperCase() + category.slice(1)}`;
      labelVisibility[category] = true;
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