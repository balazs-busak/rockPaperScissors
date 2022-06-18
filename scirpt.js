// Get a random string from an array as Computer choice

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randNum]
    return computerChoice
}
// Play a round that returns a string after setting Conditional Statements

function playRound (playerSelection, computerSelection) {
 
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie, You both picked ROCK!"
    }   else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie, You both picked PAPER!"
    }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie, You both picked SCISSORS!"
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win, ROCK beats SCISSORS!"
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost, PAPER beats ROCK!"
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win, PAPER beats ROCK!"
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost, SCISSORS beats PAPER!"
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win, SCISSORS beats PAPER!"
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost, ROCK beats SCISSORS!"
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
     }
}
game()

