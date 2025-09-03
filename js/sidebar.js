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