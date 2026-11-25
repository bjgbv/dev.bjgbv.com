import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/js/bootstrap";
// import all essential css file from assets/css
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/fonts/font-awesome.min.css";
import "../src/assets/fonts/themify-icons.css";
// import "../src/assets/css/materialdesignicons-min.css";
import "../src/assets/css/style.css";
import "../src/assets/css/slicknav.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
