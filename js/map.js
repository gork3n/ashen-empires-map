import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Feature from 'ol/Feature.js';
import Overlay from 'ol/Overlay.js';
import { Point } from 'ol/geom.js';
import TileLayer from 'ol/layer/Tile.js';
import VectorLayer from 'ol/layer/Vector.js';
import XYZ from 'ol/source/XYZ.js';
import VectorSource from 'ol/source/Vector.js';
import { Style, Icon } from 'ol/style.js';
import TileGrid from 'ol/tilegrid/TileGrid.js';

// Import local data modules
import { mapLabels } from './labels.js';
import { mapMarkers, markerStyles } from './markers.js';


// Global constiables
let labelLayers = {};
let map;
let markerTooltipElement;
let markerTooltipOverlay;
const styleCache = {};
const markerImageCache = {};
let markerLayers = {};

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
        useBackground: true,
        fillColor: '#FFFFFF',
        strokeColor: '#000000',
        strokeWidth: 2,
        fontFamily: '"Alegreya Sans", sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
        fontSize: 20,
        backgroundStyle: {
            fill: 'rgba(0, 0, 0, 0.7)',
            stroke: 'rgba(128, 128, 128, 0.5)',
            padding: [2, 6] // [Y, X]
        }
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
    const initialCenterGameCoords = { x: 776, y: 668, }; // Default View is { x: 776, y: 668, } (Showing Lotor's Summer Palace) Centers LSP on smaller screens.

    const mapSize = 32768;
    const scaleFactor = mapSize / 4096; // New scaling factor

    // Convert the in-game coordinates to OpenLayers view coordinates.
    // With the new gdal2tiles raster profile, the origin is top-left [0, 0] and the extent
    // goes into negative Y values. We must convert our game coordinates (which are positive-Y-down)
    // to this new system by making the Y-coordinate negative.
    const initialCenterOlCoords = [
        initialCenterGameCoords.x * scaleFactor,
        -(initialCenterGameCoords.y * scaleFactor)
    ];

    // Initialize the map
    map = new Map({ // Improves performance on low-end devices,
        target: 'map',
        layers: [
            new TileLayer({
                source: new XYZ({
                    attributions: '<span style="color: white;">Map tiles by Sir Chris via GDAL2Tiles</span>',
                    preload: 0, // Disable preloading to reduce memory usage and improve performance.
                    url: 'tiles/{z}/{x}/{y}.png',
                    tileGrid: new TileGrid({
                        extent: [0, -32768, 32768, 0], // The full extent of your map
                        origin: [0, 0], // Top-left corner
                        resolutions: [128, 64, 32, 16, 8, 4, 2, 1], // Resolutions for each zoom level
                        tileSize: [256, 256] // The size of your tiles
                    })
                })
            })
        ],
        view: new View({
            center: initialCenterOlCoords, // Use your calculated center
            resolution: 4, // Set a reasonable starting resolution from your new array
            minResolution: 0.1, // Corresponds to the most zoomed-in level
            maxResolution: 128, // Corresponds to the most zoomed-out level
            constrainResolution: true, // Snap to integer zoom levels
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

        if (feature) {
            // Get all properties from the feature, which includes details, place, region, etc.
            const featureData = feature.getProperties();

            if (featureData.details) {
                // Pass the entire data object to the flyout function
                showInfoFlyout(featureData);
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
 * @param {object} data - The details object from the clicked feature.
 */
function showInfoFlyout(data) {
    // The data object now contains everything, but the core info is in `details`.
    const details = data.details;
    if (!details) return;

    const flyout = document.getElementById('info-flyout');
    const title = document.getElementById('info-flyout-title');
    const content = document.getElementById('info-flyout-content');

    title.textContent = details.title;

    let imageHtml = '';
    let textHtml = '';

    // Image
    if (details.image) {
        imageHtml = `
            <div class="flyout-image-column">
                <div class="info-flyout-image-container">
                    <img src="${details.image}" alt="${details.title}">
                </div>
            </div>
        `;
    }

    // --- Build Text Column ---
    // Coordinates
    if (details.coordinates) {
        textHtml += `<p><strong>Coordinates:</strong> X: ${details.coordinates.x}, Y: ${details.coordinates.y}</p><hr>`;
    } else if (data.x !== undefined && data.y !== undefined) {
        // Fallback for markers where coordinates are at the top level of the details object
        textHtml += `<p><strong>Coordinates:</strong> X: ${data.x}, Y: ${data.y}</p><hr>`;
    }

    // Lore/Info
    if (data.place || data.region || details.lore) {
        textHtml += `<h4>Information</h4>`;
        if (data.place) {
            textHtml += `<p>${data.place}<br>`;
            if (data.region) {
                textHtml += `<em>Region: ${data.region}</em></p>`;
            } else {
                textHtml += `</p>`;
            }
        }
        if (details.lore) textHtml += `<p>${details.lore}</p>`;
    }

    // NPCs
    if (details.npcs && details.npcs.length > 0) {
        textHtml += '<h4>Key NPCs / Locations</h4><ul>';
        details.npcs.forEach(npc => {
            textHtml += `<li><strong>${npc.name}:</strong> ${npc.info}</li>`;
        });
        textHtml += '</ul>';
    }

    // Links
    if (details.links && details.links.length > 0) {
        textHtml += '<h4>External Links</h4><ul>';
        details.links.forEach(link => {
            textHtml += `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a></li>`;
        });
        textHtml += '</ul>';
    }

    // --- Combine and Render ---
    // If there's an image, wrap the text in its own column. Otherwise, the text can be standalone.
    let finalHtml;
    if (imageHtml) {
        finalHtml = `
            <div class="flyout-main-content">
                ${imageHtml}
                <div class="flyout-text-column">${textHtml}</div>
            </div>`;
    } else {
        finalHtml = `<div class="flyout-text-column">${textHtml}</div>`;
    }

    content.innerHTML = finalHtml;

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
 * @param {string} text - The label text.
 * @param {string} category - The label category (e.g., 'cities', 'landmarks').
 * @param {number} fontSize - The exact font size to render.
 * @param {Object} styleOptions - Custom styling options
 * @returns {Style} The style object for the label
 */
function createLabelImageStyle(text, category, fontSize) {
    // Create a cache key to avoid re-creating the same style
    const cacheKey = `label-${category}-${text}-${fontSize}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }
    const options = { ...defaultLabelStyle, ...(labelStyles[category] || {}) };
    const finalFontSize = fontSize;
    
    // Create an offscreen canvas to render the text
    const canvas = document.createElement('canvas');
    // Set canvas context
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
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
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
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
    const imageUrl = canvas.toDataURL();
    
    // Create style with icon
    const style = new Style({
        image: new Icon({
            src: imageUrl,
            anchor: [0.5, 1],
            anchorXUnits: 'fraction',
            anchorYUnits: 'fraction',
            scale: 1
        })
    });

    styleCache[cacheKey] = style;
    return style;
}

/**
 * Creates a marker style with a colored circular background and a white foreground icon.
 * This replicates the look of modern map markers and combines them into a single canvas
 * so they scale together.
 * @param {string} markerType - Type of marker, corresponding to a key in `markerStyles`.
 * @returns {Style} A single OpenLayers style object.
 */
function createMarkerStyle(markerType) {
    const cacheKey = `marker-v2-${markerType}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

    const styleProps = markerStyles[markerType] || {
        icon: 'icons/info.svg',
        color: '#FF0000' // A fallback color
    };

    // --- 1. Define Marker and Canvas Sizes ---
    const backgroundDiameter = 44; // Increased from 36 for better visibility/touch
    const iconSize = backgroundDiameter * 0.8;
    const border = 3;
    const shadowBlur = 4;
    const shadowOffsetY = 3;

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
    const newStyle = new Style({
        image: new Icon({
            img: finalCanvas,
            imgSize: [canvasSize, canvasSize],
            scale: 1.0, 
        })
    });

    // --- 6. Cache and return ---
    styleCache[cacheKey] = newStyle;
    return newStyle;
}

function createUIMarkerIcon(markerType) {
    const cacheKey = `ui-marker-v1-${markerType}`;
    if (styleCache[cacheKey]) {
        return styleCache[cacheKey];
    }

    const styleProps = markerStyles[markerType] || {
        icon: 'icons/info.svg',
        color: '#FF0000'
    };

    // --- 1. Define Larger Marker and Canvas Sizes for UI ---
    const backgroundDiameter = 48; // Reduced from 90 for ~50px size
    const iconSize = backgroundDiameter * 0.7;
    const border = 3; // Scaled down border
    const shadowBlur = 4; // Scaled down shadow
    const shadowOffsetY = 3; // Scaled down shadow

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

    ctx.fillStyle = styleProps.color;
    ctx.beginPath();
    ctx.arc(center, center - (shadowOffsetY / 2), backgroundDiameter / 2, 0, 2 * Math.PI);
    ctx.fill();

    // --- 4. Draw Border and Icon ---
    ctx.shadowColor = 'transparent';

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.lineWidth = border;
    ctx.stroke();

    const foregroundIconImage = markerImageCache[markerType];
    if (foregroundIconImage) {
        const iconX = center - (iconSize / 2);
        const iconY = center - (iconSize / 2) - (shadowOffsetY / 2);
        ctx.drawImage(foregroundIconImage, iconX, iconY, iconSize, iconSize);
    }

    // --- 5. Cache and return the canvas itself ---
    styleCache[cacheKey] = finalCanvas;
    return finalCanvas;
}

/**
 * Add a single marker to the map
 * @param {VectorSource} source - Vector source
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} type - Marker type
 * @param {string} tooltip - Tooltip text
 * @param {object} [details] - Optional details object for the info flyout.
 * @param {string} [place] - The place name for the marker.
 * @param {string} [region] - The region name for the marker.
 */
function addMarkerFeature(source, x, y, type, tooltip, details, place, region) {
    const mapSize = 32768;
    const scaleFactor = mapSize / 4096;
    const offset = scaleFactor / 2;
        // Scale coordinates for the new map size and convert to OpenLayers coordinate system (y is inverted)
    // Add the offset to place the anchor in the center of the scaled pixel block
    const scaledX = x * scaleFactor + offset;
    const olY = -(y * scaleFactor) - offset;
    const coordinates = [scaledX, olY];
    
    // Create a feature for the marker
    const feature = new Feature({
        geometry: new Point(coordinates),
        type: type,
        tooltip: tooltip,
        details: details, // The details object is nested here
        place: place,
        region: region
    });

    // Add the feature to the source
    source.addFeature(feature);
}

/**
 * Add map markers by category
 * @param {Map} map - The OpenLayers map
 */
function addMapMarkers(map) {
    const categories = Object.keys(mapMarkers); // Get all marker categories
    
    // Create a layer for each category
    categories.forEach(category => {
        // Create vector source for this category
        const markerSource = new VectorSource();
        
        // Create vector layer for this category
        const markerLayer = new VectorLayer({
            source: markerSource,
            title: category + ' Markers',
            visible: true, // Set to 0 to ensure markers are always visible when zoomed in.
            style: function(feature, resolution) {
                const type = feature.get('type');
                const style = createMarkerStyle(type);

                // Resolutions are [128, 64, 32, 16, 8, 4, 2, 1].
                // Zoom 7 is resolution 1. Zoom 8 is resolution 0.5.
                // We want 100% scale at zoom 8 (resolution 0.5) and below.
                // We want 75% scale at zoom 7 (resolution 1).
                // We want 65% scale at zoom 6 (resolution 2) and above.
                style.getImage().setScale(resolution < 1 ? 1.0 : (resolution < 2 ? 0.85 : 0.65));

                return style;
            }
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
                    marker.details.coordinates.x,
                    marker.details.coordinates.y,
                    marker.type,
                    marker.tooltip,
                    marker.details, // Pass the whole details object
                    marker.place,
                    marker.region
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
 * Add a single label to the map
 * @param {VectorSource} source - Vector source to add the label to
 * @param {number} x - X coordinate
 * @param {number} y - Y coordinate
 * @param {string} text - Label text
 * @param {number} fontSize - Font size in pixels
 * @param {string} category - Label category name
 * @param {object} [details] - Optional details object for the info flyout.
 */
function addLabelFeature(source, x, y, text, fontSize, category, details) {
    const mapSize = 32768;
    const scaleFactor = mapSize / 4096;
    const offset = scaleFactor / 2; // Half of the scale factor to center the label

    // Scale coordinates for the new map size and convert to OpenLayers coordinate system (y is inverted)
    // Add the offset to place the anchor in the center of the scaled pixel block
    const scaledX = x * scaleFactor + offset;
    const olY = -(y * scaleFactor) - offset;
    
    // Create a point feature at this location
    const feature = new Feature({
        geometry: new Point([scaledX, olY]),
        name: text,
        baseFontSize: fontSize,
        category: category,
        details: details
    });
    
    // Add a tooltip for specific label categories that use a special font.
    if (category === 'islands' || category === 'cities' || category === 'landmarks') {
        feature.set('labelTooltip', text);
    }

    // Since all labels are now dynamic, we just store the base font size.
    // The style will be calculated by the layer's style function.
    feature.set('baseFontSize', fontSize);

    // Add the feature to the provided source
    source.addFeature(feature);
}
/**
 * Add all map labels
 * @param {Map} map - The OpenLayers map object
 */
function addMapLabels(map) {
    // Get all category names from mapLabels object
    const categories = Object.keys(mapLabels);
    
    // Create a label layer for each category
    categories.forEach(category => {
        // Create vector source for this category
        const labelSource = new VectorSource();

        const layerOptions = {
            source: labelSource,
            title: category + ' Labels',
            visible: true,
            /* Performance: Hide less critical labels when zoomed out to reduce rendering load.
            Resolutions correspond to zoom levels. 32 is zoom level 2.            
            we can set a buffer. This tells the layer not to render features
            that are outside the viewport. A value of 100 pixels is a good starting point. */
            renderBuffer: 100,
            // All label categories are now dynamic. They are always visible, and their
            // font size changes with zoom level, so we use a style function.
            style: function(feature, resolution) {
                const text = feature.get('name');
                const category = feature.get('category');
                const baseFontSize = feature.get('baseFontSize');
                
                 // This should not happen, but as a safeguard
                if (!baseFontSize) return null;

                // This formula creates a smooth scaling effect for fonts across all zoom levels.
                // It avoids the "jumpiness" caused by having a hard cutoff for different resolutions.
                // The formula is equivalent to: scaleFactor = (2 / resolution) ^ 0.415
                // At resolution=2 (high zoom), scaleFactor is 1.
                // At resolution=4, scaleFactor is 0.75.
                // At resolution=8, scaleFactor is 0.56.
                const scaleFactor = Math.pow(2 / resolution, 0.415);
                const newFontSize = Math.max(8, Math.round(baseFontSize * scaleFactor)); // Ensure font size doesn't get too small

                return createLabelImageStyle(text, category, newFontSize);
            }
        };

        // Create vector layer for this category
        const labelLayer = new VectorLayer(layerOptions);

        // Store the layer reference
        labelLayers[category] = labelLayer;

        // Add the layer to the map
        map.addLayer(labelLayer);

        // Add all labels in this category
        if (mapLabels[category] && mapLabels[category].length) {
            mapLabels[category].forEach((label) => {
                const coords = label.details.coordinates;

                // Check if coordinates is an array to support multiple locations for one label
                if (Array.isArray(coords)) {
                    coords.forEach((coord) => {
                        addLabelFeature(
                            labelSource, 
                            coord.x, 
                            coord.y, 
                            label.name, 
                            label.fontSize, 
                            category, 
                            label.details
                        );
                    });
                } else {

                    // Handle single coordinate object for backward compatibility
                    addLabelFeature(
                        labelSource, 
                        coords.x, 
                        coords.y, 
                        label.name, label.fontSize, category, label.details
                    );
                }
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
 * Set up tooltip interaction for markers
 * @param {Map} map - The OpenLayers map
 */
function setupMarkerTooltips(map) {
    // Create tooltip element if it doesn't exist
    if (!markerTooltipElement) {
        markerTooltipElement = document.createElement('div');
        markerTooltipElement.className = 'marker-tooltip';
        markerTooltipElement.style.display = 'none';
        document.body.appendChild(markerTooltipElement);
        
        // Create overlay for the tooltip
        markerTooltipOverlay = new Overlay({
            element: markerTooltipElement,
            offset: [10, 0],
            positioning: 'bottom-left'
        });
        
        map.addOverlay(markerTooltipOverlay);
    }
    
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
            markerTooltipElement.innerHTML = `
                <div class="tooltip-icon">
                    <img src="${style.icon}" alt="${markerType}" style="width: 20px; height: 20px; vertical-align: middle;">
                </div>
                <div class="tooltip-text">${markerTooltipText}</div>
            `;
            markerTooltipOverlay.setPosition(feature.getGeometry().getCoordinates());
            markerTooltipElement.style.display = 'flex';
            currentMap.getTargetElement().style.cursor = 'pointer';
        } else if (labelTooltipText) {
            markerTooltipElement.innerHTML = `<div class="tooltip-text">${labelTooltipText}</div>`;
            markerTooltipOverlay.setPosition(feature.getGeometry().getCoordinates());
            markerTooltipElement.style.display = 'flex';
            currentMap.getTargetElement().style.cursor = 'pointer';
        } else {
            markerTooltipElement.style.display = 'none';
            currentMap.getTargetElement().style.cursor = currentMap.hasFeatureAtPixel(evt.pixel) ? 'pointer' : '';
        }
    };
    
    map.on('pointermove', tooltipPointerMoveHandler);
    map.on('movestart', () => {
        if (markerTooltipElement) markerTooltipElement.style.display = 'none';
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
//     className: 'custom-mouse-position'osition'), // Keep using the sidebar's mouse-position div
//     undefinedHTML: 'X: --- | Y: ---'
// });
//
// // Add the control to the map
// map.addControl(mousePositionControl);

// And replace with this custom coordinate tracking:
function initializeCoordinateDisplay() {
    const mousePositionDiv = document.getElementById('mouse-position');
    const mapSize = 32768;
    const scaleFactor = mapSize / 4096;

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
                lastX = Math.round(coord[0] / scaleFactor);
                lastY = Math.round(-coord[1] / scaleFactor); // Invert Y coordinate and scale down
                updateDisplay();
            }
        });

        // Track pointer movement on the map
        map.on('pointermove', function(evt) {
            const coord = evt.coordinate;
            if (coord) {
                const newX = Math.round(coord[0] / scaleFactor);
                const newY = Math.round(-coord[1] / scaleFactor); // Invert Y coordinate and scale down
                if (newX !== lastX || newY !== lastY) {
                    lastX = newX;
                    lastY = newY;
                    updateDisplay();
                }
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