(this["webpackJsonpwebsite-cre-respon"]=this["webpackJsonpwebsite-cre-respon"]||[]).push([[0],{20:function(e,t,a){e.exports=a(36)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(18),i=a.n(r),c=(a(25),a(15)),s=a(5),o=a(11),m=a(2),u=(a(26),["btn--primary","btn--outline"]),d=["btn--medium","btn--large","btn--mobile"],b=["primary","blue","red","green"],p=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,i=e.buttonSize,c=e.buttonColor,s=u.includes(r)?r:u[0],o=d.includes(i)?i:d[0],m=b.includes(c)?c:b[2];return l.a.createElement("button",{className:"btn ".concat(s," ").concat(o," ").concat(m),onClick:n,type:a},t)},g=(a(27),a(0));var E=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),u=Object(c.a)(i,2),d=u[0],b=u[1],E=function(){return r(!1)};return window.addEventListener("resize",(function(){window.innerWidth<=960?b(!1):b(!0)})),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.b.Provider,{value:{color:"#fff"}},l.a.createElement("div",{className:"navbar"},l.a.createElement("div",{className:"navbar-container container"},l.a.createElement(m.b,{to:"/",className:"navbar-logo",onClick:E},l.a.createElement(s.f,{style:{fontSize:"32px",color:"aqua"},className:"navbar-icon"}),"React ",l.a.createElement("span",{style:{color:"#61dafb"}}," Fresh"),l.a.createElement(o.a,{style:{fontSize:"28px"}})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},a?l.a.createElement(s.g,null):l.a.createElement(s.a,null)),l.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/",className:"nav-links",onClick:E}," Home ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/feature",className:"nav-links",onClick:E}," Feature")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(m.b,{to:"/about",className:"nav-links",onClick:E}," About ")),l.a.createElement("li",{className:"nav-btn"},d?l.a.createElement(m.b,{to:"/sign-up",className:"btn-link",onClick:E},l.a.createElement(p,{buttonStyle:"btn--outline"},"SIGN UP")):l.a.createElement(m.b,{to:"/sign-up",className:"btn-link"},l.a.createElement(p,{buttonStyle:"btn--outline",buttonSize:"btn--mobile",onClick:E},"SIGN UP1"))))))))},h=a(3);a(33);var v=function(e){var t=e.lightBg,a=e.topLine,n=e.lightText,r=e.lightTextDesc,i=e.headline,c=e.description,s=e.buttonLabel,o=e.img,u=e.alt,d=e.imgStart;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t?"home__hero-section":"home_hero-section darkBg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===d?"row-reverse":"row"}},l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-text-wrapper"},l.a.createElement("div",{className:"top-line"},a),l.a.createElement("h1",{className:n?"heading":"heading dark"},i),l.a.createElement("p",{className:r?"home__hero-subtitle":"home__hero-subtitle dark"},c),l.a.createElement(m.b,{to:"/sign-up"},l.a.createElement(p,{buttonSize:"btn--wide",buttonColor:"blue"},s)))),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"home__hero-img-wrapper"},l.a.createElement("img",{src:o,alt:u,className:"home__hero-img"})))))))};a(34);var f=function(){return l.a.createElement(g.b.Provider,{value:{color:"white",size:64}},l.a.createElement("div",null,l.a.createElement("div",{className:"pricing__section"},l.a.createElement("div",{className:"pricing__wrapper"},l.a.createElement("h1",{className:"pricing__heading"},"Feature"),l.a.createElement("div",{className:"pricing__container"},l.a.createElement(m.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(s.c,null)),l.a.createElement("h3",null,"ReactJS"),l.a.createElement("h4",null," openSource"),l.a.createElement("p",null,"by Facebook"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"1 million + website used"),l.a.createElement("li",null,"Speed performance"),l.a.createElement("li",null,"great support community ")),l.a.createElement(p,{buttonSize:"btn--wide",buttonColor:"primary"},"Build website"))),l.a.createElement(m.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(s.c,null)),l.a.createElement("h3",null,"Es6-JavaScript"),l.a.createElement("h4",null,"programming"),l.a.createElement("p",null,"Popular today"),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"1 million + website used"),l.a.createElement("li",null,"Speed performance"),l.a.createElement("li",null,"great support community ")),l.a.createElement(p,{buttonSize:"btn--wide",buttonColor:"blue"},"Build website"))),l.a.createElement(m.b,{to:"/sign-up",className:"pricing__container-card"},l.a.createElement("div",{className:"pricing__container-cardInfo"},l.a.createElement("div",{className:"icon"},l.a.createElement(s.c,null)),l.a.createElement("h3",null,"NodeJS"),l.a.createElement("h4",null,"programming "),l.a.createElement("p",null,"Popular "),l.a.createElement("ul",{className:"pricing__container-features"},l.a.createElement("li",null,"1 million + website used"),l.a.createElement("li",null,"Speed performance"),l.a.createElement("li",null,"great support community ")),l.a.createElement(p,{buttonSize:"btn--wide",buttonColor:"primary"},"Build website"))))))))},N={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"React Feature 2020",headline:"A JavaScript library for building user interfaces",description:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook",buttonLabel:"Get Started",imgStart:"",img:"images/svg-2.svg",alt:"credit-card"},y={lightBg:!0,lightText:!1,lightTextDesc:!0,topLine:"Front-end performance",headline:"Build single page application website",description:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook",buttonLabel:"Learn more",imgStart:"start",img:"images/svg-4.svg",alt:"vault"},S={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Easy Learn",headline:"Build single page application website",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",buttonLabel:"Start now",imgStart:"",img:"images/svg-7.svg",alt:"credit-card"},w={lightBg:!0,lightText:!1,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every trancsition is stored on our clound database",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",buttonLabel:"Build Now",imgStart:"start",img:"images/svg-3.svg",alt:"credit-card"};var k=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,N),l.a.createElement(v,y),l.a.createElement(v,S),l.a.createElement(f,null),l.a.createElement(v,w))};a(35);var _=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"Join our exclusive membership to receive the latest news and trends"),l.a.createElement("p",{className:"footer-subscription-text"},"You can unsubscribe at any time."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(p,{buttonStyle:"btn--outline"},"Subscribe")))),l.a.createElement("div",{className:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"About Us"),l.a.createElement(m.b,{to:"/sign-up"},"How it works"),l.a.createElement(m.b,{to:"/"},"Testimonials"),l.a.createElement(m.b,{to:"/"},"Careers"),l.a.createElement(m.b,{to:"/"},"Investors"),l.a.createElement(m.b,{to:"/"},"Terms of Service")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement(m.b,{to:"/"},"Contact"),l.a.createElement(m.b,{to:"/"},"Support"),l.a.createElement(m.b,{to:"/"},"Destinations"),l.a.createElement(m.b,{to:"/"},"Sponsorships"))),l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Videos"),l.a.createElement(m.b,{to:"/"},"Submit Video"),l.a.createElement(m.b,{to:"/"},"Ambassadors"),l.a.createElement(m.b,{to:"/"},"Agency"),l.a.createElement(m.b,{to:"/"},"Influencer")),l.a.createElement("div",{className:"footer-link-items"},l.a.createElement("h2",null,"Social Media"),l.a.createElement(m.b,{to:"/"},"Instagram"),l.a.createElement(m.b,{to:"",target:"_blank"},"Facebook"),l.a.createElement(m.b,{to:"/"},"Youtube"),l.a.createElement(m.b,{to:"/"},"Twitter")))),l.a.createElement("section",{className:"social-media"},l.a.createElement("div",{className:"social-media-wrap"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement(m.b,{to:"/",className:"social-logo"},l.a.createElement(s.f,{style:{fontSize:"32px",color:"aqua"},className:"navbar-icon"}),"React",l.a.createElement("span",{style:{color:"#61dafb"}},"Fresh"),l.a.createElement(o.a,{style:{fontSize:"28px"}}))),l.a.createElement("small",{className:"website-rights"},"ReactFresh \xa9 2020"),l.a.createElement("div",{className:"social-icons"},l.a.createElement(m.b,{className:"social-icon-link",to:"",target:"_blank","aria-label":"Facebook"},l.a.createElement(s.b,{href:"www.facebook.com/Dinh.nt1097",className:"fa-myfacebook"})),l.a.createElement(m.b,{className:"social-icon-link",to:"www.facebook.com/Dinh.nt1097",target:"_blank","aria-label":"Instagram"},l.a.createElement(s.d,{className:"fa-myinsta"})),l.a.createElement(m.b,{className:"social-icon-link",to:"//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber",target:"_blank","aria-label":"Youtube"},l.a.createElement(s.i,{className:"fa-myytb"})),l.a.createElement(m.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement(s.h,{className:"fa-mytw"})),l.a.createElement(m.b,{className:"social-icon-link",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement(s.e,{className:"fa-mylinked"}))))))},x={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"React Feature 2020",headline:"A JavaScript library for building user interfaces",description:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook",buttonLabel:"Get Started",imgStart:"",img:"images/svg-2.svg",alt:"credit-card"};var L=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(v,x))},I={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"SIGN UP",headline:"Build single page application website",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",buttonLabel:"SIGN UP NOW",imgStart:"",img:"images/svg-6.svg",alt:"credit-card"},T={lightBg:!0,lightText:!1,lightTextDesc:!0,topLine:"DATA ANALYTICS",headline:"Every trancsition is stored on our clound database",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",buttonLabel:"Sign up now",imgStart:"start",img:"images/svg-8.svg",alt:"credit-card"};var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,I),l.a.createElement(v,T))},F={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"ABOUT US",headline:"We are a website development community with reactJS ",description:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook",buttonLabel:"About ReactJS",imgStart:"start",img:"images/svg-5.svg",alt:"vault"},C={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"MISSION US",headline:"Build single page application website",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",buttonLabel:"SIGN UP NOW",imgStart:"",img:"images/svg-2.svg",alt:"credit-card"};var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,F),l.a.createElement(v,C))};var D=function(){return l.a.createElement(m.a,null,l.a.createElement(E,null),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/",exact:!0,component:k}),l.a.createElement(h.a,{path:"/feature",component:L}),l.a.createElement(h.a,{path:"/about",component:A}),l.a.createElement(h.a,{path:"/sign-up",component:B})),l.a.createElement(_,null))};i.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.a2448f98.chunk.js.map