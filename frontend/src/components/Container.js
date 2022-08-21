import React from "react";
// import { useDispatch } from "react-redux";
// import { getUserInfo } from "../redux/actions/userActions";
import Header from "./Header";

const Container = (props) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("Etoken")) dispatch(getUserInfo());
  // }, [localStorage.getItem("Etoken")]);

  return (
    <div>
      <Header />
      <div >{props.children}</div>
    </div>
  );
};

export default Container;
