const express = require("express")

const app = express()

const PORT = 3000

//Routes

app.get("/get", (req, res)=>{
    let startingBottleCount = 99
    oneLess = "98"
    res.send(`${startingBottleCount} bottles of beer on the wall <br> <a href="/get/${oneLess}">Take one down, pass it around</a>`)
})


app.get("/get/:number_of_bottles", (req,res)=>{
    const {number_of_bottles} = req.params
    let takeOne = number_of_bottles - 1
    
    if(number_of_bottles !== "0"){
        res.send(`${number_of_bottles} bottles of beer on the wall.  <br> <a href="${takeOne}">Take one down, pass it around</a>`)
    } else{
        res.send(`${number_of_bottles} bottles of beer on the wall.  <br> <a href=/get>Start Over</a>`)
    }
    
})



//Port
app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})