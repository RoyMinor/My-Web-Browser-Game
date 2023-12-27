//Character Icons
let cat = document.createElement('img')
cat.src ='cat_4659716.png';
cat.position = 'fixed';
cat.top = '0';
document.body.append(cat);

let mouse = document.createElement('img')
mouse.src ='rat-looking-right_84446.png';
mouse.position = 'fixed';
mouse.top = '0';
document.body.append(mouse);

// start with an array of ten questions
let questions = [
    'What is the the biggest state in the US? ',
    'The color red and blue makes what color?', 
    'What is 5 x 3?', 'What is 13 + 12 ?',
    'How many states are there in America?',
    'What colors mixed together make orange?',
    'What is the third letter in the alphabet?', 
    'What is 10 x 3?',
    'What is the biggest fish in the ocean?',
    'What is 6 x 6?'
 ];


// let availableQuestions =[];
// let question = [
//     {question: "Biggest state?", answers: [{answer: "Tx", correct: false}, {answer: "Alaska", correct: true}]
//  }];
let answers = ['Alaska', 'Purple', '15', '25', '50', 'Yellow and Red', 'C', '30', 'Whale Shark', '36' ];

// How points are calculated
const correctAnswerPoints = 10;
const incorrectAnswerPenalty = 5;
// How many questions the users get
const maxQuestions = 10;
//Question Duration in milliseconds ( 1000 milliseconds = 1second )
const timerDuration = 10000;

//Scoreboard and question tracker
let score = 0;
let askedQuestions = [];

//Had to create a promise-based setTimeout(async)displayedRandomQuestion, checkAnswer functions
function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

//Question Selection Method
async function displayRandomQuestion() {
    const availableQuestions = questions.filter(q => !askedQuestions.includes(q));

    if (availableQuestions.length === 0) {
        alert('Game Over! Please try again');
        return;
    }
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const randomQuestion = availableQuestions[randomIndex];
 console.log(randomQuestion)

 //Display selected question
  let displayArea= document.querySelector('.questions .displayArea');
  displayArea.textContent = randomQuestion;
  console.log()

  //Clear previous Answer
 document.getElementById('userAnswer').value = '';
//Question timer method
await delay(timerDuration);
// Questions array
askedQuestions.push(randomQuestion);

}



//Check answers Method
async function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const currentQuestionIndex = questions.indexOf(document.querySelector('.questions .displayArea').textContent);


    if (currentQuestionIndex !== -1 && userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
        alert('Correct Answer!');
        score += correctAnswerPoints;
        updateScore(); //update displayed scoring
    } else {
        alert('Inncorret Answer. Please try again.');
        score -=  incorrectAnswerPenalty;
    }
    updateScore();

    console.log(checkAnswer)
    await displayRandomQuestion();
    
}

//Function to display update
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
}
//Buttons
document.getElementById('button').addEventListener('click', displayRandomQuestion);
document.getElementById('submit').addEventListener('click', checkAnswer);

displayRandomQuestion();

// // Format for questions
//  let mockData = questions.length;

//  let questionList = {
//     "QNA1": {
//             "question1": "What is the biggest state in the US?",
//             "answer1": "Alaska",
//         },
//     "QNA2": {
//             "question2": "The color red and blue makes what color?",
//             "answer2": "Purple",
//         },
//     "QNA3": {
//             "question3": "What is 5 x 3?",
//             "answer3": "15",
//         },
//     "QNA4": {
//             "question4": "What is 13 + 12 ?",
//             "answer4": "25",
//         },
//     "QNA5": {
//             "question5": "How many states are there in America?",
//             "answer5": "50",
//         },
//      "QNA6": {
//             "question6": "What colors mixed together make orange?",
//             "answer6": "Yellow and Red",
//         },
//     "QNA7": {
//             "question7": "What is the third letter in the alphabet?",
//             "answer7": "C",
//         },
//     "QNA8": {
//             "question8": "What is 10 x 3?",
//             "answer8": "30",
//         },
//     "QNA9": {
//             "question9": "What is the biggest fish in the ocean?",
//             "answser9": "Whale Shark",
//         },
//     "QNA10": {
//             "question10": "What is 6 x 6?",
//             "answer10": "36",
//         },
//     }





