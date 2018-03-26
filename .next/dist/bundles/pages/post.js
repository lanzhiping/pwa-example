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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Divider__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_Menu__ = __webpack_require__(16);
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Paper");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(8);
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
var getMuiTheme_ = __webpack_require__(9);
var getMuiTheme__default = /*#__PURE__*/__webpack_require__.n(getMuiTheme_);

// EXTERNAL MODULE: external "material-ui/styles/MuiThemeProvider"
var MuiThemeProvider_ = __webpack_require__(10);
var MuiThemeProvider__default = /*#__PURE__*/__webpack_require__.n(MuiThemeProvider_);

// EXTERNAL MODULE: external "material-ui/styles/colors"
var colors_ = __webpack_require__(1);
var colors__default = /*#__PURE__*/__webpack_require__.n(colors_);

// EXTERNAL MODULE: ./node_modules/flexboxgrid/css/flexboxgrid.min.css
var flexboxgrid_min = __webpack_require__(11);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 11 */
/***/ (function(module, exports) {



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_FontIcon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_FontIcon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_FontIcon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Nav__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var containerStyle = {
    width: '100%',
    padding: 0,
    margin: 0
};

var App = function (_Component) {
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
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js').then(function () {
                    console.log('Service Worker Registered');
                });
            }

            this.setState({
                loading: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var titleLink = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '/' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    null,
                    'PWA'
                )
            );
            var navIcon = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                { href: '/nav' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'a',
                    null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_5_material_ui_FontIcon___default.a,
                        { className: 'material-icons', color: __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_colors__["white"], style: { marginTop: '12px' }, onClick: this.onNavClick },
                        'menu'
                    )
                )
            );

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: containerStyle },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4_material_ui_Drawer___default.a,
                    {
                        docked: false,
                        width: 300,
                        open: this.props.isNavOpen,
                        onRequestChange: this.props.toggleNav
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Nav__["a" /* default */], null)
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_AppBar___default.a, { title: titleLink, iconElementLeft: navIcon }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    this.props.children
                )
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

;

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
    return {
        isNavOpen: state.openNav };
}, function (dispatch) {
    return {
        toggleNav: function toggleNav() {
            return dispatch({ type: 'TOGGLE_NAV' });
        }
    };
})(App));

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Menu");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
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
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./containers/App.js
var App = __webpack_require__(12);

// EXTERNAL MODULE: external "babel-runtime/regenerator"
var regenerator_ = __webpack_require__(17);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(33);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "material-ui/Subheader"
var Subheader_ = __webpack_require__(34);
var Subheader__default = /*#__PURE__*/__webpack_require__.n(Subheader_);

// EXTERNAL MODULE: external "material-ui/FontIcon"
var FontIcon_ = __webpack_require__(4);
var FontIcon__default = /*#__PURE__*/__webpack_require__.n(FontIcon_);

// EXTERNAL MODULE: external "material-ui/Paper"
var Paper_ = __webpack_require__(6);
var Paper__default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "material-ui/TextField"
var TextField_ = __webpack_require__(35);
var TextField__default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "material-ui/FloatingActionButton"
var FloatingActionButton_ = __webpack_require__(36);
var FloatingActionButton__default = /*#__PURE__*/__webpack_require__.n(FloatingActionButton_);

// EXTERNAL MODULE: external "material-ui/IconButton"
var IconButton_ = __webpack_require__(37);
var IconButton__default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(18);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// CONCATENATED MODULE: ./containers/Post.js


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var style = {
    margin: 20,
    maxWidth: 500,
    padding: 10,
    textAlign: 'left',
    display: 'inline-block',
    width: '80%'
};

var picPreviewStyle = {
    margin: 'auto',
    width: 200,
    height: 200
};

var imgPreviewStyle = {
    objectFit: 'cover',
    height: '100%',
    width: '100%'
};

