//Imports
const express = require("express")
const morgan = require("morgan")
const pokemonArray = require("./models/listOfPokemon")

const app = express()
const PORT = 3000

//middleware
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))

//view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//Routes:

//Root:
app.get("/",(req,res)=>{
    res.send("Root works!")
})


//Index (GET ROUTE):
app.get("/pokemon",(req,res)=>{
    res.render("pokemon/Index",{pokemon: pokemonArray})
})


//Post (CREATE ROUTE):

//render form (New)
app.get("/pokemon/new", (req,res)=>{
    res.render("pokemon/New",)
})

//post new entry
app.post("/pokemon",(req,res)=>{
    if(req.body.isCool==="on"){
        req.body.isCool = true;
    } else{
        req.body.isCool = false;
    }
    pokemonArray.push(req.body)
    res.redirect("/pokemon")
})


//Show (GET ROUTE):
app.get("/pokemon/:indexOfPokemonArray",(req,res)=>{
    const {indexOfPokemonArray} = req.params

    res.render("pokemon/Show",{pokemon: pokemonArray[indexOfPokemonArray]})
})


//Put / Edit Route

//render Edit form
app.get("/pokemon/:indexOfPokemonArray/edit", (req,res)=>{
    const {indexOfPokemonArray} =req.params
    console.log(pokemonArray[indexOfPokemonArray].image)

    res.render("pokemon/Edit",{pokemon: pokemonArray[indexOfPokemonArray]})
})




//port:
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})