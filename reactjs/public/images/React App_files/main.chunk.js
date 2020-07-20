(this["webpackJsonpecommerce"] = this["webpackJsonpecommerce"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/DraggableItem.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/css/DraggableItem.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".animated, .placeholder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  direction: row;\n  justify-content: space-between;\n  position: absolute;\n  width: 80%;\n  height: 50px;\n  overflow: visible;\n  pointer-events: auto;\n  transform-origin: 50% 50% 0px;\n  border-radius: 5px;\n  color: white;\n  line-height: 90px;\n  font-size: 14.5px;\n  background: white;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-top: 10px;\n}\n\n.placeholder {\n  position: relative;\n  pointer-events: none;\n  line-height: 0;\n  background: transparent;\n  margin: 10px;\n}\n\n.draggableZone {\n  float: right;\n  width: 20%;\n  height: 100%;\n  border-radius: 0 5px 5px 0;\n  background-color: #e44848;\n  cursor: grab;\n  position: relative;\n  top: -5px;\n  left: 5px;\n}\n\n.draggableZone::after {\n  content: \"\";\n  position: absolute;\n  top: 5px;\n  left: -5px;\n  width: 100%;\n  height: 100%;\n  z-index: -10;\n  border-radius: 0 5px 5px 0;\n  background-color: rgba(0, 0, 0, 0.507);\n}\n\n.name {\n  width: 100%;\n  margin-right: 50px;\n  height: 100%;\n  text-align: center;\n  line-height: 50px;\n  vertical-align: middle;\n  color: black;\n  cursor: default;\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/IntroCarousel.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/css/IntroCarousel.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ant-carousel .slick-slide {\n  text-align: center;\n  height: 160px;\n  background: transparent;\n  overflow: hidden;\n}\n\n.ant-carousel .slick-slide h3 {\n  color: #fff;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/Introduction.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/css/Introduction.css ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".information-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 400px;\n  padding: 20px;\n  transition: .2s ease-in;\n}\n\n.information-card > svg {\n  width: 50px;\n  margin: 10px;\n  transition: .2s ease-in;\n}\n\n.information-card > h3 {\n  font-size: 1.2rem;\n  margin: 10px;\n  font-weight: bold;\n}\n\n.information-card > p {\n  text-align: center;\n}\n\n.information-card:hover {\n  cursor: pointer;\n  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);\n}\n\n.information-card:hover > svg {\n  animation: shake .2s linear;\n}\n\n@keyframes shake {\n  0% {\n    transform: rotate(20deg);\n  }\n  25% {\n    transform: rotate(-20deg);\n  }\n  50% {\n    transform: rotate(0deg);\n    transform: scale(1.2);\n  }\n  75% {\n    transform: rotate(20deg);\n  }\n  100% {\n    transform: rotate(-20deg);\n    transform: scale(1.3);\n  }\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/OuterContainer.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/css/OuterContainer.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".hoveringWorkspaceOuterContainer {\n  position: absolute;\n  left: 50px;\n  bottom: 300px;\n  width: 30vw;\n}\n\n.hoveringWorkspaceCommon {\n  position: absolute;\n  width: 100%;\n}\n\n#hoveringWorkspaceOne {\n  z-index: 102;\n  top: -6vh;\n  animation: hover 2.5s ease infinite;\n  animation-delay: -0.45s;\n}\n\n#hoveringWorkspaceTwo {\n  z-index: 101;\n  top: -3vh;\n  animation: hover 2.5s ease infinite;\n  animation-delay: -0.25s;\n}\n\n#hoveringWorkspaceThree {\n  z-index: 100;\n  top: 0;\n  animation: hover 2.5s ease infinite;\n  animation-delay: -0.65s;\n}\n\n@keyframes hover {\n  0% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0.15, 0.41, 0.56, 1.04);\n  }\n  25% {\n    transform: translateY(-6.25px);\n    animation-timing-function: cubic-bezier(0.51, -0.05, 0.85, 0.82);\n  }\n  50% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0.15, 0.41, 0.56, 1.04);\n  }\n  75% {\n    transform: translateY(6.25px);\n    animation-timing-function: cubic-bezier(0.51, -0.05, 0.85, 0.82);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/StarBox.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/css/StarBox.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".starBox {\n  width: 10%;\n  height: 80%;\n}\n\n.starBox:hover {\n  cursor: pointer;\n}\n\n.yellowStar {\n  transform: translateY(-25px) !important;\n}\n\n.yellowStar .ray {\n  visibility: hidden;\n  animation: tick 0.5s ease-in;\n  transition: 0.1s ease-in;\n}\n\n@keyframes tick {\n  0% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  100% {\n    visibility: hidden;\n  }\n}\n\n.blackStar {\n  color: rgba(0, 0, 0, 0.185);\n  transform: translate(2px, -25px);\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n}\n", ""]);


/***/ }),

/***/ "./src/AdminTemplate.js":
/*!******************************!*\
  !*** ./src/AdminTemplate.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/AdminTemplate.js";



const AdminTemplate = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SAdminTemplate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Admin Template");
};

const SAdminTemplate = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div``;
/* harmony default export */ __webpack_exports__["default"] = (AdminTemplate);

/***/ }),

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

/***/ }),

/***/ "./src/ContextAPI.js":
/*!***************************!*\
  !*** ./src/ContextAPI.js ***!
  \***************************/
/*! exports provided: Provider, Consumer, Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/productService */ "./src/services/productService.js");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/ContextAPI.js";


const Context = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext();

const Provider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    products: [],
    cart: [],
    bucketBrands: [{
      name: "Nike",
      isLike: false
    }, {
      name: "Balanciaga",
      isLike: false
    }, {
      name: "Gucci",
      isLike: true
    }, {
      name: "Converse",
      isLike: true
    }, {
      name: "Adiddas",
      isLike: true
    }],
    isAddedToCart: false
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        totalPrice = _useState4[0],
        setTotalPrice = _useState4[1];

  const setProducts = async () => {
    let _ref = await Object(_services_productService__WEBPACK_IMPORTED_MODULE_3__["getProducts"])(),
        data = _ref.data;

    let products = data;
    console.log("Fetch products from server");
    console.log(products); //for now just fake image

    products.map(p => {
      p.inCart = false; // p.image = "images/product-1.png";

      return p;
    });
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      products
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setProducts();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    addTotalPrice();
  }, [state.cart]);

  const setBucketBrands = bucketBrands => {
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      bucketBrands
    }));
  }; //i dont know what kind of copy is this?


  const findProductById = id => {
    const product = state.products.find(product => product._id === id);
    return product;
  }; //when add product to cart, add extra properties (quantity,total)


  const handleAddToCart = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i._id === id);

    if (product) {
      product.quantity += 1;
      product.total = product.price * product.quantity;
      setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cart,
        isAddedToCart: true
      }));
    } else {
      product = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, findProductById(id));
      product.quantity = 1;
      product.total = product.price * product.quantity;
      cart = [...cart, product];
      setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        cart,
        isAddedToCart: true
      }));
    }

    return;
  }; //close pop-up added item to cart


  const closeAddedItemToCartNoti = () => {
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      isAddedToCart: false
    }));
  };

  const handleIncrementQuantity = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i.id === id);
    product.quantity++;
    product.total = product.price * product.quantity;
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      cart
    }));
  };

  const handleDecrementQuantity = id => {
    let cart = [...state.cart];
    let product = cart.find(i => i.id === id);
    product.quantity--;

    if (product.quantity === 0) {
      handleRemoveCartItem(id);
      return;
    }

    product.total = product.price * product.quantity;
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      cart
    }));
  };

  const handleRemoveCartItem = id => {
    let cart = [...state.cart];
    cart = cart.filter(i => i.id !== id);
    setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      cart
    }));
  }; //Update total price


  const addTotalPrice = () => {
    const cart = [...state.cart];
    let total = 0;
    cart.map(item => total += item.total);
    setTotalPrice({
      totalPrice: total
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Context.Provider, {
    value: Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {}, totalPrice, {
      handleBucketBrands: setBucketBrands,
      addToCart: handleAddToCart,
      closeAddedItemToCartNoti: closeAddedItemToCartNoti,
      incrementQuantity: handleIncrementQuantity,
      decrementQuantity: handleDecrementQuantity,
      removeCartItem: handleRemoveCartItem,
      findProductById: findProductById
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, props.children);
};

const Consumer = Context.Consumer;


/***/ }),

/***/ "./src/components/DraggableItem.jsx":
/*!******************************************!*\
  !*** ./src/components/DraggableItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraggableItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _css_DraggableItem_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/DraggableItem.css */ "./src/components/css/DraggableItem.css");
/* harmony import */ var _css_DraggableItem_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_DraggableItem_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StarBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarBox */ "./src/components/StarBox.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/DraggableItem.jsx";





