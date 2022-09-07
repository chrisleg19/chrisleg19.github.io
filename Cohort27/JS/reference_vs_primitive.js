//Primitive Types: (Number, String, Boolean, Undefined, Null and Symbol)
// when we assign a new primitive type variable, JS will create a new copy of the value and put it in the variable

let num1 = 20
const num2 = num1

num1 = 100


//Reference Types: (Array, Function, Object)
//when we assign a new reference type variable, JS will not create a new copy of the value(s).  It will point the new variable to the same location as the old.

const arr1 = ["Jan", "Feb", "March", "April"]
const arr2 = arr1

arr2.push("June")  // Making changes to arr2 will also effect the data in arr1

console.log(arr1);
console.log(arr2);




