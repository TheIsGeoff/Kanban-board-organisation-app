
// Generate ID
function generateID() {

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Update column counts
function updateColumnCounts() {

    // Get all columns, count the number of cards and update the task count.
    var columns = document.getElementsByClassName('app-custom-column');

    for (var i = 0; i < columns.length; i++) {
        var columnContent = columns[i].getElementsByClassName('column-content-container')[0];
        var cardCount = columnContent.getElementsByClassName('app-card').length;
        columns[i].getElementsByClassName('column-card-count')[0].innerHTML = cardCount;
    }
}