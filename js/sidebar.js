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
    const container = document.getElementById('container');
    
    // Toggle sidebar collapsed state
    if (sidebarToggle && sidebar && container) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            container.classList.toggle('sidebar-collapsed');
            
            // Trigger map resize to handle new container dimensions
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        });
    }
    
    // Set up icon clicks in collapsed mode
    const iconLabels = document.getElementById('icon-labels');
    const iconMonsters = document.getElementById('icon-monsters');
    const iconMarkers = document.getElementById('icon-markers');
    
    if (iconLabels) {
        iconLabels.addEventListener('click', function() {
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                container.classList.remove('sidebar-collapsed');
                
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        });
    }
    
    if (iconMonsters) {
        iconMonsters.addEventListener('click', function() {
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                container.classList.remove('sidebar-collapsed');
                
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        });
    }
    
    if (iconMarkers) {
        iconMarkers.addEventListener('click', function() {
            if (sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
                container.classList.remove('sidebar-collapsed');
                
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 300);
            }
        });
    }
    
    // Create individual toggle buttons for each section
    createLabelToggleButtons();
    createMarkerToggleButtons();
    
    // Set up master toggle buttons
    setupMasterToggleButtons();
}

/**
 * Set up "Show All" toggle buttons
 */
function setupMasterToggleButtons() {
    // Show All Labels button
    const showAllLabelsBtn = document.getElementById('show-all-labels');
    if (showAllLabelsBtn) {
        showAllLabelsBtn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const newState = !isActive;
            
            // Toggle the button state
            if (isActive) {
                this.classList.remove('active');
                this.classList.add('inactive');
            } else {
                this.classList.remove('inactive');
                this.classList.add('active');
            }
            
            // Toggle all label buttons to match this state
            const labelButtons = document.querySelectorAll('#label-toggles .toggle-btn');
            labelButtons.forEach(button => {
                const buttonIsActive = button.classList.contains('active');
                
                // Only change buttons that don't match the new state
                if (buttonIsActive !== newState) {
                    button.click(); // This will trigger the button's click handler
                }
            });
        });
    }
    
    // Show All Markers button
    const showAllMarkersBtn = document.getElementById('show-all-markers');
    if (showAllMarkersBtn) {
        showAllMarkersBtn.addEventListener('click', function() {
            const isActive = this.classList.contains('active');
            const newState = !isActive;
            
            // Toggle the button state
            if (isActive) {
                this.classList.remove('active');
                this.classList.add('inactive');
            } else {
                this.classList.remove('inactive');
                this.classList.add('active');
            }
            
            // Toggle all marker buttons to match this state
            const markerButtons = document.querySelectorAll('#marker-toggles .toggle-btn');
            markerButtons.forEach(button => {
                const buttonIsActive = button.classList.contains('active');
                
                // Only change buttons that don't match the new state
                if (buttonIsActive !== newState) {
                    button.click(); // This will trigger the button's click handler
                }
            });
        });
    }
}

/**
 * Create label toggle buttons
 */
function createLabelToggleButtons() {
    const container = document.getElementById('label-toggles');
    if (!container) return;
    
    // Clear any existing toggles
    container.innerHTML = '';
    
    // Create toggle button for each label category
    const labelCategories = [
        { id: 'cities', name: 'Cities', icon: 'location_city' },
        { id: 'islands', name: 'Islands', icon: 'park' },
        { id: 'dungeons', name: 'Dungeons', icon: 'fort' },
        { id: 'caves', name: 'Caves', icon: 'landscape' },
        { id: 'interests', name: 'Places of Interest', icon: 'pin_drop' },
        { id: 'waterBodies', name: 'Bodies of Water', icon: 'water' },
        { id: 'mountains', name: 'Mountains', icon: 'terrain' }
    ];
    
    labelCategories.forEach(category => {
        // Create button element
        const button = document.createElement('button');
        button.className = 'toggle-btn active';
        button.dataset.category = category.id;
        
        // Add icon
        const iconSpan = document.createElement('span');
        iconSpan.className = 'material-symbols-outlined';
        iconSpan.textContent = category.icon;
        button.appendChild(iconSpan);
        
        // Add text
        const textSpan = document.createElement('span');
        textSpan.textContent = category.name;
        button.appendChild(textSpan);
        
        // Add click event listener
        button.addEventListener('click', function() {
            const isActive = button.classList.contains('active');
            
            // Toggle button state
            if (isActive) {
                button.classList.remove('active');
                button.classList.add('inactive');
            } else {
                button.classList.remove('inactive');
                button.classList.add('active');
            }
            
            // Dispatch event to toggle label visibility
            document.dispatchEvent(new CustomEvent('toggle-label-category', {
                detail: { 
                    category: category.id, 
                    visible: !isActive  // Toggle visibility (true->false or false->true)
                }
            }));
            
            // Update "Show All" button state
            updateShowAllLabelsState();
        });
        
        // Add to container
        container.appendChild(button);
    });
}

