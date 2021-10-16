/**
 * type=route表示路由，blank表示新窗口外链
 * @param {string} title
 * @param {string} link
 * @param {string} type
 */
export const headerSelectItems = [
  { title:"发现音乐", link:"/discover", type:"route" },
  { title:"我的音乐", link:"/my", type:"route" },
  { title:"朋友", link:"/friend", type:"route" },
  { title:"商城", link:"https://music.163.com/store/product", type:"blank" },
  { title:"音乐人", link:"https://music.163.com/st/musician", type:"blank" },
  { title:"下载客户端", link:"/download", type:"route" },
];