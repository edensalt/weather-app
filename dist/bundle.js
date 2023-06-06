/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/output.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/output.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

input,
button {
  /* Resetting border, padding, and background styles */
  border: none;
  padding: 0;
  background: none;
  /* Resetting font styles */
  font-family: inherit;
  font-size: inherit;
  /* Resetting box-sizing to avoid unexpected sizing */
  box-sizing: border-box;
  /* Resetting appearance styles (for some browsers) */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* Resetting cursor style */
  cursor: pointer;
  /* Resetting outline style */
  outline: none;
}

body {
  margin: 0;
}

.header {
  width: 100%;
  background-color: rgb(176, 216, 159);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header h1 {
  color: blue;
}
.header .city-div {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.header .city-div .location {
  display: flex;
  align-items: baseline;
  padding: 5px;
}
.header .city-div .location h1 {
  margin: 0;
  font-size: 3rem;
  padding: 0 1rem;
}
.header .city-div .location h2 {
  margin: 0;
}

#search-bar form {
  display: flex;
  gap: 5px;
}
#search-bar form #city-input {
  background: rgba(255, 255, 255, 0.3137254902);
  padding: 3px 5px;
  color: black;
  border-radius: 5px;
}
#search-bar form #city-submit {
  background: #000;
  border-radius: 5px;
  color: white;
  padding: 3px 5px;
}

#current {
  display: flex;
}

#current-weather {
  display: grid;
  max-width: 550px;
  width: 50%;
  grid-template-columns: repeat(9, minmax(50px, 1fr));
  grid-template-rows: repeat(4, 1fr);
}
#current-weather #icon {
  grid-area: 1/1/5/3;
  justify-self: center;
  align-self: center;
  height: 100%;
  width: 100%;
  border: solid bisque 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#current-weather #temp {
  font-size: 6rem;
  grid-area: 1/3/5/7;
  justify-self: center;
  align-self: center;
}
#current-weather #fahrenheit {
  grid-area: 1/7/3/8;
  font-size: 2rem;
  justify-self: start;
  align-self: end;
}
#current-weather #celsius {
  grid-area: 1/8/3/9;
  font-size: 2rem;
  justify-self: start;
  align-self: end;
}
#current-weather #description {
  grid-area: 3/7/4/10;
  justify-self: start;
  align-self: center;
}

