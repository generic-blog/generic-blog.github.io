(this["webpackJsonpgeneric-blog.github.io"]=this["webpackJsonpgeneric-blog.github.io"]||[]).push([[3],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n.n(r),c=n(10),s=n(13),o=n(1),u=n.n(o),i=n(2),l=n(7),m=(n(43),n(44),n(22),function(e){var t=e.code,n=function(e,t){return e.forEach((function(e){e.current=!0})),t||""},r=function(e){var t=Object(o.useRef)(!1),r=Object(o.useRef)(!1),a=Object(o.useRef)(""),c=Object(o.useRef)(!1),s=Object(o.useRef)(!1),i=Object(o.useRef)(!1),l=Object(o.useRef)(!1),m=Object(o.useRef)(!1),p=Object(o.useRef)(""),f=["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extend","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield"];return e.split("").map((function(e){"\\"!==e||t.current||(c.current=!0),'"'!==e&&"'"!==e&&"`"!==e||!t.current||e!==a.current?'"'!==e&&"'"!==e&&"`"!==e||t.current||(t.current=!0,a.current=e):(t.current=!1,r.current=!0),/[ .;[\]{}<>]/gi.test(e)||i.current?i.current=!0:s.current=!s.current,e.toUpperCase()===e&&/\w/.test(e)&&(m.current=!0),/[.,:;()[\]{}<>\-+*/=|&~!@#$%^&?]/.test(e)?(l.current=!0,m.current=!1):l.current=!1,/[a-zA-Z]/.test(e)?p.current="":p.current+=e;var o,d=t.current?"string":c.current?(o="string",[c,t].forEach((function(e){e.current=!e.current})),o||""):l.current?n([l],"normal"):r.current?function(e,t){return e.forEach((function(e){e.current=!1})),t||""}([r],"string"):m.current?"class":f.includes(p.current)?"keyword":i.current?n([i],"var"):!i.current&&s?"property":"normal";return u.a.createElement("span",{className:d,key:Math.random()},e)}))}(t);return u.a.createElement("div",{className:"post-code"},u.a.createElement("pre",{className:"light"},r))}),p=(n(45),n(46),function(e){var t=e.text;return u.a.createElement("p",{className:"post-text"},t)});t.default=function(e){var t,n=e.retrieve,r=Object(i.g)().postTitleURLParam,f=Object(o.useState)({data:{author:"",content:[],createdAt:(new Date).toDateString(),title:"",link:"",suggestions:[]}}),d=Object(s.a)(f,2),g=d[0],h=d[1];return Object(o.useEffect)((function(){Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!!0){e.next=7;break}return e.t0=h,e.next=5,n(r);case 5:e.t1=e.sent,(0,e.t0)(e.t1);case 7:return e.abrupt("return",(function(){return!1}));case 8:case"end":return e.stop()}}),e)})))()}),[r,n]),g?u.a.createElement("article",{className:"blog"},u.a.createElement("div",{className:"post-meta"},u.a.createElement("h3",{className:"post-title"},g.data.title),u.a.createElement("div",{className:"post-info"},u.a.createElement("p",{className:"post-timestamp"},g.data.createdAt),u.a.createElement("p",{className:"post-author"},"posted by ",g.data.author))),u.a.createElement("div",{className:"post-content"},g.data.content.map((function(e){switch(e.type){case"text":return u.a.createElement(p,{text:e.content,key:Math.random()});case"code":return u.a.createElement(m,{code:e.content,key:Math.random()});case"image":return u.a.createElement("div",{className:"post-image-container"},u.a.createElement("a",{href:e.content,target:"_blank",rel:"noopener noreferrer"},u.a.createElement("img",{src:e.content,alt:"",key:Math.random(),className:"post-image"})));default:return console.log("Unsupported content type: ".concat(e.type)),u.a.createElement("div",{key:Math.random()})}}))),u.a.createElement("div",{className:"post-suggestions-container"},g.data.suggestions?u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",{className:"post-suggestions-title"},"suggestions"),u.a.createElement("hr",null)):"",u.a.createElement("ul",{className:"post-suggestions"},null===(t=g.data.suggestions)||void 0===t?void 0:t.map((function(e){return u.a.createElement("li",{className:"post-suggestion"},u.a.createElement(l.b,{to:"/posts/".concat(e.link)},e.title))}))))):u.a.createElement(i.a,{to:"/something-went-wrong"})}}}]);
//# sourceMappingURL=3.7a9e69f0.chunk.js.map