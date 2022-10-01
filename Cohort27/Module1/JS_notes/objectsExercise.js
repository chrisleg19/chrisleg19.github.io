
// //* ===============Exercise 1: ===========================
// // * Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

// const myDog = {
// //     // name: "Koree",
// //     // legs: 4,
// //     // tails: 1, 
// //     // friends: ["Chris", "Sally", "Joe", "Mark"],
// //     // hairType: "long",
// //     // color: "grey"
// }


// // You can set these object properties to whatever values you want,
// // as long as name is a string, legs and tails are numbers, and friends is an array.

// //Only change code below this line

// myDog.name = "Koree"
// myDog.legs = 4
// myDog.tails = 1 
// myDog.friends = ["Chris", "Sally", "Joe", "Mark"]
// myDog.hairType = "long"
// myDog.color = "grey"

// console.log(myDog);


//* ===============Exercise 2: ===========================
//* Setup
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
//  //* Assign each variable its corresponding value from the object
//  //Only change code below this line
//   const hatValue = testObj.hat;      // Change this line
//   const shirtValue = testObj.shirt;    // Change this line

// console.log(hatValue, shirtValue)



//* ===============Exercise 3: ===========================
//* Read the values of the properties 'an entree' and 'the drink' of testObj2 using bracket notation and assign them to two new variables entreeValue and drinkValue respectively.

  // Setup
// const testObj2 = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };

// Only change code below this line
// const entreeValue = testObj2["an entree"]
// const drinkValue = testObj2["the drink"]

// console.log(entreeValue, drinkValue)



//* ===============Exercise 4: ===========================
//* Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
// const testObj3 = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
 
   // Only change code below this line
//  // const playerNumber = testObj3[16]; // Change this line //**Storing "Montana in playerNumber instead of 16" */
//  // console.log(playerNumber);  //**Showing that "Montana is stored in playerNumber instead of 16" */
//  // const player = playerNumber;   // Change this line
//  // console.log(player);

//   const playerNumber = 16 // Change this line
//   const player = testObj3[playerNumber];   // Change this line
//   console.log(player);


  //* ===============Exercise 5: ===========================
  // Update the myDog2 object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

  // Setup
// const myDog2 = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
 
//   // Only change code below this line

  // myDog2.name = "Happy Coder"

  // console.log(myDog2.name)




// * ===============Exercise 6: ===========================
// Add a bark property to myDo3g and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

// const myDog3 = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };

// // Only change code below this line

// myDog3.bark = "woof"

// console.log(myDog3);








//* ===============Exercise 7: ===========================
//Delete the tails property from myDog4. You may use either dot or bracket notation.

// Setup
// const myDog4 = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
 
// Only change code below this line

// myDog4.tails = null

// delete myDog4.tails

// console.log(myDog4);





//* ===============Exercise 8: ===========================
// Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

// const myMusic = [{"artist": "Billy Joel","title": "Piano Man","release_year": 1973,"formats": ["CD","8T","LP"],
//       "gold": true
//     }
//   ];

// Only change code below this line


// myMusic.push({"artist": "Biggie Smalls", "title": "One More Chance", "release_year number": 1994, "formats" : ["CD","8T","LP"], "gold": true })

// can also put the "new album" in an object and then just push that object to myMusic 
//best to create new objects assigned to variables because values may be different for each object(ex: diff users)
//Example:
// const newAlbum = {
//   artist: "Biggie Smalls", 
//   title: "One More Chance", 
//   "release_year number": 1994, 
//   formats : ["CD","8T","LP"], 
//   gold: true 
// }
// myMusic.push(newAlbum)

// console.log(myMusic)


//* ===============Exercise 9: ===========================
//   Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
// // Only change code below this line
//   const gloveBoxContents = myStorage.car.inside['glove box']
// console.log(gloveBoxContents);







//* ===============Exercise 10: FINAL BOSS ===========================
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.


// const myPlants = [{type: "flowers",list: ["rose","tulip","dandelion"]}, {type: "trees",list: ["fir","pine","birch"]}];
 
// // Only change code below this line
// // white_check_mark
// // eyes
// // raised_hands
// const secondTree = myPlants[1].list[1]

// // let secondTree = myPlants[myPlants[1]].type.list[myPlants[1].type.list[1]]

// console.log(secondTree)


//=========Let's Play Objects and ORcS===========

// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"]
// }


//Access all values in the player.belongings array:
// console.log(adventurer.belongings)
//Access a specific item in the belongings array:
// console.log(adventurer.belongings[2])
// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }






