document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar functionality
    initSidebar();
});

/**
 * Initialize sidebar functionality
 */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mapContainer = document.getElementById('map');
    
    // Toggle sidebar collapsed state
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        mapContainer.classList.toggle('sidebar-collapsed');
        
        // Trigger map resize to handle new container dimensions
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    });
    
    // Initialize the label toggle controls once map.js has loaded labels
    document.addEventListener('labels-loaded', function(e) {
        if (e.detail && e.detail.categories) {
            initLabelControls(e.detail.categories);
        }
    });
    
    // Set up icon clicks in collapsed mode
    document.getElementById('icon-labels').addEventListener('click', function() {
        if (sidebar.classList.contains('collapsed')) {
            // Expand the sidebar
            sidebar.classList.remove('collapsed');
            mapContainer.classList.remove('sidebar-collapsed');
            
            // Show the labels section (if there were multiple sections that could be shown)
            // This functionality can be expanded when needed
            
            // Trigger map resize
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        }
    });
    
    document.getElementById('icon-monsters').addEventListener('click', function() {
        if (sidebar.classList.contains('collapsed')) {
            // Expand the sidebar
            sidebar.classList.remove('collapsed');
            mapContainer.classList.remove('sidebar-collapsed');
            
            // Show the monsters section (if there were multiple sections that could be shown)
            // This functionality can be expanded when needed
            
            // Trigger map resize
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        }
    });
    
    // Set up master toggle for all labels
    document.getElementById('toggle-all-labels').addEventListener('change', function() {
        const isChecked = this.checked;
        const allToggles = document.querySelectorAll('#label-toggles input[type="checkbox"]');
        
        // Update all category toggles
        allToggles.forEach(toggle => {
            toggle.checked = isChecked;
            // Trigger the change event to update the map
            toggle.dispatchEvent(new Event('change'));
        });
    });
    
    // Set up master toggle for all monsters (for future implementation)
    document.getElementById('toggle-all-monsters').addEventListener('change', function() {
        // This will be implemented when monster layers are added
        console.log('Monster visibility toggled:', this.checked);
        
        // For future implementation:
        // const isChecked = this.checked;
        // const allToggles = document.querySelectorAll('#monster-toggles input[type="checkbox"]');
        // allToggles.forEach(toggle => {
        //     toggle.checked = isChecked;
        //     toggle.dispatchEvent(new Event('change'));
        // });
    });
    
    // Initialize the marker toggle controls
    document.addEventListener('markers-loaded', function(e) {
        if (e.detail && e.detail.categories) {
            initMarkerControls(e.detail.categories);
        }
    });
    
    // Set up master toggle for all markers
    document.getElementById('toggle-all-markers').addEventListener('change', function() {
        const isChecked = this.checked;
        const allToggles = document.querySelectorAll('#marker-toggles input[type="checkbox"]');
        
        // Update all category toggles
        allToggles.forEach(toggle => {
            toggle.checked = isChecked;
            // Trigger the change event to update the map
            toggle.dispatchEvent(new Event('change'));
        });
    });
}

/**
 * Initialize label control toggles based on available categories
 * @param {Array} categories - Array of label category names
 */
