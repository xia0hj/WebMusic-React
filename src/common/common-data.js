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

/**
 * @param {string} title
 * @param {string} link
 */
export const footerLinks = [
  { title:"服务条款", link:"https://st.music.163.com/official-terms/service" },
  { title:"隐私政策", link:"https://st.music.163.com/official-terms/privacy" },
  { title:"儿童隐私政策", link:"https://st.music.163.com/official-terms/children" },
  { title:"版权投诉指引", link:"https://music.163.com/st/staticdeal/complaints.html" },
  { title:"意见反馈", link:"#" },
  { title:"广告合作", link:"#" },
];