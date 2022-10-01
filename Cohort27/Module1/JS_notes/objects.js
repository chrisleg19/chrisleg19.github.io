

//===========Objects==========

// **const myObject = {}  // example of a literal object

// const str = "" // literal string
// const arr = [] // literal array

// const user = {
//         name: "Chris",
//         age: 34,
//         isLoggedIn: true
// }
// const car = {
//     color: "blue",
//     horsePower: 4000,
//     year: 1989
// }

// car.windowsTinted = true; // adding to an object with dot notation
// car.doors = 2 // adding to an object with dot notation
// car.engine = "V12"
// car.color = "red" // changing the key value of an object with dot notation (blue to red)
// car.doors += 2 // using math operators to change key values

// console.log(car)
//updated car object:
// const car = {
//   color: 'red',
//   horsePower: 4000,
//   year: 1989,
//   windowsTinted: true,
//   doors: 4,
//   engine: 'V12'
// }


// const user = {
//             name: "Chris",
//             age: 34,
//             isLoggedIn: true
//     }
// const car = {
//     color: "blue",
//     horsePower: 4000,
//     year: 1989,
//     isElectric: true
// }



// if(car.isElectric){
//     console.log("Yes the car is electric.");
// } else{
//     console.log("Nope, you need gas!");
// }

// car.year = 1988

// if(car.year <= 1960){
//     console.log("Hey thats a classic!");
// } else if (car.year <= 2000){
//     console.log("Hey that car is getting old");
// } else {
//     console.log("Wow nice car!");
// }

// console.log(car)


//======TESTING TO SEE IF AN OBJECT HAS A CERTAIN PROPERTY=========

// using an if statement
// const house = {}

// house.color = "red"
// house.doors = 2
// house.floors = 1

// console.log(house);
// //============================accessing values within objects=====================
// for (let i = 0; i < house.doors; i++){
//     console.log(i);
// }
// //================================================================================

// if(house.alarm){
//     console.log("House is secure");
// } else {
//     console.log("You need an alarm system");
// }
// //======================================================================

// const dev = {
//     programmingLanguages: ["javascript", "python", "html", "css"],
//     address: {
//         street: "123 Main Street",
//         "zip code": "12345",
//         state: "NY",
//         city: "Yonkers"
//     }
// }

// console.log(dev.address.state)

// dev.address.apt = "1A"  //  adding a property to the sub object (address)

// console.log(dev.address["zip code"]) // syntax to call a key that is a string ans has a space

// const devCity = dev.address.city  // saving property value to another variable
// console.log(devCity);

// //================Another example=========================
// // keys are always going to be strings, even when created with numbers
// const teams = {
//     1: "Blue Team",
//     2: "Red Team",
//     3: "Purple Team"
// }

// console.log(teams);

// const teamTwo = 2  // storing key value(2) in a variable

// console.log(teams[teamTwo])  // using the variable (teamTwo) to access key value (2) in the teams object


//===========Adding functions to your objects===========
// **Methods - functions that are inside of an object
//using parameters in function within object
//using default values

// const coder = {
//     name: "Anna",
//     company: "Google",
//     joinedCompany: 2021,
//     languages: ["C", "C++", "C#", "Ruby"],
//     greeting: function (name = "", message = "World" ){   // default values: "" and "World"
//         console.log(`Hello, ${name} ${message}`);
//     }
// }

// coder.greeting("everyone!")
// coder.greeting()
// coder.greeting("Mike", "today!")
// coder.greeting()   // not inputting a value in the first parameter


//================Deleting properties in an object====================

// console.log(coder);

// delete coder.company // using the "delete" keyword, you can remove properties (delete is a global keyword)

// console.log(coder)

// syntax:

// key : value
// properties : value
// key : methods (when value is a function)
// properties : methods (when value is a function)


// ==========Objects with Arrays===========

// const playlist = [

//  {
//     songName: "My song1",
//     artist: "Mike",
//     genre: "Hip Hop",
//     songLength: 120, 
//     writers: ["Yishaq", "Jude", "Deja"]

// },
// {
//     songName: "My song2",
//     artist: "John",
//     genre: "Classic",
//     songLength: 120, 
//     writers: ["Ronnie", "Mo", "Nelia"]
// }
// ]

// const song3 = {
//     songName: "My song3",
//     artist: "Mike",
//     genre: "Hip Hop",
//     songLength: 120, 
//     writers: ["Yishaq", "Jude", "Deja"]

// }
// const song4 = {
//     songName: "My song4",
//     artist: "John",
//     genre: "Classic",
//     songLength: 120, 
//     writers: ["Ronnie", "Mo", "Nelia"]
// }



// playlist.push(song1)
// playlist.push(song2)
// console.log(playlist[1].songName)

//===============For in Loop and For of Loops with Objects===========

// const user = {
//     "id": 1, 
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556 ",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         },
//         },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }

// }

// ============For In loop===============

// for(let key in user){  
//     console.log(key);  // gives you a list of the keys
// }

// for(let key in user){  
//     console.log(user[key]);  // gives you the values within each key  
// }


//=============For Of Loop=============
// gives you a list of the keys with each value

// for (const [key, value] of Object.entries(user)){  //** use .entries method
//     console.log(`${key}: ${value}`);
// }


//==========Example of array with objects===================

// const usersArr = [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Ervin Howell",
//       "username": "Antonette",
//       "email": "Shanna@melissa.tv",
//       "address": {
//         "street": "Victor Plains",
//         "suite": "Suite 879",
//         "city": "Wisokyburgh",
//         "zipcode": "90566-7771",
//         "geo": {
//           "lat": "-43.9509",
//           "lng": "-34.4618"
//         }
//       },
//       "phone": "010-692-6593 x09125",
//       "website": "anastasia.net",
//       "company": {
//         "name": "Deckow-Crist",
//         "catchPhrase": "Proactive didactic contingency",
//         "bs": "synergize scalable supply-chains"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "username": "Samantha",
//       "email": "Nathan@yesenia.net",
//       "address": {
//         "street": "Douglas Extension",
//         "suite": "Suite 847",
//         "city": "McKenziehaven",
//         "zipcode": "59590-4157",
//         "geo": {
//           "lat": "-68.6102",
//           "lng": "-47.0653"
//         }
//       },
//       "phone": "1-463-123-4447",
//       "website": "ramiro.info",
//       "company": {
//         "name": "Romaguera-Jacobson",
//         "catchPhrase": "Face to face bifurcated interface",
//         "bs": "e-enable strategic applications"
//       }
//     }
//   ]

//   usersArr.forEach((user) => {   //using forEach to go through usersArr and entering each user as parameter
//     console.log(user.name);    //provides each user name 
//     console.log(user.address.geo);  // provides each user geo location
// })

//Example of accessing specific information in the array and doing something with it
// usersArr.forEach((obj) => {   
//     if (obj.id ===2){
//         console.log(`Deleting user ${obj.name}`);
//     }
// })

//====Example of using a variable to access user id for deletion
// const idToDelete = 3
// usersArr.forEach((user) => {   
//     if (user.id ===idToDelete){
//         console.log(`Deleting user ${user.name}`);
//     }
// })
