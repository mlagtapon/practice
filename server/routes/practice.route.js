const ProductController = require("../controllers/practice.controller");

module.exports = app => {
    app.get("/api/products/", ProductController.index);
    app.post("/api/products/new", ProductController.create);
    app.get("/api/products/:id", ProductController.show);
    app.put("/api/update/:id", ProductController.update);
    app.delete("/api/products/delete/:id", ProductController.delete);
};