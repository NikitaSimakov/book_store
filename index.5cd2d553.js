function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var o={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)o[e[n]]=t[e[n]]},r=function(t){var e=o[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.5cd2d553.js","jSvKf":"save.6c01ffdb.png","4TSHR":"hope.bd00413e.png","fUOfh":"united.cc95aceb.png","av20G":"medical.f6b765e9.png","jOeRC":"sans.9ae04422.png","afm35":"razom.89d0c3cb.png","Zg8LA":"hunger.276f70ea.png","27eMA":"vision.e98cd69c.png","bJr8b":"prytula.214a3300.png","5UbS1":"index.555d0e04.css"}'));var o;o=new URL(r("kyEFX").resolve("jSvKf"),import.meta.url).toString();const a=new URL(o);var u;u=new URL(r("kyEFX").resolve("4TSHR"),import.meta.url).toString();const l=new URL(u);var s;s=new URL(r("kyEFX").resolve("fUOfh"),import.meta.url).toString();const c=new URL(s);var f;f=new URL(r("kyEFX").resolve("av20G"),import.meta.url).toString();const d=new URL(f);var p;p=new URL(r("kyEFX").resolve("jOeRC"),import.meta.url).toString();const v=new URL(p);var m;m=new URL(r("kyEFX").resolve("afm35"),import.meta.url).toString();const h=new URL(m);var g;g=new URL(r("kyEFX").resolve("Zg8LA"),import.meta.url).toString();const y=new URL(g);var b;b=new URL(r("kyEFX").resolve("27eMA"),import.meta.url).toString();const w=new URL(b);var x;x=new URL(r("kyEFX").resolve("bJr8b"),import.meta.url).toString();const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:a},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:l},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:c},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:d},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:v},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:h},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:y},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:w},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(x)}];var M=window,E=M.requestAnimationFrame||M.webkitRequestAnimationFrame||M.mozRequestAnimationFrame||M.msRequestAnimationFrame||function(t){return setTimeout(t,16)},T=window,S=T.cancelAnimationFrame||T.mozCancelAnimationFrame||function(t){clearTimeout(t)};function L(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function R(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function A(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function H(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var k=document.documentElement;function N(t){var e="";return t.fake&&(e=k.style.overflow,t.style.background="",t.style.overflow=k.style.overflow="hidden",k.appendChild(t)),e}function O(t,e){t.fake&&(t.remove(),k.style.overflow=e,k.offsetHeight)}function B(){var t=document,e=H(),n=N(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var o,a="(10px * 10)",u=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(o=u[l],i.style.width=o,100===i.offsetWidth){r=o.replace(a,"");break}}catch(t){}return e.fake?O(e,n):i.remove(),r}function D(){var t,e=document,n=H(),i=N(n),r=e.createElement("div"),o=e.createElement("div"),a="";r.className="tns-t-subp2",o.className="tns-t-ct";for(var u=0;u<70;u++)a+="<div></div>";return o.innerHTML=a,r.appendChild(o),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?O(n,i):r.remove(),t}function F(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=H(),i=N(n),r=e.createElement("div"),o=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",r.className="tns-mq-test",n.appendChild(o),n.appendChild(r),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?O(n,i):r.remove(),"absolute"===t}function P(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function I(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}function _(t){return("insertRule"in t?t.cssRules:t.rules).length}function U(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var W="classList"in document.createElement("_"),z=W?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},j=W?function(t,e){z(t,e)||t.classList.add(e)}:function(t,e){z(t,e)||(t.className+=" "+e)},q=W?function(t,e){z(t,e)&&t.classList.remove(e)}:function(t,e){z(t,e)&&(t.className=t.className.replace(e,""))};function X(t,e){return t.hasAttribute(e)}function V(t,e){return t.getAttribute(e)}function G(t){return void 0!==t.item}function K(t,e){if(t=G(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function J(t,e){t=G(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function Q(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Y(t,e){"none"!==t.style.display&&(t.style.display="none")}function Z(t,e){"none"===t.style.display&&(t.style.display="")}function $(t){return"none"!==window.getComputedStyle(t).display}function tt(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),r=(t.length,0);r<t.length;r++){var o=t[r];if(void 0!==i.style[o])return o}return!1}function et(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=H(),r=N(i),o=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(a),i.fake?O(i,r):o.remove(),void 0!==e&&e.length>0&&"none"!==e}function nt(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var it=!1;try{var rt=Object.defineProperty({},"passive",{get:function(){it=!0}});window.addEventListener("test",null,rt)}catch(t){}var ot=!!it&&{passive:!0};function at(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&ot;t.addEventListener(i,e[i],r)}}function ut(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&ot;t.removeEventListener(n,e[n],i)}}function lt(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var st,ct=function(t){t=L({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},o=t.useLocalStorage;if(o){var a=navigator.userAgent,u=new Date;try{(r=n.localStorage)?(r.setItem(u,u),o=r.getItem(u)==u,r.removeItem(u)):o=!1,o||(r={})}catch(t){o=!1}o&&(r.tnsApp&&r.tnsApp!==a&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){r.removeItem(t)})),localStorage.tnsApp=a)}var l=r.tC?R(r.tC):A(r,"tC",B(),o),s=r.tPL?R(r.tPL):A(r,"tPL",D(),o),c=r.tMQ?R(r.tMQ):A(r,"tMQ",F(),o),f=r.tTf?R(r.tTf):A(r,"tTf",tt("transform"),o),d=r.t3D?R(r.t3D):A(r,"t3D",et(f),o),p=r.tTDu?R(r.tTDu):A(r,"tTDu",tt("transitionDuration"),o),v=r.tTDe?R(r.tTDe):A(r,"tTDe",tt("transitionDelay"),o),m=r.tADu?R(r.tADu):A(r,"tADu",tt("animationDuration"),o),h=r.tADe?R(r.tADe):A(r,"tADe",tt("animationDelay"),o),g=r.tTE?R(r.tTE):A(r,"tTE",nt(p,"Transition"),o),y=r.tAE?R(r.tAE):A(r,"tAE",nt(m,"Animation"),o),b=n.console&&"function"==typeof n.console.warn,w=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],x={};if(w.forEach((function(n){if("string"==typeof t[n]){var i=t[n],r=e.querySelector(i);if(x[n]=i,!r||!r.nodeName)return void(b&&console.warn("Can't find",t[n]));t[n]=r}})),!(t.container.children.length<1)){var C=t.responsive,M=t.nested,T="carousel"===t.mode;if(C){0 in C&&(t=L(t,C[0]),delete C[0]);var H={};for(var k in C){var N=C[k];N="number"==typeof N?{items:N}:N,H[k]=N}C=H,H=null}if(T||function t(e){for(var n in e)T||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!T){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var O=t.animateIn,W=t.animateOut,G=t.animateDelay,it=t.animateNormal}var rt,ot,st="horizontal"===t.axis,ft=e.createElement("div"),dt=e.createElement("div"),pt=t.container,vt=pt.parentNode,mt=pt.outerHTML,ht=pt.children,gt=ht.length,yt=Dn(),bt=!1;C&&ni(),T&&(pt.className+=" tns-vpfix");var wt,xt,Ct,Mt,Et,Tt,St,Lt,Rt,At=t.autoWidth,Ht=Un("fixedWidth"),kt=Un("edgePadding"),Nt=Un("gutter"),Ot=In(),Bt=Un("center"),Dt=At?1:Math.floor(Un("items")),Ft=Un("slideBy"),Pt=t.viewportMax||t.fixedWidthViewportWidth,It=Un("arrowKeys"),_t=Un("speed"),Ut=t.rewind,Wt=!Ut&&t.loop,zt=Un("autoHeight"),jt=Un("controls"),qt=Un("controlsText"),Xt=Un("nav"),Vt=Un("touch"),Gt=Un("mouseDrag"),Kt=Un("autoplay"),Jt=Un("autoplayTimeout"),Qt=Un("autoplayText"),Yt=Un("autoplayHoverPause"),Zt=Un("autoplayResetOnVisibility"),$t=(St=null,Lt=Un("nonce"),Rt=document.createElement("style"),St&&Rt.setAttribute("media",St),Lt&&Rt.setAttribute("nonce",Lt),document.querySelector("head").appendChild(Rt),Rt.sheet?Rt.sheet:Rt.styleSheet),te=t.lazyload,ee=t.lazyloadSelector,ne=[],ie=Wt?(Et=function(){if(At||Ht&&!Pt)return gt-1;var e=Ht?"fixedWidth":"items",n=[];if((Ht||t[e]<gt)&&n.push(t[e]),C)for(var i in C){var r=C[i][e];r&&(Ht||r<gt)&&n.push(r)}return n.length||n.push(0),Math.ceil(Ht?Pt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Tt=T?Math.ceil((5*Et-gt)/2):4*Et-gt,Tt=Math.max(Et,Tt),_n("edgePadding")?Tt+1:Tt):0,re=T?gt+2*ie:gt+ie,oe=!(!Ht&&!At||Wt),ae=Ht?Ri():null,ue=!T||!Wt,le=st?"left":"top",se="",ce="",fe=Ht?function(){return Bt&&!Wt?gt-1:Math.ceil(-ae/(Ht+Nt))}:At?function(){for(var t=0;t<re;t++)if(wt[t]>=-ae)return t}:function(){return Bt&&T&&!Wt?gt-1:Wt||T?Math.max(0,re-Math.ceil(Dt)):re-1},de=Nn(Un("startIndex")),pe=de,ve=(kn(),0),me=At?null:fe(),he=t.preventActionWhenRunning,ge=t.swipeAngle,ye=!ge||"?",be=!1,we=t.onInit,xe=new lt,Ce=" tns-slider tns-"+t.mode,Me=pt.id||(Mt=window.tnsId,window.tnsId=Mt?Mt+1:1,"tns"+window.tnsId),Ee=Un("disable"),Te=!1,Se=t.freezable,Le=!(!Se||At)&&ei(),Re=!1,Ae={click:Pi,keydown:function(t){t=Xi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Pi(t,-1):Ze.disabled||Pi(t,1))}},He={click:function(t){if(be){if(he)return;Di()}var e=Vi(t=Xi(t));for(;e!==nn&&!X(e,"data-nav");)e=e.parentNode;if(X(e,"data-nav")){var n=un=Number(V(e,"data-nav")),i=Ht||At?n*gt/on:n*Dt;Fi(Ie?n:Math.min(Math.ceil(i),gt-1),t),ln===n&&(vn&&zi(),un=-1)}},keydown:function(t){t=Xi(t);var n=e.activeElement;if(!X(n,"data-nav"))return;var r=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),o=Number(V(n,"data-nav"));r>=0&&(0===r?o>0&&qi(en[o-1]):1===r?o<on-1&&qi(en[o+1]):(un=o,Fi(o,t)))}},ke={mouseover:function(){vn&&(_i(),mn=!0)},mouseout:function(){mn&&(Ii(),mn=!1)}},Ne={visibilitychange:function(){e.hidden?vn&&(_i(),gn=!0):gn&&(Ii(),gn=!1)}},Oe={keydown:function(t){t=Xi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Be={touchstart:Qi,touchmove:Yi,touchend:$i,touchcancel:$i},De={mousedown:Qi,mousemove:Yi,mouseup:$i,mouseleave:$i},Fe=_n("controls"),Pe=_n("nav"),Ie=!!At||t.navAsThumbnails,_e=_n("autoplay"),Ue=_n("touch"),We=_n("mouseDrag"),ze="tns-slide-active",je="tns-slide-cloned",qe="tns-complete",Xe={load:function(t){fi(Vi(t))},error:function(t){e=Vi(t),j(e,"failed"),di(e);var e}},Ve="force"===t.preventScrollOnTouch;if(Fe)var Ge,Ke,Je=t.controlsContainer,Qe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ze=t.nextButton,$e=t.prevButton?t.prevButton.outerHTML:"",tn=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var en,nn=t.navContainer,rn=t.navContainer?t.navContainer.outerHTML:"",on=At?gt:er(),an=0,un=-1,ln=Bn(),sn=ln,cn="tns-nav-active",fn="Carousel Page ",dn=" (Current Slide)";if(_e)var pn,vn,mn,hn,gn,yn="forward"===t.autoplayDirection?1:-1,bn=t.autoplayButton,wn=t.autoplayButton?t.autoplayButton.outerHTML:"",xn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ue||We)var Cn,Mn,En={},Tn={},Sn=!1,Ln=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Hn(Ee||Le),f&&(le=f,se="translate",d?(se+=st?"3d(":"3d(0px, ",ce=st?", 0px, 0px)":", 0px)"):(se+=st?"X(":"Y(",ce=")")),T&&(pt.className=pt.className.replace("tns-vpfix","")),function(){_n("gutter");ft.className="tns-outer",dt.className="tns-inner",ft.id=Me+"-ow",dt.id=Me+"-iw",""===pt.id&&(pt.id=Me);Ce+=s||At?" tns-subpixel":" tns-no-subpixel",Ce+=l?" tns-calc":" tns-no-calc",At&&(Ce+=" tns-autowidth");Ce+=" tns-"+t.axis,pt.className+=Ce,T?((rt=e.createElement("div")).id=Me+"-mw",rt.className="tns-ovh",ft.appendChild(rt),rt.appendChild(dt)):ft.appendChild(dt);if(zt){(rt||dt).className+=" tns-ah"}if(vt.insertBefore(ft,pt),dt.appendChild(pt),U(ht,(function(t,e){j(t,"tns-item"),t.id||(t.id=Me+"-item"+e),!T&&it&&j(t,it),K(t,{"aria-hidden":"true",tabindex:"-1"})})),ie){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),r=ie;r--;){var o=r%gt,a=ht[o].cloneNode(!0);if(j(a,je),J(a,"id"),i.insertBefore(a,i.firstChild),T){var u=ht[gt-1-o].cloneNode(!0);j(u,je),J(u,"id"),n.appendChild(u)}}pt.insertBefore(n,pt.firstChild),pt.appendChild(i),ht=pt.children}}(),function(){if(!T)for(var e=de,i=de+Math.min(gt,Dt);e<i;e++){var r=ht[e];r.style.left=100*(e-de)/Dt+"%",j(r,O),q(r,it)}st&&(s||At?(P($t,"#"+Me+" > .tns-item","font-size:"+n.getComputedStyle(ht[0]).fontSize+";",_($t)),P($t,"#"+Me,"font-size:0;",_($t))):T&&U(ht,(function(t,e){t.style.marginLeft=function(t){return l?l+"("+100*t+"% / "+re+")":100*t/re+"%"}(e)})));if(c){if(p){var o=rt&&t.autoHeight?Vn(t.speed):"";P($t,"#"+Me+"-mw",o,_($t))}o=Wn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),P($t,"#"+Me+"-iw",o,_($t)),T&&(o=st&&!At?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",p&&(o+=Vn(_t)),P($t,"#"+Me,o,_($t))),o=st&&!At?jn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=qn(t.gutter)),T||(p&&(o+=Vn(_t)),m&&(o+=Gn(_t))),o&&P($t,"#"+Me+" > .tns-item",o,_($t))}else{T&&zt&&(rt.style[p]=_t/1e3+"s"),dt.style.cssText=Wn(kt,Nt,Ht,zt),T&&st&&!At&&(pt.style.width=zn(Ht,Nt,Dt));o=st&&!At?jn(Ht,Nt,Dt):"";Nt&&(o+=qn(Nt)),o&&P($t,"#"+Me+" > .tns-item",o,_($t))}if(C&&c)for(var a in C){a=parseInt(a);var u=C[a],f=(o="",""),d="",v="",h="",g=At?null:Un("items",a),y=Un("fixedWidth",a),b=Un("speed",a),w=Un("edgePadding",a),x=Un("autoHeight",a),M=Un("gutter",a);p&&rt&&Un("autoHeight",a)&&"speed"in u&&(f="#"+Me+"-mw{"+Vn(b)+"}"),("edgePadding"in u||"gutter"in u)&&(d="#"+Me+"-iw{"+Wn(w,M,y,b,x)+"}"),T&&st&&!At&&("fixedWidth"in u||"items"in u||Ht&&"gutter"in u)&&(v="width:"+zn(y,M,g)+";"),p&&"speed"in u&&(v+=Vn(b)),v&&(v="#"+Me+"{"+v+"}"),("fixedWidth"in u||Ht&&"gutter"in u||!T&&"items"in u)&&(h+=jn(y,M,g)),"gutter"in u&&(h+=qn(M)),!T&&"speed"in u&&(p&&(h+=Vn(b)),m&&(h+=Gn(b))),h&&(h="#"+Me+" > .tns-item{"+h+"}"),(o=f+d+v+h)&&$t.insertRule("@media (min-width: "+a/16+"em) {"+o+"}",$t.cssRules.length)}}(),Kn();var Rn=Wt?T?function(){var t=ve,e=me;t+=Ft,e-=Ft,kt?(t+=1,e-=1):Ht&&(Ot+Nt)%(Ht+Nt)&&(e-=1),ie&&(de>e?de-=gt:de<t&&(de+=gt))}:function(){if(de>me)for(;de>=ve+gt;)de-=gt;else if(de<ve)for(;de<=me-gt;)de+=gt}:function(){de=Math.max(ve,Math.min(me,de))},An=T?function(){var t,e,n,i,r,o,a,u,l,s,c;Si(pt,""),p||!_t?(ki(),_t&&$(pt)||Di()):(t=pt,e=le,n=se,i=ce,r=Ai(),o=_t,a=Di,u=Math.min(o,10),l=r.indexOf("%")>=0?"%":"px",r=r.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(r-s)/o*u,setTimeout((function r(){o-=u,s+=c,t.style[e]=n+s+l+i,o>0?setTimeout(r,u):a()}),u)),st||tr()}:function(){ne=[];var t={};t[g]=t[y]=Di,ut(ht[pe],t),at(ht[de],t),Ni(pe,O,W,!0),Ni(de,it,O),g&&y&&_t&&$(pt)||Di()};return{version:"2.9.4",getInfo:ir,events:xe,goTo:Fi,play:function(){Kt&&!vn&&(Wi(),hn=!1)},pause:function(){vn&&(zi(),hn=!0)},isOn:bt,updateSliderHeight:yi,refresh:Kn,destroy:function(){if($t.disabled=!0,$t.ownerNode&&$t.ownerNode.remove(),ut(n,{resize:$n}),It&&ut(e,Oe),Je&&ut(Je,Ae),nn&&ut(nn,He),ut(pt,ke),ut(pt,Ne),bn&&ut(bn,{click:ji}),Kt&&clearInterval(pn),T&&g){var i={};i[g]=Di,ut(pt,i)}Vt&&ut(pt,Be),Gt&&ut(pt,De);var r=[mt,Qe,$e,tn,rn,wn];for(var o in w.forEach((function(e,n){var i="container"===e?ft:t[e];if("object"==typeof i&&i){var o=!!i.previousElementSibling&&i.previousElementSibling,a=i.parentNode;i.outerHTML=r[n],t[e]=o?o.nextElementSibling:a.firstElementChild}})),w=O=W=G=it=st=ft=dt=pt=vt=mt=ht=gt=ot=yt=At=Ht=kt=Nt=Ot=Dt=Ft=Pt=It=_t=Ut=Wt=zt=$t=te=wt=ne=ie=re=oe=ae=ue=le=se=ce=fe=de=pe=ve=me=ge=ye=be=we=xe=Ce=Me=Ee=Te=Se=Le=Re=Ae=He=ke=Ne=Oe=Be=De=Fe=Pe=Ie=_e=Ue=We=ze=qe=Xe=xt=jt=qt=Je=Qe=Ye=Ze=Ge=Ke=Xt=nn=rn=en=on=an=un=ln=sn=cn=fn=dn=Kt=Jt=yn=Qt=Yt=bn=wn=Zt=xn=pn=vn=mn=hn=gn=En=Tn=Cn=Sn=Mn=Ln=Vt=Gt=null,this)"rebuild"!==o&&(this[o]=null);bt=!1},rebuild:function(){return ct(L(t,x))}}}function Hn(t){t&&(jt=Xt=Vt=Gt=It=Kt=Yt=Zt=!1)}function kn(){for(var t=T?de-ie:de;t<0;)t+=gt;return t%gt+1}function Nn(t){return t=t?Math.max(0,Math.min(Wt?gt-1:gt-Dt,t)):0,T?t+ie:t}function On(t){for(null==t&&(t=de),T&&(t-=ie);t<0;)t+=gt;return Math.floor(t%gt)}function Bn(){var t,e=On();return t=Ie?e:Ht||At?Math.ceil((e+1)*on/gt-1):Math.floor(e/Dt),!Wt&&T&&de===me&&(t=on-1),t}function Dn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Fn(t){return"top"===t?"afterbegin":"beforeend"}function Pn(t){if(null!=t){var n,i,r=e.createElement("div");return t.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||Pn(t.parentNode)}}function In(){var t=kt?2*kt-Nt:0;return Pn(vt)-t}function _n(e){if(t[e])return!0;if(C)for(var n in C)if(C[n][e])return!0;return!1}function Un(e,n){if(null==n&&(n=yt),"items"===e&&Ht)return Math.floor((Ot+Nt)/(Ht+Nt))||1;var i=t[e];if(C)for(var r in C)n>=parseInt(r)&&e in C[r]&&(i=C[r][e]);return"slideBy"===e&&"page"===i&&(i=Un("items")),T||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Wn(t,e,n,i,r){var o="";if(void 0!==t){var a=t;e&&(a-=e),o=st?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(st?u+" 0 0":"0 "+u+" 0")+";"}return!T&&r&&p&&i&&(o+=Vn(i)),o}function zn(t,e,n){return t?(t+e)*re+"px":l?l+"("+100*re+"% / "+n+")":100*re/n+"%"}function jn(t,e,n){var i;if(t)i=t+e+"px";else{T||(n=Math.floor(n));var r=T?re:n;i=l?l+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==M?i+";":i+" !important;"}function qn(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function Xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return Xn(p,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return Xn(m,17)+"animation-duration:"+t/1e3+"s;"}function Kn(){if(_n("autoHeight")||At||!st){var t=pt.querySelectorAll("img");U(t,(function(t){var e=t.src;te||(e&&e.indexOf("data:image")<0?(t.src="",at(t,Xe),j(t,"loading"),t.src=e):fi(t))})),E((function(){mi(Q(t),(function(){xt=!0}))})),_n("autoHeight")&&(t=pi(de,Math.min(de+Dt-1,re-1))),te?Jn():E((function(){mi(Q(t),Jn)}))}else T&&Hi(),Yn(),Zn()}function Jn(){if(At&&gt>1){var t=Wt?de:gt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){st&&!At||(bi(),At?(ae=Ri(),Se&&(Le=ei()),me=fe(),Hn(Ee||Le)):tr()),T&&Hi(),Yn(),Zn()}function Yn(){if(wi(),ft.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+li()+"</span>  of "+gt+"</div>"),Ct=ft.querySelector(".tns-liveregion .current"),_e){var e=Kt?"stop":"start";bn?K(bn,{"data-action":e}):t.autoplayButtonOutput&&(ft.insertAdjacentHTML(Fn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+xn[0]+e+xn[1]+Qt[0]+"</button>"),bn=ft.querySelector("[data-action]")),bn&&at(bn,{click:ji}),Kt&&(Wi(),Yt&&at(pt,ke),Zt&&at(pt,Ne))}if(Pe){if(nn)K(nn,{"aria-label":"Carousel Pagination"}),U(en=nn.children,(function(t,e){K(t,{"data-nav":e,tabindex:"-1","aria-label":fn+(e+1),"aria-controls":Me})}));else{for(var n="",i=Ie?"":'style="display:none"',r=0;r<gt;r++)n+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+Me+'" '+i+' aria-label="'+fn+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ft.insertAdjacentHTML(Fn(t.navPosition),n),nn=ft.querySelector(".tns-nav"),en=nn.children}if(nr(),p){var o=p.substring(0,p.length-18).toLowerCase(),a="transition: all "+_t/1e3+"s";o&&(a="-"+o+"-"+a),P($t,"[aria-controls^="+Me+"-item]",a,_($t))}K(en[ln],{"aria-label":fn+(ln+1)+dn}),J(en[ln],"tabindex"),j(en[ln],cn),at(nn,He)}Fe&&(Je||Ye&&Ze||(ft.insertAdjacentHTML(Fn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Me+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Me+'">'+qt[1]+"</button></div>"),Je=ft.querySelector(".tns-controls")),Ye&&Ze||(Ye=Je.children[0],Ze=Je.children[1]),t.controlsContainer&&K(Je,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&K([Ye,Ze],{"aria-controls":Me,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(K(Ye,{"data-controls":"prev"}),K(Ze,{"data-controls":"next"})),Ge=Ci(Ye),Ke=Ci(Ze),Ti(),Je?at(Je,Ae):(at(Ye,Ae),at(Ze,Ae))),ii()}function Zn(){if(T&&g){var i={};i[g]=Di,at(pt,i)}Vt&&at(pt,Be,t.preventScrollOnTouch),Gt&&at(pt,De),It&&at(e,Oe),"inner"===M?xe.on("outerResized",(function(){ti(),xe.emit("innerLoaded",ir())})):(C||Ht||At||zt||!st)&&at(n,{resize:$n}),zt&&("outer"===M?xe.on("innerLoaded",vi):Ee||vi()),ci(),Ee?ai():Le&&oi(),xe.on("indexChanged",hi),"inner"===M&&xe.emit("innerLoaded",ir()),"function"==typeof we&&we(ir()),bt=!0}function $n(t){E((function(){ti(Xi(t))}))}function ti(n){if(bt){"outer"===M&&xe.emit("outerResized",ir(n)),yt=Dn();var i,r=ot,o=!1;C&&(ni(),(i=r!==ot)&&xe.emit("newBreakpointStart",ir(n)));var a,u,l=Dt,s=Ee,f=Le,d=It,p=jt,v=Xt,m=Vt,h=Gt,g=Kt,y=Yt,b=Zt,w=de;if(i){var x=Ht,E=zt,S=qt,L=Bt,R=Qt;if(!c)var A=Nt,H=kt}if(It=Un("arrowKeys"),jt=Un("controls"),Xt=Un("nav"),Vt=Un("touch"),Bt=Un("center"),Gt=Un("mouseDrag"),Kt=Un("autoplay"),Yt=Un("autoplayHoverPause"),Zt=Un("autoplayResetOnVisibility"),i&&(Ee=Un("disable"),Ht=Un("fixedWidth"),_t=Un("speed"),zt=Un("autoHeight"),qt=Un("controlsText"),Qt=Un("autoplayText"),Jt=Un("autoplayTimeout"),c||(kt=Un("edgePadding"),Nt=Un("gutter"))),Hn(Ee),Ot=In(),st&&!At||Ee||(bi(),st||(tr(),o=!0)),(Ht||At)&&(ae=Ri(),me=fe()),(i||Ht)&&(Dt=Un("items"),Ft=Un("slideBy"),(u=Dt!==l)&&(Ht||At||(me=fe()),Rn())),i&&Ee!==s&&(Ee?ai():function(){if(!Te)return;if($t.disabled=!1,pt.className+=Ce,Hi(),Wt)for(var t=ie;t--;)T&&Z(ht[t]),Z(ht[re-t-1]);if(!T)for(var e=de,n=de+gt;e<n;e++){var i=ht[e],r=e<de+Dt?O:it;i.style.left=100*(e-de)/Dt+"%",j(i,r)}ri(),Te=!1}()),Se&&(i||Ht||At)&&(Le=ei())!==f&&(Le?(ki(Ai(Nn(0))),oi()):(!function(){if(!Re)return;kt&&c&&(dt.style.margin="");if(ie)for(var t="tns-transparent",e=ie;e--;)T&&q(ht[e],t),q(ht[re-e-1],t);ri(),Re=!1}(),o=!0)),Hn(Ee||Le),Kt||(Yt=Zt=!1),It!==d&&(It?at(e,Oe):ut(e,Oe)),jt!==p&&(jt?Je?Z(Je):(Ye&&Z(Ye),Ze&&Z(Ze)):Je?Y(Je):(Ye&&Y(Ye),Ze&&Y(Ze))),Xt!==v&&(Xt?(Z(nn),nr()):Y(nn)),Vt!==m&&(Vt?at(pt,Be,t.preventScrollOnTouch):ut(pt,Be)),Gt!==h&&(Gt?at(pt,De):ut(pt,De)),Kt!==g&&(Kt?(bn&&Z(bn),vn||hn||Wi()):(bn&&Y(bn),vn&&zi())),Yt!==y&&(Yt?at(pt,ke):ut(pt,ke)),Zt!==b&&(Zt?at(e,Ne):ut(e,Ne)),i){if(Ht===x&&Bt===L||(o=!0),zt!==E&&(zt||(dt.style.height="")),jt&&qt!==S&&(Ye.innerHTML=qt[0],Ze.innerHTML=qt[1]),bn&&Qt!==R){var k=Kt?1:0,N=bn.innerHTML,B=N.length-R[k].length;N.substring(B)===R[k]&&(bn.innerHTML=N.substring(0,B)+Qt[k])}}else Bt&&(Ht||At)&&(o=!0);if((u||Ht&&!At)&&(on=er(),nr()),(a=de!==w)?(xe.emit("indexChanged",ir()),o=!0):u?a||hi():(Ht||At)&&(ci(),wi(),ui()),u&&!T&&function(){for(var t=de+Math.min(gt,Dt),e=re;e--;){var n=ht[e];e>=de&&e<t?(j(n,"tns-moving"),n.style.left=100*(e-de)/Dt+"%",j(n,O),q(n,it)):n.style.left&&(n.style.left="",j(n,it),q(n,O)),q(n,W)}setTimeout((function(){U(ht,(function(t){q(t,"tns-moving")}))}),300)}(),!Ee&&!Le){if(i&&!c&&(kt===H&&Nt===A||(dt.style.cssText=Wn(kt,Nt,Ht,_t,zt)),st)){T&&(pt.style.width=zn(Ht,Nt,Dt));var D=jn(Ht,Nt,Dt)+qn(Nt);I($t,_($t)-1),P($t,"#"+Me+" > .tns-item",D,_($t))}zt&&vi(),o&&(Hi(),pe=de)}i&&xe.emit("newBreakpointEnd",ir(n))}}function ei(){if(!Ht&&!At)return gt<=(Bt?Dt-(Dt-1)/2:Dt);var t=Ht?(Ht+Nt)*gt:wt[gt],e=kt?Ot+2*kt:Ot+Nt;return Bt&&(e-=Ht?(Ot-Ht)/2:(Ot-(wt[de+1]-wt[de]-Nt))/2),t<=e}function ni(){for(var t in ot=0,C)t=parseInt(t),yt>=t&&(ot=t)}function ii(){!Kt&&bn&&Y(bn),!Xt&&nn&&Y(nn),jt||(Je?Y(Je):(Ye&&Y(Ye),Ze&&Y(Ze)))}function ri(){Kt&&bn&&Z(bn),Xt&&nn&&Z(nn),jt&&(Je?Z(Je):(Ye&&Z(Ye),Ze&&Z(Ze)))}function oi(){if(!Re){if(kt&&(dt.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)T&&j(ht[e],t),j(ht[re-e-1],t);ii(),Re=!0}}function ai(){if(!Te){if($t.disabled=!0,pt.className=pt.className.replace(Ce.substring(1),""),J(pt,["style"]),Wt)for(var t=ie;t--;)T&&Y(ht[t]),Y(ht[re-t-1]);if(st&&T||J(dt,["style"]),!T)for(var e=de,n=de+gt;e<n;e++){var i=ht[e];J(i,["style"]),q(i,O),q(i,it)}ii(),Te=!0}}function ui(){var t=li();Ct.innerHTML!==t&&(Ct.innerHTML=t)}function li(){var t=si(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function si(t){null==t&&(t=Ai());var e,n,i,r=de;if(Bt||kt?(At||Ht)&&(n=-(parseFloat(t)+kt),i=n+Ot+2*kt):At&&(n=wt[de],i=n+Ot),At)wt.forEach((function(t,o){o<re&&((Bt||kt)&&t<=n+.5&&(r=o),i-t>=.5&&(e=o))}));else{if(Ht){var o=Ht+Nt;Bt||kt?(r=Math.floor(n/o),e=Math.ceil(i/o-1)):e=r+Math.ceil(Ot/o)-1}else if(Bt||kt){var a=Dt-1;if(Bt?(r-=a/2,e=de+a/2):e=de+a,kt){var u=kt*Dt/Ot;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+Dt-1;r=Math.max(r,0),e=Math.min(e,re-1)}return[r,e]}function ci(){if(te&&!Ee){var t=si();t.push(ee),pi.apply(null,t).forEach((function(t){if(!z(t,qe)){var e={};e[g]=function(t){t.stopPropagation()},at(t,e),at(t,Xe),t.src=V(t,"data-src");var n=V(t,"data-srcset");n&&(t.srcset=n),j(t,"loading")}}))}}function fi(t){j(t,"loaded"),di(t)}function di(t){j(t,qe),q(t,"loading"),ut(t,Xe)}function pi(t,e,n){var i=[];for(n||(n="img");t<=e;)U(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function vi(){var t=pi.apply(null,si());E((function(){mi(t,yi)}))}function mi(t,e){return xt?e():(t.forEach((function(e,n){!te&&e.complete&&di(e),z(e,qe)&&t.splice(n,1)})),t.length?void E((function(){mi(t,e)})):e())}function hi(){ci(),wi(),ui(),Ti(),function(){if(Xt&&(ln=un>=0?un:Bn(),un=-1,ln!==sn)){var t=en[sn],e=en[ln];K(t,{tabindex:"-1","aria-label":fn+(sn+1)}),q(t,cn),K(e,{"aria-label":fn+(ln+1)+dn}),J(e,"tabindex"),j(e,cn),sn=ln}}()}function gi(t,e){for(var n=[],i=t,r=Math.min(t+e,re);i<r;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function yi(){var t=zt?gi(de,Dt):gi(ie,gt),e=rt||dt;e.style.height!==t&&(e.style.height=t+"px")}function bi(){wt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=ht[0].getBoundingClientRect()[t];U(ht,(function(i,r){r&&wt.push(i.getBoundingClientRect()[t]-n),r===re-1&&wt.push(i.getBoundingClientRect()[e]-n)}))}function wi(){var t=si(),e=t[0],n=t[1];U(ht,(function(t,i){i>=e&&i<=n?X(t,"aria-hidden")&&(J(t,["aria-hidden","tabindex"]),j(t,ze)):X(t,"aria-hidden")||(K(t,{"aria-hidden":"true",tabindex:"-1"}),q(t,ze))}))}function xi(t){return t.nodeName.toLowerCase()}function Ci(t){return"button"===xi(t)}function Mi(t){return"true"===t.getAttribute("aria-disabled")}function Ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ti(){if(jt&&!Ut&&!Wt){var t=Ge?Ye.disabled:Mi(Ye),e=Ke?Ze.disabled:Mi(Ze),n=de<=ve,i=!Ut&&de>=me;n&&!t&&Ei(Ge,Ye,!0),!n&&t&&Ei(Ge,Ye,!1),i&&!e&&Ei(Ke,Ze,!0),!i&&e&&Ei(Ke,Ze,!1)}}function Si(t,e){p&&(t.style[p]=e)}function Li(t){return null==t&&(t=de),At?(Ot-(kt?Nt:0)-(wt[t+1]-wt[t]-Nt))/2:Ht?(Ot-Ht)/2:(Dt-1)/2}function Ri(){var t=Ot+(kt?Nt:0)-(Ht?(Ht+Nt)*re:wt[re]);return Bt&&!Wt&&(t=Ht?-(Ht+Nt)*(re-1)-Li():Li(re-1)-wt[re-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=de),st&&!At)if(Ht)e=-(Ht+Nt)*t,Bt&&(e+=Li());else{var n=f?re:Dt;Bt&&(t-=Li()),e=100*-t/n}else e=-wt[t],Bt&&At&&(e+=Li());return oe&&(e=Math.max(e,ae)),e+=!st||At||Ht?"px":"%"}function Hi(t){Si(pt,"0s"),ki(t)}function ki(t){null==t&&(t=Ai()),pt.style[le]=se+t+ce}function Ni(t,e,n,i){var r=t+Dt;Wt||(r=Math.min(r,re));for(var o=t;o<r;o++){var a=ht[o];i||(a.style.left=100*(o-de)/Dt+"%"),G&&v&&(a.style[v]=a.style[h]=G*(o-t)/1e3+"s"),q(a,e),j(a,n),i&&ne.push(a)}}function Oi(t,e){ue&&Rn(),(de!==pe||e)&&(xe.emit("indexChanged",ir()),xe.emit("transitionStart",ir()),zt&&vi(),vn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),be=!0,An())}function Bi(t){return t.toLowerCase().replace(/-/g,"")}function Di(t){if(T||be){if(xe.emit("transitionEnd",ir(t)),!T&&ne.length>0)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",h&&v&&(n.style[h]="",n.style[v]=""),q(n,W),j(n,it)}if(!t||!T&&t.target.parentNode===pt||t.target===pt&&Bi(t.propertyName)===Bi(le)){if(!ue){var i=de;Rn(),de!==i&&(xe.emit("indexChanged",ir()),Hi())}"inner"===M&&xe.emit("innerLoaded",ir()),be=!1,pe=de}}}function Fi(t,e){if(!Le)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(be){if(he)return;Di()}var n=On(),i=0;if("first"===t?i=-n:"last"===t?i=T?gt-Dt-n:gt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(gt-1,t))),i=t-n)),!T&&i&&Math.abs(i)<Dt){var r=i>0?1:-1;i+=de+i-gt>=ve?gt*r:2*gt*r*-1}de+=i,T&&Wt&&(de<ve&&(de+=gt),de>me&&(de-=gt)),On(de)!==On(pe)&&Oi(e)}}function Pi(t,e){if(be){if(he)return;Di()}var n;if(!e){for(var i=Vi(t=Xi(t));i!==Je&&[Ye,Ze].indexOf(i)<0;)i=i.parentNode;var r=[Ye,Ze].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Ut){if(de===ve&&-1===e)return void Fi("last",t);if(de===me&&1===e)return void Fi("first",t)}e&&(de+=Ft*e,At&&(de=Math.floor(de)),Oi(n||t&&"keydown"===t.type?t:null))}function Ii(){pn=setInterval((function(){Pi(null,yn)}),Jt),vn=!0}function _i(){clearInterval(pn),vn=!1}function Ui(t,e){K(bn,{"data-action":t}),bn.innerHTML=xn[0]+t+xn[1]+e}function Wi(){Ii(),bn&&Ui("stop",Qt[1])}function zi(){_i(),bn&&Ui("start",Qt[0])}function ji(){vn?(zi(),hn=!0):(Wi(),hn=!1)}function qi(t){t.focus()}function Xi(t){return Gi(t=t||n.event)?t.changedTouches[0]:t}function Vi(t){return t.target||n.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Ki(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ji(){return o=Tn.y-En.y,a=Tn.x-En.x,e=Math.atan2(o,a)*(180/Math.PI),n=ge,i=!1,(r=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===t.axis;var e,n,i,r,o,a}function Qi(t){if(be){if(he)return;Di()}Kt&&vn&&_i(),Sn=!0,Mn&&(S(Mn),Mn=null);var e=Xi(t);xe.emit(Gi(t)?"touchStart":"dragStart",ir(t)),!Gi(t)&&["img","a"].indexOf(xi(Vi(t)))>=0&&Ki(t),Tn.x=En.x=e.clientX,Tn.y=En.y=e.clientY,T&&(Cn=parseFloat(pt.style[le].replace(se,"")),Si(pt,"0s"))}function Yi(t){if(Sn){var e=Xi(t);Tn.x=e.clientX,Tn.y=e.clientY,T?Mn||(Mn=E((function(){Zi(t)}))):("?"===ye&&(ye=Ji()),ye&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Zi(t){if(ye){if(S(Mn),Sn&&(Mn=E((function(){Zi(t)}))),"?"===ye&&(ye=Ji()),ye){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&xe.emit(Gi(t)?"touchMove":"dragMove",ir(t))}catch(t){}var e=Cn,n=Ln(Tn,En);if(!st||Ht||At)e+=n,e+="px";else e+=f?n*Dt*100/((Ot+Nt)*re):100*n/(Ot+Nt),e+="%";pt.style[le]=se+e+ce}}else Sn=!1}function $i(e){if(Sn){Mn&&(S(Mn),Mn=null),T&&Si(pt,""),Sn=!1;var n=Xi(e);Tn.x=n.clientX,Tn.y=n.clientY;var i=Ln(Tn,En);if(Math.abs(i)){if(!Gi(e)){var r=Vi(e);at(r,{click:function t(e){Ki(e),ut(r,{click:t})}})}T?Mn=E((function(){if(st&&!At){var t=-i*Dt/(Ot+Nt);t=i>0?Math.floor(t):Math.ceil(t),de+=t}else{var n=-(Cn+i);if(n<=0)de=ve;else if(n>=wt[re-1])de=me;else for(var r=0;r<re&&n>=wt[r];)de=r,n>wt[r]&&i<0&&(de+=1),r++}Oi(e,i),xe.emit(Gi(e)?"touchEnd":"dragEnd",ir(e))})):ye&&Pi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),ge&&(ye="?"),Kt&&!vn&&Ii()}function tr(){(rt||dt).style.height=wt[de+Dt]-wt[de]+"px"}function er(){var t=Ht?(Ht+Nt)*gt/Ot:gt/Dt;return Math.min(Math.ceil(t),gt)}function nr(){if(Xt&&!Ie&&on!==an){var t=an,e=on,n=Z;for(an>on&&(t=on,e=an,n=Y);t<e;)n(en[t]),t++;an=on}}function ir(t){return{container:pt,slideItems:ht,navContainer:nn,navItems:en,controlsContainer:Je,hasControls:Fe,prevButton:Ye,nextButton:Ze,items:Dt,slideBy:Ft,cloneCount:ie,slideCount:gt,slideCountNew:re,index:de,indexCached:pe,displayIndex:kn(),navCurrentIndex:ln,navCurrentIndexCached:sn,pages:on,pagesCached:an,sheet:$t,isOn:bt,event:t||{}}}b&&console.warn("No slides found in",t.container)};console.log(ct),document.querySelector(".support-list").insertAdjacentHTML("beforeend",(st=C,st.map((t=>`<li class="support_item swiper-slide"><a class="support-link" target="_blank" href="${t.url}"><span class="support-number">0${st.indexOf(t)+1}</span>\n    <img class="support-logo" alt="${t.title}" src="${t.img}"></a></li>`))).join(" "));const ft=document.querySelector(".support-button-next"),dt=ct({container:".my-slider",axis:"vertical",controls:!1,nav:!1,items:4,rewind:!0,fixedWidthViewportWidth:292,responsive:{768:{items:6}}});ft.addEventListener("click",(()=>{dt.goTo("next")})),dt.events.on("touchEnd",(()=>{console.log("end")}));
//# sourceMappingURL=index.5cd2d553.js.map
