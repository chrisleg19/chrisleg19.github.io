
//Canvas Lesson:  https://ps-rtt-sei.herokuapp.com/mod-1/week-2/day-1/slides/#5-scope


//========Exercise 1=============

function computerArea(width, height) {
    // return "The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units." 
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width * height} square units.`
}  

console.log(computerArea(2,3)) // shows the value in console log
const rect1 = computerArea(2,3) //stores the value in a variable for later use
console.log(rect1);

//========Exercise 2==============

//========using .toLowerCase property will overcome user input differences (lower vs uppercase letters)

// function planetHasWater(planet){
//     if(planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars"){
//         return true;
//     } else{
//         return false;
//     }

// }
// const waterOrNot = planetHasWater()
// console.log(planetHasWater("Mars"))


//========Exercise 2 pt. 2==============

const planetHasWater = function(planet){
    if(planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars"){
        return true; 
    } else{
        return false;
    }
} 
const planetEarth = planetHasWater("EARTH")
console.log(planetEarth);

//==========Exercise L2=========

const addTwo = num => num + 2
console.log(addTwo(5));

//------------- ANOTHER WAY TO WRITE THE FUNCTION ABOVE:------------
// function addTwo(num){
//     return num + 2
// }
// console.log(addTwo(5));
//------------------------------------------------------------------

const addS = string => string + "s"
console.log(addS("smile"))


const sayHello = string1 => "Hi " + string1
console.log(sayHello("Chris")) 


//************************Example of a DEFAULT PARAMETER*************************************

function sayHello2(string2 = "Bob"){    //*"Bob is the default parameter"
    return `Hi ${string2}`;
}
console.log(sayHello2())    //*calling the function without an argument will use the default parameter

//********************************************************************************************* */

const wereAwesome = (myName, classmateName) => `${classmateName} and ${myName} are awesome!`

const message = wereAwesome ("Chris", "Anna")
console.log (message)


const isOdd = (number) => number % 2 === 0 ? true : false 
console.log(isOdd(37))


//========Challenges===========

//==========Challenge 1================
//Declaring a function

// const word = "987654321"
// let container = ""

// function reverseString(){
//     for(let i = word.length -1 ; i >= 0; i--){
//         container += word[i]
        
//     }
//     console.log(container);
// }

// reverseString()


//==========Challenge 1 pt.2===============
//Function Expression

let word = ""
const reverse = (string) => {
    for(let i = string.length-1; i >= 0; i--){
        word += string[i]
        
    }
    // console.log(word);
    return word;
}

const backwards = reverse("987654321")
console.log(backwards);


//============Challenge 2=================

const caps = (string) => (string.charAt(0).toUpperCase() + string.slice(1))

console.log(caps("first"))





