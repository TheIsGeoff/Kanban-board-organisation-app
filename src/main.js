// Get column container
const columnContainer = document.getElementById("columns")

// Get the project name input
const projectName = document.getElementById("projectName")

var columnWidth = 300;

// create project file
var projectFile = {
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
    
    for (let i = 0; i < projectFile.cards.length; i++) {
        generateCard(projectFile.cards[i]); // Generate and append card from card data at [i] in "cards": []
    }
})

// Generate ID
function generateID() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Drag element
function dragElement(element) {

    var mouseX = 0, mouseY = 0, newX = 0, newY = 0;
    var elementChild = element.children[0];
    
    elementChild.onmousedown = dragMouseDown;

    function dragMouseDown() {

        var e = e || window.event;
        e.preventDefault();

        mouseX = e.clientX;
        mouseY = e.clientY;

        elementChild.style.cursor = "grabbing"

        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag() {
        var e = e || window.event;
        e.preventDefault();

        newX = mouseX - e.clientX;
        newY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        var columnSnap = 0 // Detect which column to put card in

        var columnPoz = columnContainer.getBoundingClientRect(); // Detect column scroll

        if (Math.ceil((e.clientX - columnPoz.left) / columnWidth) > columnCount) {
            columnSnap = 0 // Set column snap to zero if it exeeds number of real columns
        } else {
            columnSnap = Math.ceil((e.clientX / columnWidth))

            var activeColumn = document.getElementById(projectFile.columns[columnSnap - 1].id + "Content");

            var snapHeight = activeColumn.getBoundingClientRect().top;

            var snapLocation = 0;

            for (const child of activeColumn.children) {

                if ( snapHeight + child.offsetHeight > e.clientY) {

                    console.log(snapLocation)

                } else {
                    snapHeight = snapHeight + child.offsetHeight + 6;
                    snapLocation = snapLocation + 1;

                }

            }

            console.log(snapHeight + ", " + e.clientY + ", " + snapLocation)

            console.log(activeColumn.children.length)
                
            if (snapLocation >= activeColumn.children.length) {
                snapLocation = snapLocation - 1;
            }

            activeColumn.prepend(element)
            
            if (activeColumn.children[snapLocation]) {
                activeColumn.children[snapLocation].after(element)
            }

            // Find column in json data
            for (var i = 0; i < projectFile.cards.length; i++) {
                if (projectFile.cards[i].id = element.id) {

                    // Update cards parent column ID                
                    projectFile.cards[i].columnId = activeColumn.parentElement.id;
                    console.log(projectFile.cards[i].columnId)
                    
                }
            }
        }

        // Update location
        elementChild.style.top = (elementChild.offsetTop - newY) + "px";
        elementChild.style.left = (elementChild.offsetLeft - newX) + "px";
        elementChild.style.transform = "rotate(2deg)";
        elementChild.style.zIndex = "999";
        elementChild.style.cursor = "grabbing";
        elementChild.style.boxShadow = "2px 8px 16px #0000001b";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        // Reset styles and return to the box
        elementChild.style.top = "";
        elementChild.style.left = "";
        elementChild.style.transform = "";
        elementChild.style.zIndex = ""
        elementChild.style.cursor = ""
        elementChild.style.boxShadow = ""
    }
}