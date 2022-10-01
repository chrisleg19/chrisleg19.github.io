//create variables for all elements needed

const ul = document.querySelector("#color-list")
const button = document.querySelector("#generate-color")
const resetBtn = document.querySelector("#reset-all")
const COLORS_ARRAY = [
    "red",
    "yellow",
    "magenta",
    "cyan",
    "blue",
    "black",
    "gray",
    "teal",
    "green",
    "purple",
    "violet",
  ];


  //function generate should do the following: 
function generate(){
    //get random color from Colors Array
    let randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)]
    //create an li element
    let li = document.createElement("li")
    //add the random color name to the li text
    li.textContent = randomColor
    //set the background color of the li to the random color
    li.style.backgroundColor = randomColor
    //append the li to the ul
    ul.appendChild(li)
}


//function reset removes the first li:
function reset(){
    if(ul.firstChild !== ""){
    let li = document.querySelector("li")
    li.remove()
    }
    }

//remove all li children from the ul
function resetAll(){
    ul.textContent = ""
}    

button.addEventListener("click", generate)
ul.addEventListener("click", reset)
resetBtn.addEventListener("click", resetAll)