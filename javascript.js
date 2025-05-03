const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;
let bothTie = 0;

function getComputerChoice(rock, paper, scissors) {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return rock;
    if (random === 1) return paper;
    return scissors;
  }
  
console.log(getComputerChoice("rock", "paper", "scissors"));


function getHumanChoice(){

    let choose = prompt('Welcome to the game: To play, please type rock, paper or scissors:').toLowerCase();

    if (choose === rock){
        return rock;
    } else if (choose === paper){
        return paper;
    } else{
        return scissors;
    }
}


function playRound(){

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(rock, paper, scissors);

    console.log('You chose:', humanChoice);
    console.log('Computer chose:', computerChoice);


    if (computerChoice === humanChoice){
        bothTie++;
        console.log("It's a tie");
    } else if (
        (humanChoice === rock && computerChoice === scissors) ||
        (humanChoice === paper && computerChoice === rock) ||
        (humanChoice === scissors && computerChoice === paper) 
    ) {
        humanScore++;
        console.log('You win this round!');
    } else{
        computerScore++;
        console.log('Computer wins!');
    }
    console.log("My score:", humanScore);
    console.log("Computer score:", computerScore);
    console.log("Number of Ties:", bothTie);
}

playRound();
