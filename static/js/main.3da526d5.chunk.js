(this["webpackJsonpgeneric-blog.github.io"]=this["webpackJsonpgeneric-blog.github.io"]||[]).push([[0],{17:function(e,t,n){var a={"./hello-world.ts":[41,5]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(a)},r.id=17,e.exports=r},22:function(e,t,n){},23:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(19),l=n.n(c),o=n(8),s=n.n(o),i=n(10),u=n(13),m=n(7),d=n(2),g=function(){var e=Object(i.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(17)("./".concat(t,".ts"));case 3:if(a=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=["hello-world"].map(function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(17)("./".concat(t,".ts"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p=(n(29),n(30),function(e){var t=e.toggleTheme,n=["i make stuff","hello world","static typing","macOS is the best","bash scripts","coders rise up","while (true);","fira code","angular sucks","enjoying the vue","react is king","syntactical sugar","sipping coffeescript","php am i right","i need glasses to c#","int elligence","double trouble","string theory","[object Object]","deno and nodejs","sublime sucks","owo whats this","i need coffee","object oriented","pure functions","ew light theme","i use vscode btw","vim","npm","yarn","program.exe","lolcode","debugging","git push","github octocat"],c=Object(a.useRef)(n[Math.floor(Math.random()*n.length)]);return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("h3",{className:"logo"},r.a.createElement(m.b,{to:"".concat("","/")},"generic<blog>()"))),r.a.createElement("div",{className:"header-text"},r.a.createElement("p",{onClick:function(){return t()}},c.current)))}),h=(n(36),n(22),n(21)),b=n(0),E=function(e){var t=e.latestLink;return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"code large dark"},r.a.createElement("span",{className:"class"},"Generic")," ",r.a.createElement("span",{className:"var"},"blog")," ="," ",r.a.createElement("span",{className:"keyword"},"new")," ",r.a.createElement("span",{className:"class"},"Generic"),"<",r.a.createElement("span",{className:"class"},"Blog"),">();")),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"middle"},r.a.createElement("span",null,"Made with"),r.a.createElement(b.b.Provider,{value:{color:"#61dbfb",size:"4rem"}},r.a.createElement(h.a,null))),r.a.createElement("div",{className:"latest"},r.a.createElement(m.b,{to:"".concat("","/posts/").concat(t)},"latest post"))))},v=(n(37),function(e){var t=e.link,n=e.text,a=e.title;return r.a.createElement(m.b,{to:"".concat("","/posts/").concat(t)},r.a.createElement("div",{className:"note"},r.a.createElement("h3",{className:"note-title"},a),r.a.createElement("hr",null),r.a.createElement("p",{className:"note-text"},n)))}),k=(n(38),n(39),function(e){var t=e.posts;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-grid"},t.map((function(e){var t,n=e.data,a=n.link,c=n.title,l=n.content;return r.a.createElement(v,{link:a,text:null===(t=l.find((function(e){return"text"===e.type})))||void 0===t?void 0:t.content,title:c})}))))}),N=r.a.lazy((function(){return n.e(4).then(n.bind(null,47))})),w=r.a.lazy((function(){return n.e(3).then(n.bind(null,48))})),x=function(){var e=Object(a.useState)({data:{title:"",author:"",content:[],createdAt:"",link:"",suggestions:[]}}),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(u.a)(l,2),h=o[0],b=o[1];Object(a.useEffect)((function(){Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!!0){e.next=12;break}return e.t0=c,e.next=5,f[0];case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=b,e.next=10,Promise.all(f);case 10:e.t3=e.sent,(0,e.t2)(e.t3);case 12:return e.abrupt("return",(function(){return!1}));case 13:case"end":return e.stop()}}),e)})))(),"undefined"!==typeof Storage?"dark"===localStorage.getItem("generic-blog-theme")?v():"light"===localStorage.getItem("generic-blog-theme")?console.log("ew light theme"):localStorage.setItem("generic-blog-theme","light"):console.log("Theme is not saved!")}),[]);var v=function(){document.getElementsByTagName("html")[0].classList.toggle("dark-mode"),localStorage.setItem("generic-blog-theme",document.getElementsByTagName("html")[0].classList.contains("dark-mode")?"dark":"light")};return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{basename:""},r.a.createElement(p,{toggleTheme:v}),r.a.createElement("div",{className:"content"},r.a.createElement(a.Suspense,{fallback:""},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"".concat("","/"),exact:!0,render:function(){return r.a.createElement(k,{posts:h})}}),r.a.createElement(d.b,{path:"".concat("","/posts/:postTitleURLParam"),render:function(e){return r.a.createElement(w,Object.assign({retrieve:g},e))}}),r.a.createElement(d.b,{path:"".concat("","/"),component:N})))),r.a.createElement(E,{latestLink:n.data.link})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3da526d5.chunk.js.map