var startBtn = document.getElementById("startBtn");
var quizContainer = document.getElementById("quiz-container");
var timer = document.getElementById("timer");
var questions = document.getElementById("questions");
var question = document.getElementById("question");
var currentQuestionIdx = 0;
var choices = document.getElementById("choices");
var answer = document.getElementById("answer");
var answerbtns = document.getElementById("answer-btns");
var answerbtns = document.getElementById("1");
var answerbtns = document.getElementById("2");
var answerbtns = document.getElementById("3");
var answerbtns = document.getElementById("4");
var submitButton = document.getElementById("submitBtn");
var questions = [];
var choices = [[]];
var answer = [];

//Start button starts game
document.getElementById("startBtn").addEventListener("click", startQuiz);


function startQuiz () {
    //return questions.question.currentQuestionIdx=[0];
    //currentQuestionIdx = [0];




       
// Show the first question
function showCurrentQuestion() {
    questions.innertext = questions
    var i=0; i < questions.length; i++;
    
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

// Submit Question Answer
function submitAnswer(answer){

    }
    //Click submit to show results
    submitButton.onclick = function() {
        showAnswer(answer)  
     
    }
//Show the next question
function showNextQuestion() {
    currentQuestionIdx++;
}

//Check if answer is correct/incorrect, and move to next question
function checkAnswer() {

}

//handle wrong answer,(show user answer is wrong & remove time from timer)
function wrongAnswer() {

}

//handle correct answer(show user)
function correctAnswer() {

}

//handle end of game via score or time
function endGame() {

}

//ask user to input initials
function inputInitials () {

}

//Save users score
function saveScore () {

}

//Show the users score
function showScore () {

}