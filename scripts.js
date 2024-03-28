const cpuChoice = ["ROCK", "PAPER", "SCISSORS"];
let playerPick = "";

function getComputerChoice(){
let number = Math.floor(Math.random() * 3);
return number;
}
cpuPick = cpuChoice[getComputerChoice()];

 document.querySelector("button.rock").onclick = function() {
    playerPick = "ROCK";
    console.log(playerPick);
}
document.querySelector("button.paper").onclick = function() {
    playerPick = "PAPER";
    console.log(playerPick);
}   
document.querySelector("button.scissors").onclick = function() {
    playerPick = "SCISSORS";
    console.log(playerPick);
}



console.log(cpuPick);
