import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import playStore from "../../asset/play-store.png"
import appstore from "../../asset/app-store.png"
import white from "../../asset/logo-white.png"
import "./layout.scss"

const Footer = () => {
  return (
    <footer>
      {/* <Container> */}
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="footer-col-1">
                <h3>Download Our App</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Deleniti modi{" "}
                </p>
                <div class="app-logo">
                <img src={playStore} alt="" />
                <img src={appstore} alt="" />
                </div>
              </div>
              <div class="footer-col-2">
                {/* <img src={white} alt="" />  */}
                <h3>ProShop</h3>
                <p>
                  Lorem ipsum dolor amet consectetur adipisicing elit. amet
                  consectetur adipisicing elit. amet consectetur adipisicing
                  elit.{" "}
                </p>
              </div>
              <div class="footer-col-3">
                <h3>Useful Links</h3>
                <ul>
                  <li>Coupons</li>
                  <li>Blog Post</li>
                  <li>Return Policy</li>
                  <li>Join Affiliate</li>
                </ul>
              </div>
              <div class="footer-col-4">
                <h3>Follow Us</h3>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter </li>
                  <li>instragram</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>
            {/* <hr> */}
            <p class="copyright">copyright 2020 </p>
          </div>
        </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
