
function createCard(text, columnId) {

    var cardId = generateID();

    var card = {
        "id": cardId,
        "columnId": columnId,

        "text": text,
        "date": "null"

        // More data can be added here, such as card color, card tags, card description, etc.
    }

    projectFile.cards.push(card);

    saveBoardData();

    for (let i = 0; i < projectFile.cards.length; i++) {
        if (projectFile.cards[i].id == cardId) {
            generateCard(projectFile.cards[i]); // Generate and append card from card data at [i] in "cards": []
        }
    }
}