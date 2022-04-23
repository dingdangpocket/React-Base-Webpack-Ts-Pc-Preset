import React from "react";
import { hot } from "react-hot-loader/root";
import { renderRoutes } from "react-router-config";
import { NavLink, Route, HashRouter as Router } from "react-router-dom";
import Password from "../password/Password";

const Description = (props: any) => {
  console.log("?", props.route.routes);
  return (
    <div>
      Description
      <NavLink activeStyle={{ color: "red" }} to="/description/profile">
        group
      </NavLink>
     {renderRoutes(props.route.routes)} 
    </div>
  );
};
export default Description;
