
// Get the element with an ID of 'first' using querySelector

const ElWithIdFirst = document.querySelector("#first")
console.log(ElWithIdFirst);

// Get the elements with a class of 'second' with querySelector

const ElWithClassSecond = document.querySelector(".second")
console.log(ElWithClassSecond);

// Try the above prompt with querySelectorAll. What's the difference between what these two methods return?

console.log(document.querySelectorAll(".second"))

//*This method returns a NodeList array of H1s

// Get the span element using querySelector

const spanEl = document.querySelector("span")
console.log(spanEl);

// Get multiple span elements using querySelectorAll

const allSpanEls = document.querySelectorAll("span")
console.log(allSpanEls);

// Select only "a" tags *directly inside* of a div (no grandchildren).

const atags = document.querySelectorAll("div > a")
console.log(atags);   //*Easier way

// const divsOfAs = document.querySelectorAll("div");
// console.log(divsOfAs);
// divsOfAs.forEach(()=>{
//     console.log(document.querySelector("a"))
// })

// Select all elements that contain a "data-target" attribute
//**Attributes are targeted using square brackets[] */
    //Attributes: define additional characteristics or properties of the element such as width and height of an image (examples: href, data-target)
const dTarget = document.querySelectorAll("[data-target]")
console.log(dTarget);


// Select all elements where the data-target attribute equals "#false"

//Selecting attributes with specific text
//Use "[]" around entire attribute
//Use '' around the value of the attribute
const falseDataTarget = document.querySelectorAll("[data-target = '#false']")

console.log(falseDataTarget);

