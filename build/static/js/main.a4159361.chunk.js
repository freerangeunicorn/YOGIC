(this.webpackJsonpyogasm=this.webpackJsonpyogasm||[]).push([[0],{129:function(e,a,t){e.exports=t.p+"static/media/yoga.a1fd0355.png"},130:function(e,a,t){e.exports=t.p+"static/media/mudra.12efd5d0.png"},131:function(e,a,t){e.exports=t.p+"static/media/pair.e21b1bd0.png"},141:function(e,a,t){e.exports=t(236)},146:function(e,a,t){},147:function(e,a,t){},236:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),o=(t(146),t(147),t(9)),s=t(252),i=t(125),u=t(246),m=t(128),p=Object(n.createContext)(),d=function(e){var a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement(p.Provider,{value:[l,c]},e.children)},E=t(43),h=t(124),f=t(16);var b=function(){var e=Object(n.useContext)(p),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(f.f)();return r.a.createElement("div",null,r.a.createElement(s.a,{expand:"lg"},r.a.createElement(s.a.Brand,{href:"#home"}," ","YOGIC ",r.a.createElement(E.a,{icon:h.a})," "),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(i.a,{className:"ml-auto"},r.a.createElement(i.a.Link,{href:"./."},"Home"),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{title:"Login",id:"collasible-nav-dropdown"},r.a.createElement(u.a.Item,{href:"./login"},"As a teacher ",t),r.a.createElement(u.a.Item,{href:"./studentlogin"},"Student ",t)),r.a.createElement(u.a,{title:"Signup",id:"collasible-nav-dropdown"},r.a.createElement(u.a.Item,{href:"./signupteacher"},"Teacher"," "),r.a.createElement(u.a.Item,{href:"./signupstudent"},"Student"))),t&&r.a.createElement(m.a,{variant:"outline-light",onClick:function(){return l(null),void c.push("/")}},"Log out")))))},v=t(253),g=t(129),j=t.n(g),y=t(130),O=t.n(y),w=t(131),C=t.n(w);var S=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(v.a,null,r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100 carousel-img",src:j.a,alt:"Yoga"}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,"\u201cTake care of your body, it's the only place you have to live.\u201d"),r.a.createElement("p",null,"- Jim Rohn"))),r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100 carousel-img",src:O.a,alt:"Mudra"}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,'"Yoga is the journey of the self, through the self, to the self."'),r.a.createElement("p",null,"- The Bhagavad Gita"))),r.a.createElement(v.a.Item,null,r.a.createElement("img",{className:"d-block w-100 carousel-img",src:C.a,alt:"Cat"}),r.a.createElement(v.a.Caption,null,r.a.createElement("h3",null,"Yoga is like music: the rhythm of the body, the melody of the mind, and the harmony of the soul create the symphony of life.\u201d"),r.a.createElement("p",null,"- B.K.S. Iyengar")))))},x=t(35),I=t(10),k=t.n(I),N=t(20),G=t(251),P=t(134),L=t(254),T=t(247),B=t(132),A=t.n(B);t(157);var D=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(1),s=Object(o.a)(c,2),i=s[0],u=s[1],p=Object(n.useState)(),d=Object(o.a)(p,2),E=d[0],h=d[1],b=Object(n.useState)(),v=Object(o.a)(b,2),g=v[0],j=v[1],y=Object(n.useState)(),O=Object(o.a)(y,2),w=O[0],C=O[1],S=Object(n.useState)(),x=Object(o.a)(S,2),I=x[0],B=x[1],D=Object(n.useState)("Europe/Stockholm"),Y=Object(o.a)(D,2),H=Y[0],_=Y[1],K=Object(n.useState)(!1),q=Object(o.a)(K,2),z=q[0],F=q[1],J=Object(n.useState)(!1),M=Object(o.a)(J,2),R=M[0],U=M[1],W=Object(n.useState)("Something went wrong"),V=Object(o.a)(W,2),$=V[0],Q=V[1],X=Object(f.f)();Object(n.useEffect)((function(){F(E!==g)}),[E,g]);var Z=function(){var e=Object(N.a)(k.a.mark((function e(){var a,n,r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/teacher",a={first_name:w,last_name:I,password:E,email:t,years_experience:i,default_timezone:H},e.prev=2,(n=new Headers).append("Accept","application/json"),n.append("Content-type","application/json"),e.next=8,fetch("/api/teacher",{method:"POST",headers:n,body:JSON.stringify(a)});case 8:return r=e.sent,e.next=11,r.json();case 11:(l=e.sent).id?X.push("/login"):(Q(l.error),U(!0)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),Q("network problem"),U(!0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"sign-up"},r.a.createElement(G.a,null,r.a.createElement(G.a.Row,null,r.a.createElement(G.a.Group,{as:P.a,controlId:"formGridEmail"},r.a.createElement(G.a.Label,null,"Email"),r.a.createElement(G.a.Control,{required:!0,value:t,onChange:function(e){return l(e.target.value)},type:"email",placeholder:"Enter email"})),r.a.createElement(G.a.Group,{as:P.a,controlId:"formGridPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{required:!0,value:E,onChange:function(e){return h(e.target.value)},type:"password",placeholder:"Password"})),r.a.createElement(L.a,{show:z,animation:!1},r.a.createElement(L.a.Body,null,"Your password doesn't match!")),r.a.createElement(G.a.Group,{as:P.a,controlId:"formGridPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{required:!0,value:g,onChange:function(e){j(e.target.value)},type:"password",placeholder:"Password"}))),r.a.createElement(G.a.Group,{controlId:"formGridName1"},r.a.createElement(G.a.Label,null,"First Name"),r.a.createElement(G.a.Control,{required:!0,value:w,onChange:function(e){return C(e.target.value)},placeholder:"First Name"})),r.a.createElement(G.a.Group,{controlId:"formGridName2"},r.a.createElement(G.a.Label,null,"Last Name"),r.a.createElement(G.a.Control,{required:!0,value:I,onChange:function(e){return B(e.target.value)},placeholder:"Last Name"})),r.a.createElement(G.a.Row,null,r.a.createElement(G.a.Group,{as:P.a,controlId:"formGridTime"},r.a.createElement(G.a.Label,null,"Default Timezone"),r.a.createElement("br",null),r.a.createElement(A.a,{className:"zone-picker",absolute:!1,defaultValue:H,placeholder:"Select timezone...",onChange:function(e){return _(e)}})),r.a.createElement(G.a.Group,{controlId:"formGridExperience"},r.a.createElement(G.a.Label,null,"Years of Experience"),r.a.createElement(G.a.Control,{required:!0,value:i,onChange:function(e){return function(e){var a=Number(e);Number.isNaN(a)?u(0):u(a)}(e.target.value)},placeholder:"Enter a number"}))),r.a.createElement(G.a.Group,{id:"formGridCheckbox"},r.a.createElement(G.a.Check,{required:!0,type:"checkbox",label:"I agree to these terms",feedback:"You must agree before submitting."})),r.a.createElement(m.a,{variant:"dark",onClick:function(){return Z()}},"Submit")),r.a.createElement(T.a,{variant:"danger",show:R,onClose:function(){return U(!1)},dismissible:!0},r.a.createElement(T.a.Heading,null,"Oh snap! You got an error!"),r.a.createElement("p",null,$)))};var Y=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),s=Object(o.a)(c,2),i=s[0],u=s[1],p=Object(n.useState)(),d=Object(o.a)(p,2),E=d[0],h=d[1],f=Object(n.useState)(),b=Object(o.a)(f,2),v=b[0],g=b[1],j=Object(n.useState)(),y=Object(o.a)(j,2),O=y[0],w=y[1],C=function(){var e=Object(N.a)(k.a.mark((function e(){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("submit"),"/api/student",a={first_name:i,last_name:E,password:v,email:t},console.log(JSON.stringify(a)),e.prev=4,(new Headers).append("Accept","application/json"),e.next=9,fetch("/api/student",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},withCredentials:!0,body:JSON.stringify(a)});case 9:return n=e.sent,console.log(n),e.next=13,n.json();case 13:r=e.sent,console.log(r),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"d-flex justify-content-center",style:{marginTop:"20px",marginBottom:"10px"}},r.a.createElement(G.a,null,r.a.createElement(G.a.Row,null,r.a.createElement(P.a,null,r.a.createElement(G.a.Label,null,"First Name"),r.a.createElement(G.a.Control,{required:!0,value:i,onChange:function(e){return u(e.target.value)},placeholder:"First name"})),r.a.createElement(P.a,null,r.a.createElement(G.a.Label,null,"Last Name"),r.a.createElement(G.a.Control,{required:!0,value:E,onChange:function(e){return h(e.target.value)},placeholder:"Last name"}))),r.a.createElement(G.a.Group,{controlId:"formBasicEmail"},r.a.createElement(G.a.Label,null,"Email address"),r.a.createElement(G.a.Control,{required:!0,value:t,onChange:function(e){return l(e.target.value)},type:"email",placeholder:"Enter email"}),r.a.createElement(G.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(G.a.Group,{controlId:"formBasicPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{required:!0,value:v,onChange:function(e){return g(e.target.value)},type:"password",placeholder:"Password"})),r.a.createElement(G.a.Group,{controlId:"formConfirmPassword"},r.a.createElement(G.a.Label,null,"Confirm Password"),r.a.createElement(G.a.Control,{required:!0,value:O,onChange:function(e){return w(e.target.value)},type:"password",placeholder:"Password"})),r.a.createElement(G.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(G.a.Check,{type:"checkbox",label:"I agree to these terms"})),r.a.createElement(m.a,{variant:"dark",onClick:function(){return C()}},"Submit")))},H=t(65);var _=function(){return r.a.createElement("div",{className:"main-footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h6",null,"Yoga from the comfort of your home"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Phone number"),r.a.createElement("li",null,"Location"),r.a.createElement("li",null,"Address"))),r.a.createElement("div",{className:"col"},r.a.createElement("h7",null,"YOGIC"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"About"),r.a.createElement("li",null,"The team"),r.a.createElement("li",null,"Blog"))),r.a.createElement("div",{className:"col"},r.a.createElement("h7",null,"Follow us"),r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement(E.a,{icon:H.a})),r.a.createElement("li",null,r.a.createElement(E.a,{icon:H.c})),r.a.createElement("li",null,r.a.createElement(E.a,{icon:H.d})),r.a.createElement("li",null,r.a.createElement(E.a,{icon:H.b})),r.a.createElement("li",null)))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"col-sm"},"\xa9",(new Date).getFullYear()," YOGIC AB | All rights reserved | Terms Of Service | Privacy"))))};var K=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),h=E[0],b=E[1],v=Object(n.useContext)(p),g=Object(o.a)(v,2),j=(g[0],g[1]),y=Object(n.useState)("Something went wrong"),O=Object(o.a)(y,2),w=O[0],C=O[1],S=Object(f.f)(),x=function(){var e=Object(N.a)(k.a.mark((function e(){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/login/teacher",a={password:i,email:t},console.log(JSON.stringify(a)),e.prev=3,(new Headers).append("Accept","application/json"),e.next=8,fetch("/api/login/teacher",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},withCredentials:!0,body:JSON.stringify(a)});case 8:return n=e.sent,e.next=11,n.json();case 11:r=e.sent,console.log(),r.access_token?(j(r.access_token),S.push("/teacherprofile")):(b(!0),C("Login failed, try your luck one more time")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{class:"d-flex justify-content-center",style:{marginTop:"30px"}},r.a.createElement(G.a,null,r.a.createElement(G.a.Group,{controlId:"formBasicEmail"},r.a.createElement(G.a.Label,null,"Email address"),r.a.createElement(G.a.Control,{required:!0,value:t,onChange:function(e){return l(e.target.value)},type:"email",placeholder:"Enter teacher email"}),r.a.createElement(G.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(G.a.Group,{controlId:"formBasicPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{required:!0,value:i,onChange:function(e){return u(e.target.value)},type:"password",placeholder:"Password"})),r.a.createElement(m.a,{variant:"dark",onClick:function(){return x()}},"Submit")),r.a.createElement(T.a,{variant:"danger",show:h,onClose:function(){return b(!1)},dismissible:!0},r.a.createElement(T.a.Heading,null,"Oh snap! You got an error!"),r.a.createElement("p",null,w)))};var q=function(){var e=Object(n.useState)(),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(n.useContext)(p),E=Object(o.a)(d,2),h=(E[0],E[1]),b=Object(n.useState)(!1),v=Object(o.a)(b,2),g=(v[0],v[1]),j=Object(n.useState)("Something went wrong"),y=Object(o.a)(j,2),O=(y[0],y[1]),w=Object(f.f)(),C=function(){var e=Object(N.a)(k.a.mark((function e(){var a,n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/login/student",a={password:i,email:t},e.prev=2,(new Headers).append("Accept","application/json"),e.next=7,fetch("/api/login/student",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},withCredentials:!0,body:JSON.stringify(a)});case 7:return n=e.sent,e.next=10,n.json();case 10:(r=e.sent).access_token?(h(r.access_token),w.push("./studentprofile")):(g(!0),O("Login failed, try your luck one more time")),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{class:"d-flex justify-content-center",style:{marginTop:"30px"}},r.a.createElement(G.a,null,r.a.createElement(G.a.Group,{controlId:"formBasicEmail"},r.a.createElement(G.a.Label,null,"Email address"),r.a.createElement(G.a.Control,{required:!0,value:t,onChange:function(e){return l(e.target.value)},type:"email",placeholder:"Enter email"}),r.a.createElement(G.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(G.a.Group,{controlId:"formBasicPassword"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{required:!0,value:i,onChange:function(e){return u(e.target.value)},type:"password",placeholder:"Password"})),r.a.createElement(m.a,{variant:"dark",onClick:function(){return C()}},"Submit")))},z=t(248),F=t(249),J=t(80),M=t(46),R=t(255),U=t(250),W=t(256),V=t(82),$=t.n(V),Q=(t(111),t(135)),X=t.n(Q);var Z=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=(a[0],a[1]),l=Object(n.useState)(!1),c=Object(o.a)(l,2),s=c[0],i=c[1],u=Object(n.useContext)(p),d=Object(o.a)(u,2),E=d[0],h=(d[1],Object(f.f)()),b=Object(n.useState)(new Date),v=Object(o.a)(b,2),g=v[0],j=v[1],y=new Date,O=new Date;O.setDate(O.getDate()+30);var w=Object(n.useState)(),C=Object(o.a)(w,2),S=C[0],x=C[1],I=Object(n.useState)(),P=Object(o.a)(I,2),L=P[0],B=P[1],A=Object(n.useState)(),D=Object(o.a)(A,2),Y=D[0],H=D[1],_=Object(n.useState)(),K=Object(o.a)(_,2),q=K[0],V=K[1],Q=Object(n.useState)(""),Z=Object(o.a)(Q,2),ee=Z[0],ae=Z[1],te=Object(n.useState)(),ne=Object(o.a)(te,2),re=ne[0],le=ne[1],ce=Object(n.useState)([]),oe=Object(o.a)(ce,2),se=oe[0],ie=oe[1],ue=Object(n.useState)(),me=Object(o.a)(ue,2),pe=me[0],de=me[1],Ee=Object(n.useState)(),he=Object(o.a)(Ee,2),fe=he[0],be=he[1],ve=Object(n.useState)(),ge=Object(o.a)(ve,2),je=ge[0],ye=ge[1],Oe=Object(n.useState)(),we=Object(o.a)(Oe,2),Ce=we[0],Se=we[1];Object(n.useEffect)((function(){var e=new Headers;return e.append("Accept","application/json"),e.append("Content-type","application/json"),e.append("Authorization","Bearer ".concat(E)),fetch("/api/teacher",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){e[0].id?(t(e[0]),de(e[0].first_name),be(e[0].last_name),ye(e[0].email),Se(e[0].years_experience)):"Missing Authorization Header"===e.msg&&h.push("/login")})).catch((function(e){console.log("error"),console.log(e)})),function(){console.log("unsubscribe")}}),[E,h]);var xe=function(){var e=Object(N.a)(k.a.mark((function e(){var a,t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/yogaclass",a={title:S,level:L,price:Y,style:q,date:g,time:re,description:ee},e.prev=2,(t=new Headers).append("Accept","application/json"),t.append("Content-type","application/json"),t.append("Authorization","Bearer ".concat(E)),e.next=9,fetch("/api/yogaclass",{method:"POST",headers:t,body:JSON.stringify(a)});case 9:return n=e.sent,e.next=12,n.json();case 12:e.sent&&i(!0),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(2),console.log("error"),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(N.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/yogaclass",(a=new Headers).append("Accept","application/json"),a.append("Content-type","application/json"),a.append("Authorization","Bearer ".concat(E)),fetch("/api/yogaclass",{method:"GET",headers:a}).then((function(e){return e.json()})).then((function(e){ie(e)})).catch((function(e){console.log("error"),console.log(e)})),e.abrupt("return",(function(){console.log("unsubscribe")}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=Object(N.a)(k.a.mark((function e(){var a,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={first_name:pe,last_name:fe,email:je,years_experience:Ce},"/api/teacher",(t=new Headers).append("Accept","application/json"),t.append("Content-type","application/json"),t.append("Authorization","Bearer ".concat(E)),fetch("/api/teacher",{method:"PUT",headers:t,body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log("error"),console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(z.a,{className:"d-flex justify-content-center",defaultActiveKey:"profile",id:"uncontrolled-tab-example",onSelect:function(e){"myclasses"===e&&Ie()}},r.a.createElement(F.a,{eventKey:"profile",title:"My profile"},r.a.createElement(G.a,{className:"form-centered"},r.a.createElement(G.a.Group,{controlId:"formName"},r.a.createElement(G.a.Label,null,"First Name:"),r.a.createElement(G.a.Control,{value:pe,onChange:function(e){return de(e.target.value)}}),r.a.createElement(G.a.Label,null,"Last Name:"),r.a.createElement(G.a.Control,{value:fe,onChange:function(e){return be(e.target.value)}})),r.a.createElement(G.a.Group,{controlId:"formBasicEmail"},r.a.createElement(G.a.Label,null,"Email:",je)),r.a.createElement(G.a.Group,{controlId:"formYears"},r.a.createElement(G.a.Label,null,"Experience:"),r.a.createElement(G.a.Control,{value:Ce,onChange:function(e){return Se(e.target.value)}})),r.a.createElement(m.a,{variant:"success",onClick:function(){return ke()}},"Save")),r.a.createElement(J.a,null)),r.a.createElement(F.a,{eventKey:"Schedule",title:"Schedule a class"},r.a.createElement("div",null,r.a.createElement(G.a,{className:"form-centered"},r.a.createElement(G.a.Group,{controlId:"formGridTitle"},r.a.createElement(G.a.Label,null,"Title:"),r.a.createElement(G.a.Control,{value:S,onChange:function(e){return x(e.target.value)},placeholder:"Name your class"})),r.a.createElement(G.a.Group,{controlId:"formGridLevel"},r.a.createElement(G.a.Label,null,"Level:"),r.a.createElement(G.a.Control,{required:!0,value:L,onChange:function(e){return B(e.target.value)},placeholder:"Beginner, intermediate, advanced or all"})),r.a.createElement(G.a.Group,{controlId:"formGridPrice"},r.a.createElement(G.a.Label,null,"What's your price?"),r.a.createElement(G.a.Control,{value:Y,onChange:function(e){return H(e.target.value)},placeholder:"Your price in USD"})),r.a.createElement(G.a.Group,{controlId:"formGridLevel"},r.a.createElement(G.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(G.a.Label,null,"Describe your class:"),r.a.createElement(G.a.Control,{value:ee,onChange:function(e){return ae(e.target.value)},as:"textarea",rows:"3"})),r.a.createElement(G.a.Group,{controlId:"formGridDate"},r.a.createElement(G.a.Label,null,"Select a date: "),r.a.createElement("br",null),r.a.createElement($.a,{selected:g,onChange:function(e){return j(e)},minDate:y,maxDate:O})),r.a.createElement(G.a.Group,{controlId:"formGridTime"},r.a.createElement(G.a.Label,null,"Select time: "),r.a.createElement("br",null),r.a.createElement(X.a,{value:re,onChange:function(e){return le(e)}})),r.a.createElement(M.a,{value:q,onSelect:function(e){return V(e)}},r.a.createElement(M.a.Toggle,{variant:"success",id:"dropdown-basic"},"Pick a style"),r.a.createElement(M.a.Menu,null,r.a.createElement(M.a.Item,{eventKey:"Hatha"},"Hatha"),r.a.createElement(M.a.Item,{eventKey:"Vinyasa"},"Vinyasa"),r.a.createElement(M.a.Item,{eventKey:"Yin"},"Yin Yoga"),r.a.createElement(M.a.Item,{eventKey:"Restorative"},"Restorative"),r.a.createElement(M.a.Item,{eventKey:"Ashtanga"},"Ashtanga"),r.a.createElement(M.a.Item,{eventKey:"Power"},"Power Yoga"),r.a.createElement(M.a.Item,{eventKey:"Pre-Natal"},"Pre-natal")))),r.a.createElement(m.a,{variant:"dark",onClick:function(){return xe()}},"Submit")),s&&r.a.createElement(T.a,{onClose:function(){return i(!1)},dismissible:!0,variant:"success"},"Your class has been successfully created!"))),r.a.createElement(F.a,{eventKey:"myclasses",title:"My classes"},se.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{className:"yoga-card",style:{marginBottom:20}},r.a.createElement(R.a.Header,{className:"card-header"},e.title,e.student_id&&r.a.createElement(U.a,{variant:"success"},"Booked")),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,"Level:",e.level," "),r.a.createElement(W.a,{variant:"flush"},r.a.createElement(W.a.Item,null,"Time: ",e.time),r.a.createElement(W.a.Item,null,"Price: $",e.price),r.a.createElement(W.a.Item,null,"Date: ",e.date),r.a.createElement(W.a.Item,null,"Style: ",e.style),r.a.createElement(W.a.Item,null,"Description: ",e.description),r.a.createElement(W.a.Item,null,"Duration: ",e.duration," minutes")))))})))))},ee=t(133);var ae=function(){var e=Object(n.useState)({}),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),i=(s[0],s[1]),u=Object(n.useContext)(p),d=Object(o.a)(u,2),E=d[0],h=(d[1],Object(n.useState)([])),b=Object(o.a)(h,2),v=b[0],g=b[1],j=Object(n.useState)(!1),y=Object(o.a)(j,2),O=y[0],w=y[1],C=Object(n.useState)(),S=Object(o.a)(C,2),x=S[0],I=S[1],P=Object(f.f)(),T=Object(n.useState)(new Date),B=Object(o.a)(T,2),A=B[0],D=B[1],Y=new Date,H=new Date;H.setDate(H.getDate()+30);var _=Object(n.useState)(),K=Object(o.a)(_,2),q=K[0],U=K[1];console.log("show me data; yoga class",v),Object(n.useEffect)((function(){var e=new Headers;return e.append("Accept","application/json"),e.append("Content-type","application/json"),e.append("Authorization","Bearer ".concat(E)),fetch("/api/student",{method:"GET",headers:e}).then((function(e){return e.json()})).then((function(e){e[0].id?(console.log(e),l(e[0])):"Missing Authorization Header"===e.msg&&P.push("/studentlogin")})).catch((function(e){i(!0),console.log("error"),console.log(e)})),function(){console.log("unsubscribe")}}),[E,P]);var V=function(){var e=Object(N.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("SUP"),"/api/yogaclass",(a=new Headers).append("Accept","application/json"),a.append("Content-type","application/json"),a.append("Authorization","Bearer ".concat(E)),fetch("/api/yogaclass",{method:"GET",headers:a}).then((function(e){return console.log("2PAC",e),e.json()})).then((function(e){g(e),console.log("YOOOOO",e)})).catch((function(e){i(!0),console.log("error"),console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(N.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("SUPPERMAN",a),"/api/bookclass",(t=new Headers).append("Accept","application/json"),t.append("Content-type","application/json"),t.append("Authorization","Bearer ".concat(E)),fetch("/api/bookclass",{method:"PUT",headers:t,body:JSON.stringify({id:a})}).then((function(e){return console.log("confirmation response from be",e),e.json()})).then((function(e){w(e.confirmation)})).catch((function(e){}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),X=function(){var e=Object(N.a)(k.a.mark((function e(){var a,t,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("SEARCH"),a=new URLSearchParams("filter=time^eq^".concat(q,",date^eq^").concat(A.getFullYear(),"-").concat(A.getMonth()+1,"-").concat(A.getDate(),",style^eq^").concat(x)),t=new URL("https://yogicc.herokuapp.com/:3000/api/yogaclass"),(n=new Headers).append("Accept","application/json"),n.append("Content-type","application/json"),n.append("Authorization","Bearer ".concat(E)),t.search=a.toString(),fetch(t,{method:"GET",headers:n}).then((function(e){return e.json()})).then((function(e){g(e)})).catch((function(e){i(!0)}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"parentcontainer"},r.a.createElement(z.a,{defaultActiveKey:"studentClasses",id:"studentProfile",onSelect:function(e){"allClasses"===e?V():"Search"===e&&g([])}},r.a.createElement(F.a,{eventKey:"studentClasses",title:"My Classes"},r.a.createElement(J.a,null,r.a.createElement(R.a,{className:"text-center",style:{marginBottom:20}},r.a.createElement(R.a.Header,null,"Upcoming class:"),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,t.first_name," ",t.last_name," "),r.a.createElement(R.a.Text,null,"Next class:"),r.a.createElement(m.a,{variant:"dark"},"Enter")),r.a.createElement(R.a.Footer,{className:"text-muted"},"Previous: ")))),r.a.createElement(F.a,{eventKey:"allClasses",title:"Explore Yoga classes"},v.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(R.a,{style:{marginBottom:20}},r.a.createElement(R.a.Header,null,e.title," "),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,"Level:",e.level," "),r.a.createElement(W.a,{variant:"flush"},r.a.createElement(W.a.Item,null,"Teacher:",e.first_name," ",e.last_name),r.a.createElement(W.a.Item,null,"Years of experience:",e.years_experience),r.a.createElement(W.a.Item,null," Time:",e.time),r.a.createElement(W.a.Item,null,"Price: ",e.price),r.a.createElement(W.a.Item,null,"Date: ",e.date),r.a.createElement(W.a.Item,null,"Style: ",e.style),r.a.createElement(W.a.Item,null,"Duration: ",e.duration," minutes"),r.a.createElement(W.a.Item,null,"Description: ",e.description)),r.a.createElement(m.a,{class:"button-center",onClick:function(){Q(e.id)},variant:"success"},"Book"))))}))),r.a.createElement(F.a,{eventKey:"Search",title:"Search a class"},r.a.createElement(J.a,null),r.a.createElement(G.a,{className:"search-form"},r.a.createElement(G.a.Group,{controlId:"formBasicDate"},r.a.createElement(G.a.Label,null,"Select a date: "),r.a.createElement("br",null),r.a.createElement($.a,{selected:A,onChange:function(e){D(e);var a=e.getHours(),t=e.getMinutes();U("".concat(a,":").concat(t))},minDate:Y,maxDate:H,showTimeSelect:!0})),r.a.createElement(G.a.Group,{controlId:"formBasicStyle"},r.a.createElement(ee.a,null,"Pick a style!"),r.a.createElement(M.a,{value:x,onSelect:function(e){return I(e)}},r.a.createElement(M.a.Toggle,{variant:"success",id:"dropdown-basic"},"Style"),r.a.createElement(M.a.Menu,null,r.a.createElement(M.a.Item,{eventKey:"Hatha"},"Hatha"),r.a.createElement(M.a.Item,{eventKey:"Vinyasa"},"Vinyasa"),r.a.createElement(M.a.Item,{eventKey:"Yin"},"Yin Yoga"),r.a.createElement(M.a.Item,{eventKey:"Restorative"},"Restorative"),r.a.createElement(M.a.Item,{eventKey:"Ashtanga"},"Ashtanga"),r.a.createElement(M.a.Item,{eventKey:"Power"},"Power Yoga"),r.a.createElement(M.a.Item,{eventKey:"Pre-Natal"},"Pre-natal")))),r.a.createElement(m.a,{variant:"dark",onClick:function(){return X()}},"Search")),r.a.createElement(R.a,{style:{marginBottom:20}},v.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement(R.a.Header,null,e.title," "),r.a.createElement(R.a.Body,null,r.a.createElement(R.a.Title,null,"Level:",e.level," "),r.a.createElement(W.a,{variant:"flush"},r.a.createElement(W.a.Item,null,"Teacher: ",e.first_name," ",e.last_name),r.a.createElement(W.a.Item,null,"Years of experience: ",e.years_experience),r.a.createElement(W.a.Item,null," Time: ",e.time),r.a.createElement(W.a.Item,null,"Price: $",e.price),r.a.createElement(W.a.Item,null,"Date: ",e.date),r.a.createElement(W.a.Item,null,"Style: ",e.style),r.a.createElement(W.a.Item,null,"Duration: ",e.duration," minutes")),r.a.createElement(R.a.Text,null," Description: ",e.description),r.a.createElement(m.a,{variant:"dark",onClick:function(){return Q(e.id)}},"Book")," "))}))),r.a.createElement(J.a,null))),r.a.createElement(L.a,{show:O},r.a.createElement(L.a.Header,{closeButton:"True"},r.a.createElement("strong",{className:"mr-auto"},"Thank you ",t.first_name," ",t.last_name),r.a.createElement("small",null,"just now")),r.a.createElement(L.a.Body,null,"BOOKED! Confirmation has been sent to your email!.")))};var te=function(){return r.a.createElement(d,null,r.a.createElement("div",{className:"page-container"},r.a.createElement("div",{className:"content-wrap"},r.a.createElement(x.a,null,r.a.createElement(b,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/",exact:!0,component:S}),r.a.createElement(f.a,{path:"/login",component:K}),r.a.createElement(f.a,{path:"/studentlogin",component:q}),r.a.createElement(f.a,{path:"/signupteacher",component:D}),r.a.createElement(f.a,{path:"/teacherprofile",component:Z}),r.a.createElement(f.a,{path:"/studentprofile",component:ae}),r.a.createElement(f.a,{path:"/signupstudent",component:Y})))),r.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(235);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[141,1,2]]]);
//# sourceMappingURL=main.a4159361.chunk.js.map