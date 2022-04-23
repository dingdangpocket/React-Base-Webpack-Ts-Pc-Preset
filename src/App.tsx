import React from "react";
import styles from "./App.module.scss";
import Row from "@/components/Row";
import { useEffect } from "react";
import request from "./http/request";
import { hot } from "react-hot-loader/root";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import publicRoutes from "./routes/publicRoutes";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Profile from "./pages/profile/Profile";
interface Props {
  name: string;
}
const App = (props: Props) => {
  const { name } = props;
  useEffect(() => {
    void (async () => {
      const res = await request.other.getData();
      console.log("请求结果", res);
      const user = await request.user.getUser();
      console.log("请求结果", user);
    })();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route path="/home" component={Home} ></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/description" component={Description}></Route>
        </Switch>
      </Router>
    </>
  );
};
export default hot(App);
