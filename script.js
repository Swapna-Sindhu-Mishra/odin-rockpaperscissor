// Rock Paper Scissor
function getComputerChoice() {
  x = Math.random();
  if (x<0.33) {
    return "rock";
  } else if (x<0.67) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  return prompt("Please choose between rock, paper and scissor")
}

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();

console.log(getHumanChoice())