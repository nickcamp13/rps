const moves = ["rock", "paper", "scissors"];
const playerMoveWinsAgainst = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}
let playerScore = 0;
let cpuScore = 0;

function getRandMove() {
    index = Math.floor(Math.random() * 3);
    return moves[index];
}

function getCPUChoice() {
    return getRandMove();
}

function getPlayerChoice() {
    let move = ''   
    while (!moves.includes(move)) {
        move = window.prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase()
    }
    return move;
}

function displayScores() {
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer's Score: ${cpuScore}`);
}

function displayMoves(playerMove, cpuMove) {
    console.log(`You played ${playerMove.toUpperCase()}`);
    console.log(`The computer played ${cpuMove.toUpperCase()}`);
}

function playRound(playerMove, cpuMove) {
    displayMoves(playerMove, cpuMove);

    if (playerMoveWinsAgainst[playerMove] === cpuMove) {
        console.log(`You win! ${playerMove.toUpperCase()} beats ${cpuMove.toUpperCase()}`);
        playerScore++;
    } else if (playerMove === cpuMove) {
        console.log(`It's a tie. You both chose ${playerMove}`);
    } else {
        console.log(`You lose! ${cpuMove.toUpperCase()} beats ${playerMove.toUpperCase()}`);
        cpuScore++;
    }
    displayScores();
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        const playerChoice = getPlayerChoice();
        console.log("=================================");
        console.log(`Round ${i}`);
        const cpuChoice = getCPUChoice();
        playRound(playerChoice, cpuChoice)
    }
    console.log("=================================");
    console.log("GAME OVER");
    displayScores();
    if (playerScore > cpuScore) {
        console.log("Congratulations! You Win!");
    } else if (playerScore < cpuScore) {
        console.log("Sorry, the CPU wins.");
    } else {
        console.log("Wow its a tie!");
    }
}

playGame();