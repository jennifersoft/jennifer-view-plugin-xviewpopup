(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/main/client/index.js":
/*!**********************************!*\
  !*** ./src/main/client/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aries_extension_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aries-extension-js */ \"./node_modules/aries-extension-js/src/main.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n__webpack_require__(/*! ./index.scss */ \"./src/main/client/index.scss\");\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n    aries_extension_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setup({\n        hostName: jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"input[name=hostName]\").val()\n    });\n\n    jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"body\").height(jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).height());\n\n    setTimeout(function () {\n        var txids = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=txids]\").val();\n        var sid = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=sid]\").val();\n        var stime = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=startTime]\").val();\n        var etime = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").find(\"input[name=endTime]\").val();\n\n        var transactionIds = JSON.stringify(_defineProperty({}, sid, [txids]));\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").append(\"<input type='hidden' name='transactionIds' value='\" + transactionIds + \"' />\");\n\n        var emptyArray = JSON.stringify([]);\n        var emptyObject = JSON.stringify({});\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").append(\"<input type='hidden' name='transactionCount' value='1' />\");\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").append(\"<input type='hidden' name='transactionRows' value='\" + emptyArray + \"' />\");\n\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").append(\"<input type='hidden' name='groupRows' value='\" + emptyArray + \"' />\");\n\n        jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#frm_plugin\").append(\"<input type='hidden' name='instanceOids' value='\" + emptyObject + \"' />\");\n\n        if (!txids || !sid || !stime || !etime) {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#xviewpopup-main\").find(\".message\").html(\"All parameters are required.\");\n        } else {\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#xviewpopup-main\").find(\"#frm_plugin\").attr(\"action\", aries_extension_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].options.hostName + \"/popup/xviewAnalysis\").submit();\n        }\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./src/main/client/index.js?");

/***/ }),

/***/ "./src/main/client/index.scss":
/*!************************************!*\
  !*** ./src/main/client/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/main/client/index.scss?");

/***/ })

},[["./src/main/client/index.js","runtime","vendors"]]]);