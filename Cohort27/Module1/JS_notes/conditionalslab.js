
//Problem: Use if/else statements to output a letter grade based on the number grade

// 1. Solution 

// WHEN AN ELSEIF STATEMENT IS TRUE, THE FOLLOWING ELSE IF STATEMENTS DO NOT RUN

let studentGrade = 69

if (studentGrade >= 90) {
  console.log("letter grade: A");
} 
else if (studentGrade >= 80) {
  console.log("letter grade: B");
} 
else if (studentGrade >= 70) {
  console.log("letter grade: C");
} 
else if (studentGrade >= 55) {
  console.log("letter grade: D");
} 
else {
  console.log("letter grade: F");
}


// 2. Another example of Solution


let grade = 55;

if (grade >= 90) {
  console.log("grade: A");
}

if (grade >= 80) {
  if (grade <= 89) {
    console.log("grade: B");
  }
}

if (grade >= 70) {
  if (grade <= 79) {
    console.log("grade: C");
  }
}

if (grade >= 55) {
  if (grade <= 69) {
    console.log("grade: D");
  }
} else {
  console.log("grade: Failed");
}


// 3. Another example of solution:


const num = 55;
const score = null;

if (num >= 90) {
  score = "Score: A";
  console.log(score);
} 
else if (num >= 80 && score < 89) {
  score = "Score: B";
  console.log(score);
} 
else if (num >= 70 && score < 79) {
  score = "Score: C";
  console.log(score);
} 
else if (num >= 55 && score < 54) {
  score = "Score: D";
  console.log(score);
} 
else {
  score = "Score: Failed";
  console.log(score);
}



// 4. Another example of solution:


const whatYouGot = 59.1

if (whatYouGot>= 90){
    console.log("whatYourGot: A");
} else if (whatYouGot >= 80 && whatYouGot <=89.99) {
    console.log("whatYourGot: B");
} else if (whatYouGot >= 70 && whatYouGot <=79.99){
    console.log("whatYourGot: C");
} else if (whatYouGot >= 55 && whatYouGot <=69.99){
    console.log("whatYourGot: D");
} else{
    console.log("whatYourGot: F");
}
            
// MATH method examples

// Math.random provides a random number between 0 & 1, you can set the upper range by putting value in ()
const age = Math.random()
    console.log(age);

//The Math.floor() function returns the largest integer less than or equal to a given number.
const example = Math.floor(Math.random() * 11) 
    console.log(example);


// Using Math floor and Math random with if else statement

const years = Math.floor(Math.random() * 22)
console.log(years);

if(years >= 18){
    console.log("older than 18");
} else if (years < 18){
    console.log("younger than 18");
} else if (years >= 21){
    console.log("Adult");
}


// OR Operator example

let one = 9
let two = 2

if (one > 5 || two > 5){
    console.log("OR operator worked");
} else{
    console.log("Or operator didn't work");
}


// TRUE / FALSE Operator (!)

const javaScript = true;
console.log(!javaScript);



// Conditional TERNARY operator (ONLY USE FOR 2 CONDITIONS...use if statements if you have more conditions)
// does an if/else statement in a single line of code
// syntax:  variableName = (condition) ? value1:value2
    // NOTE: value1 is given if the condition is true, and value2 is given if condition is false

const userName = "Alex"

const loggedInUser = userName !== "Alex" ? "Welcome Alex or Variable 1" : "Welcome Guest or Variable 2";

console.log(loggedInUser);


// ANOTHER REAL WORLD EXAMPLE OF Ternary operator
const userInput = "user83"
const dbUserName = "user83"

const loggedInUser2 = userInput === dbUserName ? `Hello ${dbUserName}` : `Please check your username`
console.log(loggedInUser2);










// FINISH AFTER CLASS
// let value = 100

// if (value >= 90){
//     console.log("Value: A");    
// } else{

//     if (value >=80){
//         log
//     }

// }