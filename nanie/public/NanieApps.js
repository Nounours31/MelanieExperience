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
___CSS_LOADER_EXPORT___.push([module.i, ".inverse {\n  background-color: #333;\n  color: white;\n}\n\n.MyApps {\n  color: green;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.accordion {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  width: 100% !important;\n}\n\n.mySelect {\n  width: 100px !important;\n  background-color: lightgreen !important;\n}\n\n.myInputInt {\n  width: 75px !important;\n  background-color: lightblue !important;\n}\n\n.myInputFloat {\n  width: 100px !important;\n  background-color: lightblue !important;\n}\n\n.ui.grid.container {\n  width: 100% !important;\n}", "",{"version":3,"sources":["webpack://sass/myApps.scss","webpack://sass/base.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,YAAA;AADF;;AAIA;EACE,YCJW;EDKX,4CAAA;AADF;;AAKA;EACI,gBAAA;EACA,mBAAA;EACA,sBAAA;AAFJ;;AAKA;EACE,uBAAA;EACA,uCAAA;AAFF;;AAKA;EACE,sBAAA;EACA,sCAAA;AAFF;;AAKA;EACE,uBAAA;EACA,sCAAA;AAFF;;AAMA;EACI,sBAAA;AAHJ","sourcesContent":["@use 'base';\r\n\r\n.inverse {\r\n  background-color: base.$primary-color;\r\n  color: white;\r\n}\r\n\r\n.MyApps {\r\n  color: base.$body-color;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\n\r\n.accordion {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    width: 100% !important;\r\n}\r\n\r\n.mySelect {\r\n  width: 100px !important;\r\n  background-color: lightgreen !important;\r\n}\r\n\r\n.myInputInt {\r\n  width: 75px !important;\r\n  background-color: lightblue !important;\r\n}\r\n\r\n.myInputFloat {\r\n  width: 100px !important;\r\n  background-color: lightblue !important;\r\n}\r\n\r\n\r\n.ui.grid.container {\r\n    width: 100% !important;\r\n}","// _base.scss\r\n$font-stack:    Helvetica, sans-serif;\r\n\r\n$primary-color: #333;\r\n$body-color: green;\r\n\r\n\r\n"],"sourceRoot":""}]);
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



var NanieApps = /** @class */ (function () {
    function NanieApps() {
    }
    NanieApps.prototype.main = function () {
        var rootDiv = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.root');
        var dialog = new _cMyUI_MainTab__WEBPACK_IMPORTED_MODULE_2__["default"]();
        var newHTML = dialog.draw();
        if ((rootDiv != null) && (newHTML != null)) {
            rootDiv.append(newHTML);
        }
        dialog.addCallBackOnMyDialog();
    };
    return NanieApps;
}());
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
/* harmony import */ var _cMyUI_MainTab_ajout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cMyUI_MainTab_ajout */ "./src/cMyUI_MainTab_ajout.ts");
/* harmony import */ var _cMyUI_MainTab_consultation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cMyUI_MainTab_consultation */ "./src/cMyUI_MainTab_consultation.ts");
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
        var _this = _super.call(this, 'MainTab') || this;
        _this._idTabSaisie = 'tab-saisie';
        _this._idAccordeonCompleterExperience = 'idAccordeonCompleterExperience';
        _this._creationUI = new _cMyUI_MainTab_create__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this._ajoutUI = new _cMyUI_MainTab_ajout__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this._ConsultationUI = new _cMyUI_MainTab_consultation__WEBPACK_IMPORTED_MODULE_3__["default"]();
        return _this;
    }
    cMyUI_MainTab.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        $('.ui.accordion').accordion();
        $('.tabular.menu .item').tab();
        var me = this;
        me._creationUI.addCallBackOnMyDialog();
        me._ajoutUI.addCallBackOnMyDialog();
        me._ConsultationUI.addCallBackOnMyDialog();
        // propagation de l'evenement de mise  ajour de 'id d'experience
        $("#" + this._idAccordeonCompleterExperience).on('click', function () {
            me._ajoutUI.UpdateMyDialog(me._ctrl.lastExp, me._ctrl.iLastExp);
        });
    };
    cMyUI_MainTab.prototype.draw = function () {
        var retour;
        var experienceCreationAccordeonInfo = this.experienceCreationAccordeonInfo();
        var experienceConsultationInfo = this.experienceConsultationInfo();
        retour = "\n        <div class=\"ui fluid container\">\n            <div class=\"ui top attached tabular menu\">\n                <div class=\"active item\" data-tab=\"" + this._idTabSaisie + "\" id=\"" + this._idTabSaisie + "\">Saisie Experience</div>\n                <div class=\"item\" data-tab=\"tab-consultation\">Consultation</div>\n            </div>\n            <div class=\"ui bottom attached active tab segment\" data-tab=\"" + this._idTabSaisie + "\">\n                <!-- Tab Content !-->\n                " + experienceCreationAccordeonInfo + "\n            </div>\n            <div class=\"ui bottom attached tab segment\" data-tab=\"tab-consultation\">\n                <!-- Tab Content !-->\n                " + experienceConsultationInfo + "\n            </div>\n        </div>\n        <div id=\"" + this._idResultatDB + "\"></div>\n        ";
        return retour;
    };
    cMyUI_MainTab.prototype.experienceCreationAccordeonInfo = function () {
        var experienceCreationInfo = this._creationUI.draw();
        var experienceAjoutInfo = this._ajoutUI.draw();
        var retour;
        retour = "\n            <div class=\"ui grid container\">\n                <div class=\"ui styled accordion\">\n                    <div class=\"title active\">\n                        <i class=\"dropdown icon\"></i>\n                        Creation d'une experience\n                    </div>\n                    <div class=\"content active\">\n                        " + experienceCreationInfo + "\n                    </div>\n\n                    <div class=\"title\" id=\"" + this._idAccordeonCompleterExperience + "\">\n                        <i class=\"dropdown icon\"></i>\n                        Completer une experience\n                    </div>\n                    <div class=\"content\">\n                        " + experienceAjoutInfo + "\n                    </div>\n                </div>\n            </div>\n            ";
        return retour;
    };
    cMyUI_MainTab.prototype.experienceConsultationInfo = function () {
        var experienceConsultationInfo = this._ConsultationUI.draw();
        return "<div>" + experienceConsultationInfo + "</div>";
    };
    return cMyUI_MainTab;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab);


/***/ }),

/***/ "./src/cMyUI_MainTab_ajout.ts":
/*!************************************!*\
  !*** ./src/cMyUI_MainTab_ajout.ts ***!
  \************************************/
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



