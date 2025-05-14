const quiz = [
    {
        question: 'Какой цвет небо?',
        options: ["1.Красный", '2.Синий', '3.Зеленый'],
        correctAnswer: 2
    },
    {
        question: 'Сколько дней в неделе?',
        options: ['1.Шесть', '2.Семь', '3.Восемь'],
        correctAnswer: 2
    },
    {
        question: 'Сколько у человека пальцев на одной руке?',
        options: ['1.Четыре', '2.Пять', '3.Шесть'],
        correctAnswer: 2
    },

]

function startQuiz() {

    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const currentQuestion = quiz[i];

        let questionText = currentQuestion.question + '\n';
        questionText += currentQuestion.options.join('\n');

        const userAnswer = parseInt(prompt(questionText));

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    }

    alert(`Ваш результат: ${score} из ${quiz.length} правильных ответов!`);
    document.getElementById('quiz-result').textContent = `Правильных ответов: ${score} из ${quiz.length}`;

}