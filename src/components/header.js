import "../assets/css/common.css";
import headerCSS from "../assets/css/header.module.css";


import { headerLinks } from '../common/common-data.js';
import { NavLink } from "react-router-dom";



export default function header() {
  return (
    <div className={headerCSS.headerWrapper}>
      <div className={headerCSS.content}>
        <div className={headerCSS.headerLeft}>
          <h1><a href="#/" className={headerCSS.logo}>网易云音乐</a></h1>
          <div className={headerCSS.headerGroup}>
            {
              headerLinks.map((item, index) => {
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

/**
 * 
 * @param {Object} item
 * @param {String} item.title
 * @param {String} item.link
 * @param {String} item.type
 * @param {Number} index 
 */
const returnHeaderLinkItem = (item, index) => {
  if (item.type === 'route') {
    return (
      <NavLink
        key={index}
        to={item.link}
        className={headerCSS.headerLink}
        activeClassName={headerCSS.activeLink}
      >
        <em>{item.title}</em>
        <div className={headerCSS.arrowhead}></div>
      </NavLink>
    );
  }
  else if (item.type === 'blank') {
    return (
      <a href={item.link} className={headerCSS.headerLink} target='_blank' rel="noreferrer" >{item.title}</a>
    );
  }
};