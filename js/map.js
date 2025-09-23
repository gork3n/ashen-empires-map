// Global variables
let labelLayers = {};
let map;
let markerLayers = {};
let markerTooltipElement;
let markerTooltipOverlay;
const styleCache = {};
const markerImageCache = {};

// Define custom styles for different label categories
const labelStyles = {
    landmarks: {
        // Gold gradient for landmarks
        useGradient: true,
        fontFamily: '"KJV1611", "Alegreya Sans", sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
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
        preloadIcons().then(() => {
            initializeMap();
            // Dispatch a custom event to notify other scripts that the map and icons are ready.
            document.dispatchEvent(new CustomEvent('map-ready'));
        });
    });
});

/**
 * Preloads SVG icons used for markers.
 * The loaded images are stored in `markerImageCache`.
 * @returns {Promise} A promise that resolves when all icons are processed.
 */
function preloadIcons() {
    const promises = Object.entries(markerStyles).map(([type, styleProps]) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // Needed for canvas security
            img.onload = function() {
                markerImageCache[type] = img;
                resolve();
            };
            img.onerror = function() {
                console.error(`Failed to load icon: ${styleProps.icon}.`);
                markerImageCache[type] = null; // Mark as failed
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
    const initialCenterGameCoords = { x: 783, y: 677, }; // Default View is x: 742, y: 706 (Showing Lotor's Summer Palace)

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
            minResolution: 0.1,
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
    // Set up the new info flyout panel
    setupInfoFlyout();

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
                showInfoFlyout(locationName);
            }
        }
    });
}

/**
 * Creates and appends the info flyout panel to the DOM and sets up its close event.
 */
