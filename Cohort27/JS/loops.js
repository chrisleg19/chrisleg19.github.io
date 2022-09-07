
// For Loop
/*
Syntax Example: 
for (Expression 1; Expression 2; Expression 3) {
   code block to be executed  
}

Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
*/

// (initialize; condition; incrementor) NOTE: the variable i only exists within the for loop function
// Examples:

// 3 steps to remember how to write a for loop:

// 1. Where do you want it to begin? i.e. "i=0"
// 2. How far do you want it to go? i.e. "i >= 0"
// 3. How much would you like it to increase/decrease each time? i.e. "i++"


// for (let i = 0; i < 10; i ++){
//     // console.log(i);
//     console.log (`i ex1 is ${i}`);
// }


// for (let i = 0; i < 10; i += 2){
//     console.log (`i ex2 is ${i}`);
// }


// for (let i = 10; i > 0; i --){
//     console.log (`i ex 3 is ${i}`);
// }


// Global vs. local variables
// declaring a variable outside of any functions makes it accessible 

// let total = 0 //global variable

// for (let i = 0; i < 10; i += 3){
//     console.log(i);
//     total += i   //local variable
//     console.log(`The total is: ${total}`)
// }

// console.log(`The total is: ${total}`) //cannot access var total that was changed within the for loop

// const message = "Hello World!"
// console.log("How long the string is: " + message.length);
// console.log("Access the character at index a certain index: " + message[11])


// =========logs the index location for the string=============
// for (let i = 0; i <= message.length; i += 1){
//     console.log(i);
// }

// =========logs each letter in each index location from the string=========
// for (let i = 0; i <= message.length; i += 1){
//     console.log(message[i]);
// }

//==========reversing the order=========
// (set the initializer to the end of the range; run as long as i is >= 0; decrement by 1 each iteration.)
// for(let i = message.length - 1; i >= 0; i--){
//     console.log(message[i]);
// }

// ==========FOR LOOP EXAMPLES (CLASS)=========

// 1.

// for(i = 0; i <= 10; i++){
//     console.log(i);  // logs the indexes
//     if(i % 2 === 0){
//         console.log(`${i} is even`)  // logs the even indexes
//     } else{
//         console.log(`${i} is odd`)  // logs the odd indexes
//     }
// }

// ================="Break" & "Continue"================
// To break out of the for loop or skip the for loop("break" & "continue")
// for(i = 0; i <= 10; i++){
     
    
//     if(i === 5){
//         continue // will skip over (or "continue" over) the index 5
//     } else if (i === 8){
//         break  // will stop (or "break") the loop once condition is met
//     } else{
//         console.log(`${i} *2 = ${i * 2}`)
//     }
// }

// CONTINUE will skip over EVERYTHING in the block of code; if set at the end of for condition, it can also be used to continue the loop even when a certain condition is met (example a blank or space) - ====CONT W/ SPACE EX further below=========
// RETURN will also stop the execution of code
// Return will stop, but can return a value
// Continue will stop, but will not return a value 


// ==========REVERSE STRING & FALSY vs TRUTHY===================
// Falsy values: '' , "" , 0 , undefined , Nan , null

// let reversed 

// if(reversed){
//     console.log("True");
// } else{
//     console.log("False");
// }

// ===========Reverse examples=================

// const word = "Hello"
// let reversed = ""

// for(i = word.length-1; i >= 0; i -= 1 ){
//     // console.log(word[i]) // shows what is at each index [i] of the word "Hello"
//     reversed += word[i]  // this will grab each index and append it to the variable "reversed"
//     console.log(reversed)
// }

// ===============Reverse String Example 2=====================

// const word2 = "Chris"
// let backwards = ""

// for (i = word2.length - 1; i >=0; i--){
//     backwards += word2[i]
//     console.log(backwards);
// }
// console.log(backwards);  //NOTE: placing the console log outside of the for loop will display "backwards" in a single line


// let something = "Goo dbye"
// let final =""

// Example to continue for loop if a space is identified in the string  ======CONT W/ SPACE EXAMPLE=======

// for (i = something.length - 1; i >=0; i--){
//     if(something[i] === " ") continue
    
//     final += something[i]
//     console.log(final);
// }



//==========For Of Loop==========(8/25/2022)===========

//Example of normal for loop:
// let message= "Hello World!"

// for (let i = 0; i < message.length; i++){
//     console.log(message[i]);
// }

//Example of For of Loop
/*
Syntax:
for (variable OF iterable) {
  statement
}
*/

// let message= "Hello World!"

// for (character of message){  //"character can be replaced"
//     console.log(character);
// }

//For of loops are only used on iterable objects: strings & arrays


//=========Do While Loop=====================
/*
Syntax
do {
  code block to be executed
}
while (condition);
*/

//"DO something WHILE this is true"
//********Do While functions will run the code 1 time before checking condition*********

// let i = 0 

// do{
//     console.log("Do while")
// } while(i < 0 )

let i = 10 

do{
    console.log("Do while")
    i--
} while(i > 0 )






//========TYPE CONVERSION INTRO==========

// let message= 123456
// message = String(123456) // to convert # to string
//parseInt() - converts string to number and gets rid of decimals
//parseFloat() - parses an argument (converting it to a string first if needed) and returns a floating point number.
//.toString will convert to string (cannot have numbers in front)
    //Example: if message = 123455, message.toString will convert

// for (character of message){  //"character can be replaced"
//     console.log(character);
// }


// for (character of message){  //"character can be replaced"
//     console.log(character);
// }


