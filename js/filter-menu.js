let mapMarkers, undergroundMapMarkers, markerStyles, markerLayers, labelLayers, undergroundMarkerLayers, createUIMarkerIcon;

/**
 * A mapping from internal marker type IDs to human-readable display names for the filter menu.
 */
const markerTypeNames = {
    // Overworld Portals
    'overworld_portal_lsp': "LSP Portals",
    'overworld_portal_blue': "Blue Portals",
    'overworld_portal_small': "Small Portals",
    'overworld_portal_housing': "Housing Portals",
    'overworld_portal_ancient': "Ancient Portals",
    'overworld_portal_whirlpool': "Whirlpools",

    // Overworld Shops
    'overworld_shop_weapon': "Weapon Shops",
    'overworld_shop_armory': "Armories",
    'overworld_shop_generic': "General Stores",
    'overworld_shop_provisioner': "Provisioners",
    'overworld_shop_pub': "Pubs",
    'overworld_shop_bakery': "Bakeries",
    'overworld_shop_jewelry': "Jewelers",
    'overworld_shop_carpentry': "Carpenters",
    'overworld_shop_leather': "Leatherworkers",
    'overworld_shop_farming': "Farming Shops",
    'overworld_shop_blacksmith': "Blacksmiths",
    'overworld_shop_magic': "Magic Shops",
    'overworld_shop_evil_trinket': "Evil Trinkets",
    'overworld_shop_runecrafting': "Runecrafters",
    'overworld_shop_survey': "Surveyors",
    'overworld_shop_scrolls': "Scroll Shops",
    'overworld_shop_shipyard': "Shipyards",
    'overworld_shop_storage': "Storage",

    // Overworld Services & NPCs
    'overworld_dock': "Docks",
    'overworld_quest': "Quests",
    'overworld_dynamic_quests': "Dynamic Quests",
    'overworld_town_guardian': "Town Guardians",
    'overworld_inn_keeper': "Innkeepers",
    'overworld_town_wizard_of_insight': "Wizards of Insight",
    'overworld_trainer': "Trainers",
    'overworld_town_steward': "Town Stewards",
    'overworld_bank': "Banks",
    'overworld_game_of_chance': "Games of Chance",
    'overworld_information_npc': "Info NPCs",
    'overworld_event_ticket': "Event Tickets",
    'overworld_event_judge': "Event Judges",
    'overworld_altar': "Altars",
    'overworld_obelisk': "Obelisks",

    // Overworld Spawns
    'overworld_spawn_good': "Good Spawns",
    'overworld_spawn_evil': "Evil Spawns",

    // Overworld Undergrounds
    'overworld_underground_stairs': "Stairs",
    'overworld_underground_ladder': "Ladders",
    'overworld_underground_cave': "Caves",
    'overworld_underground_crypt': "Crypts",
    'overworld_underground_dungeon': "Dungeons",
    'overworld_underground_mine': "Mines",
    'overworld_underground_sewer': "Sewers",
    'overworld_underground_closed': "Closed Entrances",
    'overworld_underground_ant': "Ant Hills",
    'overworld_underground_scorpion': "Scorpion Pits",
    'overworld_underground_spider': "Spider Caves",
    'overworld_underground_snake': "Snake Pits",
    'overworld_underground_termigon': "Termigon Nests",

    // Underground Markers
    'underworld_portal_ancient': "Ancient Portals",
    'underworld_shop_generic': "General Stores",
    'underworld_inn_keeper': "Innkeepers",
    'underworld_town_guardian': "Town Guardians",
    'underworld_town_wizard_of_insight': "Wizards of Insight",
    'underworld_bank': "Banks",
    'underworld_stairs': "Stairs",
    'underworld_ladder': "Ladders",
};

/**
 * Initialize filter menu functionality. This is the main entry point for this module.
 * @param {object} data - The data object from map.js.
 * @param {object} data.mapMarkers - The marker data.
 * @param {object} data.undergroundMapMarkers - The underground marker data.
 * @param {object} data.markerStyles - The marker style definitions.
 * @param {object} data.markerLayers - The marker layer references.
 * @param {object} data.labelLayers - The label layer references.
 * @param {object} data.undergroundMarkerLayers - The underground marker layer references.
 * @param {Function} data.createUIMarkerIcon - The function to create UI icons.
 */
