

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
    let arr1 = document.querySelectorAll("div")   //
    console.log(arr1);
    for(let div of arr1){
        console.log(div);
        if(div.textContent === "New Child"){
            div.remove()
        }
    }
console.log(document.querySelectorAll("div"))

    // for(let div of arr){
    //     if(div.textContent === "List"){
    //         list.textContent = "hello"
    //     }else{
    //         console.dir(i)
    //         console.log("somethingelse")
    //         list.textContent = ""
    //     }
    // }
}

add.addEventListener("click", addChild)
redWed.addEventListener("click", redWedding)

// Create Two Functions -> addChild and redWedding

// Attach functions to buttons

// The addChild function creates new div & appends it to the starks div

// The redWedding function removes ALL stark children (loop)
