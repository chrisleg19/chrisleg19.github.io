let playerRoll;
let compRoll;
let winner;
const arr = [];
let body = document.querySelector("body");
const playBtn = document.querySelector("#play-game");
const resetBtn = document.querySelector("#reset");
let scoreBoard;

function rollDice() {                               //function to roll dice and determine winner
  playerRoll = Math.floor(Math.random() * 7);       //random num 1-6 for player
//console.log(`Player Roll is:${playerRoll}`);
  compRoll = Math.floor(Math.random() * 7);         //random num 1-6 for player
//console.log(`Computer Roll is:${compRoll}`);
  winner = playerRoll > compRoll ? "Player Wins" : "Computer Wins";  // ternary to determine winner
//console.log(winner);
  arr.push(playerRoll);                             //pushing player's roll to array
  arr.push(compRoll);                               //pushing computer's roll to array
  arr.push(winner);                                 //pushing ternary results to array
  console.log(arr)
  return arr;                                       //return array from function
}

function displayScore() {                           //function to display results and winner
  let scoreBoard = document.createElement("div");   //creating new div and assigning to var
  scoreBoard.classList.add("created-div");          //giving new div a class to target later
//console.dir(scoreBoard);                          
  body.appendChild(scoreBoard);                     //append scoreboard to body
  scoreBoard.textContent = `Player Score:${arr[0]}, Computer Score: ${arr[1]}, & the Winner is: ${arr[2]}`; //template literal displaying results
}

function resetGame() {                              //function to clear scoreboard
  arr.splice(0,arr.length)                          //resetting the game results         
  document.querySelector(".created-div").remove();  //removing the created div (scoreboard)
}

function playGame() {                               //function to roll the dice and display results
  rollDice();
  displayScore();
}

playBtn.addEventListener("click", playGame);        //adding eventListener and playGame func to play btn
resetBtn.addEventListener("click", resetGame);      //adding eventListener and resetGame func to reset btn
