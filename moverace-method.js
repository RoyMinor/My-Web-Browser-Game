// Move Racer 
let moveListIndex = 0;

const mouseRacer = document.getElementById('mouseRacer');
const catRacer = document.getElementById('catRacer');

function moveRacer(racer, position) {
        racer.style.left = `${position}px`;
    
    }

    function handleCorrectAnswer(player) {
        const racer = player === 'mouse' ? mouseRacer : catRacer;
        const move = moveList[moveListIndex];

        racer.style.animationDuration = '90s';
        moveRacer(racer, move); 
        
        moveListIndex++;

        if(moveListIndex === moveList.length) {
            alert(`${player} has reached the end!`);

            moveListIndex = 0
        }
    }
