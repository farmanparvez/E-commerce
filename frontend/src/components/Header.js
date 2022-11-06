import React from "react";
// import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import SearchBox from './SearchBox'
import { useHistory, Link } from "react-router-dom";
import { reset, clearUserInfo } from "../redux/reducers/userReducer";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(userInfo)

  const logoutHandler = () => {
    // dispatch(logout())
    localStorage.removeItem("token");
    dispatch(reset());
    dispatch(clearUserInfo());
    localStorage.removeItem("userInfo");
    history.push("/login");
  };

  return (
    <header>
      <Navbar
        style={{ background: "aliceblue" }}
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container fluid className="mx-5">
          <LinkContainer to="/">
            <Navbar.Brand>
              <strong style={{ fontSize: "1.5em", fontWeight: "700" }}>
                EShop
              </strong>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Link to="/profile" >Profile</Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo?.role?.includes("3497") && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
