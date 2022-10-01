//https://ps-rtt-sei.herokuapp.com/mod-1/week-4/day-2/slides/

const commentBtn = document.querySelector("button")

console.log(commentBtn);


//placing a function as the 2nd parameter in the eventLister will give you access to the "event object"

commentBtn.addEventListener("click", function(e){
    // console.log(e);
    const li = document.createElement("li")
    // console.log(li);
    const input = document.querySelector("input")
    // console.dir(input)  //.dir gives you the properties to look at
    console.log(input.value)  //ALL INPUTS WILL HAVE A .value
    li.textContent = input.value   // assigning the input value to the li (NOTE: This will be a string because of the type = "text" attribute on the input)
    console.log(li)
    document.querySelector("ul").appendChild(li)  // appending the new li with text from the input to the ul
    input.value=""
})


// const commentBtn = document.querySelector('button')

// console.log(commentBtn);

// function add (event){
//     console.log(this);
// }

// commentBtn.addEventListener('click', function(e){
        //creates a new li element
//     const li = document.createElement('li')
        //get the input from the DOM
//     const input = document.querySelector('input')
        //sets the li textContent to the value of the input
//     li.textContent = input.value
        //append the new li to the ul
//     document.querySelector('ul').appendChild(li)
        //set the input back to empty string
        // input.value = ""
// })



//*============EVENT BUBBLING======================

