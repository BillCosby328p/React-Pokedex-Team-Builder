(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{18:function(e,t,a){e.exports={backdrop:"TeamPokes_backdrop__3Yv6H",root:"TeamPokes_root__2Uuli",closeButton:"TeamPokes_closeButton__2j-JB",title:"TeamPokes_title__MggLS",poke:"TeamPokes_poke__144Gw",header:"TeamPokes_header__nY1O5",addButton:"TeamPokes_addButton__2nxZZ",body:"TeamPokes_body__QPtAU",footer:"TeamPokes_footer__20pwq"}},20:function(e,t,a){e.exports={root:"PokeDetailModal_root__2MdGX",backdrop:"PokeDetailModal_backdrop__CeA7v",modal:"PokeDetailModal_modal__27Jb0",header:"PokeDetailModal_header__47jbq",addButton:"PokeDetailModal_addButton__1wk_-",body:"PokeDetailModal_body__VYZez",name:"PokeDetailModal_name__3L6i3",footer:"PokeDetailModal_footer__9__DU"}},27:function(e,t,a){e.exports={root:"PokeCard_root__3-gz_",header:"PokeCard_header__3iztZ",addButton:"PokeCard_addButton__2GBUN",body:"PokeCard_body__1_xzZ",footer:"PokeCard_footer__2MUAA"}},31:function(e,t,a){e.exports={root:"App_root__2spNQ",showButton:"App_showButton__g4J_m",logo:"App_logo__2tyFN",content:"App_content__kOyc8"}},59:function(e,t,a){e.exports={root:"ProgressBar_root__22MRw"}},73:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(4),o=a.n(n),c=a(21),s=a.n(c),i=a(34),d=(a(73),a(43)),r=a(0),l=a.n(r),j=a(3),u=a(11),b=a(58),p=a(23),m=a(38),h=a.n(m),O=a.p+"static/media/plus.e9799d5c.png",_={toCapitalizeCase:function(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}},f={colors:{bug:"#729f3f",dragon:"#f16e57",electric:"#eed535",fairy:"#fdb9e9",fighting:"#d56723",fire:"#fd7d24",flying:"#3dc7ef",ghost:"#7b62a3",ground:"#ab9842",grass:"#9bcc50",ice:"#51c4e7",normal:"#a4acaf",poison:"#b97fc9",psychic:"#f366b9",rock:"#a38c21",steel:"#9eb7b8",water:"#4592c4"}},x=a(27),k=a.n(x),v=a(6),g=function(e){return Object(v.jsxs)("div",{className:k.a.root,onClick:function(){return e.handleClick(e)},children:[Object(v.jsxs)("div",{className:k.a.header,children:[Object(v.jsxs)("span",{children:["#","000".concat(e.id).slice(-3)]}),Object(v.jsx)("img",{src:O,onClick:function(t){return function(t,a){t.stopPropagation(),e.handleAddToTeam(a)}(t,e)},className:k.a.addButton,alt:":( Not Found"})]}),Object(v.jsxs)("div",{className:k.a.body,children:[Object(v.jsx)("span",{children:_.toCapitalizeCase(e.name)}),Object(v.jsx)("img",{src:e.sprites.other.dream_world.front_default,alt:":( Not Found"})]}),Object(v.jsx)("div",{className:k.a.footer,children:e.types.map((function(e){return Object(v.jsx)("span",{style:{backgroundColor:f.colors[e.type.name]},children:_.toCapitalizeCase(e.type.name)},e.slot)}))})]})},C=a.p+"static/media/cancel.c7472748.png",N=a(18),y=a.n(N),P=function(e){return Object(v.jsxs)(v.Fragment,{children:[e.open&&Object(v.jsx)("div",{className:y.a.backdrop,onClick:function(){return e.handleClose()}}),Object(v.jsxs)("div",{className:y.a.root,style:{right:e.open?0:-500},children:[Object(v.jsx)("img",{src:C,className:y.a.closeButton,onClick:function(){return e.handleClose()},alt:":( Not Found"}),Object(v.jsx)("p",{className:y.a.title,children:"My Team"}),Object(v.jsx)("div",{className:y.a.content,children:e.data.map((function(t){return Object(v.jsxs)("div",{className:y.a.poke,children:[Object(v.jsxs)("div",{className:y.a.header,children:[Object(v.jsxs)("span",{children:["#","000".concat(t.data.id).slice(-3)]}),Object(v.jsx)("img",{src:C,onClick:function(){return e.handleDelete(t.id)},className:y.a.addButton,alt:":( Not Found"})]}),Object(v.jsxs)("div",{className:y.a.body,children:[Object(v.jsx)("span",{children:_.toCapitalizeCase(t.data.name)}),Object(v.jsx)("img",{src:t.data.sprites.other.dream_world.front_default,alt:t.data.name})]}),Object(v.jsx)("div",{className:y.a.footer,children:t.data.types.map((function(e){return Object(v.jsx)("span",{style:{backgroundColor:f.colors[e.type.name]},children:_.toCapitalizeCase(e.type.name)},e.slot)}))})]},t.id)}))})]})]})},T=a(59),B=a.n(T),S=function(e){return Object(v.jsx)("div",{className:B.a.root,children:Object(v.jsx)("div",{style:{width:"".concat(e.value,"%")},children:e.value})})},w=a(20),F=a.n(w),A=(a(56),function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),d=i[0],r=i[1];Object(n.useEffect)((function(){var t=[];e.data.abilities.map((function(e){t.push(_.toCapitalizeCase(e.ability.name))})),c(t)}),[]);return Object(v.jsxs)("div",{className:F.a.root,children:[Object(v.jsx)("div",{className:F.a.backdrop,onClick:function(){return e.handleClose()}}),Object(v.jsxs)("div",{className:F.a.modal,children:[Object(v.jsxs)("div",{className:F.a.header,children:[Object(v.jsxs)("span",{children:["#","000".concat(e.data.id).slice(-3)]}),Object(v.jsx)("img",{src:O,onClick:function(t){return function(t,a){t.stopPropagation(),e.handleAddToTeam(a)}(t,e.data)},className:F.a.addButton,alt:":( Not Found"})]}),Object(v.jsxs)("div",{className:F.a.body,children:[Object(v.jsx)("p",{className:F.a.name,children:_.toCapitalizeCase(e.data.name)}),Object(v.jsx)("img",{class:"animate__animated animate__bounceIn",src:e.data.sprites.other.dream_world.front_default,alt:":( Not Found"}),Object(v.jsx)("div",{children:e.data.types.map((function(e){return Object(v.jsx)("span",{style:{backgroundColor:f.colors[e.type.name]},children:_.toCapitalizeCase(e.type.name)},e.slot)}))})]}),Object(v.jsxs)("div",{className:F.a.footer,children:[Object(v.jsx)("ul",{className:F.a.nav,children:[{id:"about",name:"About"},{id:"stats",name:"Stats"}].map((function(e){return Object(v.jsx)("li",{onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(d));t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),r(t)}(e.id)},children:e.name},e.id)}))}),d.includes("about")&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Height"}),Object(v.jsx)("div",{children:e.data.height/10+" m"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Weight"}),Object(v.jsx)("div",{children:e.data.weight/10+" kg"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:"Abilities"}),Object(v.jsx)("div",{children:o.join(", ")})]})]}),d.includes("stats")&&Object(v.jsx)("div",{children:e.data.stats.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:e.stat.name.split(" ").map((function(e){return _.toCapitalizeCase(e)})).join(" ")}),Object(v.jsx)("div",{children:Object(v.jsx)(S,{value:e.base_stat})})]},t)}))})]})]})]})}),D=a.p+"static/media/logo.4a9924f7.png",M=a.p+"static/media/loading.525b5cce.gif",z=a.p+"static/media/eye.a835fb9b.png",J=a(31),I=a.n(J),L=function(){var e=Object(i.useToasts)().addToast,t=Object(n.useState)(!0),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(!1),r=Object(u.a)(s,2),m=r[0],O=r[1],_=Object(n.useState)(!1),f=Object(u.a)(_,2),x=f[0],k=f[1],C=Object(n.useState)([]),N=Object(u.a)(C,2),y=N[0],T=N[1],B=Object(n.useState)(""),S=Object(u.a)(B,2),w=S[0],F=S[1],J=Object(n.useState)(),L=Object(u.a)(J,2),U=L[0],Z=L[1],E=Object(n.useState)([]),G=Object(u.a)(E,2),Y=G[0],W=G[1],q=Object(b.a)({apiKey:"AIzaSyBnu3F-Y26cPAFt42LWWdZV5jpOnBn9UhE",authDomain:"pokedex-6366a.firebaseapp.com",projectId:"pokedex-6366a",storageBucket:"pokedex-6366a.appspot.com",messagingSenderId:"818851053935",appId:'"1:818851053935:web:95084847c6a4e1a6c5689a",',measurementId:"G-9GYR7W5MCJ"}),H=Object(p.f)(q);Object(n.useEffect)(Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){setTimeout((function(){c(!1)}),1e3);var t=e.data.results.map((function(e){return h.a.get(e.url).then((function(e){return e.data}))}));Promise.all(t).then((function(e){T(e)}))})),Object(p.e)(Object(p.b)(H,"pokes")).then((function(e){var t=[];e.forEach((function(e){h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.data().poke_id)).then((function(a){t.push({id:e.id,data:a.data})}))})),W(t)}));case 2:case"end":return e.stop()}}),e)}))),[]);var Q=function(e){O(!0),Z(e)},R=function(t){Y.length<6?Object(p.a)(Object(p.b)(H,"pokes"),{poke_id:t.id}).then((function(a){var n=JSON.parse(JSON.stringify(Y));n.push({id:a.id,data:t}),W(n),e("Pok\xe9mon added to the team successfully",{appearance:"success"})})):alert("Pok\xe9mon team consists of max 6 members")};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:I.a.root,children:[Object(v.jsx)("img",{src:D,className:I.a.logo,alt:":( Not Found"}),o?Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{children:"Loading..."}),Object(v.jsx)("img",{src:M,alt:":( Not Found"})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{className:I.a.showButton,onClick:function(){return document.body.style.overflow="hidden",void k(!0)},children:Object(v.jsx)("img",{class:"animate__animated animate__bounce ",src:z,alt:":( Not Found"})}),Object(v.jsx)("input",{type:"text",value:w,onChange:function(e){return F(e.target.value)},placeholder:"Search Pok\xe9mon by name or by using the National Pok\xe9dex Number...",className:"form-control searchbar"}),Object(v.jsx)("div",{className:I.a.content,children:null===y||void 0===y?void 0:y.filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())||String(e.id).includes(w)})).map((function(e){return Object(v.jsx)("div",{class:"animate__animated animate__bounceInUp animate__fast",children:Object(v.jsx)(g,Object(d.a)(Object(d.a)({},e),{},{handleClick:Q,handleAddToTeam:R}),e.id)})}))})]})]}),m&&Object(v.jsx)(A,{open:m,handleClose:function(){Z(null),O(!1)},data:U,handleAddToTeam:R}),Object(v.jsx)(P,{open:x,data:Y,handleClose:function(){return document.body.style.overflow="auto",void k(!1)},handleDelete:function(e){Object(p.c)(Object(p.d)(H,"pokes",e)).then((function(t){var a,n=JSON.parse(JSON.stringify(Y));n.map((function(t,n){t.id===e&&(a=n)})),n.splice(a,1),W(n)}))}})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),o(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(i.ToastProvider,{autoDismiss:!0,autoDismissTimeout:5e3,children:Object(v.jsx)(L,{})})}),document.getElementById("root")),U()}},[[93,1,2]]]);
//# sourceMappingURL=main.c9e5e2d8.chunk.js.map