function DraggableItem({
  index,
  y,
  scale,
  zIndex,
  shadow,
  bind,
  order,
  brand,
  isPressed
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "placeholder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "animated",
    style: {
      boxShadow: shadow.interpolate(shadow => `rgba(0, 0, 0, 0.15) 0px 0px ${2 * shadow}px 0px`),
      transform: Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["interpolate"])([y, scale], (y, scale) => `translate3d(0,${y}px,0) scale(${scale})`),
      zIndex
    } // children={`${order[index]}  `}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StarBox__WEBPACK_IMPORTED_MODULE_4__["StarBox"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, brand.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DraggableZone, Object.assign({
    className: "draggableZone"
  }, bind(index), {
    isPressed: isPressed,
    draggable: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))));
}
const DraggableZone = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  cursor: ${props => props.isPressed ? "grabbing" : "grab"};
`;

/***/ }),

/***/ "./src/components/DraggableList.jsx":
/*!******************************************!*\
  !*** ./src/components/DraggableList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraggableList; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraggableItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraggableItem */ "./src/components/DraggableItem.jsx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var react_use_gesture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-use-gesture */ "./node_modules/react-use-gesture/dist/react-use-gesture.esm.js");
/* harmony import */ var _ContextAPI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContextAPI */ "./src/ContextAPI.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/DraggableList.jsx";







function DraggableList() {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ContextAPI__WEBPACK_IMPORTED_MODULE_5__["Context"]),
        stateBucketBrands = _useContext.bucketBrands,
        handleBucketBrands = _useContext.handleBucketBrands;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(stateBucketBrands),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        bucketBrands = _useState2[0],
        setBucketBrands = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(bucketBrands.map((_, index) => index)),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        order = _useState4[0],
        setOrder = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState6 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        isPressed = _useState6[0],
        setIsPressed = _useState6[1];

  const jumpShot = 70;

  const fn = (order, down, y, originalIndex, currentIndex) => index => down && index === originalIndex ? {
    y: currentIndex * jumpShot + y,
    scale: 1.1,
    zIndex: 80,
    shadow: 15,
    immediate: n => n === "y" || n === "zIndex"
  } : {
    y: order.indexOf(index) * jumpShot,
    scale: 1,
    zIndex: 0,
    shadow: 1,
    immediate: false
  };

  const _useSprings = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useSprings"])(order.length, fn(order)),
        _useSprings2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSprings, 2),
        springs = _useSprings2[0],
        setSprings = _useSprings2[1];

  const move = (arrOrder, moveIndex, toIndex) => {
    const item = arrOrder[moveIndex];
    const length = arrOrder.length;
    const diff = moveIndex - toIndex;

    if (diff > 0) {
      //move to left
      return [...arrOrder.slice(0, toIndex), item, ...arrOrder.slice(toIndex, moveIndex), ...arrOrder.slice(moveIndex + 1, length)];
    } else if (diff < 0) {
      //move to right
      const targetIndex = toIndex + 1;
      return [...arrOrder.slice(0, moveIndex), ...arrOrder.slice(moveIndex + 1, targetIndex), item, ...arrOrder.slice(targetIndex, length)];
    } else return arrOrder;
  };

  const bind = Object(react_use_gesture__WEBPACK_IMPORTED_MODULE_4__["useDrag"])(({
    args: [originalIndex],
    down,
    movement: [, y]
  }) => {
    setIsPressed(true);
    const currentIndex = order.indexOf(originalIndex);

    const currentRow = lodash__WEBPACK_IMPORTED_MODULE_7___default.a.clamp(Math.round((currentIndex * jumpShot + y) / jumpShot), 0, order.length - 1);

    const newOrder = move(order, currentIndex, currentRow);
    const newBucketBrands = move(bucketBrands, currentIndex, currentRow);
    setSprings(fn(newOrder, down, y, originalIndex, currentIndex));

    if (!down) {
      setIsPressed(false);
      setOrder(newOrder); // setBucketBrands(newBucketBrands);

      handleBucketBrands(newBucketBrands);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperDraggableList, {
    className: "col-10 col-sm-4 col-lg-3 mx-0 px-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, springs.map(({
    y,
    scale,
    zIndex,
    shadow
  }, index) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DraggableItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      y: y,
      scale: scale,
      zIndex: zIndex,
      shadow: shadow,
      index: index,
      bind: bind,
      order: order,
      brand: bucketBrands[index],
      isPressed: isPressed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    });
  }));
}
const WrapperDraggableList = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

/***/ }),

/***/ "./src/components/FileUpload.jsx":
/*!***************************************!*\
  !*** ./src/components/FileUpload.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/productService */ "./src/services/productService.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/FileUpload.jsx";



const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  }
};
const product = {
  name: "Balance",
  detail: "FLAFJLAKJLKFJ",
  brand: {
    name: "nike"
  },
  category: {
    name: "shoes"
  },
  isPublished: true,
  price: 60
};
const formData = new FormData();
formData.append("data", JSON.stringify(product));

const FileUpload = () => {
  const handleChooseImage = info => {
    if (info.file.status !== "uploading") {// console.log(info.file, info.fileList);
    }

    if (info.file.status === "done") {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(`${info.file.name} file uploaded successfully`);
      formData.append("myImage", info.file.originFileObj);
    } else if (info.file.status === "error") {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`${info.file.name} file upload failed.`);
    }
  };

  const handleUpload = async () => {
    const response = await Object(_services_productService__WEBPACK_IMPORTED_MODULE_2__["saveProduct"])(formData);
    console.log(response.data);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], Object.assign({}, props, {
    onChange: handleChooseImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Click")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleUpload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Upload"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

/***/ }),

/***/ "./src/components/Introduction.jsx":
/*!*****************************************!*\
  !*** ./src/components/Introduction.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Introduction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_Introduction_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/Introduction.css */ "./src/components/css/Introduction.css");
/* harmony import */ var _css_Introduction_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_Introduction_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/Introduction.jsx";


class Introduction extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "h2 font-weight-bold text-center mt-5 pt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, "Why you should shopping here?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row justify-content-between mt-5 pt-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-10 col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "information-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 478.856 478.856",
      style: {
        enableBackground: "new 0 0 478.856 478.856"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#8CC153"
      },
      d: "M406.856,358.873h-400v-192h400V358.873z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#87B748"
      },
      d: "M15.744,166.873l23.112-104l357.536,80.448l-4.224,23.552",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#A0D468"
      },
      d: "M262.856,326.873h60.264l35.736-34.856v-0.696v-56.896l-32.504-35.552h-63.496h-128H74.592 l-35.736,34.856v0.696v56.896l32.504,35.552h63.496H262.856z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#7CAA33"
      },
      d: "M96.384,75.817l26.256-62.696l260.216,108.416l-5.728,17.448",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#F8CF26"
      },
      d: "M310.856,406.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      style: {
        fill: "#8CC153"
      },
      cx: "198.856",
      cy: "262.873",
      r: "64",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#CDA349"
      },
      d: "M310.856,374.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#F8CF26"
      },
      d: "M310.856,342.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#CDA349"
      },
      d: "M310.856,310.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#F8CF26"
      },
      d: "M310.856,278.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      style: {
        fill: "#CDA349"
      },
      d: "M310.856,246.873v32c0,13.256,35.816,24,80,24s80-10.744,80-24v-32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
      style: {
        fill: "#F8CF26"
      },
      cx: "390.856",
      cy: "246.873",
      rx: "80",
      ry: "24",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M406.856,197.729c3.782,0.004,6.852-3.058,6.856-6.84c0-0.005,0-0.011,0-0.016v-24c0.004-3.782-3.058-6.852-6.84-6.856 c-0.005,0-0.011,0-0.016,0h-400c-3.782-0.004-6.852,3.058-6.856,6.84c0,0.005,0,0.011,0,0.016v192 c-0.004,3.782,3.058,6.852,6.84,6.856c0.005,0,0.011,0,0.016,0h272c3.786,0,6.856-3.07,6.856-6.856c0-3.786-3.07-6.856-6.856-6.856 H13.712V173.729H400v17.144c-0.004,3.782,3.058,6.852,6.84,6.856C406.845,197.729,406.851,197.729,406.856,197.729L406.856,197.729z ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M35.184,57.081c-1.537,0.979-2.624,2.526-3.024,4.304l-16,72c-0.822,3.698,1.51,7.362,5.208,8.184 c3.698,0.822,7.362-1.51,8.184-5.208l0,0l14.504-65.288l313.296,70.488c0.496,0.115,1.003,0.171,1.512,0.168 c3.786-0.007,6.85-3.082,6.844-6.868c-0.006-3.201-2.225-5.971-5.348-6.676l-320-72C38.584,55.789,36.723,56.111,35.184,57.081 L35.184,57.081z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M117.008,49.945l13.128-26.272l186.072,77.528c3.504,1.462,7.53-0.192,8.992-3.696c1.462-3.504-0.192-7.53-3.696-8.992 l-192-80c-3.337-1.391-7.182,0.038-8.8,3.272l-16,32c-1.807,3.342-0.563,7.517,2.78,9.324s7.517,0.563,9.324-2.78 c0.071-0.131,0.138-0.265,0.2-0.401L117.008,49.945z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M333.208,198.873c0-3.786-3.07-6.856-6.856-6.856h-63.496c-3.786,0-6.856,3.07-6.856,6.856s3.07,6.856,6.856,6.856l0,0 h63.496C330.138,205.729,333.208,202.66,333.208,198.873z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M198.856,333.273c38.881,0,70.4-31.519,70.4-70.4c0-38.881-31.519-70.4-70.4-70.4s-70.4,31.519-70.4,70.4l0,0 C128.496,301.738,159.992,333.234,198.856,333.273z M198.856,205.273c31.812,0,57.6,25.788,57.6,57.6s-25.788,57.6-57.6,57.6 s-57.6-25.788-57.6-57.6C141.291,231.076,167.059,205.309,198.856,205.273z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M390.856,214.873c-42.4,0-88,10.016-88,32v192c0,21.984,45.6,32,88,32s88-10.016,88-32v-192 C478.856,224.889,433.256,214.873,390.856,214.873z M462.856,406.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576 c17.024,8.576,45.144,12.576,72,12.576s54.984-4.04,72-12.584V406.753z M462.856,374.753c-1.208,4.44-25.2,16.12-72,16.12 s-70.792-11.68-72-16v-12.576c17.024,8.576,45.144,12.576,72,12.576s54.984-4.04,72-12.584V374.753z M462.856,342.753 c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576c17.024,8.576,45.144,12.576,72,12.576s54.984-4.04,72-12.584V342.753 z M462.856,310.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576c17.024,8.536,45.144,12.576,72,12.576 s54.984-4.04,72-12.584V310.753z M462.856,278.753c-1.208,4.44-25.2,16.12-72,16.12s-70.792-11.68-72-16v-12.576 c17.024,8.536,45.144,12.576,72,12.576s54.984-4.04,72-12.584V278.753z M390.856,230.873c46.4,0,70.4,11.472,72,16 c-1.6,4.528-25.6,16-72,16c-46.728,0-70.712-11.648-72-15.856v-0.048C320.144,242.513,344.128,230.873,390.856,230.873z M390.856,454.873c-46.8,0-70.792-11.68-72-16v-12.576c17.024,8.576,45.144,12.576,72,12.576s54.984-4.04,72-12.584v12.464 C461.648,443.193,437.656,454.873,390.856,454.873z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M77.376,205.729h57.48c3.786,0,6.856-3.07,6.856-6.856s-3.07-6.856-6.856-6.856H74.592c-1.792-0.004-3.515,0.694-4.8,1.944 l-35.736,34.856c-1.335,1.56-2.067,3.547-2.064,5.6v56.896c0,1.711,0.639,3.36,1.792,4.624l32.504,35.552 c1.299,1.422,3.137,2.233,5.064,2.232h63.504c3.786,0,6.856-3.07,6.856-6.856c0-3.786-3.07-6.856-6.856-6.856H74.384l-28.672-31.36 v-52L77.376,205.729z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M202.856,274.873h-20c-4.418,0-8,3.582-8,8s3.582,8,8,8h8c0,4.418,3.582,8,8,8s8-3.582,8-8v-0.36 c8.873-1.253,15.595-8.648,16-17.6c-0.573-10.489-9.507-18.548-20-18.04h-8c-2.488,0-4-1.392-4-2s1.512-2,4-2h20 c4.418,0,8-3.582,8-8s-3.582-8-8-8h-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v0.36c-8.873,1.253-15.595,8.648-16,17.6 c0.573,10.489,9.507,18.548,20,18.04h8c2.488,0,4,1.392,4,2S205.344,274.873,202.856,274.873z",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "All Products Have No Tax-Fee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "All products on this site are delivered by \"secret Mustasha\", on illegal way but dont worry, the polices are not there, enjoy shopping."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-10 col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "information-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      viewBox: "0 0 591.60405 591",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "surface1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 555.878906 168.519531 L 449.105469 61.542969 L 449.105469 490.230469 L 592 490.230469 L 592 255.378906 C 592 222.769531 578.996094 191.507812 555.878906 168.519531 Z M 555.878906 168.519531 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(100%,71.764706%,50.980392%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 83.457031 412.117188 L 2.738281 202.570312 C -5.363281 181.535156 5.117188 157.90625 26.164062 149.800781 L 407.15625 3.046875 C 428.191406 -5.054688 451.820312 5.425781 459.921875 26.472656 L 540.640625 236.019531 C 548.742188 257.054688 538.261719 280.683594 517.214844 288.789062 L 136.234375 435.542969 C 115.1875 443.644531 91.570312 433.152344 83.457031 412.117188 Z M 83.457031 412.117188 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(87.058824%,29.803922%,23.529412%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 489.011719 101.960938 L 32.195312 279.03125 L 62.613281 357.992188 L 519.449219 181.003906 Z M 489.011719 101.960938 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(47.843137%,28.627451%,18.823529%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 0.00390625 265.679688 L 0.00390625 41.128906 C 0.00390625 18.582031 18.285156 0.300781 40.832031 0.300781 L 449.105469 0.300781 C 471.652344 0.300781 489.933594 18.582031 489.933594 41.128906 L 489.933594 265.679688 C 489.933594 288.226562 471.652344 306.507812 449.105469 306.507812 L 40.832031 306.507812 C 18.285156 306.507812 0.00390625 288.226562 0.00390625 265.679688 Z M 0.00390625 265.679688 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(26.27451%,59.607843%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 449.105469 0.300781 L 405.726562 0.300781 L 99.519531 306.507812 L 449.105469 306.507812 C 471.652344 306.507812 489.933594 288.226562 489.933594 265.679688 L 489.933594 41.128906 C 489.933594 18.582031 471.652344 0.300781 449.105469 0.300781 Z M 449.105469 0.300781 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(24.313725%,54.901961%,78.039216%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 40.832031 163.609375 L 81.660156 163.609375 L 81.660156 184.023438 L 40.832031 184.023438 Z M 40.832031 163.609375 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 40.832031 224.851562 L 81.660156 224.851562 L 81.660156 245.265625 L 40.832031 245.265625 Z M 40.832031 224.851562 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 224.554688 224.851562 L 265.382812 224.851562 L 265.382812 245.265625 L 224.554688 245.265625 Z M 224.554688 224.851562 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 102.074219 163.609375 L 142.898438 163.609375 L 142.898438 184.023438 L 102.074219 184.023438 Z M 102.074219 163.609375 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 163.3125 163.609375 L 204.140625 163.609375 L 204.140625 184.023438 L 163.3125 184.023438 Z M 163.3125 163.609375 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 224.554688 163.609375 L 265.382812 163.609375 L 265.382812 184.023438 L 224.554688 184.023438 Z M 224.554688 163.609375 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 418.484375 41.128906 L 438.898438 41.128906 L 438.898438 71.75 L 418.484375 71.75 Z M 418.484375 41.128906 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 377.65625 41.128906 L 398.070312 41.128906 L 398.070312 71.75 L 377.65625 71.75 Z M 377.65625 41.128906 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 336.828125 41.128906 L 357.242188 41.128906 L 357.242188 71.75 L 336.828125 71.75 Z M 336.828125 41.128906 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 296.003906 41.128906 L 316.414062 41.128906 L 316.414062 71.75 L 296.003906 71.75 Z M 296.003906 41.128906 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(36.862745%,70.196078%,81.960784%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 408.277344 490.230469 L 592 490.230469 L 592 592.296875 L 408.277344 592.296875 Z M 408.277344 490.230469 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(53.333333%,70.196078%,21.568627%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 378.320312 184.6875 C 361.007812 167.4375 332.992188 167.488281 315.742188 184.800781 C 299.0625 201.539062 298.484375 228.433594 314.425781 245.878906 L 398.070312 337.128906 C 372.929688 381.128906 374.003906 435.386719 400.855469 478.359375 L 408.277344 490.230469 L 540.964844 490.230469 L 540.964844 347.335938 Z M 378.320312 184.6875 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(100%,71.764706%,50.980392%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 438.898438 520.851562 L 459.3125 520.851562 L 459.3125 541.265625 L 438.898438 541.265625 Z M 438.898438 520.851562 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(41.960784%,58.823529%,16.470588%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 40.832031 106.453125 L 40.832031 57.460938 C 40.832031 48.4375 48.140625 41.128906 57.164062 41.128906 L 106.15625 41.128906 C 115.179688 41.128906 122.484375 48.4375 122.484375 57.460938 L 122.484375 106.453125 C 122.484375 115.476562 115.179688 122.785156 106.15625 122.785156 L 57.164062 122.785156 C 48.140625 122.785156 40.832031 115.476562 40.832031 106.453125 Z M 40.832031 106.453125 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(99.215686%,71.372549%,18.431373%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 40.832031 71.75 L 71.453125 71.75 L 71.453125 92.164062 L 40.832031 92.164062 Z M 40.832031 71.75 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(99.215686%,48.235294%,18.431373%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 91.867188 71.75 L 122.484375 71.75 L 122.484375 92.164062 L 91.867188 92.164062 Z M 91.867188 71.75 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(99.215686%,48.235294%,18.431373%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 326
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M 530.757812 347.335938 C 528.054688 347.335938 525.453125 346.261719 523.542969 344.34375 L 482.714844 303.515625 C 478.796875 299.464844 478.910156 293.003906 482.972656 289.082031 C 486.933594 285.265625 493.199219 285.265625 497.148438 289.082031 L 537.976562 329.910156 C 541.957031 333.902344 541.957031 340.363281 537.976562 344.34375 C 536.054688 346.261719 533.464844 347.335938 530.757812 347.335938 Z M 530.757812 347.335938 ",
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "rgb(94.901961%,64.313725%,43.529412%)",
        fillOpacity: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346
      },
      __self: this
    }, "Convienent To Pay Orders "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347
      },
      __self: this
    }, "We integrated alot pay-style. Include credit card paymanagement entire bank in the world! ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strike", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }, "Just kidding"), "."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-10 col-sm-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "information-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      viewBox: "0 0 496 496.104",
      xmlns: "http://www.w3.org/2000/svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
      id: "a",
      gradientUnits: "userSpaceOnUse",
      x1: "248.052",
      x2: "248.052",
      y1: "496.104",
      y2: "-.0016",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
      offset: "0",
      stopColor: "#9f2fff",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
      offset: "1",
      stopColor: "#0bb1d3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "m402.269531 88.65625-61.769531-88.449219-184.328125-.207031-61.960937 88.304688 153.816406 188.429687zm-108.976562 7.496094-45.226563 141.566406-44.894531-141.664062zm-85.679688-16.097656 40.695313-58 40.574218 58.097656zm102.460938 16.121093 65.273437.070313-106.960937 130.425781zm5.984375-15.992187 22.175781-55.261719 38.640625 55.335937zm-13.726563-8.734375-38.640625-55.328125 60.816406.070312zm-108.144531-.113281-22.054688-55.320313 60.824219.074219zm-13.757812 8.6875-60.816407-.070313 38.757813-55.25zm5.949218 16.007812 41.386719 130.585938-106.648437-130.65625zm195.761719 163.167969 5.65625 18.089843-37.632813  18.816407h-56.34375c-8.519531 0-16.832031 2.023437-24.433593 5.71875l-27.191407-13.601563-110.992187-7.398437 6.929687-22.167969-119.890624-34.242188-18.1914068-.308593v176h93.8828128l3.863281-12.363281 29.703125 23.769531-2.648438 3.527343c-3.09375 4.128907-4.800781 9.242188-4.800781 14.402344v2.664063c0 13.230469 10.769531 24 24 24 3.097657 0 6.082031-.746094 8.890625-1.875 2.726563 10.257812 12.007813 17.875 23.109375 17.875 3.097657 0 6.082031-.746094 8.890625-1.875 2.726563 10.257812 12.007813 17.875 23.109375 17.875 6.707031 0 13.023438-2.96875 17.519531-7.839844 3.363282 9.207031 12.121094 15.839844 22.480469  15.839844h1.378907c6.40625 0 12.4375-2.496094 16.964843-7.035157l5.921875-5.917968c4.261719 3.136718 9.441406 4.953125 14.769532 4.953125 11.15625 0 20.519531-7.410157 23.710937-17.53125 2.65625.945312 5.4375 1.53125 8.289063 1.53125 13.460937 0 24.40625-10.738281 24.878906-24.089844 13.351562-.472656 24.085937-11.414063 24.085937-24.878906 0-3.59375-.808593-7.046875-2.238281-10.226563l20.175781-5.046875 35.96875-21.230469 4.214844 13.472657h69.878906v-176h-17.40625zm-366.089844 124.90625v-143.679688l101.921875 29.117188-35.800781 114.5625zm128 56c-4.414062 0-8-3.59375-8-8v-2.664063c0-1.714844.570313-3.417968 1.601563-4.800781l16.007812-21.335937c1.496094-2.007813 3.886719-3.199219 6.390625-3.199219 4.417969 0 8 3.589843 8 8v2.664062c0 1.710938-.566406 3.414063-1.597656 4.796875l-16.007813 21.335938c-1.496093 2.007812-3.890624 3.203125-6.394531 3.203125zm32 16c-4.414062 0-8-3.59375-8-8v-2.664063c0-1.714844.570313-3.417968 1.601563-4.800781l16.007812-21.335937c1.496094-2.007813 3.886719-3.199219 6.390625-3.199219 4.417969 0 8 3.589843 8 8v2.664062c0 1.710938-.566406 3.414063-1.597656 4.796875l-16.007813 21.335938c-1.496093 2.007812-3.890624 3.203125-6.394531 3.203125zm38.394531 12.804687c-1.496093 2-3.890624 3.195313-6.394531 3.195313-4.414062 0-8-3.59375-8-8v-2.664063c0-1.714844.570313-3.417968  1.601563-4.800781l16.007812-21.335937c1.496094-2.007813 3.886719-3.199219 6.390625-3.199219 4.417969 0 8 3.589843 8 8v2.664062c0 1.710938-.566406 3.414063-1.597656 4.796875zm49.605469-3.4375c0 2.136719-.832031 4.152344-2.34375 5.664063l-6.621093 6.625c-1.496094 1.484375-3.554688 2.34375-5.65625 2.34375h-1.378907c-4.414062 0-8-3.59375-8-8v-1.371094c0-2.132813.832031-4.148437 2.34375-5.664063l6.625-6.621093c1.496094-1.488281 3.550781-2.34375 5.65625-2.34375h1.375c4.417969 0 8 3.589843 8 8zm79.035157-33.367187c-2.363282 0-4.675782-.960938-6.347657-2.625l-43.03125-43.03125-11.3125 11.3125 8 8 35.035157 35.03125c1.695312 1.695312 2.621093 3.941406  2.621093 6.34375 0 4.941406-4.023437 8.96875-8.964843 8.96875-2.363282 0-4.675782-.960938-6.347657-2.625l-43.03125-43.03125-11.3125 11.3125 35.035157 35.03125c1.695312 1.695312 2.621093 3.941406 2.621093 6.34375 0 4.941406-4.023437 8.96875-8.964843 8.96875-2.363282 0-4.675782-.960938-6.347657-2.625l-.980469-.984375c.125-1 .292969-1.992188.292969-3.023438v-1.367187c0-13.234375-10.765625-24-24-24h-1.375c-2.289062 0-4.488281.421875-6.625 1.039062v-1.039062c0-13.234375-10.765625-24-24-24-3.09375 0-6.078125.742187-8.886719 1.871093-2.726562-10.257812-12.007812-17.871093-23.113281-17.871093-3.09375 0-6.078125.742187-8.886719  1.871093-2.726562-10.257812-12.007812-17.871093-23.113281-17.871093-7.519531 0-14.695312 3.589843-19.191406 9.597656l-3.75 5-34.195313-27.351563 23.378907-74.816406 111.613281 7.441406 15.136719 7.566407-32.390625 20.25c-7.886719 4.933593-12.601563 13.421875-12.601563 22.726562v2.792969c0 14.777344 12.023438 26.792969 26.800781 26.792969 4.847657 0 9.617188-1.320313 13.785157-3.824219l30.03125-18.015625c5.839843-3.503906 13.71875-2.523437 18.511719 2.277344l52.25 52.25c1.695312 1.695312 2.621093 3.941406 2.621093 6.34375 0 4.941406-4.023437 8.96875-8.964843 8.96875zm37.871093-39.472657-26.457031  6.613282-46.015625-46.015625c-9.871094-9.871094-26.046875-11.886719-38.054687-4.6875l-30.042969 18.023437c-1.671875 1.007813-3.582031 1.539063-5.535157 1.539063-5.960937 0-10.800781-4.839844-10.800781-10.792969v-2.792969c0-3.742187 1.898438-7.167969 5.082031-9.152343l43.496094-27.183594c6.359375-3.976563 13.6875-6.078125 21.191406-6.078125h60.128907l38.679687-19.34375 24.4375 78.207031zm99.09375-8.527343h-42.117187l-35.96875-115.097657 78.085937-28.390624zm0 0",
      fill: "url(#a)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, "Discount up to 100% event"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }, "We decided discount all products up to 10% for \"frequently\" customer and up to 100% for ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382
      },
      __self: this
    }, "diamond"), " customer!")))));
  }

}

/***/ }),

/***/ "./src/components/NotFound.jsx":
/*!*************************************!*\
  !*** ./src/components/NotFound.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/NotFound.jsx";




const NotFound = () => {
  const _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])(() => ({
    xy: [0, 0],
    config: {
      mass: 10,
      tension: 550,
      friction: 140
    }
  })),
        _useSpring2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useSpring, 2),
        props = _useSpring2[0],
        set = _useSpring2[1];

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

  const transOctopus = (x, y) => `
    translate3d(${x / 5}px, ${y / 5 + 200}px,0)
  `;

  const transBubble = (x, y) => `
    translate3d(${x / 5.5 - 200}px, ${y / 5.5 + 200}px,0)
  `;

  const transSun = (x, y) => `
    translate3d(${x / 8 - 250}px, ${y / 8 - 100}px,0)
  `;

  const transView = (x, y) => `
    translate3d(${x / 12}px,${y / 12}px,0)
  `;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SNotFound, {
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => set({
      xy: calc(x, y)
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SView, {
    style: {
      transform: props.xy.interpolate(transView)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SBubble, {
    style: {
      transform: props.xy.interpolate(transBubble)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SOctopus, {
    style: {
      transform: props.xy.interpolate(transOctopus)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SSun, {
    style: {
      transform: props.xy.interpolate(transSun)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }));
};

const SNotFound = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const SOctopus = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(images/octopus.svg);
`;
const SSun = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://image.flaticon.com/icons/svg/789/789395.svg);
`;
const SView = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  position: absolute;
  width: 700px;
  height: 700px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://image.flaticon.com/icons/svg/146/146427.svg);
`;
const SBubble = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div)`
  position: absolute;
  width: 250px;
  height: 230px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(images/notfound.png);
`;
/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./src/components/OuterContainer.jsx":
/*!*******************************************!*\
  !*** ./src/components/OuterContainer.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OuterContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_OuterContainer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/OuterContainer.css */ "./src/components/css/OuterContainer.css");
/* harmony import */ var _css_OuterContainer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_OuterContainer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/Notification */ "./src/components/commons/Notification.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/OuterContainer.jsx";



class OuterContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "hoveringWorkspaceOuterContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "hoveringWorkspaceOne",
      className: "hoveringWorkspaceCommon",
      src: "/images/hoverOne.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "hoveringWorkspaceTwo",
      className: "hoveringWorkspaceCommon",
      src: "/images/hoverTwo.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      id: "hoveringWorkspaceThree",
      className: "hoveringWorkspaceCommon",
      src: "/images/hoverThree.png",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Selection.jsx":
/*!**************************************!*\
  !*** ./src/components/Selection.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/Selection.jsx";



const Selection = ({
  name,
  handleOnClick,
  state
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperSelection, {
    state: state,
    name: name,
    onClick: event => {
      handleOnClick(event.target.innerText.toLowerCase());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, name);
};

const WrapperSelection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  flex: 1;
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 10px;
  margin: 5px;
  text-transform: capitalize;
  transform: scale(1);
  transition: all 0.2s;
  background-color: rgb(162, 162, 162);

  ${props => props.state === props.name ? SelectionEffect : ""}

  &:hover {
  }
`;
const SelectionEffect = `background-color: rgb(83, 219, 52);
  transform: scale(1.05);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);`;
/* harmony default export */ __webpack_exports__["default"] = (Selection);

/***/ }),

/***/ "./src/components/Selector.jsx":
/*!*************************************!*\
  !*** ./src/components/Selector.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Selection */ "./src/components/Selection.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/Selector.jsx";




const Selector = ({
  state,
  handleOnClick
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperSelector, {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Selection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "register",
    state: state,
    handleOnClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Selection__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "login",
    state: state,
    handleOnClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

const WrapperSelector = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./src/components/SpecialCarousel.jsx":
/*!********************************************!*\
  !*** ./src/components/SpecialCarousel.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_productsProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/productsProvider */ "./src/context/productsProvider.js");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/Product */ "./src/components/product/Product.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/SpecialCarousel.jsx";





const SpecialCarousel = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo((_ref) => {
  let _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label,
      other = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label"]);

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_productsProvider__WEBPACK_IMPORTED_MODULE_4__["ProductsContext"]),
        products = _useContext.products;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isGrabbing = _useState2[0],
        setIsGrabbing = _useState2[1];

  const settings = {
    className: "slider variable-width",
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  }; // padding + margin not working on Slider

  const divStyle = {
    width: "300px"
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SSpecialCarousel, {
    isGrabbing: isGrabbing,
    onMouseDown: () => {
      setIsGrabbing(true);
    },
    onMouseUp: () => {
      setIsGrabbing(false);
    },
    onMouseLeave: () => {
      setIsGrabbing(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, label && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, label)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object.assign({}, settings, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), products.map(product => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: product._id,
    style: divStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_product_Product__WEBPACK_IMPORTED_MODULE_5__["default"], {
    product: product,
    carousel: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })))));
});
const SSpecialCarousel = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  position: relative;
  width: 80%;
  margin: auto;
  padding: 0px 0;
  cursor: ${props => props.isGrabbing ? "grabbing" : "grab"};
  transition: border 0.2s linear;
  border-radius: 5px;

  /* First div is label */
  & > div:first-of-type {
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
      border-bottom: 1px solid rgba(30, 153, 255);
      transform: scale(0.3);
    }
  }

  /* First div is label */
  &:hover {
    & > div:first-of-type {
      & > p {
        font-size: 1.6rem;
        top: 20px;
        padding: 0 10px;
        color: rgba(2, 112, 203);
      }

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-bottom: 1px solid rgba(30, 153, 255);
        transform: scale(1);
      }
    }
  }
