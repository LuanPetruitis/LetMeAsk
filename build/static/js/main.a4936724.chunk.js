(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(29),c=n.n(s),i=n(14),o=n(6),u=n(5),l=n.n(u),d=n(8),j=n(9),b=n(18);n(39),n(41);b.a.initializeApp({apiKey:"AIzaSyC5MuVGiTmvieGksa9pw5OmixSq63Vn0pA",authDomain:"letmeask-d0717.firebaseapp.com",databaseURL:"https://letmeask-d0717-default-rtdb.firebaseio.com",projectId:"letmeask-d0717",storageBucket:"letmeask-d0717.appspot.com",messagingSenderId:"500562409030",appId:"1:500562409030:web:41dd4c0c48bfc16080bc47"});var h=b.a.auth(),p=b.a.database(),m=n(1),f=Object(r.createContext)({});function x(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new b.a.auth.GoogleAuthProvider,e.next=3,h.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,a=r.displayName,c=r.photoURL,i=r.uid,a&&c){e.next=8;break}throw new Error("Missing information from Google Account");case 8:s({id:i,name:a,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=h.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account");s({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(m.jsx)(f.Provider,{value:{user:a,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}var O=n.p+"static/media/logo.a88331cb.svg",v=n.p+"static/media/delete.22ba6e00.svg",g=n.p+"static/media/check.5dfa6ed6.svg",k=n.p+"static/media/answer.4502a8d5.svg",w=n(30),y=n(33);n(46);function C(e){var t=e.isOutlined,n=void 0!==t&&t,r=Object(y.a)(e,["isOutlined"]);return Object(m.jsx)("button",Object(w.a)({className:"button ".concat(n?"outlined":""," ")},r))}var A=n.p+"static/media/copy.2f36f99e.svg";n(47);function N(e){return Object(m.jsxs)("button",{onClick:function(){navigator.clipboard.writeText(e.code)},className:"room-code",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:A,alt:"Copy Room Code"})}),Object(m.jsxs)("span",{children:["Sala #",e.code]})]})}n(26);var q=n(31),S=n.n(q);n(48);function I(e){var t=e.content,n=e.author,r=e.isAnswered,a=void 0!==r&&r,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(m.jsxs)("div",{className:S()("question",{answered:a},{highlighted:c&&!a}),children:[Object(m.jsx)("p",{children:t}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("img",{src:n.avatar,alt:n.name}),Object(m.jsx)("span",{children:n.name})]}),Object(m.jsx)("div",{children:i})]})]})}function H(){return Object(r.useContext)(f)}function M(e){var t=H().user,n=Object(r.useState)([]),a=Object(j.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(""),o=Object(j.a)(i,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){var n=p.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),a=null!==(n=r.questions)&&void 0!==n?n:{},s=Object.entries(a).map((function(e){var n,r,a,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(a=i.likes)&&void 0!==a?a:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));l(r.title),c(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}function L(){var e=Object(o.f)(),t=Object(o.g)().id,n=M(t),r=n.questions,a=n.title;function s(){return(s=Object(d.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function c(){return(c=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Voc\xea tem certeza que deseja excluir essa pergunta?")){e.next=3;break}return e.next=3,p.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-room",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{src:O,alt:"LetMeAsk"}),Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{code:t}),Object(m.jsx)(C,{isOutlined:!0,onClick:function(){return s.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("div",{className:"room-title",children:[Object(m.jsxs)("h1",{children:["Sala ",a]}),r.length>0&&Object(m.jsxs)("span",{children:[r.length," perguntas"]})]}),Object(m.jsx)("div",{className:"question-list",children:r.map((function(e){return Object(m.jsxs)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:[!e.isAnswered&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:g,alt:"Marcar pergunta como respondida"})}),Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:k,alt:"Dar destaque a pergunta"})})]}),Object(m.jsx)("button",{type:"button",onClick:function(){return function(e){return c.apply(this,arguments)}(e.id)},children:Object(m.jsx)("img",{src:v,alt:"Remover perguntar"})})]},e.id)}))})]})]})}var E=n.p+"static/media/illustration.ae7276f0.svg",G=n.p+"static/media/google-icon.df15d8e5.svg";n(28);function V(){var e=Object(o.f)(),t=H(),n=t.user,a=t.signInWithGoogle,s=Object(r.useState)(""),c=Object(j.a)(s,2),i=c[0],u=c[1];function b(){return(b=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,a();case 3:e.push("/room/news");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return(h=Object(d.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p.ref("/rooms/".concat(i)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/room/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:E,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas."}),Object(m.jsx)("strong",{children:"Create real time Q&A room chats"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("img",{src:O,alt:"LetMeAsk"}),Object(m.jsxs)("button",{className:"create-room",onClick:function(){return b.apply(this,arguments)},children:[Object(m.jsx)("img",{src:G,alt:"Icone google"}),"Crie sua sala com Google"]}),Object(m.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return h.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(m.jsx)(C,{type:"submit",children:"Entrar na sala"})]})]})})]})}function D(){var e=H().user,t=Object(o.f)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1];function u(){return(u=Object(d.a)(l.a.mark((function n(r){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),console.log("test------------=-========-=--=-=--"),""!==s.trim()){n.next=4;break}return n.abrupt("return");case 4:return a=p.ref("rooms"),console.log(a),console.log(s),n.next=9,a.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 9:c=n.sent,t.push("/room/".concat(c.key));case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-auth",children:[Object(m.jsxs)("aside",{children:[Object(m.jsx)("img",{src:E,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas."}),Object(m.jsx)("strong",{children:"Create real time Q&A room chats"}),Object(m.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo real."})]}),Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"main-content",children:[Object(m.jsx)("img",{src:O,alt:"LetMeAsk"}),Object(m.jsx)("h2",{children:"Criar uma nova sala"}),Object(m.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return c(e.target.value)},value:s}),Object(m.jsx)(C,{type:"submit",children:"Criar sala"})]}),Object(m.jsxs)("p",{children:["Quer entrar em uma sala existente ",Object(m.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}var R=n(19);function P(){var e=H().user,t=Object(o.g)().id,n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1],i=M(t),u=i.questions,b=i.title;function h(){return(h=Object(d.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==s.trim()){n.next=3;break}return R.b.error("Voc\xea n\xe3o digitou a pergunta."),n.abrupt("return");case 3:return e||R.b.error("Voc\xea n\xe3o se logou com o seu usu\xe1rio."),setTimeout((function(){}),5e3),a={content:s,author:{name:null===e||void 0===e?void 0:e.name,avatar:null===e||void 0===e?void 0:e.avatar},isHighlighted:!1,isAnswered:!1},n.next=8,p.ref("rooms/".concat(t,"/questions")).push(a);case 8:c("");case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return(f=Object(d.a)(l.a.mark((function n(r,a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!a){n.next=5;break}return n.next=3,p.ref("/rooms/".concat(t,"/questions/").concat(r,"/likes/").concat(a)).remove();case 3:n.next=7;break;case 5:return n.next=7,p.ref("/rooms/".concat(t,"/questions/").concat(r,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(m.jsxs)("div",{id:"page-room",children:[Object(m.jsx)("header",{children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("img",{src:O,alt:"LetMeAsk"}),Object(m.jsx)(N,{code:t})]})}),Object(m.jsxs)("main",{className:"content",children:[Object(m.jsxs)("div",{className:"room-title",children:[Object(m.jsxs)("h1",{children:["Sala ",b]}),u.length>0&&Object(m.jsxs)("span",{children:[u.length," perguntas"]})]}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),R.b.promise(function(e){return h.apply(this,arguments)}(e),{loading:"Saving...",success:Object(m.jsx)("b",{children:"Perunta enviada!"}),error:Object(m.jsx)("b",{children:"Perunta n\xe3o enviada."})})},children:[Object(m.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:s}),Object(m.jsxs)("div",{className:"form-footer",children:[e?Object(m.jsxs)("div",{className:"user-info",children:[Object(m.jsx)("img",{src:e.avatar,alt:e.name}),Object(m.jsx)("span",{children:e.name})]}):Object(m.jsxs)("span",{children:["Para enviar a pergunta, ",Object(m.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(m.jsx)(C,{type:"submit",disabled:!e,children:"Enviar pergunta"}),Object(m.jsx)(R.a,{position:"top-center",reverseOrder:!1})]})]}),Object(m.jsx)("div",{className:"question-list",children:u.map((function(e){return Object(m.jsx)(I,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighlighted,children:!e.isAnswered&&Object(m.jsxs)("button",{className:"'like-button' ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return f.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(m.jsx)("span",{children:e.likeCount}),Object(m.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(m.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})})]})},e.id)}))})]})]})}var z=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)(x,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{path:"/",exact:!0,component:V}),Object(m.jsx)(o.a,{path:"/room/news",component:D}),Object(m.jsx)(o.a,{path:"/room/:id",component:P}),Object(m.jsx)(o.a,{path:"/admin/room/:id",component:L})]})})})};n(53);c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.a4936724.chunk.js.map