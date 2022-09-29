
//Importing something from another file.
//This is importing the multiply function into the fs-module.js file
const multiplyFunc = require("./myModule")


//importing specifically the multiply and sum functions from myModule
const myModule = require("./myModule")

console.log(myModule.multiply(2,3))
console.log(myModule.sum(5,5))



//importing everything from stringModule
const stringModule = require("./stringModule")

console.log(stringModule())



