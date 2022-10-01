/*
here is a cleaner version with examples of what happens when you use parseInt() or Number() on different values:

parseInt()  =  NaN
parseInt(null) = NaN
parseInt(true) = NaN
parseInt('') = NaN
parseInt('32px') = 32
parseInt('5e1') = 5

Number()  =0
Number(null) =  0
Number(true) = 1
Number('') = 0
Number('32px') = NaN
Number('5e1') = 50

*/

//=========CONVERT DIFFERENT DATA TYPES TO STRING=================
let value; 

let num1 = 12
let num2 = 30

value = String(num1) //convert variable "num1" to a string
value = String(2+2) //convert the results of # operation to a string
value = String(true) //convert boolean "true" to a string
value = String([1,2,3]) //convert array to a string

// console.log(value);

//==========CONVERT STRINGS TO A NUMBER========if possible
//NOTE: Nan = Not a Number (Error message)

// parseInt()  =  NaN
// parseInt(null) = NaN
// parseInt(true) = NaN
// parseInt('') = NaN
// parseInt('32px') = 32
// parseInt('5e1') = 5

// Number()  =0
// Number(null) =  0
// Number(true) = 1
// Number('') = 0
// Number('32px') = NaN
// Number('5e1') = 50


value = Number("123")
value = parseInt("8364863")
value = parseInt("8364.863") 
value = parseFloat("8364.863")

console.log(value);