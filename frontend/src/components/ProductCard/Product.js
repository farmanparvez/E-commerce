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
          width: 300,
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
    </div>
  );
};

export default Product;
