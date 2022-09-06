import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
// import { addToCart } from '../actions/cartActions'
import { removeFromCart, addCartItem } from "../redux/actions/productAction";
import Container from "../components/Container";
import {url} from "../utils/url"

const CartScreen = ({ match, location, history }) => {
  const [cartItems, setCardItems] = useState([]);
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  console.log(cartItems[0]);
  // const cart = useSelector((state) => state.cart)
  // const cartItems  = []

  useEffect(() => {
    const oldCartItems = localStorage.getItem("cartItem")
      ? JSON.parse(localStorage.getItem("cartItem"))
      : [];
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      // console.log(userInfo)
      const cartItems =  oldCartItems?.filter(val => val.user === userInfo?._id )
    if (localStorage.getItem("userInfo")) {
      setCardItems(cartItems);
    } else {
      const cartItems =  oldCartItems?.filter(val => !val.user  )
      setCardItems(cartItems);
    }

    // if (productId) {
    //   dispatch(addCartItem(productId, qty))
    // }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    const ex = cartItems.filter((x) => x._id !== id);
    setCardItems(ex);
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    if (localStorage.getItem("Etoken")) {
      history.push("/shipping");
    } else {
      history.push("/login?redirect=shipping");
    }
  };

  return (
    <Container>
      <Row style={{ margin: "30px" }}>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={url + item.image}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addCartItem(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
