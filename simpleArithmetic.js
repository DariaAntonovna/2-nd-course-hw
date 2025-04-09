function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {

    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);

    const operations = ['+', '-', '*', '/'];
    const randomOperation = operations[getRandomNumber(0, operations.length - 1)];

    const question = `${num1} ${randomOperation} ${num2}`;
    return { question, operation: randomOperation, num1, num2 };
}

function calculateAnswer(num1, num2, operation) {
    let answer;
    switch (operation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }
    return answer;
}

function startGame() {
    const { question, operation, num1, num2 } = generateQuestion();
    const userAnswer = prompt(`Решите задачу: ${question}`);

    const correctAnswer = calculateAnswer(num1, num2, operation);

    if (parseFloat(userAnswer) === correctAnswer) {
        alert('Правильно! Молодец!');
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }

    return false;

}

