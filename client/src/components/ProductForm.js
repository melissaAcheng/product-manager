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
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" min="0.00" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ProductForm;
