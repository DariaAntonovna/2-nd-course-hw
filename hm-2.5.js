// Задание 1 
function value(a, b) {
    if (a => b) {
        return a;
    }
}

console.log(value(8, 4));
console.log(value(6, 6));




// Задание 2
let number = (number) => {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечентное';
    }

};

console.log(number(5));
console.log(number(8));


//Задание 3 
let valueSquare = (square) => square * square;

let returnValue = (value) => {
    return value * value;
}
console.log(valueSquare(5));
const result = valueSquare(5);
console.log(result);


// Задание 4
function userAge(question) {
    let userAnswer = prompt(question);

    if (userAnswer < 0) {
        console.log('Вы ввели неправильное значение');
    }
    else if (userAnswer <= 12) {
        console.log('Привет, друг!');
    }

    else if (userAnswer >= 13) {
        console.log('Добро пожаловать!');
    }


};

userAge('Сколько Вам лет?');

// Задание 5
function checkNumber(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом'

    }

    return numA * numB;
}

console.log(checkNumber(7, 8));
console.log(checkNumber('fox', 7));
console.log(checkNumber(null, -10));
console.log(checkNumber(5, 9));


//Задание 6 

function userNumber() {
    let userInput = prompt('Введите любое число.');

    const num = Number(userInput);

    if (isNaN(num)) {
        return 'Переданный параметр не является числом';

    } else {
        const cube = num ** 3;
        return `${num} в кубе равняется ${cube}`;

    }

}
console.log(userNumber());


// Задание 7

const circle1 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;

    }
};

const circle2 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());






