(function(t){function e(e){for(var o,c,a=e[0],u=e[1],l=e[2],s=0,f=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==r[u]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dsc-crash-course/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Tasks")]),n("TodoList")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticStyle:{display:"flex","flex-flow":"row-wrap"}},[n("md-field",[n("label",[t._v("New Task")]),n("md-input",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoText,callback:function(e){t.newTodoText=e},expression:"newTodoText"}})],1),n("md-button",{staticClass:"md-icon-button md-primary md-raised",on:{click:t.addTodo}},[n("md-icon",[t._v("send")])],1)],1),t.todos.length?n("md-list",t._l(t.todos,(function(e){return n("TodoListItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})})),1):n("p",[t._v("Nothing left in the list. Add a new todo in the input above.")])],1)},a=[],u=(n("498a"),n("96cf"),n("1da1")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",[t._v(" "+t._s(t.todo.item)+" "),n("md-button",{staticClass:"md-icon-button md-accent md-raised",on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[n("md-icon",[t._v("delete")])],1)],1)},d=[],s=(n("a9e3"),{props:{todo:{id:Number,item:String}}}),f=s,p=n("2877"),h=Object(p["a"])(f,l,d,!1,null,null,null),m=h.exports,v=0,b="http://localhost:3000",w={components:{TodoListItem:m},data:function(){return{newTodoText:"",todos:[]}},methods:{refresh:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$http.get("".concat(b,"/todolist")).then((function(e){console.log(e),t.todos=e.body}),(function(t){console.warn(t),alert("Could not reach database")}));case 1:case"end":return e.stop()}}),e)})))()},addTodo:function(){var t=this,e=this.newTodoText.trim();e&&this.$http.post("".concat(b,"/todolist"),{id:v,item:e}).then((function(e){console.log(e),t.refresh(),t.newTodoText=""}),(function(t){console.warn(t),alert("Update Failed")}))},removeTodo:function(t){var e=this;this.$http.delete("".concat(b,"/todolist/").concat(t)).then((function(t){console.log(t),e.refresh()}),(function(t){console.warn(t),alert("Could not delete")}))}},beforeMount:function(){this.refresh()}},y=w,T=Object(p["a"])(y,c,a,!1,null,null,null),g=T.exports,_={components:{TodoList:g}},x=_,O=(n("034f"),Object(p["a"])(x,r,i,!1,null,null,null)),k=O.exports,j=n("28dd"),$=n("43f9"),P=n.n($);n("51de"),n("0759");o["default"].use(P.a),o["default"].use(j["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(k)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.8e394840.js.map