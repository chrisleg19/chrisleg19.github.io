//importing Mongoose
const mongoose = require("mongoose")


//Creating the Schema or blueprint for data
//data type is required
const fruitSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    //before it was=> readyToEat: Boolean
    readyToEat: {type: String},
    image: {type: String}, 
});


//Creating a new model with the schema
    //syntax: const Variable = mongoose.model("name of model", name of schema)
const Fruit = mongoose.model('Fruit', fruitSchema);


//Exporting the model
module.exports = Fruit;