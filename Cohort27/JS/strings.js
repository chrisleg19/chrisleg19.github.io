const firstName = "Chris"
const lastName = "Legette"

// String concatenation 
console.log("Welcome " + firstName + " " + lastName + " to our page!")

// Template Strings or String Literals (use backticks (under escape key))
console.log(`Welcome ${firstName} ${lastName} to our amazing page!`);

// Example to show you can replace "firstName" with something else:
const num1 = 10
const num2 = 20
console.log (`The total is: ${num1 + num2}`)

// Appending to a variable (+=)
let userName = "dev"
userName += "03"
console.log(userName);

// example of creating a string object without creating one separately
//  - length tells us the number of characters
console.log("hello world".length);
// getting a specific index (starting at 0) of a string
console.log("hello world".charAt(1))
// another method of getting a specific index (using [])
console.log(userName[2])

// NOTE: indexOf() - will tell you the index location of a particular string

// methods to turn all strings to uppercase 
console.log("hello world".toLocaleUpperCase());

console.log('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'.length);

console.log('The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'[82]);







