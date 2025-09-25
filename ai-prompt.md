# AI Prompting Guidelines

When generating or modifying JavaScript code for this project, please adhere to the following modern JavaScript standards and project conventions:

## JavaScript Standards

-   **Variable Declarations**: Use `const` for variables that will not be reassigned. Use `let` for variables that will be reassigned. Avoid using `var`.
-   **Arrow Functions**: Prefer arrow functions (`=>`) over traditional `function` expressions, especially for callbacks and anonymous functions, to maintain lexical `this` scoping.
-   **Promises**: Use `async/await` for handling asynchronous operations instead of `.then()` and `.catch()` chains for better readability.
-   **Template Literals**: Use template literals (`` ` ``) for string concatenation, especially for multi-line strings or strings with embedded expressions.
-   **Modularity**: While the project currently uses a global script-tag-based approach, write new functions to be as self-contained as possible to facilitate a future migration to ES6 modules.
-   **Code Clarity**: Prioritize clear, readable, and well-documented code. Add JSDoc comments to new functions explaining their purpose, parameters, and return values.

## Project Conventions

-   **Data-Driven Design**: Continue to follow the established pattern of separating data (e.g., `labels.js`, `markers.js`) from logic (`map.js`, `filter-menu.js`).
-   **DOM Manipulation**: When creating new UI elements, use modern DOM APIs. When adding event listeners, use `element.addEventListener()`.
-   **Styling**: Keep all styling within the `.css` files. Avoid inline styles in JavaScript unless absolutely necessary for dynamic properties (e.g., canvas rendering, element positioning).
-   **OpenLayers API**: Utilize the current OpenLayers API best practices.