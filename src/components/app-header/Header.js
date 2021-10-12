import { Link } from "react-router-dom";

export default function Header(props){
    return (
        <div>
            <Link to='/discover'>发现音乐</Link>
            <Link to='/my'>我的音乐</Link>
            <Link to='/friend'>朋友</Link>
        </div>
    )
}