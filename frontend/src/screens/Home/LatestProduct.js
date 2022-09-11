import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Product from "../../components/ProductCard/Product";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import { reset, setPagination } from "../../redux/reducers/productReducer";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Link, useLocation } from "react-router-dom";
import { Button } from "antd";

const LatestProduct = () => {
  const { isLoading, isError, products, page: {page, limit}, count } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    // dispatch(getProduct({ page, limit }));
    if(pathname === '/'){
      dispatch(getProduct({ page: 1, limit: 8 }));
    } else {
      dispatch(getProduct({ page, limit }));
    }
    return () => dispatch(reset());
  }, [dispatch, page, limit, pathname]);

  const onChange = (pageNumber) => {
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };

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
          { pathname !== '/' && count > 12 && (<CustomPagination defaultCurrent={page} total={count} onChange={onChange}/>)}
        { pathname === '/' && <Link to="/latest-product"><Button >More...</Button></Link>}
        </div>
      </SpinContainer>
    </div>
  );
};

export default LatestProduct;
