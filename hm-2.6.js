// Задание 1 + Задание 2

const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 10) {
        break;
    }
    console.log(numbers[i]);
}
console.log(`Индекс числа 4 = ${numbers.indexOf(4)}`);

// Задание 3

let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(' ');
console.log(numbs);


//Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
    let inArr = [];
    for (let j = 0; j < 3; j++)
        inArr.push(1);

    arr.push(inArr);

}
console.log(arr);

//Задание 5

let arrya = [1, 1, 1];

arrya.push(2, 2, 2);
console.log(arrya);


//Задание 6
let ary = [9, 8, 7, 'a', 6, 5];
ary = ary.sort();
ary.pop();
console.log(ary);

//Задание 7

//Дан массив:[9, 8, 7, 6, 5].Попросите пользователя угадать число с помощью метода
//prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

const nor = [9, 8, 7, 6, 5];

const inputUser = Number(prompt('Попробуй угадать мое число!'));
if (isNaN(inputUser)) {
    alert('Это не число!');
} else if (nor.includes(inputUser)) {
    alert('Угадал!');
} else {
    alert('Не угадал!')

};

//Задание 8

const str = 'abcdef';
const arrAbcde = str.split('');

const reversedArrAbcdef = arrAbcde.reverse();
const reversedStrAbcdef = reversedArrAbcdef.join('');
console.log(reversedStrAbcdef);


//Задание 9

let arrSpread = [
    [1, 2, 3],
    [4, 5, 6]
];

let arrCompound = [...arrSpread[0], ...arrSpread[1]];
console.log(arrCompound);

// Задание 10

const arbitraryNumbers = [4, 8, 1, 10, 7, 5, 3];

for (let p = 0; p < arbitraryNumbers.length - 1; p++) {
    const current = arbitraryNumbers[p];
    const next = arbitraryNumbers[p + 1];
    const sum = current + next;
    console.log(`${current} + ${next} = ${sum}`);
}

// Задание 11

function squaresNumbers(numbers) {
    return numbers.map(num => num * num)

}
console.log(squaresNumbers([5, 2, 8]));

//Задание 12

function lengthWords(words) {
    return words.map(word => word.length);
}
console.log(lengthWords(['яблоко', 'сокол', 'поздравление']));

//Задание 13

function negativeValues(values) {
    return values.filter(num => num < 0);

}
console.log(negativeValues([0, -3, 8, -15, 10, -89]));

// Задание 14

const arrayNumbers = [];
for (let x = 0; x < 10; x++) {
    arrayNumbers.push(Math.floor(Math.random() * 10));
}

const numberFilter = arrayNumbers.filter(num => num % 2 === 0);

console.log('Исходный массив:', arrayNumbers);
console.log('Четные значения', numberFilter);



// Задание 15

const averageArephmetic = [];

for (let c = 0; c < 6; c++) {
    averageArephmetic.push(Math.floor(Math.random() * 10) + 1);
}

const sum = averageArephmetic.reduce((total, num) => total + num, 0);
const average = sum / averageArephmetic.length;
console.log('Среднее арефмитическое', average);

