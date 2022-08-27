import React, { Fragment, useEffect } from "react";
import { Carousel, Button } from "antd";
import { topratingproducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import SpinContainer from "../SpinContainer/SpinContainer";
import { reset } from "../../redux/reducers/productReducer";
import "./carousal.scss";
import { Link } from "react-router-dom";

const Carousal = () => {
  const { isLoading, isError, topRatedProducts } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  // const topRatedProducts =[]
  useEffect(() => {
    dispatch(topratingproducts());
    return () => dispatch(reset());
  }, [dispatch]);

  // console.log(topRatedProducts[0]);

  const contentStyle = {
    minHeight: "500px",
    display: "flex",
    maxWidth: "100%",
    margin: "0 auto",
    flexWrap: "wrap",
    // height: "500px"
    // height: "100%"
  };

  return (
    <SpinContainer
      spinStyle="size"
      spinning={isLoading}
      isError={isError}
      value={true}
      data={topRatedProducts}
    >
      {!isError && (
        <div className="carousel-container">
          <Carousel autoplay>
            {topRatedProducts?.map((product) => (
              <Fragment>
                <div style={contentStyle}>
                  <div className="content-box">
                    <div className="content">
                      <h1>{product.brand}</h1>
                      <h5>{product.name}</h5>
                      <p>{product.description}</p>
                      <Link to={`/product/${product._id}`}>
                        <Button size="large">
                          Buy Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="image-container">
                    {/* <div className="img-box"> */}
                    <img className="cur-img" src={product.image} alt="" />
                    {/* </div> */}
                  </div>
                </div>
              </Fragment>
            ))}
          </Carousel>
        </div>
      )}
    </SpinContainer>
  );
};

export default Carousal;
