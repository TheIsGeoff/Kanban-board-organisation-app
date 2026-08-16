// Get column container
const columnContainer = document.getElementById("columns")

// Get the project name input
const projectName = document.getElementById("projectName")

// Define column width
var columnWidth = 300;

// create project file
var projectFile = { // Placeholder Data
    "title": "My Personal Board",
    "columns": [
        {
            "id": "9vy1YP2hWgCq",
            "title": "To Do"
        },
        {
            "id": "fzNENbuEzYi9",
            "title": "Doing"
        },
        {
            "id": "OWoVTLOA5TW2",
            "title": "Done"
        }
    ],
    "cards": [
        {
            "id": "nul2l",
            "columnId": "9vy1YP2hWgCq",

            "text": "Make the app work or you will fail this class bro.",
            "date": "null"

        },
        {
            "id": "null2",
            "columnId": "OWoVTLOA5TW2",

            "text": "Implement Card Dragging",
            "date": "null"
        },
        {
            "id": "null24",
            "columnId": "OWoVTLOA5TW2",

            "text": "Load card and column data from JSON object",
            "date": "null"
        },
        {
            "id": "df",
            "columnId": "9vy1YP2hWgCq",

            "text": "Implement creation of new cards and columns",
            "date": "null"
        },
        {
            "id": "ddd8f",
            "columnId": "9vy1YP2hWgCq",

            "text": "Implement editing of cards and columns",
            "date": "null"
        },
        {
            "id": "dddd8f",
            "columnId": "9vy1YP2hWgCq",

            "text": "Data updating and saving",
            "date": "null"
        },
        {
            "id": "d3dd8f",
            "columnId": "9vy1YP2hWgCq",

            "text": "Save data on card drag",
            "date": "null"
        },
        {
            "id": "ddsf",
            "columnId": "OWoVTLOA5TW2",

            "text": "Fix dragging bug",
            "date": "null"
        },
        {
            "id": "6767",
            "columnId": "fzNENbuEzYi9",

            "text": "Allen we are SO Screwd",
            "date": "null"
        },
        {
            "id": "676754",
            "columnId": "fzNENbuEzYi9",

            "text": "Add card info chips",
            "date": "null"
        }
    ],

};

var columnCount = projectFile.columns.length;

// Once page loaded
window.addEventListener('load', function() {

    // Clear all columns
    columnContainer.innerHTML = "";

    // Load the project files name into the name input
    projectName.value = projectFile.title;

    // Load columns from file
    for (let i = 0; i < columnCount; i++) {
        generateColumn(projectFile.columns[i])
    }
    
    // Load cards from file
    for (let i = 0; i < projectFile.cards.length; i++) {
        generateCard(projectFile.cards[i]); // Generate and append card from card data at [i] in "cards": []
    }
})