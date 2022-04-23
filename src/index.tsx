import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "https://api.apiopen.top";
import "./http/axios";
import { HashRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
var mountNode = document.getElementById("app");
ReactDOM.render(
  <ContextProvider>
    <Router>
      <App name="DingDang"/>
    </Router>
  </ContextProvider>,
  mountNode
);
