const startBtn = document.getElementById("startBtn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerbtnsElement = document.getElementById("answer-btns");

//Start button starts game
startBtn.addEventListener("click", startQuiz) 

function startQuiz(){
startBtn.questionContainerElement.questions()
currentQuestionsIndex = 0
}

// Show the questions
function showQuestions(questions, questionContainer) {
    //const questions = []
    //const choices = [[]]
    //const answer = []
}
    //for(const i=0; i<questions.length; i++){

//}

    function showAnswer(answer){

    }
    //click submit to show results
    submitButton.onclick = function() {
        showAnswer(answer)  
     
    }
const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },

    {
        question: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },

    {
        question: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },

    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },

    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },

    ];
