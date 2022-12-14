//class slides: https://ps-rtt-sei.herokuapp.com/mod-2/week-8/day-1/slides/ 

const express = require("express")

//Middleware:
const morgan = require("morgan")  // Morgan is a middleware that will let us know in our terminal that we made a request to the browser

//NOTE: importing a npm file just requires the name of the package (above), but if we import another file we must pass the relative file path (below)

//importing the data (fruits array) from the file (./models/fruits)
//fruits not needed after we connect Fruit model
const fruits = require("./models/fruits")
const vegetables = require("./models/vegetables")
const vegetablesArray = require("./models/vegetables")

//Importing in dotenv
//must have .env installed before running below
require("dotenv").config()

//Importing Mongoose (additional code needed (inside app.listen) to connect to Mongo)
const mongoose = require("mongoose")

//Importing method override
const methodOverride = require("method-override")

//Importing Model
const Fruit = require("./models/FruitModel")

//testing dotenv connection(process.env.MONGO_URI will show all environmental variables)
console.log(process.env.MONGO_URI);  

//NOTE: npm remove morgan (in terminal) - to remove morgan
//NOTE: npm i -D morgan (in terminal) - to set morgan under "devDependencies" in package.json vs "dependencies".  This will help with keeping your application smaller because morgan isn't listed under "dependencies" 
//NOTE: -D will place your dependency under "devDependencies" instead of "Dependencies"

const app = express()
const PORT = 3000

//=========Middleware=============
app.use(morgan("dev"))  //telling the express app to use morgan, "dev" is used for development.  There are other setups that can be used for different situations:  https://www.npmjs.com/package/morgan 

//Use this middleware whenever you have a form and need to access the data from that form 
//Use this middleware to read the data from post requests (only have to set up once)
//Without this middleware, your object "body" will be undefined
app.use(express.urlencoded({extended:false}))

//Middleware to override for deleting 
app.use(methodOverride("_method"))

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


//*============ Routes: ==================

//NOTE: More specific routes should be at the top

//====================Root Route=====================(for testing)
app.get("/", (req, res)=>{
    res.send("Hello")
})

//====================Index Route=====================
//Fruits Routes:
//Index route: get all fruits (array)
app.get("/fruits", (req, res)=>{
    //This method (with {}) finds all documents in database
    //The first parameter is a FILTER OBJECT (a blank object sends all documents from database)
    Fruit.find({},(error,fruitsFromDb)=>{
        if(error){
            console.log(error)
        }
        console.log(fruitsFromDb)
        //response is JSON data, showing the array "fruits"
        // res.send(fruits)
        //rendering a template file:
        res.render("fruits/Index", {fruits: fruitsFromDb})
    })
})

//================Post Route (to create)=========================

app.post("/fruits", (req,res)=>{
    //req.body is where your data is going
    // console.log(req.body)

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true;
      } else {
        req.body.readyToEat = false;
      }
    
    // fruits.push(req.body);  //No longer needed if sending data to database
    
    //Using our model to create a new resource in our database
    Fruit.create(req.body, (error, createdFruit)=>{
        if(error){
            console.log(error)
        }
        console.log(createdFruit)
        res.redirect("/fruits")
    })
})

app.post("/vegetables", (req,res)=>{
    console.log(req.body)
    if(req.body.readyToEat === "on"){
        req.body.readyToEat = true;
    } else{
        req.body.readyToEat = false;
    }
    console.log(req.body)
    vegetablesArray.push(req.body);
    res.redirect("/vegetables")
})


//Render a form
app.get("/fruits/new", (req,res)=>{
    res.render("fruits/New")

})

app.get("/vegetables/new", (req, res)=>{
    res.render("vegetables/New")
})


//===================Show Route===============
//Show route: after passing in the array index (in the URL) as the value of parameter, you get the single fruit at that index
//getting information from Show.jsx
app.get("/fruits/:id", (req, res)=>{
    const {id} = req.params;  //destructuring
    //// res.send(fruits[id])
    //passing an object with a property fruit to "Show". The value of the property is fruits[id]
    //getting data from db
    Fruit.findById(id, (error, foundFruit) =>{
        if(error){
            console.log(error)
            res.status(403).send("Id not found")
        }
        //sending the view with the data found in the db
        res.render("fruits/Show", {                  //second param must be an object
           fruit: foundFruit,  //there will be a variable available inside the ejs(Index.jsx) file called fruit, its value is fruits[id]
           date: new Date().getFullYear(),
        })
    })
});


//==========Delete Route===========

app.delete("/fruits/:id",(req,res)=>{
    //Note: id is coming from the "delete form" in the Index.jsx
    const {id} = req.params;

    //Delete fruit from db
    //findByIdAndRemove() will give you the deleted object back for a callback
    Fruit.findByIdAndRemove(id, (error, data)=>{
        console.log("HERE is data we are trying to delete",data);
        if(error){
            console.log(error)
            res.status(403).send("Bad Request")
        }
        res.redirect("/fruits")
    })
})




//========= Get by ID Route ============

//Return an HTML form for editing a thing
//  "/fruits/:id/edit" is the path for URL
app.get("/fruits/:id/edit", (req,res)=>{
    const {id} = req.params
    //find the fruit in the db using the id
    Fruit.findById(id, (error, foundFruit)=>{
        if(error){
            console.log(error)
            res.status(403).send("id not found")
        }
    //render the view and pass the data from the fruit
    //  "fruits/Edit" is directing to the Edit.jsx in views directory
    res.render("fruits/Edit", {fruit: foundFruit})

    })
})


//========PUT / Edit Route ===========

app.put("/fruits/:id", (req,res)=>{
    const {id} = req.params
    console.log("updating database with new fruit info")
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }

    //.findByIdAndUpdate() takes in 3 parameters: ID, req.body, and callback
    Fruit.findByIdAndUpdate(id, req.body, (error, updatedFruit)=>{
        if(error){
            console.log(error)
            res.status(403).send("Cannot update")
        }
        res.redirect(`/fruits/${id}`)
    })


})






//Vegetables Routes:
app.get("/vegetables", (req,res)=>{
    //Note: the 2nd parameter in res.render is an object. The key (vegetables) is related to the value in the Index.jsx; and the value (vegetablesArray) is related to the imported array above => (const vegetablesArray = require("./models/vegetables")
    res.render("vegetables/Index.jsx", {vegetables: vegetablesArray})
})

//Vegetables Show Route
app.get("/vegetables/:indexOfVegetablesArray", (req,res)=>{
    const {indexOfVegetablesArray} = req.params

    res.render("vegetables/Show.jsx", {vegetable: vegetablesArray[indexOfVegetablesArray]})
})








//=========== Port & Connection to MongoDB ==========
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
    
    //Additional code needed to connect to Mongo
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });
})
    



