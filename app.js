
let gridNum = 16;
const container = document.querySelector('#container');
gridCreator();

// const grid = document.querySelector('.box');
// for (i = 0; i < grid.length; i++) {
//     grid[i].addEventListener('mouseover', function (e) {
//         this.style.backgroundColor = randomColorMaker();
//     })
//     }

const grid = document.querySelectorAll('.box');
for (i = 0; i < grid.length; i++) {
    grid[i].addEventListener('mouseover', function () {
       
        this.style.backgroundColor = randomColorMaker();
    })
}

    const randomColorMaker = () => {
        return (`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`)
    }

    //create function 'Clear' which will clear the whole canvas 
    const clearButton = document.querySelector('#clearButton');
    clearButton.addEventListener('click', clear);
    function clear() {
        for (i = 0; i < grid.length; i++) {
            grid[i].style.backgroundColor = '';
        }
    }

    //let user select the number of grids, when change, will call clear function and load the new canvas
    let gridRange = document.querySelector('#gridRange');
    gridRange.addEventListener('change', updateGrid);
    
        // //clear();
        // updateGrid();
        // gridCreator();
        // paint();
    
    //})
    //     Element.remove('#container')
    //     gridNum = gridRange.value;
    //     gridCreator();  
    // })



    function gridCreator() {
        for (let i = 0; i < gridNum; i++) {
            const boxContainer = document.createElement('div');
            boxContainer.classList.add('boxCon')
            for (x = 0; x < gridNum; x++) {
                const box = document.createElement('div')
        
                box.classList.add('box');
                boxContainer.appendChild(box);
            }
            container.appendChild(boxContainer);
        }
        
    }

function updateGrid() {
    gridNum = parseInt(gridRange.value);
    container.innerHTML = '';
    gridCreator();
    
    }


// function paint() {
//     for (let i = 0; i < grid.length; i++) {
//         grid[i].addEventListener('mouseover', function (e) {
//             this.style.backgroundColor = randomColorMaker();
//         })
//     }
// }


