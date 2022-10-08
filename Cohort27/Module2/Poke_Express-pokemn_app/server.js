//Imports
const express = require("express")
const morgan = require("morgan")
const pokemonArray = require("./models/listOfPokemon")
require("dotenv").config()
const mongoose = require("mongoose")

const methodOverride = require('method-override')
const PokeModel = require("./models/PokemonModel")

console.log(process.env.MONGO_URI)


const app = express()
const PORT = 3000

//middleware
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))
app.use(methodOverride('_method'))
app.use((req,res, next)=>{
    console.log("I run for all routes")
    next()
})


//view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())


//Routes:

//Root:
app.get("/",(req,res)=>{
    res.send("Root works!")
})


//================== Index (GET ROUTE) - Shows everything in db: ===================

app.get("/pokemon",(req,res)=>{

    PokeModel.find({},(error,pokemonFromDb)=>{
        if(error){
            console.log(error)
        }
        console.log(pokemonFromDb)
        res.render("pokemon/Index",{pokemon: pokemonFromDb})
    })
})


//================== Post (CREATE ROUTE) - Create new entry in db: ==================

//post new entry
app.post("/pokemon",(req,res)=>{
    if(req.body.isCool === "on"){
        req.body.isCool = true;
    } else{
        req.body.isCool = false;
    }
    // pokemonArray.push(req.body)
    PokeModel.create(req.body, (error, createdPokemon)=>{
        if(error){
            console.log(error)
        }
        console.log(createdPokemon)
        res.redirect("/pokemon")
    })
})


//render form (New)
app.get("/pokemon/new", (req,res)=>{
    res.render("pokemon/New",)
})


//=================== Show (GET ROUTE) - displays info on single entry in db: =====================

app.get("/pokemon/:id",(req,res)=>{
    const {id} = req.params
    console.log(id)
    PokeModel.findById(id, (error, foundPokemon)=>{
        if(error){
            console.log(error)
            res.status(403).send("id not found")
        }
        res.render("pokemon/Show",{pokemon: foundPokemon})
    })
})


//=================== Delete (DELETE ROUTE) - delete data from db ===============
app.delete("/pokemon/:id", (req,res)=>{
    const {id} = req.params;
    PokeModel.findByIdAndRemove(id, (error, data)=>{
        console.log("DATA WE WANT TO DELETE", data);
        if(error){
            console.log(error)
            res.status(403).send("Bad Request")
        }
        res.redirect("/pokemon")
    })
})


//=================== Edit (PUT ROUTE) - edit data in db ========================

//find data you want to update by db id and render Edit form
app.get("/pokemon/:id/edit", (req,res)=>{
    const {id} = req.params
    console.log("getting info for the edit form")
        PokeModel.findById(id,(error,foundPokemon)=>{
        if(error){
            console.log(error)
            res.status(403).send("id not found")
        }
        console.log("placing info on edit form")
        res.render("pokemon/Edit",{pokemon: foundPokemon})
    })
})


//update db with entry from Edit form
app.put("pokemon/:id", (req,res)=>{
    const {id} = req.params
    console.log("updating database with new pokemon info")
    if(req.body.isCool === "on"){
        req.body.isCool = true;
    } else{
        req.body.isCool = false;
    }
    PokeModel.findByIdAndUpdate(id, req.body, (error, updatedPokemon)=>{
        if(error){
            console.log(error)
            res.status(403).send("cannot update")
        }
        res.redirect(`/pokemon/${id}`)
    })
})







//port:
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.once("open", ()=>{
        console.log("connected to mongo")
    })
})