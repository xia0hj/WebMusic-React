
import { useEffect, useState, useRef } from "react";
import { Carousel } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getBannerAction } from "@service/reduxUtils";
import axios from "axios";
import style from "./Banner.module.css";

export default function Banner() {

  // curIdx = 轮播图当前idx
  const [curIdx, setCurIdx] = useState(0);

  const changeStore = useDispatch();
  useEffect(() => {
    changeStore(() => {
      axios.get("https://netease-cloud-music-api-psi-ebon.vercel.app/banner")
        .then((response) => {
          changeStore(getBannerAction(response.data.banners));
        })
    })
  }, [changeStore]);

  const bannerRef = useRef();

  return (
    <div className={style.bannerWrapper}>
      <div className={style.bannerContent}>
        <div className={style.bannerLeft}>
          <Carousel ref={bannerRef}>
            {useSelector(state => state.banner).map((item, index) => {
              return <img src={item.imageUrl} key={index} alt={item.typeTitle}></img>
            })}
          </Carousel>
        </div>
        <a className={style.bannerRight} href="https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe" target="_blank" rel="noreferrer" />
        <div className={style.bannerControl}>
          <button onClick={()=>bannerRef.current.prev()} />
          <button onClick={()=>bannerRef.current.next()} />
        </div>
      </div>

    </div>

  );
}
