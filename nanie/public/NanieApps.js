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
                alert(data);
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
        alert('ajax fails: See Console.Log');
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
                        alert('WS fails: error see inlog !');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9teUFwcHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zYXNzL215QXBwcy5zY3NzP2MwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbmllQXBwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvREIvY0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9ham91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NNeVVJX01haW5UYWJfY3JlYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9VdWlkLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jQ29uZmlncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0NvbnRyb2xlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5mcmEvY0VudnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NUb29scy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LElBQUksOEJBQTJCLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQVcsQ0FBQzthQUN2RTtpQkFDSTtnQkFDRCxNQUFNLElBQUkscUJBQWtCLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQVcsQ0FBQzthQUM5RDtTQUNKO1FBQ0QsTUFBTSxJQUFJLFdBQVcsQ0FBQztRQUN0QixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRU0sb0JBQWEsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLElBQWlCO1FBQy9DLElBQUksTUFBTSxHQUFHLG1CQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBWSxHQUFHLHFCQUFlLENBQUM7UUFDaEgsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxhQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBSSxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxFQUFFO1lBQ25DLE1BQU0sSUFBSSxtQkFBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFJLENBQUM7U0FDckQ7UUFDRCxNQUFNLElBQUksSUFBSSxDQUFDO1FBQ2YsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDN0NELHdCIiwiZmlsZSI6Ik5hbmllQXBwcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL05hbmllQXBwcy50c1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pbnZlcnNlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5NeUFwcHMge1xcbiAgY29sb3I6IGdyZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxufVxcblxcbi5hY2NvcmRpb24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlTZWxlY3Qge1xcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teUlucHV0SW50IHtcXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXG59XFxuXFxuLm15SW5wdXRGbG9hdCB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4udWkuZ3JpZC5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Nhc3MvbXlBcHBzLnNjc3NcIixcIndlYnBhY2s6Ly9zYXNzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsWUNKVztFREtYLDRDQUFBO0FBREY7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFGSjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsdUNBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0VBQ0Esc0NBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0Esc0NBQUE7QUFGRjs7QUFNQTtFQUNJLHNCQUFBO0FBSEpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnYmFzZSc7XFxyXFxuXFxyXFxuLmludmVyc2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmFzZS4kcHJpbWFyeS1jb2xvcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLk15QXBwcyB7XFxyXFxuICBjb2xvcjogYmFzZS4kYm9keS1jb2xvcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYWNjb3JkaW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm15U2VsZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlJbnB1dEludCB7XFxyXFxuICB3aWR0aDogNzVweCAhaW1wb3J0YW50O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5teUlucHV0RmxvYXQge1xcclxcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnVpLmdyaWQuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXHJcXG59XCIsXCIvLyBfYmFzZS5zY3NzXFxyXFxuJGZvbnQtc3RhY2s6ICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzMzMztcXHJcXG4kYm9keS1jb2xvcjogZ3JlZW47XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXlBcHBzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi4vc2Fzcy9teUFwcHMuc2Nzcyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBjTXlVSV9NYWluVGFiIGZyb20gJy4vY015VUlfTWFpblRhYic7XHJcblxyXG5jbGFzcyBOYW5pZUFwcHMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgIH1cclxuXHJcbiAgICBtYWluKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCByb290RGl2OiBKUXVlcnk8SFRNTEVsZW1lbnQ+ID0gJCgnLnJvb3QnKTtcclxuICAgICAgICBsZXQgZGlhbG9nOiBjTXlVSV9NYWluVGFiID0gbmV3IGNNeVVJX01haW5UYWIoKTtcclxuICAgICAgICBsZXQgbmV3SFRNTDogc3RyaW5nID0gZGlhbG9nLmRyYXcoKTtcclxuXHJcbiAgICAgICAgaWYgKChyb290RGl2ICE9IG51bGwpICYmIChuZXdIVE1MICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgIHJvb3REaXYuYXBwZW5kKG5ld0hUTUwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaWFsb2cuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBhOiBOYW5pZUFwcHMgPSBuZXcgTmFuaWVBcHBzKCk7XHJcbmEubWFpbigpOyIsImltcG9ydCAkLCB7IGRhdGEgfSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgVXVpZCBmcm9tICcuLi8uLi9pbmZyYS9VdWlkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaUFqYXhTZW5kTWVzc2FnZUFyZ3Mge1xyXG4gICAgbm9tOiBzdHJpbmc7XHJcbiAgICB2YWw6IHN0cmluZztcclxufVxyXG5leHBvcnQgY2xhc3MgY0FqYXhTZW5kTWVzc2FnZSB7XHJcbiAgICBwcml2YXRlIF9jbGFzc2U6IHN0cmluZztcclxuICAgIHByaXZhdGUgX3JlcXVldGU6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2FyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3JlcXVldGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkRnJvbVN0cmluZyhjbGFzc2U6IHN0cmluZywgcmVxdWV0ZTogc3RyaW5nLCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdIHwgbnVsbCk6IGNBamF4U2VuZE1lc3NhZ2Uge1xyXG4gICAgICAgIGxldCByOiBjQWpheFNlbmRNZXNzYWdlID0gbmV3IGNBamF4U2VuZE1lc3NhZ2UoKTtcclxuICAgICAgICByLl9jbGFzc2UgPSBjbGFzc2U7XHJcbiAgICAgICAgci5fcmVxdWV0ZSA9IHJlcXVldGU7XHJcbiAgICAgICAgci5fYXJncyA9IFtdO1xyXG4gICAgICAgIGlmIChhcmdzICE9IG51bGwpXHJcbiAgICAgICAgICAgIHIuX2FyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRBcmdzRnJvbVN0cmluZyhub206IHN0cmluZywgdmFsOiBzdHJpbmcpOiBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICAgICAgbGV0IHI6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0ge1xyXG4gICAgICAgICAgICAnbm9tJzogbm9tLFxyXG4gICAgICAgICAgICAndmFsJzogdmFsXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQXJnc0Zyb21OdW0obm9tOiBzdHJpbmcsIHZhbDogbnVtYmVyKTogaUFqYXhTZW5kTWVzc2FnZUFyZ3Mge1xyXG4gICAgICAgIGxldCByOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IHtcclxuICAgICAgICAgICAgJ25vbSc6IG5vbSxcclxuICAgICAgICAgICAgJ3ZhbCc6IHZhbC50b1N0cmluZygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGJ1aWxkQXJnc0Zyb21BcnJheShub206IHN0cmluZywgdmFsOiBvYmplY3RbXSk6IGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgICAgICBsZXQgcjogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSB7XHJcbiAgICAgICAgICAgICdub20nOiBub20sXHJcbiAgICAgICAgICAgICd2YWwnOiBKU09OLnN0cmluZ2lmeSh2YWwpXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxufVxyXG5cclxuaW50ZXJmYWNlIGlBamF4UmVzcG9uc2VNZXNzYWdlIHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGRhdGE6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIGlBamF4Q29uZmlnIHtcclxuICAgICdhc3luYyc6IGJvb2xlYW47XHJcbiAgICAnY2FjaGUnOiBib29sZWFuO1xyXG4gICAgJ2NvbnRlbnRUeXBlJzogc3RyaW5nO1xyXG4gICAgJ2RhdGEnOiBzdHJpbmc7XHJcbiAgICAnZGF0YVR5cGUnOiBzdHJpbmc7ICAgIC8vIFRoZSBkYXRhIHR5cGUgZXhwZWN0ZWQgb2YgdGhlIHNlcnZlciByZXNwb25zZS5cclxuICAgICdnbG9iYWwnOiBib29sZWFuOyAgICAgICAgLy8gQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdG8gdHJpZ2dlciBnbG9iYWwgQUpBWCBldmVudCBoYW5kbGVzIGZvciB0aGUgcmVxdWVzdC5EZWZhdWx0IGlzIHRydWVcclxuICAgICd0aW1lb3V0JzogbnVtYmVyOyAgLy8gVGhlIGxvY2FsIHRpbWVvdXQoaW4gbWlsbGlzZWNvbmRzKSBmb3IgdGhlIHJlcXVlc3RcclxuICAgICd0eXBlJyA6IHN0cmluZztcclxuICAgICd1cmwnOiBzdHJpbmc7XHJcbiAgICAnYmVmb3JlU2VuZCc6ICh4aHI6IFhNTEh0dHBSZXF1ZXN0KSA9PiB2b2lkOyAgLy8gKHhocilcdEEgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSB0aGUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAnZXJyb3InOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcsIGVycm9yOiBhbnkpID0+IHZvaWQ7ICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMsIGVycm9yKVx0QSBmdW5jdGlvbiB0byBydW4gaWYgdGhlIHJlcXVlc3QgZmFpbHMuXHJcbiAgICAnc3VjY2Vzcyc6IChkYXRhOiBhbnksIHN0YXR1czogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KSA9PiB2b2lkOyAgICAgICAvLyAocmVzdWx0LCBzdGF0dXMsIHhocilcdEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZHNcclxuICAgICdjb21wbGV0ZSc6ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZykgPT4gdm9pZDsgICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMpXHRBIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSByZXF1ZXN0IGlzIGZpbmlzaGVkKGFmdGVyIHN1Y2Nlc3MgYW5kIGVycm9yIGZ1bmN0aW9ucylcclxuICAgICdteUFqYXhDbGFzcycgOiBjQWpheDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNBamF4IHtcclxuICAgIHByaXZhdGUgX2ludGVybmFsU3RhdHVzOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSBfcmV0dXJuZWREYXRhOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgX3VpZDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuX3VpZCA9IChuZXcgVXVpZCgpKS51dWlkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQgeyB0aGlzLl9pbnRlcm5hbFN0YXR1cyA9IDE7IHRoaXMuX3JldHVybmVkRGF0YSA9ICcnO31cclxuICAgIHB1YmxpYyBnZXRTdGF0dXMoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuX2ludGVybmFsU3RhdHVzOyB9XHJcbiAgICBwdWJsaWMgZ2V0RGF0YSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcmV0dXJuZWREYXRhOyB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZGF0YTogY0FqYXhTZW5kTWVzc2FnZSk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgcG9zdERhdGEodXJsOiBzdHJpbmcsIGRhdGE6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBwdWJsaWMgcG9zdERhdGEodXJsOiBzdHJpbmcsIGRhdGE6IHN0cmluZyB8IGNBamF4U2VuZE1lc3NhZ2UpIDogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNEYXRhIDogSlNPTjtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgID09PSAnc3RyaW5nJyApIHtcclxuICAgICAgICAgICAgc0RhdGEgPSBKU09OLnBhcnNlKGRhdGEgYXMgc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGRhdGEgYXMgY0FqYXhTZW5kTWVzc2FnZSkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzRGF0YSA9ICgoZGF0YSBhcyB1bmtub3duKSBhcyBKU09OKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdHlwZSBhcyBpbnB1dCcpO1xyXG5cclxuICAgICAgICBsZXQgYWpheENvbmZPYmo6IE9iamVjdCA9IHRoaXMuZ2V0QWpheENvbmYodGhpcy5jb21wbGV0ZV9mdW5jdGlvbiwgdXJsLCBzRGF0YSk7XHJcbiAgICAgICAgJC5hamF4KGFqYXhDb25mT2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZyAoJ2FwcmVzIGFqYXgnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcG9zdEZpbGVzKHNlcnZlclVSTDogc3RyaW5nLCBkYXRhOiBGb3JtRGF0YSkge1xyXG4gICAgICAgIGpRdWVyeS5hamF4KHtcclxuICAgICAgICAgICAgJ3VybCc6IHNlcnZlclVSTCxcclxuICAgICAgICAgICAgJ2RhdGEnOiBkYXRhLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBamF4Q29uZihjb21wbGV0ZWZ1bmN0aW9uOiAoeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpID0+IHZvaWQsIG15VXJsIDogc3RyaW5nLCBkYXRhIDogSlNPTikgOiBPYmplY3Qge1xyXG4gICAgICAgIGxldCByZXRvdXI6IGlBamF4Q29uZmlnID0ge1xyXG4gICAgICAgICAgICAnYXN5bmMnIDogZmFsc2UsXHJcbiAgICAgICAgICAgICdjYWNoZSc6IGZhbHNlLFxyXG4gICAgICAgICAgICAnY29udGVudFR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdkYXRhJyA6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICAnZGF0YVR5cGUnIDogJ2pzb24nLCAgICAvLyBUaGUgZGF0YSB0eXBlIGV4cGVjdGVkIG9mIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgICdnbG9iYWwnIDogdHJ1ZSwgICAgICAgIC8vIEEgQm9vbGVhbiB2YWx1ZSBzcGVjaWZ5aW5nIHdoZXRoZXIgb3Igbm90IHRvIHRyaWdnZXIgZ2xvYmFsIEFKQVggZXZlbnQgaGFuZGxlcyBmb3IgdGhlIHJlcXVlc3QuRGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgICAgICd0aW1lb3V0JyA6IDEwMDAgKiA2MCwgIC8vIFRoZSBsb2NhbCB0aW1lb3V0KGluIG1pbGxpc2Vjb25kcykgZm9yIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICd0eXBlJyA6ICdQT1NUJyxcclxuICAgICAgICAgICAgJ3VybCc6IG15VXJsLFxyXG4gICAgICAgICAgICAnYmVmb3JlU2VuZCc6IHRoaXMuYmVmb3JlU2VuZF9mdW5jdGlvbiwgLy8gKHhocilcdEEgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSB0aGUgcmVxdWVzdCBpcyBzZW50XHJcbiAgICAgICAgICAgICdlcnJvcic6IHRoaXMuZXJyb3JfZnVuY3Rpb24sICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMsIGVycm9yKVx0QSBmdW5jdGlvbiB0byBydW4gaWYgdGhlIHJlcXVlc3QgZmFpbHMuXHJcbiAgICAgICAgICAgICdzdWNjZXNzJzogIHRoaXMuc3VjY2Vzc19mdW5jdGlvbiwgICAgICAgLy8gKHJlc3VsdCwgc3RhdHVzLCB4aHIpXHRBIGZ1bmN0aW9uIHRvIGJlIHJ1biB3aGVuIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSc6IGNvbXBsZXRlZnVuY3Rpb24sICAgICAgICAgICAgLy8gKHhociwgc3RhdHVzKVx0QSBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgcmVxdWVzdCBpcyBmaW5pc2hlZChhZnRlciBzdWNjZXNzIGFuZCBlcnJvciBmdW5jdGlvbnMpXHJcbiAgICAgICAgICAgICdteUFqYXhDbGFzcycgOiB0aGlzXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICBYSFIgOlxyXG4gICAge1xyXG4gICAgICAgIHJlYWR5U3RhdGU6IDRcclxuICAgICAgICByZXNwb25zZUpTT046IHtcInR5cGVcIiA6IFwiZXJyb3JcIixcImRhdGFcIjogW3tcImVycm5vXCI6IDkwMDAwMDB9LCB7XCJkYXRhXCI6XCJpQlJJV1NBcGkjI19kZWNvZGVKU09OSW5wdXQgIyB1bmFibGUgdG8gcGFyc2UtLSBpbnZhbGlkIGpzb24gZm9ybWF0IHRlc3QgaXQgZmlyc3QgLi4uVHJcclxuICAgICAgICByZXNwb25zZVRleHQ6IFxcblxcblxcblxcbntcXFwidHlwZVxcXCIgOiBcXFwiZXJyb3JcXFwiLFxcXCJkYXRhXFxcIjogW3tcXFwiZXJybm9cXFwiOiA5MDAwMDAwfSwge1xcXCJkYXRhXFxcIjpcXFwiaUJSSVdTQXBpIyNfZGVjb2RlSlNPTklucHV0ICMgdW5hYmxlIHRvIHBhcnNlIC0tIGludmFsaWQganNvbiBmb3JtYXQgdGVzdCBpdFxyXG4gICAgICAgIHN0YXR1czogMjAwXHJcbiAgICAgICAgc3RhdHV4VGV4dDogXCJPS1wiXHJcblxyXG4gICAgICAgIGFib3J0OiDGkiAoIHN0YXR1c1RleHQgKVxyXG4gICAgICAgIGFsd2F5czogxpIgKClcclxuICAgICAgICBjYXRjaDogxpIgKCBmbiApXHJcbiAgICAgICAgZG9uZTogxpIgKClcclxuICAgICAgICBmYWlsOiDGkiAoKVxyXG4gICAgICAgIGdldEFsbFJlc3BvbnNlSGVhZGVyczogxpIgKClcclxuICAgICAgICBnZXRSZXNwb25zZUhlYWRlcjogxpIgKCBrZXkgKVxyXG4gICAgICAgIG92ZXJyaWRlTWltZVR5cGU6IMaSICggdHlwZSApXHJcbiAgICAgICAgcGlwZTogxpIgKCApXHJcbiAgICAgICAgcHJvZ3Jlc3M6IMaSICgpXHJcbiAgICAgICAgcHJvbWlzZTogxpIob2JqKVxyXG5cclxuICAgICAgICBzZXRSZXF1ZXN0SGVhZGVyOiBmKClcclxuICAgICAgICBzdGF0dXNDb2RlOiBmIChtYXApXHJcbiAgICAgICAgdGhlbiAgOiBmKC4uLilcclxuICAgICovXHJcbiAgICBwcml2YXRlIGJlZm9yZVNlbmRfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVycm9yX2Z1bmN0aW9uKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nLCBlcnJvcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggZmFpbCAnICsgeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggZmFpbCAnICsgZXJyb3IpO1xyXG4gICAgICAgIGFsZXJ0ICgnYWpheCBmYWlsczogU2VlIENvbnNvbGUuTG9nJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgc3VjY2Vzc19mdW5jdGlvbihkYXRhOiBhbnksIHN0YXR1czogc3RyaW5nLCB4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FqYXggc3VjZXNzJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzOiBjQWpheDtcclxuICAgICAgICBpZiAoJ215QWpheENsYXNzJyBpbiB0aGlzKSB7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzID0gKHRoaXMgYXMgaUFqYXhDb25maWcpLm15QWpheENsYXNzO1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgY29tcGxldGVfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyAoJ2FqYXggY29tcGxldGVkJyk7XHJcbiAgICAgICAgbGV0IG15QWpheENsYXNzIDogY0FqYXggO1xyXG4gICAgICAgIGlmICgnbXlBamF4Q2xhc3MnIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MgPSAodGhpcyBhcyBpQWpheENvbmZpZykubXlBamF4Q2xhc3M7XHJcbiAgICAgICAgICAgIGlmIChteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgIT0gMSkgeyAvLyBwYXMgZW4gZXJyZXVyXHJcbiAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFqYXhSZXBvbnNlOiBpQWpheFJlc3BvbnNlTWVzc2FnZSA9IChKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpIGFzIGlBamF4UmVzcG9uc2VNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWpheFJlcG9uc2UudHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFqYXhSZXBvbnNlLnR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSA9IGFqYXhSZXBvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0ICgnV1MgZmFpbHM6IGVycm9yIHNlZSBpbmxvZyAhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX2ludGVybmFsU3RhdHVzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSA9IGFqYXhSZXBvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDE7IC8vIHJldG91ciBpbmNvbm51IGVuIGVycmV1ciAhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjQWpheCwgY0FqYXhTZW5kTWVzc2FnZSwgaUFqYXhTZW5kTWVzc2FnZUFyZ3MgfSBmcm9tICcuL2NBamF4JztcclxuaW1wb3J0IGNFbnZ0IGZyb20gJy4uLy4uL2luZnJhL2NFbnZ0JztcclxuaW1wb3J0IHsgaUdlbm90eXBlTWVzc2FnZSwgaVJlc3VsdGF0TWVzc2FnZSB9IGZyb20gJy4vaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpRXhwZXJpZW5jZUlETWVzc2FnZSwgaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2UsIGlJbnRlcm5hbEV4cGVyaWVuY2VPbmVGaWxlTWVzc2FnZSB9IGZyb20gJy4vaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIGNFeHBlcmllbmNlIHtcclxuICAgIHByaXZhdGUgX2FqYXg6IGNBamF4ID0gbmV3IGNBamF4KCk7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2luZ2xldG9uOiBjRXhwZXJpZW5jZSB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuX2FqYXggPSBuZXcgY0FqYXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBjRXhwZXJpZW5jZSB7XHJcbiAgICAgICAgaWYgKGNFeHBlcmllbmNlLl9zaW5nbGV0b24gPT0gbnVsbClcclxuICAgICAgICAgICAgY0V4cGVyaWVuY2UuX3NpbmdsZXRvbiA9IG5ldyBjRXhwZXJpZW5jZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuX3NpbmdsZXRvbjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsUGVyc29uZSgpIDogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZyAoJ3BlcnNvbm5lcycsICdnZXRBbGxQZXJzb25uZXMnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0IDogSlNPTiA9IEpTT04ucGFyc2UgKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaCAoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxFeHBlcmllbmNlSW5pdGlhbGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEFsbEV4cGVyaWVuY2VJbml0aWFsZScsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlREJFeHBlcmllbmNlKGV4cGVyaWVuY2VJZDogc3RyaW5nLCBkYXRlOiBzdHJpbmcsIHF1aTogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdleHBlcmllbmNlc3RyaW5naWQnLCBleHBlcmllbmNlSWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdkYXRlcmVhbGlzYXRpb25leHBlcmllbmNlJywgZGF0ZSk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ2ZhaXRlcGFycXVpJywgcXVpKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdjcmVhdGUnLCBhcmdzKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCAocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZVVpZEZyb21FeHBlcmllbmNlU3RyaW5naWQoZXhwZXJpZW5jZXN0cmluZ2lkIDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IG51bWJlcltdID0gW107XHJcblxyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdleHBlcmllbmNlc3RyaW5naWQnLCBleHBlcmllbmNlc3RyaW5naWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZVVpZEZyb21FeHBlcmllbmNlU3RyaW5naWQnLCBhcmdzKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludCAocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsRXhwZXJpZW5jZVVpZCgpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsRXhwZXJpZW5jZVVpZCcsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8bnVtYmVyPiA9IChKU09OLnBhcnNlKHJlc3BvbnNlKSBhcyBBcnJheTxudW1iZXI+KTtcclxuICAgICAgICAgICAgcmVzcC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZShpRXhwVWlkOiBudW1iZXIpOiBpRXhwZXJpZW5jZUlETWVzc2FnZSB8IG51bGwge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcblxyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCd1aWQnLCBpRXhwVWlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VfSW5mb0dlbmVyYWxlJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCByZXNwOiBBcnJheTxpRXhwZXJpZW5jZUlETWVzc2FnZT4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8aUV4cGVyaWVuY2VJRE1lc3NhZ2U+KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGF0aWMgZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEdlbm90eXBlKGlFeHBVaWQ6IG51bWJlcik6IGlHZW5vdHlwZU1lc3NhZ2VbXXxudWxsIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbU51bSgndWlkJywgaUV4cFVpZCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRFeHBlcmllbmNlX1Jlc3VsdGF0R2Vub3R5cGUnLCBhcmdzKTtcclxuICAgICAgICBcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IHJlc3A6IEFycmF5PGlHZW5vdHlwZU1lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlHZW5vdHlwZU1lc3NhZ2U+KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VfUmVzdWx0YXRUZXN0KGlFeHBVaWQ6IG51bWJlcik6IGlSZXN1bHRhdE1lc3NhZ2VbXSB8IG51bGwge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIGxldCBhcmdzOiBpQWpheFNlbmRNZXNzYWdlQXJnc1tdID0gW107XHJcbiAgICAgICAgbGV0IGFyZzE6IGlBamF4U2VuZE1lc3NhZ2VBcmdzID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tTnVtKCd1aWQnLCBpRXhwVWlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nKCdleHBlcmllbmNlJywgJ2dldEV4cGVyaWVuY2VfUmVzdWx0YXRUZXN0JywgYXJncyk7XHJcblxyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8aVJlc3VsdGF0TWVzc2FnZT4gPSAoSlNPTi5wYXJzZShyZXNwb25zZSkgYXMgQXJyYXk8aVJlc3VsdGF0TWVzc2FnZT4pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEV4cGVyaWVuY2VfUmVzdWx0YXRJbWFnZShpRXhwVWlkOiBudW1iZXIpOiBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZVtdIHwgbnVsbCB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ3VpZCcsIGlFeHBVaWQpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0RXhwZXJpZW5jZV9SZXN1bHRhdEltYWdlJywgYXJncyk7XHJcblxyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQgcmVzcDogQXJyYXk8aUV4cGVyaWVuY2VGaWxlc01lc3NhZ2U+ID0gKEpTT04ucGFyc2UocmVzcG9uc2UpIGFzIEFycmF5PGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlPik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHVwbG9hZEZpbGVzKGlkOiBudW1iZXIsIGZpbGVzOiBGaWxlTGlzdCkge1xyXG4gICAgICAgIGxldCBkYXRhIDogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmIDogRmlsZSB8IG51bGwgPSBmaWxlcy5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoZiA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kICgnZmlsZS0nICsgaSwgZiwgZi5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdleHBlcmllbmNlSWQnLCBpZC50b1N0cmluZygpKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnX2NsYXNzZScsICdleHBlcmllbmNlJyk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ19yZXF1ZXRlJywgJ3VwbG9hZEZpbGUnKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RmlsZXMoY0VudnQuZ2V0QWpheFVSTFdTKCksIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgdXBkYXRlREJFeHBlcmllbmNlKGV4cGVyaWVuY2U6IGlSZXN1bHRhdE1lc3NhZ2UpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcbiAgICAgICAgbGV0IHJldG91cjogbnVtYmVyID0gLTE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gPSBbXTtcclxuICAgICAgICBsZXQgYXJnMTogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ2lkZXhwZXJpZW5jZScsIChleHBlcmllbmNlLmlkZXhwZXJpZW5jZSBhcyBudW1iZXIpKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnbWFycXVhZ2UnLCBleHBlcmllbmNlLm1hcnF1YWdlKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgaWYgKGV4cGVyaWVuY2UuTmJHZW5vdHlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ05iR2Vub3R5cGUnLCBleHBlcmllbmNlLk5iR2Vub3R5cGUpO1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ1NDb21wYXJhdGlmJywgZXhwZXJpZW5jZS5TQ29tcGFyYXRpZik7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21OdW0oJ1NHZW5lcmFsJywgZXhwZXJpZW5jZS5TR2VuZXJhbCk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21TdHJpbmcoJ3R5cGVkZXRlc3QnLCBleHBlcmllbmNlLnR5cGVkZXRlc3QpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBpZiAoZXhwZXJpZW5jZS5HZW5vdHlwZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFyZzEgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkQXJnc0Zyb21BcnJheSgnR2Vub3R5cGUnLCBleHBlcmllbmNlLkdlbm90eXBlKTtcclxuICAgICAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAndXBkYXRlJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBzdGF0aWMgZHVtcEZyb21EQihpZDogbnVtYmVyLCBfaWRSZXN1bHRhdERCOiBzdHJpbmcpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbFRlc3RUeXBlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxUZXN0VHlwZXMnLCBudWxsKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RGF0YShjRW52dC5nZXRBamF4VVJMV1MoKSwgbXNnKTtcclxuICAgICAgICBpZiAobWUuX2FqYXguZ2V0U3RhdHVzKCkgPT0gMCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2U6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3Q6IEpTT04gPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoanNvbk9iamVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGpzb25PYmplY3QuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXRvdXIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbE1hcnF1YWdlKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxNYXJxdWFnZScsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWUxKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZTIoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lWFgoKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRBbGxjaHJvbW9zb21lMygpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWVYWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbGNocm9tb3NvbWU0KCk6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gY0V4cGVyaWVuY2UuZ2V0QWxsY2hyb21vc29tZVhYKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0QWxsY2hyb21vc29tZVhYKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgbWU6IGNFeHBlcmllbmNlID0gY0V4cGVyaWVuY2UuZ2V0SW5zdGFuY2UoKTtcclxuICAgICAgICBtZS5fYWpheC5yZXNldCgpO1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcblxyXG4gICAgICAgIGxldCBtc2c6IGNBamF4U2VuZE1lc3NhZ2UgPSBjQWpheFNlbmRNZXNzYWdlLmJ1aWxkRnJvbVN0cmluZygnZXhwZXJpZW5jZScsICdnZXRBbGxDaHJvbW9zb21lcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZTogc3RyaW5nID0gbWUuX2FqYXguZ2V0RGF0YSgpO1xyXG4gICAgICAgICAgICBsZXQganNvbk9iamVjdDogSlNPTiA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lSZXN1bHRhdE1lc3NhZ2UoKTogaVJlc3VsdGF0TWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaVJlc3VsdGF0TWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgJ2lkZXhwZXJpZW5jZSc6IDAsXHJcbiAgICAgICAgICAgICdleHBlcmllbmNlc3RyaW5naWQnOiAnJyxcclxuICAgICAgICAgICAgJ0dlbm90eXBlJyA6IFtdLFxyXG4gICAgICAgICAgICAnbWFycXVhZ2UnIDogJycsXHJcbiAgICAgICAgICAgICdOYkdlbm90eXBlJyA6IDAsXHJcbiAgICAgICAgICAgICdTQ29tcGFyYXRpZicgOiAwLFxyXG4gICAgICAgICAgICAnU0dlbmVyYWwnIDogMCxcclxuICAgICAgICAgICAgJ3R5cGVkZXRlc3QnIDogJydcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZV9pR2Vub3R5cGVNZXNzYWdlKCk6IGlHZW5vdHlwZU1lc3NhZ2Uge1xyXG4gICAgICAgIGxldCByZXRvdXI6IGlHZW5vdHlwZU1lc3NhZ2UgPSB7XHJcbiAgICAgICAgICAgICdjaHJvbW9zb21lMSc6ICcnLFxyXG4gICAgICAgICAgICAnY2hyb21vc29tZTInOiAnJyxcclxuICAgICAgICAgICAgJ2Nocm9tb3NvbWUzJzogJycsXHJcbiAgICAgICAgICAgICdjaHJvbW9zb21lNCc6ICcnLFxyXG4gICAgICAgICAgICAnbmJlY2hhbnRpbGxvbic6IDBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IGNFbnZ0IGZyb20gJy4vaW5mcmEvY0VudnQnO1xyXG5pbXBvcnQgeyBjQ29udHJvbGVyIH0gIGZyb20gJy4vaW5mcmEvY0NvbnRyb2xlcic7XHJcbmltcG9ydCB7IGNMb2dnZXIsIGVMb2dnZXJMZXZlbCB9IGZyb20gJy4vaW5mcmEvY0xvZ2dlcic7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgY015VUkge1xyXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IF9pZFJlc3VsdGF0REI6IHN0cmluZyA9ICdpZFJlc3VsdGF0REInO1xyXG4gICAgcHJvdGVjdGVkIF9sb2dnZXI6IGNMb2dnZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2N0cmw6IGNDb250cm9sZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKGlkIDogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgICAgIGlmIChpZCA9PSBudWxsKVxyXG4gICAgICAgICAgICBpZCA9ICdjTXlVSSc7XHJcblxyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IG5ldyBjTG9nZ2VyKGNFbnZ0LmdldERlYnVnTGV2ZWwoKSwgaWQpO1xyXG4gICAgICAgIHRoaXMuX2N0cmwgPSBjQ29udHJvbGVyLmdldEludGFuY2UoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KCk6IHN0cmluZztcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWRkQ2FsbEJhY2tPbk1lc3NhZ2UobWVzc2FnZUlkIDogc3RyaW5nIHwgbnVsbCkgOiB2b2lkIHtcclxuICAgICAgICBpZiAobWVzc2FnZUlkID09IG51bGwpIHtcclxuICAgICAgICAgICAgJCgnLm1lc3NhZ2UgLmNsb3NlJylcclxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLm1lc3NhZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKCdmYWRlJylcclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChtZXNzYWdlSWQpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJy5tZXNzYWdlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oJ2ZhZGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjRXhwZXJpZW5jZSB9IGZyb20gJy4vU2VydmljZXMvREIvY0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcbmltcG9ydCBjTXlVSV9NYWluVGFiX2NyZWF0ZSBmcm9tICcuL2NNeVVJX01haW5UYWJfY3JlYXRlJztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfYWpvdXQgZnJvbSAnLi9jTXlVSV9NYWluVGFiX2Fqb3V0JztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uIGZyb20gJy4vY015VUlfTWFpblRhYl9jb25zdWx0YXRpb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWIgZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFRhYlNhaXNpZTogc3RyaW5nID0gJ3RhYi1zYWlzaWUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlOiBzdHJpbmcgPSAnaWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlJztcclxuICAgIHByaXZhdGUgX2NyZWF0aW9uVUk6IGNNeVVJX01haW5UYWJfY3JlYXRlO1xyXG4gICAgcHJpdmF0ZSBfYWpvdXRVSTogY015VUlfTWFpblRhYl9ham91dDtcclxuICAgIHByaXZhdGUgX0NvbnN1bHRhdGlvblVJOiBjTXlVSV9NYWluVGFiX2NvbnN1bHRhdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRpb25VSSA9IG5ldyBjTXlVSV9NYWluVGFiX2NyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2Fqb3V0VUkgPSBuZXcgY015VUlfTWFpblRhYl9ham91dCgpO1xyXG4gICAgICAgIHRoaXMuX0NvbnN1bHRhdGlvblVJID0gbmV3IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICAvLyBhY3RpdmVyIGxlcyBzZW1lbnRpY1VJIGR1IGRpYWxvZ1xyXG4gICAgICAgICQoJy51aS5hY2NvcmRpb24nKS5hY2NvcmRpb24oKTtcclxuICAgICAgICAkKCcudGFidWxhci5tZW51IC5pdGVtJykudGFiKCk7XHJcblxyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYiA9IHRoaXM7XHJcbiAgICAgICAgbWUuX2NyZWF0aW9uVUkuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICAgICAgbWUuX2Fqb3V0VUkuYWRkQ2FsbEJhY2tPbk15RGlhbG9nKCk7XHJcbiAgICAgICAgbWUuX0NvbnN1bHRhdGlvblVJLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG5cclxuICAgICAgICAvLyBwcm9wYWdhdGlvbiBkZSBsJ2V2ZW5lbWVudCBkZSBtaXNlICBham91ciBkZSAnaWQgZCdleHBlcmllbmNlXHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlfWApLm9uICgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbWUuX2Fqb3V0VUkuVXBkYXRlTXlEaWFsb2cobWUuX2N0cmwubGFzdEV4cCwgbWUuX2N0cmwuaUxhc3RFeHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VDcmVhdGlvbkFjY29yZGVvbkluZm86IHN0cmluZyA9IHRoaXMuZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mbygpO1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbzogc3RyaW5nID0gdGhpcy5leHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbygpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmbHVpZCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHRvcCBhdHRhY2hlZCB0YWJ1bGFyIG1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3RpdmUgaXRlbVwiIGRhdGEtdGFiPVwiJHt0aGlzLl9pZFRhYlNhaXNpZX1cIiBpZD1cIiR7dGhpcy5faWRUYWJTYWlzaWV9XCI+U2Fpc2llIEV4cGVyaWVuY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS10YWI9XCJ0YWItY29uc3VsdGF0aW9uXCI+Q29uc3VsdGF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYm90dG9tIGF0dGFjaGVkIGFjdGl2ZSB0YWIgc2VnbWVudFwiIGRhdGEtdGFiPVwiJHt0aGlzLl9pZFRhYlNhaXNpZX1cIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gVGFiIENvbnRlbnQgIS0tPlxyXG4gICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQ3JlYXRpb25BY2NvcmRlb25JbmZvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGJvdHRvbSBhdHRhY2hlZCB0YWIgc2VnbWVudFwiIGRhdGEtdGFiPVwidGFiLWNvbnN1bHRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBUYWIgQ29udGVudCAhLS0+XHJcbiAgICAgICAgICAgICAgICAke2V4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLl9pZFJlc3VsdGF0REJ9XCI+PC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ3JlYXRpb25JbmZvOiBzdHJpbmcgPSB0aGlzLl9jcmVhdGlvblVJLmRyYXcoKTtcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUFqb3V0SW5mbzogc3RyaW5nID0gdGhpcy5fYWpvdXRVSS5kcmF3KCk7XHJcblxyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzdHlsZWQgYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGQndW5lIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQ3JlYXRpb25JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIiBpZD1cIiR7dGhpcy5faWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlciB1bmUgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZXhwZXJpZW5jZUFqb3V0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGV4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvOiBzdHJpbmcgPSB0aGlzLl9Db25zdWx0YXRpb25VSS5kcmF3KCk7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2PiR7ZXhwZXJpZW5jZUNvbnN1bHRhdGlvbkluZm99PC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IHsgaVJlc3VsdGF0TWVzc2FnZSwgaUdlbm90eXBlTWVzc2FnZSB9IGZyb20gJy4vU2VydmljZXMvREIvaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpTXlIdG1sSW5mbywgY1Rvb2xzIH0gZnJvbSAnLi9pbmZyYS9jVG9vbHMnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYl9ham91dCBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkT0tCdXR0b246IHN0cmluZyA9ICdpZE9LQnV0dG9uJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXRFeHA6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkSW5wdXRFeHAnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbmNocm9tb3NvbWUxOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTEnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbmNocm9tb3NvbWUyOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTInO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbmNocm9tb3NvbWUzOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbmNocm9tb3NvbWU0OiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uY2hyb21vc29tZTQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPblRlc3RUeXBlOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uVGVzdFR5cGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbk1hcnF1YWdlOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uTWFycXVhZ2UnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRJbnB1dE5iRWNoYW50aWxsb246IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkSW5wdXROYkVjaGFudGlsbG9uJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXRTR2VuZXJhbDogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfX2lkSW5wdXRTR2VuZXJhbCc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZElucHV0U0NvbXBhcmF0aWY6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkSW5wdXRTQ29tcGFyYXRpZic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9uYkdlbm90eXBlID0gNDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICAvLyBhY3RpdmVyIGxlcyBzZW1lbnRpY1VJIGR1IGRpYWxvZ1xyXG5cclxuICAgICAgICAvLyBjaG9pc2lyIGxhIHRhYiBwYXIgZGVmYXV0XHJcbiAgICAgICAgLy8gJCgnLnVpIC5pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICQoYCMke3RoaXMuX2lkVGFiU2Fpc2llfWApLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiX2Fqb3V0ID0gdGhpcztcclxuICAgICAgICAkKGAjJHttZS5faWRPS0J1dHRvbn1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxJbmZvc0Zyb21QYWdlOiBpUmVzdWx0YXRNZXNzYWdlID0gY0V4cGVyaWVuY2UuY3JlYXRlX2lSZXN1bHRhdE1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5leHBlcmllbmNlc3RyaW5naWQgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRJbnB1dEV4cH1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5pZGV4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlVWlkRnJvbUV4cGVyaWVuY2VTdHJpbmdpZChhbGxJbmZvc0Zyb21QYWdlLmV4cGVyaWVuY2VzdHJpbmdpZCk7XHJcblxyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLm1hcnF1YWdlID0gPHN0cmluZz4gJChgIyR7bWUuX2lkU2VsZWN0T25NYXJxdWFnZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5OYkdlbm90eXBlID0gbWUuX25iR2Vub3R5cGU7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuU0NvbXBhcmF0aWYgPSA8bnVtYmVyPiAkKGAjJHttZS5faWRJbnB1dFNDb21wYXJhdGlmfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLlNHZW5lcmFsID0gPG51bWJlcj4gJChgIyR7bWUuX2lkSW5wdXRTR2VuZXJhbH1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS50eXBlZGV0ZXN0ID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPblRlc3RUeXBlfWApLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZS5fbmJHZW5vdHlwZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsSW5mb3NGcm9tR2Vub3R5cGU6IGlHZW5vdHlwZU1lc3NhZ2UgPSBjRXhwZXJpZW5jZS5jcmVhdGVfaUdlbm90eXBlTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTEgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uY2hyb21vc29tZTF9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLmNocm9tb3NvbWUyID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPbmNocm9tb3NvbWUyfV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5jaHJvbW9zb21lMyA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25jaHJvbW9zb21lM31fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuY2hyb21vc29tZTQgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uY2hyb21vc29tZTR9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLm5iZWNoYW50aWxsb24gPSA8bnVtYmVyPiQoYCMke21lLl9pZElucHV0TmJFY2hhbnRpbGxvbn1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbEluZm9zRnJvbVBhZ2UuR2Vub3R5cGUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLkdlbm90eXBlLnB1c2goYWxsSW5mb3NGcm9tR2Vub3R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQgPSBjRXhwZXJpZW5jZS51cGRhdGVEQkV4cGVyaWVuY2UoYWxsSW5mb3NGcm9tUGFnZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBVcGRhdGVNeURpYWxvZyhsYXN0RXhwOiBzdHJpbmcsIGlsYXN0RXhwOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgeDogc3RyaW5nID0gbGFzdEV4cDtcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZElucHV0RXhwfWApLnZhbCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IG5iTGlnbmUgPSB0aGlzLl9uYkdlbm90eXBlO1xyXG4gICAgICAgIGxldCB4OiBzdHJpbmcgPSB0aGlzLl9jdHJsLmxhc3RFeHA7XHJcblxyXG4gICAgICAgIGxldCBpbmZvc0ZvckhUTUw6IGlNeUh0bWxJbmZvO1xyXG4gICAgICAgIGxldCBzZWxlY3RjaHJvbW9zb21lMSA6IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0Y2hyb21vc29tZTI6IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0Y2hyb21vc29tZTM6IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0Y2hyb21vc29tZTQ6IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgSW5wdXROYkVjaGFudGlsbG9uOiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IHNlbGVjdFR5cGVUZXN0IDogc3RyaW5nO1xyXG4gICAgICAgIGxldCBzZWxlY3RNYXJxdWFnZSA6IHN0cmluZztcclxuICAgICAgICBsZXQgSW5wdXRTR2VuZXJhbCA6IHN0cmluZztcclxuICAgICAgICBsZXQgSW5wdXRTQ29tcGFyYXRpZiA6IHN0cmluZztcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYkxpZ25lOyBpKyspIHtcclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnIDogYCR7dGhpcy5faWRTZWxlY3RPbmNocm9tb3NvbWUxfV8ke2l9YH07XHJcbiAgICAgICAgICAgIHNlbGVjdGNocm9tb3NvbWUxW2ldID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxjaHJvbW9zb21lMSgpLCBpbmZvc0ZvckhUTUwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkU2VsZWN0T25jaHJvbW9zb21lMn1fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Y2hyb21vc29tZTJbaV0gPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWUyKCksIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkU2VsZWN0T25jaHJvbW9zb21lM31fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Y2hyb21vc29tZTNbaV0gPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWUzKCksIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkU2VsZWN0T25jaHJvbW9zb21lNH1fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Y2hyb21vc29tZTRbaV0gPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbGNocm9tb3NvbWU0KCksIGluZm9zRm9ySFRNTCk7XHJcblxyXG4gICAgICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteUlucHV0SW50JywgJ3R5cGUnOiAnbnVtYmVyJywgJ2lkJzogYCR7dGhpcy5faWRJbnB1dE5iRWNoYW50aWxsb259XyR7aX1gIH07XHJcbiAgICAgICAgICAgIElucHV0TmJFY2hhbnRpbGxvbltpXSA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEZsb2F0JywgJ3R5cGUnOiAnbnVtYmVyJywgJ2lkJzogYCR7dGhpcy5faWRJbnB1dFNHZW5lcmFsfWAsICdwbGFjZWhvbGRlcic6ICcxLjc5ZS0xMScgfTtcclxuICAgICAgICBJbnB1dFNHZW5lcmFsID0gY1Rvb2xzLkJ1aWxkSW5wdXRJbnQoJzEnLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteUlucHV0RmxvYXQnLCAndHlwZSc6ICdudW1iZXInLCAnaWQnOiBgJHt0aGlzLl9pZElucHV0U0NvbXBhcmF0aWZ9YCwgJ3BsYWNlaG9sZGVyJzogJzEuNzllLTExJyAgfTtcclxuICAgICAgICBJbnB1dFNDb21wYXJhdGlmID0gY1Rvb2xzLkJ1aWxkSW5wdXRJbnQoJzEnLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uVGVzdFR5cGV9YCB9O1xyXG4gICAgICAgIHNlbGVjdFR5cGVUZXN0ID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxUZXN0VHlwZSgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICBpbmZvc0ZvckhUTUwgPSB7ICdjbGFzcyc6ICdteVNlbGVjdCcsICdpZCc6IGAke3RoaXMuX2lkU2VsZWN0T25NYXJxdWFnZX1gIH07XHJcbiAgICAgICAgc2VsZWN0TWFycXVhZ2UgPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbE1hcnF1YWdlKCksIGluZm9zRm9ySFRNTCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cInVpIGZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVyaWVuY2UgSWRcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7eH1cIiBwbGFjZWhvbGRlcj1cIltsZXR0cmVdW2NoaWZmcmVdLVtsZXR0cmVdW2NoaWZmcmVdXCIgaWQ9XCIke3RoaXMuX2lkSW5wdXRFeHB9XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HZW5vdHlwZTwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDE8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMjwvdGg+IDx0aD5jaHJvbW9zb21lc29tZSAzPC90aD48dGg+Y2hyb21vc29tZXNvbWUgNDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmIgRWNoYW50aWxsb248L3RoPjx0aD5NYXJxdWFnZTwvdGg+PHRoPlMgZ2VuZXJhbDwvdGg+PHRoPlMgY29tcGFyYXRpZjwvdGg+PHRoPlR5cGUgdGVzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iTGlnbmU7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpKzF9PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lMVtpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUyW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTNbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lNFtpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiR7SW5wdXROYkVjaGFudGlsbG9uW2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke3NlbGVjdE1hcnF1YWdlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke0lucHV0U0dlbmVyYWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7SW5wdXRTQ29tcGFyYXRpZn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtzZWxlY3RUeXBlVGVzdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RyAke2krMX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWUxW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Y2hyb21vc29tZTJbaV19PC90ZD48dGQ+JHtzZWxlY3RjaHJvbW9zb21lM1tpXX08L3RkPjx0ZD4ke3NlbGVjdGNocm9tb3NvbWU0W2ldfTwvdGQ+PHRkPiR7SW5wdXROYkVjaGFudGlsbG9uW2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgXHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gcGlua1wiIHR5cGU9XCJzdWJtaXRcIiBpZD1cIiR7dGhpcy5faWRPS0J1dHRvbn1cIj5PSyAhPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IHsgaVJlc3VsdGF0TWVzc2FnZSwgaUdlbm90eXBlTWVzc2FnZSB9IGZyb20gJy4vU2VydmljZXMvREIvaU9uTWVzc2FnZVdpdGhTZXJ2ZXInO1xyXG5pbXBvcnQgeyBpRXhwZXJpZW5jZUlETWVzc2FnZSwgaUV4cGVyaWVuY2VGaWxlc01lc3NhZ2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2lPbk1lc3NhZ2VXaXRoU2VydmVyJztcclxuaW1wb3J0IHsgaU15SHRtbEluZm8sIGNUb29scyB9IGZyb20gJy4vaW5mcmEvY1Rvb2xzJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uIGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRPS0J1dHRvbiA6IHN0cmluZyA9ICdPS0J1dHRvbic7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfY29uc3VsdGF0aW9uID0gdGhpcztcclxuICAgICAgICAkKGAudm9pcmApLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpIHtcclxuICAgICAgICAgICAgLy8gYWZpaWNoZXIgZGFucyA8ZGl2IGlkPVwiJHt0aGlzLl9pZFJlc3VsdGF0REJ9XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICQoYCMke21lLl9pZFJlc3VsdGF0REJ9YCkuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgVm9pckJ1dHRvbklkIDogc3RyaW5nID0gKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdpZCcpIGFzIHN0cmluZyk7XHJcbiAgICAgICAgICAgIGxldCBzRXhwVWlkOiBzdHJpbmcgPSBWb2lyQnV0dG9uSWQuc3Vic3RyaW5nKG1lLl9pZE9LQnV0dG9uLmxlbmd0aCArIDEpO1xyXG4gICAgICAgICAgICBsZXQgaUV4cFVpZDogbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KHNFeHBVaWQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZm9HZW5lcmFsZUV4cGVyaWVuY2U6IGlFeHBlcmllbmNlSURNZXNzYWdlIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfSW5mb0dlbmVyYWxlKGlFeHBVaWQpO1xyXG4gICAgICAgICAgICBsZXQgRXhwZXJpZW5jZVN0cmluZ0lkOiBzdHJpbmcgPSBcIi0tLS1cIjtcclxuICAgICAgICAgICAgaWYgKGluZm9HZW5lcmFsZUV4cGVyaWVuY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIEV4cGVyaWVuY2VTdHJpbmdJZCA9IGluZm9HZW5lcmFsZUV4cGVyaWVuY2UuZXhwZXJpZW5jZXN0cmluZ2lkO1xyXG4gICAgICAgICAgICBsZXQgaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZTogaVJlc3VsdGF0TWVzc2FnZVtdIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfUmVzdWx0YXRUZXN0KGlFeHBVaWQpO1xyXG4gICAgICAgICAgICBsZXQgaW5mb0dlbm9tZUV4cGVyaWVuY2U6IGlHZW5vdHlwZU1lc3NhZ2VbXSB8IG51bGwgPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX1Jlc3VsdGF0R2Vub3R5cGUoaUV4cFVpZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbXlVSUZvckNvbnN1bHQ6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICBpZiAoKGluZm9HZW5vbWVFeHBlcmllbmNlICE9IG51bGwpICYmIChpbmZvUmVzdWx0YXRFeHBlcmllbmNlICE9IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wOiBpUmVzdWx0YXRNZXNzYWdlID0gaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZVswXTtcclxuICAgICAgICAgICAgICAgIGxldCB1bmVJbmZvR2Vub21lRXhwZXJpZW5jZTogaUdlbm90eXBlTWVzc2FnZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGluZm9SZXN1bHRhdEV4cGVyaWVuY2VfMCA9PT0gdW5kZWZpbmVkKSB8fCAoaW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLmlkZXhwZXJpZW5jZSA9PT0gdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcyBkZSBkYXRhIGFzc29jaWUgYSBjZXR0ZSBleHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIHllbGxvdyBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGFzIGRlIGRvbm5lZXMgZCdleHBlcmllbmNlIGFzc29jaWVlIDxici8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZSBJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke0V4cGVyaWVuY2VTdHJpbmdJZH0gIFtJRCBlbiBEQjogJHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuaWRleHBlcmllbmNlfV08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5HZW5vdHlwZTwvdGg+PHRoPmNocm9tb3NvbWVzb21lIDE8L3RoPiA8dGg+Y2hyb21vc29tZXNvbWUgMjwvdGg+IDx0aD5jaHJvbW9zb21lc29tZSAzPC90aD48dGg+Y2hyb21vc29tZXNvbWUgNDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYiBFY2hhbnRpbGxvbjwvdGg+PHRoPk1hcnF1YWdlPC90aD48dGg+UyBnZW5lcmFsPC90aD48dGg+UyBjb21wYXJhdGlmPC90aD48dGg+VHlwZSB0ZXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UgPSBpbmZvR2Vub21lRXhwZXJpZW5jZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlVSUZvckNvbnN1bHQgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSArIDF9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUyfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTN9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lNH08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLm5iZWNoYW50aWxsb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC5tYXJxdWFnZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7aW5mb0dlbm9tZUV4cGVyaWVuY2UubGVuZ3RofVwiPiR7aW5mb1Jlc3VsdGF0RXhwZXJpZW5jZV8wLlNHZW5lcmFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtpbmZvR2Vub21lRXhwZXJpZW5jZS5sZW5ndGh9XCI+JHtpbmZvUmVzdWx0YXRFeHBlcmllbmNlXzAuU0NvbXBhcmF0aWZ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke2luZm9HZW5vbWVFeHBlcmllbmNlLmxlbmd0aH1cIj4ke2luZm9SZXN1bHRhdEV4cGVyaWVuY2VfMC50eXBlZGV0ZXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpICsgMX08L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWUxfTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UuY2hyb21vc29tZTJ9PC90ZD48dGQ+JHt1bmVJbmZvR2Vub21lRXhwZXJpZW5jZS5jaHJvbW9zb21lM308L3RkPjx0ZD4ke3VuZUluZm9HZW5vbWVFeHBlcmllbmNlLmNocm9tb3NvbWU0fTwvdGQ+PHRkPiR7dW5lSW5mb0dlbm9tZUV4cGVyaWVuY2UubmJlY2hhbnRpbGxvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mb0ZpbGVFeHBlcmllbmNlOiBpRXhwZXJpZW5jZUZpbGVzTWVzc2FnZVtdIHwgbnVsbCA9IGNFeHBlcmllbmNlLmdldEV4cGVyaWVuY2VfUmVzdWx0YXRJbWFnZShpRXhwVWlkKTtcclxuICAgICAgICAgICAgICAgIGlmICgoaW5mb0ZpbGVFeHBlcmllbmNlICE9IG51bGwpICYmIChpbmZvRmlsZUV4cGVyaWVuY2UubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBteVVJRm9yQ29uc3VsdCArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbGVkIGlucHV0XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ1aSBjZWxsZWQgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mb0ZpbGVFeHBlcmllbmNlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0ubm9tfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0ucGF0aH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgc3JjPVwiJHtpbmZvRmlsZUV4cGVyaWVuY2VbaV0udXJsfVwiIGFsdD1cIiR7aW5mb0ZpbGVFeHBlcmllbmNlW2ldLnBhdGh9XCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzNDFcIiB0aXRsZT1cImltYWdlICR7aX1cIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPmA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15VUlGb3JDb25zdWx0ICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxhYmVsZWQgaW5wdXRcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWwgeWVsbG93XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcyBkJ2ltYWdlIGFzc29jaWVlcyBhIGNldHRlIGV4cGVyaWVuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkKGAjJHttZS5faWRSZXN1bHRhdERCfWApLmFwcGVuZChteVVJRm9yQ29uc3VsdCk7XHJcbi8vICAgICAgICAgICAgbGV0IHk6IGlFeHBlcmllbmNlRmlsZXNNZXNzYWdlID0gY0V4cGVyaWVuY2UuZ2V0RXhwZXJpZW5jZV9GaWxlc1VSTChpRXhwVWlkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRyYXcgKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZztcclxuXHJcbiAgICAgICAgbGV0IGFsbEV4cGVyaWVuY2V1aWQgOiBudW1iZXJbXSA9IGNFeHBlcmllbmNlLmdldEFsbEV4cGVyaWVuY2VVaWQoKTtcclxuICAgICAgICBsZXQgeDogaUV4cGVyaWVuY2VJRE1lc3NhZ2UgfCBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgIHJldG91ciA9IGBcclxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInVpIGNlbGxlZCB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkV4cGVyaWVuY2UgTnVtPC90aD48dGg+RXhwZXJpZW5jZUlEPC90aD48dGg+UXVpPC90aD4gPHRoPlF1YW5kPC90aD48dGg+RGF0ZSBFbnJlZ2lzdHJlbWVudDwvdGg+PHRoPlZvaXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PmA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFeHBlcmllbmNldWlkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHggPSBjRXhwZXJpZW5jZS5nZXRFeHBlcmllbmNlX0luZm9HZW5lcmFsZShhbGxFeHBlcmllbmNldWlkW2ldKTtcclxuICAgICAgICAgICAgaWYgKHggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4ke2FsbEV4cGVyaWVuY2V1aWRbaV19PC90ZD48dGQ+JHt4LmV4cGVyaWVuY2VzdHJpbmdpZH08L3RkPjx0ZD4ke3guZmFpdGVwYXJxdWl9PC90ZD48dGQ+JHt4LmRhdGVyZWFsaXNhdGlvbmV4cGVyaWVuY2V9PC90ZD48dGQ+JHt4LmRhdGVpbnNlcnR9PC90ZD48dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ1aSBidXR0b24gZ3JlZW4gdm9pclwiIHR5cGU9XCJzdWJtaXRcIiBpZD1cIiR7dGhpcy5faWRPS0J1dHRvbn1fJHthbGxFeHBlcmllbmNldWlkW2ldfVwiPlZvaXI8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgY0V4cGVyaWVuY2UgfSBmcm9tICcuL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlJztcclxuaW1wb3J0IGNNeVVJIGZyb20gJy4vY015VUknO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWJfY3JlYXRlIGV4dGVuZHMgY015VUkge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfRGVmYXVsdFBlcnNvbm5lTm9tOiBzdHJpbmcgPSAnRmFnZXMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfRGVmYXVsdFBlcnNvbm5lTm9tSW5pdGlhbGU6IHN0cmluZyA9IHRoaXMuX0RlZmF1bHRQZXJzb25uZU5vbS5jaGFyQXQoMCk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZE9LQnV0dG9uOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9PS0J1dHRvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZERhdGVFeHA6IHN0cmluZyA9ICdTYWlzaWVFeHBlcmllbmNlX0RhdGVFeHAnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRRdWk6IHN0cmluZyA9ICdTYWlzaWVFeHBlcmllbmNlX1F1aSc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEZpbGVzOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9GaWxlcyc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZERpdkZvck1lc3NhZ2VJbmZvOiBzdHJpbmcgPSAnTWFpblRhYl9EaXZGb3JGb3JtX0luZm8nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRNZXNzYWdlSW5mbzogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19NZXNzYWdlSUQnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRFeHBlcmllbmNlTm9tUHJlZml4ZTogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19FeHBlcmllbmNlQXNMZXR0cmUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRFeHBlcmllbmNlTnVtZXJvOiBzdHJpbmcgPSAnTWFpblRhYl9VSV9JbmZvX2lkRXhwZXJpZW5jZU51bWVybyc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZTogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19faWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRFeHBlcmllbmNlQ2xlZjogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19pZEV4cGVyaWVuY2VDbGVmJztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9NeV9NZXNzYWdlX0NsYXNzZSA6IHN0cmluZyA9ICdDbGFzc2VEZXNNZXNzYWdlc0luZm8nO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNoZWNrRm9ybUNvbnRlbnUoKTtcclxuICAgICAgICB0aGlzLmxpZW5FeHByaWVuY2VJZF9Ob21NYW5pcCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBsaWVuRXhwcmllbmNlSWRfTm9tTWFuaXAoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiX2NyZWF0ZSA9IHRoaXM7XHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRRdWl9YCkub24gKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHZhbDogc3RyaW5nID0gPHN0cmluZz4gJChgIyR7bWUuX2lkUXVpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgdmFsRW50ZXRlID0gdmFsLmNoYXJBdCgwKTtcclxuICAgICAgICAgICAgJChgIyR7bWUuX2lkRXhwZXJpZW5jZU5vbVByZWZpeGV9YCkudmFsKHZhbEVudGV0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBDYWxsYmFjayBkdSBPS1xyXG4gICAgLy8gICAgICAxLiBjaGVjayBkdSBjb250ZW51IGR1IGZvcm11bGFpcmVcclxuICAgIC8vICAgICAgMi4gZW52b2llIGVuIERCIHNpIE9LXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHByaXZhdGUgY2hlY2tGb3JtQ29udGVudSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWJfY3JlYXRlID0gdGhpcztcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZE9LQnV0dG9ufWApLm9uICgnY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIGxlcyAzIGNoYW1wcyBhIGNvbnRyb2xlclxyXG4gICAgICAgICAgICBsZXQgZGF0ZSA6IHN0cmluZyA9IDxzdHJpbmc+ICQoYCMke21lLl9pZERhdGVFeHB9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBxdWk6IHN0cmluZyA9IDxzdHJpbmc+ICQoYCMke21lLl9pZFF1aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IGZpbGVzOiBGaWxlTGlzdCA9ICQoYCMke21lLl9pZEZpbGVzfWApLnByb3AoJ2ZpbGVzJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBlcnJ1cnMgc2kgMSBtYW5xdWVcclxuICAgICAgICAgICAgbGV0IG9uRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IG9uRXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBgPGRpdiBjbGFzcz1cInVpIG5lZ2F0aXZlIG1lc3NhZ2UgJHttZS5fTXlfTWVzc2FnZV9DbGFzc2V9XCI+PGkgY2xhc3M9XCJjbG9zZSBpY29uXCI+PC9pPmA7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3JNZXNzYWdlICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGIgZGUgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IElsIGZhdXQgY2hvaXNpciB1bmUgZGF0ZSA8L3A+YDtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gSWwgZmF1dCBjaG9pc2lyIGF1IG1vaW5zIHVuZSBpbWFnZSA8L3A+YDtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9uRXJyb3JNZXNzYWdlICs9ICc8L2Rpdj4nO1xyXG5cclxuICAgICAgICAgICAgLy8gYWZmaWNoZSBkZSBsJ2VycmV1clxyXG4gICAgICAgICAgICBpZiAob25FcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkRGl2Rm9yTWVzc2FnZUluZm99YCkuYXBwZW5kKG9uRXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGAuJHttZS5fTXlfTWVzc2FnZV9DbGFzc2V9YCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGVudm9pZSBlbiBEQlxyXG4gICAgICAgICAgICAgICAgbGV0IGV4cGVyaWVuY2VJZCA6IHN0cmluZyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICQoYCMke21lLl9pZEV4cGVyaWVuY2VOb21QcmVmaXhlfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICQoYCMke21lLl9pZEV4cGVyaWVuY2VOdW1lcm99YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBleHBlcmllbmNlSWQgKz0gJy0nICsgJChgIyR7bWUuX2lkRXhwZXJpZW5jZUV4cGVyaWVuY2V0eXBlfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICQoYCMke21lLl9pZEV4cGVyaWVuY2VDbGVmfWApLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZDogbnVtYmVyID0gY0V4cGVyaWVuY2UuY3JlYXRlREJFeHBlcmllbmNlKGV4cGVyaWVuY2VJZCwgZGF0ZSwgcXVpKTtcclxuICAgICAgICAgICAgICAgIGlmIChpZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjRXhwZXJpZW5jZS51cGxvYWRGaWxlcyhpZCwgZmlsZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgb25PS01lc3NhZ2U6IHN0cmluZyA9IGA8ZGl2IGNsYXNzPVwidWkgcG9zaXRpdmUgbWVzc2FnZSAke21lLl9NeV9NZXNzYWdlX0NsYXNzZX1cIj48aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+YDtcclxuICAgICAgICAgICAgICAgICAgICBvbk9LTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhdGlvbiBleHBlcmllbmNlIGVuIERCIC0tIE9LXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+ICR7ZXhwZXJpZW5jZUlkfSwgJHtkYXRlfSwgJHtxdWl9LCAke2ZpbGVzfSA8L3A+YDtcclxuICAgICAgICAgICAgICAgICAgICBvbk9LTWVzc2FnZSArPSAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgICAgICAkKGAjJHttZS5faWREaXZGb3JNZXNzYWdlSW5mb31gKS5hcHBlbmQob25PS01lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChgLiR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lLl9jdHJsLnNldExhc3RFeHAoZXhwZXJpZW5jZUlkLCBpZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCAoJ0ltcG9zc2libGUgZGUgbWV0dHJlIGVuIGJhc2UgY2V0dGUgZGVtYW5kZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbiAoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgYWxsUGVyc29ubmVzT3B0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBsZXQgYWxsUGVyc29ubmVzOiBzdHJpbmdbXSA9IGNFeHBlcmllbmNlLmdldEFsbFBlcnNvbmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFBlcnNvbm5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxQZXJzb25uZXNPcHRpb24gKz0gYDxvcHRpb24gdmFsdWU9XCIke2FsbFBlcnNvbm5lc1tpXX1cIj4ke2FsbFBlcnNvbm5lc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IEFsbEV4cGVyaWVuY2VJbml0aWFsZU9wdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICAgICAgbGV0IEFsbEV4cGVyaWVuY2VJbml0aWFsZTogc3RyaW5nW10gPSBjRXhwZXJpZW5jZS5nZXRBbGxFeHBlcmllbmNlSW5pdGlhbGUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEFsbEV4cGVyaWVuY2VJbml0aWFsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb24gKz0gYDxvcHRpb24gdmFsdWU9XCIke0FsbEV4cGVyaWVuY2VJbml0aWFsZVtpXX1cIj4ke0FsbEV4cGVyaWVuY2VJbml0aWFsZVtpXX08L29wdGlvbj5gO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmcgPSBgXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwidWkgZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkV4cGVyaWVuY2UgSWQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsZWZ0IGxhYmVsZWQgaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RoaXMuX0RlZmF1bHRQZXJzb25uZU5vbUluaXRpYWxlfVwiIGlkPVwiJHt0aGlzLl9pZEV4cGVyaWVuY2VOb21QcmVmaXhlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIGlkPVwiJHt0aGlzLl9pZEV4cGVyaWVuY2VOdW1lcm99XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiB4LWxhcmdlOyBtYXJnaW46YXV0bztcIj4tPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidWkgY29tcGFjdCBzZWxlY3Rpb24gZHJvcGRvd25cIiBpZD1cIiR7dGhpcy5faWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiQVwiPkE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7QWxsRXhwZXJpZW5jZUluaXRpYWxlT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1dHJlXCI+QXV0cmVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMFwiIGlkPVwiJHt0aGlzLl9pZEV4cGVyaWVuY2VDbGVmfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRhdGUgZGUgbCdleHBlcmllbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZS1leHBcIiB2YWx1ZT1cIjIwMjAtMTAtMDFcIiBtaW49XCIyMDIwLTEwLTAxXCIgaWQ9XCIke3RoaXMuX2lkRGF0ZUV4cH1cIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVpIGEgcmVhbGlzZSBsJ2V4cGVyaWVuY2U/PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwidWkgY29tcGFjdCBzZWxlY3Rpb24gZHJvcGRvd25cIiBpZD1cIiR7dGhpcy5faWRRdWl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCIke3RoaXMuX0RlZmF1bHRQZXJzb25uZU5vbX1cIj4ke3RoaXMuX0RlZmF1bHRQZXJzb25uZU5vbX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHthbGxQZXJzb25uZXNPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhdXRyZVwiPkF1dHJlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxpZW4gdmVycyBsZXMgaW1hZ2VzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZXhwSW1hZ2VcIiBhY2NlcHQ9XCJpbWFnZS9wbmcsIGltYWdlL2pwZWdcIiBtdWx0aXBsZSBpZD1cIiR7dGhpcy5faWRGaWxlc31cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3RoaXMuX2lkRGl2Rm9yTWVzc2FnZUluZm99XCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVpIGJ1dHRvbiBwaW5rXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiJHt0aGlzLl9pZE9LQnV0dG9ufVwiPk9LICE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPmA7XHJcblxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV1aWQge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJ6ZXVndCBlaW5lIFVVSUQgbmFjaCBSRkMgNDEyMlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7fVxyXG5cclxuICAgIHB1YmxpYyB1dWlkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgKGNoYXIpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7IC8vIE5hY2hrb21tYXN0ZWxsZW4gYWJzY2huZWlkZW5cclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gY2hhciA9PT0gJ3gnID8gcmFuZG9tIDogKHJhbmRvbSAlIDQgKyA4KTsgLy8gQmVpIHggUmFuZG9tIDAtMTUgKDAtRiksIGJlaSB5IFJhbmRvbSAwLTMgKyA4ID0gOC0xMSAoOC1iKSBnZW3DpHNzIFJGQyA0MTIyXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygxNik7IC8vIEhleGFkZXppbWFsZXMgWmVpY2hlbiB6dXLDvGNrZ2ViZW5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImVudW0gZUNvbmZpZ0Nvbm51ZXMge1xyXG4gICAgTmFuaWUgPSAwLFxyXG4gICAgUGFwcyA9IDFcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNDb25maWdzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9jdXJyZW50Q29uZmlnOiBlQ29uZmlnQ29ubnVlcyA9IGVDb25maWdDb25udWVzLk5hbmllO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9hamF4V1NVUkw6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0L25hbmllL3NlcnZlci9XUy9CUklXUy5waHAnLCAvKiBOYW5pZSAqL1xyXG4gICAgICAgICdodHRwOi8vbG9jYWxob3N0Ojg4L25hbmllL3NlcnZlci9XUy9CUklXUy5waHAnIC8qIFBhcHMgKi9cclxuICAgIF07XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBhamF4V1NVUkwoKSA6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGNDb25maWdzLl9hamF4V1NVUkxbY0NvbmZpZ3MuX2N1cnJlbnRDb25maWddO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBjQ29udHJvbGVyIHtcclxuICAgIHByaXZhdGUgX2xhc3RFeHA6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBfaUxhc3RFeHA6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2luZ2xldG9uOiBjQ29udHJvbGVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgY0NvbnRyb2xlci5fc2luZ2xldG9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9sYXN0RXhwID0gJyc7XHJcbiAgICAgICAgdGhpcy5faUxhc3RFeHAgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW50YW5jZSgpIDogY0NvbnRyb2xlciB7XHJcbiAgICAgICAgaWYgKGNDb250cm9sZXIuX3NpbmdsZXRvbiA9PSBudWxsKVxyXG4gICAgICAgICAgICBjQ29udHJvbGVyLl9zaW5nbGV0b24gPSBuZXcgY0NvbnRyb2xlcigpO1xyXG4gICAgICAgIHJldHVybiBjQ29udHJvbGVyLl9zaW5nbGV0b247XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGxhc3RFeHAoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdEV4cDtcclxuICAgIH1cclxuICAgIGdldCBpTGFzdEV4cCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pTGFzdEV4cDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLypcclxuICAgIHNldCBsYXN0RXhwKGxhc3RFeHA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSBsYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICBwdWJsaWMgc2V0TGFzdEV4cChsYXN0RXhwOiBzdHJpbmcsIGlMYXN0RXhwOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9sYXN0RXhwID0gbGFzdEV4cDtcclxuICAgICAgICB0aGlzLl9pTGFzdEV4cCA9IGlMYXN0RXhwO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBlTG9nZ2VyTGV2ZWwgfSBmcm9tICcuL2NMb2dnZXInO1xyXG5pbXBvcnQgeyBjQ29uZmlncyB9IGZyb20gJy4vY0NvbmZpZ3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY0VudnQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2RlYnVnTGV2ZWwgOiBlTG9nZ2VyTGV2ZWwgPSBlTG9nZ2VyTGV2ZWwuRGVidWc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfYWpheFdTVVJMOiBzdHJpbmcgPSBjQ29uZmlncy5hamF4V1NVUkwoKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERlYnVnTGV2ZWwoKTogZUxvZ2dlckxldmVsIHtcclxuICAgICAgICByZXR1cm4gY0VudnQuX2RlYnVnTGV2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRBamF4VVJMV1MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gY0VudnQuX2FqYXhXU1VSTDtcclxuICAgIH1cclxufVxyXG4iLCIgICAgZXhwb3J0IGVudW0gZUxvZ2dlckxldmVsIHtcclxuICAgICAgICBBbGwgICAgICAgICA9IDAsXHJcbiAgICAgICAgRGVidWcgICAgICAgPSA1MCxcclxuICAgICAgICBXYXJuaW5nICAgICA9IDEwMCxcclxuICAgICAgICBFcnJvciAgICAgICA9IDE1MCxcclxuICAgICAgICBGYXRhbCAgICAgICA9IDIwMFxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBjTG9nZ2VyIHtcclxuICAgICAgICBwcml2YXRlIF9sZXZlbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgKGxldmVsOiBlTG9nZ2VyTGV2ZWwsIGlkOiBzdHJpbmcgPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl9sZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEFsbCAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkFsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRGVidWcgKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5GYXRhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgV2FybmluZyAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBFcnJvciAobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgRmF0YWwobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nKG1zZywgZUxvZ2dlckxldmVsLkZhdGFsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX2xvZyAobXNnOiBzdHJpbmcsIGxldmVsOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAgICAgaWYgKGxldmVsID4gdGhpcy5fbGV2ZWwpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgaU15SHRtbEluZm8ge1xyXG4gICAgY2xhc3M/OiBzdHJpbmc7XHJcbiAgICBpZD86IHN0cmluZztcclxuICAgIHR5cGU/OiBzdHJpbmc7XHJcbiAgICBpbmRpY2VzZWxlY3RlZD86IG51bWJlcjtcclxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY1Rvb2xzIHtcclxuICAgIHN0YXRpYyBCdWlsZFNlbGVjdEZyb21UYWIodmFsczogc3RyaW5nW10sIGluZm86IGlNeUh0bWxJbmZvKSA6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA9ICcnO1xyXG4gICAgICAgIGxldCBhbGxLZXlzIDogc3RyaW5nIFtdID0gT2JqZWN0LmtleXMoaW5mbyk7XHJcblxyXG4gICAgICAgIHJldG91ciA9IGA8c2VsZWN0IGA7XHJcbiAgICAgICAgaWYgKGluZm9bJ2NsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGNsYXNzPVwiJHtpbmZvWydjbGFzcyddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvWydpZCddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBpZD1cIiR7aW5mb1snaWQnXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYD5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKChpbmZvWydpbmRpY2VzZWxlY3RlZCddICE9PSB1bmRlZmluZWQpICYmIChpID09PSBpbmZvWydpbmRpY2VzZWxlY3RlZCddKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiJHt2YWxzW2ldfVwiPiR7dmFsc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGA8b3B0aW9uIHZhbHVlPVwiJHt2YWxzW2ldfVwiPiR7dmFsc1tpXX08L29wdGlvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgPC9zZWxlY3Q+YDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBCdWlsZElucHV0SW50KHZhbDogc3RyaW5nLCBpbmZvOiBpTXlIdG1sSW5mbyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHJldG91ciA9IGA8aW5wdXQgdHlwZT1cIiR7aW5mb1sndHlwZSddfVwiIG5hbWU9XCIke2luZm9bJ2lkJ119XCIgaWQ9XCIke2luZm9bJ2lkJ119XCIgdmFsdWU9XCIke3ZhbH1cIiBzdGVwPVwiYW55XCIgYDtcclxuICAgICAgICBpZiAoaW5mb1snY2xhc3MnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgY2xhc3M9XCIke2luZm9bJ2NsYXNzJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluZm9bJ3BsYWNlaG9sZGVyJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYHBsYWNlaG9sZGVyPVwiJHtpbmZvWydwbGFjZWhvbGRlciddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldG91ciArPSBgLz5gO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9