function setupInfoFlyout() {
    const container = document.getElementById('container');
    if (!container) return;

    // Check if it already exists to prevent duplicates on hot-reloads
    if (document.getElementById('info-flyout')) return;

    const flyoutHTML = `
        <div id="info-flyout" class="info-flyout">
            <div class="info-flyout-header">
                <h3 id="info-flyout-title"></h3>
                <div class="info-flyout-controls">
                    <button id="info-flyout-fullscreen" class="info-flyout-control-btn" title="Toggle Fullscreen">
                        <span class="material-symbols-outlined">fullscreen</span>
                    </button>
                    <button id="info-flyout-close" class="info-flyout-control-btn" title="Close">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
            <div id="info-flyout-content" class="info-flyout-content"></div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', flyoutHTML);

    const closeButton = document.getElementById('info-flyout-close');
    closeButton.addEventListener('click', hideInfoFlyout);

    const fullscreenButton = document.getElementById('info-flyout-fullscreen');
    const flyoutPanel = document.getElementById('info-flyout');
    fullscreenButton.addEventListener('click', function() {
        flyoutPanel.classList.toggle('fullscreen');
        const icon = fullscreenButton.querySelector('.material-symbols-outlined');
        icon.textContent = flyoutPanel.classList.contains('fullscreen')
            ? 'fullscreen_exit'
            : 'fullscreen';
    });
}

/**
 * Shows the info flyout panel with content for a specific location.
 * @param {string} locationName - The name of the location, matching a key in detailMapData.
 */
function showInfoFlyout(locationName) {
    const locationData = detailMapData[locationName];
    if (!locationData) return;

    const flyout = document.getElementById('info-flyout');
    const title = document.getElementById('info-flyout-title');
    const content = document.getElementById('info-flyout-content');

    title.textContent = locationData.title;
    content.innerHTML = locationData.info;

    flyout.classList.add('visible');
}

/**
 * Hides the info flyout panel.
 */
function hideInfoFlyout() {
    const flyout = document.getElementById('info-flyout');
    flyout.classList.remove('visible');

    // Also remove fullscreen class and reset icon when closing
    if (flyout.classList.contains('fullscreen')) {
        flyout.classList.remove('fullscreen');
        const fullscreenButton = document.getElementById('info-flyout-fullscreen');
        if (fullscreenButton) {
            fullscreenButton.querySelector('.material-symbols-outlined').textContent = 'fullscreen';
        }
    }
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
    
    // Handle multi-line text
    const lines = text.split('\n');
    const lineHeight = finalFontSize * 1.2;

    // Measure text to set canvas dimensions
    let textWidth = 0;
    lines.forEach(line => {
        const metrics = ctx.measureText(line);
        if (metrics.width > textWidth) {
            textWidth = metrics.width;
        }
    });
    const textHeight = lineHeight * lines.length;

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
    
    // Calculate starting Y position for the first line of text
    const startY = (canvas.height / 2) - (textHeight / 2) + (lineHeight / 2);

    lines.forEach((line, index) => {
        const yPos = startY + (index * lineHeight);

        // Add outline to text
        ctx.lineWidth = options.strokeWidth;
        ctx.strokeStyle = options.strokeColor;
        ctx.strokeText(line, canvas.width / 2, yPos);

        // Fill text with gradient or solid color
        if (options.useGradient) {
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            options.gradientColors.forEach(stop => {
                gradient.addColorStop(stop.pos, stop.color);
            });
            ctx.fillStyle = gradient;
        } else {
            ctx.fillStyle = options.fillColor;
        }

        // Fill the text
        ctx.fillText(line, canvas.width / 2, yPos);
    });
    
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
 * Creates a marker style with a colored circular background and a white foreground icon.
 * This replicates the look of modern map markers and combines them into a single canvas
 * so they scale together.
 * @param {string} markerType - Type of marker, corresponding to a key in `markerStyles`.
 * @returns {ol.style.Style} A single OpenLayers style object.
 */
function createMarkerStyle(markerType) {
    const cacheKey = `marker-v2-${markerType}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

    const styleProps = markerStyles[markerType] || {
        icon: 'icons/info.svg', // A fallback icon
        color: '#FF0000'
    };

    // --- 1. Define Marker and Canvas Sizes ---
    const backgroundDiameter = 28;
    const iconSize = backgroundDiameter * 0.74; // Further increased icon size by ~2px
    const border = 2;
    const shadowBlur = 3;
    const shadowOffsetY = 2;

    // The canvas must be large enough for the circle, its border, and its shadow.
    const canvasPadding = (border * 2) + (shadowBlur * 2);
    const canvasSize = Math.ceil(backgroundDiameter + canvasPadding);
    const center = canvasSize / 2;

    // --- 2. Create the composite canvas ---
    const finalCanvas = document.createElement('canvas');
    finalCanvas.width = canvasSize;
    finalCanvas.height = canvasSize;
    const ctx = finalCanvas.getContext('2d', { willReadFrequently: true });

    // --- 3. Draw Drop Shadow and Background Circle ---
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = shadowBlur;
    ctx.shadowOffsetY = shadowOffsetY;

    // Draw the colored circle. The shadow is applied automatically.
    ctx.fillStyle = styleProps.color;
    ctx.beginPath();
    ctx.arc(center, center - (shadowOffsetY / 2), backgroundDiameter / 2, 0, 2 * Math.PI);
    ctx.fill();

    // --- 4. Draw Border and Icon ---
    ctx.shadowColor = 'transparent'; // Disable shadow for the next elements

    // Draw the white border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.lineWidth = border;
    ctx.stroke();

    // Draw the white icon on top
    const foregroundIconImage = markerImageCache[markerType];
    if (foregroundIconImage) {
        const iconX = center - (iconSize / 2);
        const iconY = center - (iconSize / 2) - (shadowOffsetY / 2);
        ctx.drawImage(foregroundIconImage, iconX, iconY, iconSize, iconSize);
    }

    // --- 5. Create a single style from the composite canvas ---
    const newStyle = new ol.style.Style({
        image: new ol.style.Icon({
            img: finalCanvas,
            imgSize: [canvasSize, canvasSize],
            scale: 1.0, 
        })
    });

    // --- 6. Cache and return ---
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
    if (category === 'islands' || category === 'cities' || category === 'landmarks') {
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