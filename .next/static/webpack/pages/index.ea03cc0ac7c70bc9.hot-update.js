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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignUpForm\": function() { return /* binding */ SignUpForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/auth-helpers-react */ \"./node_modules/@supabase/auth-helpers-react/dist/index.js\");\n/* harmony import */ var _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst SignUpForm = (param)=>{\n    let { switchSignupLogin  } = param;\n    _s();\n    const supabaseClient = (0,_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: switchSignupLogin,\n                children: \"ログインはこちら\"\n            }, void 0, false, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ユーザー登録\"\n            }, void 0, false, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                onSubmit: async (event)=>{\n                    event.preventDefault();\n                    const target = event.target;\n                    const result = await supabaseClient.auth.signUp({\n                        email: target.email.value,\n                        password: target.password.value,\n                        options: {\n                            data: {\n                                name: target.name.value\n                            }\n                        }\n                    });\n                    if (!result.error) {\n                        switchSignupLogin();\n                        alert(\"メール送ったで\");\n                    } else {\n                        alert(result.error.message);\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"name\",\n                            children: [\n                                \"ユーザー名:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"name\",\n                                    name: \"name\",\n                                    type: \"text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"email\",\n                            children: [\n                                \"メールアドレス:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"email\",\n                                    name: \"email\",\n                                    autoComplete: \"username\",\n                                    type: \"email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"password\",\n                            children: [\n                                \"パスワード:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"password\",\n                                    type: \"password\",\n                                    name: \"password\",\n                                    autoComplete: \"current-password\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/oobayashihitoshi/local/hello-supaprix/src/components/signUpForm.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignUpForm, \"TnQm4lbSi7woGHaM1yHlJQcnlDI=\", false, function() {\n    return [\n        _supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.useSupabaseClient\n    ];\n});\n_c = SignUpForm;\nvar _c;\n$RefreshReg$(_c, \"SignUpForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaWduVXBGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDaUM7QUFNbEUsTUFBTUUsYUFBYSxTQUFrQztRQUFqQyxFQUFFQyxrQkFBaUIsRUFBUzs7SUFDckQsTUFBTUMsaUJBQWlCSCwrRUFBaUJBO0lBQ3hDLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDO2dCQUFPQyxNQUFLO2dCQUFTQyxTQUFTTDswQkFBbUI7Ozs7OzswQkFHbEQsOERBQUNNOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNDQyxRQUFPO2dCQUNQQyxVQUFVLE9BQU9DLFFBQWdDO29CQUMvQ0EsTUFBTUMsY0FBYztvQkFDcEIsTUFBTUMsU0FBU0YsTUFBTUUsTUFBTTtvQkFLM0IsTUFBTUMsU0FBUyxNQUFNWixlQUFlYSxJQUFJLENBQUNDLE1BQU0sQ0FBQzt3QkFDOUNDLE9BQU9KLE9BQU9JLEtBQUssQ0FBQ0MsS0FBSzt3QkFDekJDLFVBQVVOLE9BQU9NLFFBQVEsQ0FBQ0QsS0FBSzt3QkFDL0JFLFNBQVM7NEJBQ1BDLE1BQU07Z0NBQ0pDLE1BQU1ULE9BQU9TLElBQUksQ0FBQ0osS0FBSzs0QkFDekI7d0JBQ0Y7b0JBQ0Y7b0JBQ0EsSUFBSSxDQUFDSixPQUFPUyxLQUFLLEVBQUU7d0JBQ2pCdEI7d0JBQ0F1QixNQUFNO29CQUNSLE9BQU87d0JBQ0xBLE1BQU1WLE9BQU9TLEtBQUssQ0FBQ0UsT0FBTztvQkFDNUIsQ0FBQztnQkFDSDs7a0NBRUEsOERBQUN0QjtrQ0FDQyw0RUFBQ3VCOzRCQUFNQyxTQUFROztnQ0FBTzs4Q0FFcEIsOERBQUNDO29DQUFNQyxJQUFHO29DQUFPUCxNQUFLO29DQUFPakIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR3RDLDhEQUFDRjtrQ0FDQyw0RUFBQ3VCOzRCQUFNQyxTQUFROztnQ0FBUTs4Q0FFckIsOERBQUNDO29DQUFNQyxJQUFHO29DQUFRUCxNQUFLO29DQUFRUSxjQUFhO29DQUFXekIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2hFLDhEQUFDRjtrQ0FDQyw0RUFBQ3VCOzRCQUFNQyxTQUFROztnQ0FBVzs4Q0FFeEIsOERBQUNDO29DQUFNQyxJQUFHO29DQUFXeEIsTUFBSztvQ0FBV2lCLE1BQUs7b0NBQVdRLGNBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd0RSw4REFBQ0Y7d0JBQU12QixNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEIsRUFBQztHQXhEWUw7O1FBQ1lELDJFQUFpQkE7OztLQUQ3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2lnblVwRm9ybS50c3g/ZjgwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyLCB1c2VTdXBhYmFzZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9hdXRoLWhlbHBlcnMtcmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHN3aXRjaFNpZ251cExvZ2luOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBTaWduVXBGb3JtID0gKHsgc3dpdGNoU2lnbnVwTG9naW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgc3VwYWJhc2VDbGllbnQgPSB1c2VTdXBhYmFzZUNsaWVudCgpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3N3aXRjaFNpZ251cExvZ2lufT5cbiAgICAgICAg44Ot44Kw44Kk44Oz44Gv44GT44Gh44KJXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxoMT7jg6bjg7zjgrbjg7znmbvpjLI8L2gxPlxuICAgICAgPGZvcm1cbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgIG9uU3VibWl0PXthc3luYyAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyB0eXBlb2YgZXZlbnQudGFyZ2V0ICYge1xuICAgICAgICAgICAgbmFtZTogeyB2YWx1ZTogc3RyaW5nIH1cbiAgICAgICAgICAgIGVtYWlsOiB7IHZhbHVlOiBzdHJpbmcgfVxuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdmFsdWU6IHN0cmluZyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN1cGFiYXNlQ2xpZW50LmF1dGguc2lnblVwKHtcbiAgICAgICAgICAgIGVtYWlsOiB0YXJnZXQuZW1haWwudmFsdWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGFyZ2V0LnBhc3N3b3JkLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGFyZ2V0Lm5hbWUudmFsdWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgaWYgKCFyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaFNpZ251cExvZ2luKClcbiAgICAgICAgICAgIGFsZXJ0KCfjg6Hjg7zjg6vpgIHjgaPjgZ/jgacnKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChyZXN1bHQuZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XG4gICAgICAgICAgICDjg6bjg7zjgrbjg7zlkI06XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgICAg44Oh44O844Or44Ki44OJ44Os44K5OlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBhdXRvQ29tcGxldGU9XCJ1c2VybmFtZVwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAg44OR44K544Ov44O844OJOlxuICAgICAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdXBhYmFzZUNsaWVudCIsIlNpZ25VcEZvcm0iLCJzd2l0Y2hTaWdudXBMb2dpbiIsInN1cGFiYXNlQ2xpZW50IiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJoMSIsImZvcm0iLCJtZXRob2QiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJyZXN1bHQiLCJhdXRoIiwic2lnblVwIiwiZW1haWwiLCJ2YWx1ZSIsInBhc3N3b3JkIiwib3B0aW9ucyIsImRhdGEiLCJuYW1lIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwiYXV0b0NvbXBsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/signUpForm.tsx\n"));

/***/ })

});