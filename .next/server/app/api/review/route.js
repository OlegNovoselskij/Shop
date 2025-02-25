/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/review/route";
exports.ids = ["app/api/review/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freview%2Froute&page=%2Fapi%2Freview%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freview%2Froute.js&appDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freview%2Froute&page=%2Fapi%2Freview%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freview%2Froute.js&appDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_WellDone_Desktop_programing_Shop_src_app_api_review_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/review/route.js */ \"(rsc)/./src/app/api/review/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/review/route\",\n        pathname: \"/api/review\",\n        filename: \"route\",\n        bundlePath: \"app/api/review/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\WellDone\\\\Desktop\\\\programing\\\\Shop\\\\src\\\\app\\\\api\\\\review\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_WellDone_Desktop_programing_Shop_src_app_api_review_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXZpZXclMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJldmlldyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJldmlldyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNXZWxsRG9uZSU1Q0Rlc2t0b3AlNUNwcm9ncmFtaW5nJTVDU2hvcCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDV2VsbERvbmUlNUNEZXNrdG9wJTVDcHJvZ3JhbWluZyU1Q1Nob3AmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQytCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxXZWxsRG9uZVxcXFxEZXNrdG9wXFxcXHByb2dyYW1pbmdcXFxcU2hvcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxyZXZpZXdcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Jldmlldy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jldmlld1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcmV2aWV3L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcV2VsbERvbmVcXFxcRGVza3RvcFxcXFxwcm9ncmFtaW5nXFxcXFNob3BcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccmV2aWV3XFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freview%2Froute&page=%2Fapi%2Freview%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freview%2Froute.js&appDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/review/route.js":
/*!*************************************!*\
  !*** ./src/app/api/review/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   getReviews: () => (/* binding */ getReviews),\n/* harmony export */   saveReviews: () => (/* binding */ saveReviews)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Шлях до файлу з відгуками\nconst reviewFilePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'data', 'review.json');\n// Функція отримання відгуків\nconst getReviews = ()=>{\n    if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(reviewFilePath)) {\n        return [];\n    }\n    const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(reviewFilePath, \"utf-8\");\n    const reviews = data ? JSON.parse(data) : [];\n    return reviews.length > 3 ? reviews.sort(()=>0.5 - Math.random()).slice(0, 3) : reviews;\n};\n// Функція для збереження відгуків\nconst saveReviews = (reviews)=>{\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(reviewFilePath, JSON.stringify(reviews, null, 2), 'utf-8');\n};\n// Отримання відгуків\nasync function GET() {\n    const reviews = getReviews();\n    return new Response(JSON.stringify(reviews), {\n        status: 200\n    });\n}\n// Додавання нового відгуку\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        if (!body.name || !body.text || !body.rating) {\n            return new Response(JSON.stringify({\n                error: 'Invalid input'\n            }), {\n                status: 400\n            });\n        }\n        const reviews = getReviews();\n        const newReview = {\n            initial: body.name.charAt(0).toUpperCase(),\n            name: body.name,\n            date: new Date().toLocaleDateString(),\n            rating: body.rating,\n            text: body.text\n        };\n        reviews.push(newReview);\n        saveReviews(reviews);\n        return new Response(JSON.stringify(newReview), {\n            status: 201\n        });\n    } catch (error) {\n        return new Response(JSON.stringify({\n            error: 'Failed to process request'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXZpZXcvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV4Qiw0QkFBNEI7QUFDNUIsTUFBTUUsaUJBQWlCRCxnREFBUyxDQUFDRyxRQUFRQyxHQUFHLElBQUksUUFBUTtBQUV4RCw2QkFBNkI7QUFDdEIsTUFBTUMsYUFBYTtJQUN4QixJQUFJLENBQUNOLG9EQUFhLENBQUNFLGlCQUFpQjtRQUNsQyxPQUFPLEVBQUU7SUFDWDtJQUNBLE1BQU1NLE9BQU9SLHNEQUFlLENBQUNFLGdCQUFnQjtJQUM3QyxNQUFNUSxVQUFVRixPQUFPRyxLQUFLQyxLQUFLLENBQUNKLFFBQVEsRUFBRTtJQUU1QyxPQUFPRSxRQUFRRyxNQUFNLEdBQUcsSUFDdEJILFFBQVFJLElBQUksQ0FBQyxJQUFNLE1BQU1DLEtBQUtDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEdBQUcsS0FDakRQO0FBQ0osRUFBRTtBQUVGLGtDQUFrQztBQUMzQixNQUFNUSxjQUFjLENBQUNSO0lBQzFCVix1REFBZ0IsQ0FBQ0UsZ0JBQWdCUyxLQUFLUyxTQUFTLENBQUNWLFNBQVMsTUFBTSxJQUFJO0FBQ3JFLEVBQUU7QUFFRixxQkFBcUI7QUFDZCxlQUFlVztJQUNwQixNQUFNWCxVQUFVSjtJQUNoQixPQUFPLElBQUlnQixTQUFTWCxLQUFLUyxTQUFTLENBQUNWLFVBQVU7UUFBRWEsUUFBUTtJQUFJO0FBQzdEO0FBRUEsMkJBQTJCO0FBQ3BCLGVBQWVDLEtBQUtDLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU1DLE9BQU8sTUFBTUQsSUFBSUUsSUFBSTtRQUMzQixJQUFJLENBQUNELEtBQUtFLElBQUksSUFBSSxDQUFDRixLQUFLRyxJQUFJLElBQUksQ0FBQ0gsS0FBS0ksTUFBTSxFQUFFO1lBQzVDLE9BQU8sSUFBSVIsU0FBU1gsS0FBS1MsU0FBUyxDQUFDO2dCQUFFVyxPQUFPO1lBQWdCLElBQUk7Z0JBQUVSLFFBQVE7WUFBSTtRQUNoRjtRQUVBLE1BQU1iLFVBQVVKO1FBQ2hCLE1BQU0wQixZQUFZO1lBQ2hCQyxTQUFTUCxLQUFLRSxJQUFJLENBQUNNLE1BQU0sQ0FBQyxHQUFHQyxXQUFXO1lBQ3hDUCxNQUFNRixLQUFLRSxJQUFJO1lBQ2ZRLE1BQU0sSUFBSUMsT0FBT0Msa0JBQWtCO1lBQ25DUixRQUFRSixLQUFLSSxNQUFNO1lBQ25CRCxNQUFNSCxLQUFLRyxJQUFJO1FBQ2pCO1FBRUFuQixRQUFRNkIsSUFBSSxDQUFDUDtRQUNiZCxZQUFZUjtRQUVaLE9BQU8sSUFBSVksU0FBU1gsS0FBS1MsU0FBUyxDQUFDWSxZQUFZO1lBQUVULFFBQVE7UUFBSTtJQUMvRCxFQUFFLE9BQU9RLE9BQU87UUFDZCxPQUFPLElBQUlULFNBQVNYLEtBQUtTLFNBQVMsQ0FBQztZQUFFVyxPQUFPO1FBQTRCLElBQUk7WUFBRVIsUUFBUTtRQUFJO0lBQzVGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcV2VsbERvbmVcXERlc2t0b3BcXHByb2dyYW1pbmdcXFNob3BcXHNyY1xcYXBwXFxhcGlcXHJldmlld1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vLyDQqNC70Y/RhSDQtNC+INGE0LDQudC70YMg0Lcg0LLRltC00LPRg9C60LDQvNC4XG5jb25zdCByZXZpZXdGaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdyZXZpZXcuanNvbicpO1xuXG4vLyDQpNGD0L3QutGG0ZbRjyDQvtGC0YDQuNC80LDQvdC90Y8g0LLRltC00LPRg9C60ZbQslxuZXhwb3J0IGNvbnN0IGdldFJldmlld3MgPSAoKSA9PiB7XG4gIGlmICghZnMuZXhpc3RzU3luYyhyZXZpZXdGaWxlUGF0aCkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgZGF0YSA9IGZzLnJlYWRGaWxlU3luYyhyZXZpZXdGaWxlUGF0aCwgXCJ1dGYtOFwiKTtcbiAgY29uc3QgcmV2aWV3cyA9IGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogW107XG5cbiAgcmV0dXJuIHJldmlld3MubGVuZ3RoID4gM1xuICA/IHJldmlld3Muc29ydCgoKSA9PiAwLjUgLSBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCAzKVxuICA6IHJldmlld3M7XG59O1xuXG4vLyDQpNGD0L3QutGG0ZbRjyDQtNC70Y8g0LfQsdC10YDQtdC20LXQvdC90Y8g0LLRltC00LPRg9C60ZbQslxuZXhwb3J0IGNvbnN0IHNhdmVSZXZpZXdzID0gKHJldmlld3MpID0+IHtcbiAgZnMud3JpdGVGaWxlU3luYyhyZXZpZXdGaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkocmV2aWV3cywgbnVsbCwgMiksICd1dGYtOCcpO1xufTtcblxuLy8g0J7RgtGA0LjQvNCw0L3QvdGPINCy0ZbQtNCz0YPQutGW0LJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIGNvbnN0IHJldmlld3MgPSBnZXRSZXZpZXdzKCk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkocmV2aWV3cyksIHsgc3RhdHVzOiAyMDAgfSk7XG59XG5cbi8vINCU0L7QtNCw0LLQsNC90L3RjyDQvdC+0LLQvtCz0L4g0LLRltC00LPRg9C60YNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGlmICghYm9keS5uYW1lIHx8ICFib2R5LnRleHQgfHwgIWJvZHkucmF0aW5nKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdJbnZhbGlkIGlucHV0JyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZXZpZXdzID0gZ2V0UmV2aWV3cygpO1xuICAgIGNvbnN0IG5ld1JldmlldyA9IHtcbiAgICAgIGluaXRpYWw6IGJvZHkubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSxcbiAgICAgIG5hbWU6IGJvZHkubmFtZSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCksXG4gICAgICByYXRpbmc6IGJvZHkucmF0aW5nLFxuICAgICAgdGV4dDogYm9keS50ZXh0XG4gICAgfTtcblxuICAgIHJldmlld3MucHVzaChuZXdSZXZpZXcpO1xuICAgIHNhdmVSZXZpZXdzKHJldmlld3MpO1xuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShuZXdSZXZpZXcpLCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoeyBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIHJlcXVlc3QnIH0pLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwicmV2aWV3RmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFJldmlld3MiLCJleGlzdHNTeW5jIiwiZGF0YSIsInJlYWRGaWxlU3luYyIsInJldmlld3MiLCJKU09OIiwicGFyc2UiLCJsZW5ndGgiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwic2F2ZVJldmlld3MiLCJ3cml0ZUZpbGVTeW5jIiwic3RyaW5naWZ5IiwiR0VUIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJQT1NUIiwicmVxIiwiYm9keSIsImpzb24iLCJuYW1lIiwidGV4dCIsInJhdGluZyIsImVycm9yIiwibmV3UmV2aWV3IiwiaW5pdGlhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwdXNoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/review/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freview%2Froute&page=%2Fapi%2Freview%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freview%2Froute.js&appDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CWellDone%5CDesktop%5Cprograming%5CShop&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();