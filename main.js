const moves = ["rock", "paper", "scissors"];
let p1Score = 0;
let p2Score = 0;

function getRandMove() {
    index = Math.floor(Math.random() * 3);
    return moves[index];
}

function getCPUChoice() {
    return getRandMove();
}

function getPlayerChoice() {
    let playerChoice = undefined    
    while (!moves.includes(playerChoice)) {
        playerChoice = window.prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase()
        console.log(playerChoice);
    }
}
