const cpuChoice = ["ROCK", "PAPER", "SCISSORS"];

let playerPick = "";
let playerScoreCounter = 0;
let cpuScoreCounter = 0;
let winner = "";
const cpuScore = document.querySelector(".cpu-score");
const playerScore = document.querySelector(".player-score");
const winnerResults = document.querySelector(".results");
const cpuChoiceText = document.querySelector(".cpu-choice");
const playerChoice = document.querySelector(".player-selection");
const resetGame = document.querySelector(".reset-game");
document.querySelector("button.reset-game").disabled = true;
document.querySelector("button.reset-game").hidden = true;

function getComputerChoice(){
let number = Math.floor(Math.random() * 3);
return number;
}

 document.querySelector("button.rock").onclick = function() {
    playerPick = "ROCK";
    cpuPick = cpuChoice[getComputerChoice()];
    resultsRock(cpuPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick;
    playerChoice.innerHTML = playerPick;
    checkWinner();
    
}
document.querySelector("button.paper").onclick = function() {
    playerPick = "PAPER";
    cpuPick = cpuChoice[getComputerChoice()];
    resultsPaper(cpuPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick
    playerChoice.innerHTML = playerPick;
    checkWinner();
}   
document.querySelector("button.scissors").onclick = function() {
    playerPick = "SCISSORS";
    cpuPick = cpuChoice[getComputerChoice()];
    resultsScissors(cpuPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick
    playerChoice.innerHTML = playerPick;
    checkWinner();
}

document.querySelector("button.reset-game").onclick = function(){
    playerScoreCounter = 0;
    cpuScoreCounter = 0;
    document.querySelector("button.reset-game").disabled = true;
    document.querySelector("button.reset-game").hidden = true;
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    document.querySelector("button.rock").disabled = false;
    document.querySelector("button.rock").hidden = false;
    document.querySelector("button.paper").disabled = false;
    document.querySelector("button.paper").hidden = false;
    document.querySelector("button.scissors").disabled = false;
    document.querySelector("button.scissors").hidden = false;

}


function checkWinner(){
    if (cpuScoreCounter === 5){
    winner = "CPU won the game";
    resetGame.innerHTML = "Reset Game";
    document.querySelector("button.reset-game").disabled = false;
    document.querySelector("button.reset-game").hidden = false;
    document.querySelector("button.rock").disabled = true;
    document.querySelector("button.rock").hidden = true;
    document.querySelector("button.paper").disabled = true;
    document.querySelector("button.paper").hidden = true;
    document.querySelector("button.scissors").disabled = true;
    document.querySelector("button.scissors").hidden = true;
    
    } else if(playerScoreCounter === 5){
        winner = "Player won the game";
        resetGame.innerHTML = "Reset Game";
        document.querySelector("button.reset-game").disabled = false;
        document.querySelector("button.reset-game").hidden = false;
        document.querySelector("button.rock").disabled = true;
        document.querySelector("button.rock").hidden = true;
        document.querySelector("button.paper").disabled = true;
        document.querySelector("button.paper").hidden = true;
        document.querySelector("button.scissors").disabled = true;
        document.querySelector("button.scissors").hidden = true;
    }
}

function resultsRock(cpu){

    if(cpu === "ROCK" ){
        winner = "Draw";
    
    } else if(cpu === "SCISSORS" ){
        winner = "Player won with Rock";
        playerScoreCounter ++;
    
    } else if(cpu === "PAPER" ){
        winner = "CPU won with Paper";
        cpuScoreCounter ++;
    }
}

function resultsPaper(cpu){
    
    if(cpu === "ROCK" ){
        winner = "Player won with Paper";
        playerScoreCounter ++;
    }
    else if(cpu === "SCISSORS" ){
        winner = "CPU won with Scissors";
        cpuScoreCounter ++;
    }
    else if(cpu === "PAPER" ){
        winner = "Draw";
    }
}

function resultsScissors(cpu){

    if(cpu === "ROCK" ){
        winner = "CPU won with Rock";
        cpuScoreCounter ++;
    } else if(cpu === "SCISSORS" ){
        winner = "Draw";
     } else if(cpu === "PAPER" ){
        winner = "Player won with Scissors";
        playerScoreCounter ++;
    }
}



