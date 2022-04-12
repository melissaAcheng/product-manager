const Product = require("../models/product.model");

module.exports = {
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((product) => res.json(product))
      .catch((err) => res.json(err));
  },
  getAllProducts: (req, res) => {
    Product.find()
      .then((products) => {
        console.log(products);
        res.json(products);
      })
      .catch((err) => {
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
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        res.json(updatedProduct);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
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
