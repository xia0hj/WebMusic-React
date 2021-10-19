import navbarCSS from "./navbar.module.css";

import { navbarSelectItems } from "../../../../common/static-data";
import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <div className={navbarCSS.navbarWrapper}>
      <ul className={navbarCSS.navbarSelectList}>
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
      className={navbarCSS.navbarSelectItem}
      activeClassName={navbarCSS.activeItem}
    >
      <em>{item.title}</em>
    </NavLink>
  );
};
