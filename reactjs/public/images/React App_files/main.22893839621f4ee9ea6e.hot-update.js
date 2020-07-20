webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/authService */ "./src/services/authService.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Introduction */ "./src/components/Introduction.jsx");
/* harmony import */ var _components_product_ProductContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/ProductContainer */ "./src/components/product/ProductContainer.jsx");
/* harmony import */ var _components_cart_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cart/Cart */ "./src/components/cart/Cart.jsx");
/* harmony import */ var _components_bannerTop_BannerTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bannerTop/BannerTop */ "./src/components/bannerTop/BannerTop.jsx");
/* harmony import */ var _components_DraggableList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/DraggableList */ "./src/components/DraggableList.jsx");
/* harmony import */ var _components_NotFound__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/NotFound */ "./src/components/NotFound.jsx");
/* harmony import */ var _components_FileUpload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/FileUpload */ "./src/components/FileUpload.jsx");
/* harmony import */ var _components_authorizationPage_RegisterForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/authorizationPage/RegisterForm */ "./src/components/authorizationPage/RegisterForm.jsx");
/* harmony import */ var _components_detail_Detail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/detail/Detail */ "./src/components/detail/Detail.jsx");
/* harmony import */ var _components_authorizationPage_AuthorizationPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/authorizationPage/AuthorizationPage */ "./src/components/authorizationPage/AuthorizationPage.jsx");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/footer/Footer */ "./src/components/footer/Footer.jsx");
/* harmony import */ var _components_profile_Profile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/profile/Profile */ "./src/components/profile/Profile.jsx");
/* harmony import */ var _components_commons_FetchingScreen__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/commons/FetchingScreen */ "./src/components/commons/FetchingScreen.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/App.js";


















function App(props) {
  // const { match } = props;
  // const { path } = match;
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        user = _useState2[0],
        setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const user = _services_authService__WEBPACK_IMPORTED_MODULE_3__["getCurrentUser"]();
    setUser(user);
  }, []);
  const Nested = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(props => {
    const children = props.children,
          _props$component = props.component,
          component = _props$component === void 0 ? "" : _props$component;
    const Component = component;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_bannerTop_BannerTop__WEBPACK_IMPORTED_MODULE_8__["default"], {
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), children, component && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }));
  }, [user]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SApp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_bannerTop_BannerTop__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    path: `/landing`,
    exact: true,
    component: _components_Introduction__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_commons_FetchingScreen__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }));
}

const SApp = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  * > {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  background-color: ${({
  theme
}) => theme.color.background};
`;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.22893839621f4ee9ea6e.hot-update.js.map