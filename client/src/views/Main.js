import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import io from "socket.io-client";

const Main = () => {
  const [productList, setProductList] = useState([]);
  const [errors, setErrors] = useState({});
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Inside of the useEffect for Socket.io-client");

    socket.on("connection", () => {
      console.log(`We are connected!`);
      console.log(socket.id);
    });

    socket.on("added_product", (data) => {
      console.log("added_product");
      console.log(data);
      setProductList((currentAllProductValues) => [...currentAllProductValues, data]);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product")
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createProduct = (productObj) => {
    axios
      .post("http://localhost:8000/api/product", productObj)
      .then((res) => {
        console.log(res.data);
        setProductList([...productList, res.data]);

        // send to the server
        socket.emit("added_new_product", res.data);

        // clean up and discounnect this socket from the server
        socket.disconnect();
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialTitle=""
        initialPrice="0.0"
        initialDescription=""
        errors={errors}
      />
      <hr />
      <ProductList productList={productList} setProductList={setProductList} />
    </div>
  );
};

export default Main;
