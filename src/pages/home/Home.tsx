import React from "react";
import { Route, Routes } from "react-router-dom";
import Password from "./password/Password";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const goDescription = () => {
    navigate("/description" + 2190867637637);
  };
  const goPassWord = () => {
    navigate("/home/password");
  };
  const closePassWord = () => {
    navigate(-1);
  };

  return (
    <div>
      <p>主页HOMEPAGE</p>
      <button onClick={() => goDescription()}>跳转至详情;</button>
      <button onClick={() => goPassWord()}>打开二级路由,显示密码;</button>
      <button onClick={() => closePassWord()}>关闭二级路由;</button>
      <Routes>
        <Route path="password" element={<Password />} />
      </Routes>
    </div>
  );
}
