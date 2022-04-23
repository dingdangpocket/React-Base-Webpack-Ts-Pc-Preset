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
import publicRoutes from "./routes/publicRoutes";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Password from "./pages/password/Password";
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
      {/* <Router>
        <Switch>
          <Redirect exact from="/" to="/description"></Redirect>
          <Route path="/home" component={Home}>
            <Route path="/home/password" component={Password}></Route>
          </Route>
          <Route path="/description" component={Description}></Route>
        </Switch>
        <Link to="home/password">密码</Link>
      </Router> */}
      <Router>
        <Switch>
          {publicRoutes.map(({ path, component, exact,children }) => (
            <Route
              key={path}
              path={path}
              component={component}
              exact={exact}
            ></Route>
          ))}
        </Switch>
      </Router>

      {/* <Router>
        <Switch> */}
      {/* {publicRoutes.map(({ path, component, ...routes }) => (
            <Route key={path} path={path} component={component} {...routes} />
          ))} */}
      {/* <Route path="/home" component={Home}></Route>
          <Route path="/description" component={Description}></Route> */}
      {/* </Switch>
      </Router> */}
    </>
  );
};
export default hot(App);
