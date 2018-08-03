(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../../../../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n__webpack_require__(/*! ../style/index.scss */ \"./style/index.scss\");\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n    aries.extension.setup({\n        hostName: jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"input[name=hostName]\").val(),\n        apiToken: \"jn49Pj3WQ4b\"\n    });\n\n    aries.extension.api(\"instance\", {\n        domain_id: 7908\n    }, function (res) {\n        console.log(res);\n    });\n\n    setTimeout(function () {\n        var txids = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=txids]\").val();\n        var sid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=sid]\").val();\n        var stime = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=stime]\").val();\n        var etime = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=etime]\").val();\n\n        if (txids == \"\" || sid == -1 || stime == -1 || etime == -1) {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#xviewpopup-main\").find(\".message\").html(\"All parameters are required.\");\n        } else {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#xviewpopup-main\").find(\"#frm_plugin\").attr(\"action\", aries.extension.options.hostName + \"/popup/xviewPointList\").submit();\n        }\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./script/index.js?");

/***/ }),

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./style/index.scss?");

/***/ })

},[["./script/index.js","runtime","vendors"]]]);