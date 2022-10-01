const express = require("express")

const app = express()

const PORT = 3000

//Routes

app.get("/fib/:numInput", (req,res)=>{
    const {numInput} = req.params
    let num1 = 0
    let num2 = 1
    let temp 
    let fibNums = []

for(i = 1; i < 20; i++){
if(i <= 1){
    temp = i
} else{
    temp = num1 + num2
    num1 = num2
    num2 = temp
}
fibNums.push(num1+num2)
// console.log(`${num1} + ${temp} = ${num1 + num2} `)
}
console.log(fibNums);

for (num of fibNums){
    if(Number(numInput) === num){
        return res.send(`Very good, this is a fibonacci number`)  
    }
}
        res.send(`I can tell this is not a fibonacci number`)       
})



//Port
app.listen(PORT,()=>{
    console.log("server is running on port 3000")
})