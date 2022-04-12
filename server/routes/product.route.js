const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.post("/api/product", ProductController.createProduct);
  app.get("/api/product", ProductController.getAllProducts);
  app.get("/api/product/:id", ProductController.getOneProduct);
  app.put("/api/product/:id", ProductController.updateOneProduct);
  app.delete("/api/product/:id", ProductController.deleteOneProduct);
};