`;
const SLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  position: relative;
  width: 90%;
  margin: auto;
  text-align: center;
  font-size: 1.8rem;
  user-select: none;
  text-transform: capitalize;

  & > p {
    position: relative;
    font-size: 1.3rem;
    top: 0;
    left: 0;
    display: inline-block;
    padding: 0;
    margin: 0;

    /* Need background-color same as root color  */
    /* and z-index to over border */
    background-color: #edf4fa;
    z-index: 1;
    transition: 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (SpecialCarousel);

/***/ }),

/***/ "./src/components/StarBox.jsx":
/*!************************************!*\
  !*** ./src/components/StarBox.jsx ***!
  \************************************/
/*! exports provided: StarBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarBox", function() { return StarBox; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _css_StarBox_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/StarBox.css */ "./src/components/css/StarBox.css");
/* harmony import */ var _css_StarBox_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_StarBox_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/StarBox.jsx";




const StarBox = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isLike = _useState2[0],
        setIsLike = _useState2[1];

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "starBox",
    onClick: handleLike,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, isLike ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "yellowStar",
    width: "100%",
    height: "100%",
    viewBox: "0 0 512 512",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.41421
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M446.942,160.817L317.123,148.776L265.555,29.03C261.944,20.645 250.056,20.645 246.446,29.03L194.878,148.775L65.058,160.817C55.967,161.66 52.294,172.966 59.153,178.992L157.101,265.039L128.436,392.226C126.429,401.132 136.047,408.12 143.896,403.459L255.999,336.894L368.102,403.459C375.952,408.12 385.569,401.132 383.562,392.226L354.896,265.039L452.845,178.992C459.706,172.965 456.032,161.66 446.942,160.817Z",
    style: {
      fill: "rgb(255,220,100)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "ray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M123.288,24.908C129.906,34.101 148.586,73.578 159.265,96.585C160.944,100.202 156.406,103.469 153.509,100.729C135.079,83.303 103.566,53.064 96.949,43.872C91.712,36.598 93.364,26.456 100.637,21.221C107.909,15.983 118.051,17.634 123.288,24.908Z",
    style: {
      fill: "rgb(255,240,130)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M388.714,24.908C382.096,34.101 363.416,73.578 352.737,96.585C351.058,100.202 355.596,103.469 358.493,100.729C376.924,83.303 408.436,53.064 415.053,43.872C420.29,36.598 418.638,26.456 411.365,21.221C404.091,15.983 393.95,17.634 388.714,24.908Z",
    style: {
      fill: "rgb(255,240,130)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M493.293,294.471C482.524,290.959 439.237,285.157 414.074,281.973C410.118,281.472 408.384,286.788 411.875,288.716C434.077,300.98 472.461,321.815 483.23,325.327C491.751,328.106 500.912,323.451 503.69,314.93C506.468,306.41 501.813,297.25 493.293,294.471Z",
    style: {
      fill: "rgb(255,240,130)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18.708,294.471C29.477,290.959 72.764,285.157 97.927,281.973C101.883,281.472 103.617,286.788 100.126,288.716C77.924,300.98 39.54,321.815 28.771,325.327C20.25,328.106 11.089,323.451 8.311,314.93C5.531,306.41 10.187,297.25 18.708,294.471Z",
    style: {
      fill: "rgb(255,240,130)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M240.27,477.619C240.27,466.292 248.177,423.339 252.952,398.429C253.703,394.513 259.294,394.513 260.045,398.429C264.821,423.339 272.727,466.292 272.727,477.619C272.727,486.582 265.461,493.848 256.498,493.848C247.535,493.847 240.27,486.582 240.27,477.619Z",
    style: {
      fill: "rgb(255,240,130)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M284.306,72.575L265.555,29.03C261.944,20.645 250.056,20.645 246.446,29.03L194.878,148.775L65.058,160.817C55.967,161.66 52.294,172.966 59.153,178.992L157.101,265.039L128.436,392.226C126.429,401.132 136.047,408.12 143.896,403.459L158.817,394.599C183.277,236.261 252.042,120.03 284.306,72.575Z",
    style: {
      fill: "rgb(255, 200, 80)",
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M363.194,267.733L457.795,184.625C463.256,179.829 465.253,172.555 463.008,165.644C460.762,158.731 454.87,154.02 447.633,153.35L322.247,141.72L298.77,87.199C297.131,83.395 292.721,81.637 288.915,83.277C285.111,84.915 283.355,89.327 284.993,93.131L310.233,151.741C311.319,154.262 313.696,155.989 316.429,156.242L446.248,168.283C447.904,168.437 448.521,169.598 448.741,170.277C448.962,170.956 449.145,172.258 447.895,173.355L349.947,259.403C347.884,261.215 346.977,264.008 347.581,266.687L376.246,393.872C376.611,395.495 375.697,396.44 375.12,396.86C374.542,397.279 373.361,397.857 371.932,397.006L259.827,330.444C257.468,329.044 254.528,329.044 252.169,330.444L140.067,397.008C138.639,397.859 137.457,397.28 136.878,396.861C136.301,396.442 135.387,395.496 135.752,393.875L150.55,328.222C151.461,324.181 148.923,320.167 144.883,319.256C140.839,318.346 136.827,320.883 135.917,324.923L121.119,390.577C119.521,397.667 122.182,404.725 128.061,408.996C131.233,411.301 134.885,412.464 138.558,412.463C141.695,412.463 144.847,411.615 147.725,409.906L255.998,345.615L364.273,409.906C370.523,413.616 378.057,413.267 383.935,408.996C389.815,404.725 392.475,397.666 390.877,390.576L363.194,267.733Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M54.203,184.625L148.805,267.733L142.657,295.017C141.746,299.057 144.284,303.072 148.325,303.982C148.88,304.107 149.434,304.168 149.98,304.168C153.41,304.168 156.504,301.801 157.29,298.314L164.418,266.686C165.022,264.008 164.114,261.214 162.052,259.403L64.104,173.355C62.855,172.258 63.039,170.956 63.258,170.277C63.479,169.598 64.096,168.437 65.751,168.283L195.569,156.242C198.302,155.989 200.679,154.262 201.765,151.741L253.334,31.997C253.991,30.47 255.287,30.242 256,30.242C256.714,30.242 258.01,30.47 258.667,31.997L272.673,64.52C274.312,68.324 278.723,70.081 282.528,68.442C286.332,66.803 288.088,62.391 286.45,58.587L272.444,26.064C269.569,19.389 263.268,15.242 256,15.242C248.732,15.242 242.432,19.388 239.557,26.064L189.75,141.72L64.365,153.35C57.128,154.021 51.237,158.732 48.991,165.644C46.746,172.555 48.744,179.828 54.203,184.625Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "ray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M161.899,118.9C163.331,120.232 165.166,120.909 167.01,120.909C168.539,120.909 170.074,120.443 171.39,119.495C174.291,117.406 175.315,113.56 173.836,110.305C170.3,102.525 139.012,33.911 129.374,20.524C125.671,15.38 120.186,11.986 113.931,10.967C107.669,9.947 101.397,11.426 96.253,15.131C85.635,22.776 83.216,37.632 90.859,48.251C100.498,61.639 155.643,113.079 161.899,118.9ZM105.017,27.306C106.519,26.224 108.284,25.659 110.099,25.659C110.571,25.659 111.045,25.697 111.52,25.774C113.822,26.149 115.838,27.397 117.201,29.289C121.737,35.588 133.256,59.007 143.681,81.008C126.123,64.14 107.569,45.788 103.034,39.489C100.222,35.583 101.112,30.118 105.017,27.306Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M340.612,119.496C341.927,120.443 343.463,120.91 344.992,120.91C346.837,120.91 348.673,120.232 350.103,118.901C356.359,113.08 411.502,61.641 421.141,48.254C428.785,37.636 426.366,22.779 415.747,15.134C410.601,11.43 404.321,9.951 398.069,10.971C391.813,11.99 386.329,15.384 382.626,20.527C372.988,33.914 341.7,102.528 338.164,110.308C336.687,113.561 337.71,117.407 340.612,119.496ZM394.8,29.29C396.162,27.397 398.179,26.149 400.481,25.774C400.956,25.697 401.43,25.659 401.902,25.659C403.717,25.659 405.482,26.224 406.984,27.305C410.889,30.118 411.779,35.583 408.967,39.489C404.432,45.788 385.876,64.141 368.32,81.009C378.746,59.008 390.265,35.59 394.8,29.29Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M509.414,299.151C506.543,293.5 501.643,289.305 495.617,287.34L495.617,287.339C479.935,282.226 405.057,273.264 396.572,272.259C393.034,271.842 389.669,273.983 388.56,277.382C387.451,280.78 388.896,284.489 392.011,286.243C399.458,290.434 465.221,327.343 480.903,332.456C483.325,333.246 485.811,333.638 488.286,333.638C491.971,333.638 495.63,332.77 499.01,331.052C504.661,328.181 508.856,323.281 510.82,317.256C512.784,311.23 512.285,304.802 509.414,299.151ZM496.559,312.605C495.836,314.822 494.294,316.624 492.216,317.68C490.135,318.736 487.77,318.919 485.555,318.196C478.176,315.79 455.053,303.688 433.648,292.088C457.777,295.337 483.588,299.194 490.967,301.602C493.184,302.325 494.986,303.868 496.042,305.946C497.099,308.024 497.282,310.388 496.559,312.605Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M123.44,277.383C122.332,273.985 118.979,271.836 115.428,272.26C106.942,273.265 32.064,282.227 16.383,287.34L16.383,287.341C10.357,289.306 5.457,293.5 2.586,299.152C-0.285,304.802 -0.784,311.232 1.181,317.257C3.146,323.282 7.34,328.183 12.992,331.054C16.372,332.772 20.031,333.64 23.716,333.64C26.191,333.64 28.677,333.248 31.098,332.459C46.781,327.345 112.543,290.437 119.991,286.245C123.104,284.49 124.549,280.781 123.44,277.383ZM26.445,318.197C24.228,318.919 21.862,318.734 19.785,317.68C17.707,316.623 16.165,314.822 15.441,312.604C14.718,310.388 14.902,308.023 15.958,305.944C17.015,303.866 18.816,302.323 21.033,301.6C28.413,299.193 54.223,295.335 78.352,292.086C56.949,303.689 33.825,315.79 26.445,318.197Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M256.497,372.751C252.922,372.751 249.844,375.274 249.143,378.78C247.467,387.16 232.769,461.125 232.769,477.619C232.769,490.703 243.414,501.347 256.497,501.347C269.581,501.347 280.225,490.702 280.225,477.619C280.225,461.124 265.527,387.159 263.851,378.78C263.151,375.274 260.072,372.751 256.497,372.751ZM256.497,486.347C251.684,486.347 247.768,482.431 247.768,477.618C247.768,469.856 252.104,444.12 256.497,420.175C260.89,444.12 265.226,469.857 265.226,477.618C265.226,482.431 261.31,486.347 256.497,486.347Z",
    style: {
      fillRule: "nonzero"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "star",
    className: "blackStar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./src/components/authorizationPage/AuthorizationPage.jsx":
/*!****************************************************************!*\
  !*** ./src/components/authorizationPage/AuthorizationPage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MergeForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MergeForm */ "./src/components/authorizationPage/MergeForm.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/authorizationPage/AuthorizationPage.jsx";




const AuthorizationPage = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperAuthorizationPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MergeForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    location: props.location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

const WrapperAuthorizationPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  height: 70vh;
  margin: 50px;
  padding: 50px;
`;
/* harmony default export */ __webpack_exports__["default"] = (AuthorizationPage);

/***/ }),

/***/ "./src/components/authorizationPage/LoginForm.jsx":
/*!********************************************************!*\
  !*** ./src/components/authorizationPage/LoginForm.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authService */ "./src/services/authService.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/authorizationPage/LoginForm.jsx";










const LoginForm = ({
  location
}) => {
  const initialValues = {
    email: "",
    password: ""
  };
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(5, "Email must have more than 4 character").email().required(),
    password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(5, "Password must have more than 4 character").required("Password is required")
  });

  const handleSubmit = async (values, {
    setErrors,
    setStatus
  }) => {
    try {
      await _services_authService__WEBPACK_IMPORTED_MODULE_4__["login"](values.email, values.password);
      window.location = location.state ? location.state.from.pathname : "/";
    } catch (error) {
      setErrors({
        email: error.response.data
      });
    }
  };

  const MyField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(props => {
    const as = props.as,
          name = props.name,
          type = props.type,
          placeholder = props.placeholder,
          prefix = props.prefix,
          handleChange = props.handleChange,
          value = props.value,
          validateStatus = props.validateStatus,
          rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["as", "name", "type", "placeholder", "prefix", "handleChange", "value", "validateStatus"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
      validateStatus: validateStatus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], Object.assign({
      as: as,
      name: name,
      type: type,
      placeholder: placeholder,
      prefix: prefix,
      onChange: handleChange,
      value: value
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
      component: SErrorMessage,
      name: name,
      style: {
        display: "block",
        margin: "0 0 -24px 0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    })));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLoginForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, ({
    values,
    isValid,
    errors,
    touched,
    handleChange
  }) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
    as: antd__WEBPACK_IMPORTED_MODULE_6__["Input"],
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: "at",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }),
    size: "large",
    onChange: handleChange,
    value: values.email,
    validateStatus: errors.email && touched.email ? "error" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
    as: antd__WEBPACK_IMPORTED_MODULE_6__["Input"].Password,
    name: "password",
    placeholder: "Enter your password",
    prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
      icon: "lock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }),
    size: "large",
    onChange: handleChange,
    value: values.password,
    validateStatus: errors.password && touched.password ? "error" : "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    type: "submit",
    fullWidth: true,
    disabled: !isValid ? true : lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(touched) ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Submit"))));
};

const SLoginForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 400px;
  margin: auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  & > form {
    & > span {
      margin: 20px 0 5px 0;
    }
  }
`;
const SErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span`
  color: red;
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ }),

/***/ "./src/components/authorizationPage/MergeForm.jsx":
/*!********************************************************!*\
  !*** ./src/components/authorizationPage/MergeForm.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginForm */ "./src/components/authorizationPage/LoginForm.jsx");
/* harmony import */ var _RegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RegisterForm */ "./src/components/authorizationPage/RegisterForm.jsx");
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Selector */ "./src/components/Selector.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/authorizationPage/MergeForm.jsx";






const MergeForm = ({
  location
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("login"),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        state = _useState2[0],
        setstate = _useState2[1];

  const handleOnClick = choseState => {
    setstate(choseState);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrapperMergeForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Selector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleOnClick: handleOnClick,
    state: state,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), state === "login" ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_RegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    location: location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }));
};

const AbsoluteSwitch = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;
const Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  height: 300px;
`;
const WrapperMergeForm = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  width: 450px;
  margin: auto;
  background-color: transparent;
  padding: 20px;
  border-radius: 5px;
  //   -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  //   -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  //   box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  div:first-of-type {
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (MergeForm);

/***/ }),

/***/ "./src/components/authorizationPage/RegisterForm.jsx":
/*!***********************************************************!*\
  !*** ./src/components/authorizationPage/RegisterForm.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/userService */ "./src/services/userService.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/authService */ "./src/services/authService.js");



var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/authorizationPage/RegisterForm.jsx";











const RegisterForm = () => {
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  };

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("male"),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
        gender = _useState2[0],
        setGender = _useState2[1];

  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__["object"]().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(2, "Firstname must have more than 1 character").required("Firstname is required"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(2, "Lastname must have more than 1 character").required("Lastname is required"),
    email: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().email().min(5, "Email must have more than 4 character").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().min(5, "Password must have more than 4 character").required("Password is required"),
    phone: yup__WEBPACK_IMPORTED_MODULE_5__["string"]().matches(/^[0-9]+$/, "Phone must be a number").min(8, "Phone number must have more than 7 number").required("Phone number is required")
  });

  const handleSubmit = async (values, {
    setErrors
  }) => {
    try {
      const response = await _services_userService__WEBPACK_IMPORTED_MODULE_10__["register"](Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, {
        gender
      }));
      _services_authService__WEBPACK_IMPORTED_MODULE_12__["loginWithJwt"](response.headers["x-auth-token"]);
      window.location = "/";
    } catch (error) {
      setErrors({
        email: error.response.data
      });
    }
  };

  const handleGenderChange = e => {
    setGender(e.target.value);
  };

  const MyField = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(props => {
    const as = props.as,
          name = props.name,
          type = props.type,
          label = props.label,
          placeholder = props.placeholder,
          prefix = props.prefix,
          handleChange = props.handleChange,
          value = props.value,
          validateStatus = props.validateStatus,
          rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["as", "name", "type", "label", "placeholder", "prefix", "handleChange", "value", "validateStatus"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Form"].Item, {
      validateStatus: validateStatus,
      label: label,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Field"], Object.assign({
      as: as,
      name: name,
      type: type,
      placeholder: placeholder,
      prefix: prefix,
      onChange: handleChange,
      value: value
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], {
      component: SErrorMessage,
      name: name,
      style: {
        display: "block",
        margin: "0 0 -24px 0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    })));
  }, []);
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 8
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 16
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SRegisterForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, (_ref) => {
    let values = _ref.values,
        isValid = _ref.isValid,
        submitCount = _ref.submitCount,
        errors = _ref.errors,
        touched = _ref.touched,
        handleReset = _ref.handleReset,
        handleSubmit = _ref.handleSubmit,
        handleChange = _ref.handleChange,
        rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["values", "isValid", "submitCount", "errors", "touched", "handleReset", "handleSubmit", "handleChange"]);

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Row"], {
      gutter: [8, 8],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
      span: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_7__["Input"],
      name: "firstName",
      placeholder: "Firstname",
      prefix: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: undefined
      }),
      size: "large",
      onChange: handleChange,
      value: values.firstName,
      validateStatus: errors.firstName && touched.firstName ? "error" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Col"], {
      span: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_7__["Input"],
      name: "lastName",
      placeholder: "Lastname",
      size: "large",
      onChange: handleChange,
      value: values.lastName,
      validateStatus: errors.lastName && touched.lastName ? "error" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: undefined
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_7__["Input"],
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      prefix: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: "at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: undefined
      }),
      size: "large",
      onChange: handleChange,
      value: values.email,
      validateStatus: errors.email && touched.email ? "error" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_7__["Input"].Password,
      name: "password",
      placeholder: "Enter your password",
      prefix: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: "lock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: undefined
      }),
      size: "large",
      onChange: handleChange,
      value: values.password,
      validateStatus: errors.password && touched.password ? "error" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_7__["Input"],
      name: "phone",
      placeholder: "Enter your phone number",
      prefix: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
        icon: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: undefined
      }),
      size: "large",
      onChange: handleChange,
      value: values.phone,
      validateStatus: errors.phone && touched.phone ? "error" : "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"].Group, {
      onChange: handleGenderChange,
      value: gender,
      style: {
        display: "block"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      value: "male",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: undefined
    }, "Male"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_7__["Radio"], {
      value: "female",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: undefined
    }, "Female")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      fullWidth: true,
      style: {
        marginTop: "20px"
      },
      disabled: !isValid ? true : lodash__WEBPACK_IMPORTED_MODULE_11___default.a.isEmpty(touched) ? true : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: undefined
    }, "Submit"));
  }));
}; // const MyField = props => {
//   const { as, name, type, placeholder, prefix, handleChange, value } = props;
//   return (
//     <>
//       <Field
//         as={as}
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         prefix={prefix}
//         onChange={handleChange}
//         value={value}
//         {...props}
//       />
//       <ErrorMessage component={SErrorMessage} name={name} />
//     </>
//   );
// };


const SRegisterForm = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 400px;
  margin: auto;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);
  -moz-box-shadow: 1px 0px 12px 0px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 12px 0px rgba(158, 158, 158, 1);

  & > form {
    & > span {
    }
  }
`;
const SErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span`
  color: red;
`;
/* harmony default export */ __webpack_exports__["default"] = (RegisterForm);

/***/ }),

/***/ "./src/components/bannerTop/BannerTop.jsx":
/*!************************************************!*\
  !*** ./src/components/bannerTop/BannerTop.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OuterContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../OuterContainer */ "./src/components/OuterContainer.jsx");
/* harmony import */ var _carousel_IntroCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel/IntroCarousel */ "./src/components/carousel/IntroCarousel.jsx");
/* harmony import */ var _NavBarHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavBarHeader */ "./src/components/bannerTop/NavBarHeader.jsx");
/* harmony import */ var _NavBarSider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavBarSider */ "./src/components/bannerTop/NavBarSider.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/BannerTop.jsx";







const BannerTop = ({
  user,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const refButton = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleOpen = e => {
    setOpen(prev => !prev);
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target) && !refButton.current.contains(event.target)) {
      setOpen(false);
    }
  };

  const disableScroll = e => {
    e.preventDefault();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (open) {
      document.addEventListener("wheel", disableScroll, {
        passive: false
      });
      document.addEventListener("touchmove", disableScroll, {
        passive: false
      });
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("wheel", disableScroll, {
        passive: false
      });
      document.addEventListener("touchmove", disableScroll, {
        passive: false
      });
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [open]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SBannerTop, {
    className: "banner-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavBarHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    refButton: refButton,
    user: user,
    open: open,
    handleOpen: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_NavBarSider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ref: ref,
    user: user,
    open: open,
    setOpen: setOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }));
};

const SBannerTop = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-image: linear-gradient(
      -122deg,
      rgba(245, 33, 33, 0) 82%,
      rgba(255, 255, 255, 0.08) 0
    ),
    linear-gradient(
      -108deg,
      rgba(27, 0, 255, 0) 80%,
      rgba(255, 255, 255, 0.08) 0
    ),
    linear-gradient(
      -101deg,
      rgba(255, 33, 33, 0) 79%,
      rgba(255, 255, 255, 0.08) 0
    ),
    radial-gradient(circle, #02203c 0, #02203c 100%);
  /* background-color: #20232a; */
`;
/* harmony default export */ __webpack_exports__["default"] = (BannerTop);

/***/ }),

/***/ "./src/components/bannerTop/Burger.jsx":
/*!*********************************************!*\
  !*** ./src/components/bannerTop/Burger.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/Burger.jsx";


const Burger = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(({
  open,
  handleOpen
}, ref) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SBurger, {
    ref: ref,
    open: open,
    onClick: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
});
const SBurger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  top: 5%;
  left: 2rem;
  width: 2rem;
  height: 2rem;
  padding: 0;
  cursor: pointer;
  z-index: 10;

  & > div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.3s linear;

    &:first-child {
      transform: ${({
  open
}) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({
  open
}) => open ? "0" : "1"};
      transform: ${({
  open
}) => open ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({
  open
}) => open ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.md}) {
    display: none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/bannerTop/LoginChoiceButton.jsx":
/*!********************************************************!*\
  !*** ./src/components/bannerTop/LoginChoiceButton.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _LoginPopUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginPopUp */ "./src/components/bannerTop/LoginPopUp.jsx");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/LoginChoiceButton.jsx";





const LoginChoiceButton = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isActive = _useState2[0],
        setIsActive = _useState2[1];

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //dont add event when popup doesnt pop
    if (isActive) document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isActive]);

  const handleOnClick = () => {
    setIsActive(prev => {
      return !prev;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLoginChoiceButton, {
    isActive: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginPopUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isActive: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }));
};

const SLoginChoiceButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  font-size: 1rem;
  text-transform: capitalize;
  color: white;
  padding: 0;
  margin-top: 10px;
  cursor: pointer;
  border: ${props => props.isActive ? "1px solid rgb(31, 104, 168)" : "1px solid transparent"};
  border-radius: 5px;
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginChoiceButton);

/***/ }),

/***/ "./src/components/bannerTop/LoginPopUp.jsx":
/*!*************************************************!*\
  !*** ./src/components/bannerTop/LoginPopUp.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/LoginPopUp.jsx";




const LoginPopUp = ({
  isActive
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrapperPopUp, {
    isActive: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "btn btn-outline-dark btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "login with facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "btn btn-danger btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "login with google")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "btn btn-info btn-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "login")));
};

const WrapperPopUp = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  width: 200px;
  height: 200px;
  padding-top: 10px;
  background-color: white;
  top: 50px;
  left: -50px;
  border-radius: 5px 5px 5px 5px;
  transform: ${props => props.isActive ? "scale(1)" : "scale(0)"};
  transition: 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: transparent;
    border-bottom: 15px solid white;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: -10px;
    left: 60px;
  }

  div {
    text-transform: capitalize;
    width: 100%;
    color: black;
    padding: 10px;
    text-align: center;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginPopUp);

/***/ }),

/***/ "./src/components/bannerTop/Logo.jsx":
/*!*******************************************!*\
  !*** ./src/components/bannerTop/Logo.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/Logo.jsx";




let randomList = ["star", "star-half-alt", "star-and-crescent", "splotch"];

const Logo = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("heart"),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        icon = _useState2[0],
        setIcon = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        isHover = _useState4[0],
        setIsHover = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let changeIcon = null;

    if (isHover) {
      changeIcon = setTimeout(() => {
        const randNum = Math.floor(Math.random() * Math.floor(randomList.length));
        const takeIcon = randomList[randNum];
        randomList.push(icon);
        setIcon(takeIcon);
        randomList = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.pull(randomList, takeIcon);
      }, 200);
    }

    return () => {
      clearTimeout(changeIcon);
    };
  }, [icon, isHover]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLogo, {
    href: "/",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLogoQuote, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "buy anything !"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: icon,
    size: "sm",
    color: "#f44292",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))));
};

const SLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a`
  text-decoration: none;
  min-width: 160px;
`;
const SLogoQuote = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  font-size: 20px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;

  div {
    color: #f44292;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/bannerTop/MiniCart.jsx":
/*!***********************************************!*\
  !*** ./src/components/bannerTop/MiniCart.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _MiniProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MiniProduct */ "./src/components/bannerTop/MiniProduct.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/MiniCart.jsx";




const MiniCart = props => {
  const cart = props.cart,
        removeCartItem = props.removeCartItem,
        totalPrice = props.totalPrice,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SMiniCart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, cart.length === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SEmptyCart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/mascot.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Your cart is current empty")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SWrapMiniProduct, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, cart.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MiniProduct__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: item.product._id,
    item: item,
    removeCartItem: removeCartItem,
    isSale: isSale,
    isHotDeal: isHotDeal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SOption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Total Price :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "$", totalPrice)))));
};

const SMiniCart = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 300px;
  height: 300px;

  & > * {
    color: black;
  }
`; // const SMiniCartPopUp = styled.div`
//   position: absolute;
//   top: 50px;
//   left: -190%;
//   padding-top: 10px;
//   width: 300px;
//   height: 300px;
//   background-color: rgba(240, 240, 240);
//   border-radius: 5px;
//   transition: 0.2s linear;
//   transform: scale(0);
//   opacity: 0;
//   ${props =>
//     props.isActive &&
//     css`
//       transform: scale(1);
//       opacity: 1;
//     `}
//   &::after {
//     position: absolute;
//     content: "";
//     bottom: 100%;
//     left: 45%;
//     width: 15px;
//     height: 15px;
//     border-bottom: 15px solid rgba(240, 240, 240);
//     border-left: 15px solid transparent;
//     border-right: 15px solid transparent;
//   }
//   & > * {
//     color: black;
//   }
// `;

const SWrapMiniProduct = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  height: 80%;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #cccccc;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff4343;
    border-radius: 5px;
  }
