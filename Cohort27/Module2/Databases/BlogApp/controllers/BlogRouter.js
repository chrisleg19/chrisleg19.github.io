//bring in express
const { application } = require("express")
const express = require("express")
const BlogModel = require("../models/BlogSchema")


//create and instance of router
const router = express.Router()


//========= GET: Get all Blogs 

router.get("/", async (req,res)=>{
    try{
    //.find({}) with an empty object returns all documents from db
    //.find({email:"someone@email.com"}) is an example of using a filter to find specific data in db
    //docs: https://mongoosejs.com/docs/api.html#model_Model-find
    const blogsFromDb = await BlogModel.find({})
    // res.send(blogs)
    res.render("Blogs/Blogs", {blogs: blogsFromDb})
    } catch (error){
        console.log(error);
        res.send(403).send("Cannot get")
    }
})


//=========== POST: Create new Blog

//======== Example with async await: =========

//mark your function with async
//use await to wait on the function to retrieve data
//Use try{} catch{} for errors
router.post("/", async (req, res)=>{
    try{
        const newBlog = await BlogModel.create(req.body)
        console.log(newBlog)
        // res.send(newBlog) 
        res.redirect("/")
    }catch(error){
        console.log(error);
        res.send(403).send("Cannot create")
    }
})

router.get("/new", async(req,res)=>{
    try{
        res.render("Blogs/NewBlog")
    }catch(error){
        console.log(error)
        res.status(403).send("Cannot Get NewBlog Form")
    }
})

//======= Example with .then & .catch =========

//post route (saves data to db)
//note: must set up middleware in order for .post to work
//data will be in req.body
// router.post("/", (req, res)=>{
    
    //Create a new blog
    // BlogModel.create(req.body)
    // .then(data => {
    //     console.log(data);
    //     res.send(data)
    // })
    // .catch(error =>{
    //     console.log(error);
    //     res.status(403).send("Cannot create")
    // })
// })


//============ GET: Get Blog by ID 

//because this is part of the blogs router, its already prefixed with router.get("/blogs/:id", (req,res)=>{})...but I don't have to input
router.get("/:id", async(req, res)=>{
    try{
        const blogInDb = await BlogModel.findById(req.params.id)
        // res.send(blog)
        res.render("Blogs/BlogShow",{blog: blogInDb})
    } catch (error){
        console.log(error)
        res.status(403).send("Cannot get")
    }
})




// ============ PUT: Update by ID

router.put("/:id", async (req,res)=>{
    try{
    //use {"returnDocument" : "after"} to see document after update (in Postman)
        //Note: default option is to show document before update (in Postman)
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {"returnDocument" : "after"})
    res.send(updatedBlog)
    } catch (error){
        console.log(error)
        res.status(403).send("Cannot put")
    }
})



//============= DELETE:

router.delete("/:id", async(req,res)=>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog);
        res.send("Blog Deleted")
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot Delete")
    }
})




//export
module.exports = router;