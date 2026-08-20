
// Create card function
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

    generateCard(card);
}

function createColumn(title) {

    var columnId = generateID();

    var column = {
        "id": columnId,
        "title": title,
    }

    projectFile.columns.push(column)

    
    saveBoardData();

    generateColumn(column)

}