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


//Index:
app.get("/pokemon",(req,res)=>{
    res.render("pokemon/Index",{pokemon: pokemonArray})
})


//Show:
app.get("/pokemon/:indexOfPokemonArray",(req,res)=>{
    const {indexOfPokemonArray} = req.params

    res.render("pokemon/Show",{pokemon: pokemonArray[indexOfPokemonArray]})
})



//port:
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})