let gridSize = 16;
let currentColor = '#000000';
for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.id = `cell${i+1}`;    document.getElementById('grid').appendChild(cell);
}

let columns = '';

for (let i = 0; i < gridSize; i++) {
    columns += 'auto ';
}

document.getElementById('grid').style.gridTemplateColumns = `${columns}`


document.getElementById('colorPicker').addEventListener('change', function(e) {currentColor = e.target.value;})


const allCells = document.querySelectorAll('.cell');

allCells.forEach(cell => {
    cell.addEventListener('mouseover', function(e) {
    const color = document.getElementById(`${e.target.id}`).style.background = `${currentColor}`;
} )
})




