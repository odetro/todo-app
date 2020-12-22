(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{39:function(n,e,t){},40:function(n,e,t){},41:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var r=t(2),c=t(0),i=t.n(c),a=t(28),o=t.n(a),s=(t(39),t(40),t(33));t(41);function u(){return Object(r.jsx)("div",{className:"calander-container",children:Object(r.jsx)(s.a,{calendarType:"Hebrew",prev2AriaLabel:""})})}var l=t(5),d=t.n(l),j=t(10),f=t(9),p=t(3),b=t(4);function x(){var n=Object(p.a)(["\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    resize: none;\n    font-family: sans-serif;\n    color: #8F94A2;\n\n    :focus {\n        outline: none\n    };\n"]);return x=function(){return n},n}function h(){var n=Object(p.a)(["\n    align-self: end;\n    margin-top: 30px;\n    display: flex;\n    align-items: center;\n"]);return h=function(){return n},n}function O(){var n=Object(p.a)(["\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-self: center;\n"]);return O=function(){return n},n}var v=b.a.div(O()),g=b.a.div(h()),m=b.a.textarea(x());function y(){return(y=Object(f.a)(d.a.mark((function n(e,t){var r,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({note:t})},n.next=3,fetch("/api/notes/".concat(e),r);case 3:return c=n.sent,n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return Object(r.jsx)(v,{children:Object(r.jsx)(g,{children:Object(r.jsx)(m,{rows:"10",cols:"33",placeholder:"Write notes here...",onChange:function(e){!function(n,e){y.apply(this,arguments)}(n.id,e.target.value)},children:n.note})})})}function w(){var n=Object(p.a)(["\n    color: #7160b7;\n    align-self: end;\n    margin: 30px 0 4px 45px;\n"]);return w=function(){return n},n}function C(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    flex-direction: column;\n    border-radius: 10px 10px 0 0;\n"]);return C=function(){return n},n}function S(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    background-color: white;\n    align-items: center;\n    border-radius: 10px;\n"]);return S=function(){return n},n}var T=b.a.div(S()),F=b.a.div(C()),E=b.a.h3(w());function N(){return P.apply(this,arguments)}function P(){return(P=Object(f.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/notes");case 2:return e=n.sent,n.abrupt("return",e.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(){var n=Object(c.useState)([]),e=Object(j.a)(n,2),t=e[0],i=e[1];return Object(c.useEffect)((function(){(function(){var n=Object(f.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N();case 2:e=n.sent,i(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(T,{children:[Object(r.jsx)(F,{children:Object(r.jsx)(E,{children:"Quick Notes"})}),Object(r.jsx)("div",{children:0===t.length?Object(r.jsx)("span",{children:"loading..."}):t.map((function(n){return Object(r.jsx)(k,{id:n._id,note:n.note},n._id)}))})]})}var z=i.a.createContext(),D=t(6),M=t(14),B=t(7);function I(){var n=Object(p.a)(["\n    display: none;\n    ",":hover & {\n        display: inline;\n    }\n"]);return I=function(){return n},n}function J(){var n=Object(p.a)(["\n    display: inline;\n    ",":hover & {\n        display: none;\n    }\n"]);return J=function(){return n},n}function L(){var n=Object(p.a)([""]);return L=function(){return n},n}function _(){var n=Object(p.a)(["\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    color: #8F94A2;\n    font-size: 14px;\n    margin-right: 10px;\n    &:focus {\n        outline: none;\n    }\n"]);return _=function(){return n},n}function U(){var n=Object(p.a)(["\n    display: none;\n    ",":hover & {\n        display: flex;\n        font-size: 15px;\n    }\n"]);return U=function(){return n},n}function H(){var n=Object(p.a)(["\n    margin-right: 17px;\n"]);return H=function(){return n},n}function G(){var n=Object(p.a)(["\n    display: block;\n    display: flex;\n    align-items: center;\n"]);return G=function(){return n},n}function K(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 15px;\n"]);return K=function(){return n},n}var Q=b.a.div(K()),R=b.a.label(G()),V=b.a.input(H()),W=b.a.div(U(),Q),q=b.a.button(_()),X=b.a.div(L()),Y=b.a.div(J(),X),Z=b.a.div(I(),X);function $(){return($=Object(f.a)(d.a.mark((function n(e,t){var r,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:t})},n.next=3,fetch("/api/todos/".concat(e),r);case 3:return c=n.sent,n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function nn(){return(nn=Object(f.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/todos/delete/".concat(e),{method:"DELETE"});case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function en(){return(en=Object(f.a)(d.a.mark((function n(e,t){var r,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:t})},n.next=3,fetch("/api/todos/".concat(e),r);case 3:return c=n.sent,n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function tn(n){var e=Object(c.useContext)(z);return Object(r.jsxs)(Q,{children:[Object(r.jsxs)(R,{children:[Object(r.jsx)(V,{type:"checkbox",checked:n.completed?"checked":"",onChange:function(t){var r=!n.completed;Object(M.trackPromise)(function(n,e){return $.apply(this,arguments)}(n.id,r)),e.setTaskChanged(!e.taskChanged)}}),Object(r.jsx)("span",{className:"checkmark"}),n.task]}),Object(r.jsxs)(W,{children:[Object(r.jsx)(X,{children:Object(r.jsxs)(q,{onClick:function(t){return Object(M.trackPromise)(function(n,e){return en.apply(this,arguments)}(n.id,prompt(n.task)).then(e.setTaskChanged(!e.taskChanged)))},children:[Object(r.jsx)(Y,{children:Object(r.jsx)(B.f,{})}),Object(r.jsx)(Z,{children:Object(r.jsx)(B.m,{})})]})}),Object(r.jsx)(X,{children:Object(r.jsxs)(q,{onClick:function(t){return Object(M.trackPromise)(function(n){return nn.apply(this,arguments)}(n.id).then(e.setTaskChanged(!e.taskChanged)))},children:[Object(r.jsx)(Y,{children:Object(r.jsx)(B.e,{})}),Object(r.jsx)(Z,{children:Object(r.jsx)(B.a,{})})]})})]})]})}function rn(n){var e=Object(D.g)(),t=Object(c.useState)("all"),i=Object(j.a)(t,2),a=i[0],o=i[1];return Object(c.useEffect)((function(){e&&e.status&&o(e.status)}),[e]),function(n,e){switch(e){case"active":return n.filter((function(n){return!n.completed}));case"completed":return n.filter((function(n){return n.completed}));default:return n}}(n.todos,a).map((function(n){return Object(r.jsx)(tn,{id:n._id,task:n.task,completed:n.completed},n._id)}))}function cn(){var n=Object(p.a)(["\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    margin-left: 17px;\n    &:focus {\n        outline: none;\n    }\n"]);return cn=function(){return n},n}function an(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    font-size: 25px;\n    padding-left: 30px;\n    max-width: 80%;\n"]);return an=function(){return n},n}function on(){var n=Object(p.a)(["  \n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    align-self: center;\n    border-bottom: 1px solid #e9e9e9;\n    margin-bottom: 20px;\n"]);return on=function(){return n},n}var sn=b.a.div(on()),un=b.a.div(an()),ln=b.a.input(cn());function dn(){return(dn=Object(f.a)(d.a.mark((function n(e,t){var r,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({task:e||"Error: Not Valid Task",category:t})},n.next=3,fetch("/api/todos",r);case 3:return c=n.sent,n.abrupt("return",c.json());case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function jn(n){var e=Object(c.useState)("new task..."),t=Object(j.a)(e,2),i=t[0],a=t[1],o=Object(c.useContext)(z)||{};return Object(r.jsx)(sn,{children:Object(r.jsxs)(un,{children:[Object(r.jsx)(B.j,{}),Object(r.jsx)(ln,{placeholder:"new task...",onChange:function(n){a(n.target.value)},onKeyPress:function(e){13===e.charCode&&e.target.value.length>0&&(e.preventDefault(),Object(M.trackPromise)(function(n,e){return dn.apply(this,arguments)}(i,n.category)),o.setTaskSubmitted&&o.setTaskSubmitted(i),a(""),e.target.value="")}})]})})}var fn=t(15);function pn(){var n=Object(p.a)(["\n    display: none;\n    ",":hover & {\n        display: inline;\n    }\n"]);return pn=function(){return n},n}function bn(){var n=Object(p.a)(["\n    display: inline;\n    ",":hover & {\n        display: none;\n    }\n"]);return bn=function(){return n},n}function xn(){var n=Object(p.a)(["\n    border: none;\n    background-color: transparent;\n    color: #F8979A;\n    margin-left: 7px;\n    border-radius: 10px;\n    cursor: pointer;\n\n    :focus {\n        outline: none;\n    }\n"]);return xn=function(){return n},n}function hn(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    color: #F8979A;\n    right: 25px;\n    padding-bottom: 20px;\n    cursor: pointer;\n    justify-content: flex-end;\n    position: absolute;\n    bottom: 10px;\n\n    :hover {\n        AiFillDelete {\n            display: inline;\n        }\n    }\n"]);return hn=function(){return n},n}function On(){var n=Object(p.a)(["\n    text-align: center;\n"]);return On=function(){return n},n}function vn(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 90%;\n    padding: 0 30px 30px 30px;\n    align-self: center;\n    margin-bottom: 30px;\n"]);return vn=function(){return n},n}function gn(){var n=Object(p.a)(["\n    border: none;\n    background-color: #E0F3FF;\n    color: #8F94A2;\n    margin-left: 10px;\n    padding: 6px 14px;\n    border-radius: 10px;\n    cursor: pointer;\n    text-decoration: none;\n\n    :hover {\n        background-color: #d0edff;\n        color: #8F94A2;\n    }\n    :focus {\n        outline: none;\n        color: #5a678a;\n        background-color: #cdecff;\n    }\n\n    &.active {\n        color: #5a678a;\n        background-color: #cdecff;\n    }\n"]);return gn=function(){return n},n}function mn(){var n=Object(p.a)(["\n    display: flex;\n    font-size: 12px;\n"]);return mn=function(){return n},n}function yn(){var n=Object(p.a)(["\n    color: #8F94A2;\n    font-size: 14px;\n"]);return yn=function(){return n},n}function kn(){var n=Object(p.a)(["\n    margin: 45px 45px 18px 45px;\n    display: flex;\n    justify-content: space-between;\n    width: 100%;\n    align-items: center;\n    color: #C5C7E4;\n"]);return kn=function(){return n},n}function wn(){var n=Object(p.a)(["\n    display: flex;\n    width: 100%;\n"]);return wn=function(){return n},n}function Cn(){var n=Object(p.a)(["\n    display: flex;\n    align-self: end;\n    margin-left: 45px;\n    color: #b3aad8;\n    font-size: 16px;\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(p.a)(["\n    font-weight: 500;\n"]);return Sn=function(){return n},n}function Tn(){var n=Object(p.a)(["\n    color: #7160b7;\n    align-self: end;\n    margin: 30px 0 4px 45px;\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    flex-direction: column;\n    border-radius: 10px 10px 0 0;\n    border-bottom: 1px solid #e9e9e9;\n"]);return Fn=function(){return n},n}function En(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    background-color: white;\n    align-items: center;\n    border-radius: 10px;\n    position: absolute;\n"]);return En=function(){return n},n}var Nn=b.a.div(En()),Pn=b.a.div(Fn()),An=b.a.h2(Tn()),zn=b.a.span(Sn()),Dn=b.a.span(Cn()),Mn=b.a.div(wn()),Bn=b.a.div(kn()),In=b.a.div(yn()),Jn=b.a.div(mn()),Ln=Object(b.a)(fn.b)(gn()),_n=b.a.div(vn()),Un=b.a.p(On()),Hn=b.a.div(hn()),Gn=b.a.button(xn()),Kn=b.a.div(bn(),Hn),Qn=b.a.div(pn(),Hn);function Rn(n){return Vn.apply(this,arguments)}function Vn(){return(Vn=Object(f.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/todos/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Wn(){return(Wn=Object(f.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/todos/delete/all/".concat(e),{method:"DELETE"});case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function qn(n){switch(parseInt(n)){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}function Xn(){var n=Object(c.useContext)(z),e=t(52)(),i=Object(D.g)(),a=Object(D.h)(),o=a.path,s=a.url,u=Object(c.useState)(i.category),l=Object(j.a)(u,2),p=l[0],b=l[1],x=Object(c.useState)([]),h=Object(j.a)(x,2),O=h[0],v=h[1],g=Object(c.useState)(0),m=Object(j.a)(g,2),y=m[0],k=m[1];return Object(c.useEffect)((function(){i&&i.category&&b(i.category)}),[i]),Object(c.useEffect)((function(){console.log("updating app..."),function(){var n=Object(f.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Rn(p);case 2:e=n.sent,v(e),k(e.filter((function(n){return!n.completed})).length);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[n.taskSubmitted,n.taskChanged,p]),Object(r.jsx)(fn.a,{children:Object(r.jsxs)(Nn,{children:[Object(r.jsxs)(Pn,{children:[Object(r.jsxs)(An,{children:[e.format("dddd"),", ",Object(r.jsxs)(zn,{children:[e.format("D"),qn(e.format("D"))]})," "]}),Object(r.jsxs)(Dn,{children:[" ",e.format("MMMM")," "]}),Object(r.jsx)(Mn,{hidden:0===O.length,children:Object(r.jsxs)(Bn,{children:[Object(r.jsx)(In,{children:Object(r.jsxs)("span",{children:[" ",y," tasks left "]})}),Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Ln,{to:"".concat(s,"/all"),children:"All"}),Object(r.jsx)(Ln,{to:"".concat(s,"/active"),children:"Active"}),Object(r.jsx)(Ln,{to:"".concat(s,"/completed"),children:"Completed"})]})]})})]}),Object(r.jsx)(jn,{category:p}),Object(r.jsxs)(_n,{children:[function(){if(!O.length)return Object(r.jsx)(Un,{children:"No tasks created yet"})}(),Object(r.jsxs)(D.d,{children:[Object(r.jsx)(D.b,{exact:!0,path:"".concat(o,"/:status"),children:Object(r.jsx)(rn,{todos:O})}),Object(r.jsx)(D.b,{path:"".concat(o,"/"),children:Object(r.jsx)(D.a,{to:"".concat(s,"/all")})})]})]}),function(){if(O.length>0&&O.length>y)return Object(r.jsxs)(Hn,{children:[Object(r.jsx)(Gn,{onClick:function(e){Object(M.trackPromise)(function(n){return Wn.apply(this,arguments)}(p).then(n.setTaskChanged(!n.taskChanged)))},children:"Clear Completed"}),Object(r.jsx)(Kn,{children:Object(r.jsx)(B.e,{})}),Object(r.jsx)(Qn,{children:Object(r.jsx)(B.a,{})})]})}()]})})}var Yn=t(32),Zn=t.n(Yn);function $n(){var n=Object(p.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n"]);return $n=function(){return n},n}function ne(){var n=Object(p.a)(["\n    width: 90%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 10%;\n"]);return ne=function(){return n},n}function ee(){var n=Object(p.a)(["\n    display: none;\n\n    ",":hover & {\n        display: flex;\n    }\n"]);return ee=function(){return n},n}function te(){var n=Object(p.a)(["\n    width: 8px;\n    height: 8px;\n    background-color: #FF5722;\n    border-radius: 50%;\n    border: 1.5px solid white;\n    position: relative;\n    top: 12px;\n    right: -3%;\n"]);return te=function(){return n},n}function re(){var n=Object(p.a)(["\n    padding-right: 4px;\n    padding-left: 4px;\n"]);return re=function(){return n},n}function ce(){var n=Object(p.a)(["\n    height: 22px;\n    background-color: #8e82c1;\n    display: flex;\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n    border: none;\n    margin-bottom: 10px;\n    padding: 10px;\n    color: white;\n    border-radius: 7px 0 0 20px;\n    text-decoration: none;\n\n    :focus {\n        outline: none;\n        background-color: #7160B7;\n    }\n\n    :hover {\n        background-color: #7160B7;\n        cursor: pointer;\n        left: 2%;\n    }\n\n    &.active {\n        background-color: white;\n        color: #7160B7;\n    }\n"]);return ce=function(){return n},n}function ie(){var n=Object(p.a)(["\n    display: flex;\n    align-items: start;\n    flex-direction: row-reverse;\n"]);return ie=function(){return n},n}function ae(){var n=Object(p.a)(["\n    width: 15%;\n    height: 100%;\n    position: absolute;\n    top: 20px;\n    right: 90%;\n    display: flex;\n    flex-direction: column;\n"]);return ae=function(){return n},n}function oe(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n    align-items: center;\n"]);return oe=function(){return n},n}var se=b.a.div(oe()),ue=b.a.div(ae()),le=b.a.div(ie()),de=Object(b.a)(fn.b)(ce()),je=b.a.div(re()),fe=b.a.div(te()),pe=b.a.div(ee(),le),be=b.a.div(ne()),xe=b.a.div($n());function he(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(f.a)(d.a.mark((function n(){var e,t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/api/todos/active-categories");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,r=[],t.map((function(n){return r.push(n._id)})),n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function ve(){var n=Object(c.useState)([]),e=Object(j.a)(n,2),t=e[0],i=e[1],a=Object(c.useState)(""),o=Object(j.a)(a,2),s=o[0],u=o[1],l=Object(c.useState)(""),p=Object(j.a)(l,2),b=p[0],x=p[1],h=Object(c.useState)(!1),O=Object(j.a)(h,2),v=O[0],g={taskSubmitted:b,setTaskSubmitted:x,taskChanged:v,setTaskChanged:O[1]};function m(n){if(t.includes(n))return Object(r.jsx)(fe,{})}Object(c.useEffect)((function(){(function(){var n=Object(f.a)(d.a.mark((function n(){var e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,he();case 2:e=n.sent,i(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[s,v,b]);var y=function(n){return Object(M.usePromiseTracker)().promiseInProgress&&Object(r.jsx)(xe,{children:Object(r.jsx)(Zn.a,{type:"Rings",color:"#5351FB",height:80,width:80})})};return Object(r.jsxs)(z.Provider,{value:g,children:[Object(r.jsx)(fn.a,{children:Object(r.jsxs)(se,{children:[Object(r.jsxs)(ue,{children:[Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/general",onClick:function(n){return u("general")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.b,{})}),Object(r.jsx)(pe,{children:"General"})]}),m("general")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/important",onClick:function(n){return u("important")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.l,{})}),Object(r.jsx)(pe,{children:"Important"})]}),m("important")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/house",onClick:function(n){return u("house")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.g,{})}),Object(r.jsx)(pe,{children:"House"})]}),m("house")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/shopping",onClick:function(n){return u("shopping")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.k,{})}),Object(r.jsx)(pe,{children:"Shopping"})]}),m("shopping")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/meetings",onClick:function(n){return u("meetings")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.d,{})}),Object(r.jsx)(pe,{children:"Meetings"})]}),m("meetings")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/calls",onClick:function(n){return u("calls")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.i,{})}),Object(r.jsx)(pe,{children:"Calls"})]}),m("calls")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/messages",onClick:function(n){return u("messages")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.h,{})}),Object(r.jsx)(pe,{children:"Messages"})]}),m("messages")]}),Object(r.jsxs)(le,{children:[Object(r.jsxs)(de,{to:"/ideas",onClick:function(n){return u("ideas")},children:[Object(r.jsx)(je,{children:Object(r.jsx)(B.c,{})}),Object(r.jsx)(pe,{children:"Ideas"})]}),m("ideas")]})]}),Object(r.jsx)(be,{children:Object(r.jsxs)(D.d,{children:[Object(r.jsx)(D.b,{path:"/:category",children:Object(r.jsx)(Xn,{})}),Object(r.jsx)(D.a,{from:"/",to:"/general"})]})})]})}),Object(r.jsx)(y,{})]})}var ge=function(){return Object(r.jsxs)("div",{className:"app-container",children:[Object(r.jsx)("div",{className:"topbar"}),Object(r.jsx)("div",{className:"app-right",children:Object(r.jsx)(ve,{})}),Object(r.jsxs)("div",{className:"app-left",children:[Object(r.jsx)("div",{className:"app-left-top",children:Object(r.jsx)(A,{})}),Object(r.jsx)("div",{className:"app-left-bottom",children:Object(r.jsx)(u,{})})]})]})},me=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(ge,{})}),document.getElementById("root")),me()}},[[72,1,2]]]);
//# sourceMappingURL=main.5fac5665.chunk.js.map