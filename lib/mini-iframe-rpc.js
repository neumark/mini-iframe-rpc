(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("mini-iframe-rpc", [], factory);
	else if(typeof exports === 'object')
		exports["mini-iframe-rpc"] = factory();
	else
		root["mini-iframe-rpc"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/errors/evaluation-error.ts":
/*!****************************************!*\
  !*** ./src/errors/evaluation-error.ts ***!
  \****************************************/
/*! exports provided: EvaluationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return EvaluationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var EvaluationError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EvaluationError, _super);
    function EvaluationError(error) {
        var _this = _super.call(this, error.cause) || this;
        _this.name = EvaluationError.name; // stack traces display correctly now         
        return _this;
    }
    return EvaluationError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/index.ts":
/*!*****************************!*\
  !*** ./src/errors/index.ts ***!
  \*****************************/
/*! exports provided: MiniIframeError, ProcedureNotFoundError, EvaluationError, TimeoutError, isError, SendMessageError, RemoteError, InvocationError, serializeRemoteError, deserializeRemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeRemoteError", function() { return serializeRemoteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeRemoteError", function() { return deserializeRemoteError; });
/* harmony import */ var _evaluation_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evaluation-error */ "./src/errors/evaluation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EvaluationError", function() { return _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"]; });

/* harmony import */ var _invocation_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invocation-error */ "./src/errors/invocation-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvocationError", function() { return _invocation_error__WEBPACK_IMPORTED_MODULE_1__["InvocationError"]; });

/* harmony import */ var _is_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-error */ "./src/errors/is-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _is_error__WEBPACK_IMPORTED_MODULE_2__["isError"]; });

/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return _mini_iframe_error__WEBPACK_IMPORTED_MODULE_3__["MiniIframeError"]; });

/* harmony import */ var _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./procedure-not-found-error */ "./src/errors/procedure-not-found-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__["ProcedureNotFoundError"]; });

/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"]; });

/* harmony import */ var _send_message_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./send-message-error */ "./src/errors/send-message-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return _send_message_error__WEBPACK_IMPORTED_MODULE_6__["SendMessageError"]; });

/* harmony import */ var _timeout_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeout-error */ "./src/errors/timeout-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _timeout_error__WEBPACK_IMPORTED_MODULE_7__["TimeoutError"]; });










var remoteErrorClasses = [
    _procedure_not_found_error__WEBPACK_IMPORTED_MODULE_4__["ProcedureNotFoundError"],
    _evaluation_error__WEBPACK_IMPORTED_MODULE_0__["EvaluationError"],
    _send_message_error__WEBPACK_IMPORTED_MODULE_6__["SendMessageError"]
].reduce(function (obj, constr) {
    obj[constr.name] = constr;
    return obj;
}, {});
var serializeRemoteError = function (cause, remoteExceptionName) {
    var convert = function (err) {
        var errJSON = Object(_remote_error__WEBPACK_IMPORTED_MODULE_5__["errorToJSON"])(err);
        if (remoteExceptionName) {
            errJSON.name = remoteExceptionName;
        }
        return errJSON;
    };
    if (cause instanceof _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"]) {
        // if cause is already a remoteError, return as is
        return convert(cause);
    }
    // for both Error and String type causes, create a new RemoteError 
    return convert(new _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"](cause));
};
// tslint:disable-next-line:no-any
var deserializeRemoteError = function (error) {
    var constr = remoteErrorClasses[error.name] || _remote_error__WEBPACK_IMPORTED_MODULE_5__["RemoteError"];
    return new constr(error);
};


/***/ }),

/***/ "./src/errors/invocation-error.ts":
/*!****************************************!*\
  !*** ./src/errors/invocation-error.ts ***!
  \****************************************/
/*! exports provided: InvocationError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvocationError", function() { return InvocationError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _is_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-error */ "./src/errors/is-error.ts");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");