var cMyUI_MainTab_ajout = /** @class */ (function (_super) {
    __extends(cMyUI_MainTab_ajout, _super);
    function cMyUI_MainTab_ajout() {
        var _this = _super.call(this, 'MainTab') || this;
        _this._idOKButton = 'idOKButton';
        _this._idInputExp = 'cMyUI_MainTab_ajout_idInputExp';
        _this._idSelectOnchromosome1 = 'cMyUI_MainTab_ajout_idSelectOnchromosome1';
        _this._idSelectOnchromosome2 = 'cMyUI_MainTab_ajout_idSelectOnchromosome2';
        _this._idSelectOnchromosome3 = 'cMyUI_MainTab_ajout_idSelectOnchromosome3';
        _this._idSelectOnchromosome4 = 'cMyUI_MainTab_ajout_idSelectOnchromosome4';
        _this._idSelectOnTestType = 'cMyUI_MainTab_ajout_idSelectOnTestType';
        _this._idSelectOnMarquage = 'cMyUI_MainTab_ajout_idSelectOnMarquage';
        _this._idInputNbEchantillon = 'cMyUI_MainTab_ajout_idInputNbEchantillon';
        _this._idInputSGeneral = 'cMyUI_MainTab_ajout__idInputSGeneral';
        _this._idInputSComparatif = 'cMyUI_MainTab_ajout_idInputSComparatif';
        _this._nbGenotype = 4;
        return _this;
    }
    cMyUI_MainTab_ajout.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        // choisir la tab par defaut
        // $('.ui .item').removeClass('active');
        // $(`#${this._idTabSaisie}`).addClass('active');
        var me = this;
        $("#" + me._idOKButton).on('click', function (event) {
            var allInfosFromPage = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iResultatMessage();
            allInfosFromPage.experiencestringid = $("#" + me._idInputExp).val();
            allInfosFromPage.idexperience = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getExperienceUidFromExperienceStringid(allInfosFromPage.experiencestringid);
            allInfosFromPage.marquage = $("#" + me._idSelectOnMarquage).val();
            allInfosFromPage.NbGenotype = me._nbGenotype;
            allInfosFromPage.SComparatif = $("#" + me._idInputSComparatif).val();
            allInfosFromPage.SGeneral = $("#" + me._idInputSGeneral).val();
            allInfosFromPage.typedetest = $("#" + me._idSelectOnTestType).val();
            for (var i = 0; i < me._nbGenotype; i++) {
                var allInfosFromGenotype = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iGenotypeMessage();
                allInfosFromGenotype.chromosome1 = $("#" + me._idSelectOnchromosome1 + "_" + i).val();
                allInfosFromGenotype.chromosome2 = $("#" + me._idSelectOnchromosome2 + "_" + i).val();
                allInfosFromGenotype.chromosome3 = $("#" + me._idSelectOnchromosome3 + "_" + i).val();
                allInfosFromGenotype.chromosome4 = $("#" + me._idSelectOnchromosome4 + "_" + i).val();
                allInfosFromGenotype.nbechantillon = $("#" + me._idInputNbEchantillon + "_" + i).val();
                if (allInfosFromPage.Genotype != null)
                    allInfosFromPage.Genotype.push(allInfosFromGenotype);
            }
            var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].updateDBExperience(allInfosFromPage);
            event.stopImmediatePropagation();
            return false;
        });
    };
    cMyUI_MainTab_ajout.prototype.UpdateMyDialog = function (lastExp, ilastExp) {
        var x = lastExp;
        $("#" + this._idInputExp).val(x);
    };
    cMyUI_MainTab_ajout.prototype.draw = function () {
        var retour;
        var nbLigne = this._nbGenotype;
        var x = this._ctrl.lastExp;
        var infosForHTML;
        var selectchromosome1 = ['', '', '', ''];
        var selectchromosome2 = ['', '', '', ''];
        var selectchromosome3 = ['', '', '', ''];
        var selectchromosome4 = ['', '', '', ''];
        var InputNbEchantillon = ['', '', '', ''];
        var selectTypeTest;
        var selectMarquage;
        var InputSGeneral;
        var InputSComparatif;
        for (var i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnchromosome1 + "_" + i };
            selectchromosome1[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome1(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnchromosome2 + "_" + i };
            selectchromosome2[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome2(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnchromosome3 + "_" + i };
            selectchromosome3[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome3(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnchromosome4 + "_" + i };
            selectchromosome4[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllchromosome4(), infosForHTML);
            infosForHTML = { 'class': 'myInputInt', 'type': 'number', 'id': this._idInputNbEchantillon + "_" + i };
            InputNbEchantillon[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('1', infosForHTML);
        }
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idInputSGeneral, 'placeholder': '1.79e-11' };
        InputSGeneral = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'myInputFloat', 'type': 'number', 'id': "" + this._idInputSComparatif, 'placeholder': '1.79e-11' };
        InputSComparatif = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildInputInt('1', infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idSelectOnTestType };
        selectTypeTest = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllTestType(), infosForHTML);
        infosForHTML = { 'class': 'mySelect', 'id': "" + this._idSelectOnMarquage };
        selectMarquage = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllMarquage(), infosForHTML);
        retour = "\n            <form class=\"ui form\">\n                <div class=\"ui labeled input\">\n                    <div class=\"ui label\">\n                        Experience Id\n                    </div>\n                    <input type=\"text\" value=\"" + x + "\" placeholder=\"[lettre][chiffre]-[lettre][chiffre]\" id=\"" + this._idInputExp + "\"/>\n                </div>\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Genotype</th><th>chromosomesome 1</th> <th>chromosomesome 2</th> <th>chromosomesome 3</th><th>chromosomesome 4</th>\n                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectchromosome1[i] + "</td><td>" + selectchromosome2[i] + "</td><td>" + selectchromosome3[i] + "</td><td>" + selectchromosome4[i] + "</td>\n                            <td>" + InputNbEchantillon[i] + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectMarquage + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSGeneral + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSComparatif + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectTypeTest + "</td>\n                    </tr>";
            }
            else {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectchromosome1[i] + "</td><td>" + selectchromosome2[i] + "</td><td>" + selectchromosome3[i] + "</td><td>" + selectchromosome4[i] + "</td><td>" + InputNbEchantillon[i] + "</td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n                <button class=\"ui button pink\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>\n        ";
        return retour;
    };
    return cMyUI_MainTab_ajout;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_ajout);


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
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
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
        retour = "\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Experience Num</th><th>ExperienceID</th><th>Qui</th> <th>Quand</th><th>Date Enregistrement</th><th>Voir</th>\n                    </tr>\n                </thead>\n                <tbody>";
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
}(_cMyUI__WEBPACK_IMPORTED_MODULE_1__["default"]));
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
/* harmony import */ var _cMyUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cMyUI */ "./src/cMyUI.ts");
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
        var _this = _super.call(this, 'MainTab') || this;
        _this._DefaultPersonneNom = 'Fages';
        _this._DefaultPersonneNomInitiale = _this._DefaultPersonneNom.charAt(0);
        _this._idOKButton = 'SaisieExperience_OKButton';
        _this._idDateExp = 'SaisieExperience_DateExp';
        _this._idQui = 'SaisieExperience_Qui';
        _this._idFiles = 'SaisieExperience_Files';
        _this._idDivForMessageInfo = 'MainTab_DivForForm_Info';
        _this._idMessageInfo = 'MainTab_UI_Info_MessageID';
        _this._idExperienceNomPrefixe = 'MainTab_UI_Info_ExperienceAsLettre';
        _this._idExperienceNumero = 'MainTab_UI_Info_idExperienceNumero';
        _this._idExperienceExperiencetype = 'MainTab_UI_Info__idExperienceExperiencetype';
        _this._idExperienceClef = 'MainTab_UI_Info_idExperienceClef';
        _this._My_Message_Classe = 'ClasseDesMessagesInfo';
        return _this;
    }
    cMyUI_MainTab_create.prototype.addCallBackOnMyDialog = function () {
        this.checkFormContenu();
        this.lienExprienceId_NomManip();
    };
    cMyUI_MainTab_create.prototype.lienExprienceId_NomManip = function () {
        var me = this;
        $("#" + this._idQui).on('change', function (event) {
            var val = $("#" + me._idQui).val();
            var valEntete = val.charAt(0);
            $("#" + me._idExperienceNomPrefixe).val(valEntete);
        });
    };
    // ---------------------------------------------------------------------------
    // Callback du OK
    //      1. check du contenu du formulaire
    //      2. envoie en DB si OK
    // ---------------------------------------------------------------------------
    cMyUI_MainTab_create.prototype.checkFormContenu = function () {
        var me = this;
        $("#" + this._idOKButton).on('click', function (event) {
            // les 3 champs a controler
            var date = $("#" + me._idDateExp).val();
            var qui = $("#" + me._idQui).val();
            var files = $("#" + me._idFiles).prop('files');
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
                $("#" + me._idDivForMessageInfo).append(onErrorMessage);
                $("#" + me._idDivForMessageInfo).on('click', function () {
                    $("." + me._My_Message_Classe).remove();
                });
            }
            else {
                // envoie en DB
                var experienceId = '';
                experienceId += $("#" + me._idExperienceNomPrefixe).val();
                experienceId += $("#" + me._idExperienceNumero).val();
                experienceId += '-' + $("#" + me._idExperienceExperiencetype).val();
                experienceId += $("#" + me._idExperienceClef).val();
                var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].createDBExperience(experienceId, date, qui);
                if (id > 0) {
                    _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].uploadFiles(id, files);
                    var onOKMessage = "<div class=\"ui positive message " + me._My_Message_Classe + "\"><i class=\"close icon\"></i>";
                    onOKMessage += "\n                                <div class=\"header\">\n                                    Creation experience en DB -- OK\n                                </div>\n                                <p> " + experienceId + ", " + date + ", " + qui + ", " + files + " </p>";
                    onOKMessage += '</div>';
                    $("#" + me._idDivForMessageInfo).append(onOKMessage);
                    $("#" + me._idDivForMessageInfo).on('click', function () {
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
    cMyUI_MainTab_create.prototype.draw = function () {
        var allPersonnesOption = '';
        var allPersonnes = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllPersone();
        for (var i = 0; i < allPersonnes.length; i++) {
            allPersonnesOption += "<option value=\"" + allPersonnes[i] + "\">" + allPersonnes[i] + "</option>";
        }
        var AllExperienceInitialeOption = '';
        var AllExperienceInitiale = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllExperienceInitiale();
        for (var i = 0; i < AllExperienceInitiale.length; i++) {
            AllExperienceInitialeOption += "<option value=\"" + AllExperienceInitiale[i] + "\">" + AllExperienceInitiale[i] + "</option>";
        }
        var retour = "\n            <form class=\"ui form\">\n                <div class=\"field\">\n                    <label>Experience Id</label>\n                    <div class=\"ui left labeled input\">\n                        <input type=\"text\" value=\"" + this._DefaultPersonneNomInitiale + "\" id=\"" + this._idExperienceNomPrefixe + "\">\n                        <input type=\"number\" value=\"0\" id=\"" + this._idExperienceNumero + "\">\n                        <p style=\"font-size: x-large; margin:auto;\">-</p>\n                        <select class=\"ui compact selection dropdown\" id=\"" + this._idExperienceExperiencetype + "\">\n                            <option selected value=\"A\">A</option>\n                            " + AllExperienceInitialeOption + "\n                            <option value=\"autre\">Autres</option>\n                        </select>\n                        <input type=\"number\" value=\"0\" id=\"" + this._idExperienceClef + "\">\n                    </div>\n                </div>\n\n                <div class=\"field\">\n                    <label>Date de l'experience</label>\n                    <input type=\"date\" name=\"date-exp\" value=\"2020-10-01\" min=\"2020-10-01\" id=\"" + this._idDateExp + "\"/>\n                </div>\n\n                <div class=\"field\">\n                    <label>Qui a realise l'experience?</label>\n                    <select class=\"ui compact selection dropdown\" id=\"" + this._idQui + "\">\n                        <option selected value=\"" + this._DefaultPersonneNom + "\">" + this._DefaultPersonneNom + "</option>\n                        " + allPersonnesOption + "\n                        <option value=\"autre\">Autres</option>\n                    </select>\n                </div>\n\n                <div class=\"field\">\n                    <label>Lien vers les images</label>\n                    <input type=\"file\" name=\"expImage\" accept=\"image/png, image/jpeg\" multiple id=\"" + this._idFiles + "\">\n                </div>\n\n                <div id=\"" + this._idDivForMessageInfo + "\"></div>\n\n                <button class=\"ui button pink\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>";
        return retour;
    };
    return cMyUI_MainTab_create;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_create);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9teUFwcHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zYXNzL215QXBwcy5zY3NzP2MwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbmllQXBwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvREIvY0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9ham91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NNeVVJX01haW5UYWJfY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9VdWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jQ29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0NvbnRyb2xlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0VudnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NUb29scy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RTtnQkFDMUUsTUFBTSxJQUFJLDhCQUEyQixJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFXLENBQUM7YUFDdkU7aUJBQ0k7Z0JBQ0QsTUFBTSxJQUFJLHFCQUFrQixJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFXLENBQUM7YUFDOUQ7U0FDSjtRQUNELE1BQU0sSUFBSSxXQUFXLENBQUM7UUFDdEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLG9CQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxJQUFpQjtRQUMvQyxJQUFJLE1BQU0sR0FBRyxtQkFBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVksR0FBRyxxQkFBZSxDQUFDO1FBQ2hILElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUM3QixNQUFNLElBQUksYUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQUksQ0FBQztTQUN6QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxNQUFNLElBQUksbUJBQWdCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBSSxDQUFDO1NBQ3JEO1FBQ0QsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNmLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdDRCx3QiIsImZpbGUiOiJOYW5pZUFwcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9OYW5pZUFwcHMudHNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaW52ZXJzZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uTXlBcHBzIHtcXG4gIGNvbG9yOiBncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4uYWNjb3JkaW9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XFxuXFxuLm15U2VsZWN0IHtcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlJbnB1dEludCB7XFxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teUlucHV0RmxvYXQge1xcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXG59XFxuXFxuLnVpLmdyaWQuY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zYXNzL215QXBwcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Fzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLFlDSlc7RURLWCw0Q0FBQTtBQURGOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRko7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBS0E7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0FBRkY7O0FBTUE7RUFDSSxzQkFBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ2Jhc2UnO1xcclxcblxcclxcbi5pbnZlcnNlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGJhc2UuJHByaW1hcnktY29sb3I7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5NeUFwcHMge1xcclxcbiAgY29sb3I6IGJhc2UuJGJvZHktY29sb3I7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmFjY29yZGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5teVNlbGVjdCB7XFxyXFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm15SW5wdXRJbnQge1xcclxcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlJbnB1dEZsb2F0IHtcXHJcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi51aS5ncmlkLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxyXFxufVwiLFwiLy8gX2Jhc2Uuc2Nzc1xcclxcbiRmb250LXN0YWNrOiAgICBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuJHByaW1hcnktY29sb3I6ICMzMzM7XFxyXFxuJGJvZHktY29sb3I6IGdyZWVuO1xcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215QXBwcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4uL3Nhc3MvbXlBcHBzLnNjc3MnO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYiBmcm9tICcuL2NNeVVJX01haW5UYWInO1xyXG5cclxuY2xhc3MgTmFuaWVBcHBzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICB9XHJcblxyXG4gICAgbWFpbigpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcm9vdERpdjogSlF1ZXJ5PEhUTUxFbGVtZW50PiA9ICQoJy5yb290Jyk7XHJcbiAgICAgICAgbGV0IGRpYWxvZzogY015VUlfTWFpblRhYiA9IG5ldyBjTXlVSV9NYWluVGFiKCk7XHJcbiAgICAgICAgbGV0IG5ld0hUTUw6IHN0cmluZyA9IGRpYWxvZy5kcmF3KCk7XHJcblxyXG4gICAgICAgIGlmICgocm9vdERpdiAhPSBudWxsKSAmJiAobmV3SFRNTCAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICByb290RGl2LmFwcGVuZChuZXdIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlhbG9nLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgYTogTmFuaWVBcHBzID0gbmV3IE5hbmllQXBwcygpO1xyXG5hLm1haW4oKTsiLCJpbXBvcnQgJCwgeyBkYXRhIH0gZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IFV1aWQgZnJvbSAnLi4vLi4vaW5mcmEvVXVpZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgIG5vbTogc3RyaW5nO1xyXG4gICAgdmFsOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIGNBamF4U2VuZE1lc3NhZ2Uge1xyXG4gICAgcHJpdmF0ZSBfY2xhc3NlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9yZXF1ZXRlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9hcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2FyZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLl9jbGFzc2UgPSAnJztcclxuICAgICAgICB0aGlzLl9yZXF1ZXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEZyb21TdHJpbmcoY2xhc3NlOiBzdHJpbmcsIHJlcXVldGU6IHN0cmluZywgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSB8IG51bGwpOiBjQWpheFNlbmRNZXNzYWdlIHtcclxuICAgICAgICBsZXQgcjogY0FqYXhTZW5kTWVzc2FnZSA9IG5ldyBjQWpheFNlbmRNZXNzYWdlKCk7XHJcbiAgICAgICAgci5fY2xhc3NlID0gY2xhc3NlO1xyXG4gICAgICAgIHIuX3JlcXVldGUgPSByZXF1ZXRlO1xyXG4gICAgICAgIHIuX2FyZ3MgPSBbXTtcclxuICAgICAgICBpZiAoYXJncyAhPSBudWxsKVxyXG4gICAgICAgICAgICByLl9hcmdzID0gYXJncztcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQXJnc0Zyb21TdHJpbmcobm9tOiBzdHJpbmcsIHZhbDogc3RyaW5nKTogaUFqYXhTZW5kTWVzc2FnZUFyZ3Mge1xyXG4gICAgICAgIGxldCByOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IHtcclxuICAgICAgICAgICAgJ25vbSc6IG5vbSxcclxuICAgICAgICAgICAgJ3ZhbCc6IHZhbFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tTnVtKG5vbTogc3RyaW5nLCB2YWw6IG51bWJlcik6IGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgICAgICBsZXQgcjogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSB7XHJcbiAgICAgICAgICAgICdub20nOiBub20sXHJcbiAgICAgICAgICAgICd2YWwnOiB2YWwudG9TdHJpbmcoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tQXJyYXkobm9tOiBzdHJpbmcsIHZhbDogb2JqZWN0W10pOiBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICAgICAgbGV0IHI6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0ge1xyXG4gICAgICAgICAgICAnbm9tJzogbm9tLFxyXG4gICAgICAgICAgICAndmFsJzogSlNPTi5zdHJpbmdpZnkodmFsKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBpQWpheFJlc3BvbnNlTWVzc2FnZSB7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBkYXRhOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBpQWpheENvbmZpZyB7XHJcbiAgICAnYXN5bmMnOiBib29sZWFuO1xyXG4gICAgJ2NhY2hlJzogYm9vbGVhbjtcclxuICAgICdjb250ZW50VHlwZSc6IHN0cmluZztcclxuICAgICdkYXRhJzogc3RyaW5nO1xyXG4gICAgJ2RhdGFUeXBlJzogc3RyaW5nOyAgICAvLyBUaGUgZGF0YSB0eXBlIGV4cGVjdGVkIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXHJcbiAgICAnZ2xvYmFsJzogYm9vbGVhbjsgICAgICAgIC8vIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHRyaWdnZXIgZ2xvYmFsIEFKQVggZXZlbnQgaGFuZGxlcyBmb3IgdGhlIHJlcXVlc3QuRGVmYXVsdCBpcyB0cnVlXHJcbiAgICAndGltZW91dCc6IG51bWJlcjsgIC8vIFRoZSBsb2NhbCB0aW1lb3V0KGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSByZXF1ZXN0XHJcbiAgICAndHlwZScgOiBzdHJpbmc7XHJcbiAgICAndXJsJzogc3RyaW5nO1xyXG4gICAgJ2JlZm9yZVNlbmQnOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCkgPT4gdm9pZDsgIC8vICh4aHIpXHRBIGZ1bmN0aW9uIHRvIHJ1biBiZWZvcmUgdGhlIHJlcXVlc3QgaXMgc2VudFxyXG4gICAgJ2Vycm9yJzogKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nLCBlcnJvcjogYW55KSA9PiB2b2lkOyAgICAgICAgICAgLy8gKHhociwgc3RhdHVzLCBlcnJvcilcdEEgZnVuY3Rpb24gdG8gcnVuIGlmIHRoZSByZXF1ZXN0IGZhaWxzLlxyXG4gICAgJ3N1Y2Nlc3MnOiAoZGF0YTogYW55LCBzdGF0dXM6IHN0cmluZywgeGhyOiBYTUxIdHRwUmVxdWVzdCkgPT4gdm9pZDsgICAgICAgLy8gKHJlc3VsdCwgc3RhdHVzLCB4aHIpXHRBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXHJcbiAgICAnY29tcGxldGUnOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQ7ICAgICAgICAgICAgLy8gKHhociwgc3RhdHVzKVx0QSBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZChhZnRlciBzdWNjZXNzIGFuZCBlcnJvciBmdW5jdGlvbnMpXHJcbiAgICAnbXlBamF4Q2xhc3MnIDogY0FqYXg7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjQWpheCB7XHJcbiAgICBwcml2YXRlIF9pbnRlcm5hbFN0YXR1czogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgX3JldHVybmVkRGF0YTogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIF91aWQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl91aWQgPSAobmV3IFV1aWQoKSkudXVpZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHsgdGhpcy5faW50ZXJuYWxTdGF0dXMgPSAxOyB0aGlzLl9yZXR1cm5lZERhdGEgPSAnJzt9XHJcbiAgICBwdWJsaWMgZ2V0U3RhdHVzKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcm5hbFN0YXR1czsgfVxyXG4gICAgcHVibGljIGdldERhdGEoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3JldHVybmVkRGF0YTsgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcG9zdERhdGEodXJsOiBzdHJpbmcsIGRhdGE6IGNBamF4U2VuZE1lc3NhZ2UpOiB2b2lkO1xyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBzdHJpbmcgfCBjQWpheFNlbmRNZXNzYWdlKSA6IHZvaWQge1xyXG4gICAgICAgIGxldCBzRGF0YSA6IEpTT047XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhICA9PT0gJ3N0cmluZycgKSB7XHJcbiAgICAgICAgICAgIHNEYXRhID0gSlNPTi5wYXJzZShkYXRhIGFzIHN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChkYXRhIGFzIGNBamF4U2VuZE1lc3NhZ2UpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc0RhdGEgPSAoKGRhdGEgYXMgdW5rbm93bikgYXMgSlNPTik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHR5cGUgYXMgaW5wdXQnKTtcclxuXHJcbiAgICAgICAgbGV0IGFqYXhDb25mT2JqOiBPYmplY3QgPSB0aGlzLmdldEFqYXhDb25mKHRoaXMuY29tcGxldGVfZnVuY3Rpb24sIHVybCwgc0RhdGEpO1xyXG4gICAgICAgICQuYWpheChhamF4Q29uZk9iaik7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKCdhcHJlcyBhamF4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBvc3RGaWxlcyhzZXJ2ZXJVUkw6IHN0cmluZywgZGF0YTogRm9ybURhdGEpIHtcclxuICAgICAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgICAgICd1cmwnOiBzZXJ2ZXJVUkwsXHJcbiAgICAgICAgICAgICdkYXRhJzogZGF0YSxcclxuICAgICAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWxlcnQgKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldEFqYXhDb25mKGNvbXBsZXRlZnVuY3Rpb246ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZykgPT4gdm9pZCwgbXlVcmwgOiBzdHJpbmcsIGRhdGEgOiBKU09OKSA6IE9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaUFqYXhDb25maWcgPSB7XHJcbiAgICAgICAgICAgICdhc3luYycgOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICdjb250ZW50VHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2RhdGEnIDogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICdkYXRhVHlwZScgOiAnanNvbicsICAgIC8vIFRoZSBkYXRhIHR5cGUgZXhwZWN0ZWQgb2YgdGhlIHNlcnZlciByZXNwb25zZS5cclxuICAgICAgICAgICAgJ2dsb2JhbCcgOiB0cnVlLCAgICAgICAgLy8gQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdG8gdHJpZ2dlciBnbG9iYWwgQUpBWCBldmVudCBoYW5kbGVzIGZvciB0aGUgcmVxdWVzdC5EZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAgICAgJ3RpbWVvdXQnIDogMTAwMCAqIDYwLCAgLy8gVGhlIGxvY2FsIHRpbWVvdXQoaW4gbWlsbGlzZWNvbmRzKSBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgJ3R5cGUnIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAndXJsJzogbXlVcmwsXHJcbiAgICAgICAgICAgICdiZWZvcmVTZW5kJzogdGhpcy5iZWZvcmVTZW5kX2Z1bmN0aW9uLCAvLyAoeGhyKVx0QSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgJ2Vycm9yJzogdGhpcy5lcnJvcl9mdW5jdGlvbiwgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cywgZXJyb3IpXHRBIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgcmVxdWVzdCBmYWlscy5cclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiAgdGhpcy5zdWNjZXNzX2Z1bmN0aW9uLCAgICAgICAvLyAocmVzdWx0LCBzdGF0dXMsIHhocilcdEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZHNcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogY29tcGxldGVmdW5jdGlvbiwgICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMpXHRBIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSByZXF1ZXN0IGlzIGZpbmlzaGVkKGFmdGVyIHN1Y2Nlc3MgYW5kIGVycm9yIGZ1bmN0aW9ucylcclxuICAgICAgICAgICAgJ215QWpheENsYXNzJyA6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIFhIUiA6XHJcbiAgICB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZTogNFxyXG4gICAgICAgIHJlc3BvbnNlSlNPTjoge1widHlwZVwiIDogXCJlcnJvclwiLFwiZGF0YVwiOiBbe1wiZXJybm9cIjogOTAwMDAwMH0sIHtcImRhdGFcIjpcImlCUklXU0FwaSMjX2RlY29kZUpTT05JbnB1dCAjIHVuYWJsZSB0byBwYXJzZS0tIGludmFsaWQganNvbiBmb3JtYXQgdGVzdCBpdCBmaXJzdCAuLi5UclxyXG4gICAgICAgIHJlc3BvbnNlVGV4dDogXFxuXFxuXFxuXFxue1xcXCJ0eXBlXFxcIiA6IFxcXCJlcnJvclxcXCIsXFxcImRhdGFcXFwiOiBbe1xcXCJlcnJub1xcXCI6IDkwMDAwMDB9LCB7XFxcImRhdGFcXFwiOlxcXCJpQlJJV1NBcGkjI19kZWNvZGVKU09OSW5wdXQgIyB1bmFibGUgdG8gcGFyc2UgLS0gaW52YWxpZCBqc29uIGZvcm1hdCB0ZXN0IGl0XHJcbiAgICAgICAgc3RhdHVzOiAyMDBcclxuICAgICAgICBzdGF0dXhUZXh0OiBcIk9LXCJcclxuXHJcbiAgICAgICAgYWJvcnQ6IMaSICggc3RhdHVzVGV4dCApXHJcbiAgICAgICAgYWx3YXlzOiDGkiAoKVxyXG4gICAgICAgIGNhdGNoOiDGkiAoIGZuIClcclxuICAgICAgICBkb25lOiDGkiAoKVxyXG4gICAgICAgIGZhaWw6IMaSICgpXHJcbiAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiDGkiAoKVxyXG4gICAgICAgIGdldFJlc3BvbnNlSGVhZGVyOiDGkiAoIGtleSApXHJcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogxpIgKCB0eXBlIClcclxuICAgICAgICBwaXBlOiDGkiAoIClcclxuICAgICAgICBwcm9ncmVzczogxpIgKClcclxuICAgICAgICBwcm9taXNlOiDGkihvYmopXHJcblxyXG4gICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGYoKVxyXG4gICAgICAgIHN0YXR1c0NvZGU6IGYgKG1hcClcclxuICAgICAgICB0aGVuICA6IGYoLi4uKVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYmVmb3JlU2VuZF9mdW5jdGlvbih4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3JfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcsIGVycm9yOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyBlcnJvcik7XHJcbiAgICAgICAgLy8gYWxlcnQgICgnYWpheCBmYWlsczogU2VlIENvbnNvbGUuTG9nJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3VjY2Vzc19mdW5jdGlvbihkYXRhOiBhbnksIHN0YXR1czogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggc3VjZXNzJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29tcGxldGVfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoJ2FqYXggY29tcGxldGVkJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzIDogY0FqYXggO1xyXG4gICAgICAgIGlmICgnbXlBamF4Q2xhc3MnIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MgPSAodGhpcyBhcyBpQWpheENvbmZpZykubXlBamF4Q2xhc3M7XHJcbiAgICAgICAgICAgIGlmIChteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgIT0gMSkgeyAvLyBwYXMgZW4gZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFqYXhSZXBvbnNlOiBpQWpheFJlc3BvbnNlTWVzc2FnZSA9IChKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpIGFzIGlBamF4UmVzcG9uc2VNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWpheFJlcG9uc2UudHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXBvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSA9IGFqYXhSZXBvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsZXJ0ICAoJ1dTIGZhaWxzOiBlcnJvciBzZWUgaW5sb2cgIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEgPSBhamF4UmVwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxOyAvLyByZXRvdXIgaW5jb25udSBlbiBlcnJldXIgIVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY0FqYXgsIGNBamF4U2VuZE1lc3NhZ2UsIGlBamF4U2VuZE1lc3NhZ2VBcmdzIH0gZnJvbSAnLi9jQWpheCc7XHJcbmltcG9ydCBjRW52dCBmcm9tICcuLi8uLi9pbmZyYS9jRW52dCc7XHJcbmltcG9ydCB7IGlHZW5vdHlwZU1lc3NhZ2UsIGlSZXN1bHRhdE1lc3NhZ2UgfSBmcm9tICcuL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlLCBpSW50ZXJuYWxFeHBlcmllbmNlT25lRmlsZU1lc3NhZ2UgfSBmcm9tICcuL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBjRXhwZXJpZW5jZSB7XHJcbiAgICBwcml2YXRlIF9hamF4OiBjQWpheCA9IG5ldyBjQWpheCgpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3NpbmdsZXRvbjogY0V4cGVyaWVuY2UgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLl9hamF4ID0gbmV3IGNBamF4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogY0V4cGVyaWVuY2Uge1xyXG4gICAgICAgIGlmIChjRXhwZXJpZW5jZS5fc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgICAgIGNFeHBlcmllbmNlLl9zaW5nbGV0b24gPSBuZXcgY0V4cGVyaWVuY2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLl9zaW5nbGV0b247XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbFBlcnNvbmUoKSA6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcgKCdwZXJzb25uZXMnLCAnZ2V0QWxsUGVyc29ubmVzJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlIDogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdCA6IEpTT04gPSBKU09OLnBhcnNlIChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2ggKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsRXhwZXJpZW5jZUluaXRpYWxlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxFeHBlcmllbmNlSW5pdGlhbGUnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlSWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nLCBxdWk6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZXhwZXJpZW5jZXN0cmluZ2lkJywgZXhwZXJpZW5jZUlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZGF0ZXJlYWxpc2F0aW9uZXhwZXJpZW5jZScsIGRhdGUpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdmYWl0ZXBhcnF1aScsIHF1aSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnY3JlYXRlJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQgKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VVaWRGcm9tRXhwZXJpZW5jZVN0cmluZ2lkKGV4cGVyaWVuY2VzdHJpbmdpZCA6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZXhwZXJpZW5jZXN0cmluZ2lkJywgZXhwZXJpZW5jZXN0cmluZ2lkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VVaWRGcm9tRXhwZXJpZW5jZVN0cmluZ2lkJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQgKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbEV4cGVyaWVuY2VVaWQoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbEV4cGVyaWVuY2VVaWQnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PG51bWJlcj4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8bnVtYmVyPik7XHJcbiAgICAgICAgICAgIHJlc3AuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZV9JbmZvR2VuZXJhbGUoaUV4cFVpZDogbnVtYmVyKTogaUV4cGVyaWVuY2VJRE1lc3NhZ2UgfCBudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZScsIGFyZ3MpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8aUV4cGVyaWVuY2VJRE1lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlFeHBlcmllbmNlSURNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VfUmVzdWx0YXRHZW5vdHlwZShpRXhwVWlkOiBudW1iZXIpOiBpR2Vub3R5cGVNZXNzYWdlW118bnVsbCB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ3VpZCcsIGlFeHBVaWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEdlbm90eXBlJywgYXJncyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxpR2Vub3R5cGVNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpR2Vub3R5cGVNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX1Jlc3VsdGF0VGVzdChpRXhwVWlkOiBudW1iZXIpOiBpUmVzdWx0YXRNZXNzYWdlW10gfCBudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX1Jlc3VsdGF0VGVzdCcsIGFyZ3MpO1xyXG5cclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlSZXN1bHRhdE1lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlSZXN1bHRhdE1lc3NhZ2U+KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX1Jlc3VsdGF0SW1hZ2UoaUV4cFVpZDogbnVtYmVyKTogaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2VbXSB8IG51bGwge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCd1aWQnLCBpRXhwVWlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VfUmVzdWx0YXRJbWFnZScsIGFyZ3MpO1xyXG5cclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZT4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyB1cGxvYWRGaWxlcyhpZDogbnVtYmVyLCBmaWxlczogRmlsZUxpc3QpIHtcclxuICAgICAgICBsZXQgZGF0YSA6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZiA6IEZpbGUgfCBudWxsID0gZmlsZXMuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKGYgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCAoJ2ZpbGUtJyArIGksIGYsIGYubmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG5cclxuICAgICAgICBkYXRhLmFwcGVuZCgnZXhwZXJpZW5jZUlkJywgaWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ19jbGFzc2UnLCAnZXhwZXJpZW5jZScpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdfcmVxdWV0ZScsICd1cGxvYWRGaWxlJyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdEZpbGVzKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBkYXRhKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIHVwZGF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlOiBpUmVzdWx0YXRNZXNzYWdlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IG51bWJlciA9IC0xO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdpZGV4cGVyaWVuY2UnLCAoZXhwZXJpZW5jZS5pZGV4cGVyaWVuY2UgYXMgbnVtYmVyKSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ21hcnF1YWdlJywgZXhwZXJpZW5jZS5tYXJxdWFnZSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGlmIChleHBlcmllbmNlLk5iR2Vub3R5cGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdOYkdlbm90eXBlJywgZXhwZXJpZW5jZS5OYkdlbm90eXBlKTtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdTQ29tcGFyYXRpZicsIGV4cGVyaWVuY2UuU0NvbXBhcmF0aWYpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCdTR2VuZXJhbCcsIGV4cGVyaWVuY2UuU0dlbmVyYWwpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCd0eXBlZGV0ZXN0JywgZXhwZXJpZW5jZS50eXBlZGV0ZXN0KTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgaWYgKGV4cGVyaWVuY2UuR2Vub3R5cGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tQXJyYXkoJ0dlbm90eXBlJywgZXhwZXJpZW5jZS5HZW5vdHlwZSk7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ3VwZGF0ZScsIGFyZ3MpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgc3RhdGljIGR1bXBGcm9tREIoaWQ6IG51bWJlciwgX2lkUmVzdWx0YXREQjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxUZXN0VHlwZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsVGVzdFR5cGVzJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxNYXJxdWFnZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsTWFycXVhZ2UnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lMSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWVYWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWUyKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZTMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lWFgoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lNCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWVYWCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEFsbGNocm9tb3NvbWVYWCgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsQ2hyb21vc29tZXMnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZV9pUmVzdWx0YXRNZXNzYWdlKCk6IGlSZXN1bHRhdE1lc3NhZ2Uge1xyXG4gICAgICAgIGxldCByZXRvdXI6IGlSZXN1bHRhdE1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICdpZGV4cGVyaWVuY2UnOiAwLFxyXG4gICAgICAgICAgICAnZXhwZXJpZW5jZXN0cmluZ2lkJzogJycsXHJcbiAgICAgICAgICAgICdHZW5vdHlwZScgOiBbXSxcclxuICAgICAgICAgICAgJ21hcnF1YWdlJyA6ICcnLFxyXG4gICAgICAgICAgICAnTmJHZW5vdHlwZScgOiAwLFxyXG4gICAgICAgICAgICAnU0NvbXBhcmF0aWYnIDogMCxcclxuICAgICAgICAgICAgJ1NHZW5lcmFsJyA6IDAsXHJcbiAgICAgICAgICAgICd0eXBlZGV0ZXN0JyA6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVfaUdlbm90eXBlTWVzc2FnZSgpOiBpR2Vub3R5cGVNZXNzYWdlIHtcclxuICAgICAgICBsZXQgcmV0b3VyOiBpR2Vub3R5cGVNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAnY2hyb21vc29tZTEnOiAnJyxcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWUyJzogJycsXHJcbiAgICAgICAgICAgICdjaHJvbW9zb21lMyc6ICcnLFxyXG4gICAgICAgICAgICAnY2hyb21vc29tZTQnOiAnJyxcclxuICAgICAgICAgICAgJ25iZWNoYW50aWxsb24nOiAwXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCBjRW52dCBmcm9tICcuL2luZnJhL2NFbnZ0JztcclxuaW1wb3J0IHsgY0NvbnRyb2xlciB9ICBmcm9tICcuL2luZnJhL2NDb250cm9sZXInO1xyXG5pbXBvcnQgeyBjTG9nZ2VyLCBlTG9nZ2VyTGV2ZWwgfSBmcm9tICcuL2luZnJhL2NMb2dnZXInO1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIGNNeVVJIHtcclxuICAgIHByb3RlY3RlZCByZWFkb25seSBfaWRSZXN1bHRhdERCOiBzdHJpbmcgPSAnaWRSZXN1bHRhdERCJztcclxuICAgIHByb3RlY3RlZCBfbG9nZ2VyOiBjTG9nZ2VyO1xyXG4gICAgcHJvdGVjdGVkIF9jdHJsOiBjQ29udHJvbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChpZCA6IHN0cmluZyB8IG51bGwpIHtcclxuICAgICAgICBpZiAoaWQgPT0gbnVsbClcclxuICAgICAgICAgICAgaWQgPSAnY015VUknO1xyXG5cclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBuZXcgY0xvZ2dlcihjRW52dC5nZXREZWJ1Z0xldmVsKCksIGlkKTtcclxuICAgICAgICB0aGlzLl9jdHJsID0gY0NvbnRyb2xlci5nZXRJbnRhbmNlKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdygpOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NZXNzYWdlKG1lc3NhZ2VJZCA6IHN0cmluZyB8IG51bGwpIDogdm9pZCB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2VJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICQoJy5tZXNzYWdlIC5jbG9zZScpXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5tZXNzYWdlJylcclxuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbignZmFkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQobWVzc2FnZUlkKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcubWVzc2FnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCdmYWRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYl9jcmVhdGUgZnJvbSAnLi9jTXlVSV9NYWluVGFiX2NyZWF0ZSc7XHJcbmltcG9ydCBjTXlVSV9NYWluVGFiX2Fqb3V0IGZyb20gJy4vY015VUlfTWFpblRhYl9ham91dCc7XHJcbmltcG9ydCBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbiBmcm9tICcuL2NNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTXlVSV9NYWluVGFiIGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRUYWJTYWlzaWU6IHN0cmluZyA9ICd0YWItc2Fpc2llJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkQWNjb3JkZW9uQ29tcGxldGVyRXhwZXJpZW5jZTogc3RyaW5nID0gJ2lkQWNjb3JkZW9uQ29tcGxldGVyRXhwZXJpZW5jZSc7XHJcbiAgICBwcml2YXRlIF9jcmVhdGlvblVJOiBjTXlVSV9NYWluVGFiX2NyZWF0ZTtcclxuICAgIHByaXZhdGUgX2Fqb3V0VUk6IGNNeVVJX01haW5UYWJfYWpvdXQ7XHJcbiAgICBwcml2YXRlIF9Db25zdWx0YXRpb25VSTogY015VUlfTWFpblRhYl9jb25zdWx0YXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgICAgIHRoaXMuX2NyZWF0aW9uVUkgPSBuZXcgY015VUlfTWFpblRhYl9jcmVhdGUoKTtcclxuICAgICAgICB0aGlzLl9ham91dFVJID0gbmV3IGNNeVVJX01haW5UYWJfYWpvdXQoKTtcclxuICAgICAgICB0aGlzLl9Db25zdWx0YXRpb25VSSA9IG5ldyBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWN0aXZlciBsZXMgc2VtZW50aWNVSSBkdSBkaWFsb2dcclxuICAgICAgICAkKCcudWkuYWNjb3JkaW9uJykuYWNjb3JkaW9uKCk7XHJcbiAgICAgICAgJCgnLnRhYnVsYXIubWVudSAuaXRlbScpLnRhYigpO1xyXG5cclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWIgPSB0aGlzO1xyXG4gICAgICAgIG1lLl9jcmVhdGlvblVJLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG4gICAgICAgIG1lLl9ham91dFVJLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG4gICAgICAgIG1lLl9Db25zdWx0YXRpb25VSS5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuXHJcbiAgICAgICAgLy8gcHJvcGFnYXRpb24gZGUgbCdldmVuZW1lbnQgZGUgbWlzZSAgYWpvdXIgZGUgJ2lkIGQnZXhwZXJpZW5jZVxyXG4gICAgICAgICQoYCMke3RoaXMuX2lkQWNjb3JkZW9uQ29tcGxldGVyRXhwZXJpZW5jZX1gKS5vbiAoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1lLl9ham91dFVJLlVwZGF0ZU15RGlhbG9nKG1lLl9jdHJsLmxhc3RFeHAsIG1lLl9jdHJsLmlMYXN0RXhwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ3JlYXRpb25BY2NvcmRlb25JbmZvOiBzdHJpbmcgPSB0aGlzLmV4cGVyaWVuY2VDcmVhdGlvbkFjY29yZGVvbkluZm8oKTtcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm86IHN0cmluZyA9IHRoaXMuZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm8oKTtcclxuXHJcblxyXG4gICAgICAgIHJldG91ciA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZmx1aWQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSB0b3AgYXR0YWNoZWQgdGFidWxhciBtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aXZlIGl0ZW1cIiBkYXRhLXRhYj1cIiR7dGhpcy5faWRUYWJTYWlzaWV9XCIgaWQ9XCIke3RoaXMuX2lkVGFiU2Fpc2llfVwiPlNhaXNpZSBFeHBlcmllbmNlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtdGFiPVwidGFiLWNvbnN1bHRhdGlvblwiPkNvbnN1bHRhdGlvbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGJvdHRvbSBhdHRhY2hlZCBhY3RpdmUgdGFiIHNlZ21lbnRcIiBkYXRhLXRhYj1cIiR7dGhpcy5faWRUYWJTYWlzaWV9XCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIFRhYiBDb250ZW50ICEtLT5cclxuICAgICAgICAgICAgICAgICR7ZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mb31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBib3R0b20gYXR0YWNoZWQgdGFiIHNlZ21lbnRcIiBkYXRhLXRhYj1cInRhYi1jb25zdWx0YXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gVGFiIENvbnRlbnQgIS0tPlxyXG4gICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mb31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5faWRSZXN1bHRhdERCfVwiPjwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGV4cGVyaWVuY2VDcmVhdGlvbkFjY29yZGVvbkluZm8oKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUNyZWF0aW9uSW5mbzogc3RyaW5nID0gdGhpcy5fY3JlYXRpb25VSS5kcmF3KCk7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VBam91dEluZm86IHN0cmluZyA9IHRoaXMuX2Fqb3V0VUkuZHJhdygpO1xyXG5cclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nO1xyXG4gICAgICAgIHJldG91ciA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGdyaWQgY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgc3R5bGVkIGFjY29yZGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJkcm9wZG93biBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGlvbiBkJ3VuZSBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZXhwZXJpZW5jZUNyZWF0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCIgaWQ9XCIke3RoaXMuX2lkQWNjb3JkZW9uQ29tcGxldGVyRXhwZXJpZW5jZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJkcm9wZG93biBpY29uXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV0ZXIgdW5lIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2V4cGVyaWVuY2VBam91dEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbzogc3RyaW5nID0gdGhpcy5fQ29uc3VsdGF0aW9uVUkuZHJhdygpO1xyXG4gICAgICAgIHJldHVybiBgPGRpdj4ke2V4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvfTwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IGlSZXN1bHRhdE1lc3NhZ2UsIGlHZW5vdHlwZU1lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaU15SHRtbEluZm8sIGNUb29scyB9IGZyb20gJy4vaW5mcmEvY1Rvb2xzJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfYWpvdXQgZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZE9LQnV0dG9uOiBzdHJpbmcgPSAnaWRPS0J1dHRvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZElucHV0RXhwOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0RXhwJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25jaHJvbW9zb21lMTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbmNocm9tb3NvbWUxJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25jaHJvbW9zb21lMjogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbmNocm9tb3NvbWUyJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25jaHJvbW9zb21lMzogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbmNocm9tb3NvbWUzJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25jaHJvbW9zb21lNDogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbmNocm9tb3NvbWU0JztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25UZXN0VHlwZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPblRlc3RUeXBlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25NYXJxdWFnZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbk1hcnF1YWdlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXROYkVjaGFudGlsbG9uOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0TmJFY2hhbnRpbGxvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZElucHV0U0dlbmVyYWw6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X19pZElucHV0U0dlbmVyYWwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRJbnB1dFNDb21wYXJhdGlmOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0U0NvbXBhcmF0aWYnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbmJHZW5vdHlwZSA9IDQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWN0aXZlciBsZXMgc2VtZW50aWNVSSBkdSBkaWFsb2dcclxuXHJcbiAgICAgICAgLy8gY2hvaXNpciBsYSB0YWIgcGFyIGRlZmF1dFxyXG4gICAgICAgIC8vICQoJy51aSAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAkKGAjJHt0aGlzLl9pZFRhYlNhaXNpZX1gKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9ham91dCA9IHRoaXM7XHJcbiAgICAgICAgJChgIyR7bWUuX2lkT0tCdXR0b259YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkge1xyXG4gICAgICAgICAgICBsZXQgYWxsSW5mb3NGcm9tUGFnZTogaVJlc3VsdGF0TWVzc2FnZSA9IGNFeHBlcmllbmNlLmNyZWF0ZV9pUmVzdWx0YXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuZXhwZXJpZW5jZXN0cmluZ2lkID0gPHN0cmluZz4gJChgIyR7bWUuX2lkSW5wdXRFeHB9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuaWRleHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZVVpZEZyb21FeHBlcmllbmNlU3RyaW5naWQoYWxsSW5mb3NGcm9tUGFnZS5leHBlcmllbmNlc3RyaW5naWQpO1xyXG5cclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5tYXJxdWFnZSA9IDxzdHJpbmc+ICQoYCMke21lLl9pZFNlbGVjdE9uTWFycXVhZ2V9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuTmJHZW5vdHlwZSA9IG1lLl9uYkdlbm90eXBlO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLlNDb21wYXJhdGlmID0gPG51bWJlcj4gJChgIyR7bWUuX2lkSW5wdXRTQ29tcGFyYXRpZn1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5TR2VuZXJhbCA9IDxudW1iZXI+ICQoYCMke21lLl9pZElucHV0U0dlbmVyYWx9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UudHlwZWRldGVzdCA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25UZXN0VHlwZX1gKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWUuX25iR2Vub3R5cGU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFsbEluZm9zRnJvbUdlbm90eXBlOiBpR2Vub3R5cGVNZXNzYWdlID0gY0V4cGVyaWVuY2UuY3JlYXRlX2lHZW5vdHlwZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLmNocm9tb3NvbWUxID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPbmNocm9tb3NvbWUxfV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5jaHJvbW9zb21lMiA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25jaHJvbW9zb21lMn1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTMgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uY2hyb21vc29tZTN9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLmNocm9tb3NvbWU0ID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPbmNocm9tb3NvbWU0fV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5uYmVjaGFudGlsbG9uID0gPG51bWJlcj4kKGAjJHttZS5faWRJbnB1dE5iRWNoYW50aWxsb259XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxJbmZvc0Zyb21QYWdlLkdlbm90eXBlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5HZW5vdHlwZS5wdXNoKGFsbEluZm9zRnJvbUdlbm90eXBlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlkID0gY0V4cGVyaWVuY2UudXBkYXRlREJFeHBlcmllbmNlKGFsbEluZm9zRnJvbVBhZ2UpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgVXBkYXRlTXlEaWFsb2cobGFzdEV4cDogc3RyaW5nLCBpbGFzdEV4cDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHg6IHN0cmluZyA9IGxhc3RFeHA7XHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRJbnB1dEV4cH1gKS52YWwoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZztcclxuICAgICAgICBjb25zdCBuYkxpZ25lID0gdGhpcy5fbmJHZW5vdHlwZTtcclxuICAgICAgICBsZXQgeDogc3RyaW5nID0gdGhpcy5fY3RybC5sYXN0RXhwO1xyXG5cclxuICAgICAgICBsZXQgaW5mb3NGb3JIVE1MOiBpTXlIdG1sSW5mbztcclxuICAgICAgICBsZXQgc2VsZWN0Y2hyb21vc29tZTEgOiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IHNlbGVjdGNocm9tb3NvbWUyOiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IHNlbGVjdGNocm9tb3NvbWUzOiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IHNlbGVjdGNocm9tb3NvbWU0OiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IElucHV0TmJFY2hhbnRpbGxvbjogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RUeXBlVGVzdCA6IHN0cmluZztcclxuICAgICAgICBsZXQgc2VsZWN0TWFycXVhZ2UgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IElucHV0U0dlbmVyYWwgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IElucHV0U0NvbXBhcmF0aWYgOiBzdHJpbmc7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJyA6IGAke3RoaXMuX2lkU2VsZWN0T25jaHJvbW9zb21lMX1fJHtpfWB9O1xyXG4gICAgICAgICAgICBzZWxlY3RjaHJvbW9zb21lMVtpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZTEoKSwgaW5mb3NGb3JIVE1MKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uY2hyb21vc29tZTJ9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUyW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMigpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uY2hyb21vc29tZTN9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUzW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMygpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uY2hyb21vc29tZTR9XyR7aX1gIH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWU0W2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lNCgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEludCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkSW5wdXROYkVjaGFudGlsbG9ufV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBJbnB1dE5iRWNoYW50aWxsb25baV0gPSBjVG9vbHMuQnVpbGRJbnB1dEludCgnMScsIGluZm9zRm9ySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215SW5wdXRGbG9hdCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkSW5wdXRTR2VuZXJhbH1gLCAncGxhY2Vob2xkZXInOiAnMS43OWUtMTEnIH07XHJcbiAgICAgICAgSW5wdXRTR2VuZXJhbCA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEZsb2F0JywgJ3R5cGUnOiAnbnVtYmVyJywgJ2lkJzogYCR7dGhpcy5faWRJbnB1dFNDb21wYXJhdGlmfWAsICdwbGFjZWhvbGRlcic6ICcxLjc5ZS0xMScgIH07XHJcbiAgICAgICAgSW5wdXRTQ29tcGFyYXRpZiA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuXHJcblxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPblRlc3RUeXBlfWAgfTtcclxuICAgICAgICBzZWxlY3RUeXBlVGVzdCA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsVGVzdFR5cGUoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uTWFycXVhZ2V9YCB9O1xyXG4gICAgICAgIHNlbGVjdE1hcnF1YWdlID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxNYXJxdWFnZSgpLCBpbmZvc0ZvckhUTUwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldG91ciA9IGBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlIElkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3h9XCIgcGxhY2Vob2xkZXI9XCJbbGV0dHJlXVtjaGlmZnJlXS1bbGV0dHJlXVtjaGlmZnJlXVwiIGlkPVwiJHt0aGlzLl9pZElucHV0RXhwfVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2Vub3R5cGU8L3RoPjx0aD5jaHJvbW9zb21lc29tZSAxPC90aD4gPHRoPmNocm9tb3NvbWVzb21lIDI8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMzwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5iIEVjaGFudGlsbG9uPC90aD48dGg+TWFycXVhZ2U8L3RoPjx0aD5TIGdlbmVyYWw8L3RoPjx0aD5TIGNvbXBhcmF0aWY8L3RoPjx0aD5UeXBlIHRlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkxpZ25lOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSsxfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTFbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMltpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUzW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTRbaV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke0lucHV0TmJFY2hhbnRpbGxvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtzZWxlY3RNYXJxdWFnZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtJbnB1dFNHZW5lcmFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke0lucHV0U0NvbXBhcmF0aWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7c2VsZWN0VHlwZVRlc3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpKzF9PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMVtpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUyW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTNbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lNFtpXX08L3RkPjx0ZD4ke0lucHV0TmJFY2hhbnRpbGxvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHBpbmtcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCIke3RoaXMuX2lkT0tCdXR0b259XCI+T0sgITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCB7IGlSZXN1bHRhdE1lc3NhZ2UsIGlHZW5vdHlwZU1lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaUV4cGVyaWVuY2VJRE1lc3NhZ2UsIGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlNeUh0bWxJbmZvLCBjVG9vbHMgfSBmcm9tICcuL2luZnJhL2NUb29scyc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbiBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkT0tCdXR0b24gOiBzdHJpbmcgPSAnT0tCdXR0b24nO1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbiA9IHRoaXM7XHJcbiAgICAgICAgJChgLnZvaXJgKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KSB7XHJcbiAgICAgICAgICAgIC8vIGFmaWljaGVyIGRhbnMgPGRpdiBpZD1cIiR7dGhpcy5faWRSZXN1bHRhdERCfVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAkKGAjJHttZS5faWRSZXN1bHRhdERCfWApLmVtcHR5KCk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IFZvaXJCdXR0b25JZCA6IHN0cmluZyA9ICgkKGV2ZW50LnRhcmdldCkuYXR0cignaWQnKSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgICBsZXQgc0V4cFVpZDogc3RyaW5nID0gVm9pckJ1dHRvbklkLnN1YnN0cmluZyhtZS5faWRPS0J1dHRvbi5sZW5ndGggKyAxKTtcclxuICAgICAgICAgICAgbGV0IGlFeHBVaWQ6IG51bWJlciA9IE51bWJlci5wYXJzZUludChzRXhwVWlkKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmZvR2VuZXJhbGVFeHBlcmllbmNlOiBpRXhwZXJpZW5jZUlETWVzc2FnZSB8IG51bGwgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZShpRXhwVWlkKTtcclxuICAgICAgICAgICAgbGV0IEV4cGVyaWVuY2VTdHJpbmdJZDogc3RyaW5nID0gXCItLS0tXCI7XHJcbiAgICAgICAgICAgIGlmIChpbmZvR2VuZXJhbGVFeHBlcmllbmNlICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICBFeHBlcmllbmNlU3RyaW5nSWQgPSBpbmZvR2VuZXJhbGVFeHBlcmllbmNlLmV4cGVyaWVuY2VzdHJpbmdpZDtcclxuICAgICAgICAgICAgbGV0IGluZm9SZXN1bHRhdEV4cGVyaWVuY2U6IGlSZXN1bHRhdE1lc3NhZ2VbXSB8IG51bGwgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX1Jlc3VsdGF0VGVzdChpRXhwVWlkKTtcclxuICAgICAgICAgICAgbGV0IGluZm9HZW5vbWVFeHBlcmllbmNlOiBpR2Vub3R5cGVNZXNzYWdlW10gfCBudWxsID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEdlbm90eXBlKGlFeHBVaWQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG15VUlGb3JDb25zdWx0OiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgaWYgKChpbmZvR2Vub21lRXhwZXJpZW5jZSAhPSBudWxsKSAmJiAoaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZSAhPSBudWxsKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm9SZXN1bHRhdEV4cGVyaWVuY2VfMDogaVJlc3VsdGF0TWVzc2FnZSA9IGluZm9SZXN1bHRhdEV4cGVyaWVuY2VbMF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdW5lSW5mb0dlbm9tZUV4cGVyaWVuY2U6IGlHZW5vdHlwZU1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAgPT09IHVuZGVmaW5lZCkgfHwgKGluZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5pZGV4cGVyaWVuY2UgPT09IHVuZGVmaW5lZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXMgZGUgZGF0YSBhc3NvY2llIGEgY2V0dGUgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCB5ZWxsb3cgaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBhcyBkZSBkb25uZWVzIGQnZXhwZXJpZW5jZSBhc3NvY2llZSA8YnIvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2UgSWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtFeHBlcmllbmNlU3RyaW5nSWR9ICBbSUQgZW4gREI6ICR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLmlkZXhwZXJpZW5jZX1dPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2Vub3R5cGU8L3RoPjx0aD5jaHJvbW9zb21lc29tZSAxPC90aD4gPHRoPmNocm9tb3NvbWVzb21lIDI8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMzwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmIgRWNoYW50aWxsb248L3RoPjx0aD5NYXJxdWFnZTwvdGg+PHRoPlMgZ2VuZXJhbDwvdGg+PHRoPlMgY29tcGFyYXRpZjwvdGg+PHRoPlR5cGUgdGVzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+YDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZUluZm9HZW5vbWVFeHBlcmllbmNlID0gaW5mb0dlbm9tZUV4cGVyaWVuY2VbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RyAke2kgKyAxfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTF9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lMn08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUzfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTR9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5uYmVjaGFudGlsbG9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGh9XCI+JHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAubWFycXVhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5TR2VuZXJhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7aW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RofVwiPiR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLlNDb21wYXJhdGlmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGh9XCI+JHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAudHlwZWRldGVzdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSArIDF9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUyfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTN9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lNH08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLm5iZWNoYW50aWxsb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGluZm9GaWxlRXhwZXJpZW5jZTogaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2VbXSB8IG51bGwgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX1Jlc3VsdGF0SW1hZ2UoaUV4cFVpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGluZm9GaWxlRXhwZXJpZW5jZSAhPSBudWxsKSAmJiAoaW5mb0ZpbGVFeHBlcmllbmNlLmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+YDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm9GaWxlRXhwZXJpZW5jZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aW5mb0ZpbGVFeHBlcmllbmNlW2ldLm5vbX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7aW5mb0ZpbGVFeHBlcmllbmNlW2ldLnBhdGh9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW1nIHNyYz1cIiR7aW5mb0ZpbGVFeHBlcmllbmNlW2ldLnVybH1cIiBhbHQ9XCIke2luZm9GaWxlRXhwZXJpZW5jZVtpXS5wYXRofVwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiMzQxXCIgdGl0bGU9XCJpbWFnZSAke2l9XCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsIHllbGxvd1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXMgZCdpbWFnZSBhc3NvY2llZXMgYSBjZXR0ZSBleHBlcmllbmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkUmVzdWx0YXREQn1gKS5hcHBlbmQobXlVSUZvckNvbnN1bHQpO1xyXG4vLyAgICAgICAgICAgIGxldCB5OiBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZSA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfRmlsZXNVUkwoaUV4cFVpZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGxldCBhbGxFeHBlcmllbmNldWlkIDogbnVtYmVyW10gPSBjRXhwZXJpZW5jZS5nZXRBbGxFeHBlcmllbmNlVWlkKCk7XHJcbiAgICAgICAgbGV0IHg6IGlFeHBlcmllbmNlSURNZXNzYWdlIHwgbnVsbDtcclxuXHJcblxyXG4gICAgICAgICByZXRvdXIgPSBgXHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FeHBlcmllbmNlIE51bTwvdGg+PHRoPkV4cGVyaWVuY2VJRDwvdGg+PHRoPlF1aTwvdGg+IDx0aD5RdWFuZDwvdGg+PHRoPkRhdGUgRW5yZWdpc3RyZW1lbnQ8L3RoPjx0aD5Wb2lyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRXhwZXJpZW5jZXVpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB4ID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9JbmZvR2VuZXJhbGUoYWxsRXhwZXJpZW5jZXVpZFtpXSk7XHJcbiAgICAgICAgICAgIGlmICh4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHthbGxFeHBlcmllbmNldWlkW2ldfTwvdGQ+PHRkPiR7eC5leHBlcmllbmNlc3RyaW5naWR9PC90ZD48dGQ+JHt4LmZhaXRlcGFycXVpfTwvdGQ+PHRkPiR7eC5kYXRlcmVhbGlzYXRpb25leHBlcmllbmNlfTwvdGQ+PHRkPiR7eC5kYXRlaW5zZXJ0fTwvdGQ+PHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIGdyZWVuIHZvaXJcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCIke3RoaXMuX2lkT0tCdXR0b259XyR7YWxsRXhwZXJpZW5jZXVpZFtpXX1cIj5Wb2lyPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTXlVSV9NYWluVGFiX2NyZWF0ZSBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX0RlZmF1bHRQZXJzb25uZU5vbTogc3RyaW5nID0gJ0ZhZ2VzJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX0RlZmF1bHRQZXJzb25uZU5vbUluaXRpYWxlOiBzdHJpbmcgPSB0aGlzLl9EZWZhdWx0UGVyc29ubmVOb20uY2hhckF0KDApO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRPS0J1dHRvbjogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfT0tCdXR0b24nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWREYXRlRXhwOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9EYXRlRXhwJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkUXVpOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9RdWknO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRGaWxlczogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfRmlsZXMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWREaXZGb3JNZXNzYWdlSW5mbzogc3RyaW5nID0gJ01haW5UYWJfRGl2Rm9yRm9ybV9JbmZvJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkTWVzc2FnZUluZm86IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fTWVzc2FnZUlEJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZU5vbVByZWZpeGU6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fRXhwZXJpZW5jZUFzTGV0dHJlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZU51bWVybzogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19pZEV4cGVyaWVuY2VOdW1lcm8nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGU6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fX2lkRXhwZXJpZW5jZUV4cGVyaWVuY2V0eXBlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZUNsZWY6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9faWRFeHBlcmllbmNlQ2xlZic7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfTXlfTWVzc2FnZV9DbGFzc2UgOiBzdHJpbmcgPSAnQ2xhc3NlRGVzTWVzc2FnZXNJbmZvJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Zvcm1Db250ZW51KCk7XHJcbiAgICAgICAgdGhpcy5saWVuRXhwcmllbmNlSWRfTm9tTWFuaXAoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbGllbkV4cHJpZW5jZUlkX05vbU1hbmlwKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jcmVhdGUgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke3RoaXMuX2lkUXVpfWApLm9uICgnY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IHN0cmluZyA9IDxzdHJpbmc+ICQoYCMke21lLl9pZFF1aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IHZhbEVudGV0ZSA9IHZhbC5jaGFyQXQoMCk7XHJcbiAgICAgICAgICAgICQoYCMke21lLl9pZEV4cGVyaWVuY2VOb21QcmVmaXhlfWApLnZhbCh2YWxFbnRldGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ2FsbGJhY2sgZHUgT0tcclxuICAgIC8vICAgICAgMS4gY2hlY2sgZHUgY29udGVudSBkdSBmb3JtdWxhaXJlXHJcbiAgICAvLyAgICAgIDIuIGVudm9pZSBlbiBEQiBzaSBPS1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGNoZWNrRm9ybUNvbnRlbnUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiX2NyZWF0ZSA9IHRoaXM7XHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRPS0J1dHRvbn1gKS5vbiAoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXMgMyBjaGFtcHMgYSBjb250cm9sZXJcclxuICAgICAgICAgICAgbGV0IGRhdGUgOiBzdHJpbmcgPSA8c3RyaW5nPiAkKGAjJHttZS5faWREYXRlRXhwfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgcXVpOiBzdHJpbmcgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRRdWl9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSAkKGAjJHttZS5faWRGaWxlc31gKS5wcm9wKCdmaWxlcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXJydXJzIHNpIDEgbWFucXVlXHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yTWVzc2FnZTogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1aSBuZWdhdGl2ZSBtZXNzYWdlICR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfVwiPjxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5gO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBiIGRlIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbCBmYXV0IGNob2lzaXIgdW5lIGRhdGUgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvck1lc3NhZ2UgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IElsIGZhdXQgY2hvaXNpciBhdSBtb2lucyB1bmUgaW1hZ2UgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgIC8vIGFmZmljaGUgZGUgbCdlcnJldXJcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLmFwcGVuZChvbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAkKGAjJHttZS5faWREaXZGb3JNZXNzYWdlSW5mb31gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgLiR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnZvaWUgZW4gREJcclxuICAgICAgICAgICAgICAgIGxldCBleHBlcmllbmNlSWQgOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlTm9tUHJlZml4ZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlTnVtZXJvfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICctJyArICQoYCMke21lLl9pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlQ2xlZn1gKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaWQ6IG51bWJlciA9IGNFeHBlcmllbmNlLmNyZWF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlSWQsIGRhdGUsIHF1aSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY0V4cGVyaWVuY2UudXBsb2FkRmlsZXMoaWQsIGZpbGVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9uT0tNZXNzYWdlOiBzdHJpbmcgPSBgPGRpdiBjbGFzcz1cInVpIHBvc2l0aXZlIG1lc3NhZ2UgJHttZS5fTXlfTWVzc2FnZV9DbGFzc2V9XCI+PGkgY2xhc3M9XCJjbG9zZSBpY29uXCI+PC9pPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PS01lc3NhZ2UgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRpb24gZXhwZXJpZW5jZSBlbiBEQiAtLSBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiAke2V4cGVyaWVuY2VJZH0sICR7ZGF0ZX0sICR7cXVpfSwgJHtmaWxlc30gPC9wPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgb25PS01lc3NhZ2UgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkRGl2Rm9yTWVzc2FnZUluZm99YCkuYXBwZW5kKG9uT0tNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKGAjJHttZS5faWREaXZGb3JNZXNzYWdlSW5mb31gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYC4ke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBtZS5fY3RybC5zZXRMYXN0RXhwKGV4cGVyaWVuY2VJZCwgaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQgKCdJbXBvc3NpYmxlIGRlIG1ldHRyZSBlbiBiYXNlIGNldHRlIGRlbWFuZGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24gKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGFsbFBlcnNvbm5lc09wdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgbGV0IGFsbFBlcnNvbm5lczogc3RyaW5nW10gPSBjRXhwZXJpZW5jZS5nZXRBbGxQZXJzb25lKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQZXJzb25uZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsUGVyc29ubmVzT3B0aW9uICs9IGA8b3B0aW9uIHZhbHVlPVwiJHthbGxQZXJzb25uZXNbaV19XCI+JHthbGxQZXJzb25uZXNbaV19PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGxldCBBbGxFeHBlcmllbmNlSW5pdGlhbGU6IHN0cmluZ1tdID0gY0V4cGVyaWVuY2UuZ2V0QWxsRXhwZXJpZW5jZUluaXRpYWxlKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBBbGxFeHBlcmllbmNlSW5pdGlhbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgQWxsRXhwZXJpZW5jZUluaXRpYWxlT3B0aW9uICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtBbGxFeHBlcmllbmNlSW5pdGlhbGVbaV19XCI+JHtBbGxFeHBlcmllbmNlSW5pdGlhbGVbaV19PC9vcHRpb24+YDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nID0gYFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FeHBlcmllbmNlIElkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGVmdCBsYWJlbGVkIGlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aGlzLl9EZWZhdWx0UGVyc29ubmVOb21Jbml0aWFsZX1cIiBpZD1cIiR7dGhpcy5faWRFeHBlcmllbmNlTm9tUHJlZml4ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjBcIiBpZD1cIiR7dGhpcy5faWRFeHBlcmllbmNlTnVtZXJvfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogeC1sYXJnZTsgbWFyZ2luOmF1dG87XCI+LTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInVpIGNvbXBhY3Qgc2VsZWN0aW9uIGRyb3Bkb3duXCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZUV4cGVyaWVuY2V0eXBlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIkFcIj5BPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke0FsbEV4cGVyaWVuY2VJbml0aWFsZU9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdXRyZVwiPkF1dHJlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjBcIiBpZD1cIiR7dGhpcy5faWRFeHBlcmllbmNlQ2xlZn1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYXRlIGRlIGwnZXhwZXJpZW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGUtZXhwXCIgdmFsdWU9XCIyMDIwLTEwLTAxXCIgbWluPVwiMjAyMC0xMC0wMVwiIGlkPVwiJHt0aGlzLl9pZERhdGVFeHB9XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1aSBhIHJlYWxpc2UgbCdleHBlcmllbmNlPzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInVpIGNvbXBhY3Qgc2VsZWN0aW9uIGRyb3Bkb3duXCIgaWQ9XCIke3RoaXMuX2lkUXVpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiJHt0aGlzLl9EZWZhdWx0UGVyc29ubmVOb219XCI+JHt0aGlzLl9EZWZhdWx0UGVyc29ubmVOb219PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YWxsUGVyc29ubmVzT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXV0cmVcIj5BdXRyZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MaWVuIHZlcnMgbGVzIGltYWdlczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImV4cEltYWdlXCIgYWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnXCIgbXVsdGlwbGUgaWQ9XCIke3RoaXMuX2lkRmlsZXN9XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLl9pZERpdkZvck1lc3NhZ2VJbmZvfVwiPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcGlua1wiIHR5cGU9XCJzdWJtaXRcIiBpZD1cIiR7dGhpcy5faWRPS0J1dHRvbn1cIj5PSyAhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5gO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVdWlkIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVyemV1Z3QgZWluZSBVVUlEIG5hY2ggUkZDIDQxMjJcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKCkge31cclxuXHJcbiAgICBwdWJsaWMgdXVpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIChjaGFyKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwOyAvLyBOYWNoa29tbWFzdGVsbGVuIGFic2NobmVpZGVuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGNoYXIgPT09ICd4JyA/IHJhbmRvbSA6IChyYW5kb20gJSA0ICsgOCk7IC8vIEJlaSB4IFJhbmRvbSAwLTE1ICgwLUYpLCBiZWkgeSBSYW5kb20gMC0zICsgOCA9IDgtMTEgKDgtYikgZ2Vtw6RzcyBSRkMgNDEyMlxyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMTYpOyAvLyBIZXhhZGV6aW1hbGVzIFplaWNoZW4genVyw7xja2dlYmVuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJlbnVtIGVDb25maWdDb25udWVzIHtcclxuICAgIE5hbmllID0gMCxcclxuICAgIFBhcHMgPSAxXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjQ29uZmlncyB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfY3VycmVudENvbmZpZzogZUNvbmZpZ0Nvbm51ZXMgPSBlQ29uZmlnQ29ubnVlcy5OYW5pZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYWpheFdTVVJMOiBzdHJpbmdbXSA9IFtcclxuICAgICAgICAnL25hbmllL3NlcnZlci9XUy9CUklXUy5waHAnLCAvKiBOYW5pZSAqL1xyXG4gICAgICAgICcvbmFuaWUvc2VydmVyL1dTL0JSSVdTLnBocCcgLyogUGFwcyAqL1xyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFqYXhXU1VSTCgpIDogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY0NvbmZpZ3MuX2FqYXhXU1VSTFtjQ29uZmlncy5fY3VycmVudENvbmZpZ107XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIGNDb250cm9sZXIge1xyXG4gICAgcHJpdmF0ZSBfbGFzdEV4cDogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIF9pTGFzdEV4cDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zaW5nbGV0b246IGNDb250cm9sZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBjQ29udHJvbGVyLl9zaW5nbGV0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSAnJztcclxuICAgICAgICB0aGlzLl9pTGFzdEV4cCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRhbmNlKCkgOiBjQ29udHJvbGVyIHtcclxuICAgICAgICBpZiAoY0NvbnRyb2xlci5fc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgICAgIGNDb250cm9sZXIuX3NpbmdsZXRvbiA9IG5ldyBjQ29udHJvbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGNDb250cm9sZXIuX3NpbmdsZXRvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFzdEV4cCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlMYXN0RXhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lMYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgc2V0IGxhc3RFeHAobGFzdEV4cDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbGFzdEV4cCA9IGxhc3RFeHA7XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXRMYXN0RXhwKGxhc3RFeHA6IHN0cmluZywgaUxhc3RFeHA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSBsYXN0RXhwO1xyXG4gICAgICAgIHRoaXMuX2lMYXN0RXhwID0gaUxhc3RFeHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGVMb2dnZXJMZXZlbCB9IGZyb20gJy4vY0xvZ2dlcic7XHJcbmltcG9ydCB7IGNDb25maWdzIH0gZnJvbSAnLi9jQ29uZmlncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjRW52dCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVidWdMZXZlbCA6IGVMb2dnZXJMZXZlbCA9IGVMb2dnZXJMZXZlbC5EZWJ1ZztcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9hamF4V1NVUkw6IHN0cmluZyA9IGNDb25maWdzLmFqYXhXU1VSTCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVidWdMZXZlbCgpOiBlTG9nZ2VyTGV2ZWwge1xyXG4gICAgICAgIHJldHVybiBjRW52dC5fZGVidWdMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFqYXhVUkxXUygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCB4IDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcclxuICAgICAgICByZXR1cm4gKHggKyBjRW52dC5fYWpheFdTVVJMKTtcclxuICAgIH1cclxufVxyXG4iLCIgICAgZXhwb3J0IGVudW0gZUxvZ2dlckxldmVsIHtcclxuICAgICAgICBBbGwgICAgICAgICA9IDAsXHJcbiAgICAgICAgRGVidWcgICAgICAgPSA1MCxcclxuICAgICAgICBXYXJuaW5nICAgICA9IDEwMCxcclxuICAgICAgICBFcnJvciAgICAgICA9IDE1MCxcclxuICAgICAgICBGYXRhbCAgICAgICA9IDIwMFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBjTG9nZ2VyIHtcclxuICAgICAgICBwcml2YXRlIF9sZXZlbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgKGxldmVsOiBlTG9nZ2VyTGV2ZWwsIGlkOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFsbCAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkFsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGVidWcgKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5GYXRhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2FybmluZyAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcnJvciAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgRmF0YWwobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2xvZyAobXNnOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKGxldmVsID4gdGhpcy5fbGV2ZWwpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgaU15SHRtbEluZm8ge1xyXG4gICAgY2xhc3M/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBpbmRpY2VzZWxlY3RlZD86IG51bWJlcjtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY1Rvb2xzIHtcclxuICAgIHN0YXRpYyBCdWlsZFNlbGVjdEZyb21UYWIodmFsczogc3RyaW5nW10sIGluZm86IGlNeUh0bWxJbmZvKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA9ICcnO1xyXG4gICAgICAgIGxldCBhbGxLZXlzIDogc3RyaW5nIFtdID0gT2JqZWN0LmtleXMoaW5mbyk7XHJcblxyXG4gICAgICAgIHJldG91ciA9IGA8c2VsZWN0IGA7XHJcbiAgICAgICAgaWYgKGluZm9bJ2NsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGNsYXNzPVwiJHtpbmZvWydjbGFzcyddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvWydpZCddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBpZD1cIiR7aW5mb1snaWQnXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYD5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKChpbmZvWydpbmRpY2VzZWxlY3RlZCddICE9PSB1bmRlZmluZWQpICYmIChpID09PSBpbmZvWydpbmRpY2VzZWxlY3RlZCddKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiJHt2YWxzW2ldfVwiPiR7dmFsc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGA8b3B0aW9uIHZhbHVlPVwiJHt2YWxzW2ldfVwiPiR7dmFsc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgPC9zZWxlY3Q+YDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBCdWlsZElucHV0SW50KHZhbDogc3RyaW5nLCBpbmZvOiBpTXlIdG1sSW5mbyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA9IGA8aW5wdXQgdHlwZT1cIiR7aW5mb1sndHlwZSddfVwiIG5hbWU9XCIke2luZm9bJ2lkJ119XCIgaWQ9XCIke2luZm9bJ2lkJ119XCIgdmFsdWU9XCIke3ZhbH1cIiBzdGVwPVwiYW55XCIgYDtcclxuICAgICAgICBpZiAoaW5mb1snY2xhc3MnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgY2xhc3M9XCIke2luZm9bJ2NsYXNzJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZm9bJ3BsYWNlaG9sZGVyJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYHBsYWNlaG9sZGVyPVwiJHtpbmZvWydwbGFjZWhvbGRlciddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgLz5gO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9