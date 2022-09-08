////////////////////////////////
// Easy Going
////////////////////////////////
// for (let i = 1; i <= 20 ; i++){
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// for (let i = 0; i <= 200 ; i+=2){
//     console.log(i);
// }

////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 1; i<=100; i++)
// if(i % 3===0 && i % 5===0){
//     console.log(`FizzBuzz`);
// } else if(i % 3===0){
//     console.log(`Fizz`);
// } else if(i % 5===0){
//     console.log(`Buzz`);
// } else{
//     console.log(i);
// }

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// //1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee.splice(2, 1, 5001)
// console.log(plantee);
// //2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy.splice(3, 1, "Gotham City")
// console.log(wolfy);
// //3. Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart);
// //4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.splice(0,1,"Gameboy")
// console.log(wolfy);

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// let turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let i of turtles){
//     console.log(i.toUpperCase());
// }

////////////////////////////////
// Methods, Revisited
////////////////////////////////
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//1. use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies);
// favMovies.sort();
// console.log(favMovies);
//.sort() reorganized the array in alphabetical order.  It altered the array because elements have new indexes.

//2. Use the method pop
// favMovies.pop()
// console.log(favMovies);

//3. push"Guardians of the Galaxy"
// favMovies.push("Guardian of the Galaxy")

//4. Reverse the array
// favMovies.reverse()
// console.log(favMovies);

//5. Use the shift method
// favMovies.shift()
// console.log(favMovies);

//6. unshift- what does it return?
// favMovies.unshift("my movie")
// console.log(favMovies);
// unshift will place the argument given at the beginning of the array

//7. splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained"))
// favMovies.splice(16,1,"Avatar")
// console.log(favMovies);

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
// console.log(favMovies.length / 2 )
// console.log(favMovies.slice(10, 20))

//9. store the value of your slice in a variable, console.log it - Thought question: what is going on here?
// let piece = favMovies.slice(10,20)

//10. console.log your final results
// console.log(piece);

//11. After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf("Fast and the Furious"))
// We get a negative 1 as the index

//12. Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
// Using const is ok.  The keyword const does not allow the variable datatype to be changed from an array, but the array itself can still be manipulated.  Using the word let allows you to change the var to diff data types. 
////////////////////////////////
// Where is Waldo
////////////////////////////////
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// console.log(whereIsWaldo);                    
// whereIsWaldo.splice(1,1) 
// console.log(whereIsWaldo);
// whereIsWaldo[1].splice(2,1, "No One")   
// console.log(whereIsWaldo); 
// console.log(whereIsWaldo[2][1][1]);       
////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////