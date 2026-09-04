
// Generate ID
function generateID() {

    var result = '';
    var IDLength = 12;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for ( var i = 0; i < IDLength; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

// Update column counts
function updateColumnCounts() {

    // Get all columns, count the number of cards and update the task count.
    const columns = document.getElementsByClassName('app-custom-column');

    for (var i = 0; i < columns.length; i++) {
        var columnContent = columns[i].getElementsByClassName('column-content-container')[0];
        var cardCount = columnContent.getElementsByClassName('app-card').length;
        var columnCountDisplay = columns[i].getElementsByClassName('column-card-count')[0]

        columnCountDisplay.innerHTML = cardCount;
    }
}

// Called when a change is made to the dom
function onDomUpdated() {
    saveBoardData();
    updateColumnCounts()
}