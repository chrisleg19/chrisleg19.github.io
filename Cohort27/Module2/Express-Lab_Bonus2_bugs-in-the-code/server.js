const express = require("express")

const app = express()

const PORT = 3000

//Routes:

app.get("/bugs", (req, res)=>{
    let bugCount = 99
    let minusOne = 98
    res.send(`${bugCount} little bugs in the code. <br> <a href="/bugs/${minusOne}">Take one down, pass it around.</a>`)
})

app.get("/bugs/:numberOfBugs", (req,res)=>{
    const {numberOfBugs} = req.params
    let takeOneDown = numberOfBugs - 1
    let addTen = Number(numberOfBugs) + 10
    let num = 4
    let randomNum = Math.ceil(Math.random() * 100)
    console.log(randomNum)

    if(randomNum === num){
        res.send(`${numberOfBugs} little bugs in the code. <br> <a href="${addTen}">Take one down, pass it around</a>`)
    }else if(numberOfBugs !== "0"){
            res.send(`${numberOfBugs} little bugs in the code. <br> <a href="${takeOneDown}">Take one down, pass it around</a>`)
    }else{
        res.send(`${numberOfBugs} little bugs in the code. <br> <a href="/bugs">Start Over</a>`)
    }
})


//Port: 
app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})