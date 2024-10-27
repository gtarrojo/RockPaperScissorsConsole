// global variables

let humanscore = 0;
let computerScore = 0;

// game logic

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

const getHumanChoice = function () {
  const choice = prompt("rock, paper or scissors?").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return getHumanChoice();
  }
};

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
      humanscore++;
    }
  }
  console.log(
    `You ${result}! Your choice was ${humanChoice} and computer selected ${computerChoice}`
  );
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
