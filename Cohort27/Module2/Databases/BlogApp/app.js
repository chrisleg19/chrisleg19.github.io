const express = require("express")
const mongoose = require ("mongoose")
const morgan = require("morgan")
require("dotenv").config()

const app = express()
const PORT = 3000

//middleware
app.use(morgan("dev"))
//replaces urlencoded (This middleware is available in Express v4.16.0 onwards.)
app.use(express.json()) 



//telling app.js to use the BlogRouter.js for any routes with endpoint /blog
app.use("/blog", require("./controllers/BlogRouter"))
// example of user router - app.use("/user", require("./controller/UserRouter"))



//BELOW NOT NEEDED with app.use("/blog, require("./controllers/BlogRouter"))
//Can be used a homepage
app.get("/", (req, res)=>{
    res.send("Hello")
})




app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)

    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    });
    mongoose.connection.once('open', ()=> {
        console.log('connected to mongo');
    });
})