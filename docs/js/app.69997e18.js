(function(t){function e(e){for(var o,c,u=e[0],s=e[1],d=e[2],a=0,f=[];a<u.length;a++)c=u[a],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i=[];function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dsc-crash-course/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Tasks")]),n("TodoList")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticStyle:{display:"flex","flex-flow":"row-wrap"}},[n("md-field",[n("label",[t._v("New Task")]),n("md-input",{on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoText,callback:function(e){t.newTodoText=e},expression:"newTodoText"}})],1),n("md-button",{staticClass:"md-icon-button md-primary md-raised",on:{click:t.addTodo}},[n("md-icon",[t._v("send")])],1)],1),t.todos.length?n("md-list",t._l(t.todos,(function(e){return n("TodoListItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})})),1):n("p",[t._v("Nothing left in the list. Add a new todo in the input above.")])],1)},u=[],s=(n("4de4"),n("498a"),n("96cf"),n("1da1")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-list-item",[t._v(" "+t._s(t.todo.item)+" "),n("md-button",{staticClass:"md-icon-button md-accent md-raised",on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[n("md-icon",[t._v("delete")])],1)],1)},l=[],a=(n("a9e3"),{props:{todo:{id:Number,item:String}}}),f=a,p=n("2877"),h=Object(p["a"])(f,d,l,!1,null,null,null),m=h.exports,v=0,b=!1,w="http://localhost:3000",T={components:{TodoListItem:m},data:function(){return{newTodoText:"",todos:[]}},methods:{refresh:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$http.get("".concat(w,"/todolist")).then((function(e){console.log(e),t.todos=e.body}),(function(t){console.warn(t),b=!0,alert("offline!")}));case 1:case"end":return e.stop()}}),e)})))()},addTodo:function(){var t=this,e=this.newTodoText.trim();e&&(b?(this.todos.push({id:v++,item:e}),this.newTodoText=""):this.$http.post("".concat(w,"/todolist"),{id:v,item:e}).then((function(e){console.log(e),t.refresh(),t.newTodoText=""}),(function(t){console.warn(t)})))},removeTodo:function(t){var e=this;b?this.todos=this.todos.filter((function(e){return e.id!==t})):this.$http.delete("".concat(w,"/todolist/").concat(t)).then((function(t){console.log(t),e.refresh()}),(function(t){console.warn(t)}))}},beforeMount:function(){this.refresh()}},y=T,g=Object(p["a"])(y,c,u,!1,null,null,null),x=g.exports,_={components:{TodoList:x}},O=_,k=(n("034f"),Object(p["a"])(O,r,i,!1,null,null,null)),j=k.exports,$=n("28dd"),P=n("43f9"),S=n.n(P);n("51de"),n("0759");o["default"].use(S.a),o["default"].use($["a"]),o["default"].config.productionTip=!1,new o["default"]({render:function(t){return t(j)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.69997e18.js.map