(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c,s=n(6),r=n.n(s),o=n(4),a=n(7),i=n(1),u=(n(12),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(i.useState)(!1),e=Object(o.a)(t,2),n=e[0],s=e[1],r=Object(i.useState)(c.NONE),b=Object(o.a)(r,2),j=b[0],d=b[1],O=Object(i.useState)(!1),h=Object(o.a)(O,2),N=h[0],m=h[1],p=function(t,e,n){var s=Object(a.a)(t);return s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(l,j,N);return Object(u.jsx)("div",{className:"App level is-primary",children:n?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("button",{className:"button is-success",type:"button",onClick:function(){return d(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{className:"button is-info",type:"button",onClick:function(){return d(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{className:"button is-warning",type:"button",onClick:function(){return m((function(t){return!t}))},children:"Reverse"}),Object(u.jsx)("button",{className:"button is-danger",type:"button",onClick:function(){d(c.NONE),m(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{className:"Goods level",children:p.map((function(t){return Object(u.jsx)("li",{className:"Goods__item level-item",children:Object(u.jsx)("span",{className:"subtitle",children:t})},t)}))})]}):Object(u.jsx)("button",{className:"button is-success",type:"button",onClick:function(){return s(!0)},children:"Start"})})};r.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.21c21c7e.chunk.js.map