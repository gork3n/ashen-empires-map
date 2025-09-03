document.addEventListener('DOMContentLoaded', function() {
    // Preload the font before rendering labels
    preloadFont("UnifrakturCook", function() {
        initializeMap();
    });
});

/**
 * Preload font to ensure it's available before rendering labels
 * @param {string} fontFamily - Font family name
 * @param {Function} callback - Function to call when font is loaded
 */
function preloadFont(fontFamily, callback) {
    // Create a promise that resolves when the font loads
    const fontPromise = document.fonts.ready.then(function() {
        // Create a test element to check if the font is loaded
        const testEl = document.createElement('span');
        testEl.style.fontFamily = fontFamily + ', sans-serif';
        testEl.style.fontSize = '0px';
        testEl.innerHTML = 'A';
        document.body.appendChild(testEl);
        
        // Force font to load explicitly with FontFaceObserver if available
        if (typeof FontFaceObserver !== 'undefined') {
            const observer = new FontFaceObserver(fontFamily);
            return observer.load().then(function() {
                document.body.removeChild(testEl);
                return true;
            }).catch(function() {
                document.body.removeChild(testEl);
                console.warn('Font ' + fontFamily + ' failed to load, using fallback');
                return false;
            });
        } else {
            // Fallback to a timeout approach if FontFaceObserver isn't available
            return new Promise(function(resolve) {
                setTimeout(function() {
                    document.body.removeChild(testEl);
                    resolve(true);
                }, 300); // Wait a short time to give the font a chance to load
            });
        }
    });
    
    // Execute the callback when the font is ready
    fontPromise.then(callback);
}

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
    var map = new ol.Map({
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
    ctx.font = fontSize + 'px "UnifrakturCook", sans-serif';
    
    // Measure text to set canvas dimensions
    var metrics = ctx.measureText(text);
    var textWidth = metrics.width;
    var textHeight = fontSize * 1.2;
    
    // Set canvas dimensions with padding
    canvas.width = textWidth + paddingX * 2;
    canvas.height = textHeight + paddingY * 2;
    
    // Clear canvas and set font again (necessary after resizing)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px "UnifrakturCook", sans-serif';
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
    // Create a vector source for all labels
    var labelSource = new ol.source.Vector();
    
    // Create a vector layer for all labels
    var labelLayer = new ol.layer.Vector({
        source: labelSource,
        title: 'Labels'
    });
    
    // Add the label layer to the map
    map.addLayer(labelLayer);
    
    // Add individual labels
    addLabelFeature(labelSource, 775, 566, "Lotor's Summer Palace", 24);
    
    // You can add more labels here as needed
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