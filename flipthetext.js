function flipTheText(text) {

    const textUser = prompt('Введите текст, который нужно перевернуть:');

    const reversedText = textUser.split('').reverse().join('');

    alert(`Перевёрнутый текст:\n${reversedText}`);

    document.getElementById('result').textContent = `Перевернутый текст: ${reversedText}`;
}