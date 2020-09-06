/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/NanieApps.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/myApps.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/myApps.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".inverse {\n  background-color: #333;\n  color: white;\n}\n\n.MyApps {\n  color: green;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.accordion {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100% !important;\n}\n\n.mySelect {\n  width: 100px !important;\n  background-color: lightgreen !important;\n}\n\n.myInputInt {\n  width: 75px !important;\n  background-color: lightblue !important;\n}\n\n.myInputFloat {\n  width: 100px !important;\n  background-color: lightblue !important;\n}\n\n.ui.grid.container {\n  width: 100% !important;\n}\n\nbody > .grid.login {\n  height: 100%;\n}\n\ndiv.login {\n  height: 100%;\n}\n\n.login.image {\n  margin-top: -100px;\n}\n\n.login.column {\n  max-width: 450px;\n  display: flex !important;\n  justify-content: center;\n}", "",{"version":3,"sources":["webpack://sass/myApps.scss","webpack://sass/base.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,YAAA;AADF;;AAIA;EACE,YCJW;EDKX,4CAAA;AADF;;AAKA;EACI,gBAAA;EACA,mBAAA;EACA,sBAAA;AAFJ;;AAKA;EACE,uBAAA;EACA,uCAAA;AAFF;;AAKA;EACE,sBAAA;EACA,sCAAA;AAFF;;AAKA;EACE,uBAAA;EACA,sCAAA;AAFF;;AAMA;EACI,sBAAA;AAHJ;;AAOA;EACM,YAAA;AAJN;;AAMA;EACM,YAAA;AAHN;;AAKA;EACM,kBAAA;AAFN;;AAIA;EACM,gBAAA;EACA,wBAAA;EACF,uBAAA;AADJ","sourcesContent":["@use 'base';\r\n\r\n.inverse {\r\n  background-color: base.$primary-color;\r\n  color: white;\r\n}\r\n\r\n.MyApps {\r\n  color: base.$body-color;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\n\r\n.accordion {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100% !important;\r\n}\r\n\r\n.mySelect {\r\n  width: 100px !important;\r\n  background-color: lightgreen !important;\r\n}\r\n\r\n.myInputInt {\r\n  width: 75px !important;\r\n  background-color: lightblue !important;\r\n}\r\n\r\n.myInputFloat {\r\n  width: 100px !important;\r\n  background-color: lightblue !important;\r\n}\r\n\r\n\r\n.ui.grid.container {\r\n    width: 100% !important;\r\n}\r\n\r\n\r\nbody > .grid.login {\r\n      height: 100%;\r\n    }\r\ndiv.login {\r\n      height: 100%;\r\n    }\r\n.login.image {\r\n      margin-top: -100px;\r\n    }\r\n.login.column {\r\n      max-width: 450px;\r\n      display: flex !important;\r\n    justify-content: center;\r\n    }","// _base.scss\r\n$font-stack:    Helvetica, sans-serif;\r\n\r\n$primary-color: #333;\r\n$body-color: green;\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./sass/myApps.scss":
/*!**************************!*\
  !*** ./sass/myApps.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./myApps.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/myApps.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/NanieApps.ts":
/*!**************************!*\
  !*** ./src/NanieApps.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_myApps_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/myApps.scss */ "./sass/myApps.scss");
/* harmony import */ var _sass_myApps_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_myApps_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cMyUI_MainTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cMyUI_MainTab */ "./src/cMyUI_MainTab.ts");
/* harmony import */ var _cMyUI_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cMyUI_login */ "./src/cMyUI_login.ts");




var NanieApps = /** @class */ (function () {
    function NanieApps() {
    }
    NanieApps.prototype.main = function () {
        // ------------------------------------------------------------
        // Point d'entree de la page principale: 'root' 
        // ------------------------------------------------------------
        var rootDiv = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.root');
        var dialog = new _cMyUI_MainTab__WEBPACK_IMPORTED_MODULE_2__["default"]();
        var login = new _cMyUI_login__WEBPACK_IMPORTED_MODULE_3__["default"]();
        // ------------------------------------------------------------
        // Appel de la methode draw de tous les dialogues et affichage
        // ------------------------------------------------------------
        var newHTML = login.draw();
        if ((rootDiv != null) && (newHTML != null)) {
            rootDiv.append(newHTML);
        }
        login.addCallBackOnMyDialog();
        /*
                let newHTML: string = dialog.draw();
                if ((rootDiv != null) && (newHTML != null)) {
                    rootDiv.append(newHTML);
                }
        
                // ------------------------------------------------------------
                // chargement des callback
                // ------------------------------------------------------------
                dialog.addCallBackOnMyDialog(); */
    };
    return NanieApps;
}());
// ------------------------------------------------------------
// Call effectue par le JS du HTML
// ------------------------------------------------------------
var a = new NanieApps();
a.main();


/***/ }),

/***/ "./src/Services/DB/cAjax.ts":
/*!**********************************!*\
  !*** ./src/Services/DB/cAjax.ts ***!
  \**********************************/
/*! exports provided: cAjaxSendMessage, cAjax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cAjaxSendMessage", function() { return cAjaxSendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cAjax", function() { return cAjax; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infra_Uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/Uuid */ "./src/infra/Uuid.ts");


var cAjaxSendMessage = /** @class */ (function () {
    function cAjaxSendMessage() {
        this._args = [];
        this._classe = '';
        this._requete = '';
    }
    cAjaxSendMessage.buildFromString = function (classe, requete, args) {
        var r = new cAjaxSendMessage();
        r._classe = classe;
        r._requete = requete;
        r._args = [];
        if (args != null)
            r._args = args;
        return r;
    };
    cAjaxSendMessage.buildArgsFromString = function (nom, val) {
        var r = {
            'nom': nom,
            'val': val
        };
        return r;
    };
    cAjaxSendMessage.buildArgsFromNum = function (nom, val) {
        var r = {
            'nom': nom,
            'val': val.toString()
        };
        return r;
    };
    cAjaxSendMessage.buildArgsFromArray = function (nom, val) {
        var r = {
            'nom': nom,
            'val': JSON.stringify(val)
        };
        return r;
    };
    return cAjaxSendMessage;
}());

var cAjax = /** @class */ (function () {
    function cAjax() {
        this._internalStatus = 1;
        this._returnedData = '';
        this._uid = '';
        this._uid = (new _infra_Uuid__WEBPACK_IMPORTED_MODULE_1__["default"]()).uuid();
    }
    cAjax.prototype.reset = function () { this._internalStatus = 1; this._returnedData = ''; };
    cAjax.prototype.getStatus = function () { return this._internalStatus; };
    cAjax.prototype.getData = function () { return this._returnedData; };
    cAjax.prototype.postData = function (url, data) {
        var sData;
        if (typeof data === 'string') {
            sData = JSON.parse(data);
        }
        else if (data !== undefined) {
            sData = data;
        }
        else
            throw new Error('Invalid type as input');
        var ajaxConfObj = this.getAjaxConf(this.complete_function, url, sData);
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax(ajaxConfObj);
        console.log('apres ajax');
    };
    cAjax.prototype.postFiles = function (serverURL, data) {
        jQuery.ajax({
            'url': serverURL,
            'data': data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            success: function (data) {
                // alert (data);
            }
        });
    };
    cAjax.prototype.getAjaxConf = function (completefunction, myUrl, data) {
        var retour = {
            'async': false,
            'cache': false,
            'contentType': 'application/json',
            'data': JSON.stringify(data),
            'dataType': 'json',
            'global': true,
            'timeout': 1000 * 60,
            'type': 'POST',
            'url': myUrl,
            'beforeSend': this.beforeSend_function,
            'error': this.error_function,
            'success': this.success_function,
            'complete': completefunction,
            'myAjaxClass': this
        };
        return retour;
    };
    /*
    XHR :
    {
        readyState: 4
        responseJSON: {"type" : "error","data": [{"errno": 9000000}, {"data":"iBRIWSApi##_decodeJSONInput # unable to parse-- invalid json format test it first ...Tr
        responseText: \n\n\n\n{\"type\" : \"error\",\"data\": [{\"errno\": 9000000}, {\"data\":\"iBRIWSApi##_decodeJSONInput # unable to parse -- invalid json format test it
        status: 200
        statuxText: "OK"

        abort: ƒ ( statusText )
        always: ƒ ()
        catch: ƒ ( fn )
        done: ƒ ()
        fail: ƒ ()
        getAllResponseHeaders: ƒ ()
        getResponseHeader: ƒ ( key )
        overrideMimeType: ƒ ( type )
        pipe: ƒ ( )
        progress: ƒ ()
        promise: ƒ(obj)

        setRequestHeader: f()
        statusCode: f (map)
        then  : f(...)
    */
    cAjax.prototype.beforeSend_function = function (xhr) {
        return;
    };
    cAjax.prototype.error_function = function (xhr, status, error) {
        console.log('ajax fail ' + xhr.responseText);
        console.log('ajax fail ' + error);
        // alert  ('ajax fails: See Console.Log');
        var myAjaxClass;
        if ('myAjaxClass' in this) {
            myAjaxClass = this.myAjaxClass;
            myAjaxClass._internalStatus = 1;
        }
    };
    cAjax.prototype.success_function = function (data, status, xhr) {
        console.log('ajax sucess');
        var myAjaxClass;
        if ('myAjaxClass' in this) {
            myAjaxClass = this.myAjaxClass;
            myAjaxClass._internalStatus = 2;
        }
    };
    cAjax.prototype.complete_function = function (xhr, status) {
        console.log('ajax completed');
        var myAjaxClass;
        if ('myAjaxClass' in this) {
            myAjaxClass = this.myAjaxClass;
            if (myAjaxClass._internalStatus != 1) { // pas en erreur
                myAjaxClass._internalStatus = 3;
                var ajaxReponse = JSON.parse(xhr.responseText);
                if (ajaxReponse.type !== undefined) {
                    if (ajaxReponse.type === 'error') {
                        myAjaxClass._internalStatus = 1;
                        myAjaxClass._returnedData = ajaxReponse.data;
                        // alert  ('WS fails: error see inlog !');
                        console.log(myAjaxClass._returnedData);
                    }
                    else {
                        myAjaxClass._internalStatus = 0;
                        myAjaxClass._returnedData = ajaxReponse.data;
                        console.log(myAjaxClass._returnedData);
                    }
                }
                else {
                    myAjaxClass._internalStatus = 1; // retour inconnu en erreur !
                }
            }
        }
    };
    return cAjax;
}());



/***/ }),

/***/ "./src/Services/DB/cExperience.ts":
/*!****************************************!*\
  !*** ./src/Services/DB/cExperience.ts ***!
  \****************************************/
/*! exports provided: cExperience */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cExperience", function() { return cExperience; });
/* harmony import */ var _cAjax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cAjax */ "./src/Services/DB/cAjax.ts");
/* harmony import */ var _infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../infra/cEnvt */ "./src/infra/cEnvt.ts");


var cExperience = /** @class */ (function () {
    function cExperience() {
        this._ajax = new _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjax"]();
        this._ajax = new _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjax"]();
    }
    cExperience.getInstance = function () {
        if (cExperience._singleton == null)
            cExperience._singleton = new cExperience();
        return cExperience._singleton;
    };
    cExperience.getAllPersone = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('personnes', 'getAllPersonnes', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.getAllExperienceInitiale = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllExperienceInitiale', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.createDBExperience = function (experienceId, date, qui) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('experiencestringid', experienceId);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('daterealisationexperience', date);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('faiteparqui', qui);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'create', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            return Number.parseInt(response);
        }
        return 0;
    };
    cExperience.getExperienceUidFromExperienceStringid = function (experiencestringid) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('experiencestringid', experiencestringid);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getExperienceUidFromExperienceStringid', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            return Number.parseInt(response);
        }
        return 0;
    };
    cExperience.getAllExperienceUid = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllExperienceUid', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            resp.forEach(function (element) {
                retour.push(element);
            });
        }
        return retour;
    };
    cExperience.getExperience_InfoGenerale = function (iExpUid) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getExperience_InfoGenerale', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp[0];
        }
        return null;
    };
    cExperience.getExperience_ResultatGenotype = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getExperience_ResultatGenotype', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
    };
    cExperience.getExperience_ResultatTest = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getExperience_ResultatTest', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
    };
    cExperience.getExperience_ResultatImage = function (iExpUid) {
        var me = cExperience.getInstance();
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('uid', iExpUid);
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getExperience_ResultatImage', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var resp = JSON.parse(response);
            return resp;
        }
        return null;
    };
    cExperience.uploadFiles = function (id, files) {
        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            var f = files.item(i);
            if (f == null)
                continue;
            data.append('file-' + i, f, f.name);
        }
        var me = cExperience.getInstance();
        me._ajax.reset();
        data.append('experienceId', id.toString());
        data.append('_classe', 'experience');
        data.append('_requete', 'uploadFile');
        me._ajax.postFiles(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), data);
    };
    cExperience.updateDBExperience = function (experience) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = -1;
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('idexperience', experience.idexperience);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('marquage', experience.marquage);
        args.push(arg1);
        if (experience.NbGenotype != null) {
            arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('NbGenotype', experience.NbGenotype);
            args.push(arg1);
        }
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('SComparatif', experience.SComparatif);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromNum('SGeneral', experience.SGeneral);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('typedetest', experience.typedetest);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('territoire', experience.territoire);
        args.push(arg1);
        if (experience.Genotype != null) {
            arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromArray('Genotype', experience.Genotype);
            args.push(arg1);
        }
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'update', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            console.log(response);
        }
        return retour;
    };
    cExperience.dumpFromDB = function (id, _idResultatDB) {
        throw new Error('Method not implemented.');
    };
    cExperience.getAllTestType = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllTestTypes', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.getAllMarquage = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllMarquage', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.getAllTerritoire = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllTerritoire', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.getAllchromosome1 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome2 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome3 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosome4 = function () {
        return cExperience.getAllchromosomeXX();
    };
    cExperience.getAllchromosomeXX = function () {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'getAllChromosomes', null);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if (Array.isArray(jsonObject)) {
                jsonObject.forEach(function (element) {
                    retour.push(element);
                });
            }
        }
        return retour;
    };
    cExperience.create_iResultatMessage = function () {
        var retour = {
            'idexperience': 0,
            'experiencestringid': '',
            'Genotype': [],
            'marquage': '',
            'territoire': '',
            'NbGenotype': 0,
            'SComparatif': 0,
            'SGeneral': 0,
            'typedetest': ''
        };
        return retour;
    };
    cExperience.create_iGenotypeMessage = function () {
        var retour = {
            'chromosome1': '',
            'chromosome2': '',
            'chromosome3': '',
            'chromosome4': '',
            'nbechantillon': 0
        };
        return retour;
    };
    cExperience._singleton = null;
    return cExperience;
}());



/***/ }),

/***/ "./src/cMyUI.ts":
/*!**********************!*\
  !*** ./src/cMyUI.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _infra_cEnvt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infra/cEnvt */ "./src/infra/cEnvt.ts");
/* harmony import */ var _infra_cControler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infra/cControler */ "./src/infra/cControler.ts");
/* harmony import */ var _infra_cLogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infra/cLogger */ "./src/infra/cLogger.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var cMyUI = /** @class */ (function () {
    function cMyUI(id) {
        this._idResultatDB = 'idResultatDB';
        if (id == null)
            id = 'cMyUI';
        this._logger = new _infra_cLogger__WEBPACK_IMPORTED_MODULE_2__["cLogger"](_infra_cEnvt__WEBPACK_IMPORTED_MODULE_0__["default"].getDebugLevel(), id);
        this._ctrl = _infra_cControler__WEBPACK_IMPORTED_MODULE_1__["cControler"].getIntance();
    }
    cMyUI.prototype.addCallBackOnMessage = function (messageId) {
        if (messageId == null) {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.message .close')
                .on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(this)
                    .closest('.message')
                    .transition('fade');
            });
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(messageId)
                .on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3___default()(this)
                    .closest('.message')
                    .transition('fade');
            });
        }
    };
    return cMyUI;
}());
/* harmony default export */ __webpack_exports__["default"] = (cMyUI);


/***/ }),

