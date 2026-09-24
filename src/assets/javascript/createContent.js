
// Create card function
function createCard(text, columnId, color) {

    var cardId = generateID();

    var card = {
        "id": cardId,
        "columnId": columnId,

        "color": color,

        "text": text,
        "date": "null"
        // More data can be added here, such as card color, card tags, card description, etc.
    }

    projectFile.cards.push(card);

    generateCard(card);

    onDomUpdated()

}

function createColumn(title) {

    var columnId = generateID();

    var column = {
        "id": columnId,
        "title": title,
    }

    projectFile.columns.push(column)

    generateColumn(column)

    onDomUpdated()

    columnCount ++;

}