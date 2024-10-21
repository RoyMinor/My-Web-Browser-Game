// Move Racer 
let mouseScore = 0;
let catScore = 0;
const moveStep = 200; // Define how much each point moves the racer
const mouseRacer = document.getElementById('mouseRacer');
const catRacer = document.getElementById('catRacer');

function moveRacer(racer, position) {
    racer.style.left = `${position}px`;
}

function updateRacerPositions() {
    const mousePosition = mouseScore * moveStep; // Calculate position based on score
    const catPosition = catScore * moveStep; // Calculate position based on score

    moveRacer(mouseRacer, mousePosition);
    moveRacer(catRacer, catPosition);
}

function handleCorrectAnswer(player) {
    if (player === 'mouse') {
        mouseScore++; // Increment mouse score
    } else if (player === 'cat') {
        catScore++; // Increment cat score
    }

    updateRacerPositions(); // Update racer positions based on scores
}

// Example of how to handle wrong answers
function handleWrongAnswer(player) {
    // You can decide what to do on a wrong answer
}

// Call this function to reset scores if needed
function resetScores() {
    mouseScore = 0;
    catScore = 0;
    updateRacerPositions(); // Reset positions as well
}
