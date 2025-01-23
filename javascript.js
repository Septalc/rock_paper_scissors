// Random computer
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let textComputerChoice = "Computer choice: ";

    if (randomNumber === 1) {
        console.log(textComputerChoice + rock);
        return rock;
    } else if (randomNumber === 2) {
        console.log(textComputerChoice + paper);
        return paper;
    } else if (randomNumber === 3) {
        console.log(textComputerChoice + scissors);
        return scissors;
    }
}

// Human choice
function getHumanChoice(humanChoice) {
    while (true) {
        humanChoice = prompt("Choose : (Rock, Paper, Scissors)", "");

        if (humanChoice === null) {
            alert("Game cancelled. Goodbye!");
            return null;
        }

        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
            console.log("Your choice: " + humanChoice);
            break;
        } else {
            alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        }
    }

    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie");
        alert("It's a tie !\nYou chose the " + humanChoice + "\nThe computer chose the " + computerChoice + "\nYour score : " + humanScore + "\nThe score of the computer : " + computerScore );
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log("You win");
        alert("You win !\nYou chose the " + humanChoice + "\nThe computer chose the " + computerChoice + "\nYour score : " + humanScore + "\nThe score of the computer : " + computerScore );
        return;
    } else {
        computerScore++;
        console.log("You loose");
        alert("You loose !\nYou chose the " + humanChoice + "\nThe computer chose the " + computerChoice + "\nYour score : " + humanScore + "\nThe score of the computer : " + computerScore );
        return;
    }
}

function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === null) {
            return;
        }

        playRound(humanSelection, computerSelection);
    }
}

playGame(5);

if (humanScore > computerScore) {
    alert("You win the game !\nYour final score : " + humanScore + "\nThe score of the computer : " + computerScore);
} else if (humanScore < computerScore) {
    alert("You lose the game !\nYour final score : " + humanScore + "\nThe score of the computer : " + computerScore);
} else if (humanScore === 0 && computerScore === 0) {
    console.log("The player has quit the game.")
} else {
    alert("It's a tie !\nYour final score : " + humanScore + "\nThe score of the computer : " + computerScore);
}


