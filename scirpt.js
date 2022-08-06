// Set some global variables so we can use them later for the scores.

let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const gameContainer = document.querySelector('.container');
const results = document.querySelector('.results');
const p = document.createElement('p');
const computerScores = document.createElement('p');
const playerScores = document.createElement('p');

// Get a random string from an array as Computer's pick.

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randNum]
    return computerChoice
}

// Play a round that returns a string after setting Conditional Statements.

function playRound (playerSelection, computerSelection) {
    console.log(playerScore, computerScore);
    if (playerSelection === "rock" && computerSelection === "rock") {
        
        p.innerText = "It's a tie, You both picked ROCK!";
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "paper") {
        
        p.innerText = "It's a tie, You both picked PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
        
        p.innerText = "It's a tie, You both picked SCISSORS!"
        results.appendChild(p);
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        
        p.innerText = "You win, ROCK beats SCISSORS!"
        results.appendChild(p);
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore ++
        
        p.innerText = "You lost, PAPER beats ROCK!"
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        
        p.innerText = "You win, PAPER beats ROCK!"
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        
        p.innerText = "You lost, SCISSORS beats PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        
        p.innerText = "You win, SCISSORS beats PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
    
        p.innerText = "You lost, ROCK beats SCISSORS!"
        results.appendChild(p);
    }   
    
    playerScores.innerText = 'Your score: ' + playerScore;
    gameContainer.appendChild(playerScores);


    computerScores.innerText = 'Computer score: ' + computerScore
    gameContainer.appendChild(computerScores);
}


// When clicking a button it gives the playerSelection the same value as the button while also returns a cumputerChoice

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock'
    // console.log(playerSelection)
    // console.log(computerPlay())
    playRound(playerSelection, computerSelection);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper'
    // console.log(playerSelection)
    // console.log(computerPlay())
    playRound(playerSelection, computerSelection);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors'
    // console.log(playerSelection)
    // console.log(computerPlay())
    playRound(playerSelection, computerSelection);
})
