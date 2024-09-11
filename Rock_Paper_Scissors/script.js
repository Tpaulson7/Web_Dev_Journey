// ROCK PAPER SCISSORS

const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playGame = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    computerChoice = choices[computerChoice];

    const playerDisplay = 0;
    const computerDisplay = 0;

    if (playerChoice === computerChoice) {
        return `You both chose ${playerChoice}, it's a Tie!`
    } else if (playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock' || playerChoice === 'paper' && computerChoice === 'scissors') {
        computerDisplay++;
        return `You chose ${playerChoice} and the computer chose ${computerChoice}, You Lose!`
    } else {
        playerDisplay++;
        return `You chose ${playerChoice} and the computer chose ${computerChoice}, You Win!`
    }
}
