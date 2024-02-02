// program

let OPTIONS = ["rock", "paper", "scissors"];
let playerTotal = 0; 
let computerTotal = 0; 
let gameCount = 1; 

//event listeners

const rockChoice = document.querySelector("#rock");
    rockChoice.addEventListener('click', () => {
        const selectionRock = rockChoice.value;
        playRound (selectionRock);
    });

const paperChoice = document.querySelector("#paper");
    paperChoice.addEventListener('click', () => {
        const selectionPaper = paperChoice.value; 
        playRound (selectionPaper);
    });

const scissorsChoice = document.querySelector("#scissors");
    scissorsChoice.addEventListener('click', () => {
        const selectionScissors = scissorsChoice.value; 
        playRound (selectionScissors);
    });

// functions 

function playRound (userChoice) {
    
    let computerSelection = getComputerChoice (); 
    let playerSelection = userChoice; 

    if (playerSelection === computerSelection) {

        document.querySelector("#roundresult").textContent = "Round " + gameCount + ": Tie!";
        counter("Tie!"); 
    }
    else {
        if (playerSelection === "rock") {

            if (computerSelection === "paper") {

                document.querySelector("#roundresult").textContent = "Round " + gameCount + ": You Lose! Paper beats Rock"; 
                counter("You Lose! Paper beats Rock"); 
            }
            else {

                document.querySelector("#roundresult").textContent = "Round " + gameCount + ": You Win! Rock beats Scissors"; 
                counter("You Win! Rock beats Scissors");

            }
        }
        else if (playerSelection === "paper") {

            if (computerSelection === "scissors") {

                document.querySelector("#roundresult").textContent = "Round " + gameCount + ": You Lose! Scissors beats Paper";
                counter("You Lose! Scissors beats Paper"); 

            }
            else {

                document.querySelector("#roundresult").textContent = "Round " + gameCount +": You Win! Paper beats Rock";
                counter("You Win! Paper beats Rock"); 

            }
        }
        else {

            if (computerSelection === "rock") {

                document.querySelector("#roundresult").textContent = "Round " + gameCount + ": You Lose! Rock beats Scissors";
                counter("You Lose! Rock beats Scissors"); 

            }
            else {

                document.querySelector("#roundresult").textContent = "Round " + gameCount + ": You Win! Scissors beats paper";
                counter("You Win! Scissors beats paper"); 

            }
        }
    }
}

function counter (ResultString) {

    let roundResult = ResultString;
    
    if (gameCount <= 5 && roundResult) {
        
    
        if (roundResult.search(/Tie!/) > -1) {

            gameCount++;

            if (gameCount > 5) {
                endOfGame ();
            }

        }
        else if (roundResult.search(/Lose!/) > -1) {
                
            computerTotal++; 
            updateScores (playerScore, computerScore);
            gameCount++;
           
            if (gameCount > 5) {
                endOfGame ();
            }


        }
        else {

            playerTotal++;
            updateScores (playerScore, computerScore);
            gameCount++;
            
            if (gameCount > 5) {
                endOfGame ();
            }

        }

    }

    else {

        endOfGame ();
      
    }
    resetScores ();

}

function getComputerChoice () {

    return OPTIONS[getRandomInt(OPTIONS.length)];

}

function getRandomInt (length_of_array) {

    return Math.floor(Math.random() * length_of_array); 
}


function updateScores () {
    
    const playerScore = document.querySelector("#playerScore");
    playerScore.textContent = playerTotal; 

    const computerScore = document.querySelector("#computerScore");
    computerScore.textContent = computerTotal; 
}

function resetScores () {

    const resetScore = document.querySelector("#reset");
    resetScore.addEventListener('click', () => {
        
        playerTotal = 0; 
        computerTotal = 0; 
        gameCount = 1; 
        
        updateScores (playerTotal, computerTotal);
        
        const blankResult = document.querySelector("#finalresult");
        blankResult.textContent = "";

        const blankRoundResult = document.querySelector("#roundresult");
        blankRoundResult.textContent = "";

        const blankScore = document.querySelector("#finalscores");
        blankScore.textContent = "";
        
        enableOptionButtons ();

    })
}

function disableOptionButtons () {

    let disable = document.querySelectorAll("#rock,#paper,#scissors");
    
    for (let i = 0; i < disable.length; i++) {
        
        disable[i].disabled = true;

    }
}

function enableOptionButtons () {
    
    let enable = document.querySelectorAll("#rock,#paper,#scissors");
    
    for (let i = 0; i < enable.length; i++) {
        
        enable[i].disabled = false;

    }
}

function endOfGame () {
    
    if (playerTotal === computerTotal) {

        disableOptionButtons ();
        const resultTie = document.querySelector("#finalresult");
        resultTie.textContent = "The game is a tie, please play again";


    }
    else if (playerTotal < computerTotal) {
        
        disableOptionButtons ();
        const computerWin = document.querySelector("#finalresult");
        computerWin.textContent = "Computer wins!";

        const printFinalScore = document.querySelector("#finalscores");
        printFinalScore.textContent = "Results: Player: " + playerTotal + " Computer: " + computerTotal; 

    }
    else {
        
        disableOptionButtons ();
        const playerWin = document.querySelector("#finalresult");
        playerWin.textContent = "Congratulations! You win!";

        const printFinalScore = document.querySelector("#finalscores");
        printFinalScore.textContent = "Results: Player: " + playerTotal + " Computer: " + computerTotal; 
        
    }
    resetScores ();
}





