
import style from "./Header.module.css";

import { headerSelectItems } from "@static/static-data.js";

import { NavLink } from "react-router-dom";

import { Input } from "antd";




export default function Header() {
  return (
    <div className={style.headerWrapper}>
      <div className={style.content}>

        <div className={style.headerLeft}>
          <h1><a href="#/" className={style.logo}>网易云音乐</a></h1>
          <ul className={style.headerGroup}>
            {
              headerSelectItems.map((item, index) => {
                return returnHeaderSelectItem(item, index);
              })
            }
          </ul>
        </div>

        <div className={style.headerRight}>
          <div className={style.searchWrapper}>{returnSearchbox()}</div>
          <a className={style.creatorCenter} href="www.baidu.com">创作者中心</a>
        </div>

      </div>
      <div className={style.redLine} />
    </div>
  )
}

/**
 * 渲染导航栏上的单个路由按钮
 * @param {Object} item
 * @param {String} item.title
 * @param {String} item.link
 * @param {String} item.type
 * @param {Number} index
 */
const returnHeaderSelectItem = (item, index) => {
  if (item.type === "route") {
    return (

      <NavLink
        key={index}
        to={item.link}
        className={style.headerSelectItem}
        activeClassName={style.activeItem}
      >
        <em>{item.title}</em>
        <div className={style.bottomArrowhead}></div>
      </NavLink>

    );
  }
  else if (item.type === "blank") {
    return (
      // target="_blank"表示打开新窗口
      <a href={item.link} className={style.headerSelectItem} target="_blank" rel="noreferrer" >{item.title}</a>
    );
  }
};


const returnSearchbox = () => {
  return (
    <Input
      className={style.searchbox}
      placeholder="音乐/视频/电台/用户"
    />
  );
}