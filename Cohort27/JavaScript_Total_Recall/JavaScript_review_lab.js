
// **========I.Variables and Datatypes===========

//=======A. Q+A========

// 1. How do we assign a value to a variable?
// let a = 10
// let b = 11

// 2. How do we change the value of a variable?
// a = 20
// b = 21

// 3. How do we assign an existing variable to a new variable?
// let c = a
// let d = b

// 4. Remind me, what are declare, assign, and define?
// Declaring a variable is using the word let or const before the variable.
//Assigning a variable is giving it a value
//Defining a variable is when it has been declared in the current scope using a declaration statement.

// 5. What is pseudocoding and why should you do it?
//pseudocoding is using the english language to write out the logic of code.

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//Planning is an important part of problem solving or coding; therefore you should spend at least 1/3 of your time planning the code before actually typing.  


//=======B. Strings========

//1. Create a variable called firstVariable
    // let firstVariable = ""

//2. Assign it the value of the string "Hello World"
    // firstVariable = "Hello World"

//3. Change the value of this variable to some number
    // firstVariable = 10

//4. Store the value of first Variable in a new variable called secondVariable.
    // let secondVariable = firstVariable

//5. Change the value of second Variable to any string.
    // secondVariable = "Hello how are you?"

//6. What is the value of firstVariable?
    // //10 
    // console.log(firstVariable);

//7. Create a variable called your Name and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable your Name so that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjea
    // let Name = "Chris"
    // let expression = "Hello, my name is "
    // let concat = expression + Name
    // console.log(concat);


//=======C. Booleans========

//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// //   // FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false || false || false || false || false || true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
// console.log(48 !== '48');


//=======D. The farm========

//1. Declare a variable animal. Set it to be either "cow" or something else

//2. Write code that will print out "mooooo" if the it is equal to cow

//3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

//4. Commit

    // let animal = "dog"
    // if(animal === "cow"){
    //     console.log("moooo");
    // } else {
    //     console.log("Hey! You're not a cow.");
    // }


//=======E. Driver's Ed========

//1. Make a variable that holds a person's age; be semantic.
    // let personAge = 15

//2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

    // if (personAge >= 16){
    //     console.log("Here are the keys!");
    // } else{
    //     console.log("Sorry, you're too young.");
    // }


//** */ ========II. Loops===========

//=======A. The basics========  

//1. Write a loop that will print out all the numbers from 0 to 10, inclusive
    // for (let i = 0; i <=10; i++){
    //     console.log(i);
    // }

//2. Write a loop that will print out all the numbers from 10 up to and including 400
    // for (let i = 10; i <=400; i++){
    //     console.log(i);
    // }

//3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
    // for (let i = 12; i <=4000; i+=3){
    //     console.log(i);
    // }

  
//=======B. Get Even========  

//1. Print out the numbers that are within the range of 1 - 100
    // for (let i = 1; i<=100; i++){
    //     console.log(i);
    // }

//2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
    // for (let i = 1; i<=100; i++){
    //     if(i % 2 === 0 ){
    //         console.log(`${i} <-- is an even number`);
    //     } else {
    //         console.log(i);
    //     }
    // }

//=======C. Give me Five======== 

//1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
    // for(let i = 0; i<=100; i++){
    //     if(i % 5 === 0 && i !== 0){
    //         console.log(`I found a ${i}. High five!`);
    //     } else{
    //         console.log(i);
    //     }
    // }

//2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// for(let i = 0; i<=100; i++){
//     if(i % 5 === 0 && i !== 0){
//         console.log(`${i} I found a ${i}. High five!`);
//     } else if(i % 3 === 0 && i !== 0){
//         console.log(`I found a ${i}. Three is a crowd`);
//     }
//     else {
//         console.log(i);
//     }
// }

//3. For numbers divisible by both three and five, be sure your code prints both messages
// for(let i = 0; i<=100; i++){
//     if(i % 5 === 0 && i % 3 === 0 && i !== 0 ){
//         console.log(`${i} I found a ${i}. High five and Three is a crowd!`);
//     } else if(i % 3 === 0 && i !== 0){
//         console.log(`${i} I found a ${i}. Three is a crowd`);
//     }
//     else if(i % 5 === 0 && i !== 0){
//         console.log(`${i} I found a ${i}. High five!`);
//     }
//     else {
//         console.log(i);
//     }
// }

