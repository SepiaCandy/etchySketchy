let gridSize = gridSelector.value;
let currentColor = '#000000';

function gridMaker(gridSize) {
for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell${i+1}`;
    document.getElementById('grid').appendChild(cell);
}

let columns = '';

for (let i = 0; i < gridSize; i++) {
    columns += 'auto ';
}

document.getElementById('grid').style.gridTemplateColumns = `${columns}`
}
gridMaker(gridSize);
document.getElementById('colorPicker').addEventListener('change', function(e) {currentColor = e.target.value;})


const allCells = document.querySelectorAll('.cell');

allCells.forEach(cell => {
    cell.addEventListener('mouseover', function(e) {
    const color = document.getElementById(`${e.target.id}`).style.background = `${currentColor}`;
} )
})

gridSelector.addEventListener('change', function () {location.reload()})


