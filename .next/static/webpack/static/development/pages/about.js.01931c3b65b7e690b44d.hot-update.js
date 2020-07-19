webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Layout/sidebar.js":
/*!**************************************!*\
  !*** ./components/Layout/sidebar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/sidebar.module.css */ "./components/css/sidebar.module.css");
/* harmony import */ var _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ActiveLink */ "./components/Layout/ActiveLink.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Javascript\\Edward\\client\\components\\Layout\\sidebar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Sidebar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Sidebar, _Component);

  var _super = _createSuper(Sidebar);

  function Sidebar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Sidebar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Sidebar, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 18
        }
      }, __jsx("script", {
        src: "https://kit.fontawesome.com/a000f9134d.js",
        crossorigin: "anonymous",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, __jsx("aside", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.aside || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logo || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/logo/logo.png",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.ul || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }
      }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 74
        }
      }, "Home")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 81
        }
      }, "Gallery")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/blog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 78
        }
      }, "Blog")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 79
        }
      }, "About")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 81
        }
      }, "Contact"))), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.followUs || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }
      }, __jsx("h4", {
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 25
        }
      }, "Follow us here"), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.followUsNetworks || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://www.facebook.com/techronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      }, "  ", __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-facebook-f ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 91
        }
      })), __jsx("a", {
        href: "https://www.twitter.com/mytechronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }, " ", __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-twitter ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 90
        }
      })), __jsx("a", {
        href: "https://www.linkedin.com/company/techronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-instagram ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 96
        }
      })), __jsx("a", {
        href: "https://api.whatsapp.com/send?phone=7289991556",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-linkedin-in ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 101
        }
      }))))), this.state.open ? __jsx("aside", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.asideopen || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }
      }, __jsx("div", {
        onClick: this.handleClick,
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.cross || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }
      }, "Cut"), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.logo || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/logo/logo.png",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.ul || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 74
        }
      }, "Home")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/gallery",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 81
        }
      }, "Gallery")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/blog",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 78
        }
      }, "Blog")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/about",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 79
        }
      }, "About")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
        activeClassName: _css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
        href: "/contact",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }
      }, __jsx("a", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.link || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 81
        }
      }, "Contact"))), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.followUs || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx("h4", {
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 25
        }
      }, "Follow us here"), __jsx("div", {
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.followUsNetworks || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 25
        }
      }, __jsx("a", {
        href: "https://www.facebook.com/techronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }
      }, "  ", __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-facebook-f ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 91
        }
      })), __jsx("a", {
        href: "https://www.twitter.com/mytechronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 29
        }
      }, " ", __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-twitter ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 90
        }
      })), __jsx("a", {
        href: "https://www.linkedin.com/company/techronx",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-instagram ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 96
        }
      })), __jsx("a", {
        href: "https://api.whatsapp.com/send?phone=7289991556",
        target: "blank",
        className: "jsx-2658071834",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }
      }, __jsx("i", {
        className: "jsx-2658071834" + " " + "fab fa-linkedin-in ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 101
        }
      }))))) : __jsx("div", {
        onClick: this.handleClick,
        className: "jsx-2658071834" + " " + (_css_sidebar_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.hello || ""),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, "hello")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2658071834",
        __self: this
      }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen', 'Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxKYXZhc2NyaXB0XFxFZHdhcmRcXGNsaWVudFxcY29tcG9uZW50c1xcTGF5b3V0XFxzaWRlYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGbUMsQUFHOEIsU0FHQyxzSkFDeUIsbUNBQ0Qsa0NBQ3RDIiwiZmlsZSI6IkM6XFxKYXZhc2NyaXB0XFxFZHdhcmRcXGNsaWVudFxcY29tcG9uZW50c1xcTGF5b3V0XFxzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY3NzL3NpZGViYXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQWN0aXZlTGluayBmcm9tIFwiLi9BY3RpdmVMaW5rXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcblxyXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIG9wZW46ZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgb3BlbjohdGhpcy5zdGF0ZS5vcGVuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vYTAwMGY5MTM0ZC5qc1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5hc2lkZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+SG9tZTwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2dhbGxlcnlcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+R2FsbGVyeTwvYT48L0FjdGl2ZUxpbms+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2Jsb2dcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+QmxvZzwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2Fib3V0XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkFib3V0PC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5Db250YWN0PC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93VXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Rm9sbG93IHVzIGhlcmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd1VzTmV0d29ya3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90ZWNocm9ueFwiICB0YXJnZXQ9XCJibGFua1wiPiAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgXCIgID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL215dGVjaHJvbnhcIiB0YXJnZXQ9XCJibGFua1wiPiA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlciBcIiAgICA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS90ZWNocm9ueFwiIHRhcmdldD1cImJsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBcIiAgID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTcyODk5OTE1NTZcIiB0YXJnZXQ9XCJibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pbiBcIiA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5vcGVuID8gXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5hc2lkZW9wZW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNyb3NzfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DdXQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9sb2dvL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5Ib21lPC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvZ2FsbGVyeVwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5HYWxsZXJ5PC9hPjwvQWN0aXZlTGluaz4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvYmxvZ1wiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5CbG9nPC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvYWJvdXRcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+QWJvdXQ8L2E+PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9jb250YWN0XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkNvbnRhY3Q8L2E+PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dVc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Gb2xsb3cgdXMgaGVyZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93VXNOZXR3b3Jrc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3RlY2hyb254XCIgIHRhcmdldD1cImJsYW5rXCI+ICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZiBcIiAgPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vbXl0ZWNocm9ueFwiIHRhcmdldD1cImJsYW5rXCI+IDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyIFwiICAgID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3RlY2hyb254XCIgdGFyZ2V0PVwiYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtIFwiICAgPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NzI4OTk5MTU1NlwiIHRhcmdldD1cImJsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWxpbmtlZGluLWluIFwiID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvYXNpZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgOlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLmhlbGxvfT5cclxuICAgICAgICAgICAgICAgICAgICBoZWxsb1xyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgJ1JvYm90bycsICdPeHlnZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICdVYnVudHUnLCAnQ2FudGFyZWxsJywgJ0ZpcmEgU2FucycsICdEcm9pZCBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICAgICAgICAgICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiXX0= */\n/*@ sourceURL=C:\\\\Javascript\\\\Edward\\\\client\\\\components\\\\Layout\\\\sidebar.js */"));
    }
  }]);

  return Sidebar;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/css/sidebar.module.css":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/css/sidebar.module.css ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".sidebar_hello__L4kav{\r\n    position:fixed;\r\n    top:5px;\r\n    left:5px;\r\n    color:red;\r\n    padding:4px;\r\n    background:white;\r\n}\r\n.sidebar_cross__2NuBw{\r\n    position:absolute;\r\n    right:0px;\r\n    top:5px;\r\n    color:red;\r\n}\r\n\r\n.sidebar_aside__2yQE9{\r\n    background-color:#000;\r\n    position:fixed;\r\n    width:280px;\r\n    height:90vh;\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    padding:40px 0;\r\n}\r\n\r\n.sidebar_asideopen__3hLU5{\r\n    background-color:#000;\r\n    position:fixed;\r\n    width:280px;\r\n    height:90vh;\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    padding:40px 0;\r\n}\r\n\r\n.sidebar_logo__3nYx7{\r\n    text-align: center;\r\n    font-weight: 800 !important;\r\n    \r\n}\r\n\r\n.sidebar_logo__3nYx7 img{\r\n    height:160px;\r\n    height:160px;\r\n}\r\n\r\n.sidebar_logo__3nYx7 h1{\r\n    font-weight: 800;\r\n}\r\n\r\n\r\n.sidebar_ul__1A7Ic{\r\n    display:flex;\r\n    flex-direction:column;\r\n    min-height:25vh;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n}\r\n\r\n.sidebar_link__2LMoy{\r\n    text-decoration:none;\r\n    color:white;  \r\n}\r\n.sidebar_link__2LMoy:hover{\r\n    color:#ffff00;\r\n}\r\n.sidebar_active__efXGp{\r\n    color:#ffff00;\r\n    font-weight:bold;\r\n}\r\n\r\n.sidebar_followUs__Bytav{\r\n    width:100%;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n\r\n}\r\n.sidebar_followUsNetworks__2Xjre{\r\n    display:flex;\r\n    width:100%;\r\n    width:200px;\r\n    justify-content:space-between;\r\n}\r\n\r\n.sidebar_followUsNetworks__2Xjre a{\r\n    width:40px;\r\n    height:40px;\r\n    border-radius: 50%;\r\n    border:2px solid #ffff00;\r\n    text-decoration: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin:0 3px;\r\n    align-items: center;\r\n}\r\n\r\n.sidebar_followUsNetworks__2Xjre a:hover{\r\n    background-color:white;\r\n}\r\n.sidebar_followUsNetworks__2Xjre i{\r\n    font-size: 1.3rem;\r\n    color: #ffff00;\r\n}\r\n.sidebar_followUsNetworks__2Xjre a:hover i{\r\n    color:black;\r\n}\r\n\r\n@media only screen and (min-width:1000px){\r\n    .sidebar_hello__L4kav{\r\n        display:none;\r\n    }\r\n    .sidebar_asideopen__3hLU5{\r\n        display:none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:1000px){\r\n    .sidebar_aside__2yQE9{\r\n       display:none;\r\n    }\r\n\r\n    /* main{\r\n        margin-left: 0;\r\n    }\r\n\r\n    footer{\r\n       margin-left: 0;\r\n    } */\r\n}", "",{"version":3,"sources":["C:/Javascript/Edward/client/components/css/sidebar.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,OAAO;IACP,QAAQ;IACR,SAAS;IACT,WAAW;IACX,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,SAAS;IACT,OAAO;IACP,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,cAAc;IACd,WAAW;IACX,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;;AAE/B;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;;AAGA;IACI,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,8BAA8B;IAC9B,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,UAAU;IACV,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,kBAAkB;IAClB,wBAAwB;IACxB,qBAAqB;IACrB,aAAa;IACb,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;AAC1B;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;AACA;IACI,WAAW;AACf;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;OACG,YAAY;IACf;;IAEA;;;;;;OAMG;AACP","file":"sidebar.module.css","sourcesContent":[".hello{\r\n    position:fixed;\r\n    top:5px;\r\n    left:5px;\r\n    color:red;\r\n    padding:4px;\r\n    background:white;\r\n}\r\n.cross{\r\n    position:absolute;\r\n    right:0px;\r\n    top:5px;\r\n    color:red;\r\n}\r\n\r\n.aside{\r\n    background-color:#000;\r\n    position:fixed;\r\n    width:280px;\r\n    height:90vh;\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    padding:40px 0;\r\n}\r\n\r\n.asideopen{\r\n    background-color:#000;\r\n    position:fixed;\r\n    width:280px;\r\n    height:90vh;\r\n    display:flex;\r\n    flex-direction:column;\r\n    flex-wrap: wrap;\r\n    justify-content:space-between;\r\n    align-items: center;\r\n    padding:40px 0;\r\n}\r\n\r\n.logo{\r\n    text-align: center;\r\n    font-weight: 800 !important;\r\n    \r\n}\r\n\r\n.logo img{\r\n    height:160px;\r\n    height:160px;\r\n}\r\n\r\n.logo h1{\r\n    font-weight: 800;\r\n}\r\n\r\n\r\n.ul{\r\n    display:flex;\r\n    flex-direction:column;\r\n    min-height:25vh;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n}\r\n\r\n.link{\r\n    text-decoration:none;\r\n    color:white;  \r\n}\r\n.link:hover{\r\n    color:#ffff00;\r\n}\r\n.active{\r\n    color:#ffff00;\r\n    font-weight:bold;\r\n}\r\n\r\n.followUs{\r\n    width:100%;\r\n    display:flex;\r\n    flex-direction:column;\r\n    align-items: center;\r\n\r\n}\r\n.followUsNetworks{\r\n    display:flex;\r\n    width:100%;\r\n    width:200px;\r\n    justify-content:space-between;\r\n}\r\n\r\n.followUsNetworks a{\r\n    width:40px;\r\n    height:40px;\r\n    border-radius: 50%;\r\n    border:2px solid #ffff00;\r\n    text-decoration: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    margin:0 3px;\r\n    align-items: center;\r\n}\r\n\r\n.followUsNetworks a:hover{\r\n    background-color:white;\r\n}\r\n.followUsNetworks i{\r\n    font-size: 1.3rem;\r\n    color: #ffff00;\r\n}\r\n.followUsNetworks a:hover i{\r\n    color:black;\r\n}\r\n\r\n@media only screen and (min-width:1000px){\r\n    .hello{\r\n        display:none;\r\n    }\r\n    .asideopen{\r\n        display:none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width:1000px){\r\n    .aside{\r\n       display:none;\r\n    }\r\n\r\n    /* main{\r\n        margin-left: 0;\r\n    }\r\n\r\n    footer{\r\n       margin-left: 0;\r\n    } */\r\n}"]}]);
// Exports
exports.locals = {
	"hello": "sidebar_hello__L4kav",
	"cross": "sidebar_cross__2NuBw",
	"aside": "sidebar_aside__2yQE9",
	"asideopen": "sidebar_asideopen__3hLU5",
	"logo": "sidebar_logo__3nYx7",
	"ul": "sidebar_ul__1A7Ic",
	"link": "sidebar_link__2LMoy",
	"active": "sidebar_active__efXGp",
	"followUs": "sidebar_followUs__Bytav",
	"followUsNetworks": "sidebar_followUsNetworks__2Xjre"
};
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3NzL3NpZGViYXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJTaWRlYmFyIiwib3BlbiIsInNldFN0YXRlIiwic3RhdGUiLCJzdHlsZXMiLCJhc2lkZSIsImxvZ28iLCJ1bCIsImFjdGl2ZSIsImxpbmsiLCJmb2xsb3dVcyIsImZvbGxvd1VzTmV0d29ya3MiLCJhc2lkZW9wZW4iLCJoYW5kbGVDbGljayIsImNyb3NzIiwiaGVsbG8iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxPOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLFVBQUksRUFBQztBQURELEs7O3NOQUlNLFlBQU07QUFDaEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZELFlBQUksRUFBQyxDQUFDLE1BQUtFLEtBQUwsQ0FBV0Y7QUFEUCxPQUFkO0FBR0gsSzs7Ozs7Ozs2QkFDUTtBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUc7QUFBUSxXQUFHLEVBQUMsMkNBQVo7QUFBd0QsbUJBQVcsRUFBQyxXQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSCxDQURMLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFBQSw2Q0FBa0JHLDhEQUFNLENBQUNDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDZDQUFnQkQsOERBQU0sQ0FBQ0UsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LFNBQVMsc0JBQXNCLHFCQUFxQixtQkFBbUIsb0JBQW9CLHNDQUFzQyxLQUFLLDRCQUE0QixtQkFBbUIsb0JBQW9CLDJCQUEyQixpQ0FBaUMsOEJBQThCLHNCQUFzQixnQ0FBZ0MscUJBQXFCLDRCQUE0QixLQUFLLGtDQUFrQywrQkFBK0IsS0FBSyx3QkFBd0IsMEJBQTBCLHVCQUF1QixLQUFLLGdDQUFnQyxvQkFBb0IsS0FBSyxrREFBa0QsZUFBZSx5QkFBeUIsU0FBUyxtQkFBbUIseUJBQXlCLFNBQVMsS0FBSyxrREFBa0QsZUFBZSx3QkFBd0IsU0FBUyxvQkFBb0IsMkJBQTJCLFNBQVMsbUJBQW1CLDBCQUEwQixTQUFTLFFBQVEsR0FBRztBQUN6dE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMuMDE5MzFjM2I2NWI3ZTY5MGI0NGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2Nzcy9zaWRlYmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEFjdGl2ZUxpbmsgZnJvbSBcIi4vQWN0aXZlTGlua1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5cclxuY2xhc3MgU2lkZWJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBvcGVuOmZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW46IXRoaXMuc3RhdGUub3BlblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2EwMDBmOTEzNGQuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuYXNpZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2xvZ28vbG9nby5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkhvbWU8L2E+PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9nYWxsZXJ5XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkdhbGxlcnk8L2E+PC9BY3RpdmVMaW5rPiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9ibG9nXCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkJsb2c8L2E+PC9BY3RpdmVMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9hYm91dFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5BYm91dDwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2NvbnRhY3RcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+Q29udGFjdDwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd1VzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkZvbGxvdyB1cyBoZXJlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb2xsb3dVc05ldHdvcmtzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGVjaHJvbnhcIiAgdGFyZ2V0PVwiYmxhbmtcIj4gIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mIFwiICA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50d2l0dGVyLmNvbS9teXRlY2hyb254XCIgdGFyZ2V0PVwiYmxhbmtcIj4gPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXIgXCIgICAgPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvdGVjaHJvbnhcIiB0YXJnZXQ9XCJibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW0gXCIgICA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT03Mjg5OTkxNTU2XCIgdGFyZ2V0PVwiYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtbGlua2VkaW4taW4gXCIgPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9hc2lkZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUub3BlbiA/IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuYXNpZGVvcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jcm9zc30gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q3V0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbG9nby9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51bH0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLmFjdGl2ZX0gaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+SG9tZTwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2dhbGxlcnlcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+R2FsbGVyeTwvYT48L0FjdGl2ZUxpbms+ICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2Jsb2dcIj48YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSA+QmxvZzwvYT48L0FjdGl2ZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuYWN0aXZlfSBocmVmPVwiL2Fib3V0XCI+PGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gPkFib3V0PC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9IGhyZWY9XCIvY29udGFjdFwiPjxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9ID5Db250YWN0PC9hPjwvQWN0aXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9sbG93VXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Rm9sbG93IHVzIGhlcmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvbGxvd1VzTmV0d29ya3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90ZWNocm9ueFwiICB0YXJnZXQ9XCJibGFua1wiPiAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgXCIgID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL215dGVjaHJvbnhcIiB0YXJnZXQ9XCJibGFua1wiPiA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlciBcIiAgICA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS90ZWNocm9ueFwiIHRhcmdldD1cImJsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLWluc3RhZ3JhbSBcIiAgID48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTcyODk5OTE1NTZcIiB0YXJnZXQ9XCJibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1saW5rZWRpbi1pbiBcIiA+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDpcclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5oZWxsb30+XHJcbiAgICAgICAgICAgICAgICAgICAgaGVsbG9cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJyxcclxuICAgICAgICAgICAgICAgICAgICAnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAgICAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpZGViYXJfaGVsbG9fX0w0a2F2e1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgdG9wOjVweDtcXHJcXG4gICAgbGVmdDo1cHg7XFxyXFxuICAgIGNvbG9yOnJlZDtcXHJcXG4gICAgcGFkZGluZzo0cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6d2hpdGU7XFxyXFxufVxcclxcbi5zaWRlYmFyX2Nyb3NzX18yTnVCd3tcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OjBweDtcXHJcXG4gICAgdG9wOjVweDtcXHJcXG4gICAgY29sb3I6cmVkO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcl9hc2lkZV9fMnlRRTl7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHdpZHRoOjI4MHB4O1xcclxcbiAgICBoZWlnaHQ6OTB2aDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6NDBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcl9hc2lkZW9wZW5fXzNoTFU1e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB3aWR0aDoyODBweDtcXHJcXG4gICAgaGVpZ2h0Ojkwdmg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOjQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJfbG9nb19fM25ZeDd7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJfbG9nb19fM25ZeDcgaW1ne1xcclxcbiAgICBoZWlnaHQ6MTYwcHg7XFxyXFxuICAgIGhlaWdodDoxNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJfbG9nb19fM25ZeDcgaDF7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zaWRlYmFyX3VsX18xQTdJY3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIG1pbi1oZWlnaHQ6MjV2aDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyX2xpbmtfXzJMTW95e1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcXHJcXG4gICAgY29sb3I6d2hpdGU7ICBcXHJcXG59XFxyXFxuLnNpZGViYXJfbGlua19fMkxNb3k6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOiNmZmZmMDA7XFxyXFxufVxcclxcbi5zaWRlYmFyX2FjdGl2ZV9fZWZYR3B7XFxyXFxuICAgIGNvbG9yOiNmZmZmMDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyX2ZvbGxvd1VzX19CeXRhdntcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcbi5zaWRlYmFyX2ZvbGxvd1VzTmV0d29ya3NfXzJYanJle1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIHdpZHRoOjIwMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXJfZm9sbG93VXNOZXR3b3Jrc19fMlhqcmUgYXtcXHJcXG4gICAgd2lkdGg6NDBweDtcXHJcXG4gICAgaGVpZ2h0OjQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjZmZmZjAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46MCAzcHg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyX2ZvbGxvd1VzTmV0d29ya3NfXzJYanJlIGE6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XFxyXFxufVxcclxcbi5zaWRlYmFyX2ZvbGxvd1VzTmV0d29ya3NfXzJYanJlIGl7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBjb2xvcjogI2ZmZmYwMDtcXHJcXG59XFxyXFxuLnNpZGViYXJfZm9sbG93VXNOZXR3b3Jrc19fMlhqcmUgYTpob3ZlciBpe1xcclxcbiAgICBjb2xvcjpibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMDBweCl7XFxyXFxuICAgIC5zaWRlYmFyX2hlbGxvX19MNGthdntcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbiAgICAuc2lkZWJhcl9hc2lkZW9wZW5fXzNoTFU1e1xcclxcbiAgICAgICAgZGlzcGxheTpub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xcclxcbiAgICAuc2lkZWJhcl9hc2lkZV9fMnlRRTl7XFxyXFxuICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiBtYWlue1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgZm9vdGVye1xcclxcbiAgICAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gICAgfSAqL1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9KYXZhc2NyaXB0L0Vkd2FyZC9jbGllbnQvY29tcG9uZW50cy9jc3Mvc2lkZWJhci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsT0FBTztJQUNQLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtPQUNHLFlBQVk7SUFDZjs7SUFFQTs7Ozs7O09BTUc7QUFDUFwiLFwiZmlsZVwiOlwic2lkZWJhci5tb2R1bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oZWxsb3tcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHRvcDo1cHg7XFxyXFxuICAgIGxlZnQ6NXB4O1xcclxcbiAgICBjb2xvcjpyZWQ7XFxyXFxuICAgIHBhZGRpbmc6NHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xcclxcbn1cXHJcXG4uY3Jvc3N7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICByaWdodDowcHg7XFxyXFxuICAgIHRvcDo1cHg7XFxyXFxuICAgIGNvbG9yOnJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRle1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICB3aWR0aDoyODBweDtcXHJcXG4gICAgaGVpZ2h0Ojkwdmg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOjQwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFzaWRlb3BlbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDAwO1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgd2lkdGg6MjgwcHg7XFxyXFxuICAgIGhlaWdodDo5MHZoO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzo0MHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5sb2dve1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5sb2dvIGltZ3tcXHJcXG4gICAgaGVpZ2h0OjE2MHB4O1xcclxcbiAgICBoZWlnaHQ6MTYwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIGgxe1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udWx7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBtaW4taGVpZ2h0OjI1dmg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3tcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XFxyXFxuICAgIGNvbG9yOndoaXRlOyAgXFxyXFxufVxcclxcbi5saW5rOmhvdmVye1xcclxcbiAgICBjb2xvcjojZmZmZjAwO1xcclxcbn1cXHJcXG4uYWN0aXZle1xcclxcbiAgICBjb2xvcjojZmZmZjAwO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sbG93VXN7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG4uZm9sbG93VXNOZXR3b3Jrc3tcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbiAgICB3aWR0aDoyMDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5mb2xsb3dVc05ldHdvcmtzIGF7XFxyXFxuICAgIHdpZHRoOjQwcHg7XFxyXFxuICAgIGhlaWdodDo0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgI2ZmZmYwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOjAgM3B4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9sbG93VXNOZXR3b3JrcyBhOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG4uZm9sbG93VXNOZXR3b3JrcyBpe1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgY29sb3I6ICNmZmZmMDA7XFxyXFxufVxcclxcbi5mb2xsb3dVc05ldHdvcmtzIGE6aG92ZXIgaXtcXHJcXG4gICAgY29sb3I6YmxhY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDAwcHgpe1xcclxcbiAgICAuaGVsbG97XFxyXFxuICAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFzaWRlb3BlbntcXHJcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXHJcXG4gICAgLmFzaWRle1xcclxcbiAgICAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogbWFpbntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvb3RlcntcXHJcXG4gICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH0gKi9cXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVsbG9cIjogXCJzaWRlYmFyX2hlbGxvX19MNGthdlwiLFxuXHRcImNyb3NzXCI6IFwic2lkZWJhcl9jcm9zc19fMk51QndcIixcblx0XCJhc2lkZVwiOiBcInNpZGViYXJfYXNpZGVfXzJ5UUU5XCIsXG5cdFwiYXNpZGVvcGVuXCI6IFwic2lkZWJhcl9hc2lkZW9wZW5fXzNoTFU1XCIsXG5cdFwibG9nb1wiOiBcInNpZGViYXJfbG9nb19fM25ZeDdcIixcblx0XCJ1bFwiOiBcInNpZGViYXJfdWxfXzFBN0ljXCIsXG5cdFwibGlua1wiOiBcInNpZGViYXJfbGlua19fMkxNb3lcIixcblx0XCJhY3RpdmVcIjogXCJzaWRlYmFyX2FjdGl2ZV9fZWZYR3BcIixcblx0XCJmb2xsb3dVc1wiOiBcInNpZGViYXJfZm9sbG93VXNfX0J5dGF2XCIsXG5cdFwiZm9sbG93VXNOZXR3b3Jrc1wiOiBcInNpZGViYXJfZm9sbG93VXNOZXR3b3Jrc19fMlhqcmVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=