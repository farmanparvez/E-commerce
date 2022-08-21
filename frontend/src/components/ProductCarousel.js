import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { topratingproducts } from "../redux/actions/productAction";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.product);
  const { isLoading: loading, isError: error, topRatedProducts } = productTopRated;
  // console.log(topRatedProducts)
  useEffect(() => {
    dispatch(topratingproducts());
  }, [dispatch]);

  return (
    <div style={{minHeight:'300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: '1', width: '100%'}}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Carousel pause="hover" className="bg-dark w-100 mb-4">
          {topRatedProducts?.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className="carousel-caption">
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default ProductCarousel;
