const gameStats = {
    totalGames: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

function playRockPaperScissors() {

    const choices = ['камень', 'ножницы', 'бумага'];
    const userInput = prompt('Выберите: камень, ножницы или бумага?').toLocaleLowerCase();

    if (userInput === null || userInput.trim() === '') {
        alert('Игра отменена.');
        return;
    }

    const userChoice = userInput.toLocaleLowerCase().trim();

    if (!choices.includes(userChoice)) {
        alert('Некорректный ввод! Пожалуйста, выберите: камень, ножницы или бумага.');
        return;
    };

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (userChoice === computerChoice) {
        result = 'Ничья!';
        gameStats.draws++;
    } else if (
        (userChoice === 'камень' && computerChoice === 'ножницы') ||
        (userChoice === 'ножницы' && computerChoice === 'бумага') ||
        (userChoice === 'бумага' && computerChoice === 'камень')
    ) {
        result = 'Вы победили!';
        gameStats.wins++;
    } else {
        result = 'Компьютер победил';
        gameStats.losses++;
    }

    gameStats.totalGames++;

    const statsMessage = `
    Ваш выбор: ${userChoice}
    Выбор компьютера: ${computerChoice}
    Результат: ${result}
    
    Статистика:
    Всего игр: ${gameStats.totalGames}
    Побед: ${gameStats.wins}
    Поражений: ${gameStats.losses}
    Ничьих: ${gameStats.draws}
    `;

    alert(statsMessage);
}