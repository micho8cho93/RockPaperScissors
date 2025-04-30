// global variables and event listeners
    const playerScore = document.getElementById('playerScore');
    const computerScore = document.getElementById('computerScore');
    const roundScore = document.getElementById('roundResult');

    let human = 0;
    let computer = 0;

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');

    rockBtn.addEventListener("click", () => handlePlayerChoice('rock'));
    paperBtn.addEventListener("click", () => handlePlayerChoice('paper'));
    scissorsBtn.addEventListener("click", () => handlePlayerChoice('scissors'));

// Create function for computer choice
function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    }
    else if (choice === 1) {
        return 'paper';
    }
    else if (choice === 2) {
        return 'scissors';
    } else {
        alert("Error#1");
    }
}

// Create function to keep track of score
function handlePlayerChoice(playerChoice){
    const computerChoice = getComputerChoice();

    let result;
    switch(playerChoice){
        case 'rock':
            switch(computerChoice) {
                case 'rock': result = 'tie'; break;
                case 'paper': result = 'computer'; break;
                case 'scissors': result = 'player'; break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock': result = 'player'; break;
                case 'paper': result = 'tie'; break;
                case 'scissors': result = 'computer'; break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'rock': result = 'computer'; break;
                case 'paper': result = 'player'; break;
                case 'scissors': result = 'tie'; break;
            }
            break;
    }
    handleResult(playerChoice, computerChoice);
    updateGameState(result);
}

// Create function to update game state
function updateGameState(result) {
    
    if (result == 'player') {
        human++;
    }
    else if (result == 'computer') {
        computer++;
    }

    playerScore.innerText = human;
    computerScore.innerText = computer;

    // print winner when score reaches 5
    if (human == 5) {
        let replay = confirm("Player wins, congratulations! Do you want to play again?")
        if (replay == true) {
            human = 0;
            computer = 0;
            round = "";
            playerScore.innerText = human;
            computerScore.innerText = computer;
            roundScore.innerText = round;
            return true
        }
        else if (replay == false) {
            alert('Thanks for playing, click refresh to play again');
            return false;
        }

    }
    else if (computer == 5) {
        let replay = confirm("Computer wins, sorry. Do you want to play again?")
        if (replay == true) {
            human = 0;
            computer = 0;
            round = "";
            playerScore.innerText = human;
            computerScore.innerText = computer;
            roundScore.innerText = round;
            return true;
        }
        else if (replay == false) {
            alert('Thanks for playing, click refresh to play again');
            return false;
        }
    }
}


// Create function to keep track of score
function handleResult(playerChoice, computerChoice){

    let result;
    switch(playerChoice){
        case 'rock':
            switch(computerChoice) {
                case 'rock': result = 'Rock ties rock'; break;
                case 'paper': result = 'Paper beats rock'; break;
                case 'scissors': result = 'Rock beats scissors'; break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock': result = 'Paper beats rock'; break;
                case 'paper': result = 'Paper ties paper'; break;
                case 'scissors': result = 'Scissors beats paper'; break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'rock': result = 'Rock beats scissors'; break;
                case 'paper': result = 'Scissors beats paper'; break;
                case 'scissors': result = 'Scissors ties scissors'; break;
            }
            break;
    }
    updateResultState(result);
}

// Create function to update game state
function updateResultState(result) {
    roundScore.innerText = result;
}
