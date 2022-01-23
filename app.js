const mainContainer__canvas = document.querySelector('.mainContainer__canvas');
const sizeSelectorEl = document.querySelector('#sizeSelector');
const customBtn = document.querySelector('#custom');
const clearBtn = document.querySelector('#clear');
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


//eraser function
const eraserFn = function() {
  return '';
}

//random color generator
const randomFn = function(){
 return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}

//classic color
const classicFn = function(){
  return 'gray';
}

//custom color
const customFn = function(){
  return colorPicker.value;
}

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
  
  //add event listener to clear button
  clearBtn.addEventListener('click', function(){
    mainContainer__canvas.innerHTML='';
    init();
  })
}

//start painting
const paint = function(mode){
  mainContainer__canvas.addEventListener('mouseover', function(e){
   if(e.target.classList.contains('box')){
     if(mode==='eraser') {
       e.target.style.backgroundColor=eraserFn()
     }
     else if(mode==='random'){
       e.target.style.backgroundColor=randomFn();
     }
     else if(mode==='classic'){
       e.target.style.backgroundColor=classicFn();
     }
     else if(mode==='custom'){
       e.target.style.backgroundColor=customFn();
     }
     } 
})
}


//initial state
const init = function(){
gridNum=16;
sizeSelectorEl.value=16;
gridCreator();
paint(activeState);
loadEventListeners();
}

init();