/***/ "./src/cMyUI_MainTab.ts":
/*!******************************!*\
  !*** ./src/cMyUI_MainTab.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
/* harmony import */ var _cMyUI_MainTab_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cMyUI_MainTab_create */ "./src/cMyUI_MainTab_create.ts");
/* harmony import */ var _cMyUI_MainTab_consultation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cMyUI_MainTab_consultation */ "./src/cMyUI_MainTab_consultation.ts");
/* harmony import */ var _cMyUI_MainTab_aucasou__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cMyUI_MainTab_aucasou */ "./src/cMyUI_MainTab_aucasou.ts");
/* harmony import */ var _cMyUI_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cMyUI_logout */ "./src/cMyUI_logout.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var cMyUI_MainTab = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab, _super);
    function cMyUI_MainTab() {
        var _this = _super.call(this, 'cMyUI_MainTab') || this;
        // -------------------------------------
        // les tag de mon dialog pour les tab (le menu)
        // -------------------------------------
        _this._idTabPrefix = '_id_cMyUI_MainTab_TAB_';
        // -------------------------------------
        // les tag de mon dialog pour les CONTENU des tab (le content)
        // -------------------------------------
        _this._idContainerPrefix = '_id_cMyUI_MainTab_CONTAINER_';
        _this._createDialog = new _cMyUI_MainTab_create__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this._consultDialog = new _cMyUI_MainTab_consultation__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this._AuCasOuDialog = new _cMyUI_MainTab_aucasou__WEBPACK_IMPORTED_MODULE_3__["default"]();
        _this._logout = new _cMyUI_logout__WEBPACK_IMPORTED_MODULE_4__["default"]();
        _this._idTabCreation = _this._idTabPrefix + "Creation";
        _this._idTabConsultation = _this._idTabPrefix + "Cconsultation";
        _this._idTabAuCasOuTab = _this._idTabPrefix + "AuCasOu";
        _this._idTabLogout = _this._idTabPrefix + "LogOut";
        _this._idContainerCreation = _this._idContainerPrefix + "Creation";
        _this._idContainerConsultation = _this._idContainerPrefix + "Cconsultation";
        _this._idContainerAuCasOuTab = _this._idContainerPrefix + "AuCasOu";
        _this._idContainerLogout = _this._idContainerPrefix + "LogOut";
        return _this;
    }
    cMyUI_MainTab.prototype.addCallBackOnMyDialog = function () {
        var me = this;
        // activation des menus semantic UI
        $('#infotabs .menu .item').tab('change tab', 'Creation');
        // On click des tabs affichages des menu des tabs 
        $("#" + me._idTabCreation).on('click', function (event) {
            // nettoyage des container
            $(".myDialogTopContainer").empty();
            // affichage du contenu de mon container
            $("#" + me._idContainerCreation).append(me._createDialog.draw());
            // armement des callbacks de mon container
            me._createDialog.addCallBackOnMyDialog();
        });
        $("#" + me._idTabConsultation).on('click', function (event) {
            $(".myDialogTopContainer").empty();
            $("#" + me._idContainerConsultation).append(me._consultDialog.draw());
            me._consultDialog.addCallBackOnMyDialog();
        });
        $("#" + me._idTabAuCasOuTab).on('click', function (event) {
            $(".myDialogTopContainer").empty();
            $("#" + me._idContainerAuCasOuTab).append(me._AuCasOuDialog.draw());
            me._AuCasOuDialog.addCallBackOnMyDialog();
        });
        $("#" + me._idTabLogout).on('click', function (event) {
            $(".myDialogTopContainer").empty();
            $("#" + me._idContainerLogout).append(me._logout.draw());
            me._logout.addCallBackOnMyDialog();
        });
        $("#" + me._idTabCreation).trigger('click');
    };
    cMyUI_MainTab.prototype.draw = function () {
        // -----------------------------------------------------
        // je n'affiche que ma page (le menu)
        // -----------------------------------------------------
        var retour = "\n            <div id=\"infotabs\">\n                <div class=\"ui menu\">\n                    <div class=\"container\">\n                        <a class=\"item active \" data-tab=\"Creation\" id=\"" + this._idTabCreation + "\">\n                            <span class=\"mobile hidden\">Cr&eacute;ation</span>\n                        </a>\n                        <a class=\"item\"  data-tab=\"Consultation\" id=\"" + this._idTabConsultation + "\">\n                            <span class=\"mobile hidden\">Consultation</span>\n                        </a>\n                        <a class=\"item\"  data-tab=\"Aucasou\" id=\"" + this._idTabAuCasOuTab + "\">\n                            <span class=\"mobile hidden\">Au cas o&ugrave; ...</span>\n                        </a>\n                    </div>\n                    <div class=\"ui menu right\">\n                        <a class=\"item\" data-tab=\"Logout\" id=\"" + this._idTabLogout + "\">\n                            <span class=\"mobile hidden\">Logout</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"ui tab basic active segment myDialogTopContainer\" data-tab=\"Creation\" id=\"" + this._idContainerCreation + "\"></div>\n            <div class=\"ui tab basic segment myDialogTopContainer\" data-tab=\"Consultation\" id=\"" + this._idContainerConsultation + "\">Consultation</div>\n            <div class=\"ui tab basic segment myDialogTopContainer\" data-tab=\"Aucasou\" id=\"" + this._idContainerAuCasOuTab + "\">Aucasou</div>\n            <div class=\"ui tab basic segment myDialogTopContainer\" data-tab=\"Logout\" id=\"" + this._idContainerLogout + "\">Logout</div>\n            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n            ";
        return retour;
    };
    return cMyUI_MainTab;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab);


/***/ }),

/***/ "./src/cMyUI_MainTab_aucasou.ts":
/*!**************************************!*\
  !*** ./src/cMyUI_MainTab_aucasou.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var cMyUI_MainTab_aucasou = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_aucasou, _super);
    function cMyUI_MainTab_aucasou() {
        return _super.call(this, 'cMyUI_MainTab_aucasou') || this;
    }
    cMyUI_MainTab_aucasou.prototype.addCallBackOnMyDialog = function () {
    };
    cMyUI_MainTab_aucasou.prototype.draw = function () {
        var retour = "Pas encore code";
        return retour;
    };
    return cMyUI_MainTab_aucasou;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_aucasou);


/***/ }),

/***/ "./src/cMyUI_MainTab_consultation.ts":
/*!*******************************************!*\
  !*** ./src/cMyUI_MainTab_consultation.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/DB/cExperience */ "./src/Services/DB/cExperience.ts");
/* harmony import */ var _infra_cTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infra/cTools */ "./src/infra/cTools.ts");
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var cMyUI_MainTab_consultation = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_consultation, _super);
    function cMyUI_MainTab_consultation() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = 'OKButton';
        return _this;
    }
    cMyUI_MainTab_consultation.prototype.addCallBackOnMyDialog = function () {
        var me = this;
        $(".voir").on('click', function (event) {
            // afiicher dans <div id="${this._idResultatDB}"></div>
            $("#" + me._idResultatDB).empty();
            event.stopImmediatePropagation();
            var VoirButtonId = $(event.target).attr('id');
            var sExpUid = VoirButtonId.substring(me._idOKButton.length + 1);
            var iExpUid = Number.parseInt(sExpUid);
            var infoGeneraleExperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperience_InfoGenerale(iExpUid);
            var ExperienceStringId = "----";
            if (infoGeneraleExperience != null)
                ExperienceStringId = infoGeneraleExperience.experiencestringid;
            var infoResultatExperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperience_ResultatTest(iExpUid);
            var infoGenomeExperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperience_ResultatGenotype(iExpUid);
            var myUIForConsult = '';
            if ((infoGenomeExperience != null) && (infoResultatExperience != null)) {
                var infoResultatExperience_0 = infoResultatExperience[0];
                var uneInfoGenomeExperience = void 0;
                if ((infoResultatExperience_0 === undefined) || (infoResultatExperience_0.idexperience === undefined)) {
                    // pas de data associe a cette experience
                    myUIForConsult = "\n                        <div class=\"ui labeled yellow input\">\n                            <p>Pas de donnees d'experience associee <br/></p>\n                        </div> ";
                }
                else {
                    myUIForConsult = "\n                        <div class=\"ui labeled input\">\n                            <div class=\"ui label\">\n                                Experience Id\n                            </div>\n                            <p>" + ExperienceStringId + "  [ID en DB: " + infoResultatExperience_0.idexperience + "]</p>\n                        </div>\n                        <table class=\"ui celled table\">\n                        <thead>\n                            <tr>\n                                <th>Genotype</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>\n                                    <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                            </tr>\n                        </thead>\n                        <tbody>";
                    for (var i = 0; i < infoGenomeExperience.length; i++) {
                        uneInfoGenomeExperience = infoGenomeExperience[i];
                        if (i == 0) {
                            myUIForConsult += "\n                            <tr>\n                                <td>G " + (i + 1) + "</td><td>" + uneInfoGenomeExperience.chromosome1 + "</td><td>" + uneInfoGenomeExperience.chromosome2 + "</td><td>" + uneInfoGenomeExperience.chromosome3 + "</td><td>" + uneInfoGenomeExperience.chromosome4 + "</td><td>" + uneInfoGenomeExperience.nbechantillon + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.marquage + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.SGeneral + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.SComparatif + "</td>\n                                    <td rowspan=\"" + infoGenomeExperience.length + "\">" + infoResultatExperience_0.typedetest + "</td>\n                            </tr>";
                        }
                        else {
                            myUIForConsult += "\n                            <tr>\n                                <td>G " + (i + 1) + "</td><td>" + uneInfoGenomeExperience.chromosome1 + "</td><td>" + uneInfoGenomeExperience.chromosome2 + "</td><td>" + uneInfoGenomeExperience.chromosome3 + "</td><td>" + uneInfoGenomeExperience.chromosome4 + "</td><td>" + uneInfoGenomeExperience.nbechantillon + "</td>\n                        </tr>";
                        }
                    }
                    myUIForConsult += "\n                        </tbody>\n                        </table>\n                    ";
                }
                var infoFileExperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperience_ResultatImage(iExpUid);
                if ((infoFileExperience != null) && (infoFileExperience.length > 0)) {
                    myUIForConsult += "\n                        <div class=\"ui labeled input\" >\n                            <div class=\"ui label\" >\n                                Images\n                            </div>\n                        </div>\n                        <table class=\"ui celled table\">\n                            <tbody>";
                    for (var i = 0; i < infoFileExperience.length; i++) {
                        myUIForConsult += "<tr>\n                            <td>" + infoFileExperience[i].nom + "</td>\n                            <td>" + infoFileExperience[i].path + "</td>\n                            <td><img src=\"" + infoFileExperience[i].url + "\" alt=\"" + infoFileExperience[i].path + "\" width=\"400\" height=\"341\" title=\"image " + i + "\"></td>\n                        </tr>";
                    }
                    myUIForConsult += "\n                            </tbody>\n                        </table>";
                }
                else {
                    myUIForConsult += "\n                        <div class=\"ui labeled input\" >\n                            <div class=\"ui label yellow\" >\n                                Pas d'image associees a cette experiences\n                            </div>\n                        </div>";
                }
            }
            $("#" + me._idResultatDB).append(myUIForConsult);
            //            let y: iExperienceFilesMessage = cExperience.getExperience_FilesURL(iExpUid);
        });
    };
    cMyUI_MainTab_consultation.prototype.draw = function () {
        var retour;
        var allExperienceuid = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllExperienceUid();
        var x;
        var id_territoire_select = 'id_territoire_select';
        var id_selectchromosome = 'id_select_chrommosome';
        var infosForHTML = { 'id': "" + id_territoire_select };
        var selectTerritoire = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllTerritoire(), infosForHTML);
        var selectchromosome = [];
        for (var i = 0; i < 4; i++) {
            var infosForHTML_1 = { 'id': id_selectchromosome + "_" + i };
            if (i == 0)
                selectchromosome.push(_infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome1(), infosForHTML_1));
            if (i == 1)
                selectchromosome.push(_infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome2(), infosForHTML_1));
            if (i == 2)
                selectchromosome.push(_infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome3(), infosForHTML_1));
            if (i == 3)
                selectchromosome.push(_infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome4(), infosForHTML_1));
        }
        /*    SELECT exp.uid FROM`experience` exp
            INNER JOIN`experience_listegenotype` geno ON geno.idexperience = exp.uid
            INNER JOIN`experience_resultatdestests` res ON res.idexperience = exp.uid
            where((res.territoire = 'Vg') and(res.SComparatif < 2) and(res.SComparatif < 2)
    and(geno.chromosome1 = 'Pink') and(geno.chromosome2 = 'Decl')) */
        retour = "\n           <form class=\"pure-form\">\n                <fieldset class=\"pure-group pure-input-1-4\" style=\"border-style: none;\">\n                    <label for=\"" + id_territoire_select + "\">Territoire</label>\n                    " + selectTerritoire + "\n                </fieldset>\n                <fieldset>\n                    <legend>selection genotype</legend>";
        for (var i = 0; i < 4; i++) {
            retour += "\n                <label for=\"" + id_selectchromosome + "_" + i + "\">chromosome" + (i + 1) + "</label>\n                " + selectchromosome[i] + "\n                ";
        }
        retour += "\n                </fieldset>\n                <fieldset class=\"pure-group pure-input-1-4\"  style=\"border-style: none;\">\n                    <label for=\"Scomparatif_input\">S comparatif (&lt; 0.05)</label>\n                    <input id=\"Scomparatif_input\" type=\"number\" placeholder=\"1.0e-2\" min=\"0\" max=\"0.05\" step=\"any\"/>\n                </fieldset>\n                <fieldset class=\"pure-group pure-input-1-4\"  style=\"border-style: none;\">\n                    <button class=\"ui button primary voir\" type=\"submit\" id=\"toto\">Cherche ...</button></td>\n                </fieldset>\n            </form>\n            <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Experience Num</th><th>ExperienceID</th><th>Qui</th> <th>Quand</th><th>Date Enregistrement</th><th>Voir</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < allExperienceuid.length; i++) {
            x = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperience_InfoGenerale(allExperienceuid[i]);
            if (x != null) {
                retour += "\n                    <tr>\n                        <td>" + allExperienceuid[i] + "</td><td>" + x.experiencestringid + "</td><td>" + x.faiteparqui + "</td><td>" + x.daterealisationexperience + "</td><td>" + x.dateinsert + "</td><td>\n                        <button class=\"ui button green voir\" type=\"submit\" id=\"" + this._idOKButton + "_" + allExperienceuid[i] + "\">Voir</button></td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n        ";
        return retour;
    };
    return cMyUI_MainTab_consultation;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_consultation);


/***/ }),

/***/ "./src/cMyUI_MainTab_create.ts":
/*!*************************************!*\
  !*** ./src/cMyUI_MainTab_create.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/DB/cExperience */ "./src/Services/DB/cExperience.ts");
