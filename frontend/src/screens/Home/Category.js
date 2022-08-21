import React from "react";
import mens from "../../asset/men-fashion (2).png";
import girl from "../../asset/girl-fashion.png";
import electronics from "../../asset/electronics.jpg";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="wrapper">
      <h1 className="heading">Welcome</h1>
      <div className="border-botom"></div>
      <div className="category-container">
        <div className="col">
          <Link to="/womens-fashion">
            <div className="center">
              <div className="icon">
                <img src={girl} alt="" />
              </div>
              <h1>Ladies Fashion</h1>
            </div>
          </Link>
        </div>
        <div className="col middle-col">
          <Link to="/mens-fashion">
            <div className="center">
              <div className="icon">
                <img src={mens} alt="" />
              </div>
              <h1>Mens Fashion</h1>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/electronics">
            <div className="center">
              <div className="icon">
                <img src={electronics} alt="" />
              </div>
              <h1>Electronics</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
