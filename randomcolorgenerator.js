function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startColorGame() {

    const gameContainer = document.querySelector('.block-minigame')

    while (true) {
        const userWantsToPlay = confirm('Нажми ОК для измененияи цвета фона');

        if (!userWantsToPlay) {
            alert('Игра завершена!');
            return;
        }

        const randomColor = getRandomColor();

        document.body.style.backgroundColor = randomColor;
        gameContainer.style.backgroundColor = randomColor;

        alert('Посмотри, цвет фона изменился! Новый цвет: ' + randomColor);
    }
}

const playButton = document.getElementById('playButton');
playButton.addEventListener('click', function (event) {
    event.preventDefault();
    startColorGame();
}); 