var topBar = document.querySelector("#info-line");
var startGame = document.getElementById("start");
var gameBox = document.querySelector("#viewArea");
var score = 0;
var questionIndex = 0;
var answersUl = document.createElement("ul");
//console.log(startGame);
var questions = [
    {
        q: "What does the acronymn CSS stand for?" ,
        options: [
        "Cascading Simple Sheets", 
        "Composing Style Sets", 
        "Cascading Style Sets", 
        "Cascading Style Sheets"
    ],
        correctAnswer: "Cascading Style Sheets"
    },

    {
    q: "Where do good developers start when creating a website?" ,
    options: [
     "Creating the CSS",
     "Sketching the pages",
     "Critiquing the customer's vision",
     "Google different ideas for implementation"
    ],
        correctAnswer: "Sketching the pages"
    }, 

    {
    q: "What are the 3 staples fo web development" ,
    options: [
    "HTTP, CSS, and JavaScript",
    "HTML, C++, and JavaScript",
    "HTML, CSS, and Java",
    "HTML, CSS, and JavaScript"
    ],
        correctAnswer: "HTML, CSS, and JavaScript"
    }, 

    {
    q: "When in doubt about a concept, You should..." ,
    options: [
    "Wing it until you find out the right answer",
    "Pass the project on to another developer",
    "Use your Google-Fu power!",
    "Tell the customer the feature is impossible"
    ],
    correctAnswer: "Use your Google-Fu power!"
    },

    {
    q: "What element 'links' the CSS page to your website?" ,
    options: [
    "<link>",
    "<a href>",
    "<style>",
    "<stylesheet>"
    ],
    correctAnswer: "<link>"
    },

];
startGame.addEventListener("click", function () {

    var timeLeft = 90;
    var clockStart = setInterval(function() {
    if (timeLeft >= 0) {
        timerBarEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
    } else {
    timerBarEl.textContent = "Times Up!";
    clearInterval(clockStart);
    startGame.textContent = "Try Again";
    }
}, 1000);

var timerBarEl = document.createElement("li");
timerBarEl.className = ".top-border";
timerBarEl.textContent = "Time Left: " + timeLeft;
//console.log(timerBarEl);
topBar.appendChild(timerBarEl);
startGame.style.display = "none";

function showQuestions(questionIndex) {
    //Places each question on the screen
    for (var i = 0; i <questions.length; i++) {
        //Question Diplay
        var currentQuestion = questions[questionIndex].q;
        var userOptions = questions[questionIndex].options;
        gameBox.textContent = currentQuestion;
    }
    //Places the options on the screen
    userOptions.forEach(function (items) {
        var optionEl = document.createElement("li");
        optionEl.textContent = items;
        gameBox.appendChild(answersUl);
        answersUl.appendChild(optionEl);
        optionEl.addEventListener("click", (grade));
    })
function grade(event) {
    var pick = event.target;

    if (pick.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        //If the answer is correct
        if(pick.textContent === questions[questionIndex].correctAnswer) {
            createDiv.textContent = "Correct!"
        } else {
            //If the answer is wrong -- Will deduct 10 seconds
            timeLeft = timeLeft - 10;
            createDiv.textContent = "Wrong!"
        }
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        gameOver();
        createDiv.textContent = "Game Finished! Your final score is" + timeLeft;
    } else {
        showQuestions(questionIndex);
    }
    gameBox.appendChild(createDiv);
}

    
}
});
