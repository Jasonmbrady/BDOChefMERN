const dishes = require("../controllers/dishes");
const ingredients = require("../controllers/ingredients");

module.exports = (app) => {
    app.get("/api/dishes", dishes.getAll);
    app.get("/api/ingredients", ingredients.getAll);
    app.get("/api/dishes/:id", dishes.getOne);
    app.get("/api/ingredients/:id", ingredients.getOne);
    app.post("/api/dishes", dishes.create);
    app.post("/api/ingredients", ingredients.create);
    app.put("/api/dishes/:id", dishes.update);
    app.put("/api/ingredients/:id", ingredients.update);
    app.delete("/api/dishes/:id", dishes.delete);
    app.delete("/api/ingredients/:id", ingredients.delete);
}