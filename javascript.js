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
  

function playRound(humanChoice){

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


const container = document.createElement("div");
document.body.appendChild(container);

const choices = [rock, paper, scissors];

choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
        playRound(choice);
    });
    container.appendChild(button);
});