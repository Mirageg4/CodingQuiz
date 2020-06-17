//Variables from index.html
var questionsContainer = document.getElementById("questions-container")
var startBtn = document.getElementById("startBtn");
var questions = document.getElementById("questions");
var answerbtns = document.getElementById("answer-btns");
var results = document.getElementById("results");
var timer = document.getElementById("timer");
var highScore = document.getElementById("high-score");
var initials = document.getElementById("initials-input");

var currentQuestionIdx = 0;

// TODO: Time remaining variable (should contain your start time)
var countdown;
var startTime = 60;

//Variable response from choice clicked.
var correct = "Correct Answer!";
var incorrect = "Sorry, Incorrect Answer";


var question = '';
var choices = [];
var answer = '';

var scores;

var questions = [
    {
        text: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },

    {
        text: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },

    {
        text: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },

    {
        text: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },

    {
        text: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },

    ];

//Start button starts game by calling startQuiz function
document.getElementById("startBtn").addEventListener("click", startQuiz)


function startQuiz() {

    // TODO: Hide start button
    document.getElementById("startBtn").style.visibility = "hidden";
        
    startTimer();

    showCurrentQuestion(currentQuestionIdx)
}

// TODO: Start the timer
function startTimer() {
    countdown = setInterval(function () {
        startTime--;
        timer.textContent = 'Time Remaining: ' + startTime;

        // Stop the timer
        if (startTime === 0) {
            endGame();
        }  
        
    }, 1000);    
};
      
//Show current question
function showCurrentQuestion(questionIdx) {
    document.getElementById("questions").innerHTML = questions[questionIdx].text;

    for (var i = 0; i < questions[questionIdx].choices.length; i++) {
         document.getElementById(`answer-choice-${i}`).textContent = `${questions[questionIdx].choices[i]}`;
    }    
}

var answerBtns = document.getElementsByClassName("answer-choice");
    
for(var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", submitAnswer)
}

// Submit Question Answer
function submitAnswer(e) {
    var userAnswer = e.target.textContent;
 
// answer is correct
    if (userAnswer === questions[currentQuestionIdx].answer){
        document.querySelector("#results").innerHTML = correct; 
//correctAnswer();
    }
    
// if answer is wrong 10 seconds are taken off the clock
    else {
       document.querySelector("#results").innerHTML = incorrect;
       startTime = startTime-10;
    }

    showNextQuestion()
}

//Show the next question
function showNextQuestion() {
    currentQuestionIdx++;

    if (currentQuestionIdx >= questions.length) endGame()
    else showCurrentQuestion(currentQuestionIdx);

}

//handle end of game via score or time
function endGame() {
    // Clear timer
    clearInterval(countdown)

    document.getElementById("results").innerHTML = "Game over!";

    var userInitials = inputInitials();

    saveScore(userInitials, startTime)

}

//Save users score
function saveScore(username, score) {
    console.log(username, score)

    var scoreEntry = username + " " + score;

    scores.push(scoreEntry) 

    localStorage.setItem("scores", JSON.stringify(scores))

}

//Show the users score
function showScore () {
    var valuesFromLocal = localStorage.getItem("scores")
        
    var parsedScores = JSON.parse(valuesFromLocal)

    
}


