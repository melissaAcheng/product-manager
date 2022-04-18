const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    price: { type: Number, required: [true, "Price is required"], min: [0.01, "Please enter a valid price"] },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [2, "Description must be at least 2 characters long"],
    },
  },
  { timestamps: true }
);

// export schema
module.exports = mongoose.model("Product", ProductSchema);
