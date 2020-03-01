module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "ZOZq":
/***/ (function(module) {

module.exports = JSON.parse("{\"__schema\":{\"types\":[{\"kind\":\"INTERFACE\",\"name\":\"Node\",\"possibleTypes\":[{\"name\":\"Issue\"},{\"name\":\"Taxonomy\"},{\"name\":\"PostType\"},{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"MediaItem\"},{\"name\":\"User\"},{\"name\":\"Comment\"},{\"name\":\"CommentAuthor\"},{\"name\":\"Revision\"},{\"name\":\"Category\"},{\"name\":\"Tag\"},{\"name\":\"Series\"},{\"name\":\"Plugin\"},{\"name\":\"Theme\"}]},{\"kind\":\"INTERFACE\",\"name\":\"BlocksPost\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"MediaItem\"},{\"name\":\"Revision\"}]},{\"kind\":\"INTERFACE\",\"name\":\"Block\",\"possibleTypes\":[{\"name\":\"CoreArchivesBlock\"},{\"name\":\"CoreAudioBlock\"},{\"name\":\"CoreButtonBlock\"},{\"name\":\"CoreCalendarBlock\"},{\"name\":\"CoreCategoriesBlock\"},{\"name\":\"CoreCodeBlock\"},{\"name\":\"CoreColumnBlock\"},{\"name\":\"CoreColumnsBlock\"},{\"name\":\"CoreCoverBlock\"},{\"name\":\"CoreEmbedAmazonKindleBlock\"},{\"name\":\"CoreEmbedAnimotoBlock\"},{\"name\":\"CoreEmbedBlock\"},{\"name\":\"CoreEmbedCloudupBlock\"},{\"name\":\"CoreEmbedCollegehumorBlock\"},{\"name\":\"CoreEmbedCrowdsignalBlock\"},{\"name\":\"CoreEmbedDailymotionBlock\"},{\"name\":\"CoreEmbedFacebookBlock\"},{\"name\":\"CoreEmbedFlickrBlock\"},{\"name\":\"CoreEmbedHuluBlock\"},{\"name\":\"CoreEmbedImgurBlock\"},{\"name\":\"CoreEmbedInstagramBlock\"},{\"name\":\"CoreEmbedIssuuBlock\"},{\"name\":\"CoreEmbedKickstarterBlock\"},{\"name\":\"CoreEmbedMeetupComBlock\"},{\"name\":\"CoreEmbedMixcloudBlock\"},{\"name\":\"CoreEmbedPolldaddyBlock\"},{\"name\":\"CoreEmbedRedditBlock\"},{\"name\":\"CoreEmbedReverbnationBlock\"},{\"name\":\"CoreEmbedScreencastBlock\"},{\"name\":\"CoreEmbedScribdBlock\"},{\"name\":\"CoreEmbedSlideshareBlock\"},{\"name\":\"CoreEmbedSmugmugBlock\"},{\"name\":\"CoreEmbedSoundcloudBlock\"},{\"name\":\"CoreEmbedSpeakerBlock\"},{\"name\":\"CoreEmbedSpeakerDeckBlock\"},{\"name\":\"CoreEmbedSpotifyBlock\"},{\"name\":\"CoreEmbedTedBlock\"},{\"name\":\"CoreEmbedTumblrBlock\"},{\"name\":\"CoreEmbedTwitterBlock\"},{\"name\":\"CoreEmbedVideopressBlock\"},{\"name\":\"CoreEmbedVimeoBlock\"},{\"name\":\"CoreEmbedWordpressBlock\"},{\"name\":\"CoreEmbedWordpressTvBlock\"},{\"name\":\"CoreEmbedYoutubeBlock\"},{\"name\":\"CoreFileBlock\"},{\"name\":\"CoreFreeformBlock\"},{\"name\":\"CoreGalleryBlock\"},{\"name\":\"CoreGroupBlock\"},{\"name\":\"CoreHeadingBlock\"},{\"name\":\"CoreHtmlBlock\"},{\"name\":\"CoreImageBlock\"},{\"name\":\"CoreLatestCommentsBlock\"},{\"name\":\"CoreLatestPostsBlock\"},{\"name\":\"CoreListBlock\"},{\"name\":\"CoreMediaTextBlock\"},{\"name\":\"CoreMissingBlock\"},{\"name\":\"CoreMoreBlock\"},{\"name\":\"CoreNextpageBlock\"},{\"name\":\"CoreParagraphBlock\"},{\"name\":\"CorePreformattedBlock\"},{\"name\":\"CorePullquoteBlock\"},{\"name\":\"CoreQuoteBlock\"},{\"name\":\"CoreRssBlock\"},{\"name\":\"CoreSearchBlock\"},{\"name\":\"CoreSeparatorBlock\"},{\"name\":\"CoreShortcodeBlock\"},{\"name\":\"CoreSpacerBlock\"},{\"name\":\"CoreSubheadBlock\"},{\"name\":\"CoreTableBlock\"},{\"name\":\"CoreTagCloudBlock\"},{\"name\":\"CoreTextColumnsBlock\"},{\"name\":\"CoreVerseBlock\"},{\"name\":\"CoreVideoBlock\"}]},{\"kind\":\"UNION\",\"name\":\"PostObjectTypesWithBlocksUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"}]},{\"kind\":\"UNION\",\"name\":\"PostObjectUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"MediaItem\"},{\"name\":\"Revision\"}]},{\"kind\":\"UNION\",\"name\":\"CommentAuthorUnion\",\"possibleTypes\":[{\"name\":\"User\"},{\"name\":\"CommentAuthor\"}]},{\"kind\":\"UNION\",\"name\":\"TermObjectUnion\",\"possibleTypes\":[{\"name\":\"Category\"},{\"name\":\"Tag\"},{\"name\":\"Series\"},{\"name\":\"Issue\"}]},{\"kind\":\"UNION\",\"name\":\"MenuItemObjectUnion\",\"possibleTypes\":[{\"name\":\"Post\"},{\"name\":\"Page\"},{\"name\":\"Category\"},{\"name\":\"Tag\"},{\"name\":\"Series\"},{\"name\":\"Issue\"},{\"name\":\"MenuItem\"}]},{\"kind\":\"UNION\",\"name\":\"CoreParagraphBlockAttributesUnion\",\"possibleTypes\":[{\"name\":\"CoreParagraphBlockAttributes\"},{\"name\":\"CoreParagraphBlockAttributesV2\"},{\"name\":\"CoreParagraphBlockAttributesV3\"}]},{\"kind\":\"UNION\",\"name\":\"CorePullquoteBlockAttributesUnion\",\"possibleTypes\":[{\"name\":\"CorePullquoteBlockAttributes\"},{\"name\":\"CorePullquoteBlockAttributesV2\"}]}]}}");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__("ePNP");
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");
var external_apollo_boost_default = /*#__PURE__*/__webpack_require__.n(external_apollo_boost_);

// EXTERNAL MODULE: external "apollo-cache-inmemory"
var external_apollo_cache_inmemory_ = __webpack_require__("oz4i");

// EXTERNAL MODULE: ./fragmentTypes.json
var fragmentTypes = __webpack_require__("ZOZq");

// CONCATENATED MODULE: ./lib/apollo.ts




const fragmentMatcher = new external_apollo_cache_inmemory_["IntrospectionFragmentMatcher"]({
  introspectionQueryResultData: fragmentTypes
});
/* harmony default export */ var lib_apollo = (external_next_with_apollo_default()(({
  initialState
}) => new external_apollo_boost_default.a({
  uri: 'http://localhost:8080/graphql',
  cache: new external_apollo_boost_["InMemoryCache"]({
    fragmentMatcher
  } || {})
})));
// CONCATENATED MODULE: ./pages/_app.tsx

var __jsx = external_react_default.a.createElement;




class _app_MyApp extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      apollo
    } = this.props;
    return __jsx(react_hooks_["ApolloProvider"], {
      client: apollo
    }, __jsx(Component, pageProps));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (lib_apollo(_app_MyApp));

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ })

/******/ });