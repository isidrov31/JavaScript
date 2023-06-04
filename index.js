// Variables
const title = document.querySelectorAll('.titulo');
const firstTitle = title[0];
const secondTitle = title[1];
const thirdTitle = title[2];
const fourthTitle = title[3];
const table1 = document.querySelector('.variabletypes');
const table2 = document.querySelector('.operatortypes');
const table3 = document.querySelector('.datetypes');
const table4 = document.querySelector('.what-is-scope');


// Manejo de tablas con click

firstTitle.addEventListener('click', () => {
    if (table1.style.display === 'none') {
        table1.style.display = 'block';
    } else {
        table1.style.display = 'none';
    }
});

secondTitle.addEventListener('click', () => {
    if (table2.style.display === 'none') {
        table2.style.display = 'block';
        table2.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
        table2.style.display = 'none';
    }
});

thirdTitle.addEventListener('click', () => {
    if (table4.style.display === 'none') {
        table4.style.display = 'block';
    } else {
        table4.style.display = 'none';
    }
});

fourthTitle.addEventListener('click', () => {
    if (table3.style.display === 'none') {
        table3.style.display = 'block';
    } else {
        table3.style.display = 'none';
    }
});

// Prompt
const button = document.getElementById('executePrompt');
button.addEventListener('click',executePrompt);

function executePrompt(){
    let input = document.getElementById('prompt');
    let value = input.value;
    prompt(value);
}

// Alert

const buttonAlert = document.getElementById('executeAlert');
buttonAlert.addEventListener('click',executeAlert);

function executeAlert(){
    let input = document.getElementById('alert');
    let value = input.value;
    alert(value);
}

// IF ELSE

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let add = document.getElementById('add');
let clean = document.getElementById('clean');
let resultDiv = document.querySelector('.resultDiv');

function checkSum(){
    let add = parseInt(number1.value) + parseInt(number2.value);
    if (add % 2 === 0) {
        resultDiv.style.color = 'red';
        resultDiv.textContent = 'Hola Mundo';}
        else {
        resultDiv.style.color = 'black';
        resultDiv.textContent = 'El mundo se autodestruirá en 1 minuto';
        }
}

add.addEventListener('click', function(){checkSum();})

clean.addEventListener('click', function(){
    number1.value = '';
    number2.value = '';
    resultDiv.style = 'transparent'
})