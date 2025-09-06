// Global variables
let labelLayers = {};
let map;
let markerLayers = {};
let markerTooltipElement;
let markerTooltipOverlay;

// Define custom styles for different label categories
const labelStyles = {
    islands: {
        // Gold gradient for islands only
        useGradient: true,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 900,
        strokeWidth: 2,
        strokeColor: '#000000',
        fontSize: 30,
        gradientColors: [
            { pos: 0, color: '#8B7034' },
            { pos: 0.1, color: '#A7893C' },
            { pos: 0.3, color: '#D4AF37' },
            { pos: 0.42, color: '#F8E597' },
            { pos: 0.5, color: '#FFFFFF' },
            { pos: 0.58, color: '#F8E597' },
            { pos: 0.7, color: '#D4AF37' },
            { pos: 0.9, color: '#A7893C' },
            { pos: 1, color: '#8B7034' }
        ]
    },
    cities: {
        // White for cities
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2.5,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 900,
        fontSize: 24
    },
    dungeons: {
        // White for dungeons
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700,
        fontSize: 20
    },
    caves: {
        // White for caves
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 600,
        fontSize: 18
    },
    interests: {
        // White for points of interest
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 600,
        fontSize: 22
    },
    waterBodies: {
        // White for water bodies
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 1.5,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 800,
        fontStyle: 'italic',
        fontSize: 26
    },
    mountains: {
        // White for mountains
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700,
        fontSize: 20
    }
};

// Default style for any category not specifically defined
const defaultLabelStyle = {
    useGradient: false,
    fillColor: '#FFFFFF',
    strokeColor: '#000000',
    strokeWidth: 2,
    fontFamily: '"Alegreya Sans", sans-serif',
    fontWeight: 700,
    fontSize: 24
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the map directly without font preloading
    initializeMap();
});

/**
 * Initialize the map and controls
 */
function initializeMap() {
    // Custom coordinate format function to display whole numbers and adjust Y axis
    function customCoordFormat(coord) {
        if (!coord) return '';
        
        // Round to whole numbers
        var x = Math.round(coord[0]);
        
        // For Y, we need to invert the coordinate since OpenLayers has origin at bottom-left
        // and we want origin at top-left
        var y = Math.round(4096 - coord[1]);
        
        // Make sure y is within bounds
        y = Math.max(0, Math.min(4096, y));
        
        // Return formatted string
        return 'X: ' + x + ', Y: ' + y;
    }
    
    // Remove any existing content in the mouse-position div
    const mousePositionDiv = document.getElementById('mouse-position');
    if (mousePositionDiv) {
        mousePositionDiv.innerHTML = '';
    }
    
    // Initialize the map
    map = new ol.Map({
        controls: ol.control.defaults.defaults(),
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.TileImage({
                    attributions: '<span style="color: white;">Map tiles created by Sir Chris using GDAL2Tiles</span>',
                    tileGrid: new ol.tilegrid.TileGrid({
                        extent: [0,0,4096,4096],
                        origin: [0,4096],
                        resolutions: [16,8,4,2,1],
                        tileSize: [256, 256]
                    }),
                    tileUrlFunction: function(tileCoord) {
                        return ('./tiles/{z}/{x}/{y}.png'
                            .replace('{z}', String(tileCoord[0]))
                            .replace('{x}', String(tileCoord[1]))
                            .replace('{y}', String(tileCoord[2])));
                    },
                })
            })
        ],
        view: new ol.View({
            center: [1105.000000, 3490.000000],
            resolution: 1.000000,
            extent: [0, 0, 4096, 4096],
            constrainOnlyCenter: false,
            showFullExtent: true
        })
    });
    
    // Add labels to the map
    addMapLabels(map);
    
    // Add markers to the map
    addMapMarkers(map);
    
    // Listen for toggle events from the sidebar
    document.addEventListener('toggle-label-category', function(e) {
        if (e.detail && e.detail.category && labelLayers[e.detail.category]) {
            labelLayers[e.detail.category].setVisible(e.detail.visible);
        }
    });
    
    // Listen for toggle events for markers
    document.addEventListener('toggle-marker-category', function(e) {
        if (e.detail && e.detail.category && markerLayers[e.detail.category]) {
            // Get all features in this layer
            const features = markerLayers[e.detail.category].getSource().getFeatures();
            
            // Show/hide the overlays for this category
            features.forEach(feature => {
                const overlay = feature.get('overlay');
                if (overlay) {
                    const element = overlay.getElement();
                    if (element) {
                        element.style.display = e.detail.visible ? '' : 'none';
                    }
                }
            });
            
            // Also toggle the vector layer (for consistency)
            markerLayers[e.detail.category].setVisible(e.detail.visible);
        }
    });
    
    // Set up tooltip interaction for markers
    setupMarkerTooltips(map);
    
    // Custom mouse position control
    initializeCoordinateDisplay();
}

