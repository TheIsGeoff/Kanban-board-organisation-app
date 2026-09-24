
// Get project data
function getBoardData() {

    // Too implement, getting data from local storage

    // Placeholder Data
    const placeholderData = {
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

                "color": "#803fa5",

                "text": "Make the app work or you will fail this class bro.",
                "date": "null"

            },
            {
                "id": "null2",
                "columnId": "OWoVTLOA5TW2",

                "color": "#803fa5",

                "text": "Implement Card Dragging",
                "date": "null"
            },
            {
                "id": "null24",
                "columnId": "OWoVTLOA5TW2",

                "color": "#803fa5",

                "text": "Load card and column data from JSON object",
                "date": "null"
            },
            {
                "id": "df",
                "columnId": "9vy1YP2hWgCq",

                "color": "#803fa5",

                "text": "Implement creation of new cards and columns",
                "date": "null"
            },
            {
                "id": "ddd8f",
                "columnId": "9vy1YP2hWgCq",

                "color": "#803fa5",

                "text": "Implement editing of cards and columns",
                "date": "null"
            },
            {
                "id": "dddd8f",
                "columnId": "9vy1YP2hWgCq",

                "color": "#803fa5",

                "text": "Data updating and saving",
                "date": "null"
            },
            {
                "id": "d3dd8f",
                "columnId": "9vy1YP2hWgCq",

                "color": "#803fa5",

                "text": "Save data on card drag",
                "date": "null"
            },
            {
                "id": "ddsf",
                "columnId": "OWoVTLOA5TW2",

                "color": "#803fa5",

                "text": "Fix dragging bug",
                "date": "null"
            },
            {
                "id": "6767",
                "columnId": "fzNENbuEzYi9",

                "color": "#803fa5",

                "text": "Allen we are SO Screwd",
                "date": "null"
            },
            {
                "id": "676754",
                "columnId": "fzNENbuEzYi9",

                "color": "#803fa5",

                "text": "Add card info chips",
                "date": "null"
            }
        ],

    };

    const templateData = {
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
            
        ],
    };

    return templateData;
}

function saveBoardData() {

    console.log("Saving data placeholder")

    updateColumnCounts()

    // To implement, saving data to local storage
}

function downloadBoardData() {

    saveBoardData(); // Update board date before downloading
    
    // To implement, downloading data to file

}