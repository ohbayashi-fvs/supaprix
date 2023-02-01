"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/signUpForm.tsx":
/*!***************************************!*\
  !*** ./src/components/signUpForm.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignUpForm\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SignUpForm = (param)=>{\n    let { switchSignupLogin  } = param;\n    _s();\n    const [buttonDisable, setButtonDisable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: switchSignupLogin,\n                children: \"ログインはこちら\"\n            }, void 0, false, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ユーザー登録\"\n            }, void 0, false, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                onSubmit: async (event)=>{\n                    event.preventDefault();\n                    const target = event.target;\n                    setButtonDisable(true);\n                    const result = await supabaseClient.auth.signUp({\n                        email: target.email.value,\n                        password: target.password.value,\n                        options: {\n                            data: {\n                                name: target.name.value\n                            }\n                        }\n                    });\n                    setButtonDisable(false);\n                    if (!result.error) {\n                        switchSignupLogin();\n                        alert(\"メール送ったで\");\n                    } else {\n                        alert(result.error.message);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: [\n                                \"ユーザー名:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"name\",\n                                    name: \"name\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: [\n                                \"メールアドレス:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    name: \"email\",\n                                    autoComplete: \"username\",\n                                    type: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: [\n                                \"パスワード:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    type: \"password\",\n                                    name: \"password\",\n                                    autoComplete: \"current-password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        disabled: buttonDisable\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUpForm, \"+aHt3PeYP7QHPIwcSwta5BfQ5ow=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient\n    ];\n});\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWduVXBGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDdUI7QUFNbEUsTUFBTUcsYUFBYSxTQUFrQztRQUFqQyxFQUFFQyxrQkFBaUIsRUFBUzs7SUFDckQsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0wsK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNTSxpQkFBaUJMLCtFQUFpQkE7SUFDeEMscUJBQ0UsOERBQUNNOzswQkFDQyw4REFBQ0M7Z0JBQU9DLE1BQUs7Z0JBQVNDLFNBQVNQOzBCQUFtQjs7Ozs7OzBCQUdsRCw4REFBQ1E7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0NDLFFBQU87Z0JBQ1BDLFVBQVUsT0FBT0MsUUFBZ0M7b0JBQy9DQSxNQUFNQyxjQUFjO29CQUNwQixNQUFNQyxTQUFTRixNQUFNRSxNQUFNO29CQUszQlosaUJBQWlCLElBQUk7b0JBQ3JCLE1BQU1hLFNBQVMsTUFBTVosZUFBZWEsSUFBSSxDQUFDQyxNQUFNLENBQUM7d0JBQzlDQyxPQUFPSixPQUFPSSxLQUFLLENBQUNDLEtBQUs7d0JBQ3pCQyxVQUFVTixPQUFPTSxRQUFRLENBQUNELEtBQUs7d0JBQy9CRSxTQUFTOzRCQUNQQyxNQUFNO2dDQUNKQyxNQUFNVCxPQUFPUyxJQUFJLENBQUNKLEtBQUs7NEJBQ3pCO3dCQUNGO29CQUNGO29CQUNBakIsaUJBQWlCLEtBQUs7b0JBQ3RCLElBQUksQ0FBQ2EsT0FBT1MsS0FBSyxFQUFFO3dCQUNqQnhCO3dCQUNBeUIsTUFBTTtvQkFDUixPQUFPO3dCQUNMQSxNQUFNVixPQUFPUyxLQUFLLENBQUNFLE9BQU87b0JBQzVCLENBQUM7Z0JBQ0g7O2tDQUVBLDhEQUFDdEI7a0NBQ0MsNEVBQUN1Qjs0QkFBTUMsU0FBUTs7Z0NBQU87OENBRXBCLDhEQUFDQztvQ0FBTUMsSUFBRztvQ0FBT1AsTUFBSztvQ0FBT2pCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd0Qyw4REFBQ0Y7a0NBQ0MsNEVBQUN1Qjs0QkFBTUMsU0FBUTs7Z0NBQVE7OENBRXJCLDhEQUFDQztvQ0FBTUMsSUFBRztvQ0FBUVAsTUFBSztvQ0FBUVEsY0FBYTtvQ0FBV3pCLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdoRSw4REFBQ0Y7a0NBQ0MsNEVBQUN1Qjs0QkFBTUMsU0FBUTs7Z0NBQVc7OENBRXhCLDhEQUFDQztvQ0FBTUMsSUFBRztvQ0FBV3hCLE1BQUs7b0NBQVdpQixNQUFLO29DQUFXUSxjQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHdEUsOERBQUMxQjt3QkFBT0MsTUFBSzt3QkFBUzBCLFVBQVUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLEVBQUM7R0EzRFlGOztRQUVZRCwyRUFBaUJBOzs7S0FGN0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpZ25VcEZvcm0udHN4P2Y4MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVVzZXIsIHVzZVN1cGFiYXNlQ2xpZW50IH0gZnJvbSAnQHN1cGFiYXNlL2F1dGgtaGVscGVycy1yZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgc3dpdGNoU2lnbnVwTG9naW46ICgpID0+IHZvaWRcbn1cblxuZXhwb3J0IGNvbnN0IFNpZ25VcEZvcm0gPSAoeyBzd2l0Y2hTaWdudXBMb2dpbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbYnV0dG9uRGlzYWJsZSwgc2V0QnV0dG9uRGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3Qgc3VwYWJhc2VDbGllbnQgPSB1c2VTdXBhYmFzZUNsaWVudCgpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3N3aXRjaFNpZ251cExvZ2lufT5cbiAgICAgICAg44Ot44Kw44Kk44Oz44Gv44GT44Gh44KJXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxoMT7jg6bjg7zjgrbjg7znmbvpjLI8L2gxPlxuICAgICAgPGZvcm1cbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyB0eXBlb2YgZXZlbnQudGFyZ2V0ICYge1xuICAgICAgICAgICAgbmFtZTogeyB2YWx1ZTogc3RyaW5nIH1cbiAgICAgICAgICAgIGVtYWlsOiB7IHZhbHVlOiBzdHJpbmcgfVxuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdmFsdWU6IHN0cmluZyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNldEJ1dHRvbkRpc2FibGUodHJ1ZSlcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdXBhYmFzZUNsaWVudC5hdXRoLnNpZ25VcCh7XG4gICAgICAgICAgICBlbWFpbDogdGFyZ2V0LmVtYWlsLnZhbHVlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRhcmdldC5wYXNzd29yZC52YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRhcmdldC5uYW1lLnZhbHVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIHNldEJ1dHRvbkRpc2FibGUoZmFsc2UpXG4gICAgICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaFNpZ251cExvZ2luKClcbiAgICAgICAgICAgIGFsZXJ0KCfjg6Hjg7zjg6vpgIHjgaPjgZ/jgacnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICDjg6bjg7zjgrbjg7zlkI06XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAg44Oh44O844Or44Ki44OJ44Os44K5OlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAg44OR44K544Ov44O844OJOlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2J1dHRvbkRpc2FibGV9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlU3VwYWJhc2VDbGllbnQiLCJTaWduVXBGb3JtIiwic3dpdGNoU2lnbnVwTG9naW4iLCJidXR0b25EaXNhYmxlIiwic2V0QnV0dG9uRGlzYWJsZSIsInN1cGFiYXNlQ2xpZW50IiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJoMSIsImZvcm0iLCJtZXRob2QiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJhdXRoIiwic2lnblVwIiwiZW1haWwiLCJ2YWx1ZSIsInBhc3N3b3JkIiwib3B0aW9ucyIsImRhdGEiLCJuYW1lIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwiYXV0b0NvbXBsZXRlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/signUpForm.tsx\n"));

/***/ })

});