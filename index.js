//Character Icons
// const player1 = {name: "mouse", score: 0};
// const player2 = {name: "cat", score: 0};


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
    'The colors red and blue combined together produces what color?', 
    'What is 5 x 3?', 'What is 13 + 12 ?',
    'How many states are there in America?',
    'What colors mixed together make orange?',
    'What is the third letter in the alphabet?', 
    'What is 10 x 3?',
    'What is the biggest fish in the ocean?',
    'What is 6 x 6?'
 ];


let answers = ['Alaska', 'Purple', '15', '25', '50', 'Yellow and Red', 'C', '30', 'Whale Shark', '36' ];



// Movement list
const moveList = [

    100,
    200,
    350,
    500,
    700,
    900,
    1000,
    1100,
    1300,
    1500,
    2000
];




    




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