function initLabelControls(categories) {
    const container = document.getElementById('label-toggles');
    
    // Clear any existing toggles
    container.innerHTML = '';
    
    // Create toggle for each label category
    categories.forEach(category => {
        // Format category name for display (capitalize first letter)
        const displayName = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Create the control item
        const controlItem = document.createElement('div');
        controlItem.className = 'control-item';
        
        // Create the switch
        const label = document.createElement('label');
        label.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggle-${category}`;
        input.checked = true; // Default to showing all labels
        input.dataset.category = category;
        
        // Add change event listener
        input.addEventListener('change', function() {
            const categoryToToggle = this.dataset.category;
            const isVisible = this.checked;
            
            // Dispatch custom event that map.js will listen for
            document.dispatchEvent(new CustomEvent('toggle-label-category', {
                detail: {
                    category: categoryToToggle,
                    visible: isVisible
                }
            }));
        });
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        // Assemble the switch
        label.appendChild(input);
        label.appendChild(slider);
        
        // Create the label text
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', `toggle-${category}`);
        textLabel.textContent = displayName;
        
        // Assemble the control item
        controlItem.appendChild(label);
        controlItem.appendChild(textLabel);
        
        // Add to container
        container.appendChild(controlItem);
    });
    
    // Update the "all labels" toggle initial state
    updateAllLabelsToggleState();
}

/**
 * Update the state of the "all labels" toggle based on individual toggles
 */
function updateAllLabelsToggleState() {
    const allToggles = document.querySelectorAll('#label-toggles input[type="checkbox"]');
    const masterToggle = document.getElementById('toggle-all-labels');
    
    // Check if all individual toggles are checked
    let allChecked = true;
    allToggles.forEach(toggle => {
        if (!toggle.checked) {
            allChecked = false;
        }
    });
    
    // Update master toggle without triggering its change event
    masterToggle.checked = allChecked;
}

/**
 * Initialize marker control toggles based on available categories
 * @param {Array} categories - Array of marker category names
 */
function initMarkerControls(categories) {
    const container = document.getElementById('marker-toggles');
    
    // Clear any existing toggles
    container.innerHTML = '';
    
    // Create toggle for each marker category
    categories.forEach(category => {
        // Format category name for display (capitalize first letter)
        const displayName = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Create the control item
        const controlItem = document.createElement('div');
        controlItem.className = 'control-item';
        
        // Create the switch
        const label = document.createElement('label');
        label.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggle-marker-${category}`;
        input.checked = true; // Default to showing all markers
        input.dataset.category = category;
        
        // Add change event listener
        input.addEventListener('change', function() {
            const categoryToToggle = this.dataset.category;
            const isVisible = this.checked;
            
            // Dispatch custom event
            document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                detail: {
                    category: categoryToToggle,
                    visible: isVisible
                }
            }));
        });
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        // Assemble the switch
        label.appendChild(input);
        label.appendChild(slider);
        
        // Create the icon (Font Awesome)
        const icon = document.createElement('i');
        let iconClass = '';
        
        // Assign icon based on category
        switch(category) {
            case 'portals':
                iconClass = 'fa-door-open';
                break;
            case 'docks':
                iconClass = 'fa-anchor';
                break;
            case 'quests':
                iconClass = 'fa-scroll';
                break;
            case 'shops':
                iconClass = 'fa-store';
                break;
            case 'trainers':
                iconClass = 'fa-graduation-cap';
                break;
            case 'banks':
                iconClass = 'fa-vault';
                break;
            default:
                iconClass = 'fa-map-marker';
        }
        
        icon.className = `fas ${iconClass} marker-icon`;
        icon.style.marginRight = '5px';
        
        // Create the label text
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', `toggle-marker-${category}`);
        textLabel.appendChild(icon);
        textLabel.appendChild(document.createTextNode(' ' + displayName));
        
        // Assemble the control item
        controlItem.appendChild(label);
        controlItem.appendChild(textLabel);
        
        // Add to container
        container.appendChild(controlItem);
    });
    
    // Update the "all markers" toggle initial state
    updateAllMarkersToggleState();
}

/**
 * Update the state of the "all markers" toggle based on individual toggles
 */
function updateAllMarkersToggleState() {
    const allToggles = document.querySelectorAll('#marker-toggles input[type="checkbox"]');
    const masterToggle = document.getElementById('toggle-all-markers');
    
    if (!masterToggle) return;
    
    // Check if all individual toggles are checked
    let allChecked = true;
    allToggles.forEach(toggle => {
        if (!toggle.checked) {
            allChecked = false;
        }
    });
    
    // Update master toggle without triggering its change event
    masterToggle.checked = allChecked;
}

