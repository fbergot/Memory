/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_CSS_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/CSS/index.css */ \"./src/assets/CSS/index.css\");\n/* harmony import */ var _assets_JS_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/JS/utils/utils */ \"./src/assets/JS/utils/utils.js\");\n/* harmony import */ var _assets_JS_game_State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/JS/game/State */ \"./src/assets/JS/game/State.js\");\n/* harmony import */ var _assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/JS/game/game */ \"./src/assets/JS/game/game.js\");\n\n\n\n\nvar gameState = new _assets_JS_game_State__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nvar board = (0,_assets_JS_utils_utils__WEBPACK_IMPORTED_MODULE_1__.$)(\"#container\");\nvar score = (0,_assets_JS_utils_utils__WEBPACK_IMPORTED_MODULE_1__.$)(\"#score\");\nvar life = (0,_assets_JS_utils_utils__WEBPACK_IMPORTED_MODULE_1__.$)(\"#life\");\nvar dataCards = (0,_assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__.buildArrayCards)(16, 2);\nvar shuffleDataCards = (0,_assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__.shuffleArray)(dataCards);\n(0,_assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__.setBoard)(board, shuffleDataCards);\nvar cards = (0,_assets_JS_utils_utils__WEBPACK_IMPORTED_MODULE_1__.$)(\".card img\", true);\n\nfunction handleClickImg(event) {\n  (0,_assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__.analyzeGameState)(event, gameState, function () {\n    return alert(\"ok\");\n  });\n}\n\n(0,_assets_JS_game_game__WEBPACK_IMPORTED_MODULE_3__.setAddEventListener)(cards, handleClickImg);\n\n//# sourceURL=webpack://memory/./src/app.js?");

/***/ }),

/***/ "./src/assets/JS/game/State.js":
/*!*************************************!*\
  !*** ./src/assets/JS/game/State.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar State = /*#__PURE__*/function () {\n  function State() {\n    _classCallCheck(this, State);\n\n    this.state = [];\n  }\n\n  _createClass(State, [{\n    key: \"_state\",\n    get: function get() {\n      return this.state;\n    },\n    set: function set(value) {\n      this.state = value;\n    }\n  }, {\n    key: \"addItemInState\",\n    value: function addItemInState(item) {\n      this.state.push(item);\n    }\n  }]);\n\n  return State;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);\n\n//# sourceURL=webpack://memory/./src/assets/JS/game/State.js?");

/***/ }),

/***/ "./src/assets/JS/game/game.js":
/*!************************************!*\
  !*** ./src/assets/JS/game/game.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"analyzeGameState\": () => (/* binding */ analyzeGameState),\n/* harmony export */   \"buildArrayCards\": () => (/* binding */ buildArrayCards),\n/* harmony export */   \"setAddEventListener\": () => (/* binding */ setAddEventListener),\n/* harmony export */   \"setBoard\": () => (/* binding */ setBoard),\n/* harmony export */   \"shuffleArray\": () => (/* binding */ shuffleArray)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/assets/JS/utils/utils.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app */ \"./src/app.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n/**\r\n * Build array of data cards\r\n * @param {number} numberPairsOfCards\r\n * @param {number} numberPerCard\r\n * @returns {{id: number, path: string}[]}\r\n */\n\nfunction buildArrayCards(numberOfElements, numberPerCard) {\n  var arrayOfElements = Array(numberOfElements / numberPerCard).fill(0).map(function (_, index) {\n    return [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.buildDataOfCard)(index + 1), (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.buildDataOfCard)(index + 1)];\n  });\n  return arrayOfElements.flat();\n}\n/**\r\n * Shuffle array of data cards\r\n * @param {any[]} cardsArray\r\n * @returns {any[]}\r\n */\n\nfunction shuffleArray(cardsArray) {\n  var shuffledArray = _toConsumableArray(cardsArray.sort(function () {\n    return Math.random() - 0.5;\n  }));\n\n  return shuffledArray;\n}\n/**\r\n * Build game board\r\n * @param {HTMLElement} target\r\n * @param {{id: number, path: string}[]} arrayCards\r\n */\n\nfunction setBoard(target, arrayCards) {\n  var stringOfCardsHTML = \"\";\n\n  var _iterator = _createForOfIteratorHelper(arrayCards),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var card = _step.value;\n      stringOfCardsHTML += \"\\n            <div class='card'>\\n               <img data-id='\".concat(card.id, \"' class='initCard' src=\\\"\").concat(card.path, \"\\\" alt='card to guess'/>\\n            </div>\\n        \");\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  target.innerHTML = stringOfCardsHTML;\n}\n/**\r\n * Add an event listener in all elements in NodeList\r\n * @param {NodeList} elements\r\n * @param {() => void} callback\r\n */\n\nfunction setAddEventListener(elements, callback) {\n  var arrayFromNodeList = Array.from(elements);\n  arrayFromNodeList.forEach(function (element) {\n    element.addEventListener(\"click\", callback);\n  });\n}\n/**\r\n * @param {Event} event\r\n * @param {State} state\r\n * @param {() => void} callbackWhenWin\r\n */\n\nfunction analyzeGameState(event, state, callbackWhenWin) {\n  var e = event.target;\n  e.classList.remove(\"initCard\");\n\n  if (state._state[0]) {\n    if (state._state[0].dataset.id === e.dataset.id) {\n      state._state = [];\n      removeClassCAndCall(false, e, state, callbackWhenWin);\n      return;\n    } else {\n      removeClassCAndCall(true, e, state, callbackWhenWin);\n      return;\n    }\n  }\n\n  state.addItemInState(e);\n}\n\nfunction removeClassCAndCall(re_nit, e, state, callback) {\n  if (re_nit) {\n    reInit(e, state);\n  } else {\n    callback();\n  }\n\n  e.classList.remove(\"initCard\");\n}\n\nfunction reInit(e, state) {\n  window.setTimeout(function () {\n    state._state[0].classList.add(\"initCard\");\n\n    e.classList.add(\"initCard\");\n    state._state = [];\n  }, 1000);\n}\n\n//# sourceURL=webpack://memory/./src/assets/JS/game/game.js?");