/*# sourceMappingURL=output.css.map */
`, "",{"version":3,"sources":["webpack://./src/input.scss","webpack://./src/output.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;;EAEE,qDAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EAEA,0BAAA;EACA,oBAAA;EACA,kBAAA;EAEA,oDAAA;EACA,sBAAA;EAEA,oDAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EAEA,2BAAA;EACA,eAAA;EAEA,4BAAA;EACA,aAAA;ACJF;;ADOA;EACE,SAAA;ACJF;;ADOA;EACE,WAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACJF;ADME;EACE,WAAA;ACJJ;ADOE;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,8BAAA;ACLJ;ADOI;EACE,aAAA;EACA,qBAAA;EACA,YAAA;ACLN;ADOM;EACE,SAAA;EACA,eAAA;EACA,eAAA;ACLR;ADQM;EACE,SAAA;ACNR;;ADYA;EACE,aAAA;EACA,QAAA;ACTF;ADWE;EACE,6CAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;ACTJ;ADYE;EACE,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;ACVJ;;ADcA;EACE,aAAA;ACXF;;ADcA;EACE,aAAA;EACA,gBAAA;EACA,UAAA;EACA,mDAAA;EACA,kCAAA;ACXF;ADaE;EACE,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ACXJ;ADcE;EACE,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;ACZJ;ADeE;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;ACbJ;ADgBE;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,eAAA;ACdJ;ADiBE;EACE,mBAAA;EACA,mBAAA;EACA,kBAAA;ACfJ;;AAEA,qCAAqC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/output.css":
/*!************************!*\
  !*** ./src/output.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./output.css */ "./node_modules/css-loader/dist/cjs.js!./src/output.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_output_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/city */ "./src/modules/city.js");
/* harmony import */ var _modules_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/refresh */ "./src/modules/refresh.js");



const Form = async function () {
  return new Promise((resolve, reject) => {
    const parent = document.querySelector("#search-bar");

    const form = document.createElement("form");

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "city-input");
    input.setAttribute("placeholder", "Enter new city");

    const submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "city-submit");
    submit.innerHTML = "Search";

    submit.addEventListener("click", async (e) => {
      e.preventDefault();
      const newCity = (0,_modules_city__WEBPACK_IMPORTED_MODULE_0__.getCity)();
      console.log(newCity);
      if (newCity === "") {
        return;
      }
      (0,_modules_refresh__WEBPACK_IMPORTED_MODULE_1__["default"])(newCity);
      form.reset();
    });

    parent.appendChild(form);
    form.appendChild(input);
    form.appendChild(submit);

    resolve();

    reject(new Error("Form error"));
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),

/***/ "./src/components/init-forecast.js":
/*!*****************************************!*\
  !*** ./src/components/init-forecast.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/weather-data */ "./src/modules/weather-data.js");
/* harmony import */ var _modules_location_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/location-refresh */ "./src/modules/location-refresh.js");
/* harmony import */ var _modules_current_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/current-refresh */ "./src/modules/current-refresh.js");




const InitWeather = async function (city) {

  try {
    (0,_modules_location_refresh__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    (0,_modules_current_refresh__WEBPACK_IMPORTED_MODULE_2__["default"])(city);
  
    const forecastParent = document.querySelector("#forecast");
  
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    today.innerHTML = "loading...";
  
    (0,_modules_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
      .then((value) => {
        today.innerHTML = `Average temp for today, ${value.forecast.forecastday[0].date}, will be ${value.forecast.forecastday[0].day.avgtemp_f}°F`;
      })
      .then(forecastParent.appendChild(today))
      .catch((error) => {
        today.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  
    const tomorrow = document.createElement("div");
    tomorrow.setAttribute("id", "tomorrow");
    tomorrow.innerHTML = "loading...";
  
    (0,_modules_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
      .then((value) => {
        tomorrow.innerHTML = `Average temp for tomorrow, ${value.forecast.forecastday[1].date}, will be ${value.forecast.forecastday[1].day.avgtemp_f}°F`;
      })
      .then(forecastParent.appendChild(tomorrow))
      .catch((error) => {
        tomorrow.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  
    const nextDay = document.createElement("div");
    nextDay.setAttribute("id", "next-day");
    nextDay.innerHTML = "loading...";
  
    (0,_modules_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
      .then((value) => {
        nextDay.innerHTML = `Average temp in two days, ${value.forecast.forecastday[2].date}, will be ${value.forecast.forecastday[2].day.avgtemp_f}°F`;
      })
      .then(forecastParent.appendChild(nextDay))
      .catch((error) => {
        nextDay.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    throw error;
  }

  
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitWeather);


/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Layout = function() {

    return new Promise((resolve, reject) => {
        const parent = document.querySelector("#parent");

        const header = document.createElement("div");
        header.classList.add("header");
    
        const title = document.createElement("h1");
        title.innerHTML = "Weather App";
    
        const cityDiv = document.createElement("div");
        cityDiv.classList.add("city-div");
    
        const location = document.createElement("div");
        location.classList.add("location");
    
        const city = document.createElement("h1");
        city.setAttribute("id", "city");
    
        const state = document.createElement("h2");
        state.setAttribute("id", "state");
        state.innerHTML = "Texas";
        
        const search = document.createElement("div");
        search.setAttribute("id", "search-bar");
    
        const current = document.createElement("div");
        current.setAttribute("id", "current");
    
        const currentWeather = document.createElement("div");
        currentWeather.setAttribute("id", "current-weather");
    
        const currentDate = document.createElement("div");
        currentDate.setAttribute("id", "current-date");
    
        const forecast = document.createElement("div");
        forecast.setAttribute("id", "forecast");
    
        parent.appendChild(header);
        header.appendChild(title);
        header.appendChild(cityDiv);
        cityDiv.appendChild(location);
        location.appendChild(city);
        location.appendChild(state);
        cityDiv.appendChild(search);
        parent.appendChild(current);
        current.appendChild(currentWeather);
        current.appendChild(currentDate);
        parent.appendChild(forecast);
        resolve();
        
        reject(new Error("Layout error"))
    })
    

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/modules/city.js":
/*!*****************************!*\
  !*** ./src/modules/city.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCity: () => (/* binding */ getCity),
/* harmony export */   setCity: () => (/* binding */ setCity)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/modules/weather-data.js");


function getCity() {
    const input = document.querySelector("#city-input");
    const city = input.value;
    return city;
}

const setCity = async function() {
    try {
        const city = await getCity();
        if (city === undefined) {
            city = "Austin";
        }
        const temp = await (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city);
        return temp;
    }
    catch (error) {
        console.log(error)
    }
};



/***/ }),

/***/ "./src/modules/current-refresh.js":
/*!****************************************!*\
  !*** ./src/modules/current-refresh.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/modules/weather-data.js");


const CurrentWeatherLayout = async function() {
    const parent = document.querySelector("#current-weather");

    const icon = document.createElement("div");
    icon.setAttribute("id", "icon");

    const img = document.createElement("img");
    img.setAttribute("id", "icon-img");

    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");
    temp.setAttribute("deg", "f");

    const fahrenheit = document.createElement("button");
    fahrenheit.setAttribute("id", "fahrenheit");
    fahrenheit.innerHTML = "°F";

    const celsius = document.createElement("button");
    celsius.setAttribute("id", "celsius");
    celsius.innerHTML = "°C";

    const description = document.createElement("div");
    description.setAttribute("id", "description");


    parent.appendChild(temp);
    parent.appendChild(icon);
    icon.appendChild(img);
    parent.appendChild(fahrenheit);
    parent.appendChild(celsius);
    parent.appendChild(description);

}

const RefreshCurrentWeather = async function(city) {

    await CurrentWeatherLayout();

    const img = document.querySelector("#icon-img");
    const temp = document.querySelector("#temp");
    const description = document.querySelector("#description")
  
    temp.innerHTML = "...";
    description.innerHTML = "...";
  
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
    .then((value) => {
      temp.innerHTML = value.current.temp_f;
      img.src = value.current.condition.icon;
      description.innerHTML = `${value.current.condition.text}, feels like ${value.current.feelslike_f}°F.`
      console.log(icon.src);
    })
    // .then(parent.appendChild(temp))
    .catch((error) => {
      temp.innerHTML = `Error: ${error}`;
      console.log(error);
    });
  }

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshCurrentWeather);

/***/ }),

/***/ "./src/modules/location-refresh.js":
/*!*****************************************!*\
  !*** ./src/modules/location-refresh.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-data */ "./src/modules/weather-data.js");


const RefreshLocation = async function (city) {
    const cityLabel = document.querySelector("#city");
    cityLabel.innerHTML = "Loading...";
  
    const stateLabel = document.querySelector("#state");
    stateLabel.innerHTML = "Loading...";
  
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
      .then((value) => {
        const result = value.location.name;
        cityLabel.setAttribute("city", result);
        cityLabel.innerHTML = result.toUpperCase();
      })
      .catch((error) => {
        cityLabel.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
      .then((value) => {
        stateLabel.innerHTML = value.location.region;
      })
      .catch((error) => {
        stateLabel.innerHTML = `Error: ${error}`;
        console.log(error);
      });
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RefreshLocation);

/***/ }),

/***/ "./src/modules/refresh.js":
/*!********************************!*\
  !*** ./src/modules/refresh.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city */ "./src/modules/city.js");
/* harmony import */ var _current_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-refresh */ "./src/modules/current-refresh.js");
/* harmony import */ var _location_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location-refresh */ "./src/modules/location-refresh.js");




const Refresh = async function(newCity) {
    const input = document.querySelector("#city-input")
    const temp = document.querySelector("#temp");
    temp.innerHTML = "Loading...";

    // const tempPromise = setCity(newCity);
    // const data = await tempPromise;

    // temp.innerHTML = `${data.current.temp_f}°F`;
    input.setAttribute("placeholder", newCity);

    (0,_location_refresh__WEBPACK_IMPORTED_MODULE_2__["default"])(newCity);
    (0,_current_refresh__WEBPACK_IMPORTED_MODULE_1__["default"])(newCity);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Refresh);

/***/ }),

/***/ "./src/modules/weather-data.js":
/*!*************************************!*\
  !*** ./src/modules/weather-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getWeather = async function (city) {
  let data;
  let error;
  const cityLabel = document.querySelector("#city");
  const input = document.querySelector("#city-input");

  while (!data || error) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=830c878837d444b58d1161321230506&q=${city}&days=3&aqi=no`,
        { mode: "cors" }
      );
      const data = await response.json()
      console.log(data);
      if (data.error) {
        console.log(data.error.message)
        city = cityLabel.getAttribute("city");
        input.setAttribute("placeholder", data.error.message)
        error = true;
      } else {
        error = false;
        return data;

      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_init_forecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/init-forecast */ "./src/components/init-forecast.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ "./src/components/layout.js");
/* harmony import */ var _output_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output.css */ "./src/output.css");