`;
const SEmptyCart = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 1.2rem;
    margin: 10px;
  }
`;
const SOption = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  padding: 5px 20px;

  & > p {
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px 10px;

    box-shadow: -2px -2px 8px rgba(255, 255, 255, 1),
      -2px -2px 12px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      2px 2px 8px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.25);
      font-size: 1.19rem;
      span {
        transform: scale(0.98);
      }
    }
  }

  span {
    font-size: 1.2rem;
    color: red;
    float: right;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (MiniCart);

/***/ }),

/***/ "./src/components/bannerTop/MiniCartContainer.jsx":
/*!********************************************************!*\
  !*** ./src/components/bannerTop/MiniCartContainer.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _MiniCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MiniCart */ "./src/components/bannerTop/MiniCart.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/MiniCartContainer.jsx";







const MiniCartContainer = props => {
  const value = props.value,
        cart = props.cart,
        removeCartItem = props.removeCartItem,
        totalPrice = props.totalPrice,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isActive = _useState2[0],
        setIsActive = _useState2[1];

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MiniCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cart: cart,
    removeCartItem: removeCartItem,
    totalPrice: totalPrice,
    isSale: isSale,
    isHotDeal: isHotDeal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SMiniCartContainer, {
    isActive: isActive,
    ref: ref // onClick={() => setIsActive(prev => !prev)}
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
    trigger: "click",
    placement: "bottom",
    content: content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    count: value,
    overflowCount: 99,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "shopping-cart",
    size: "2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }))));
};

const SMiniCartContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 20px;
  padding: 0;
  font-size: 0.8rem;
  color: white;
  border-radius: 5px;
  border: ${props => props.isActive ? "1px solid rgb(31, 104, 168)" : "1px solid transparent"};

  &:hover {
    cursor: pointer;
  }

  & > span {
    margin: 5px;
    font-size: 0.8rem;
  }
`;
MiniCartContainer.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  cart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  removeCartItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MiniCartContainer);

/***/ }),

/***/ "./src/components/bannerTop/MiniProduct.jsx":
/*!**************************************************!*\
  !*** ./src/components/bannerTop/MiniProduct.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/MiniProduct.jsx";







const MiniProduct = props => {
  const item = props.item,
        removeCartItem = props.removeCartItem,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal;
  const product = item.product,
        quantity = item.quantity;
  const _id = product._id,
        image = product.image,
        name = product.name,
        price = product.price,
        salePrice = product.salePrice,
        hotDealPrice = product.hotDealPrice,
        hotDealExpired = product.hotDealExpired;
  let imageBase64 = Object(_services_utilities__WEBPACK_IMPORTED_MODULE_3__["getImageBase64"])(image.data.data);

  const NewPrice = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "$", isHotDeal(hotDealExpired) ? hotDealPrice : isSale ? salePrice : price, isHotDeal(hotDealExpired) && isSale(salePrice) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "original-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "$", price));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SMiniProduct, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `data:image/png;base64,${imageBase64}`,
    alt: "",
    style: {
      width: "50px",
      height: "50px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, quantity, " items ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: "times",
    size: "2x",
    style: {
      display: "block"
    },
    onClick: () => {
      removeCartItem(_id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))));
};

const SMiniProduct = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  border-bottom: 0.05px solid #e3e3e3;
  margin-bottom: 2px;

  p {
    margin: 0;
    font-size: 0.9rem;
  }

  .price {
    font-weight: bold;
  }

  .original-price {
    text-decoration: line-through;
    font-size: 13px;
    font-weight: lighter;
    margin-left: 5px;
  }
`;
MiniProduct.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    salePrice: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    saleExpired: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    quantity: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (MiniProduct);

/***/ }),

/***/ "./src/components/bannerTop/NavBarHeader.jsx":
/*!***************************************************!*\
  !*** ./src/components/bannerTop/NavBarHeader.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _LoginChoiceButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginChoiceButton */ "./src/components/bannerTop/LoginChoiceButton.jsx");
/* harmony import */ var _loginButton_LoginInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loginButton/LoginInformation */ "./src/components/loginButton/LoginInformation.jsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Logo */ "./src/components/bannerTop/Logo.jsx");
/* harmony import */ var _NavLinkItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavLinkItem */ "./src/components/bannerTop/NavLinkItem.jsx");
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Burger */ "./src/components/bannerTop/Burger.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/NavBarHeader.jsx";








const NavBarHeader = props => {
  const user = props.user,
        open = props.open,
        handleOpen = props.handleOpen,
        refButton = props.refButton;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavBarHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Burger__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ref: refButton,
    open: open,
    handleOpen: handleOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavLinkItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loginButton_LoginInformation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginChoiceButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }));
};

const SNavBarHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.lg}) {
    max-width: 1140px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavBarHeader);

/***/ }),

/***/ "./src/components/bannerTop/NavBarSider.jsx":
/*!**************************************************!*\
  !*** ./src/components/bannerTop/NavBarSider.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/NavBarSider.jsx";



const NavBarSider = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const open = props.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavBarSider, {
    ref: ref,
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLinkItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    to: "/not-found",
    activeClassName: "selected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "What is?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    to: "/products",
    activeClassName: "selected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Go shopping")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    to: "/cart",
    activeClassName: "selected",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Check thu'm cart")))));
});
const SNavBarSider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  font-size: 1.5rem;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  background: rgb(2, 21, 41);
  z-index: 1;
  transition: 300ms ease-in-out;

  transform: ${({
  open
}) => open ? `translateX(300px)` : `translateX(0)`};
`;
const SNavLinkItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
  margin: 0;
  margin-top: 5rem;
  height: 100%;
  width: 100%;

  & > ul {
    display: flex;
    padding: 0;
    flex-flow: column nowrap;
    list-style: none;
  }

  li {
  }
`;
const SNavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"])`
  display: block;
  color: white;
  padding: 0.5rem;

  &:hover {
    color: white;
  }

  &.selected {
    border-left: 5px solid rgb(37, 210, 35);
    background-color: rgb(45, 36, 66);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavBarSider);

/***/ }),

/***/ "./src/components/bannerTop/NavLinkItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/bannerTop/NavLinkItem.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cartProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/cartProvider */ "./src/context/cartProvider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _commons_Sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/Sticky */ "./src/components/commons/Sticky.jsx");
/* harmony import */ var _MiniCartContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniCartContainer */ "./src/components/bannerTop/MiniCartContainer.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/bannerTop/NavLinkItem.jsx";







const NavLinkItem = () => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_cartProvider__WEBPACK_IMPORTED_MODULE_1__["CartContext"]),
        cart = _useContext.cart,
        removeCartItem = _useContext.removeCartItem,
        totalPrice = _useContext.totalPrice,
        isAddedToCart = _useContext.isAddedToCart,
        closeAddedItemToCartNoti = _useContext.closeAddedItemToCartNoti,
        isSale = _useContext.isSale,
        isHotDeal = _useContext.isHotDeal;

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const getTotalCartItem = () => {
    let total = 0;
    cart.forEach(item => {
      const quantity = item.quantity,
            product = item.product;
      total += quantity;
    });
    return total;
  };

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isAddedToCart === false) return; //prevent re-render when click mouse but same state

      closeAddedItemToCartNoti();
    }
  }; //Click outside -> handleClickOutside -> closeAddedItem -> addedNewItem
  //event click everywhere -> memoryleak?


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLinkItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    activeClassName: "selected",
    to: "/not-found",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "What is?")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    activeClassName: "selected",
    to: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Go shopping")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SNavLink, {
    activeClassName: "selected",
    to: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Check thu'm cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Sticky__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StickyHolder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPopUp, {
    AddedToCart: isAddedToCart,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PopUp, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "you have new item in cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Check Cart"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      position: "relative"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MiniCartContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: getTotalCartItem(),
    cart: cart,
    removeCartItem: removeCartItem,
    totalPrice: totalPrice,
    isSale: isSale,
    isHotDeal: isHotDeal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }))));
};

const SPopUp = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  position: absolute;
  top: 10px;
  left: -50%;
  width: 250px;
  height: 100px;
  border-radius: 5px;
  opacity: 0;
  transform: scale(0);
  transition: 0.2s ease-in-out;

  ${props => props.isAddedToCart && styled_components__WEBPACK_IMPORTED_MODULE_5__["css"]`
      opacity: 1;
      transform: scale(1);
    `}
`;
const StickyHolder = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  position: relative;
  top: 10px;
  ${props => props.modifiers[0] === "stuck-top" && styled_components__WEBPACK_IMPORTED_MODULE_5__["css"]`
      position: fixed;
      top: 15px;
      left: 50%;
      margin-left: 140px;
    `}

  /* Make sure pop-up will on top all the time */
  z-index: 1000;
`;
const PopUp = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  border-radius: 5px;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 45%;
    border-bottom: 10px solid whitesmoke;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;
const SNavLinkItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].nav`
  margin: 0.5rem auto;

  & > ul {
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
  }

  li {
    padding: 0.5rem;
  }

  @media screen and (max-width: ${({
  theme
}) => theme.responsive.md}) {
    display: none;
  }
`;
const SNavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"])`
  color: white;
  transform: scale(1);

  &::after {
    content: "";
    background-color: transparent;
    display: block;
    border-bottom: 1px solid white;
    transform: scale(0);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    color: white;

    &::after {
      transform: scale(1);
    }
  }

  &.selected {
    &::after {
      transform: scale(1);
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (NavLinkItem);

/***/ }),

/***/ "./src/components/carousel/IntroCarousel.jsx":
/*!***************************************************!*\
  !*** ./src/components/carousel/IntroCarousel.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _css_IntroCarousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/IntroCarousel.css */ "./src/components/css/IntroCarousel.css");
/* harmony import */ var _css_IntroCarousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_IntroCarousel_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _descriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../descriptionCard/DescriptionCard */ "./src/components/descriptionCard/DescriptionCard.jsx");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/carousel/IntroCarousel.jsx";








const IntroCarousel = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SIntroCarousel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
    draggable: "true",
    dots: false,
    autoplay: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_descriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Imperius Curse",
    message: "The fact that the curse can be defended against makes it unique amongst the Unforgivable Curses.",
    describe: "Describe",
    button: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      size: "large",
      startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: "credit-card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, "Go to cart"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_descriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Cruciatus Curse",
    message: "When cast successfully the curse inflicts intense, excruciating pain on the victim.  The penalty for use of this curse on another human being is a life sentence in Azkaban,  unless the caster did so under the influence of the Imperius Curse",
    button: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      size: "large",
      startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, "Check payment"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_descriptionCard_DescriptionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Killing Curse",
    message: "The Killing Curse (Avada Kedavra) is a tool of the Dark Arts. When cast successfully on a living person or creature the curse causes instantaneous and painless death,  without causing any injury to the body, and without any trace of violence.",
    button: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "contained",
      color: "primary",
      size: "large",
      startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
        icon: "truck",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: undefined
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, "Check payment"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))));
};

const SIntroCarousel = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 30%;
  margin: auto;
  background-color: transparent;
`;
/* harmony default export */ __webpack_exports__["default"] = (IntroCarousel);

/***/ }),

/***/ "./src/components/cart/Cart.jsx":
/*!**************************************!*\
  !*** ./src/components/cart/Cart.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cartProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/cartProvider */ "./src/context/cartProvider.js");
/* harmony import */ var _CartTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartTable */ "./src/components/cart/CartTable.jsx");
/* harmony import */ var _FeeTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeeTable */ "./src/components/cart/FeeTable.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/Cart.jsx";








const colCartTableResponsive = {
  xs: {
    span: 24
  },
  sm: {
    span: 12
  },
  md: {
    span: 12
  },
  lg: {
    span: 16
  },
  xl: {
    span: 16
  }
};
const colFeeTableResponsive = {
  xs: {
    span: 24
  },
  sm: {
    span: 12
  },
  md: {
    span: 12
  },
  lg: {
    span: 8
  },
  xl: {
    span: 8
  }
};

const Cart = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_cartProvider__WEBPACK_IMPORTED_MODULE_1__["CartContext"]),
        cart = _useContext.cart,
        totalPrice = _useContext.totalPrice,
        addToCart = _useContext.addToCart,
        orderProducts = _useContext.orderProducts,
        removeCartItem = _useContext.removeCartItem,
        removeAllCart = _useContext.removeAllCart,
        isHotDeal = _useContext.isHotDeal,
        isSale = _useContext.isSale;

  return cart.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    gutter: 48,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], Object.assign({}, colCartTableResponsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: cart,
    addToCart: addToCart,
    removeCartItem: removeCartItem,
    removeAllCart: removeAllCart,
    isHotDeal: isHotDeal,
    isSale: isSale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], Object.assign({}, colFeeTableResponsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FeeTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    totalPrice: totalPrice,
    orderProducts: orderProducts,
    removeAllCart: removeAllCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SEmptyCart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/images/mascot.png",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Your cart is current empty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "contained",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Continuous shopping")));
};

const SCart = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  width: 80%;
  margin: auto;
  min-height: 100vh;
`;
const SEmptyCart = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 10px;
  background-color: ${({
  theme
}) => theme.color.primaryLight};

  & > p {
    font-size: 1.2rem;
    margin: 10px;
  }

  & > img {
    margin: 30px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./src/components/cart/CartColumns.jsx":
/*!*********************************************!*\
  !*** ./src/components/cart/CartColumns.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartColumns.jsx";





const colResponsive = {
  xs: 6,
  sm: 6,
  md: 6,
  lg: 6,
  xl: 6
};

const CartColumns = props => {
  const cart = props.cart,
        removeAllCart = props.removeAllCart;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCartColumns, {
    onClick: removeAllCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Products (", cart.length, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "text",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: "times",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }),
    style: {
      float: "right"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Remove All Item")); // return (
  //   <Row>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">products</SText>
  //     </Col>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">information</SText>
  //     </Col>
  //     <Col {...colResponsive} style={{ textAlign: "center" }}>
  //       <SText className="text-uppercase">quantity</SText>
  //     </Col>
  //   </Row>
  // );
};

const SText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p`
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
`;
const SCartColumns = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (CartColumns);

/***/ }),

/***/ "./src/components/cart/CartItem.jsx":
/*!******************************************!*\
  !*** ./src/components/cart/CartItem.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _CartItemImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItemImg */ "./src/components/cart/CartItemImg.jsx");
/* harmony import */ var _CartItemPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartItemPrice */ "./src/components/cart/CartItemPrice.jsx");
/* harmony import */ var _CartItemQuantity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartItemQuantity */ "./src/components/cart/CartItemQuantity.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _CartItemName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartItemName */ "./src/components/cart/CartItemName.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartItem.jsx";









const colResponsive = value => {
  return {
    xs: value,
    sm: value,
    md: value,
    lg: value,
    xl: value
  };
};

const CartItem = props => {
  const item = props.item,
        addToCart = props.addToCart,
        isHotDeal = props.isHotDeal,
        isSale = props.isSale,
        removeCartItem = props.removeCartItem;
  const product = item.product,
        quantity = item.quantity,
        cartItemId = item._id;
  const _id = product._id,
        image = product.image,
        name = product.name,
        price = product.price,
        salePrice = product.salePrice,
        hotDealPrice = product.hotDealPrice,
        hotDealExpired = product.hotDealExpired;

  const handleRemoveCartItem = async () => {
    const response = await removeCartItem(cartItemId);
    if (response && response.status === 200) antd__WEBPACK_IMPORTED_MODULE_1__["notification"].success({
      message: "Item deleted!",
      description: ""
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCartItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    type: "flex",
    align: "middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], Object.assign({}, colResponsive(4), {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItemImg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 11,
    sm: 11,
    md: 11,
    lg: 11,
    xl: 11,
    style: {
      textAlign: "start"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItemName__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SRemove, {
    onClick: handleRemoveCartItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: "trash",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Remove from cart"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], Object.assign({}, colResponsive(3), {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItemQuantity__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: _id,
    quantity: quantity,
    addToCart: addToCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], Object.assign({}, colResponsive(6), {
    style: {
      textAlign: "start"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItemPrice__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: price,
    salePrice: salePrice,
    hotDealPrice: hotDealPrice,
    hotDealExpired: hotDealExpired,
    isHotDeal: isHotDeal,
    isSale: isSale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))));
};

const SRemove = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div`
  cursor: pointer;
  color: red;
  margin-top: 10px;

  & > span {
    margin-left: 10px;
  }
`;
const SCartItem = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div`
  margin: 15px 0;
  padding: 10px 0;
  background-color: ${({
  theme
}) => theme.color.primaryLight};
  -webkit-box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
  -moz-box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
  box-shadow: 1px 1px 5px 0px rgba(209, 209, 209, 1);
`;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./src/components/cart/CartItemImg.jsx":
/*!*********************************************!*\
  !*** ./src/components/cart/CartItemImg.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartItemImg.jsx";


const CartItemImg = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  image
}) => {
  let imageBase64 = Object(_services_utilities__WEBPACK_IMPORTED_MODULE_1__["getImageBase64"])(image.data.data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `data:image/png;base64,${imageBase64}`,
    alt: "",
    style: {
      width: "5rem",
      height: "5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  });
});
/* harmony default export */ __webpack_exports__["default"] = (CartItemImg);

/***/ }),

/***/ "./src/components/cart/CartItemName.jsx":
/*!**********************************************!*\
  !*** ./src/components/cart/CartItemName.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartItemName.jsx";



const CartItemName = props => {
  const name = props.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCartItemName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, name);
};

const SCartItemName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  margin: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (CartItemName);

/***/ }),

/***/ "./src/components/cart/CartItemPrice.jsx":
/*!***********************************************!*\
  !*** ./src/components/cart/CartItemPrice.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartItemPrice.jsx";



const CartItemPrice = props => {
  const price = props.price,
        salePrice = props.salePrice,
        hotDealPrice = props.hotDealPrice,
        hotDealExpired = props.hotDealExpired,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal;

  const NewPrice = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "$", isHotDeal(hotDealExpired) ? hotDealPrice : isSale ? salePrice : price, isHotDeal(hotDealExpired) && isSale(salePrice) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "original-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    }, "$", price));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCartItemInformation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }));
};

const SCartItemInformation = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 16px;

  .price {
    font-weight: bold;
    margin: 0;
  }

  .original-price {
    text-decoration: line-through;
    font-size: 13px;
    font-weight: lighter;
    margin-left: 5px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (CartItemPrice);

/***/ }),

/***/ "./src/components/cart/CartItemQuantity.jsx":
/*!**************************************************!*\
  !*** ./src/components/cart/CartItemQuantity.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartItemQuantity.jsx";



const CartItemQuantity = props => {
  const id = props.id,
        quantity = props.quantity,
        addToCart = props.addToCart;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        disabled = _useState2[0],
        setDisabled = _useState2[1];

  const handleChange = async value => {
    setDisabled(true);
    const response = await addToCart(id, value);
    setDisabled(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["InputNumber"], {
    min: 1,
    value: quantity,
    parser: value => value.replace(".", ""),
    step: 1,
    size: "default",
    disabled: disabled,
    style: {
      fontSize: "1rem"
    },
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CartItemQuantity);

/***/ }),

/***/ "./src/components/cart/CartList.jsx":
/*!******************************************!*\
  !*** ./src/components/cart/CartList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ "./src/components/cart/CartItem.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartList.jsx";




const CartList = props => {
  const cart = props.cart,
        addToCart = props.addToCart,
        increment = props.increment,
        decrement = props.decrement,
        removeCartItem = props.removeCartItem,
        isHotDeal = props.isHotDeal,
        isSale = props.isSale;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, cart.map(i => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: i._id,
    item: i,
    addToCart: addToCart,
    increment: increment,
    decrement: decrement,
    removeCartItem: removeCartItem,
    isHotDeal: isHotDeal,
    isSale: isSale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CartList);

/***/ }),

/***/ "./src/components/cart/CartTable.jsx":
/*!*******************************************!*\
  !*** ./src/components/cart/CartTable.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CartColumns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartColumns */ "./src/components/cart/CartColumns.jsx");
/* harmony import */ var _CartList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartList */ "./src/components/cart/CartList.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/CartTable.jsx";




