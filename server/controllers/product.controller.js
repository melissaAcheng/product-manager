const Product = require("../models/product.model");

module.exports = {
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((product) => {
        console.log("createProduct success"), res.json(product);
      })
      .catch((err) => {
        console.log("createProduct failed", err);
        res.status(400).json(err);
      });
  },
  getAllProducts: (req, res) => {
    Product.find()
      .then((products) => {
        console.log("getAllProducts success");
        // console.log(products);
        res.json(products);
      })
      .catch((err) => {
        console.log("getAllProducts failed");
        console.log(err);
        res.json(err);
      });
  },
  getOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((oneProduct) => {
        console.log(oneProduct);
        res.json(oneProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
  updateOneProduct: (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        res.json(updatedProduct);
      })
      .catch((err) => {
        console.log("updateOneProduct failed", err);
        res.status(400).json(err);
      });
  },
  deleteOneProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((deletedProduct) => {
        console.log(deletedProduct);
        res.json(deletedProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};
