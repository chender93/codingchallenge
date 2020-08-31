//Variables used throughout the script
var questions = [
    {
        q: "What does the acronymn CSS stand for?" ,
        options: ["Cascading Simple Sheets", "Composing Style Sets", "Cascading Style Sets",  "Cascading Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },

    {
        q: "Where do good developers start when creating a website?" ,
        options: ["Creating the CSS","Sketching the pages","Critiquing the customer's vision","Google different ideas for implementation"],
        correctAnswer: "Sketching the pages"
    }, 

    {
        q: "What are the 3 staples fo web development" ,
        options: ["HTTP, CSS, and JavaScript", "HTML, C++, and JavaScript", "HTML, CSS, and Java", "HTML, CSS, and JavaScript"],
        correctAnswer: "HTML, CSS, and JavaScript"
    }, 

    {
    q: "When in doubt about a concept, You should..." ,
    options: ["Wing it until you find out the right answer", "Pass the project on to another developer", "Use your Google-Fu power!", "Tell the customer the feature is impossible"],
    correctAnswer: "Use your Google-Fu power!"
    },

    {
    q: "What element 'links' the CSS page to your website?" ,
    options: ["<link>", "<a href>", "<style>", "<stylesheet>"],
    correctAnswer: "<link>"
    },

];
var topDiv = document.querySelector("#info-line");
var startBtn = document.getElementById("start");
var gameDiv = document.querySelector("#viewArea");
var qDisplay = document.getElementById("question");
var answersUl = document.getElementById("answer-options");
var rightWrong = document.getElementById("notification");
var viewedQuestion = 0;
var timeLeft = 90;
var finalScore = 90;
var hiScoreSave = document.getElementById("submit")
var timerBarEl = document.createElement("li");

//Functions
//Starts the time and keeps track for scoring
//Entire function wrapper for game

function timerStart() {
    var timeLeft = 90;
    timerBarEl.className = ".top-border";
    timerBarEl.textContent = "Time Left: " + timeLeft;
    //console.log(timerBarEl);
    topDiv.appendChild(timerBarEl);
};


//Places the questions on the screen for the user to answer
function showQuestion() {
    //I need to firgure out whether I should do an if/else or for loop to run the questions
    if(questions[viewedQuestion]) {
    var question = questions[viewedQuestion];
    qDisplay.textContent = question.q;
    for (var i = 0; i < question.options.length; i++) {
        var optionEl = document.createElement("button");
        optionEl.textContent = question.options[i];
        answersUl.appendChild(optionEl);
        optionEl.addEventListener("click", validateAnswer)
     }
}
};
//Runs if/else statements to see if the choice was correct
function validateAnswer() {
    var question = questions[viewedQuestion];
    if (questions[viewedQuestion] && viewedQuestion < questions.length) {
        if (question.correctAnswer === this.textContent) {
        rightWrong.textContent = "Correct!";
        rightWrong.className = "right";
        } else {
        rightWrong.textContent = "Incorrect!";
        rightWrong.className = "wrong";
        timeLeft = timeLeft - 10;
        }
        }
    viewedQuestion++;
    answersUl.innerHTML = "";
    showQuestion();
    lastTime();
};

//If statement for last question and function to calculate score
function lastTime() {
    if(viewedQuestion >= questions.length) {
        rightWrong.className = "final";
        rightWrong.innerHTML = "Your final score is " + timeLeft;
        timeLeft = timeLeft - 100;
        qDisplay.innerHTML = "";
        startBtn.style.display = "inline";
        //var hiScoreAnn = document.createElement = "p";
    }
};

function countdown() {
    var clockStart = setInterval(function() {
        if (timeLeft > 0) {
            startBtn.style.display = "none";
            timerBarEl.textContent = "Time Left: " + timeLeft;
            timeLeft--;
        } else {
            timerBarEl.textContent = "Game Over";
            clearInterval(clockStart);
            startBtn.style.display = "inline";
            startBtn.textContent = "Thanks for Playing";
            var initialsEl = document.getElementById("hiscore");
            initialsEl.style.display = "inline";

        }
        }, 1000);
                    
    };

//Function to log hi-score
    function logHiScore() {
    var playerName = document.querySelector("#init").value;
    var score = timeLeft + 100;
    if (playerName === "") {
        alert("You must place your initals to save your score!")
        return;
    } else {
        localStorage.setItem('name', playerName);
        localStorage.setItem('score', score);
    console.log(playerName);
    console.log(score);
    }
};

startBtn.addEventListener("click", timerStart);
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", showQuestion);
hiScoreSave.addEventListener("click", logHiScore);