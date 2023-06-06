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

/*# sourceMappingURL=output.css.map */
`, "",{"version":3,"sources":["webpack://./src/input.scss","webpack://./src/output.css"],"names":[],"mappings":"AAAA;EACE,sBAAA;ACCF;;ADEA;;EAEE,qDAAA;EACA,YAAA;EACA,UAAA;EACA,gBAAA;EAEA,0BAAA;EACA,oBAAA;EACA,kBAAA;EAEA,oDAAA;EACA,sBAAA;EAEA,oDAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EAEA,2BAAA;EACA,eAAA;EAEA,4BAAA;EACA,aAAA;ACJF;;ADOA;EACE,SAAA;ACJF;;ADOA;EACE,WAAA;EACA,oCAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;ACJF;ADME;EACE,WAAA;ACJJ;ADOE;EACE,aAAA;EACA,aAAA;EACA,sBAAA;EACA,qBAAA;EACA,8BAAA;ACLJ;ADOI;EACE,aAAA;EACA,qBAAA;EACA,YAAA;ACLN;ADOM;EACE,SAAA;EACA,eAAA;EACA,eAAA;ACLR;ADQM;EACE,SAAA;ACNR;;ADYA;EACI,aAAA;EACA,QAAA;ACTJ;ADWI;EACI,6CAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;ACTR;ADYI;EACI,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;ACVR;;ADeA;EACE,aAAA;ACZF;;AAEA,qCAAqC","sourceRoot":""}]);
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
})

  parent.appendChild(form);
  form.appendChild(input);
  form.appendChild(submit);
 
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




const InitWeather = function (city) {

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


const RefreshCurrentWeather = async function(city) {
    const parent = document.querySelector("#current-weather");
  
    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");
  
    temp.innerHTML = "Loading...";
  
    (0,_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"])(city)
    .then((value) => {
      temp.innerHTML = `${value.current.temp_f}°F`;
    })
    .then(parent.appendChild(temp))
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
/* harmony import */ var _location_refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-refresh */ "./src/modules/location-refresh.js");



const Refresh = async function(newCity) {
    const input = document.querySelector("#city-input")
    const temp = document.querySelector("#temp");
    temp.innerHTML = "Loading...";

    const tempPromise = (0,_city__WEBPACK_IMPORTED_MODULE_0__.setCity)(newCity);
    const data = await tempPromise;

    temp.innerHTML = `${data.current.temp_f}°F`;
    input.setAttribute("placeholder", newCity);
    (0,_location_refresh__WEBPACK_IMPORTED_MODULE_1__["default"])(newCity);

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

(0,_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_form__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_components_init_forecast__WEBPACK_IMPORTED_MODULE_0__["default"])("Austin");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQSw4REFBTTtBQUNOLDREQUFJO0FBQ0oscUVBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9vdXRwdXQuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL291dHB1dC5jc3M/YzQ3NSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2luaXQtZm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9jaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvY3VycmVudC1yZWZyZXNoLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvbG9jYXRpb24tcmVmcmVzaC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5pbnB1dCxcbmJ1dHRvbiB7XG4gIC8qIFJlc2V0dGluZyBib3JkZXIsIHBhZGRpbmcsIGFuZCBiYWNrZ3JvdW5kIHN0eWxlcyAqL1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIC8qIFJlc2V0dGluZyBmb250IHN0eWxlcyAqL1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICAvKiBSZXNldHRpbmcgYm94LXNpemluZyB0byBhdm9pZCB1bmV4cGVjdGVkIHNpemluZyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiBSZXNldHRpbmcgYXBwZWFyYW5jZSBzdHlsZXMgKGZvciBzb21lIGJyb3dzZXJzKSAqL1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLyogUmVzZXR0aW5nIGN1cnNvciBzdHlsZSAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC8qIFJlc2V0dGluZyBvdXRsaW5lIHN0eWxlICovXG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgMjE2LCAxNTkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaGVhZGVyIGgxIHtcbiAgY29sb3I6IGJsdWU7XG59XG4uaGVhZGVyIC5jaXR5LWRpdiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlciAuY2l0eS1kaXYgLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVyIC5jaXR5LWRpdiAubG9jYXRpb24gaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmhlYWRlciAuY2l0eS1kaXYgLmxvY2F0aW9uIGgyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4jc2VhcmNoLWJhciBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG59XG4jc2VhcmNoLWJhciBmb3JtICNjaXR5LWlucHV0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxMzcyNTQ5MDIpO1xuICBwYWRkaW5nOiAzcHggNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNzZWFyY2gtYmFyIGZvcm0gI2NpdHktc3VibWl0IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG59XG5cbiNjdXJyZW50IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9b3V0cHV0LmNzcy5tYXAgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9vdXRwdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTs7RUFFRSxxREFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxvREFBQTtFQUNBLHNCQUFBO0VBRUEsb0RBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLGVBQUE7RUFFQSw0QkFBQTtFQUNBLGFBQUE7QUNKRjs7QURPQTtFQUNFLFNBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDSkY7QURNRTtFQUNFLFdBQUE7QUNKSjtBRE9FO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNMSjtBRE9JO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0xOO0FET007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNMUjtBRFFNO0VBQ0UsU0FBQTtBQ05SOztBRFlBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QUNUSjtBRFdJO0VBQ0ksNkNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEWUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVlI7O0FEZUE7RUFDRSxhQUFBO0FDWkY7O0FBRUEscUNBQXFDXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXRwdXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9vdXRwdXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnZXRDaXR5IH0gZnJvbSBcIi4uL21vZHVsZXMvY2l0eVwiO1xuaW1wb3J0IFJlZnJlc2ggZnJvbSBcIi4uL21vZHVsZXMvcmVmcmVzaFwiO1xuXG5jb25zdCBGb3JtID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1iYXJcIik7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5LWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIG5ldyBjaXR5XCIpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaXR5LXN1Ym1pdFwiKTtcbiAgc3VibWl0LmlubmVySFRNTCA9IFwiU2VhcmNoXCI7XG5cbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBuZXdDaXR5ID0gZ2V0Q2l0eSgpO1xuICAgIGNvbnNvbGUubG9nKG5ld0NpdHkpO1xuICAgIGlmIChuZXdDaXR5ID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFJlZnJlc2gobmV3Q2l0eSk7XG4gICAgZm9ybS5yZXNldCgpO1xufSlcblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xuIiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4uL21vZHVsZXMvd2VhdGhlci1kYXRhXCI7XG5pbXBvcnQgUmVmcmVzaExvY2F0aW9uIGZyb20gXCIuLi9tb2R1bGVzL2xvY2F0aW9uLXJlZnJlc2hcIjtcbmltcG9ydCBSZWZyZXNoQ3VycmVudFdlYXRoZXIgZnJvbSBcIi4uL21vZHVsZXMvY3VycmVudC1yZWZyZXNoXCI7XG5cbmNvbnN0IEluaXRXZWF0aGVyID0gZnVuY3Rpb24gKGNpdHkpIHtcblxuICBSZWZyZXNoTG9jYXRpb24oY2l0eSk7XG4gIFJlZnJlc2hDdXJyZW50V2VhdGhlcihjaXR5KTtcblxuICBjb25zdCBmb3JlY2FzdFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RcIik7XG5cbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZGF5XCIpO1xuICB0b2RheS5pbm5lckhUTUwgPSBcImxvYWRpbmcuLi5cIjtcblxuICBnZXRXZWF0aGVyKGNpdHkpXG4gICAgLnRoZW4oKHZhbHVlKSA9PiB7XG4gICAgICB0b2RheS5pbm5lckhUTUwgPSBgQXZlcmFnZSB0ZW1wIGZvciB0b2RheSwgJHt2YWx1ZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXRlfSwgd2lsbCBiZSAke3ZhbHVlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2Z9wrBGYDtcbiAgICB9KVxuICAgIC50aGVuKGZvcmVjYXN0UGFyZW50LmFwcGVuZENoaWxkKHRvZGF5KSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0b2RheS5pbm5lckhUTUwgPSBgRXJyb3I6ICR7ZXJyb3J9YDtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcblxuICBjb25zdCB0b21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvbW9ycm93LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9tb3Jyb3dcIik7XG4gIHRvbW9ycm93LmlubmVySFRNTCA9IFwibG9hZGluZy4uLlwiO1xuXG4gIGdldFdlYXRoZXIoY2l0eSlcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgIHRvbW9ycm93LmlubmVySFRNTCA9IGBBdmVyYWdlIHRlbXAgZm9yIHRvbW9ycm93LCAke3ZhbHVlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGV9LCB3aWxsIGJlICR7dmFsdWUuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfZn3CsEZgO1xuICAgIH0pXG4gICAgLnRoZW4oZm9yZWNhc3RQYXJlbnQuYXBwZW5kQ2hpbGQodG9tb3Jyb3cpKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRvbW9ycm93LmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuXG4gIGNvbnN0IG5leHREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXh0RGF5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV4dC1kYXlcIik7XG4gIG5leHREYXkuaW5uZXJIVE1MID0gXCJsb2FkaW5nLi4uXCI7XG5cbiAgZ2V0V2VhdGhlcihjaXR5KVxuICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgbmV4dERheS5pbm5lckhUTUwgPSBgQXZlcmFnZSB0ZW1wIGluIHR3byBkYXlzLCAke3ZhbHVlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGV9LCB3aWxsIGJlICR7dmFsdWUuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfZn3CsEZgO1xuICAgIH0pXG4gICAgLnRoZW4oZm9yZWNhc3RQYXJlbnQuYXBwZW5kQ2hpbGQobmV4dERheSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgbmV4dERheS5pbm5lckhUTUwgPSBgRXJyb3I6ICR7ZXJyb3J9YDtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRXZWF0aGVyO1xuIiwiY29uc3QgTGF5b3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXJlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJXZWF0aGVyIEFwcFwiO1xuXG4gICAgY29uc3QgY2l0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2l0eURpdi5jbGFzc0xpc3QuYWRkKFwiY2l0eS1kaXZcIik7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBjaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2l0eVwiKTtcblxuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHN0YXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3RhdGVcIik7XG4gICAgc3RhdGUuaW5uZXJIVE1MID0gXCJUZXhhc1wiO1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VhcmNoLWJhclwiKTtcblxuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50XCIpO1xuXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnRXZWF0aGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC13ZWF0aGVyXCIpO1xuXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGN1cnJlbnREYXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVudC1kYXRlXCIpO1xuXG4gICAgY29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9yZWNhc3RcIik7XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjaXR5RGl2KTtcbiAgICBjaXR5RGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChzdGF0ZSk7XG4gICAgY2l0eURpdi5hcHBlbmRDaGlsZChzZWFyY2gpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjdXJyZW50KTtcbiAgICBjdXJyZW50LmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVyKTtcbiAgICBjdXJyZW50LmFwcGVuZENoaWxkKGN1cnJlbnREYXRlKTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZm9yZWNhc3QpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi93ZWF0aGVyLWRhdGFcIjtcblxuZnVuY3Rpb24gZ2V0Q2l0eSgpIHtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eS1pbnB1dFwiKTtcbiAgICBjb25zdCBjaXR5ID0gaW5wdXQudmFsdWU7XG4gICAgcmV0dXJuIGNpdHk7XG59XG5cbmNvbnN0IHNldENpdHkgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjaXR5ID0gYXdhaXQgZ2V0Q2l0eSgpO1xuICAgICAgICBpZiAoY2l0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjaXR5ID0gXCJBdXN0aW5cIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KTtcbiAgICAgICAgcmV0dXJuIHRlbXA7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59O1xuXG5leHBvcnQgeyBnZXRDaXR5LCBzZXRDaXR5IH07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vd2VhdGhlci1kYXRhXCI7XG5cbmNvbnN0IFJlZnJlc2hDdXJyZW50V2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uKGNpdHkpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtd2VhdGhlclwiKTtcbiAgXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRlbXBcIik7XG4gIFxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7dmFsdWUuY3VycmVudC50ZW1wX2Z9wrBGYDtcbiAgICB9KVxuICAgIC50aGVuKHBhcmVudC5hcHBlbmRDaGlsZCh0ZW1wKSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICB0ZW1wLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgUmVmcmVzaEN1cnJlbnRXZWF0aGVyOyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL3dlYXRoZXItZGF0YVwiO1xuXG5jb25zdCBSZWZyZXNoTG9jYXRpb24gPSBhc3luYyBmdW5jdGlvbiAoY2l0eSkge1xuICAgIGNvbnN0IGNpdHlMYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKTtcbiAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gIFxuICAgIGNvbnN0IHN0YXRlTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXRlXCIpO1xuICAgIHN0YXRlTGFiZWwuaW5uZXJIVE1MID0gXCJMb2FkaW5nLi4uXCI7XG4gIFxuICAgIGdldFdlYXRoZXIoY2l0eSlcbiAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWx1ZS5sb2NhdGlvbi5uYW1lO1xuICAgICAgICBjaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiY2l0eVwiLCByZXN1bHQpO1xuICAgICAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gcmVzdWx0LnRvVXBwZXJDYXNlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjaXR5TGFiZWwuaW5uZXJIVE1MID0gYEVycm9yOiAke2Vycm9yfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICBcbiAgICBnZXRXZWF0aGVyKGNpdHkpXG4gICAgICAudGhlbigodmFsdWUpID0+IHtcbiAgICAgICAgc3RhdGVMYWJlbC5pbm5lckhUTUwgPSB2YWx1ZS5sb2NhdGlvbi5yZWdpb247XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBzdGF0ZUxhYmVsLmlubmVySFRNTCA9IGBFcnJvcjogJHtlcnJvcn1gO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBSZWZyZXNoTG9jYXRpb247IiwiaW1wb3J0IHsgc2V0Q2l0eSB9IGZyb20gXCIuL2NpdHlcIjtcbmltcG9ydCBSZWZyZXNoTG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb24tcmVmcmVzaFwiO1xuXG5jb25zdCBSZWZyZXNoID0gYXN5bmMgZnVuY3Rpb24obmV3Q2l0eSkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LWlucHV0XCIpXG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVtcFwiKTtcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiTG9hZGluZy4uLlwiO1xuXG4gICAgY29uc3QgdGVtcFByb21pc2UgPSBzZXRDaXR5KG5ld0NpdHkpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0ZW1wUHJvbWlzZTtcblxuICAgIHRlbXAuaW5uZXJIVE1MID0gYCR7ZGF0YS5jdXJyZW50LnRlbXBfZn3CsEZgO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIG5ld0NpdHkpO1xuICAgIFJlZnJlc2hMb2NhdGlvbihuZXdDaXR5KTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZyZXNoOyIsImNvbnN0IGdldFdlYXRoZXIgPSBhc3luYyBmdW5jdGlvbiAoY2l0eSkge1xuICBsZXQgZGF0YTtcbiAgbGV0IGVycm9yO1xuICBjb25zdCBjaXR5TGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LWlucHV0XCIpO1xuXG4gIHdoaWxlICghZGF0YSB8fCBlcnJvcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODMwYzg3ODgzN2Q0NDRiNThkMTE2MTMyMTIzMDUwNiZxPSR7Y2l0eX0mZGF5cz0zJmFxaT1ub2AsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvci5tZXNzYWdlKVxuICAgICAgICBjaXR5ID0gY2l0eUxhYmVsLmdldEF0dHJpYnV0ZShcImNpdHlcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGRhdGEuZXJyb3IubWVzc2FnZSlcbiAgICAgICAgZXJyb3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSW5pdFdlYXRoZXIgZnJvbSBcIi4vY29tcG9uZW50cy9pbml0LWZvcmVjYXN0XCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm1cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBcIi4vb3V0cHV0LmNzc1wiO1xuXG5mdW5jdGlvbiBzZXRDb250ZW50UGFyZW50KCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwYXJlbnRcIik7XG4gIHJldHVybiBkaXY7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2V0Q29udGVudFBhcmVudCgpKTtcblxuTGF5b3V0KCk7XG5Gb3JtKCk7XG5Jbml0V2VhdGhlcihcIkF1c3RpblwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==