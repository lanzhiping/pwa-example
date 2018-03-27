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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FontIcon");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Divider__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FontIcon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_FontIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_FontIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function buildIcon(iconName) {
    var iconStyles = { marginRight: 24 };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_6_material_ui_FontIcon___default.a,
        { className: 'material-icons', style: iconStyles, color: __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_colors__["blue500"] },
        iconName
    );
}

var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav() {
        _classCallCheck(this, Nav);

        return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
    }

    _createClass(Nav, [{
        key: 'render',
        value: function render() {
            var homeIcon = buildIcon('home');
            var postIcon = buildIcon('rss_feed');
            var imageStyle = {
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: '0 0'
            };
            var navImage = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '../pwa-lighthouse.png', style: imageStyle });
            var paperStyle = {
                height: 200,
                width: '100%',
                marginBottom: 20,
                textAlign: 'center',
                display: 'inline-block'
            };

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: { textAlign: 'left' } },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default.a, { style: paperStyle, zDepth: 0, children: navImage }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_material_ui_Divider___default.a, null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__["Menu"],
                    { width: 300, autoWidth: false },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                        { href: '/' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__["MenuItem"],
                                { leftIcon: homeIcon, onClick: this.props.toggleNav },
                                'Topics'
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
                        { href: '/post' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'a',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__["MenuItem"],
                                { leftIcon: postIcon, onClick: this.props.toggleNav },
                                'Post A Message'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function () {
    return {};
}, function (dispatch) {
    return {
        toggleNav: function toggleNav() {
            return dispatch({ type: 'TOGGLE_NAV' });
        }
    };
})(Nav));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(9);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// CONCATENATED MODULE: ./reducers/index.js
function openNav() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var action = arguments[1];

    switch (action.type) {
        case "TOGGLE_NAV":
            return !state;
        default:
            return state;
    }
}

var reducers = {
    openNav: openNav
};

/* harmony default export */ var reducers_0 = (reducers);
// EXTERNAL MODULE: external "material-ui/styles/getMuiTheme"
var getMuiTheme_ = __webpack_require__(10);
var getMuiTheme__default = /*#__PURE__*/__webpack_require__.n(getMuiTheme_);

// EXTERNAL MODULE: external "material-ui/styles/MuiThemeProvider"
var MuiThemeProvider_ = __webpack_require__(11);
var MuiThemeProvider__default = /*#__PURE__*/__webpack_require__.n(MuiThemeProvider_);

// EXTERNAL MODULE: external "material-ui/styles/colors"
var colors_ = __webpack_require__(1);
var colors__default = /*#__PURE__*/__webpack_require__.n(colors_);

// EXTERNAL MODULE: ./node_modules/flexboxgrid/css/flexboxgrid.min.css
var flexboxgrid_min = __webpack_require__(12);
var flexboxgrid_min_default = /*#__PURE__*/__webpack_require__.n(flexboxgrid_min);

// CONCATENATED MODULE: ./containers/Layout.js











var store = Object(external__redux_["createStore"])(Object(external__redux_["combineReducers"])(reducers_0));
var muiTheme = getMuiTheme__default()({
    palette: {
        primary1Color: colors_["blue500"],
        primary2Color: colors_["blue700"],
        primary3Color: colors_["blue100"]
    }
}, {
    avatar: {
        borderColor: null
    },
    userAgent: 'all'
});

/* harmony default export */ var Layout = __webpack_exports__["a"] = (function (props) {
    return external__react__default.a.createElement(
        MuiThemeProvider__default.a,
        { muiTheme: muiTheme },
        external__react__default.a.createElement(
            external__react_redux_["Provider"],
            { store: store },
            props.children
        )
    );
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(2);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "material-ui/AppBar"
var AppBar_ = __webpack_require__(14);
var AppBar__default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "material-ui/Drawer"
var Drawer_ = __webpack_require__(15);
var Drawer__default = /*#__PURE__*/__webpack_require__.n(Drawer_);

// EXTERNAL MODULE: external "material-ui/FontIcon"
var FontIcon_ = __webpack_require__(4);
var FontIcon__default = /*#__PURE__*/__webpack_require__.n(FontIcon_);

// EXTERNAL MODULE: external "material-ui/styles/colors"
var colors_ = __webpack_require__(1);
var colors__default = /*#__PURE__*/__webpack_require__.n(colors_);

// EXTERNAL MODULE: ./containers/Nav.js
var Nav = __webpack_require__(6);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(5);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./containers/registerSW.js


var applicationServerPublicKey = 'BOy_M1QNP4M2GWL4ez0fx9pUjP0iHOpKnc2Z199ISspmUMIq7EAqcwlc-Q2EYWbbvgFRm2CbN3Ffsd03f876z4U';

function createSubOnServer(sub) {
    var headers = { 'Content-Type': 'application/json' };
    external__isomorphic_unfetch__default()('/subscription', { headers: headers, method: 'POST', body: JSON.stringify(sub) });
}

function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function subscribeUser(sw) {
    var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);

    sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    }).then(function (subscription) {
        console.log('[Service Worker] User is subscribed.', subscription);
        createSubOnServer(subscription);
    }).catch(function (err) {
        console.log('[Service Worker] Failed to subscribe the user: ', err);
    });
}

function getSubscription(sw) {
    sw.pushManager.getSubscription().then(function (subscription) {
        if (subscription) {
            console.log('[Service Worker] User IS subscribed', subscription);
            createSubOnServer(subscription);
        } else {
            console.log('[Service Worker] User is NOT subscribed. Now trying to subscribe');

            subscribeUser(sw);
        }
    });
}

/* harmony default export */ var registerSW = (function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js').then(function (swReg) {
            console.log('Service Worker Registered');

            if ('PushManager' in window) {
                getSubscription(swReg);
            }
        });
    }
});
// CONCATENATED MODULE: ./containers/App.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var containerStyle = {
    width: '100%',
    padding: 0,
    margin: 0
};

var App_App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, App);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: true
        }, _this.onNavClick = function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.props.toggleNav();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            registerSW();
            this.setState({
                loading: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var titleLink = external__react__default.a.createElement(
                link__default.a,
                { href: '/' },
                external__react__default.a.createElement(
                    'a',
                    null,
                    'PWA'
                )
            );
            var navIcon = external__react__default.a.createElement(
                link__default.a,
                { href: '/nav' },
                external__react__default.a.createElement(
                    'a',
                    null,
                    external__react__default.a.createElement(
                        FontIcon__default.a,
                        { className: 'material-icons', color: colors_["white"], style: { marginTop: '12px' }, onClick: this.onNavClick },
                        'menu'
                    )
                )
            );

            return external__react__default.a.createElement(
                'div',
                { style: containerStyle },
                external__react__default.a.createElement(
                    Drawer__default.a,
                    {
                        docked: false,
                        width: 300,
                        open: this.props.isNavOpen,
                        onRequestChange: this.props.toggleNav
                    },
                    external__react__default.a.createElement(Nav["a" /* default */], null)
                ),
                external__react__default.a.createElement(AppBar__default.a, { title: titleLink, iconElementLeft: navIcon }),
                external__react__default.a.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(external__react_["Component"]);

;

/* harmony default export */ var containers_App = __webpack_exports__["a"] = (Object(external__react_redux_["connect"])(function (state) {
    return {
        isNavOpen: state.openNav };
}, function (dispatch) {
    return {
        toggleNav: function toggleNav() {
            return dispatch({ type: 'TOGGLE_NAV' });
        }
    };
})(App_App));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__containers_Layout__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Nav__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__containers_Layout__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Nav__["a" /* default */], null)
  );
});

/***/ })
/******/ ]);