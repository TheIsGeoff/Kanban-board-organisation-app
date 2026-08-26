function openAddCard(element) {

    const column = document.getElementById(element.getAttribute("data-column-id"));
    const createContainer = column.getElementsByClassName("app-column-create-card")[0];
    const columnFooter = column.getElementsByClassName("app-column-footer")[0];

    var createContainers = document.getElementsByClassName("app-column-create-card");
    var columnFooters = document.getElementsByClassName("app-column-footer");

    for(var i = 0; i < createContainers.length; i++) {
        createContainers[i].style.display = "none";
        columnFooters[i].style.display = "flex";
    }

    createContainer.style.display = "block";
    columnFooter.style.display = "none";

    createContainer.getElementsByClassName("app-create-card-input")[0].value = "";
    createContainer.getElementsByClassName("app-create-card-input")[0].focus();
}

function closeAddCard(element) {
    const column = document.getElementById(element.getAttribute("data-column-id"));
    const createContainer = column.getElementsByClassName("app-column-create-card")[0];
    const columnFooter = column.getElementsByClassName("app-column-footer")[0];

    createContainer.style.display = "none";
    columnFooter.style.display = "flex";
}

function onAddCard(element) {

    console.log(element.parentElement.parentElement)

    const columnId = element.getAttribute("data-column-id");
    const column = document.getElementById(element.getAttribute("data-column-id"));

    const createContainer = column.getElementsByClassName("app-column-create-card")[0];
    const columnFooter = column.getElementsByClassName("app-column-footer")[0];

    var text = createContainer.getElementsByClassName("app-create-card-input")[0].value;
    createContainer.getElementsByClassName("app-create-card-input")[0].value = "";

    if (text != "") {
        createCard(text, columnId)

        createContainer.style.display = "none";
        columnFooter.style.display = "flex";

    }
}

// Create cards on ENTER
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if(document.activeElement.classList.contains("app-create-card-input")) {

            event.preventDefault()

            onAddCard(document.activeElement)
        };
    }
});