/* harmony import */ var _infra_cTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infra/cTools */ "./src/infra/cTools.ts");
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var cMyUI_MainTab_create = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_create, _super);
    function cMyUI_MainTab_create() {
        var _this = _super.call(this, 'cMyUI_MainTab_create') || this;
        _this._idCreationOKButton = 'cMyUI_MainTab_create_SaisieExperience_OKButton';
        _this._idCreationExperienceGroupOfInfo = 'cMyUI_MainTab_create_SaisieExperience_ExpIDGroup';
        _this._idCreationDateExp = 'cMyUI_MainTab_create_SaisieExperience_DateExp';
        _this._idCreationQui = 'cMyUI_MainTab_create_SaisieExperience_Qui';
        _this._idCreationFiles = 'cMyUI_MainTab_create_SaisieExperience_Files';
        _this._idCreationDivForMessageInfo = 'cMyUI_MainTab_create_MainTab_DivForForm_Info';
        _this._idCreationExperienceNomPrefixe = 'cMyUI_MainTab_create_MainTab_UI_Info_ExperienceAsLettre';
        _this._idCreationExperienceExperiencetype = 'cMyUI_MainTab_create_MainTab_UI_Info__idExperienceExperiencetype';
        _this._idCreationExperienceClef = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceClef';
        _this._idCreationExperienceNumero = 'cMyUI_MainTab_create_MainTab_UI_Info_idExperienceNumero';
        _this._My_Message_Classe = 'ClasseDesMessagesInfo';
        _this._idUpdateOKButton = 'cMyUI_MainTab_ajout_idOKButton';
        _this._idUpdateInputExp = 'cMyUI_MainTab_ajout_idInputExp';
        _this._idUpdateSelectOnchromosome1 = 'cMyUI_MainTab_ajout_idSelectOnchromosome1';
        _this._idUpdateSelectOnchromosome2 = 'cMyUI_MainTab_ajout_idSelectOnchromosome2';
        _this._idUpdateSelectOnchromosome3 = 'cMyUI_MainTab_ajout_idSelectOnchromosome3';
        _this._idUpdateSelectOnchromosome4 = 'cMyUI_MainTab_ajout_idSelectOnchromosome4';
        _this._idUpdateSelectOnTestType = 'cMyUI_MainTab_ajout_idSelectOnTestType';
        _this._idUpdateSelectOnMarquage = 'cMyUI_MainTab_ajout_idSelectOnMarquage';
        _this._idUpdateSelectOnTerritoire = 'cMyUI_MainTab_ajout_idSelectOnTerritoire';
        _this._idUpdateInputNbEchantillon = 'cMyUI_MainTab_ajout_idInputNbEchantillon';
        _this._idUpdateInputSGeneral = 'cMyUI_MainTab_ajout__idInputSGeneral';
        _this._idUpdateInputSComparatif = 'cMyUI_MainTab_ajout_idInputSComparatif';
        // ----------------------------------------------------
        // Nb genotype par defaut
        // ----------------------------------------------------
        _this._nbGenotype = 4;
        return _this;
    }
    cMyUI_MainTab_create.prototype.draw = function () {
        var retour = '';
        // affichage de la zone de creation de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Cr&eacute;ation d\'une experience en base </legend>';
        retour += this.drawCreateDialog();
        retour += '</fieldset></div>';
        // Le separateur
        retour += '<div class="ui horizontal divider">G&eacute;notypes associ&eacute;s</div>';
        // affichage de la zone de mise a jour de l'experience
        retour += '<div style="margin-left: 10px;"><fieldset><legend> Mise &agrave; jour des g&eacute;notypes associ&eacute;s &agrave; une experience en base </legend>';
        retour += this.drawUpdateDialog();
        retour += '</fieldset></div>';
        return retour;
    };
    cMyUI_MainTab_create.prototype.drawCreateDialog = function () {
        // -----------------------------------------------
        // recup de la liste des personnes qui peuvent realiser une experience, et creation du select UI
        // -----------------------------------------------
        var DefaultPersonneNom = '';
        var DefaultPersonneNomInitiale = '';
        var allPersonnesOption = '';
        var allPersonnes = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllPersone();
        var selected = 'selected';
        for (var i = 0; i < allPersonnes.length; i++) {
            selected = '';
            if (i == 0) {
                selected = 'selected';
                DefaultPersonneNom = allPersonnes[i];
                DefaultPersonneNomInitiale = DefaultPersonneNom.charAt(0);
            }
            allPersonnesOption += "<option value=\"" + allPersonnes[i] + "\" " + selected + ">" + allPersonnes[i] + "</option>";
        }
        // -----------------------------------------------
        // recup des initales possibles d'une experience, et creation du select UI
        // -----------------------------------------------
        var AllExperienceInitialeOption = '';
        var AllExperienceInitiale = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllExperienceInitiale();
        for (var i = 0; i < AllExperienceInitiale.length; i++) {
            selected = '';
            if (i == 0)
                selected = 'selected';
            AllExperienceInitialeOption += "<option value=\"" + AllExperienceInitiale[i] + "\" " + selected + ">" + AllExperienceInitiale[i] + "</option>";
        }
        // -----------------------------------------------
        // creation du dialogue
        // -----------------------------------------------
        var retour = "\n            <form class=\"ui form\">\n                <!-- Experience ID -->\n                <div class=\"field\">\n                    <label>Experience Id</label>\n                    <div id=\"" + this._idCreationExperienceGroupOfInfo + "\">\n                        <div class=\"ui left labeled input\">\n                            <input type=\"text\" value=\"" + DefaultPersonneNomInitiale + "\" id=\"" + this._idCreationExperienceNomPrefixe + "\">\n                            <input type=\"number\" value=\"0\" id=\"" + this._idCreationExperienceNumero + "\">\n                            <p style=\"font-size: x-large; margin:auto;\">-</p>\n                            <select class=\"ui compact selection dropdown\" id=\"" + this._idCreationExperienceExperiencetype + "\">\n                                " + AllExperienceInitialeOption + "\n                            </select>\n                            <input type=\"number\" value=\"0\" id=\"" + this._idCreationExperienceClef + "\">\n                        </div>\n                    </div>\n                </div>\n\n                <!-- date de le Experience -->\n                <div class=\"field\">\n                    <label>Date de l'experience</label>\n                    <input type=\"date\" name=\"date-exp\" value=\"2020-10-01\" min=\"2020-10-01\" id=\"" + this._idCreationDateExp + "\"/>\n                </div>\n\n                <!-- qui a fait le Experience -->\n                <div class=\"field\">\n                    <label>Qui a realise l'experience?</label>\n                    <select class=\"ui compact selection dropdown\" id=\"" + this._idCreationQui + "\">\n                        " + allPersonnesOption + "\n                    </select>\n                </div>\n\n                <!-- Fichier associed  -->\n                <div class=\"field\">\n                    <label>Lien vers les images</label>\n                    <input type=\"file\" name=\"expImage\" accept=\"*\" multiple id=\"" + this._idCreationFiles + "\">\n                </div>\n\n                <!-- Zone a message  -->\n                <div id=\"" + this._idCreationDivForMessageInfo + "\"></div>\n\n                <!-- Validation  -->\n                <button class=\"ui button pink right floated\" type=\"submit\" id=\"" + this._idCreationOKButton + "\">Cr&eacute;ation de l'exp&eacute;rience !</button>\n            </form>";
        return retour;
    };
    cMyUI_MainTab_create.prototype.drawUpdateDialog = function () {
        var retour;
        // ----------------------------------------------------
        // Nb genotype par defaut
        // ----------------------------------------------------
        var nbLigne = this._nbGenotype;
        // ----------------------------------------------------
        // Les infos a afficher dans l'UI 
        // ----------------------------------------------------
        var infosForHTML;
        var selectchromosome1 = ['', '', '', ''];
        var selectchromosome2 = ['', '', '', ''];
        var selectchromosome3 = ['', '', '', ''];
        var selectchromosome4 = ['', '', '', ''];
        var InputNbEchantillon = ['', '', '', ''];
        var selectTypeTest;
        var selectMarquage;
        var selectTerritoire;
        var InputSGeneral;
        var InputSComparatif;
        // ----------------------------------------------------
        // Recup des info en DB et construction des Select generiques
        // ----------------------------------------------------
        for (var i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id': this._idUpdateSelectOnchromosome1 + "_" + i };
            selectchromosome1[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome1(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idUpdateSelectOnchromosome2 + "_" + i };
            selectchromosome2[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome2(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idUpdateSelectOnchromosome3 + "_" + i };
            selectchromosome3[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome3(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idUpdateSelectOnchromosome4 + "_" + i };
            selectchromosome4[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome4(), infosForHTML);
            infosForHTML = { 'class': 'myInputInt', 'type': 'number', 'id': this._idUpdateInputNbEchantillon + "_" + i };
            InputNbEchantillon[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('0', infosForHTML);
        }
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idUpdateInputSGeneral, 'placeholder': '1.79e-11' };
        InputSGeneral = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idUpdateInputSComparatif, 'placeholder': '1.79e-11' };
        InputSComparatif = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idUpdateSelectOnTestType };
        selectTypeTest = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllTestType(), infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idUpdateSelectOnMarquage };
        selectMarquage = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllMarquage(), infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idUpdateSelectOnTerritoire };
        selectTerritoire = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllTerritoire(), infosForHTML);
        // ----------------------------------------------------
        // Contructin de l'UI
        // ----------------------------------------------------
        retour = "\n            <form class=\"ui form\">\n                <button class=\"ui button pink right floated\" type=\"submit\" id=\"" + this._idUpdateOKButton + "\">OK !</button>\n                <div class=\"ui labeled input\">\n                    <div class=\"ui label\">\n                        Experience Id\n                    </div>\n                    <!-- Recup du nom de l'exprience de l'UI OU par callback ATTENTION-->\n                    <input type=\"text\" placeholder=\"[lettre][chiffre]-[lettre][chiffre]\" id=\"" + this._idUpdateInputExp + "\"/>\n                </div>\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Genotype</th><th>territoire</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>\n                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td>\n                            <!-- le territoire de tous les chromosomes -->\n                            <td rowspan=\"" + nbLigne + "\">" + selectTerritoire + "</td>\n\n                            <!-- les chromosomes -->\n                            <td>" + selectchromosome1[i] + "</td><td>" + selectchromosome2[i] + "</td><td>" + selectchromosome3[i] + "</td><td>" + selectchromosome4[i] + "</td> <td>" + InputNbEchantillon[i] + "</td>\n\n                            <!-- les info de tous les chromo -->\n                            <td rowspan=\"" + nbLigne + "\">" + selectMarquage + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSGeneral + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSComparatif + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectTypeTest + "</td>\n                    </tr>";
            }
            else {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td>\n\n                        <!-- les chromosomes -->\n                        <td>" + selectchromosome1[i] + "</td><td>" + selectchromosome2[i] + "</td><td>" + selectchromosome3[i] + "</td><td>" + selectchromosome4[i] + "</td><td>" + InputNbEchantillon[i] + "</td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n            </form>\n        ";
        return retour;
    };
    cMyUI_MainTab_create.prototype.addCallBackOnMyDialog = function () {
        this.addCallBackOnMyDialog_create();
        this.addCallBackOnMyDialog_ajout();
        return;
    };
    cMyUI_MainTab_create.prototype.addCallBackOnMyDialog_ajout = function () {
        // activer les sementicUI du dialog
        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');
        var me = this;
        $("#" + me._idCreationExperienceGroupOfInfo).on('change', function (event) {
            var lettreNomPrefixExpID = $("#" + me._idCreationExperienceNomPrefixe).val();
            var chiffreNumExpId = $("#" + me._idCreationExperienceNumero).val();
            var lettreTypeExpId = $("#" + me._idCreationExperienceExperiencetype).val();
            var chiffreClefExpId = $("#" + me._idCreationExperienceClef).val();
            var ExpIdName = lettreNomPrefixExpID + chiffreNumExpId.toString() + '-' + lettreTypeExpId + chiffreClefExpId.toString();
            $("#" + me._idUpdateInputExp).val(ExpIdName);
        });
        $("#" + me._idCreationOKButton).on('click', function (event) {
            var allInfosFromPage = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iResultatMessage();
            allInfosFromPage.experiencestringid = $("#" + me._idUpdateInputExp).val();
            allInfosFromPage.idexperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);
            allInfosFromPage.marquage = $("#" + me._idUpdateSelectOnMarquage).val();
            allInfosFromPage.territoire = $("#" + me._idUpdateSelectOnTerritoire).val();
            allInfosFromPage.SComparatif = $("#" + me._idUpdateInputSComparatif).val();
            allInfosFromPage.SGeneral = $("#" + me._idUpdateInputSGeneral).val();
            allInfosFromPage.typedetest = $("#" + me._idUpdateSelectOnTestType).val();
            var nbValuatedGenotype = 0;
            for (var i = 0; i < me._nbGenotype; i++) {
                var allInfosFromGenotype = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iGenotypeMessage();
                allInfosFromGenotype.chromosome1 = $("#" + me._idUpdateSelectOnchromosome1 + "_" + i).val();
                allInfosFromGenotype.chromosome2 = $("#" + me._idUpdateSelectOnchromosome2 + "_" + i).val();
                allInfosFromGenotype.chromosome3 = $("#" + me._idUpdateSelectOnchromosome3 + "_" + i).val();
                allInfosFromGenotype.chromosome4 = $("#" + me._idUpdateSelectOnchromosome4 + "_" + i).val();
                allInfosFromGenotype.nbechantillon = $("#" + me._idUpdateInputNbEchantillon + "_" + i).val();
                if ((allInfosFromPage.Genotype != null) && (allInfosFromGenotype.nbechantillon > 0)) {
                    allInfosFromPage.Genotype.push(allInfosFromGenotype);
                    nbValuatedGenotype++;
                }
            }
            allInfosFromPage.NbGenotype = nbValuatedGenotype;
            var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].updateDBExperience(allInfosFromPage);
            event.stopImmediatePropagation();
            return false;
        });
    };
    cMyUI_MainTab_create.prototype.addCallBackOnMyDialog_create = function () {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
    };
    cMyUI_MainTab_create.prototype.lienExprienceId_NomManip = function () {
        var me = this;
        $("#" + this._idCreationQui).on('change', function (event) {
            var val = $("#" + me._idCreationQui).val();
            var valEntete = val.charAt(0);
            $("#" + me._idCreationExperienceNomPrefixe).val(valEntete);
            $("#" + me._idCreationExperienceGroupOfInfo).trigger('change');
        });
    };
    // ---------------------------------------------------------------------------
    // Callback du OK
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ---------------------------------------------------------------------------
    cMyUI_MainTab_create.prototype.checkFormContenu = function () {
        var me = this;
        $("#" + this._idCreationOKButton).on('click', function (event) {
            // les 3 champs a controler
            var date = $("#" + me._idCreationDateExp).val();
            var qui = $("#" + me._idCreationQui).val();
            var files = $("#" + me._idCreationFiles).prop('files');
            // errurs si 1 manque
            var onError = false;
            var onErrorMessage = "<div class=\"ui negative message " + me._My_Message_Classe + "\"><i class=\"close icon\"></i>";
            if (date.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Pb de date\n                        </div>\n                        <p> Il faut choisir une date </p>";
                onError = true;
            }
            if (files.length < 1) {
                onErrorMessage += "\n                        <div class=\"header\">\n                            Image\n                        </div>\n                        <p> Il faut choisir au moins une image </p>";
                onError = true;
            }
            onErrorMessage += '</div>';
            // affiche de l'erreur
            if (onError) {
                $("#" + me._idCreationDivForMessageInfo).append(onErrorMessage);
                $("#" + me._idCreationDivForMessageInfo).on('click', function () {
                    $("." + me._My_Message_Classe).remove();
                });
            }
            else {
                // envoie en DB
                var experienceId = '';
                experienceId += $("#" + me._idCreationExperienceNomPrefixe).val();
                experienceId += $("#" + me._idCreationExperienceNumero).val();
                experienceId += '-' + $("#" + me._idCreationExperienceExperiencetype).val();
                experienceId += $("#" + me._idCreationExperienceClef).val();
                var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].createDBExperience(experienceId, date, qui);
                if (id > 0) {
                    _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].uploadFiles(id, files);
                    var onOKMessage = "<div class=\"ui positive message " + me._My_Message_Classe + "\"><i class=\"close icon\"></i>";
                    onOKMessage += "\n                                <div class=\"header\">\n                                    Creation experience en DB -- OK\n                                </div>\n                                <p> " + experienceId + ", " + date + ", " + qui + ", " + files + " </p>";
                    onOKMessage += '</div>';
                    $("#" + me._idCreationDivForMessageInfo).append(onOKMessage);
                    $("#" + me._idCreationDivForMessageInfo).on('click', function () {
                        $("." + me._My_Message_Classe).remove();
                    });
                    me._ctrl.setLastExp(experienceId, id);
                }
                else {
                    alert('Impossible de mettre en base cette demande');
                }
            }
            event.stopPropagation();
            return false;
        });
    };
    return cMyUI_MainTab_create;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_create);


/***/ }),

/***/ "./src/cMyUI_login.ts":
/*!****************************!*\
  !*** ./src/cMyUI_login.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var cMyUI_login = /** @class */ (function (_super) {
    __extends(cMyUI_login, _super);
    function cMyUI_login() {
        return _super.call(this, 'cMyUI_login') || this;
    }
    cMyUI_login.prototype.addCallBackOnMyDialog = function () {
        $('#root').addClass('login');
    };
    cMyUI_login.prototype.draw = function () {
        var retour = "\n            <div class=\"ui middle aligned center aligned grid login\">\n                <div class=\"column login\">\n                    <h2 class=\"ui image header login\">\n                        <img src=\"images/login.png\" style=\"border-radius: 8px;\n                                    object-position: center;\n                                    height: auto;\n                                    display: block;\n                                    margin-left: auto;\n                                    margin-right: auto;\n                                    width: 50%;\" />\n                        <div class=\"content\">\n                            Se connecter\n                        </div>\n                    </h2>\n                    <form action=\"\" method=\"get\" class=\"ui large form\">\n                    <div class=\"ui  secondary  segment\">\n                        <div class=\"field\">\n                        <div class=\"ui left icon input\">\n                            <i class=\"user icon\"></i>\n                            <input type=\"text\" name=\"email\" placeholder=\"E-mail address\">\n                        </div>\n                        </div>\n                        <div class=\"field\">\n                        <div class=\"ui left icon input\">\n                            <i class=\"lock icon\"></i>\n                            <input type=\"password\" name=\"password\" placeholder=\"Password\">\n                        </div>\n                        </div>\n                        <div class=\"ui fluid large teal submit button\">Login</div>\n                    </div>\n\n                    <div class=\"error message\"></div>\n\n                    </form>\n\n                    <div class=\"ui message\">\n                        Pour s'enregistrer voir Nanie\n                    </div>\n                </div>\n            </div>\n            <div>&copy; Nanie Fages (octobre 2020) - UVSQ - Licence MIT</div>\n\n        ";
        return retour;
    };
    return cMyUI_login;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_login);


/***/ }),

/***/ "./src/cMyUI_logout.ts":
/*!*****************************!*\
  !*** ./src/cMyUI_logout.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var cMyUI_logout = /** @class */ (function (_super) {
    __extends(cMyUI_logout, _super);
    function cMyUI_logout() {
        return _super.call(this, 'cMyUI_logout') || this;
    }
    cMyUI_logout.prototype.addCallBackOnMyDialog = function () {
    };
    cMyUI_logout.prototype.draw = function () {
        var retour = "Pas encore code";
        return retour;
    };
    return cMyUI_logout;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_logout);


/***/ }),

/***/ "./src/infra/Uuid.ts":
/*!***************************!*\
  !*** ./src/infra/Uuid.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Uuid = /** @class */ (function () {
    /**
     * Erzeugt eine UUID nach RFC 4122
     */
    function Uuid() {
    }
    Uuid.prototype.uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
            var random = Math.random() * 16 | 0; // Nachkommastellen abschneiden
            var value = char === 'x' ? random : (random % 4 + 8); // Bei x Random 0-15 (0-F), bei y Random 0-3 + 8 = 8-11 (8-b) gemäss RFC 4122
            return value.toString(16); // Hexadezimales Zeichen zurückgeben
        });
    };
    return Uuid;
}());
/* harmony default export */ __webpack_exports__["default"] = (Uuid);


/***/ }),

/***/ "./src/infra/cConfigs.ts":
/*!*******************************!*\
  !*** ./src/infra/cConfigs.ts ***!
  \*******************************/
/*! exports provided: cConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cConfigs", function() { return cConfigs; });
var eConfigConnues;
(function (eConfigConnues) {
    eConfigConnues[eConfigConnues["Nanie"] = 0] = "Nanie";
    eConfigConnues[eConfigConnues["Paps"] = 1] = "Paps";
})(eConfigConnues || (eConfigConnues = {}));
var cConfigs = /** @class */ (function () {
    function cConfigs() {
    }
    cConfigs.ajaxWSURL = function () {
        return cConfigs._ajaxWSURL[cConfigs._currentConfig];
    };
    cConfigs._currentConfig = eConfigConnues.Nanie;
    cConfigs._ajaxWSURL = [
        '/nanie/server/WS/BRIWS.php',
        '/nanie/server/WS/BRIWS.php' /* Paps */
    ];
    return cConfigs;
}());



/***/ }),

/***/ "./src/infra/cControler.ts":
/*!*********************************!*\
  !*** ./src/infra/cControler.ts ***!
  \*********************************/
/*! exports provided: cControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cControler", function() { return cControler; });
var cControler = /** @class */ (function () {
    function cControler() {
        this._lastExp = '';
        this._iLastExp = 0;
        cControler._singleton = null;
        this._lastExp = '';
        this._iLastExp = 0;
    }
    cControler.getIntance = function () {
        if (cControler._singleton == null)
            cControler._singleton = new cControler();
        return cControler._singleton;
    };
    Object.defineProperty(cControler.prototype, "lastExp", {
        get: function () {
            return this._lastExp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(cControler.prototype, "iLastExp", {
        get: function () {
            return this._iLastExp;
        },
        enumerable: false,
        configurable: true
    });
    /*
    set lastExp(lastExp: string) {
        this._lastExp = lastExp;
    }
    */
    cControler.prototype.setLastExp = function (lastExp, iLastExp) {
        this._lastExp = lastExp;
        this._iLastExp = iLastExp;
    };
    cControler._singleton = null;
    return cControler;
}());



/***/ }),

/***/ "./src/infra/cEnvt.ts":
/*!****************************!*\
  !*** ./src/infra/cEnvt.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cLogger */ "./src/infra/cLogger.ts");
