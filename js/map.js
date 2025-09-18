// Global variables
let labelLayers = {};
let map;
let markerLayers = {};
let markerTooltipElement;
let markerTooltipOverlay;
const styleCache = {};
let detailMap;
const customMarkerImages = {};

// Define custom styles for different label categories
const labelStyles = {
    landmarks: {
        // Gold gradient for landmarks
        useGradient: true,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 900,
        fontStyle: 'normal',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontSize: 22,
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
    islands: {
        // Gold gradient for islands only
        useGradient: true,
        fontFamily: '"KJV1611", "Alegreya Sans", sans-serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
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
        // Gold gradient for cities
        useGradient: true,
        strokeColor: '#000000',
        strokeWidth: 2.5,
        fontFamily: '"KJV1611", "Alegreya Sans", sans-serif',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 24,
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
    dungeons: {
        // White for dungeons
        useGradient: false,
        useBackground: true,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 20,
        backgroundStyle: { // Added to ensure background style is always present when useBackground is true
            fill: 'rgba(0, 0, 0, 0.7)',
            stroke: 'rgba(128, 128, 128, 0.5)',
            padding: [2, 6] // [Y, X]
        }
    },
    caves: {
        // White for caves
        useGradient: false,
        useBackground: true,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 18,
        backgroundStyle: { // Added to ensure background style is always present when useBackground is true
            fill: 'rgba(0, 0, 0, 0.7)',
            stroke: 'rgba(128, 128, 128, 0.5)',
            padding: [2, 6] // [Y, X]
        }
    },
    interests: {
        // White for points of interest
        useGradient: false,
        useBackground: true,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 600,
        fontStyle: 'normal',
        fontSize: 22,
        backgroundStyle: { // Added to ensure background style is always present when useBackground is true
            fill: 'rgba(0, 0, 0, 0.7)',
            stroke: 'rgba(128, 128, 128, 0.5)',
            padding: [2, 6] // [Y, X]
        }
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
        fontStyle: 'normal',
        fontSize: 20
    }
};

// Default style for any category not specifically defined
const defaultLabelStyle = {
    useGradient: false,
    useBackground: false,
    backgroundStyle: {
        fill: 'rgba(0, 0, 0, 0.7)',
        stroke: 'rgba(128, 128, 128, 0.5)',
        padding: [2, 6] // [Y, X]
    },
    fillColor: '#FFFFFF',
    strokeColor: '#000000',
    strokeWidth: 2,
    fontFamily: '"Alegreya Sans", sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: 24,
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
};

/**
 * Generic handler for pointer move events to show/hide tooltips.
 * @param {ol.MapBrowserEvent} evt The event object.
 */
const tooltipPointerMoveHandler = function(evt) {
    const currentMap = evt.map;
    if (evt.dragging) {
        markerTooltipElement.style.display = 'none';
        return;
    }
    const feature = currentMap.forEachFeatureAtPixel(evt.pixel, f => f);

    const markerTooltipText = feature ? feature.get('tooltip') : null;
    const labelTooltipText = feature ? feature.get('labelTooltip') : null;

    if (markerTooltipText) {
        const markerType = feature.get('type');
        const style = markerStyles[markerType] || { icon: 'icons/information.svg', color: '#FF0000' };
        const animationClass = style.animation === 'beat' ? 'g-icon-beat' : '';
        markerTooltipElement.innerHTML = `
            <div class="tooltip-icon">
                <img src="${style.icon}" alt="${markerType}" class="${animationClass}" style="width: 20px; height: 20px; vertical-align: middle;">
            </div>
            <div class="tooltip-text">${markerTooltipText}</div>
        `;
        markerTooltipOverlay.setPosition(feature.getGeometry().getCoordinates());
        markerTooltipElement.style.display = 'flex';
        currentMap.getTargetElement().style.cursor = 'pointer';
    } else if (labelTooltipText) {
        // For labels, we just want the text in a regular font.
        markerTooltipElement.innerHTML = `<div class="tooltip-text">${labelTooltipText}</div>`;
        markerTooltipOverlay.setPosition(feature.getGeometry().getCoordinates());
        markerTooltipElement.style.display = 'flex';
        currentMap.getTargetElement().style.cursor = 'pointer';
    } else {
        markerTooltipElement.style.display = 'none';
        const hasFeature = currentMap.hasFeatureAtPixel(evt.pixel);
        currentMap.getTargetElement().style.cursor = hasFeature ? 'pointer' : '';
    }
};

/**
 * Generic handler for map move start events to hide tooltips.
 */
const tooltipMoveStartHandler = function() {
    if (markerTooltipElement) {
        markerTooltipElement.style.display = 'none';
    }
};


document.addEventListener('DOMContentLoaded', function() {
    // The `document.fonts.ready` promise resolves when all fonts are loaded.
    document.fonts.ready.then(function () {
        // Preload and tint icons, then initialize the map. This ensures that
        // custom colors can be applied to SVGs that have hardcoded fill colors.
        preloadAndTintIcons().then(() => {
            initializeMap();
            // Dispatch a custom event to notify other scripts that the map and icons are ready.
            document.dispatchEvent(new CustomEvent('map-ready'));
        });
    });
});

/**
 * Preloads SVG icons and tints them with their specified color.
 * The tinted versions are stored as data URLs in `customMarkerImages`.
 * @returns {Promise} A promise that resolves when all icons are processed.
 */
function preloadAndTintIcons() {
    const promises = Object.entries(markerStyles).map(([type, styleProps]) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Needed for canvas security
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                ctx.globalCompositeOperation = 'source-in';
                ctx.fillStyle = styleProps.color;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                customMarkerImages[type] = canvas.toDataURL();
                resolve();
            };
            img.onerror = function() {
                console.error(`Failed to load icon for tinting: ${styleProps.icon}. Using original.`);
                resolve();
            };
            img.src = styleProps.icon;
        });
    });
    return Promise.all(promises);
}

