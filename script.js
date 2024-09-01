// Rock Paper Scissor

function getComputerChoice() {
  const x = Math.random();
  if (x<=0.33) {
    return "rock";
  } else if (x<=0.67) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  const x = prompt("Please choose between rock, paper and scissor");
  return x.toLowerCase();
}

function playRound (humanChoice, computerChoice) {
  if (humanChoice=="rock") {
    if (computerChoice=="rock") {
      return 0;
    } else if (computerChoice=="paper") {
      return -1;
    } else {
      return 1;
    }
  } else if (humanChoice=="paper") {
      if (computerChoice=="paper") {
        return 0;
      } else if (computerChoice=="scissor") {
        return -1;
      } else {
        return 1;
    }
  } else if (humanChoice=="scissor") {
      if (computerChoice=="scissor") {
        return 0;
      } else if (computerChoice=="rock") {
        return -1;
      } else {
        return 1;
      }
  }  else {
    return 2;
  }
}

function playGame (rounds) {
  var computerScore = 0;
  var humanScore = 0;
  var drawScore = 0;
  var invalidScore = 0;
  for (i=0; i<rounds; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    round = playRound(humanChoice,computerChoice);
    //console.log(round);
    if (round==1) {
      humanScore = humanScore + 1;
    } else if (round==-1) {
      computerScore = computerScore + 1;
    } else if (round==0) {
      drawScore = drawScore + 1;
    } else {
      invalidScore = invalidScore + 1;
    }
  }
  console.log("Human Score = " + humanScore);
  console.log("Computer Score = " + computerScore);
  console.log("Draws = " + drawScore);
  console.log("Invalid choices = " + invalidScore);

  if (humanScore>computerScore) {
    console.log("Congratulations! You win");
  } else if (humanScore == computerScore) {
    console.log("It's a draw!");
  } else {
    console.log("Sorry! You lost.");
  }
}

playGame(5); //how many rounds?