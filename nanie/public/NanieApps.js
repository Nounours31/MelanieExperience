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
        'http://localhost/nanie/server/WS/BRIWS.php',
        'http://localhost:88/nanie/server/WS/BRIWS.php' /* Paps */
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
        return cEnvt._ajaxWSURL;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9teUFwcHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zYXNzL215QXBwcy5zY3NzP2MwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbmllQXBwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvREIvY0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9ham91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NNeVVJX01haW5UYWJfY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9VdWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jQ29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0NvbnRyb2xlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0VudnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NUb29scy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Y0FBVyxDQUFDO2FBQ3ZFO2lCQUNJO2dCQUNELE1BQU0sSUFBSSxxQkFBa0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBVyxDQUFDO2FBQzlEO1NBQ0o7UUFDRCxNQUFNLElBQUksV0FBVyxDQUFDO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQkFBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsSUFBaUI7UUFDL0MsSUFBSSxNQUFNLEdBQUcsbUJBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFZLEdBQUcscUJBQWUsQ0FBQztRQUNoSCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSxJQUFJLGFBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxJQUFJLG1CQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQUksQ0FBQztTQUNyRDtRQUNELE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDZixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Qsd0IiLCJmaWxlIjoiTmFuaWVBcHBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTmFuaWVBcHBzLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmludmVyc2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLk15QXBwcyB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuLmFjY29yZGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teVNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLm15SW5wdXRJbnQge1xcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlJbnB1dEZsb2F0IHtcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbi51aS5ncmlkLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Fzcy9teUFwcHMuc2Nzc1wiLFwid2VicGFjazovL3Nhc3MvYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQ0pXO0VES1gsNENBQUE7QUFERjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQU1BO0VBQ0ksc0JBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdiYXNlJztcXHJcXG5cXHJcXG4uaW52ZXJzZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiYXNlLiRwcmltYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uTXlBcHBzIHtcXHJcXG4gIGNvbG9yOiBiYXNlLiRib2R5LWNvbG9yO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlTZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5teUlucHV0SW50IHtcXHJcXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm15SW5wdXRGbG9hdCB7XFxyXFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udWkuZ3JpZC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbn1cIixcIi8vIF9iYXNlLnNjc3NcXHJcXG4kZm9udC1zdGFjazogICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xcclxcbiRib2R5LWNvbG9yOiBncmVlbjtcXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teUFwcHMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuLi9zYXNzL215QXBwcy5zY3NzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGNNeVVJX01haW5UYWIgZnJvbSAnLi9jTXlVSV9NYWluVGFiJztcclxuXHJcbmNsYXNzIE5hbmllQXBwcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgfVxyXG5cclxuICAgIG1haW4oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJvb3REaXY6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKCcucm9vdCcpO1xyXG4gICAgICAgIGxldCBkaWFsb2c6IGNNeVVJX01haW5UYWIgPSBuZXcgY015VUlfTWFpblRhYigpO1xyXG4gICAgICAgIGxldCBuZXdIVE1MOiBzdHJpbmcgPSBkaWFsb2cuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAoKHJvb3REaXYgIT0gbnVsbCkgJiYgKG5ld0hUTUwgIT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgcm9vdERpdi5hcHBlbmQobmV3SFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpYWxvZy5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGE6IE5hbmllQXBwcyA9IG5ldyBOYW5pZUFwcHMoKTtcclxuYS5tYWluKCk7IiwiaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVdWlkIGZyb20gJy4uLy4uL2luZnJhL1V1aWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICBub206IHN0cmluZztcclxuICAgIHZhbDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBjQWpheFNlbmRNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgX2NsYXNzZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWV0ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9hcmdzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2xhc3NlID0gJyc7XHJcbiAgICAgICAgdGhpcy5fcmVxdWV0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRGcm9tU3RyaW5nKGNsYXNzZTogc3RyaW5nLCByZXF1ZXRlOiBzdHJpbmcsIGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gfCBudWxsKTogY0FqYXhTZW5kTWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHI6IGNBamF4U2VuZE1lc3NhZ2UgPSBuZXcgY0FqYXhTZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIHIuX2NsYXNzZSA9IGNsYXNzZTtcclxuICAgICAgICByLl9yZXF1ZXRlID0gcmVxdWV0ZTtcclxuICAgICAgICByLl9hcmdzID0gW107XHJcbiAgICAgICAgaWYgKGFyZ3MgIT0gbnVsbClcclxuICAgICAgICAgICAgci5fYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tU3RyaW5nKG5vbTogc3RyaW5nLCB2YWw6IHN0cmluZyk6IGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgICAgICBsZXQgcjogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSB7XHJcbiAgICAgICAgICAgICdub20nOiBub20sXHJcbiAgICAgICAgICAgICd2YWwnOiB2YWxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRBcmdzRnJvbU51bShub206IHN0cmluZywgdmFsOiBudW1iZXIpOiBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICAgICAgbGV0IHI6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0ge1xyXG4gICAgICAgICAgICAnbm9tJzogbm9tLFxyXG4gICAgICAgICAgICAndmFsJzogdmFsLnRvU3RyaW5nKClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRBcmdzRnJvbUFycmF5KG5vbTogc3RyaW5nLCB2YWw6IG9iamVjdFtdKTogaUFqYXhTZW5kTWVzc2FnZUFyZ3Mge1xyXG4gICAgICAgIGxldCByOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IHtcclxuICAgICAgICAgICAgJ25vbSc6IG5vbSxcclxuICAgICAgICAgICAgJ3ZhbCc6IEpTT04uc3RyaW5naWZ5KHZhbClcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgaUFqYXhSZXNwb25zZU1lc3NhZ2Uge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgaUFqYXhDb25maWcge1xyXG4gICAgJ2FzeW5jJzogYm9vbGVhbjtcclxuICAgICdjYWNoZSc6IGJvb2xlYW47XHJcbiAgICAnY29udGVudFR5cGUnOiBzdHJpbmc7XHJcbiAgICAnZGF0YSc6IHN0cmluZztcclxuICAgICdkYXRhVHlwZSc6IHN0cmluZzsgICAgLy8gVGhlIGRhdGEgdHlwZSBleHBlY3RlZCBvZiB0aGUgc2VydmVyIHJlc3BvbnNlLlxyXG4gICAgJ2dsb2JhbCc6IGJvb2xlYW47ICAgICAgICAvLyBBIEJvb2xlYW4gdmFsdWUgc3BlY2lmeWluZyB3aGV0aGVyIG9yIG5vdCB0byB0cmlnZ2VyIGdsb2JhbCBBSkFYIGV2ZW50IGhhbmRsZXMgZm9yIHRoZSByZXF1ZXN0LkRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgJ3RpbWVvdXQnOiBudW1iZXI7ICAvLyBUaGUgbG9jYWwgdGltZW91dChpbiBtaWxsaXNlY29uZHMpIGZvciB0aGUgcmVxdWVzdFxyXG4gICAgJ3R5cGUnIDogc3RyaW5nO1xyXG4gICAgJ3VybCc6IHN0cmluZztcclxuICAgICdiZWZvcmVTZW5kJzogKHhocjogWE1MSHR0cFJlcXVlc3QpID0+IHZvaWQ7ICAvLyAoeGhyKVx0QSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICdlcnJvcic6ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZywgZXJyb3I6IGFueSkgPT4gdm9pZDsgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cywgZXJyb3IpXHRBIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgcmVxdWVzdCBmYWlscy5cclxuICAgICdzdWNjZXNzJzogKGRhdGE6IGFueSwgc3RhdHVzOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QpID0+IHZvaWQ7ICAgICAgIC8vIChyZXN1bHQsIHN0YXR1cywgeGhyKVx0QSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xyXG4gICAgJ2NvbXBsZXRlJzogKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nKSA9PiB2b2lkOyAgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cylcdEEgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHJlcXVlc3QgaXMgZmluaXNoZWQoYWZ0ZXIgc3VjY2VzcyBhbmQgZXJyb3IgZnVuY3Rpb25zKVxyXG4gICAgJ215QWpheENsYXNzJyA6IGNBamF4O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY0FqYXgge1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTdGF0dXM6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9yZXR1cm5lZERhdGE6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBfdWlkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fdWlkID0gKG5ldyBVdWlkKCkpLnV1aWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7IHRoaXMuX2ludGVybmFsU3RhdHVzID0gMTsgdGhpcy5fcmV0dXJuZWREYXRhID0gJyc7fVxyXG4gICAgcHVibGljIGdldFN0YXR1cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faW50ZXJuYWxTdGF0dXM7IH1cclxuICAgIHB1YmxpYyBnZXREYXRhKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9yZXR1cm5lZERhdGE7IH1cclxuXHJcblxyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBjQWpheFNlbmRNZXNzYWdlKTogdm9pZDtcclxuICAgIHB1YmxpYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nKTogdm9pZDtcclxuICAgIHB1YmxpYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nIHwgY0FqYXhTZW5kTWVzc2FnZSkgOiB2b2lkIHtcclxuICAgICAgICBsZXQgc0RhdGEgOiBKU09OO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSAgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgICAgICBzRGF0YSA9IEpTT04ucGFyc2UoZGF0YSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoZGF0YSBhcyBjQWpheFNlbmRNZXNzYWdlKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNEYXRhID0gKChkYXRhIGFzIHVua25vd24pIGFzIEpTT04pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlIGFzIGlucHV0Jyk7XHJcblxyXG4gICAgICAgIGxldCBhamF4Q29uZk9iajogT2JqZWN0ID0gdGhpcy5nZXRBamF4Q29uZih0aGlzLmNvbXBsZXRlX2Z1bmN0aW9uLCB1cmwsIHNEYXRhKTtcclxuICAgICAgICAkLmFqYXgoYWpheENvbmZPYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nICgnYXByZXMgYWpheCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RmlsZXMoc2VydmVyVVJMOiBzdHJpbmcsIGRhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICAndXJsJzogc2VydmVyVVJMLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGEsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsZXJ0IChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBamF4Q29uZihjb21wbGV0ZWZ1bmN0aW9uOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQsIG15VXJsIDogc3RyaW5nLCBkYXRhIDogSlNPTikgOiBPYmplY3Qge1xyXG4gICAgICAgIGxldCByZXRvdXI6IGlBamF4Q29uZmlnID0ge1xyXG4gICAgICAgICAgICAnYXN5bmMnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAnY29udGVudFR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdkYXRhJyA6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnIDogJ2pzb24nLCAgICAvLyBUaGUgZGF0YSB0eXBlIGV4cGVjdGVkIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgICdnbG9iYWwnIDogdHJ1ZSwgICAgICAgIC8vIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHRyaWdnZXIgZ2xvYmFsIEFKQVggZXZlbnQgaGFuZGxlcyBmb3IgdGhlIHJlcXVlc3QuRGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgICAgICd0aW1lb3V0JyA6IDEwMDAgKiA2MCwgIC8vIFRoZSBsb2NhbCB0aW1lb3V0KGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICd0eXBlJyA6ICdQT1NUJyxcclxuICAgICAgICAgICAgJ3VybCc6IG15VXJsLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2VuZCc6IHRoaXMuYmVmb3JlU2VuZF9mdW5jdGlvbiwgLy8gKHhocilcdEEgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSB0aGUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAgICAgICAgICdlcnJvcic6IHRoaXMuZXJyb3JfZnVuY3Rpb24sICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMsIGVycm9yKVx0QSBmdW5jdGlvbiB0byBydW4gaWYgdGhlIHJlcXVlc3QgZmFpbHMuXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogIHRoaXMuc3VjY2Vzc19mdW5jdGlvbiwgICAgICAgLy8gKHJlc3VsdCwgc3RhdHVzLCB4aHIpXHRBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSc6IGNvbXBsZXRlZnVuY3Rpb24sICAgICAgICAgICAgLy8gKHhociwgc3RhdHVzKVx0QSBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZChhZnRlciBzdWNjZXNzIGFuZCBlcnJvciBmdW5jdGlvbnMpXHJcbiAgICAgICAgICAgICdteUFqYXhDbGFzcycgOiB0aGlzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBYSFIgOlxyXG4gICAge1xyXG4gICAgICAgIHJlYWR5U3RhdGU6IDRcclxuICAgICAgICByZXNwb25zZUpTT046IHtcInR5cGVcIiA6IFwiZXJyb3JcIixcImRhdGFcIjogW3tcImVycm5vXCI6IDkwMDAwMDB9LCB7XCJkYXRhXCI6XCJpQlJJV1NBcGkjI19kZWNvZGVKU09OSW5wdXQgIyB1bmFibGUgdG8gcGFyc2UtLSBpbnZhbGlkIGpzb24gZm9ybWF0IHRlc3QgaXQgZmlyc3QgLi4uVHJcclxuICAgICAgICByZXNwb25zZVRleHQ6IFxcblxcblxcblxcbntcXFwidHlwZVxcXCIgOiBcXFwiZXJyb3JcXFwiLFxcXCJkYXRhXFxcIjogW3tcXFwiZXJybm9cXFwiOiA5MDAwMDAwfSwge1xcXCJkYXRhXFxcIjpcXFwiaUJSSVdTQXBpIyNfZGVjb2RlSlNPTklucHV0ICMgdW5hYmxlIHRvIHBhcnNlIC0tIGludmFsaWQganNvbiBmb3JtYXQgdGVzdCBpdFxyXG4gICAgICAgIHN0YXR1czogMjAwXHJcbiAgICAgICAgc3RhdHV4VGV4dDogXCJPS1wiXHJcblxyXG4gICAgICAgIGFib3J0OiDGkiAoIHN0YXR1c1RleHQgKVxyXG4gICAgICAgIGFsd2F5czogxpIgKClcclxuICAgICAgICBjYXRjaDogxpIgKCBmbiApXHJcbiAgICAgICAgZG9uZTogxpIgKClcclxuICAgICAgICBmYWlsOiDGkiAoKVxyXG4gICAgICAgIGdldEFsbFJlc3BvbnNlSGVhZGVyczogxpIgKClcclxuICAgICAgICBnZXRSZXNwb25zZUhlYWRlcjogxpIgKCBrZXkgKVxyXG4gICAgICAgIG92ZXJyaWRlTWltZVR5cGU6IMaSICggdHlwZSApXHJcbiAgICAgICAgcGlwZTogxpIgKCApXHJcbiAgICAgICAgcHJvZ3Jlc3M6IMaSICgpXHJcbiAgICAgICAgcHJvbWlzZTogxpIob2JqKVxyXG5cclxuICAgICAgICBzZXRSZXF1ZXN0SGVhZGVyOiBmKClcclxuICAgICAgICBzdGF0dXNDb2RlOiBmIChtYXApXHJcbiAgICAgICAgdGhlbiAgOiBmKC4uLilcclxuICAgICovXHJcbiAgICBwcml2YXRlIGJlZm9yZVNlbmRfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVycm9yX2Z1bmN0aW9uKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nLCBlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggZmFpbCAnICsgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggZmFpbCAnICsgZXJyb3IpO1xyXG4gICAgICAgIC8vIGFsZXJ0ICAoJ2FqYXggZmFpbHM6IFNlZSBDb25zb2xlLkxvZycpO1xyXG4gICAgICAgIGxldCBteUFqYXhDbGFzczogY0FqYXg7XHJcbiAgICAgICAgaWYgKCdteUFqYXhDbGFzcycgaW4gdGhpcykge1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcyA9ICh0aGlzIGFzIGlBamF4Q29uZmlnKS5teUFqYXhDbGFzcztcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHN1Y2Nlc3NfZnVuY3Rpb24oZGF0YTogYW55LCBzdGF0dXM6IHN0cmluZywgeGhyOiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhamF4IHN1Y2VzcycpO1xyXG4gICAgICAgIGxldCBteUFqYXhDbGFzczogY0FqYXg7XHJcbiAgICAgICAgaWYgKCdteUFqYXhDbGFzcycgaW4gdGhpcykge1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcyA9ICh0aGlzIGFzIGlBamF4Q29uZmlnKS5teUFqYXhDbGFzcztcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNvbXBsZXRlX2Z1bmN0aW9uKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2cgKCdhamF4IGNvbXBsZXRlZCcpO1xyXG4gICAgICAgIGxldCBteUFqYXhDbGFzcyA6IGNBamF4IDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBpZiAobXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzICE9IDEpIHsgLy8gcGFzIGVuIGVycmV1clxyXG4gICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMztcclxuICAgICAgICAgICAgICAgIGxldCBhamF4UmVwb25zZTogaUFqYXhSZXNwb25zZU1lc3NhZ2UgPSAoSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KSBhcyBpQWpheFJlc3BvbnNlTWVzc2FnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFqYXhSZXBvbnNlLnR5cGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhamF4UmVwb25zZS50eXBlID09PSAnZXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEgPSBhamF4UmVwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGVydCAgKCdXUyBmYWlsczogZXJyb3Igc2VlIGlubG9nICEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhID0gYWpheFJlcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMTsgLy8gcmV0b3VyIGluY29ubnUgZW4gZXJyZXVyICFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNBamF4LCBjQWpheFNlbmRNZXNzYWdlLCBpQWpheFNlbmRNZXNzYWdlQXJncyB9IGZyb20gJy4vY0FqYXgnO1xyXG5pbXBvcnQgY0VudnQgZnJvbSAnLi4vLi4vaW5mcmEvY0VudnQnO1xyXG5pbXBvcnQgeyBpR2Vub3R5cGVNZXNzYWdlLCBpUmVzdWx0YXRNZXNzYWdlIH0gZnJvbSAnLi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlFeHBlcmllbmNlSURNZXNzYWdlLCBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZSwgaUludGVybmFsRXhwZXJpZW5jZU9uZUZpbGVNZXNzYWdlIH0gZnJvbSAnLi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgY0V4cGVyaWVuY2Uge1xyXG4gICAgcHJpdmF0ZSBfYWpheDogY0FqYXggPSBuZXcgY0FqYXgoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zaW5nbGV0b246IGNFeHBlcmllbmNlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fYWpheCA9IG5ldyBjQWpheCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEluc3RhbmNlKCk6IGNFeHBlcmllbmNlIHtcclxuICAgICAgICBpZiAoY0V4cGVyaWVuY2UuX3NpbmdsZXRvbiA9PSBudWxsKVxyXG4gICAgICAgICAgICBjRXhwZXJpZW5jZS5fc2luZ2xldG9uID0gbmV3IGNFeHBlcmllbmNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5fc2luZ2xldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxQZXJzb25lKCkgOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nICgncGVyc29ubmVzJywgJ2dldEFsbFBlcnNvbm5lcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3QgOiBKU09OID0gSlNPTi5wYXJzZSAocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoIChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbEV4cGVyaWVuY2VJbml0aWFsZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsRXhwZXJpZW5jZUluaXRpYWxlJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVEQkV4cGVyaWVuY2UoZXhwZXJpZW5jZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgcXVpOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ2V4cGVyaWVuY2VzdHJpbmdpZCcsIGV4cGVyaWVuY2VJZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ2RhdGVyZWFsaXNhdGlvbmV4cGVyaWVuY2UnLCBkYXRlKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZmFpdGVwYXJxdWknLCBxdWkpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2NyZWF0ZScsIGFyZ3MpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50IChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlVWlkRnJvbUV4cGVyaWVuY2VTdHJpbmdpZChleHBlcmllbmNlc3RyaW5naWQgOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ2V4cGVyaWVuY2VzdHJpbmdpZCcsIGV4cGVyaWVuY2VzdHJpbmdpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlVWlkRnJvbUV4cGVyaWVuY2VTdHJpbmdpZCcsIGFyZ3MpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyLnBhcnNlSW50IChyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxFeHBlcmllbmNlVWlkKCk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxFeHBlcmllbmNlVWlkJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxudW1iZXI+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PG51bWJlcj4pO1xyXG4gICAgICAgICAgICByZXNwLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VfSW5mb0dlbmVyYWxlKGlFeHBVaWQ6IG51bWJlcik6IGlFeHBlcmllbmNlSURNZXNzYWdlIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuXHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ3VpZCcsIGlFeHBVaWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZV9JbmZvR2VuZXJhbGUnLCBhcmdzKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlFeHBlcmllbmNlSURNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpRXhwZXJpZW5jZUlETWVzc2FnZT4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcFswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX1Jlc3VsdGF0R2Vub3R5cGUoaUV4cFVpZDogbnVtYmVyKTogaUdlbm90eXBlTWVzc2FnZVtdfG51bGwge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCd1aWQnLCBpRXhwVWlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VfUmVzdWx0YXRHZW5vdHlwZScsIGFyZ3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8aUdlbm90eXBlTWVzc2FnZT4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8aUdlbm90eXBlTWVzc2FnZT4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdFRlc3QoaUV4cFVpZDogbnVtYmVyKTogaVJlc3VsdGF0TWVzc2FnZVtdIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ3VpZCcsIGlFeHBVaWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdFRlc3QnLCBhcmdzKTtcclxuXHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxpUmVzdWx0YXRNZXNzYWdlPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxpUmVzdWx0YXRNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEltYWdlKGlFeHBVaWQ6IG51bWJlcik6IGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlW10gfCBudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX1Jlc3VsdGF0SW1hZ2UnLCBhcmdzKTtcclxuXHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZT4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8aUV4cGVyaWVuY2VGaWxlc01lc3NhZ2U+KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgdXBsb2FkRmlsZXMoaWQ6IG51bWJlciwgZmlsZXM6IEZpbGVMaXN0KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGYgOiBGaWxlIHwgbnVsbCA9IGZpbGVzLml0ZW0oaSk7XHJcbiAgICAgICAgICAgIGlmIChmID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQgKCdmaWxlLScgKyBpLCBmLCBmLm5hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuXHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2V4cGVyaWVuY2VJZCcsIGlkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdfY2xhc3NlJywgJ2V4cGVyaWVuY2UnKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnX3JlcXVldGUnLCAndXBsb2FkRmlsZScpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3RGaWxlcyhjRW52dC5nZXRBamF4VVJMV1MoKSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyB1cGRhdGVEQkV4cGVyaWVuY2UoZXhwZXJpZW5jZTogaVJlc3VsdGF0TWVzc2FnZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBudW1iZXIgPSAtMTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgnaWRleHBlcmllbmNlJywgKGV4cGVyaWVuY2UuaWRleHBlcmllbmNlIGFzIG51bWJlcikpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdtYXJxdWFnZScsIGV4cGVyaWVuY2UubWFycXVhZ2UpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBpZiAoZXhwZXJpZW5jZS5OYkdlbm90eXBlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgnTmJHZW5vdHlwZScsIGV4cGVyaWVuY2UuTmJHZW5vdHlwZSk7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgnU0NvbXBhcmF0aWYnLCBleHBlcmllbmNlLlNDb21wYXJhdGlmKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgnU0dlbmVyYWwnLCBleHBlcmllbmNlLlNHZW5lcmFsKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygndHlwZWRldGVzdCcsIGV4cGVyaWVuY2UudHlwZWRldGVzdCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGlmIChleHBlcmllbmNlLkdlbm90eXBlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbUFycmF5KCdHZW5vdHlwZScsIGV4cGVyaWVuY2UuR2Vub3R5cGUpO1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICd1cGRhdGUnLCBhcmdzKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBkdW1wRnJvbURCKGlkOiBudW1iZXIsIF9pZFJlc3VsdGF0REI6IHN0cmluZykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsVGVzdFR5cGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbFRlc3RUeXBlcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsTWFycXVhZ2UoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbE1hcnF1YWdlJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZTEoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lWFgoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lMigpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWVYWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWUzKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZTQoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lWFgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lWFgoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbENocm9tb3NvbWVzJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVfaVJlc3VsdGF0TWVzc2FnZSgpOiBpUmVzdWx0YXRNZXNzYWdlIHtcclxuICAgICAgICBsZXQgcmV0b3VyOiBpUmVzdWx0YXRNZXNzYWdlID0ge1xyXG4gICAgICAgICAgICAnaWRleHBlcmllbmNlJzogMCxcclxuICAgICAgICAgICAgJ2V4cGVyaWVuY2VzdHJpbmdpZCc6ICcnLFxyXG4gICAgICAgICAgICAnR2Vub3R5cGUnIDogW10sXHJcbiAgICAgICAgICAgICdtYXJxdWFnZScgOiAnJyxcclxuICAgICAgICAgICAgJ05iR2Vub3R5cGUnIDogMCxcclxuICAgICAgICAgICAgJ1NDb21wYXJhdGlmJyA6IDAsXHJcbiAgICAgICAgICAgICdTR2VuZXJhbCcgOiAwLFxyXG4gICAgICAgICAgICAndHlwZWRldGVzdCcgOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lHZW5vdHlwZU1lc3NhZ2UoKTogaUdlbm90eXBlTWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaUdlbm90eXBlTWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWUxJzogJycsXHJcbiAgICAgICAgICAgICdjaHJvbW9zb21lMic6ICcnLFxyXG4gICAgICAgICAgICAnY2hyb21vc29tZTMnOiAnJyxcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWU0JzogJycsXHJcbiAgICAgICAgICAgICduYmVjaGFudGlsbG9uJzogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgY0VudnQgZnJvbSAnLi9pbmZyYS9jRW52dCc7XHJcbmltcG9ydCB7IGNDb250cm9sZXIgfSAgZnJvbSAnLi9pbmZyYS9jQ29udHJvbGVyJztcclxuaW1wb3J0IHsgY0xvZ2dlciwgZUxvZ2dlckxldmVsIH0gZnJvbSAnLi9pbmZyYS9jTG9nZ2VyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBjTXlVSSB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2lkUmVzdWx0YXREQjogc3RyaW5nID0gJ2lkUmVzdWx0YXREQic7XHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogY0xvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfY3RybDogY0NvbnRyb2xlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQgOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlkID09IG51bGwpXHJcbiAgICAgICAgICAgIGlkID0gJ2NNeVVJJztcclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbmV3IGNMb2dnZXIoY0VudnQuZ2V0RGVidWdMZXZlbCgpLCBpZCk7XHJcbiAgICAgICAgdGhpcy5fY3RybCA9IGNDb250cm9sZXIuZ2V0SW50YW5jZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFic3RyYWN0IGRyYXcoKTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFic3RyYWN0IGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTWVzc2FnZShtZXNzYWdlSWQgOiBzdHJpbmcgfCBudWxsKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChtZXNzYWdlSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAkKCcubWVzc2FnZSAuY2xvc2UnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcubWVzc2FnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oJ2ZhZGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKG1lc3NhZ2VJZClcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLm1lc3NhZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbignZmFkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfY3JlYXRlIGZyb20gJy4vY015VUlfTWFpblRhYl9jcmVhdGUnO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYl9ham91dCBmcm9tICcuL2NNeVVJX01haW5UYWJfYWpvdXQnO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24gZnJvbSAnLi9jTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYiBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkVGFiU2Fpc2llOiBzdHJpbmcgPSAndGFiLXNhaXNpZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEFjY29yZGVvbkNvbXBsZXRlckV4cGVyaWVuY2U6IHN0cmluZyA9ICdpZEFjY29yZGVvbkNvbXBsZXRlckV4cGVyaWVuY2UnO1xyXG4gICAgcHJpdmF0ZSBfY3JlYXRpb25VSTogY015VUlfTWFpblRhYl9jcmVhdGU7XHJcbiAgICBwcml2YXRlIF9ham91dFVJOiBjTXlVSV9NYWluVGFiX2Fqb3V0O1xyXG4gICAgcHJpdmF0ZSBfQ29uc3VsdGF0aW9uVUk6IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoJ01haW5UYWInKTtcclxuICAgICAgICB0aGlzLl9jcmVhdGlvblVJID0gbmV3IGNNeVVJX01haW5UYWJfY3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5fYWpvdXRVSSA9IG5ldyBjTXlVSV9NYWluVGFiX2Fqb3V0KCk7XHJcbiAgICAgICAgdGhpcy5fQ29uc3VsdGF0aW9uVUkgPSBuZXcgY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFjdGl2ZXIgbGVzIHNlbWVudGljVUkgZHUgZGlhbG9nXHJcbiAgICAgICAgJCgnLnVpLmFjY29yZGlvbicpLmFjY29yZGlvbigpO1xyXG4gICAgICAgICQoJy50YWJ1bGFyLm1lbnUgLml0ZW0nKS50YWIoKTtcclxuXHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiID0gdGhpcztcclxuICAgICAgICBtZS5fY3JlYXRpb25VSS5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuICAgICAgICBtZS5fYWpvdXRVSS5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuICAgICAgICBtZS5fQ29uc3VsdGF0aW9uVUkuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcblxyXG4gICAgICAgIC8vIHByb3BhZ2F0aW9uIGRlIGwnZXZlbmVtZW50IGRlIG1pc2UgIGFqb3VyIGRlICdpZCBkJ2V4cGVyaWVuY2VcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZEFjY29yZGVvbkNvbXBsZXRlckV4cGVyaWVuY2V9YCkub24gKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtZS5fYWpvdXRVSS5VcGRhdGVNeURpYWxvZyhtZS5fY3RybC5sYXN0RXhwLCBtZS5fY3RybC5pTGFzdEV4cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZztcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mbzogc3RyaW5nID0gdGhpcy5leHBlcmllbmNlQ3JlYXRpb25BY2NvcmRlb25JbmZvKCk7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvOiBzdHJpbmcgPSB0aGlzLmV4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvKCk7XHJcblxyXG5cclxuICAgICAgICByZXRvdXIgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInVpIGZsdWlkIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgdG9wIGF0dGFjaGVkIHRhYnVsYXIgbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGl2ZSBpdGVtXCIgZGF0YS10YWI9XCIke3RoaXMuX2lkVGFiU2Fpc2llfVwiIGlkPVwiJHt0aGlzLl9pZFRhYlNhaXNpZX1cIj5TYWlzaWUgRXhwZXJpZW5jZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLXRhYj1cInRhYi1jb25zdWx0YXRpb25cIj5Db25zdWx0YXRpb248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBib3R0b20gYXR0YWNoZWQgYWN0aXZlIHRhYiBzZWdtZW50XCIgZGF0YS10YWI9XCIke3RoaXMuX2lkVGFiU2Fpc2llfVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBUYWIgQ29udGVudCAhLS0+XHJcbiAgICAgICAgICAgICAgICAke2V4cGVyaWVuY2VDcmVhdGlvbkFjY29yZGVvbkluZm99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYm90dG9tIGF0dGFjaGVkIHRhYiBzZWdtZW50XCIgZGF0YS10YWI9XCJ0YWItY29uc3VsdGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIFRhYiBDb250ZW50ICEtLT5cclxuICAgICAgICAgICAgICAgICR7ZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuX2lkUmVzdWx0YXREQn1cIj48L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHBlcmllbmNlQ3JlYXRpb25BY2NvcmRlb25JbmZvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VDcmVhdGlvbkluZm86IHN0cmluZyA9IHRoaXMuX2NyZWF0aW9uVUkuZHJhdygpO1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQWpvdXRJbmZvOiBzdHJpbmcgPSB0aGlzLl9ham91dFVJLmRyYXcoKTtcclxuXHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZztcclxuICAgICAgICByZXRvdXIgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBncmlkIGNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHN0eWxlZCBhY2NvcmRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRpb24gZCd1bmUgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2V4cGVyaWVuY2VDcmVhdGlvbkluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiIGlkPVwiJHt0aGlzLl9pZEFjY29yZGVvbkNvbXBsZXRlckV4cGVyaWVuY2V9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcGxldGVyIHVuZSBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQWpvdXRJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm8oKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm86IHN0cmluZyA9IHRoaXMuX0NvbnN1bHRhdGlvblVJLmRyYXcoKTtcclxuICAgICAgICByZXR1cm4gYDxkaXY+JHtleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mb308L2Rpdj5gO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjRXhwZXJpZW5jZSB9IGZyb20gJy4vU2VydmljZXMvREIvY0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgeyBpUmVzdWx0YXRNZXNzYWdlLCBpR2Vub3R5cGVNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlNeUh0bWxJbmZvLCBjVG9vbHMgfSBmcm9tICcuL2luZnJhL2NUb29scyc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTXlVSV9NYWluVGFiX2Fqb3V0IGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRPS0J1dHRvbjogc3RyaW5nID0gJ2lkT0tCdXR0b24nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRJbnB1dEV4cDogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRJbnB1dEV4cCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uY2hyb21vc29tZTE6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25jaHJvbW9zb21lMSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uY2hyb21vc29tZTI6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25jaHJvbW9zb21lMic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uY2hyb21vc29tZTM6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25jaHJvbW9zb21lMyc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uY2hyb21vc29tZTQ6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25jaHJvbW9zb21lNCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uVGVzdFR5cGU6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25UZXN0VHlwZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uTWFycXVhZ2U6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25NYXJxdWFnZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZElucHV0TmJFY2hhbnRpbGxvbjogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRJbnB1dE5iRWNoYW50aWxsb24nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRJbnB1dFNHZW5lcmFsOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9faWRJbnB1dFNHZW5lcmFsJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXRTQ29tcGFyYXRpZjogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRJbnB1dFNDb21wYXJhdGlmJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX25iR2Vub3R5cGUgPSA0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoJ01haW5UYWInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGFjdGl2ZXIgbGVzIHNlbWVudGljVUkgZHUgZGlhbG9nXHJcblxyXG4gICAgICAgIC8vIGNob2lzaXIgbGEgdGFiIHBhciBkZWZhdXRcclxuICAgICAgICAvLyAkKCcudWkgLml0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gJChgIyR7dGhpcy5faWRUYWJTYWlzaWV9YCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfYWpvdXQgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke21lLl9pZE9LQnV0dG9ufWApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IGFsbEluZm9zRnJvbVBhZ2U6IGlSZXN1bHRhdE1lc3NhZ2UgPSBjRXhwZXJpZW5jZS5jcmVhdGVfaVJlc3VsdGF0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLmV4cGVyaWVuY2VzdHJpbmdpZCA9IDxzdHJpbmc+ICQoYCMke21lLl9pZElucHV0RXhwfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLmlkZXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VVaWRGcm9tRXhwZXJpZW5jZVN0cmluZ2lkKGFsbEluZm9zRnJvbVBhZ2UuZXhwZXJpZW5jZXN0cmluZ2lkKTtcclxuXHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UubWFycXVhZ2UgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRTZWxlY3RPbk1hcnF1YWdlfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLk5iR2Vub3R5cGUgPSBtZS5fbmJHZW5vdHlwZTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5TQ29tcGFyYXRpZiA9IDxudW1iZXI+ICQoYCMke21lLl9pZElucHV0U0NvbXBhcmF0aWZ9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuU0dlbmVyYWwgPSA8bnVtYmVyPiAkKGAjJHttZS5faWRJbnB1dFNHZW5lcmFsfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLnR5cGVkZXRlc3QgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uVGVzdFR5cGV9YCkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lLl9uYkdlbm90eXBlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxJbmZvc0Zyb21HZW5vdHlwZTogaUdlbm90eXBlTWVzc2FnZSA9IGNFeHBlcmllbmNlLmNyZWF0ZV9pR2Vub3R5cGVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5jaHJvbW9zb21lMSA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25jaHJvbW9zb21lMX1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTIgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uY2hyb21vc29tZTJ9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLmNocm9tb3NvbWUzID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPbmNocm9tb3NvbWUzfV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5jaHJvbW9zb21lNCA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25jaHJvbW9zb21lNH1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUubmJlY2hhbnRpbGxvbiA9IDxudW1iZXI+JChgIyR7bWUuX2lkSW5wdXROYkVjaGFudGlsbG9ufV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsSW5mb3NGcm9tUGFnZS5HZW5vdHlwZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuR2Vub3R5cGUucHVzaChhbGxJbmZvc0Zyb21HZW5vdHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpZCA9IGNFeHBlcmllbmNlLnVwZGF0ZURCRXhwZXJpZW5jZShhbGxJbmZvc0Zyb21QYWdlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZU15RGlhbG9nKGxhc3RFeHA6IHN0cmluZywgaWxhc3RFeHA6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB4OiBzdHJpbmcgPSBsYXN0RXhwO1xyXG4gICAgICAgICQoYCMke3RoaXMuX2lkSW5wdXRFeHB9YCkudmFsKHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcbiAgICAgICAgY29uc3QgbmJMaWduZSA9IHRoaXMuX25iR2Vub3R5cGU7XHJcbiAgICAgICAgbGV0IHg6IHN0cmluZyA9IHRoaXMuX2N0cmwubGFzdEV4cDtcclxuXHJcbiAgICAgICAgbGV0IGluZm9zRm9ySFRNTDogaU15SHRtbEluZm87XHJcbiAgICAgICAgbGV0IHNlbGVjdGNocm9tb3NvbWUxIDogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMjogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMzogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lNDogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBJbnB1dE5iRWNoYW50aWxsb246IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0VHlwZVRlc3QgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IHNlbGVjdE1hcnF1YWdlIDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBJbnB1dFNHZW5lcmFsIDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBJbnB1dFNDb21wYXJhdGlmIDogc3RyaW5nO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iTGlnbmU7IGkrKykge1xyXG4gICAgICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCcgOiBgJHt0aGlzLl9pZFNlbGVjdE9uY2hyb21vc29tZTF9XyR7aX1gfTtcclxuICAgICAgICAgICAgc2VsZWN0Y2hyb21vc29tZTFbaV0gPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWUxKCksIGluZm9zRm9ySFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPbmNocm9tb3NvbWUyfV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBzZWxlY3RjaHJvbW9zb21lMltpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZTIoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPbmNocm9tb3NvbWUzfV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBzZWxlY3RjaHJvbW9zb21lM1tpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZTMoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPbmNocm9tb3NvbWU0fV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBzZWxlY3RjaHJvbW9zb21lNFtpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZTQoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215SW5wdXRJbnQnLCAndHlwZSc6ICdudW1iZXInLCAnaWQnOiBgJHt0aGlzLl9pZElucHV0TmJFY2hhbnRpbGxvbn1fJHtpfWAgfTtcclxuICAgICAgICAgICAgSW5wdXROYkVjaGFudGlsbG9uW2ldID0gY1Rvb2xzLkJ1aWxkSW5wdXRJbnQoJzEnLCBpbmZvc0ZvckhUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteUlucHV0RmxvYXQnLCAndHlwZSc6ICdudW1iZXInLCAnaWQnOiBgJHt0aGlzLl9pZElucHV0U0dlbmVyYWx9YCwgJ3BsYWNlaG9sZGVyJzogJzEuNzllLTExJyB9O1xyXG4gICAgICAgIElucHV0U0dlbmVyYWwgPSBjVG9vbHMuQnVpbGRJbnB1dEludCgnMScsIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215SW5wdXRGbG9hdCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkSW5wdXRTQ29tcGFyYXRpZn1gLCAncGxhY2Vob2xkZXInOiAnMS43OWUtMTEnICB9O1xyXG4gICAgICAgIElucHV0U0NvbXBhcmF0aWYgPSBjVG9vbHMuQnVpbGRJbnB1dEludCgnMScsIGluZm9zRm9ySFRNTCk7XHJcblxyXG5cclxuICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkU2VsZWN0T25UZXN0VHlwZX1gIH07XHJcbiAgICAgICAgc2VsZWN0VHlwZVRlc3QgPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbFRlc3RUeXBlKCksIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPbk1hcnF1YWdlfWAgfTtcclxuICAgICAgICBzZWxlY3RNYXJxdWFnZSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsTWFycXVhZ2UoKSwgaW5mb3NGb3JIVE1MKTtcclxuICAgICAgICBcclxuICAgICAgICByZXRvdXIgPSBgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZSBJZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt4fVwiIHBsYWNlaG9sZGVyPVwiW2xldHRyZV1bY2hpZmZyZV0tW2xldHRyZV1bY2hpZmZyZV1cIiBpZD1cIiR7dGhpcy5faWRJbnB1dEV4cH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbm90eXBlPC90aD48dGg+Y2hyb21vc29tZXNvbWUgMTwvdGg+IDx0aD5jaHJvbW9zb21lc29tZSAyPC90aD4gPHRoPmNocm9tb3NvbWVzb21lIDM8L3RoPjx0aD5jaHJvbW9zb21lc29tZSA0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYiBFY2hhbnRpbGxvbjwvdGg+PHRoPk1hcnF1YWdlPC90aD48dGg+UyBnZW5lcmFsPC90aD48dGg+UyBjb21wYXJhdGlmPC90aD48dGg+VHlwZSB0ZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RyAke2krMX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUxW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTJbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lM1tpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWU0W2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtJbnB1dE5iRWNoYW50aWxsb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7c2VsZWN0TWFycXVhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7SW5wdXRTR2VuZXJhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtJbnB1dFNDb21wYXJhdGlmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke3NlbGVjdFR5cGVUZXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSsxfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTFbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMltpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUzW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTRbaV19PC90ZD48dGQ+JHtJbnB1dE5iRWNoYW50aWxsb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBwaW5rXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHt0aGlzLl9pZE9LQnV0dG9ufVwiPk9LICE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjRXhwZXJpZW5jZSB9IGZyb20gJy4vU2VydmljZXMvREIvY0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgeyBpUmVzdWx0YXRNZXNzYWdlLCBpR2Vub3R5cGVNZXNzYWdlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9pT25NZXNzYWdlV2l0aFNlcnZlcic7XHJcbmltcG9ydCB7IGlFeHBlcmllbmNlSURNZXNzYWdlLCBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZSB9IGZyb20gJy4vU2VydmljZXMvREIvaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpTXlIdG1sSW5mbywgY1Rvb2xzIH0gZnJvbSAnLi9pbmZyYS9jVG9vbHMnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24gZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZE9LQnV0dG9uIDogc3RyaW5nID0gJ09LQnV0dG9uJztcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoJ01haW5UYWInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24gPSB0aGlzO1xyXG4gICAgICAgICQoYC52b2lyYCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCkge1xyXG4gICAgICAgICAgICAvLyBhZmlpY2hlciBkYW5zIDxkaXYgaWQ9XCIke3RoaXMuX2lkUmVzdWx0YXREQn1cIj48L2Rpdj5cclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkUmVzdWx0YXREQn1gKS5lbXB0eSgpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBWb2lyQnV0dG9uSWQgOiBzdHJpbmcgPSAoJChldmVudC50YXJnZXQpLmF0dHIoJ2lkJykgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgbGV0IHNFeHBVaWQ6IHN0cmluZyA9IFZvaXJCdXR0b25JZC5zdWJzdHJpbmcobWUuX2lkT0tCdXR0b24ubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgICAgIGxldCBpRXhwVWlkOiBudW1iZXIgPSBOdW1iZXIucGFyc2VJbnQoc0V4cFVpZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5mb0dlbmVyYWxlRXhwZXJpZW5jZTogaUV4cGVyaWVuY2VJRE1lc3NhZ2UgfCBudWxsID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9JbmZvR2VuZXJhbGUoaUV4cFVpZCk7XHJcbiAgICAgICAgICAgIGxldCBFeHBlcmllbmNlU3RyaW5nSWQ6IHN0cmluZyA9IFwiLS0tLVwiO1xyXG4gICAgICAgICAgICBpZiAoaW5mb0dlbmVyYWxlRXhwZXJpZW5jZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgRXhwZXJpZW5jZVN0cmluZ0lkID0gaW5mb0dlbmVyYWxlRXhwZXJpZW5jZS5leHBlcmllbmNlc3RyaW5naWQ7XHJcbiAgICAgICAgICAgIGxldCBpbmZvUmVzdWx0YXRFeHBlcmllbmNlOiBpUmVzdWx0YXRNZXNzYWdlW10gfCBudWxsID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdFRlc3QoaUV4cFVpZCk7XHJcbiAgICAgICAgICAgIGxldCBpbmZvR2Vub21lRXhwZXJpZW5jZTogaUdlbm90eXBlTWVzc2FnZVtdIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfUmVzdWx0YXRHZW5vdHlwZShpRXhwVWlkKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBteVVJRm9yQ29uc3VsdDogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgIGlmICgoaW5mb0dlbm9tZUV4cGVyaWVuY2UgIT0gbnVsbCkgJiYgKGluZm9SZXN1bHRhdEV4cGVyaWVuY2UgIT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzA6IGlSZXN1bHRhdE1lc3NhZ2UgPSBpbmZvUmVzdWx0YXRFeHBlcmllbmNlWzBdO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVuZUluZm9HZW5vbWVFeHBlcmllbmNlOiBpR2Vub3R5cGVNZXNzYWdlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgoaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wID09PSB1bmRlZmluZWQpIHx8IChpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuaWRleHBlcmllbmNlID09PSB1bmRlZmluZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzIGRlIGRhdGEgYXNzb2NpZSBhIGNldHRlIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCA9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgeWVsbG93IGlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QYXMgZGUgZG9ubmVlcyBkJ2V4cGVyaWVuY2UgYXNzb2NpZWUgPGJyLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlIElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7RXhwZXJpZW5jZVN0cmluZ0lkfSAgW0lEIGVuIERCOiAke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5pZGV4cGVyaWVuY2V9XTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbm90eXBlPC90aD48dGg+Y2hyb21vc29tZXNvbWUgMTwvdGg+IDx0aD5jaHJvbW9zb21lc29tZSAyPC90aD4gPHRoPmNocm9tb3NvbWVzb21lIDM8L3RoPjx0aD5jaHJvbW9zb21lc29tZSA0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5iIEVjaGFudGlsbG9uPC90aD48dGg+TWFycXVhZ2U8L3RoPjx0aD5TIGdlbmVyYWw8L3RoPjx0aD5TIGNvbXBhcmF0aWY8L3RoPjx0aD5UeXBlIHRlc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmVJbmZvR2Vub21lRXhwZXJpZW5jZSA9IGluZm9HZW5vbWVFeHBlcmllbmNlW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpICsgMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUxfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTJ9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lM308L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWU0fTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UubmJlY2hhbnRpbGxvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7aW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RofVwiPiR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLm1hcnF1YWdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGh9XCI+JHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuU0dlbmVyYWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5TQ29tcGFyYXRpZn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7aW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RofVwiPiR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLnR5cGVkZXRlc3R9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RyAke2kgKyAxfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTF9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lMn08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUzfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTR9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5uYmVjaGFudGlsbG9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmZvRmlsZUV4cGVyaWVuY2U6IGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlW10gfCBudWxsID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEltYWdlKGlFeHBVaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChpbmZvRmlsZUV4cGVyaWVuY2UgIT0gbnVsbCkgJiYgKGluZm9GaWxlRXhwZXJpZW5jZS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgaW5wdXRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmZvRmlsZUV4cGVyaWVuY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2luZm9GaWxlRXhwZXJpZW5jZVtpXS5ub219PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2luZm9GaWxlRXhwZXJpZW5jZVtpXS5wYXRofTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGltZyBzcmM9XCIke2luZm9GaWxlRXhwZXJpZW5jZVtpXS51cmx9XCIgYWx0PVwiJHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0ucGF0aH1cIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjM0MVwiIHRpdGxlPVwiaW1hZ2UgJHtpfVwiPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbCB5ZWxsb3dcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzIGQnaW1hZ2UgYXNzb2NpZWVzIGEgY2V0dGUgZXhwZXJpZW5jZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICQoYCMke21lLl9pZFJlc3VsdGF0REJ9YCkuYXBwZW5kKG15VUlGb3JDb25zdWx0KTtcclxuLy8gICAgICAgICAgICBsZXQgeTogaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2UgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX0ZpbGVzVVJMKGlFeHBVaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nO1xyXG5cclxuICAgICAgICBsZXQgYWxsRXhwZXJpZW5jZXVpZCA6IG51bWJlcltdID0gY0V4cGVyaWVuY2UuZ2V0QWxsRXhwZXJpZW5jZVVpZCgpO1xyXG4gICAgICAgIGxldCB4OiBpRXhwZXJpZW5jZUlETWVzc2FnZSB8IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RXhwZXJpZW5jZSBOdW08L3RoPjx0aD5FeHBlcmllbmNlSUQ8L3RoPjx0aD5RdWk8L3RoPiA8dGg+UXVhbmQ8L3RoPjx0aD5EYXRlIEVucmVnaXN0cmVtZW50PC90aD48dGg+Vm9pcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEV4cGVyaWVuY2V1aWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgeCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfSW5mb0dlbmVyYWxlKGFsbEV4cGVyaWVuY2V1aWRbaV0pO1xyXG4gICAgICAgICAgICBpZiAoeCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7YWxsRXhwZXJpZW5jZXVpZFtpXX08L3RkPjx0ZD4ke3guZXhwZXJpZW5jZXN0cmluZ2lkfTwvdGQ+PHRkPiR7eC5mYWl0ZXBhcnF1aX08L3RkPjx0ZD4ke3guZGF0ZXJlYWxpc2F0aW9uZXhwZXJpZW5jZX08L3RkPjx0ZD4ke3guZGF0ZWluc2VydH08L3RkPjx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBncmVlbiB2b2lyXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHt0aGlzLl9pZE9LQnV0dG9ufV8ke2FsbEV4cGVyaWVuY2V1aWRbaV19XCI+Vm9pcjwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjRXhwZXJpZW5jZSB9IGZyb20gJy4vU2VydmljZXMvREIvY0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYl9jcmVhdGUgZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9EZWZhdWx0UGVyc29ubmVOb206IHN0cmluZyA9ICdGYWdlcyc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9EZWZhdWx0UGVyc29ubmVOb21Jbml0aWFsZTogc3RyaW5nID0gdGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tLmNoYXJBdCgwKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkT0tCdXR0b246IHN0cmluZyA9ICdTYWlzaWVFeHBlcmllbmNlX09LQnV0dG9uJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRGF0ZUV4cDogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfRGF0ZUV4cCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFF1aTogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfUXVpJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRmlsZXM6IHN0cmluZyA9ICdTYWlzaWVFeHBlcmllbmNlX0ZpbGVzJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRGl2Rm9yTWVzc2FnZUluZm86IHN0cmluZyA9ICdNYWluVGFiX0RpdkZvckZvcm1fSW5mbyc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZE1lc3NhZ2VJbmZvOiBzdHJpbmcgPSAnTWFpblRhYl9VSV9JbmZvX01lc3NhZ2VJRCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEV4cGVyaWVuY2VOb21QcmVmaXhlOiBzdHJpbmcgPSAnTWFpblRhYl9VSV9JbmZvX0V4cGVyaWVuY2VBc0xldHRyZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEV4cGVyaWVuY2VOdW1lcm86IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9faWRFeHBlcmllbmNlTnVtZXJvJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZUV4cGVyaWVuY2V0eXBlOiBzdHJpbmcgPSAnTWFpblRhYl9VSV9JbmZvX19pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEV4cGVyaWVuY2VDbGVmOiBzdHJpbmcgPSAnTWFpblRhYl9VSV9JbmZvX2lkRXhwZXJpZW5jZUNsZWYnO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX015X01lc3NhZ2VfQ2xhc3NlIDogc3RyaW5nID0gJ0NsYXNzZURlc01lc3NhZ2VzSW5mbyc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlciAoJ01haW5UYWInKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2hlY2tGb3JtQ29udGVudSgpO1xyXG4gICAgICAgIHRoaXMubGllbkV4cHJpZW5jZUlkX05vbU1hbmlwKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGxpZW5FeHByaWVuY2VJZF9Ob21NYW5pcCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfY3JlYXRlID0gdGhpcztcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZFF1aX1gKS5vbiAoJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsOiBzdHJpbmcgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRRdWl9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCB2YWxFbnRldGUgPSB2YWwuY2hhckF0KDApO1xyXG4gICAgICAgICAgICAkKGAjJHttZS5faWRFeHBlcmllbmNlTm9tUHJlZml4ZX1gKS52YWwodmFsRW50ZXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIENhbGxiYWNrIGR1IE9LXHJcbiAgICAvLyAgICAgIDEuIGNoZWNrIGR1IGNvbnRlbnUgZHUgZm9ybXVsYWlyZVxyXG4gICAgLy8gICAgICAyLiBlbnZvaWUgZW4gREIgc2kgT0tcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgcHJpdmF0ZSBjaGVja0Zvcm1Db250ZW51KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jcmVhdGUgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke3RoaXMuX2lkT0tCdXR0b259YCkub24gKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICAgICAgLy8gbGVzIDMgY2hhbXBzIGEgY29udHJvbGVyXHJcbiAgICAgICAgICAgIGxldCBkYXRlIDogc3RyaW5nID0gPHN0cmluZz4gJChgIyR7bWUuX2lkRGF0ZUV4cH1gKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IHF1aTogc3RyaW5nID0gPHN0cmluZz4gJChgIyR7bWUuX2lkUXVpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgZmlsZXM6IEZpbGVMaXN0ID0gJChgIyR7bWUuX2lkRmlsZXN9YCkucHJvcCgnZmlsZXMnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVycnVycyBzaSAxIG1hbnF1ZVxyXG4gICAgICAgICAgICBsZXQgb25FcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgb25FcnJvck1lc3NhZ2U6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidWkgbmVnYXRpdmUgbWVzc2FnZSAke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1cIj48aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+YDtcclxuICAgICAgICAgICAgaWYgKGRhdGUubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvck1lc3NhZ2UgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYiBkZSBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gSWwgZmF1dCBjaG9pc2lyIHVuZSBkYXRlIDwvcD5gO1xyXG4gICAgICAgICAgICAgICAgb25FcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3JNZXNzYWdlICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbCBmYXV0IGNob2lzaXIgYXUgbW9pbnMgdW5lIGltYWdlIDwvcD5gO1xyXG4gICAgICAgICAgICAgICAgb25FcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25FcnJvck1lc3NhZ2UgKz0gJzwvZGl2Pic7XHJcblxyXG4gICAgICAgICAgICAvLyBhZmZpY2hlIGRlIGwnZXJyZXVyXHJcbiAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKGAjJHttZS5faWREaXZGb3JNZXNzYWdlSW5mb31gKS5hcHBlbmQob25FcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkRGl2Rm9yTWVzc2FnZUluZm99YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoYC4ke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1gKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gZW52b2llIGVuIERCXHJcbiAgICAgICAgICAgICAgICBsZXQgZXhwZXJpZW5jZUlkIDogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlSWQgKz0gJChgIyR7bWUuX2lkRXhwZXJpZW5jZU5vbVByZWZpeGV9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlSWQgKz0gJChgIyR7bWUuX2lkRXhwZXJpZW5jZU51bWVyb31gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAnLScgKyAkKGAjJHttZS5faWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGV9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlSWQgKz0gJChgIyR7bWUuX2lkRXhwZXJpZW5jZUNsZWZ9YCkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlkOiBudW1iZXIgPSBjRXhwZXJpZW5jZS5jcmVhdGVEQkV4cGVyaWVuY2UoZXhwZXJpZW5jZUlkLCBkYXRlLCBxdWkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNFeHBlcmllbmNlLnVwbG9hZEZpbGVzKGlkLCBmaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvbk9LTWVzc2FnZTogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1aSBwb3NpdGl2ZSBtZXNzYWdlICR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfVwiPjxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uT0tNZXNzYWdlICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGV4cGVyaWVuY2UgZW4gREIgLS0gT0tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gJHtleHBlcmllbmNlSWR9LCAke2RhdGV9LCAke3F1aX0sICR7ZmlsZXN9IDwvcD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uT0tNZXNzYWdlICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLmFwcGVuZChvbk9LTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkRGl2Rm9yTWVzc2FnZUluZm99YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAuJHttZS5fTXlfTWVzc2FnZV9DbGFzc2V9YCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX2N0cmwuc2V0TGFzdEV4cChleHBlcmllbmNlSWQsIGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0ICgnSW1wb3NzaWJsZSBkZSBtZXR0cmUgZW4gYmFzZSBjZXR0ZSBkZW1hbmRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uICgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbGxQZXJzb25uZXNPcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGxldCBhbGxQZXJzb25uZXM6IHN0cmluZ1tdID0gY0V4cGVyaWVuY2UuZ2V0QWxsUGVyc29uZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUGVyc29ubmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFBlcnNvbm5lc09wdGlvbiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7YWxsUGVyc29ubmVzW2ldfVwiPiR7YWxsUGVyc29ubmVzW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgQWxsRXhwZXJpZW5jZUluaXRpYWxlT3B0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBsZXQgQWxsRXhwZXJpZW5jZUluaXRpYWxlOiBzdHJpbmdbXSA9IGNFeHBlcmllbmNlLmdldEFsbEV4cGVyaWVuY2VJbml0aWFsZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQWxsRXhwZXJpZW5jZUluaXRpYWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIEFsbEV4cGVyaWVuY2VJbml0aWFsZU9wdGlvbiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7QWxsRXhwZXJpZW5jZUluaXRpYWxlW2ldfVwiPiR7QWxsRXhwZXJpZW5jZUluaXRpYWxlW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9IGBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhwZXJpZW5jZSBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tSW5pdGlhbGV9XCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZU5vbVByZWZpeGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZU51bWVyb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IHgtbGFyZ2U7IG1hcmdpbjphdXRvO1wiPi08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ1aSBjb21wYWN0IHNlbGVjdGlvbiBkcm9wZG93blwiIGlkPVwiJHt0aGlzLl9pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXV0cmVcIj5BdXRyZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZUNsZWZ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBkZSBsJ2V4cGVyaWVuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlLWV4cFwiIHZhbHVlPVwiMjAyMC0xMC0wMVwiIG1pbj1cIjIwMjAtMTAtMDFcIiBpZD1cIiR7dGhpcy5faWREYXRlRXhwfVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWkgYSByZWFsaXNlIGwnZXhwZXJpZW5jZT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ1aSBjb21wYWN0IHNlbGVjdGlvbiBkcm9wZG93blwiIGlkPVwiJHt0aGlzLl9pZFF1aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tfVwiPiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2FsbFBlcnNvbm5lc09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1dHJlXCI+QXV0cmVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGllbiB2ZXJzIGxlcyBpbWFnZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJleHBJbWFnZVwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiIG11bHRpcGxlIGlkPVwiJHt0aGlzLl9pZEZpbGVzfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5faWREaXZGb3JNZXNzYWdlSW5mb31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHBpbmtcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCIke3RoaXMuX2lkT0tCdXR0b259XCI+T0sgITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXVpZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFcnpldWd0IGVpbmUgVVVJRCBuYWNoIFJGQyA0MTIyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgcHVibGljIHV1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDsgLy8gTmFjaGtvbW1hc3RlbGxlbiBhYnNjaG5laWRlblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjaGFyID09PSAneCcgPyByYW5kb20gOiAocmFuZG9tICUgNCArIDgpOyAvLyBCZWkgeCBSYW5kb20gMC0xNSAoMC1GKSwgYmVpIHkgUmFuZG9tIDAtMyArIDggPSA4LTExICg4LWIpIGdlbcOkc3MgUkZDIDQxMjJcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDE2KTsgLy8gSGV4YWRlemltYWxlcyBaZWljaGVuIHp1csO8Y2tnZWJlblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZW51bSBlQ29uZmlnQ29ubnVlcyB7XHJcbiAgICBOYW5pZSA9IDAsXHJcbiAgICBQYXBzID0gMVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY0NvbmZpZ3Mge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2N1cnJlbnRDb25maWc6IGVDb25maWdDb25udWVzID0gZUNvbmZpZ0Nvbm51ZXMuTmFuaWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2FqYXhXU1VSTDogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3QvbmFuaWUvc2VydmVyL1dTL0JSSVdTLnBocCcsIC8qIE5hbmllICovXHJcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODgvbmFuaWUvc2VydmVyL1dTL0JSSVdTLnBocCcgLyogUGFwcyAqL1xyXG4gICAgXTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGFqYXhXU1VSTCgpIDogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY0NvbmZpZ3MuX2FqYXhXU1VSTFtjQ29uZmlncy5fY3VycmVudENvbmZpZ107XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIGNDb250cm9sZXIge1xyXG4gICAgcHJpdmF0ZSBfbGFzdEV4cDogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIF9pTGFzdEV4cDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zaW5nbGV0b246IGNDb250cm9sZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBjQ29udHJvbGVyLl9zaW5nbGV0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSAnJztcclxuICAgICAgICB0aGlzLl9pTGFzdEV4cCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRhbmNlKCkgOiBjQ29udHJvbGVyIHtcclxuICAgICAgICBpZiAoY0NvbnRyb2xlci5fc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgICAgIGNDb250cm9sZXIuX3NpbmdsZXRvbiA9IG5ldyBjQ29udHJvbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGNDb250cm9sZXIuX3NpbmdsZXRvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFzdEV4cCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlMYXN0RXhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lMYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgc2V0IGxhc3RFeHAobGFzdEV4cDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbGFzdEV4cCA9IGxhc3RFeHA7XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXRMYXN0RXhwKGxhc3RFeHA6IHN0cmluZywgaUxhc3RFeHA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSBsYXN0RXhwO1xyXG4gICAgICAgIHRoaXMuX2lMYXN0RXhwID0gaUxhc3RFeHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGVMb2dnZXJMZXZlbCB9IGZyb20gJy4vY0xvZ2dlcic7XHJcbmltcG9ydCB7IGNDb25maWdzIH0gZnJvbSAnLi9jQ29uZmlncyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjRW52dCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVidWdMZXZlbCA6IGVMb2dnZXJMZXZlbCA9IGVMb2dnZXJMZXZlbC5EZWJ1ZztcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9hamF4V1NVUkw6IHN0cmluZyA9IGNDb25maWdzLmFqYXhXU1VSTCgpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVidWdMZXZlbCgpOiBlTG9nZ2VyTGV2ZWwge1xyXG4gICAgICAgIHJldHVybiBjRW52dC5fZGVidWdMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFqYXhVUkxXUygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjRW52dC5fYWpheFdTVVJMO1xyXG4gICAgfVxyXG59XHJcbiIsIiAgICBleHBvcnQgZW51bSBlTG9nZ2VyTGV2ZWwge1xyXG4gICAgICAgIEFsbCAgICAgICAgID0gMCxcclxuICAgICAgICBEZWJ1ZyAgICAgICA9IDUwLFxyXG4gICAgICAgIFdhcm5pbmcgICAgID0gMTAwLFxyXG4gICAgICAgIEVycm9yICAgICAgID0gMTUwLFxyXG4gICAgICAgIEZhdGFsICAgICAgID0gMjAwXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIGNMb2dnZXIge1xyXG4gICAgICAgIHByaXZhdGUgX2xldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvciAobGV2ZWw6IGVMb2dnZXJMZXZlbCwgaWQ6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgQWxsIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuQWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBEZWJ1ZyAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBXYXJuaW5nIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEVycm9yIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBGYXRhbChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfbG9nIChtc2c6IHN0cmluZywgbGV2ZWw6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAobGV2ZWwgPiB0aGlzLl9sZXZlbClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIChtc2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBpTXlIdG1sSW5mbyB7XHJcbiAgICBjbGFzcz86IHN0cmluZztcclxuICAgIGlkPzogc3RyaW5nO1xyXG4gICAgdHlwZT86IHN0cmluZztcclxuICAgIGluZGljZXNlbGVjdGVkPzogbnVtYmVyO1xyXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBjVG9vbHMge1xyXG4gICAgc3RhdGljIEJ1aWxkU2VsZWN0RnJvbVRhYih2YWxzOiBzdHJpbmdbXSwgaW5mbzogaU15SHRtbEluZm8pIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyID0gJyc7XHJcbiAgICAgICAgbGV0IGFsbEtleXMgOiBzdHJpbmcgW10gPSBPYmplY3Qua2V5cyhpbmZvKTtcclxuXHJcbiAgICAgICAgcmV0b3VyID0gYDxzZWxlY3QgYDtcclxuICAgICAgICBpZiAoaW5mb1snY2xhc3MnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgY2xhc3M9XCIke2luZm9bJ2NsYXNzJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZm9bJ2lkJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGlkPVwiJHtpbmZvWydpZCddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgPmA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgOiBudW1iZXIgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoKGluZm9bJ2luZGljZXNlbGVjdGVkJ10gIT09IHVuZGVmaW5lZCkgJiYgKGkgPT09IGluZm9bJ2luZGljZXNlbGVjdGVkJ10pKSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIke3ZhbHNbaV19XCI+JHt2YWxzW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYDxvcHRpb24gdmFsdWU9XCIke3ZhbHNbaV19XCI+JHt2YWxzW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGA8L3NlbGVjdD5gO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIEJ1aWxkSW5wdXRJbnQodmFsOiBzdHJpbmcsIGluZm86IGlNeUh0bWxJbmZvKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyID0gYDxpbnB1dCB0eXBlPVwiJHtpbmZvWyd0eXBlJ119XCIgbmFtZT1cIiR7aW5mb1snaWQnXX1cIiBpZD1cIiR7aW5mb1snaWQnXX1cIiB2YWx1ZT1cIiR7dmFsfVwiIHN0ZXA9XCJhbnlcIiBgO1xyXG4gICAgICAgIGlmIChpbmZvWydjbGFzcyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBjbGFzcz1cIiR7aW5mb1snY2xhc3MnXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5mb1sncGxhY2Vob2xkZXInXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgcGxhY2Vob2xkZXI9XCIke2luZm9bJ3BsYWNlaG9sZGVyJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGAvPmA7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=