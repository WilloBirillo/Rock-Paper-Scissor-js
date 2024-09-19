const rock_button = document.querySelector("#rock-button");
const paper_button = document.querySelector("#paper-button");
const scissor_button = document.querySelector("#scissor-button");

//* Declaration of 2 variables to keep score of the game
let humanScore = 0;
let computerScore = 0;

const information_container = document.querySelector("#information");
const player_score_display = document.createElement("div");
const cpu_score_display = document.createElement("div");
const score_container = document.querySelector("#score");

rock_button.addEventListener("click", playRound);
paper_button.addEventListener("click", playRound);
scissor_button.addEventListener("click", playRound);

const endgame_button = document.createElement("button");
endgame_button.classList.add("remove-button");
endgame_button.textContent = "RESTART";

score_container.appendChild(player_score_display);
score_container.appendChild(cpu_score_display);

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

function playRound(event) {
  const humanChoice = event.target.value;
  const computerChoice = getComputerChoice();
  if (computerChoice === humanChoice) {
    tieRoundMessage();
  } else if (
    (computerChoice === "rock" && humanChoice === "paper") ||
    (computerChoice === "scissor" && humanChoice === "rock") ||
    (computerChoice === "paper" && humanChoice === "scissor")
  ) {
    humanScore += 1;
    playerRoundMessage();
  } else if (
    (computerChoice === "rock" && humanChoice === "scissor") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissor" && humanChoice === "paper")
  ) {
    computerScore += 1;
    cpuRoundMessage();
  }
  updateScores();

  if (humanScore == 5 || computerScore == 5) {
    gameWinner(endgame_button, humanScore, computerScore);
  }
}

function playerWin() {
  const player_win = document.createElement("div");
  player_win.textContent = "Good job you won";
  information_container.appendChild(player_win);
  updateMessage(player_win);
}

function computerWin() {
  const computer_win = document.createElement("div");
  computer_win.textContent = "Too bad you lost";
  information_container.appendChild(computer_win);
  updateMessage(computer_win);
}

function tieRoundMessage() {
  const tie_message = document.createElement("div");
  tie_message.textContent = "Close enough, no one wins the round! 👺"
  information_container.appendChild(tie_message);
  updateMessage(tie_message)
}

function playerRoundMessage() {
  const player_message = document.createElement("div");
  player_message.textContent = "Good job, player wins the round! 👍";
  information_container.appendChild(player_message);
  updateMessage(player_message);
}

function cpuRoundMessage() {
  const cpu_message = document.createElement("div");
  cpu_message.textContent = "Too bad, cpu wins the round! 💩";
  information_container.appendChild(cpu_message);
  updateMessage(cpu_message);
}

//* Used to clear all the messages
function updateMessage(message) {
  rock_button.addEventListener("click", () => message.remove());
  paper_button.addEventListener("click", () => message.remove());
  scissor_button.addEventListener("click", () => message.remove());
  endgame_button.addEventListener("click", () => message.remove());
}

function updateScores() {
  player_score_display.textContent = `Player score: ${humanScore}`;
  cpu_score_display.textContent = `Cpu score: ${computerScore}`;
}

function gameWinner(endgame_button, humanScore, computerScore) {
  if (humanScore == 5) {
    playerWin();
  } else if (computerScore == 5) {
    computerWin();
  }
  disableButtons();
  
  information_container.appendChild(endgame_button);
  endgame_button.addEventListener("click", () => {
    resetGame();
    endgame_button.remove();
  });
}

function disableButtons() {
  rock_button.disabled = true;
  paper_button.disabled = true;
  scissor_button.disabled = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScores();
  rock_button.disabled = false;
  paper_button.disabled = false;
  scissor_button.disabled = false;
}

updateScores();
