//class slides: https://ps-rtt-sei.herokuapp.com/mod-2/week-8/day-1/slides/ 

const express = require("express")

//Middleware:
const morgan = require("morgan")  // Morgan is a middleware that will let us know in our terminal that we made a request to the browser


//NOTE: importing a npm file just requires the name of the package (above), but if we import another file we must pass the relative file path (below)


//importing the data (fruits array) from the file (./models/fruits)
const fruits = require("./models/fruits")
const vegetablesArray = require("./models/vegetables")


//NOTE: npm remove morgan (in terminal) - to remove morgan
//NOTE: npm i -D morgan (in terminal) - to set morgan under "devDependencies" in package.json vs "dependencies".  This will help with keeping your application smaller because morgan isn't listed under "dependencies" 
//NOTE: -D will place your dependency under "devDependencies" instead of "Dependencies"


const app = express()
const PORT = 3000

//Middleware
app.use(morgan("dev"))  //telling the express app to use morgan, "dev" is used for development.  There are other setups that can be used for different situations:  https://www.npmjs.com/package/morgan 


//Use this middleware whenever you have a form and need to access the data from that form 
//Use this middleware to read the data from post requests (only have to set up once)
//Without this middleware, your object "body" will be undefined
app.use(express.urlencoded({extended:false}))


//Creating your own Middleware (a function that executes ALL routes)
//It runs in the middle of the request response cycle 
    //sometime after the request is received, but before the final route handler is called
//NOTE: "next" is used as a parameter in middleware function
app.use((req, res, next)=>{
    console.log("I run for all routes");
    //next() tells Express to move to the next middleware or move forward to sending a response
    next()
})



//Set up our view engine
//Below must be after: (const app = express())
//App settings
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())




//Routes:

//NOTE: More specific routes should be at the top

//====================Root Route=====================(for testing)
app.get("/", (req, res)=>{
    res.send("Hello")
})

//====================Index Route=====================
//Fruits Routes:
//Index route: get all fruits (array)
app.get("/fruits", (req, res)=>{
    //response is JSON data, showing the array "fruits"
    // res.send(fruits)
    //rendering a template file:
    res.render("fruits/Index.jsx", {fruits: fruits})
})


//================Post Route (to create)=========================


app.post("/fruits", (req,res)=>{
    //req.body is where your data is going
    console.log(req.body)
    let {readyToEat} = req.body
    if(readyToEat === 'on'){ //if checked, readyToEat is set to 'on'
        readyToEat = true; //do some data correction
    } else { //if not checked, readyToEat is undefined
        readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    res.redirect("/fruits")
})


//Render a form
app.get("/fruits/new", (req,res)=>{
    res.render("fruits/New")

})



//===================Show Route===============
//Show route: after passing in the array index (in the URL) as the value of parameter, you get the single fruit at that index
//getting information from Show.jsx
app.get("/fruits/:indexOfFruitsArray", (req, res)=>{
    const {indexOfFruitsArray} = req.params  //destructuring
    //// res.send(fruits[indexOfFruitsArray])
    //passing an object with a property fruit to "Show". The value of the property is fruits[indexOfFruitsArray]
    res.render("fruits/Show.jsx", {                  //second param must be an object
       fruit: fruits[indexOfFruitsArray],  //there will be a variable available inside the ejs file called fruit, its value is fruits[indexOfFruitsArray]
       date: new Date().getFullYear(),
    })
})


//Vegetables Routes:
app.get("/vegetables", (req,res)=>{
    //Note: the 2nd parameter in res.render is an object. The key (vegetables) is related to the value in the Index.jsx; and the value (vegetablesArray) is related to the imported array above => (const vegetablesArray = require("./models/vegetables")
    res.render("vegetables/Index.jsx", {vegetables: vegetablesArray})
})


app.get("/vegetables/:indexOfVegetablesArray", (req,res)=>{
    const {indexOfVegetablesArray} = req.params

    res.render("vegetables/Show.jsx", {vegetable: vegetablesArray[indexOfVegetablesArray]})
})








//Port:
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})



