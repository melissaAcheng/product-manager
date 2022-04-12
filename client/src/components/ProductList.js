import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = ({ product, setProduct }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeFromDom = (productId) => {
    setProduct(product.filter((item) => item._id != productId));
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        console.log(res.data);
        removeFromDom(productId);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>All Products:</h1>
      {product.map((item, index) => {
        return (
          <p key={index}>
            <Link
              to={`/product/${item._id}`}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              {item.title}
            </Link>
            <button
              onClick={() => deleteProduct(item._id)}
              className="border-solid border-2 px-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
              type="button"
            >
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
