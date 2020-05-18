var startBtn = document.getElementById("startBtn");
var questionContainer = document.getElementById("question-container");
var showQuestions = document.getElementById("question");
var answerbtns = document.getElementById("answer-btns");
var answerbtns = document.getElementById("1");
var answerbtns = document.getElementById("2");
var answerbtns = document.getElementById("3");
var answerbtns = document.getElementById("4");
var submitButton = document.getElementById("submitBtn")

//Start button starts game
startBtn.addEventListener("click", startQuiz) 

function startQuiz() {


}

// Show the questions
function showQuestions(questions, questionContainer) {
    var questions = [];
    var choices = [[]];
    var answer = []
}
    //for(var i=0; i < questions.length; i++)


    function showAnswer(answer){

    }
    //click submit to show results
    submitButton.onclick = function() {
        showAnswer(answer)  
     
    }
var questions = [
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
