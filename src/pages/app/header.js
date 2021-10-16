
import headerCSS from "../../assets/css/header.module.css";

import { headerSelectItems } from "../../common/common-data"
import { NavLink } from "react-router-dom";

import { Input } from "antd";




export default function header() {
  return (
    <div className={headerCSS.headerWrapper}>
      <div className={headerCSS.content}>

        <div className={headerCSS.headerLeft}>
          <h1><a href="#/" className={headerCSS.logo}>网易云音乐</a></h1>
          <div className={headerCSS.headerGroup}>
            {
              headerSelectItems.map((item, index) => {
                return returnHeaderSelectItem(item, index);
              })
            }
          </div>
        </div>

        <div className={headerCSS.headerRight}>
          <div className={headerCSS.searchWrapper}>{returnSearchbox()}</div>
          <a className={headerCSS.creatorCenter} href="www.baidu.com">创作者中心</a>
        </div>

      </div>
      <div className={headerCSS.redLine} />
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
        className={headerCSS.headerSelectItem}
        activeClassName={headerCSS.activeItem}
      >
        <em>{item.title}</em>
        <div className={headerCSS.bottomArrowhead}></div>
      </NavLink>
    );
  }
  else if (item.type === "blank") {
    return (
      // target="_blank"表示打开新窗口
      <a href={item.link} className={headerCSS.headerSelectItem} target="_blank" rel="noreferrer" >{item.title}</a>
    );
  }
};


const returnSearchbox = ()=>{
  return (
    <Input
      className={headerCSS.searchbox}
      placeholder="音乐/视频/电台/用户"
    />
  );
}