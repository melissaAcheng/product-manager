import axios from "axios";
import React from "react";

const DeleteButton = ({ productId, callbackFunction }) => {
  const deleteProduct = (e) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then((res) => {
        console.log(res.data);
        callbackFunction();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      className="border-solid border-2 px-2 rounded-md bg-red-600 hover:bg-red-700 text-white"
      type="button"
      onClick={deleteProduct}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
