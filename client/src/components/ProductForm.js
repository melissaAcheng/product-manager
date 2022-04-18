import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ initialTitle, initialPrice, initialDescription, onSubmitProp, errors }) => {
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
    setTitle("");
    setPrice(0.0);
    setDescription("");
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="mr-2">Title:</label>
          <input
            type="text"
            value={title}
            className="w-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus: ring-indigo-500"
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
        </div>
        <div>
          <label className="mr-2">Price: $</label>
          <input
            type="number"
            min="0.00"
            step="0.01"
            value={price}
            className="w-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus: ring-indigo-500"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        {errors.price && <p style={{ color: "red" }}>{errors.price.message}</p>}
        <div>
          <label className="mr-2">Description:</label>
          <input
            type="text"
            value={description}
            className="w-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus: ring-indigo-500"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
        <input className="border-solid border-2 px-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white" type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
