const mongoose = require("mongoose");
const Dish = mongoose.model("Dish");

module.exports = {
    getAll: (req, res) => {
        Dish.find()
            .then(dishes => res.json(dishes))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Dish.findOne({ _id: req.params.id })
            .then(dish => res.json(dish))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Dish.create(req.body)
            .then(newDish => res.json(newDish))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Dish.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(updatedDish => res.json(updatedDish))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Dish.deleteOne({ _id: req.params.id })
            .then(response => console.log(response))
            .catch(err => res.status(400).json(err))
    }
}