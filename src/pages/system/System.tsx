import UserInfo from "@/components/UserInfo";
import React from "react";

export default function System() {
  return (
    <>
      <div style={{background:"#c54e17",color:"white",height:"70px",lineHeight:"70px",padding:"10px"}}>成功访问System内部;</div>
      <UserInfo id={2} name={"dingdang"} age={24} adress={"中国"} />
    </>
  );
}