/**
 * Initialize the map and controls
 */
function initializeMap() {
    // Remove any existing content in the mouse-position div
    const mousePositionDiv = document.getElementById('mouse-position');
    if (mousePositionDiv) {
        mousePositionDiv.innerHTML = '';
    }
    
    // --- Set Initial Map View ---
    // Define the center of the map using in-game (4096x4096) coordinates.
    // This makes it easy to change the starting location.
    const initialCenterGameCoords = { x: 741, y: 704, }; // Example: Valinor City

    // Convert the in-game coordinates to OpenLayers view coordinates.
    // The map is 16384x16384, which is 4x the in-game coordinates.
    // X coordinate is scaled by 4.
    // Y coordinate is scaled by 4 and then inverted (16384 - Y) because OpenLayers
    // has its origin at the bottom-left, while the game and our tiles have it at the top-left.
    const initialCenterOlCoords = [
        initialCenterGameCoords.x * 4,
        16384 - (initialCenterGameCoords.y * 4)
    ];

    // Initialize the map
    map = new ol.Map({
        controls: ol.control.defaults.defaults(), pixelRatio: 1, // Improves performance on low-end devices
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.TileImage({
                    attributions: '<span style="color: white;">Map tiles created by Sir Chris using GDAL2Tiles</span>',
                    tileGrid: new ol.tilegrid.TileGrid({
                        extent: [0,0,16384,16384],
                        origin: [0,16384],
                        resolutions: [64, 32, 16, 8, 4, 2],
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
            center: initialCenterOlCoords,
            resolution: 2,
            minResolution: 0.5,
            maxResolution: 64,
            constrainOnlyCenter: true,  // Constrain just the center, not the whole view
            showFullExtent: true
        })
    });
    
    // Add markers to the map
    addMapMarkers(map);
    
    // Add labels to the map after markers so they appear on top
    addMapLabels(map);
    
    // Listen for toggle events from the sidebar
    document.addEventListener('toggle-label-category', function(e) {
        if (e.detail && e.detail.category && labelLayers[e.detail.category]) {
            labelLayers[e.detail.category].setVisible(e.detail.visible);
        }
    });
    
    // Listen for toggle events for markers
    document.addEventListener('toggle-marker-category', function(e) {
        if (e.detail && e.detail.category && markerLayers[e.detail.category]) {
            markerLayers[e.detail.category].setVisible(e.detail.visible);
        }
    });
    
    // Set up tooltip interaction for markers
    setupMarkerTooltips(map);
    
    // Custom mouse position control
    initializeCoordinateDisplay();

    // Add crosshair for testing
    initializeCrosshair(map);

    // --- Add click listener for features ---
    map.on('click', function(evt) {
        // Set cursor to default first
        map.getTargetElement().style.cursor = '';
        const feature = map.forEachFeatureAtPixel(evt.pixel, function(f) {
            map.getTargetElement().style.cursor = 'pointer'; // Set pointer if a feature is found
            return f;
        });

        if (feature && feature.get('name')) {
            const locationName = feature.get('name');
            // Check if this location has detail data defined in detail-maps.js
            if (typeof detailMapData !== 'undefined' && detailMapData[locationName]) {
                showDetailModal(locationName);
            }
        }
    });

    // Add event listener for the modal close button
    const modalCloseBtn = document.getElementById('modal-close-btn');
    modalCloseBtn.addEventListener('click', closeDetailModal);
}

/**
 * Function to create a text-to-image label with customizable styling
 * @param {string} text - The label text
 * @param {number} fontSize - Font size in pixels
 * @param {Object} styleOptions - Custom styling options
 * @returns {ol.style.Style} The style object for the label
 */
function createLabelImageStyle(text, fontSize, styleOptions = {}) {
    // Create a cache key to avoid re-creating the same style
    const cacheKey = `label-${text}-${fontSize}-${JSON.stringify(styleOptions)}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

    // The caller is now responsible for providing a complete style object by merging
    // with `defaultLabelStyle`. We can therefore trust `styleOptions` is complete
    // and remove the redundant, conflicting defaults that were previously here.
    const options = styleOptions;
    const finalFontSize = fontSize || options.fontSize || 24;
    
    // Create an offscreen canvas to render the text
    var canvas = document.createElement('canvas');
    // Set canvas context
    var ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Construct the complete font string with weight and style
    const fontString = `${options.fontStyle} ${options.fontWeight} ${finalFontSize}px ${options.fontFamily}`;
    ctx.font = fontString;
    
    // Measure text to set canvas dimensions
    var metrics = ctx.measureText(text);
    var textWidth = metrics.width;
    var textHeight = finalFontSize * 1.2;

    // Define padding. Use specific background padding if available, otherwise use original values.
    let paddingX = 20;
    let paddingY = 2;
    if (options.useBackground) {
        // Use padding from the style, assuming it exists because of the default.
        paddingY = options.backgroundStyle.padding[0];
        paddingX = options.backgroundStyle.padding[1];
    }

    // Set canvas dimensions with padding
    canvas.width = textWidth + paddingX * 2;
    canvas.height = textHeight + paddingY * 2;
    
    // Clear canvas and set font again (necessary after resizing)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background if needed
    if (options.useBackground) {
        const cornerRadius = 8;
        const bgStyle = options.backgroundStyle;
        ctx.fillStyle = bgStyle.fill;
        ctx.strokeStyle = bgStyle.stroke;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cornerRadius, 0);
        ctx.lineTo(canvas.width - cornerRadius, 0);
        ctx.arcTo(canvas.width, 0, canvas.width, cornerRadius, cornerRadius);
        ctx.lineTo(canvas.width, canvas.height - cornerRadius);
        ctx.arcTo(canvas.width, canvas.height, canvas.width - cornerRadius, canvas.height, cornerRadius);
        ctx.lineTo(cornerRadius, canvas.height);
        ctx.arcTo(0, canvas.height, 0, canvas.height - cornerRadius, cornerRadius);
        ctx.lineTo(0, cornerRadius);
        ctx.arcTo(0, 0, cornerRadius, 0, cornerRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

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
    const style = new ol.style.Style({
        image: new ol.style.Icon({
            src: imageUrl,
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            scale: 1
        })
    });

    // Cache and return the style
    styleCache[cacheKey] = style;
    return style;
}

/**
 * Creates a marker style with a circular background and a foreground SVG icon.
 * This replicates the look of the original canvas-based markers.
 * @param {string} markerType - Type of marker, corresponding to a key in `markerStyles`.
 * @returns {Array<ol.style.Style>} An array of OpenLayers style objects (background and foreground).
 */
function createMarkerStyle(markerType) {
    // Use a new cache key to avoid conflicts with the old single-style markers.
    const cacheKey = `marker-bg-${markerType}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

    // Get the style properties from markerStyles in markers.js
    const styleProps = markerStyles[markerType] || {
        icon: 'icons/info.svg', // A fallback icon
        color: '#FF0000'
    };

    // --- 1. Create the background style using a canvas ---
    const bgCanvas = document.createElement('canvas');
    const circleDiameter = 23; // Increased size to properly frame the large icons
    const shadowBlur = 0;    // Shadow is removed for perfect centering.
    const shadowOffsetY = 0; // Shadow is removed for perfect centering.
    const border = 1.5;
    // Canvas must be large enough for the circle, its border, and its shadow.
    const canvasSize = circleDiameter + (border * 2);
    bgCanvas.width = canvasSize;
    bgCanvas.height = canvasSize;
    const ctx = bgCanvas.getContext('2d');
    const center = canvasSize / 2;

    // Add a shadow for depth.
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetY = shadowOffsetY;

    // Create a top-to-bottom linear gradient for the background.
    const gradient = ctx.createLinearGradient(0, center - (circleDiameter / 2), 0, center + (circleDiameter / 2));
    gradient.addColorStop(0, 'rgba(40, 55, 70, 0.9)');
    gradient.addColorStop(1, 'rgba(15, 25, 35, 0.9)');

    // Draw the circle at the center of the canvas.
    ctx.beginPath();
    ctx.arc(center, center, circleDiameter / 2, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add a subtle border. Disable the shadow for the border itself.
    ctx.shadowColor = 'transparent';
    ctx.strokeStyle = 'rgba(100, 120, 140, 0.9)';
    ctx.lineWidth = border;
    ctx.stroke();

    const backgroundStyle = new ol.style.Style({
        image: new ol.style.Icon({
            img: bgCanvas,
            imgSize: [canvasSize, canvasSize],
            scale: 1, // The canvas is already the desired size.
        })
    });

    // --- 2. Create the foreground icon style ---
    const foregroundStyle = new ol.style.Style({
        image: new ol.style.Icon({
            // Use the pre-tinted data URL. Fallback to original if tinting failed.
            src: customMarkerImages[markerType] || styleProps.icon,
            // Set the scale for the icon. A larger value makes the icon bigger.
            scale: 0.12,
            // No displacement is needed as there is no shadow.
            displacement: [0, 0],
        })
    });
    
    // --- 3. Combine and cache ---
    // An array of styles will be rendered in order by OpenLayers.
    const newStyle = [backgroundStyle, foregroundStyle];

    styleCache[cacheKey] = newStyle;
    return newStyle;
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
    // Scale coordinates for 16384x16384 map and convert to OpenLayers coordinate system (y is inverted)
    const scaledX = x * 4;
    const scaledY = y * 4;
    var olY = 16384 - scaledY;
    var coordinates = [scaledX, olY];
    
    // Create a feature for the marker
    var feature = new ol.Feature({
        geometry: new ol.geom.Point(coordinates),
        type: type,
        tooltip: tooltip
    });

    // Set the style for the feature
    feature.setStyle(createMarkerStyle(type));
    
    // Add the feature to the source
    source.addFeature(feature);
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
            visible: true,
            minResolution: 0, // Set to 0 to ensure markers are always visible when zoomed in.
            maxResolution: 4  // Hides when zoomed out to level 4 or more (resolution >= 4)
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

        const layerOptions = {
            source: labelSource,
            title: category + ' Labels',
            visible: true,
            // All label categories are now dynamic. They are always visible, and their
            // font size changes with zoom level, so we use a style function.
            style: function(feature, resolution) {
                const text = feature.get('name');
                const baseFontSize = feature.get('baseFontSize');
                const category = feature.get('category');

                // This should not happen, but as a safeguard
                if (!baseFontSize) return null;

                const styleOptions = { ...defaultLabelStyle, ...(labelStyles[category] || {}) };

                // This formula creates a smooth scaling effect for fonts across all zoom levels.
                // It avoids the "jumpiness" caused by having a hard cutoff for different resolutions.
                // The formula is equivalent to: scaleFactor = (2 / resolution) ^ 0.415
                // At resolution=2 (high zoom), scaleFactor is 1.
                // At resolution=4, scaleFactor is 0.75.
                // At resolution=8, scaleFactor is 0.56.
                const exponent = Math.log2(resolution / 2);
                const scaleFactor = Math.pow(0.75, exponent);

                const newFontSize = Math.round(baseFontSize * scaleFactor);

                styleOptions.fontSize = newFontSize;

                return createLabelImageStyle(text, styleOptions.fontSize, styleOptions);
            }
        };

        // Create vector layer for this category
        const labelLayer = new ol.layer.Vector(layerOptions);

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
    // Scale coordinates for 16384x16384 map and convert to OpenLayers coordinate system (y is inverted)
    const scaledX = x * 4;
    const scaledY = y * 4;
    var olY = 16384 - scaledY;
    
    // Create a point feature at this location
    var feature = new ol.Feature({
        geometry: new ol.geom.Point([scaledX, olY]),
        name: text,
        category: category
    });
    
    // Add a tooltip for specific label categories that use a special font.
    if (category === 'islands' || category === 'cities') {
        feature.set('labelTooltip', text);
    }

    // Get style options for this category
    const styleOptions = { ...defaultLabelStyle, ...(labelStyles[category] || {}) };
    
    // Override font size if provided
    if (fontSize) {
        styleOptions.fontSize = fontSize;
    }

    // Since all labels are now dynamic, we just store the base font size.
    // The style will be calculated by the layer's style function.
    feature.set('baseFontSize', styleOptions.fontSize);

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
    
    // Attach the generic handlers to the map instance
    map.on('pointermove', tooltipPointerMoveHandler);
    
    // Hide tooltip when map is moved
    map.on('movestart', tooltipMoveStartHandler);
}

/**
 * Displays the detail modal for a specific location.
 * @param {string} locationName - The name of the location, matching a key in detailMapData.
 */
function showDetailModal(locationName) {
    const locationData = detailMapData[locationName];
    if (!locationData) {
        console.error("No detail data found for location:", locationName);
        return;
    }

    const modal = document.getElementById('detail-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfoContainer = document.getElementById('modal-info');
    const modalMapContainer = document.getElementById('modal-map');
    const modalInfoContent = modalInfoContainer.querySelector('.modal-info-content-wrapper');

    if (!modal || !modalTitle || !modalInfoContainer || !modalMapContainer || !modalInfoContent) return;

    // --- 1. Populate Modal Content ---
    modalTitle.textContent = locationData.title;
    modalInfoContent.innerHTML = locationData.info;

    // --- START: Mobile Info Panel Toggle ---
    // The toggle button is now part of the static HTML. We just need to ensure
    // its event listener is attached once and its state is reset.
    const infoToggle = modalInfoContainer.querySelector('.modal-info-toggle');

    // Check if we've already attached the listener to avoid duplicates.
    if (infoToggle && !infoToggle.dataset.listenerAttached) {
        infoToggle.addEventListener('click', () => {
            const isCollapsed = modalInfoContainer.classList.toggle('collapsed');
            // 'expand_less' (up arrow) means the panel is collapsed and can be expanded.
            // 'expand_more' (down arrow) means the panel is open and can be collapsed.
            infoToggle.querySelector('.material-symbols-outlined').textContent = isCollapsed ? 'expand_less' : 'expand_more';
        });
        infoToggle.dataset.listenerAttached = 'true';
    }

    // Ensure the panel is in the default "open" state when the modal is shown.
    if (infoToggle) {
        modalInfoContainer.classList.remove('collapsed');
        // Set the icon to 'expand_more' (down arrow) to indicate the panel is open.
        infoToggle.querySelector('.material-symbols-outlined').textContent = 'expand_more';
    }
    // --- END: Mobile Info Panel Toggle ---

    // Apply a background to the map container for styling
    modalMapContainer.style.backgroundImage = "url('images/bg.png')";
    modalMapContainer.style.backgroundRepeat = 'repeat';

    // --- 2. Show the Modal ---
    modal.style.display = 'flex';

    // --- 3. Initialize the Detail Map ---
    // Use a timeout to ensure the modal is rendered and has dimensions before creating the map.
    setTimeout(() => {
        if (detailMap) {
            detailMap.setTarget(null); // Clean up previous instance
        }
        
        const imageConfig = locationData.image;
        const imageUrl = imageConfig.url;
        const imageWidth = imageConfig.width;
        const imageHeight = imageConfig.height;
        const extent = [0, 0, imageWidth, imageHeight];

        // Define coordinate mapping variables early so they can be used for initialView.
        const originX = locationData.origin?.x || 0;
        const originY = locationData.origin?.y || 0;
        const scale = locationData.scale || 1;
        const offsetX = locationData.offset?.x || 0;
        const offsetY = locationData.offset?.y || 0;

        const projection = new ol.proj.Projection({
            code: 'static-image',
            units: 'pixels',
            extent: extent,
        });

        const detailMarkerSource = new ol.source.Vector();
        const detailLabelSource = new ol.source.Vector();

        // --- View Configuration ---
        const viewOptions = {
            projection: projection,
            center: ol.extent.getCenter(extent), // Default: center of the image
            zoom: 2,                             // Default: initial zoom
            minZoom: 1,
        };

        // Override defaults with settings from detail-maps.js if they exist
        if (locationData.initialView) {
            if (locationData.initialView.centerOnMain) {
                const mainCoord = locationData.initialView.centerOnMain;
                // Use the formula to convert main map coordinates to detail map pixel coordinates
                const detailX = ((mainCoord.x - originX) * scale) + offsetX;
                const detailY = ((mainCoord.y - originY) * scale) + offsetY;

                // Convert top-left pixel coords to OL's bottom-left based coords
                viewOptions.center = [detailX, imageHeight - detailY];

            } else if (locationData.initialView.center) {
                // Convert top-left pixel coords to OL's bottom-left based coords
                const centerX = locationData.initialView.center[0];
                const centerY = locationData.initialView.center[1];
                viewOptions.center = [centerX, imageHeight - centerY];
            }
            if (locationData.initialView.zoom !== undefined) {
                viewOptions.zoom = locationData.initialView.zoom;
            }
            if (locationData.initialView.maxZoom !== undefined) {
                viewOptions.maxZoom = locationData.initialView.maxZoom;
            }
        }

        detailMap = new ol.Map({
            target: 'modal-map',
            layers: [
                new ol.layer.Image({
                    source: new ol.source.ImageStatic({
                        url: imageUrl,
                        projection: projection,
                        imageExtent: extent,
                    }),
                }),
                new ol.layer.Vector({ source: detailMarkerSource }),
                new ol.layer.Vector({ source: detailLabelSource }),
            ],
            view: new ol.View(viewOptions),
        });

        // --- START: Fetch and Add Features (Markers & Labels) ---
        // The following logic collects all relevant markers and labels from the main map
        // that fall within the boundaries of this detail map.

        // First, collect all markers that should appear on the detail map.
        const detailMarkers = [...(locationData.markers || [])];
        const existingTooltips = new Set(detailMarkers.map(m => m.tooltip));

        // Calculate the size of the content area on the main map, accounting for offsets.
        // This ensures we only fetch markers/labels that are actually on the sub-map.
        const mainMapContentWidth = (imageWidth - offsetX) / scale;
        const mainMapContentHeight = (imageHeight - offsetY) / scale;

        const calculatedBbox = {
            minX: originX,
            minY: originY,
            maxX: originX + mainMapContentWidth,
            maxY: originY + mainMapContentHeight,
        };

        // This is the bounding box on the main map from which to pull features.
        const featureBbox = calculatedBbox;

        // Use a helper function to gather all markers and labels for the detail map.
        const { markers: allDetailMarkers, labels: allDetailLabels } = getFeaturesForDetailMap(locationData, featureBbox);

        // Add the collected features to the detail map's sources.
        addDetailMapMarkers(detailMarkerSource, allDetailMarkers, imageHeight);
        addDetailMapLabels(detailLabelSource, allDetailLabels, imageHeight, locationData);

        // --- END: Fetch and Add Features ---

        // --- 4. Set up Tooltips for Detail Map ---
        if (markerTooltipOverlay) {
            map.removeOverlay(markerTooltipOverlay); // Remove from main map
            detailMap.addOverlay(markerTooltipOverlay); // Add to detail map
            setupMarkerTooltips(detailMap); // Attach event listeners
        }

        // Add crosshair for testing
        initializeCrosshair(detailMap);

        // Add coordinate display for the detail map
        const modalMousePositionDiv = document.getElementById('modal-mouse-position');
        if (modalMousePositionDiv) {
            // This function is now self-contained and takes the map instance as an argument.
            // This avoids closure issues with the global `detailMap` variable.
            const setupCoordinateDisplay = (mapInstance, locData) => {
                let lastDisplayX, lastDisplayY;
                const offsetX = locData.offset?.x || 0;
                const offsetY = locData.offset?.y || 0;
                const originX = locData.origin?.x || 0;
                const originY = locData.origin?.y || 0;
                const scale = locData.scale || 1;

                const updateModalDisplay = () => {
                    const view = mapInstance.getView();
                    if (!view) return;
                    const zoom = view.getZoom();
                    const zoomText = 'Zoom: ' + (zoom !== undefined ? Math.round(zoom) : '---');
                    const coordText = (lastDisplayX !== undefined && lastDisplayY !== undefined) ?
                        `X: ${lastDisplayX} | Y: ${lastDisplayY}` :
                        'X: --- | Y: ---';
                    modalMousePositionDiv.textContent = `${coordText} | ${zoomText}`;
                };

                const handlePointerEvent = (evt) => {
                    if (!evt.coordinate) return;
                    const coord = evt.coordinate;
                    const contentX = Math.round(coord[0]) - offsetX;
                    const contentY = Math.round(imageHeight - coord[1]) - offsetY;
                    const scaledX = contentX / scale;
                    const scaledY = contentY / scale;
                    lastDisplayX = Math.round(originX + scaledX);
                    lastDisplayY = Math.round(originY + scaledY);
                    updateModalDisplay();
                };

                // Attach event listeners to the map instance
                mapInstance.on('moveend', updateModalDisplay);      // For zoom changes
                mapInstance.on('pointerdown', handlePointerEvent);  // For touch/click
                mapInstance.on('pointermove', handlePointerEvent);  // For mouse hover
                mapInstance.getViewport().addEventListener('mouseout', () => {
                    lastDisplayX = undefined;
                    lastDisplayY = undefined;
                    updateModalDisplay();
                });

                updateModalDisplay(); // Initial call to set the text
            };

            // Initialize the coordinate display for the newly created detail map.
            setupCoordinateDisplay(detailMap, locationData);
        }
        
    }, 10); // A small delay ensures the modal container is ready
}

/**
 * Gathers all markers and labels from the main map that fall within the
 * calculated bounding box of a detail map.
 * @param {object} locationData - The configuration object for the detail map.
 * @param {object} featureBbox - The calculated bounding box on the main map.
 * @returns {{markers: Array, labels: Array}} An object containing arrays of markers and labels.
 */
function getFeaturesForDetailMap(locationData, featureBbox) {
    const detailMarkers = [...(locationData.markers || [])];
    const existingTooltips = new Set(detailMarkers.map(m => m.tooltip));

    const detailLabels = [...(locationData.labels || [])];
    const existingLabelNames = new Set(detailLabels.map(l => l.name));

    const scale = locationData.scale || 1;
    const offsetX = locationData.offset?.x || 0;
    const offsetY = locationData.offset?.y || 0;
    const originX = locationData.origin?.x || 0;
    const originY = locationData.origin?.y || 0;

    // Iterate through main map markers
    for (const category in mapMarkers) {
        mapMarkers[category].forEach(mainMarker => {
            if (
                mainMarker.x >= featureBbox.minX && mainMarker.x <= featureBbox.maxX &&
                mainMarker.y >= featureBbox.minY && mainMarker.y <= featureBbox.maxY &&
                !existingTooltips.has(mainMarker.tooltip)
            ) {
                const subX = ((mainMarker.x - originX) * scale) + offsetX;
                const subY = ((mainMarker.y - originY) * scale) + offsetY;
                detailMarkers.push({ x: Math.round(subX), y: Math.round(subY), type: mainMarker.type, tooltip: mainMarker.tooltip });
            }
        });
    }

    // Iterate through main map labels
    for (const category in mapLabels) {
        mapLabels[category].forEach(mainLabel => {
            if (
                mainLabel.x >= featureBbox.minX && mainLabel.x <= featureBbox.maxX &&
                mainLabel.y >= featureBbox.minY && mainLabel.y <= featureBbox.maxY &&
                !existingLabelNames.has(mainLabel.name)
            ) {
                const subX = ((mainLabel.x - originX) * scale) + offsetX;
                const subY = ((mainLabel.y - originY) * scale) + offsetY;
                detailLabels.push({
                    x: Math.round(subX),
                    y: Math.round(subY),
                    name: mainLabel.name,
                    fontSize: mainLabel.fontSize,
                    category: category
                });
            }
        });
    }

    return {
        markers: detailMarkers,
        labels: detailLabels
    };
}


/**
 * Adds a set of markers to a vector source for a detail map.
 * @param {ol.source.Vector} source - The vector source to add markers to.
 * @param {Array} markers - An array of marker objects to add.
 * @param {number} imageHeight - The height of the detail map image for coordinate conversion.
 */
function addDetailMapMarkers(source, markers, imageHeight) {
    if (!markers || !markers.length) return;

    markers.forEach(marker => {
        // Convert top-left coordinates (from detail-maps.js) to the bottom-left
        // system that OpenLayers uses for static images.
        const olY = imageHeight - marker.y;
        const coordinates = [marker.x, olY];

        const feature = new ol.Feature({
            geometry: new ol.geom.Point(coordinates),
            type: marker.type,
            tooltip: marker.tooltip,
        });

        // Reuse the same styling function as the main map for consistency
        feature.setStyle(createMarkerStyle(marker.type));
        source.addFeature(feature);
    });
}

/**
 * Adds a set of labels to a vector source for a detail map.
 * @param {ol.source.Vector} source - The vector source to add labels to.
 * @param {Array} labels - An array of label objects to add.
 * @param {number} imageHeight - The height of the detail map image for coordinate conversion.
 */
function addDetailMapLabels(source, labels, imageHeight, locationData) {
    if (!labels || !labels.length) return;

    const scale = locationData.scale || 1;

    labels.forEach(label => {
        // Convert top-left coordinates (from detail-maps.js) to the bottom-left
        // system that OpenLayers uses for static images.
        const olY = imageHeight - label.y;
        const coordinates = [label.x, olY];

        const feature = new ol.Feature({
            geometry: new ol.geom.Point(coordinates),
            name: label.name,
            category: label.category,
        });

        // 1. Get the base style object for the label's category.
        const baseStyle = { ...(labelStyles[label.category] || defaultLabelStyle) };

        // 2. Determine the base font size. Use the label's specific size, or the category's default.
        const baseFontSize = label.fontSize || baseStyle.fontSize;

        // 3. Scale the font size for the detail map to make it legible.
        // A factor of 2.5 seems to provide a good balance on high-DPI screens.
        const finalFontSize = Math.round(baseFontSize * (scale / 2.5));

        // 4. Create the style. Pass the final size and the base style options.
        // The createLabelImageStyle function will use these to render the label.
        // This ensures all properties (fontFamily, fontWeight, etc.) from the baseStyle are used.
        feature.setStyle(createLabelImageStyle(label.name, finalFontSize, baseStyle));
        source.addFeature(feature);
    });
}

/**
 * Closes the detail modal and cleans up the map instance.
 */
function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.style.display = 'none';

    // Clean up background style from the map container
    const modalMapContainer = document.getElementById('modal-map');
    if (modalMapContainer) {
        modalMapContainer.style.backgroundImage = '';
    }

    if (detailMap) {
        // Move the tooltip overlay back to the main map before destroying the detail map
        if (markerTooltipOverlay) {
            detailMap.removeOverlay(markerTooltipOverlay);
            map.addOverlay(markerTooltipOverlay);
        }

        // Clean up the map instance
        detailMap.setTarget(null);
        detailMap = null;
    }
}

/**
 * Initializes a crosshair overlay on a map instance for coordinate testing.
 * @param {ol.Map} mapInstance The OpenLayers map to attach the crosshair to.
 */
function initializeCrosshair(mapInstance) {
    const mapElement = mapInstance.getTargetElement();
    if (!mapElement) return;

    // Create crosshair elements
    const vLine = document.createElement('div');
    vLine.className = 'crosshair-line crosshair-line-v';
    const hLine = document.createElement('div');
    hLine.className = 'crosshair-line crosshair-line-h';

    // Append to the map container
    mapElement.appendChild(vLine);
    mapElement.appendChild(hLine);

    // Show and move crosshair on pointer move
    mapInstance.on('pointermove', function(evt) {
        if (evt.dragging) return;

        const mapRect = mapElement.getBoundingClientRect();
        const x = evt.originalEvent.clientX - mapRect.left;
        const y = evt.originalEvent.clientY - mapRect.top;

        vLine.style.left = `${x}px`;
        hLine.style.top = `${y}px`;

        vLine.style.display = 'block';
        hLine.style.display = 'block';
    });

    // Hide crosshair when pointer leaves the map
    mapInstance.getViewport().addEventListener('mouseout', function() {
        vLine.style.display = 'none';
        hLine.style.display = 'none';
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
    if (mousePositionDiv) {
        let lastX, lastY;

        const updateDisplay = () => {
            const zoom = map.getView().getZoom();
            const zoomText = 'Zoom: ' + (zoom !== undefined ? Math.round(zoom) : '---');
            const coordText = (lastX !== undefined && lastY !== undefined) ? 'X: ' + lastX + ' | Y: ' + lastY : 'X: --- | Y: ---';
            mousePositionDiv.textContent = `${coordText} | ${zoomText}`;
        };

        // Initial display and update on zoom change
        map.on('moveend', updateDisplay);
        updateDisplay(); // Set initial text

        // Update coordinates on touch/click start for mobile friendliness
        map.on('pointerdown', function(evt) {
            const coord = evt.coordinate;
            if (coord) {
                lastX = Math.round(coord[0] / 4);
                lastY = Math.round((16384 - coord[1]) / 4); // Invert Y coordinate and scale down
                updateDisplay();
            }
        });

        // Track pointer movement on the map
        map.on('pointermove', function(evt) {
            const coord = evt.coordinate;
            if (coord) {
                lastX = Math.round(coord[0] / 4);
                lastY = Math.round((16384 - coord[1]) / 4); // Invert Y coordinate and scale down
                updateDisplay();
            }
        });

        // Reset when pointer leaves the map
        map.getViewport().addEventListener('mouseout', function() {
            lastX = undefined;
            lastY = undefined;
            updateDisplay();
        });
    }
}