const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/BDOChefDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to BDOChef Database"))
    .catch(err => console.log("Unable to connects to BDOChef Database", err))

require("../models/Dish");
require("../models/Ingredient");