const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: String,
    recipes: Array,
    obtained: String
}, { timestamps: true });

mongoose.model("Ingredient", IngredientSchema);