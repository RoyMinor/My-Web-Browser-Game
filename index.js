// get the elements from html
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



//Method for randomizing Questions
// let currentQuestion = {};
// let acceptingAnwsers = true;
// let score = 0;
// let questionCounter = 0;
// let availableQuestions =[];
// let question = [
//     {question: "Biggest state?", answers: [{answer: "Tx", correct: false}, {answer: "Alaska", correct: true}]
//  }];
let answers = ['Alaska', 'Purple', '15', '25', '50', 'Yellow and Red', 'C', '30', 'Whale Shark', '36' ];

// How points are calculated
const correctAnswerPoints = 10;
// How many questions the users get
const maxQuestions = 10;

//Question Selection Method
function displayRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
 console.log(randomQuestion)
//  document.getElementById('answer').textContent;
  //console.log('Button Clicked');
  let displayArea= document.getElementsByClassName('questions')[0];
  displayArea.textContent = randomQuestion;
  console.log()

  document.getElementById('userAnswer').value = '';
}
//document.getElementById('button').addEventListener('click', buttonCommand);


//function, checks the value of the input tag and compares to see if is matches the answers
function checkAnswer() {
    const userAnswer = document.getElementById('userAnswer').value.trim();
    const currentQuestionIndex = questions.indexOf(document.getElementsByClassName('questions')[0].textContent);


    if (currentQuestionIndex !== -1 && userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
        alert('Correct Answer!');
    } else {
        alert('Inncorret Answer. Please try again.');
    }
    console.log(checkAnswer)
    displayRandomQuestion();
    
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



// // Starting the game

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...question];
//     console.log(availableQuestions);
//     getNewQuestion();
// };

//  getNewQuestion = () => {
  
//     questionCounter++;
//    const questionList = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestion = availableQuestions[questionList];
//     question.innerText = currentQuestion.question;
// }

// startGame();



