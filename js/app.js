// Pixel Maker JavaScript App for Udacity Course

// Select color input
// Select size input

var myButton = document.querySelector('#mySubmitButton');
myButton.addEventListener('click',function(){makeGrid()});

const myGrid2 = document.querySelector('#pixelCanvas');
myGrid2.addEventListener('click',function(event){respondToTheClick(event),false});


function respondToTheClick(a) {
    if (a.target.nodeName === 'TD'){
        a.target.style.backgroundColor=myColor.value;
    }
    else console.log(a.target.nodeName, myColor.value);
}

const myColor = document.querySelector('#colorPicker');


function makeGrid() {
    var myRows = document.querySelector('#inputHeight');
    var myColumns = document.querySelector('#inputWidth');
    var gridString = "";
    const newRow = '<tr>'
    const newColumn = '<td></td>'
    const endRow = '</tr>'
    // select pixelCanvas element from document
    const myGrid = document.querySelector('#pixelCanvas');
    // reset number of rows and columns to prepare for append
    myGrid.innerHTML = '';
    for (x=0; x < myRows.value; x++) {
        gridString = gridString +newRow;

        for (y=0; y < myColumns.value; y++) {
            gridString = gridString +newColumn;
        }
        gridString = gridString +endRow;
    }
    myGrid.innerHTML = gridString;
}
