
import { useEffect } from "react";
import { Carousel } from "antd";
import bannerCSS from "./banner.module.css";
import { useSelector, useDispatch } from "react-redux";
import axiosRequest from "../../../../service/axiosRequest";
import axios from "axios";

export default function GetBannerComponent(){

  const changeStore = useDispatch();

  useEffect(()=>{
    changeStore((changeStore)=>{
      axiosRequest({url:"/banner"}).then((response)=>{
        console.log("show response");
        console.log(response);
        changeStore({type:"change_banner", banner:response.banners});
      })
    })
  }, []);

  return (
    <Carousel>
      {useSelector(state=>state.banner).map((item)=>{
        return <img src={item.imageUrl}></img>
      })}
    </Carousel>
  );
}