/**
 * Function to create a text-to-image label with customizable styling
 * @param {string} text - The label text
 * @param {number} fontSize - Font size in pixels
 * @param {Object} styleOptions - Custom styling options
 * @returns {ol.style.Style} The style object for the label
 */
function createLabelImageStyle(text, fontSize, styleOptions = {}) {
    fontSize = fontSize || 24;
    
    // Default style options
    const options = {
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        useGradient: true,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        // Gold gradient options
        gradientColors: [
            { pos: 0, color: '#8B7034' },
            { pos: 0.1, color: '#A7893C' },
            { pos: 0.3, color: '#D4AF37' },
            { pos: 0.42, color: '#F8E597' },
            { pos: 0.5, color: '#FFFFFF' },
            { pos: 0.58, color: '#F8E597' },
            { pos: 0.7, color: '#D4AF37' },
            { pos: 0.9, color: '#A7893C' },
            { pos: 1, color: '#8B7034' }
        ],
        ...styleOptions // Override defaults with provided options
    };
    
    // Create an offscreen canvas to render the text
    var canvas = document.createElement('canvas');
    var paddingX = 20;
    var paddingY = 10;
    
    // Set canvas context
    var ctx = canvas.getContext('2d');
    
    // Construct the complete font string with weight and style
    const fontString = `${options.fontStyle} ${options.fontWeight} ${fontSize}px ${options.fontFamily}`;
    ctx.font = fontString;
    
    // Measure text to set canvas dimensions
    var metrics = ctx.measureText(text);
    var textWidth = metrics.width;
    var textHeight = fontSize * 1.2;
    
    // Set canvas dimensions with padding
    canvas.width = textWidth + paddingX * 2;
    canvas.height = textHeight + paddingY * 2;
    
    // Clear canvas and set font again (necessary after resizing)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontString;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add outline to text
    ctx.lineWidth = options.strokeWidth;
    ctx.strokeStyle = options.strokeColor;
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    
    // Fill text with gradient or solid color
    if (options.useGradient) {
        // Create gradient
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        
        // Add color stops from options
        options.gradientColors.forEach(stop => {
            gradient.addColorStop(stop.pos, stop.color);
        });
        
        ctx.fillStyle = gradient;
    } else {
        // Use solid fill color
        ctx.fillStyle = options.fillColor;
    }
    
    // Fill the text
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    
    // Convert canvas to image URL
    var imageUrl = canvas.toDataURL();
    
    // Create style with icon
    return new ol.style.Style({
        image: new ol.style.Icon({
            src: imageUrl,
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            scale: 1
        })
    });
}

/**
 * Creates an HTML element with Font Awesome icon
 * @param {string} markerType - Type of marker
 * @returns {Element} HTML element with icon
 */
function createMarkerIconElement(markerType) {
    const style = markerStyles[markerType] || {
        icon: "fa-solid fa-map-marker-alt",
        color: "#FF0000",
        size: 16
    };
    
    // Create container element
    const element = document.createElement('div');
    element.className = 'map-marker';
    
    // Create icon element
    const icon = document.createElement('i');
    icon.className = style.icon;
    icon.style.color = style.color;
    icon.style.fontSize = style.size + 'px';
    
    // Add icon to container
    element.appendChild(icon);
    
    return element;
}

/**
 * Creates a marker style with an opaque circular background
 * @param {string} markerType - Type of marker
 * @returns {ol.style.Style} OpenLayers style object
 */
