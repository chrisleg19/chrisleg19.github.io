// Class Slides: https://perscholas.instructure.com/courses/1123/modules/items/511608

/*
*Important DOM selectors:

getElementById: Use when you need to select a single element that has an id assigned to it.

querySelector: Use when you need to select a single element that does not have an id.

querySelectorAll: Use when you need to select multiple elements. querySelectorAll returns an array-like object called a NodeList.
*/


//** */========.getElementById()====================
//1. grabbing the element from the DOM by its ID
const h1 = document.getElementById("title") //document refers to the dom.  

//2. Changing the element properties (values must be strings)
//be sure to use .style
h1.style.backgroundColor = "orange"
h1.style.padding = "20px"
h1.style.color = "#fff"
h1.style.fontSize = "64px"


//after attaching the JS document to the HTML doc.  Console Logs will be in the browser's console.  
// console.log(h1);

//.dir() Allows you to explore the properties of element
// console.dir(h1)


//** */=====Using querySelector()==============
//Will return a single element
//This is is similar to CSS Selector
//If no specific element is identified, it will grab the 1st one (top to bottom). 
//to select an ID, you must add "#"
//to select a Class, you must add "."
// const h2 = document.querySelector("h2")
// console.log(h2)

//using .querySelector() to access an the paragraph element with class "cool"
const pEl = document.querySelector(".cool")
pEl.textContent = "Comments for Today:"; //plain text
pEl.style.color = "red"
pEl.style.fontWeight = "bold"
console.log(pEl)



//** */==========.hasAttribute()===========
//returns a Boolean value indicating whether the specified element has the specified attribute or not.
//check to see if an element has an attribute
console.log(pEl.hasAttribute('class'))



//** */==========.setAttribute()===========
//Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
//Syntax: setAttribute(name, value)

const a = document.querySelector("a")
console.log(a);  // shows anchor tag

console.log(a.hasAttribute("href"));  //shows that anchor tag does not have an attribute of href

a.setAttribute("href", "https://www.google.com/") // added the anchor tag attribute with .setAttribute

console.log(a.hasAttribute("href")); //shows that the anchor tag now has an anchor tag

const img = document.querySelector("img")
console.log(img);
console.log(img.getAttribute("alt"))
img.setAttribute("src", "https://images.unsplash.com/photo-1662642969047-11ca70bfe99b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=782&q=80")  // setting the src attribute to the image from JS
img.setAttribute("width", "200px")  // setting the width attribute to the image from JS


//using .querySelector() to access an the paragraph element with ID "super-cool"
const superCoolP = document.querySelector("#super-cool")
console.log(superCoolP);


//** */===.querySelectorAll()======
//Will return ALL elements in the querySelector
const allH2 = document.querySelectorAll("h2")
//you will get a "NodeList" or array of all the elements
console.log(allH2);


//** */======Changing the content of an element=======
//.textContent - will allow yo to modify text w/ JS
//.innerHTML - will allow you to modify HTML w/ JS (can be dangerous (Cross Site Scripting, aka using forms and input fields to input code))

// changing the plain text in an element
pEl.textContent = "Comments for Today:";
//changing element with HTML
superCoolP.innerHTML = "Comments for <strong>Today</strong>:"


//** */======.ClassList==========
//will add classes instead of replacing it (like setAttribute)
//be sure to access .classList first and not .style
//allows you to attach an entire CSS style to an element
const bioP = document.querySelector("#bio") //selecting paragraph with id of bio. (can also use "getElementById")
console.log(bioP);  // shows paragraph with id bio

bioP.classList.add("bioStyles", "pad") // added the classes .bioStyles and .pad  class to to paragraph bioP.  (shows css styles saved under each class) 

//.toggles turns a class on or off
bioP.classList.toggle("bioStyles") //class toggled off from above
bioP.classList.toggle("bioStyles") //class toggled back on

bioP.classList.remove("pad") //removes a class 

bioP.classList.replace("bioStyles", "bioStyles1") //replaces a class / syntax: .classList.replace(original class, replacement class)


//=====Loop over Node List=========

const liArr = document.querySelectorAll(".comment") //selecting all li's with class "comment"

console.log(liArr); //shows Node List in console of each li

//For of loop to go through Node list of li's
//Best to use for of loop
for (let li of liArr){
    console.log((li.textContent));  //.textContent shows what's in each li
}

//Example changing the styles of an element using a loop
for(let li of liArr){
    li.style.fontSize = "30px"
}



//=======Setting up styling as JS functions========
//Example of setting the styles as a function with JS 
// function addStyles(element){
// element.style.backgroundColor = "red"
// element.style.padding = "20px"
// element.style.color = "#fff"
// element.style.fontSize = "64px"
// return element;
// }
//calling the styling function and then inserting an element to take the styling.
// addStyles(h1)
// console.log(h1);
//===================================================