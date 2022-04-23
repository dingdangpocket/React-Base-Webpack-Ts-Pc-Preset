import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
axios.interceptors.request.use((config:AxiosRequestConfig) => {
  console.log("拦截请求", config);
  if(!config)return;
  if(localStorage.getItem("token")) {
    config.headers!.Authorization = localStorage.getItem("token")??"";
  }
  return config;
});
axios.interceptors.response.use(
  (res: AxiosResponse<any, any>) => {
    return res.data;
  },
  (error) => {
    console.log("响应错误结果",error);
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          throw new Error("身份认证失败,请检查权限");
        case 404:
          throw new Error("未找到该资源");
        case 500:
          throw new Error("服务器内部错误");
        default:
          throw new Error("请求失败");
      }
    } else {
      throw new Error("内部错误");
    }
  }
);
