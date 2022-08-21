import React from "react";
// import Modal from "react-bootstrap/Modal";
import ProductEditScreen from "./AdminProduct/ProductEditScreen";
import { useSelector } from "react-redux";

const ProductForm = () => {
  const data = useSelector((state) => state.product);
  // console.log(data)
  return (
    <div>
      <ProductEditScreen {...data} />
    </div>
  );
};

export default ProductForm;
