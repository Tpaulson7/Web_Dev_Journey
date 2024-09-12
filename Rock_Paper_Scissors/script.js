// ROCK PAPER SCISSORS

const choices = ['Rock', 'Paper', 'Scissors'];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const counterDisplay = document.getElementById("counterDisplay")
const lossDisplay = document.getElementById("lossDisplay")

let wins = 0;
let computerWins = 0;

const playGame = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[computerChoice];

    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } 
    else {
        switch(playerChoice){
            case "Rock": {
                result = (computerChoice === 'Scissors' ) ? "You Win!" : "You Lose!";
                if (result === "You Win!") {
                    wins++
                } else computerWins++
                break;
            }
            case "Paper": {
                result = (computerChoice === 'Rock' ) ? "You Win!" : "You Lose!";
                if (result === "You Win!") {
                    wins++
                } else computerWins++
                break;
            }
            case "Scissors": {
                result = (computerChoice === 'Paper' ) ? "You Win!" : "You Lose!";
                if (result === "You Win!") {
                    wins++
                } else computerWins++
                break;
            }
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;
    counterDisplay.textContent = `PLAYER: ${wins}`;
    lossDisplay.textContent = `COMPUTER: ${computerWins}`;
}
