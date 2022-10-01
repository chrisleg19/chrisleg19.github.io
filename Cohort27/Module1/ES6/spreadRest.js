
//===================Spread Operator  ... ========================

//========Arrays:

// The 3 dot (...) spread operator takes the values of the first array and spreads them across the second array
// firstArr and secondArr are 2 completely different arrays
// Good for copying array data and assigning to a completely different
const firstArr = [1,2,3]  
console.log(firstArr);

const firstArrCopy = [...firstArr]  // this makes a completely different array that is a copy of firstArr
firstArrCopy.push(7,8,9,10)  // mutating the copy doesn't effect the original (firstArr)
console.log(firstArrCopy)

const secondArr = [...firstArr, 4, 5, 6,] 

const thirdArr = [...firstArr, 4, 5, 6, ...firstArrCopy] // using multiple spread operators in an array

console.log(secondArr);

console.log(thirdArr);


//=========Objects: 

const user = {
    name: "chris",
    age: 30
}

// Completely separate object created from user
const superUser = {
    ...user,           // spreading the properties from user object across superUser
    isSuperUser: true  // assigning a new key value pair for the new object superUser created with the spread operator
}

user.location = "Georgia"  //Note: if you make any changes to the original object (user), after using spread operator, the changes will not be captured in the new object (superUser) 

console.log(superUser)



//======================Rest Operator   ... (Rest parameters)=======================
//Good to use when you are not sure the number of parameters that will be used. 
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

//Example 1: 

//function to sort numbers
const sortNums = (...values) => {  //the three dots (...) grabs all of the arguments and assign them to "values"
console.log(values)
return values.sort()

}

console.log(sortNums(3,5,1,45,34,7,10,22,2,9));  // we don't know how many numbers we'll have


//Example 2:

const sum = (...args) => {
    console.log(args)
    return args.reduce ((acc, item) => acc + item)  //note: the reduce method is being used as a callback.  The reduce method takes an accumulator (set to 0 by default), then the item(s) that will be accumulated (READ MORE INTO THIS)
}

console.log(sum(1,2,3,4,5,88))