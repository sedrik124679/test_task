(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(12),a=n.n(r),s=(n(33),n(9)),u=(n(34),n(28)),i=n(3),o=n(5),l=n.n(o),j=n(6),d=n(14),p=n.n(d),b=n(2),O="GET_USERS",f="GET_TOTAL_PAGE",h="GET_CURRENT_PAGE",v="IS_LOADING",m={users:[],currentPage:1,totalPages:0,isLoading:!1};var x=function(e){return{type:h,payload:e}},g=function(e){return{type:v,payload:e}},y="GET_POSTS",N="CLOSE_POSTS",w={posts:[]};n(60);var _=n(0),C=function(e){var t=e.user,n=Object(i.b)();return Object(_.jsx)("div",{className:"cards-wrapper__card",children:Object(_.jsxs)("div",{className:"card-container",children:[Object(_.jsxs)("div",{className:"user-info",children:[Object(_.jsx)("div",{className:"user-info__username",children:t.name}),Object(_.jsx)("div",{className:"user-info__user-email",children:t.email}),Object(_.jsx)("div",{className:"user-info__user-number",children:t.address.city}),Object(_.jsx)("div",{className:"user-info__user-number",children:t.phone})]}),Object(_.jsx)("div",{className:"user-button",onClick:function(){return n((e=t.id,function(){var t=Object(j.a)(l.a.mark((function t(n){var c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("https://jsonplaceholder.typicode.com/posts?userId=".concat(e,"&_limit=5"));case 3:c=t.sent,n((r=c.data,{type:y,payload:r})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}var r}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:"Lorem ipsum"})]})})},L=(n(62),function(e){var t=e.post;return Object(_.jsxs)("div",{className:"post",children:[Object(_.jsxs)("details",{children:[Object(_.jsx)("summary",{className:"post__title",children:t.title}),Object(_.jsx)("div",{className:"post__descr",children:t.body})]}),Object(_.jsx)("hr",{})]})}),S=function(e){var t=e.posts,n=Object(i.b)();return Object(_.jsxs)("div",{className:"posts-container",children:[Object(_.jsx)("div",{onClick:function(){return n(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:N});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",style:{color:"white",float:"right",margin:"10px"},fill:"currentColor",className:"bi bi-x",viewBox:"0 0 16 16",children:Object(_.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})})}),Object(_.jsx)("div",{className:"posts-wrapper",children:t.map((function(e){return Object(_.jsx)(L,{post:e},e.id)}))})]})},k=(n(63),function(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(_.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},className:"my-select",children:[Object(_.jsx)("option",{value:"",disabled:!0,children:n}),t.map((function(e){return Object(_.jsx)("option",{value:e.value,children:e.name},e.value)}))]})}),E=(n(64),n(65),function(){return Object(_.jsx)("div",{className:"lds-heart",children:Object(_.jsx)("div",{})})}),P=function(e){var t=e.searchQuery,n=Object(i.b)(),r=Object(i.c)((function(e){return e.users.isLoading}));Object(c.useEffect)((function(){var e;n((e=1,function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(x(e));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}),[]);var a=Object(i.c)((function(e){return e.users.currentPage})),o=Object(c.useState)(""),d=Object(s.a)(o,2),b=d[0],h=d[1],v=Object(c.useState)(4),m=Object(s.a)(v,2),y=m[0];m[1];Object(c.useEffect)((function(){n(function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(c){var r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(g(!0)),n.next=4,p.a.get("https://jsonplaceholder.typicode.com/users",{params:{_limit:t,_page:e}});case 4:r=n.sent,c((s=Math.ceil(parseFloat(r.headers["x-total-count"])/t),{type:f,payload:s})),c((a=r.data,{type:O,payload:a})),c(g(!1)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}var a,s}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}(a,y))}),[a]);var N=Object(i.c)((function(e){return e.users.users})),w=Object(i.c)((function(e){return e.posts.posts})),L=Object(c.useMemo)((function(){return N&&b?Object(u.a)(N).sort((function(e,t){return e[b].localeCompare(t[b])})):N}),[b,N]),P=Object(c.useMemo)((function(){if(N)return L.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}),[t,L]);return r?Object(_.jsx)(E,{}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{children:Object(_.jsx)(k,{defaultValue:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f",options:[{value:"name",name:"\u041f\u043e \u0456\u043c\u0435\u043d\u0456"}],value:b,onChange:function(e){h(e)}})}),Object(_.jsxs)("div",{className:"cards-wrapper",children:[Object(_.jsx)("div",{className:"cards-wrapper-container",children:N?P.length?P.map((function(e){return Object(_.jsx)(C,{user:e},e.id)})):Object(_.jsx)("h4",{className:"user-not-found",children:"\u0422\u0430\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043d\u0435\u043c\u0430\u0454"}):Object(_.jsx)(E,{})}),0!==w.length&&Object(_.jsx)(S,{posts:w})]})]})},T=(n(66),function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.users.currentPage})),n=Object(i.c)((function(e){return e.users.totalPages})),c=function(c){switch(t>n?e(x(1)):t>=n&&e(x(n)),c){case"plus":e(x(t+1));break;case"minus":e(x(t-1));break;default:e(x(1))}};return Object(_.jsxs)("div",{className:"page-togglers",children:[1!==t?Object(_.jsx)("div",{className:"previous-page",onClick:function(){return c("minus")},children:"Previous"}):null,t!==n?Object(_.jsx)("div",{className:"next-page",style:{marginLeft:"auto"},onClick:function(){return c("plus")},children:"Next"}):null]})}),G=(n(67),function(e){return Object(_.jsx)("input",{type:"".concat(e.type),placeholder:"".concat(e.placeholder),onChange:function(t){return e.onChange(t.target.value)},value:e.value})}),Q=(n(68),function(e){var t=e.searchQuery,n=e.setSearchQuery;return Object(_.jsxs)("div",{className:"navbar",children:[Object(_.jsx)("div",{className:"navbar__logo",children:"Lorem ipsum"}),Object(_.jsx)("div",{className:"input",children:Object(_.jsx)(G,{placeholder:"Search",type:"text",value:t,onChange:n})})]})});var M=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)(Q,{searchQuery:n,setSearchQuery:r}),Object(_.jsx)(P,{searchQuery:n}),Object(_.jsx)(T,{})]})},A=n(8),I=n(26),R=n(27),B=Object(A.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(b.a)(Object(b.a)({},e),{},{users:t.payload});case f:return Object(b.a)(Object(b.a)({},e),{},{totalPages:t.payload});case h:return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.payload});case v:return Object(b.a)(Object(b.a)({},e),{},{isLoading:t.payload});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(b.a)(Object(b.a)({},e),{},{posts:t.payload});case N:return Object(b.a)(Object(b.a)({},e),{},{posts:[]});default:return e}}}),D=Object(A.createStore)(B,Object(I.composeWithDevTools)(Object(A.applyMiddleware)(R.a)));a.a.render(Object(_.jsx)(i.a,{store:D,children:Object(_.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.66377fda.chunk.js.map