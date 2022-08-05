// Set some global variables so we can use them later for the scores.

let playerScore = 0
let computerScore = 0
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const gameContainer = document.querySelector('.container');
const results = document.querySelector('.results');

// Get a random string from an array as Computer's pick.

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randNum = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randNum]
    return computerChoice
}

// const results = document.createElement('div');
// results.classList.add('results');
// results.style.margin = '20px';
// // results.textContent = '';
// gameContainer.appendChild(results);

// Play a round that returns a string after setting Conditional Statements.

function playRound (playerSelection, computerSelection) {
    console.log('1 ', playerSelection, '2 ', computerSelection)
    if (playerSelection === "rock" && computerSelection === "rock") {
        const p = document.createElement('p');
        p.innerText = "It's a tie, You both picked ROCK!";
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "paper") {
        const p = document.createElement('p');
        p.innerText = "It's a tie, You both picked PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
        const p = document.createElement('p');
        p.innerText = "It's a tie, You both picked SCISSORS!"
        results.appendChild(p);
    }   else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win, ROCK beats SCISSORS!"
        results.appendChild(p);
    }   else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lost, PAPER beats ROCK!"
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win, PAPER beats ROCK!"
        results.appendChild(p);
    }   else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lost, SCISSORS beats PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        const p = document.createElement('p');
        p.innerText = "You win, SCISSORS beats PAPER!"
        results.appendChild(p);
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        const p = document.createElement('p');
        p.innerText = "You lost, ROCK beats SCISSORS!"
        results.appendChild(p);
    }   
}


// When clicking a button it gives the playerSelection the same value while also returns a cumputerChoice

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

const scores = document.createElement('p');
scores.innerText = 'Scores: Player: ' + playerScore;
results.appendChild(scores);

// // A for loop to play 5 rounds with comp and player added to the loop so it returns different each round.

// function game() {
//     for (let i = 0; i < 5; i++) {
//         // const playerSelection = prompt("Make your decision: ROCK, PAPER, SCISSORS. Choose by typing it down.").toLowerCase(); // This makes the prompt insensitive for any case
//         // const computerSelection = computerPlay();
//         // playRound(playerSelection, computerSelection)
//         // console.log(playRound(playerSelection, computerSelection))
//     }

// // Return a string with the outcome of your game.

//     if (playerScore > computerScore) {
//         return "You won the game this time, good job!"
//     }   else if (playerScore < computerScore) {
//         return "You lost the game this time, try again, when ready!"
//     }   else {
//         return "You tied, try again, when ready!"
//     }
// }

//     console.log(game())