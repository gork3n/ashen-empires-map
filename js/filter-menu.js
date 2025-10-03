document.addEventListener('DOMContentLoaded', function() {
    // The 'map-ready' event signifies that the map is initialized and we can build the UI.
    document.addEventListener('map-ready', function() {
        console.log('[Filter Menu] Event received: map-ready');
        initFilterMenu();
    });

    // The 'icons-ready' event signifies that marker icons are preloaded and we can create the marker buttons.
    document.addEventListener('icons-ready', function() {
        console.log('[Filter Menu] Event received: icons-ready');
        createMarkerToggleButtons();
        // Re-run setupMasterToggleButtons to include the newly created marker buttons.
        setupMasterToggleButtons();
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
    setupMasterToggleButtons();
}

/**
 * Set up "Show All" toggle buttons
 */
function setupMasterToggleButtons() {
    console.log('[Filter Menu] Setting up master toggle buttons...');
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
    console.log('[Filter Menu] Starting createMarkerToggleButtons...');
    const container = document.getElementById('marker-toggles');
    if (!container || typeof mapMarkers === 'undefined') {
        console.error('[Filter Menu] ABORT: Container #marker-toggles not found or mapMarkers is not defined.');
        return;
    }
    
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
        { id: 'makers', name: 'Makers', type: 'obelisk' },
        { id: 'undergrounds', name: 'Undergrounds', type: 'underground_cave' },
        { id: 'events', name: 'Events', type: 'event_ticket' },
        { id: 'games_of_chance', name: 'Games of Chance', type: 'game_of_chance' },
        { id: 'guards', name: 'Guards', type: 'town_guard' },
        { id: 'information', name: 'Information', type: 'information' }
    ];

    markerCategories.forEach(category => {
        console.log(`[Filter Menu] =======================================\n[Filter Menu] Processing Category: ${category.name.toUpperCase()}`);
        // Create the main container for this category row
        const categoryRow = document.createElement('div');
        categoryRow.className = 'marker-category-row';

        // --- 1. Create the Master Category Toggle Button ---
        const mainButton = document.createElement('button');
        mainButton.className = 'toggle-btn active';
        mainButton.dataset.category = category.id;

        // Use the same canvas-based icon creation as the subtypes for consistency and correctness.
        // CRITICAL: If the representative type for a category doesn't have a style, we can't create an icon.
        if (!markerStyles[category.type]) {
            console.error(`[Filter Menu] ❌ FAILED to create main button for category '${category.id}'. The type '${category.type}' is missing from markerStyles in markers.js.`);
            mainButton.disabled = true;
            mainButton.classList.replace('active', 'inactive');
            // Continue to next category
        } else {
        console.log(`[Filter Menu] -> Creating main button icon for type: '${category.type}'`);
        const mainIcon = createUIMarkerIcon(category.type);
        mainIcon.className = 'toggle-btn-icon-canvas';
        mainButton.appendChild(mainIcon);

        // Text for the master button
        const mainText = document.createElement('span');
        mainText.textContent = category.name;
        mainButton.appendChild(mainText);
        }

        // Disable if the category is empty
        const isCategoryEmpty = !mapMarkers[category.id] || mapMarkers[category.id].length === 0;
        console.log(`[Filter Menu] -> Checking if category '${category.id}' is empty: ${isCategoryEmpty}`);
        if (isCategoryEmpty) {
            mainButton.disabled = true;
            console.warn(`[Filter Menu] -> Disabling main button for empty category '${category.id}'.`);
            mainButton.classList.replace('active', 'inactive');
        }

        // --- 2. Create the container for sub-type toggles ---
        const subtypeContainer = document.createElement('div');
        subtypeContainer.className = 'marker-subtype-container';

        // Get all unique marker types within this category
        const categoryData = mapMarkers[category.id];
        if (!categoryData) {
            console.warn(`[Filter Menu] 🟡 No data found in mapMarkers for id: '${category.id}'. Skipping subtypes for this category.`);
            // Disable the main button if there's no data at all
            mainButton.disabled = true;
            mainButton.classList.replace('active', 'inactive');
            container.appendChild(categoryRow); // Append the disabled row and continue
            console.log(`[Filter Menu] Appending disabled row for '${category.id}' and stopping.`);
            return;
        }

        const subtypes = [...new Set(categoryData?.map(marker => marker.type) || [])];
        console.log(`[Filter Menu] -> Found ${subtypes.length} unique subtypes for '${category.id}':`, subtypes);

        // --- 3. Create individual sub-type toggle buttons ---
        subtypes.forEach(subtype => {
            console.log(`[Filter Menu]   -> Processing subtype: '${subtype}'`);
            const subtypeButton = document.createElement('button');
            subtypeButton.className = 'toggle-btn active marker-subtype-btn';
            subtypeButton.dataset.subtype = subtype;
            subtypeButton.dataset.category = category.id;

            // CRITICAL: If a subtype doesn't have a style defined, skip it to prevent crashing.
            if (!markerStyles[subtype]) {
                console.warn(`[Filter Menu]   -> 🟡 Skipping subtype button for '${subtype}' because it is missing from markerStyles in markers.js.`);
                return; // Skips this iteration of the forEach loop
            }

            // Create and append the canvas icon directly. This gives us more control.
            const subtypeIconCanvas = createUIMarkerIcon(subtype);
            subtypeIconCanvas.className = 'toggle-btn-icon-canvas'; // Use a new class for canvas styling
            subtypeButton.appendChild(subtypeIconCanvas);

            // --- Text for the sub-type button ---
            // Create a more readable name from the subtype string.
            // e.g., 'portal_lsp' -> 'LSP'
            // e.g., 'shop_weapon' -> 'Weapon'
            // e.g., 'underground_cave' -> 'Cave'
            let subtypeName = subtype.replace(/^(shop|portal|underground|town)_/, ''); // Remove common prefixes
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
                
                // Instead of hiding features, we just update the layer to force a re-render.
                // The layer's style function will handle visibility.
                if (markerLayers[category.id]) {
                    markerLayers[category.id].getSource().changed();
                } 

                // Check if all subtype buttons are inactive to update the main button
                const allSubtypesActive = Array.from(subtypeContainer.children).every(btn => btn.classList.contains('active'));
                const anySubtypeActive = Array.from(subtypeContainer.children).some(btn => btn.classList.contains('active'));

                // If any subtype is active, the main button should be active.
                mainButton.classList.toggle('active', anySubtypeActive);
                mainButton.classList.toggle('inactive', !anySubtypeActive);

                // Also update the master "Show All" button
                updateShowAllMarkersState();
            });

            subtypeContainer.appendChild(subtypeButton);
            console.log(`[Filter Menu]   -> ✅ Successfully created and appended button for subtype: '${subtype}'`);
        });
        
        // --- 4. Add Event Listener to the Master Category Button ---
        mainButton.addEventListener('click', function() {
            if (isCategoryEmpty) {
                console.log(`[Filter Menu] Main button for '${category.id}' clicked, but it's disabled.`);
                return;
            }

            const wasActive = this.classList.contains('active');
            const newActiveState = !wasActive;
            console.log(`[Filter Menu] Main button for '${category.id}' clicked. New state: ${newActiveState ? 'ACTIVE' : 'INACTIVE'}`);

            this.classList.toggle('active', newActiveState);
            this.classList.toggle('inactive', !newActiveState);

            // Dispatch the correct event to toggle the main layer visibility
            document.dispatchEvent(new CustomEvent('toggle-marker-category', {
                detail: { category: category.id, visible: newActiveState }
            }));

            // Also update all sub-type buttons to match the master state
            subtypeContainer.querySelectorAll('.marker-subtype-btn').forEach(subBtn => {
                // Only click if the state is different
                const isSubBtnActive = subBtn.classList.contains('active');
                if (isSubBtnActive !== newActiveState) {
                    subBtn.click();
                }
            });

            updateShowAllMarkersState();
        });

        // --- 5. Assemble and Append to DOM ---
        categoryRow.appendChild(mainButton);
        if (subtypes.length > 0) { // Show subtype container if there are any subtypes, even just one.
            categoryRow.appendChild(subtypeContainer);
            console.log(`[Filter Menu] -> Appending subtype container for '${category.id}'.`);
        }
        container.appendChild(categoryRow);
        console.log(`[Filter Menu] ✅ Finished processing and appended row for category: ${category.name.toUpperCase()}`);
    });
    console.log('[Filter Menu] Finished createMarkerToggleButtons.');
}

/**
 * Update "Show All Labels" button state based on individual button states
 */
function updateShowAllLabelsState() {
    const allButtons = document.querySelectorAll('#label-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-labels');
    if (!showAllButton) return;
    
    const allActive = Array.from(allButtons).every(button => button.classList.contains('active'));
    
    // Update "Show All" button state
    if (allActive) {
        showAllButton.classList.remove('inactive');
        showAllButton.classList.add('active');
    } else {
        showAllButton.classList.remove('active');
        showAllButton.classList.add('inactive');
    }
}

/**
 * Update "Show All Markers" button state based on individual button states
 */
function updateShowAllMarkersState() {
    // We check both main category buttons and subtype buttons
    const allButtons = document.querySelectorAll('#marker-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-markers');
    if (!showAllButton) return;
    
    const allActive = Array.from(allButtons).every(button => {
        // Ignore disabled buttons in the check
        return button.disabled || button.classList.contains('active');
    });
    
    // Update "Show All" button state
    if (allActive) {
        showAllButton.classList.remove('inactive');
        showAllButton.classList.add('active');
    } else {
        showAllButton.classList.remove('active');
        showAllButton.classList.add('inactive');
    }
}