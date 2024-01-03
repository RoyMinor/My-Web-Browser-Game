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



