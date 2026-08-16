// Get column container
const columnContainer = document.getElementById("columns")

// Get the project name input
const projectName = document.getElementById("projectName")

// Define column width
var columnWidth = 300;

// create project file
var projectFile = {}

var columnCount = 0;

// Once page loaded
window.addEventListener('load', function() {

    projectFile = getBoardData(); // Get project data

    columnCount = projectFile.columns.length;

    console.log(projectFile); // Log project data to console

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