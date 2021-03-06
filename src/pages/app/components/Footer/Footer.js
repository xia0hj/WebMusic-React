import style from "./Footer.module.css"

import { footerLinks } from "@static/static-data.js";

export default function Footer() {
  return (
    <div className={style.footerWrapper}>
      <div className={style.content}>

        <div className={style.footerLeft}>
          <p key={1} className={style.footerLink}>{footerLinks.map((item)=>{return returnFooterLinkItem(item)})}</p>
          <p key={2}>网易公司版权所有©1997-2021&nbsp;&nbsp;&nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2021] 1186-054号</p>
          <p key={3}>违法和不良信息举报电话：0571-89853516&nbsp;&nbsp;&nbsp;&nbsp;举报邮箱：ncm5990@163.com</p>
          <p key={4}>粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站&nbsp;&nbsp;浙公网安备 33010902002564号</p>
        </div>

        <div className={style.footerRight}>
          
        </div>

      </div>
    </div>
  );
}


/**
 * 
 * @param {object} item 
 * @param {string} item.title
 * @param {string} item.link
 */
const returnFooterLinkItem = (item)=>{
  return [
    <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>,
    <span className={style.splitLine}>|</span>
  ];
};