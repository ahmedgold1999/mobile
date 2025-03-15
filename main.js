const quizData = [
    {
        question: "ما هي لغة البرمجة المستخدمة لبناء تطبيقات الويب في المتصفح؟",
        a: "Python",
        b: "C++",
        c: "JavaScript",
        d: "Java",
        correct: "c"
    },
    {
        question: "ما هو اختصار HTML؟",
        a: "Hyper Trainer Markup Language",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Marketing Language",
        d: "Hyper Text Markup Leveler",
        correct: "b"
    },
    {
        question: "ما هو CSS؟",
        a: "لغة برمجة",
        b: "نظام إدارة قواعد بيانات",
        c: "لغة تنسيق صفحات الويب",
        d: "نوع من أنواع الشبكات",
        correct: "c"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-button');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result');

// عرض السؤال الأول
loadQuestion();

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
    `;
}

function getSelectedAnswer() {
    const options = document.getElementsByName('answer');
    let selected = '';
    options.forEach(option => {
        if (option.checked) {
            selected = option.value;
        }
    });
    return selected;
}

function showResult() {
    resultContainer.innerHTML = `<h2>نتيجتك: ${score} من ${quizData.length}</h2>`;
    resultContainer.classList.remove('hidden');
}

// الانتقال إلى السؤال التالي
nextButton.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add('hidden');
        nextButton.classList.add('hidden');
        submitButton.classList.remove('hidden');
    }
});

// عرض النتيجة النهائية
submitButton.addEventListener('click', showResult);
