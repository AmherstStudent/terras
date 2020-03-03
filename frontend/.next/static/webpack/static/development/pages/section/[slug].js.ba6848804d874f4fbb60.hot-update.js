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


var _jsxFileName = "/Users/dylan/projects/terras/frontend/pages/section/[slug].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\nquery CategoryPage($category: String) {\n  posts(where:{categoryName: $category}){\n    nodes{\n      title\n      excerpt\n      date\n      coAuthors{\n        display_name\n        slug\n        job_title\n      }\n      issues{\n        nodes{\n          name\n        }\n      }\n    }\n  }\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






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
      lineNumber: 12
    },
    __self: this
  }, "Loading Post...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Something wrong happened!");
  var articles = data.posts.nodes;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_base_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, categoryTitle), articles.map(function (article) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, article.title), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, article.excerpt), __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, article.date));
  })));
};

var CategoryDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default()(_templateObject());

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
//# sourceMappingURL=[slug].js.ba6848804d874f4fbb60.hot-update.js.map