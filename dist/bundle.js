webpackJsonp([1],{0:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var r="C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\index.js",s=l(24),a=i(s),n=l(54),u=l(80),m=i(u),c=document.getElementById("root");(0,n.render)(a.default.createElement(m.default,{__source:{fileName:r,lineNumber:7}}),c);(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&__REACT_HOT_LOADER__.register(c,"rootEl","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\index.js")})()},80:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r="C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\App.js",s=l(24),a=i(s),n=l(82),u=l(81),m=i(u),c=l(85),_=i(c),o=l(86),f=i(o),d=l(84),p=i(d),N=l(83),E=i(N),b=function(){return a.default.createElement("div",{className:"main",__source:{fileName:r,lineNumber:10}},a.default.createElement("header",{__source:{fileName:r,lineNumber:11}},a.default.createElement("h1",{className:"header-logo",__source:{fileName:r,lineNumber:12}},a.default.createElement("span",{className:"header-logo_fullname",__source:{fileName:r,lineNumber:13}},p.default.fullname),a.default.createElement("span",{className:"header-logo_jobtitle",__source:{fileName:r,lineNumber:13}},"求职意向：",p.default.jobTitle))),a.default.createElement(n.BaseInfo,{baseinfo:p.default,__source:{fileName:r,lineNumber:17}}),a.default.createElement(n.Skill,{skills:f.default,__source:{fileName:r,lineNumber:18}}),a.default.createElement(n.Experience,{experiences:_.default.items,title:_.default.title,subtitle:_.default.subtitle,__source:{fileName:r,lineNumber:19}}),a.default.createElement(n.Appraisal,{appraisal:E.default,__source:{fileName:r,lineNumber:20}}),a.default.createElement(m.default,{__source:{fileName:r,lineNumber:21}}))},y=b;t.default=y;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(b,"App","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\App.js"),__REACT_HOT_LOADER__.register(y,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\App.js"))})()},81:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r="C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\Button.js",s=l(24),a=i(s),n=a.default.createClass({displayName:"Button",handleClick:function(){window.print()},render:function(){return a.default.createElement("div",{className:"toolBox",__source:{fileName:r,lineNumber:8}},a.default.createElement("ul",{className:"",__source:{fileName:r,lineNumber:9}},a.default.createElement("li",{__source:{fileName:r,lineNumber:10}},a.default.createElement("a",{href:"https://github.com/Me-Momo/resume",target:"_blank",__source:{fileName:r,lineNumber:10}},"源代码")),a.default.createElement("li",{__source:{fileName:r,lineNumber:11}},a.default.createElement("input",{type:"button",id:"btnPrint",onClick:this.handleClick,value:"打印",__source:{fileName:r,lineNumber:11}}))))}}),u=n;t.default=u;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"Button","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\Button.js"),__REACT_HOT_LOADER__.register(u,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\Button.js"))})()},82:function(e,t,l){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(e,t){return n.default.createElement("li",{className:"experience-list-item experience-list-item_"+e.type,key:t,__source:{fileName:s,lineNumber:40}},function(e){if(e)return n.default.createElement("img",{className:"experience-list-item_img",src:e,alt:"项目介绍",__source:{fileName:s,lineNumber:42}})}(e.imgUrl),n.default.createElement("div",{__source:{fileName:s,lineNumber:44}},n.default.createElement("h3",{className:"experience-list-item_title",__source:{fileName:s,lineNumber:45}},e.title),n.default.createElement("div",{className:"experience-list-item_detail",__source:{fileName:s,lineNumber:46}},n.default.createElement("p",{className:"content",__source:{fileName:s,lineNumber:47}},e.description),function(e){if(e)return n.default.createElement("footer",{className:"ref",__source:{fileName:s,lineNumber:49}},n.default.createElement("a",{href:e,target:"_blank",__source:{fileName:s,lineNumber:49}},"Demo"))}(e.refLink))))}return n.default.createElement("section",{id:"experience",__source:{fileName:s,lineNumber:56}},n.default.createElement("div",{className:"section-header",__source:{fileName:s,lineNumber:57}},n.default.createElement("h2",{className:"section-header_title",__source:{fileName:s,lineNumber:58}},e.title),n.default.createElement("h4",{className:"section-header_subtitle",__source:{fileName:s,lineNumber:59}},e.subtitle)),n.default.createElement("div",{className:"section-body",__source:{fileName:s,lineNumber:61}},n.default.createElement("ul",{className:"list",__source:{fileName:s,lineNumber:62}},m.default.map(e.experiences,t))))}Object.defineProperty(t,"__esModule",{value:!0}),t.Appraisal=t.BaseInfo=t.Skill=t.Experience=void 0;var s="C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\util.js",a=l(24),n=i(a),u=l(52),m=i(u),c=function(e){function t(e,t){switch(e.type){case"phone":return n.default.createElement("li",{className:"primary-info-list-item primary-info-list-item_phone",key:t,__source:{fileName:s,lineNumber:8}},n.default.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true",__source:{fileName:s,lineNumber:9}})," ",e.content);case"blog":return n.default.createElement("li",{className:"primary-info-list-item primary-info-list-item_blog",key:t,__source:{fileName:s,lineNumber:12}},n.default.createElement("i",{className:"fa fa-rss-square",__source:{fileName:s,lineNumber:13}}),n.default.createElement("a",{href:e.content,target:"_blank",__source:{fileName:s,lineNumber:13}})," ",e.content);case"email":return n.default.createElement("li",{className:"primary-info-list-item primary-info-list-item_email",key:t,__source:{fileName:s,lineNumber:16}},n.default.createElement("i",{className:"fa fa-envelope","aria-hidden":"true",__source:{fileName:s,lineNumber:17}})," ",e.content);default:return""}}return n.default.createElement("section",{className:"primary-info",__source:{fileName:s,lineNumber:25}},n.default.createElement("ul",{className:"primary-info-list",__source:{fileName:s,lineNumber:26}},m.default.map(e.baseinfo.maininfo,function(e,t){return n.default.createElement("li",{key:t,className:"primary-info-list-item",__source:{fileName:s,lineNumber:28}},e)})),n.default.createElement("ul",{className:"primary-info-list primary-info-list_contact",__source:{fileName:s,lineNumber:31}},m.default.map(e.baseinfo.extrainfo,t)))},_=function(e){function t(e,t){return n.default.createElement("li",{className:"skill-list-item skill-list-item_"+e.type,key:t,__source:{fileName:s,lineNumber:72}},n.default.createElement("h3",{className:"skill-list-item_name",style:{width:e.level},__source:{fileName:s,lineNumber:73}},e.title),n.default.createElement("div",{className:"skill-list-item_detail",__source:{fileName:s,lineNumber:74}},n.default.createElement("ul",{className:"list content",__source:{fileName:s,lineNumber:75}},m.default.map(e.description,function(e,t){return n.default.createElement("li",{key:t,__source:{fileName:s,lineNumber:77}},n.default.createElement("i",{className:"fa fa-check-circle-o","aria-hidden":"true",__source:{fileName:s,lineNumber:77}}),e)}))))}return n.default.createElement("section",{id:"skill",__source:{fileName:s,lineNumber:84}},n.default.createElement("div",{className:"section-header",__source:{fileName:s,lineNumber:85}},n.default.createElement("h2",{className:"section-header_title",__source:{fileName:s,lineNumber:85}},"技能")),n.default.createElement("div",{className:"section-body",__source:{fileName:s,lineNumber:86}},n.default.createElement("ul",{className:"skill-list--master",__source:{fileName:s,lineNumber:87}},m.default.map(e.skills.master,t)),n.default.createElement("ul",{className:"skill-list--practised",__source:{fileName:s,lineNumber:90}},m.default.map(e.skills.practised,t))))},o=function(e){return n.default.createElement("section",{id:"appraisal",__source:{fileName:s,lineNumber:99}},n.default.createElement("div",{className:"section-header",__source:{fileName:s,lineNumber:100}},n.default.createElement("h2",{className:"section-header_title",__source:{fileName:s,lineNumber:101}},"自我评价")),n.default.createElement("div",{className:"section-body",__source:{fileName:s,lineNumber:103}},n.default.createElement("p",{__source:{fileName:s,lineNumber:104}},e.appraisal.content)))};t.Experience=r,t.Skill=_,t.BaseInfo=c,t.Appraisal=o;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(c,"BaseInfo","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\util.js"),__REACT_HOT_LOADER__.register(r,"Experience","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\util.js"),__REACT_HOT_LOADER__.register(_,"Skill","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\util.js"),__REACT_HOT_LOADER__.register(o,"Appraisal","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\components\\util.js"))})()},83:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={content:"我是一个充满活力、积极向上的人。对前端领域由衷热爱。自学能力强，愿拼搏的人。具有良好的团队合作意识，工作态度认真，乐于专研新技术。期待能够加入一个具有geek氛围团队，和更多优秀的人一起学习"},i=l;t.default=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"appraisal","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\appraisal.js"),__REACT_HOT_LOADER__.register(i,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\appraisal.js"))})()},84:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={fullname:"廖晓娟",jobTitle:"前端开发工程师",maininfo:["华南理工大学 网络工程专业 2018届毕业生","英语水平：CET6(515)","2014-2016连续两年校三等奖学金·成绩排名9%"],extrainfo:[{type:"phone",content:"15625057119"},{type:"email",content:"736929286@qq.com"},{type:"blog",content:"http://www.cnblogs.com/kasmine/"}]},i=l;t.default=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"baseinfo","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\baseinfo.js"),__REACT_HOT_LOADER__.register(i,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\baseinfo.js"))})()},85:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={title:"项目经验",subtitle:"源代码:https://github.com/me-momo",items:[{imgUrl:"../public/online-exam.svg",type:"db_examSystem",title:"数据库在线考试系统",description:"课程设计做的在线考试系统。项目中主要负责前端界面开发及Mysql数据库设计，与两名\njava程序员进行开发,使用git进行版本控制\n作为小组组长,进行需求分析,网站整体架构和布局的设计，进行前端界面编写，利用ajax和\n后台进行数据交互。利用bootstrap进行整体前端框架以及使用改造的easy.ui数据网格插件"},{imgUrl:"../public/music.svg",type:"music_player",title:"音乐播放器",description:"一款使用vue搭建仿造网易云音乐的音乐播放器,项目为独立开发项目，结合vuex,vueresource,\nvuerouter\n进行开发.使用webpack进行项目打包\n仿造网易云完成项目的全部样式，可适应safari移动端;可进行歌单搜索，歌手搜索，在线\n音乐播放等功能\n利用nodejs搭建服务器后台,为项目提供后台数据API",refLink:"http://139.199.178.135:8080"},{imgUrl:"../public/resume.svg",type:"resume_generator",title:"在线简历生成器",description:"从一个类似JSON数据的js文件读取数据,然后生成静态网页的简历生成器,使用了webpack和react技术",refLink:"http://www.test.com"},{imgUrl:"../public/swipe.svg",type:"jquery_plugin",title:"3D轮播图jQuery插件",description:"一个3D轮播图 jQuery 插件，实现了3D轮播效果，可以自适应图片数量，有方便的切换按\n钮，另外实现了播放、停止API",refLink:"https://me-momo.github.io/Swipe/"}]},i=l;t.default=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"experience","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\experience.js"),__REACT_HOT_LOADER__.register(i,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\experience.js"))})()},86:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={master:[{type:"js",title:"ECMAScript ( Javascript ) ",level:"90%",description:["熟悉原生Javascript，能脱离jQuery等类库编码；了解ECMAScript新标准,并能在项目中使用；了解javascript函数式编程","能运用模块化、面向对象的方式编程；"]},{type:"html_css",title:"HTML 和 CSS",level:"80%",description:["能使用合理的结构和样式编写兼容主流浏览器的页面；","熟悉已标准化的HTML5/CSS3新特性"]},{type:"front_end_practise",title:"前端工程实践",level:"",description:["了解VUE前端MVVM框架","熟悉jQuery/jQuery UI/Bootstrap的使用和扩展","在项目中使用过webpack,grunt,gulp等前端构建工具"]}],practised:[{type:"nodejs",title:"Node.js",level:"50%",description:["能够进行简单node服务器的开发,使用node开发过音乐播放器api","熟悉基于Express的Web开发。","了解异步I/O及事件驱动的服务器模型"]},{type:"other",title:"其他",level:"",description:["掌握基本的数据结构和算法","熟悉MySQL的使用,能编写简单的存储过程和触发器。","了解基本的java语言,jsp开发","了解基本的python知识，能够使用python进行爬虫开发"]}]},i=l;t.default=i;(function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(l,"skills","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\skill.js"),__REACT_HOT_LOADER__.register(i,"default","C:\\Users\\admin\\Desktop\\简历2017\\简历生成器\\resume\\src\\jsons\\skill.js"))})()}});