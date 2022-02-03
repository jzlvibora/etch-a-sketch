const mainContainer__canvas = document.querySelector('.mainContainer__canvas');
const sizeSelectorEl = document.querySelector('#sizeSelector');
const customBtn = document.querySelector('#custom');
const resetBtn = document.querySelector('#reset');
const classicBtn = document.querySelector('#classic');
const randomBtn = document.querySelector('#random');
const eraserBtn = document.querySelector('#eraser');
const mode = document.querySelectorAll('.mode');
const colorPickerEl = document.querySelector('#colorPicker');
const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');
let gridNum = 16;
let activeState = 'random';

//create grid
const gridCreator = function() {
        for (let i = 0; i < gridNum; i++) {
           const boxContainer = document.createElement('div');
            boxContainer.classList.add('boxCon'); 
            for (x = 0; x < gridNum; x++) {
                const box = document.createElement('div');
                box.classList.add('box');
                boxContainer.appendChild(box);              
            }
            mainContainer__canvas.appendChild(boxContainer);
        }      
    }

//eventlisteners
const loadEventListeners = function(){
//Add event listener to grid size selector
  sizeSelectorEl.addEventListener('change', function(){
  mainContainer__canvas.innerHTML='';
  gridNum = this.value;
  console.log(gridNum);
  gridCreator();
})

//add event listener to mode buttons
mode.forEach((mod)=>{
  mod.addEventListener('click', function(e){
      activeState= e.target.id;
      paint(activeState);
  })
})
  
  //add event listener to reset button
  resetBtn.addEventListener('click', function(){
    mainContainer__canvas.innerHTML='';
    init();
  })
}

//start painting
const paint = function(mode){
  mainContainer__canvas.addEventListener('mouseover', function(e){
   if(e.target.classList.contains('box')){
     if(mode==='eraser') {
       e.target.style.backgroundColor='';
     }
     else if(mode==='random'){
       e.target.style.backgroundColor=`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
     }
     else if(mode==='classic'){
       e.target.style.backgroundColor='black';
     }
     else if(mode==='custom'){
       e.target.style.backgroundColor= `${colorPickerEl.value}`;
     }
     } 
})
}


//initial state
const init = function(){
gridNum=16;
activeState='random';
sizeSelectorEl.value=16;
gridCreator();
paint(activeState);
loadEventListeners();
}

init();















