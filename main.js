const moves = ["rock", "paper", "scissors"];
const playerMoveWinsAgainst = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

// Scores
let playerScore = 0;
const playerScoreNode = document.querySelector("#playerscore")
playerScoreNode.textContent = playerScore

let cpuScore = 0;
const cpuScoreNode = document.querySelector("#cpuscore")
cpuScoreNode.textContent = cpuScore
// EndOf Scores

// Choice Button Event Listeners
const rockBtn = document.querySelector("#rock")
rockBtn.addEventListener("click", () => {
    playRound("rock", getCPUChoice())
})

const paperBtn = document.querySelector("#paper")
paperBtn.addEventListener("click", () => {
    playRound("paper", getCPUChoice())
})

const scissorsBtn = document.querySelector("#scissors")
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getCPUChoice())
})
// EndOf Event Listeners

function disableButtons() {
    rockBtn.disabled = true
    paperBtn.disabled = true
    scissorsBtn.disabled = true
}

const resultsDiv = document.querySelector("#results")


function getRandMove() {
    index = Math.floor(Math.random() * 3);
    return moves[index];
}

function getCPUChoice() {
    return getRandMove();
}

function displayMoves(playerMove, cpuMove) {
    const playerText = document.createElement("p")
    playerText.textContent = `You played ${playerMove.toUpperCase()}`
    
    const cpuText = document.createElement("p")
    cpuText.textContent = `The computer played ${cpuMove.toUpperCase()}`
    
    while (resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.lastChild)
    }
    resultsDiv.appendChild(playerText)
    resultsDiv.appendChild(cpuText)
}

function playRound(playerMove, cpuMove) {
    displayMoves(playerMove, cpuMove);

    // Player wins
    if (playerMoveWinsAgainst[playerMove] === cpuMove) {
        playerScore++;
        playerScoreNode.textContent = playerScore
    }
    // Computer Wins 
    else if (playerMove === cpuMove) {
        
    }
    // Draw 
    else {
        cpuScore++;
        cpuScoreNode.textContent = cpuScore
    }

    if (playerScore >= 5) {
        const winningText = document.createElement("h2")
        winningText.textContent = "Congratulations you won the game!"
        resultsDiv.appendChild(winningText)
        disableButtons()
    }
    else if (cpuScore >= 5) {
        const losingText = document.createElement("h2")
        losingText.textContent = "Sorry. You have lost. Try again."
        resultsDiv.appendChild(losingText)
        disableButtons()
    }

}