var topBar = document.querySelector("#info-line");
var startGame = document.getElementById("start");
//console.log(startGame);
var questions = [
    {
        q: "What does the acronymn CSS stand for?" ,
        answers: {
        a1: "Cascading Simple Sheets",
        a2: "Composing Style Sets",
        a3: "Cascading Style Sets",
        a4: "Cascading Style Sheets"
    },

    correctAnswer: "a3"
},
{
    q: "Where do good developers start when creating a website?" ,
    answers: {
    a1: "Creating the CSS",
    a2: "Sketching the pages",
    a3: "Critiquing the customer's vision",
    a4: "Google different ideas for implementation"
},

correctAnswer: "a2"
},    {
    q: "What are the 3 staples fo web development" ,
    answers: {
    a1: "HTTP, CSS, and JavaScript",
    a2: "HTML, C++, and JavaScript",
    a3: "HTML, CSS, and Java",
    a4: "HTML, CSS, and JavaScript"
},

correctAnswer: "a4"
},    {
    q: "When in doubt about a concept, You should..." ,
    answers: {
    a1: "Wing it until you find out the right answer",
    a2: "Pass the project on to another developer",
    a3: "Use your Google-Fu power!",
    a4: "Tell the customer the feature is impossible"
},

correctAnswer: "a3"
},    {
    q: "What element 'links' the CSS page to your website?" ,
    answers: {
    a1: "<link>",
    a2: "<a href>",
    a3: "<style>",
    a4: "<stylesheet>"
},

correctAnswer: "a1"
},

];
function gameStart() {

    var timeLeft = 90;
    var clockStart = setInterval(function() {
    if (timeLeft >= 0) {
        timerBarEl.textContent = "Time Left: " + timeLeft;
        timeLeft--;
    } else {
    timerBarEl.textContent = "Times Up!";
    clearInterval(clockStart);
    }
}, 1000);

var timerBarEl = document.getElementById("time-score");
//console.log(timerBarEl);
topBar.appendChild(timerBarEl);

}




startGame.onclick = gameStart;
