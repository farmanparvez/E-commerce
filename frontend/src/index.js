import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from './store'
import stores from "./stores";
// import "./bootstrap.min.css";
// import "./index.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
// import "./style/main.scss"
import App from "./App"
// import Container from "./components/Container";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={stores}>
    {/* <Container> */}
      <App />
    {/* </Container> */}
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
