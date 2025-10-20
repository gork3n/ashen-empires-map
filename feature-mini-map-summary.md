# Feature Summary: Interactive Mini-Map in Flyout

This document outlines the implementation of an interactive map preview inside the information flyout panel.

## 1. Objective

For markers that link between the overworld and underground maps (e.g., "Grell Entrance"), the goal is to replace the static image in the flyout panel with a live, **interactive** mini-map. This map is centered on the destination coordinates and has a "Go to location" button overlaid on it. Clicking this button switches the main map's view to the destination and closes the flyout panel.

---

## 2. JavaScript Changes (`js/map.js`)

The core logic resides in `js/map.js`. The key is to dynamically create and destroy a secondary OpenLayers map instance within the flyout and to initialize it only after the flyout's slide-in animation is complete.

### Global Variable

A new global variable is needed to hold the reference to the mini-map instance so it can be properly destroyed later.

```javascript
let flyoutMapInstance = null; // To hold the mini-map instance
```

### `showInfoFlyout(data)` Function

This function is the entry point. It conditionally renders the mini-map container and uses `requestAnimationFrame` for reliable initialization timing.

```javascript
function showInfoFlyout(data) {
    // ... (get flyout element) ...
    const mainMapView = map.getView(); // Capture the main map's view.

    // If flyout is already open, hide it first, then show the new one.
    // ...
    populateAndShowFlyout(data, mainMapView);
}

function populateAndShowFlyout(data, mainMapView) {
    // ... (get details, title, content elements) ...

    // Ensure any previous mini-map is destroyed.
    destroyFlyoutMap();

    // --- Conditionally Render Mini-Map ---
    if (details.switchTo && details.flyTo) {
        // For map-switching markers, show a mini-map preview.
        imageHtml = `
            <div class="flyout-image-column">
                <div class="flyout-map-preview-container ${details.switchTo}-preview">
                    <div id="flyout-minimap" class="flyout-minimap"></div>
                    <button id="flyout-go-btn" class="flyout-go-btn" title="Go to location"></button>
                </div>
            </div>
        `;
    }
    // ... (build and render final HTML) ...

    // --- Initialize Mini-Map After Transition ---
    if (details.switchTo && details.flyTo) {
        // Use requestAnimationFrame for reliable initialization after the DOM is updated.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => { // A second frame ensures rendering is complete.
                initializeFlyoutMap(details.switchTo, details.flyTo, mainMapView);
                // ... (add event listener to goButton) ...
            });
        });

        const goButton = document.getElementById('flyout-go-btn');
        if (goButton) {
            goButton.addEventListener('click', () => {
                switchMap(details.switchTo, details.flyTo);
                hideInfoFlyout(); // Close the flyout after clicking
            });
        }
    }

    flyout.classList.add('visible');
}
```

### `hideInfoFlyout()` Function

This function must be updated to clean up the mini-map instance.

```javascript
function hideInfoFlyout() {
    const flyout = document.getElementById('info-flyout');
    destroyFlyoutMap(); // Clean up the mini-map when hiding
    flyout.classList.remove('visible');
    // ... (reset fullscreen state) ...
}
```

### New Helper Functions

Two new functions are required to manage the mini-map's lifecycle.

1.  **`initializeFlyoutMap(targetMap, flyToCoords)`**: Creates the new `Map` instance, using the correct tile *source* from the main map's layers to ensure it's visible. It also adds a pin marker at the destination.
2.  **`destroyFlyoutMap()`**: Properly disposes of the `flyoutMapInstance` to prevent memory leaks.

---

## 3. CSS Changes (`css/map-styles.css`)

New styles are needed for the map container and the overlaid button.

```css
/* --- Flyout Map Preview Styles --- */
.flyout-map-preview-container { /* Wraps the map and button */ }
.flyout-minimap { /* The div where the map renders */ }
.flyout-go-btn { /* The floating action button */ }
.flyout-go-btn::before { /* The arrow icon for the button */ }
```

---

## 4. New Image Assets

Two new SVG icons are required in the `/icons/` directory:
1.  `icons/location-pin.svg`: A pin icon to mark the destination on the mini-map.
2.  `icons/double-arrow.svg`: An arrow icon for the "Go to location" button.
