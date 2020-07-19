webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Layout/footer.js":
/*!*************************************!*\
  !*** ./components/Layout/footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/footer.module.css */ "./components/css/footer.module.css");
/* harmony import */ var _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_footer_module_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "C:\\Javascript\\Edward\\client\\components\\Layout\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Footer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    _this = _super.call(this);
    _this.state = {
      blog: [],
      gallery: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('https://edserver.herokuapp.com/user/category/blog', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        result.json().then(function (response) {
          _this2.setState({
            blog: response.category
          });
        });
      })["catch"](function (err) {
        console.log(err);
      });
      fetch('https://edserver.herokuapp.com/user/category/gallery', {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      }).then(function (result) {
        result.json().then(function (response) {
          _this2.setState({
            gallery: response.category
          });
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var blog = this.state.blog.map(function (list, index) {
        return __jsx("li", {
          key: index,
          className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.photgraghy,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 17
          }
        }, __jsx("a", {
          href: "#",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 20
          }
        }, __jsx("span", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 32
          }
        }, list)));
      });
      var gallery = this.state.gallery.map(function (list, index) {
        return __jsx("li", {
          key: index,
          className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.photgraghy,
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }
        }, __jsx("a", {
          href: "#",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 20
          }
        }, __jsx("span", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 32
          }
        }, list)));
      });
      return __jsx("footer", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.footer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.flexItem,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.category,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, "Gallery"), gallery), __jsx("div", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.category,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      }, "Blog"), blog), __jsx("div", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.category,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }
      }, "Have a questions?"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, "203 Fake St. Mountain View, San Francisco, California, USA"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 25
        }
      }, "+2 392 3929 210"))), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: "mailto:info@yourdomain.com",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }
      }, "info@yourdomain.com")))), __jsx("p", {
        className: _css_footer_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.para,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }, "Copyright \xA92020 All rights reserved"));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic3RhdGUiLCJibG9nIiwiZ2FsbGVyeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImNhdGVnb3J5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImxpc3QiLCJpbmRleCIsInN0eWxlcyIsInBob3RncmFnaHkiLCJmb290ZXIiLCJmbGV4SXRlbSIsInBhcmEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixvQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBQyxFQURJO0FBRVRDLGFBQU8sRUFBQztBQUZDLEtBQWI7QUFGUztBQU1aOzs7O3dDQUNrQjtBQUFBOztBQUNmQyxXQUFLLENBQUMsbURBQUQsRUFBcUQ7QUFDdERDLGNBQU0sRUFBRSxLQUQ4QztBQUV0REMsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0I7QUFGWDtBQUY2QyxPQUFyRCxDQUFMLENBTUdDLElBTkgsQ0FNUSxVQUFBQyxNQUFNLEVBQUk7QUFDZEEsY0FBTSxDQUFDQyxJQUFQLEdBQWNGLElBQWQsQ0FBbUIsVUFBQUcsUUFBUSxFQUFJO0FBRTVCLGdCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWVCxnQkFBSSxFQUFDUSxRQUFRLENBQUNFO0FBREosV0FBZDtBQUdGLFNBTEQ7QUFNSCxPQWJELFdBYVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsT0FmRDtBQWlCQVQsV0FBSyxDQUFDLHNEQUFELEVBQXdEO0FBQ3pEQyxjQUFNLEVBQUUsS0FEaUQ7QUFF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U0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURBLENBREosQ0FUSixFQWdCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBRyxZQUFJLEVBQUMsNEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEQSxDQWhCSixDQVhKLENBREEsRUFpQ0k7QUFBRyxpQkFBUyxFQUFFTyw2REFBTSxDQUFDSSxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQWpDSixDQURKO0FBd0NIOzs7O0VBcEdnQkMsK0M7O0FBdUdOeEIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLjFiOGFjMjYxNDk0NzU0MTZlNGM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jc3MvZm9vdGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgYmxvZzpbXSxcclxuICAgICAgICAgICAgZ2FsbGVyeTpbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZWRzZXJ2ZXIuaGVyb2t1YXBwLmNvbS91c2VyL2NhdGVnb3J5L2Jsb2cnLHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5qc29uKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgIGJsb2c6cmVzcG9uc2UuY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZWRzZXJ2ZXIuaGVyb2t1YXBwLmNvbS91c2VyL2NhdGVnb3J5L2dhbGxlcnknLHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5qc29uKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgIGdhbGxlcnk6cmVzcG9uc2UuY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCBibG9nID0gdGhpcy5zdGF0ZS5ibG9nLm1hcCgobGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5waG90Z3JhZ2h5fT5cclxuICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+PHNwYW4+e2xpc3R9PC9zcGFuPjwvYT4gXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QgZ2FsbGVyeSA9IHRoaXMuc3RhdGUuZ2FsbGVyeS5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMucGhvdGdyYWdoeX0+XHJcbiAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuPntsaXN0fTwvc3Bhbj48L2E+IFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhJdGVtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9ID5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+R2FsbGVyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2dhbGxlcnl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+QmxvZzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jsb2d9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+SGF2ZSBhIHF1ZXN0aW9ucz88L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMDMgRmFrZSBTdC4gTW91bnRhaW4gVmlldywgU2FuIEZyYW5jaXNjbywgQ2FsaWZvcm5pYSwgVVNBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsyIDM5MiAzOTI5IDIxMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmluZm9AeW91cmRvbWFpbi5jb21cIj5pbmZvQHlvdXJkb21haW4uY29tPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5cclxuICAgICAgICAgICAgICAgICAgICBDb3B5cmlnaHQgwqkyMDIwIEFsbCByaWdodHMgcmVzZXJ2ZWQgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZm9vdGVyPlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==