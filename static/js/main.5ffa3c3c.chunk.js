(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),o=n.n(r),s=(n(16),n(6)),i=n(7),l=n(8),j=n(11),d=n(10),b=(n(17),n(9)),u=n.n(b),h=n(0),O=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:t}),n]})},g=n(3),p=function(e){var t=e.options,n=e.onLeaveFeedback;return console.log(t),Object.entries(t).map((function(e){var t=Object(g.a)(e,2),a=t[0],c=t[1];return Object(h.jsxs)("button",{type:"button",name:a,onClick:n,children:[a,":",Object(h.jsx)("span",{children:c})]},a)}))},v=function(e){var t=e.message,n=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:t}),n]})},f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,r=e.positivePercentage;return console.log({good:t,neutral:n,bad:a}),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistics"}),c>0?Object(h.jsxs)("div",{children:[Object.entries({good:t,neutral:n,bad:a}).map((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("p",{children:[n,": ",Object(h.jsx)("span",{children:a})]},n)})),Object(h.jsxs)("p",{children:["Total: ",Object(h.jsx)("span",{children:c})]},"total"),Object(h.jsxs)("p",{children:["Positive feedback: ",Object(h.jsx)("span",{children:r})]},"percent")]}):Object(h.jsx)(v,{message:"No feedback given"})]})},x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleDecrement=function(t){console.log(t.target.name),e.setState((function(){return Object(s.a)({},t.target.name,e.state[t.target.name]+1)}))},e.totalCount=function(){var t=e.state;return t.good+t.neutral+t.bad},e.positivePercentage=function(){if(console.log(e.totalCount()),e.totalCount()>0){var t=Math.floor(100*e.state.good/e.totalCount());return console.log(t),t}return 0},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(O,{title:"Please leave feedback",children:[Object(h.jsx)(p,{options:this.state,onLeaveFeedback:this.handleDecrement}),Object(h.jsx)(f,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.totalCount(),positivePercentage:this.positivePercentage()})]})},u.a.generate())}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5ffa3c3c.chunk.js.map