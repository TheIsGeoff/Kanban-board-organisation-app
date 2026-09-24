// When the create card UI is opened
function openAddCard(element) {

    const activeColumn = document.getElementById(element.getAttribute("data-column-id"));
    const createUiContainer = activeColumn.getElementsByClassName("app-column-create-card")[0];
    const activeColumnFooter = activeColumn.getElementsByClassName("app-column-footer")[0];

    const createContainers = document.getElementsByClassName("app-column-create-card");
    const columnFooters = document.getElementsByClassName("app-column-footer");

    for(var i = 0; i < createContainers.length; i++) {
        createContainers[i].style.display = "none";
        columnFooters[i].style.display = "flex";
    }

    const createUiInput = createUiContainer.getElementsByClassName("app-create-card-input")[0];

    createUiContainer.style.display = "block";
    activeColumnFooter.style.display = "none";

    createUiInput.value = "";
    createUiInput.focus();
}

// When the create card UI is closed
function closeAddCard(element) {

    const activeColumn = document.getElementById(element.getAttribute("data-column-id"));
    const createContainer = activeColumn.getElementsByClassName("app-column-create-card")[0];
    const activeColumnFooter = activeColumn.getElementsByClassName("app-column-footer")[0];

    createContainer.style.display = "none";
    activeColumnFooter.style.display = "flex";
}

// When the add card button is pressed.
function onAddCard(element) {

    const columnId = element.getAttribute("data-column-id");
    const column = document.getElementById(element.getAttribute("data-column-id"));

    const createContainer = column.getElementsByClassName("app-column-create-card")[0];
    const columnFooter = column.getElementsByClassName("app-column-footer")[0];

    const createUiInput = createContainer.getElementsByClassName("app-create-card-input")[0];

    var text = createUiInput.value;
    createUiInput.value = "";

    if (text != "") {
        
        createCard(text, columnId, "#d67040")

        createContainer.style.display = "none";
        columnFooter.style.display = "flex";
    }
}

// Create cards on ENTER when a card input is in focus.
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && document.activeElement.classList.contains("app-create-card-input")) {

        event.preventDefault()
        onAddCard(document.activeElement)
    }
});