// Add this function to create toggle elements
function createMarkerToggles() {
    const toggleContainer = document.getElementById('marker-toggles');
    
    // Clear existing toggles if any
    toggleContainer.innerHTML = '';
    
    // Create a toggle for each marker category
    for (const category in mapMarkers) {
        // Skip empty categories
        if (mapMarkers[category].length === 0) continue;
        
        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'marker-toggle';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggle-${category}`;
        input.checked = true; // Default to checked
        input.dataset.category = category;
        input.addEventListener('change', toggleMarkerCategory);
        
        const label = document.createElement('label');
        label.htmlFor = `toggle-${category}`;
        // Capitalize first letter of category
        label.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        
        // Add icon if available
        const markerType = mapMarkers[category][0]?.type;
        if (markerType && markerStyles[markerType]) {
            const icon = document.createElement('i');
            icon.className = markerStyles[markerType].icon;
            icon.style.color = markerStyles[markerType].color;
            icon.style.marginRight = '5px';
            label.prepend(icon);
        }
        
        toggleDiv.appendChild(input);
        toggleDiv.appendChild(label);
        toggleContainer.appendChild(toggleDiv);
    }
}

// Add this function to handle toggle changes
function toggleMarkerCategory(event) {
    const category = event.target.dataset.category;
    const visible = event.target.checked;
    
    // Find all markers for this category
    const elements = document.querySelectorAll(`.marker-${category}`);
    
    // Update visibility
    elements.forEach(element => {
        element.style.display = visible ? 'block' : 'none';
    });
}

// Initialize the sidebar functionality
document.addEventListener('DOMContentLoaded', function() {
    initSidebar();
});

// Main sidebar initialization function
function initSidebar() {
    // Toggle sidebar expand/collapse
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const map = document.getElementById('map');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            map.classList.toggle('sidebar-collapsed');
        });
    }
    
    // Handle "Show All" toggle switches
    setupMasterToggles();
    
    // Create individual category toggles
    createLabelToggles();
    createMarkerToggles();
}

// Set up the master toggle switches ("Show All X")
function setupMasterToggles() {
    // Labels master toggle
    const allLabelsToggle = document.getElementById('toggle-all-labels');
    if (allLabelsToggle) {
        allLabelsToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            
            // Update all individual label toggles
            const labelToggles = document.querySelectorAll('#label-toggles input[type="checkbox"]');
            labelToggles.forEach(toggle => {
                toggle.checked = isChecked;
                toggle.dispatchEvent(new Event('change'));
            });
            
            // Also update visibility for all label layers
            const labelCategories = ['cities', 'islands', 'dungeons', 'caves', 'interests', 'waterBodies', 'mountains'];
            labelCategories.forEach(category => {
                document.dispatchEvent(new CustomEvent('toggle-label-category', {
                    detail: { category: category, visible: isChecked }
                }));
            });
        });
    }
    
    // Markers master toggle
    const allMarkersToggle = document.getElementById('toggle-all-markers');
    if (allMarkersToggle) {
        allMarkersToggle.addEventListener('change', function() {
            const isChecked = this.checked;
            
            // Update all individual marker toggles
            const markerToggles = document.querySelectorAll('#marker-toggles input[type="checkbox"]');
            markerToggles.forEach(toggle => {
                toggle.checked = isChecked;
                toggle.dispatchEvent(new Event('change'));
            });
            
            // Also update visibility for all marker categories
            Object.keys(mapMarkers).forEach(category => {
                document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                    detail: { category: category, visible: isChecked }
                }));
            });
        });
    }
}

// Create individual label category toggle switches
function createLabelToggles() {
    const container = document.getElementById('label-toggles');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create toggle for each label category
    const labelCategories = [
        { id: 'cities', name: 'Cities', icon: 'fa-city' },
        { id: 'islands', name: 'Islands', icon: 'fa-island-tropical' },
        { id: 'dungeons', name: 'Dungeons', icon: 'fa-dungeon' },
        { id: 'caves', name: 'Caves', icon: 'fa-mountain-city' },
        { id: 'interests', name: 'Places of Interest', icon: 'fa-location-dot' },
        { id: 'waterBodies', name: 'Bodies of Water', icon: 'fa-water' },
        { id: 'mountains', name: 'Mountains', icon: 'fa-mountain' }
    ];
    
    labelCategories.forEach(category => {
        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'control-item';
        
        const label = document.createElement('label');
        label.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggle-label-${category.id}`;
        input.checked = true; // Default to checked
        input.dataset.category = category.id;
        
        // Add change event listener
        input.addEventListener('change', function() {
            const isChecked = this.checked;
            const categoryId = this.dataset.category;
            
            // Dispatch event to toggle label visibility
            document.dispatchEvent(new CustomEvent('toggle-label-category', {
                detail: { category: categoryId, visible: isChecked }
            }));
        });
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        label.appendChild(input);
        label.appendChild(slider);
        
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', `toggle-label-${category.id}`);
        
        // Add icon if available
        if (category.icon) {
            const icon = document.createElement('i');
            icon.className = `fas ${category.icon}`;
            icon.style.marginRight = '5px';
            textLabel.appendChild(icon);
        }
        
        const text = document.createTextNode(category.name);
        textLabel.appendChild(text);
        
        toggleDiv.appendChild(label);
        toggleDiv.appendChild(textLabel);
        container.appendChild(toggleDiv);
    });
}

// Create individual marker category toggle switches
function createMarkerToggles() {
    const container = document.getElementById('marker-toggles');
    if (!container) return;
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create toggle for each marker category
    for (const category in mapMarkers) {
        // Skip empty categories
        if (mapMarkers[category].length === 0) continue;
        
        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'control-item';
        
        const label = document.createElement('label');
        label.className = 'switch';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `toggle-marker-${category}`;
        input.checked = true; // Default to checked
        input.dataset.category = category;
        
        // Add change event listener
        input.addEventListener('change', function() {
            const isChecked = this.checked;
            const categoryId = this.dataset.category;
            
            // Dispatch event to toggle marker visibility
            document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                detail: { category: categoryId, visible: isChecked }
            }));
        });
        
        const slider = document.createElement('span');
        slider.className = 'slider';
        
        label.appendChild(input);
        label.appendChild(slider);
        
        const textLabel = document.createElement('label');
        textLabel.setAttribute('for', `toggle-marker-${category}`);
        
        // Get the marker type to determine icon
        const markerType = mapMarkers[category][0]?.type;
        
        // Add icon if available
        if (markerType && markerStyles[markerType]) {
            const icon = document.createElement('i');
            icon.className = markerStyles[markerType].icon;
            icon.style.color = markerStyles[markerType].color;
            icon.style.marginRight = '5px';
            textLabel.appendChild(icon);
        }
        
        // Capitalize first letter of category
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        const text = document.createTextNode(categoryName);
        textLabel.appendChild(text);
        
        toggleDiv.appendChild(label);
        toggleDiv.appendChild(textLabel);
        container.appendChild(toggleDiv);
    }
}