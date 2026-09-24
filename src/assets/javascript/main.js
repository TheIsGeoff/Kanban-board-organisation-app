// Get column container and project name input
const columnContainer = document.getElementById("columns");
const projectNameInput = document.getElementById("projectName");

const addColumnBtn = document.getElementById("createColumn");

var columnWidth = 300;
var projectFile = {} 
var columnCount = 0;

window.addEventListener('load', function() {
    loadPageContent(); 
});

function loadPageContent() {

    projectFile = getBoardData();
    columnCount = projectFile.columns.length;

    columnContainer.innerHTML = "";

    projectNameInput.value = projectFile.title;

    // Load columns from file
    for (let i = 0; i < columnCount; i++) {
        generateColumn(projectFile.columns[i])
    }
    
    // Load cards from file
    for (let i = 0; i < projectFile.cards.length; i++) {
        generateCard(projectFile.cards[i]);
    }

    updateColumnCounts()
}

addColumnBtn.addEventListener("click", function (e) {
    createColumn("Another one");
});