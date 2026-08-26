// Get column container and project name input
const columnContainer = document.getElementById("columns")
const projectName = document.getElementById("projectName")

// Define column width px
var columnWidth = 300;

// create project file
var projectFile = {} 

// Number of columns
var columnCount = 0;

// Once page loaded
window.addEventListener('load', function() { loadPageContent(); })

// Refreshes the page content with the current project file data
function loadPageContent() {

    projectFile = getBoardData(); // Get project data
    columnCount = projectFile.columns.length; // Get column count

    columnContainer.innerHTML = ""; // Clear all previous columns

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

    updateColumnCounts()
}