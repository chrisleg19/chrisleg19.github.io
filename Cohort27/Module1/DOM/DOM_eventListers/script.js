
//==========DOM Events=============
//slides
//https://perscholas.instructure.com/courses/1123/modules/items/511617


//List of events:
//https://developer.mozilla.org/en-US/docs/Web/Events


//There are three different approaches for registering event listeners:

//1. In the HTML (inline):
//  <button id="reset-btn" onclick="reset()">

//create function placed in the eventLister within HTML (inline) 
const inline = () => {
    console.log("Inline");
}

//2. Assigning to DOM elements' properties (.onclick()):
//  resetBtn.onclick = reset;

//creating a var to target the button by its ID
const domProp = document.querySelector("#reset-btn")
//attaching the onclick property to the button.  Assigning "inline function" to the onclick property
domProp.onclick = inline;
//Assigning a function to the onclick property
domProp.onclick = () =>{
    console.log("DOM Property");
}

//NOTE: Using approach #2 (assigning event listener to DOM property), ONLY the last event created will execute.  Example below: random number will generate instead of logging "DOM Property"
const randNum = () =>{
    console.log((Math.floor(Math.random() * 256)));
}

domProp.onclick = randNum

//*=========================MOST COMMON METHOD===========================================

//*3. Calling addEventListener() method on a DOM element
//*MOST PREFERRED METHOD
//Most common syntax:
//element.addEventListener("<event-name>", <callback>, <use-capture>);

//NOTE: Using this approach will allow you to assign multiple events to a single DOM element.
//targeting the button with querySelector and assigning it to a variable btn2
const btn2 = document.querySelector("#method")
//assigning multiple events to btn2
btn2.addEventListener("click", ()=>{console.log("method");})
btn2.addEventListener("click", randNum)
btn2.addEventListener("click", inline)


//Example of using event lister to also change color of background
const body = document.querySelector("body")

btn2.addEventListener("click", () => {body.style.backgroundColor = "purple"})

//*=========================MOST COMMON METHOD===========================================


