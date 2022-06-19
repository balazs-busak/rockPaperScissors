// Set some global variables so we can use them later for the scores

let playerScore = 0
let computerScore = 0

// Get a random string from an array as Computer's pick

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
        playerScore++
        return "You win, ROCK beats SCISSORS!"
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lost, PAPER beats ROCK!"
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win, PAPER beats ROCK!"
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lost, SCISSORS beats PAPER!"
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "You win, SCISSORS beats PAPER!"
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lost, ROCK beats SCISSORS!"
    }
}

const playerSelection = "rock";
// A for loop to play 5 rounds with also looping the computer's random choices
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
// Return a string with the outcome of your game.
    if (playerScore > computerScore) {
        return "You won, gj"
    }   else if (playerScore < computerScore) {
        return "You lost, bg"
    }   else {
        return "You tied..."
    }
}

    console.log(game())