webpackJsonp([2],{"/Hv2":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("IvJb"),r={name:"App",created:function(){this.$router.beforeEach((t,e,a)=>{window.document.title=t.meta.title,a()})},data:()=>({transitionName:""}),watch:{$route(t,e){this.transitionName="slide-left"}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fillcontain",attrs:{id:"app"}},[e("transition",{attrs:{name:this.transitionName}},[e("router-view")],1)],1)},staticRenderFns:[]};var o=a("C7Lr")(r,s,!1,function(t){a("tKBK")},null,null).exports,i=a("zO6J"),l={name:"HelloWorld",data:()=>({msg:"Welcome to Your Vue.js App"})},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("C7Lr")(l,u,!1,function(t){a("tGEK")},"data-v-d8ec41bc",null).exports;n.default.use(i.a);const v=[{path:"/",name:"mmanage4",component:t=>a.e(0).then((()=>t(a("HwSK"))).bind(null,a)).catch(a.oe),meta:{title:"mmanage4",index:1}}];var c=new i.a({routes:v,strict:!1}),h=a("t+b9"),_=a.n(h);a("/Hv2");n.default.use(_.a);var m=a("aozt"),f=a.n(m);n.default.prototype.$ajax=f.a;var p=a("9rMa");n.default.use(p.a);var d=new p.a.Store({state:{user:void 0},mutations:{login(t,e){t.user=e},logout(t){t.user=void 0}},actions:{login(t,e){t.commit("login",e)},logout(t){t.commit("logout")}}});n.default.config.productionTip=!1,new n.default({el:"#app",router:c,store:d,components:{App:o},template:"<App/>"})},tGEK:function(t,e){},tKBK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d530c56302200a67b02b.js.map