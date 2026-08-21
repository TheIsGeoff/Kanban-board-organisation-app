function openAddCard(element) {

    const column = document.getElementById(element.getAttribute("data-column-id"));
    const createContainer = column.getElementsByClassName("app-column-create-card")[0];
    const columnFooter = column.getElementsByClassName("app-column-footer")[0];

    var createContainers = document.getElementsByClassName("app-column-create-card");

    createContainer.style.display = "block";
    columnFooter.style.display = "none";

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