export function initializeFilterMenu(data) {
    // Receive data directly from the function call
    mapMarkers = data.mapMarkers;
    undergroundMapMarkers = data.undergroundMapMarkers;
    markerStyles = data.markerStyles;
    markerLayers = data.markerLayers;
    labelLayers = data.labelLayers;
    undergroundMarkerLayers = data.undergroundMarkerLayers;
    createUIMarkerIcon = data.createUIMarkerIcon;

    const filterMenu = document.getElementById('filter-menu');
    const filterMenuToggle = document.getElementById('filter-menu-toggle');
    const mobileFiltersBtn = document.getElementById('mobile-filters-btn');

    // The floating filter button on mobile toggles the menu
    if (mobileFiltersBtn) {
        mobileFiltersBtn.addEventListener('click', () => {
            const isOpen = filterMenu.classList.toggle('open');
        });
    }

    // The header toggle button always closes the menu
    if (filterMenuToggle && filterMenu) {
        filterMenuToggle.addEventListener('click', function() {
            filterMenu.classList.remove('open');
        });
    }

    // Add a listener to the whole window to close the menu when clicking outside
    window.addEventListener('click', function(event) {
        // Check if the menu is open and the click was outside the menu and not on the toggle button itself
        // This prevents the menu from closing immediately when one of the FABs is clicked.
        if (filterMenu.classList.contains('open') && !filterMenu.contains(event.target) && !event.target.closest('.fab-container')) {
            filterMenu.classList.remove('open');
        }
    });


    // Create individual toggle buttons for each section
    createLabelToggleButtons();
    createUndergroundLabelToggleButtons();
    createMarkerToggleButtons();
    createUndergroundMarkerToggleButtons();
    setupMasterToggleButtons();
}

/**
 * Set up "Show All" toggle buttons
 */
function setupMasterToggleButtons() {
    // Show All Labels button
    setupMasterToggle('show-all-labels', '#label-toggles .toggle-btn');
    setupMasterToggle('show-all-underground-labels', '#underground-label-toggles .toggle-btn');
    setupMasterToggle('show-all-markers', '#marker-toggles .toggle-btn');
    setupMasterToggle('show-all-underground-markers', '#underground-marker-toggles .toggle-btn');
}

/**
 * Helper function to set up a "Show All" toggle button.
 * @param {string} masterButtonId - The ID of the master "Show All" button.
 * @param {string} childButtonSelector - The CSS selector for the child toggle buttons.
 */
function setupMasterToggle(masterButtonId, childButtonSelector) {
    const masterButton = document.getElementById(masterButtonId);
    if (!masterButton) return;

    masterButton.addEventListener('click', function() {
        const isActive = this.classList.contains('active');
        const newState = !isActive;

        // Toggle the button state
        this.classList.toggle('active', newState);
        this.classList.toggle('inactive', !newState);

        // Toggle all child buttons to match the new state
        const childButtons = document.querySelectorAll(childButtonSelector);
        childButtons.forEach(button => {
            if (button.disabled) return;
            const buttonIsActive = button.classList.contains('active');
            // Only click buttons that don't match the new state
            if (buttonIsActive !== newState) {
                button.click(); // This will trigger the button's own click handler
            }
        });
    });
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
 * Create underground label toggle buttons.
 */
function createUndergroundLabelToggleButtons() {
    const container = document.getElementById('underground-label-toggles');
    if (!container) return;

    container.innerHTML = '';

    // Define the specific categories for the underground map
    const undergroundLabelCategories = [
        { id: 'cities', name: 'Cities', icon: 'icons/medieval-village-01.svg' }, // SVG Icon
        { id: 'dungeons', name: 'Dungeons', icon: 'icons/dungeon-gate.svg' }, // SVG Icon
        { id: 'caves', name: 'Caves', icon: 'icons/cave-entrance.svg' }, // SVG Icon
        { id: 'basements', name: 'Basements', icon: 'icons/crypt-entrance.svg' }, // SVG Icon
        { id: 'sewers', name: 'Sewers', icon: 'icons/rat.svg' }, // SVG Icon
        { id: 'tunnels', name: 'Tunnels', icon: 'icons/dolmen.svg' }, // SVG Icon
        { id: 'grottos', name: 'Grottos', icon: 'icons/waterfall.svg' }, // SVG Icon
        { id: 'pits', name: 'Pits', icon: 'vertical_align_bottom' },
        { id: 'passages', name: 'Passages', icon: 'double_arrow' }
    ];

    undergroundLabelCategories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'toggle-btn active';
        button.dataset.category = category.id;

        // Check if the icon is an SVG path or a Material Symbol
        if (category.icon.includes('.svg')) {
            const iconImg = document.createElement('img');
            iconImg.className = 'toggle-btn-icon-svg'; // New class for styling SVG icons
            iconImg.src = category.icon;
            button.appendChild(iconImg);
        } else {
            const iconSpan = document.createElement('span');
            iconSpan.className = 'material-symbols-outlined';
            iconSpan.textContent = category.icon;
            button.appendChild(iconSpan);
        }

        const textSpan = document.createElement('span');
        textSpan.textContent = category.name;
        button.appendChild(textSpan);

        // For now, these buttons are for UI display only.
        // The actual layer toggling logic for underground labels needs to be implemented
        // if you have separate underground label layers.
        button.addEventListener('click', function() {
            const isActive = button.classList.toggle('active');
            button.classList.toggle('inactive', !isActive);

            // Placeholder for future functionality
            console.log(`Toggled underground label '${category.id}' to ${isActive}`);

            // Update "Show All" button state
            updateShowAllUndergroundLabelsState();
        });

        // For now, disable buttons that don't have corresponding data yet.
        // This is a placeholder for when you add underground labels.
        // if (!mapLabels[category.id]) { // This check will need to be updated for underground labels
        //     button.disabled = true;
        //     button.classList.replace('active', 'inactive');
        // }

        container.appendChild(button);
    });
}

