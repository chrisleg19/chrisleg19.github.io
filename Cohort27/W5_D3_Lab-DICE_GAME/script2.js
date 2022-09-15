let playerRoll;
let compRoll;
let winner;
const arr = [];
let body = document.querySelector("body");
const playBtn = document.querySelector("#play-game");
const resetBtn = document.querySelector("#reset");
let scoreBoard;
let parentDiv = document.createElement("div")
parentDiv.classList.add("parent-div")

function rollDice() {                               
playerRoll = Math.floor(Math.random() * 7);       
compRoll = Math.floor(Math.random() * 7);         
winner = playerRoll > compRoll ? "Player Wins" : compRoll > playerRoll ? "Computer Wins" : "Tie";  
arr.push(playerRoll);                             
arr.push(compRoll);                               
arr.push(winner);                                 
return arr;                                       
}

function displayScore() {                           
body.append(parentDiv)
scoreBoard = document.createElement("div");       
scoreBoard.classList.add("created-div");          
parentDiv.append(scoreBoard)
scoreBoard.textContent = `Player Score:${arr[0]}, Computer Score: ${arr[1]}, & the Winner is: ${arr[2]}`; //
}

function resetGame() { 
console.log(resetGame)                             
arr.splice(0,arr.length)                          
document.querySelector(".parent-div").remove()
document.querySelector(".created-div").textContent = "";  
  
}

function playGame() {                               
rollDice();
displayScore();
}

playBtn.addEventListener("click", playGame);        
resetBtn.addEventListener("click", resetGame);      
