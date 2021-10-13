import { Link } from "react-router-dom";
import header_css from "../assets/css/header.module.css";
import "../assets/css/common.css";

// export default function Header(props){
//     return (
//         <div>
//             <Link className='test' to='/discover'>发现音乐</Link>
//             <Link className={styles.test} to='/my'>我的音乐</Link>
//             <Link to='/friend'>朋友</Link>
//         </div>
//     )
// }

export default function Header(props){
    return (
        <div className={header_css.headerWrapper}>
            <div className={`w1100 ${header_css.test}`}>
                中心内容
            </div>
        </div>
        
    )
}