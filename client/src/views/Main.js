import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = () => {
  const [productList, setProductList] = useState([]);
  // const [productCount, setProductCount] = useState(0)
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
        // setProductCount(res.data.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const removeFromDom = (productId) => {
  //   setProductList(productList.filter((item) => item._id !== productId));
  //   // setProductCount(productCount - 1)
  // };

  const createProduct = (productObj) => {
    axios
      .post("http://localhost:8000/api/product", productObj)
      .then((res) => {
        console.log(res.data);
        setProductList([...productList, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="0.0" initialDescription="" />
      <hr />
      <ProductList productList={productList} setProductList={setProductList}  />
    </div>
  );
};

export default Main;
