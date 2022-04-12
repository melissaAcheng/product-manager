import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ product, setProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProduct([...product, res.data]);
        setTitle("");
        setPrice(0);
        setDescription("");
      })
      .catch((err) => console.log(err));
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
        <div>
          <label className="mr-2">Description:</label>
          <input
            type="text"
            value={description}
            className="w-40 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus: ring-indigo-500"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input className="border-solid border-2 px-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white" type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
