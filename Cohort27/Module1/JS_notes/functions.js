
//======Defining a function==================================

// sayHello() //NOTE: you can call a function before the actual function.  JavaScript will 

// function sayHello (){
//     console.log("hello");
// }

// sayHello() // example of calling a function or executing a function

//=========Examples of functions (ES5 vs ES6)==============

// ES5 style example========================================
// function multiplication(x,y){
//     console.log(x*y)
// }
// multiplication(2,3)

//=====ES6 style "arrow function"=================================
// let division = (x, y) => x/y
// console.log(division(42,7))

//Example if arrow function has more than 1 line of instructions=====
// let division = (x, y) => {
//     console.log(x/y)
//     console.log("Chris is cool")
// }
// division(15,3)

//=============Example using 3 parameters=====================

// function addThreeNum(a, b, c){
//     console.log((a+b+c)/3)
// }
// addThreeNum(136,2, 45)

//===========Another example using 3 parameters===================== 
// let addThreeNum = (var1, var2, var3) => {
//      console.log((var1+var2+var3)/3)
// }
// addThreeNum(3,4,5)



//===========Example of function expression and its traits(cannot be called before declaration)=================================

//Example of function expression(Note: the function cannot be called before declaring the function to the variable in your code )=======

// const greeting = function (){
//     console.log("Hello World")
// }

//Example of function declaration (note: function can be called before the function is declared due to hoisting)==============

// function sayHello(){
//     console.log("Hi")
// }



//==========Example with "Return" keyword==========================

// Keyword "Return" stores the value or result of the function

//Note if you do not use the return keyword, JS will return the value undefined

//Note: Nothing after the "Return" no other code in function will run

// function multiplyByTen(input){
//     return input * 10
// }

// const result = multiplyByTen(2)
// console.log(result)

//Example of putting a console.log within the function and then calling the function to print out results in the console. 

// function multiplyByTen(input){
//     const val = input * 10
//     console.log(val)
//     return input * 10
// }

// multiplyByTen(2)

//Example of finding like items on 2 arrays and adding them to a different array
// let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
// let tinasFollowers = ['Sam', 'Marta', 'Elle'];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
    
     
//     }
//   }
// };

// console.log(mutualFollowers)

//==========Code Wars============================

let threes = []
let fives = []
// let sumofthrees=""

// for (i = 10; i > 0; i--){
//     if(i % 3 === 0){
//         sumofthrees += i 
//         console.log(sumofthrees)
//         threes.push(i)
        
//     }
//     // for(j = 0; j <= threes.length; j++){
//     //     console.log(j)
//     // }

// }
// console.log("break")
// console.log(threes)

// for (i = 10; i > 0; i--){
//     if(i % 5 === 0){
//         fives.push(i)
//     }
// }
// console.log(fives)

// let sum = 0
// function addArray (array){
//     for(i = array.length -1; i > 0; i--){
//         sum += array[i]
//     }
//     console.log(sum);
// }

// array(fives)


//=============8/29/2022================

//Function definition

// sayHello() // can call a function definition before the function is defined

// function sayHello(){
//     console.log("hello...")
// }

// //Function Expression
// const greeting = function (){
//     console.log("Hello World");
// }

// greeting()  // Cannot call a function expression before it is defined


// //function execution 
// function multiplyByTwenty(input){
//     return input * 10
// }

// const result = multiplyByTwenty(3)  //calling the return value of function "multiplyByTen" (answer: 20 is stored in "result")
// console.log(result)


// // Example of function with 2 parameters
// function multiplyByTen(num1, num2){  
//     return num1 * num2
// }

// const answer = multiplyByTen(2, 10)
// console.log(answer);


//===========Arrow Functions===================

//Implicit return (no return statement is needed to log value) ONLY IF THE FUNCTION IS A SINGLE LINE (SMALL FUNCTIONS)

// More concise way of writing functions

// const add = (a, b) => a + b; 




// =========No Return needed for single line arrow function==========Class example of small function:

// const multiplyByTwo = (num) => num * 2  


// const result1 = multiplyByTwo(4)
// console.log(result1);



//====================Curly Brackets do not allow implicit return=========================

// const multiplyByTwo = (num) => {  // If you use curly brackets, you need the return keyword in function to return value.
//     num * 2  
//     return num * 2
// }

// const result1 = multiplyByTwo(4)
// console.log(result1);



//================Only 1 parameter, getting rid of ()=====================

// const multiplyByTwo = num => num * 2  //You can get rid of () if you only have 1 parameter in function


// const result1 = multiplyByTwo(4)
// console.log(result1);

// const multiplyByTwo = num => num * 2

// const multiply2 = (num1, num2) => num1 * num2

// const multiply3 = (num1, num2) => {
//     return num1 * num2
// }

// console.log(multiply3(2,2))

// const result1 = multiplyByTwo(4, 3, 4, 5, 7, 8) //**NOTE: JS will only take the 1st argument (4) and then store the remaining values inside the function

// console.log(result1);

