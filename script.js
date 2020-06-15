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
var startTime = 20;

//Variable response from choice clicked.
var correct = "Correct Answer!";
var incorrect = "Sorry, Incorrect Answer";


var question = '';
var choices = [];
var answer = '';

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
        
    /* Matthew Comment $("startBtn").click(function() {
    $("startBtn").hide(); */
        
        startTimer();
        }
    // TODO: Start the timer
function startTimer() {
            var countdown =setInterval(function() {
            timer.textContent = 'Time Remaining: ' + startTime;
            startTime--;
    
            clearInterval(timer);
                endGame();
            
            {
                
            }
        }, 1000);    
    };

/////////////
    
    setInterval(function (seconds) {
        
        
        //startTime
        (startTime);
    
        // TODO: Select the #timer container
        document.getElementById("timer").text = seconds;


        // TODO: Show time remaining as the innerHTML of #timer
        

        // TODO: Decrement timer by one second
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        // TODO: Determine if game is over

        //if (seconds <= 0) {
            clearInterval();

        // TODO: If game is over, call endGame()
        //document.getElementById("timer").innerHTML = "Game Over";
    }, 1000)
    
    // Show the first question
    showCurrentQuestion(currentQuestionIdx);
      


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
    
    // answer is wrong
    else {
       document.querySelector("#results").innerHTML = incorrect;
    }

    showNextQuestion()
}

var arr = [0, 1, 3]

arr[3] // undefined

//Show the next question
function showNextQuestion() {
    currentQuestionIdx++;

    if (currentQuestionIdx >= questions.length) endGame()
    else showCurrentQuestion(currentQuestionIdx);

}

//handle end of game via score or time
function endGame() {
    clearstartTime();
    console.log("Game over!")
    // Hide #questions, #answer-btns

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

