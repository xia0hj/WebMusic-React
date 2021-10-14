import headerCSS from "../assets/css/header.module.css";
import "../assets/css/common.css";

import {headerLinks} from '../common/common-data.js';
import { NavLink } from "react-router-dom";



export default function header(props) {
  return (
    <div className={headerCSS.headerWrapper}>
      <div className={headerCSS.content}>
        <div className={headerCSS.headerLeft}>
          <h1><a href="#/" className={headerCSS.logo}>网易云音乐</a></h1>
          <div className={headerCSS.headerGroup}>
            {
              headerLinks.map((item, index)=>{
                return returnHeaderLinkItem(item, index);
              })
            }
          </div>
        </div>
        <div className={headerCSS.headerRight}>

        </div>
      </div>
      <div className={headerCSS.red_line} />
    </div>
  )
}

const returnHeaderLinkItem = (item, index)=>{
  // index=0,1,2的是路由
  if(index<=2){
    return (
      <NavLink
        key={index}
        to={item.link}
        className={headerCSS.headerLink}
        activeClassName={headerCSS.activeLink}
        activeStyle={{color:'#fff'}}
      >
        <em>{item.title}</em>
      </NavLink>
    );
  }
  // index=3,4,...的是外链
  else{

  }
};