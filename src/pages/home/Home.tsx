import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Password from "./password/Password";
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  let { username } = useParams();
  const goDescription = () => {
    navigate("/description" + 2190867637637);
  };

  const goPassWord = () => {
    navigate("/home/password");
  };

  const closePassWord = () => {};

  return (
    <div>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/profile"> Profile </Link>
      </nav>
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
