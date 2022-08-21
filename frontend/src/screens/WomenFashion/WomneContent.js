import React, { useEffect } from "react";
import { getWomenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";

const WomneContent = () => {
  const { isLoading, isError, womenProduct } = useSelector(
    (state) => state.userProduct
  );
  console.log(womenProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWomenProduct({ type: "female" }));
  }, [dispatch]);

  return (
    <div className="women-product-wrapper">
      <h1 className="heading"> Women Fashion</h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={womenProduct}
        isError={isError}
        spinStyle={"spinStyle"}
      >
        <div className="women-product-container">
          {womenProduct?.map((data) => (
            <Product key={data._id} product={data} />
          ))}
        </div>
      </SpinContainer>
    </div>
  );
};

export default WomneContent;
