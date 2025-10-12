# Feature Summary: Interactive Mini-Map in Flyout

This document outlines the complete set of changes required to implement an interactive map preview inside the information flyout panel.

## 1. Objective

For markers that link between the overworld and underground maps (e.g., "Grell Entrance"), the goal is to replace the static image in the flyout panel with a live, non-interactive mini-map. This map will be centered on the destination coordinates and will have a "Go to location" button overlaid on it. Clicking this button will switch the main map's view to the destination and close the flyout panel.

---

## 2. JavaScript Changes (`js/map.js`)

The core logic resides in `js/map.js`. The key is to dynamically create and destroy a secondary OpenLayers map instance within the flyout and to initialize it only after the flyout's slide-in animation is complete.

### Global Variable

A new global variable is needed to hold the reference to the mini-map instance so it can be properly destroyed later.

```javascript
let flyoutMapInstance = null; // To hold the mini-map instance
```

### `showInfoFlyout(data)` Function

This function needs to be `async` and must be modified to conditionally render the mini-map container.

```javascript
async function showInfoFlyout(data) {
    // ... (get details, flyout, title, content elements) ...

    // First, ensure any previous mini-map is destroyed
    destroyFlyoutMap();

    // ... (set title) ...

    let imageHtml = '';
    // ...

    // --- Conditionally Render Mini-Map ---
    if (details.switchTo && details.flyTo) {
        // For map-switching markers, show a mini-map preview.
        imageHtml = `
            <div class="flyout-image-column">
                <div class="flyout-map-preview-container">
                    <div id="flyout-minimap" class="flyout-minimap"></div>
                    <button id="flyout-go-btn" class="flyout-go-btn" title="Go to location"></button>
                </div>
            </div>
        `;
    } else if (details.image) {
        // For regular markers, show the static image.
        imageHtml = `...`;
    }

    // ... (build textHtml and finalHtml) ...

    content.innerHTML = finalHtml;
    flyout.classList.add('visible');

    // --- Initialize Mini-Map After Transition ---
    if (details.switchTo && details.flyTo) {
        // The map must be initialized AFTER the flyout's transition ends,
        // so that OpenLayers can correctly calculate the size of the map div.
        const onTransitionEnd = () => {
            initializeFlyoutMap(details.switchTo, details.flyTo);
            flyout.removeEventListener('transitionend', onTransitionEnd);
        };
        flyout.addEventListener('transitionend', onTransitionEnd, { once: true });

        const goButton = document.getElementById('flyout-go-btn');
        if (goButton) {
            goButton.addEventListener('click', () => {
                switchMap(details.switchTo, details.flyTo);
                hideInfoFlyout(); // Close the flyout after clicking
            });
        }
    }
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

