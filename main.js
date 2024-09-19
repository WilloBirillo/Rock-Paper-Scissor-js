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

  if (computerChoice === humanChoice) {
    alert("The choices were the same, no one wins!");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    alert("Paper beats Rock, player wins!");
    humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissor") {
    alert("Rock beats Scissor, cpu wins!");
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    alert("Paper beats Rock, cpu wins!");
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "scissor") {
    alert("Scissor beats Paper, player wins!");
    humanScore += 1;
  } else if (computerChoice === "scissor" && humanChoice === "rock") {
    alert("Rock beats Scissor, player wins!");
    humanScore += 1;
  } else if (computerChoice === "scissor" && humanChoice === "paper") {
    alert("Scissor beats Paper, cpu wins!");
    computerScore += 1;
  }
  updateScores();
}

rock_button.addEventListener("click", playRound);
paper_button.addEventListener("click", playRound);
scissor_button.addEventListener("click", playRound);

const score_container = document.querySelector("#score");
const player_score_display = document.createElement("div");
const cpu_score_display = document.createElement("div");

player_score_display.textContent = `Player score: ${humanScore}`;
cpu_score_display.textContent = `Cpu score: ${computerScore}`;

score_container.appendChild(player_score_display);
score_container.appendChild(cpu_score_display);

console.log(humanScore); // non logga queste robe non so perché
console.log(computerScore);

function updateScores() {
  player_score_display.textContent = `Player score: ${humanScore}`;
  cpu_score_display.textContent = `Cpu score: ${computerScore}`;
}

//! non funziona la funzione sotto
/*
function gameWinner(humanScore, computerScore) {
  if (humanScore == 5 || computerScore == 5) {
  }
  if (humanScore > computerScore) {
    alert("The winner is Player!");
  } else {
    alert("The winner is Cpu!");
  }
}

gameWinner(humanScore, computerScore)
*/
