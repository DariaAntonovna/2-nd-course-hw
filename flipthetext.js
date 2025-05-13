function flipTheText(text) {

    const textUser = prompt('Введите текст, который нужно перевернуть:');

    if (textUser === null) {
        document.getElementById('result').textContent = 'Вы отвенили ввод!';
        return;
    }

    if (textUser.trim() === '') {
        document.getElementById('result').textContent = 'Вы не ввели текст!';
        return;
    }

    const reversedText = textUser.split('').reverse().join('');

    alert(`Перевёрнутый текст:\n${reversedText}`);

    document.getElementById('result').textContent = `Перевернутый текст: ${reversedText}`;
}