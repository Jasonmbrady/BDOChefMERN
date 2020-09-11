const mongoose = require("mongoose");

const DishSchema = new mongoose.Schema({
    name: String,
    effect: String,
    xpVal: Number,
    ingredientList: Array,
    quantityList: Array,
    craftSkill: String,
    deliverySkill: Number,

}, { timestamps: true })

mongoose.model("Dish", DishSchema);