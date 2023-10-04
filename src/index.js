import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 搜尋 bootswatch 有各種樣式
import "./bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
