

function generateColumn(columnContent) {

    var column = document.createElement('div')
    column.className = "app-column app-custom-column";
    column.id = columnContent.id;

    column.innerHTML = `                    
        <header class="app-column-header">
            <h2 class="column-title">` + columnContent.title + `</h2>
            <div class="column-header-left">
                <button data-column-id="`+ columnContent.id + `" class="column-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M19 12H5M5 12L12 19M5 12L12 5"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
                <button data-column-id="`+ columnContent.id + `" class="column-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M5 12H19M19 12L12 5M19 12L12 19"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
            </div>
        </header>
        <div class="column-content-container" id="` + columnContent.id +`Content"></div>
        <div class="app-column-footer">
            <button data-column-id="`+ columnContent.id + `" class="app-create-card">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                Add Card
            </button>
            <button data-column-id="`+ columnContent.id + `" class="column-button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    />    <path        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    />    <path        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
        </div>
    `

    columnContainer.appendChild(column)
    
};

function generateCard(cardContent) {
    
    var card = document.createElement('div') // Create the card element and store in var "card"
    card.className = "app-card"; // Append class names to card
    card.id = cardContent.id + "Card";
    card.innerHTML=`
        <div class="draggable-card" data-card-id="`+ cardContent.id + `">
            <p>` + cardContent.text + `</p>
            <div class="app-card-menu-bar">
                <div><div class="app-card-chip app-card-chip-date">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg>
                    13 Aug
                </div></div>
                <button class="app-card-edit-button data-card-id="`+ cardContent.id + `"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    />    <path        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    />    <path        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
            </div>
        </div>
    `;

    document.getElementById(cardContent.columnId + "Content").appendChild(card); // Append card to the relevent column

    console.log(document.getElementById(card.id).children[0].offsetHeight)

    document.getElementById(card.id).style.height = document.getElementById(card.id).children[0].offsetHeight + "px";

    dragElement(document.getElementById(card.id));
};