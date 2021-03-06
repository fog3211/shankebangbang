require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(60);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_844ff57a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(92);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(61)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-844ff57a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_844ff57a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\detail\\message\\official-message\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-844ff57a", Component.options)
  } else {
    hotAPI.reload("data-v-844ff57a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 61:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_checkTime__ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      msg_list: [],
      show_msg_detail: false,
      msg_detail: {
        title: "",
        content: ""
      }
    };
  },

  methods: {
    showMsgDetail: function showMsgDetail(item, index) {
      this.msg_detail = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, item);
      this.show_msg_detail = true;
      this.msg_list[index].is_new = false;
    },
    hiddenMsgDetail: function hiddenMsgDetail() {
      this.show_msg_detail = false;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.msg_list = [];
    wx.request({
      url: "http://62.234.59.173/governMsg/governMsg",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function success(res) {
        if (res.statusCode == 200) {
          if (!res.data) return;
          res.data.map(function (item) {
            _this.msg_list.push({
              id: item.id,
              title: item.title,
              time: "2019-5-31",
              content: item.content
            });
          });
          // console.log(res.data);
        } else {
          // console.log(res.errMsg);
          _this.toast = {
            toastType: "error",
            showToast: true,
            content: "获取数据错误，请重试"
          };
        }
      }
    });
  }
});

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "official-message"
  }, [(_vm.msg_list.length > 0) ? _c('ul', {
    staticClass: "msg-box"
  }, _vm._l((_vm.msg_list), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "msg",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.showMsgDetail(item, index)
        }
      }
    }, [_c('div', {
      staticClass: "header"
    }, [_c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('span', {
      staticClass: "time"
    }, [_vm._v(_vm._s(item.time))]), _vm._v(" "), (item.is_new) ? _c('div', {
      staticClass: "weui-badge weui-badge_dot dot-badge"
    }) : _vm._e()]), _vm._v(" "), _c('span', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.content))])])
  })) : _c('div', {
    staticClass: "no-msg"
  }, [_c('img', {
    staticClass: "pic",
    attrs: {
      "src": "/static/images/other/no-msg.png",
      "alt": "no-msg"
    }
  })]), _vm._v(" "), (_vm.show_msg_detail) ? _c('div', {
    staticClass: "msg-detail",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.hiddenMsgDetail
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.msg_detail.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.msg_detail.content))])], 1)]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-844ff57a", esExports)
  }
}

/***/ })

},[59]);