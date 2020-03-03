webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/base/SideNav.tsx":
/*!*************************************!*\
  !*** ./components/base/SideNav.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/dylan/projects/terras/frontend/components/base/SideNav.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-weight: normal;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.85);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  li {\n    list-style-type: none;\n    font-family: Halyard Text;\n    font-style: italic;\n    font-weight: 300;\n    line-height: var(--line-height);\n    font-size: var(--base-font-size);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-family: Halyard Text;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.85);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  padding-bottom: 15px;\n  border-bottom: 5px solid white;\n  li {\n    padding-bottom: 10px;\n    padding-top: 10px;\n    list-style-type: none;\n    font-size: 28px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0 auto;\n  width: 90%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 25vw;\n  min-height: calc(100vw - 32px);\n  background: #3f1f69;\n  z-index: 400;\n  position: fixed;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SidePanel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var SidePanelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var NavSections = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject3());
var NavPages = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul(_templateObject4());

var SideNav = function SideNav() {
  return __jsx(SidePanel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(SidePanelWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(NavSections, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/section',
      query: {
        slug: "news"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "NEWS")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/section',
      query: {
        slug: "opinion"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "OPINION")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: {
      pathname: '/section',
      query: {
        slug: "arts-and-living"
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "ARTS AND LIVING")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "SPORTS")), __jsx(NavPages, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "About"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Subscribe"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Advertisers"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Contact"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ })

})
//# sourceMappingURL=index.js.e7598d1e0077b8d81648.hot-update.js.map