const CartTable = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const cart = props.cart,
        addToCart = props.addToCart,
        removeCartItem = props.removeCartItem,
        removeAllCart = props.removeAllCart,
        isHotDeal = props.isHotDeal,
        isSale = props.isSale;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SCartTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartColumns__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cart: cart,
    removeAllCart: removeAllCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CartList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cart: cart,
    removeCartItem: removeCartItem,
    addToCart: addToCart,
    isHotDeal: isHotDeal,
    isSale: isSale,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
});
const SCartTable = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 100%;
`;
/* harmony default export */ __webpack_exports__["default"] = (CartTable);

/***/ }),

/***/ "./src/components/cart/FeeTable.jsx":
/*!******************************************!*\
  !*** ./src/components/cart/FeeTable.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _context_stuffProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/stuffProvider */ "./src/context/stuffProvider.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/cart/FeeTable.jsx";







const spinIcon = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
  style: {
    fontSize: 24
  },
  spin: true,
  type: "loading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
});

const FeeTable = props => {
  const totalPrice = props.totalPrice,
        orderProducts = props.orderProducts,
        removeAllCart = props.removeAllCart;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isFetching = _useState2[0],
        setIsFetching = _useState2[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_stuffProvider__WEBPACK_IMPORTED_MODULE_6__["StuffContext"]),
        setLoadingPage = _useContext.setIsFetching;

  const handleCheckOut = async () => {
    setLoadingPage(true);
    setIsFetching(true);
    const response = await orderProducts();
    setIsFetching(false);
    removeAllCart();
    setLoadingPage(false);

    if (response && response.status === 200) {
      antd__WEBPACK_IMPORTED_MODULE_5__["notification"].success({
        message: "Order success!",
        description: `Check user's profile for more details`
      });
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Affix"], {
    offsetTop: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SFeeTable, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "total price :"), totalPrice ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "$", totalPrice) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    indicator: spinIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "secondary",
    fullWidth: true,
    disabled: isFetching,
    onClick: handleCheckOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, isFetching ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Spin"], {
    indicator: spinIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }) : "Order Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "Continue Shopping"))));
};

const SFeeTable = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  position: relative;
  min-width: 150px;
  max-width: 300px;
  padding: 20px;
  margin: 15px 0 0 0;
  align-items: center;
  background-color: white;
  border-radius: 5px;

  -webkit-box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);
  -moz-box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);
  box-shadow: -1px 1px 10px 0px rgba(199, 199, 199, 1);

  & > * {
    margin: 5px 0;
    white-space: nowrap;
  }
`;
const SPrice = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.2rem;
`;
/* harmony default export */ __webpack_exports__["default"] = (FeeTable);

/***/ }),

/***/ "./src/components/commons/Button.jsx":
/*!*******************************************!*\
  !*** ./src/components/commons/Button.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonBase */ "./src/components/commons/ButtonBase.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/Button.jsx";



 // Color and more still need to split into theme -> make it reuseable & maintainable

const root = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  box-sizing: border-box;
  min-width: 60px;
  padding: 6px 16px;
  font-size: 1rem;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.87);
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.08);

    &:disabled {
      background-color: transparent;
    }
  }

  &:disabled {
    color: rgba(0, 0, 0, 0.26);
  }
`; // Applied to span element that wrap the children

const label = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
`; // Applied to root element if `variant="text"`

const text = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 6px 8px;
`; // Applied to root element if `variant="text"` & `color="primary"`

const text_primary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #1976d2;
  background-color: transparent;

  &:hover {
    background-color: rgba(25, 118, 210, 0.08);
  }
`; // Applied to root element if `variant="text"` & `color="secondary"`

const text_secondary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #dc004e;
  background-color: transparent;

  &:hover {
    background-color: rgba(220, 0, 78, 0.08);
  }
`; // Applied to root element if `variant="contained"`

const contained = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: rgba(0, 0, 0, 0.87);
  background-color: #e0e0e0;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #d5d5d5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    &:disabled {
      background-color: rgba(0, 0, 0, 0.12);
    }
  }

  &:disabled {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.12);
  }
`; // Applied to root element if `variant="contained"` and `color="primary"`

const contained_primary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #fff;
  background-color: #1976d2;

  &:hover {
    background-color: rgb(17, 82, 147);
  }
`; // Applied to root element if `variant="contained"` and `color="secondary"`

const contained_secondary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #fff;
  background-color: #dc004e;

  &:hover {
    background-color: rgb(154, 0, 54);
  }
`; // Applied to root element if `variant="contained"`

const outlined = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: rgba(0, 0, 0, 0.87);
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);

  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`; // Applied to root element if `variant="contained"` && `color="primary"`

const outlined_primary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #1976d2;
  border: 1px solid rgba(25, 118, 210, 0.3);

  &:hover {
    border: 1px solid rgba(25, 118, 210);
    background-color: rgba(25, 118, 210, 0.1);

    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`; // Applied to root element if `variant="contained"` && `color="secondary"`

const outlined_secondary = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  color: #dc004e;
  border: 1px solid rgb(220, 0, 78, 0.3);

  &:hover {
    border: 1px solid rgb(220, 0, 78);
    background-color: rgb(220, 0, 78, 0.1);

    &:disabled {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`; // Applied to root element if `size="small"` & `variant="text"`

const text_small = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 4px 5px;
  font-size: 0.9rem;
`; // Applied to root element if `size="large"` & `variant="text"`

const text_large = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 8px 11px;
  font-size: 1.1rem;
`; // Applied to root element if `size="small"` & `variant="outlined"`

const outlined_small = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 3px 9px;
  font-size: 0.9rem;
`; // Applied to root element if `size="large"` & `variant="outlined"`

const outlined_large = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 7px 21px;
  font-size: 1.1rem;
`; // Applied to root element if `size="small"` & `variant="contained"`

const contained_small = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 4px 10px;
  font-size: 0.9rem;
`; // Applied to root element if `size="large"` & `variant="contained"`

const contained_large = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  padding: 8px 22px;
  font-size: 1.1rem;
`; // Applied to root element if true

const fullWidth = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  width: 100%;
`; // Using styles["string"] to call styled css via props

const styles = {
  root,
  label,
  text,
  text_primary,
  text_secondary,
  contained,
  contained_primary,
  contained_secondary,
  outlined,
  outlined_primary,
  outlined_secondary,
  text_small,
  text_large,
  outlined_small,
  outlined_large,
  contained_small,
  contained_large,
  fullWidth
};

const Button = props => {
  const children = props.children,
        className = props.className,
        _props$component = props.component,
        component = _props$component === void 0 ? "button" : _props$component,
        _props$color = props.color,
        color = _props$color === void 0 ? "default" : _props$color,
        _props$disabled = props.disabled,
        disabled = _props$disabled === void 0 ? false : _props$disabled,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? "text" : _props$variant,
        startIconProp = props.startIcon,
        endIconProp = props.endIcon,
        _props$size = props.size,
        size = _props$size === void 0 ? "medium" : _props$size,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        other = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "className", "component", "color", "disabled", "variant", "startIcon", "endIcon", "size", "fullWidth"]);

  const startIcon = startIconProp && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SStartIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, startIconProp);
  const endIcon = endIconProp && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SEndIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, endIconProp);
  const buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SButtonBase, Object.assign({
    className: className,
    component: component,
    variant: variant,
    color: color,
    size: size,
    disabled: disabled,
    fullWidth: fullWidth
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, startIcon, children, endIcon));
};

const SLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  ${label};
`;
const SStartIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  margin-left: -4px;
  margin-right: 8px;
`;
const SEndIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  margin-left: 8px;
  margin-right: -4px;
`;
const SButtonBase = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"])`
  ${styles.root};
  ${props => styles[props.variant]}
  ${props => styles[`${props.variant}_${props.color}`]}
  ${props => styles[`${props.variant}_${props.size}`]}
  ${props => props.fullWidth && styles.fullWidth}
`;
Button.propTypes = {
  // The content of the button
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  // Override style of component
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  // The color of the component. Support those color
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["default", "primary", "secondary"]),
  // True -> button disabled
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // Element placed before the children
  startIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  // Element placed after the children
  endIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  // True -> button take full width of container
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  // Size of the button, medium is default
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["small", "medium", "large"]),
  // The variant of the button, text is default
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(["text", "outlined", "contained"])
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/commons/ButtonBase.jsx":
/*!***********************************************!*\
  !*** ./src/components/commons/ButtonBase.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _TouchRipple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TouchRipple */ "./src/components/commons/TouchRipple.jsx");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/ButtonBase.jsx";



const root = styled_components__WEBPACK_IMPORTED_MODULE_3__["css"]`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: inherit;

  &:focus {
    outline: 0;
  }

  &:disabled {
    pointer-events: none;
    cursor: default;
  }
`;
let ComponentProp = "button";

const ButtonBase = props => {
  const children = props.children,
        className = props.className,
        component = props.component,
        disabled = props.disabled,
        other = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "className", "component", "disabled"]);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        focusVisible = _useState2[0],
        setFocusVisible = _useState2[1];

  if (disabled && focusVisible) setFocusVisible(false); // For using func at TouchRipple

  const rippleRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  const handleMouseDown = event => {
    if (rippleRef.current === null) return;
    rippleRef.current.start(event);
  };

  const handleMouseUp = event => {
    if (rippleRef.current === null) return;
    rippleRef.current.stop(event);
  };

  const handleMouseLeave = event => {
    // A bug trigger disabled button still here
    if (rippleRef.current === null) return;
    rippleRef.current.stop(event);
  };

  ComponentProp = component;

  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  } // A bug that disabled button can trigger onMouseLeave (move mouse fast enough to cause this)
  // The explain issue: https://github.com/facebook/react/issues/4251#issuecomment-132119842
  // Solution here: https://github.com/bcrumbs/reactackle/issues/61#issue-270701032


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SButtonBase, Object.assign({
    as: ComponentProp,
    className: className,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    disabled: disabled
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), children, !disabled && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TouchRipple__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ref: rippleRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }));
};

const SButtonBase = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"][ComponentProp]`
  ${root}
`;
/* harmony default export */ __webpack_exports__["default"] = (ButtonBase);

/***/ }),

/***/ "./src/components/commons/CustomSpin.jsx":
/*!***********************************************!*\
  !*** ./src/components/commons/CustomSpin.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/CustomSpin.jsx";


const CustomSpin = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, "Loading....");
};

/* harmony default export */ __webpack_exports__["default"] = (CustomSpin);

/***/ }),

/***/ "./src/components/commons/FetchingScreen.jsx":
/*!***************************************************!*\
  !*** ./src/components/commons/FetchingScreen.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_stuffProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/stuffProvider */ "./src/context/stuffProvider.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/FetchingScreen.jsx";




const spinIcon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  style: {
    fontSize: 40
  },
  spin: true,
  type: "loading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});

const FetchingScreen = () => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_stuffProvider__WEBPACK_IMPORTED_MODULE_2__["StuffContext"]),
        isFetching = _useContext.isFetching;

  const disableScroll = e => {
    e.preventDefault();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isFetching) {
      document.addEventListener("wheel", disableScroll, {
        passive: false
      });
      document.addEventListener("touchmove", disableScroll, {
        passive: false
      });
    }

    return () => {
      document.removeEventListener("wheel", disableScroll, {
        passive: false
      });
      document.addEventListener("touchmove", disableScroll, {
        passive: false
      });
    };
  }, [isFetching]);
  return isFetching ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SFetchingScreen, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Spin"], {
    indicator: spinIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

const SFetchingScreen = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;
const SIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
/* harmony default export */ __webpack_exports__["default"] = (FetchingScreen);

/***/ }),

/***/ "./src/components/commons/Notification.jsx":
/*!*************************************************!*\
  !*** ./src/components/commons/Notification.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/Notification.jsx";




const Notification = props => {
  const children = props.children,
        _props$width = props.width,
        width = _props$width === void 0 ? 0 : _props$width,
        _props$height = props.height,
        height = _props$height === void 0 ? 0 : _props$height;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isPop = _useState2[0],
        setIsPop = _useState2[1];

  const handleClick = event => {
    setIsPop(prev => !prev);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SNotification, {
    width: width,
    height: height,
    isPop: isPop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SFlow, {
    onClick: handleClick,
    isPop: isPop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "arrow-right",
    size: "3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SPlaceholder, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), children);
};

const SNotification = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  transition: 0.5s cubic-bezier(0.49, 0.83, 0.65, 0.29);

  transform: ${props => props.isPop ? `translate(0)` : `translate(-100%)`};
`;
const SFlow = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 100%;
  cursor: pointer;
  user-select: none;
  padding: 5px;
  background-color: white;
  transition: 0.5s linear;
  transform: ${props => props.isPop ? `rotate(180deg)` : `rotate(0)`};

  &:nth-child(1) {
  }
`;
const SPlaceholder = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./src/components/commons/Ripple.jsx":
/*!*******************************************!*\
  !*** ./src/components/commons/Ripple.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/Ripple.jsx";




const Ripple = ({
  styles,
  timeout,
  rippleX,
  rippleY,
  rippleSize,
  in: inProp,
  onExited = () => {}
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        leaving = _useState2[0],
        setLeaving = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!inProp) {
      setLeaving(true);
      const timeoutId = setTimeout(() => {
        onExited();
      }, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [inProp, onExited, timeout]);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SRipple, {
    style: rippleStyles,
    styles: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SChild, {
    leaving: leaving,
    styles: styles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

const SRipple = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  ${props => props.styles.ripple}
  ${props => props.styles.rippleVisible}
`;
const SChild = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  ${props => props.styles.child}
  ${props => props.leaving && props.styles.childLeaving}
`;
/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./src/components/commons/SkeletonLine.jsx":
/*!*************************************************!*\
  !*** ./src/components/commons/SkeletonLine.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/SkeletonLine.jsx";


const SSkeletonPulse = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(222, 222, 222, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
  //   background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonLine = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSkeletonLine, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }));
};

const SSkeletonLine = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SSkeletonPulse)`
  width: 5.5em;
  border-radius: 10px;

  &::before {
    content: "\00a0";
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (SkeletonLine);

/***/ }),

/***/ "./src/components/commons/Sticky.jsx":
/*!*******************************************!*\
  !*** ./src/components/commons/Sticky.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/Sticky.jsx";



const Sticky = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    height: 0,
    width: 0,
    stuckBottom: false,
    stuckLeft: false,
    stuckRight: false,
    stuckTop: false
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

  const stickyDiv = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  let frameId = 0;

  const handleScroll = () => {
    const sides = props.sides;
    const stickyDivCurrent = stickyDiv.current || null;
    const scrollTarget = props.scrollTarget || window;
    frameId = 0;

    if (!stickyDivCurrent) {
      return;
    } //scroll target is the window


    let scrollRect = {
      height: scrollTarget.innerHeight,
      width: scrollTarget.innerWidth,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      x: scrollTarget.scrollX,
      y: scrollTarget.scrollY
    }; //scroll target is not the window

    if (scrollTarget.getBoundingClientRect) {
      scrollRect = scrollTarget.getBoundingClientRect();
    }

    let stickyRect = stickyDivCurrent.getBoundingClientRect();

    if (!state.height || !state.width) {
      setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        height: stickyRect.height,
        width: stickyRect.height
      }));
    }

    stickyRect = {
      height: state.height || stickyRect.height,
      width: state.width || stickyRect.width,
      x: stickyRect.x,
      y: stickyRect.y
    };

    if (typeof sides.top === "number") {
      if (stickyRect.y < scrollRect.top + sides.top) {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckTop: true
        }));
      } else {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckTop: false
        }));
      }
    }

    if (typeof sides.bottom === "number") {
      if (stickyRect.y + stickyRect.height > scrollRect.height + scrollRect.top - sides.bottom) {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckBottom: true
        }));
      } else {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckBottom: false
        }));
      }
    }

    if (typeof sides.left === "number") {
      if (stickyRect.x < scrollRect.left + sides.left) {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckLeft: true
        }));
      } else {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckLeft: false
        }));
      }
    }

    if (typeof sides.right === "number") {
      if (stickyRect.x + stickyRect.width > scrollRect.width + scrollRect.left - sides.right) {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckRight: true
        }));
      } else {
        setState(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          stuckRight: false
        }));
      }
    }
  };

  const debouncedScroll = () => {
    if (!frameId) {
      const _frameId = requestAnimationFrame(handleScroll);

      frameId = _frameId;
    }
  };

  const addEvents = () => {
    //if component doesnt get a scrollTarget, use window instead
    const scrollTarget = props.scrollTarget || window;

    if (scrollTarget && stickyDiv.current) {
      scrollTarget.addEventListener("scroll", debouncedScroll);
    }
  };

  const removeEvents = () => {
    const scrollTarget = props.scrollTarget || window;

    if (scrollTarget) {
      scrollTarget.removeEventListener("scroll", debouncedScroll);
    }

    if (frameId) {
      console.log("cancel animation");
      cancelAnimationFrame(frameId);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    addEvents();
    return removeEvents;
  });
  const children = props.children;
  const stuckTop = state.stuckTop,
        stuckBottom = state.stuckBottom,
        stuckRight = state.stuckRight,
        stuckLeft = state.stuckLeft;
  const stickyModifiers = [];

  if (stuckBottom) {
    stickyModifiers.push("stuck-bottom");
  }

  if (stuckLeft) {
    stickyModifiers.push("stuck-left");
  }

  if (stuckRight) {
    stickyModifiers.push("stuck-right");
  }

  if (stuckTop) {
    stickyModifiers.push("stuck-top");
  }

  const childrenWithStuckProps = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(children, child => {
    const childModifiers = child.props && child.props.modifiers || [];
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
      modifiers: [...childModifiers, ...stickyModifiers]
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    ref: stickyDiv,
    style: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, childrenWithStuckProps);
};

Sticky.defaultProps = {
  scrollTarget: null,
  sides: {
    top: 0
  }
};
Sticky.propsTypes = {
  /** Pass in a React component, and it will receive `stuckBottom`, `stuckLeft`, `stuckRight`, and/or `stuckTop` modifiers */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /** If you have an internally scrolling component, pass its ref callback to watch for scroll events */
  scrollTarget: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** These offsets determine how far from the edge of the page an element must be to count as 'stuck' */
  sides: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    bottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    left: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    right: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    top: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Sticky);

/***/ }),

/***/ "./src/components/commons/TouchRipple.jsx":
/*!************************************************!*\
  !*** ./src/components/commons/TouchRipple.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Ripple */ "./src/components/commons/Ripple.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/commons/TouchRipple.jsx";




const DURATION = 500;
const enter = styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  0% {
    opacity: 0.1;
    transform: scale(0);
  }

  100% {
    opacity: 0.3;
    transform: scale(1);
  },
`;
const exit = styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
const styles = {
  root: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
  `,
  ripple: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    opacity: 0;
    position: absolute;
  `,
  rippleVisible: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    opacity: 0.3;
    transform: scale(1);
    animation: ${enter} 550ms ease-in-out;
  `,
  child: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    display: block;
    opacity: 1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  `,
  childLeaving: styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    opacity: 0;
    animation: ${exit} 550ms ease-in-out;
  `
};
const TouchRipple = Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function TouchRipple(props, ref) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        ripples = _useState2[0],
        setRipples = _useState2[1];

  const nextKey = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(0);
  const timer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const container = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const startCommit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(params => {
    const rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize;
    setRipples(oldRipples => [...oldRipples, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Ripple__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: nextKey.current,
      styles: styles,
      timeout: DURATION,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })]);
    nextKey.current += 1;
  }, []);
  const start = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(event => {
    const element = container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }; // Get the size of ripple

    let rippleX;
    let rippleY;
    let rippleSize; // x coordinate of mouse on client view port
    // y coordinate of mouse on client view port

    const clientX = event.clientX;
    const clientY = event.clientY; // x coordinate of rect on client view port
    // y coordinate of rect on client view port

    rippleX = Math.round(clientX - rect.left);
    rippleY = Math.round(clientY - rect.top);
    const sizeX = Math.max(Math.abs(element.clientWidth - rippleX), rippleX) * 2 + 2;
    const sizeY = Math.max(Math.abs(element.clientHeight - rippleY), rippleY) * 2 + 2;
    rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    startCommit({
      rippleX,
      rippleY,
      rippleSize
    });
  }, [startCommit]);
  const stop = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    clearTimeout(timer.current);
    timer.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) return oldRipples.slice(1);
      return oldRipples;
    });
  }, [setRipples]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, () => ({
    start,
    stop
  }), [start, stop]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(STouchRipple, {
    ref: container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    component: null,
    exit: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, ripples));
});
const STouchRipple = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  ${styles.root}
`;
/* harmony default export */ __webpack_exports__["default"] = (TouchRipple);

/***/ }),

/***/ "./src/components/css/DraggableItem.css":
/*!**********************************************!*\
  !*** ./src/components/css/DraggableItem.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DraggableItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/DraggableItem.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DraggableItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/DraggableItem.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./DraggableItem.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/DraggableItem.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/css/IntroCarousel.css":
/*!**********************************************!*\
  !*** ./src/components/css/IntroCarousel.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./IntroCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/IntroCarousel.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./IntroCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/IntroCarousel.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./IntroCarousel.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/IntroCarousel.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/css/Introduction.css":
/*!*********************************************!*\
  !*** ./src/components/css/Introduction.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Introduction.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/Introduction.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Introduction.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/Introduction.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./Introduction.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/Introduction.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/css/OuterContainer.css":
/*!***********************************************!*\
  !*** ./src/components/css/OuterContainer.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./OuterContainer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/OuterContainer.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./OuterContainer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/OuterContainer.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./OuterContainer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/OuterContainer.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/css/StarBox.css":
/*!****************************************!*\
  !*** ./src/components/css/StarBox.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StarBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/StarBox.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StarBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/StarBox.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./StarBox.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/css/StarBox.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/components/descriptionCard/DescriptionCard.jsx":
/*!************************************************************!*\
  !*** ./src/components/descriptionCard/DescriptionCard.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_withLogProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/withLogProps */ "./src/components/utils/withLogProps.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/descriptionCard/DescriptionCard.jsx";




const DescriptionCard = ({
  title,
  message,
  describe = "",
  button
}) => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SDescriptionCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SGoTo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, describe && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " ", describe, " "), button));
};

const SDescriptionCard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 20px;
  color: white;
  cursor: grab;
  user-select: none;
  font-size: 1rem;

  & > * {
    color: white;
    padding: 10px;
    font-size: 1.2rem;
  }

  & > h2 {
    font-size: 2rem;
  }
`;
const SGoTo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 40px;
  /* line-height of button is inherit */
  line-height: 50px;
  padding: 10px;

  & > * {
    padding: 0 50px;
    margin: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DescriptionCard);

