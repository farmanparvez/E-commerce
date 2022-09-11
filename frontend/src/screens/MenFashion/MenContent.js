import React, { useEffect } from "react";
import { getMenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import { useLocation, Link } from "react-router-dom";
import { Button } from "antd"

const MenContent = () => {
  const { isLoading, isErrorInMenProducts, menProduct, count, page: {page, limit} } =
    useSelector((state) => state.userProduct);
  const dispatch = useDispatch();
  const { pathname}  = useLocation();

  useEffect(() => {
    if(pathname === '/'){
      dispatch(getMenProduct({ type: "male", page: 1, limit: 8 }));
    } else {
      dispatch(getMenProduct({ type: "male", page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, page, limit, pathname]);

  const onChange = (pageNumber) => {
    // console.log("Page: ", pageNumber);
    // dispatch(getMenProduct({ type: "male", page: pageNumber, limit: 12 }));
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };

  return (
    <div className="men-product-wrapper">
      <h1 className="heading">Mens Fashion</h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={menProduct}
        isError={isErrorInMenProducts}
        spinStyle={"spinStyle"}
      >
        <div className="men-product-container">
          <div className="men-product-box">
            {menProduct?.map((data) => (
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

export default MenContent;
