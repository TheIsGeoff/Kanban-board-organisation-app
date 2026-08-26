function deleteCard(element) {

    const deleteCardID = element.getAttribute("data-card-id");
    const cardElement = document.getElementById("card-" + deleteCardID);

    cardElement.parentNode.removeChild(cardElement);

    for(var i = 0; i < projectFile.cards.length; i++) {

        if( projectFile.cards[i].id == deleteCardID) {

            delete projectFile.cards[i];
            projectFile.cards.splice(i,1);  
        }
    }

    console.log(JSON.stringify(projectFile.cards))

    updateColumnCounts()

    saveBoardData

}

function openEditCard() {

}