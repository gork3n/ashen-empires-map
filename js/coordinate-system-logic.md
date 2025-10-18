# Coordinate System and Marker Placement Logic

This document outlines the core logic for handling coordinates and placing markers/labels on the map, as implemented in `js/map.js`.

## 1. Coordinate Systems

*   **In-Game Coordinates (Reference)**: While the native in-game coordinate system starts at `(0,0)`, our map implementation uses a `1-based` system for data entry to correct for a map stitching offset. Therefore, `(1,1)` is treated as the top-left corner for all marker and label data provided in the project files.
*   **OpenLayers Map Coordinates (Internal)**: The OpenLayers map, generated from `8x` scaled tiles, operates on a `32768x32768` pixel grid. Crucially, our specific tile setup results in an origin `(0,0)` at the **top-left, with Y-values increasing *upwards* (negative Y)**. This means our `olY` calculation needs to be negative.

## 2. Key Variables

*   `mapSize`: `32768` (The total pixel width/height of the OpenLayers map).
*   `scaleFactor`: `mapSize / 4096 = 8` (Each in-game pixel corresponds to an `8x8` pixel block on the OpenLayers map).

## 3. Marker and Label Placement (`addMarkerFeature`, `addLabelFeature`)

These functions convert your `1-based` in-game `(x, y)` coordinates into `OpenLayers` `(scaledX, olY)` coordinates for precise placement.

### Step 1: Convert to 0-Based Index

```javascript
const correctedX = x - 1;
let correctedY = y - 1;
```

Since the in-game coordinates are `1-based` (e.g., `X:1` is the first column), but array/pixel calculations are `0-based`, we subtract `1` from both `x` and `y` to get a `0-based` index for the pixel block.

### Step 2: Account for Missing Y-Coordinate Row (`Y: 2807`)

```javascript
if (y > 2807) {
    correctedY -= 1; // Shift up by 1 game pixel to account for the missing row
}
```

Because the `Y: 2807` row is physically missing from the map image, all subsequent rows are effectively shifted up by one game pixel. This conditional `correctedY -= 1` compensates for that physical shift, ensuring markers after `Y: 2807` are placed one game pixel higher than their raw `y - 1` calculation would suggest.

I had to do this because when stitching the map together with screenshots, it resulted in an inadvertent one-pixel overlap at the y-coordinate 2807.

### Step 3: Scale and Center within the Pixel Block

```javascript
const scaledX = (correctedX + 0.5) * scaleFactor;
const olY = -(correctedY + 0.5) * scaleFactor;
```

*   `(correctedX + 0.5)` and `(correctedY + 0.5)`: This is crucial for centering. Multiplying `correctedX` (a `0-based` index) by `scaleFactor` would give the top-left corner of the `8x8` pixel block. Adding `0.5` *before* multiplying by `scaleFactor` effectively shifts the coordinate to the *center* of that `8x8` block.
*   `-(...)`: The `olY` calculation is negated because OpenLayers' Y-axis increases upwards, while our in-game Y-axis (and visual representation) increases downwards.

## 4. Coordinate Display (`initializeCoordinateDisplay`)

This function converts the OpenLayers map coordinates (where the mouse pointer is) back into `1-based` in-game `(X, Y)` coordinates for display in the footer.

### Step 1: Convert from OpenLayers to 0-Based Game Coordinates

```javascript
const newX_0based = Math.floor(coord[0] / scaleFactor);
let newY_0based = Math.floor(-coord[1] / scaleFactor);
```

*   `coord[0] / scaleFactor`: Divides the OpenLayers X-coordinate by the `scaleFactor` to get a `0-based` game X-coordinate.
*   `-coord[1] / scaleFactor`: Divides the OpenLayers Y-coordinate (which is negative) by `scaleFactor` and negates it to get a `0-based` game Y-coordinate.
*   `Math.floor(...)`: This is vital. It ensures that any physical pixel within an `8x8` block on the map consistently maps to a single `0-based` game coordinate, preventing flickering.

### Step 2: Account for Missing Y-Coordinate Row (`Y: 2807`)

```javascript
if (newY_0based >= 2807) {
    newY_0based += 1;
}
```

Since the `Y: 2807` row is missing, any physical Y-coordinate on the map that *would have been* `2807` or higher is actually representing a coordinate one step further down in the game's logical sequence. This `newY_0based += 1` compensates for that, making the displayed Y-coordinate jump from `2806` to `2808` as you scroll past the missing row.

### Step 3: Convert to 1-Based Display Coordinates

```javascript
lastX = newX_0based + 1;
lastY = newY_0based + 1;
```

Finally, `1` is added to both `0-based` coordinates to convert them back to the `1-based` system that the game uses and that is expected for display. This means the top-leftmost `8x8` block on the map will correctly display as `X:1 | Y:1`.


Note:
It's very finicky trying to splice the screenshots together to get them pixel perfect. I'm not sure, but I might try to later add the whole y-coordinate of 2807 back. If and when I do that, we will just get rid of the logic we added to skip that y coordinate.  