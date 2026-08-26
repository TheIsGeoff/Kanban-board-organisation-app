

function generateColumn(columnContent) {

    var column = document.createElement('div')
    column.className = "app-column app-custom-column";
    column.id = columnContent.id;

    column.innerHTML = `                    
        <header class="app-column-header">
            <div class="column-header-right">
                <h2 class="column-title">` + columnContent.title + `</h2>
                <p class="column-card-count">0</p>
            </div>
            <div class="column-header-left">
                <button data-column-id="`+ columnContent.id + `" class="column-button button-group-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M19 12H5M5 12L12 19M5 12L12 5"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
                <span class="button-group-devider"></span>
                <button data-column-id="`+ columnContent.id + `" class="column-button button-group-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M5 12H19M19 12L12 5M19 12L12 19"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
            </div>
        </header>
        <div class="column-content-container" id="` + columnContent.id +`Content"></div>
        <div class="app-column-create-card">
            <textarea data-column-id="`+ columnContent.id + `" class="app-create-card-input" placeholder="Enter a title"></textarea>
            <div class="app-column-button-row">
                <button data-column-id="`+ columnContent.id + `" onclick="onAddCard(this)" class="app-generate-card-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    Add Card
                </button>
                <button data-column-id="`+ columnContent.id + `" onclick="closeAddCard(this)" class="app-close-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M18 6L6 18M6 6L18 18"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg>
                </button>
            </div>
        </div></div>
        <div class="app-column-footer">
            <button onclick="openAddCard(this)" data-column-id="`+ columnContent.id + `" class="app-create-card">
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
    card.id = "card-" + cardContent.id;
    card.innerHTML=`
        <div class="draggable-card" data-card-id="`+ cardContent.id + `">
            <div class="card-header">
                <button onclick="deleteCard(this)" data-card-id="`+ cardContent.id + `" class="card-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
                <button class="card-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">    <path        d="M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z"        stroke="currentColor"        stroke-width="2"        stroke-linecap="round"        stroke-linejoin="round"    /></svg></button>
            </div>
            <div class="card-content">
                <p>` + cardContent.text + `</p>
                <div class="app-card-menu-bar">
                    <div></div>
                </div>
            </div>
        </div>
    `;

    document.getElementById(cardContent.columnId + "Content").appendChild(card); // Append card to the relevent column

    console.log(document.getElementById(card.id).children[0].offsetHeight)

    document.getElementById(card.id).style.height = document.getElementById(card.id).children[0].offsetHeight + "px";

    dragElement(document.getElementById(card.id));
};