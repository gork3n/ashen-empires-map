document.addEventListener('DOMContentLoaded', function() {
    // Wait for the map and icons to be ready before initializing the sidebar.
    // This ensures that tinted marker icons are available.
    document.addEventListener('map-ready', function() {
        initSidebar();
    });
});

/**
 * Initialize sidebar functionality
 */
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mobileFiltersBtn = document.getElementById('mobile-filters-btn');

    // The floating filter button toggles the menu
    if (mobileFiltersBtn) {
        mobileFiltersBtn.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    }

    // The header toggle button always closes the menu
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.remove('open');
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
        { id: 'landmarks', name: 'Landmarks', icon: 'tour' },
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
    
    container.innerHTML = '';
    
    const markerCategories = [
        { id: 'portals', name: 'Portals', type: 'portal' },
        { id: 'docks', name: 'Docks', type: 'dock' },
        { id: 'quests', name: 'Quests', type: 'quest' },
        { id: 'shops', name: 'Shops', type: 'shop_generic' },
        { id: 'trainers', name: 'Trainers', type: 'trainer' },
        { id: 'spawn_good', name: 'Good Spawns', type: 'spawn_good' },
        { id: 'spawn_evil', name: 'Evil Spawns', type: 'spawn_evil' },
        { id: 'banks', name: 'Banks', type: 'bank' },
        { id: 'crafting', name: 'Crafting', type: 'obelisk' },
        { id: 'undergrounds', name: 'Undergrounds', type: 'underground_cave' },
        { id: 'games_of_chance', name: 'Games of Chance', type: 'game_of_chance' },
        { id: 'information', name: 'Information', type: 'information' }
    ];

    markerCategories.forEach(category => {
        const style = markerStyles[category.type];
        
        // Create button
        const button = document.createElement('button');
        button.className = 'toggle-btn active';
        button.dataset.category = category.id;
        
        const animationClass = style && style.animation === 'beat' ? 'g-icon-beat' : '';

        // Add icon (now an <img> for SVG)
        const iconImg = document.createElement('img');
        
        // Create the composite marker style to get the final canvas image, ensuring
        // the sidebar icon perfectly matches the map marker.
        const markerStyle = createMarkerStyle(category.type);
        const markerCanvas = markerStyle.getImage().getImage(); // ol.style.Style -> ol.style.Icon -> HTMLCanvasElement
        iconImg.src = markerCanvas.toDataURL();
        iconImg.alt = category.name;
        iconImg.className = `toggle-btn-icon-img ${animationClass}`;
        button.appendChild(iconImg);
        
        // Add text
        const textSpan = document.createElement('span');
        textSpan.textContent = category.name;
        button.appendChild(textSpan);
        
        // If the category is empty, disable the button and mark it inactive
        if (!mapMarkers[category.id] || mapMarkers[category.id].length === 0) {
            button.disabled = true;
            button.classList.replace('active', 'inactive');
        }
        // Add click event listener
        button.addEventListener('click', function() {
            if (button.disabled) return;

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
                    category: category.id, 
                    visible: !isActive  // Toggle visibility (true->false or false->true)
                }
            }));
            
            // Update "Show All" button state
            updateShowAllMarkersState();
        });
        
        // Add to container
        container.appendChild(button);
    });
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