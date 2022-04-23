import React from "react";
import { hot } from "react-hot-loader/root";
import { renderRoutes } from "react-router-config";
import { Route } from "react-router-dom";
import Profile from "../profile/Profile";

const Home = (props:any) => {
  console.log(props.route.childrens);
  return (
    <div>
      Home
      {renderRoutes(props.route.routes)}
    </div>
  );
};
export default hot(Home);
