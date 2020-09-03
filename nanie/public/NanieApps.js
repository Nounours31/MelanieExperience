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
                        alert('WS OK');
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
    cExperience.createDBExperience = function (experienceId, date, qui, files) {
        var me = cExperience.getInstance();
        me._ajax.reset();
        var retour = [];
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('ExperienceId', experienceId);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('date', date);
        args.push(arg1);
        arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('qui', qui);
        args.push(arg1);
        if (files.length > 0) {
            arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('files', files.item(0).name);
            args.push(arg1);
        }
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'create', args);
        me._ajax.postData(_infra_cEnvt__WEBPACK_IMPORTED_MODULE_1__["default"].getAjaxURLWS(), msg);
        if (me._ajax.getStatus() == 0) {
            var response = me._ajax.getData();
            var jsonObject = JSON.parse(response);
            if ('uid' in jsonObject)
                return jsonObject['uid'];
        }
        return 0;
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
        var retour = [];
        retour.push('Nanie');
        retour.push('Pap\'s');
        var c = new _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjax"]();
        var args = [];
        var arg1 = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildArgsFromString('ExperienceId', 'SS');
        args.push(arg1);
        var msg = _cAjax__WEBPACK_IMPORTED_MODULE_0__["cAjaxSendMessage"].buildFromString('experience', 'update', args);
        c.postData('http://localhost:88/nanie/server/WS/BRIWS.php', msg);
        //return retour;
        return 1234;
    };
    cExperience.dumpFromDB = function (id, _idResultatDB) {
        throw new Error('Method not implemented.');
    };
    cExperience.getAllTestType = function () {
        var retour = [];
        retour.push('Wallis');
        retour.push('Student');
        return retour;
    };
    cExperience.getAllMarquage = function () {
        var retour = [];
        retour.push('Dcp-1');
        retour.push('Kema');
        return retour;
    };
    cExperience.getAllChromo1 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo2 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo3 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromo4 = function () {
        return cExperience.getAllChromoXX();
    };
    cExperience.getAllChromoXX = function () {
        var retour = [];
        retour.push('-');
        retour.push('Pink[5]');
        retour.push('Vg');
        retour.push('LacZ');
        retour.push('White');
        retour.push('Debcl');
        retour.push('Pink');
        return retour;
    };
    cExperience.create_iAllInfoForUpdateExperience = function () {
        var retour = {
            'ExpId': '',
            'Genotype': [],
            'Marquage': '',
            'NbGenotype': 0,
            'SComparatif': 0,
            'SGeneral': 0,
            'TypeTest': ''
        };
        return retour;
    };
    cExperience.create_iAllGenotypeInfoForUpdateExperience = function () {
        var retour = {
            'Chromo1': '',
            'Chromo2': '',
            'Chromo3': '',
            'Chromo4': ''
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
        return _this;
    }
    cMyUI_MainTab.prototype.addCallBackOnMyDialog = function () {
        // activer les sementicUI du dialog
        $('.ui.accordion').accordion();
        $('.tabular.menu .item').tab();
        var me = this;
        me._creationUI.addCallBackOnMyDialog();
        me._ajoutUI.addCallBackOnMyDialog();
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
        return '<div>Consultation div</div>';
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
        _this._idSelectOnChromo1 = 'cMyUI_MainTab_ajout_idSelectOnChromo1';
        _this._idSelectOnChromo2 = 'cMyUI_MainTab_ajout_idSelectOnChromo2';
        _this._idSelectOnChromo3 = 'cMyUI_MainTab_ajout_idSelectOnChromo3';
        _this._idSelectOnChromo4 = 'cMyUI_MainTab_ajout_idSelectOnChromo4';
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
            var allInfosFromPage = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iAllInfoForUpdateExperience();
            allInfosFromPage.ExpId = $("#" + me._idInputExp).val();
            allInfosFromPage.Marquage = $("#" + me._idSelectOnMarquage).val();
            allInfosFromPage.NbGenotype = me._nbGenotype;
            allInfosFromPage.SComparatif = $("#" + me._idInputSComparatif).val();
            allInfosFromPage.SGeneral = $("#" + me._idInputSGeneral).val();
            allInfosFromPage.TypeTest = $("#" + me._idSelectOnTestType).val();
            for (var i = 0; i < me._nbGenotype; i++) {
                var allInfosFromGenotype = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].create_iAllGenotypeInfoForUpdateExperience();
                allInfosFromGenotype.Chromo1 = $("#" + me._idSelectOnChromo1 + "_" + i).val();
                allInfosFromGenotype.Chromo2 = $("#" + me._idSelectOnChromo2 + "_" + i).val();
                allInfosFromGenotype.Chromo3 = $("#" + me._idSelectOnChromo3 + "_" + i).val();
                allInfosFromGenotype.Chromo4 = $("#" + me._idSelectOnChromo4 + "_" + i).val();
                allInfosFromPage.Genotype.push(allInfosFromGenotype);
            }
            var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].updateDBExperience(allInfosFromPage);
            _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].dumpFromDB(id, me._idResultatDB);
        });
    };
    cMyUI_MainTab_ajout.prototype.UpdateMyDialog = function (lastExp, ilastExp) {
        var x = lastExp + ' [db: ' + ilastExp.toString() + ']';
        $("#" + this._idInputExp).val(x);
    };
    cMyUI_MainTab_ajout.prototype.draw = function () {
        var retour;
        var nbLigne = this._nbGenotype;
        var x = this._ctrl.lastExp + ' [db: ' + this._ctrl.iLastExp.toString() + ']';
        var infosForHTML;
        var selectChromo1 = ['', '', '', ''];
        var selectChromo2 = ['', '', '', ''];
        var selectChromo3 = ['', '', '', ''];
        var selectChromo4 = ['', '', '', ''];
        var InputNbEchantillon = ['', '', '', ''];
        var selectTypeTest;
        var selectMarquage;
        var InputSGeneral;
        var InputSComparatif;
        for (var i = 0; i < nbLigne; i++) {
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo1 + "_" + i };
            selectChromo1[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllChromo1(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo2 + "_" + i };
            selectChromo2[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllChromo2(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo3 + "_" + i };
            selectChromo3[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllChromo3(), infosForHTML);
            infosForHTML = { 'class': 'mySelect', 'id': this._idSelectOnChromo4 + "_" + i };
            selectChromo4[i] = _infra_cTools__WEBPACK_IMPORTED_MODULE_1__["cTools"].BuildSelectFromTab(_Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].getAllChromo4(), infosForHTML);
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
        retour = "\n            <form class=\"ui form\">\n                <div class=\"ui labeled input\">\n                    <div class=\"ui label\">\n                        Experience Id\n                    </div>\n                    <input type=\"text\" value=\"" + x + "\" placeholder=\"[lettre][chiffre]-[lettre][chiffre]\" id=\"" + this._idInputExp + "\"/>\n                </div>\n                <table class=\"ui celled table\">\n                <thead>\n                    <tr>\n                        <th>Genotype</th><th>Chromosome 1</th> <th>Chromosome 2</th> <th>Chromosome 3</th><th>Chromosome 4</th>\n                            <th>Nb Echantillon</th><th>Marquage</th><th>S general</th><th>S comparatif</th><th>Type test</th>\n                    </tr>\n                </thead>\n                <tbody>";
        for (var i = 0; i < nbLigne; i++) {
            if (i == 0) {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectChromo1[i] + "</td><td>" + selectChromo2[i] + "</td><td>" + selectChromo3[i] + "</td><td>" + selectChromo4[i] + "</td>\n                            <td>" + InputNbEchantillon[i] + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectMarquage + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSGeneral + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + InputSComparatif + "</td>\n                            <td rowspan=\"" + nbLigne + "\">" + selectTypeTest + "</td>\n                    </tr>";
            }
            else {
                retour += "\n                    <tr>\n                        <td>G " + (i + 1) + "</td><td>" + selectChromo1[i] + "</td><td>" + selectChromo2[i] + "</td><td>" + selectChromo3[i] + "</td><td>" + selectChromo4[i] + "</td><td>" + InputNbEchantillon[i] + "</td>\n                    </tr>";
            }
        }
        retour += "\n                </tbody>\n                </table>\n                <button class=\"ui button pink\" type=\"submit\" id=\"" + this._idOKButton + "\">OK !</button>\n            </form>\n        ";
        return retour;
    };
    return cMyUI_MainTab_ajout;
}(_cMyUI__WEBPACK_IMPORTED_MODULE_2__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (cMyUI_MainTab_ajout);


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
                var id = _Services_DB_cExperience__WEBPACK_IMPORTED_MODULE_0__["cExperience"].createDBExperience(experienceId, date, qui, files);
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
    cEnvt._ajaxWSURL = 'http://localhost:88/nanie/server/WS/BRIWS.php';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Fzcy9teUFwcHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zYXNzL215QXBwcy5zY3NzP2MwODIiLCJ3ZWJwYWNrOi8vLy4vc3JjL05hbmllQXBwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvREIvY0FqYXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0RCL2NFeHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jTXlVSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9ham91dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY015VUlfTWFpblRhYl9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL1V1aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NDb250cm9sZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZnJhL2NFbnZ0LnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmZyYS9jVG9vbHMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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SSxDQUFDLENBQUMsQ0FBQyxXQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBVyxDQUFDO2FBQzlEO1NBQ0o7UUFDRCxNQUFNLElBQUksV0FBVyxDQUFDO1FBQ3RCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFTSxvQkFBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsSUFBaUI7UUFDL0MsSUFBSSxNQUFNLEdBQUcsbUJBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFZLEdBQUcscUJBQWUsQ0FBQztRQUNoSCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDN0IsTUFBTSxJQUFJLGFBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFJLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxJQUFJLG1CQUFnQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQUksQ0FBQztTQUNyRDtRQUNELE1BQU0sSUFBSSxJQUFJLENBQUM7UUFDZixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7QUM3Q0Qsd0IiLCJmaWxlIjoiTmFuaWVBcHBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTmFuaWVBcHBzLnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmludmVyc2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLk15QXBwcyB7XFxuICBjb2xvcjogZ3JlZW47XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuLmFjY29yZGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XFxufVxcblxcbi5teVNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLm15SW5wdXRJbnQge1xcbiAgd2lkdGg6IDc1cHggIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubXlJbnB1dEZsb2F0IHtcXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlICFpbXBvcnRhbnQ7XFxufVxcblxcbi51aS5ncmlkLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Fzcy9teUFwcHMuc2Nzc1wiLFwid2VicGFjazovL3Nhc3MvYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxZQ0pXO0VES1gsNENBQUE7QUFERjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtBQUZGOztBQUtBO0VBQ0Usc0JBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQUtBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBQUZGOztBQU1BO0VBQ0ksc0JBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdiYXNlJztcXHJcXG5cXHJcXG4uaW52ZXJzZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBiYXNlLiRwcmltYXJ5LWNvbG9yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uTXlBcHBzIHtcXHJcXG4gIGNvbG9yOiBiYXNlLiRib2R5LWNvbG9yO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5hY2NvcmRpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlTZWxlY3Qge1xcclxcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5teUlucHV0SW50IHtcXHJcXG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm15SW5wdXRGbG9hdCB7XFxyXFxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udWkuZ3JpZC5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcclxcbn1cIixcIi8vIF9iYXNlLnNjc3NcXHJcXG4kZm9udC1zdGFjazogICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xcclxcbiRib2R5LWNvbG9yOiBncmVlbjtcXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teUFwcHMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuLi9zYXNzL215QXBwcy5zY3NzJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IGNNeVVJX01haW5UYWIgZnJvbSAnLi9jTXlVSV9NYWluVGFiJztcclxuXHJcbmNsYXNzIE5hbmllQXBwcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgfVxyXG5cclxuICAgIG1haW4oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHJvb3REaXY6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKCcucm9vdCcpO1xyXG4gICAgICAgIGxldCBkaWFsb2c6IGNNeVVJX01haW5UYWIgPSBuZXcgY015VUlfTWFpblRhYigpO1xyXG4gICAgICAgIGxldCBuZXdIVE1MOiBzdHJpbmcgPSBkaWFsb2cuZHJhdygpO1xyXG5cclxuICAgICAgICBpZiAoKHJvb3REaXYgIT0gbnVsbCkgJiYgKG5ld0hUTUwgIT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgcm9vdERpdi5hcHBlbmQobmV3SFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpYWxvZy5hZGRDYWxsQmFja09uTXlEaWFsb2coKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGE6IE5hbmllQXBwcyA9IG5ldyBOYW5pZUFwcHMoKTtcclxuYS5tYWluKCk7IiwiaW1wb3J0ICQsIHsgZGF0YSB9IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBVdWlkIGZyb20gJy4uLy4uL2luZnJhL1V1aWQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBpQWpheFNlbmRNZXNzYWdlQXJncyB7XHJcbiAgICBub206IHN0cmluZztcclxuICAgIHZhbDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBjQWpheFNlbmRNZXNzYWdlIHtcclxuICAgIHByaXZhdGUgX2NsYXNzZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfcmVxdWV0ZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9hcmdzID0gW107XHJcbiAgICAgICAgdGhpcy5fY2xhc3NlID0gJyc7XHJcbiAgICAgICAgdGhpcy5fcmVxdWV0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRGcm9tU3RyaW5nKGNsYXNzZTogc3RyaW5nLCByZXF1ZXRlOiBzdHJpbmcsIGFyZ3M6IGlBamF4U2VuZE1lc3NhZ2VBcmdzW10gfCBudWxsKTogY0FqYXhTZW5kTWVzc2FnZSB7XHJcbiAgICAgICAgbGV0IHI6IGNBamF4U2VuZE1lc3NhZ2UgPSBuZXcgY0FqYXhTZW5kTWVzc2FnZSgpO1xyXG4gICAgICAgIHIuX2NsYXNzZSA9IGNsYXNzZTtcclxuICAgICAgICByLl9yZXF1ZXRlID0gcmVxdWV0ZTtcclxuICAgICAgICByLl9hcmdzID0gW107XHJcbiAgICAgICAgaWYgKGFyZ3MgIT0gbnVsbClcclxuICAgICAgICAgICAgci5fYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBidWlsZEFyZ3NGcm9tU3RyaW5nKG5vbTogc3RyaW5nLCB2YWw6IHN0cmluZyk6IGlBamF4U2VuZE1lc3NhZ2VBcmdzIHtcclxuICAgICAgICBsZXQgcjogaUFqYXhTZW5kTWVzc2FnZUFyZ3MgPSB7XHJcbiAgICAgICAgICAgICdub20nOiBub20sXHJcbiAgICAgICAgICAgICd2YWwnOiB2YWxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgaUFqYXhSZXNwb25zZU1lc3NhZ2Uge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZGF0YTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgaUFqYXhDb25maWcge1xyXG4gICAgJ2FzeW5jJzogYm9vbGVhbjtcclxuICAgICdjYWNoZSc6IGJvb2xlYW47XHJcbiAgICAnY29udGVudFR5cGUnOiBzdHJpbmc7XHJcbiAgICAnZGF0YSc6IHN0cmluZztcclxuICAgICdkYXRhVHlwZSc6IHN0cmluZzsgICAgLy8gVGhlIGRhdGEgdHlwZSBleHBlY3RlZCBvZiB0aGUgc2VydmVyIHJlc3BvbnNlLlxyXG4gICAgJ2dsb2JhbCc6IGJvb2xlYW47ICAgICAgICAvLyBBIEJvb2xlYW4gdmFsdWUgc3BlY2lmeWluZyB3aGV0aGVyIG9yIG5vdCB0byB0cmlnZ2VyIGdsb2JhbCBBSkFYIGV2ZW50IGhhbmRsZXMgZm9yIHRoZSByZXF1ZXN0LkRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgJ3RpbWVvdXQnOiBudW1iZXI7ICAvLyBUaGUgbG9jYWwgdGltZW91dChpbiBtaWxsaXNlY29uZHMpIGZvciB0aGUgcmVxdWVzdFxyXG4gICAgJ3R5cGUnIDogc3RyaW5nO1xyXG4gICAgJ3VybCc6IHN0cmluZztcclxuICAgICdiZWZvcmVTZW5kJzogKHhocjogWE1MSHR0cFJlcXVlc3QpID0+IHZvaWQ7ICAvLyAoeGhyKVx0QSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICdlcnJvcic6ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZywgZXJyb3I6IGFueSkgPT4gdm9pZDsgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cywgZXJyb3IpXHRBIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgcmVxdWVzdCBmYWlscy5cclxuICAgICdzdWNjZXNzJzogKGRhdGE6IGFueSwgc3RhdHVzOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QpID0+IHZvaWQ7ICAgICAgIC8vIChyZXN1bHQsIHN0YXR1cywgeGhyKVx0QSBmdW5jdGlvbiB0byBiZSBydW4gd2hlbiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xyXG4gICAgJ2NvbXBsZXRlJzogKHhocjogWE1MSHR0cFJlcXVlc3QsIHN0YXR1czogc3RyaW5nKSA9PiB2b2lkOyAgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cylcdEEgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIHJlcXVlc3QgaXMgZmluaXNoZWQoYWZ0ZXIgc3VjY2VzcyBhbmQgZXJyb3IgZnVuY3Rpb25zKVxyXG4gICAgJ215QWpheENsYXNzJyA6IGNBamF4O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY0FqYXgge1xyXG4gICAgcHJpdmF0ZSBfaW50ZXJuYWxTdGF0dXM6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIF9yZXR1cm5lZERhdGE6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBfdWlkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fdWlkID0gKG5ldyBVdWlkKCkpLnV1aWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7IHRoaXMuX2ludGVybmFsU3RhdHVzID0gMTsgdGhpcy5fcmV0dXJuZWREYXRhID0gJyc7fVxyXG4gICAgcHVibGljIGdldFN0YXR1cygpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5faW50ZXJuYWxTdGF0dXM7IH1cclxuICAgIHB1YmxpYyBnZXREYXRhKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9yZXR1cm5lZERhdGE7IH1cclxuXHJcblxyXG4gICAgcHVibGljIHBvc3REYXRhKHVybDogc3RyaW5nLCBkYXRhOiBjQWpheFNlbmRNZXNzYWdlKTogdm9pZDtcclxuICAgIHB1YmxpYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nKTogdm9pZDtcclxuICAgIHB1YmxpYyBwb3N0RGF0YSh1cmw6IHN0cmluZywgZGF0YTogc3RyaW5nIHwgY0FqYXhTZW5kTWVzc2FnZSkgOiB2b2lkIHtcclxuICAgICAgICBsZXQgc0RhdGEgOiBKU09OO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSAgPT09ICdzdHJpbmcnICkge1xyXG4gICAgICAgICAgICBzRGF0YSA9IEpTT04ucGFyc2UoZGF0YSBhcyBzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoZGF0YSBhcyBjQWpheFNlbmRNZXNzYWdlKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNEYXRhID0gKChkYXRhIGFzIHVua25vd24pIGFzIEpTT04pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0eXBlIGFzIGlucHV0Jyk7XHJcblxyXG4gICAgICAgIGxldCBhamF4Q29uZk9iajogT2JqZWN0ID0gdGhpcy5nZXRBamF4Q29uZih0aGlzLmNvbXBsZXRlX2Z1bmN0aW9uLCB1cmwsIHNEYXRhKTtcclxuICAgICAgICAkLmFqYXgoYWpheENvbmZPYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nICgnYXByZXMgYWpheCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwb3N0RmlsZXMoc2VydmVyVVJMOiBzdHJpbmcsIGRhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICAgICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgICAgICAndXJsJzogc2VydmVyVVJMLFxyXG4gICAgICAgICAgICAnZGF0YSc6IGRhdGEsXHJcbiAgICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwcm9jZXNzRGF0YTogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGdldEFqYXhDb25mKGNvbXBsZXRlZnVuY3Rpb246ICh4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZykgPT4gdm9pZCwgbXlVcmwgOiBzdHJpbmcsIGRhdGEgOiBKU09OKSA6IE9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJldG91cjogaUFqYXhDb25maWcgPSB7XHJcbiAgICAgICAgICAgICdhc3luYycgOiBmYWxzZSxcclxuICAgICAgICAgICAgJ2NhY2hlJzogZmFsc2UsXHJcbiAgICAgICAgICAgICdjb250ZW50VHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ2RhdGEnIDogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgICdkYXRhVHlwZScgOiAnanNvbicsICAgIC8vIFRoZSBkYXRhIHR5cGUgZXhwZWN0ZWQgb2YgdGhlIHNlcnZlciByZXNwb25zZS5cclxuICAgICAgICAgICAgJ2dsb2JhbCcgOiB0cnVlLCAgICAgICAgLy8gQSBCb29sZWFuIHZhbHVlIHNwZWNpZnlpbmcgd2hldGhlciBvciBub3QgdG8gdHJpZ2dlciBnbG9iYWwgQUpBWCBldmVudCBoYW5kbGVzIGZvciB0aGUgcmVxdWVzdC5EZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAgICAgJ3RpbWVvdXQnIDogMTAwMCAqIDYwLCAgLy8gVGhlIGxvY2FsIHRpbWVvdXQoaW4gbWlsbGlzZWNvbmRzKSBmb3IgdGhlIHJlcXVlc3RcclxuICAgICAgICAgICAgJ3R5cGUnIDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAndXJsJzogbXlVcmwsXHJcbiAgICAgICAgICAgICdiZWZvcmVTZW5kJzogdGhpcy5iZWZvcmVTZW5kX2Z1bmN0aW9uLCAvLyAoeGhyKVx0QSBmdW5jdGlvbiB0byBydW4gYmVmb3JlIHRoZSByZXF1ZXN0IGlzIHNlbnRcclxuICAgICAgICAgICAgJ2Vycm9yJzogdGhpcy5lcnJvcl9mdW5jdGlvbiwgICAgICAgICAgIC8vICh4aHIsIHN0YXR1cywgZXJyb3IpXHRBIGZ1bmN0aW9uIHRvIHJ1biBpZiB0aGUgcmVxdWVzdCBmYWlscy5cclxuICAgICAgICAgICAgJ3N1Y2Nlc3MnOiAgdGhpcy5zdWNjZXNzX2Z1bmN0aW9uLCAgICAgICAvLyAocmVzdWx0LCBzdGF0dXMsIHhocilcdEEgZnVuY3Rpb24gdG8gYmUgcnVuIHdoZW4gdGhlIHJlcXVlc3Qgc3VjY2VlZHNcclxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogY29tcGxldGVmdW5jdGlvbiwgICAgICAgICAgICAvLyAoeGhyLCBzdGF0dXMpXHRBIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSByZXF1ZXN0IGlzIGZpbmlzaGVkKGFmdGVyIHN1Y2Nlc3MgYW5kIGVycm9yIGZ1bmN0aW9ucylcclxuICAgICAgICAgICAgJ215QWpheENsYXNzJyA6IHRoaXNcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgIFhIUiA6XHJcbiAgICB7XHJcbiAgICAgICAgcmVhZHlTdGF0ZTogNFxyXG4gICAgICAgIHJlc3BvbnNlSlNPTjoge1widHlwZVwiIDogXCJlcnJvclwiLFwiZGF0YVwiOiBbe1wiZXJybm9cIjogOTAwMDAwMH0sIHtcImRhdGFcIjpcImlCUklXU0FwaSMjX2RlY29kZUpTT05JbnB1dCAjIHVuYWJsZSB0byBwYXJzZS0tIGludmFsaWQganNvbiBmb3JtYXQgdGVzdCBpdCBmaXJzdCAuLi5UclxyXG4gICAgICAgIHJlc3BvbnNlVGV4dDogXFxuXFxuXFxuXFxue1xcXCJ0eXBlXFxcIiA6IFxcXCJlcnJvclxcXCIsXFxcImRhdGFcXFwiOiBbe1xcXCJlcnJub1xcXCI6IDkwMDAwMDB9LCB7XFxcImRhdGFcXFwiOlxcXCJpQlJJV1NBcGkjI19kZWNvZGVKU09OSW5wdXQgIyB1bmFibGUgdG8gcGFyc2UgLS0gaW52YWxpZCBqc29uIGZvcm1hdCB0ZXN0IGl0XHJcbiAgICAgICAgc3RhdHVzOiAyMDBcclxuICAgICAgICBzdGF0dXhUZXh0OiBcIk9LXCJcclxuXHJcbiAgICAgICAgYWJvcnQ6IMaSICggc3RhdHVzVGV4dCApXHJcbiAgICAgICAgYWx3YXlzOiDGkiAoKVxyXG4gICAgICAgIGNhdGNoOiDGkiAoIGZuIClcclxuICAgICAgICBkb25lOiDGkiAoKVxyXG4gICAgICAgIGZhaWw6IMaSICgpXHJcbiAgICAgICAgZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOiDGkiAoKVxyXG4gICAgICAgIGdldFJlc3BvbnNlSGVhZGVyOiDGkiAoIGtleSApXHJcbiAgICAgICAgb3ZlcnJpZGVNaW1lVHlwZTogxpIgKCB0eXBlIClcclxuICAgICAgICBwaXBlOiDGkiAoIClcclxuICAgICAgICBwcm9ncmVzczogxpIgKClcclxuICAgICAgICBwcm9taXNlOiDGkihvYmopXHJcblxyXG4gICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGYoKVxyXG4gICAgICAgIHN0YXR1c0NvZGU6IGYgKG1hcClcclxuICAgICAgICB0aGVuICA6IGYoLi4uKVxyXG4gICAgKi9cclxuICAgIHByaXZhdGUgYmVmb3JlU2VuZF9mdW5jdGlvbih4aHI6IFhNTEh0dHBSZXF1ZXN0KTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXJyb3JfZnVuY3Rpb24oeGhyOiBYTUxIdHRwUmVxdWVzdCwgc3RhdHVzOiBzdHJpbmcsIGVycm9yOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyB4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBmYWlsICcgKyBlcnJvcik7XHJcbiAgICAgICAgYWxlcnQgKCdhamF4IGZhaWxzOiBTZWUgQ29uc29sZS5Mb2cnKTtcclxuICAgICAgICBsZXQgbXlBamF4Q2xhc3M6IGNBamF4O1xyXG4gICAgICAgIGlmICgnbXlBamF4Q2xhc3MnIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MgPSAodGhpcyBhcyBpQWpheENvbmZpZykubXlBamF4Q2xhc3M7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzdWNjZXNzX2Z1bmN0aW9uKGRhdGE6IGFueSwgc3RhdHVzOiBzdHJpbmcsIHhocjogWE1MSHR0cFJlcXVlc3QpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWpheCBzdWNlc3MnKTtcclxuICAgICAgICBsZXQgbXlBamF4Q2xhc3M6IGNBamF4O1xyXG4gICAgICAgIGlmICgnbXlBamF4Q2xhc3MnIGluIHRoaXMpIHtcclxuICAgICAgICAgICAgbXlBamF4Q2xhc3MgPSAodGhpcyBhcyBpQWpheENvbmZpZykubXlBamF4Q2xhc3M7XHJcbiAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjb21wbGV0ZV9mdW5jdGlvbih4aHI6IFhNTEh0dHBSZXF1ZXN0LCBzdGF0dXM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nICgnYWpheCBjb21wbGV0ZWQnKTtcclxuICAgICAgICBsZXQgbXlBamF4Q2xhc3MgOiBjQWpheCA7XHJcbiAgICAgICAgaWYgKCdteUFqYXhDbGFzcycgaW4gdGhpcykge1xyXG4gICAgICAgICAgICBteUFqYXhDbGFzcyA9ICh0aGlzIGFzIGlBamF4Q29uZmlnKS5teUFqYXhDbGFzcztcclxuICAgICAgICAgICAgaWYgKG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyAhPSAxKSB7IC8vIHBhcyBlbiBlcnJldXJcclxuICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDM7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWpheFJlcG9uc2U6IGlBamF4UmVzcG9uc2VNZXNzYWdlID0gKEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCkgYXMgaUFqYXhSZXNwb25zZU1lc3NhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhamF4UmVwb25zZS50eXBlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlcG9uc2UudHlwZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhID0gYWpheFJlcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQgKCdXUyBmYWlsczogZXJyb3Igc2VlIGlubG9nICEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXlBamF4Q2xhc3MuX3JldHVybmVkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5faW50ZXJuYWxTdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUFqYXhDbGFzcy5fcmV0dXJuZWREYXRhID0gYWpheFJlcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1dTIE9LJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG15QWpheENsYXNzLl9yZXR1cm5lZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG15QWpheENsYXNzLl9pbnRlcm5hbFN0YXR1cyA9IDE7IC8vIHJldG91ciBpbmNvbm51IGVuIGVycmV1ciAhXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjQWpheCwgY0FqYXhTZW5kTWVzc2FnZSwgaUFqYXhTZW5kTWVzc2FnZUFyZ3MgfSBmcm9tICcuL2NBamF4JztcclxuaW1wb3J0IGNFbnZ0IGZyb20gJy4uLy4uL2luZnJhL2NFbnZ0JztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfY3JlYXRlIGZyb20gJy4uLy4uL2NNeVVJX01haW5UYWJfY3JlYXRlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgaUFsbEdlbm90eXBlSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2Uge1xyXG4gICAgQ2hyb21vMTogc3RyaW5nO1xyXG4gICAgQ2hyb21vMjogc3RyaW5nO1xyXG4gICAgQ2hyb21vMzogc3RyaW5nO1xyXG4gICAgQ2hyb21vNDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGlBbGxJbmZvRm9yVXBkYXRlRXhwZXJpZW5jZSB7XHJcbiAgICBFeHBJZDogc3RyaW5nO1xyXG4gICAgTmJHZW5vdHlwZTogbnVtYmVyO1xyXG4gICAgR2Vub3R5cGU6IGlBbGxHZW5vdHlwZUluZm9Gb3JVcGRhdGVFeHBlcmllbmNlW107XHJcbiAgICBNYXJxdWFnZTogc3RyaW5nO1xyXG4gICAgVHlwZVRlc3Q6IHN0cmluZztcclxuICAgIFNHZW5lcmFsOiBudW1iZXI7XHJcbiAgICBTQ29tcGFyYXRpZjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgY0V4cGVyaWVuY2Uge1xyXG4gICAgcHJpdmF0ZSBfYWpheDogY0FqYXggPSBuZXcgY0FqYXgoKTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zaW5nbGV0b246IGNFeHBlcmllbmNlIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5fYWpheCA9IG5ldyBjQWpheCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEluc3RhbmNlKCk6IGNFeHBlcmllbmNlIHtcclxuICAgICAgICBpZiAoY0V4cGVyaWVuY2UuX3NpbmdsZXRvbiA9PSBudWxsKVxyXG4gICAgICAgICAgICBjRXhwZXJpZW5jZS5fc2luZ2xldG9uID0gbmV3IGNFeHBlcmllbmNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5fc2luZ2xldG9uO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxQZXJzb25lKCkgOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG1zZzogY0FqYXhTZW5kTWVzc2FnZSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRGcm9tU3RyaW5nICgncGVyc29ubmVzJywgJ2dldEFsbFBlcnNvbm5lcycsIG51bGwpO1xyXG4gICAgICAgIG1lLl9hamF4LnBvc3REYXRhKGNFbnZ0LmdldEFqYXhVUkxXUygpLCBtc2cpO1xyXG4gICAgICAgIGlmIChtZS5fYWpheC5nZXRTdGF0dXMoKSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA6IHN0cmluZyA9IG1lLl9hamF4LmdldERhdGEoKTtcclxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3QgOiBKU09OID0gSlNPTi5wYXJzZSAocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShqc29uT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAganNvbk9iamVjdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldG91ci5wdXNoIChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbEV4cGVyaWVuY2VJbml0aWFsZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnZ2V0QWxsRXhwZXJpZW5jZUluaXRpYWxlJywgbnVsbCk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb25PYmplY3QpKSB7XHJcbiAgICAgICAgICAgICAgICBqc29uT2JqZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0b3VyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGVEQkV4cGVyaWVuY2UoZXhwZXJpZW5jZUlkOiBzdHJpbmcsIGRhdGU6IHN0cmluZywgcXVpOiBzdHJpbmcsIGZpbGVzOiBGaWxlTGlzdCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1lOiBjRXhwZXJpZW5jZSA9IGNFeHBlcmllbmNlLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgbWUuX2FqYXgucmVzZXQoKTtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnRXhwZXJpZW5jZUlkJywgZXhwZXJpZW5jZUlkKTtcclxuICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgYXJnMSA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnZGF0ZScsIGRhdGUpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdxdWknLCBxdWkpO1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcxKTtcclxuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBhcmcxID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEFyZ3NGcm9tU3RyaW5nKCdmaWxlcycsIChmaWxlcy5pdGVtKDApIGFzIEZpbGUpLm5hbWUpO1xyXG4gICAgICAgICAgICBhcmdzLnB1c2goYXJnMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAnY3JlYXRlJywgYXJncyk7XHJcbiAgICAgICAgbWUuX2FqYXgucG9zdERhdGEoY0VudnQuZ2V0QWpheFVSTFdTKCksIG1zZyk7XHJcbiAgICAgICAgaWYgKG1lLl9hamF4LmdldFN0YXR1cygpID09IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlOiBzdHJpbmcgPSBtZS5fYWpheC5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0OiBKU09OID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICgndWlkJyBpbiBqc29uT2JqZWN0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb25PYmplY3RbJ3VpZCddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHVwbG9hZEZpbGVzKGlkOiBudW1iZXIsIGZpbGVzOiBGaWxlTGlzdCkge1xyXG4gICAgICAgIGxldCBkYXRhIDogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmIDogRmlsZSB8IG51bGwgPSBmaWxlcy5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoZiA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kICgnZmlsZS0nICsgaSwgZiwgZi5uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtZTogY0V4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5nZXRJbnN0YW5jZSgpO1xyXG4gICAgICAgIG1lLl9hamF4LnJlc2V0KCk7XHJcblxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdleHBlcmllbmNlSWQnLCBpZC50b1N0cmluZygpKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnX2NsYXNzZScsICdleHBlcmllbmNlJyk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ19yZXF1ZXRlJywgJ3VwbG9hZEZpbGUnKTtcclxuICAgICAgICBtZS5fYWpheC5wb3N0RmlsZXMoY0VudnQuZ2V0QWpheFVSTFdTKCksIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgc3RhdGljIHVwZGF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlOiBpQWxsSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2UpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCByZXRvdXI6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgcmV0b3VyLnB1c2goJ05hbmllJyk7XHJcbiAgICAgICAgcmV0b3VyLnB1c2goJ1BhcFxcJ3MnKTtcclxuXHJcbiAgICAgICAgbGV0IGMgPSBuZXcgY0FqYXgoKTtcclxuICAgICAgICBsZXQgYXJnczogaUFqYXhTZW5kTWVzc2FnZUFyZ3NbXSA9IFtdO1xyXG4gICAgICAgIGxldCBhcmcxOiBpQWpheFNlbmRNZXNzYWdlQXJncyA9IGNBamF4U2VuZE1lc3NhZ2UuYnVpbGRBcmdzRnJvbVN0cmluZygnRXhwZXJpZW5jZUlkJywgJ1NTJyk7XHJcbiAgICAgICAgYXJncy5wdXNoKGFyZzEpO1xyXG5cclxuICAgICAgICBsZXQgbXNnOiBjQWpheFNlbmRNZXNzYWdlID0gY0FqYXhTZW5kTWVzc2FnZS5idWlsZEZyb21TdHJpbmcoJ2V4cGVyaWVuY2UnLCAndXBkYXRlJywgYXJncyk7XHJcbiAgICAgICAgYy5wb3N0RGF0YSgnaHR0cDovL2xvY2FsaG9zdDo4OC9uYW5pZS9zZXJ2ZXIvV1MvQlJJV1MucGhwJywgbXNnKTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gcmV0b3VyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEyMzQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGR1bXBGcm9tREIoaWQ6IG51bWJlciwgX2lkUmVzdWx0YXREQjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxUZXN0VHlwZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICByZXRvdXIucHVzaCgnV2FsbGlzJyk7XHJcbiAgICAgICAgcmV0b3VyLnB1c2goJ1N0dWRlbnQnKTtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxNYXJxdWFnZSgpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgbGV0IHJldG91cjogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICByZXRvdXIucHVzaCgnRGNwLTEnKTtcclxuICAgICAgICByZXRvdXIucHVzaCgnS2VtYScpO1xyXG4gICAgICAgIHJldHVybiByZXRvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbENocm9tbzEoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxDaHJvbW9YWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbENocm9tbzIoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxDaHJvbW9YWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbENocm9tbzMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxDaHJvbW9YWCgpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldEFsbENocm9tbzQoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiBjRXhwZXJpZW5jZS5nZXRBbGxDaHJvbW9YWCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEFsbENocm9tb1hYKCk6IHN0cmluZ1tdIHtcclxuICAgICAgICBsZXQgcmV0b3VyOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIHJldG91ci5wdXNoKCctJyk7XHJcbiAgICAgICAgcmV0b3VyLnB1c2goJ1BpbmtbNV0nKTtcclxuICAgICAgICByZXRvdXIucHVzaCgnVmcnKTtcclxuICAgICAgICByZXRvdXIucHVzaCgnTGFjWicpO1xyXG4gICAgICAgIHJldG91ci5wdXNoKCdXaGl0ZScpO1xyXG4gICAgICAgIHJldG91ci5wdXNoKCdEZWJjbCcpO1xyXG4gICAgICAgIHJldG91ci5wdXNoKCdQaW5rJyk7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lBbGxJbmZvRm9yVXBkYXRlRXhwZXJpZW5jZSgpOiBpQWxsSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2Uge1xyXG4gICAgICAgIGxldCByZXRvdXI6IGlBbGxJbmZvRm9yVXBkYXRlRXhwZXJpZW5jZSA9IHtcclxuICAgICAgICAgICAgJ0V4cElkJzogJycsXHJcbiAgICAgICAgICAgICdHZW5vdHlwZScgOiBbXSxcclxuICAgICAgICAgICAgJ01hcnF1YWdlJyA6ICcnLFxyXG4gICAgICAgICAgICAnTmJHZW5vdHlwZScgOiAwLFxyXG4gICAgICAgICAgICAnU0NvbXBhcmF0aWYnIDogMCxcclxuICAgICAgICAgICAgJ1NHZW5lcmFsJyA6IDAsXHJcbiAgICAgICAgICAgICdUeXBlVGVzdCcgOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlX2lBbGxHZW5vdHlwZUluZm9Gb3JVcGRhdGVFeHBlcmllbmNlKCk6IGlBbGxHZW5vdHlwZUluZm9Gb3JVcGRhdGVFeHBlcmllbmNlIHtcclxuICAgICAgICBsZXQgcmV0b3VyOiBpQWxsR2Vub3R5cGVJbmZvRm9yVXBkYXRlRXhwZXJpZW5jZSA9IHtcclxuICAgICAgICAgICAgJ0Nocm9tbzEnOiAnJyxcclxuICAgICAgICAgICAgJ0Nocm9tbzInOiAnJyxcclxuICAgICAgICAgICAgJ0Nocm9tbzMnOiAnJyxcclxuICAgICAgICAgICAgJ0Nocm9tbzQnOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgY0VudnQgZnJvbSAnLi9pbmZyYS9jRW52dCc7XHJcbmltcG9ydCB7IGNDb250cm9sZXIgfSAgZnJvbSAnLi9pbmZyYS9jQ29udHJvbGVyJztcclxuaW1wb3J0IHsgY0xvZ2dlciwgZUxvZ2dlckxldmVsIH0gZnJvbSAnLi9pbmZyYS9jTG9nZ2VyJztcclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBjTXlVSSB7XHJcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2lkUmVzdWx0YXREQjogc3RyaW5nID0gJ2lkUmVzdWx0YXREQic7XHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogY0xvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfY3RybDogY0NvbnRyb2xlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoaWQgOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICAgICAgaWYgKGlkID09IG51bGwpXHJcbiAgICAgICAgICAgIGlkID0gJ2NNeVVJJztcclxuXHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbmV3IGNMb2dnZXIoY0VudnQuZ2V0RGVidWdMZXZlbCgpLCBpZCk7XHJcbiAgICAgICAgdGhpcy5fY3RybCA9IGNDb250cm9sZXIuZ2V0SW50YW5jZSgpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGFic3RyYWN0IGRyYXcoKTogc3RyaW5nO1xyXG4gICAgcHVibGljIGFic3RyYWN0IGFkZENhbGxCYWNrT25NeURpYWxvZygpOiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTWVzc2FnZShtZXNzYWdlSWQgOiBzdHJpbmcgfCBudWxsKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChtZXNzYWdlSWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAkKCcubWVzc2FnZSAuY2xvc2UnKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcubWVzc2FnZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24oJ2ZhZGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKG1lc3NhZ2VJZClcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLm1lc3NhZ2UnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbignZmFkZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuaW1wb3J0IGNNeVVJX01haW5UYWJfY3JlYXRlIGZyb20gJy4vY015VUlfTWFpblRhYl9jcmVhdGUnO1xyXG5pbXBvcnQgY015VUlfTWFpblRhYl9ham91dCBmcm9tICcuL2NNeVVJX01haW5UYWJfYWpvdXQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNNeVVJX01haW5UYWIgZXh0ZW5kcyBjTXlVSSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFRhYlNhaXNpZTogc3RyaW5nID0gJ3RhYi1zYWlzaWUnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlOiBzdHJpbmcgPSAnaWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlJztcclxuICAgIHByaXZhdGUgX2NyZWF0aW9uVUk6IGNNeVVJX01haW5UYWJfY3JlYXRlO1xyXG4gICAgcHJpdmF0ZSBfYWpvdXRVSTogY015VUlfTWFpblRhYl9ham91dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIgKCdNYWluVGFiJyk7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRpb25VSSA9IG5ldyBjTXlVSV9NYWluVGFiX2NyZWF0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2Fqb3V0VUkgPSBuZXcgY015VUlfTWFpblRhYl9ham91dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWN0aXZlciBsZXMgc2VtZW50aWNVSSBkdSBkaWFsb2dcclxuICAgICAgICAkKCcudWkuYWNjb3JkaW9uJykuYWNjb3JkaW9uKCk7XHJcbiAgICAgICAgJCgnLnRhYnVsYXIubWVudSAuaXRlbScpLnRhYigpO1xyXG5cclxuICAgICAgICBsZXQgbWU6IGNNeVVJX01haW5UYWIgPSB0aGlzO1xyXG4gICAgICAgIG1lLl9jcmVhdGlvblVJLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG4gICAgICAgIG1lLl9ham91dFVJLmFkZENhbGxCYWNrT25NeURpYWxvZygpO1xyXG5cclxuICAgICAgICAvLyBwcm9wYWdhdGlvbiBkZSBsJ2V2ZW5lbWVudCBkZSBtaXNlICBham91ciBkZSAnaWQgZCdleHBlcmllbmNlXHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlfWApLm9uICgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbWUuX2Fqb3V0VUkuVXBkYXRlTXlEaWFsb2cobWUuX2N0cmwubGFzdEV4cCwgbWUuX2N0cmwuaUxhc3RFeHApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGV4cGVyaWVuY2VDcmVhdGlvbkFjY29yZGVvbkluZm86IHN0cmluZyA9IHRoaXMuZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mbygpO1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbzogc3RyaW5nID0gdGhpcy5leHBlcmllbmNlQ29uc3VsdGF0aW9uSW5mbygpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBmbHVpZCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIHRvcCBhdHRhY2hlZCB0YWJ1bGFyIG1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3RpdmUgaXRlbVwiIGRhdGEtdGFiPVwiJHt0aGlzLl9pZFRhYlNhaXNpZX1cIiBpZD1cIiR7dGhpcy5faWRUYWJTYWlzaWV9XCI+U2Fpc2llIEV4cGVyaWVuY2U8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgZGF0YS10YWI9XCJ0YWItY29uc3VsdGF0aW9uXCI+Q29uc3VsdGF0aW9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgYm90dG9tIGF0dGFjaGVkIGFjdGl2ZSB0YWIgc2VnbWVudFwiIGRhdGEtdGFiPVwiJHt0aGlzLl9pZFRhYlNhaXNpZX1cIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gVGFiIENvbnRlbnQgIS0tPlxyXG4gICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQ3JlYXRpb25BY2NvcmRlb25JbmZvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGJvdHRvbSBhdHRhY2hlZCB0YWIgc2VnbWVudFwiIGRhdGEtdGFiPVwidGFiLWNvbnN1bHRhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBUYWIgQ29udGVudCAhLS0+XHJcbiAgICAgICAgICAgICAgICAke2V4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiJHt0aGlzLl9pZFJlc3VsdGF0REJ9XCI+PC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXhwZXJpZW5jZUNyZWF0aW9uQWNjb3JkZW9uSW5mbygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBleHBlcmllbmNlQ3JlYXRpb25JbmZvOiBzdHJpbmcgPSB0aGlzLl9jcmVhdGlvblVJLmRyYXcoKTtcclxuICAgICAgICBsZXQgZXhwZXJpZW5jZUFqb3V0SW5mbzogc3RyaW5nID0gdGhpcy5fYWpvdXRVSS5kcmF3KCk7XHJcblxyXG4gICAgICAgIGxldCByZXRvdXIgOiBzdHJpbmc7XHJcbiAgICAgICAgcmV0b3VyID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgZ3JpZCBjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBzdHlsZWQgYWNjb3JkaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGQndW5lIGV4cGVyaWVuY2VcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudCBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtleHBlcmllbmNlQ3JlYXRpb25JbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIiBpZD1cIiR7dGhpcy5faWRBY2NvcmRlb25Db21wbGV0ZXJFeHBlcmllbmNlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImRyb3Bkb3duIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXRlciB1bmUgZXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZXhwZXJpZW5jZUFqb3V0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGV4cGVyaWVuY2VDb25zdWx0YXRpb25JbmZvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuICc8ZGl2PkNvbnN1bHRhdGlvbiBkaXY8L2Rpdj4nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBjRXhwZXJpZW5jZSwgaUFsbEluZm9Gb3JVcGRhdGVFeHBlcmllbmNlLCBpQWxsR2Vub3R5cGVJbmZvRm9yVXBkYXRlRXhwZXJpZW5jZSB9IGZyb20gJy4vU2VydmljZXMvREIvY0V4cGVyaWVuY2UnO1xyXG5pbXBvcnQgeyBpTXlIdG1sSW5mbywgY1Rvb2xzIH0gZnJvbSAnLi9pbmZyYS9jVG9vbHMnO1xyXG5pbXBvcnQgY015VUkgZnJvbSAnLi9jTXlVSSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY015VUlfTWFpblRhYl9ham91dCBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkT0tCdXR0b246IHN0cmluZyA9ICdpZE9LQnV0dG9uJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXRFeHA6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkSW5wdXRFeHAnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbkNocm9tbzE6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25DaHJvbW8xJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25DaHJvbW8yOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZFNlbGVjdE9uQ2hyb21vMic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZFNlbGVjdE9uQ2hyb21vMzogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbkNocm9tbzMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRTZWxlY3RPbkNocm9tbzQ6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X2lkU2VsZWN0T25DaHJvbW80JztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25UZXN0VHlwZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPblRlc3RUeXBlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkU2VsZWN0T25NYXJxdWFnZTogc3RyaW5nID0gJ2NNeVVJX01haW5UYWJfYWpvdXRfaWRTZWxlY3RPbk1hcnF1YWdlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkSW5wdXROYkVjaGFudGlsbG9uOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0TmJFY2hhbnRpbGxvbic7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pZElucHV0U0dlbmVyYWw6IHN0cmluZyA9ICdjTXlVSV9NYWluVGFiX2Fqb3V0X19pZElucHV0U0dlbmVyYWwnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRJbnB1dFNDb21wYXJhdGlmOiBzdHJpbmcgPSAnY015VUlfTWFpblRhYl9ham91dF9pZElucHV0U0NvbXBhcmF0aWYnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbmJHZW5vdHlwZSA9IDQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgLy8gYWN0aXZlciBsZXMgc2VtZW50aWNVSSBkdSBkaWFsb2dcclxuXHJcbiAgICAgICAgLy8gY2hvaXNpciBsYSB0YWIgcGFyIGRlZmF1dFxyXG4gICAgICAgIC8vICQoJy51aSAuaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAkKGAjJHt0aGlzLl9pZFRhYlNhaXNpZX1gKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9ham91dCA9IHRoaXM7XHJcbiAgICAgICAgJChgIyR7bWUuX2lkT0tCdXR0b259YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxJbmZvc0Zyb21QYWdlOiBpQWxsSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5jcmVhdGVfaUFsbEluZm9Gb3JVcGRhdGVFeHBlcmllbmNlKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuRXhwSWQgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRJbnB1dEV4cH1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5NYXJxdWFnZSA9IDxzdHJpbmc+ICQoYCMke21lLl9pZFNlbGVjdE9uTWFycXVhZ2V9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuTmJHZW5vdHlwZSA9IG1lLl9uYkdlbm90eXBlO1xyXG4gICAgICAgICAgICBhbGxJbmZvc0Zyb21QYWdlLlNDb21wYXJhdGlmID0gPG51bWJlcj4gJChgIyR7bWUuX2lkSW5wdXRTQ29tcGFyYXRpZn1gKS52YWwoKTtcclxuICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5TR2VuZXJhbCA9IDxudW1iZXI+ICQoYCMke21lLl9pZElucHV0U0dlbmVyYWx9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGFsbEluZm9zRnJvbVBhZ2UuVHlwZVRlc3QgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uVGVzdFR5cGV9YCkudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lLl9uYkdlbm90eXBlOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbGxJbmZvc0Zyb21HZW5vdHlwZTogaUFsbEdlbm90eXBlSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2UgPSBjRXhwZXJpZW5jZS5jcmVhdGVfaUFsbEdlbm90eXBlSW5mb0ZvclVwZGF0ZUV4cGVyaWVuY2UoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLkNocm9tbzEgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uQ2hyb21vMX1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tR2Vub3R5cGUuQ2hyb21vMiA9IDxzdHJpbmc+JChgIyR7bWUuX2lkU2VsZWN0T25DaHJvbW8yfV8ke2l9YCkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBhbGxJbmZvc0Zyb21HZW5vdHlwZS5DaHJvbW8zID0gPHN0cmluZz4kKGAjJHttZS5faWRTZWxlY3RPbkNocm9tbzN9XyR7aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGFsbEluZm9zRnJvbUdlbm90eXBlLkNocm9tbzQgPSA8c3RyaW5nPiQoYCMke21lLl9pZFNlbGVjdE9uQ2hyb21vNH1fJHtpfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgYWxsSW5mb3NGcm9tUGFnZS5HZW5vdHlwZS5wdXNoKGFsbEluZm9zRnJvbUdlbm90eXBlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGlkID0gY0V4cGVyaWVuY2UudXBkYXRlREJFeHBlcmllbmNlKGFsbEluZm9zRnJvbVBhZ2UpO1xyXG4gICAgICAgICAgICBjRXhwZXJpZW5jZS5kdW1wRnJvbURCKGlkLCBtZS5faWRSZXN1bHRhdERCKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFVwZGF0ZU15RGlhbG9nKGxhc3RFeHA6IHN0cmluZywgaWxhc3RFeHA6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB4OiBzdHJpbmcgPSBsYXN0RXhwICsgJyBbZGI6ICcgKyBpbGFzdEV4cC50b1N0cmluZyAoKSArICddJztcclxuICAgICAgICAkKGAjJHt0aGlzLl9pZElucHV0RXhwfWApLnZhbCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyAoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgcmV0b3VyIDogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0IG5iTGlnbmUgPSB0aGlzLl9uYkdlbm90eXBlO1xyXG4gICAgICAgIGxldCB4OiBzdHJpbmcgPSB0aGlzLl9jdHJsLmxhc3RFeHAgKyAnIFtkYjogJyArIHRoaXMuX2N0cmwuaUxhc3RFeHAudG9TdHJpbmcoKSArICddJztcclxuXHJcbiAgICAgICAgbGV0IGluZm9zRm9ySFRNTDogaU15SHRtbEluZm87XHJcbiAgICAgICAgbGV0IHNlbGVjdENocm9tbzEgOiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IHNlbGVjdENocm9tbzI6IHN0cmluZ1tdID0gWycnLCAnJywgJycsICcnXTtcclxuICAgICAgICBsZXQgc2VsZWN0Q2hyb21vMzogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RDaHJvbW80OiBzdHJpbmdbXSA9IFsnJywgJycsICcnLCAnJ107XHJcbiAgICAgICAgbGV0IElucHV0TmJFY2hhbnRpbGxvbjogc3RyaW5nW10gPSBbJycsICcnLCAnJywgJyddO1xyXG4gICAgICAgIGxldCBzZWxlY3RUeXBlVGVzdCA6IHN0cmluZztcclxuICAgICAgICBsZXQgc2VsZWN0TWFycXVhZ2UgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IElucHV0U0dlbmVyYWwgOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IElucHV0U0NvbXBhcmF0aWYgOiBzdHJpbmc7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJMaWduZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJyA6IGAke3RoaXMuX2lkU2VsZWN0T25DaHJvbW8xfV8ke2l9YH07XHJcbiAgICAgICAgICAgIHNlbGVjdENocm9tbzFbaV0gPSBjVG9vbHMuQnVpbGRTZWxlY3RGcm9tVGFiKGNFeHBlcmllbmNlLmdldEFsbENocm9tbzEoKSwgaW5mb3NGb3JIVE1MKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uQ2hyb21vMn1fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Q2hyb21vMltpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsQ2hyb21vMigpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uQ2hyb21vM31fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Q2hyb21vM1tpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsQ2hyb21vMygpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uQ2hyb21vNH1fJHtpfWAgfTtcclxuICAgICAgICAgICAgc2VsZWN0Q2hyb21vNFtpXSA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsQ2hyb21vNCgpLCBpbmZvc0ZvckhUTUwpO1xyXG5cclxuICAgICAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEludCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkSW5wdXROYkVjaGFudGlsbG9ufV8ke2l9YCB9O1xyXG4gICAgICAgICAgICBJbnB1dE5iRWNoYW50aWxsb25baV0gPSBjVG9vbHMuQnVpbGRJbnB1dEludCgnMScsIGluZm9zRm9ySFRNTCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215SW5wdXRGbG9hdCcsICd0eXBlJzogJ251bWJlcicsICdpZCc6IGAke3RoaXMuX2lkSW5wdXRTR2VuZXJhbH1gLCAncGxhY2Vob2xkZXInOiAnMS43OWUtMTEnIH07XHJcbiAgICAgICAgSW5wdXRTR2VuZXJhbCA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlJbnB1dEZsb2F0JywgJ3R5cGUnOiAnbnVtYmVyJywgJ2lkJzogYCR7dGhpcy5faWRJbnB1dFNDb21wYXJhdGlmfWAsICdwbGFjZWhvbGRlcic6ICcxLjc5ZS0xMScgIH07XHJcbiAgICAgICAgSW5wdXRTQ29tcGFyYXRpZiA9IGNUb29scy5CdWlsZElucHV0SW50KCcxJywgaW5mb3NGb3JIVE1MKTtcclxuXHJcblxyXG4gICAgICAgIGluZm9zRm9ySFRNTCA9IHsgJ2NsYXNzJzogJ215U2VsZWN0JywgJ2lkJzogYCR7dGhpcy5faWRTZWxlY3RPblRlc3RUeXBlfWAgfTtcclxuICAgICAgICBzZWxlY3RUeXBlVGVzdCA9IGNUb29scy5CdWlsZFNlbGVjdEZyb21UYWIoY0V4cGVyaWVuY2UuZ2V0QWxsVGVzdFR5cGUoKSwgaW5mb3NGb3JIVE1MKTtcclxuXHJcbiAgICAgICAgaW5mb3NGb3JIVE1MID0geyAnY2xhc3MnOiAnbXlTZWxlY3QnLCAnaWQnOiBgJHt0aGlzLl9pZFNlbGVjdE9uTWFycXVhZ2V9YCB9O1xyXG4gICAgICAgIHNlbGVjdE1hcnF1YWdlID0gY1Rvb2xzLkJ1aWxkU2VsZWN0RnJvbVRhYihjRXhwZXJpZW5jZS5nZXRBbGxNYXJxdWFnZSgpLCBpbmZvc0ZvckhUTUwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldG91ciA9IGBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1aSBsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlIElkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3h9XCIgcGxhY2Vob2xkZXI9XCJbbGV0dHJlXVtjaGlmZnJlXS1bbGV0dHJlXVtjaGlmZnJlXVwiIGlkPVwiJHt0aGlzLl9pZElucHV0RXhwfVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidWkgY2VsbGVkIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+R2Vub3R5cGU8L3RoPjx0aD5DaHJvbW9zb21lIDE8L3RoPiA8dGg+Q2hyb21vc29tZSAyPC90aD4gPHRoPkNocm9tb3NvbWUgMzwvdGg+PHRoPkNocm9tb3NvbWUgNDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmIgRWNoYW50aWxsb248L3RoPjx0aD5NYXJxdWFnZTwvdGg+PHRoPlMgZ2VuZXJhbDwvdGg+PHRoPlMgY29tcGFyYXRpZjwvdGg+PHRoPlR5cGUgdGVzdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+YDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5iTGlnbmU7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkcgJHtpKzF9PC90ZD48dGQ+JHtzZWxlY3RDaHJvbW8xW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Q2hyb21vMltpXX08L3RkPjx0ZD4ke3NlbGVjdENocm9tbzNbaV19PC90ZD48dGQ+JHtzZWxlY3RDaHJvbW80W2ldfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHtJbnB1dE5iRWNoYW50aWxsb25baV19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7c2VsZWN0TWFycXVhZ2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCByb3dzcGFuPVwiJHtuYkxpZ25lfVwiPiR7SW5wdXRTR2VuZXJhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHJvd3NwYW49XCIke25iTGlnbmV9XCI+JHtJbnB1dFNDb21wYXJhdGlmfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgcm93c3Bhbj1cIiR7bmJMaWduZX1cIj4ke3NlbGVjdFR5cGVUZXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0b3VyICs9IGBcclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5HICR7aSsxfTwvdGQ+PHRkPiR7c2VsZWN0Q2hyb21vMVtpXX08L3RkPjx0ZD4ke3NlbGVjdENocm9tbzJbaV19PC90ZD48dGQ+JHtzZWxlY3RDaHJvbW8zW2ldfTwvdGQ+PHRkPiR7c2VsZWN0Q2hyb21vNFtpXX08L3RkPjx0ZD4ke0lucHV0TmJFY2hhbnRpbGxvbltpXX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYFxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHBpbmtcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCIke3RoaXMuX2lkT0tCdXR0b259XCI+T0sgITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGNFeHBlcmllbmNlIH0gZnJvbSAnLi9TZXJ2aWNlcy9EQi9jRXhwZXJpZW5jZSc7XHJcbmltcG9ydCBjTXlVSSBmcm9tICcuL2NNeVVJJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjTXlVSV9NYWluVGFiX2NyZWF0ZSBleHRlbmRzIGNNeVVJIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX0RlZmF1bHRQZXJzb25uZU5vbTogc3RyaW5nID0gJ0ZhZ2VzJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX0RlZmF1bHRQZXJzb25uZU5vbUluaXRpYWxlOiBzdHJpbmcgPSB0aGlzLl9EZWZhdWx0UGVyc29ubmVOb20uY2hhckF0KDApO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRPS0J1dHRvbjogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfT0tCdXR0b24nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWREYXRlRXhwOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9EYXRlRXhwJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkUXVpOiBzdHJpbmcgPSAnU2Fpc2llRXhwZXJpZW5jZV9RdWknO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRGaWxlczogc3RyaW5nID0gJ1NhaXNpZUV4cGVyaWVuY2VfRmlsZXMnO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWREaXZGb3JNZXNzYWdlSW5mbzogc3RyaW5nID0gJ01haW5UYWJfRGl2Rm9yRm9ybV9JbmZvJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkTWVzc2FnZUluZm86IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fTWVzc2FnZUlEJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZU5vbVByZWZpeGU6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fRXhwZXJpZW5jZUFzTGV0dHJlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZU51bWVybzogc3RyaW5nID0gJ01haW5UYWJfVUlfSW5mb19pZEV4cGVyaWVuY2VOdW1lcm8nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaWRFeHBlcmllbmNlRXhwZXJpZW5jZXR5cGU6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9fX2lkRXhwZXJpZW5jZUV4cGVyaWVuY2V0eXBlJztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2lkRXhwZXJpZW5jZUNsZWY6IHN0cmluZyA9ICdNYWluVGFiX1VJX0luZm9faWRFeHBlcmllbmNlQ2xlZic7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfTXlfTWVzc2FnZV9DbGFzc2UgOiBzdHJpbmcgPSAnQ2xhc3NlRGVzTWVzc2FnZXNJbmZvJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyICgnTWFpblRhYicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRDYWxsQmFja09uTXlEaWFsb2coKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Zvcm1Db250ZW51KCk7XHJcbiAgICAgICAgdGhpcy5saWVuRXhwcmllbmNlSWRfTm9tTWFuaXAoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgbGllbkV4cHJpZW5jZUlkX05vbU1hbmlwKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtZTogY015VUlfTWFpblRhYl9jcmVhdGUgPSB0aGlzO1xyXG4gICAgICAgICQoYCMke3RoaXMuX2lkUXVpfWApLm9uICgnY2hhbmdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IHN0cmluZyA9IDxzdHJpbmc+ICQoYCMke21lLl9pZFF1aX1gKS52YWwoKTtcclxuICAgICAgICAgICAgbGV0IHZhbEVudGV0ZSA9IHZhbC5jaGFyQXQoMCk7XHJcbiAgICAgICAgICAgICQoYCMke21lLl9pZEV4cGVyaWVuY2VOb21QcmVmaXhlfWApLnZhbCh2YWxFbnRldGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gQ2FsbGJhY2sgZHUgT0tcclxuICAgIC8vICAgICAgMS4gY2hlY2sgZHUgY29udGVudSBkdSBmb3JtdWxhaXJlXHJcbiAgICAvLyAgICAgIDIuIGVudm9pZSBlbiBEQiBzaSBPS1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwcml2YXRlIGNoZWNrRm9ybUNvbnRlbnUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1lOiBjTXlVSV9NYWluVGFiX2NyZWF0ZSA9IHRoaXM7XHJcbiAgICAgICAgJChgIyR7dGhpcy5faWRPS0J1dHRvbn1gKS5vbiAoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXMgMyBjaGFtcHMgYSBjb250cm9sZXJcclxuICAgICAgICAgICAgbGV0IGRhdGUgOiBzdHJpbmcgPSA8c3RyaW5nPiAkKGAjJHttZS5faWREYXRlRXhwfWApLnZhbCgpO1xyXG4gICAgICAgICAgICBsZXQgcXVpOiBzdHJpbmcgPSA8c3RyaW5nPiAkKGAjJHttZS5faWRRdWl9YCkudmFsKCk7XHJcbiAgICAgICAgICAgIGxldCBmaWxlczogRmlsZUxpc3QgPSAkKGAjJHttZS5faWRGaWxlc31gKS5wcm9wKCdmaWxlcycpO1xyXG5cclxuICAgICAgICAgICAgLy8gZXJydXJzIHNpIDEgbWFucXVlXHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBvbkVycm9yTWVzc2FnZTogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1aSBuZWdhdGl2ZSBtZXNzYWdlICR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfVwiPjxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5gO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBiIGRlIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBJbCBmYXV0IGNob2lzaXIgdW5lIGRhdGUgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZmlsZXMubGVuZ3RoIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgb25FcnJvck1lc3NhZ2UgKz0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IElsIGZhdXQgY2hvaXNpciBhdSBtb2lucyB1bmUgaW1hZ2UgPC9wPmA7XHJcbiAgICAgICAgICAgICAgICBvbkVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvbkVycm9yTWVzc2FnZSArPSAnPC9kaXY+JztcclxuXHJcbiAgICAgICAgICAgIC8vIGFmZmljaGUgZGUgbCdlcnJldXJcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLmFwcGVuZChvbkVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAkKGAjJHttZS5faWREaXZGb3JNZXNzYWdlSW5mb31gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgLiR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfWApLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnZvaWUgZW4gREJcclxuICAgICAgICAgICAgICAgIGxldCBleHBlcmllbmNlSWQgOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlTm9tUHJlZml4ZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlTnVtZXJvfWApLnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwZXJpZW5jZUlkICs9ICctJyArICQoYCMke21lLl9pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1gKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIGV4cGVyaWVuY2VJZCArPSAkKGAjJHttZS5faWRFeHBlcmllbmNlQ2xlZn1gKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaWQ6IG51bWJlciA9IGNFeHBlcmllbmNlLmNyZWF0ZURCRXhwZXJpZW5jZShleHBlcmllbmNlSWQsIGRhdGUsIHF1aSwgZmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNFeHBlcmllbmNlLnVwbG9hZEZpbGVzKGlkLCBmaWxlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvbk9LTWVzc2FnZTogc3RyaW5nID0gYDxkaXYgY2xhc3M9XCJ1aSBwb3NpdGl2ZSBtZXNzYWdlICR7bWUuX015X01lc3NhZ2VfQ2xhc3NlfVwiPjxpIGNsYXNzPVwiY2xvc2UgaWNvblwiPjwvaT5gO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uT0tNZXNzYWdlICs9IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0aW9uIGV4cGVyaWVuY2UgZW4gREIgLS0gT0tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gJHtleHBlcmllbmNlSWR9LCAke2RhdGV9LCAke3F1aX0sICR7ZmlsZXN9IDwvcD5gO1xyXG4gICAgICAgICAgICAgICAgICAgIG9uT0tNZXNzYWdlICs9ICc8L2Rpdj4nO1xyXG4gICAgICAgICAgICAgICAgICAgICQoYCMke21lLl9pZERpdkZvck1lc3NhZ2VJbmZvfWApLmFwcGVuZChvbk9LTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChgIyR7bWUuX2lkRGl2Rm9yTWVzc2FnZUluZm99YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGAuJHttZS5fTXlfTWVzc2FnZV9DbGFzc2V9YCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWUuX2N0cmwuc2V0TGFzdEV4cChleHBlcmllbmNlSWQsIGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0ICgnSW1wb3NzaWJsZSBkZSBtZXR0cmUgZW4gYmFzZSBjZXR0ZSBkZW1hbmRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uICgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ICgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbGxQZXJzb25uZXNPcHRpb246IHN0cmluZyA9ICcnO1xyXG4gICAgICAgIGxldCBhbGxQZXJzb25uZXM6IHN0cmluZ1tdID0gY0V4cGVyaWVuY2UuZ2V0QWxsUGVyc29uZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUGVyc29ubmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFBlcnNvbm5lc09wdGlvbiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7YWxsUGVyc29ubmVzW2ldfVwiPiR7YWxsUGVyc29ubmVzW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgQWxsRXhwZXJpZW5jZUluaXRpYWxlT3B0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgICAgICBsZXQgQWxsRXhwZXJpZW5jZUluaXRpYWxlOiBzdHJpbmdbXSA9IGNFeHBlcmllbmNlLmdldEFsbEV4cGVyaWVuY2VJbml0aWFsZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQWxsRXhwZXJpZW5jZUluaXRpYWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIEFsbEV4cGVyaWVuY2VJbml0aWFsZU9wdGlvbiArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7QWxsRXhwZXJpZW5jZUluaXRpYWxlW2ldfVwiPiR7QWxsRXhwZXJpZW5jZUluaXRpYWxlW2ldfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHJldG91ciA6IHN0cmluZyA9IGBcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJ1aSBmb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RXhwZXJpZW5jZSBJZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGxlZnQgbGFiZWxlZCBpbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tSW5pdGlhbGV9XCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZU5vbVByZWZpeGV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZU51bWVyb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IHgtbGFyZ2U7IG1hcmdpbjphdXRvO1wiPi08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ1aSBjb21wYWN0IHNlbGVjdGlvbiBkcm9wZG93blwiIGlkPVwiJHt0aGlzLl9pZEV4cGVyaWVuY2VFeHBlcmllbmNldHlwZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQgdmFsdWU9XCJBXCI+QTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtBbGxFeHBlcmllbmNlSW5pdGlhbGVPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXV0cmVcIj5BdXRyZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgaWQ9XCIke3RoaXMuX2lkRXhwZXJpZW5jZUNsZWZ9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGF0ZSBkZSBsJ2V4cGVyaWVuY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlLWV4cFwiIHZhbHVlPVwiMjAyMC0xMC0wMVwiIG1pbj1cIjIwMjAtMTAtMDFcIiBpZD1cIiR7dGhpcy5faWREYXRlRXhwfVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWkgYSByZWFsaXNlIGwnZXhwZXJpZW5jZT88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ1aSBjb21wYWN0IHNlbGVjdGlvbiBkcm9wZG93blwiIGlkPVwiJHt0aGlzLl9pZFF1aX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tfVwiPiR7dGhpcy5fRGVmYXVsdFBlcnNvbm5lTm9tfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2FsbFBlcnNvbm5lc09wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImF1dHJlXCI+QXV0cmVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TGllbiB2ZXJzIGxlcyBpbWFnZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJleHBJbWFnZVwiIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiIG11bHRpcGxlIGlkPVwiJHt0aGlzLl9pZEZpbGVzfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIiR7dGhpcy5faWREaXZGb3JNZXNzYWdlSW5mb31cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidWkgYnV0dG9uIHBpbmtcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCIke3RoaXMuX2lkT0tCdXR0b259XCI+T0sgITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXVpZCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFcnpldWd0IGVpbmUgVVVJRCBuYWNoIFJGQyA0MTIyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yICgpIHt9XHJcblxyXG4gICAgcHVibGljIHV1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoY2hhcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDsgLy8gTmFjaGtvbW1hc3RlbGxlbiBhYnNjaG5laWRlblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBjaGFyID09PSAneCcgPyByYW5kb20gOiAocmFuZG9tICUgNCArIDgpOyAvLyBCZWkgeCBSYW5kb20gMC0xNSAoMC1GKSwgYmVpIHkgUmFuZG9tIDAtMyArIDggPSA4LTExICg4LWIpIGdlbcOkc3MgUkZDIDQxMjJcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDE2KTsgLy8gSGV4YWRlemltYWxlcyBaZWljaGVuIHp1csO8Y2tnZWJlblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIGNDb250cm9sZXIge1xyXG4gICAgcHJpdmF0ZSBfbGFzdEV4cDogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIF9pTGFzdEV4cDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9zaW5nbGV0b246IGNDb250cm9sZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBjQ29udHJvbGVyLl9zaW5nbGV0b24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSAnJztcclxuICAgICAgICB0aGlzLl9pTGFzdEV4cCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnRhbmNlKCkgOiBjQ29udHJvbGVyIHtcclxuICAgICAgICBpZiAoY0NvbnRyb2xlci5fc2luZ2xldG9uID09IG51bGwpXHJcbiAgICAgICAgICAgIGNDb250cm9sZXIuX3NpbmdsZXRvbiA9IG5ldyBjQ29udHJvbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGNDb250cm9sZXIuX3NpbmdsZXRvbjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFzdEV4cCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlMYXN0RXhwKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lMYXN0RXhwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgc2V0IGxhc3RFeHAobGFzdEV4cDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbGFzdEV4cCA9IGxhc3RFeHA7XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBzZXRMYXN0RXhwKGxhc3RFeHA6IHN0cmluZywgaUxhc3RFeHA6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2xhc3RFeHAgPSBsYXN0RXhwO1xyXG4gICAgICAgIHRoaXMuX2lMYXN0RXhwID0gaUxhc3RFeHA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGVMb2dnZXJMZXZlbCB9IGZyb20gJy4vY0xvZ2dlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjRW52dCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBfZGVidWdMZXZlbCA6IGVMb2dnZXJMZXZlbCA9IGVMb2dnZXJMZXZlbC5EZWJ1ZztcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9hamF4V1NVUkw6IHN0cmluZyA9ICdodHRwOi8vbG9jYWxob3N0Ojg4L25hbmllL3NlcnZlci9XUy9CUklXUy5waHAnO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0RGVidWdMZXZlbCgpOiBlTG9nZ2VyTGV2ZWwge1xyXG4gICAgICAgIHJldHVybiBjRW52dC5fZGVidWdMZXZlbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEFqYXhVUkxXUygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjRW52dC5fYWpheFdTVVJMO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiICAgIGV4cG9ydCBlbnVtIGVMb2dnZXJMZXZlbCB7XHJcbiAgICAgICAgQWxsICAgICAgICAgPSAwLFxyXG4gICAgICAgIERlYnVnICAgICAgID0gNTAsXHJcbiAgICAgICAgV2FybmluZyAgICAgPSAxMDAsXHJcbiAgICAgICAgRXJyb3IgICAgICAgPSAxNTAsXHJcbiAgICAgICAgRmF0YWwgICAgICAgPSAyMDBcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgY0xvZ2dlciB7XHJcbiAgICAgICAgcHJpdmF0ZSBfbGV2ZWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yIChsZXZlbDogZUxvZ2dlckxldmVsLCBpZDogc3RyaW5nID0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGV2ZWwgPSBsZXZlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBBbGwgKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5BbGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIERlYnVnIChtc2c6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2cobXNnLCBlTG9nZ2VyTGV2ZWwuRmF0YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIFdhcm5pbmcgKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5GYXRhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgRXJyb3IgKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5GYXRhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIEZhdGFsKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZyhtc2csIGVMb2dnZXJMZXZlbC5GYXRhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIF9sb2cgKG1zZzogc3RyaW5nLCBsZXZlbDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgICAgIGlmIChsZXZlbCA+IHRoaXMuX2xldmVsKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKG1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iLCJleHBvcnQgaW50ZXJmYWNlIGlNeUh0bWxJbmZvIHtcclxuICAgIGNsYXNzPzogc3RyaW5nO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICB0eXBlPzogc3RyaW5nO1xyXG4gICAgaW5kaWNlc2VsZWN0ZWQ/OiBudW1iZXI7XHJcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIGNUb29scyB7XHJcbiAgICBzdGF0aWMgQnVpbGRTZWxlY3RGcm9tVGFiKHZhbHM6IHN0cmluZ1tdLCBpbmZvOiBpTXlIdG1sSW5mbykgOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgPSAnJztcclxuICAgICAgICBsZXQgYWxsS2V5cyA6IHN0cmluZyBbXSA9IE9iamVjdC5rZXlzKGluZm8pO1xyXG5cclxuICAgICAgICByZXRvdXIgPSBgPHNlbGVjdCBgO1xyXG4gICAgICAgIGlmIChpbmZvWydjbGFzcyddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBjbGFzcz1cIiR7aW5mb1snY2xhc3MnXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5mb1snaWQnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldG91ciArPSBgaWQ9XCIke2luZm9bJ2lkJ119XCIgYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0b3VyICs9IGA+YDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA6IG51bWJlciA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgoaW5mb1snaW5kaWNlc2VsZWN0ZWQnXSAhPT0gdW5kZWZpbmVkKSAmJiAoaSA9PT0gaW5mb1snaW5kaWNlc2VsZWN0ZWQnXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIiR7dmFsc1tpXX1cIj4ke3ZhbHNbaV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldG91ciArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7dmFsc1tpXX1cIj4ke3ZhbHNbaV19PC9vcHRpb24+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYDwvc2VsZWN0PmA7XHJcbiAgICAgICAgcmV0dXJuIHJldG91cjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgQnVpbGRJbnB1dEludCh2YWw6IHN0cmluZywgaW5mbzogaU15SHRtbEluZm8pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXRvdXIgPSBgPGlucHV0IHR5cGU9XCIke2luZm9bJ3R5cGUnXX1cIiBuYW1lPVwiJHtpbmZvWydpZCddfVwiIGlkPVwiJHtpbmZvWydpZCddfVwiIHZhbHVlPVwiJHt2YWx9XCIgc3RlcD1cImFueVwiIGA7XHJcbiAgICAgICAgaWYgKGluZm9bJ2NsYXNzJ10gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXRvdXIgKz0gYGNsYXNzPVwiJHtpbmZvWydjbGFzcyddfVwiIGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmZvWydwbGFjZWhvbGRlciddICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0b3VyICs9IGBwbGFjZWhvbGRlcj1cIiR7aW5mb1sncGxhY2Vob2xkZXInXX1cIiBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXRvdXIgKz0gYC8+YDtcclxuICAgICAgICByZXR1cm4gcmV0b3VyO1xyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==