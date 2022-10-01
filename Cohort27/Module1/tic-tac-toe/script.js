
let sq1 = document.querySelector("#square1")
let sq2 = document.querySelector("#square2")
let sq3 = document.querySelector("#square3")
let sq4 = document.querySelector("#square4")
let sq5 = document.querySelector("#square5")
let sq6 = document.querySelector("#square6")
let sq7 = document.querySelector("#square7")
let sq8 = document.querySelector("#square8")
let sq9 = document.querySelector("#square9")
let resetBtn = document.querySelector("#btn")
let clr1 = document.querySelector(".clear1")
let clr2 = document.querySelector(".clear2")
let clr3 = document.querySelector(".clear3")
let clr4 = document.querySelector(".clear4")
let clr5 = document.querySelector(".clear5")
let clr6 = document.querySelector(".clear6")
let clr7 = document.querySelector(".clear7")
let clr8 = document.querySelector(".clear8")
let clr9 = document.querySelector(".clear9")
let sb = document.querySelector(".sb")
const xWinner = "X wins the game!"
const oWinner = "O wins the game!"

function reset () {
    sq1.textContent = ""
    sq2.textContent = ""
    sq3.textContent = ""
    sq4.textContent = ""
    sq5.textContent = ""
    sq6.textContent = ""
    sq7.textContent = ""
    sq8.textContent = ""
    sq9.textContent = ""
    console.log("reset")
    sb.innerHTML = ""
}

resetBtn.addEventListener("click", reset)

function addO(sq){
    sq.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        sq.textContent = "O"

        if((sq1.textContent === "O" && sq2.textContent === "O" && sq3.textContent === "O") || (sq1.textContent === "O" && sq5.textContent === "O" && sq9.textContent === "O") || (sq1.textContent === "O" && sq4.textContent === "O" && sq7.textContent === "O") || (sq4.textContent === "O" && sq5.textContent === "O" && sq6.textContent === "O") || (sq7.textContent === "O" && sq8.textContent === "O" && sq9.textContent === "O") || (sq7.textContent === "O" && sq5.textContent === "O" && sq3.textContent === "O") || (sq2.textContent === "O" && sq5.textContent === "O" && sq8.textContent === "O") || (sq3.textContent === "O" && sq6.textContent === "O" && sq9.textContent === "O")){
            sb.append(oWinner)
            console.log("o wins")
        }
    })  
}

function addX(sq){
    sq.addEventListener("click", ()=>{sq.textContent ="X"
    if((sq1.textContent === "X" && sq2.textContent === "X" && sq3.textContent === "X") || (sq1.textContent === "X" && sq5.textContent === "X" && sq9.textContent === "X") || (sq1.textContent === "X" && sq4.textContent === "X" && sq7.textContent === "X") || (sq4.textContent === "X" && sq5.textContent === "X" && sq6.textContent === "X") || (sq7.textContent === "X" && sq8.textContent === "X" && sq9.textContent === "X") || (sq7.textContent === "X" && sq5.textContent === "X" && sq3.textContent === "X") || (sq2.textContent === "X" && sq5.textContent === "X" && sq8.textContent === "X") || (sq3.textContent === "X" && sq6.textContent === "X" && sq9.textContent === "X")){
        sb.append(xWinner)
        console.log("x wins")
    } 
})
}

function clearBtn(cb,sq){
cb.addEventListener("click", ()=>{
    sq.textContent = ""
    sb.innerHTML = ""
})
}

clearBtn(clr1,sq1)
clearBtn(clr2,sq2)
clearBtn(clr3,sq3)
clearBtn(clr4,sq4)
clearBtn(clr5,sq5)
clearBtn(clr6,sq6)
clearBtn(clr7,sq7)
clearBtn(clr8,sq8)
clearBtn(clr9,sq9)

addO(sq1)
addO(sq2)
addO(sq3)
addO(sq4)
addO(sq5)
addO(sq6)
addO(sq7)
addO(sq8)
addO(sq9)

addX(sq1)
addX(sq2)
addX(sq3)
addX(sq4)
addX(sq5)
addX(sq6)
addX(sq7)
addX(sq8)
addX(sq9)



