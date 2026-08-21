
// Drag card element
function dragElement(element) {

    var mouseX = 0, mouseY = 0, newX = 0, newY = 0;
    var elementChild = element.children[0];
    
    elementChild.onmousedown = dragMouseDown;

    function dragMouseDown() {

        var e = e || window.event;
        e.preventDefault();

        mouseX = e.clientX;
        mouseY = e.clientY;

        elementChild.style.cursor = "grabbing"

        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag() {
        var e = e || window.event;
        e.preventDefault();

        newX = mouseX - e.clientX;
        newY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        var columnSnap = 0 // Detect which column to put card in

        var columnPoz = columnContainer.getBoundingClientRect(); // Detect column scroll

        console.log(columnPoz.left + " " + e.clientX)

        if (Math.ceil(((e.clientX - columnPoz.left) / columnWidth) > columnCount)) {
            columnSnap = 0 // Set column snap to zero if it exeeds number of real columns
        } else {
            columnSnap = Math.ceil(((e.clientX - columnPoz.left) / columnWidth))

            var activeColumn = document.getElementById(projectFile.columns[columnSnap - 1].id + "Content");

            var snapHeight = activeColumn.getBoundingClientRect().top;

            var snapLocation = 0;

            for (const child of activeColumn.children) {

                if ( snapHeight + child.offsetHeight > e.clientY) {

                    console.log(snapLocation)

                } else {

                    snapHeight = snapHeight + child.offsetHeight + 6;
                    snapLocation = snapLocation + 1;

                }

            }

            console.log(snapHeight + ", " + e.clientY + ", " + snapLocation)

            console.log(activeColumn.children.length)
                
            if (snapLocation >= activeColumn.children.length) {
                snapLocation = snapLocation - 1;
            }

            activeColumn.prepend(element)
            
            if (activeColumn.children[snapLocation]) {
                activeColumn.children[snapLocation].after(element)
            }

            // Find column in json data
            for (var i = 0; i < projectFile.cards.length; i++) {
                if (projectFile.cards[i].id = element.id) {

                    // Update cards parent column ID                
                    projectFile.cards[i].columnId = activeColumn.parentElement.id;
                    console.log(projectFile.cards[i].columnId)
                    
                }
            }
        }

        element.style.position = "static"
        // Update location
        elementChild.style.top = (elementChild.offsetTop - newY) + "px";
        elementChild.style.left = (elementChild.offsetLeft - newX) + "px";
        // Update styles
        elementChild.style.transform = "rotate(2deg)";
        elementChild.style.zIndex = "999";
        elementChild.style.cursor = "grabbing";
        elementChild.style.boxShadow = "2px 8px 16px #0000001b";
    }

    function closeDragElement() {

        saveBoardData(); // Save data to local storage

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;

        element.style.position = "relative"
        // Reset styles and location to the box
        elementChild.style.top = "";
        elementChild.style.left = "";
        elementChild.style.transform = "";
        elementChild.style.zIndex = ""
        elementChild.style.cursor = ""
        elementChild.style.boxShadow = ""
    }
}