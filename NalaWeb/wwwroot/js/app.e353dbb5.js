(function(t){function n(n){for(var r,u,i=n[0],c=n[1],l=n[2],p=0,f=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,i=1;i<e.length;i++){var c=e[i];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},a={app:0},o=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"01bb":function(t,n,e){"use strict";var r=e("32cd"),a=e.n(r);a.a},"034f":function(t,n,e){"use strict";var r=e("85ec"),a=e.n(r);a.a},"32cd":function(t,n,e){},3962:function(t,n,e){},4104:function(t,n,e){"use strict";var r=e("3962"),a=e.n(r);a.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("nala code editor")]),e("div",{staticClass:"nala-container"},[e("NalaEditor"),e("NalaOutput")],1),e("NalaToolbar")],1)},o=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-editor"},[e("prism-editor",{attrs:{code:t.code,language:"nala"}})],1)},i=[],c=e("c197"),l=e.n(c),s=e("431a"),p=e.n(s),f=(e("1ca2"),e("84bf"),{name:"NalaEditor",components:{PrismEditor:p.a,Prism:l.a},data:function(){return{weathers:[]}},props:{code:String,lineNumbers:Boolean}}),d=f,b=(e("b99c"),e("01bb"),e("2877")),v=Object(b["a"])(d,u,i,!1,null,"37ec7b57",null),m=v.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-output",attrs:{id:"output"}},[t._v(" test ")])},O=[],g={name:"NalaOutput",components:{},props:{code:String,lineNumbers:Boolean}},y=g,_=(e("4104"),Object(b["a"])(y,h,O,!1,null,"3f9538f0",null)),N=_.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nala-toolbar"},[e("button",{on:{click:t.runNala}},[t._v("Run Nala")])])},w=[],x=(e("7db0"),e("1157")),P=e.n(x),E=(e("bc3a"),{name:"NalaToolbar",props:{code:String,lineNumbers:Boolean},methods:{runNala:function(){var t=P()(".prism-editor-wrapper").first().find("pre").first(),n=t.text();alert(n)}}}),S=E,T=(e("5742"),Object(b["a"])(S,j,w,!1,null,"9f74bbb0",null)),$=T.exports,k={name:"App",components:{NalaEditor:m,NalaOutput:N,NalaToolbar:$}},C=k,M=(e("034f"),Object(b["a"])(C,a,o,!1,null,null,null)),B=M.exports;r["a"].config.productionTip=!1;var J=new r["a"]({render:function(t){return t(B)}});J.$mount("#app")},5742:function(t,n,e){"use strict";var r=e("ab21"),a=e.n(r);a.a},"85ec":function(t,n,e){},"999a":function(t,n,e){},ab21:function(t,n,e){},b99c:function(t,n,e){"use strict";var r=e("999a"),a=e.n(r);a.a}});
//# sourceMappingURL=app.e353dbb5.js.map