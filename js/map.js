// Global variables
let labelLayers = {};
let map;

// Define custom styles for different label categories
const labelStyles = {
    islands: {
        // Gold gradient for islands
        useGradient: true,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 800, // extrabold for islands
        strokeWidth: 2,
        strokeColor: '#000000',
        fontSize: 30
    },
    cities: {
        // White with blue border for cities
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#1E3F66',
        strokeWidth: 2.5,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700, // bold for cities
        fontSize: 24
    },
    dungeons: {
        // Red with black border for dungeons
        useGradient: false,
        fillColor: '#CC3333',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700, // bold for dungeons
        fontSize: 20
    },
    caves: {
        // Brown for caves
        useGradient: false,
        fillColor: '#A0522D',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 500, // medium for caves
        fontSize: 18
    },
    ruins: {
        // Gray for ruins
        useGradient: false,
        fillColor: '#AAAAAA',
        strokeColor: '#333333',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 500, // medium for ruins
        fontSize: 22
    },
    waterBodies: {
        // Light blue for water bodies
        useGradient: false,
        fillColor: '#FFFFFF',
        strokeColor: '#133B5C',
        strokeWidth: 1.5,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 800, // extrabold for water bodies
        fontStyle: 'italic', // italic for water bodies
        fontSize: 26
    }
};

// Default style for any category not specifically defined
const defaultLabelStyle = {
    useGradient: false,
    fillColor: '#FFFFFF',
    strokeColor: '#000000',
    strokeWidth: 2,
    fontFamily: '"Alegreya Sans", sans-serif',
    fontWeight: 700, // bold as default
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
            center: [1105.000000, 3490.000000],
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