// tslint:disable-next-line:no-any
var makeMessage = function (procedureName, cause, previousRejectReasons) {
    var message = "Error invoking remote procedure '" + procedureName + "'.";
    if (Object(_is_error__WEBPACK_IMPORTED_MODULE_1__["isError"])(cause)) {
        message += " " + cause.name + ": " + cause.message + ".";
    }
    else if (cause) {
        // tslint:disable-next-line:no-unsafe-any
        message += " Reason: " + cause.toString();
    }
    if (previousRejectReasons && previousRejectReasons.length > 0) {
        var plural = previousRejectReasons.length > 1 ? 's' : '';
        message += " " + previousRejectReasons.length + " additional rejection" + plural + " from retried attempt" + plural + ".";
    }
    return message;
};
var InvocationError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InvocationError, _super);
    // tslint:disable-next-line:no-any
    function InvocationError(procedureName, cause, previousRejectReasons) {
        var _this = _super.call(this, makeMessage(procedureName, cause, previousRejectReasons)) || this;
        _this.name = InvocationError.name; // stack traces display correctly now   
        _this.procedureName = procedureName;
        _this.cause = cause;
        _this.previousRejectReasons = previousRejectReasons;
        return _this;
    }
    return InvocationError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_2__["MiniIframeError"]));



/***/ }),

/***/ "./src/errors/is-error.ts":
/*!********************************!*\
  !*** ./src/errors/is-error.ts ***!
  \********************************/
/*! exports provided: isError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
// the wonders of Javascript: Error detection https://stackoverflow.com/a/45496068
// tslint:disable-next-line:no-any
var isError = function (rejectOrError) {
    var isErrorValue = (rejectOrError !== null && rejectOrError !== undefined) &&
        ((rejectOrError instanceof Error) ||
            (rejectOrError instanceof DOMException) ||
            // DataCloneErrors must be identified as such otherwise, we can't even send errors
            // when response cant be serialized! This is required for MS Edge support.
            (rejectOrError.name === 'DataCloneError') ||
            ((rejectOrError.message && typeof rejectOrError.message === 'string') &&
                (rejectOrError.stack && typeof rejectOrError.stack === 'string')));
    return isErrorValue;
};


/***/ }),

/***/ "./src/errors/mini-iframe-error.ts":
/*!*****************************************!*\
  !*** ./src/errors/mini-iframe-error.ts ***!
  \*****************************************/
/*! exports provided: MiniIframeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeError", function() { return MiniIframeError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MiniIframeError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MiniIframeError, _super);
    // tslint:disable-next-line:no-any
    function MiniIframeError(message, state) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message) || this;
        _this.timestamp = +(new Date());
        if (state) {
            Object.assign(_this, state);
        }
        // see: typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html
        // tslint:disable-next-line:no-unsafe-any
        Object.setPrototypeOf(_this, _newTarget.prototype); // restore prototype chain
        _this.name = MiniIframeError.name; // stack traces display correctly now 
        return _this;
    }
    return MiniIframeError;
}(Error));



/***/ }),

/***/ "./src/errors/procedure-not-found-error.ts":
/*!*************************************************!*\
  !*** ./src/errors/procedure-not-found-error.ts ***!
  \*************************************************/
/*! exports provided: ProcedureNotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcedureNotFoundError", function() { return ProcedureNotFoundError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var ProcedureNotFoundError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProcedureNotFoundError, _super);
    function ProcedureNotFoundError(state) {
        var _this = _super.call(this, "Remote procedure '" + state.procedureName + "' not registered in remote RPC instance.") || this;
        _this.procedureName = "unknown";
        if (state.procedureName) {
            _this.procedureName = state.procedureName;
        }
        _this.name = ProcedureNotFoundError.name; // stack traces display correctly now         
        return _this;
    }
    return ProcedureNotFoundError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/remote-error.ts":
/*!************************************!*\
  !*** ./src/errors/remote-error.ts ***!
  \************************************/
/*! exports provided: errorToJSON, RemoteError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorToJSON", function() { return errorToJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteError", function() { return RemoteError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");


function errorToJSON(err) {
    // message, name, stack are not ennumerable, so we must explicitly get them.
    var message = err.message, name = err.name, stack = err.stack;
    return Object.assign({ message: message, stack: stack, name: name }, err);
}
var causeToMessage = function (cause) {
    if (typeof cause === 'string') {
        return cause;
    }
    else {
        return "" + cause.message;
    }
};
var RemoteError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RemoteError, _super);
    function RemoteError(cause) {
        var _this = _super.call(this, causeToMessage(cause)) || this;
        _this.cause = (typeof cause === 'string') ? cause : errorToJSON(cause);
        _this.name = RemoteError.name; // stack traces display correctly now         
        return _this;
    }
    return RemoteError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]));



/***/ }),

