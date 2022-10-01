// declaring a variable:

// 1. const - A variable that is not going to change

const greeting = "hello"
const greeting2 = "hi"
const age = 20.5

//  2. let - a variable that CAN be changes/reassigned

let years = 25 //original value assigned
years = 30 //value was changed from 25 to 30

// creating a variable when you are not sure what the value will be:

let userInfo  // created a variable, but no value was assigned.
console.log(userInfo) //to see the value of the variable...gives you the value of "undefined"

// log the value of the variable:

console.log(greeting)
console.log(age)
console.log(years)

// print out anything in the console: (generally used to identify when we are running code in a function)
console.log("hello this is random text")

// you have to initialize a const variable to see it in the console.
// const emptyValue; BAD EXAMPLE
// const emptyValue = "" GOOD EXAMPLE

// best practice for declaring empty strings
let emptyValue = ""
let userAge = 0

// DO NOT assign undefined to a variable:
let var1 = undefined // JavaScript will let us know if the value is undefined.

// Representation of NO VALUE...use Null...also tells JavaScript to "do nothing"
const password = null // we are saying there is no value in "password"

// Reassign an existing variable to a new variable:
let fullName;
const firstName = "Chris"
const lastName = "Legette"

fullName = firstName + " " + lastName

console.log(fullName)

// Same with numbers:
const num1 = 3
const num2 = 5 
const total = num1 + num2
console.log (total)

// NOTE: if you try to add a string (5) to a number (3), JavaScript will convert both values to a string and concatenate 

// how to to check the type of value
console.log(typeof(total))

// type boolean: True or False


