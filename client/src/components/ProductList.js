import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = ({ productList, setProductList }) => {
  const removeFromDom = (productId) => {
    setProductList(productList.filter((item) => item._id !== productId));
  };

  return (
    <div>
      <h1>All Products:</h1>
      {productList.map((item, index) => {
        return (
          <p key={index}>
            <Link
              to={`/product/${item._id}`}
              className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            >
              {item.title}
            </Link>
            <DeleteButton productId={item._id} callbackFunction={() => removeFromDom(item._id)} />
          </p>
        );
      })}
    </div>
  );
};

export default ProductList;
