import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/authActions";
import { reset } from "../redux/reducers/authReducer";
import Container from "../components/Container";

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("login");
  const { isLoading, isSuccess, isError, isMessage } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (isSuccess) {
      history.push("/profile");
    }
    return () => dispatch(reset());
  }, [isSuccess, dispatch, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(login(data));
  };

  return (
    <Container>
      <FormContainer>
        <h1>Sign In</h1>
        {isError && <Message variant="danger">{isMessage}</Message>}
        {isLoading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
