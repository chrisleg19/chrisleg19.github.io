const express = require("express")
const UserModel = require("../models/UserSchema")

const router = express.Router()

// GET all users
router.get("/", async (req,res)=>{
    try{
        const users = await UserModel.find({})
        res.send(users)
    } catch (error){
        console.log(error)
        res.send(403).send("Cannot Get All Users")
    }
})

//GET user by ID
router.get("/:id", async (req,res)=>{
    try{
    const user = await UserModel.findById(req.params.id)
    res.send(user)
    } catch(error){
        console.log(error)
        res.send(403).send("Cannot Get User")
    }
})

//POST (create) new user
router.post("/", async (req, res)=>{
    try{
        const newUser = await UserModel.create(req.body)
        res.send(newUser)
    }catch(error){
        console.log(error);
        res.send(403).send("Cannot Create")
    }
})

//PUT (update) user by ID
router.put("/:id", async(req, res)=>{
    try{
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, {"returnDocument" : "after"})
        res.send(updatedUser)
    }catch(error){
        console.log(error)
        res.status(403).send("Cannot PUT (update) User by ID")
    }
})

//DELETE user
router.delete("/:id", async (req,res)=>{
    try{
        const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser)
        res.send("User Deleted")
    } catch(error){
        console.log(error)
        res.status(403).send("Cannot Delete")
    }
})


//export
module.exports = router;