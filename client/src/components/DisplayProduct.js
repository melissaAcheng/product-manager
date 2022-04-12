import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Link to="/home" className="border-solid border-2 px-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white">
        Back
      </Link>
      <Link
        to={`/product/edit/${id}`}
        className="border-solid border-2 px-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white"
      >
        Edit
      </Link>
      <button
        onClick={deleteHandler}
        className="border-solid border-2 px-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default DisplayProduct;
