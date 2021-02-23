import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/App";
import Root from "./Root";

import "./index.scss";

ReactDOM.render(
  <Router>
    <Root>
      <App />
    </Root>
  </Router>,
  document.getElementById("root")
);
