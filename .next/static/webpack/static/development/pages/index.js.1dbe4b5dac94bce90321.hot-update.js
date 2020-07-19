webpackHotUpdate("static\\development\\pages\\index.js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9mb290ZXIuanMiXSwibmFtZXMiOlsiRm9vdGVyIiwic3RhdGUiLCJibG9nIiwiZ2FsbGVyeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImNhdGVnb3J5IiwiZXJyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImxpc3QiLCJpbmRleCIsInN0eWxlcyIsInBob3RncmFnaHkiLCJmb290ZXIiLCJmbGV4SXRlbSIsInBhcmEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDRixvQkFBYTtBQUFBOztBQUFBOztBQUNUO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFVBQUksRUFBQyxFQURJO0FBRVRDLGFBQU8sRUFBQztBQUZDLEtBQWI7QUFGUztBQU1aOzs7O3dDQUNrQjtBQUFBOztBQUNmQyxXQUFLLENBQUMsbURBQUQsRUFBcUQ7QUFDdERDLGNBQU0sRUFBRSxLQUQ4QztBQUV0REMsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0I7QUFGWDtBQUY2QyxPQUFyRCxDQUFMLENBTUdDLElBTkgsQ0FNUSxVQUFBQyxNQUFNLEVBQUk7QUFDZEEsY0FBTSxDQUFDQyxJQUFQLEdBQWNGLElBQWQsQ0FBbUIsVUFBQUcsUUFBUSxFQUFJO0FBRTVCLGdCQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNWVCxnQkFBSSxFQUFDUSxRQUFRLENBQUNFO0FBREosV0FBZDtBQUdGLFNBTEQ7QUFNSCxPQWJELFdBYVMsVUFBQUMsR0FBRyxFQUFJO0FBQ1pDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsT0FmRDtBQWlCQVQsV0FBSyxDQUFDLHNEQUFELEVBQXdEO0FBQ3pEQyxjQUFNLEVBQUUsS0FEaUQ7QUFF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QSxDQURKLENBVEosRUFnQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUcsWUFBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREEsQ0FoQkosQ0FYSixDQURBLEVBaUNJO0FBQUcsaUJBQVMsRUFBRU8sNkRBQU0sQ0FBQ0ksSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFqQ0osQ0FESjtBQXdDSDs7OztFQXBHZ0JDLCtDOztBQXVHTnhCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xZGJlNGI1ZGFjOTRiY2U5MDMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY3NzL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGJsb2c6W10sXHJcbiAgICAgICAgICAgIGdhbGxlcnk6W11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL2Vkc2VydmVyLmhlcm9rdWFwcC5jb20vdXNlci9jYXRlZ29yeS9ibG9nJyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQuanNvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICBibG9nOnJlc3BvbnNlLmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZldGNoKCdodHRwczovL2Vkc2VydmVyLmhlcm9rdWFwcC5jb20vdXNlci9jYXRlZ29yeS9nYWxsZXJ5Jyx7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQuanNvbigpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICBnYWxsZXJ5OnJlc3BvbnNlLmNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYmxvZyA9IHRoaXMuc3RhdGUuYmxvZy5tYXAoKGxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMucGhvdGdyYWdoeX0+XHJcbiAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxzcGFuPntsaXN0fTwvc3Bhbj48L2E+IFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGdhbGxlcnkgPSB0aGlzLnN0YXRlLmdhbGxlcnkubWFwKChsaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnBob3RncmFnaHl9PlxyXG4gICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48c3Bhbj57bGlzdH08L3NwYW4+PC9hPiBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4SXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkdhbGxlcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtnYWxsZXJ5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkJsb2c8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtibG9nfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkhhdmUgYSBxdWVzdGlvbnM/PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMjAzIEZha2UgU3QuIE1vdW50YWluIFZpZXcsIFNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArMiAzOTIgMzkyOSAyMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzppbmZvQHlvdXJkb21haW4uY29tXCI+aW5mb0B5b3VyZG9tYWluLmNvbTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGFyYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0IMKpMjAyMCBBbGwgcmlnaHRzIHJlc2VydmVkIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=