/* harmony import */ var _cConfigs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cConfigs */ "./src/infra/cConfigs.ts");


var cEnvt = /** @class */ (function () {
    function cEnvt() {
    }
    cEnvt.getDebugLevel = function () {
        return cEnvt._debugLevel;
    };
    cEnvt.getAjaxURLWS = function () {
        var x = window.location.origin;
        return (x + cEnvt._ajaxWSURL);
    };
    cEnvt._debugLevel = _cLogger__WEBPACK_IMPORTED_MODULE_0__["eLoggerLevel"].Debug;
    cEnvt._ajaxWSURL = _cConfigs__WEBPACK_IMPORTED_MODULE_1__["cConfigs"].ajaxWSURL();
    return cEnvt;
}());
/* harmony default export */ __webpack_exports__["default"] = (cEnvt);


/***/ }),

/***/ "./src/infra/cLogger.ts":
/*!******************************!*\
  !*** ./src/infra/cLogger.ts ***!
  \******************************/
/*! exports provided: eLoggerLevel, cLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eLoggerLevel", function() { return eLoggerLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cLogger", function() { return cLogger; });
var eLoggerLevel;
(function (eLoggerLevel) {
    eLoggerLevel[eLoggerLevel["All"] = 0] = "All";
    eLoggerLevel[eLoggerLevel["Debug"] = 50] = "Debug";
    eLoggerLevel[eLoggerLevel["Warning"] = 100] = "Warning";
    eLoggerLevel[eLoggerLevel["Error"] = 150] = "Error";
    eLoggerLevel[eLoggerLevel["Fatal"] = 200] = "Fatal";
})(eLoggerLevel || (eLoggerLevel = {}));
var cLogger = /** @class */ (function () {
    function cLogger(level, id) {
        if (id === void 0) { id = ''; }
        this._level = 0;
        this._level = level;
    }
    cLogger.prototype.All = function (msg) {
        this._log(msg, eLoggerLevel.All);
    };
    cLogger.prototype.Debug = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Warning = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Error = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype.Fatal = function (msg) {
        this._log(msg, eLoggerLevel.Fatal);
    };
    cLogger.prototype._log = function (msg, level) {
        if (level > this._level)
            console.log(msg);
    };
    return cLogger;
}());



/***/ }),

/***/ "./src/infra/cTools.ts":
/*!*****************************!*\
  !*** ./src/infra/cTools.ts ***!
  \*****************************/
/*! exports provided: cTools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cTools", function() { return cTools; });
var cTools = /** @class */ (function () {
    function cTools() {
    }
    cTools.BuildSelectFromTab = function (vals, info) {
        var retour = '';
        var allKeys = Object.keys(info);
        retour = "<select ";
        if (info['class'] !== undefined) {
            retour += "class=\"" + info['class'] + "\" ";
        }
        if (info['style'] !== undefined) {
            retour += "style=\"" + info['style'] + "\" ";
        }
        if (info['id'] !== undefined) {
            retour += "id=\"" + info['id'] + "\" ";
        }
        retour += ">";
        for (var i = 0; i < vals.length; i++) {
            if ((info['indiceselected'] !== undefined) && (i === info['indiceselected'])) {
                retour += "<option selected value=\"" + vals[i] + "\">" + vals[i] + "</option>";
            }
            else {
                retour += "<option value=\"" + vals[i] + "\">" + vals[i] + "</option>";
            }
        }
        retour += "</select>";
        return retour;
    };
    cTools.BuildInputInt = function (val, info) {
        var retour = "<input type=\"" + info['type'] + "\" name=\"" + info['id'] + "\" id=\"" + info['id'] + "\" value=\"" + val + "\" step=\"any\" ";
        if (info['class'] !== undefined) {
            retour += "class=\"" + info['class'] + "\" ";
        }
        if (info['placeholder'] !== undefined) {
            retour += "placeholder=\"" + info['placeholder'] + "\" ";
        }
        retour += "/>";
        return retour;
    };
    return cTools;
}());



