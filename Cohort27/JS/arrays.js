

// *primitive types - The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.  They care copied and stored away separately in memory


// const num1 = 20
// const num2 = 20

// console.log(num1 + 30);
// console.log(num2);

// let num1 = 20
// const num2 = num1

// num1 = 100

// console.log(num1); //100
// console.log(num2); //20


//==============Array Declaration=======================

    //Array - A container (object) that can contain many different values (almost like a list of values)
    // other arrays, and even functions can be stored in arrays.
    //each value in the array is assigned an index (a # position in the list)
    //Arrays are the data structure of choice for holding lists of data

// const colors = ["red", "green", "blue"]

// const users = ["Chris", "Alex", "Anna"]

//Example of declaring a variable and passing an array into it.  
// let nums = new Array(2, 4, 18);



//Class example:

// const movies = ["Bad Boys", "Transformers", "Ride Along", "Caddy Shack", "Interstellar", "Scarface"]

//Example of calling arrays and their content using index and methods
// console.log(movies);
// console.log(movies[0]);
// console.log(movies[1]);
// console.log(movies[2]);
// console.log(movies.length);
// console.log(movies.at(-1));
// console.log(movies[movies.length-1]);

// //Example of using methods/functions on arrays

// const top10 = []

// top10.push("Home Alone") // adds the string to the end of the array
// top10.push(movies[2])  // "pushed" the value at index 2 from "movies array" to the end of the new array (top10)
// top10.unshift("Star Wars")  // .unshift added the value to the beginning of the array


// console.log(top10);
// console.log("break");

// const movieOfTheYear = top10.shift()  //.shift will take the FIRST value of the array and remove it from array
// console.log(movieOfTheYear)  // shows the value removed with .shift
// console.log(top10);       // shows the top10 array without the first value "Star Wars"

// console.log("break")

// const lastMovie = top10.pop() // .pop will take the LAST value of the array and remove it from the array
// console.log(lastMovie);  // shows the value removed with .pop
// console.log(top10);  // shows the top10 array without the last value "Ride Along"


//=======.splice() vs .slice()============

//==========.SPLICE()====================

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. THIS WILL MODIFY/MUTATE YOUR ARRAY

// Syntax
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)

// const months = ['Jan', 'March', 'April', 'June']

// months.splice(1, 0, "Feb") // using .splice() 1= where to start on index, 0 = what to delete, "Feb" = what to add to the index
// console.log(months);

// months.splice (-1, 1, "May")  // using -1 will add "May" to the end, 1 will remove 1 value at the end before adding "May"
// console.log(months);

// let march = months.indexOf("March") // tell me what index "March is sitting at"; LOOKING FOR SOMETHING IN AN ARRAY
// console.log(march)

// months.splice(march, 1, "MARCH")
// console.log(months)

//=============.SLICE()============================

//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.  THIS WILL NOT MODIFY/MUTATE YOUR ARRAY

//Syntax
// slice()
// slice(start)
// slice(start, end)

// const animals = ["ant", "bison", "camel", "duck", "elephant"]

// const firstTwo = animals.slice(0, 2)  //gives you a snapshot of the array starting at index 0, ending at index 2
// console.log(firstTwo);


//==============Looping over Arrays==============================

// const numArr = [2, 345, 34, 5, 2334, 12, 67, 7, 45]
// const movies = ["Bad Boys", "Transformers", "Casinos", "Interstellar", "Scarface"]
// const evenNumbers = []
// const oddNumbers = []

// for (let i = 0; i < numArr.length; i++){
//     if(numArr[i] % 2 === 0){
//         evenNumbers.push(numArr[i])  // even numbers from numArr are pushed to evenNumbers array 
//     } else {
//         oddNumbers.push(numArr[i])  // odd numbers from numArr are pushed to oddNumbers array
//     }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);



//==========Example 2==================
// putting all the even numbers at the end(right) and odds at the beginning(left)

// const numArr = [2, 345, 34, 5, 2334, 12, 67, 7, 45]
// const oddEvenNumbers = []

// for(let i = 0 ; i < numArr.length; i++){
//     //loop over the array
//     if(numArr[i] % 2 === 1){
//         //add all the even numbers to the end of oddEvenNumbers
//         oddEvenNumbers.unshift(numArr[i]);
//     } else if(numArr[i] %2 === 0){
//         //add all the odd numbers to the beginning oddEvenNumbers
//         oddEvenNumbers.push(numArr[i]);
//     }
//     console.log(oddEvenNumbers)

// }
// console.log(oddEvenNumbers)


//=========Example 3======================
    
// const numArr = [2, 345, 34, 5, 2334, 12, 67, 7, 45]
// const total = []

// const multiplyByTwo = (num) => {
//     return num *2
// }

// for (let i = 0; i < numArr.length; i++){
//     // const result = multiplyByTwo(numArr[i])
//     // total.push(result)
//     total.push(multiplyByTwo(numArr[i]))     //efficient way of coding above
// }

// console.log(total);




//=========Iterating over Arrays using Array Methods==============
//Cannot "break" out of .forEach() or .map() loops with keyword: break

//** */===========.forEach()===============
// lists out the values plus whatever you add, from the original array
// executes a provided function once for each array element.
// **will not mutate the original array if you don't call the index parameter (EXAMPLE BELOW)

// const latestShow = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"]

// latestShow.forEach(function(show){
//     console.log(show);
// })

// latestShow.forEach((show) => {console.log(show)})  // Example of code above in arrow function

//======Example 2===========

// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]

// //numArr.forEach(() => {})
// numArr.forEach((x) => {console.log(x);})


//======Example 3===========
// const latestShow = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"]

// latestShow.forEach(show => console.log(show.toUpperCase()))


//======Example 4===========
// const numArr = [2, 345, 34, 12, 2334, 5, 67, 7, 45]

// //**.forEach() has 2 parameters = .forEach("value at each index", "index number") */
// numArr.forEach((num, idx) => {
//     console.log(`${num} is at index: ${idx} `);
// })




//** */============.map()================
//get values from original array in a new array
//creates a new array populated with the results of calling a provided function on every element in the calling array.
//does not mutate original array; will only return a new array

// const increaseByTwo = [1, 2, 3, 4, 5]

// const newArr = increaseByTwo.map((num) => {
//     return num +=2
// })
// console.log(newArr);

//=========(EXAMPLE OF MUTATING ORIGINAL ARRAY USING i PARAMETER)===========
// increaseByTwo.forEach((num, i) => {
//     increaseByTwo[i] += 2
// })
// console.log(increaseByTwo);
//==========================================================================

