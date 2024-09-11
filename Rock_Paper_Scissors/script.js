// ROCK PAPER SCISSORS

const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playGame = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[computerChoice];

    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } 
    else {
        switch(playerChoice){
            case "rock": {
                result = (computerChoice === 'scissors' ) ? "You Win!" : "You Lose!";
                break;
            }
            case "paper": {
                result = (computerChoice === 'rock' ) ? "You Win!" : "You Lose!";
                break;
            }
            case "scissors": {
                result = (computerChoice === 'paper' ) ? "You Win!" : "You Lose!";
                break;
            }
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result;
}