//=======D. Savings account======== 

//1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account = 0

// for (let i = 0; i <=10; i++){
//     bank_account += i
// }
// console.log(bank_account);

//Check your work! Your bank_account should have $55 in it.

//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// let newBank_account = 0
// for(let i = 0; i<=100; i++){
//     newBank_account += (i*2)
// }
// console.log(newBank_account);

//Check your work! Your bank_account should have $10,100 in it.


//** */ ========III. Arrays & Control flow===========

//=======A. Talk about it:========
//1. What are the things in an array called?

//Arrays contain elements/values.  The elements/values can be different data types such as: numbers, strings, objects, arrays

//2. Do Arrays guarantee those things will be in order?

//Arrays provide an index for each value, so values will remain in their index order until they are modified

//3. What real-life thing could you model with an array?

//Arrays can model a list of users in a database


//=======B. Easy Does It========

//1. Create an array that contains three quotes and store it in a variable called quotes.
//  let quotes = [
//     "An apple a day keeps the doctor away!",
//     "If you snooze, you loose!",
//     "Stay ready, and you don't have to get ready!"
//  ]
// for (let i = 0; i < quotes.length; i++){
//  console.log(quotes[i]);
// }

//=======C. Accessing elements========

//Given the following array 
// const randomThings = [1, 10, "Hello", true]

//1. How do you access the 1st element in the array?
// console.log(randomThings[0]);

//2. Change the value of "Hello"to "World"
// randomThings.splice(2, 1, "World")


//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// console.log(randomThings);


//=======D. Change values========

//Given the following array 
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//1. What would you write to access the 3rd element of the array?
// console.log(ourClass[2])

//2. Change the value of "Github" to "Octocat"
// ourClass.splice(4, 1, "Octocat")
// console.log(ourClass);

//3. Add a new element, "Cloud City" to the array
// ourClass.push("Cloud City")
// console.log(ourClass);


//=======E. Mix It Up========
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: 
// const myArray = [5, 10, 500, 20]

//1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon")
// console.log(myArray);

//2. Remove the 5 from the beginning of the array.
// myArray.shift()
// console.log(myArray);

//3. Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley")
// console.log(myArray);

//4. Remove the string of your choice from the end of the array.
// console.log(myArray.pop())
// console.log(myArray);


//5. Reverse this array using Array.prototype.reverse(). 
// myArray.reverse()
// console.log(myArray);
//Did you mutate the array? 
//- YES
//What does mutate mean? 
//- changing the properties of a value
//- we changed the index of each element
//Did the .reverse()method return anything?
//-the method does not return anything. It reverses the array.  Console.log  will show you the final array in the terminal


//=======F. Biggie Smalls========

//Create a variable that contains an integer.

/*Write an if ... else statement that:

console.log()s "little number" if the number is entered is less than 100
console.log()s big number if the number is greater than or equal to 100.*/

// let biggie = 10

// if(biggie < 100){
//     console.log("little number");
// } else{
//     console.log("big number");
// }


//=======G. Monkey in the Middle========

/*Write an if ... else if ... else statement:

console.log()little number if the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".*/

// if(biggie < 5){
//     console.log("little number");
// } else if(biggie > 10){
//     console.log("big number");
// } else{
//     console.log("monkey");
// }


//=======H. What's in Your Closet?========

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //1. What's Kristyn wearing today? Using bracket notation to access items in kristyns Closet, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.

// console.log(`Kirsityn is rockin that ${kristynsCloset[2]} today!`);

// //2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, "raybans")
// console.log(kristynsCloset);

// //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset.splice(5, 1, "stained knit hat")
// console.log(kristynsCloset);

// //4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);

// //5. In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][0]);

// //6. Access one item from Thom's accessories array.
// console.log(thomsCloset[2][2]);

// //7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]} and ${thomsCloset[2][1]}!`)

// //8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// thomsCloset[1].splice(2, 1, "Footie Pajamas")
// console.log(thomsCloset[1]);


//** */ ========IV. Functions===========

//=======A. printGreeting========

/*Do you think you could write a function called print Greeting with a parameter name that returns a greeting with the argument interpolated into the greeting?

Like so?

console.log(printGreeting("Slimer"));
=> Hello there, Slimer!

You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on. */


