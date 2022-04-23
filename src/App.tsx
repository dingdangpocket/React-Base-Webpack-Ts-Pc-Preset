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
  const { name } = props;
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
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
        <Route path="/system" element={isAdmin ? <System /> : <p>无权限</p>} />
        <Route path="*" element={<p>ERROR-PAGE</p>} />
      </Routes>
      <div> Foooter</div>
    </>
  );
};
export default hot(App);
