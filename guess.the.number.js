function guessNumberGame() {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    let attempts = 0;

    while (true) {
        const userAttempts = prompt('Угадай число от 1 до 100');

        if (userAttempts === null) {
            alert('Конец игры. Загаданное число было:' + randomNumber);
            return false;
        }

        const num = Number(userAttempts);

        if (isNaN(num)) {
            alert('Пожалуйста, введите число!');
            continue;

        }

        attempts++;

        if (num === randomNumber) {
            alert(`Поздравляю, ты угадал число ${randomNumber} за ${attempts} попыток!`);
            return false;
        }

        else if (num < randomNumber) {

            alert('Мое число больше. Попробуй еще раз!')

        } else {
            alert('Мое число меньше. Попробуй еще раз!')

        }
    }

}