/***/ "./src/errors/send-message-error.ts":
/*!******************************************!*\
  !*** ./src/errors/send-message-error.ts ***!
  \******************************************/
/*! exports provided: SendMessageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMessageError", function() { return SendMessageError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _remote_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote-error */ "./src/errors/remote-error.ts");


var SendMessageError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SendMessageError, _super);
    function SendMessageError(error) {
        var _this = _super.call(this, error.cause) || this;
        _this.name = SendMessageError.name; // stack traces display correctly now         
        return _this;
    }
    return SendMessageError;
}(_remote_error__WEBPACK_IMPORTED_MODULE_1__["RemoteError"]));



/***/ }),

/***/ "./src/errors/timeout-error.ts":
/*!*************************************!*\
  !*** ./src/errors/timeout-error.ts ***!
  \*************************************/
/*! exports provided: TimeoutError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mini-iframe-error */ "./src/errors/mini-iframe-error.ts");


var TimeoutError = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimeoutError, _super);
    function TimeoutError(state) {
        var _this = _super.call(this, "Timeout after " + state.timeoutMilliSeconds + " ms.", state) || this;
        _this.timeoutMilliSeconds = 0;
        _this.name = TimeoutError.name; // stack traces display correctly now                 
        return _this;
    }
    return TimeoutError;
}(_mini_iframe_error__WEBPACK_IMPORTED_MODULE_1__["MiniIframeError"]));



/***/ }),

/***/ "./src/mini-iframe-rpc.ts":
/*!********************************!*\
  !*** ./src/mini-iframe-rpc.ts ***!
  \********************************/
/*! exports provided: ResultCache, MiniIframeRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniIframeRPC", function() { return MiniIframeRPC; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/errors/index.ts");
/* harmony import */ var _result_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result-cache */ "./src/result-cache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultCache", function() { return _result_cache__WEBPACK_IMPORTED_MODULE_2__["ResultCache"]; });

/* harmony import */ var _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transport/post-message-transport */ "./src/transport/post-message-transport.ts");
/* tslint:disable no-any no-unsafe-any */



 // so unit tests can access ResponseCache

