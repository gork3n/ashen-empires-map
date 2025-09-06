// Define all map labels organized by category
const mapLabels = {
    cities: [
        // Valinor Island Cities
        { x: 759, y: 80, name: "Valinor", fontSize: 24 },

        // Krythan Island Cities
        { x: 310, y: 825, name: "Jeel", fontSize: 24 },
        { x: 525, y: 1058, name: "Hothbra", fontSize: 24 },
        { x: 788, y: 1171, name: "Varg", fontSize: 24 },
        { x: 342, y: 1442, name: "New Korelth", fontSize: 18 },
        { x: 670, y: 1680, name: "Vrethpool", fontSize: 18 },


        //Scarab Island Cities


        // Werewolf Island Cities


        // Sand of Creation Cities


        // Mainland Cities

        
        //Tundra
        { x: 2793, y: 849, name: "Hammerfist", fontSize: 24 },
        { x: 3649, y: 935, name: "Duremar", fontSize: 24 },
        { x: 2822, y: 1254, name: "Farstead Keep", fontSize: 24 },
        
    
    ],
    
    islands: [
        //All Islands
        { x: 150, y: 70, name: "GM Island", fontSize: 30 },
        { x: 775, y: 581, name: "Lotor's Summer Palace", fontSize: 20 },
        { x: 981, y: 72, name: "Valinor Island", fontSize: 30 },
        { x: 421, y: 69, name: "Party Island", fontSize: 30 },
        { x: 1545, y: 556, name: "Prison Island", fontSize: 20 },
        { x: 137, y: 230, name: "Minotaur Island", fontSize: 30 },
        { x: 92, y: 942, name: "Guild Arena Island", fontSize: 18 },
        { x: 820, y: 2122, name: "Scorched Island", fontSize: 24 },
        { x: 1130, y: 3210, name: "Hell Island", fontSize: 30 },
        { x: 515, y: 640, name: "Mirthik's Island", fontSize: 14 },
        { x: 223, y: 425, name: "Deserted Island", fontSize: 14 },
        { x: 404, y: 1996, name: "Scarab Island", fontSize: 25 },
        
    ],
    
    dungeons: [
        // Dungeons and Lairs Here

        // Krythan Island Dungeons

        // Valinar Island Dungeons


    ],
    
    caves: [
        // Caves and Mines Here

        // Krythan Island Caves
        { x: 440, y: 761, name: "Mirthik's Cave", fontSize: 16 },
        // Add cave labels here
    ],
    
    interests: [
        // Krythan Island Places of Interest
        { x: 327, y: 742, name: "Jeel Snake Pit", fontSize: 14 },
        { x: 436, y: 857, name: "Cypt of Kargoth", fontSize: 14 },
        // Add interest labels here
    ],
    
    waterBodies: [
        { x: 1267, y: 1231, name: "Lake Silvest", fontSize: 13 },
        { x: 390, y: 1090, name: "Queen's Lake", fontSize: 14 },
        { x: 845, y: 1185, name: "Crow Lake", fontSize: 12 },
        // Add water body labels here
    ],
    
    mountains: [
        // { x: 567, y: 890, name: "Frost Peak", fontSize: 24 },
        // Add mountain labels here
    ]
};

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
    // Convert to OpenLayers coordinate system (y is inverted)
    var olY = 4096 - y;
    
    // Create a point feature at this location
    var feature = new ol.Feature({
        geometry: new ol.geom.Point([x, olY]),
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