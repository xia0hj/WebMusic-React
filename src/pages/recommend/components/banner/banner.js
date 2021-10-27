
import { useEffect } from "react";
import { Carousel } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getBannerAction } from "@service/reduxUtils";
import axios from "axios";

export default function Banner(){

  const changeStore = useDispatch();

  useEffect(()=>{
    
    changeStore(()=>{
      axios.get("https://netease-cloud-music-api-psi-ebon.vercel.app/banner")
      .then((response)=>{
        changeStore(getBannerAction(response.data.banners));
      })
    })
  }, []);

  return (
    <Carousel>
      {useSelector(state=>state.banner).map((item, index)=>{
        return <img src={item.imageUrl} key={index} alt={`第${index}张轮播图`}></img>
      })}
    </Carousel>
  );
}
