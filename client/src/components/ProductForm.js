import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  // const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newProduct = {
    //   title,
    //   price,
    //   description,
    // };
    // setProducts(products.push(newProduct));

    axios
      .post("http://localhost:8000/api/product", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setTitle("");
        setPrice(0);
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
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
