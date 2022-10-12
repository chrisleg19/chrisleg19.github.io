const express = require("express")
const mongoose = require ("mongoose")
const morgan = require("morgan")
require("dotenv").config()


const app = express()
const PORT = 3000

//middleware
//setting up static folder for resources
app.use(express.static("public"))
app.use(morgan("dev"))
//replaces urlencoded (This middleware is available in Express v4.16.0 onwards.)
app.use(express.json()) 

//set up view engine
app.set("view engine", "jsx")
app.engine("jsx", require("express-react-views").createEngine())



//telling app.js to use the BlogRouter.js for any routes with endpoint /blog
//telling app.js to use the UserRouter.js for any routes with endpoint /user
app.use("/blog", require("./controllers/BlogRouter"))
app.use("/user", require("./controllers/UserRouter"))



//BELOW NOT NEEDED with app.use("/blog, require("./controllers/BlogRouter"))
//Can be used a homepage
app.get("/", (req, res)=>{
    // 
    res.render("pages/homepage")
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