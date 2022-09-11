import React, { useEffect } from "react";
import { getElectronicsProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import { useLocation, Link } from "react-router-dom";
import { Button } from "antd"

const ElectronicsContent = () => {
  const { isLoading, isErrorInElectronicProducts, electronicsProduct, count, page: {page, limit} } = useSelector(
    (state) => state.userProduct
  );
  const dispatch = useDispatch();
  const { pathname}  = useLocation();

  useEffect(() => {
    if(pathname === '/'){
      dispatch(getElectronicsProduct({ type: "electronics", page: 1, limit: 8 }));
    } else {
      dispatch(getElectronicsProduct({ type: "electronics", page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, page, limit, pathname]);

  const onChange = (pageNumber) => {
    // console.log("Page: ", pageNumber);
    // dispatch(getMenProduct({ type: "male", page: pageNumber, limit: 12 }));
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };

  return (
    <div className="electronic-product-wrapper">
      <h1 className="heading">Electroniecs </h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={electronicsProduct}
        isError={isErrorInElectronicProducts}
        spinStyle={"spinStyle"}
      >
        <div className="electronic-product-container">
          <div className="electronic-product-box">
            {electronicsProduct?.map((data) => (
              <Product key={data._id} product={data} />
            ))}
          </div>
          { pathname !== '/' && count > 12 && (<CustomPagination defaultCurrent={page} total={count} onChange={onChange}/>)}
          { pathname === '/' && <Link to="/mens-fashion"><Button >More...</Button></Link>}
        </div>
      </SpinContainer>
    </div>
  );
};

export default ElectronicsContent;
