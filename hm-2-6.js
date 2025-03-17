// Задание 1 
let hi = 'Привет!';
let i = 0;
do {
    console.log(hi);
    i++;
} while (i < 2);


// Задание 2
let n = Number(1);
do {
    console.log(n);
    n++;
} while (n < 6);


//Задание 3
let b = 7;
while (b < 23) {
    console.log(b);
    b++;
}

//Задание 4
const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let name in obj) {
    let salary = obj[name];
    console.log(name + ' - зарплата ' + salary + " долларов ");
}

//Задание 5
let c = 1000;
let num = 0;
while (c >= 50) {
    c = c / 2;
    num++;
}
console.log('Результат ' + c);
console.log('Количество итераций ' + num);

//Задание 6
let firstFriday = 3;
let daysMonth = 31;

for (let day = 1; day <= daysMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);

}



















