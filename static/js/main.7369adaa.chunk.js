(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,a,t){},135:function(e,a,t){},136:function(e,a,t){},137:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},140:function(e,a,t){},141:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),r=t.n(c),m=(t(21),t(8));t(56);function i(){return l.a.createElement("div",{className:"head mid"},l.a.createElement(m.b,{to:"/"},l.a.createElement("h2",null," Nastya Trubitsina ")))}t(61);function u(e){return l.a.createElement("div",{className:"bady"},e.children)}t(62);function o(e){return l.a.createElement("div",{className:"b1"},e.children)}t(63);function s(e){return l.a.createElement("div",{className:"b2"},e.children)}t(64);function E(e){return l.a.createElement("div",{className:"b3"},e.children)}t(65);function f(e){return l.a.createElement("div",{className:"b4"},e.children)}t(66);function p(e){e.activeRoute;return l.a.createElement("ul",{className:"flex-container"},l.a.createElement("li",{className:"flex-item"},l.a.createElement(m.c,{to:"/portfolio",activeClassName:"active"}," ","Portfolio"," ")),l.a.createElement("li",{className:"flex-item"},l.a.createElement(m.c,{to:"/price",activeClassName:"active"}," ","Price"," ")),l.a.createElement("li",{className:"flex-item"},l.a.createElement(m.c,{to:"/contacts",activeClassName:"active"}," ","Contacts"," ")))}t(67);function d(){return l.a.createElement("div",{className:"foot"},l.a.createElement("div",null,l.a.createElement("a",{href:"https://vk.com/club86405915"},l.a.createElement("img",{src:"./social/vk.png"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://www.instagram.com/nastya_trubitsina/?hl=ru"},l.a.createElement("img",{src:"./social/inst.png"}))),l.a.createElement("div",null,l.a.createElement("a",{href:"https://t-do.ru/Nastya14081994"},l.a.createElement("img",{src:"./social/telegram.png"}))))}t(68);function v(){return l.a.createElement("div",{className:"cont"},l.a.createElement("div",{className:"cont-flex"},l.a.createElement("div",{className:"cont-flex-item"},l.a.createElement("img",{className:"cont-img",src:"social/cont.jpg"})),l.a.createElement("div",{className:"cont-text cont-flex-item"},l.a.createElement("div",null,l.a.createElement("p",null,"\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u043c\u043d\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u043b\u044e\u0431\u044b\u043c \u0443\u0434\u043e\u0431\u043d\u044b\u043c \u0434\u043b\u044f \u0432\u0430\u0441 \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c! \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c, \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u0435 \u0438\u043b\u0438 \u043d\u0430 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435, \u0430 \u0442\u0430\u043a \u0436\u0435 \u043d\u0430\u0439\u0442\u0438 \u043c\u0435\u043d\u044f \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445.")," ",l.a.createElement("br",null)),l.a.createElement("div",{className:"cont-flex-item"},l.a.createElement("div",{className:"num"},l.a.createElement("div",{className:"mail"},l.a.createElement("a",{href:"mailto:atrubicina9@gmail.com"},"atrubicina9@gmail.com")," "),l.a.createElement("div",null,"||"),l.a.createElement("div",null,l.a.createElement("p",null," +7 (977) 610 89 69 ")))))))}t(15);var g=t(50),b=t(32),h=t(18);function N(e,a){return new Array(a).fill(0).map(function(e,a){return a+1}).map(function(a){return"/photo/".concat(e,"/ ").concat(a,".jpg")}).map(function(e){return{src:e}})}var C={"001":N(1,18),"002":N(2,17),"003":N(3,17),"004":N(4,26),"005":N(5,21),"006":N(6,22),"007":N(7,14),"008":N(8,16),"009":N(9,12),"010":N(10,16),"011":N(11,5),"012":N(12,11),"013":N(13,13),"014":N(14,19),"015":N(15,19),"016":N(16,12),"017":N(17,15),"018":N(18,11)};t(134),t(135);function j(e){var a=e.images,t=void 0===a?[]:a,n=e.onClick;return l.a.createElement("ul",{className:"GalRow flexy-container"},t.map(function(e,a){return l.a.createElement("li",{className:"flexy-item",onClick:function(){return n(a)}},l.a.createElement("img",{src:e.src,alt:""}))}))}t(136);function k(){return l.a.createElement("button",{className:"top",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})}function x(e){var a=e.match,t=C[a.params.album];console.log(t,a);var c=Object(n.useState)(0),r=Object(b.a)(c,2),m=r[0],i=r[1],u=Object(n.useState)(!1),o=Object(b.a)(u,2),s=o[0],E=o[1];return l.a.createElement("div",{className:"photo-gal"},l.a.createElement(j,{images:t,onClick:function(e){i(e),E(!0)}}),l.a.createElement(h.b,null,s?l.a.createElement(h.a,{onClose:function(){i(0),E(!1)}},l.a.createElement(h.c,{currentIndex:m,views:t.map(function(e){return Object(g.a)({},e,{width:"100%"})})})):null),l.a.createElement(k,null))}var w=t(9);t(137);function y(e){var a=e.urls,t=e.number,n=e.onClick;return l.a.createElement("figure",{className:"album-gal eye",onClick:function(){return n(t)}},l.a.createElement("div",{className:"gal-reponsive eye"},l.a.createElement("a",null,l.a.createElement("img",{className:"img-reponsive",src:a}))),l.a.createElement("figcaption",null," ",t," "))}t(138);function O(e){return l.a.createElement("div",{className:"gal"},e.children)}function P(e){function a(a){e.history.push("/album/"+a)}return l.a.createElement(O,null,l.a.createElement(y,{urls:"/main/001.jpg",number:"001",onClick:a}),l.a.createElement(y,{urls:"/main/002.jpg",number:"002",onClick:a}),l.a.createElement(y,{urls:"/main/003.jpg",number:"003",onClick:a}),l.a.createElement(y,{urls:"/main/004.jpg",number:"004",onClick:a}),l.a.createElement(y,{urls:"/main/005.jpg",number:"005",onClick:a}),l.a.createElement(y,{urls:"/main/006.jpg",number:"006",onClick:a}),l.a.createElement(y,{urls:"/main/007.jpg",number:"007",onClick:a}),l.a.createElement(y,{urls:"/main/008.jpg",number:"008",onClick:a}),l.a.createElement(y,{urls:"/main/009.jpg",number:"009",onClick:a}),l.a.createElement(y,{urls:"/main/010.jpg",number:"010",onClick:a}),l.a.createElement(y,{urls:"/main/011.jpg",number:"011",onClick:a}),l.a.createElement(y,{urls:"/main/012.jpg",number:"012",onClick:a}),l.a.createElement(y,{urls:"/main/013.jpg",number:"013",onClick:a}),l.a.createElement(y,{urls:"/main/014.jpg",number:"014",onClick:a}),l.a.createElement(y,{urls:"/main/015.jpg",number:"015",onClick:a}),l.a.createElement(y,{urls:"/main/016.jpg",number:"016",onClick:a}),l.a.createElement(y,{urls:"/main/017.jpg",number:"017",onClick:a}),l.a.createElement(y,{urls:"/main/018.jpg",number:"018",onClick:a}))}t(139);function I(e){var a=e.items,t=void 0===a?[]:a;return l.a.createElement("ul",{className:"card-ul"},t.map(function(e){return l.a.createElement("li",{className:"card-li"},e)}))}t(140);function J(e){var a=e.children,t=e.img,n=e.head,c=e.price;return l.a.createElement("div",{className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:t}),l.a.createElement("p",{class:"text"},n)),l.a.createElement("div",{className:"center-text"},a),l.a.createElement("p",{className:"rub"},c))}t(141);function R(e){return l.a.createElement("div",{className:"price"}," ",e.children)}function S(){return l.a.createElement(R,null,l.a.createElement(J,{img:"/social/love.jpg",head:"\u041b\u0410\u0412\u0421\u0422\u041e\u0420\u0418 \u0418 \u0421\u0415\u041c\u0415\u0419\u041d\u0410\u042f \u0421\u042a\u0415\u041c\u041a\u0410",price:"\u043e\u0442 3000\u20bd"},l.a.createElement(I,{items:["\u0441\u0440\u043e\u043a \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0434\u043e 15 \u0434\u043d\u0435\u0439 ","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0442\u0438\u043b\u0438\u0441\u0442\u0438\u043a\u0438 \u0441\u044a\u0435\u043c\u043a\u0438","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u043e\u0434\u0435\u0436\u0434\u044b \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043e\u0432","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432"," \u0430\u0440\u0435\u043d\u0434\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e"]})),l.a.createElement(J,{img:"/social/ind.jpg",head:"\u0418\u041d\u0414\u0418\u0412\u0418\u0414\u0423\u0410\u041b\u042c\u041d\u0410 \u0421\u042a\u0415\u041c\u041a\u0410",price:"\u043e\u0442 2000\u20bd"},l.a.createElement(I,{items:["\u0441\u0440\u043e\u043a \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0434\u043e 10 \u0434\u043d\u0435\u0439","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0442\u0438\u043b\u0438\u0441\u0442\u0438\u043a\u0438 \u0441\u044a\u0435\u043c\u043a\u0438","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u043e\u0434\u0435\u0436\u0434\u044b \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043e\u0432","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432","\u0430\u0440\u0435\u043d\u0434\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e"]})),l.a.createElement(J,{img:"/social/hud.jpg",head:"\u0425\u0423\u0414\u041e\u0416\u0415\u0421\u0422\u0412\u0415\u041d\u041d\u0410\u042f \u0421\u042a\u0415\u041c\u041a\u0410",price:"\u043e\u0442 3000\u20bd"},l.a.createElement(I,{items:["\u0441\u0440\u043e\u043a \u0433\u043e\u0442\u043e\u0432\u043d\u043e\u0441\u0442\u0438 \u0434\u043e 10 \u0434\u043d\u0435\u0439","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0441\u0442\u0438\u043b\u0438\u0441\u0442\u0438\u043a\u0438 \u0441\u044a\u0435\u043c\u043a\u0438","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u043e\u0434\u0435\u0436\u0434\u044b \u0438 \u0430\u043a\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u043e\u0432","\u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u043f\u043e\u0434\u0431\u043e\u0440\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432","\u0430\u0440\u0435\u043d\u0434\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u0439 \u043e\u043f\u043b\u0430\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e"]})))}t(142);function T(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home-flex"},l.a.createElement("div",{className:"home-text home-flex-item"},l.a.createElement("div",null,l.a.createElement("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u0441\u0432\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043c\u044b \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u043c \u0431\u0443\u0434\u0442\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e \u0440\u0430\u0437\u043d\u044b\u0435 \u043b\u044e\u0434\u0438. \u0421\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0435, \u043f\u0435\u0447\u0430\u043b\u044c\u043d\u044b\u0435, \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435, \u0443\u0441\u0442\u0430\u043b\u044b\u0435, \u043f\u043e\u0445\u0443\u0434\u0435\u0432\u0448\u0438\u0435 \u0438\u043b\u0438 \u043d\u0430\u0431\u0440\u0430\u0432\u0448\u0438\u0435 \u043f\u0430\u0440\u0443 \u0443\u044e\u0442\u043d\u044b\u0445 \u043a\u0438\u043b\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0432, \u043e\u0434\u0438\u043d\u043e\u043a\u0438\u0435 \u0438\u043b\u0438 \u0432\u043b\u044e\u0431\u043b\u0435\u043d\u043d\u044b\u0435. \u0420\u0430\u0437\u043d\u044b\u0435. \u0418 \u0437\u0434\u043e\u0440\u043e\u0432\u043e, \u043a\u043e\u0433\u0434\u0430 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0432\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043b\u044e\u0431\u043e\u043c\u0443 \u0441\u0435\u0431\u0435, \u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u0438 \u0443\u043b\u044b\u0431\u043d\u0443\u0442\u044c\u0441\u044f. \u0418\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u043c\u043d\u0435 \u0438 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f \u0432 \u0441\u044a\u0435\u043c\u043a\u0435."))),l.a.createElement("div",{className:"home-text home-flex-item part2"},l.a.createElement("br",null),l.a.createElement("p",null,"\u0427\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u0440\u0430\u0437\u0438\u0442\u044c \u043c\u043e\u043c\u0435\u043d\u0442."),l.a.createElement("br",null)),l.a.createElement("div",{className:"home-text home-flex-item part2"},l.a.createElement("p",null,"\u0418 \u044d\u0442\u043e\u0442 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0441\u0442\u0430\u043d\u0435\u0442\u0441\u044f \u043d\u0430\u0432\u0441\u0435\u0433\u0434\u0430."),l.a.createElement("br",null)),l.a.createElement("div",{className:"home-flex-item button-potfolio"},l.a.createElement(m.b,{to:"/portfolio"},l.a.createElement("a",null,"Portfolio")))))}var A=document.getElementById("root");r.a.render(l.a.createElement(function(){return l.a.createElement(m.a,null,l.a.createElement(u,null,l.a.createElement(o,null,l.a.createElement(i,null)),l.a.createElement(s,null,l.a.createElement(p,null)),l.a.createElement(E,null,l.a.createElement(w.a,{exact:!0,path:"/",component:T}),l.a.createElement(w.a,{path:"/portfolio",component:P}),l.a.createElement(w.a,{path:"/price",component:S}),l.a.createElement(w.a,{path:"/contacts",component:v}),l.a.createElement(w.a,{path:"/album/:album",component:x})),l.a.createElement(f,null,l.a.createElement(d,null))))},null),A)},21:function(e,a,t){},51:function(e,a,t){e.exports=t(143)},56:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.7369adaa.chunk.js.map