var Post_Post = function (_Component) {
    _inherits(Post, _Component);

    function Post() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Post);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Post.__proto__ || Object.getPrototypeOf(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            title: '',
            subtitle: '',
            picUrl: ''
        }, _this.addPost = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee() {
            var post, headers, res, result;
            return regenerator__default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            post = Object.assign({ time: new Date().toJSON() }, _this.state);
                            headers = { 'Content-Type': 'application/json' };
                            _context.next = 4;
                            return external__isomorphic_unfetch__default()('/post', { headers: headers, method: 'POST', body: JSON.stringify(post) });

                        case 4:
                            res = _context.sent;
                            _context.next = 7;
                            return res.json();

                        case 7:
                            result = _context.sent;

                            router__default.a.push({ pathname: '/' });

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onRefresh = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee2() {
            var res, image;
            return regenerator__default.a.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return external__isomorphic_unfetch__default()('/image');

                        case 2:
                            res = _context2.sent;
                            _context2.next = 5;
                            return res.text();

                        case 5:
                            image = _context2.sent;

                            _this.setState({ picUrl: image });

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Post, [{
        key: 'componentDidMount',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regenerator__default.a.mark(function _callee3() {
                var res, image;
                return regenerator__default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return external__isomorphic_unfetch__default()('/image');

                            case 2:
                                res = _context3.sent;
                                _context3.next = 5;
                                return res.text();

                            case 5:
                                image = _context3.sent;

                                this.setState({ picUrl: image });

                            case 7:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function componentDidMount() {
                return _ref4.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var inputField = external__react__default.a.createElement(
                'div',
                null,
                external__react__default.a.createElement(
                    Subheader__default.a,
                    null,
                    'Post Your Status'
                ),
                external__react__default.a.createElement(TextField__default.a, {
                    fullWidth: true,
                    value: this.state.name,
                    onChange: function onChange(event) {
                        return _this3.setState({ name: event.target.value });
                    },
                    floatingLabelText: 'Input Your Name'
                }),
                external__react__default.a.createElement('br', null),
                external__react__default.a.createElement(TextField__default.a, {
                    fullWidth: true,
                    value: this.state.title,
                    onChange: function onChange(event) {
                        return _this3.setState({ title: event.target.value });
                    },
                    floatingLabelText: 'Input Post Title'
                }),
                external__react__default.a.createElement('br', null),
                external__react__default.a.createElement(TextField__default.a, {
                    fullWidth: true,
                    value: this.state.subtitle,
                    onChange: function onChange(event) {
                        return _this3.setState({ subtitle: event.target.value });
                    },
                    floatingLabelText: 'Say Something Here',
                    multiLine: true,
                    rows: 2
                }),
                external__react__default.a.createElement('br', null),
                external__react__default.a.createElement('br', null),
                external__react__default.a.createElement(
                    'div',
                    { style: { textAlign: 'center' } },
                    external__react__default.a.createElement(Paper__default.a, { style: picPreviewStyle, zDepth: 1, rounded: false, children: external__react__default.a.createElement('img', { src: this.state.picUrl, style: imgPreviewStyle }) }),
                    external__react__default.a.createElement(
                        IconButton__default.a,
                        { iconClassName: 'material-icons', tooltip: 'Try others', onClick: this.onRefresh },
                        'refresh'
                    )
                ),
                external__react__default.a.createElement(
                    'div',
                    { style: { textAlign: 'right' } },
                    external__react__default.a.createElement(
                        FloatingActionButton__default.a,
                        { mini: true, onClick: this.addPost },
                        external__react__default.a.createElement(
                            FontIcon__default.a,
                            { className: 'material-icons' },
                            'send'
                        )
                    )
                )
            );

            return external__react__default.a.createElement(Paper__default.a, { style: style, zDepth: 1, children: inputField });
        }
    }]);

    return Post;
}(external__react_["Component"]);

/* harmony default export */ var containers_Post = (Post_Post);
// EXTERNAL MODULE: ./containers/Layout.js + 1 modules
var Layout = __webpack_require__(7);

// CONCATENATED MODULE: ./pages/post.js





/* harmony default export */ var pages_post = __webpack_exports__["default"] = (function () {
  return external__react__default.a.createElement(
    Layout["a" /* default */],
    null,
    external__react__default.a.createElement(
      App["a" /* default */],
      null,
      external__react__default.a.createElement(containers_Post, null)
    )
  );
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Subheader");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("material-ui/TextField");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("material-ui/FloatingActionButton");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("material-ui/IconButton");

/***/ })
/******/ ]);