let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    const targetNum = Math.floor(Math.random()*10)
    return targetNum;
}
function compareGuesses(humanGuess, comGuess, targetNum){
    
    if (humanGuess < 0 || humanGuess > 9 || comGuess < 0 || comGuess > 9){
        alert('Guesses most be between 0-9.');
        return null;
    }
    const diff1 = Math.abs(humanGuess - targetNum)
    const diff2 = Math.abs(comGuess - targetNum)
    
    if(humanGuess === targetNum){
        return true
    }   
    else if(comGuess === targetNum){
        return false
    }
    else if(diff1 < diff2){
        return true
    }
    else if(diff1 > diff2){
        return false
    }
    else{
        return true;
    }
}
function updateScore(winner) {
    if (winner === true) {
        humanScore += 1;
    }
    else{
        computerScore +=1;
    }
}
function advanceRound(){
    currentRoundNumber +=1
}

const targetNum = generateTarget();
const humanGuess = 3;
const comGuess = 5;

const winner = compareGuesses(humanGuess, comGuess, targetNum);
    if(winner != null){
        updateScore(winner);
        advanceRound();
}
console.log(`Target number was: ${targetNum}`);
console.log(`Human score is: ${humanScore}, computer score is: ${computerScore}`);