let cell=[];
var grid = document.querySelector('#grid');
var gridItems;
const resetBtn = document.querySelector('#reset').addEventListener('click', reset);
const customBtn = document.querySelector('#custom').addEventListener('click', custom);
const gridBtn = document.querySelector('#sixteen').addEventListener('click', gridMake);

function makeGrid(rows, columns){
    for(var i=0; i<rows*columns; i++){
            cell[i] = document.createElement('div');
            grid.appendChild(cell[i]).classList.add('grid-item')
        }
        document.getElementById('grid').style.gridTemplateColumns = 'repeat(' + columns + ', 1fr)';
        document.getElementById('grid').style.gridTemplateRows = 'repeat(' + rows + ', 1fr)';
        gridItems = document.querySelectorAll('.grid-item');
        addListener();
    }

function addListener(){
        for(var i=0; i< gridItems.length; i++){
            gridItems[i].addEventListener('mouseover', function(e){
                e.target.classList.add('color');
            });
        }
    }

function reset(){
    document.querySelectorAll('.grid-item').forEach(e => e.remove());
}

function custom(){
    var size = prompt('Grid Size: ');
    size = parseInt(size);
    makeGrid(size, size);
}

function gridMake(){
    makeGrid(16, 16);
}
