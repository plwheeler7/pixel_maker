// Pixel Maker JavaScript App for Udacity Course

// selects the button, defines variable for the button, adds an event listener
const myButton = document.querySelector('#mySubmitButton');
myButton.addEventListener('click',function(){makeGrid()});

// selects the grid, defines a variable, adds an event listener
// executes the function "respondtoTheClick" when any element on the grid is clicked
const myGrid2 = document.querySelector('#pixelCanvas');
myGrid2.addEventListener('click',function(event){respondToTheClick(event),false});

// function checks to ensure the element clicked is a cell, sets the style.background color
function respondToTheClick(a) {
    if (a.target.nodeName === 'TD'){
        a.target.style.backgroundColor=myColor.value;
    }
    else alert('you clicked a row, try again to click a cell');
}

// selects the color picker element
const myColor = document.querySelector('#colorPicker');


function makeGrid() {
    // Initializing variables used in this function
    const myRows = document.querySelector('#inputHeight');
    const myColumns = document.querySelector('#inputWidth');
    let gridString = "";
    const newRow = '<tr>';
    const newColumn = '<td></td>';
    const endRow = '</tr>';
    
    // select pixelCanvas element from document
    const myGrid = document.querySelector('#pixelCanvas');
    
    // reset number of rows and columns to prepare for new size
    myGrid.innerHTML = '';
    
    // create new grid with nested for loops
    for (x=0; x < myRows.value; x++) {
        gridString = gridString +newRow;

        for (y=0; y < myColumns.value; y++) {
            gridString = gridString +newColumn;
        }
        gridString = gridString +endRow;
    }
    myGrid.innerHTML = gridString;
}