//=====NOTE: USE MVC (models, views, and controllers) to better organize your data:
//One way to keep an app from getting messy is to separate it out into three sections

    // - Models
    //     - data (javascript variables)
    // - Views
    //     - how the data is displayed to the user (HTML)
    // - Controllers
    //     - the glue that connects the models with the views with logic


//This allows various developers to divide up a large code base:
    // - minimizes likelihood of developers overwriting each others code
    // - allows developers to specialize
    //     - one can focus just on getting good with dealing with data
    //     - one can focus just on getting good with html
    //     - one can focus just on getting good with connecting the two


//Think of MVC as a restaurant:
    // - Models are the cook
    //     - prepares food/data
    // - Views are the customer
    //     - consumes food/data
    // - Controllers are the waiter
    //     - brings food from cook to customer
    //     - has no idea how food/data is prepared
    //     - has no idea how the food/data is consumed



// What is JSX ?
    // A Syntax that allows us to write our HTML, CSS and Javascript in the same file so that we can more easily create user interfaces React is one of the most well known users of JSX. But other libraries like Lit-HTML, and KofuJS use it as well.


// express-react-views
    // This is an Express view engine which renders React components on a server. It uses react because it was made by facebook. It renders static markup and does not support mounting those views on the client.

    // This is intended to be used as a replacement for existing server-side view solutions, like jade, ejs (Like we have been using), or handlebars.


//JSX USES
    // You can use JSX as a template language to tell your server how to dynamically change your HTML ( That's what we'll be doing for now)

    // You can also use JSX for very very sophisticated Dom Manipulation, and that's what we'll be doing in in 2 weeks after we have a good handle on servers.


//Small intro to React  (Look at Show.JSX for more info)

//A different way of Separating Concerns ( Component Driven Development )

// Lets Think of Games
    // Job is to fight          (Ex: HTML)
    // Job is to fish           (Ex: CSS)
    // Job is to heal people    (Ex: JavaScript)

// We could separate 1 big group of fishers, 1 big group of fighters, 1 big group of healers Each group runs itself and are just dependent upon each other to survive

// OR

// We could make a bunch of smaller self sufficient group with a few fishers, a few fighters, a few healers

// Not saying either is better but each has it's advantages.

//Install express-react-views
//Install react-dom
//input in terminal: npm install express-react-views react react-dom


//**====================understanding how React is used big picture:========================

/*
From Norman park to Me (Direct Message) 02:17 PM
later we will just have a function called "header" for example and you would just put all the html/JavaScript you need for the header in that one function

Me to Norman park (Direct Message) 02:17 PM
would the function be in the Show.jsx file?

From Norman park to Me (Direct Message) 02:18 PM
yes but we would call it different
like header.jsx
footer.jsx
aboutme.jsx
how ever many sections you want in your page
then those components might have subcomponents
for like a video player

Me to Norman park (Direct Message) 02:19 PM
Ok, so we're using react to create all of the "components" of our page...then where would we call the components we create?
*created

From Norman park to Me (Direct Message) 02:20 PM
multiple ways to do it but the simplest would be another .js file called layout
<Container>
     <Header/>
     <main>{children}</main> 
     <Footer/>
    </Container>
would look something like that
but we would have to "import" all the files were using

Me to Norman park (Direct Message) 02:20 PM
Ok...that makes more sense

From Norman park to Me (Direct Message) 02:20 PM
at the top of that layout page
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
then you just call the components as you need them

Me to Norman park (Direct Message) 02:20 PM
...starting to make more sense....thanks man!
From Norman park to Me (Direct Message) 02:21 PM
👍
Me to Norman park (Direct Message) 02:21 PM
my brain works a little backwards...It helps me to understand the big picture first

From Norman park to Me (Direct Message) 02:21 PM
im sure youre not the only one. Took me awhile to get it too

Me to Norman park (Direct Message) 02:21 PM
...putting our convo in my notes...lol



*/