var RANDOM_BASE = 36;
var CALLID_LENGTH = 8;
var DEFAULT_INVOCATION_OPTIONS = {
    timeout: 100,
    retryLimit: 2,
    retryAllFailures: false
};
var MiniIframeRPC = /** @class */ (function () {
    function MiniIframeRPC(initParameters) {
        var _this = this;
        this.callbacks = {};
        this.registeredProcedures = {};
        this.recv = function (messageBody, messageSource, messageOrigin) {
            _this.internalEventCallback("onReceive", messageBody, messageSource, messageOrigin);
            if ('method' in messageBody) {
                _this.handleRequest(messageBody, messageSource, messageOrigin);
            }
            else {
                _this.handleResponse(messageBody);
            }
        };
        this.config = {
            windowRef: initParameters && initParameters.windowRef || window,
            originWhitelist: initParameters && initParameters.originWhitelist || [],
            defaultInvocationOptions: Object.assign({}, DEFAULT_INVOCATION_OPTIONS, initParameters && initParameters.defaultInvocationOptions || {}),
            eventCallbacks: initParameters && initParameters.eventCallbacks || {},
            resultCacheCapacity: initParameters && typeof initParameters.resultCacheCapacity === 'number' ? initParameters.resultCacheCapacity : _result_cache__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_RESULT_CACHE_CAPACITY"]
        };
        this.resultCache = new _result_cache__WEBPACK_IMPORTED_MODULE_2__["ResultCache"]({
            capacity: this.config.resultCacheCapacity,
            evictionCallback: function (id, result) {
                _this.internalEventCallback("onResultCacheEviction", id, result);
            }
        });
        this.transport = new _transport_post_message_transport__WEBPACK_IMPORTED_MODULE_3__["PostMessageTransport"](this.config.windowRef, this.recv, { 'originWhitelist': this.config.originWhitelist });
    }
    MiniIframeRPC.prototype.register = function (procedureName, implementation) {
        this.internalEventCallback("onRegister", procedureName, implementation);
        if (implementation) {
            this.registeredProcedures[procedureName] = implementation;
        }
        else {
            delete this.registeredProcedures[procedureName];
        }
    };
    MiniIframeRPC.prototype.invoke = function (targetWindow, targetOrigin, method, params, invocationOptions) {
        var options = Object.assign({}, this.config.defaultInvocationOptions, invocationOptions || {});
        var id = this.getNextCallId();
        var requestMessageBody = {
            id: id,
            method: method,
            params: (params || [])
        };
        return this.requestWithRetry(targetWindow, targetOrigin, requestMessageBody, options);
    };
    MiniIframeRPC.prototype.close = function () {
        this.internalEventCallback("onClose");
        this.transport.close();
    };
    MiniIframeRPC.prototype.requestWithRetry = function (targetWindow, targetOrigin, requestMessageBody, options) {
        var _this = this;
        var requestCount = 0;
        var failureCount = 0;
        var finalResolve = function () { return void 0; };
        var finalReject = function () { return void 0; };
        var completed = false;
        var previousRejectReasons = [];
        var isErrorRetriable = function (error) {
            if (options.timeout <= 0 || options.retryLimit < 1) {
                return false;
            }
            return options.retryAllFailures || (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]);
        };
        var makeRequest = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/, this.sendMessage(targetWindow, targetOrigin, requestMessageBody).then(function () { return new Promise(function (resolve, reject) {
                        _this.callbacks[requestMessageBody.id] = { resolve: resolve, reject: reject };
                    }); })];
            });
        }); };
        var handleResolve = function (result) {
            // first successful request immediately resolves the invocation promise
            completed = true;
            finalResolve(result);
        };
        var handleReject = function (reason) {
            failureCount += 1;
            // If request has since been completed, do nothing
            // Retry request or fail permanently if no outstanding requests still in flight
            if (!completed && failureCount === requestCount) {
                if (isErrorRetriable(reason) && requestCount < (options.retryLimit + 1)) {
                    _this.internalEventCallback("onRequestRetry", reason, previousRejectReasons, requestMessageBody);
                    previousRejectReasons.push(reason);
                    makeAttempt();
                    // If error is non-retriable and there are no unanswered requests, give up.
                }
                else {
                    completed = true;
                    finalReject(new _errors__WEBPACK_IMPORTED_MODULE_1__["InvocationError"](requestMessageBody.method, reason, previousRejectReasons));
                }
            }
            // if there are still outstanding requests, wait for them to succeed or fail.
        };
        var makeAttempt = function () {
            requestCount += 1;
            var responsePromise = makeRequest();
            if (options.timeout > 0) {
                responsePromise = _this.timeboxPromise(responsePromise, options.timeout);
            }
            responsePromise.then(handleResolve, handleReject);
        };
        var returnValue = new Promise(function (resolve, reject) {
            finalResolve = resolve;
            finalReject = reject;
        });
        // initial attempt
        makeAttempt();
        return returnValue;
    };
    MiniIframeRPC.prototype.internalEventCallback = function (internalEventCallback) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var cb = this.config.eventCallbacks[internalEventCallback];
        if (cb) {
            cb.apply(this, args);
        }
    };
    MiniIframeRPC.prototype.timeboxPromise = function (originalPromise, timeoutMilliSeconds) {
        var _this = this;
        return Promise.race([
            originalPromise,
            new Promise(function (_resolve, reject) {
                _this.config.windowRef.setTimeout(function () { return reject(new _errors__WEBPACK_IMPORTED_MODULE_1__["TimeoutError"]({ timeoutMilliSeconds: timeoutMilliSeconds })); }, timeoutMilliSeconds);
            })
        ]);
    };
    MiniIframeRPC.prototype.getNextCallId = function () {
        var randomId = null;
        while (!randomId || this.callbacks[randomId]) {
            randomId = "cb" + Math.random().toString(RANDOM_BASE).replace(/[^a-z]+/g, '').substr(0, CALLID_LENGTH);
        }
        return randomId;
    };
    MiniIframeRPC.prototype.sendMessage = function (targetWindow, targetOrigin, messageBody) {
        this.internalEventCallback("onSend", messageBody, targetWindow, targetOrigin);
        return this.transport.send({ targetWindow: targetWindow, targetOrigin: targetOrigin }, messageBody);
    };
    MiniIframeRPC.prototype.isArray = function (arg) {
        // Array.isArray doesn't work in IE8 and doesn't necessarily work cross-window
        // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
    MiniIframeRPC.prototype.unpackParams = function (params) {
        if (this.isArray(params)) {
            return params;
        }
        if (params === undefined) {
            return [];
        }
        return [params];
    };
    MiniIframeRPC.prototype.handleRequest = function (requestMessageBody, messageSource, messageOrigin) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, method, params, responseOrigin, sendError, getResult;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                id = requestMessageBody.id;
                method = requestMessageBody.method;
                params = this.unpackParams(requestMessageBody.params);
                responseOrigin = !messageOrigin || messageOrigin === "null" ? null : messageOrigin;
                sendError = function (rejectOrError, exceptionName) {
                    var sendingError = Object(_errors__WEBPACK_IMPORTED_MODULE_1__["isError"])(rejectOrError);
                    return _this.sendMessage(messageSource, responseOrigin, {
                        id: id,
                        isErrorInstance: sendingError,
                        error: sendingError ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["serializeRemoteError"])(rejectOrError, exceptionName) : rejectOrError
                    });
                };
                getResult = function () {
                    if (_this.resultCache.hasCachedResult(id)) {
                        return _this.resultCache.getCachedResult(id);
                    }
                    var resultPromise = new Promise(function (resolve) {
                        resolve(_this.registeredProcedures[method].apply({ requestMessageBody: requestMessageBody, messageSource: messageSource, messageOrigin: messageOrigin }, params));
                    });
                    _this.resultCache.setCachedResult(id, resultPromise);
                    return resultPromise;
                };
                if (this.registeredProcedures[method]) {
                    getResult()
                        .then(function (result) { return _this.sendMessage(messageSource, responseOrigin, {
                        id: id,
                        result: result
                    }).catch(function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["SendMessageError"].name); }); }, function (error) { return sendError(error, _errors__WEBPACK_IMPORTED_MODULE_1__["EvaluationError"].name); });
                }
                else {
                    sendError(new _errors__WEBPACK_IMPORTED_MODULE_1__["ProcedureNotFoundError"]({ procedureName: method }));
                }
                return [2 /*return*/];
            });
        });
    };
    MiniIframeRPC.prototype.handleResponse = function (messageBody) {
        var callbackFunctions = this.callbacks[messageBody.id];
        if (callbackFunctions) {
            delete this.callbacks[messageBody.id];
            if ('isErrorInstance' in messageBody) {
                var errorObject = messageBody.isErrorInstance ? Object(_errors__WEBPACK_IMPORTED_MODULE_1__["deserializeRemoteError"])(messageBody.error) : messageBody.error;
                callbackFunctions.reject(errorObject);
            }
            else if ('result' in messageBody) {
                callbackFunctions.resolve(messageBody.result);
            }
        }
        else {
            this.internalEventCallback("onUnexpectedResponse", messageBody);
        }
    };
    MiniIframeRPC.VERSION = "d2b5d04";
    return MiniIframeRPC;
}()); // end of class



