(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(14),o=a.n(c),i=a(6),r=(a(7),a(4)),s=function(e){return l.a.createElement("label",{className:e.className,id:e.id,value:"text"===e.type?null:e.value},e.labelBefore?e.label:null,l.a.createElement("input",{type:e.type,className:e.labelBefore?"ml-2":"mr-2",onChange:function(t){e.definition?e.onChange(t,e.definition):e.onChange(t,"")},checked:e.checked,required:e.required,max:e.max,min:e.min,value:e.value,placeholder:e.placeholder,id:e.id}),e.labelBefore?null:e.label)},m=function(e){var t=e.value,a=function(a,n){var l=Object(r.a)({},t),c=a.target.id,o=Number(a.target.value);l[c]=!l[c],l[c]?l.subtotal+=o:l.subtotal-=o,e.update(Object(r.a)({},l),"basicNeeds","".concat(n,": Most of these pages require a basic database and editing features built in. Theses pages will need to be built dynamicly. Note - this is only for full pages. Some of these can be built as less dynamic sections."))};return l.a.createElement("div",{subtotal:t.subtotal},l.a.createElement("form",{className:"d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around"},l.a.createElement("h3",null,"Basic Pages Needs"),l.a.createElement("h5",null,"Do you plan to include any of these types of pages in your site?"),l.a.createElement("div",{className:"col-12 col-md-6 d-flex flex-column justify-content-start align-items-start"},l.a.createElement(s,{id:"option1",value:220,label:"Blog",type:"checkbox",checked:t.option1,onChange:a,definition:"Blog Page"}),l.a.createElement(s,{id:"option2",value:330,label:"Events",type:"checkbox",checked:t.option2,onChange:a,definition:"Events Page"}),l.a.createElement(s,{id:"option3",value:220,label:"Specials",type:"checkbox",checked:t.option3,onChange:a,definition:"Specials Page"}))))},u=function(e){var t=e.value,a=function(a,n){var l=Object(r.a)({},t),c=a.target.id,o=Number(a.target.value);l[c]=!l[c],l[c]?l.subtotal+=o:l.subtotal-=o,e.update(Object(r.a)({},l),"backEndNeeds",n)};return l.a.createElement("form",{className:"d-flex flex-column flex-wrap justify-content-center align-items-around"},l.a.createElement("h3",null,"Back End Needs"),l.a.createElement("div",{className:"col-12 d-flex flex-column justify-content-start align-items-start"},l.a.createElement(s,{id:"option1",value:500,label:"Customer Login",type:"checkbox",checked:t.option1,onChange:a}),l.a.createElement(s,{id:"option3",value:500,label:"eCommerce",type:"checkbox",checked:t.option3,onChange:a})))},d=[{path:"/",name:"Home",component:function(e){return l.a.createElement("article",{id:"contact"},l.a.createElement("section",{className:"py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg"},l.a.createElement("div",{className:"container flex-wrap flex-row d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"col-12"}))))}},{path:"/rates",name:"Rates",component:function(){var e=Object(n.useState)("R"),t=Object(i.a)(e,2),a=t[0];t[1];return l.a.createElement("article",{id:"contact"},l.a.createElement("section",{className:"py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg"},l.a.createElement("div",{className:"container flex-wrap flex-row d-flex justify-content-center align-items-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"card"},l.a.createElement("h1",{className:"text-center m-4"},"What Type of System do you have?"),"R"===a?l.a.createElement(m,null):l.a.createElement(u,null))))))}},{path:"/about",name:"About",component:function(e){return l.a.createElement("section",{className:"py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg"})}}],f=a(3),p=a(28),h=Object(f.a)();o.a.render(l.a.createElement(p.b,{history:h},l.a.createElement(p.c,null,d.map(function(e,t){return l.a.createElement(p.a,{path:e.path,key:t,component:e.component})}))),document.getElementById("root"))},7:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.afb01ad6.chunk.js.map