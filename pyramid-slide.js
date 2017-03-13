
document.getElementById("height").oninput = function() {slideFunction()};
document.getElementById("brick-symbol").oninput = function() {slideFunction()};

function slideFunction() {
    event.preventDefault();
    var heightElem = document.getElementById("height");
    var brickElem = document.getElementById("brick-symbol");
    // retrieve selected brick
    var brick = brickElem.value;
    // retrieve height
    var heightStr = heightElem.value;
    // convert the string to an int
    height = parseInt(heightStr);
    // draw pyramid with the specified height and brick character
    drawPyramid(height, brick);
}

// renders, in the HTML document, a pyramid of the specified height
function drawPyramid(height, brick) {

    // clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // create rows
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
