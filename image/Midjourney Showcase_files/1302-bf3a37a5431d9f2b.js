"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1302],{88257:function(e,t,n){n.d(t,{v:function(){return y},Z:function(){return k}});var a=n(85893),l=n(67294),r=n(84539),i=n(71722),s=n(74e3),o=n(69748),c=n(27714),u=n(88305),d=n(24697),f=n(9281),h=n(44824),m=n(3202),x=n(11434),p=n(45332),v=n(37940),g=n(12197),b=n(91296),j=n.n(b),w=function(e){var t=e.className,n=(e.small,(0,l.useState)(!0)),r=n[0],i=n[1],s=(0,l.useState)("unset"),o=s[0],c=s[1],d=(0,u.u)(h.V),f=d.query,m=d.setQuery,x=d.tempQuery,v=d.setTempQuery,b=d.loadingSearch,w=(0,l.useRef)(),y=function(e){var t;"Enter"===(null===e||void 0===e?void 0:e.key)&&m(e.target.value,location.pathname),v(e.target.value),null===(t=w.current)||void 0===t||t.focus()},k=(0,l.useMemo)((function(){return j()(y,1)}),[]);(0,l.useEffect)((function(){f&&0!==f.length&&!r&&i(!0)}),[f,r]),(0,l.useEffect)((function(){switch(!0){case x===f&&0!==x.length&&r:c("equal");break;case x!==f&&0!==x.length&&r:c("not_equal");break;case x!==f&&0===x.length&&r:c("empty");break;case 0===f.length&&0===x.length&&r:c("unset");break;case!r:c("unopen")}}),[f,x,r]);return(0,a.jsxs)("div",{className:"font-normal text-base p-1 text-white flex w-full bg-darkBlue-500 active:outline-2 outline-slate-200/40 border border-uiBlue-500/30\n       ".concat(t," "),children:[(0,a.jsx)("div",{className:"flex gap-2 items-center ml-4 w-full",children:(0,a.jsx)("input",{autoComplete:"off",ref:w,onKeyDown:function(e){return k(e)},placeholder:f||"Search prompts or users",name:"search",defaultValue:x,title:"search",type:"text",className:"w-full focus:outline-none placeholder:text-slate-500"})}),(0,a.jsx)("button",{onClick:function(){switch(o){case"equal":case"empty":case"unset":m("",location.pathname);break;case"not_equal":m(x,location.pathname);break;case"unopen":var e;i(!0),null===(e=w.current)||void 0===e||e.focus()}},className:(0,p.CN)("p-2 ","flex w-auto justify-center items-center aspect-square w-full text-base font-medium text-white hover:bg-uiBlue-500/50 transition-colors rounded-full focus:outline-none active:ring-2 active:bg-darkBlue-500/20 active:ring-red active:ring-offset-gray-100 shadow-sm  hover:bg-blend-darken "),children:b?(0,a.jsx)(g.gb,{size:22,className:"animate-spin",color:"inherit"}):"equal"===o||"empty"===o?(0,a.jsx)(g.EE,{size:22,className:"",color:"inherit"}):(0,a.jsx)(g.ol,{size:22,className:"",color:"inherit"})})]})},y=function(){var e=(0,u.u)(h.V),t=e.mobileMenuOpen,n=e.setMobileMenuOpen,r=(0,d.y1)((function(){n(!1)}),100);return(0,l.useEffect)((function(){return window.addEventListener("resize",r,!0),function(){window.removeEventListener("resize",r,!0)}}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{onClick:function(){return n(!t)},className:"  lg:hidden max-w-max dropdownButton inline-flex justify-center items-center w-full rounded-md  shadow-sm py-2 px-2 text-base font-medium text-white focus:outline-none\n             \n                ",children:(0,a.jsx)(g.v2,{size:"25",color:"white"})})})},k=function(e){var t=e.icon,n=e.title,d=e.showSearch,g=e.fixed,b=void 0!==g&&g,j=(0,u.u)(h.V),k=j.pathname,N=j.setRefreshSeed,C=j.fullWidth,S=(0,f.aC)().userAuthStatus,O=(0,u.u)(m.Z),B=O.selectMode,q=O.selections,z=(0,l.useState)(!1),E=z[0],Z=z[1];return(0,c.R)((function(e){e.prevPos;var t=e.currPos.y<-350;Z(t)}),[E]),(0,a.jsxs)(l.Fragment,{children:[(0,a.jsx)("div",{id:"searchBlock",className:(0,p.CN)("flex top-0 gap-2 mb-8 w-full h-auto lg:mb-4 z-40",b&&"hidden"),children:(0,a.jsxs)("div",{className:(0,p.CN)("flex gap-2 lg:py-4 w-full transition-all text-base",!d&&"lg:hidden"),children:[(0,a.jsx)(y,{}),(0,a.jsx)(w,{className:(0,p.CN)("rounded-full shrink ".concat(("notAuthed"===S||!k.includes("/app")&&!k.includes(v.jk.modtools)||k.includes(v.jk.ranking))&&"pointer-events-none opacity-20 grayscale"),!d&&"hidden")}),(0,a.jsx)("div",{className:"hidden aspect-square relative lg:flex",children:(0,a.jsx)("button",{title:"refresh",onClick:function(){N(Math.random())},className:"flex rounded-full aspect-square  w-12 h-12 shrink-0 justify-center items-center  ring-inset  text-base font-medium text-white hover:bg-[#0e1122] active:bg-darkBlue-500/20 active:outline-none active:ring-2 active:ring-red active:ring-offset-gray-100  hover:bg-blend-darken active:transition-transform  active:-rotate-180 ",children:(0,a.jsx)(i.Z,{height:22})})}),(0,a.jsx)("div",{className:"flex relative aspect-square ".concat("notAuthed"===S&&"pointer-events-none opacity-20 grayscale"),children:(0,a.jsxs)("button",{title:"Enable Select Mode",onClick:function(){B.set((function(e){return!e}))},className:(0,p.CN)("flex rounded-full  aspect-square shrink-0 justify-center items-center   w-12 h-12 ring-inset text-base font-medium text-white hover:bg-[#0e1122] active:bg-darkBlue-500/20 active:outline-none active:ring-2 active:!ring-blue-800 hover:bg-blend-darken",B.get&&"ring-2 ring-emerald-500/70 ",!d&&"!hidden"),children:[(0,a.jsx)(s.Z,{height:22}),q.total>0&&(0,a.jsx)("div",{className:"absolute bottom-3/4 left-full py-0.5 px-2 font-mono text-xs bg-emerald-800 rounded-full border-4 border-darkBlue-900 -translate-x-1/2 translate-y-1/2 select-none",children:q.total})]})})]})}),(0,a.jsx)(x.Z,{show:E,children:(0,a.jsxs)(r.u,{show:E,enter:"transition transform ease-out duration-200",leave:"transition transform ease-in-out duration-200",enterFrom:"opacity-0 -translate-y-full",enterTo:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-full",leaveFrom:"opacity-100 translate-y-0",id:"mobileSearchBlock",className:(0,p.CN)("overflow-y-clip z-10 border-b border-darkBlue-500 mx-auto max-h-20 shadow-2xl  shadow-darkBlue-900/70 py-4 top-0  gap-2 mb-4 w-full h-full",!d&&"hidden",!C&&"max-w-7xl"),children:[(0,a.jsx)("div",{className:"absolute -top-[2px] left-0 w-full h-full bg-darkBlue-900/95 from-transparent backdrop-blur-md scale-110 -z-1"}),(0,a.jsxs)("div",{className:(0,p.CN)(" border-bottom relative border-darkBlue-500  ","z-1 flex gap-2 items-stretch h-full w-full transition-all text-base"),children:[(0,a.jsxs)("div",{className:"hidden gap-3 justify-start items-center mr-8 text-lg font-normal text-slate-200 lg:flex",children:[(0,a.jsx)("span",{className:"flex grow-0 shrink-0 justify-center items-center w-8 h-8 rounded-full",children:t}),(0,a.jsx)("span",{className:"leading-none",children:n})]}),(0,a.jsx)(y,{}),(0,a.jsx)(w,{small:!0,className:"rounded-full shrink ".concat(("notAuthed"===S||!k.includes("/app")&&!k.includes(v.jk.modtools)||k.includes(v.jk.ranking))&&"pointer-events-none opacity-20 grayscale")}),(0,a.jsx)("div",{className:"hidden shrink-0 aspect-square relative lg:flex",children:(0,a.jsx)("button",{title:"refresh",onClick:function(){N(Math.random())},className:"flex rounded-full aspect-square  w-12 h-12 shrink-0 justify-center items-center  ring-inset  text-base font-medium text-white hover:bg-[#0e1122] active:bg-darkBlue-500/20 active:outline-none active:ring-2 active:ring-red active:ring-offset-gray-100  hover:bg-blend-darken active:transition-transform  active:-rotate-180 ",children:(0,a.jsx)(i.Z,{height:22})})}),(0,a.jsx)("div",{className:"flex shrink-0 relative aspect-square ".concat("notAuthed"===S&&"pointer-events-none opacity-20 grayscale"),children:(0,a.jsxs)("button",{title:"Enable Select Mode",onClick:function(){B.set((function(e){return!e}))},className:(0,p.CN)("flex rounded-full aspect-square shrink-0 justify-center items-center w-12 h-12 ring-inset text-base font-medium text-white hover:bg-[#0e1122] active:bg-darkBlue-500/20 active:outline-none active:ring-2 active:!ring-blue-800 hover:bg-blend-darken",B.get&&"ring-2 ring-emerald-500/70 ",!d&&"!hidden"),children:[(0,a.jsx)(s.Z,{height:22}),q.total>0&&(0,a.jsx)("div",{className:"absolute bottom-3/4 left-full py-0.5 px-2 font-mono text-xs bg-emerald-800 rounded-full border-4 border-darkBlue-900 -translate-x-1/2 translate-y-1/2 select-none",children:q.total})]})})]})]})}),(0,a.jsx)(r.u,{show:E,enterFrom:"opacity-0 translate-y-1/4",enterTo:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1/4",leaveFrom:"opacity-100 translate-y-0",className:(0,p.CN)("hidden fixed right-12 bottom-8 z-50 bg-uiBlue-500 rounded-xl transition ease-out delay-200 sm:flex xl:bg-none duration-600",B.get&&"!hidden 2xl:!flex"),children:(0,a.jsx)("button",{title:"Scroll to top",onClick:function(){null===window||void 0===window||window.scroll({top:0,left:0})},className:"flex  h-full aspect-square shrink-0 justify-center items-center p-3 w-full text-base font-medium text-white hover:bg-uiBlue-600 active:outline-none active:ring-2 rounded-xl active:ring-red active:ring-offset-gray-100 ",children:(0,a.jsx)(o.Z,{height:20})})})]})}},25482:function(e,t,n){n.d(t,{h:function(){return c}});var a=n(85893),l=n(2962),r=n(9008),i=n(11163),s="Midjourney",o="en",c=function(e){var t=(0,i.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.default,{children:[(0,a.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1"}),(0,a.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,a.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,a.jsx)(l.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o,site_name:s}})]})}},53158:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(85893),l=n(44824),r=n(45332);function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function s(e){var t=e.children,n=i(e,["children"]),s=l.V.useContainer().menuOpen;return(0,a.jsx)("div",{"data-name":"Outer container",className:(0,r.CN)("flex flex-col w-full grow","p-4 !pt-0 xs:p-8 md:.p-12 lg:.p-16 2xl:p-0 md:pb-16",n.className,n.fullHeight&&"!pb-0",s&&"2xl:p-12 minFull:p-0"),children:(0,a.jsx)("div",{"data-name":"Inner container",className:(0,r.CN)("flex relative flex-col grow pt-5 max-w-7xl mx-auto w-full text-xl content",n.classNameInner),children:t})})}},11434:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(85893),l=n(2740),r=n(44824),i=n(45332),s=n(53158);function o(e){var t=e.position,n=void 0===t?"top":t,o=e.show,c=void 0===o||o,u=e.children,d=r.V.useContainer(),f=d.fullWidth,h=d.menuOpen;return(0,a.jsx)(l.h,{children:(0,a.jsxs)("div",{className:(0,i.CN)("flex fixed left-0 z-40 flex-row w-full","top"===n?"top-0":"bottom-0",!c&&"pointer-events-none"),children:[(0,a.jsx)("div",{className:(0,i.CN)("hidden sticky top-0 z-50 shrink min-w-[5.5rem] max-h-screen lg:flex lg:grow xl:min-w-[6rem] minFull:!w-0",h&&"!w-[20rem]")}),f?(0,a.jsx)("div",{className:"".concat(i.VU," xs:!pt-0 w-full"),children:u}):(0,a.jsx)(s.Z,{className:"!pb-0",classNameInner:"!pt-0 !pb-0",children:u}),(0,a.jsx)("div",{"data-desc":"Used to even out flex columns",className:"grow shrink h-full"})]})})}},27461:function(e,t,n){n.d(t,{o:function(){return s}});var a=n(85893),l=n(88257),r=n(53158);function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=function(e){var t=e.showSearch,n=void 0===t||t,s=e.disableSearch,o=void 0!==s&&s,c=e.fixedNav,u=void 0!==c&&c,d=i(e,["showSearch","disableSearch","fixedNav"]);return(0,a.jsxs)(a.Fragment,{children:[d.meta,d.fullWidth?(0,a.jsxs)("div",{className:"flex relative flex-col w-full overflow-x-hidden ".concat(d.className),children:[o||(0,a.jsx)(l.Z,{title:d.title,icon:d.icon,showSearch:n,fixed:u}),(0,a.jsx)("div",{className:"h-full text-xl content",children:d.children})]}):(0,a.jsxs)(r.Z,{children:[o||(0,a.jsx)(l.Z,{title:d.title,icon:d.icon,showSearch:n}),d.children]})]})}}}]);