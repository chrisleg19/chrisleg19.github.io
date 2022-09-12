/** Write your code below each comment */


/* 1.Get the element with an ID of 'first' */

const firstId = document.getElementById("first")


// const firstId = document.querySelector("#first")
console.log(firstId);

/* 2.Now delete that first element (in the html file), and re-run your code. What changed? */

//*We got the "misleading second element with the same ID of first.

/* 3.Get the elements with a class of 'second' with getElementsByClassName: */

const second = document.getElementsByClassName("second")
// const second = document.querySelector(".second")
console.log(second);

/* 4.Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */

//*No, we get an HTMLCollection with 1 less h1

// const parentOfSecond = document.querySelector(".elements")
// console.log(parentOfSecond)

// const firstChildOfSecond = parentOfSecond.firstElementChild
// console.log(firstChildOfSecond);

// parentOfSecond.removeChild(firstChildOfSecond)
// console.log(parentOfSecond);

 
/* 5.Get the span element using getElementsByTagname: */

const spanEl = document.getElementsByTagName("span")

// const spanEl = document.getElementsByTagName("span")
console.log(spanEl);
// console.log(spanEl[1])

/* 6.Add a span anywhere, and re-run the last piece of code. What's different? */

const newSpan = document.createElement("span")
newSpan.innerText = "NEW SPAN"

const lastDiv = document.querySelectorAll("div")[1]
console.log(lastDiv)

lastDiv.appendChild(newSpan)

const spanEl2 = document.getElementsByTagName("span")
console.log(spanEl2);

//There are now 3 spans in the HTMLCollection list
