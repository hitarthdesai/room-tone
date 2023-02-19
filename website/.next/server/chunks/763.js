"use strict";
exports.id = 763;
exports.ids = [763];
exports.modules = {

/***/ 1231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.559d03af.svg","height":320,"width":320});

/***/ }),

/***/ 9763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6869);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1231);






function Home() {
    const [onHover, setOnHover] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleButtonClick = ()=>{
        setOnHover(false);
        router.push("/Options");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: styles.appContainer,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                style: {
                    color: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].midnightBlack */ .Z.midnightBlack,
                    fontSize: 40
                },
                children: "Welcome to RoomTone!"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                className: "App-logo",
                alt: "logo",
                width: 500,
                height: 500
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: onHover ? styles.hoverButtonContainer : styles.buttonContainer,
                onMouseEnter: ()=>{
                    setOnHover(true);
                },
                onMouseLeave: ()=>{
                    setOnHover(false);
                },
                onClick: handleButtonClick,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "Get Started"
                })
            })
        ]
    });
}
const styles = {
    appContainer: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cloudyWhite */ .Z.cloudyWhite,
        height: "100vh",
        width: "100vw",
        flex: 1,
        flexDirection: "column"
    },
    buttonContainer: {
        backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].lightMetallicBlue */ .Z.lightMetallicBlue,
        width: "30vw",
        height: "7vh",
        padding: 10,
        minWidth: "20px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        color: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].midnightBlack */ .Z.midnightBlack,
        borderRadius: 20,
        cursor: "pointer",
        marginTop: "5vh",
        fontSize: 20
    },
    hoverButtonContainer: {
        backgroundColor: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].midnightBlack */ .Z.midnightBlack,
        width: "30vw",
        height: "7vh",
        padding: 10,
        minWidth: "20px",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        color: _constants_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"].cloudyWhite */ .Z.cloudyWhite,
        borderRadius: 20,
        cursor: "pointer",
        marginTop: "5vh",
        fontSize: 22
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ })

};
;