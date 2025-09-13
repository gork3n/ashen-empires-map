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
    if (feature && feature.get('tooltip')) {
        const markerType = feature.get('type');
        const style = markerStyles[markerType] || { icon: 'place', color: '#FF0000' };
        const animationClass = style.animation === 'beat' ? 'g-icon-beat' : '';
        markerTooltipElement.innerHTML = `
            <div class="tooltip-icon" style="color: ${style.color};">
                <span class="material-symbols-outlined ${animationClass}">${style.icon}</span>
            </div>
            <div class="tooltip-text">${feature.get('tooltip')}</div>
        `;
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
    // This is crucial to ensure Font Awesome is available before we try to
    // render icons on the canvas.
    document.fonts.ready.then(function () {
        initializeMap();
    });
});

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
    const initialCenterGameCoords = { x: 1102, y: 1178 }; // Example: Valinor City

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
            minResolution: 2,
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
    var paddingY = 2; // This controls the vertical space between the text and the anchor point.
    
    // Set canvas context
    var ctx = canvas.getContext('2d', { willReadFrequently: true });
    
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
 * Creates a marker style with an opaque circular background
 * @param {string} markerType - Type of marker
 * @returns {ol.style.Style} OpenLayers style object
 */
function createMarkerStyle(markerType) {
    // Use cache to avoid re-creating the same style
    const cacheKey = `marker-${markerType}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

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
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Draw the marker background
    // Add a shadow for depth
    ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetY = 1;

    // Draw dark circular background
    // Y-center is moved up slightly to make room for the shadow
    const yCenter = (size / 2) - 1;
    ctx.beginPath();
    ctx.arc(size / 2, yCenter, size / 3, 0, 2 * Math.PI);

    // Set the background color to match the sidebar toggle buttons
    ctx.fillStyle = 'rgba(0, 0, 0, 0.67)';
    ctx.fill();

    // Add a white border around the circle
    ctx.strokeStyle = '#50505098';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Reset shadow for the icon itself
    ctx.shadowColor = 'transparent';
    
    const iconSize = size / 2.2; // ~16px

    // Draw the icon in the center using Google Material Symbols
    const iconName = style.icon || 'place';
    
    // Set up font for the icon
    // Note: Google Material Symbols are not bolded via font-weight, but through font settings.
    ctx.font = `${iconSize}px "Material Symbols Outlined"`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = style.color;
    
    // Draw the icon, also offset
    ctx.fillText(iconName, size / 2, yCenter);
    
    // Return the style with our custom icon
    const newStyle = new ol.style.Style({
        image: new ol.style.Icon({
            img: canvas,
            imgSize: [size, size],
            scale: 0.65 // Final size will be ~23px
        })
    });

    // Cache and return the style
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
    const modalInfo = document.getElementById('modal-info');
    const modalMapContainer = document.getElementById('modal-map');

    if (!modal || !modalTitle || !modalInfo || !modalMapContainer) return;

    // --- 1. Populate Modal Content ---
    modalTitle.textContent = locationData.title;
    modalInfo.innerHTML = locationData.info;

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

        const projection = new ol.proj.Projection({
            code: 'static-image',
            units: 'pixels',
            extent: extent,
        });

        const detailMarkerSource = new ol.source.Vector();

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
            ],
            view: new ol.View({
                projection: projection,
                center: ol.extent.getCenter(extent),
                zoom: 2,
                maxZoom: 5,
                minZoom: 1,
            }),
        });

        // Add the hard-coded markers for this location to the detail map
        // --- Combine markers from detail-maps.js and markers.js ---

        // 1. Start with markers defined specifically for this detail map.
        const detailMarkers = [...(locationData.markers || [])];
        const existingTooltips = new Set(detailMarkers.map(m => m.tooltip));

        // 2. Calculate the sub-map's bounding box on the main 4096x4096 map.
        const originX = locationData.origin?.x || 0;
        const originY = locationData.origin?.y || 0;
        const scale = locationData.scale || 1;
        const offsetX = locationData.offset?.x || 0;
        const offsetY = locationData.offset?.y || 0;

        const mainMapAreaWidth = imageWidth / scale;
        const mainMapAreaHeight = imageHeight / scale;
        const mainMapBbox = {
            minX: originX,
            minY: originY,
            maxX: originX + mainMapAreaWidth,
            maxY: originY + mainMapAreaHeight,
        };

        // 3. Iterate through main map markers and pull in any that are within the bounds.
        for (const category in mapMarkers) {
            mapMarkers[category].forEach(mainMarker => {
                // Check if the marker is within the bounding box and not already added.
                if (
                    mainMarker.x >= mainMapBbox.minX && mainMarker.x <= mainMapBbox.maxX &&
                    mainMarker.y >= mainMapBbox.minY && mainMarker.y <= mainMapBbox.maxY &&
                    !existingTooltips.has(mainMarker.tooltip)
                ) {
                    // Convert main map coordinates to sub-map pixel coordinates.
                    const subX = ((mainMarker.x - originX) * scale) + offsetX;
                    const subY = ((mainMarker.y - originY) * scale) + offsetY;

                    detailMarkers.push({ x: Math.round(subX), y: Math.round(subY), type: mainMarker.type, tooltip: mainMarker.tooltip });
                }
            });
        }

        addDetailMapMarkers(detailMarkerSource, detailMarkers, imageHeight);

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
            modalMousePositionDiv.textContent = 'X: --- | Y: ---';

            const offsetX = locationData.offset?.x || 0;
            const offsetY = locationData.offset?.y || 0;
            const originX = locationData.origin?.x || 0;
            const originY = locationData.origin?.y || 0;
            const scale = locationData.scale || 1;

            detailMap.on('pointermove', function(evt) {
                if (evt.dragging) return;

                const coord = evt.coordinate;
                if (coord) {
                    // Raw pixel coordinates from top-left of the image.
                    const rawX = Math.round(coord[0]);
                    const rawY = Math.round(imageHeight - coord[1]); // Invert Y

                    // 1. Subtract the image padding offset to get the coordinate relative to the map content.
                    const contentX = rawX - offsetX;
                    const contentY = rawY - offsetY;

                    // 2. Scale the content coordinate down to the main map's scale.
                    const scaledX = contentX / scale;
                    const scaledY = contentY / scale;

                    // 3. Add the origin to get the final main map coordinate.
                    const displayX = Math.round(originX + scaledX);
                    const displayY = Math.round(originY + scaledY);

                    modalMousePositionDiv.textContent = 'X: ' + displayX + ' | Y: ' + displayY;
                }
            });

            detailMap.getViewport().addEventListener('mouseout', function() {
                modalMousePositionDiv.textContent = 'X: --- | Y: ---';
            });
        }
        
    }, 10); // A small delay ensures the modal container is ready
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
 * Closes the detail modal and cleans up the map instance.
 */
function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.style.display = 'none';

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
    
    // Set default text
    if (mousePositionDiv) {
        mousePositionDiv.textContent = 'X: --- | Y: ---';
        
        // Track pointer movement on the map
        map.on('pointermove', function(evt) {
            if (evt.dragging) return; // Skip during drag operations
            
            // Get map coordinates
            const coord = evt.coordinate;
            
            if (coord) {
                // Format coordinates - scale down, round to whole numbers and invert Y
                const x = Math.round(coord[0] / 4);
                const y = Math.round((16384 - coord[1]) / 4); // Invert Y coordinate and scale down
                
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