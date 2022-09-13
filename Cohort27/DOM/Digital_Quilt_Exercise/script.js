//**CREATING CUSTOM DIVS using FUNCTIONS */
    //Example: creating new divs for different products, on an ecommerce site

// //Create Element
// const div = document.createElement("div")
// div.textContent = "Hello"
// div.style.backgroundColor = "blue"
// console.log(div);

// //Append element to the DOM

//     //get the element to append to (parent element)

//     const page = document.querySelector("body")

//     //append the child to the parent
//     page.appendChild(div)



const page = document.querySelector("body")
const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const rgbColor = `rgb(${red}, ${green}, ${blue})`
    return rgbColor
}

function boxLoop (num){
for (let i = 0; i <= num; i++){
    const div = document.createElement("div")
    div.classList.add("square")
    div.style.backgroundColor = randomColor()
    div.textContent = i
    page.appendChild(div)
    // console.log(div);
}
}


boxLoop(500)



