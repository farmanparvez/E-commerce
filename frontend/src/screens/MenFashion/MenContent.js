import React, { useEffect } from "react";
import { getMenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";

const MenContent = () => {
  const { isLoading, isError, menProduct } = useSelector(
    (state) => state.userProduct
  );

  console.log(menProduct);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenProduct({ type: "male" }));
  }, [dispatch]);

  return (
    <div className="men-product-wrapper">
      <h1 className="heading">Mens Fashion</h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={menProduct}
        isError={isError}
        spinStyle={"spinStyle"}
      >
        <div className="men-product-container">
          {menProduct?.map((data) => (
            <Product key={data._id} product={data} />
          ))}
        </div>
      </SpinContainer>
    </div>
  );
};

export default MenContent;
