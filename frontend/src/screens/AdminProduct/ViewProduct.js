import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
// import Rating from './Rating'
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";

const ViewProduct = () => {
  const { data: product } = useSelector((state) => state.product);
  console.log(product.image)
  // console.log("http://localhost:3000/" + product.image)
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="my-3 p-3 rounded">
          {/* <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title> */}
          <Link to={`/product/${product._id}`}>
            {/* <img src={product.image} alt="Girl in a jacket" width="500" height="600"></img> */}
            <Card.Img
              style={{ width: "200px", height: "200px" }}
              src={"http://localhost:3000/" + product.image}
              variant="top"
            />
            {/* <Card.Img src={"http://localhost:8000/" + product.image} variant='top' /> */}
          </Link>

          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">
              {/* <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            /> */}
            </Card.Text>

            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.brand}</Card.Text>
            <Card.Text>{product.category}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.countInStock}</Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>
    </div>
  );
};

export default ViewProduct;
