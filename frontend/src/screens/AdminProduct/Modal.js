import React from "react";
import CustomModal from "../../components/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { setModalVisible } from "../../redux/reducers/productReducer";
import ProductForm from "../ProductForm";
import ViewProduct from "./ViewProduct";

const Modal = () => {
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.product);
  // console.log(isVisible);
  return (
    <CustomModal
      style={{top:'20px'}}
      title={
        (isVisible.type === "create" && "Create Product") ||
        (isVisible.type === "edit" && "Update Product") ||
        (isVisible.type === "view" && "Details")
      }
      visible={isVisible.visible}
      onCancel={() => dispatch(setModalVisible(false))}
      footer={false}
    >
      {isVisible.type === "create" && <ProductForm />}
      {isVisible.type === "edit" && <ProductForm />}
      {isVisible.type === "view" && <ViewProduct />}
    </CustomModal>
  );
};

export default Modal;
