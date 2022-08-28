import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../redux/reducers/productReducer";
import Container from "../components/Container";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.product);
  const { shippingAddress } = cart;

  if (!shippingAddress?.address) {
    history.push("/shipping");
  }
  // console.log(shippingAddress.address)

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('dd')
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <Container>
      <div className="custom-wrapper">
        <FormContainer>
          <CheckoutSteps step1 step2 step3 />
          <h1>Payment Method</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label as="legend">Select Method</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="PayPal or Credit Card"
                  id="PayPal"
                  name="paymentMethod"
                  value="PayPal"
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
                {/* <Form.Check
              type='radio'
              label='Stripe'
              id='Stripe'
              name='paymentMethod'
              value='Stripe'
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check> */}
              </Col>
            </Form.Group>

            <Button type="submit" variant="primary">
              Continue
            </Button>
          </Form>
        </FormContainer>
      </div>
    </Container>
  );
};

export default PaymentScreen;
