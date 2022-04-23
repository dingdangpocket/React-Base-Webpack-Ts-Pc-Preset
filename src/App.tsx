import React from "react";
import styles from "./App.module.scss";
import Row from "@/components/Row";
import { useEffect } from "react";
import request from "./http/request";
import { hot } from "react-hot-loader/root";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import publicRoutes from './routes/publicRoutes';
import adminRoutes from './routes/adminRoutes';
import userRoutes from './routes/userRoutes';
import Home from "./pages/home/Home";
interface Props {
  name: string;
}
const App=(props: Props)=> {
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
        {publicRoutes.map(
          ({path, component, ...routes}) => 
            <Route key={path} path={path} component={component} {...routes}/>
        )}
          {/* <Route path={"./"} component={Home} />
          <Route path={"./de"} component={Home} /> */}
      </Switch>
    </Router>
    </>
  );
}
export default hot(App);