/***/ }),

/***/ "./src/components/detail/ClockCounter.jsx":
/*!************************************************!*\
  !*** ./src/components/detail/ClockCounter.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/ClockCounter.jsx";



function convertToSecond({
  days,
  hours,
  mins,
  secs
}) {
  let result = 0;
  result += days * 86400;
  result += hours * 3600;
  result += mins * 60;
  return result + secs;
}

function convertToTime(expiredTimeInSecond) {
  // bitwise | 0 same as Math.floor(), parseInt()
  const days = expiredTimeInSecond / 86400 | 0;
  const hours = (expiredTimeInSecond - days * 86400) / 3600 | 0;
  const mins = (expiredTimeInSecond - days * 86400 - hours * 3600) / 60 | 0;
  const secs = expiredTimeInSecond - days * 86400 - hours * 3600 - mins * 60 | 0;
  return {
    days,
    hours,
    mins,
    secs
  };
}

const ClockCounter = props => {
  const children = props.children,
        setIsSale = props.setIsSale,
        style = props.style,
        rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "setIsSale", "style"]);

  let timeInSecs = props.timeInSecs;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    days: "",
    hours: "",
    mins: "",
    secs: ""
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        timer = _useState2[0],
        setTimer = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTimer(convertToTime(timeInSecs));
    const saleExpired = setInterval(() => {
      timeInSecs--;

      if (timeInSecs < 0) {
        setIsSale(false);
      } else setTimer(convertToTime(timeInSecs));
    }, 1000);
    return () => {
      clearInterval(saleExpired);
    };
  }, [setIsSale, timeInSecs]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {}, [timer]);

  const getTime = () => {
    const days = timer.days < 10 ? `0${timer.days}` : timer.days;
    const hours = timer.hours < 10 ? `0${timer.hours}` : timer.hours;
    const mins = timer.mins < 10 ? `0${timer.mins}` : timer.mins;
    const secs = timer.secs < 10 ? `0${timer.secs}` : timer.secs;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SClockCounter, Object.assign({
      style: style
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }), `${days} days ${hours}:${mins}:${secs}`);
  };

  return getTime();
};

const SClockCounter = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p`
  font-size: 12px;
  font-weight: lighter;
  color: ${({
  theme
}) => theme.color.primaryDark};
  margin: 0 0 0 5px;
`;
/* harmony default export */ __webpack_exports__["default"] = (ClockCounter);

/***/ }),

/***/ "./src/components/detail/DescriptionOption.jsx":
/*!*****************************************************!*\
  !*** ./src/components/detail/DescriptionOption.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _product_MarkWish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product/MarkWish */ "./src/components/product/MarkWish.jsx");
/* harmony import */ var _product_AddToCart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product/AddToCart */ "./src/components/product/AddToCart.jsx");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/DescriptionOption.jsx";








const DescriptionOption = props => {
  let product = props.product;
  const _product = product,
        id = _product.id;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        quantity = _useState2[0],
        setQuantity = _useState2[1];

  const handleQuantityChange = value => {
    setQuantity(value);
  }; // Need fix


  product = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product, {
    _id: id
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SOption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["InputNumber"], {
    min: 1,
    defaultValue: 1,
    value: quantity,
    parser: value => value.replace(".", ""),
    step: 1,
    size: "default",
    onChange: handleQuantityChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_product_AddToCart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    product: product,
    quantity: quantity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_product_MarkWish__WEBPACK_IMPORTED_MODULE_7__["default"], {
    _id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }));
};

const SOption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;

  & > * {
    margin-left: 15px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DescriptionOption);

/***/ }),

/***/ "./src/components/detail/DescriptionPrice.jsx":
/*!****************************************************!*\
  !*** ./src/components/detail/DescriptionPrice.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _TimeReminder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeReminder */ "./src/components/detail/TimeReminder.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/DescriptionPrice.jsx";





const DescriptionPrice = props => {
  const price = props.price,
        salePrice = props.salePrice,
        hotDealPrice = props.hotDealPrice,
        isPublished = props.isPublished,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal,
        setIsHotDeal = props.setIsHotDeal,
        hotDealExpired = props.hotDealExpired,
        quantityDealSold = props.quantityDealSold,
        quantityForDeal = props.quantityForDeal;

  const getSalePercent = salePrice => {
    return Math.round((price - salePrice) / price * 100);
  };

  const HotDeal = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "hot-deal-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "hotjar"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }, "$", hotDealPrice)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, "Save:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "percent-sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, getSalePercent(hotDealPrice))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, "Original price: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "origin-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TimeReminder__WEBPACK_IMPORTED_MODULE_2__["default"].Detail, {
      setIsHotDeal: setIsHotDeal,
      hotDealExpired: hotDealExpired,
      quantityForDeal: quantityForDeal,
      quantityDealSold: quantityDealSold,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }));
  };

  const Sale = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, "$", salePrice)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "Save:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "percent-sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }, getSalePercent(salePrice))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }, "Original price: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "origin-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, price)));
  };

  const Price = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sale-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "$", price)));
  };

  return isPublished ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, isHotDeal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HotDeal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }) : isSale ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sale, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Price, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPrice, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, "Not Available"));
};

const SPrice = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);

  .price {
    color: rgb(180, 180, 180);
    margin: 0;
  }

  .sale-price {
    font-size: 24px;
    color: ${({
  theme
}) => theme.color.primaryRed};
  }

  .percent-sale {
    color: ${({
  theme
}) => theme.color.primaryRed};
  }

  .hot-deal-icon {
    margin: 0 10px 0 0;
    font-size: 20px;

    & > svg {
      color: ${({
  theme
}) => theme.color.primaryOrange};
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (DescriptionPrice);

/***/ }),

/***/ "./src/components/detail/Detail.jsx":
/*!******************************************!*\
  !*** ./src/components/detail/Detail.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/productService */ "./src/services/productService.js");
/* harmony import */ var _MainDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainDetail */ "./src/components/detail/MainDetail.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/Detail.jsx";








const Detail = props => {
  const isMounted = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        product = _useState2[0],
        setProduct = _useState2[1];

  const _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useParams"])(),
        id = _useParams.id;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    isMounted.current = true;

    const populateProduct = async () => {
      const _ref = await Object(_services_productService__WEBPACK_IMPORTED_MODULE_4__["getProduct"])(id),
            data = _ref.data;

      if (isMounted.current) setProduct(mapToViewModel(data));
    };

    populateProduct();
    return () => {
      isMounted.current = false;
    };
  }, [id]); //have confusing about findProductById need back to the server ?
  //resolve:
  //back to server is best approach
  //cause if refresh page it gonna bug undefined product
  //cause main state at contextAPI doesnt load and it dont have products
  //Set products from server will run after findProduct

  const mapToViewModel = product => {
    const _id = product._id,
          name = product.name,
          image = product.image,
          category = product.category,
          brand = product.brand,
          detail = product.detail,
          isPublished = product.isPublished,
          price = product.price,
          salePrice = product.salePrice,
          hotDealExpired = product.hotDealExpired,
          hotDealPrice = product.hotDealPrice,
          quantityForDeal = product.quantityForDeal,
          quantityDealSold = product.quantityDealSold,
          quantityInStock = product.quantityInStock;
    return {
      id: _id,
      name,
      image: _services_utilities__WEBPACK_IMPORTED_MODULE_3__["getImageBase64"](image.data.data),
      category,
      brand,
      detail,
      isPublished,
      price,
      salePrice,
      hotDealExpired,
      hotDealPrice,
      quantityForDeal,
      quantityDealSold,
      quantityInStock
    };
  };

  return (// Object.keys(obj).length === 0 && obj.constructor === Object
    lodash__WEBPACK_IMPORTED_MODULE_7___default.a.isEmpty(product) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, "Loading") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SDetail, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MainDetail__WEBPACK_IMPORTED_MODULE_5__["default"], {
      product: product,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }))
  );
};

const SDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding-top: 50px;
  margin-top: 50px;
`;
/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ }),

/***/ "./src/components/detail/MainDetail.jsx":
/*!**********************************************!*\
  !*** ./src/components/detail/MainDetail.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _DescriptionOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DescriptionOption */ "./src/components/detail/DescriptionOption.jsx");
/* harmony import */ var _DescriptionPrice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DescriptionPrice */ "./src/components/detail/DescriptionPrice.jsx");
/* harmony import */ var _TimeReminder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimeReminder */ "./src/components/detail/TimeReminder.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/MainDetail.jsx";







const MainDetail = props => {
  const product = props.product;
  const id = product.id,
        name = product.name,
        image = product.image,
        price = product.price,
        salePrice = product.salePrice,
        detail = product.detail,
        hotDealPrice = product.hotDealPrice,
        hotDealExpired = product.hotDealExpired,
        quantityInStock = product.quantityInStock,
        quantityForDeal = product.quantityForDeal,
        quantityDealSold = product.quantityDealSold,
        isPublished = product.isPublished;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => {
    // It's hot deal
    if (new Date(hotDealExpired.startDate) <= Date.now() && new Date(hotDealExpired.endDate) > Date.now()) return true;
    return false;
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isHotDeal = _useState2[0],
        setIsHotDeal = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => {
    // It's normal sale
    if (salePrice !== 0) return true;
    return false;
  }),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        isSale = _useState4[0],
        setIsSale = _useState4[1];

  const Image = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: `data:image/png;base64,${image}`,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }));

  const DesciptionContent = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: undefined
    }, detail));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SMainDetail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Image, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    span: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Brand: ?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DescriptionPrice__WEBPACK_IMPORTED_MODULE_5__["default"], {
    price: price,
    hotDealPrice: hotDealPrice,
    salePrice: salePrice,
    isPublished: isPublished,
    isHotDeal: isHotDeal,
    isSale: isSale,
    setIsHotDeal: setIsHotDeal,
    hotDealExpired: hotDealExpired,
    quantityDealSold: quantityDealSold,
    quantityForDeal: quantityForDeal,
    quantityInStock: quantityInStock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(DesciptionContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_DescriptionOption__WEBPACK_IMPORTED_MODULE_4__["default"], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  })))));
};

const SPrice = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);

  .price {
    color: rgb(180, 180, 180);
    margin: 0;
  }

  .sale-price {
    font-size: 24px;
    color: ${({
  theme
}) => theme.color.primaryRed};
  }

  .percent-sale {
    color: ${({
  theme
}) => theme.color.primaryRed};
  }
`;
const SMainDetail = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  background-color: ${({
  theme
}) => theme.color.primaryLight};

  margin: auto;

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.lg}) {
    max-width: 1140px;
  }
`;
const SImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  text-align: center;
  border-right: 1px solid rgb(240, 240, 240);

  & > img {
    width: 400px;
    height: 400px;
  }
`;
const SName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding: 15px;
  border-bottom: 1px solid rgb(240, 240, 240);

  & > span {
    margin: 0;
    font-size: 24px;
    font-weight: lighter;
    color: #333;
    line-height: 30px;
  }

  & > h5 {
    font-weight: bold;
  }
`;
const SDescription = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding: 20px;
`;
const SContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  padding: 10px 0;
  border-bottom: 1px solid rgb(240, 240, 240);

  & > p {
    margin: 0;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (MainDetail);
/* <DescriptionPrice
  price={price}
  isHotDeal={isHotDeal}
  isSale={isSale}
  setIsHotDeal={setIsHotDeal}
  quantityDealSold={quantityDealSold}
  quantityForDeal={quantityForDeal}
  quantityInStock={quantityInStock}
/>; */

/***/ }),

/***/ "./src/components/detail/TimeReminder.jsx":
/*!************************************************!*\
  !*** ./src/components/detail/TimeReminder.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ClockCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClockCounter */ "./src/components/detail/ClockCounter.jsx");
/* harmony import */ var _TimeReminderDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimeReminderDetail */ "./src/components/detail/TimeReminderDetail.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/TimeReminder.jsx";




const TimeReminderSimple = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const setIsHotDeal = props.setIsHotDeal,
        hotDealExpired = props.hotDealExpired,
        quantityForDeal = props.quantityForDeal,
        quantityDealSold = props.quantityDealSold;
  const diffTime = Math.abs(Date.now() - new Date(hotDealExpired.endDate)); // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const diffSecs = Math.ceil(diffTime / 1000);

  const getPercentSoled = () => {
    return Math.round(quantityDealSold / quantityForDeal * 100);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(STimeReminderSimple, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SBar, {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPercent, {
    className: "percent",
    percent: getPercentSoled(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SContent, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "sold ", quantityDealSold))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClockCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setIsSale: setIsHotDeal,
    timeInSecs: diffSecs,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }));
});
const STimeReminderSimple = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  margin-top: 5px;
  justify-content: center;
  user-select: none;
`;
const SBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  flex: 1;
  height: 18px;
  border-radius: 10px;
  background-color: rgb(255, 190, 134);
`;
const SPercent = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SBar)`
  position: absolute;
  width: ${({
  percent
}) => `${percent}%`};
  background-color: rgb(234, 120, 0);
`;
const SContent = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SBar)`
  position: absolute;
  width: 100%;
  text-align: center;
  background-color: transparent;

  & > p {
    margin: 0;
    text-transform: capitalize;
    font-size: 12px;
    color: ${({
  theme
}) => theme.color.primaryLight};
  }
`; // export default TimeReminderSimple;

const TimeReminder = {
  Simple: TimeReminderSimple,
  Detail: _TimeReminderDetail__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (TimeReminder);

/***/ }),

/***/ "./src/components/detail/TimeReminderDetail.jsx":
/*!******************************************************!*\
  !*** ./src/components/detail/TimeReminderDetail.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ClockCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClockCounter */ "./src/components/detail/ClockCounter.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/detail/TimeReminderDetail.jsx";




const TimeReminderDetail = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const setIsHotDeal = props.setIsHotDeal,
        hotDealExpired = props.hotDealExpired,
        quantityForDeal = props.quantityForDeal,
        quantityDealSold = props.quantityDealSold;
  const diffTime = Math.abs(Date.now() - new Date(hotDealExpired.endDate)); // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const diffSecs = Math.ceil(diffTime / 1000);

  const getPercentSoled = () => {
    return Math.round(quantityDealSold / quantityForDeal * 100);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(STimeReminderDetail, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ["far", "clock"],
    size: "1x",
    style: {
      marginRight: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), "Hot deal end in :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ClockCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    setIsSale: setIsHotDeal,
    timeInSecs: diffSecs,
    style: {
      display: "inline-block",
      fontSize: "16px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SDealInfo, {
    className: "deal-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SContent, {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "sold ", quantityDealSold)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SBar, {
    className: "bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPercent, {
    className: "percent",
    percent: getPercentSoled(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }))));
});
const STimeReminderDetail = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: block;
  width: 100%;
  margin-top: 5px;
  user-select: none;
`;
const SDealInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row nowrap;
  padding-top: 10px;
`;
const SBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  width: 85%;
  height: 8px;
  border-radius: 10px;
  background-color: rgb(255, 232, 239);
`;
const SPercent = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(SBar)`
  position: absolute;
  width: ${({
  percent
}) => `${percent}%`};
  background-color: ${({
  theme
}) => theme.color.primaryRed};
`;
const SContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  flex: 1;
  text-align: start;

  & > p {
    margin: 0;
    text-transform: capitalize;
    font-size: 12px;
    color: ${({
  theme
}) => theme.color.primaryRed};
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (TimeReminderDetail);

/***/ }),

/***/ "./src/components/footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/footer/Footer.jsx";





const Footer = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SFooter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Follow Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "facebook-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "instagram"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "youtube-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Youtube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "twitter-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Follow Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "facebook-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "instagram"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "youtube-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Youtube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "twitter-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Follow Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "facebook-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "Facebook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "instagram"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, "Instagram")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "youtube-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Youtube")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: ["fab", "twitter-square"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }),
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SLicense, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Copyright\xA92020 All rights reserved. Contact @keytoherheart for more information"));
};

const SItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    margin: 10px;
    min-width: 130px;
  }
`;
const SLicense = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  grid-column: 1/4;
  margin: 10px 0;
`;
const SFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: grid;
  grid-template-columns: auto auto auto;
  min-height: 20vh;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  margin-top: 40px;
  background-image: linear-gradient(
    to bottom,
    #03203c,
    #0e223b,
    #162439,
    #1d2738,
    #222936,
    #232934,
    #252a33,
    #262a31,
    #24282f,
    #23262d,
    #21252c,
    #20232a
  );
  color: #c8c8c8;
`;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/loginButton/LoginInfomationPopUp.jsx":
/*!*************************************************************!*\
  !*** ./src/components/loginButton/LoginInfomationPopUp.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_authService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authService */ "./src/services/authService.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/loginButton/LoginInfomationPopUp.jsx";






const LoginInfomationPopUp = ({
  isActive,
  user
}) => {
  const handleLogOut = () => {
    _services_authService__WEBPACK_IMPORTED_MODULE_4__["logout"]();
    window.location = "/";
  };

  const handleCheckOrders = () => {
    console.log("orders");
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SPopUp, {
    isActive: isActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "text",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, `${user.firstName} ${user.lastName}`)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleCheckOrders,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Check Orders"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "secondary",
    fullWidth: true,
    onClick: handleLogOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Logout"));
};

const SPopUp = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: absolute;
  min-width: 50px;
  min-height: 50px;
  padding: 10px;
  background-color: ${({
  theme
}) => theme.color.primaryLight};
  top: 50px;
  left: -55px;
  border-radius: 5px 5px 5px 5px;
  transform: ${props => props.isActive ? "scale(1)" : "scale(0)"};
  transition: 0.2s ease-in-out;
  z-index: 1;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);
  box-shadow: 0px 0px 5px 0px rgba(143, 143, 143, 1);

  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 10px;
    background-color: transparent;
    border-bottom: 15px solid white;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    top: -10px;
    left: 55px;
  }

  div,
  button {
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    margin: 5px 0;
  }

  div {
    color: black;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginInfomationPopUp);

/***/ }),

/***/ "./src/components/loginButton/LoginInformation.jsx":
/*!*********************************************************!*\
  !*** ./src/components/loginButton/LoginInformation.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _LoginInfomationPopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginInfomationPopUp */ "./src/components/loginButton/LoginInfomationPopUp.jsx");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/loginButton/LoginInformation.jsx";





const LoginInformation = ({
  user
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isActive = _useState2[0],
        setIsActive = _useState2[1];

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) setIsActive(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive) document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isActive]);

  const handleOnClick = () => {
    setIsActive(prev => {
      return !prev;
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SLoginInformation, {
    isActive: isActive,
    onClick: handleOnClick,
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "user-circle",
    style: {
      fontSize: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_LoginInfomationPopUp__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isActive: isActive,
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }));
};

const SLoginInformation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  font-size: 1rem;
  text-transform: capitalize;
  color: white;
  padding: 0 0;
  margin-top: 10px;
  cursor: pointer;
  border: ${props => props.isActive ? "1px solid rgb(31, 104, 168)" : "1px solid transparent"};
  border-radius: 5px;

  &:hover {
    border: 1px solid rgb(31, 104, 168);
  }

  @media screen and (max-width: ${({
  theme
}) => theme.responsive.md}) {
    display: none;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (LoginInformation);

/***/ }),

/***/ "./src/components/product/AddToCart.jsx":
/*!**********************************************!*\
  !*** ./src/components/product/AddToCart.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _context_cartProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/cartProvider */ "./src/context/cartProvider.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/AddToCart.jsx";




const AddToCart = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const product = props.product,
        _props$quantity = props.quantity,
        quantity = _props$quantity === void 0 ? 1 : _props$quantity;
  const _id = product._id,
        isPublished = product.isPublished,
        quantityInStock = product.quantityInStock,
        quantityForDeal = product.quantityForDeal,
        quantityDealSold = product.quantityDealSold;

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_cartProvider__WEBPACK_IMPORTED_MODULE_2__["CartContext"]),
        cart = _useContext.cart,
        addToCart = _useContext.addToCart,
        isSale = _useContext.isSale,
        isHotDeal = _useContext.isHotDeal;

  const handleAddToCart = async () => {
    let tempQuantity = quantity;
    cart.forEach(item => {
      const quantityInCart = item.quantity,
            product = item.product;

      if (product._id === _id) {
        tempQuantity += quantityInCart;
      }
    });
    const response = await addToCart(_id, tempQuantity);

    if (response && response.status === 200) {
      antd__WEBPACK_IMPORTED_MODULE_3__["notification"].success({
        message: "Item is added",
        description: `${tempQuantity} kind of this item in cart`
      });
    }
  };

  const isOutOfStock = !!quantityInStock === 0; // In hot deal time but sell out

  const isSellOut = isHotDeal && quantityDealSold === quantityForDeal ? true : false;
  let isDisabled = !isPublished;
  isDisabled = isPublished && !isOutOfStock && !isSellOut ? false : true;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "text",
    color: "secondary",
    disabled: isDisabled,
    onClick: handleAddToCart,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, isPublished ? "Add To Cart" : "Comming Soon");
});
/* harmony default export */ __webpack_exports__["default"] = (AddToCart);

/***/ }),

/***/ "./src/components/product/MarkWish.jsx":
/*!*********************************************!*\
  !*** ./src/components/product/MarkWish.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _context_wishListProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/wishListProvider */ "./src/context/wishListProvider.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/MarkWish.jsx";





const icon_small = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  font-size: 16px;
`;
const icon_medium = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  font-size: 18px;
`;
const icon_large = styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
  font-size: 20px;
