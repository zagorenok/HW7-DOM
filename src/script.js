let figure = document.querySelector('.figure');
let select = document.querySelector('#select');
let inputColor= document.querySelector('#inputColor');
let button = document.querySelector('button');
let color = '';
let selectedFigure = '';

select.addEventListener('change', (event) => {
  selectedFigure = event.target.value;
  figure.innerText = '';
  figure.className = selectedFigure;
  changeFigureColor();
});
 
button.addEventListener('click', () => {
    color = inputColor.value;
    changeFigureColor();
});

function changeFigureColor() {
    if (selectedFigure === 'figure') {
        figure.style.background = 'transparent';      
    } else {
        figure.style.background = color;      
    }
}