function setContentParent() {
  const div = document.createElement("div");
  div.setAttribute("id", "parent");

  return div;
}

document.body.appendChild(setContentParent());

(0,_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"])().then(() => {
  return (0,_components_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
}).then(() => {
  return (0,_components_init_forecast__WEBPACK_IMPORTED_MODULE_0__["default"])("Austin");
}).catch((error) => {
  console.log(error);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQztBQUNxQjtBQUNMOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixvQkFBb0I7QUFDL0M7O0FBRUEsSUFBSSw2REFBZTtBQUNuQixJQUFJLDREQUFxQjs7QUFFekI7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNwQnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGLEtBQUs7QUFDbEcsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDaEMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ2hCO0FBQ0k7QUFDbkI7OztBQUd0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSw4REFBTTtBQUNOLFNBQVMsNERBQUk7QUFDYixDQUFDO0FBQ0QsU0FBUyxxRUFBVztBQUNwQixDQUFDO0FBQ0Q7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vdXRwdXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL291dHB1dC5jc3M/YzQ3NSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2luaXQtZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3VycmVudC1yZWZyZXNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbG9jYXRpb24tcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dCxcbmJ1dHRvbiB7XG4gIC8qIFJlc2V0dGluZyBib3JkZXIsIHBhZGRpbmcsIGFuZCBiYWNrZ3JvdW5kIHN0eWxlcyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC8qIFJlc2V0dGluZyBmb250IHN0eWxlcyAqL1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICAvKiBSZXNldHRpbmcgYm94LXNpemluZyB0byBhdm9pZCB1bmV4cGVjdGVkIHNpemluZyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBSZXNldHRpbmcgYXBwZWFyYW5jZSBzdHlsZXMgKGZvciBzb21lIGJyb3dzZXJzKSAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogUmVzZXR0aW5nIGN1cnNvciBzdHlsZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIFJlc2V0dGluZyBvdXRsaW5lIHN0eWxlICovXG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjE2LCAxNTkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIGgxIHtcbiAgY29sb3I6IGJsdWU7XG59XG4uaGVhZGVyIC5jaXR5LWRpdiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlciAuY2l0eS1kaXYgLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVyIC5jaXR5LWRpdiAubG9jYXRpb24gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmhlYWRlciAuY2l0eS1kaXYgLmxvY2F0aW9uIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jc2VhcmNoLWJhciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG4jc2VhcmNoLWJhciBmb3JtICNjaXR5LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxMzcyNTQ5MDIpO1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNzZWFyY2gtYmFyIGZvcm0gI2NpdHktc3VibWl0IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG5cbiNjdXJyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2N1cnJlbnQtd2VhdGhlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1heC13aWR0aDogNTUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDksIG1pbm1heCg1MHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcbn1cbiNjdXJyZW50LXdlYXRoZXIgI2ljb24ge1xuICBncmlkLWFyZWE6IDEvMS81LzM7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgYmlzcXVlIDFweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jY3VycmVudC13ZWF0aGVyICN0ZW1wIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBncmlkLWFyZWE6IDEvMy81Lzc7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jY3VycmVudC13ZWF0aGVyICNmYWhyZW5oZWl0IHtcbiAgZ3JpZC1hcmVhOiAxLzcvMy84O1xuICBmb250LXNpemU6IDJyZW07XG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbiNjdXJyZW50LXdlYXRoZXIgI2NlbHNpdXMge1xuICBncmlkLWFyZWE6IDEvOC8zLzk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogZW5kO1xufVxuI2N1cnJlbnQtd2VhdGhlciAjZGVzY3JpcHRpb24ge1xuICBncmlkLWFyZWE6IDMvNy80LzEwO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPW91dHB1dC5jc3MubWFwICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbnB1dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvb3V0cHV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7O0VBRUUscURBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsMEJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBRUEsb0RBQUE7RUFDQSxzQkFBQTtFQUVBLG9EQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsMkJBQUE7RUFDQSxlQUFBO0VBRUEsNEJBQUE7RUFDQSxhQUFBO0FDSkY7O0FET0E7RUFDRSxTQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pGO0FETUU7RUFDRSxXQUFBO0FDSko7QURPRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FDTEo7QURPSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNMTjtBRE9NO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDTFI7QURRTTtFQUNFLFNBQUE7QUNOUjs7QURZQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FDVEY7QURXRTtFQUNFLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNUSjtBRFlFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGNBO0VBQ0UsYUFBQTtBQ1hGOztBRGNBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1EQUFBO0VBQ0Esa0NBQUE7QUNYRjtBRGFFO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURjRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDYko7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNkSjtBRGlCRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2ZKOztBQUVBLHFDQUFxQ1wiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3V0cHV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vb3V0cHV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZ2V0Q2l0eSB9IGZyb20gXCIuLi9tb2R1bGVzL2NpdHlcIjtcbmltcG9ydCBSZWZyZXNoIGZyb20gXCIuLi9tb2R1bGVzL3JlZnJlc2hcIjtcblxuY29uc3QgRm9ybSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1iYXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNpdHktaW5wdXRcIik7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBuZXcgY2l0eVwiKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eS1zdWJtaXRcIik7XG4gICAgc3VibWl0LmlubmVySFRNTCA9IFwiU2VhcmNoXCI7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdDaXR5ID0gZ2V0Q2l0eSgpO1xuICAgICAgY29uc29sZS5sb2cobmV3Q2l0eSk7XG4gICAgICBpZiAobmV3Q2l0eSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBSZWZyZXNoKG5ld0NpdHkpO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgIH0pO1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICAgIHJlc29sdmUoKTtcblxuICAgIHJlamVjdChuZXcgRXJyb3IoXCJGb3JtIGVycm9yXCIpKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4uL21vZHVsZXMvd2VhdGhlci1kYXRhXCI7XG5pbXBvcnQgUmVmcmVzaExvY2F0aW9uIGZyb20gXCIuLi9tb2R1bGVzL2xvY2F0aW9uLXJlZnJlc2hcIjtcbmltcG9ydCBSZWZyZXNoQ3VycmVudFdlYXRoZXIgZnJvbSBcIi4uL21vZHVsZXMvY3VycmVudC1yZWZyZXNoXCI7XG5cbmNvbnN0IEluaXRXZWF0aGVyID0gYXN5bmMgZnVuY3Rpb24gKGNpdHkpIHtcblxuICB0cnkge1xuICAgIFJlZnJlc2hMb2NhdGlvbihjaXR5KTtcbiAgICBSZWZyZXNoQ3VycmVudFdlYXRoZXIoY2l0eSk7XG4gIFxuICAgIGNvbnN0IGZvcmVjYXN0UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdFwiKTtcbiAgXG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvZGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kYXlcIik7XG4gICAgdG9kYXkuaW5uZXJIVE1MID0gXCJsb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0b2RheS5pbm5lckhUTUwgPSBgQXZlcmFnZSB0ZW1wIGZvciB0b2RheSwgJHt2YWx1ZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlfSwgd2lsbCBiZSAke3ZhbHVlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2Z9wrBGYDtcbiAgICAgIH0pXG4gICAgICAudGhlbihmb3JlY2FzdFBhcmVudC5hcHBlbmRDaGlsZCh0b2RheSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRvZGF5LmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgXG4gICAgY29uc3QgdG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRvbW9ycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9tb3Jyb3dcIik7XG4gICAgdG9tb3Jyb3cuaW5uZXJIVE1MID0gXCJsb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICB0b21vcnJvdy5pbm5lckhUTUwgPSBgQXZlcmFnZSB0ZW1wIGZvciB0b21vcnJvdywgJHt2YWx1ZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlfSwgd2lsbCBiZSAke3ZhbHVlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2Z9wrBGYDtcbiAgICAgIH0pXG4gICAgICAudGhlbihmb3JlY2FzdFBhcmVudC5hcHBlbmRDaGlsZCh0b21vcnJvdykpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRvbW9ycm93LmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgXG4gICAgY29uc3QgbmV4dERheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV4dERheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5leHQtZGF5XCIpO1xuICAgIG5leHREYXkuaW5uZXJIVE1MID0gXCJsb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBuZXh0RGF5LmlubmVySFRNTCA9IGBBdmVyYWdlIHRlbXAgaW4gdHdvIGRheXMsICR7dmFsdWUuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZX0sIHdpbGwgYmUgJHt2YWx1ZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9mfcKwRmA7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZm9yZWNhc3RQYXJlbnQuYXBwZW5kQ2hpbGQobmV4dERheSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIG5leHREYXkuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5pdFdlYXRoZXI7XG4iLCJjb25zdCBMYXlvdXQgPSBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFyZW50XCIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJXZWF0aGVyIEFwcFwiO1xuICAgIFxuICAgICAgICBjb25zdCBjaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKFwiY2l0eS1kaXZcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICAgIFxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBjaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eVwiKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHN0YXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhdGVcIik7XG4gICAgICAgIHN0YXRlLmlubmVySFRNTCA9IFwiVGV4YXNcIjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlYXJjaC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXJjaC1iYXJcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdXJyZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudFwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdXJyZW50V2VhdGhlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnQtd2VhdGhlclwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdXJyZW50RGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnQtZGF0ZVwiKTtcbiAgICBcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JlY2FzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcmVjYXN0XCIpO1xuICAgIFxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNpdHlEaXYpO1xuICAgICAgICBjaXR5RGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICAgICAgbG9jYXRpb24uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKHN0YXRlKTtcbiAgICAgICAgY2l0eURpdi5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY3VycmVudCk7XG4gICAgICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQoY3VycmVudFdlYXRoZXIpO1xuICAgICAgICBjdXJyZW50LmFwcGVuZENoaWxkKGN1cnJlbnREYXRlKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZvcmVjYXN0KTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICBcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIkxheW91dCBlcnJvclwiKSlcbiAgICB9KVxuICAgIFxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuZnVuY3Rpb24gZ2V0Q2l0eSgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKTtcbiAgICBjb25zdCBjaXR5ID0gaW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIGNpdHk7XG59XG5cbmNvbnN0IHNldENpdHkgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjaXR5ID0gYXdhaXQgZ2V0Q2l0eSgpO1xuICAgICAgICBpZiAoY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaXR5ID0gXCJBdXN0aW5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnZXRDaXR5LCBzZXRDaXR5IH07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5cbmNvbnN0IEN1cnJlbnRXZWF0aGVyTGF5b3V0ID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LXdlYXRoZXJcIik7XG5cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvblwiKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaWNvbi1pbWdcIik7XG5cbiAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGVtcFwiKTtcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImRlZ1wiLCBcImZcIik7XG5cbiAgICBjb25zdCBmYWhyZW5oZWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmYWhyZW5oZWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmFocmVuaGVpdFwiKTtcbiAgICBmYWhyZW5oZWl0LmlubmVySFRNTCA9IFwiwrBGXCI7XG5cbiAgICBjb25zdCBjZWxzaXVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjZWxzaXVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2Vsc2l1c1wiKTtcbiAgICBjZWxzaXVzLmlubmVySFRNTCA9IFwiwrBDXCI7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHRlbXApO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBpY29uLmFwcGVuZENoaWxkKGltZyk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGZhaHJlbmhlaXQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjZWxzaXVzKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG59XG5cbmNvbnN0IFJlZnJlc2hDdXJyZW50V2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uKGNpdHkpIHtcblxuICAgIGF3YWl0IEN1cnJlbnRXZWF0aGVyTGF5b3V0KCk7XG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb24taW1nXCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpXG4gIFxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCIuLi5cIjtcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIi4uLlwiO1xuICBcbiAgICBnZXRXZWF0aGVyKGNpdHkpXG4gICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICB0ZW1wLmlubmVySFRNTCA9IHZhbHVlLmN1cnJlbnQudGVtcF9mO1xuICAgICAgaW1nLnNyYyA9IHZhbHVlLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgJHt2YWx1ZS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fSwgZmVlbHMgbGlrZSAke3ZhbHVlLmN1cnJlbnQuZmVlbHNsaWtlX2Z9wrBGLmBcbiAgICAgIGNvbnNvbGUubG9nKGljb24uc3JjKTtcbiAgICB9KVxuICAgIC8vIC50aGVuKHBhcmVudC5hcHBlbmRDaGlsZCh0ZW1wKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0ZW1wLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgUmVmcmVzaEN1cnJlbnRXZWF0aGVyOyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBSZWZyZXNoTG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiAoY2l0eSkge1xuICAgIGNvbnN0IGNpdHlMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKTtcbiAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gIFxuICAgIGNvbnN0IHN0YXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXRlXCIpO1xuICAgIHN0YXRlTGFiZWwuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiY2l0eVwiLCByZXN1bHQpO1xuICAgICAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gcmVzdWx0LnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICBcbiAgICBnZXRXZWF0aGVyKGNpdHkpXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgc3RhdGVMYWJlbC5pbm5lckhUTUwgPSB2YWx1ZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzdGF0ZUxhYmVsLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBSZWZyZXNoTG9jYXRpb247IiwiaW1wb3J0IHsgc2V0Q2l0eSB9IGZyb20gXCIuL2NpdHlcIjtcbmltcG9ydCBSZWZyZXNoQ3VycmVudFdlYXRoZXIgZnJvbSBcIi4vY3VycmVudC1yZWZyZXNoXCI7XG5pbXBvcnQgUmVmcmVzaExvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLXJlZnJlc2hcIjtcblxuY29uc3QgUmVmcmVzaCA9IGFzeW5jIGZ1bmN0aW9uKG5ld0NpdHkpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKVxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkxvYWRpbmcuLi5cIjtcblxuICAgIC8vIGNvbnN0IHRlbXBQcm9taXNlID0gc2V0Q2l0eShuZXdDaXR5KTtcbiAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgdGVtcFByb21pc2U7XG5cbiAgICAvLyB0ZW1wLmlubmVySFRNTCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2Z9wrBGYDtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBuZXdDaXR5KTtcblxuICAgIFJlZnJlc2hMb2NhdGlvbihuZXdDaXR5KTtcbiAgICBSZWZyZXNoQ3VycmVudFdlYXRoZXIobmV3Q2l0eSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmcmVzaDsiLCJjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgZnVuY3Rpb24gKGNpdHkpIHtcbiAgbGV0IGRhdGE7XG4gIGxldCBlcnJvcjtcbiAgY29uc3QgY2l0eUxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKTtcblxuICB3aGlsZSAoIWRhdGEgfHwgZXJyb3IpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTgzMGM4Nzg4MzdkNDQ0YjU4ZDExNjEzMjEyMzA1MDYmcT0ke2NpdHl9JmRheXM9MyZhcWk9bm9gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IubWVzc2FnZSlcbiAgICAgICAgY2l0eSA9IGNpdHlMYWJlbC5nZXRBdHRyaWJ1dGUoXCJjaXR5XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBkYXRhLmVycm9yLm1lc3NhZ2UpXG4gICAgICAgIGVycm9yID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IEluaXRXZWF0aGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaW5pdC1mb3JlY2FzdFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgXCIuL291dHB1dC5jc3NcIjtcblxuXG5mdW5jdGlvbiBzZXRDb250ZW50UGFyZW50KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYXJlbnRcIik7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZXRDb250ZW50UGFyZW50KCkpO1xuXG5MYXlvdXQoKS50aGVuKCgpID0+IHtcbiAgcmV0dXJuIEZvcm0oKTtcbn0pLnRoZW4oKCkgPT4ge1xuICByZXR1cm4gSW5pdFdlYXRoZXIoXCJBdXN0aW5cIik7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9