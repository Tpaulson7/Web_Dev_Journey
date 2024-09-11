// ROCK PAPER SCISSORS

const choices = ['rock', 'paper', 'scissors'];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playGame = (playerChoice) => {
    let computerChoice = Math.floor(Math.random() * choices.length);
    return choices[computerChoice];


}


console.log(playGame())