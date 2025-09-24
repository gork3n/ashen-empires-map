document.addEventListener('DOMContentLoaded', function() {
    // Wait for the map and icons to be ready before initializing the filter menu.
    // This ensures that tinted marker icons are available.
    // We also need access to the map and its layers.
    // The 'map-ready' event provides this.
    document.addEventListener('map-ready', function() {
        initFilterMenu();
    });
});

/**
 * Initialize filter menu functionality
 */
function initFilterMenu() {
    const filterMenu = document.getElementById('filter-menu');
    const filterMenuToggle = document.getElementById('filter-menu-toggle');
    const mobileFiltersBtn = document.getElementById('mobile-filters-btn');

    // The floating filter button on mobile toggles the menu
    if (mobileFiltersBtn) {
        mobileFiltersBtn.addEventListener('click', () => {
            filterMenu.classList.toggle('open');
        });
    }

    // The header toggle button always closes the menu
    if (filterMenuToggle && filterMenu) {
        filterMenuToggle.addEventListener('click', function() {
            filterMenu.classList.remove('open');
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
        { id: 'portals', name: 'Portals', type: 'portal_lsp' },
        { id: 'docks', name: 'Docks', type: 'dock' },
        { id: 'quests', name: 'Quests', type: 'quest' },
        { id: 'shops', name: 'Shops', type: 'shop_generic' },
        { id: 'trainers', name: 'Trainers', type: 'trainer' },
        { id: 'spawn_good', name: 'Good Spawns', type: 'spawn_good' },
        { id: 'spawn_evil', name: 'Evil Spawns', type: 'spawn_evil' },
        { id: 'banks', name: 'Banks', type: 'bank' },
        { id: 'altars', name: 'Altars', type: 'altar' },
        { id: 'crafting', name: 'Crafting', type: 'obelisk' },
        { id: 'undergrounds', name: 'Undergrounds', type: 'underground_cave' },
        { id: 'games_of_chance', name: 'Games of Chance', type: 'game_of_chance' },
        { id: 'information', name: 'Information', type: 'information' }
    ];

    markerCategories.forEach(category => {
        // Create the main container for this category row
        const categoryRow = document.createElement('div');
        categoryRow.className = 'marker-category-row';

        // --- 1. Create the Master Category Toggle Button ---
        const mainButton = document.createElement('button');
        mainButton.className = 'toggle-btn active';
        mainButton.dataset.category = category.id;

        // Revert to using a smaller img icon for the header-style button
        const mainIcon = document.createElement('img');
        mainIcon.src = createMarkerStyle(category.type).getImage().getImage().toDataURL();
        mainIcon.className = 'toggle-btn-icon-img';
        mainButton.appendChild(mainIcon);

        // Text for the master button
        const mainText = document.createElement('span');
        mainText.textContent = category.name;
        mainButton.appendChild(mainText);

        // Disable if the category is empty
        const isCategoryEmpty = !mapMarkers[category.id] || mapMarkers[category.id].length === 0;
        if (isCategoryEmpty) {
            mainButton.disabled = true;
            mainButton.classList.replace('active', 'inactive');
        }

        // --- 2. Create the container for sub-type toggles ---
        const subtypeContainer = document.createElement('div');
        subtypeContainer.className = 'marker-subtype-container';

        // Get all unique marker types within this category
        const subtypes = [...new Set(mapMarkers[category.id]?.map(marker => marker.type) || [])];

        // --- 3. Create individual sub-type toggle buttons ---
        subtypes.forEach(subtype => {
            const subtypeButton = document.createElement('button');
            subtypeButton.className = 'toggle-btn active marker-subtype-btn';
            subtypeButton.dataset.subtype = subtype;
            subtypeButton.dataset.category = category.id;

            // Create and append the canvas icon directly. This gives us more control.
            const subtypeIconCanvas = createUIMarkerIcon(subtype);
            subtypeIconCanvas.className = 'toggle-btn-icon-canvas'; // Use a new class for canvas styling
            subtypeButton.appendChild(subtypeIconCanvas);

            // --- Text for the sub-type button ---
            // Create a more readable name from the subtype string.
            // e.g., 'portal_lsp' -> 'LSP'
            // e.g., 'shop_weapon' -> 'Weapon'
            // e.g., 'underground_cave' -> 'Cave'
            let subtypeName = subtype.replace(/^(shop|portal|underground)_/, ''); // Remove common prefixes
            subtypeName = subtypeName.replace(/_/g, ' '); // Replace underscores with spaces
            
            // Special case for 'lsp'
            if (subtypeName.toLowerCase() === 'lsp') {
                subtypeName = 'LSP';
            }

            const subtypeText = document.createElement('span');
            subtypeText.textContent = subtypeName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            subtypeButton.appendChild(subtypeText);

            // Event listener for the sub-type button
            subtypeButton.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent the main category button from firing
                const isActive = this.classList.toggle('active');
                this.classList.toggle('inactive', !isActive);

                const layer = markerLayers[category.id];
                if (!layer) return;

                // Toggle visibility of features with this subtype
                layer.getSource().getFeatures().forEach(feature => {
                    if (feature.get('type') === subtype) {
                        feature.setStyle(isActive ? createMarkerStyle(subtype) : null);
                    }
                });
                
                // Check if all subtype buttons are inactive to update the main button
                const allSubtypesInactive = Array.from(subtypeContainer.children).every(btn => btn.classList.contains('inactive'));
                mainButton.classList.toggle('active', !allSubtypesInactive);
                mainButton.classList.toggle('inactive', allSubtypesInactive);
            });

            subtypeContainer.appendChild(subtypeButton);
        });
        
        // --- 4. Add Event Listener to the Master Category Button ---
        mainButton.addEventListener('click', function() {
            if (isCategoryEmpty) return;

            const wasActive = this.classList.contains('active');
            const newActiveState = !wasActive;

            this.classList.toggle('active', newActiveState);
            this.classList.toggle('inactive', !newActiveState);

            // Toggle the main layer visibility
            document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                detail: { category: category.id, visible: newActiveState }
            }));

            // Also update all sub-type buttons to match the master state
            subtypeContainer.querySelectorAll('.marker-subtype-btn').forEach(subBtn => {
                subBtn.classList.toggle('active', newActiveState);
                subBtn.classList.toggle('inactive', !newActiveState);
            });

            updateShowAllMarkersState();
        });

        // --- 5. Assemble and Append to DOM ---
        categoryRow.appendChild(mainButton);
        if (subtypes.length > 1) { // Only show subtype container if there's more than one type
            categoryRow.appendChild(subtypeContainer);
        }
        container.appendChild(categoryRow);
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