const message = "hello world"
const message1 = "goodbye world"

const sayHello = () => console.log(message)
const sayBye = () => console.log(message1)
sayBye()


//The module.exports is exporting everything from stringModule.js (even the sayBye function)
module.exports = sayHello


//Console logging the module "stringModule" shows that there is an export of Function: sayHello...because this is the (parent or main function of stringModule.js), but sayBye has also been transferred and being executed in script.js.
console.log(module)