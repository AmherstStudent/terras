module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J2hS");


/***/ }),

/***/ "5M6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/base/Footer.tsx

var __jsx = external_react_default.a.createElement;

const FooterWrapper = external_styled_components_default.a.footer`
  background: #444;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
`;
const FooterContent = external_styled_components_default.a.div`
  font-family: Halyard Text;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #595959;
  max-width: 1100px;
  margin: 0 auto;
  color: white;
`;

const Footer = () => __jsx(FooterWrapper, null, __jsx(FooterContent, null, __jsx("span", null, "(c) 2020 The Amherst Student. All Rights Reserved.")));

/* harmony default export */ var base_Footer = (Footer);
// CONCATENATED MODULE: ./components/layout.tsx

var layout_jsx = external_react_["createElement"];




const Layout = ({
  children,
  title = 'The Amherst Student'
}) => layout_jsx(external_react_["Fragment"], null, layout_jsx(head_default.a, null, layout_jsx("title", {
  className: "jsx-3859879336"
}, title), layout_jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3859879336"
}), layout_jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-3859879336"
}), layout_jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Cormorant&display=swap",
  rel: "stylesheet",
  className: "jsx-3859879336"
}), layout_jsx("link", {
  href: "https://necolas.github.io/normalize.css/latest/normalize.css",
  rel: "stylesheet",
  className: "jsx-3859879336"
})), layout_jsx("main", {
  className: "jsx-3859879336"
}, children), layout_jsx(base_Footer, null), layout_jsx(style_default.a, {
  id: "3859879336"
}, [":root{--header-font:'Cormorant';--body-text:'URWBaskervilleW01-Regular';--span-font:'Halyard Text';--base-font-size:18px;--line-height:172%;}", "html{background:#E5E5E5;}", "main{max-width:1180px;margin:0 auto;padding-bottom:40px;}", "@media screen and (max-width:1200px){main{margin:0 5%;}}", "h1{font-family:var(--header-font);font-weight:600;}", "p{font-family:var(--body-text);line-height:var(--line-height);font-size:var(--base-font-size);color:#373A3C;}"]));

/* harmony default export */ var layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "J2hS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5M6V");
/* harmony import */ var _components_base_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("z9f5");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Category = ({
  slug
}) => {
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(CategoryDocument, {
    variables: {
      slug: slug
    }
  });
  if (loading) return __jsx("p", null, "Loading Post...");
  if (error) return __jsx("p", null, "Something wrong happened!");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_base_Navbar__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("p", null, slug, " H")));
};

const CategoryDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
query CategoryPage($slug: String) {
  pageBy(uri: $slug){
    __typename
    title
    id
    date
    desiredSlug
    excerpt
    featuredImage {
      sourceUrl
      altText
    }
    blocks {
      __typename
      ... on CoreHeadingBlock {
        __typename
        attributes {
          __typename
          ... on CoreHeadingBlockAttributes {
            __typename
            content
            level
          }
        }
      }
      ... on CoreImageBlock {
        attributes {
          __typename
          ... on CoreImageBlockAttributes {
            __typename
            url
            caption
          }
        }
      }
      ... on CoreQuoteBlock {
        __typename
        attributes {
          ... on CoreQuoteBlockAttributes {
            __typename
            quote: value
            source: citation
          }
        }
      }
      ... on CoreListBlock {
        __typename
        attributes {
          values
        }
      }
      ... on CoreParagraphBlock {
        __typename
        name
        attributes {
          ... on CoreParagraphBlockAttributesV3 {
            __typename
            content
            dropCap
            align
          }
        }
      }
      ... on CoreGalleryBlock {
        __typename
        attributes {
          ... on CoreGalleryBlockAttributes {
            __typename
            ids
            images
            linkTo
          }
        }
      }
    }
  }
}


`;
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "UZcZ":
/***/ (function(module, exports) {

module.exports = require("react-animated-burgers");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z9f5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-animated-burgers"
var external_react_animated_burgers_ = __webpack_require__("UZcZ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./components/base/SideNav.tsx

var __jsx = external_react_default.a.createElement;

const SidePanel = external_styled_components_default.a.div`
  width: 25vw;
  min-height: calc(100vw - 32px);
  background: #3f1f69;
  z-index: 400;
  position: fixed;
`;
const SidePanelWrapper = external_styled_components_default.a.div`
  margin: 0 auto;
  width: 90%;
`;
const NavSections = external_styled_components_default.a.ul`
  font-family: Halyard Text;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  padding-bottom: 15px;
  border-bottom: 5px solid white;
  li {
    padding-bottom: 10px;
    padding-top: 10px;
    list-style-type: none;
    font-size: 28px;
  }
`;
const NavPages = external_styled_components_default.a.ul`
  font-weight: normal;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  li {
    list-style-type: none;
    font-family: Halyard Text;
    font-style: italic;
    font-weight: 300;
    line-height: var(--line-height);
    font-size: var(--base-font-size);
  }
`;

const SideNav = () => __jsx(SidePanel, null, __jsx(SidePanelWrapper, null, __jsx(NavSections, null, __jsx("li", null, "NEWS"), __jsx("li", null, "OPINION"), __jsx("li", null, "ARTS AND LIVING"), __jsx("li", null, "SPORTS")), __jsx(NavPages, null, __jsx("li", null, "About"), __jsx("li", null, "Subscribe"), __jsx("li", null, "Advertisers"), __jsx("li", null, "Contact"))));

/* harmony default export */ var base_SideNav = (SideNav);
// CONCATENATED MODULE: ./components/base/Navbar.tsx

var Navbar_jsx = external_react_default.a.createElement;





const NavBarWrapper = external_styled_components_default.a.nav`
  height: 32px;
  padding: 16px 10px;
  background: white;
  margin: 0 auto;
  display: flex;
`;
const NavBarContent = external_styled_components_default.a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 0 0 100%; /* Let it fill the entire space horizontally */
`;
const Logo = external_styled_components_default.a.img`
  max-height: 18px;
  align-items: flex-start;
`;
const Socials = external_styled_components_default.a.ul`
  text-decoration: none;
  color: #000000;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  li {
    padding-left: 10px;
    padding-right: 10px;
    list-style-type: none;
  }
`;

function Navbar() {
  let {
    0: isActive,
    1: setIsActive
  } = Object(external_react_["useState"])(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx(NavBarWrapper, null, Navbar_jsx(NavBarContent, null, Navbar_jsx(external_react_animated_burgers_["HamburgerArrow"], {
    buttonWidth: 24,
    isActive: isActive,
    toggleButton: handleClick
  }), Navbar_jsx(Logo, {
    src: "/logo.svg",
    alt: "the Amherst Student"
  }), Navbar_jsx(Socials, null, Navbar_jsx("li", null, Navbar_jsx("a", null, Navbar_jsx(fa_["FaFacebookF"], null))), Navbar_jsx("li", null, Navbar_jsx("a", null, Navbar_jsx(fa_["FaInstagram"], null))), Navbar_jsx("li", null, Navbar_jsx("a", null, Navbar_jsx(fa_["FaTwitter"], null))), Navbar_jsx("li", null, Navbar_jsx("a", null, Navbar_jsx(fa_["FaSearch"], null)))))), isActive ? Navbar_jsx(base_SideNav, null) : '');
}

/* harmony default export */ var base_Navbar = __webpack_exports__["a"] = (Navbar);

/***/ })

/******/ });