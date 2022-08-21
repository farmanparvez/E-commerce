import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
import { Card, Rate } from "antd";
// import Rating from "../Rating";
import "./productCard.scss";

const Product = ({ product }) => {
  // console.log("http://localhost:8000/" + product.image)
  return (
    <div className="card-container">
      <Card
        // title="Default size card"
        // extra={<a href="#">More</a>}
        style={{
          width: 330,
          // height: 400
        }}
      >
        <Link to={`/product/${product._id}`}>
          <div className="card-box">
            <img src={product.image} alt="" />
            <div className="details">
              <p>
                <strong>{product.name}</strong>
              </p>
              <Rate
                style={{ fontSize: "18px" }}
                disabled
                defaultValue={product.rating}
              />
              <p>
                <strong>${product.price}</strong>
              </p>
              {/* <h5><strong>{product.name}</strong></h5> */}
            </div>
          </div>
        </Link>
      </Card>
      {/* <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            style={{ width: "300px", height: "300px" }}
            variant="top"
          />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Product;
