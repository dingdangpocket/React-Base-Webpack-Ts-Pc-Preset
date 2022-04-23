import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Description = () => {
  let {id}:any =useParams()
  return <div>详情{id}</div>;
};
export default Description;
