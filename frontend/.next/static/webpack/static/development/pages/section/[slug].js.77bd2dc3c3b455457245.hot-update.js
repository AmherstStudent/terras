webpackHotUpdate("static/development/pages/section/[slug].js",{

/***/ "./pages/section/[slug].tsx":
/*!**********************************!*\
  !*** ./pages/section/[slug].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_base_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/base/Navbar */ "./components/base/Navbar.tsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_section_CategoryHead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/section/CategoryHead */ "./components/section/CategoryHead.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/util */ "./components/util.tsx");


var _jsxFileName = "/Users/dylan/projects/terras/frontend/pages/section/[slug].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery CategoryPage($category: String) {\n  posts(where:{categoryName: $category}){\n    nodes{\n      title\n      excerpt\n      date\n      coAuthors{\n        display_name\n        slug\n        job_title\n      }\n      issues{\n        nodes{\n          name\n        }\n      }\n    }\n  }\n}\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nfont-family: Halyard Text;\nfont-style: italic;\nfont-weight: 300;\nfont-size: 16px;\nline-height: 23px;\ncolor: #000000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nfont-family: Cormorant;\nfont-style: normal;\nfont-weight: bold;\nfont-size: 28px;\nline-height: 34px;\ncolor: #000000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var Title = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h2(_templateObject());
var SubText = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p(_templateObject2());

var Section = function Section(_ref) {
  var slug = _ref.slug;
  var categoryTitle = slug.replace(/-/g, ' ');

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(CategoryDocument, {
    variables: {
      category: categoryTitle
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Loading Post...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Something wrong happened!");
  var articles = data.posts.nodes;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_base_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_components_section_CategoryHead__WEBPACK_IMPORTED_MODULE_7__["default"], {
    category: categoryTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, categoryTitle), articles.map(function (article) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Title, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, article.title), __jsx(_components_util__WEBPACK_IMPORTED_MODULE_9__["AuthorNames"], {
      authors: article.coAuthors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx(SubText, {
      dangerouslySetInnerHTML: article.excerpt,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, article.date));
  })));
};

var CategoryDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject3());

Section.getInitialProps = function _callee(_ref2) {
  var query;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          return _context.abrupt("return", {
            slug: query.slug
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ })

})
//# sourceMappingURL=[slug].js.77bd2dc3c3b455457245.hot-update.js.map