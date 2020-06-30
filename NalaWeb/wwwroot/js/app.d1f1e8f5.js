(function(t){function n(n){for(var a,u,c=n[0],i=n[1],l=n[2],p=0,f=[];p<c.length;p++)u=c[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,c=1;c<e.length;c++){var i=e[c];0!==r[i]&&(a=!1)}a&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var a={},r={app:0},o=[];function u(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=a,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)u.d(e,a,function(n){return t[n]}.bind(null,a));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=i;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"01bb":function(t,n,e){"use strict";var a=e("32cd"),r=e.n(a);r.a},"034f":function(t,n,e){"use strict";var a=e("85ec"),r=e.n(a);r.a},"32cd":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("nala code editor")]),e("div",{staticClass:"nala-container"},[e("NalaEditor"),e("NalaOutput")],1),e("NalaToolbar")],1)},o=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-editor"},[e("prism-editor",{attrs:{code:t.code,language:"nala"}})],1)},c=[],i=e("c197"),l=e.n(i),s=e("431a"),p=e.n(s),f=(e("1ca2"),e("84bf"),{name:"NalaEditor",components:{PrismEditor:p.a,Prism:l.a},data:function(){return{weathers:[]}},props:{code:String,lineNumbers:Boolean}}),d=f,b=(e("b99c"),e("01bb"),e("2877")),h=Object(b["a"])(d,u,c,!1,null,"37ec7b57",null),v=h.exports,m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-output",attrs:{id:"nala-output"}})},g=[],O=e("1157"),y=e.n(O),w={name:"NalaOutput",components:{},props:{code:String,lineNumbers:Boolean},created:function(){this.$nalaHub.$on("output-changed",this.onOutputChanged)},beforeDestroy:function(){this.$nalaHub.$off("output-changed",this.onOutputChanged)},methods:{onOutputChanged:function(t){var n=t.output,e=y()("#nala-output");e.empty(),e.append("Output:<br>");for(var a=0;a<n.length;a++)e.append(n[a])}}},_=w,N=(e("9c72"),Object(b["a"])(_,m,g,!1,null,"fb947164",null)),j=N.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-toolbar"},[e("button",{on:{click:t.runNala}},[t._v("Run Nala")])])},x=[],P=(e("7db0"),e("bc3a")),C=e.n(P),E={name:"NalaToolbar",props:{code:String,lineNumbers:Boolean},methods:{runNala:function(){var t=y()(".prism-editor-wrapper").first().find("pre").first(),n=t.text();C.a.post("/api/nala-test",{content:n})}}},S=E,T=(e("719f"),Object(b["a"])(S,$,x,!1,null,"5437d37f",null)),k=T.exports,M={name:"App",components:{NalaEditor:v,NalaOutput:j,NalaToolbar:k}},B=M,H=(e("034f"),Object(b["a"])(B,r,o,!1,null,null,null)),L=H.exports,R=(e("d3b7"),e("1a9a")),U={install:function(t){var n=(new R["a"]).withUrl("".concat(t.prototype.$http.defaults.baseURL,"/nala-hub")).configureLogging(R["b"].Information).build(),e=new t;t.prototype.$nalaHub=e,n.on("OutputChange",(function(t){e.$emit("output-changed",{output:t})}));var a=null;function r(){return a=n.start().catch((function(t){return console.error("Failed to connect with hub",t),new Promise((function(t,n){return setTimeout((function(){return r().then(t).catch(n)}),5e3)}))})),a}n.onclose((function(){return r()})),r()}};C.a.defaults.baseURL="https://localhost:44371",a["a"].prototype.$http=C.a,a["a"].use(U),a["a"].config.productionTip=!1;var J=new a["a"]({render:function(t){return t(L)}});J.$mount("#app")},"5aa8":function(t,n,e){},"719f":function(t,n,e){"use strict";var a=e("5aa8"),r=e.n(a);r.a},"85ec":function(t,n,e){},"999a":function(t,n,e){},"9c72":function(t,n,e){"use strict";var a=e("a12a"),r=e.n(a);r.a},a12a:function(t,n,e){},b99c:function(t,n,e){"use strict";var a=e("999a"),r=e.n(a);r.a}});
//# sourceMappingURL=app.d1f1e8f5.js.map