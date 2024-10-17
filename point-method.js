
// How points are calculated
const correctAnswerPoints = 10;
const incorrectAnswerPenalty = 5;
// How many questions the users get
const maxQuestions = 10;
//Question Duration in milliseconds ( 1000 milliseconds = 1second )
const timerDuration = 3000;

//Score board counter method
const player1 = {name: "mouse", score: 0};
const player2 = {name: "cat", score: 0};
let score = 0;

// function to update scores
function updateScore() {
    document.getElementById('scoreMouse').textContent = `Mouse Score: ${player1.score}`;    
    document.getElementById('scoreCat').textContent = `Cat Score: ${player2.score}`;
}

document.getElementById('start1').addEventListener('click', function() {
    player1.name = document.getElementById('playerName1').value;
    updateScore();

});

document.getElementById('start2').addEventListener('click', function() {
    player2.name = document.getElementById('playerName2').value;
    updateScore();

});

