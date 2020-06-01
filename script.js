//Variables from index.html
var questionsContainer = document.getElementById("questions-container")
var startBtn = document.getElementById("startBtn");
var questions = document.getElementById("questions");
var answerbtns = document.getElementById("answer-btns");
var choices = document.getElementById("choices");
var results = document.getElementById("results");
var timer = document.getElementById("timer");
var highScore = document.getElementById("high-score");
var initials = document.getElementById("initials-input");

//Variables in this script.js document
var questions = document.getElementById("questions");

//var question = document.getElementById("question");
var question = {};

//var choices = document.getElementById("choices");
var choices = [];

var answer = document.getElementById("answer");
var answer = [];

var currentQuestionIdx = 0;

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

//Variable response from choice clicked.
var correct = "Correct Answer!";
var incorrect = "Sorry, Incorrect Answer";


//Start button starts game by calling startQuiz function
document.getElementById("startBtn").addEventListener("click", startQuiz)


function startQuiz () {
    //Start the timer
    
    //Show current question
    var currentQuestionIdx = 0;
    var questions = document.getElementById("questions");
    questions.innerHTML += "<div>" + questions[currentQuestionIdx] + "</div>";
    choices.innerHTML += "<div>" + choices[""] + "</div>";
    currentQuestionIdx++;

    //for (i=0; i < questions.length; i++);
    


    //for (i=0; i < questions.length; i++);

    //document.appendChild("questions");
    //document.appendChild(questions.question)[0];
      
}




// Show the first question
function showCurrentQuestion() {
    //document.getElementById("questions")[0];
   // document.querySelector("questions")[0];
    //document.getInnerText.questions
    //currentQuestionIdx = 0;
    //for (i=0; i < questions.length; i++);
    
}

    

// Submit Question Answer
function submitAnswer(answer){
    document.getElementById("answer-btns").addEventListener("click", showAnswer)
    }

    //Click submit to show results
     
        function showAnswer() {

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