/***/ }),

/***/ "./src/result-cache.ts":
/*!*****************************!*\
  !*** ./src/result-cache.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_RESULT_CACHE_CAPACITY, ResultCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_RESULT_CACHE_CAPACITY", function() { return DEFAULT_RESULT_CACHE_CAPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultCache", function() { return ResultCache; });
;
var DEFAULT_RESULT_CACHE_CAPACITY = 200;
var DEFAULT_PARAMETERS = {
    capacity: DEFAULT_RESULT_CACHE_CAPACITY,
};
var ResultCache = /** @class */ (function () {
    function ResultCache(config) {
        // tslint:disable-next-line:no-any
        this.ids = [];
        // tslint:disable-next-line:no-any
        this.results = {};
        this.config = Object.assign({}, DEFAULT_PARAMETERS, config || {});
    }
    ResultCache.prototype.hasCachedResult = function (id) {
        return this.results.hasOwnProperty(id);
    };
    ResultCache.prototype.getCachedResult = function (id) {
        return this.results[id];
    };
    // tslint:disable-next-line:no-any
    ResultCache.prototype.setCachedResult = function (id, result) {
        if (this.hasCachedResult(id)) {
            this.ids = this.ids.filter(function (c) { return c !== id; });
        }
        this.ids.unshift(id);
        this.results[id] = result;
        if (this.config.capacity >= 0) {
            this.enforceCapacity();
        }
    };
    ResultCache.prototype.enforceCapacity = function () {
        for (var size = this.ids.length; size > this.config.capacity; size--) {
            var id = this.ids.pop();
            var result = this.results[id];
            delete this.results[id];
            if (this.config.evictionCallback) {
                this.config.evictionCallback(id, result);
            }
        }
    };
    return ResultCache;
}());



