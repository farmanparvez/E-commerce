import React, { useEffect } from "react";
import { getElectronicsProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";

const ElectronicsContent = () => {
  const { isLoading, isError, electronicsProduct } = useSelector(
    (state) => state.userProduct
  );
//   console.log(electronicsProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getElectronicsProduct({ type: "electronics" }));
  }, [dispatch]);
  return (
    <div className="electronic-product-wrapper">
      <h1 className="heading">Electroniecs </h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={electronicsProduct}
        isError={isError}
        spinStyle={"spinStyle"}
      >
        <div className="electronic-product-container">
          {electronicsProduct?.map((data) => (
            <Product key={data._id} product={data} />
          ))}
        </div>
      </SpinContainer>
    </div>
  );
};

export default ElectronicsContent;
