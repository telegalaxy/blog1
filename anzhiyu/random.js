var posts=["posts/wang-zhan-jian-she-can-kao-wo-de-pin-hao-zhan.html","posts/hello-world.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}var friend_link_list=[{name:"Hexo",link:"https://hexo.io/zh-tw/",avatar:"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",descr:"快速、简单且强大的网站框架"},{name:"anzhiyu主题",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",siteshot:"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg",color:"vip",tag:"技术"},{name:"安知鱼",link:"https://blog.anheyu.com/",avatar:"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg",descr:"生活明朗，万物可爱",recommend:!0}],refreshNum=1;function friendChainRandomTransmission(){const t=Math.floor(Math.random()*friend_link_list.length),{name:n,link:e}=friend_link_list.splice(t,1)[0];Snackbar.show({text:"点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「"+n+"」",duration:8e3,pos:"top-center",actionText:"前往",onActionClick:function(t){t.style.opacity=0,window.open(e,"_blank")}})}function addFriendLinksInFooter(){var t=document.getElementById("footer-random-friends-btn");if(!t)return;t.style.opacity="0.2",t.style.transitionDuration="0.3s",t.style.transform="rotate("+360*refreshNum+++"deg)";const n=[];let e=0;for(;friend_link_list.length&&e<3;){const t=Math.floor(Math.random()*friend_link_list.length),{name:a,link:o,avatar:i}=friend_link_list.splice(t,1)[0];n.push({name:a,link:o,avatar:i}),e++}let a=n.map((({name:t,link:n})=>"<a class='footer-item' href='"+n+"' target='_blank' rel='noopener nofollow'>"+t+"</a>")).join("");a+="<a class='footer-item' href='/friends/'>更多</a>",document.getElementById("friend-links-in-footer").innerHTML=a,setTimeout((()=>{t.style.opacity="1"}),300)}