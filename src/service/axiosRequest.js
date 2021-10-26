/**
 * 封装axios ajax请求
 */

import axios from "axios";


const instance = axios.create({
  baseURL:"https://netease-cloud-music-api-psi-ebon.vercel.app",
  timeout:5000,
  headers:{},
});

instance.interceptors.response.use(
  res =>{
    return res.data;
  },
  err =>{
    if(err && err.response){
      switch(err.response.status){
        case 400:
          console.warn("请求错误");
          break;
        case 401:
          console.warn("访问未授权");
          break;
        default:
          console.warn("其他错误");
      }
    }
    return err;
  }
);

export default instance;