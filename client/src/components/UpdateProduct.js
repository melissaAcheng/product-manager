import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

const UpdateProduct = (props) => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateProduct = (productObj) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, productObj)
      .then((res) => {
        console.log(res);
        navigate(`/product/${id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Update Product</h1>
      {loaded && (
        <ProductForm
          onSubmitProp={updateProduct}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
    </div>
  );
};

export default UpdateProduct;
