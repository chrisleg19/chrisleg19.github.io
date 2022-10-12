const express = require("express")
const UserModel = require("../models/UserSchema")

const router = express.Router()

// GET all users
router.get("/", async (req,res)=>{
    try{
        const usersFromDb = await UserModel.find({})
        // res.send(users)
        res.render("Users/Users", {users: usersFromDb})
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
        //Checking if email (or username) already exist before attempting to post
        const userAlreadyExist = await UserModel.find({email: req.body.email});
        console.log(userAlreadyExist)
        //Note: An empty array will return, so use [0] to check if there is an object in the array at index 0.
        if (userAlreadyExist[0]){
            //Note: Use return keyword to stop code since "user already exist".  If user doesn't exist, the code moves forward to creating new user.
           return res.send ("User Already Exist!")
        }

        //creating new user
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