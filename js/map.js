// Global variables
let labelLayers = {};
let map;

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
    
    // Create a custom mouse position control
    var mousePositionControl = new ol.control.MousePosition({
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        coordinateFormat: customCoordFormat,
        undefinedHTML: 'X: 0, Y: 0'
    });
    
    // Initialize the map
    map = new ol.Map({
        controls: ol.control.defaults.defaults().extend([mousePositionControl]),
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
            center: [1270.000000, 3490.000000],
            resolution: 1.000000,
            extent: [0, 0, 4096, 4096],
            constrainOnlyCenter: false,
            showFullExtent: true
        })
    });
    
    // Add labels to the map
    addMapLabels(map);
    
    // Listen for toggle events from the sidebar
    document.addEventListener('toggle-label-category', function(e) {
        if (e.detail && e.detail.category && labelLayers[e.detail.category]) {
            labelLayers[e.detail.category].setVisible(e.detail.visible);
        }
    });
}

/**
 * Function to create a text-to-image label with refined gold gradient
 * @param {string} text - The label text
 * @param {number} fontSize - Font size in pixels
 * @returns {ol.style.Style} The style object for the label
 */
function createGoldGradientImageStyle(text, fontSize) {
    fontSize = fontSize || 24;
    
    // Create an offscreen canvas to render the text
    var canvas = document.createElement('canvas');
    var paddingX = 20;
    var paddingY = 10;
    
    // Set canvas context
    var ctx = canvas.getContext('2d');
    
    // Set font with a fallback
    ctx.font = fontSize + 'px "UnifrakturCook", "Times New Roman", serif';
    
    // Measure text to set canvas dimensions
    var metrics = ctx.measureText(text);
    var textWidth = metrics.width;
    var textHeight = fontSize * 1.2;
    
    // Set canvas dimensions with padding
    canvas.width = textWidth + paddingX * 2;
    canvas.height = textHeight + paddingY * 2;
    
    // Clear canvas and set font again (necessary after resizing)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px "UnifrakturCook", "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Create a more refined gold gradient
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#8B7034');
    gradient.addColorStop(0.1, '#A7893C');
    gradient.addColorStop(0.3, '#D4AF37');
    gradient.addColorStop(0.42, '#F8E597');
    gradient.addColorStop(0.5, '#FFFFFF');
    gradient.addColorStop(0.58, '#F8E597');
    gradient.addColorStop(0.7, '#D4AF37');
    gradient.addColorStop(0.9, '#A7893C');
    gradient.addColorStop(1, '#8B7034');
    
    // Add black outline to text
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
    
    // Fill text with gradient
    ctx.fillStyle = gradient;
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
                addLabelFeature(labelSource, label.x, label.y, label.name, label.fontSize);
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
 * Add a category of labels to the map
 * @param {ol.source.Vector} source - Vector source to add labels to
 * @param {string} category - Category name
 * @param {Array} labels - Array of label objects
 */
function addLabelCategory(source, category, labels) {
    // Skip empty categories
    if (!labels || !labels.length) return;
    
    console.log(`Adding ${labels.length} ${category} labels`);
    
    // Add each label in the category
    labels.forEach(function(label) {
        addLabelFeature(source, label.x, label.y, label.name, label.fontSize);
    });
}

/**
 * Add a single label to the map
 * @param {ol.source.Vector} source - Vector source to add the label to
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} text - Label text
 * @param {number} fontSize - Font size in pixels
 */
function addLabelFeature(source, x, y, text, fontSize) {
    // Convert to OpenLayers coordinate system (y is inverted)
    var olY = 4096 - y;
    
    // Create a point feature at this location
    var feature = new ol.Feature({
        geometry: new ol.geom.Point([x, olY]),
        name: text
    });
    
    // Apply the gold gradient style
    feature.setStyle(createGoldGradientImageStyle(text, fontSize));
    
    // Add the feature to the provided source
    source.addFeature(feature);
}