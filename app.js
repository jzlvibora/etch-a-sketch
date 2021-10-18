
const container = document.querySelector('#container');

for (i = 0; i < 16; i++) {
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('boxCon')
    for (x = 0; x < 16; x++) {
        const box = document.createElement('div')
        
        box.classList.add('box');
        boxContainer.appendChild(box);
    }
    container.appendChild(boxContainer);
}


const grid = document.querySelectorAll('.box');
for (i = 0; i < grid.length; i++){
    grid[i].addEventListener('mouseover', function () {
       
        this.style.backgroundColor = randomColorMaker();
    })
}

const randomColorMaker = () => {
    return( `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255) },${Math.floor(Math.random() * 255)})` )
}