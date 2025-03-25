// Задание 1
let password = ('мой пароль');
let data = (prompt('Введите пароль'));
(data === password) ? console.log('Пароль введен верно') : console.log('Пароль введен неправильно');

//Задание 2
let c = 7;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Неверно');
// С остальными значениями (0, 10, -3, 2) проведена проверка, консоль выводит корректный ответ. 


//Задание 3 
let d = 5;
let e = 256;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');
//Провела проверку, если переменная e = 2 , то консоль выводит значение 'Неверно'


//Задание 4 
let a = '2';
let b = '3';
alert(Number(a) + Number(b));


//Задание 5

let monthNumber = 7;
if (monthNumber < 1 || monthNumber > 12) {
    console.log('Некорректный номер месяца');
}
else {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;
        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
        default:
            console.log('Упс, такого времени года не существует :(');
            break;
    }
}





