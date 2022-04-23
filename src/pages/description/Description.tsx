import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Description = () => {
  let {id} =useParams()
  console.log("路由传递参数",id);
  return <div style={{height:"40px",color:"white",background:"#221761",lineHeight:"40px",padding:"10px"}}>详情页面-路由参数:{id}</div>;
};
export default Description;
