

let list = document.querySelector(".starks")
let add = document.querySelector("#add-child")
let redWed = document.querySelector("#red-wedding")
let arr = []

function addChild(){
    let newDiv = document.createElement("div")
    newDiv.textContent ="New Child"
    list.appendChild(newDiv)
    arr.push(newDiv)
    console.log(arr);
}

function redWedding(){
    for(let i of arr){
        if(i = "List"){
            list.textContent = "List"
        }else{
            console.dir(i)
            list.textContent = ""
        }
    }
}

add.addEventListener("click", addChild)
redWed.addEventListener("click", redWedding)

// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
