/* Rock, Paper, Scissors */

/* Create function for computer choice
Get random integer from 0-2, 0=rock, 1=paper, 2=scissors */
function getComputerChoice() {
    computer = Math.floor(Math.random() * 3);

    if (computer === 0) {
        return 'Rock';
    }
    else if (computer === 1) {
        return 'Paper';
    }
    else if (computer === 2) {
        return 'Scissors';
    } else {
        console.log("Error#1");
    }
}

console.log(getComputerChoice())

/* Create function for human choice*/

function getHumanChoice() {
    let buttons = document.querySelector('#buttons');

    buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors';
            break;
    }
});
}



/* Create function to keep track of score */
function getScore(humanChoice, computerChoice){

    if (humanChoice === 'rock' && computerChoice === 'Paper') {
        alert("Computer wins");
        return "computer"
    }
    else if (humanChoice === 'rock' && computerChoice === 'Scissors') {
        alert("Player wins");
        return "player"
    }
    else if (humanChoice === 'rock' && computerChoice === 'Rock') {
        alert("Tie! Nobody earns points");
        return "tie";
    }
    else if (humanChoice === 'paper' && computerChoice === 'Scissors') {
        alert("Computer wins");
        return "computer"
    }
    else if (humanChoice === 'paper' && computerChoice === 'Rock') {
        alert("Player wins");
        return "player"
    }
    else if (humanChoice === 'paper' && computerChoice === 'Paper') {
        alert("Tie! Nobody earns points");
        return "tie";
    }
    else if (humanChoice === 'scissors' && computerChoice === 'Paper') {
        alert("Player wins");
        return "player"
    }
    else if (humanChoice === 'scissors' && computerChoice === 'Rock') {
        alert("Computer wins");
        return "computer"
    }
    else if (humanChoice === 'scissors' && computerChoice === 'Scissors') {
        alert("Tie! Nobody earns points");
        return "tie";
    }
    else {
        alert("error: check getScore function in js script");
    }
}

/* Create function to play a single round */
function playRound() {
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let result = getScore(humanChoice, computerChoice);
    return result

}


/* Create function to play the whole game */
// First to 5 wins, prompt user to play again after game finishes

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 5 && computerScore < 5) {
        let roundResult = playRound()

        if (roundResult === 'computer') {
            computerScore++;
        }
        else if (roundResult === 'player') {
            humanScore++;
        }
        else if (roundResult === 'tie') {
        }
        alert(`Player Score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    // print winner when score reaches 5
    if (humanScore == 5) {
        let replay = prompt("Player wins, congratulations! Do you want to play again? (yes/no)")
        if (replay === 'Yes' || replay === 'yes' || replay === 'y' || replay === 'Y') {
            playGame()
        }
        else if (replay === 'No' || replay === 'no' || replay === 'n' || replay === 'N') {
            alert('Thanks for playing, click refresh to play again')
        }

    }
    else if (computerScore == 5) {
        let replay = prompt("Computer wins, sorry. Do you want to play again? (yes/no)")
        if (replay === 'Yes' || replay === 'yes' || replay === 'y' || replay === 'Y') {
            playGame()
        }
        else if (replay === 'No' || replay === 'no' || replay === 'n' || replay === 'N') {
            alert('Thanks for playing, click refresh to play again')
        }
    }

    // create introduction explanation about game + rules

    
}

playGame();

