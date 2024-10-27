// global variables //

let humanScore = 0;
let computerScore = 0;

// GAME LOGIC //
///////////////

// get computer choice

const getComputerChoice = function () {
  const number = Math.trunc(Math.random() * 3) + 1;
  if (number == 1) {
    return "rock";
  } else if (number == 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

// get human choice

const getHumanChoice = function () {
  const choice = prompt("rock, paper or scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return getHumanChoice();
  }
};

// play round

const playRound = function (humanChoice, computerChoice) {
  let result = "";
  if (humanChoice === computerChoice) {
    result = "draw";
  } else {
    if (
      (humanChoice === "paper" && computerChoice === "scissors") ||
      (humanChoice === "rock" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "rock")
    ) {
      result = "lose";
      computerScore++;
    } else {
      result = "win";
      humanScore++;
    }
  }
  console.log(
    `You ${result}! Your choice was ${humanChoice} and computer selected ${computerChoice}`
  );
};

// play game (5 rounds)
let humanSelection;
let computerSelection;

const playGame = function () {
  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();

  for (let i = 0; i < 5; i++) {
    playRound(humanSelection, computerSelection);
    console.log(
      `Your score is ${humanScore} vs computer score ${computerScore}.`
    );
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It is a draw!");
  }
};

playGame();
