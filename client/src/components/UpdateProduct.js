import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = (props) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((updatedProduct) => {
        console.log(updatedProduct);
        navigate(`/product/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
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
            className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input className="border-solid border-2 px-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white" type="submit" />
      </form>
    </div>
  );
};

export default UpdateProduct;
