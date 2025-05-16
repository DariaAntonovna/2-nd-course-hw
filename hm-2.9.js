// Задание 1

const heading = document.querySelector('#toggleHeading');
const button = document.querySelector('#toggleButton');

button.addEventListener('click', function () {
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        heading.style.display = 'none';
        buttonContent = 'Показать';
    }
});

// Задание 2 

const textElement = document.querySelector('#colorText');
const colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', function () {
    textElement.style.color = 'blue';
});

// Задание 3 

const textChange = document.querySelector('#textChange');
const buttonChange = document.querySelector('#buttonChange');

buttonChange.addEventListener('click', function () {
    textChange.textContent = 'Привет мир!';
});

// Задание 4

const descriptionElements = document.querySelectorAll('.description');

descriptionElements.forEach(element => {
    element.textContent = 'Измененный текст';
});

// Задание 5

const descriptionElementsTwo = document.querySelectorAll('.descriptionTwo');

descriptionElementsTwo.forEach(element => {
    element.textContent = 'Новый текст';
});

// Задание 6 

const addButton = document.getElementById('addParagraphBtn');
const body = document.body;

addButton.addEventListener('click', function () {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    body.appendChild(newParagraph);
});

// Задание 7

const removeButton = document.getElementById('removeBtn');

removeButton.addEventListener('click', function () {
    const firstDiscription = document.querySelector('.descriptionThree');

    if (firstDiscription) {
        firstDiscription.remove();
    } else {
        alert('Элементы с классом descriptionThree закончились!')
    }
});