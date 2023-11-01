(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=(c(33),c(34),c(0)),r=c(7),s=c(3),j=(c(35),c(11)),i=c.n(j),l=c(2),o=function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r.c,{className:o,to:"/",children:"Home"}),Object(l.jsx)(r.c,{className:o,to:"/people",children:"People"})]})})})},h=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(s.b,{})})})]})},d=c(22),O=c(4),u=(c(37),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})});function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(){return Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})},p=function(){return Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})},f=function(e){var t=e.person;return Object(l.jsx)(r.b,{to:t.slug,className:i()({"has-text-danger":"f"===t.sex}),children:t.name})},v=function(e){var t=e.people,c=Object(s.r)().slug||"";return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:" table is-striped is-hoverable is-narrow is-fullwidth ",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:0!==(null===t||void 0===t?void 0:t.length)?t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":c===e.slug}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(f,{person:e})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),Object(l.jsx)("td",{children:e.mother?Object(l.jsx)(f,{person:e.mother}):e.motherName||"-"}),Object(l.jsx)("td",{children:e.father?Object(l.jsx)(f,{person:e.father}):e.fatherName||"-"})]},e.slug)})):Object(l.jsx)(p,{})})]})},g=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!1),s=Object(O.a)(r,2),j=s[0],i=s[1],o=Object(a.useState)(!1),b=Object(O.a)(o,2),h=b[0],f=b[1],g=function(e){var t=e.map((function(t){var c,n;return t.motherName&&(n=e.find((function(e){return e.name===t.motherName}))),t.fatherName&&(c=e.find((function(e){return e.name===t.fatherName}))),Object(d.a)(Object(d.a)({},t),{},{mother:n,father:c})}));n(t)};return Object(a.useEffect)((function(){f(!0),x().then(g).catch((function(){return i(!0)})).finally((function(){return f(!1)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[!(null===c||void 0===c||!c.length)&&Object(l.jsx)(v,{people:c}),h&&Object(l.jsx)(u,{}),!h&&!(null!==c&&void 0!==c&&c.length)&&Object(l.jsx)(p,{}),j&&Object(l.jsx)(m,{})]})})]})},N=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},y=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})},w=function(){return Object(l.jsx)(r.a,{children:Object(l.jsx)(s.e,{children:Object(l.jsxs)(s.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(s.c,{index:!0,element:Object(l.jsx)(N,{})}),Object(l.jsx)(s.c,{path:"home",element:Object(l.jsx)(s.a,{to:".."})}),Object(l.jsx)(s.c,{path:"people",element:Object(l.jsx)(g,{}),children:Object(l.jsx)(s.c,{path:":slug?",element:Object(l.jsx)(g,{})})}),Object(l.jsx)(s.c,{path:"*",element:Object(l.jsx)(y,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(w,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c047b4dc.chunk.js.map