/***/ }),

/***/ "./src/assets/JS/utils/dictionnaryImg.js":
/*!***********************************************!*\
  !*** ./src/assets/JS/utils/dictionnaryImg.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getImgPath)\n/* harmony export */ });\n/* harmony import */ var _img_img1_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/img1-min.png */ \"./src/assets/img/img1-min.png\");\n/* harmony import */ var _img_img2_min_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/img2-min.png */ \"./src/assets/img/img2-min.png\");\n/* harmony import */ var _img_img3_min_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/img3-min.png */ \"./src/assets/img/img3-min.png\");\n/* harmony import */ var _img_img4_min_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/img4-min.png */ \"./src/assets/img/img4-min.png\");\n/* harmony import */ var _img_img5_min_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/img5-min.png */ \"./src/assets/img/img5-min.png\");\n/* harmony import */ var _img_img6_min_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/img6-min.png */ \"./src/assets/img/img6-min.png\");\n/* harmony import */ var _img_img7_min_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/img7-min.png */ \"./src/assets/img/img7-min.png\");\n/* harmony import */ var _img_img8_min_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../img/img8-min.png */ \"./src/assets/img/img8-min.png\");\n\n\n\n\n\n\n\n\nvar dictionaryImagesPath = {\n  1: _img_img1_min_png__WEBPACK_IMPORTED_MODULE_0__,\n  2: _img_img2_min_png__WEBPACK_IMPORTED_MODULE_1__,\n  3: _img_img3_min_png__WEBPACK_IMPORTED_MODULE_2__,\n  4: _img_img4_min_png__WEBPACK_IMPORTED_MODULE_3__,\n  5: _img_img5_min_png__WEBPACK_IMPORTED_MODULE_4__,\n  6: _img_img6_min_png__WEBPACK_IMPORTED_MODULE_5__,\n  7: _img_img7_min_png__WEBPACK_IMPORTED_MODULE_6__,\n  8: _img_img8_min_png__WEBPACK_IMPORTED_MODULE_7__\n};\n/**\r\n * Get path img from index\r\n * @param {number} index\r\n * @returns {string}\r\n */\n\nfunction getImgPath(index) {\n  var stringIndex = index.toString();\n\n  if (stringIndex in dictionaryImagesPath) {\n    return dictionaryImagesPath[stringIndex];\n  }\n\n  throw Error(\"Bad index\");\n}\n\n//# sourceURL=webpack://memory/./src/assets/JS/utils/dictionnaryImg.js?");

