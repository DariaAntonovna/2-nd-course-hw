
// Задание 1
const str = 'js';
const upperStr = str.toUpperCase();

console.log(upperStr);


// Задание 2

function filterStrings(arr, searchStr) {
    const searchStrLower = searchStr.toLowerCase();
    return arr.filter(item =>
        item.toLowerCase().startsWith(searchStrLower)
    );
}

const fruits = ['Банан', 'Апельсин', 'банан', 'апельсин', 'Груша'];
console.log(filterStrings(fruits, 'б'));
console.log(filterStrings(fruits, 'а'));
console.log(filterStrings(fruits, 'Гр'));

// Задание 3 

const number = 32.58884;
const floorResult = Math.floor(number);
const ceilResult = Math.ceil(number);
const roundResult = Math.round(number);
console.log('До меньшего целого:', floorResult);
console.log('До большего целого:', ceilResult);
console.log('До ближайшего целого', roundResult);

// Задание 4 

const numbers = [52, 53, 49, 77, 21, 32];
console.log('Минимальное значение:', Math.min(...numbers));
console.log('Максимальное значение:', Math.max(...numbers));

// Задание 5 

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('Случайное число:', randomNumber);
}
getRandomNumber();

// Задание 6

function getRandomArray(n) {
    const result = [];
    const length = Math.floor(n / 2);
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}
console.log(getRandomArray(8));

// Задание 7 

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInRange(2, 15));

// Задание 8 

const date = new Date();
console.log(date);

// Задание 9 

const currentDate = new Date();
const daysToAdd = 73;

currentDate.setDate(currentDate.getDate() + daysToAdd);
console.log(currentDate);

// Задание 10 

function formatDate(date) {

    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const daysWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayWeek = daysWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `Дата: ${day} ${month} ${year} - это ${dayWeek}. Время: ${hours}:${minutes}:${seconds}`

}
const today = new Date();
console.log(formatDate(today));