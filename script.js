// global variables

let humanscore = 0;
let computerScore = 0;

// functions

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
  const choice = prompt("rock, paper or scissors?");
  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    getHumanChoice();
  }
};

console.log(getHumanChoice());
