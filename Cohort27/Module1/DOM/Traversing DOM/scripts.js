
//DOM Query Elements

//Searching elements by ID
const introP = document.getElementById("intro")
console.log(introP)

//Searching for elementS with the same class name 
//Returns a "HTMLCollection" of elements
const subTitle = document.getElementsByClassName("sub-title")
console.log(subTitle);
//! will NOT work => subTitle.forEach(el)=> console.log(el))



// **Searching for elements with same class name 
//Returns a Node List of elements (Most popular)
const subTitleCss = document.querySelectorAll(".sub-title")
console.log(subTitleCss);
subTitleCss.forEach((el) => console.log(el))


//Create a new array from a NodeList
const arrOfSubTitles = Array.from(subTitleCss)
console.log(arrOfSubTitles);




//============CRUD=================example

//======CREATE=======
const a = document.createElement("a")  //Creating element does not put it in the DOM.  We must append it to the DOM.
a.setAttribute("href", "http://google.com")
console.log(a)
console.dir(a) //(.dir) another way to console log and see more details in Chrome browser console. 

//======READ=========
const h1 = document.querySelector("h1")
console.log(h1.textContent);

//======UPDATE========
const footer = document.querySelector("footer")
console.log(footer);
footer.style.backgroundColor = "lightBlue"
footer.style.padding = "15px"

//======DELETE========
//method 1: (HIDE)
//put all elements in an array to figure out index
const allParagraphs = document.querySelectorAll("p")
console.log(allParagraphs);
allParagraphs[2].style.display ="none"  //hiding an element in the DOM (on your page)

//method 2: (REMOVE)
//1st get the parent node of the one we want to remove
const parentEl = document.querySelector("footer") //grabbing the footer (parent element) and storing it in a variable parentEl
console.log(parentEl.firstElementChild.nextElementSibling); //using "firstElementChild and nextElementSibling to access the p in the node.  This is the child element we want to remove."  

//parentEl - is the parent element
//firstElementChild - is the first child element
//nextElementSibling - is the next child element after the first child element
//NOTE: you can also use lastElementChild to target your child element

//creating a variable for the child element we want to remove
const child = parentEl.firstElementChild.nextElementSibling

//using .removeChild() to remove the targeted element
parentEl.removeChild(child)

console.log(parentEl);  //shows the p element with "facebook" has been removed


