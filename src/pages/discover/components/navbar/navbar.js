import style from "./Navbar.module.css";

import { navbarSelectItems } from "@static/static-data";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <div className={style.navbarWrapper}>
      <ul className={style.navbarSelectList}>
        {navbarSelectItems.map((item,index)=>returnNavbarSelectItem(item,index))}
      </ul>
    </div>
  );
}

const returnNavbarSelectItem = (item, index)=>{
  return (
    <NavLink
      key={index}
      to={item.link}
      className={style.navbarSelectItem}
      activeClassName={style.activeItem}
    >
      <em>{item.title}</em>
    </NavLink>
  );
};
