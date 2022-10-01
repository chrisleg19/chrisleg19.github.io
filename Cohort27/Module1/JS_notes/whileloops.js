
// ======================WHILE LOOPS=========================
// unlike for loop, you have to initialize, set condition, and set incrementor manually

// let i = 0             //This is initializing your variable
// while(i <= 10){        //Your condition is inside of parenthesis 
//     console.log(`while loop ${i}`);
//     i++               //Incrementor IN the while loop (AT THE END)
// }

//==========Example: While loop with nested if statement=============
// let count = 0

// while(count <= 10){
//     console.log(`The count is: ${count}`)

//     if (count % 2 === 0){
//         console.log(`${count} is even!`);
//         count++
//     }
//     count++
// }

//===========Example with "flag"=============

// let count = 0
// let isNotDoneCounting = true

// while(isNotDoneCounting){
//     console.log(`The count is: ${count}`)

//     if (count === 5){
//        isNotDoneCounting = false
//     }
//     count++
// }

//======Example with or operator=========


// let count = 0
// let isNotDoneCounting = true

// while(isNotDoneCounting || count < 8){
//     console.log(`The count is: ${count}`)

//     if (count === 5){
//        isNotDoneCounting = false
//     }
//     count++
// }



//======Another in class example (GAME EXAMPLE)=============

//=========WHILE LOOP WILL RUN UNTIL YOU TELL IT TO "BREAK" OR THE WHILE CONDITION IS FALSE==========================

//===="CONTINUE" within the while loop will cause the loop to stop and jump back to the top of the while loop.==============

// let lives = 3
// let time = 10

// while (lives > 0 && time > 0){
//     console.log("Continue to play the game.")
//     console.log(`time left ${time} and lives left: ${lives}`);

//     if(time % 2 === 0){
//         console.log("You Lose one Life!");
//         lives--
//     }
//     if (lives === 0 ){
//         console.log("Game Over");
//     }
//     time--
// }

// console.log("Main Menu");


//====WHILE LOOP WILL RUN UNTIL YOU TELL IT TO "BREAK" OR THE WHILE CONDITION IS FALSE===================================

//===="CONTINUE" within the while loop will cause the loop to stop and jump back to the top of the while loop.==============




//=====In class challenge (While loops) ==========

// Challenge # 1 - fundamentals****************

// let count = 0

// while (count < 8 ){
//     count += 2
//     console.log(count)
// }

//Challenge # 2 - Condition Expression**************

// let addThis = 0
// let sum = 0

// while (addThis < 10){    
//     sum += addThis;
//     addThis ++;    
// }
// console.log(sum);