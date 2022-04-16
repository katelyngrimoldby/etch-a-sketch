const DEFAULT_COLOR = 'red';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'singleColor';

const container = document.querySelector('.container');

let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;

function generateGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < (size * size); i++){
        const div = document.createElement('div');
        div.addEventListener('mousedown', changeColor);

        container.appendChild(div);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return

    e.target.style.backgroundColor = color;
    console.log('done');
}

generateGrid()