`;
const styles = {
  icon_small,
  icon_medium,
  icon_large
};
const MarkWish = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const _id = props._id,
        _props$size = props.size,
        size = _props$size === void 0 ? "medium" : _props$size;

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_wishListProvider__WEBPACK_IMPORTED_MODULE_4__["WishListContext"]),
        wishList = _useContext.wishList,
        markWishItem = _useContext.markWishItem;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => {
    let wishListIds = [];
    wishList.forEach(i => {
      wishListIds.push(i._id);
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_5___default.a.includes(wishListIds, _id)) {
      return true;
    }

    return false;
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        loved = _useState2[0],
        setLoved = _useState2[1];

  const handleMarkWish = () => {
    const response = markWishItem(_id); // if (response.status === 200) setLoved(prev => !prev);

    setLoved(prev => !prev);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SHeart, {
    onClick: handleMarkWish,
    size: size,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, loved ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: ["far", "heart"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }));
});
const SHeart = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span`
  ${({
  size
}) => styles[`icon_${size}`]};
  cursor: pointer;
  margin-right: 10px;
  color: ${({
  theme
}) => theme.color.primaryRed};
`;
/* harmony default export */ __webpack_exports__["default"] = (MarkWish);

/***/ }),

/***/ "./src/components/product/Product.jsx":
/*!********************************************!*\
  !*** ./src/components/product/Product.jsx ***!
  \********************************************/
/*! exports provided: SProduct, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SProduct", function() { return SProduct; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _detail_TimeReminder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detail/TimeReminder */ "./src/components/detail/TimeReminder.jsx");
/* harmony import */ var _ProductFunctional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductFunctional */ "./src/components/product/ProductFunctional.jsx");
/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductImage */ "./src/components/product/ProductImage.jsx");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductInfo */ "./src/components/product/ProductInfo.jsx");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/Product.jsx";







 // Not found solution for not re-render whole product
// Create separate MarkWish-Button & AddCart-Button

const Product = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(props => {
  const product = props.product,
        _props$carousel = props.carousel,
        carousel = _props$carousel === void 0 ? false : _props$carousel,
        style = props.style,
        rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["product", "carousel", "style"]);

  const _id = product._id,
        name = product.name,
        image = product.image,
        price = product.price,
        salePrice = product.salePrice,
        hotDealPrice = product.hotDealPrice,
        hotDealExpired = product.hotDealExpired,
        quantityInStock = product.quantityInStock,
        quantityForDeal = product.quantityForDeal,
        quantityDealSold = product.quantityDealSold,
        isPublished = product.isPublished;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => {
    // It's hot deal
    if (new Date(hotDealExpired.startDate) <= Date.now() && new Date(hotDealExpired.endDate) > Date.now()) return true;
    return false;
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isHotDeal = _useState2[0],
        setIsHotDeal = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(() => {
    // It's normal sale
    if (salePrice !== 0) return true;
    return false;
  }),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        isSale = _useState4[0],
        setIsSale = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SProduct, {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    _id: _id,
    image: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: name,
    isPublished: isPublished,
    isSale: isSale,
    isHotDeal: isHotDeal,
    salePrice: salePrice,
    hotDealPrice: hotDealPrice,
    price: price,
    quantityInStock: quantityInStock,
    quantityForDeal: quantityForDeal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductFunctional__WEBPACK_IMPORTED_MODULE_6__["default"], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), isPublished && isHotDeal && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_detail_TimeReminder__WEBPACK_IMPORTED_MODULE_5__["default"].Simple, {
    setIsHotDeal: setIsHotDeal,
    hotDealExpired: hotDealExpired,
    quantityForDeal: quantityForDeal,
    quantityDealSold: quantityDealSold,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }));
}); // Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     name: PropTypes.string,
//     price: PropTypes.number,
//     inCart: PropTypes.bool
//   }).isRequired
// };

const SProduct = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  position: relative;
  max-width: 250px;
  padding: 10px;
  margin: auto;
  border: 0.04rem solid;
  border-color: transparent;
  transition: all 0.2s linear;

  &:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/components/product/ProductContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/components/product/ProductContainer.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductContainer; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductList */ "./src/components/product/ProductList.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ToolBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ToolBar */ "./src/components/product/ToolBar.jsx");
/* harmony import */ var _context_productsProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/productsProvider */ "./src/context/productsProvider.js");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
/* harmony import */ var _SpecialCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SpecialCarousel */ "./src/components/SpecialCarousel.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commons/SkeletonLine */ "./src/components/commons/SkeletonLine.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ProductContainer.jsx";







 // import Loading from "../commons/Loading";



function ProductContainer() {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_productsProvider__WEBPACK_IMPORTED_MODULE_6__["ProductsContext"]),
        products = _useContext.products;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        searchQuery = _useState2[0],
        setSearchQuery = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    pageSize: 8,
    currentPage: 1
  }),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        pagination = _useState4[0],
        setPagination = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    path: "hotDealPrice",
    order: "asc"
  }),
        _useState6 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        sortType = _useState6[0],
        setSortType = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {}, []); // Handle actions

  const handleSearch = searchQuery => {
    setSearchQuery(searchQuery);
  }; //get data after filter query and pagination


  const getPageData = () => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = products.filter(p => p.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    }

    const sorted = lodash__WEBPACK_IMPORTED_MODULE_9___default.a.orderBy(filtered, [sortType.path], [sortType.order]);

    const paginateProducts = Object(_services_utilities__WEBPACK_IMPORTED_MODULE_7__["paginate"])(sorted, pagination.currentPage, pagination.pageSize);
    return {
      totalCount: filtered.length,
      data: paginateProducts
    };
  };

  const handlePageChange = (page, pageSize) => {
    setPagination(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pagination, {
      currentPage: page
    }));
  };

  const handlePageSizeChange = value => {
    setPagination(Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _services_utilities__WEBPACK_IMPORTED_MODULE_7__["paginate"], {
      pageSize: value
    }));
  };

  const handleSort = () => {
    setSortType(prev => {
      if (prev.order === "asc") return Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev, {
        order: "desc"
      });
      return Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev, {
        order: "asc"
      });
    });
  };

  const _getPageData = getPageData(),
        totalCount = _getPageData.totalCount,
        data = _getPageData.data;

  const Loading = props => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      padding: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      height: "250px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "20px",
      padding: "5px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "65%",
      height: "20px",
      padding: "5px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      width: "35%",
      height: "20px",
      padding: "5px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })));

  let arrLoading = [];
  const colResponsive = {
    xs: {
      span: 24
    },
    sm: {
      span: 24
    },
    md: {
      span: 12
    },
    lg: {
      span: 8
    },
    xl: {
      span: 6
    }
  };

  for (let i = 0; i < pagination.pageSize; i++) {
    arrLoading.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Col"], Object.assign({
      key: i
    }, colResponsive, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })));
  } // I dont know how to
  // recognize data is fetching or emty data


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SProductContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ToolBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: searchQuery.searchQuery,
    pageSize: pagination.pageSize,
    sortType: sortType,
    onSearch: handleSearch,
    onPageSizeChange: handlePageSizeChange,
    onSort: handleSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), products.length === 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_11__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, arrLoading) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ProductList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: data,
    pageSize: pagination.pageSize,
    currentPage: pagination.currentPage,
    totalCount: totalCount,
    onPageChange: handlePageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SpecialCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "or you may like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }));
}
const SProductContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  /* display: flex; */
  /* flex-flow: row nowrap; */
  /* justify-content: center; */
  background-color: ${({
  theme
}) => theme.color.primaryLight};

  margin: auto;

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.xs}) {
    max-width: 540px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.sm}) {
    max-width: 720px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.md}) {
    max-width: 960px;
  }

  @media screen and (min-width: ${({
  theme
}) => theme.responsive.lg}) {
    max-width: 1140px;
  }
`;

/***/ }),

/***/ "./src/components/product/ProductFunctional.jsx":
/*!******************************************************!*\
  !*** ./src/components/product/ProductFunctional.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarkWish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkWish */ "./src/components/product/MarkWish.jsx");
/* harmony import */ var _AddToCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddToCart */ "./src/components/product/AddToCart.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ProductFunctional.jsx";




const ProductFunctional = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const product = props.product;
  const _id = product._id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SProductFunctional, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarkWish__WEBPACK_IMPORTED_MODULE_1__["default"], {
    _id: _id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddToCart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
});
const SProductFunctional = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  margin-top: 5px;
`;
/* harmony default export */ __webpack_exports__["default"] = (ProductFunctional);

/***/ }),

/***/ "./src/components/product/ProductImage.jsx":
/*!*************************************************!*\
  !*** ./src/components/product/ProductImage.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ProductImage.jsx";



 // The custom comparison function

const comparison = function (prevProps, nextProps) {
  return prevProps._id === nextProps._id;
};

const ProductImage = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const _id = props._id,
        image = props.image;
  let imageBase64 = Object(_services_utilities__WEBPACK_IMPORTED_MODULE_3__["getImageBase64"])(image.data.data);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SProductImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: `/product/${_id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: `data:image/png;base64,${imageBase64}`,
    alt: "product",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })));
}, comparison);
const SProductImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  position: relative;
  overflow: hidden;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ProductImage);

/***/ }),

/***/ "./src/components/product/ProductInfo.jsx":
/*!************************************************!*\
  !*** ./src/components/product/ProductInfo.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ProductInfo.jsx";


const ProductInfo = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const name = props.name,
        isPublished = props.isPublished,
        isSale = props.isSale,
        isHotDeal = props.isHotDeal,
        salePrice = props.salePrice,
        hotDealPrice = props.hotDealPrice,
        price = props.price,
        quantityInStock = props.quantityInStock,
        quantityForDeal = props.quantityForDeal;

  const getSalePercent = salePrice => {
    return Math.round((price - salePrice) / price * 100);
  };

  const HotDeal = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "$", hotDealPrice, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "percent-deal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, "-", getSalePercent(hotDealPrice), "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "original-deal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "$", price));
  };

  const Sale = () => {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "$", salePrice, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "percent-sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, "-", getSalePercent(salePrice), "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "original-sale",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, "$", price));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SProductIfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "price",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, isPublished ? isHotDeal ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HotDeal, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }) : isSale ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sale, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }) : `$${price}` : "Not Available"));
});
const SProductIfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  font-size: 16px;
  color: ${({
  theme
}) => theme.primaryDark};

  & > .title {
    position: relative;
    max-height: 40px;
    width: 100%;
    font-size: 13px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.54;
    letter-spacing: 0.1px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0px;
  }

  & > .price {
    margin-top: 5px;
    font-weight: bold;
    margin: 5px 0 0 0;

    & > .percent-deal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: ${({
  theme
}) => theme.color.primaryLight};
      font-size: 13px;
      top: 10px;
      left: 20px;
      background-image: url("https://frontend.tikicdn.com/_new-next/static/img/icons/product/deal-tag.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 40px 35px;
      width: 40px;
      height: 35px;
      padding-bottom: 5px;
    }

    & > .original-deal {
      margin-left: 5px;
      font-size: 13px;
      font-weight: normal;
      text-decoration: line-through;
    }

    & > .percent-sale {
      font-weight: lighter;
      font-size: 12px;
      margin-left: 5px;
    }

    & > .original-sale {
      display: block;
      font-size: 13px;
      font-weight: normal;
      text-decoration: line-through;
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);

/***/ }),

/***/ "./src/components/product/ProductList.jsx":
/*!************************************************!*\
  !*** ./src/components/product/ProductList.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commons/SkeletonLine */ "./src/components/commons/SkeletonLine.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ProductList.jsx";




const Product = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./Product */ "./src/components/product/Product.jsx")));
const colResponsive = {
  xs: {
    span: 24
  },
  sm: {
    span: 24
  },
  md: {
    span: 12
  },
  lg: {
    span: 8
  },
  xl: {
    span: 6
  }
};

const Loading = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    height: "250px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    width: "100%",
    height: "20px",
    padding: "5px 0"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    width: "65%",
    height: "20px",
    padding: "5px 0"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  style: {
    width: "35%",
    height: "20px",
    padding: "5px 0"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_SkeletonLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})));

const ProductList = props => {
  const products = props.products,
        pageSize = props.pageSize,
        currentPage = props.currentPage,
        totalCount = props.totalCount,
        onPageChange = props.onPageChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SProductList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    type: "flex",
    style: {
      minHeight: "90vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, products.map(product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    key: product._id,
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], Object.assign({}, colResponsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), product._id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Product, {
    key: product._id,
    product: product,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Loading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    justify: "center",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    defaultCurrent: 1,
    current: currentPage,
    total: totalCount,
    pageSize: pageSize,
    onChange: onPageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))));
}; // 790px is max height productlist


const SProductList = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  margin-top: 10px;
  min-height: 790px;
`;
/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./src/components/product/ToolBar.jsx":
/*!********************************************!*\
  !*** ./src/components/product/ToolBar.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/product/ToolBar.jsx";





const Option = antd__WEBPACK_IMPORTED_MODULE_3__["Select"].Option;
const Search = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search;
const plainOptions = ["Apple", "Pear", "Orange", "red", "blue", "pink"];
const defaultCheckedList = ["Apple", "Orange"];
const ToolBar = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const value = props.value,
        pageSize = props.pageSize,
        sortType = props.sortType,
        onSort = props.onSort,
        onSearch = props.onSearch,
        onPageSizeChange = props.onPageSizeChange;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultCheckedList),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        checkedList = _useState2[0],
        setCheckedList = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(!!checkedList.length && checkedList.length < plainOptions.length),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        indeterminate = _useState4[0],
        setIndeterminate = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(checkedList.length === plainOptions.length),
        _useState6 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        checkAll = _useState6[0],
        setCheckAll = _useState6[1];

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const onCheckboxGroupChange = checkedList => {
    setCheckedList(checkedList);
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length);
    setCheckAll(checkedList.length === plainOptions.length);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SToolBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, {
    placeholder: "Input search text",
    onSearch: onSearch,
    style: {
      width: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Select"], {
    defaultValue: pageSize,
    style: {
      width: 80
    },
    onChange: onPageSizeChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    value: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "8"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    value: 16,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "16"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    value: 32,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "32")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "text",
    color: "secondary",
    endIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
      icon: sortType.order === "asc" ? "angle-down" : "angle-up",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }),
    onClick: onSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "Price"));
});
const SToolBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  width: 100%;
  min-height: 50px;
  max-height: 200px;
`;
/* harmony default export */ __webpack_exports__["default"] = (ToolBar);

/***/ }),

/***/ "./src/components/profile/EditProfileForm.jsx":
/*!****************************************************!*\
  !*** ./src/components/profile/EditProfileForm.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userService */ "./src/services/userService.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/EditProfileForm.jsx";









 // Initial inside or outside will better ? dont know

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 5
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 12
    }
  }
};

const EditProfileForm = ({
  user,
  setUser
}) => {
  const initialValues = {
    firstName: user.firstName || {},
    lastName: user.lastName || {},
    email: user.email || {},
    phone: user.phone || {}
  };
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_6__["object"]().shape({
    firstName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, "Firstname must have more than 1 character").required("Firstname is required"),
    lastName: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, "Lastname must have more than 1 character").required("Lastname is required"),
    phone: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().matches(/^[0-9]+$/, "Phone must be a number").min(8, "Phone number must have more than 7 number").required("Phone number is required")
  });

  const handleSubmit = async (values, {
    setErrors
  }) => {
    const firstName = values.firstName,
          lastName = values.lastName,
          phone = values.phone,
          _values$gender = values.gender,
          gender = _values$gender === void 0 ? "male" : _values$gender;
    const response = await Object(_services_userService__WEBPACK_IMPORTED_MODULE_2__["updateProfile"])({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      gender: gender
    });
    setUser({
      firstName: response.data.firstName,
      lastName: response.data.lastName,
      email: response.data.email,
      phone: response.data.phone,
      gender: response.data.gender
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, []);
  const MyField = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(props => {
    const as = props.as,
          name = props.name,
          type = props.type,
          label = props.label,
          placeholder = props.placeholder,
          prefix = props.prefix,
          handleChange = props.handleChange,
          value = props.value,
          validateStatus = props.validateStatus,
          help = props.help,
          rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["as", "name", "type", "label", "placeholder", "prefix", "handleChange", "value", "validateStatus", "help"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object.assign({
      validateStatus: validateStatus,
      label: label,
      help: help
    }, formItemLayout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], Object.assign({
      as: as,
      name: name,
      type: type,
      placeholder: placeholder,
      prefix: prefix,
      onChange: handleChange,
      value: value
    }, rest, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }))));
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SEditProfileForm, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, (_ref) => {
    let values = _ref.values,
        errors = _ref.errors,
        touched = _ref.touched,
        isValid = _ref.isValid,
        handleChange = _ref.handleChange,
        handleSubmit = _ref.handleSubmit,
        handleReset = _ref.handleReset,
        rest = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["values", "errors", "touched", "isValid", "handleChange", "handleSubmit", "handleReset"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_4__["Input"],
      name: "firstName",
      type: "text",
      label: "FirstName",
      size: "large",
      onChange: handleChange,
      value: values.firstName,
      validateStatus: errors.firstName && touched.firstName ? "error" : "",
      help: errors.firstName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_4__["Input"],
      name: "lastName",
      type: "text",
      label: "LastName",
      size: "large",
      onChange: handleChange,
      value: values.lastName,
      validateStatus: errors.lastName && touched.lastName ? "error" : "",
      help: errors.lastName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_4__["Input"],
      name: "email",
      type: "email",
      label: "Email",
      disabled: true,
      prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: "at",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: undefined
      }),
      size: "large",
      value: values.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyField, {
      as: antd__WEBPACK_IMPORTED_MODULE_4__["Input"],
      name: "phone",
      type: "text",
      label: "Phone",
      prefix: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: undefined
      }),
      size: "large",
      onChange: handleChange,
      value: values.phone,
      validateStatus: errors.phone && touched.phone ? "error" : "",
      help: errors.phone,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SButtonGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "submit",
      variant: "contained",
      color: "primary",
      disabled: !isValid ? true : lodash__WEBPACK_IMPORTED_MODULE_9___default.a.isEmpty(touched) ? true : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: undefined
    }, "Save Change"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      type: "reset",
      variant: "contained",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: undefined
    }, "Reset")));
  }));
};

const SEditProfileForm = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 100%;
  padding: 10px;
  min-height: 100px;
`;
const SButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div`
  width: 50%;
  margin: auto;

  & > button {
    margin: 0 20px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (EditProfileForm);

/***/ }),

/***/ "./src/components/profile/Profile.jsx":
/*!********************************************!*\
  !*** ./src/components/profile/Profile.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProfileSider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileSider */ "./src/components/profile/ProfileSider.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_CustomSpin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/CustomSpin */ "./src/components/commons/CustomSpin.jsx");
/* harmony import */ var _ProfileMain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileMain */ "./src/components/profile/ProfileMain.jsx");
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/userService */ "./src/services/userService.js");
/* harmony import */ var _context_userProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/userProvider */ "./src/context/userProvider.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/Profile.jsx";









const Profile = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_userProvider__WEBPACK_IMPORTED_MODULE_7__["UserContext"]),
        user = _useContext.user,
        setUser = _useContext.setUser;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        collapsed = _useState2[0],
        setCollapsed = _useState2[1];

  const handleSiderCollapse = () => {
    setCollapsed(pre => !pre);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProfileSider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    collapsed: collapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), lodash__WEBPACK_IMPORTED_MODULE_8___default.a.isEmpty(user) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_commons_CustomSpin__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProfileMain__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user,
    setUser: setUser,
    collapsed: collapsed,
    handleSiderCollapse: handleSiderCollapse,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/profile/ProfileDetails.jsx":
/*!***************************************************!*\
  !*** ./src/components/profile/ProfileDetails.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _EditProfileForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditProfileForm */ "./src/components/profile/EditProfileForm.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/ProfileDetails.jsx";





const TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;

const ProfileDetails = ({
  user,
  setUser
}) => {
  const firstName = user.firstName,
        lastName = user.lastName,
        phone = user.phone,
        gender = user.gender;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SProfileDetails, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [0, 48],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
    size: 150,
    icon: "user",
    src: "../images/view.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SSelfInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SName, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, `${firstName} ${lastName}`), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, gender)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    gutter: [0, 48],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
    defaultActiveKey: "1",
    onChange: () => {
      console.log("newtab");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "Edit Profile",
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditProfileForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: user,
    setUser: setUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPane, {
    tab: "Tab 2",
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "Content of Tab Pane 2"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    span: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "Unknown")));
};

const SProfileDetails = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;
const SSelfInfo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
  }
`;
const SName = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p`
  font-size: 1.2rem;
  font-weight: bold;
`;
/* harmony default export */ __webpack_exports__["default"] = (ProfileDetails);

/***/ }),

/***/ "./src/components/profile/ProfileMain.jsx":
/*!************************************************!*\
  !*** ./src/components/profile/ProfileMain.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _commons_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commons/Button */ "./src/components/commons/Button.jsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ProfileDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileDetails */ "./src/components/profile/ProfileDetails.jsx");
/* harmony import */ var _WishList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WishList */ "./src/components/profile/WishList.jsx");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/ProfileMain.jsx";







const Header = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Header,
      Content = antd__WEBPACK_IMPORTED_MODULE_1__["Layout"].Content;

const ProfileMain = props => {
  const user = props.user,
        setUser = props.setUser,
        collapsed = props.collapsed,
        handleSiderCollapse = props.handleSiderCollapse;

  let _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useRouteMatch"])(),
      path = _useRouteMatch.path,
      url = _useRouteMatch.url;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    style: {
      background: "#fff",
      padding: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_commons_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: handleSiderCollapse,
    variant: "text",
    color: "primary",
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, collapsed ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "arrow-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "arrow-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    style: {
      margin: "24px 16px",
      padding: 24,
      background: "#fff",
      minHeight: 280
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: `${path}/details`,
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user,
    setUser: setUser,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
    path: `${path}/wishlist`,
    exact: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WishList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    user: user,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileMain);

/***/ }),

/***/ "./src/components/profile/ProfileSider.jsx":
/*!*************************************************!*\
  !*** ./src/components/profile/ProfileSider.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/ProfileSider.jsx";





const Header = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Header,
      Sider = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Sider,
      Content = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"].Content;
const SubMenu = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].SubMenu;

const ProfileSider = props => {
  const collapsed = props.collapsed;

  let _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useRouteMatch"])(),
      url = _useRouteMatch.url;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(["sub1"]),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        chooseKeys = _useState2[0],
        setChooseKeys = _useState2[1]; // Submenu keys of first level


  const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

  const handleOpenChange = openKeys => {
    const lastedOpenKey = openKeys.find(key => chooseKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(lastedOpenKey) === -1) {
      setChooseKeys(openKeys);
    } else {
      setChooseKeys(lastedOpenKey ? [lastedOpenKey] : []);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SSider, {
    trigger: null,
    collapsible: true,
    collapsed: collapsed,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "inline",
    theme: "dark",
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    openKeys: chooseKeys,
    onOpenChange: handleOpenChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: `${url}/details`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Profile")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: `${url}/wishlist`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "heart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Wish List")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubMenu, {
    key: "sub1",
    title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      type: "setting",
      theme: "filled",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, "Stuff")),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "shopping-cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Shopping")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Home")))));
};

const SSider = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(Sider)`
  width: 256;

  span {
    font-size: 1rem;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (ProfileSider);

/***/ }),

