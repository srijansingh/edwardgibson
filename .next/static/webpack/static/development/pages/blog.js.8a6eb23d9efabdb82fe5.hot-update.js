webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/layout */ "./components/Layout/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Blog_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Blog/blog */ "./components/Blog/blog.js");


var _jsxFileName = "C:\\javascript\\edward\\edwardgibson\\pages\\blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function HomePage(props) {
  var _this = this;

  var blog = props.data.data.map(function (list, index) {
    return __jsx(_components_Blog_blog__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: list._id,
      imagelink: list.imagelink,
      category: list.category,
      title: list.title,
      date: list.created,
      index: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    });
  });
  return __jsx(_components_Layout_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx("title", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, "Blog"), __jsx("meta", {
    name: "title",
    content: "Blog Edgiav",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }), __jsx("meta", {
    name: "description",
    content: "Clicking can be a passion, can be a hobby, can be any random job. But, what\u2019s more important is CLICKING.",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://edgiav.com/",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "Edgiav Blog",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Clicking can be a passion, can be a hobby, can be any random job. But, what\u2019s more important is CLICKING.",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "/logo/logo.png",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "twitter:card",
    content: "website",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "twitter:url",
    content: "https://edgiav.com/",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "twitter:title",
    content: "Edgiav Blog",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "twitter:description",
    content: "Clicking can be a passion, can be a hobby, can be any random job. But, what\u2019s more important is CLICKING.",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "twitter:image",
    content: "/logo/logo.png",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx("script", {
    src: "https://kit.fontawesome.com/a000f9134d.js",
    crossorigin: "anonymous",
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  })), __jsx("header", {
    className: "jsx-167904297" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: "jsx-167904297" + " " + "path",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "index.html",
    className: "jsx-167904297" + " " + "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Home", __jsx("div", {
    className: "jsx-167904297" + " " + "underLine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("h4", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, "Blog", __jsx("div", {
    className: "jsx-167904297" + " " + "underLine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })))), __jsx("h1", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Read Our Blog"), __jsx("p", {
    className: "jsx-167904297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.")), __jsx("div", {
    className: "jsx-167904297" + " " + "blog",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, blog), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "167904297",
    __self: this
  }, ".header.jsx-167904297{width:60%;padding:60px;}.header.jsx-167904297>*.jsx-167904297{margin-bottom:20px;}.path.jsx-167904297{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-transform:uppercase;}.header.jsx-167904297 p.jsx-167904297{color:rgb(156,156,156);}.link.jsx-167904297{-webkit-text-decoration:none;text-decoration:none;color:rgb(156,156,156);margin-right:15px;}.underLine.jsx-167904297{width:100%;padding:1px;background-color:rgb(156,156,156);}.header.jsx-167904297 h1.jsx-167904297{text-transform:capitalize;font-weight:800;}.blog.jsx-167904297{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxqYXZhc2NyaXB0XFxlZHdhcmRcXGVkd2FyZGdpYnNvblxccGFnZXNcXGJsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVvQixBQUlzQixBQUtjLEFBSU4sQUFLVyxBQUlKLEFBTVQsQUFNZSxBQUtkLFVBbENKLENBd0JJLFFBbkJoQixJQUpBLEFBYUEsQUFXdUMsR0FLbkIsZ0JBQ3BCLFFBYndCLE9BUXhCLGdCQVBrQixDQVZZLEFBMEJSLGlCQWZ0QixRQVZBLDRDQTBCa0IseURBRW5CLG9CQUFDIiwiZmlsZSI6IkM6XFxqYXZhc2NyaXB0XFxlZHdhcmRcXGVkd2FyZGdpYnNvblxccGFnZXNcXGJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2cvYmxvZ1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgYmxvZyA9IHByb3BzLmRhdGEuZGF0YS5tYXAoKGxpc3QsaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJsb2cgaWQ9e2xpc3QuX2lkfSAgIGltYWdlbGluaz17bGlzdC5pbWFnZWxpbmt9IGNhdGVnb3J5PXtsaXN0LmNhdGVnb3J5fSB0aXRsZT17bGlzdC50aXRsZX0gZGF0ZT17bGlzdC5jcmVhdGVkfSAgaW5kZXg9e2luZGV4fSAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkJsb2cgRWRnaWF2XCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDbGlja2luZyBjYW4gYmUgYSBwYXNzaW9uLCBjYW4gYmUgYSBob2JieSwgY2FuIGJlIGFueSByYW5kb20gam9iLiBCdXQsIHdoYXTigJlzIG1vcmUgaW1wb3J0YW50IGlzIENMSUNLSU5HLlwiIC8+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZWRnaWF2LmNvbS9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJFZGdpYXYgQmxvZ1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNsaWNraW5nIGNhbiBiZSBhIHBhc3Npb24sIGNhbiBiZSBhIGhvYmJ5LCBjYW4gYmUgYW55IHJhbmRvbSBqb2IuIEJ1dCwgd2hhdOKAmXMgbW9yZSBpbXBvcnRhbnQgaXMgQ0xJQ0tJTkcuXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2xvZ28vbG9nby5wbmdcIiAvPlxyXG5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2VkZ2lhdi5jb20vXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJFZGdpYXYgQmxvZ1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2xpY2tpbmcgY2FuIGJlIGEgcGFzc2lvbiwgY2FuIGJlIGEgaG9iYnksIGNhbiBiZSBhbnkgcmFuZG9tIGpvYi4gQnV0LCB3aGF04oCZcyBtb3JlIGltcG9ydGFudCBpcyBDTElDS0lORy5cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9sb2dvL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hMDAwZjkxMzRkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhdGhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyTGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJMaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgIFJlYWQgT3VyIEJsb2dcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEEgc21hbGwgcml2ZXIgbmFtZWQgRHVkZW4gZmxvd3MgYnkgdGhlaXIgcGxhY2UgYW5kIHN1cHBsaWVzIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSByZWdlbGlhbGlhLiBJdCBpcyBhIHBhcmFkaXNlbWF0aWMgY291bnRyeSwgaW4gd2hpY2ggcm9hc3RlZCBwYXJ0cyBvZiBzZW50ZW5jZXMgZmx5IGludG8geW91ciBtb3V0aC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ1wiPlxyXG4gICAgICAgICAgICB7YmxvZ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOjYwJTtcclxuICAgICAgICAgICAgcGFkZGluZzo2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaGVhZGVyID4gKntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wYXRoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaGVhZGVyIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoMTU2LCAxNTYsIDE1Nik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5saW5re1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYigxNTYsIDE1NiwgMTU2KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudW5kZXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTYsIDE1NiwgMTU2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmhlYWRlciBoMXtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJsb2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjUwcHhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIFxyXG4gICB0cnl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZWRnaWF2LmNvbS9hcGkvYmxvZycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxuICAgfVxyXG4gICBjYXRjaHtcclxuICAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl19 */\n/*@ sourceURL=C:\\\\javascript\\\\edward\\\\edwardgibson\\\\pages\\\\blog.js */"));
}

_c = HomePage;
HomePage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, _data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://api.edgiav.com/api/blog');

        case 3:
          res = _context.sent;
          _context.next = 6;
          return res.json();

        case 6:
          _data = _context.sent;
          return _context.abrupt("return", {
            data: _data
          });

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", data);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 10]]);
}));
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwicHJvcHMiLCJibG9nIiwiZGF0YSIsIm1hcCIsImxpc3QiLCJpbmRleCIsIl9pZCIsImltYWdlbGluayIsImNhdGVnb3J5IiwidGl0bGUiLCJjcmVhdGVkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQUE7O0FBRXJCLE1BQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVdBLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUM3QyxXQUVRLE1BQUMsNkRBQUQ7QUFBTSxRQUFFLEVBQUVELElBQUksQ0FBQ0UsR0FBZjtBQUFzQixlQUFTLEVBQUVGLElBQUksQ0FBQ0csU0FBdEM7QUFBaUQsY0FBUSxFQUFFSCxJQUFJLENBQUNJLFFBQWhFO0FBQTBFLFdBQUssRUFBRUosSUFBSSxDQUFDSyxLQUF0RjtBQUE2RixVQUFJLEVBQUVMLElBQUksQ0FBQ00sT0FBeEc7QUFBa0gsV0FBSyxFQUFFTCxLQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlI7QUFLRCxHQU5VLENBQWI7QUFRQSxTQUdFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFtQixXQUFPLEVBQUMsYUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFBO0FBQUE7QUFBQSx1dE9BSEY7QUFzR0Q7O0tBaEhNRixRO0FBa0hQQSxRQUFRLENBQUNZLGVBQVQsaU1BQTJCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBR1BDLEtBQUssQ0FBQyxpQ0FBRCxDQUhFOztBQUFBO0FBR25CQyxhQUhtQjtBQUFBO0FBQUEsaUJBSU5BLEdBQUcsQ0FBQ0MsSUFBSixFQUpNOztBQUFBO0FBSW5CWixlQUptQjtBQUFBLDJDQUtsQjtBQUNIQSxnQkFBSSxFQUFKQTtBQURHLFdBTGtCOztBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQVVmQSxJQVZlOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTNCO0FBY2VILHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjhhNmViMjNkOWVmYWJkYjgyZmU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dC9sYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9jb21wb25lbnRzL0Jsb2cvYmxvZ1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgYmxvZyA9IHByb3BzLmRhdGEuZGF0YS5tYXAoKGxpc3QsaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPEJsb2cgaWQ9e2xpc3QuX2lkfSAgIGltYWdlbGluaz17bGlzdC5pbWFnZWxpbmt9IGNhdGVnb3J5PXtsaXN0LmNhdGVnb3J5fSB0aXRsZT17bGlzdC50aXRsZX0gZGF0ZT17bGlzdC5jcmVhdGVkfSAgaW5kZXg9e2luZGV4fSAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG5cclxuXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8dGl0bGU+QmxvZzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRpdGxlXCIgY29udGVudD1cIkJsb2cgRWRnaWF2XCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDbGlja2luZyBjYW4gYmUgYSBwYXNzaW9uLCBjYW4gYmUgYSBob2JieSwgY2FuIGJlIGFueSByYW5kb20gam9iLiBCdXQsIHdoYXTigJlzIG1vcmUgaW1wb3J0YW50IGlzIENMSUNLSU5HLlwiIC8+XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZWRnaWF2LmNvbS9cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJFZGdpYXYgQmxvZ1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNsaWNraW5nIGNhbiBiZSBhIHBhc3Npb24sIGNhbiBiZSBhIGhvYmJ5LCBjYW4gYmUgYW55IHJhbmRvbSBqb2IuIEJ1dCwgd2hhdOKAmXMgbW9yZSBpbXBvcnRhbnQgaXMgQ0xJQ0tJTkcuXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiL2xvZ28vbG9nby5wbmdcIiAvPlxyXG5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2VkZ2lhdi5jb20vXCIgLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJFZGdpYXYgQmxvZ1wiIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2xpY2tpbmcgY2FuIGJlIGEgcGFzc2lvbiwgY2FuIGJlIGEgaG9iYnksIGNhbiBiZSBhbnkgcmFuZG9tIGpvYi4gQnV0LCB3aGF04oCZcyBtb3JlIGltcG9ydGFudCBpcyBDTElDS0lORy5cIiAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cIi9sb2dvL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hMDAwZjkxMzRkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhdGhcIj5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPVwiaW5kZXguaHRtbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyTGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICBCbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5kZXJMaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgIFJlYWQgT3VyIEJsb2dcclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIEEgc21hbGwgcml2ZXIgbmFtZWQgRHVkZW4gZmxvd3MgYnkgdGhlaXIgcGxhY2UgYW5kIHN1cHBsaWVzIGl0IHdpdGggdGhlIG5lY2Vzc2FyeSByZWdlbGlhbGlhLiBJdCBpcyBhIHBhcmFkaXNlbWF0aWMgY291bnRyeSwgaW4gd2hpY2ggcm9hc3RlZCBwYXJ0cyBvZiBzZW50ZW5jZXMgZmx5IGludG8geW91ciBtb3V0aC5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ1wiPlxyXG4gICAgICAgICAgICB7YmxvZ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOjYwJTtcclxuICAgICAgICAgICAgcGFkZGluZzo2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaGVhZGVyID4gKntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5wYXRoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaGVhZGVyIHB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjpyZ2IoMTU2LCAxNTYsIDE1Nik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5saW5re1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOnJnYigxNTYsIDE1NiwgMTU2KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAudW5kZXJMaW5le1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNTYsIDE1NiwgMTU2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmhlYWRlciBoMXtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJsb2d7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjUwcHhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgICAgIFxyXG4gICB0cnl7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZWRnaWF2LmNvbS9hcGkvYmxvZycpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGFcclxuICAgIH1cclxuICAgfVxyXG4gICBjYXRjaHtcclxuICAgICAgIHJldHVybiBkYXRhO1xyXG4gICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==