/**
 * Create marker toggle buttons
 */
function createMarkerToggleButtons() {
    const container = document.getElementById('marker-toggles');
    if (!container || typeof mapMarkers === 'undefined') return;
    
    // Clear any existing toggles
    container.innerHTML = '';
    
    // Create toggle button for each marker category
    for (const category in mapMarkers) {
        // Skip empty categories
        // if (mapMarkers[category].length === 0) continue; // We want to create toggles even for empty categories
        
        // Get marker style for this category
        // Note: This relies on at least one marker being in the category to determine the type.
        const markerType = mapMarkers[category][0]?.type;
        const style = markerStyles[markerType];
        
        // Create button
        const button = document.createElement('button');
        button.className = 'toggle-btn active';
        button.dataset.category = category;
        
        const animationClass = style && style.animation === 'beat' ? 'g-icon-beat' : '';

        // Add icon
        const iconSpan = document.createElement('span');
        if (style && style.icon) {
            iconSpan.className = `material-symbols-outlined ${animationClass}`;
            iconSpan.textContent = style.icon;
            iconSpan.style.color = style.color;
        } else {
            iconSpan.className = 'material-symbols-outlined';
            iconSpan.textContent = 'place';
        }
        button.appendChild(iconSpan);
        
        // Add text
        const textSpan = document.createElement('span');
        textSpan.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        button.appendChild(textSpan);
        
        // If the category is empty, disable the button and mark it inactive
        if (mapMarkers[category].length === 0) {
            button.disabled = true;
            button.classList.replace('active', 'inactive');
        }
        // Add click event listener
        button.addEventListener('click', function() {
            const isActive = button.classList.contains('active');
            
            // Toggle button state
            if (isActive) {
                button.classList.remove('active');
                button.classList.add('inactive');
            } else {
                button.classList.remove('inactive');
                button.classList.add('active');
            }
            
            // Dispatch event to toggle marker visibility
            document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                detail: { 
                    category: category, 
                    visible: !isActive  // Toggle visibility (true->false or false->true)
                }
            }));
            
            // Update "Show All" button state
            updateShowAllMarkersState();
        });
        
        // Add to container
        container.appendChild(button);
    }
}

/**
 * Update "Show All Labels" button state based on individual button states
 */
function updateShowAllLabelsState() {
    const allButtons = document.querySelectorAll('#label-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-labels');
    if (!showAllButton) return;
    
    let allActive = true;
    let allInactive = true;
    
    allButtons.forEach(button => {
        if (button.classList.contains('inactive')) {
            allActive = false;
        } else {
            allInactive = false;
        }
    });
    
    // Update "Show All" button state
    if (allActive) {
        showAllButton.classList.remove('inactive');
        showAllButton.classList.add('active');
    } else if (allInactive) {
        showAllButton.classList.remove('active');
        showAllButton.classList.add('inactive');
    }
}

/**
 * Update "Show All Markers" button state based on individual button states
 */
function updateShowAllMarkersState() {
    const allButtons = document.querySelectorAll('#marker-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-markers');
    if (!showAllButton) return;
    
    let allActive = true;
    let allInactive = true;
    
    allButtons.forEach(button => {
        if (button.classList.contains('inactive')) {
            allActive = false;
        } else {
            allInactive = false;
        }
    });
    
    // Update "Show All" button state
    if (allActive) {
        showAllButton.classList.remove('inactive');
        showAllButton.classList.add('active');
    } else if (allInactive) {
        showAllButton.classList.remove('active');
        showAllButton.classList.add('inactive');
    }
}