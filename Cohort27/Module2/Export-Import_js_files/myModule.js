
//exporting specific functions from this file to make it available for other files
//This is exporting the multiply function, and the sum function to another file. 
//The dot notation (.multiply) after module.exports is telling us to export the specific function (multiply) 
module.exports.multiply = (a,b) => a*b;

module.exports.sum = (x,y) => x + y

//When console logging the myModule "module" (or file), you can see that there are 2 exports, the multiply and sum functions
console.log (module)
