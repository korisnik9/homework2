
const quizData = [
    {
        question: "Koje godine je otkrivena Amerika?",
        a: "1472",
        b: "1643",
        c: "1663",
        d: "1492",
        correct: "d",
    },
    {
        question: "Koji je najveci grad na svijetu?",
        a: "Moskva",
        b: "Meksiko city",
        c: "New York",
        d: "Peking",
        correct: "b", 
    },
    {
        question: "Gde se nalazi najduza ulica na svijetu?",
        a: "Kanada",
        b: "Rusija",
        c: "Belgija",
        d: "Kazakstan",
        correct: "a",
    },
    {
        question: "Kako se zove najsuvlja pustinja na svijetu?",
        a: "Mohave",
        b: "Atakama",
        c: "Sahara",
        d: "Nevada",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questions = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questions.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
var score2 = 0;
submitBtn.addEventListener("click", () => {
   
    const answer = getSelected();
        if (answer === quizData[currentQuiz].correct) {
            score++;
            score2++;
        }
      
        currentQuiz++;
        
        if (score--) {
            console.log(score);
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Tacno ste odgovorili na ${score2}/${quizData.length} pitanja.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    
});
