const mongoose = require("mongoose")

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    number: {type: String, required: true},
    image: {type: String, required: true},
    isCool: Boolean,
    height: {type: String, required: true},
    weight: {type: String, required: true},
    abilities: {type: String, required: true},
});

const PokeModel = mongoose.model("PokeModel", pokemonSchema)

module.exports = PokeModel