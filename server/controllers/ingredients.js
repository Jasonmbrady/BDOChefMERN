const mongoose = require("mongoose");
const Ingredient = mongoose.model("Ingredient");

module.exports = {
    getAll: (req, res) => {
        Ingredient.find()
            .then(ingredients => res.json(ingredients))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Ingredient.findOne({ _id: req.params.id })
            .then(ingredient => res.json(ingredient))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Ingredient.create(req.body)
            .then(newIngredient => res.json(newIngredient))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(updatedIngredient => res.json(updatedIngredient))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Ingredient.deleteOne({ _id: req.params.id })
            .then(response => console.log(response))
            .catch(err => res.status(400).json(err))
    }
}