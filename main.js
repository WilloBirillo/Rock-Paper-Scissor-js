const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissor_button = document.querySelector("#scissor-button");

console.log(rock_button.value);
console.log(paper_button.value);
console.log(scissor_button.value);

function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  let computerChoice;
  if (result === 0) {
    computerChoice = "rock";
  } else if (result === 1) {
    computerChoice = "paper";
  } else if (result === 2) {
    computerChoice = "scissor";
  }
  return computerChoice;
}

//* Declaration of 2 variables to keep score of the game
let humanScore = 0;
let computerScore = 0;

function playRound(event) {
  const humanChoice = event.target.value;
  const computerChoice = getComputerChoice();

  console.log(humanChoice);
  console.log(computerChoice);
  
  

  if (computerChoice === humanChoice) {
    alert("The choices were the same, no one wins!");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    alert("Paper beats Rock, player wins!");
    humanScore += 1;
    return humanScore;
  } else if (computerChoice === "rock" && humanChoice === "scissor") {
    alert("Rock beats Scissor, cpu wins!");
    computerScore += 1;
    return computerScore;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    alert("Paper beats Rock, cpu wins!");
    computerScore += 1;
    return computerScore;
  } else if (computerChoice === "paper" && humanChoice === "scissor") {
    alert("Scissor beats Paper, player wins!");
    humanScore += 1;
    return humanScore;
  } else if (computerChoice === "scissor" && humanChoice === "rock") {
    alert("Rock beats Scissor, player wins!");
    humanScore += 1;
    return humanScore;
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    alert("Scissor beats Paper, cpu wins!");
    computerScore += 1;
    return computerScore;
  }
}

rock_button.addEventListener("click", playRound);
paper_button.addEventListener("click", playRound);
scissor_button.addEventListener("click", playRound);

/*
function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    playRound(humanChoice, computerChoice);
  }
} */

function gameWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    alert("No one winned try again!");
  } else if (humanScore > computerScore) {
    alert("The winner is Player!");
  } else if (humanScore < computerScore) {
    alert("The winner is Cpu!");
  }
}

// gameWinner(humanScore, computerScore);
