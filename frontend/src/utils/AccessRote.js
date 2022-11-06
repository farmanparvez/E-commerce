import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "js-cookie";
import ProtectedRoutes from "../ProtectedRoutes";

const accessTokenFunction = () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    if (token) {
      resolve(token);
    } else {
      reject();
    }
  });
};

const AccessRote = (props) => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(token);
  // const token = Cookies.get("accessToken");
  //   const token = localStorage.getItem("token");
  useEffect(() => {
    // const token = localStorage.getItem("token");
    // const token = Cookies.get("accessToken");
    accessTokenExcu();
    return () => {
      setIsLoading(true);
      setToken(null);
    };
  }, []);

  const accessTokenExcu = async () => {
    try {
      const res = await accessTokenFunction();
      console.log(res);
      setToken(res);
    } catch (error) {}
    setIsLoading(false);
  };

  return isLoading ? (
    <span>Loading</span>
  ) : token ? (
    <ProtectedRoutes {...props} />
  ) : (
    <Redirect to="login" />
  );
};

export default AccessRote;
