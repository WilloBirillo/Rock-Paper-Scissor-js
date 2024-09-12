function getComputerChoice() {
  let result = Math.floor(Math.random() * 3);
  console.log(result);
  let computerChoice;
  if (result === 0) {
    computerChoice = "Rock";
  } else if (result === 1) {
    computerChoice = "Paper";
  } else if (result === 2) {
    computerChoice = "Scissor";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissor");
  console.log(humanChoice);
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
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

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    playRound(humanChoice, computerChoice);
  }
}

playGame();

function gameWinner(humanScore, computerScore) {
  if (humanScore === computerScore) {
    alert("No one winned try again!");
  } else if (humanScore > computerScore) {
    alert("The winner is Player!");
  } else if (humanScore < computerScore) {
    alert("The winner is Cpu!");
  }
}

gameWinner(humanScore, computerScore);