/***/ }),

/***/ "./src/transport/post-message-transport.ts":
/*!*************************************************!*\
  !*** ./src/transport/post-message-transport.ts ***!
  \*************************************************/
/*! exports provided: PostMessageTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMessageTransport", function() { return PostMessageTransport; });
var isInternetExplorer = function () { return (
// based on https://stackoverflow.com/questions/24861073/detect-if-any-kind-of-ie-msie/24861307#24861307    
navigator.appName === 'Microsoft Internet Explorer' ||
    !!navigator.userAgent.match(/Trident|MSIE|rv:11/)); };
var POSTMESSAGE_TYPE = "mini-iframe-rpc";
var DEFAULT_CONFIG = {
    // IE needs postmessages to contain strings instead of objects
    stringifyObjects: isInternetExplorer()
};
var PostMessageTransport = /** @class */ (function () {
    function PostMessageTransport(windowRef, onReceive, config) {
        var _this = this;
        this.recv = function (messageEvent) {
            if ((!_this.config.originWhitelist || _this.config.originWhitelist.length < 1 || _this.config.originWhitelist.indexOf(messageEvent.origin) > -1) && messageEvent.data) {
                var messageData = _this.readMessageData(messageEvent);
                if (messageData && messageData.type === POSTMESSAGE_TYPE && messageData.payload) {
                    _this.onReceive(messageData.payload, messageEvent.source, messageEvent.origin);
                }
            }
            // otherwise drop the message silently
        };
        this.windowRef = windowRef || window;
        this.onReceive = onReceive;
        this.config = Object.assign({}, DEFAULT_CONFIG, config || {});
        this.windowRef.addEventListener("message", this.recv);
    }
    PostMessageTransport.prototype.close = function () {
        this.windowRef.removeEventListener("message", this.recv);
    };
    PostMessageTransport.prototype.send = function (recipient, messageBody) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var envelopedMessage = {
                "type": POSTMESSAGE_TYPE,
                "payload": messageBody
            };
            recipient.targetWindow.postMessage(_this.config.stringifyObjects ? JSON.stringify(envelopedMessage, function (_k, v) { return v === undefined ? null : v; }) : envelopedMessage, recipient.targetOrigin || "*");
            resolve();
        });
    };
    ;
    // tslint:disable-next-line:no-any
    PostMessageTransport.prototype.readMessageData = function (messageEvent) {
        if (typeof messageEvent.data === 'string' && JSON && isInternetExplorer()) {
            try {
                return JSON.parse(messageEvent.data);
            }
            catch (e) {
                // JSON parse error, silently discard message
                return null;
            }
        }
        return messageEvent.data;
    };
    return PostMessageTransport;
}());



/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./src/mini-iframe-rpc.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/neumark/git/mini-iframe-rpc/src/mini-iframe-rpc.ts */"./src/mini-iframe-rpc.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=mini-iframe-rpc.js.map