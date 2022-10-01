
//https://ps-rtt-sei.herokuapp.com/mod-1/week-4/day-2/slides/

//==========EVENT BUBBLING===================
//events will bubble up through the DOM unless yo use a method to stop it.
//Example below: after clicking the li...that event bubbles up to the ul...then bubbles up to the body...then bubbles up to the html file. 


const ul = document.querySelector("ul")
const li = document.querySelector("li")
const body = document.querySelector("body")
const btn = document.querySelector("button")
const handleClick = () => {
    console.log("handle click function");
}

// li.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.target);

// })

// ul.addEventListener("click", function(e){
//     console.log(e.target);
// })

// body.addEventListener("click", function(e){
//     console.log(e.target);
// })


//===============Method to stop bubbling with .stopPropagation()=======================

// .stopPropagation()

// li.addEventListener("click", function(e){
//     console.log(e);
//     console.log(e.target);
//     // e.stopPropagation()     // *this stops the bubbling at the li level
// })

// ul.addEventListener("click", function(e){
//     console.log(e.target);
//      e.stopPropagation()   // *this stops the bubbling at the ul level
// })

// body.addEventListener("click", function(e){
//     console.log(e.target);
// })


//????????? WHY this is important ??????????  - Study more: Event Delegation & Event Bubbling

//==============Event Delegation======================

//when you add an event listener to the parent element, that event is delegated to the children element(s).  So the children will execute the parent's event.

//Example:

//<ul> - add event listener "click" here

    //<li></li> - you can "click the child element and it will execute as if it had the eventlistener"

//</ul>


//===============Removing Event Listeners==================
//*.removeEventListener()
//In the example below: The button (btn) has an eventlistener to log "handle click function".  But when you execute the event listener in the ul, the eventListener on the button is removed.  This is because of the .removeEventListener() method.  


li.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    // e.stopPropagation()     // *this stops the bubbling at the li level
})

ul.addEventListener("click", function(e){
    console.log(e.target);
     btn.removeEventListener("click", handleClick)
})

body.addEventListener("click", function(e){
    console.log(e.target);
})

btn.addEventListener("click", handleClick)
