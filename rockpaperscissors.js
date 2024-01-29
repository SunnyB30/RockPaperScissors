// program

let OPTIONS = ["rock", "paper", "scissors"];

playGame();

// functions 

function getComputerChoice () {

    return OPTIONS[getRandomInt(OPTIONS.length)];

}

function getRandomInt (length_of_array) {

    return Math.floor(Math.random() * length_of_array); 
}

function getPlayerSelection () {

    let playerChoice = prompt("Please type either rock, paper or scissors: ").toLowerCase();
    
    if (playerChoice !== OPTIONS[0] && playerChoice !== OPTIONS[1] && playerChoice !== OPTIONS[2] ){
        getPlayerSelection();
    }
    else {
        return playerChoice; 
    }
    
}

function playRound () {
    // paper beats rock , rock beats scissors, scissors beats paper.
    let computerSelection = getComputerChoice (); 
    let playerSelection = getPlayerSelection ();

    if (playerSelection === computerSelection) {

        console.log("Tie!");
        return "Tie!"; 
    }
    else {
        if (playerSelection === "rock") {

            if (computerSelection === "paper") {

                console.log("You Lose! Paper beats Rock");
                return "You Lose! Paper beats Rock"; 
            }
            else {

                console.log("You Win! Rock beats Scissors");
                return "You Win! Rock beats Scissors";

            }
        }
        else if (playerSelection === "paper") {

            if (computerSelection === "scissors") {

                console.log( "You Lose! Scissors beats Paper");
                return "You Lose! Scissors beats Paper"; 

            }
            else {

                console.log("You Win! Paper beats Rock");
                return "You Win! Paper beats Rock"; 

            }
        }
        else {

            if (computerSelection === "rock") {

                console.log("You Lose! Rock beats Scissors");
                return "You Lose! Rock beats Scissors"; 

            }
            else {

                console.log("You Win! Scissors beats paper");
                return "You Win! Scissors beats paper"; 

            }
        }
    }
}

function playGame () {

    let playerTotal = 0; 
    let computerTotal = 0; 

    for (let i = 0; i < 5; i++) {

        let roundResult = playRound(); 
            if (roundResult.search(/Tie!/) > -1) {

                playerTotal++;
                computerTotal++;

            }
            else if (roundResult.search(/Lose!/) > -1) {
                
                computerTotal++; 

            }
            else {

                playerTotal++;

            }

    }
    
    if (playerTotal === computerTotal) {

        console.log("The game is a tie, please play again")

    }
    else if (playerTotal < computerTotal) {

        console.log("Computer wins!");
        console.log("Results: Player: " + playerTotal + " Computer: " + computerTotal); 

    }
    else {

        console.log("Congratulations! You Win!");
        console.log("Results: Player: " + playerTotal + " Computer: " + computerTotal); 

    }
}


