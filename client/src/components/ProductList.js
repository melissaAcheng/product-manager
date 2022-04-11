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

  return (
    <div>
      <h1>All Products:</h1>
      {product.map((item, index) => {
        return (
          <p key={index}>
            <Link to={`/product/${item._id}`}>{item.title}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
