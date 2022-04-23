import React from "react";
import { Route } from "react-router-dom";
import Password from "./password/Password";
import { useHistory } from 'react-router-dom';



export default function Home() {
  const history = useHistory()

  const goDescription=()=>{
    history.push("/description")
  }

  const goPassWord=()=>{
    history.push("/home/password")
  }

  const closePassWord=()=>{
    history.goBack()
  }

  return (
    <div>
      <p>主页HOMEPAGE</p>
      <button onClick={()=>goDescription()}>跳转至详情;</button>
      <button onClick={()=>goPassWord()}>打开二级路由,显示密码;</button>
      <button onClick={()=>closePassWord()}>关闭二级路由;</button>
      <Route path="/home/password" component={Password}></Route>
    </div>
  );
}
