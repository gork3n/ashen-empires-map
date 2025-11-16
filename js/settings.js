/**
 * This file contains configuration settings for development purposes.
 * Toggling these flags allows developers to enable or disable specific
 * debugging tools without modifying the main application code.
 */

export const devSettings = {
  // Set to true to show a grid overlay and a center crosshair on the map.
  // These should be false for production or normal viewing.
  showDevGrid: false,      // Toggles the 8x8 pixel grid.
  showDevCrosshair: false, // Toggles the mouse-following crosshair.
  devGridColor: 'rgba(0, 183, 255, 0.3)',      // Color of the grid lines.
  devCrosshairColor: 'rgba(255, 0, 0, 0.5)', // Color of the crosshair lines.
};