// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let grid = document.getElementById('pixelCanvas');
let size = document.getElementById('sizePicker');
let color = document.getElementById('colorPicker');


function makeGrid() {
    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');
    for (let i = 0; i < height.value; i++){
        const row = grid.insertRow(i); // DOM method that creates <tr> rows and adds it to the grid
        for (let j = 0; j < width.value; j++){
            const cell = row.insertCell(j); //DOM method that creates <td> cells and adds it to the row in the grid
            cell.addEventListener("click", (a) => {
                cell.setAttribute('style', `background-color: ${color.value}`)}); // sets background color of cell to that of color picker
        }
    }
}


size.onsubmit = function(refresh){ // onsubmit event is used as this is a form
    refresh.preventDefault(); // prevents page from refreshing when submit button is hit
    clearGrid(); // call clearGrid function so that submit button clears instead of adds more cells
    makeGrid();
};


function clearGrid() {
    while (grid.firstChild){
        grid.innerHTML = ''; // clears grid by removing all children
    }
}

function resetBtn() {
    reset = document.getElementById('reset');
    reset.addEventListener('click', clearGrid); // created reset button to make resetting grid more clear
}
