(function(e){function _(_){for(var o,i,c=_[0],a=_[1],s=_[2],d=0,u=[];d<c.length;d++)i=c[d],n[i]&&u.push(n[i][0]),n[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(_);while(u.length)u.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,_=0;_<r.length;_++){for(var t=r[_],o=!0,i=1;i<t.length;i++){var a=t[i];0!==n[a]&&(o=!1)}o&&(r.splice(_--,1),e=c(c.s=t[0]))}return e}var o={},n={app:0},r=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d2250a1":"45e2e875"}[e]+".js"}function c(_){if(o[_])return o[_].exports;var t=o[_]={i:_,l:!1,exports:{}};return e[_].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var _=[],t=n[e];if(0!==t)if(t)_.push(t[2]);else{var o=new Promise(function(_,o){t=n[e]=[_,o]});_.push(t[2]=o);var r,a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e),r=function(_){s.onerror=s.onload=null,clearTimeout(d);var t=n[e];if(0!==t){if(t){var o=_&&("load"===_.type?"missing":_.type),r=_&&_.target&&_.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,t[1](i)}n[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,a.appendChild(s)}return Promise.all(_)},c.m=e,c.c=o,c.d=function(e,_,t){c.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,_){if(1&_&&(e=c(e)),8&_)return e;if(4&_&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var o in e)c.d(t,o,function(_){return e[_]}.bind(null,o));return t},c.n=function(e){var _=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(_,"a",_),_},c.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},c.p="/",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=_,a=a.slice();for(var d=0;d<a.length;d++)_(a[d]);var l=s;r.push([0,"chunk-vendors"]),t()})({0:function(e,_,t){e.exports=t("56d7")},"3ba0":function(e,_,t){"use strict";var o=t("e2c2"),n=t.n(o);n.a},"432d":function(e,_,t){},5:function(e,_){},"56d7":function(e,_,t){"use strict";t.r(_);t("3a0f"),t("a3a3"),t("4d0b");var o=t("329b"),n=function(){var e=this,_=e.$createElement,o=e._self._c||_;return o("div",{attrs:{id:"app"}},[o("header",{attrs:{id:"nav"}},[o("h1",[o("span",{staticStyle:{display:"none"}},[e._v(" xx")]),o("router-link",{attrs:{to:"/"}},[o("v-icon",{attrs:{name:"code",scale:"2"}})],1)],1),o("div",{attrs:{id:"actions"}},[o("nav",{staticClass:"actionCont collapsed"},[o("div",{staticClass:"action-item"},[o("a",{staticClass:"ai-button",on:{click:function(_){e.deployCode()}}},[o("v-icon",{attrs:{name:"paper-plane",scale:"0.9"}}),e._v(" Complie && Deploy\n            ")],1)]),o("div",{staticClass:"action-item"},[o("a",{staticClass:"ai-button",on:{click:function(_){e.runCode()}}},[o("v-icon",{attrs:{name:"play",scale:"0.8"}}),e._v(" Run\n            ")],1)])]),o("ul",{staticClass:"right"},[o("Dropdown",{staticClass:"dropdown action-item"},[o("a",{staticClass:"dropdown-toggle ai-button",attrs:{slot:"button"},slot:"button"},[o("v-icon",{attrs:{name:"list-ul",scale:"0.8"}}),e._v(" TestNet\n            ")],1),o("ul",{staticClass:"dropdown-menu dropdown-menu-actions round dropdown-menu-right",attrs:{slot:"dropdown"},slot:"dropdown"},[o("div",{staticClass:"dropdown-container net-settings"},[o("h3",[e._v("NetWorkInfo (ironman)")]),o("div",{staticClass:"meta-info"},[o("p",[e._v("chainId: 68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a")]),o("p",[e._v("endpoint: http://103.80.170.236:8870")])]),o("h3",[e._v("Create Account")]),o("div",{staticClass:"form-info"},[o("p",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.registerAccount,expression:"registerAccount"}],attrs:{type:"text",placeholder:"Account (12 char)"},domProps:{value:e.registerAccount},on:{input:function(_){_.target.composing||(e.registerAccount=_.target.value)}}})]),o("p",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.pubKey,expression:"pubKey"}],attrs:{type:"text",placeholder:"PublicKey"},domProps:{value:e.pubKey},on:{input:function(_){_.target.composing||(e.pubKey=_.target.value)}}})]),e.privateKey?o("p",[e._v("Private Key: "+e._s(e.privateKey)+"  "),o("span",{staticClass:"notify"},[e._v("(save this)")])]):e._e(),o("a",{staticClass:"btn btn-primary",on:{click:function(_){e.generateKeyPair()}}},[e._v("Create Keypair")]),o("a",{staticClass:"btn btn-primary",on:{click:function(_){e.createAccount()}}},[e._v("Create Account")])])])])]),o("Dropdown",{staticClass:"dropdown dropdown-user action-item"},[o("a",{staticClass:"dropdown-toggle ai-button",attrs:{slot:"button"},slot:"button"},["fibos"==e.sourceType?[o("img",{attrs:{src:t("72ae")}}),o("span",{staticClass:"el-dropdown-link"},[e.scatter&&!e.identity?o("span",{on:{click:function(_){e.connectScatter()}}},[e._v("Attach an Account")]):e._e(),e.scatter&&e.identity?o("span",[e._v(e._s(e.identity.name))]):e._e(),e.scatter?e._e():o("span",[o("a",{attrs:{href:"http://foironman.com/",target:"_blank"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\tInstall Ironman\n\t\t\t\t\t\t\t\t\t\t\t")])])])]:e._e(),"eos"==e.sourceType?[o("img",{staticStyle:{"margin-left":"6px"},attrs:{src:t("b963")}}),o("span",{staticClass:"el-dropdown-link"},[e.scatter&&!e.identity?o("span",{on:{click:function(_){e.connectScatter()}}},[e._v("Attach an Account")]):e._e(),e.scatter&&e.identity?o("span",[e._v(e._s(e.identity.name))]):e._e(),e.scatter?e._e():o("span",[o("a",{attrs:{href:"https://get-scatter.com/",target:"_blank"}},[e._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tInstall Scatter\n\t\t\t\t\t\t\t\t\t\t\t\t")])])])]:e._e()],2),o("ul",{staticClass:"dropdown-menu dropdown-menu-actions dropdown-menu-right",attrs:{slot:"dropdown"},slot:"dropdown"},[o("li",[o("a",{staticClass:"text-size-small text-uppercase",attrs:{href:"javacript:void(0);"},on:{click:function(_){e.signOut()}}},[e._v("signOut")])])])])],1)])]),e._m(0),o("div",{attrs:{id:"content"}},[o("div",{attrs:{id:"editor"}},[o("div",{staticClass:"pannel-main",staticStyle:{height:"calc(60% - 0.5px)"}},[o("div",{staticClass:"pannel-piece pannel",staticStyle:{width:"calc(33.3333% - 0.5px)"}},[e._m(1),o("codemirror",{attrs:{options:e.cmOptions},model:{value:e.contractCode,callback:function(_){e.contractCode=_},expression:"contractCode"}})],1),o("div",{staticClass:"gutter gutter-horizontal",staticStyle:{width:"1px"}}),o("div",{staticClass:"pannel-piece pannel",staticStyle:{width:"calc(33.3333% - 1px)"}},[e._m(2),o("codemirror",{attrs:{options:e.cmOptions},model:{value:e.abiCode,callback:function(_){e.abiCode=_},expression:"abiCode"}})],1),o("div",{staticClass:"gutter gutter-horizontal",staticStyle:{width:"1px"}}),o("div",{staticClass:"pannel-piece pannel",staticStyle:{width:"calc(33.3333% - 0.5px)"}},[e._m(3),o("codemirror",{attrs:{options:e.cmOptions},model:{value:e.clientCode,callback:function(_){e.clientCode=_},expression:"clientCode"}})],1)]),o("div",{staticClass:"gutter gutter-vertical",staticStyle:{height:"1px"}}),o("div",{staticClass:"pannel-main",staticStyle:{height:"calc(40% - 0.5px)"}},[e._m(4),o("div",{staticClass:"vue-codemirror"},[o("div",{staticClass:"CodeMirror cm-s-monokai"},[o("div",{staticClass:" results-container"},e._l(e.clientResults,function(_){return o("p",["string"==typeof _?[e._v(e._s(_))]:e._e(),"string"!=typeof _?o("vue-json-pretty",{attrs:{data:_}}):e._e()],2)}))])])])])])])},r=[function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{attrs:{id:"sidebar"}},[t("div",{attrs:{id:"sidebar-main"}},[t("div",{staticClass:"sidebarItem"},[t("h3",{staticClass:"toggler",attrs:{title:""}},[e._v("\n            Contract meta\n          ")]),t("div",{staticClass:"body"},[t("p",[t("label",[t("input",{attrs:{type:"text",name:"title",maxlength:"255",value:"",placeholder:"Untitled contract"}})])]),t("p",[t("label",[t("textarea",{attrs:{rows:"10",cols:"40",name:"description",placeholder:"No description"}})])]),t("p",{staticClass:"metaInfo"},[e._v("Add title to make the contract public")])])])]),t("div",{attrs:{id:"sidebar-bottom"}},[t("div",{staticClass:"twitterCont"})])])},function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"windowLabelCont"},[t("span",{staticClass:"windowLabel"},[e._v("Javascript")])])},function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"windowLabelCont"},[t("span",{staticClass:"windowLabel"},[e._v("ABI")])])},function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"windowLabelCont"},[t("span",{staticClass:"windowLabel"},[e._v("Client")])])},function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"windowLabelCont"},[t("span",{staticClass:"windowLabel"},[e._v("Results")])])}],i=t("d4dd"),c=i["a"],a=(t("7c55"),t("048f")),s=Object(a["a"])(c,n,r,!1,null,null,null);s.options.__file="App.vue";var d,l,u=s.exports,p=t("b8e5"),m={},E=Object(a["a"])(m,d,l,!1,null,null,null);E.options.__file="Pen.vue";var f=E.exports;o["a"].use(p["a"]);var h=new p["a"]({routes:[{path:"/",name:"home",component:f}]}),b=t("f2de");o["a"].use(b["a"]);var O=new b["a"].Store({state:{},mutations:{},actions:{}}),P=t("9838");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var w=t("c058"),M=t.n(w),D=(t("dfd2"),t("6f98"),t("dde4"));o["a"].config.productionTip=!1,o["a"].component("v-icon",D["a"]),o["a"].use(M.a),new o["a"]({router:h,store:O,render:function(e){return e(u)}}).$mount("#app")},6:function(e,_){},"711b":function(e,_,t){"use strict";var o=function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("li",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"dropdown ",class:{open:e.visible}},[e._t("button"),e._t("dropdown",null,{vShow:e.visible})],2)},n=[],r=(t("cf54"),t("3a0f"),t("a3a3"),t("4d0b"),{name:"Dropdown",data:function(){return{visible:!1,dropdownElm:null}},props:["html"],directives:{"click-outside":{bind:function(e,_,t){if("function"!==typeof _.value){var o=t.context.name,n="[Vue-click-outside:] provided expression '".concat(_.expression,"' is not a function, but has to be");o&&(n+="Found in component '".concat(o,"'")),console.warn(n)}var r=_.modifiers.bubble,i=function(t){(r||!e.contains(t.target)&&e!==t.target)&&_.value(t)};e.__vueClickOutside__=i,document.addEventListener("click",i)},unbind:function(e,_){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}},watch:{visible:function(){this.visible}},created:function(){console.log("Dropdown created",this.$slots)},beforeMount:function(){console.log("Dropdown beforeMount",this.$slots)},mounted:function(){var e=this;console.log("Dropdown mounted",this.$slots);var _=this.$slots.button[0].elm,t=this.dropdownElm=this.$slots.dropdown[0].elm;_.addEventListener("click",function(){console.log("click"),e.handleClick()}),t.addEventListener("click",function(_){"LI"==_.target.parentNode.nodeName&&(e.visible=!1),console.log("drop down click",_.target)}),this.popupItem=this.$el,console.log("triggerElm",_,this.$slots.button)},methods:{hide:function(){console.log("hide"),this.visible=!1},handleClick:function(){this.visible=!this.visible,console.log("toggle")},outside:function(){this.visible&&(this.visible=!1),console.log("click outside")}}}),i=r,c=(t("3ba0"),t("048f")),a=Object(c["a"])(i,o,n,!1,null,null,null);a.options.__file="Dropdown.vue";_["a"]=a.exports},"72ae":function(e,_,t){e.exports=t.p+"img/ironman.d6c103c3.png"},"7c55":function(e,_,t){"use strict";var o=t("432d"),n=t.n(o);n.a},8:function(e,_){},b963:function(e,_,t){e.exports=t.p+"img/scatter.e76351ee.png"},d4dd:function(module,__webpack_exports__,__webpack_require__){"use strict";var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("9382"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__),D_chrome_fodev_web_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("b267"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("bc72"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4141"),core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("cf54"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("25d7"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("3a0f"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("a3a3"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("4d0b"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_8__),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("0473"),codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(codemirror_mode_javascript_javascript_js__WEBPACK_IMPORTED_MODULE_9__),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("35c9"),codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(codemirror_theme_monokai_css__WEBPACK_IMPORTED_MODULE_10__),codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("bed5"),codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(codemirror_addon_selection_active_line_js__WEBPACK_IMPORTED_MODULE_11__),codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("2bfe"),codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(codemirror_addon_selection_mark_selection_js__WEBPACK_IMPORTED_MODULE_12__),codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("8c1b"),codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(codemirror_addon_search_searchcursor_js__WEBPACK_IMPORTED_MODULE_13__),codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("ef2b"),codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(codemirror_addon_hint_show_hint_js__WEBPACK_IMPORTED_MODULE_14__),codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("1caa"),codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(codemirror_addon_hint_show_hint_css__WEBPACK_IMPORTED_MODULE_15__),codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("369e"),codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(codemirror_addon_hint_javascript_hint_js__WEBPACK_IMPORTED_MODULE_16__),codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("29d0"),codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(codemirror_addon_scroll_annotatescrollbar_js__WEBPACK_IMPORTED_MODULE_17__),codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("81c9"),codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(codemirror_addon_search_matchesonscrollbar_js__WEBPACK_IMPORTED_MODULE_18__),codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("f43c"),codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_19___default=__webpack_require__.n(codemirror_addon_search_match_highlighter_js__WEBPACK_IMPORTED_MODULE_19__),codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("0ee9"),codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20___default=__webpack_require__.n(codemirror_mode_clike_clike_js__WEBPACK_IMPORTED_MODULE_20__),codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("0b8d"),codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(codemirror_addon_edit_matchbrackets_js__WEBPACK_IMPORTED_MODULE_21__),codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("9456"),codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_22___default=__webpack_require__.n(codemirror_addon_comment_comment_js__WEBPACK_IMPORTED_MODULE_22__),codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("df25"),codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_23___default=__webpack_require__.n(codemirror_addon_dialog_dialog_js__WEBPACK_IMPORTED_MODULE_23__),codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("72cd"),codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_24___default=__webpack_require__.n(codemirror_addon_dialog_dialog_css__WEBPACK_IMPORTED_MODULE_24__),codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("9223"),codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_25___default=__webpack_require__.n(codemirror_addon_search_search_js__WEBPACK_IMPORTED_MODULE_25__),codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("2c9f"),codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_26___default=__webpack_require__.n(codemirror_keymap_sublime_js__WEBPACK_IMPORTED_MODULE_26__),codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("adba"),codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_27___default=__webpack_require__.n(codemirror_addon_fold_foldgutter_css__WEBPACK_IMPORTED_MODULE_27__),codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("4463"),codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_28___default=__webpack_require__.n(codemirror_addon_fold_brace_fold_js__WEBPACK_IMPORTED_MODULE_28__),codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("d932"),codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_29___default=__webpack_require__.n(codemirror_addon_fold_comment_fold_js__WEBPACK_IMPORTED_MODULE_29__),codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("c07e"),codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_30___default=__webpack_require__.n(codemirror_addon_fold_foldcode_js__WEBPACK_IMPORTED_MODULE_30__),codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("1c65"),codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_31___default=__webpack_require__.n(codemirror_addon_fold_foldgutter_js__WEBPACK_IMPORTED_MODULE_31__),codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("219d"),codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_32___default=__webpack_require__.n(codemirror_addon_fold_indent_fold_js__WEBPACK_IMPORTED_MODULE_32__),codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("57db"),codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_33___default=__webpack_require__.n(codemirror_addon_fold_markdown_fold_js__WEBPACK_IMPORTED_MODULE_33__),codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("7ca8"),codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_34___default=__webpack_require__.n(codemirror_addon_fold_xml_fold_js__WEBPACK_IMPORTED_MODULE_34__),eosjs_ecc__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("a912"),eosjs_ecc__WEBPACK_IMPORTED_MODULE_35___default=__webpack_require__.n(eosjs_ecc__WEBPACK_IMPORTED_MODULE_35__),_components_Dropdown_vue__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("711b"),Eos=__webpack_require__("3597"),network={blockchain:"eos",host:"eos.greymass.com",port:443,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"},JSZip=__webpack_require__("07fd"),axios=__webpack_require__("7f43e"),testnet=axios.create({baseURL:"http://103.80.170.236",timeout:1e3,headers:{}}),foNetwork={name:"FIBOS Mainnet",protocol:"https",port:443,host:"api.fibos.rocks",blockchain:"fibos",chainId:"6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a"},foTestNetwork={name:"FIBOS Mainnet",protocol:"http",port:8870,host:"103.80.170.236",blockchain:"fibos",chainId:"68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a"};__webpack_exports__["a"]={data:function(){return{registerAccount:"",pubKey:"",privateKey:"",popupShow:!1,scatter:null,sourceType:"fibos",identity:null,eosClient:null,account:"",accountLoading:!1,smallMode:!1,votedProducers:[],aleardyVoted:!1,newProducers:["eosmedinodes"],mobileMenu:!1,cmOptions:{tabSize:4,styleActiveLine:!1,lineNumbers:!0,styleSelectedText:!1,line:!0,foldGutter:!0,gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],highlightSelectionMatches:{showToken:/\w/,annotateScrollbar:!0},mode:"text/javascript",hintOptions:{completeSingle:!1},keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"}},clientResults:[],clientResult:"",contractCode:"exports.hi = (user, content) => {\n    console.log(action);\n\n    if(!action.has_auth(user)){\n      console.log('无权限')\n    }\n\n    if(!action.is_account(user)){\n        console.log('请提供一个存在的帐号')\n    }else{\n        console.log('帐号存在')\n    }\n}",abiCode:'{\n    "version": "eosio::abi/1.0",\n    "structs": [\n    // 结构体 hi定义 \n    {\n        "name": "hi",\n        "base": "",\n        "fields": [{\n            "name": "user",\n            "type": "name"\n        }, {\n            "name": "content",\n            "type": "string"\n        }]\n    }],\n    "actions": [\n        // 定义了一个叫hi的action, 类型结构体为 hi\n        {\n            "name": "hi",\n            "type": "hi",\n            "ricardian_contract": ""\n        }\n    ]\n};',clientCode:"(async () => {\n  var res = await contract.hi('funis', '这是一个测试', {\n      authorization: 'testoooooooo'\n  });\n  console.log(res.processed.action_traces[0].console)\n  console.log(res);\n})(); "}},components:{Dropdown:_components_Dropdown_vue__WEBPACK_IMPORTED_MODULE_36__["a"]},mounted:function(){if(this.$options.components.VueJsonPretty=function(){return __webpack_require__.e("chunk-2d2250a1").then(__webpack_require__.t.bind(null,"e363",7))},document){var e=this;"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&window.addEventListener("hashchange",function(_){var t=window.location.hash.slice(1);e.$route.path!==t&&e.$router.push(t)},!1),"eos"==this.sourceType?(e.scatter=window.scatter,window.scatter&&(e.identity=window.scatter.identity),document.addEventListener("scatterLoaded",function(){console.log("scatterLoaded",window.scatter.identity),e.scatter=window.scatter,e.identity=window.scatter.identity})):(e.scatter=window.ironman,window.scatter&&(e.identity=window.ironman.identity),document.addEventListener("ironmanLoaded",function(){console.log("ironmanLoaded",window.ironman.identity),e.scatter=window.ironman,e.identity=window.ironman.identity})),setTimeout(function(){},5e3)}},watch:{identity:function(){var e=this;try{e.identity&&(e.identity.accounts.forEach(function(_){"eos"!=_.blockchain&&"fibos"!=_.blockchain||(e.identity.name=_.name+"@"+_.authority,e.identity.account=_.name)}),"eos"==this.sourceType?e.eosClient=window.scatter.eos(network,Eos,{broadcast:!0,sign:!0,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"},"https"):(console.log("self.identity",e.identity),e.eosClient=window.ironman.fibos(foTestNetwork,Eos,{broadcast:!0,chainId:foTestNetwork.chainId},"https"))),this.account=e.identity.account}catch(e){console.log(e)}}},methods:{removeProducer:function(e,_){this.votedProducers.splice(_,1)},popupVote:function(){var e=this.identity;console.log(e);var _=e.accounts[0],t={producers:this.newProducers.concat(this.votedProducers).sort(),proxy:"",voter:_.name};this.eosClient.transaction({actions:[{account:"eosio",name:"voteproducer",authorization:[{actor:_.name,permission:_.authority}],data:t}]}).then(function(e){console.log(e.transaction_id),alert("vote success")},function(e){alert("vote failed")}).catch(function(e){e=JSON.parse(e),self.dialogMessage="proxy info submit failed. <br> <span style='color:red'>"+e.error.details[0].message.split(":")[1]+"</span>",console.log("submmit error",e)}),console.log("popupSave")},donate:function(){},voteProducer:function(){var e=this;if(this.identity){this.newProducers=["fibosisfunoo"],this.popupShow=!0;var _=this.identity.accounts[0],t="bitfinexvp33";t=_.name,this.accountLoading=!0,this.eosClient.getAccount({account_name:t}).then(function(_){_.voter_info&&(e.votedProducers=_.voter_info.producers),e.accountLoading=!1,e.votedProducers.forEach(function(_){_==e.newProducers[0]&&(e.aleardyVoted=!0)}),console.log(_)}),console.log("voteProducer",this.eosClient)}else alert("please attach an account")},toggleMenu:function(){this.smallMode=!this.smallMode},toogleMobile:function(){this.mobileMenu=!this.mobileMenu},connectScatter:function(){var e=this;"fibos"==this.sourceType?(console.log("connectScatter ironman"),this.scatter.getIdentity({accounts:[{chainId:foTestNetwork.chainId,blockchain:"fibos"}]}).then(function(){console.log("Attach Identity"),console.log(e.scatter.identity),e.identity=window.ironman.identity}).catch(function(e){console.error(e)})):(console.log("connectScatter"),this.scatter.getIdentity({accounts:[{chainId:network.chainId,blockchain:network.blockchain}]}).then(function(){console.log("Attach Identity"),console.log(e.scatter.identity),e.identity=window.scatter.identity}).catch(function(e){console.error(e)}))},signOut:function(){var e=this;console.log("connectScatter"),this.scatter.forgetIdentity().then(function(){console.log("Detach Identity"),e.identity=window.scatter.identity}).catch(function(e){console.error(e)})},createAccount:function(){var e=this;this.registerAccount&&this.pubKey?Object(D_chrome_fodev_web_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark(function _(){var t;return regeneratorRuntime.wrap(function(_){while(1)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,testnet.post("/createAccount",{name:e.registerAccount,pubkey:e.pubKey});case 3:t=_.sent,console.log(t),_.next=10;break;case 7:_.prev=7,_.t0=_["catch"](0),console.log(_.t0);case 10:case"end":return _.stop()}},_,this,[[0,7]])}))():console.log(this.registerAccount,this.pubKey)},generateKeyPair:function(){var e=this;Object(D_chrome_fodev_web_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark(function _(){var t,o;return regeneratorRuntime.wrap(function(_){while(1)switch(_.prev=_.next){case 0:return _.next=2,eosjs_ecc__WEBPACK_IMPORTED_MODULE_35___default.a.randomKey();case 2:t=_.sent,o=eosjs_ecc__WEBPACK_IMPORTED_MODULE_35___default.a.privateToPublic(t,"FO"),console.log("generateKeyPair",t,o),e.privateKey=t,e.pubKey=o;case 7:case"end":return _.stop()}},_,this)}))()},deployCode:function deployCode(){var _this5=this;if(this.clientResults=[],this.eosClient){var json=eval("(function(){ return "+this.abiCode+"} )();");console.log(json),Object(D_chrome_fodev_web_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark(function e(){var _,t,o,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,_=new JSZip,_.file("index.js",_this5.contractCode),_this5.clientResults.push("Complie..."),e.next=6,_.generateAsync({type:"nodebuffer"});case 6:return t=e.sent,_this5.clientResults.push("Complie sucess..."),_this5.clientResults.push("Deploy..."),e.next=11,_this5.eosClient.setcode(_this5.account,0,0,t);case 11:return o=e.sent,e.next=14,_this5.eosClient.setabi(_this5.account,json);case 14:n=e.sent,_this5.clientResults.push("Deploy sucess..."),_this5.clientResults.push(n),_this5.clientResults.push(o),console.log(n,o),e.next=26;break;case 21:e.prev=21,e.t0=e["catch"](0),_this5.clientResults.push("Deploy failed...");try{_this5.clientResults.push(JSON.parse(e.t0))}catch(_){_this5.clientResults.push(e.t0)}console.log(e.t0);case 26:case"end":return e.stop()}},e,this,[[0,21]])}))()}else this.clientResults.push("account required, please attach an account")},runCode:function runCode(){var _this6=this;this.clientResults=[],this.eosClient?(this.clientResults.push("init contract..."),Object(D_chrome_fodev_web_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(regeneratorRuntime.mark(function _callee4(){var collectLogs,myContract,clientFunc,resultStr,self;return regeneratorRuntime.wrap(function _callee4$(_context4){while(1)switch(_context4.prev=_context4.next){case 0:return _context4.prev=0,collectLogs=function(e){var _=[];e.forEach(function(e){_.push(e)}),_.length?self.clientResults.push(_[0]):self.clientResults.push(_)},_context4.next=4,_this6.eosClient.contract(_this6.account);case 4:myContract=_context4.sent,_this6.clientResults.push("init contract sucess"),clientFunc=eval("(function(){ return function runtime(contract, console){ ;;"+_this6.clientCode+";; } })();"),resultStr=[],self=_this6,_this6.clientResults.push("excute...");try{clientFunc(myContract,{log:function(){console.log("clientFunc",arguments);var e=Array.prototype.slice.call(arguments);collectLogs(e)},error:function(){console.log("clientFunc",arguments);var e=Array.prototype.slice.call(arguments);collectLogs(e)}})}catch(e){_this6.clientResults.push("excute failed"),_this6.clientResults.push(e)}_context4.next=17;break;case 13:_context4.prev=13,_context4.t0=_context4["catch"](0),_this6.clientResults.push("init failed"),_this6.clientResults.push(_context4.t0);case 17:case"end":return _context4.stop()}},_callee4,this,[[0,13]])}))()):this.clientResults.push("account required, please attach an account")}}}},e2c2:function(e,_,t){}});
//# sourceMappingURL=app.cffeeec7.js.map