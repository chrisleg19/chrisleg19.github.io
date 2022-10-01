

//========CLASSES===============
// class Vehicle {
//     constructor(vin, make, color){        // Constructor - a special method of a class for creating and initializing an object instance of that class.
//         this.vin = vin
//         this.make = make
//         this.color = color || "blue"   ///will set the color of your vehicle to blue as a default if no value is given
//         this.isRunning = false
//     }

//     start(){
//         this.isRunning = true;
//         console.log("Vehicle is running...");
//     }
//     stop(){
//         this.isRunning = false;
//         console.log("Vehicle is stopped.");
//     }

//     toString(){
//         return `Vehicle ${this.vin} is a ${this.make} and is ${this.color}.`
//     }

// }

// // const v1 = new Vehicle() // an object created from the Vehicle class
// // console.log(v1);  // showing that v1 is an instance of the Vehicle class
// // console.log(typeof v1);  //showing that v1 is an object

// const v1 = new Vehicle("xyz123", "Honda", "red")
// const v2 = new Vehicle("abc123", "Ford")
// // console.log(v1.start());  
// // console.log(v2.start());
// // console.log(typeof v1);

// v1.start();
// v2.start();
// v1.stop();

// console.log(v1);
// console.log(v2);

// console.log(v1.toString())
// console.log(v2.toString())


//==============Class Character Exercise==========================

/*Step 1: Created class
Step 2: Created two objects from class
Step 3: Created function inside class "greet"
Step 4: Called function as method of class.
As a result - Every character now has dialog.*/

//===Parent Class=======
class Character{

    constructor (name, age, eyes, hair, lovesCats=false, lovesDogs){  //lovesCats=false is a default value
        this.legs =2; 
        this.arms =2; 
        this.eyes = "hazel";
        this.hair = "gray"
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;  //this is also an example of a default value
    }

    greet(otherCharacter){
        console.log(`Hello ${otherCharacter}!`);
    }
    //Lesson example:
    // classyGreeting(otherClassyCharacter){
    //     console.log(`Greetings ${otherClassyCharacter.name}!`);
    // }
    //Abe's example:
    classyGreetings(characterObj){       //Accessing the name property of the Character obj for customer greeting
        console.log(`Greetings ${characterObj.name}!`);
    }

    smite(){
        console.log("I smite thee you vile person");
    }

    //**Setter Function */
    setHair(hairColor){
        this.hair = hairColor
    }

}

const me = new Character("Chris", 34, "brown", "black", true)
const you = new Character("Tim", 20, "blue", "red", false, true)

me.setHair("yellow")  //using the setter function to change the color of object's hair

console.log(me);
console.log(you);

console.log(typeof me);
console.log(typeof you);

me.greet("Bob")
you.greet("Bob")
you.smite()

me.classyGreetings(you)  //accessing the classyGreetings method in the "me" object
you.classyGreetings(me)  //accessing the classyGreetings method in the "you" object


//===Sub-Class===

//===========using the "extends key word" will allow the sub-class to inherit parent class properties.

//=====using Super to inherit parent class properties============
class Hobbit extends Character {
    constructor(name, age, eyes, hair){   // Using a constructor to initialize new properties (this.skills)
        super(name, age, eyes, hair);  //**calls constructor function from parent class.  Must use when sub class has constructor.  super gives access to the parent constructor and the default values.
        this.skills = ["thievery", "speed", "willpower"]
    }

    steal(){
        console.log("Let get away!");
    }

    greet(otherCharacter){
        console.log(`Hello ${otherCharacter}, welcome to my World!`);  //this function overwrites the greet func. in the parent class (Character)
    }

    smite(){
        super.smite()  // calls the smite method from parent class
        this.steal()   // extends the functionality with something extra
    }
}

const frodo = new Hobbit("Frodo", 30, "brown", "black")
console.log(frodo);
frodo.greet("Cohort27")    // This shows greeting from the new function in the subclass

const otherChar = new Character("Jack", 22, "green", "purple")
otherChar.greet("Mel")  // otherChar is still pointing to parent func. so this shows greeting from func in parent class
















//**using a for loop to create an array of multiple objects. 

// function createTenCharacters(){
//     const arrOfCharacters = []
//     for(let i = 0; i <= 10; i++){
//         arrOfCharacters.push(new Character())
//     }
//     return arrOfCharacters
// }

// const chars = createTenCharacters()
// console.log(chars);