/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9teUFwcHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zYXNzL215QXBwcy5zY3NzP2MwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbmllQXBwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvREIvY0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9hdWNhc291LnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NNeVVJX2xvZ2luLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSV9sb2dvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL1V1aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NDb25maWdzLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jQ29udHJvbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jRW52dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY1Rvb2xzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0s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Q0FBQzthQUN2RTtpQkFDSTtnQkFDRCxNQUFNLElBQUkscUJBQWtCLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQVcsQ0FBQzthQUM5RDtTQUNKO1FBQ0QsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sb0JBQWEsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLElBQWlCO1FBQy9DLElBQUksTUFBTSxHQUFHLG1CQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBWSxHQUFHLHFCQUFlLENBQUM7UUFDaEgsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxhQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBSSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxtQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFJLENBQUM7U0FDckQ7UUFDRCxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ2YsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakRELHdCIiwiZmlsZSI6Ik5hbmllQXBwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL05hbmllQXBwcy50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnZlcnNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5NeUFwcHMge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi5hY2NvcmRpb24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlTZWxlY3Qge1xcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teUlucHV0SW50IHtcXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXG59XFxuXFxuLm15SW5wdXRGbG9hdCB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udWkuZ3JpZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSA+IC5ncmlkLmxvZ2luIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuZGl2LmxvZ2luIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxvZ2luLmltYWdlIHtcXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcXG59XFxuXFxuLmxvZ2luLmNvbHVtbiB7XFxuICBtYXgtd2lkdGg6IDQ1MHB4O1xcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zYXNzL215QXBwcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Fzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlDSlc7RURLWCw0Q0FBQTtBQURGOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBTUE7RUFDSSxzQkFBQTtBQUhKOztBQU9BO0VBQ00sWUFBQTtBQUpOOztBQU1BO0VBQ00sWUFBQTtBQUhOOztBQUtBO0VBQ00sa0JBQUE7QUFGTjs7QUFJQTtFQUNNLGdCQUFBO0VBQ0Esd0JBQUE7RUFDRix1QkFBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ2Jhc2UnO1xcclxcblxcclxcbi5pbnZlcnNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJhc2UuJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5NeUFwcHMge1xcclxcbiAgY29sb3I6IGJhc2UuJGJvZHktY29sb3I7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5teVNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm15SW5wdXRJbnQge1xcclxcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlJbnB1dEZsb2F0IHtcXHJcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi51aS5ncmlkLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbmJvZHkgPiAuZ3JpZC5sb2dpbiB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuZGl2LmxvZ2luIHtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4ubG9naW4uaW1hZ2Uge1xcclxcbiAgICAgIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gICAgfVxcclxcbi5sb2dpbi5jb2x1bW4ge1xcclxcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVwiLFwiLy8gX2Jhc2Uuc2Nzc1xcclxcbiRmb250LXN0YWNrOiAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuJHByaW1hcnktY29sb3I6ICMzMzM7XFxyXFxuJGJvZHktY29sb3I6IGdyZWVuO1xcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215QXBwcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4uL3Nhc3MvbXlBcHBzLnNjc3MnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYiBmcm9tICcuL2NNeVVJX01haW5UYWInO1xyXG5pbXBvcnQgY015VUlfbG9naW4gZnJvbSAnLi9jTXlVSV9sb2dpbic7XHJcblxyXG5jbGFzcyBOYW5pZUFwcHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgIH1cclxuXHJcbiAgICBtYWluKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFBvaW50IGQnZW50cmVlIGRlIGxhIHBhZ2UgcHJpbmNpcGFsZTogJ3Jvb3QnIFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCByb290RGl2OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJCgnLnJvb3QnKTtcclxuICAgICAgICBsZXQgZGlhbG9nOiBjTXlVSV9NYWluVGFiID0gbmV3IGNNeVVJX01haW5UYWIoKTtcclxuICAgICAgICBsZXQgbG9naW46IGNNeVVJX2xvZ2luID0gbmV3IGNNeVVJX2xvZ2luKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBBcHBlbCBkZSBsYSBtZXRob2RlIGRyYXcgZGUgdG91cyBsZXMgZGlhbG9ndWVzIGV0IGFmZmljaGFnZVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCBuZXdIVE1MOiBzdHJpbmcgPSBsb2dpbi5kcmF3KCk7XHJcbiAgICAgICAgaWYgKChyb290RGl2ICE9IG51bGwpICYmIChuZXdIVE1MICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgIHJvb3REaXYuYXBwZW5kKG5ld0hUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dpbi5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuLypcclxuICAgICAgICBsZXQgbmV3SFRNTDogc3RyaW5nID0gZGlhbG9nLmRyYXcoKTtcclxuICAgICAgICBpZiAoKHJvb3REaXYgIT0gbnVsbCkgJiYgKG5ld0hUTUwgIT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgcm9vdERpdi5hcHBlbmQobmV3SFRNTCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBjaGFyZ2VtZW50IGRlcyBjYWxsYmFja1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGRpYWxvZy5hZGRDYWxsQmFja09uTXlEaWFsb2coKTsgKi9cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBDYWxsIGVmZmVjdHVlIHBhciBsZSBKUyBkdSBIVE1MXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sZXQgYTogTmFuaWVBcHBzID0gbmV3IE5hbmllQXBwcygpO1xyXG5hLm1haW4oKTsiLCJpbXBvcnQgJCwgeyBkYXRhIH0gZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFV1aWQgZnJvbSAnLi4vLi4vaW5mcmEvVXVpZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgIG5vbTogc3RyaW5nO1xyXG4gICAgdmFsOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIGNBamF4U2VuZE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSBfY2xhc3NlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yZXF1ZXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9hcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FyZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9jbGFzc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9yZXF1ZXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEZyb21TdHJpbmcoY2xhc3NlOiBzdHJpbmcsIHJlcXVldGU6IHN0cmluZywgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSB8IG51bGwpOiBjQWpheFNlbmRNZXNzYWdlIHtcclxuICAgICAgICBsZXQgcjogY0FqYXhTZW5kTWVzc2FnZSA9IG5ldyBjQWpheFNlbmRNZXNzYWdlKCk7XHJcbiAgICAgICAgci5fY2xhc3NlID0gY2xhc3NlO1xyXG4gICAgICAgIHIuX3JlcXVldGUgPSByZXF1ZXRlO1xyXG4gICAgICAgIHIuX2FyZ3MgPSBbXTtcclxuICAgICAgICBpZiAoYXJncyAhPSBudWxsKVxyXG4gICAgICAgICAgICByLl9hcmdzID0gYXJncztcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQXJnc0Zyb21TdHJpbmcobm9tOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogaUFqYXhTZW5kTWVzc2FnZUFyZ3Mge1xyXG4gICAgICAgIGxldCByOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IHtcclxuICAgICAgICAgICAgJ25vbSc6IG5vbSxcclxuICAgICAgICAgICAgJ3ZhbCc6IHZhbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tTnVtKG5vbTogc3RyaW5nLCB2YWw6IG51bWJlcik6IGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgICAgICBsZXQgcjogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSB7XHJcbiAgICAgICAgICAgICdub20nOiBub20sXHJcbiAgICAgICAgICAgICd2YWwnOiB2YWwudG9TdHJpbmcoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tQXJyYXkobm9tOiBzdHJpbmcsIHZhbDogb2JqZWN0W10pOiBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICAgICAgbGV0IHI6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0ge1xyXG4gICAgICAgICAgICAnbm9tJzogbm9tLFxyXG4gICAgICAgICAgICAndmFsJzogSlNPTi5zdHJpbmdpZnkodmFsKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBpQWpheFJlc3BvbnNlTWVzc2FnZSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBpQWpheENvbmZpZyB7XHJcbiAgICAnYXN5bmMnOiBib29sZWFuO1xyXG4gICAgJ2NhY2hlJzogYm9vbGVhbjtcclxuICAgICdjb250ZW50VHlwZSc6IHN0cmluZztcclxuICAgICdkYXRhJzogc3RyaW5nO1xyXG4gICAgJ2RhdGFUeXBlJzogc3RyaW5nOyAgICAvLyBUaGUgZGF0YSB0eXBlIGV4cGVjdGVkIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXHJcbiAgICAnZ2xvYmFsJzogYm9vbGVhbjsgICAgICAgIC8vIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHRyaWdnZXIgZ2xvYmFsIEFKQVggZXZlbnQgaGFuZGxlcyBmb3IgdGhlIHJlcXVlc3QuRGVmYXVsdCBpcyB0cnVlXHJcbiAgICAndGltZW91dCc6IG51bWJlcjsgIC8vIFRoZSBsb2NhbCB0aW1lb3V0KGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSByZXF1ZXN0XHJcbiAgICAndHlwZScgOiBzdHJpbmc7XHJcbiAgICAndXJsJzogc3RyaW5nO1xyXG4gICAgJ2JlZm9yZVNlbmQnOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCkgPT4gdm9pZDsgIC8vICh4aHIpXHRBIGZ1bmN0aW9uIHRvIHJ1biBiZWZvcmUgdGhlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgJ2Vycm9yJzogKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nLCBlcnJvcjogYW55KSA9PiB2b2lkOyAgICAgICAgICAgLy8gKHhociwgc3RhdHVzLCBlcnJvcilcdEEgZnVuY3Rpb24gdG8gcnVuIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxyXG4gICAgJ3N1Y2Nlc3MnOiAoZGF0YTogYW55LCBzdGF0dXM6IHN0cmluZywgeGhyOiBYTUxIdHRwUmVxdWVzdCkgPT4gdm9pZDsgICAgICAgLy8gKHJlc3VsdCwgc3RhdHVzLCB4aHIpXHRBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXHJcbiAgICAnY29tcGxldGUnOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7ICAgICAgICAgICAgLy8gKHhociwgc3RhdHVzKVx0QSBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZChhZnRlciBzdWNjZXNzIGFuZCBlcnJvciBmdW5jdGlvbnMpXHJcbiAgICAnbXlBamF4Q2xhc3MnIDogY0FqYXg7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjQWpheCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcm5hbFN0YXR1czogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX3JldHVybmVkRGF0YTogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl91aWQgPSAobmV3IFV1aWQoKSkudXVpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHsgdGhpcy5faW50ZXJuYWxTdGF0dXMgPSAxOyB0aGlzLl9yZXR1cm5lZERhdGEgPSAnJzt9XHJcbiAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXR1czsgfVxyXG4gICAgcHVibGljIGdldERhdGEoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JldHVybmVkRGF0YTsgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcG9zdERhdGEodXJsOiBzdHJpbmcsIGRhdGE6IGNBamF4U2VuZE1lc3NhZ2UpOiB2b2lkO1xyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBzdHJpbmcgfCBjQWpheFNlbmRNZXNzYWdlKSA6IHZvaWQge1xyXG4gICAgICAgIGxldCBzRGF0YSA6IEpTT047XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgIHNEYXRhID0gSlNPTi5wYXJzZShkYXRhIGFzIHN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChkYXRhIGFzIGNBamF4U2VuZE1lc3NhZ2UpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc0RhdGEgPSAoKGRhdGEgYXMgdW5rbm93bikgYXMgSlNPTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHR5cGUgYXMgaW5wdXQnKTtcclxuXHJcbiAgICAgICAgbGV0IGFqYXhDb25mT2JqOiBPYmplY3QgPSB0aGlzLmdldEFqYXhDb25mKHRoaXMuY29tcGxldGVfZnVuY3Rpb24sIHVybCwgc0RhdGEpO1xyXG4gICAgICAgICQuYWpheChhamF4Q29uZk9iaik7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKCdhcHJlcyBhamF4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RGaWxlcyhzZXJ2ZXJVUkw6IHN0cmluZywgZGF0YTogRm9ybURhdGEpIHtcclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICd1cmwnOiBzZXJ2ZXJVUkwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQgKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldEFqYXhDb25mKGNvbXBsZXRlZnVuY3Rpb246ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZykgPT4gdm9pZCwgbXlVcmwgOiBzdHJpbmcsIGRhdGEgOiBKU09OKSA6IE9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaUFqYXhDb25maWcgPSB7XHJcbiAgICAgICAgICAgICdhc3luYycgOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICdjb250ZW50VHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2RhdGEnIDogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICdkYXRhVHlwZScgOiAnanNvbicsICAgIC8vIFRoZSBkYXRhIHR5cGUgZXhwZWN0ZWQgb2YgdGhlIHNlcnZlciByZXNwb25zZS5cclxuICAgICAgICAgICAgJ2dsb2JhbCcgOiB0cnVlLCAgICAgICAgLy8gQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdG8gdHJpZ2dlciBnbG9iYWwgQUpBWCBldmVudCBoYW5kbGVzIGZvciB0aGUgcmVxdWVzdC5EZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAgICAgJ3RpbWVvdXQnIDogMTAwMCAqIDYwLCAgLy8gVGhlIGxvY2FsIHRpbWVvdXQoaW4gbWlsbGlzZWNvbmRzKSBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgJ3R5cGUnIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAndXJsJzogbXlVcmwsXHJcbiAgICAgICAgICAgICdiZWZvcmVTZW5kJzogdGhpcy5iZWZvcmVTZW5kX2Z1bmN0aW9uLCAvLyAoeGhyKVx0QSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgJ2Vycm9yJzogdGhpcy5lcnJvcl9mdW5jdGlvbiwgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cywgZXJyb3IpXHRBIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgcmVxdWVzdCBmYWlscy5cclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiAgdGhpcy5zdWNjZXNzX2Z1bmN0aW9uLCAgICAgICAvLyAocmVzdWx0LCBzdGF0dXMsIHhocilcdEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZHNcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogY29tcGxldGVmdW5jdGlvbiwgICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMpXHRBIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSByZXF1ZXN0IGlzIGZpbmlzaGVkKGFmdGVyIHN1Y2Nlc3MgYW5kIGVycm9yIGZ1bmN0aW9ucylcclxuICAgICAgICAgICAgJ215QWpheENsYXNzJyA6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIFhIUiA6XHJcbiAgICB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZTogNFxyXG4gICAgICAgIHJlc3BvbnNlSlNPTjoge1widHlwZVwiIDogXCJlcnJvclwiLFwiZGF0YVwiOiBbe1wiZXJybm9cIjogOTAwMDAwMH0sIHtcImRhdGFcIjpcImlCUklXU0FwaSMjX2RlY29kZUpTT05JbnB1dCAjIHVuYWJsZSB0byBwYXJzZS0tIGludmFsaWQganNvbiBmb3JtYXQgdGVzdCBpdCBmaXJzdCAuLi5UclxyXG4gICAgICAgIHJlc3BvbnNlVGV4dDogXFxuXFxuXFxuXFxue1xcXCJ0eXBlXFxcIiA6IFxcXCJlcnJvclxcXCIsXFxcImRhdGFcXFwiOiBbe1xcXCJlcnJub1xcXCI6IDkwMDAwMDB9LCB7XFxcImRhdGFcXFwiOlxcXCJpQlJJV1NBcGkjI19kZWNvZGVKU09OSW5wdXQgIyB1bmFibGUgdG8gcGFyc2UgLS0gaW52YWxpZCBqc29uIGZvcm1hdCB0ZXN0IGl0XHJcbiAgICAgICAgc3RhdHVzOiAyMDBcclxuICAgICAgICBzdGF0dXhUZXh0OiBcIk9LXCJcclxuXHJcbiAgICAgICAgYWJvcnQ6IMaSICggc3RhdHVzVGV4dCApXHJcbiAgICAgICAgYWx3YXlzOiDGkiAoKVxyXG4gICAgICAgIGNhdGNoOiDGkiAoIGZuIClcclxuICAgICAgICBkb25lOiDGkiAoKVxyXG4gICAgICAgIGZhaWw6IMaSICgpXHJcbiAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiDGkiAoKVxyXG4gICAgICAgIGdldFJlc3BvbnNlSGVhZGVyOiDGkiAoIGtleSApXHJcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogxpIgKCB0eXBlIClcclxuICAgICAgICBwaXBlOiDGkiAoIClcclxuICAgICAgICBwcm9ncmVzczogxpIgKClcclxuICAgICAgICBwcm9taXNlOiDGkihvYmopXHJcblxyXG4gICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGYoKVxyXG4gICAgICAgIHN0YXR1c0NvZGU6IGYgKG1hcClcclxuICAgICAgICB0aGVuICA6IGYoLi4uKVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYmVmb3JlU2VuZF9mdW5jdGlvbih4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3JfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcsIGVycm9yOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyBlcnJvcik7XHJcbiAgICAgICAgLy8gYWxlcnQgICgnYWpheCBmYWlsczogU2VlIENvbnNvbGUuTG9nJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3VjY2Vzc19mdW5jdGlvbihkYXRhOiBhbnksIHN0YXR1czogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggc3VjZXNzJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29tcGxldGVfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoJ2FqYXggY29tcGxldGVkJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzIDogY0FqYXggO1xyXG4gICAgICAgIGlmICgnbXlBamF4Q2xhc3MnIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MgPSAodGhpcyBhcyBpQWpheENvbmZpZykubXlBamF4Q2xhc3M7XHJcbiAgICAgICAgICAgIGlmIChteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgIT0gMSkgeyAvLyBwYXMgZW4gZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFqYXhSZXBvbnNlOiBpQWpheFJlc3BvbnNlTWVzc2FnZSA9IChKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpIGFzIGlBamF4UmVzcG9uc2VNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWpheFJlcG9uc2UudHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXBvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSA9IGFqYXhSZXBvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0ICAoJ1dTIGZhaWxzOiBlcnJvciBzZWUgaW5sb2cgIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEgPSBhamF4UmVwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxOyAvLyByZXRvdXIgaW5jb25udSBlbiBlcnJldXIgIVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY0FqYXgsIGNBamF4U2VuZE1lc3NhZ2UsIGlBamF4U2VuZE1lc3NhZ2VBcmdzIH0gZnJvbSAnLi9jQWpheCc7XHJcbmltcG9ydCBjRW52dCBmcm9tICcuLi8uLi9pbmZyYS9jRW52dCc7XHJcbmltcG9ydCB7IGlHZW5vdHlwZU1lc3NhZ2UsIGlSZXN1bHRhdE1lc3NhZ2UgfSBmcm9tICcuL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlLCBpSW50ZXJuYWxFeHBlcmllbmNlT25lRmlsZU1lc3NhZ2UgfSBmcm9tICcuL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBjRXhwZXJpZW5jZSB7XHJcbiAgICBwcml2YXRlIF9hamF4OiBjQWpheCA9IG5ldyBjQWpheCgpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NpbmdsZXRvbjogY0V4cGVyaWVuY2UgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl9hamF4ID0gbmV3IGNBamF4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogY0V4cGVyaWVuY2Uge1xyXG4gICAgICAgIGlmIChjRXhwZXJpZW5jZS5fc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgICAgIGNFeHBlcmllbmNlLl9zaW5nbGV0b24gPSBuZXcgY0V4cGVyaWVuY2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLl9zaW5nbGV0b247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbFBlcnNvbmUoKSA6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcgKCdwZXJzb25uZXMnLCAnZ2V0QWxsUGVyc29ubmVzJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlIDogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdCA6IEpTT04gPSBKU09OLnBhcnNlIChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2ggKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsRXhwZXJpZW5jZUluaXRpYWxlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxFeHBlcmllbmNlSW5pdGlhbGUnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlSWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nLCBxdWk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZXhwZXJpZW5jZXN0cmluZ2lkJywgZXhwZXJpZW5jZUlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZGF0ZXJlYWxpc2F0aW9uZXhwZXJpZW5jZScsIGRhdGUpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdmYWl0ZXBhcnF1aScsIHF1aSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnY3JlYXRlJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQgKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VVaWRGcm9tRXhwZXJpZW5jZVN0cmluZ2lkKGV4cGVyaWVuY2VzdHJpbmdpZCA6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZXhwZXJpZW5jZXN0cmluZ2lkJywgZXhwZXJpZW5jZXN0cmluZ2lkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VVaWRGcm9tRXhwZXJpZW5jZVN0cmluZ2lkJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQgKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbEV4cGVyaWVuY2VVaWQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbEV4cGVyaWVuY2VVaWQnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PG51bWJlcj4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8bnVtYmVyPik7XHJcbiAgICAgICAgICAgIHJlc3AuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZV9JbmZvR2VuZXJhbGUoaUV4cFVpZDogbnVtYmVyKTogaUV4cGVyaWVuY2VJRE1lc3NhZ2UgfCBudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZScsIGFyZ3MpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8aUV4cGVyaWVuY2VJRE1lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlFeHBlcmllbmNlSURNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VfUmVzdWx0YXRHZW5vdHlwZShpRXhwVWlkOiBudW1iZXIpOiBpR2Vub3R5cGVNZXNzYWdlW118bnVsbCB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ3VpZCcsIGlFeHBVaWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEdlbm90eXBlJywgYXJncyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxpR2Vub3R5cGVNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpR2Vub3R5cGVNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX1Jlc3VsdGF0VGVzdChpRXhwVWlkOiBudW1iZXIpOiBpUmVzdWx0YXRNZXNzYWdlW10gfCBudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX1Jlc3VsdGF0VGVzdCcsIGFyZ3MpO1xyXG5cclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlSZXN1bHRhdE1lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlSZXN1bHRhdE1lc3NhZ2U+KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX1Jlc3VsdGF0SW1hZ2UoaUV4cFVpZDogbnVtYmVyKTogaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2VbXSB8IG51bGwge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCd1aWQnLCBpRXhwVWlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VfUmVzdWx0YXRJbWFnZScsIGFyZ3MpO1xyXG5cclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZT4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyB1cGxvYWRGaWxlcyhpZDogbnVtYmVyLCBmaWxlczogRmlsZUxpc3QpIHtcclxuICAgICAgICBsZXQgZGF0YSA6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZiA6IEZpbGUgfCBudWxsID0gZmlsZXMuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKGYgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCAoJ2ZpbGUtJyArIGksIGYsIGYubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCgnZXhwZXJpZW5jZUlkJywgaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ19jbGFzc2UnLCAnZXhwZXJpZW5jZScpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdfcmVxdWV0ZScsICd1cGxvYWRGaWxlJyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdEZpbGVzKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlOiBpUmVzdWx0YXRNZXNzYWdlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IG51bWJlciA9IC0xO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdpZGV4cGVyaWVuY2UnLCAoZXhwZXJpZW5jZS5pZGV4cGVyaWVuY2UgYXMgbnVtYmVyKSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ21hcnF1YWdlJywgZXhwZXJpZW5jZS5tYXJxdWFnZSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGlmIChleHBlcmllbmNlLk5iR2Vub3R5cGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdOYkdlbm90eXBlJywgZXhwZXJpZW5jZS5OYkdlbm90eXBlKTtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdTQ29tcGFyYXRpZicsIGV4cGVyaWVuY2UuU0NvbXBhcmF0aWYpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdTR2VuZXJhbCcsIGV4cGVyaWVuY2UuU0dlbmVyYWwpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCd0eXBlZGV0ZXN0JywgZXhwZXJpZW5jZS50eXBlZGV0ZXN0KTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygndGVycml0b2lyZScsIGV4cGVyaWVuY2UudGVycml0b2lyZSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGlmIChleHBlcmllbmNlLkdlbm90eXBlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbUFycmF5KCdHZW5vdHlwZScsIGV4cGVyaWVuY2UuR2Vub3R5cGUpO1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICd1cGRhdGUnLCBhcmdzKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBkdW1wRnJvbURCKGlkOiBudW1iZXIsIF9pZFJlc3VsdGF0REI6IHN0cmluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsVGVzdFR5cGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbFRlc3RUeXBlcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsTWFycXVhZ2UoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbE1hcnF1YWdlJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc3RhdGljIGdldEFsbFRlcnJpdG9pcmUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbFRlcnJpdG9pcmUnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWUxKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZTIoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lWFgoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lMygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWVYWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWU0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZVhYKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxDaHJvbW9zb21lcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lSZXN1bHRhdE1lc3NhZ2UoKTogaVJlc3VsdGF0TWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaVJlc3VsdGF0TWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgJ2lkZXhwZXJpZW5jZSc6IDAsXHJcbiAgICAgICAgICAgICdleHBlcmllbmNlc3RyaW5naWQnOiAnJyxcclxuICAgICAgICAgICAgJ0dlbm90eXBlJyA6IFtdLFxyXG4gICAgICAgICAgICAnbWFycXVhZ2UnOiAnJyxcclxuICAgICAgICAgICAgJ3RlcnJpdG9pcmUnOiAnJyxcclxuICAgICAgICAgICAgJ05iR2Vub3R5cGUnIDogMCxcclxuICAgICAgICAgICAgJ1NDb21wYXJhdGlmJyA6IDAsXHJcbiAgICAgICAgICAgICdTR2VuZXJhbCcgOiAwLFxyXG4gICAgICAgICAgICAndHlwZWRldGVzdCcgOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lHZW5vdHlwZU1lc3NhZ2UoKTogaUdlbm90eXBlTWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaUdlbm90eXBlTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWUxJzogJycsXHJcbiAgICAgICAgICAgICdjaHJvbW9zb21lMic6ICcnLFxyXG4gICAgICAgICAgICAnY2hyb21vc29tZTMnOiAnJyxcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWU0JzogJycsXHJcbiAgICAgICAgICAgICduYmVjaGFudGlsbG9uJzogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgY0VudnQgZnJvbSAnLi9pbmZyYS9jRW52dCc7XHJcbmltcG9ydCB7IGNDb250cm9sZXIgfSAgZnJvbSAnLi9pbmZyYS9jQ29udHJvbGVyJztcclxuaW1wb3J0IHsgY0xvZ2dlciwgZUxvZ2dlckxldmVsIH0gZnJvbSAnLi9pbmZyYS9jTG9nZ2VyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBjTXlVSSB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2lkUmVzdWx0YXREQjogc3RyaW5nID0gJ2lkUmVzdWx0YXREQic7XHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogY0xvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfY3RybDogY0NvbnRyb2xlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQgOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlkID09IG51bGwpXHJcbiAgICAgICAgICAgIGlkID0gJ2NNeVVJJztcclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbmV3IGNMb2dnZXIoY0VudnQuZ2V0RGVidWdMZXZlbCgpLCBpZCk7XHJcbiAgICAgICAgdGhpcy5fY3RybCA9IGNDb250cm9sZXIuZ2V0SW50YW5jZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdygpOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NZXNzYWdlKG1lc3NhZ2VJZCA6IHN0cmluZyB8IG51bGwpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoJy5tZXNzYWdlIC5jbG9zZScpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5tZXNzYWdlJylcclxuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbignZmFkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQobWVzc2FnZUlkKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcubWVzc2FnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCdmYWRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYl9jcmVhdGUgZnJvbSAnLi9jTXlVSV9NYWluVGFiX2NyZWF0ZSc7XHJcbmltcG9ydCBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbiBmcm9tICcuL2NNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uJztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfYXVjYXNvdSBmcm9tICcuL2NNeVVJX01haW5UYWJfYXVjYXNvdSc7XHJcbmltcG9ydCBjTXlVSV9sb2dvdXQgZnJvbSAnLi9jTXlVSV9sb2dvdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYiBleHRlbmRzIGNNeVVJIHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIGxlcyBlbGVtZW50IGNvbnN0aXRhbnQgZHUgZGlhbG9ndWUgcHJpbmNpcGFsXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jcmVhdGVEaWFsb2c6IGNNeVVJX01haW5UYWJfY3JlYXRlO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY29uc3VsdERpYWxvZzogY015VUlfTWFpblRhYl9jb25zdWx0YXRpb247XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9BdUNhc091RGlhbG9nOiBjTXlVSV9NYWluVGFiX2F1Y2Fzb3U7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sb2dvdXQ6IGNNeVVJX2xvZ291dDtcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBsZXMgdGFnIGRlIG1vbiBkaWFsb2cgcG91ciBsZXMgdGFiIChsZSBtZW51KVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRUYWJQcmVmaXg6IHN0cmluZyA9ICdfaWRfY015VUlfTWFpblRhYl9UQUJfJztcclxuICAgIHByaXZhdGUgX2lkVGFiQ3JlYXRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgX2lkVGFiQ29uc3VsdGF0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pZFRhYkF1Q2FzT3VUYWI6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2lkVGFiTG9nb3V0OiBzdHJpbmc7XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gbGVzIHRhZyBkZSBtb24gZGlhbG9nIHBvdXIgbGVzIENPTlRFTlUgZGVzIHRhYiAobGUgY29udGVudClcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQ29udGFpbmVyUHJlZml4OiBzdHJpbmcgPSAnX2lkX2NNeVVJX01haW5UYWJfQ09OVEFJTkVSXyc7XHJcbiAgICBwcml2YXRlIF9pZENvbnRhaW5lckNyZWF0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pZENvbnRhaW5lckNvbnN1bHRhdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfaWRDb250YWluZXJBdUNhc091VGFiOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9pZENvbnRhaW5lckxvZ291dDogc3RyaW5nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2NNeVVJX01haW5UYWInKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGVEaWFsb2cgPSBuZXcgY015VUlfTWFpblRhYl9jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9jb25zdWx0RGlhbG9nID0gbmV3IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5fQXVDYXNPdURpYWxvZyA9IG5ldyBjTXlVSV9NYWluVGFiX2F1Y2Fzb3UoKTtcclxuICAgICAgICB0aGlzLl9sb2dvdXQgPSBuZXcgY015VUlfbG9nb3V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2lkVGFiQ3JlYXRpb24gPSB0aGlzLl9pZFRhYlByZWZpeCArIFwiQ3JlYXRpb25cIjtcclxuICAgICAgICB0aGlzLl9pZFRhYkNvbnN1bHRhdGlvbiA9IHRoaXMuX2lkVGFiUHJlZml4ICsgXCJDY29uc3VsdGF0aW9uXCI7XHJcbiAgICAgICAgdGhpcy5faWRUYWJBdUNhc091VGFiID0gdGhpcy5faWRUYWJQcmVmaXggKyBcIkF1Q2FzT3VcIjtcclxuICAgICAgICB0aGlzLl9pZFRhYkxvZ291dCA9IHRoaXMuX2lkVGFiUHJlZml4ICsgXCJMb2dPdXRcIjtcclxuXHJcbiAgICAgICAgdGhpcy5faWRDb250YWluZXJDcmVhdGlvbiA9IHRoaXMuX2lkQ29udGFpbmVyUHJlZml4ICsgXCJDcmVhdGlvblwiO1xyXG4gICAgICAgIHRoaXMuX2lkQ29udGFpbmVyQ29uc3VsdGF0aW9uID0gdGhpcy5faWRDb250YWluZXJQcmVmaXggKyBcIkNjb25zdWx0YXRpb25cIjtcclxuICAgICAgICB0aGlzLl9pZENvbnRhaW5lckF1Q2FzT3VUYWIgPSB0aGlzLl9pZENvbnRhaW5lclByZWZpeCArIFwiQXVDYXNPdVwiO1xyXG4gICAgICAgIHRoaXMuX2lkQ29udGFpbmVyTG9nb3V0ID0gdGhpcy5faWRDb250YWluZXJQcmVmaXggKyBcIkxvZ091dFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGlvbiBkZXMgbWVudXMgc2VtYW50aWMgVUlcclxuICAgICAgICAkKCcjaW5mb3RhYnMgLm1lbnUgLml0ZW0nKS50YWIoJ2NoYW5nZSB0YWInLCAnQ3JlYXRpb24nKTtcclxuXHJcbiAgICAgICAgLy8gT24gY2xpY2sgZGVzIHRhYnMgYWZmaWNoYWdlcyBkZXMgbWVudSBkZXMgdGFicyBcclxuICAgICAgICAkKGAjJHttZS5faWRUYWJDcmVhdGlvbn1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIG5ldHRveWFnZSBkZXMgY29udGFpbmVyXHJcbiAgICAgICAgICAgICQoYC5teURpYWxvZ1RvcENvbnRhaW5lcmApLmVtcHR5KCk7XHJcbiAgICAgICAgICAgIC8vIGFmZmljaGFnZSBkdSBjb250ZW51IGRlIG1vbiBjb250YWluZXJcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ29udGFpbmVyQ3JlYXRpb259YCkuYXBwZW5kKG1lLl9jcmVhdGVEaWFsb2cuZHJhdygpKTtcclxuICAgICAgICAgICAgLy8gYXJtZW1lbnQgZGVzIGNhbGxiYWNrcyBkZSBtb24gY29udGFpbmVyXHJcbiAgICAgICAgICAgIG1lLl9jcmVhdGVEaWFsb2cuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChgIyR7bWUuX2lkVGFiQ29uc3VsdGF0aW9ufWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgJChgLm15RGlhbG9nVG9wQ29udGFpbmVyYCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ29udGFpbmVyQ29uc3VsdGF0aW9ufWApLmFwcGVuZChtZS5fY29uc3VsdERpYWxvZy5kcmF3KCkpO1xyXG4gICAgICAgICAgICBtZS5fY29uc3VsdERpYWxvZy5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKGAjJHttZS5faWRUYWJBdUNhc091VGFifWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgJChgLm15RGlhbG9nVG9wQ29udGFpbmVyYCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ29udGFpbmVyQXVDYXNPdVRhYn1gKS5hcHBlbmQobWUuX0F1Q2FzT3VEaWFsb2cuZHJhdygpKTtcclxuICAgICAgICAgICAgbWUuX0F1Q2FzT3VEaWFsb2cuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChgIyR7bWUuX2lkVGFiTG9nb3V0fWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgJChgLm15RGlhbG9nVG9wQ29udGFpbmVyYCkuZW1wdHkoKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ29udGFpbmVyTG9nb3V0fWApLmFwcGVuZChtZS5fbG9nb3V0LmRyYXcoKSk7XHJcbiAgICAgICAgICAgIG1lLl9sb2dvdXQuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoYCMke21lLl9pZFRhYkNyZWF0aW9ufWApLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBqZSBuJ2FmZmljaGUgcXVlIG1hIHBhZ2UgKGxlIG1lbnUpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiaW5mb3RhYnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIml0ZW0gYWN0aXZlIFwiIGRhdGEtdGFiPVwiQ3JlYXRpb25cIiBpZD1cIiR7dGhpcy5faWRUYWJDcmVhdGlvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW9iaWxlIGhpZGRlblwiPkNyJmVhY3V0ZTthdGlvbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIml0ZW1cIiAgZGF0YS10YWI9XCJDb25zdWx0YXRpb25cIiBpZD1cIiR7dGhpcy5faWRUYWJDb25zdWx0YXRpb259XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vYmlsZSBoaWRkZW5cIj5Db25zdWx0YXRpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpdGVtXCIgIGRhdGEtdGFiPVwiQXVjYXNvdVwiIGlkPVwiJHt0aGlzLl9pZFRhYkF1Q2FzT3VUYWJ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vYmlsZSBoaWRkZW5cIj5BdSBjYXMgbyZ1Z3JhdmU7IC4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBtZW51IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaXRlbVwiIGRhdGEtdGFiPVwiTG9nb3V0XCIgaWQ9XCIke3RoaXMuX2lkVGFiTG9nb3V0fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb2JpbGUgaGlkZGVuXCI+TG9nb3V0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgdGFiIGJhc2ljIGFjdGl2ZSBzZWdtZW50IG15RGlhbG9nVG9wQ29udGFpbmVyXCIgZGF0YS10YWI9XCJDcmVhdGlvblwiIGlkPVwiJHt0aGlzLl9pZENvbnRhaW5lckNyZWF0aW9ufVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgdGFiIGJhc2ljIHNlZ21lbnQgbXlEaWFsb2dUb3BDb250YWluZXJcIiBkYXRhLXRhYj1cIkNvbnN1bHRhdGlvblwiIGlkPVwiJHt0aGlzLl9pZENvbnRhaW5lckNvbnN1bHRhdGlvbn1cIj5Db25zdWx0YXRpb248L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHRhYiBiYXNpYyBzZWdtZW50IG15RGlhbG9nVG9wQ29udGFpbmVyXCIgZGF0YS10YWI9XCJBdWNhc291XCIgaWQ9XCIke3RoaXMuX2lkQ29udGFpbmVyQXVDYXNPdVRhYn1cIj5BdWNhc291PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSB0YWIgYmFzaWMgc2VnbWVudCBteURpYWxvZ1RvcENvbnRhaW5lclwiIGRhdGEtdGFiPVwiTG9nb3V0XCIgaWQ9XCIke3RoaXMuX2lkQ29udGFpbmVyTG9nb3V0fVwiPkxvZ291dDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PiZjb3B5OyBOYW5pZSBGYWdlcyAob2N0b2JyZSAyMDIwKSAtIFVWU1EgLSBMaWNlbmNlIE1JVDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IGlSZXN1bHRhdE1lc3NhZ2UsIGlHZW5vdHlwZU1lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlNeUh0bWxJbmZvLCBjVG9vbHMgfSBmcm9tICcuL2luZnJhL2NUb29scyc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfYXVjYXNvdSBleHRlbmRzIGNNeVVJIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcignY015VUlfTWFpblRhYl9hdWNhc291Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9IGBQYXMgZW5jb3JlIGNvZGVgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IGlSZXN1bHRhdE1lc3NhZ2UsIGlHZW5vdHlwZU1lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlNeUh0bWxJbmZvLCBjVG9vbHMgfSBmcm9tICcuL2luZnJhL2NUb29scyc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uIGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRPS0J1dHRvbiA6IHN0cmluZyA9ICdPS0J1dHRvbic7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uID0gdGhpcztcclxuICAgICAgICAkKGAudm9pcmApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gYWZpaWNoZXIgZGFucyA8ZGl2IGlkPVwiJHt0aGlzLl9pZFJlc3VsdGF0REJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICQoYCMke21lLl9pZFJlc3VsdGF0REJ9YCkuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgVm9pckJ1dHRvbklkIDogc3RyaW5nID0gKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGxldCBzRXhwVWlkOiBzdHJpbmcgPSBWb2lyQnV0dG9uSWQuc3Vic3RyaW5nKG1lLl9pZE9LQnV0dG9uLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBsZXQgaUV4cFVpZDogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHNFeHBVaWQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZm9HZW5lcmFsZUV4cGVyaWVuY2U6IGlFeHBlcmllbmNlSURNZXNzYWdlIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfSW5mb0dlbmVyYWxlKGlFeHBVaWQpO1xyXG4gICAgICAgICAgICBsZXQgRXhwZXJpZW5jZVN0cmluZ0lkOiBzdHJpbmcgPSBcIi0tLS1cIjtcclxuICAgICAgICAgICAgaWYgKGluZm9HZW5lcmFsZUV4cGVyaWVuY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VTdHJpbmdJZCA9IGluZm9HZW5lcmFsZUV4cGVyaWVuY2UuZXhwZXJpZW5jZXN0cmluZ2lkO1xyXG4gICAgICAgICAgICBsZXQgaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZTogaVJlc3VsdGF0TWVzc2FnZVtdIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfUmVzdWx0YXRUZXN0KGlFeHBVaWQpO1xyXG4gICAgICAgICAgICBsZXQgaW5mb0dlbm9tZUV4cGVyaWVuY2U6IGlHZW5vdHlwZU1lc3NhZ2VbXSB8IG51bGwgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX1Jlc3VsdGF0R2Vub3R5cGUoaUV4cFVpZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbXlVSUZvckNvbnN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoKGluZm9HZW5vbWVFeHBlcmllbmNlICE9IG51bGwpICYmIChpbmZvUmVzdWx0YXRFeHBlcmllbmNlICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wOiBpUmVzdWx0YXRNZXNzYWdlID0gaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZVswXTtcclxuICAgICAgICAgICAgICAgIGxldCB1bmVJbmZvR2Vub21lRXhwZXJpZW5jZTogaUdlbm90eXBlTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGluZm9SZXN1bHRhdEV4cGVyaWVuY2VfMCA9PT0gdW5kZWZpbmVkKSB8fCAoaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLmlkZXhwZXJpZW5jZSA9PT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcyBkZSBkYXRhIGFzc29jaWUgYSBjZXR0ZSBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIHllbGxvdyBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzIGRlIGRvbm5lZXMgZCdleHBlcmllbmNlIGFzc29jaWVlIDxici8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZSBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke0V4cGVyaWVuY2VTdHJpbmdJZH0gIFtJRCBlbiBEQjogJHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuaWRleHBlcmllbmNlfV08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HZW5vdHlwZTwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDE8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMjwvdGg+IDx0aD5jaHJvbW9zb21lc29tZSAzPC90aD48dGg+Y2hyb21vc29tZXNvbWUgNDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYiBFY2hhbnRpbGxvbjwvdGg+PHRoPk1hcnF1YWdlPC90aD48dGg+UyBnZW5lcmFsPC90aD48dGg+UyBjb21wYXJhdGlmPC90aD48dGg+VHlwZSB0ZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UgPSBpbmZvR2Vub21lRXhwZXJpZW5jZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSArIDF9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUyfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTN9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lNH08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLm5iZWNoYW50aWxsb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5tYXJxdWFnZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7aW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RofVwiPiR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLlNHZW5lcmFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGh9XCI+JHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuU0NvbXBhcmF0aWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC50eXBlZGV0ZXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpICsgMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUxfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTJ9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lM308L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWU0fTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UubmJlY2hhbnRpbGxvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mb0ZpbGVFeHBlcmllbmNlOiBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZVtdIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfUmVzdWx0YXRJbWFnZShpRXhwVWlkKTtcclxuICAgICAgICAgICAgICAgIGlmICgoaW5mb0ZpbGVFeHBlcmllbmNlICE9IG51bGwpICYmIChpbmZvRmlsZUV4cGVyaWVuY2UubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mb0ZpbGVFeHBlcmllbmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0ubm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0ucGF0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPVwiJHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0udXJsfVwiIGFsdD1cIiR7aW5mb0ZpbGVFeHBlcmllbmNlW2ldLnBhdGh9XCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzNDFcIiB0aXRsZT1cImltYWdlICR7aX1cIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgaW5wdXRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWwgeWVsbG93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcyBkJ2ltYWdlIGFzc29jaWVlcyBhIGNldHRlIGV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKGAjJHttZS5faWRSZXN1bHRhdERCfWApLmFwcGVuZChteVVJRm9yQ29uc3VsdCk7XHJcbi8vICAgICAgICAgICAgbGV0IHk6IGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9GaWxlc1VSTChpRXhwVWlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZztcclxuXHJcbiAgICAgICAgbGV0IGFsbEV4cGVyaWVuY2V1aWQgOiBudW1iZXJbXSA9IGNFeHBlcmllbmNlLmdldEFsbEV4cGVyaWVuY2VVaWQoKTtcclxuICAgICAgICBsZXQgeDogaUV4cGVyaWVuY2VJRE1lc3NhZ2UgfCBudWxsO1xyXG5cclxuICAgICAgICBsZXQgaWRfdGVycml0b2lyZV9zZWxlY3Q6IHN0cmluZyA9ICdpZF90ZXJyaXRvaXJlX3NlbGVjdCc7XHJcbiAgICAgICAgbGV0IGlkX3NlbGVjdGNocm9tb3NvbWU6IHN0cmluZyA9ICdpZF9zZWxlY3RfY2hyb21tb3NvbWUnO1xyXG5cclxuICAgICAgICBsZXQgaW5mb3NGb3JIVE1MOiBvYmplY3QgPSB7J2lkJzogYCR7aWRfdGVycml0b2lyZV9zZWxlY3R9YCB9O1xyXG4gICAgICAgIGxldCBzZWxlY3RUZXJyaXRvaXJlOiBzdHJpbmcgPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbFRlcnJpdG9pcmUoKSwgaW5mb3NGb3JIVE1MKTtcclxuICAgICAgICBsZXQgc2VsZWN0Y2hyb21vc29tZTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaW5mb3NGb3JIVE1MOiBvYmplY3QgPSB7ICdpZCc6IGAke2lkX3NlbGVjdGNocm9tb3NvbWV9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHNlbGVjdGNocm9tb3NvbWUucHVzaChjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWUxKCksIGluZm9zRm9ySFRNTCkpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAxKSBzZWxlY3RjaHJvbW9zb21lLnB1c2goY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMigpLCBpbmZvc0ZvckhUTUwpKTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMikgc2VsZWN0Y2hyb21vc29tZS5wdXNoKGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZTMoKSwgaW5mb3NGb3JIVE1MKSk7XHJcbiAgICAgICAgICAgIGlmIChpID09IDMpIHNlbGVjdGNocm9tb3NvbWUucHVzaChjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWU0KCksIGluZm9zRm9ySFRNTCkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgLyogICAgU0VMRUNUIGV4cC51aWQgRlJPTWBleHBlcmllbmNlYCBleHBcclxuICAgICAgICBJTk5FUiBKT0lOYGV4cGVyaWVuY2VfbGlzdGVnZW5vdHlwZWAgZ2VubyBPTiBnZW5vLmlkZXhwZXJpZW5jZSA9IGV4cC51aWRcclxuICAgICAgICBJTk5FUiBKT0lOYGV4cGVyaWVuY2VfcmVzdWx0YXRkZXN0ZXN0c2AgcmVzIE9OIHJlcy5pZGV4cGVyaWVuY2UgPSBleHAudWlkXHJcbiAgICAgICAgd2hlcmUoKHJlcy50ZXJyaXRvaXJlID0gJ1ZnJykgYW5kKHJlcy5TQ29tcGFyYXRpZiA8IDIpIGFuZChyZXMuU0NvbXBhcmF0aWYgPCAyKSBcclxuYW5kKGdlbm8uY2hyb21vc29tZTEgPSAnUGluaycpIGFuZChnZW5vLmNocm9tb3NvbWUyID0gJ0RlY2wnKSkgKi9cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgIDxmb3JtIGNsYXNzPVwicHVyZS1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwdXJlLWdyb3VwIHB1cmUtaW5wdXQtMS00XCIgc3R5bGU9XCJib3JkZXItc3R5bGU6IG5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aWRfdGVycml0b2lyZV9zZWxlY3R9XCI+VGVycml0b2lyZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RUZXJyaXRvaXJlfVxyXG4gICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGVnZW5kPnNlbGVjdGlvbiBnZW5vdHlwZTwvbGVnZW5kPmA7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIiR7aWRfc2VsZWN0Y2hyb21vc29tZX1fJHtpfVwiPmNocm9tb3NvbWUke2krMX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgJHtzZWxlY3RjaHJvbW9zb21lW2ldfVxyXG4gICAgICAgICAgICAgICAgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3M9XCJwdXJlLWdyb3VwIHB1cmUtaW5wdXQtMS00XCIgIHN0eWxlPVwiYm9yZGVyLXN0eWxlOiBub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJTY29tcGFyYXRpZl9pbnB1dFwiPlMgY29tcGFyYXRpZiAoJmx0OyAwLjA1KTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiU2NvbXBhcmF0aWZfaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCIxLjBlLTJcIiBtaW49XCIwXCIgbWF4PVwiMC4wNVwiIHN0ZXA9XCJhbnlcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzPVwicHVyZS1ncm91cCBwdXJlLWlucHV0LTEtNFwiICBzdHlsZT1cImJvcmRlci1zdHlsZTogbm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHByaW1hcnkgdm9pclwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInRvdG9cIj5DaGVyY2hlIC4uLjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVyaWVuY2UgTnVtPC90aD48dGg+RXhwZXJpZW5jZUlEPC90aD48dGg+UXVpPC90aD4gPHRoPlF1YW5kPC90aD48dGg+RGF0ZSBFbnJlZ2lzdHJlbWVudDwvdGg+PHRoPlZvaXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFeHBlcmllbmNldWlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHggPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZShhbGxFeHBlcmllbmNldWlkW2ldKTtcclxuICAgICAgICAgICAgaWYgKHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2FsbEV4cGVyaWVuY2V1aWRbaV19PC90ZD48dGQ+JHt4LmV4cGVyaWVuY2VzdHJpbmdpZH08L3RkPjx0ZD4ke3guZmFpdGVwYXJxdWl9PC90ZD48dGQ+JHt4LmRhdGVyZWFsaXNhdGlvbmV4cGVyaWVuY2V9PC90ZD48dGQ+JHt4LmRhdGVpbnNlcnR9PC90ZD48dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW4gdm9pclwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cIiR7dGhpcy5faWRPS0J1dHRvbn1fJHthbGxFeHBlcmllbmNldWlkW2ldfVwiPlZvaXI8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IHsgaVJlc3VsdGF0TWVzc2FnZSwgaUdlbm90eXBlTWVzc2FnZSB9IGZyb20gJy4vU2VydmljZXMvREIvaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpTXlIdG1sSW5mbywgY1Rvb2xzIH0gZnJvbSAnLi9pbmZyYS9jVG9vbHMnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfY3JlYXRlIGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRDcmVhdGlvbk9LQnV0dG9uOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9jcmVhdGVfU2Fpc2llRXhwZXJpZW5jZV9PS0J1dHRvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZENyZWF0aW9uRXhwZXJpZW5jZUdyb3VwT2ZJbmZvOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9jcmVhdGVfU2Fpc2llRXhwZXJpZW5jZV9FeHBJREdyb3VwJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQ3JlYXRpb25EYXRlRXhwOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9jcmVhdGVfU2Fpc2llRXhwZXJpZW5jZV9EYXRlRXhwJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQ3JlYXRpb25RdWk6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2NyZWF0ZV9TYWlzaWVFeHBlcmllbmNlX1F1aSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZENyZWF0aW9uRmlsZXM6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2NyZWF0ZV9TYWlzaWVFeHBlcmllbmNlX0ZpbGVzJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQ3JlYXRpb25EaXZGb3JNZXNzYWdlSW5mbzogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfY3JlYXRlX01haW5UYWJfRGl2Rm9yRm9ybV9JbmZvJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQ3JlYXRpb25FeHBlcmllbmNlTm9tUHJlZml4ZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfY3JlYXRlX01haW5UYWJfVUlfSW5mb19FeHBlcmllbmNlQXNMZXR0cmUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRDcmVhdGlvbkV4cGVyaWVuY2VFeHBlcmllbmNldHlwZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfY3JlYXRlX01haW5UYWJfVUlfSW5mb19faWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRDcmVhdGlvbkV4cGVyaWVuY2VDbGVmOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9jcmVhdGVfTWFpblRhYl9VSV9JbmZvX2lkRXhwZXJpZW5jZUNsZWYnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRDcmVhdGlvbkV4cGVyaWVuY2VOdW1lcm86IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2NyZWF0ZV9NYWluVGFiX1VJX0luZm9faWRFeHBlcmllbmNlTnVtZXJvJztcclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfTXlfTWVzc2FnZV9DbGFzc2UgOiBzdHJpbmcgPSAnQ2xhc3NlRGVzTWVzc2FnZXNJbmZvJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFVwZGF0ZU9LQnV0dG9uOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZE9LQnV0dG9uJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkVXBkYXRlSW5wdXRFeHA6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkSW5wdXRFeHAnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPbmNocm9tb3NvbWUxOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTEnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPbmNocm9tb3NvbWUyOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTInO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPbmNocm9tb3NvbWUzOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPbmNocm9tb3NvbWU0OiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPblRlc3RUeXBlOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uVGVzdFR5cGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPbk1hcnF1YWdlOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uTWFycXVhZ2UnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVTZWxlY3RPblRlcnJpdG9pcmU6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25UZXJyaXRvaXJlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkVXBkYXRlSW5wdXROYkVjaGFudGlsbG9uOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0TmJFY2hhbnRpbGxvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFVwZGF0ZUlucHV0U0dlbmVyYWw6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X19pZElucHV0U0dlbmVyYWwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRVcGRhdGVJbnB1dFNDb21wYXJhdGlmOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0U0NvbXBhcmF0aWYnO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE5iIGdlbm90eXBlIHBhciBkZWZhdXRcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25iR2Vub3R5cGUgPSA0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcignY015VUlfTWFpblRhYl9jcmVhdGUnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICAvLyBhZmZpY2hhZ2UgZGUgbGEgem9uZSBkZSBjcmVhdGlvbiBkZSBsJ2V4cGVyaWVuY2VcclxuICAgICAgICByZXRvdXIgKz0gJzxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIj48ZmllbGRzZXQ+PGxlZ2VuZD4gQ3ImZWFjdXRlO2F0aW9uIGRcXCd1bmUgZXhwZXJpZW5jZSBlbiBiYXNlIDwvbGVnZW5kPidcclxuICAgICAgICByZXRvdXIgKz0gdGhpcy5kcmF3Q3JlYXRlRGlhbG9nKCk7XHJcbiAgICAgICAgcmV0b3VyICs9ICc8L2ZpZWxkc2V0PjwvZGl2PidcclxuXHJcbiAgICAgICAgLy8gTGUgc2VwYXJhdGV1clxyXG4gICAgICAgIHJldG91ciArPSAnPGRpdiBjbGFzcz1cInVpIGhvcml6b250YWwgZGl2aWRlclwiPkcmZWFjdXRlO25vdHlwZXMgYXNzb2NpJmVhY3V0ZTtzPC9kaXY+JztcclxuXHJcbiAgICAgICAgLy8gYWZmaWNoYWdlIGRlIGxhIHpvbmUgZGUgbWlzZSBhIGpvdXIgZGUgbCdleHBlcmllbmNlXHJcbiAgICAgICAgcmV0b3VyICs9ICc8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCI+PGZpZWxkc2V0PjxsZWdlbmQ+IE1pc2UgJmFncmF2ZTsgam91ciBkZXMgZyZlYWN1dGU7bm90eXBlcyBhc3NvY2kmZWFjdXRlO3MgJmFncmF2ZTsgdW5lIGV4cGVyaWVuY2UgZW4gYmFzZSA8L2xlZ2VuZD4nXHJcbiAgICAgICAgcmV0b3VyICs9IHRoaXMuZHJhd1VwZGF0ZURpYWxvZygpO1xyXG4gICAgICAgIHJldG91ciArPSAnPC9maWVsZHNldD48L2Rpdj4nO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3Q3JlYXRlRGlhbG9nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyByZWN1cCBkZSBsYSBsaXN0ZSBkZXMgcGVyc29ubmVzIHF1aSBwZXV2ZW50IHJlYWxpc2VyIHVuZSBleHBlcmllbmNlLCBldCBjcmVhdGlvbiBkdSBzZWxlY3QgVUlcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCBEZWZhdWx0UGVyc29ubmVOb206IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGxldCBEZWZhdWx0UGVyc29ubmVOb21Jbml0aWFsZTogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgbGV0IGFsbFBlcnNvbm5lc09wdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgbGV0IGFsbFBlcnNvbm5lczogc3RyaW5nW10gPSBjRXhwZXJpZW5jZS5nZXRBbGxQZXJzb25lKCk7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkIDogc3RyaW5nID0gJ3NlbGVjdGVkJztcclxuICAgICAgICBmb3IgKGxldCBpIDogbnVtYmVyICA9IDA7IGkgPCBhbGxQZXJzb25uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgPSAnJztcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICAgICAgRGVmYXVsdFBlcnNvbm5lTm9tID0gYWxsUGVyc29ubmVzW2ldO1xyXG4gICAgICAgICAgICAgICAgRGVmYXVsdFBlcnNvbm5lTm9tSW5pdGlhbGUgPSBEZWZhdWx0UGVyc29ubmVOb20uY2hhckF0ICgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGxQZXJzb25uZXNPcHRpb24gKz0gYDxvcHRpb24gdmFsdWU9XCIke2FsbFBlcnNvbm5lc1tpXX1cIiAke3NlbGVjdGVkfT4ke2FsbFBlcnNvbm5lc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyByZWN1cCBkZXMgaW5pdGFsZXMgcG9zc2libGVzIGQndW5lIGV4cGVyaWVuY2UsIGV0IGNyZWF0aW9uIGR1IHNlbGVjdCBVSVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbGV0IEFsbEV4cGVyaWVuY2VJbml0aWFsZU9wdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgbGV0IEFsbEV4cGVyaWVuY2VJbml0aWFsZTogc3RyaW5nW10gPSBjRXhwZXJpZW5jZS5nZXRBbGxFeHBlcmllbmNlSW5pdGlhbGUoKTtcclxuICAgICAgICBmb3IgKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IEFsbEV4cGVyaWVuY2VJbml0aWFsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBzZWxlY3RlZCA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSAnc2VsZWN0ZWQnO1xyXG4gICAgICAgICAgICBBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb24gKz0gYDxvcHRpb24gdmFsdWU9XCIke0FsbEV4cGVyaWVuY2VJbml0aWFsZVtpXX1cIiAke3NlbGVjdGVkfT4ke0FsbEV4cGVyaWVuY2VJbml0aWFsZVtpXX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gY3JlYXRpb24gZHUgZGlhbG9ndWVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZyA9IGBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIEV4cGVyaWVuY2UgSUQgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhwZXJpZW5jZSBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5faWRDcmVhdGlvbkV4cGVyaWVuY2VHcm91cE9mSW5mb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke0RlZmF1bHRQZXJzb25uZU5vbUluaXRpYWxlfVwiIGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uRXhwZXJpZW5jZU5vbVByZWZpeGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uRXhwZXJpZW5jZU51bWVyb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiB4LWxhcmdlOyBtYXJnaW46YXV0bztcIj4tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInVpIGNvbXBhY3Qgc2VsZWN0aW9uIGRyb3Bkb3duXCIgaWQ9XCIke3RoaXMuX2lkQ3JlYXRpb25FeHBlcmllbmNlRXhwZXJpZW5jZXR5cGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgaWQ9XCIke3RoaXMuX2lkQ3JlYXRpb25FeHBlcmllbmNlQ2xlZn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIGRhdGUgZGUgbGUgRXhwZXJpZW5jZSAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRlIGRlIGwnZXhwZXJpZW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGUtZXhwXCIgdmFsdWU9XCIyMDIwLTEwLTAxXCIgbWluPVwiMjAyMC0xMC0wMVwiIGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uRGF0ZUV4cH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8IS0tIHF1aSBhIGZhaXQgbGUgRXhwZXJpZW5jZSAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWkgYSByZWFsaXNlIGwnZXhwZXJpZW5jZT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ1aSBjb21wYWN0IHNlbGVjdGlvbiBkcm9wZG93blwiIGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uUXVpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2FsbFBlcnNvbm5lc09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gRmljaGllciBhc3NvY2llZCAgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGllbiB2ZXJzIGxlcyBpbWFnZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJleHBJbWFnZVwiIGFjY2VwdD1cIipcIiBtdWx0aXBsZSBpZD1cIiR7dGhpcy5faWRDcmVhdGlvbkZpbGVzfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBab25lIGEgbWVzc2FnZSAgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uRGl2Rm9yTWVzc2FnZUluZm99XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBWYWxpZGF0aW9uICAtLT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcGluayByaWdodCBmbG9hdGVkXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHt0aGlzLl9pZENyZWF0aW9uT0tCdXR0b259XCI+Q3ImZWFjdXRlO2F0aW9uIGRlIGxcXCdleHAmZWFjdXRlO3JpZW5jZSAhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5gO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd1VwZGF0ZURpYWxvZygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIE5iIGdlbm90eXBlIHBhciBkZWZhdXRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgY29uc3QgbmJMaWduZSA9IHRoaXMuX25iR2Vub3R5cGU7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBMZXMgaW5mb3MgYSBhZmZpY2hlciBkYW5zIGwnVUkgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGxldCBpbmZvc0ZvckhUTUw6IGlNeUh0bWxJbmZvO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMTogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMjogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMzogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lNDogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBJbnB1dE5iRWNoYW50aWxsb246IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0VHlwZVRlc3Q6IHN0cmluZztcclxuICAgICAgICBsZXQgc2VsZWN0TWFycXVhZ2U6IHN0cmluZztcclxuICAgICAgICBsZXQgc2VsZWN0VGVycml0b2lyZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBJbnB1dFNHZW5lcmFsOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IElucHV0U0NvbXBhcmF0aWY6IHN0cmluZztcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIFJlY3VwIGRlcyBpbmZvIGVuIERCIGV0IGNvbnN0cnVjdGlvbiBkZXMgU2VsZWN0IGdlbmVyaXF1ZXNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkxpZ25lOyBpKyspIHtcclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTF9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUxW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMSgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTJ9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUyW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMigpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTN9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUzW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMygpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTR9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWU0W2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lNCgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEludCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkVXBkYXRlSW5wdXROYkVjaGFudGlsbG9ufV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBJbnB1dE5iRWNoYW50aWxsb25baV0gPSBjVG9vbHMuQnVpbGRJbnB1dEludCgnMCcsIGluZm9zRm9ySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215SW5wdXRGbG9hdCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkVXBkYXRlSW5wdXRTR2VuZXJhbH1gLCAncGxhY2Vob2xkZXInOiAnMS43OWUtMTEnIH07XHJcbiAgICAgICAgSW5wdXRTR2VuZXJhbCA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEZsb2F0JywgJ3R5cGUnOiAnbnVtYmVyJywgJ2lkJzogYCR7dGhpcy5faWRVcGRhdGVJbnB1dFNDb21wYXJhdGlmfWAsICdwbGFjZWhvbGRlcic6ICcxLjc5ZS0xMScgfTtcclxuICAgICAgICBJbnB1dFNDb21wYXJhdGlmID0gY1Rvb2xzLkJ1aWxkSW5wdXRJbnQoJzEnLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFVwZGF0ZVNlbGVjdE9uVGVzdFR5cGV9YCB9O1xyXG4gICAgICAgIHNlbGVjdFR5cGVUZXN0ID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxUZXN0VHlwZSgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkVXBkYXRlU2VsZWN0T25NYXJxdWFnZX1gIH07XHJcbiAgICAgICAgc2VsZWN0TWFycXVhZ2UgPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbE1hcnF1YWdlKCksIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRVcGRhdGVTZWxlY3RPblRlcnJpdG9pcmV9YCB9O1xyXG4gICAgICAgIHNlbGVjdFRlcnJpdG9pcmUgPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbFRlcnJpdG9pcmUoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDb250cnVjdGluIGRlIGwnVUlcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcGluayByaWdodCBmbG9hdGVkXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHt0aGlzLl9pZFVwZGF0ZU9LQnV0dG9ufVwiPk9LICE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2UgSWRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIFJlY3VwIGR1IG5vbSBkZSBsJ2V4cHJpZW5jZSBkZSBsJ1VJIE9VIHBhciBjYWxsYmFjayBBVFRFTlRJT04tLT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIltsZXR0cmVdW2NoaWZmcmVdLVtsZXR0cmVdW2NoaWZmcmVdXCIgaWQ9XCIke3RoaXMuX2lkVXBkYXRlSW5wdXRFeHB9XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HZW5vdHlwZTwvdGg+PHRoPnRlcnJpdG9pcmU8L3RoPjx0aD5jaHJvbW9zb21lc29tZSAxPC90aD4gPHRoPmNocm9tb3NvbWVzb21lIDI8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMzwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5iIEVjaGFudGlsbG9uPC90aD48dGg+TWFycXVhZ2U8L3RoPjx0aD5TIGdlbmVyYWw8L3RoPjx0aD5TIGNvbXBhcmF0aWY8L3RoPjx0aD5UeXBlIHRlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkxpZ25lOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gbGUgdGVycml0b2lyZSBkZSB0b3VzIGxlcyBjaHJvbW9zb21lcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7c2VsZWN0VGVycml0b2lyZX08L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gbGVzIGNocm9tb3NvbWVzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7c2VsZWN0Y2hyb21vc29tZTFbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMltpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUzW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTRbaV19PC90ZD4gPHRkPiR7SW5wdXROYkVjaGFudGlsbG9uW2ldfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBsZXMgaW5mbyBkZSB0b3VzIGxlcyBjaHJvbW8gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke3NlbGVjdE1hcnF1YWdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke0lucHV0U0dlbmVyYWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7SW5wdXRTQ29tcGFyYXRpZn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtzZWxlY3RUeXBlVGVzdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RyAke2kgKyAxfTwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGxlcyBjaHJvbW9zb21lcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7c2VsZWN0Y2hyb21vc29tZTFbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMltpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUzW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTRbaV19PC90ZD48dGQ+JHtJbnB1dE5iRWNoYW50aWxsb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFkZENhbGxCYWNrT25NeURpYWxvZ19jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLmFkZENhbGxCYWNrT25NeURpYWxvZ19ham91dCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhZGRDYWxsQmFja09uTXlEaWFsb2dfYWpvdXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWN0aXZlciBsZXMgc2VtZW50aWNVSSBkdSBkaWFsb2dcclxuXHJcbiAgICAgICAgLy8gY2hvaXNpciBsYSB0YWIgcGFyIGRlZmF1dFxyXG4gICAgICAgIC8vICQoJy51aSAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAkKGAjJHt0aGlzLl9pZFRhYlNhaXNpZX1gKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jcmVhdGUgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke21lLl9pZENyZWF0aW9uRXhwZXJpZW5jZUdyb3VwT2ZJbmZvfWApLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQ6IEpRdWVyeS5DaGFuZ2VFdmVudCkge1xyXG4gICAgICAgICAgICBsZXQgbGV0dHJlTm9tUHJlZml4RXhwSUQgOiBzdHJpbmcgPSAkKGAjJHttZS5faWRDcmVhdGlvbkV4cGVyaWVuY2VOb21QcmVmaXhlfWApLnZhbCgpIGFzIHN0cmluZztcclxuICAgICAgICAgICAgbGV0IGNoaWZmcmVOdW1FeHBJZCA6IG51bWJlciA9ICQoYCMke21lLl9pZENyZWF0aW9uRXhwZXJpZW5jZU51bWVyb31gKS52YWwoKSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBsZXR0cmVUeXBlRXhwSWQgOiBzdHJpbmcgPSAkKGAjJHttZS5faWRDcmVhdGlvbkV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1gKS52YWwoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGxldCBjaGlmZnJlQ2xlZkV4cElkIDogbnVtYmVyID0gJChgIyR7bWUuX2lkQ3JlYXRpb25FeHBlcmllbmNlQ2xlZn1gKS52YWwoKSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBFeHBJZE5hbWUgPSBsZXR0cmVOb21QcmVmaXhFeHBJRCArIGNoaWZmcmVOdW1FeHBJZC50b1N0cmluZygpICsgJy0nICsgbGV0dHJlVHlwZUV4cElkICsgY2hpZmZyZUNsZWZFeHBJZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAkKGAjJHttZS5faWRVcGRhdGVJbnB1dEV4cH1gKS52YWwoRXhwSWROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICQoYCMke21lLl9pZENyZWF0aW9uT0tCdXR0b259YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsSW5mb3NGcm9tUGFnZTogaVJlc3VsdGF0TWVzc2FnZSA9IGNFeHBlcmllbmNlLmNyZWF0ZV9pUmVzdWx0YXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuZXhwZXJpZW5jZXN0cmluZ2lkID0gPHN0cmluZz4kKGAjJHttZS5faWRVcGRhdGVJbnB1dEV4cH1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5pZGV4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlVWlkRnJvbUV4cGVyaWVuY2VTdHJpbmdpZChhbGxJbmZvc0Zyb21QYWdlLmV4cGVyaWVuY2VzdHJpbmdpZCk7XHJcblxyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLm1hcnF1YWdlID0gPHN0cmluZz4kKGAjJHttZS5faWRVcGRhdGVTZWxlY3RPbk1hcnF1YWdlfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLnRlcnJpdG9pcmUgPSA8c3RyaW5nPiQoYCMke21lLl9pZFVwZGF0ZVNlbGVjdE9uVGVycml0b2lyZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5TQ29tcGFyYXRpZiA9IDxudW1iZXI+JChgIyR7bWUuX2lkVXBkYXRlSW5wdXRTQ29tcGFyYXRpZn1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5TR2VuZXJhbCA9IDxudW1iZXI+JChgIyR7bWUuX2lkVXBkYXRlSW5wdXRTR2VuZXJhbH1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS50eXBlZGV0ZXN0ID0gPHN0cmluZz4kKGAjJHttZS5faWRVcGRhdGVTZWxlY3RPblRlc3RUeXBlfWApLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5iVmFsdWF0ZWRHZW5vdHlwZTogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZS5fbmJHZW5vdHlwZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsSW5mb3NGcm9tR2Vub3R5cGU6IGlHZW5vdHlwZU1lc3NhZ2UgPSBjRXhwZXJpZW5jZS5jcmVhdGVfaUdlbm90eXBlTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTEgPSA8c3RyaW5nPiQoYCMke21lLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTF9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLmNocm9tb3NvbWUyID0gPHN0cmluZz4kKGAjJHttZS5faWRVcGRhdGVTZWxlY3RPbmNocm9tb3NvbWUyfV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5jaHJvbW9zb21lMyA9IDxzdHJpbmc+JChgIyR7bWUuX2lkVXBkYXRlU2VsZWN0T25jaHJvbW9zb21lM31fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTQgPSA8c3RyaW5nPiQoYCMke21lLl9pZFVwZGF0ZVNlbGVjdE9uY2hyb21vc29tZTR9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLm5iZWNoYW50aWxsb24gPSA8bnVtYmVyPiQoYCMke21lLl9pZFVwZGF0ZUlucHV0TmJFY2hhbnRpbGxvbn1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChhbGxJbmZvc0Zyb21QYWdlLkdlbm90eXBlICE9IG51bGwpICYmIChhbGxJbmZvc0Zyb21HZW5vdHlwZS5uYmVjaGFudGlsbG9uID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLkdlbm90eXBlLnB1c2goYWxsSW5mb3NGcm9tR2Vub3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5iVmFsdWF0ZWRHZW5vdHlwZSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuTmJHZW5vdHlwZSA9IG5iVmFsdWF0ZWRHZW5vdHlwZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNFeHBlcmllbmNlLnVwZGF0ZURCRXhwZXJpZW5jZShhbGxJbmZvc0Zyb21QYWdlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgYWRkQ2FsbEJhY2tPbk15RGlhbG9nX2NyZWF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNoZWNrRm9ybUNvbnRlbnUoKTtcclxuICAgICAgICB0aGlzLmxpZW5FeHByaWVuY2VJZF9Ob21NYW5pcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGllbkV4cHJpZW5jZUlkX05vbU1hbmlwKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jcmVhdGUgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke3RoaXMuX2lkQ3JlYXRpb25RdWl9YCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSA8c3RyaW5nPiQoYCMke21lLl9pZENyZWF0aW9uUXVpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgdmFsRW50ZXRlID0gdmFsLmNoYXJBdCgwKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ3JlYXRpb25FeHBlcmllbmNlTm9tUHJlZml4ZX1gKS52YWwodmFsRW50ZXRlKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkQ3JlYXRpb25FeHBlcmllbmNlR3JvdXBPZkluZm99YCkudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBDYWxsYmFjayBkdSBPS1xyXG4gICAgLy8gICAgICAxLiBjaGVjayBkdSBjb250ZW51IGR1IGZvcm11bGFpcmVcclxuICAgIC8vICAgICAgMi4gZW52b2llIGVuIERCIHNpIE9LXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgY2hlY2tGb3JtQ29udGVudSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfY3JlYXRlID0gdGhpcztcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZENyZWF0aW9uT0tCdXR0b259YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXMgMyBjaGFtcHMgYSBjb250cm9sZXJcclxuICAgICAgICAgICAgbGV0IGRhdGU6IHN0cmluZyA9IDxzdHJpbmc+JChgIyR7bWUuX2lkQ3JlYXRpb25EYXRlRXhwfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgcXVpOiBzdHJpbmcgPSA8c3RyaW5nPiQoYCMke21lLl9pZENyZWF0aW9uUXVpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gJChgIyR7bWUuX2lkQ3JlYXRpb25GaWxlc31gKS5wcm9wKCdmaWxlcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXJydXJzIHNpIDEgbWFucXVlXHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yTWVzc2FnZTogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1aSBuZWdhdGl2ZSBtZXNzYWdlICR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfVwiPjxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5gO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBiIGRlIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbCBmYXV0IGNob2lzaXIgdW5lIGRhdGUgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvck1lc3NhZ2UgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IElsIGZhdXQgY2hvaXNpciBhdSBtb2lucyB1bmUgaW1hZ2UgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgIC8vIGFmZmljaGUgZGUgbCdlcnJldXJcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoYCMke21lLl9pZENyZWF0aW9uRGl2Rm9yTWVzc2FnZUluZm99YCkuYXBwZW5kKG9uRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICQoYCMke21lLl9pZENyZWF0aW9uRGl2Rm9yTWVzc2FnZUluZm99YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoYC4ke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZW52b2llIGVuIERCXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwZXJpZW5jZUlkOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRDcmVhdGlvbkV4cGVyaWVuY2VOb21QcmVmaXhlfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICQoYCMke21lLl9pZENyZWF0aW9uRXhwZXJpZW5jZU51bWVyb31gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAnLScgKyAkKGAjJHttZS5faWRDcmVhdGlvbkV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRDcmVhdGlvbkV4cGVyaWVuY2VDbGVmfWApLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZDogbnVtYmVyID0gY0V4cGVyaWVuY2UuY3JlYXRlREJFeHBlcmllbmNlKGV4cGVyaWVuY2VJZCwgZGF0ZSwgcXVpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjRXhwZXJpZW5jZS51cGxvYWRGaWxlcyhpZCwgZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgb25PS01lc3NhZ2U6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidWkgcG9zaXRpdmUgbWVzc2FnZSAke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1cIj48aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICBvbk9LTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGlvbiBleHBlcmllbmNlIGVuIERCIC0tIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ICR7ZXhwZXJpZW5jZUlkfSwgJHtkYXRlfSwgJHtxdWl9LCAke2ZpbGVzfSA8L3A+YDtcclxuICAgICAgICAgICAgICAgICAgICBvbk9LTWVzc2FnZSArPSAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAkKGAjJHttZS5faWRDcmVhdGlvbkRpdkZvck1lc3NhZ2VJbmZvfWApLmFwcGVuZChvbk9LTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkQ3JlYXRpb25EaXZGb3JNZXNzYWdlSW5mb31gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYC4ke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5fY3RybC5zZXRMYXN0RXhwKGV4cGVyaWVuY2VJZCwgaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0ltcG9zc2libGUgZGUgbWV0dHJlIGVuIGJhc2UgY2V0dGUgZGVtYW5kZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IHsgaVJlc3VsdGF0TWVzc2FnZSwgaUdlbm90eXBlTWVzc2FnZSB9IGZyb20gJy4vU2VydmljZXMvREIvaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpRXhwZXJpZW5jZUlETWVzc2FnZSwgaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaU15SHRtbEluZm8sIGNUb29scyB9IGZyb20gJy4vaW5mcmEvY1Rvb2xzJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfbG9naW4gZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2NNeVVJX2xvZ2luJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICAkKCcjcm9vdCcpLmFkZENsYXNzICgnbG9naW4nKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIG1pZGRsZSBhbGlnbmVkIGNlbnRlciBhbGlnbmVkIGdyaWQgbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ1aSBpbWFnZSBoZWFkZXIgbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvbG9naW4ucG5nXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBtZXRob2Q9XCJnZXRcIiBjbGFzcz1cInVpIGxhcmdlIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgIHNlY29uZGFyeSAgc2VnbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgaWNvbiBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJ1c2VyIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbCBhZGRyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IGljb24gaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibG9jayBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZmx1aWQgbGFyZ2UgdGVhbCBzdWJtaXQgYnV0dG9uXCI+TG9naW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yIG1lc3NhZ2VcIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3VyIHMnZW5yZWdpc3RyZXIgdm9pciBOYW5pZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PiZjb3B5OyBOYW5pZSBGYWdlcyAob2N0b2JyZSAyMDIwKSAtIFVWU1EgLSBMaWNlbmNlIE1JVDwvZGl2PlxyXG5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IGlSZXN1bHRhdE1lc3NhZ2UsIGlHZW5vdHlwZU1lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlNeUh0bWxJbmZvLCBjVG9vbHMgfSBmcm9tICcuL2luZnJhL2NUb29scyc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX2xvZ291dCBleHRlbmRzIGNNeVVJIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcignY015VUlfbG9nb3V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9IGBQYXMgZW5jb3JlIGNvZGVgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV1aWQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJ6ZXVndCBlaW5lIFVVSUQgbmFjaCBSRkMgNDEyMlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxyXG5cclxuICAgIHB1YmxpYyB1dWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7IC8vIE5hY2hrb21tYXN0ZWxsZW4gYWJzY2huZWlkZW5cclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gY2hhciA9PT0gJ3gnID8gcmFuZG9tIDogKHJhbmRvbSAlIDQgKyA4KTsgLy8gQmVpIHggUmFuZG9tIDAtMTUgKDAtRiksIGJlaSB5IFJhbmRvbSAwLTMgKyA4ID0gOC0xMSAoOC1iKSBnZW3DpHNzIFJGQyA0MTIyXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygxNik7IC8vIEhleGFkZXppbWFsZXMgWmVpY2hlbiB6dXLDvGNrZ2ViZW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImVudW0gZUNvbmZpZ0Nvbm51ZXMge1xyXG4gICAgTmFuaWUgPSAwLFxyXG4gICAgUGFwcyA9IDFcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNDb25maWdzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9jdXJyZW50Q29uZmlnOiBlQ29uZmlnQ29ubnVlcyA9IGVDb25maWdDb25udWVzLk5hbmllO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9hamF4V1NVUkw6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICcvbmFuaWUvc2VydmVyL1dTL0JSSVdTLnBocCcsIC8qIE5hbmllICovXHJcbiAgICAgICAgJy9uYW5pZS9zZXJ2ZXIvV1MvQlJJV1MucGhwJyAvKiBQYXBzICovXHJcbiAgICBdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYWpheFdTVVJMKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjQ29uZmlncy5fYWpheFdTVVJMW2NDb25maWdzLl9jdXJyZW50Q29uZmlnXTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgY0NvbnRyb2xlciB7XHJcbiAgICBwcml2YXRlIF9sYXN0RXhwOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgX2lMYXN0RXhwOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NpbmdsZXRvbjogY0NvbnRyb2xlciB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIGNDb250cm9sZXIuX3NpbmdsZXRvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fbGFzdEV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuX2lMYXN0RXhwID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEludGFuY2UoKSA6IGNDb250cm9sZXIge1xyXG4gICAgICAgIGlmIChjQ29udHJvbGVyLl9zaW5nbGV0b24gPT0gbnVsbClcclxuICAgICAgICAgICAgY0NvbnRyb2xlci5fc2luZ2xldG9uID0gbmV3IGNDb250cm9sZXIoKTtcclxuICAgICAgICByZXR1cm4gY0NvbnRyb2xlci5fc2luZ2xldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYXN0RXhwKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhc3RFeHA7XHJcbiAgICB9XHJcbiAgICBnZXQgaUxhc3RFeHAoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faUxhc3RFeHA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qXHJcbiAgICBzZXQgbGFzdEV4cChsYXN0RXhwOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9sYXN0RXhwID0gbGFzdEV4cDtcclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgcHVibGljIHNldExhc3RFeHAobGFzdEV4cDogc3RyaW5nLCBpTGFzdEV4cDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fbGFzdEV4cCA9IGxhc3RFeHA7XHJcbiAgICAgICAgdGhpcy5faUxhc3RFeHAgPSBpTGFzdEV4cDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZUxvZ2dlckxldmVsIH0gZnJvbSAnLi9jTG9nZ2VyJztcclxuaW1wb3J0IHsgY0NvbmZpZ3MgfSBmcm9tICcuL2NDb25maWdzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNFbnZ0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9kZWJ1Z0xldmVsIDogZUxvZ2dlckxldmVsID0gZUxvZ2dlckxldmVsLkRlYnVnO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2FqYXhXU1VSTDogc3RyaW5nID0gY0NvbmZpZ3MuYWpheFdTVVJMKCk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXREZWJ1Z0xldmVsKCk6IGVMb2dnZXJMZXZlbCB7XHJcbiAgICAgICAgcmV0dXJuIGNFbnZ0Ll9kZWJ1Z0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0QWpheFVSTFdTKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHggOiBzdHJpbmcgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xyXG4gICAgICAgIHJldHVybiAoeCArIGNFbnZ0Ll9hamF4V1NVUkwpO1xyXG4gICAgfVxyXG59XHJcbiIsIiAgICBleHBvcnQgZW51bSBlTG9nZ2VyTGV2ZWwge1xyXG4gICAgICAgIEFsbCAgICAgICAgID0gMCxcclxuICAgICAgICBEZWJ1ZyAgICAgICA9IDUwLFxyXG4gICAgICAgIFdhcm5pbmcgICAgID0gMTAwLFxyXG4gICAgICAgIEVycm9yICAgICAgID0gMTUwLFxyXG4gICAgICAgIEZhdGFsICAgICAgID0gMjAwXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIGNMb2dnZXIge1xyXG4gICAgICAgIHByaXZhdGUgX2xldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciAobGV2ZWw6IGVMb2dnZXJMZXZlbCwgaWQ6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWxsIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuQWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEZWJ1ZyAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXYXJuaW5nIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVycm9yIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBGYXRhbChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9nIChtc2c6IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPiB0aGlzLl9sZXZlbClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBpTXlIdG1sSW5mbyB7XHJcbiAgICBjbGFzcz86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIGluZGljZXNlbGVjdGVkPzogbnVtYmVyO1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86c3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY1Rvb2xzIHtcclxuICAgIHN0YXRpYyBCdWlsZFNlbGVjdEZyb21UYWIodmFsczogc3RyaW5nW10sIGluZm86IGlNeUh0bWxJbmZvKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA9ICcnO1xyXG4gICAgICAgIGxldCBhbGxLZXlzIDogc3RyaW5nIFtdID0gT2JqZWN0LmtleXMoaW5mbyk7XHJcblxyXG4gICAgICAgIHJldG91ciA9IGA8c2VsZWN0IGA7XHJcbiAgICAgICAgaWYgKGluZm9bJ2NsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGNsYXNzPVwiJHtpbmZvWydjbGFzcyddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvWydzdHlsZSddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBzdHlsZT1cIiR7aW5mb1snc3R5bGUnXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5mb1snaWQnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgaWQ9XCIke2luZm9bJ2lkJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGA+YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA6IG51bWJlciA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgoaW5mb1snaW5kaWNlc2VsZWN0ZWQnXSAhPT0gdW5kZWZpbmVkKSAmJiAoaSA9PT0gaW5mb1snaW5kaWNlc2VsZWN0ZWQnXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIiR7dmFsc1tpXX1cIj4ke3ZhbHNbaV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsc1tpXX1cIj4ke3ZhbHNbaV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYDwvc2VsZWN0PmA7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQnVpbGRJbnB1dEludCh2YWw6IHN0cmluZywgaW5mbzogaU15SHRtbEluZm8pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgPSBgPGlucHV0IHR5cGU9XCIke2luZm9bJ3R5cGUnXX1cIiBuYW1lPVwiJHtpbmZvWydpZCddfVwiIGlkPVwiJHtpbmZvWydpZCddfVwiIHZhbHVlPVwiJHt2YWx9XCIgc3RlcD1cImFueVwiIGA7XHJcbiAgICAgICAgaWYgKGluZm9bJ2NsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGNsYXNzPVwiJHtpbmZvWydjbGFzcyddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvWydwbGFjZWhvbGRlciddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBwbGFjZWhvbGRlcj1cIiR7aW5mb1sncGxhY2Vob2xkZXInXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYC8+YDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==