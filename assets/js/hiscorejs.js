//Function to display hi-scores on Hi-score page
var hiDisplay = document.getElementById("all-hiscores");
var savedName = localStorage.getItem('name');
var savedScore = localStorage.getItem('score');

hiDisplay.textContent = "Name: " + savedName + " Score: " + savedScore; 