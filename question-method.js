//question tracker//
let askedQuestions = [];

//Had to create a promise-based setTimeout(async)displayRandomQuestion, checkAnswer functions
function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//Question Selection Method
async function displayRandomQuestion() {
    const availableQuestions = questions.filter(q => !askedQuestions.includes(q));
    if (availableQuestions.length === 0) {
        alert("Game Over!");
        winnerCircle();
        return;
    }


  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];
 console.log(randomQuestion)

 //Display selected question
  let displayArea = document.querySelector('.questions .displayArea');
  displayArea.textContent = randomQuestion;
  console.log()

  //Clear previous Answer
  document.getElementById('mouseAnswer').value = '';
  document.getElementById('catAnswer').value = '';
//Question timer method
await delay(timerDuration);
// Questions array
askedQuestions.push(randomQuestion);

}
displayRandomQuestion();

// Determining the winner
function winnerCircle() {
    let winner;

    if (player1.score > player2.score) {
        winner = "Silly cat!, You gotta be quicker than that, Lol!";
    } else if (player1.score < player2.score) {
        winner = "I just LOVE Fast Food!, Yummy!";
    } else {
        winner = "I DIDN'T mean for You to see that!";
    }
    alert(winner);

    const theWinnerIs = document.querySelector('.theWinnerIs');
    const winnerImage = document.createElement('img');
    const winnerText = document.createElement('p');
    

    if (player1.score > player2.score) {
        winnerImage.src = '8943589.jpg';
        
    } else if (player1.score < player2.score) {
        winnerImage.src = 'ubi7_1qy7_210708.jpg';
        
    } else {
        winnerImage.src = '2558008.jpg'; 
     
    }

    winnerImage.width = 900;
    winnerImage.height = 500;

    winnerText.textContent = winner;
    theWinnerIs.appendChild(winnerImage);
    theWinnerIs.appendChild(winnerText);
}
//Check answers Method

// Mouse's Answer
document.getElementById('submitMouse').addEventListener('click', function() {
    checkAnswer('mouse');
});

// Cat's Answer
document.getElementById('submitCat').addEventListener('click', function() {
    checkAnswer('cat');
});

async function checkAnswer(player) {
    const userAnswer = document.getElementById(`${player}Answer`).value.trim();
    const currentQuestionIndex = questions.indexOf(document.querySelector('.questions .displayArea').textContent);


    if (currentQuestionIndex !== -1 && userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
        alert('Correct Answer!');
        if (player === 'mouse') {
            player1.score += correctAnswerPoints;
            handleCorrectAnswer(player, 0);
        } else if (player === 'cat') {
            player2.score += correctAnswerPoints;
            handleCorrectAnswer(player, 0);
        }
        
    } else {
        alert('Inncorret Answer!');
        if (player === 'mouse') {
            player1.score -= incorrectAnswerPenalty;
        } else if (player === 'cat') {
            player2.score -= incorrectAnswerPenalty;
        }
       
    }

    updateScore();  //updating the score display
   await displayRandomQuestion();
    
}



