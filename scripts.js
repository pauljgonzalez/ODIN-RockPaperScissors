const cpuChoice = ["ROCK", "PAPER", "SCISSORS"];

let playerPick = "";
let playerScoreCounter = 0;
let cpuScoreCounter = 0;
let winner = "";
const cpuScore = document.querySelector(".cpu-score");
const playerScore = document.querySelector(".player-score");
const winnerResults = document.querySelector(".results");
const cpuChoiceText = document.querySelector(".cpu-choice");

function getComputerChoice(){
let number = Math.floor(Math.random() * 3);
return number;
}

 document.querySelector("button.rock").onclick = function() {
    playerPick = "ROCK";
    cpuPick = cpuChoice[getComputerChoice()];
    results(cpuPick,playerPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick;
    
}
document.querySelector("button.paper").onclick = function() {
    playerPick = "PAPER";
    cpuPick = cpuChoice[getComputerChoice()];
    results(cpuPick,playerPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick
}   
document.querySelector("button.scissors").onclick = function() {
    playerPick = "SCISSORS";
    cpuPick = cpuChoice[getComputerChoice()];
    results(cpuPick,playerPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
    winnerResults.innerHTML = winner;
    cpuChoiceText.innerHTML = cpuPick
}

function results(cpu,player){
    if( player === "PAPER" && cpu === "ROCK" ){
        winner = "Player won with Paper";
        playerScoreCounter ++;
    }
    else if( player === "PAPER" && cpu === "SCISSORS" ){
        winner = "CPU won with Scissors";
        cpuScoreCounter ++;
    }
    else if( player === "PAPER" && cpu === "PAPER" ){
        winner = "Draw";
    }
    else if( player === "ROCK" && cpu === "ROCK" ){
        winner = "Draw";
    }
    else if( player === "ROCK" && cpu === "SCISSORS" ){
        winner = "Player won with Rock";
        cpuScoreCounter ++;
    }
    else if( player === "ROCK" && cpu === "PAPER" ){
        winner = "CPU won with Paper";
    }
    else if( player === "SCISSORS" && cpu === "ROCK" ){
        winner = "CPU won with Rock";
        playerScoreCounter ++;
    }
    else if( player === "SCISSORS" && cpu === "SCISSORS" ){
        winner = "Draw";
        cpuScoreCounter ++;
    }
    else if( player === "SCISSORS" && cpu === "PAPER" ){
        winner = "Player won with Scissors";
    }
}



