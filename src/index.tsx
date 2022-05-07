import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
axios.defaults.baseURL = "https://api.apiopen.top";
import "./http/axios";
import { HashRouter as Router } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <ContextProvider>
      <Router>
        <App name="DingDang" />
      </Router>
    </ContextProvider>
  </Provider>,
  mountNode
);
