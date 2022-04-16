//default values
const DEFAULT_COLOR = '#000000';
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';
//end of default values

//global DOM elements
const container = document.querySelector('.grid');
const colorPick = document.querySelector('#colorPick');
const colorBTN = document.querySelector('#color');
const rainbowBTN = document.querySelector('#rainbow');
const eraserBTN = document.querySelector('#eraser');
const clearBTN = document.querySelector('#clear');
const sizeSlider = document.querySelector('#size')
const sizeLabel = document.querySelector('label');
//end of global DOM elements

//global variables
let color = DEFAULT_COLOR;
let size = DEFAULT_SIZE;
let mode = DEFAULT_MODE;
//end of global variables

//variable changers
function setMode(newMode) {
    mode = newMode;
}

function setColor(newColor) {
    color = newColor;
}

function setSize(newSize) {
    size = newSize;
    clearGrid();
}

function setSizeValue(value){
    sizeLabel.textContent = `${value}x${value}`;
}
//end of variable changers

//grid manipulators
function clearGrid() {
    container.innerHTML = '';
    generateGrid(size);
}

function generateGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'gridTile');
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

function changeColor(e) {
    if(mode == 'color') {
        e.target.style.backgroundColor = color;
    }else if(mode == 'eraser') {
        e.target.style.backgroundColor = '#ffffff';
    }else {
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        
        e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
    }
}
//end of grid manipulators

//global event listeners
colorPick.onchange = (e) => setColor(e.target.value);

colorBTN.onclick = () => setMode('color');

rainbowBTN.onclick = () => setMode('rainbow');

eraserBTN.onclick = () => setMode('eraser');

clearBTN.onclick = () => clearGrid();

sizeSlider.onmousemove = (e) => setSizeValue(e.target.value);

sizeSlider.onchange = (e) => setSize(e.target.valueAsNumber);
//end of global event listeners

generateGrid(size)