/**
 * Create marker toggle buttons
 */
function createMarkerToggleButtons() {
    const container = document.getElementById('marker-toggles');
    if (!container || typeof mapMarkers === 'undefined') {
        return;
    }
    
    container.innerHTML = '';
    
    const markerCategories = [
        { id: 'portals', name: 'Portals', type: 'category_portal' },
        { id: 'shops', name: 'Shops', type: 'category_shop' },
        { id: 'services_npcs', name: 'Other Services & NPCs' }, // Removed type to hide header icon
        { id: 'spawns', name: 'Spawns', type: 'category_spawn' },
        { id: 'undergrounds', name: 'Undergrounds', type: 'category_underground' },
        
    ];

    markerCategories.forEach(category => {
        // Create the main container for this category row
        const categoryRow = document.createElement('div');
        categoryRow.className = 'marker-category-row';

        // --- 1. Create the Master Category Toggle Button ---
        const mainButton = document.createElement('button');
        mainButton.className = 'toggle-btn active';
        mainButton.dataset.category = category.id;

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
        const categoryData = mapMarkers[category.id];
        const subtypes = [...new Set(categoryData?.map(marker => marker.type) || [])];


        // --- 3. Create individual sub-type toggle buttons ---
        subtypes.forEach(subtype => {
            const subtypeButton = document.createElement('button');
            subtypeButton.className = 'toggle-btn active marker-subtype-btn';
            subtypeButton.dataset.subtype = subtype;
            subtypeButton.dataset.category = category.id;

            // CRITICAL: If a subtype doesn't have a style defined, skip it to prevent crashing.
            if (!markerStyles[subtype]) {
                return; // Skips this iteration of the forEach loop
            }

            // Create and append the canvas icon directly. This gives us more control.
            const subtypeIconCanvas = createUIMarkerIcon(subtype);
            subtypeIconCanvas.className = 'toggle-btn-icon-canvas'; // Use a new class for canvas styling
            subtypeButton.appendChild(subtypeIconCanvas);

            // Use the mapping for a clean name, or generate a fallback name if not found.
            const subtypeName = markerTypeNames[subtype] || subtype.replace(/_/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

            const subtypeText = document.createElement('span');
            subtypeText.textContent = subtypeName;
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
        });
        
        // --- 4. Add Event Listener to the Master Category Button ---
        mainButton.addEventListener('click', function() {
            if (isCategoryEmpty) {
                return;
            }

            const wasActive = this.classList.contains('active');
            const newActiveState = !wasActive;

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
        }
        container.appendChild(categoryRow);
    });
}

/**
 * Create underground marker toggle buttons.
 */
function createUndergroundMarkerToggleButtons() {
    const container = document.getElementById('underground-marker-toggles');
    if (!container || typeof undergroundMapMarkers === 'undefined') {
        return;
    }

    container.innerHTML = '';

    const markerCategories = [
        { id: 'portals', name: 'Portals', type: 'category_portal' },
        { id: 'shops', name: 'Shops', type: 'category_shop' },
        { id: 'services_npcs', name: 'Other Services & NPCs' }, // No header icon
        { id: 'spawns', name: 'Spawns', type: 'category_spawn' },
        { id: 'undergrounds', name: 'Undergrounds', type: 'category_underground' },
    ];

    markerCategories.forEach(category => {
        const categoryRow = document.createElement('div');
        categoryRow.className = 'marker-category-row';

        const mainButton = document.createElement('button');
        mainButton.className = 'toggle-btn active';
        mainButton.dataset.category = category.id;

        // Per the rules, category headers should not have icons.
        if (false && category.type && markerStyles[category.type]) { // Logic disabled
            const mainIcon = createUIMarkerIcon(category.type);
            mainIcon.className = 'toggle-btn-icon-canvas';
            mainButton.appendChild(mainIcon);
        }

        const mainText = document.createElement('span');
        mainText.textContent = category.name;
        mainButton.appendChild(mainText);

        const isCategoryEmpty = !undergroundMapMarkers[category.id] || undergroundMapMarkers[category.id].length === 0;
        if (isCategoryEmpty) {
            mainButton.disabled = true;
            mainButton.classList.replace('active', 'inactive');
        }

        const subtypeContainer = document.createElement('div');
        subtypeContainer.className = 'marker-subtype-container';

        const categoryData = undergroundMapMarkers[category.id];
        if (!categoryData) {
            mainButton.disabled = true;
            mainButton.classList.replace('active', 'inactive');
            container.appendChild(categoryRow);
            return;
        }

        const subtypes = [...new Set(categoryData?.map(marker => marker.type) || [])];

        subtypes.forEach(subtype => {
            const subtypeButton = document.createElement('button');
            subtypeButton.className = 'toggle-btn active marker-subtype-btn';
            subtypeButton.dataset.subtype = subtype;
            subtypeButton.dataset.category = category.id;

            if (!markerStyles[subtype]) {
                return;
            }

            const subtypeIconCanvas = createUIMarkerIcon(subtype);
            subtypeIconCanvas.className = 'toggle-btn-icon-canvas';
            subtypeButton.appendChild(subtypeIconCanvas);

            // Use the mapping for a clean name, or generate a fallback name if not found.
            const subtypeName = markerTypeNames[subtype] || subtype.replace(/_/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

            const subtypeText = document.createElement('span');
            subtypeText.textContent = subtypeName;
            subtypeButton.appendChild(subtypeText);

            subtypeButton.addEventListener('click', function(e) {
                e.stopPropagation();
                const isActive = this.classList.toggle('active');
                this.classList.toggle('inactive', !isActive);

                if (undergroundMarkerLayers[category.id]) {
                    undergroundMarkerLayers[category.id].getSource().changed();
                }

                const anySubtypeActive = Array.from(subtypeContainer.children).some(btn => btn.classList.contains('active'));
                mainButton.classList.toggle('active', anySubtypeActive);
                mainButton.classList.toggle('inactive', !anySubtypeActive);

                updateShowAllUndergroundMarkersState();
            });

            subtypeContainer.appendChild(subtypeButton);
        });

        mainButton.addEventListener('click', function() {
            if (isCategoryEmpty) return;

            const wasActive = this.classList.contains('active');
            const newActiveState = !wasActive;

            this.classList.toggle('active', newActiveState);
            this.classList.toggle('inactive', !newActiveState);

            // This event needs a listener that can handle underground layers
            // For now, we'll just toggle the layer directly if it exists.
            if (undergroundMarkerLayers[category.id]) {
                undergroundMarkerLayers[category.id].setVisible(newActiveState);
            }

            subtypeContainer.querySelectorAll('.marker-subtype-btn').forEach(subBtn => {
                const isSubBtnActive = subBtn.classList.contains('active');
                if (isSubBtnActive !== newActiveState) {
                    subBtn.click();
                }
            });

            updateShowAllUndergroundMarkersState();
        });

        categoryRow.appendChild(mainButton);
        if (subtypes.length > 0) {
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
 * Update "Show All Underground Labels" button state.
 */
function updateShowAllUndergroundLabelsState() {
    const allButtons = document.querySelectorAll('#underground-label-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-underground-labels');
    if (!showAllButton) return;

    const allActive = Array.from(allButtons).every(button => button.disabled || button.classList.contains('active'));

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

/**
 * Update "Show All Underground Markers" button state.
 */
function updateShowAllUndergroundMarkersState() {
    const allButtons = document.querySelectorAll('#underground-marker-toggles .toggle-btn');
    const showAllButton = document.getElementById('show-all-underground-markers');
    if (!showAllButton) return;

    const allActive = Array.from(allButtons).every(button => {
        return button.disabled || button.classList.contains('active');
    });

    if (allActive) {
        showAllButton.classList.remove('inactive');
        showAllButton.classList.add('active');
    } else {
        showAllButton.classList.remove('active');
        showAllButton.classList.add('inactive');
    }
}