import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, allowedRoles, ...rest }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const roles = allowedRoles?.find((el) => el === userInfo?.role);
  return (
    <Route
      {...rest}
      render={(props) =>
        roles ? (
          <Component {...props} />
        ) : userInfo ? (
          <Redirect to="/UnAuthorized" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
// UnAuthorized

export default ProtectedRoutes;