/***/ }),

/***/ "./src/assets/JS/utils/utils.js":
/*!**************************************!*\
  !*** ./src/assets/JS/utils/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"buildDataOfCard\": () => (/* binding */ buildDataOfCard)\n/* harmony export */ });\n/* harmony import */ var _utils_dictionnaryImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dictionnaryImg */ \"./src/assets/JS/utils/dictionnaryImg.js\");\n\n/**\r\n * Return an or many HTML elements\r\n * @param {string} tag\r\n * @param {true | undefined} isAll\r\n * @return {HTMLElement | NodeList}\r\n */\n\nfunction $(tag, All) {\n  return All ? document.querySelectorAll(tag) : document.querySelector(tag);\n}\n/**\r\n * @param {number} index\r\n * @return {{id: number, path: string}}\r\n */\n\nfunction buildDataOfCard(index) {\n  return {\n    id: index,\n    path: (0,_utils_dictionnaryImg__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index)\n  };\n}\n\n//# sourceURL=webpack://memory/./src/assets/JS/utils/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/index.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/index.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n   padding: 0;\\r\\n   margin: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n   display: flex;\\r\\n   flex-direction: column;\\r\\n   justify-content: center;\\r\\n   align-items: center;\\r\\n   height: 100vh;\\r\\n}\\r\\n\\r\\n.container-state {\\r\\n   display: flex;\\r\\n}\\r\\n\\r\\n.container {\\r\\n   display: flex;\\r\\n   flex-wrap: wrap;\\r\\n   width: 80vw;\\r\\n   height: 90vh;\\r\\n   max-height: 90vh;\\r\\n   align-items: center;\\r\\n   /* border: 1px solid blue; */\\r\\n}\\r\\n\\r\\n.card {\\r\\n   width: calc(80vw / 4);\\r\\n   height: calc(90vh / 4);\\r\\n   min-width: 180px;\\r\\n   min-height: 180px;\\r\\n}\\r\\n\\r\\n.card img {\\r\\n   width: 100%;\\r\\n   /* border: 1px solid red; */\\r\\n   height: 100%;\\r\\n   object-fit: cover;\\r\\n   cursor: pointer;\\r\\n}\\r\\n\\r\\n.initCard {\\r\\n   filter: grayscale(1);\\r\\n}\\r\\n\\r\\n.onSelectCard {\\r\\n   filter: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://memory/./src/assets/CSS/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://memory/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://memory/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/CSS/index.css":
/*!**********************************!*\
  !*** ./src/assets/CSS/index.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/CSS/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://memory/./src/assets/CSS/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://memory/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/img/img1-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img1-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b6957d8b966039a017f.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img1-min.png?");

/***/ }),

/***/ "./src/assets/img/img2-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img2-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aba50efe108865bb4ea2.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img2-min.png?");

/***/ }),

/***/ "./src/assets/img/img3-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img3-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e790a770cd907d2bf759.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img3-min.png?");

/***/ }),

/***/ "./src/assets/img/img4-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img4-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d226da538ecb245690f0.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img4-min.png?");

/***/ }),

/***/ "./src/assets/img/img5-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img5-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2806a5ed5961ead9b53a.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img5-min.png?");

/***/ }),

/***/ "./src/assets/img/img6-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img6-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4c5f0c957d9db83ad49.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img6-min.png?");

/***/ }),

/***/ "./src/assets/img/img7-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img7-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc3eb2e7aadb22cb49a5.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img7-min.png?");

/***/ }),

/***/ "./src/assets/img/img8-min.png":
/*!*************************************!*\
  !*** ./src/assets/img/img8-min.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b019e9fc64cf6440538.png\";\n\n//# sourceURL=webpack://memory/./src/assets/img/img8-min.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;