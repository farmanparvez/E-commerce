import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Product from "../../components/ProductCard/Product";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import { reset } from "../../redux/reducers/productReducer";

const LatestProduct = () => {
  const { isLoading, isError, products } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    return () => dispatch(reset());
  }, [dispatch]);

  return (
    <div className="latest-product-wrapper">
      <h1 className="heading">Latest Product</h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        isError={isError}
        value={true}
        data={products}
        spinStyle={"spinStyle"}
      >
        <div className="latest-product-container">
          <div className="product-wrapper">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          {/* </Row> */}
        </div>
      </SpinContainer>
    </div>
  );
};

export default LatestProduct;