function createMarkerStyle(markerType) {
    const style = markerStyles[markerType] || {
        icon: "fa-solid fa-map-marker-alt",
        color: "#FF0000",
        size: 16
    };
    
    // Create canvas for icon
    const canvas = document.createElement('canvas');
    const size = style.size * 3; // Larger canvas for better quality
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Draw opaque white circular background (no transparency)
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2.5, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(255, 255, 255)'; // Solid white with no alpha
    ctx.fill();
    
    // Add border for better definition
    ctx.strokeStyle = style.color;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Draw the icon in the center using Font Awesome Unicode
    let iconUnicode;
    switch(markerType) {
        case 'portal': iconUnicode = '\uf52b'; break; // fa-door-open
        case 'dock': iconUnicode = '\uf13d'; break;   // fa-anchor  
        case 'quest': iconUnicode = '\uf70e'; break;  // fa-scroll
        case 'shop': iconUnicode = '\uf54e'; break;   // fa-store
        case 'trainer': iconUnicode = '\uf19d'; break; // fa-graduation-cap
        case 'bank': iconUnicode = '\uf66f'; break;   // fa-landmark
        default: iconUnicode = '\uf3c5'; // fa-map-marker-alt
    }
    
    // Set up font for the icon
    ctx.font = `900 ${size/2}px "Font Awesome 6 Free"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = style.color; // Use marker's color for the icon
    
    // Draw the icon
    ctx.fillText(iconUnicode, size/2, size/2);
    
    // Return the style with our custom icon
    return new ol.style.Style({
        image: new ol.style.Icon({
            img: canvas,
            imgSize: [size, size],
            scale: 0.5
        })
    });
}

/**
 * Add a single marker to the map
 * @param {ol.source.Vector} source - Vector source
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} type - Marker type
 * @param {string} tooltip - Tooltip text
 */
function addMarkerFeature(source, x, y, type, tooltip) {
    // Convert to OpenLayers coordinate system (y is inverted)
    var olY = 4096 - y;
    var coordinates = [x, olY];
    
    // Create the HTML element for the marker
    const element = createMarkerIconElement(type);
    element.setAttribute('data-tooltip', tooltip);
    element.setAttribute('data-type', type);
    
    // Create overlay for this marker
    const markerOverlay = new ol.Overlay({
        element: element,
        position: coordinates,
        positioning: 'center-center',
        stopEvent: false
    });
    
    // Add the overlay to the map
    map.addOverlay(markerOverlay);
    
    // Create a feature for category toggling
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(coordinates),
        type: type,
        tooltip: tooltip,
        element: element,
        overlay: markerOverlay
    });
    
    // Add the feature to the source
    source.addFeature(feature);
    
    // Store reference to the overlay in the feature
    feature.set('overlay', markerOverlay);
}

/**
 * Add map markers by category
 * @param {ol.Map} map - The OpenLayers map
 */
function addMapMarkers(map) {
    // Get all marker categories
    const categories = Object.keys(mapMarkers);
    
    // Create a layer for each category
    categories.forEach(category => {
        // Create vector source for this category
        const markerSource = new ol.source.Vector();
        
        // Create vector layer for this category
        const markerLayer = new ol.layer.Vector({
            source: markerSource,
            title: category + ' Markers',
            visible: true
        });
        
        // Store the layer reference
        markerLayers[category] = markerLayer;
        
        // Add the layer to the map
        map.addLayer(markerLayer);
        
        // Add all markers in this category
        if (mapMarkers[category] && mapMarkers[category].length) {
            mapMarkers[category].forEach(marker => {
                addMarkerFeature(
                    markerSource, 
                    marker.x, 
                    marker.y, 
                    marker.type,
                    marker.tooltip
                );
            });
        }
    });
    
    // Notify the sidebar that markers are loaded
    document.dispatchEvent(new CustomEvent('markers-loaded', {
        detail: {
            categories: categories
        }
    }));
    
    // Set up tooltip interaction
    setupMarkerTooltips(map);
}

/**
 * Add all map labels
 * @param {ol.Map} map - The OpenLayers map object
 */
function addMapLabels(map) {
    // Get all category names from mapLabels object
    const categories = Object.keys(mapLabels);
    
    // Create a label layer for each category
    categories.forEach(category => {
        // Create vector source for this category
        const labelSource = new ol.source.Vector();
        
        // Create vector layer for this category
        const labelLayer = new ol.layer.Vector({
            source: labelSource,
            title: category + ' Labels',
            visible: true
        });
        
        // Store the layer reference
        labelLayers[category] = labelLayer;
        
        // Add the layer to the map
        map.addLayer(labelLayer);
        
        // Add all labels in this category
        if (mapLabels[category] && mapLabels[category].length) {
            mapLabels[category].forEach(label => {
                addLabelFeature(
                    labelSource, 
                    label.x, 
                    label.y, 
                    label.name, 
                    label.fontSize, 
                    category
                );
            });
        }
    });
    
    // Notify the sidebar that labels are loaded with available categories
    document.dispatchEvent(new CustomEvent('labels-loaded', {
        detail: {
            categories: categories
        }
    }));
}

/**
 * Add a single label to the map
 * @param {ol.source.Vector} source - Vector source to add the label to
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} text - Label text
 * @param {number} fontSize - Font size in pixels
 * @param {string} category - Label category name
 */
function addLabelFeature(source, x, y, text, fontSize, category) {
    // Convert to OpenLayers coordinate system (y is inverted)
    var olY = 4096 - y;
    
    // Create a point feature at this location
    var feature = new ol.Feature({
        geometry: new ol.geom.Point([x, olY]),
        name: text,
        category: category
    });
    
    // Get style options for this category
    const styleOptions = labelStyles[category] || defaultLabelStyle;
    
    // Override font size if provided
    if (fontSize) {
        styleOptions.fontSize = fontSize;
    }
    
    // Apply the style
    feature.setStyle(createLabelImageStyle(text, styleOptions.fontSize, styleOptions));
    
    // Add the feature to the provided source
    source.addFeature(feature);
}

/**
 * Set up tooltip interaction for markers
 * @param {ol.Map} map - The OpenLayers map
 */
function setupMarkerTooltips(map) {
    // Create tooltip element if it doesn't exist
    if (!markerTooltipElement) {
        markerTooltipElement = document.createElement('div');
        markerTooltipElement.className = 'marker-tooltip';
        markerTooltipElement.style.display = 'none';
        document.body.appendChild(markerTooltipElement);
        
        // Create overlay for the tooltip
        markerTooltipOverlay = new ol.Overlay({
            element: markerTooltipElement,
            offset: [10, 0],
            positioning: 'bottom-left'
        });
        
        map.addOverlay(markerTooltipOverlay);
    }
    
    // Add pointer move handler for tooltips
    map.on('pointermove', function(evt) {
        if (evt.dragging) {
            markerTooltipElement.style.display = 'none';
            return;
        }
        
        const feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
            return feature;
        });
        
        if (feature && feature.get('tooltip')) {
            const markerType = feature.get('type');
            const style = markerStyles[markerType] || {
                icon: "fa-solid fa-map-marker-alt",
                color: "#FF0000"
            };
            
            // Update tooltip content
            markerTooltipElement.innerHTML = `
                <div class="tooltip-icon" style="color: ${style.color}">
                    <i class="${style.icon}"></i>
                </div>
                <div class="tooltip-text">${feature.get('tooltip')}</div>
            `;
            
            // Position tooltip at feature location
            const coordinate = feature.getGeometry().getCoordinates();
            markerTooltipOverlay.setPosition(coordinate);
            markerTooltipElement.style.display = 'flex';
            
            // Change cursor to pointer
            map.getTargetElement().style.cursor = 'pointer';
        } else {
            markerTooltipElement.style.display = 'none';
            
            // Only change cursor if not over any feature
            const hasFeature = map.hasFeatureAtPixel(evt.pixel);
            map.getTargetElement().style.cursor = hasFeature ? 'pointer' : '';
        }
    });
    
    // Hide tooltip when map is moved
    map.on('movestart', function() {
        markerTooltipElement.style.display = 'none';
    });
}

// Replace the MousePosition control code with this custom implementation

// Remove this section:
// const mousePositionControl = new ol.control.MousePosition({
//     coordinateFormat: function(coord) {
//         // Your formatting code here
//         return 'X: ' + Math.round(coord[0]) + ' | Y: ' + Math.round(4096 - coord[1]); // Adjust Y if needed
//     },
//     projection: 'EPSG:3857', // Or whatever projection you're using
//     className: 'custom-mouse-position', // Custom class instead of using the element ID
//     target: document.getElementById('mouse-position'), // Keep using the sidebar's mouse-position div
//     undefinedHTML: 'X: --- | Y: ---'
// });
//
// // Add the control to the map
// map.addControl(mousePositionControl);

// And replace with this custom coordinate tracking:
function initializeCoordinateDisplay() {
    const mousePositionDiv = document.getElementById('mouse-position');
    
    // Set default text
    if (mousePositionDiv) {
        mousePositionDiv.textContent = 'X: --- | Y: ---';
        
        // Track pointer movement on the map
        map.on('pointermove', function(evt) {
            if (evt.dragging) return; // Skip during drag operations
            
            // Get map coordinates
            const coord = evt.coordinate;
            
            if (coord) {
                // Format coordinates - round to whole numbers and invert Y
                const x = Math.round(coord[0]);
                const y = Math.round(4096 - coord[1]); // Invert Y coordinate
                
                // Update the display
                mousePositionDiv.textContent = 'X: ' + x + ' | Y: ' + y;
            }
        });
        
        // Reset when pointer leaves the map
        map.getViewport().addEventListener('mouseout', function() {
            mousePositionDiv.textContent = 'X: --- | Y: ---';
        });
    }
}

// Make sure to call this function after map initialization
// Add at the end of your initializeMap() function
initializeCoordinateDisplay();