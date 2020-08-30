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

//Functions
//Starts the time and keeps track for scoring
startBtn.addEventListener("click", function timerStart() {
    var timeLeft = 90;
    var timerBarEl = document.createElement("li");
    timerBarEl.className = ".top-border";
    timerBarEl.textContent = "Time Left: " + timeLeft;
    //console.log(timerBarEl);
    topDiv.appendChild(timerBarEl);

    var clockStart = setInterval(function() {
        if (timeLeft >= 0) {
            timerBarEl.textContent = "Time Left: " + timeLeft;
            timeLeft--;
            startBtn.style.display = "none";
        } else {
            timerBarEl.textContent = "Times Up!";
            clearInterval(clockStart);
            startBtn.style.display = "inline";
            startBtn.textContent = "Try Again";
        }
        }, 1000);
        showQuestion();
});

//Places the questions on the screen for the user to answer
function showQuestion() {
    //I need to firgure out whether I should do an if/else or for loop to run the questions
    //if(viewedQuestion > questions.length) {
    var question = questions[viewedQuestion];
    qDisplay.textContent = question.q;
    for (var i = 0; i < question.options.length; i++) {
        var optionEl = document.createElement("button");
        optionEl.textContent = question.options[i];
        answersUl.appendChild(optionEl);
        optionEl.addEventListener("click", validateAnswer)
     }
    //} else {
    calculateScore();
    //}
};
//Runs if/else statements to see if the choice was correct
function validateAnswer() {
    var question = questions[viewedQuestion];
    if (question.correctAnswer === this.textContent) {
        rightWrong.textContent = "Correct!";
    } else {
        rightWrong.textContent = "Incorrect!";
        timeLeft = timeLeft - 10;
    }
    viewedQuestion++;
    answersUl.innerHTML = "";
    showQuestion();
};

//Create a function to stop the game and calculate score
function calculateScore() {
    qDisplay.innerHTML = "";
    rightWrong.textContent = "Your final score is" + timeLeft;
    clearInterval(clockStart);
    startBtn.style.display = "inline";
}