import React, { useEffect } from "react";
import { getWomenProduct } from "../../redux/actions/userProductAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../../components/SpinContainer/SpinContainer";
import Product from "../../components/ProductCard/Product";
import { useLocation, Link } from "react-router-dom";
import { setPagination, reset } from "../../redux/reducers/userProduct";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { Button } from "antd"

const WomneContent = () => {
  const { isLoading, isErrorInWomenProducts, womenProduct, page: {page, limit}, count  } = useSelector(
    (state) => state.userProduct
  );
  const { pathname}  = useLocation();

  // console.log(womenProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    if(pathname === '/'){
      dispatch(getWomenProduct({ type: "female",  page: 1, limit: 8 }));
    } else {
      dispatch(getWomenProduct({ type: "female",  page, limit }));
    }
    return () => dispatch(reset())
  }, [dispatch, pathname, page, limit]);

  const onChange = (pageNumber) => {
    // dispatch(getMenProduct({ type: "male", page: pageNumber, limit: 12 }));
    dispatch(setPagination({ page: pageNumber, limit: 12 }));
  };


  return (
    <div className="women-product-wrapper">
      <h1 className="heading"> Women Fashion</h1>
      <div className="border-botom"></div>
      <SpinContainer
        spinning={isLoading}
        value={true}
        data={womenProduct}
        isError={isErrorInWomenProducts}
        spinStyle={"spinStyle"}
      >
       <div className="women-product-container">
        <div className="women-product-box">
          {womenProduct?.map((data) => (
            <Product key={data._id} product={data} />
          ))}
        </div>
        { pathname !== '/' && count > 12 && (<CustomPagination defaultCurrent={page} total={count} onChange={onChange}/>)}
        { pathname === '/' && <Link to="/womens-fashion"><Button >More...</Button></Link>}
       </div>
      </SpinContainer>
    </div>
  );
};

export default WomneContent;
