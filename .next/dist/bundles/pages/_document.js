module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_server__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_jsx_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_jsx_server__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var resetStyle = '\n    a {\n        text-decoration: none;\n        color: inherit;\n    }\n\n    html,\n    body {\n        width: 100%;\n        overflow-x: hidden;\n    }\n\n    body {\n        width: 100%;\n        padding: 0;\n        margin: 0;\n    }\n    /* custom! */\n';

var MyDocument = function (_Document) {
    _inherits(MyDocument, _Document);

    function MyDocument() {
        _classCallCheck(this, MyDocument);

        return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
    }

    _createClass(MyDocument, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'html',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_next_document__["Head"],
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'style',
                        null,
                        resetStyle
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'manifest', href: '/manifest.json' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'apple-mobile-web-app-title', content: 'PWA' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'apple-touch-icon', href: '/launcher-icon-4x.png' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'msapplication-TileImage', content: '/launcher-icon-4x.png' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'msapplication-TileColor', content: '#2F3BA2' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: '/_next/static/style.css' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no', key: 'viewport' })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'body',
                    null,
                    this.props.customValue,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], null),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], null)
                )
            );
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var renderPage = _ref.renderPage;

            var _renderPage = renderPage(),
                html = _renderPage.html,
                head = _renderPage.head,
                errorHtml = _renderPage.errorHtml,
                chunks = _renderPage.chunks;

            var styles = __WEBPACK_IMPORTED_MODULE_2_styled_jsx_server___default()();

            return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
        }
    }]);

    return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ 22:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });