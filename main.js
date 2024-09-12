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
console.log(getComputerChoice());


