import React, { useState } from "react";
import { useEffect } from "react";
import request from "./http/request";
import { hot } from "react-hot-loader/root";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Description from "./pages/description/Description";
import Profile from "./pages/profile/Profile";
import System from "./pages/system/System";
interface Props {
  name: string;
}
const App = (props: Props) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/description:id" element={<Description />} />
        <Route path="/system" element={isAdmin ? <System /> : <p style={{background:"#9b2723",color:"white",height:"70px",lineHeight:"70px",padding:"5px"}}>对不起您无权访问改页面!</p>} />
        <Route path="*" element={<p>ERROR-PAGE</p>} />
      </Routes>
      <button style={{width:"430px",height:"40px",color:"white",background:"green"}} onClick={()=>setIsAdmin(true)}>申请访问权限</button>
    </>
  );
};
export default hot(App);