/***/ "./src/components/profile/WishList.jsx":
/*!*********************************************!*\
  !*** ./src/components/profile/WishList.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_wishListProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/wishListProvider */ "./src/context/wishListProvider.js");
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/Product */ "./src/components/product/Product.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utilities */ "./src/services/utilities.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input/Search */ "./node_modules/antd/lib/input/Search.js");
/* harmony import */ var antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/profile/WishList.jsx";







const rowGutter = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32
};
const colResponsive = {
  xs: {
    span: 24
  },
  sm: {
    span: 12
  },
  md: {
    span: 8
  },
  lg: {
    span: 6
  },
  xl: {
    span: 4
  }
};

const WishList = props => {
  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_wishListProvider__WEBPACK_IMPORTED_MODULE_3__["WishListContext"]),
        wishList = _useContext.wishList;

  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    pageSize: 10,
    currentPage: 1
  }),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        pagination = _useState2[0],
        setPagination = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        searchQuery = _useState4[0],
        setSearchQuery = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // In case delete item -> auto go to previous page
    const alterTotalPage = Math.ceil(wishList.length / pagination.pageSize);
    setPagination(prev => {
      if (prev.currentPage - 1 === alterTotalPage && prev.currentPage - 1 > 0) {
        return Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev, {
          currentPage: prev.currentPage - 1
        });
      }

      return prev;
    });
  }, [pagination.pageSize, wishList.length]); //get data after filter query and pagination

  const getPageData = () => {
    let filtered = [...wishList]; // Query

    if (searchQuery) {
      filtered = wishList.filter(p => p.name.toLowerCase().startsWith(searchQuery.toLowerCase()));
    } // Pagination


    const paginateProducts = Object(_services_utilities__WEBPACK_IMPORTED_MODULE_6__["paginate"])(filtered, pagination.currentPage, pagination.pageSize);
    return {
      totalCount: filtered.length,
      data: paginateProducts
    };
  };

  const _getPageData = getPageData(),
        totalCount = _getPageData.totalCount,
        data = _getPageData.data;

  const handleSearch = value => {
    setSearchQuery(value);
  };

  const handlePageChange = (page, pageSize) => {
    setPagination(prev => Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev, {
      currentPage: page
    }));
  }; // if (data)
  // return data.length > 0 ? (


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SWishList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_input_Search__WEBPACK_IMPORTED_MODULE_8___default.a, {
    placeholder: "Input search text",
    onSearch: handleSearch,
    style: {
      width: 300,
      margin: "10px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  })), data && data.length > 0 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    style: {
      fontSize: "1rem",
      fontWeight: "bold"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, `Total ${totalCount} items`)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    type: "flex",
    style: {
      minHeight: "90vh"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, data.map((i, _) => {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Col"], Object.assign({}, colResponsive, {
      key: i._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_product_Product__WEBPACK_IMPORTED_MODULE_4__["default"], {
      product: i,
      carousel: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    style: {
      marginTop: "30px"
    },
    justify: "center",
    type: "flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
    defaultCurrent: 1,
    current: pagination.currentPage,
    total: totalCount,
    pageSize: pagination.pageSize,
    onChange: handlePageChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "empty"));
};

const SWishList = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div``;
/* harmony default export */ __webpack_exports__["default"] = (WishList);

/***/ }),

/***/ "./src/components/utils/withLogProps.jsx":
/*!***********************************************!*\
  !*** ./src/components/utils/withLogProps.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/components/utils/withLogProps.jsx";


const withLogProps = WrappedComponent => {
  return function (props) {
    withLogProps.displayName = `WithLogProps(${getDisplayName(WrappedComponent)})`;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      console.log("Current Props: ", props);
    }, [props]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }));
  };
};

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

/* harmony default export */ __webpack_exports__["default"] = (withLogProps);

/***/ }),

/***/ "./src/context/cartProvider.js":
/*!*************************************!*\
  !*** ./src/context/cartProvider.js ***!
  \*************************************/
/*! exports provided: CartProvider, CartContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartContext", function() { return CartContext; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _productsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsProvider */ "./src/context/productsProvider.js");
/* harmony import */ var _services_cartService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cartService */ "./src/services/cartService.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _services_orderService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/orderService */ "./src/services/orderService.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/context/cartProvider.js";





const CartContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const CartProvider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        cart = _useState2[0],
        setCart = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
        _useState4 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        totalPrice = _useState4[0],
        setTotalPrice = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState6 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        isAddedToCart = _useState6[0],
        setIsAddedToCart = _useState6[1];

  const _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_productsProvider__WEBPACK_IMPORTED_MODULE_2__["ProductsContext"]),
        findProductById = _useContext.findProductById;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getCartFromServer = async () => {
      const _ref = await Object(_services_cartService__WEBPACK_IMPORTED_MODULE_3__["getCart"])(),
            data = _ref.data;

      setCart(data);
    };

    getCartFromServer();
  }, []); // Check if product is on sale

  const isSale = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(salePrice => {
    return salePrice === 0 ? false : true;
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    //Update total price
    const addTotalPrice = () => {
      const tempCart = [...cart];
      let total = 0;
      tempCart.forEach(item => {
        const quantity = item.quantity,
              product = item.product;
        const salePrice = product.salePrice,
              price = product.price,
              hotDealPrice = product.hotDealPrice,
              hotDealExpired = product.hotDealExpired;

        if (isHotDeal(hotDealExpired)) {
          total += quantity * salePrice;
        } else if (isSale(salePrice)) {
          total += quantity * hotDealPrice;
        } else {
          total += quantity * price;
        }
      });
      setTotalPrice(total);
    };

    addTotalPrice();
  }, [cart, isSale]); // Check if product is on hot deal

  function isHotDeal(saleExpired) {
    return Date.now() < new Date(saleExpired.endDate) && Date.now() >= new Date(saleExpired.startDate) ? true : false;
  }

  const openNotification = (type, message, description) => {
    antd__WEBPACK_IMPORTED_MODULE_4__["notification"][type]({
      message,
      description,
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        style: {
          color: "#108ee9"
        },
        type: "smile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: undefined
      })
    });
  }; //close pop-up added item to cart


  const closeAddedItemToCartNoti = () => {
    setIsAddedToCart(false);
  }; // Handle cart stuff


  const handleAddToCart = async (productId, quantity) => {
    let response = null;

    try {
      response = await Object(_services_cartService__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(productId, quantity);
      setCart(response.data); // setIsAddedToCart(true);
    } catch (error) {
      if (error.response && error.response.status === 400) openNotification("info", "Limit Product", error.response.data);
    }

    return response;
  }; // Optimistic remove


  const handleRemoveCartItem = async cartItemId => {
    let response = null;
    const newCart = cart.filter(item => item._id !== cartItemId);
    setCart(newCart);

    try {
      response = await Object(_services_cartService__WEBPACK_IMPORTED_MODULE_3__["deleteItemInCart"])(cartItemId);
    } catch (error) {
      const originalCart = await Object(_services_cartService__WEBPACK_IMPORTED_MODULE_3__["getCart"])();
      setCart(originalCart.data);
      if (error.response && error.response.status === 404) openNotification("error", "Something wrong happened!", error.response.data);
    }

    return response;
  };

  const handleRemoveAllCart = async () => {
    let response = null;

    try {
      response = await Object(_services_cartService__WEBPACK_IMPORTED_MODULE_3__["deleteAllItemInCart"])();
      setCart(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) openNotification("error", "Something wrong happened!", error.response.data);
    }

    return response;
  };

  const handleOrderProducts = async () => {
    let response = null;
    let orderDetails = cart.map(item => {
      return {
        productId: item.product._id,
        quantity: parseInt(item.quantity)
      };
    });

    try {
      response = await Object(_services_orderService__WEBPACK_IMPORTED_MODULE_5__["orderProducts"])(orderDetails);
    } catch (error) {
      if (error.response && error.response.status === 404) openNotification("error", "Error", error.response.data);
    }

    return response;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CartContext.Provider, {
    value: {
      cart,
      isAddedToCart,
      totalPrice,
      removeCartItem: handleRemoveCartItem,
      removeAllCart: handleRemoveAllCart,
      addToCart: handleAddToCart,
      orderProducts: handleOrderProducts,
      closeAddedItemToCartNoti: closeAddedItemToCartNoti,
      isHotDeal,
      isSale
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, props.children);
};

 // const handleIncrementQuantity = (id, quantity = 1) => {
//   let tempCart = [...cart];
//   let product = tempCart.find(i => i._id === id);
//   const sale = isSale(product.saleExpired);
//   product.quantity++;
//   product.total =
//     (sale ? product.salePrice : product.price) * product.quantity;
//   setCart([...tempCart]);
// };
// const handleDecrementQuantity = (id, quantity = 1) => {
//   let tempCart = [...cart];
//   let product = tempCart.find(i => i._id === id);
//   const sale = isSale(product.saleExpired);
//   product.quantity--;
//   if (product.quantity === 0) {
//     handleRemoveCartItem(id);
//     return;
//   }
//   product.total =
//     (sale ? product.salePrice : product.price) * product.quantity;
//   setCart([...tempCart]);
// };
//when add product to cart, add extra properties (quantity,total)
// const handleAddToCart = useCallback(
//   (id, quantity = 1) => {
//     let tempCart = [...cart];
//     let product = tempCart.find(i => i._id === id);
//     let sale = false;
//     if (product) {
//       sale = isSale(product.saleExpired);
//       product.quantity += quantity;
//       product.total =
//         (sale ? product.salePrice : product.price) * product.quantity;
//       setCart([...tempCart]);
//       setIsAddedToCart(true);
//     } else {
//       product = { ...findProductById(id) };
//       sale = isSale(product.saleExpired);
//       product.quantity = quantity;
//       product.total =
//         (sale ? product.salePrice : product.price) * product.quantity;
//       tempCart = [...tempCart, product];
//       setCart([...tempCart]);
//       setIsAddedToCart(true);
//     }
//     return;
//   },
//   [cart, findProductById]
// );

/***/ }),

/***/ "./src/context/productsProvider.js":
/*!*****************************************!*\
  !*** ./src/context/productsProvider.js ***!
  \*****************************************/
/*! exports provided: ProductsProvider, Consumer, ProductsContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsProvider", function() { return ProductsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsContext", function() { return ProductsContext; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/productService */ "./src/services/productService.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/context/productsProvider.js";



const ProductsContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const ProductsProvider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        products = _useState2[0],
        setProducts = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function getProductsFromServer() {
      let _ref = await Object(_services_productService__WEBPACK_IMPORTED_MODULE_2__["getProducts"])(),
          data = _ref.data;

      console.log("Fetch products from server");
      setProducts(data);
    }

    getProductsFromServer();
  }, []); //i dont know what kind of copy is this?

  const findProductById = id => {
    const product = products.find(product => product._id === id);
    return product;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProductsContext.Provider, {
    value: {
      products,
      findProductById: findProductById
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, props.children);
};

const Consumer = ProductsContext.Consumer;


/***/ }),

/***/ "./src/context/stuffProvider.js":
/*!**************************************!*\
  !*** ./src/context/stuffProvider.js ***!
  \**************************************/
/*! exports provided: StuffProvider, StuffContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuffProvider", function() { return StuffProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StuffContext", function() { return StuffContext; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/context/stuffProvider.js";


const StuffContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const StuffProvider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        isFetching = _useState2[0],
        setIsFetching = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StuffContext.Provider, {
    value: {
      isFetching,
      setIsFetching
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./src/context/userProvider.js":
/*!*************************************!*\
  !*** ./src/context/userProvider.js ***!
  \*************************************/
/*! exports provided: UserProvider, UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/userService */ "./src/services/userService.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/context/userProvider.js";


const UserContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const UserProvider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        user = _useState2[0],
        setUser = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getProfileFromServer = async () => {
      const _ref = await Object(_services_userService__WEBPACK_IMPORTED_MODULE_2__["profile"])(),
            data = _ref.data;

      setUser(data);
    };

    getProfileFromServer();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(UserContext.Provider, {
    value: {
      user,
      setUser
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./src/context/wishListProvider.js":
/*!*****************************************!*\
  !*** ./src/context/wishListProvider.js ***!
  \*****************************************/
/*! exports provided: WishListProvider, WishListContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListProvider", function() { return WishListProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListContext", function() { return WishListContext; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_wishListService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wishListService */ "./src/services/wishListService.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/context/wishListProvider.js";



const WishListContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();

const WishListProvider = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        wishList = _useState2[0],
        setWishList = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const getWishListFromServer = async () => {
      const _ref = await Object(_services_wishListService__WEBPACK_IMPORTED_MODULE_2__["getWishList"])(),
            data = _ref.data;

      setWishList(data);
    };

    getWishListFromServer();
  }, []); // Pessimistic unmark & mark

  const handleMarkWishItem = async productId => {
    let response = null;

    try {
      response = await Object(_services_wishListService__WEBPACK_IMPORTED_MODULE_2__["markWishItem"])(productId);
      setWishList(response.data);
      return response;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        openNotification("error", "Action dont apply", error.response.data);
      }

      return response;
    }
  };

  const openNotification = (type, message, description) => {
    antd__WEBPACK_IMPORTED_MODULE_3__["notification"][type]({
      message,
      description,
      icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        style: {
          color: "#108ee9"
        },
        type: "smile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: undefined
      })
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WishListContext.Provider, {
    value: {
      wishList,
      setWishList,
      markWishItem: handleMarkWishItem
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _context_productsProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context/productsProvider */ "./src/context/productsProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_cartProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context/cartProvider */ "./src/context/cartProvider.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _context_wishListProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./context/wishListProvider */ "./src/context/wishListProvider.js");
/* harmony import */ var _context_userProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./context/userProvider */ "./src/context/userProvider.js");
/* harmony import */ var _context_stuffProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./context/stuffProvider */ "./src/context/stuffProvider.js");
/* harmony import */ var _AdminTemplate__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AdminTemplate */ "./src/AdminTemplate.js");
var _jsxFileName = "/home/kei/Data/web-development/project/ecommerce/reactjs/src/index.js";











 // import "bootstrap/dist/css/bootstrap.css";







_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_8__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["fab"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_11__["far"]);
const theme = {
  color: {
    background: "#f4f4f4",
    primaryDark: "#0D0C1D",
    primaryLight: "#ffffff",
    primaryRed: "rgb(220,9,78)",
    primaryOrange: "rgb(255, 131, 0)"
  },
  responsive: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px"
  }
};
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_userProvider__WEBPACK_IMPORTED_MODULE_15__["UserProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_productsProvider__WEBPACK_IMPORTED_MODULE_5__["ProductsProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_cartProvider__WEBPACK_IMPORTED_MODULE_7__["CartProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_wishListProvider__WEBPACK_IMPORTED_MODULE_14__["WishListProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
  theme: theme,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_stuffProvider__WEBPACK_IMPORTED_MODULE_16__["StuffProvider"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
})))))))), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["register"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/authService.js":
/*!*************************************!*\
  !*** ./src/services/authService.js ***!
  \*************************************/
/*! exports provided: login, loginWithJwt, getJwt, logout, getCurrentUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithJwt", function() { return loginWithJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJwt", function() { return getJwt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUser", function() { return getCurrentUser; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");


const apiEndPoint = "http://localhost:3000/api/auth";
const tokenKey = "token";
_httpService__WEBPACK_IMPORTED_MODULE_1__["default"].setJwt(getJwt());
const login = async (email, password) => {
  const _ref = await _httpService__WEBPACK_IMPORTED_MODULE_1__["default"].post(apiEndPoint, {
    email,
    password
  }),
        jwt = _ref.data;

  localStorage.setItem(tokenKey, jwt);
};
const loginWithJwt = jwt => {
  localStorage.setItem(tokenKey, jwt);
};
function getJwt() {
  return localStorage.getItem(tokenKey);
}
const logout = () => {
  localStorage.removeItem(tokenKey);
};
const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwt);
  } catch (error) {
    return null;
  }
};

/***/ }),

/***/ "./src/services/cartService.js":
/*!*************************************!*\
  !*** ./src/services/cartService.js ***!
  \*************************************/
/*! exports provided: getCart, addToCart, deleteItemInCart, deleteAllItemInCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItemInCart", function() { return deleteItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAllItemInCart", function() { return deleteAllItemInCart; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");

const apiEndpoint = "http://localhost:3000/api/cart";
const getCart = async () => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get(apiEndpoint);
  return response;
};
const addToCart = async (productId, quantity = 1) => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${apiEndpoint}`, {
    product: productId,
    quantity
  });
  return response;
};
const deleteItemInCart = async cartItemId => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${apiEndpoint}/${cartItemId}`);
  return response;
};
const deleteAllItemInCart = async cartItemId => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${apiEndpoint}`);
  return response;
};

/***/ }),

/***/ "./src/services/httpService.js":
/*!*************************************!*\
  !*** ./src/services/httpService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");



const openNotification = description => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"].error({
    message: "Unexpected Error",
    description
  });
};

axios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(null, error => {
  const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

  if (!expectedError) {
    console.log(error);
    openNotification(); // logger.log(error);
  }

  return Promise.reject(error);
});

const setJwt = jwt => {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers["x-auth-token"] = jwt;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  get: axios__WEBPACK_IMPORTED_MODULE_0___default.a.get,
  post: axios__WEBPACK_IMPORTED_MODULE_0___default.a.post,
  put: axios__WEBPACK_IMPORTED_MODULE_0___default.a.put,
  delete: axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete,
  setJwt
});

/***/ }),

/***/ "./src/services/orderService.js":
/*!**************************************!*\
  !*** ./src/services/orderService.js ***!
  \**************************************/
/*! exports provided: getAllOrders, orderProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllOrders", function() { return getAllOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderProducts", function() { return orderProducts; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");

const apiEndpoint = "http://localhost:3000/api/orders";
const getAllOrders = async () => {};
const orderProducts = async orderDetails => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoint}`, {
    orderDetails
  });
  return response;
};

/***/ }),

/***/ "./src/services/productService.js":
/*!****************************************!*\
  !*** ./src/services/productService.js ***!
  \****************************************/
/*! exports provided: getProducts, getProduct, deleteProduct, saveProduct, saveImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProduct", function() { return saveProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony import */ var _home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const apiEndpoint = "http://localhost:3000/api/products";
const getProducts = () => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(apiEndpoint);
};
const getProduct = productId => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${apiEndpoint}/${productId}`);
};
const deleteProduct = productId => {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${apiEndpoint}/${productId}`);
}; //save or edit

const saveProduct = product => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };

  if (product._id) {
    const body = Object(_home_kei_Data_web_development_project_ecommerce_reactjs_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product);

    delete body._id;
    return axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`${apiEndpoint}/${product._id}`, body);
  }

  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(apiEndpoint + "/", product, config);
};
const saveImage = data => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  };
  console.log(data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(apiEndpoint + "/upload", data, config);
};

/***/ }),

/***/ "./src/services/userService.js":
/*!*************************************!*\
  !*** ./src/services/userService.js ***!
  \*************************************/
/*! exports provided: register, profile, updateProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");

const apiEndpoint = "http://localhost:3000/api/users";
const register = async user => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(apiEndpoint, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    phone: user.phone,
    gender: user.gender
  });
  return response;
};
const profile = async () => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${apiEndpoint}/me`);
  return response;
};
const updateProfile = async user => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${apiEndpoint}/me`, {
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    gender: user.gender,
    address: user.address
  });
  return response;
};

/***/ }),

/***/ "./src/services/utilities.js":
/*!***********************************!*\
  !*** ./src/services/utilities.js ***!
  \***********************************/
/*! exports provided: getImageBase64, paginate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageBase64", function() { return getImageBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginate", function() { return paginate; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const getImageBase64 = binaryData => {
  return btoa(new Uint8Array(binaryData).reduce(function (data, byte) {
    return data + String.fromCharCode(byte);
  }, ""));
};
const paginate = (items, pageNumber, pageSize) => {
  // items === array of items
  // pageNumber === number of current page
  // pageSize === number of items in 1 page
  const startIndex = (pageNumber - 1) * pageSize;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default()(items).slice(startIndex).take(pageSize).value();
};

/***/ }),

/***/ "./src/services/wishListService.js":
/*!*****************************************!*\
  !*** ./src/services/wishListService.js ***!
  \*****************************************/
/*! exports provided: getWishList, markWishItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishList", function() { return getWishList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markWishItem", function() { return markWishItem; });
/* harmony import */ var _httpService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./httpService */ "./src/services/httpService.js");

const apiEndpoint = "http://localhost:3000/api/wishList";
const getWishList = async () => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].get(apiEndpoint);
  return response;
};
const markWishItem = async productId => {
  const response = await _httpService__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${apiEndpoint}/${productId}`);
  return response;
};

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/kei/Data/web-development/project/ecommerce/reactjs/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/kei/Data/web-development/project/ecommerce/reactjs/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/kei/Data/web-development/project/ecommerce/reactjs/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map