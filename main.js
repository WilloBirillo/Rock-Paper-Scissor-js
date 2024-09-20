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

const show_computer_choice = document.createElement("div");
const show_player_choice = document.createElement("div");
const show_container = document.querySelector("#show-choice");
const choices_text = document.querySelector("#your-choices");

choices_text.textContent = "YOUR CHOICES";

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
function showChoice(humanChoice, computerChoice, show_computer_choice, show_player_choice){
  if (humanChoice === "rock"){
    show_player_choice.textContent = "✊";
  } else if (humanChoice === "paper"){
    show_player_choice.textContent = "🤚";
  } else if (humanChoice === "scissor"){
    show_player_choice.textContent = "✌️";
  }
  if (computerChoice === "rock") {
    show_computer_choice.textContent = "✊";
  } else if (computerChoice === "paper") {
    show_computer_choice.textContent = "🤚";
  } else if (computerChoice=== "scissor") {
    show_computer_choice.textContent = "✌️";
  }
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

  showChoice(humanChoice, computerChoice, show_computer_choice, show_player_choice);
  show_container.appendChild(show_player_choice);
  show_container.appendChild(show_computer_choice);
}

function playerWin() {
  const player_win = document.createElement("div");
  player_win.textContent = "YES You won, Good job";
  player_win.classList.add("player-win-text");
  information_container.appendChild(player_win);
  updateMessage(player_win);
}

function computerWin() {
  const computer_win = document.createElement("div");
  computer_win.textContent = "NOO You lost, Better luck next time";
  computer_win.classList.add("computer-win-text");
  information_container.appendChild(computer_win);
  updateMessage(computer_win);
}

function tieRoundMessage() {
  const tie_message = document.createElement("div");
  tie_message.textContent = "Close enough, no one wins the round! 👺";
  information_container.appendChild(tie_message);
  updateMessage(tie_message);
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
  endgame_button.addEventListener("click", () => show_computer_choice.remove());
  endgame_button.addEventListener("click", () => show_player_choice.remove());
}

function updateScores() {
  player_score_display.textContent = `Your Score 😂🫵: ${humanScore}`;
  cpu_score_display.textContent = `Computer Score 🤖: ${computerScore}`;
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
