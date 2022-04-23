import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "https://api.apiopen.top";
import "./http/axios";
import { HashRouter as Router } from "react-router-dom";
var mountNode = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App name="Jane" />
  </Router>,
  mountNode
);
