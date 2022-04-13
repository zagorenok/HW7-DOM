let figure = document.querySelector('.figure');
let select = document.querySelector('#select');
let inputColor= document.querySelector('#inputColor');
let button = document.querySelector('button');
let color = 'black';
let selectedFigure = '';

select.addEventListener('change', (event) => {
  selectedFigure = event.target.value;
  figure.innerText = '';
  figure.className = selectedFigure;
  changeFigureColor(inputColor.value);
});
 
button.addEventListener('click', () => {
    color = inputColor.value;
    changeFigureColor(inputColor.value);
});

function changeFigureColor(color = 'black') {
    if (selectedFigure === 'figure') {
        figure.style.background = 'transparent';      
    } else {
        figure.style.background = color;      
    }
}

