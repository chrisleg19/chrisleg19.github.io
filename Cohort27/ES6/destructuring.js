
//DESTRUCTURING=================

//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//essentially unpacking values from an object, array, etc.

//Example with objects:

const user = {
    name: "Chris",
    age: 34,
    cohort: 27,
    isStudent: true
}

//old syntax:
// const name = user.name
// const age = user.age

//New ES6 Syntax:
//words in curly brackets must match the "keys" in the object
//the words in curly brackets are now variables that can be called on
const {name, age, username, cohort, isStudent} = user;

console.log(name)
console.log(age);
console.log(username);  // This is undefined because it is not in the "user object"
console.log(cohort);
console.log(isStudent);


//Example with Arrays:
//destructing will be done by the index of the elements (So rearranging the values of the array will change the destructing variable assignment)

const devs = ["kelvin", "nelia", "norman", "zoraida"]

const [dev1, dev2, dev3, dev4] = devs  // "dev1, dev2, dev3, dev4" are variable names and can be anything you want

console.log(dev1)
console.log(dev2);
console.log(dev3);
console.log(dev4);


//Example2 (destructing with functions):

const hook = () => {
    const hookName = "state"  // variable with string
    const hookSetter = () => {}  // variable with function
    return [hookName, hookSetter]  // returning the string and function variables in an array.  MUST USE RETURN
}

const [state, setState] = hook()  // Destructuring the function with new variables

console.log(state);
console.log(setState);
