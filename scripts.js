const cpuChoice = ["ROCK", "PAPER", "SCISSORS"];

let playerPick = "";
let playerScoreCounter = 0;
let cpuScoreCounter = 0;
let winner = "";
const cpuScore = document.querySelector(".cpu-score");
const playerScore = document.querySelector(".player-score");

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
    
}
document.querySelector("button.paper").onclick = function() {
    playerPick = "PAPER";
    cpuPick = cpuChoice[getComputerChoice()];
    results(cpuPick,playerPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
}   
document.querySelector("button.scissors").onclick = function() {
    playerPick = "SCISSORS";
    cpuPick = cpuChoice[getComputerChoice()];
    results(cpuPick,playerPick);
    cpuScore.innerHTML = cpuScoreCounter;
    playerScore.innerHTML = playerScoreCounter;
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


}