//=======B. printCool========

//Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// function printCool(name){
//     console.log(`${name} is cool`);;
// }
// printCool("chris")


//=======C. calculateCube========

//Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// function calculateCube(num){
//     let ans = (num * num * num);
//     console.log(`${ans} is volume the of a cube made from ${num}.`);
// }
// calculateCube(5)


//=======D. isVowel========

//Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// a e i o u 

// function isVowel(letter){
//     if(letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u"){
//      return true;
//     } else{
//      return false;
//     }
// }
// console.log(isVowel("u"))


//=======E. getTwoLengths========

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// function getTwoLengths(word1, word2){
//     let arr = []
//     arr.unshift(word1.length)
//     arr.push(word2.length)
//     console.log(arr)
// }
// getTwoLengths("Hank", "Hippopopalous");


//=======F. getMultipleLengths========

//Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// function getMultipleLengths(array){
//     let blank = []
//     for (let i = 0; i < array.length; i++){
//         blank.push(array[i].length)       
//     }
//     console.log(blank)
// }
// getMultipleLengths(["hello", "what", "is", "up", "dude"]);


//=======G. maxOfThree========

//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// function maxOfThree(num1, num2, num3){
//     return Math.max(num1, num2, num3)
// }
// console.log(maxOfThree(3, 3, 3));


//=======H. printLongestWord========

//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// function printLongestWord(array){
//     let newArr = []
//     for (let i = 0; i < array.length; i++){
//         newArr.push(array[i])
//     }
//     newArr.sort((a,b)=>{return b.length-a.length})
//     // console.log(newArr);   
//     return newArr[0]
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))



//** */ ========V. Objects===========

//=========A. Make a user object=============

// let user = {
//     name: "Chris",
//     email: "chris@chris.com",
//     age: 34, 
//     purchased: []
// }


// //=========B. Update the user=============

// user.email = "one@one.com"
// user.age++

// console.log(user.email);
// console.log(user.age)


// //=========C. Adding keys and values=============

// user.location = "Las Vegas"
// console.log(user);


// //=========D. Shopaholic!=============

// user.purchased.push("carbohydrates")
// user.purchased.push("peace of mind")
// user.purchased.push("Merino jodhpurs")
// console.log(user.purchased);

// console.log(user.purchased[2]);


// //=========E. Object-within-object=============

// //1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// user.friend = {
//     name: "John",
//     age: 44, 
//     location: "Dallas",
//     purchased: []
// }

// //2. Console.log just the friend's name
// console.log(user.friend.name);

// //3. Console.log just the friend's location
// console.log(user.friend.location);

// //4. CHANGE the friend's age to 55
// user.friend.age = 55

// console.log(user.friend.age);

// //5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchased array.

// user.friend.purchased.push("The One Ring")

// //6. The friend has purchased "A latte". Use .push()to add "A latte" to the friend's purchased array.

// user.friend.purchased.push("A latte")

// console.log(user.friend.purchased)

// //7. Console.log just "A latte" from the friend's purchased array.

// console.log(user.friend.purchased[1])


// //=========F. Loops=============

// for (let item of user.purchased){
//     console.log(`user's items: ${item}`);
// }

// for (let item of user.friend.purchased){
//     console.log(`friend's items: ${item}`);
// }


// //=========G. Functions can operate on objects=============

// function updateUser(){
//     user.age ++
//     user.name.toUpperCase()
// }


// function oldAndLoud(person){
//     person.age++
//     person.name = person.name.toUpperCase() 
// }

// console.log(user);
// oldAndLoud(user)
// console.log(user);


//=========Hungry for More===================

//=====Cat Combinator============

//1. Mama cat====================

let cat1 = {
    name: "Kitty" ,
    breed: "Tiger",
    age: 20,
}

console.log(cat1.age, cat1.breed);

//2. Papa cat====================

let cat2 = {
    name: "Chester",
    breed: "Lion",
    age: 30
}

//3. Combine Cats!================

function combineCats(mama, papa){
    console.log(mama)
    console.log(papa)
}

combineCats(cat1, cat2)

function combineCats2(obj1, obj2){
    let child = {}
    child.name = obj1.name + obj2.name
    child.age = 1
    child.breed = `${obj1.breed}-${obj2.breed}`
    console.log(child)
}

combineCats2(cat1, cat2)

console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));
