
// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Tasks
//Task 1.0
//Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main")

//Task 1.1
//Set the background color of mainEl to the value stored in the --main-bgCSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)"
//Hint: Assign a string that uses the CSS var()function like this:
//'var(--main-bg)'

//Task 1.2
//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

//Task 1.3
//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr")    // preferred way to add a class because it adds the class instead of replacing it
// mainEl.setAttribute("class", "flex-ctr")
//Hint: Element.classList API

//Task 2.0
//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu")
// const topMenuEl = document.querySelector("#top-menu")    //another way to select the id top-menu

//Task 2.1
//Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%"

//Task 2.2
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

//Task 2.3
//Add a class of flex-around to topMenuEl.
// topMenuEl.setAttribute("class", "flex-around")  //this will add or replace the class
topMenuEl.classList.add("flex-around") //this will only add the class


//Task 3.1
//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((linkObj) => {   // Use .forEach() because menuLinks is an array
    //create a new element
    const a = document.createElement("a")  // this creates an anchor tag element for each object
    //setting an href attribute to each anchor tag created
    a.setAttribute("href", linkObj.href)
    //setting the text in each anchor created to the text in the menuLinks
    a.textContent = linkObj.text
    // append the anchor tags to the topMenuEl
    topMenuEl.appendChild(a)
    console.log(a);  //shows each anchor tag with their href and comment text

})





// for (let link of menuLinks){
//     link.innerHTML = "<a></a>"
//     link.document.querySelector("a").setAttribute(href, )
    // link.setAttribute("href", href)
    // link.textContent = text
// }
// console.log(menuLinks);

//Create an <a>element.
//On the new element, add an href attribute with its value set to the href property of the "link" object.
//Set the new element's content to the value of the text property of the "link" object.
//Append the new element to the topMenuEl element.





