(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ngx-cookie"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ngx-cookie"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CookieService = (function () {
    function CookieService(_optionsProvider) {
        this._optionsProvider = _optionsProvider;
        this.options = this._optionsProvider.options;
    }
    Object.defineProperty(CookieService.prototype, "cookieString", {
        get: function () {
            return document.cookie || '';
        },
        set: function (val) {
            document.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @name CookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    CookieService.prototype.get = function (key) {
        return this._cookieReader()[key];
    };
    /**
     * @name CookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    CookieService.prototype.getObject = function (key) {
        var value = this.get(key);
        return value ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* safeJsonParse */])(value) : value;
    };
    /**
     * @name CookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    CookieService.prototype.getAll = function () {
        return this._cookieReader();
    };
    /**
     * @name CookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.put = function (key, value, options) {
        this._cookieWriter()(key, value, options);
    };
    /**
     * @name CookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.putObject = function (key, value, options) {
        this.put(key, JSON.stringify(value), options);
    };
    /**
     * @name CookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptions} options (Optional) Options object.
     */
    CookieService.prototype.remove = function (key, options) {
        this._cookieWriter()(key, undefined, options);
    };
    /**
     * @name CookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    CookieService.prototype.removeAll = function () {
        var _this = this;
        var cookies = this.getAll();
        Object.keys(cookies).forEach(function (key) {
            _this.remove(key);
        });
    };
    CookieService.prototype._cookieReader = function () {
        var lastCookies = {};
        var lastCookieString = '';
        var cookieArray, cookie, i, index, name;
        var currentCookieString = this.cookieString;
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* safeDecodeURIComponent */])(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isBlank */])(lastCookies[name])) {
                        lastCookies[name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* safeDecodeURIComponent */])(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    };
    CookieService.prototype._cookieWriter = function () {
        var that = this;
        return function (name, value, options) {
            that.cookieString = that._buildCookieString(name, value, options);
        };
    };
    CookieService.prototype._buildCookieString = function (name, value, options) {
        var opts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* mergeOptions */])(this.options, options);
        var expires = opts.expires;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* isBlank */])(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["e" /* isString */])(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log("Cookie '" + name + "' possibly not set or overflowed because it was too \n      large (" + cookieLength + " > 4096 bytes)!");
        }
        return str;
    };
    return CookieService;
}());
CookieService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__cookie_options_provider__["b" /* CookieOptionsProvider */]])
], CookieService);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIE_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CookieOptionsProvider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var COOKIE_OPTIONS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('COOKIE_OPTIONS');
/** @private */
var CookieOptionsProvider = (function () {
    function CookieOptionsProvider(options, _injector) {
        if (options === void 0) { options = {}; }
        this._injector = _injector;
        this.defaultOptions = {
            path: this._injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"], '/'),
            domain: null,
            expires: null,
            secure: false
        };
        this._options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* mergeOptions */])(this.defaultOptions, options);
    }
    Object.defineProperty(CookieOptionsProvider.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return CookieOptionsProvider;
}());
CookieOptionsProvider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(COOKIE_OPTIONS)),
    __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
], CookieOptionsProvider);



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isBlank;
/* unused harmony export isPresent */
/* harmony export (immutable) */ __webpack_exports__["e"] = isString;
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;
/* harmony export (immutable) */ __webpack_exports__["c"] = safeDecodeURIComponent;
/* harmony export (immutable) */ __webpack_exports__["b"] = safeJsonParse;
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isString(obj) {
    return typeof obj === 'string';
}
function mergeOptions(oldOptions, newOptions) {
    if (!newOptions) {
        return oldOptions;
    }
    return {
        path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
        domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
        expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
        secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    };
}
function safeDecodeURIComponent(str) {
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return str;
    }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cookie_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieBackendService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CookieBackendService = (function (_super) {
    __extends(CookieBackendService, _super);
    function CookieBackendService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CookieBackendService.prototype, "cookieString", {
        get: function () {
            return global.Zone.current.get('req').headers.cookie || '';
        },
        set: function (val) {
            global.Zone.current.get('req').headers.cookie = val;
            global.Zone.current.get('res').headers.cookie = val;
        },
        enumerable: true,
        configurable: true
    });
    return CookieBackendService;
}(__WEBPACK_IMPORTED_MODULE_1__cookie_service__["a" /* CookieService */]));
CookieBackendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], CookieBackendService);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cookie_service__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = cookieServiceFactory;

function cookieServiceFactory(cookieOptionsProvider) {
    return new __WEBPACK_IMPORTED_MODULE_0__cookie_service__["a" /* CookieService */](cookieOptionsProvider);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CookieBackendService", function() { return __WEBPACK_IMPORTED_MODULE_4__src_cookie_backend_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieModule", function() { return CookieModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CookieModule = CookieModule_1 = (function () {
    function CookieModule() {
    }
    /**
     * Use this method in your root module to provide the CookieService
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forRoot = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    /**
     * Use this method in your other (non root) modules to import the directive/pipe
     * @param {CookieOptions} options
     * @returns {ModuleWithProviders}
     */
    CookieModule.forChild = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: CookieModule_1,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["a" /* COOKIE_OPTIONS */], useValue: options },
                { provide: __WEBPACK_IMPORTED_MODULE_2__src_cookie_service__["a" /* CookieService */], useFactory: __WEBPACK_IMPORTED_MODULE_3__src_cookie_factory__["a" /* cookieServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]] }
            ]
        };
    };
    return CookieModule;
}());
CookieModule = CookieModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__src_cookie_options_provider__["b" /* CookieOptionsProvider */]]
    })
], CookieModule);

var CookieModule_1;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZjNlYmJmYWE1MzkxNGE4M2FkMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29va2llLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9jb29raWUtb3B0aW9ucy1wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS1iYWNrZW5kLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nvb2tpZS5mYWN0b3J5LnRzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vLy4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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UUFBUSxFQUFFLE9BQU8sRUFBQztnQkFDNUMsRUFBQyxPQUFPLEVBQUUsMEVBQWEsRUFBRSxVQUFVLEVBQUUsaUZBQW9CLEVBQUUsSUFBSSxFQUFFLENBQUMsMkZBQXFCLENBQUMsRUFBQzthQUMxRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHFCQUFRLEdBQWYsVUFBZ0IsT0FBMkI7UUFBM0Isc0NBQTJCO1FBQ3pDLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFDLE9BQU8sRUFBRSxvRkFBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7Z0JBQzVDLEVBQUMsT0FBTyxFQUFFLDBFQUFhLEVBQUUsVUFBVSxFQUFFLGlGQUFvQixFQUFFLElBQUksRUFBRSxDQUFDLDJGQUFxQixDQUFDLEVBQUM7YUFDMUY7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQTlCWSxZQUFZO0lBSHhCLDhFQUFRLENBQUM7UUFDUixTQUFTLEVBQUUsQ0FBQywyRkFBcUIsQ0FBQztLQUNuQyxDQUFDO0dBQ1csWUFBWSxDQThCeEI7QUE5QndCIiwiZmlsZSI6Im5neC1jb29raWUudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1jb29raWVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZ3gtY29va2llXCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRmM2ViYmZhYTUzOTE0YTgzYWQwIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVPcHRpb25zUHJvdmlkZXIgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IGlzQmxhbmssIGlzU3RyaW5nLCBtZXJnZU9wdGlvbnMsIHNhZmVEZWNvZGVVUklDb21wb25lbnQsIHNhZmVKc29uUGFyc2UgfSBmcm9tICcuL3V0aWxzJztcblxuZGVjbGFyZSBpbnRlcmZhY2UgRG9jdW1lbnQge1xuICBjb29raWU6IHN0cmluZztcbn1cbmRlY2xhcmUgY29uc3QgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb29raWVTZXJ2aWNlIHtcbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBPYmplY3Q7XG4gIGdldEFsbCgpOiBPYmplY3Q7XG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkO1xuICBwdXRPYmplY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBPYmplY3QsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZDtcbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQ7XG4gIHJlbW92ZUFsbCgpOiB2b2lkO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSBpbXBsZW1lbnRzIElDb29raWVTZXJ2aWNlIHtcblxuICBwcm90ZWN0ZWQgb3B0aW9uczogQ29va2llT3B0aW9ucztcblxuICBwcm90ZWN0ZWQgZ2V0IGNvb2tpZVN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgfHwgJyc7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0IGNvb2tpZVN0cmluZyh2YWw6IHN0cmluZykge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IHZhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29wdGlvbnNQcm92aWRlcjogQ29va2llT3B0aW9uc1Byb3ZpZGVyKSB7XG4gICAgdGhpcy5vcHRpb25zID0gdGhpcy5fb3B0aW9uc1Byb3ZpZGVyLm9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNnZXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgdG8gdXNlIGZvciBsb29rdXAuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJhdyBjb29raWUgdmFsdWUuXG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoPGFueT50aGlzLl9jb29raWVSZWFkZXIoKSlba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldE9iamVjdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyB0aGUgZGVzZXJpYWxpemVkIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgdG8gdXNlIGZvciBsb29rdXAuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IERlc2VyaWFsaXplZCBjb29raWUgdmFsdWUuXG4gICAqL1xuICBnZXRPYmplY3Qoa2V5OiBzdHJpbmcpOiBPYmplY3Qge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0KGtleSk7XG4gICAgcmV0dXJuIHZhbHVlID8gc2FmZUpzb25QYXJzZSh2YWx1ZSkgOiB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI2dldEFsbFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogUmV0dXJucyBhIGtleSB2YWx1ZSBvYmplY3Qgd2l0aCBhbGwgdGhlIGNvb2tpZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEFsbCBjb29raWVzXG4gICAqL1xuICBnZXRBbGwoKTogT2JqZWN0IHtcbiAgICByZXR1cm4gPGFueT50aGlzLl9jb29raWVSZWFkZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBDb29raWVTZXJ2aWNlI3B1dFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IElkIGZvciB0aGUgYHZhbHVlYC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFJhdyB2YWx1ZSB0byBiZSBzdG9yZWQuXG4gICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9ucyAoT3B0aW9uYWwpIE9wdGlvbnMgb2JqZWN0LlxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgIHRoaXMuX2Nvb2tpZVdyaXRlcigpKGtleSwgdmFsdWUsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcHV0T2JqZWN0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBTZXJpYWxpemVzIGFuZCBzZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgZm9yIHRoZSBgdmFsdWVgLlxuICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVmFsdWUgdG8gYmUgc3RvcmVkLlxuICAgKiBAcGFyYW0ge0Nvb2tpZU9wdGlvbnN9IG9wdGlvbnMgKE9wdGlvbmFsKSBPcHRpb25zIG9iamVjdC5cbiAgICovXG4gIHB1dE9iamVjdChrZXk6IHN0cmluZywgdmFsdWU6IE9iamVjdCwgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpIHtcbiAgICB0aGlzLnB1dChrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgQ29va2llU2VydmljZSNyZW1vdmVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFJlbW92ZSBnaXZlbiBjb29raWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgSWQgb2YgdGhlIGtleS12YWx1ZSBwYWlyIHRvIGRlbGV0ZS5cbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zIChPcHRpb25hbCkgT3B0aW9ucyBvYmplY3QuXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5fY29va2llV3JpdGVyKCkoa2V5LCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIENvb2tpZVNlcnZpY2UjcmVtb3ZlQWxsXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXMuXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgbGV0IGNvb2tpZXMgPSB0aGlzLmdldEFsbCgpO1xuICAgIE9iamVjdC5rZXlzKGNvb2tpZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb29raWVSZWFkZXIoKTogT2JqZWN0IHtcbiAgICBsZXQgbGFzdENvb2tpZXMgPSB7fTtcbiAgICBsZXQgbGFzdENvb2tpZVN0cmluZyA9ICcnO1xuICAgIGxldCBjb29raWVBcnJheTogc3RyaW5nW10sIGNvb2tpZTogc3RyaW5nLCBpOiBudW1iZXIsIGluZGV4OiBudW1iZXIsIG5hbWU6IHN0cmluZztcbiAgICBsZXQgY3VycmVudENvb2tpZVN0cmluZyA9IHRoaXMuY29va2llU3RyaW5nO1xuICAgIGlmIChjdXJyZW50Q29va2llU3RyaW5nICE9PSBsYXN0Q29va2llU3RyaW5nKSB7XG4gICAgICBsYXN0Q29va2llU3RyaW5nID0gY3VycmVudENvb2tpZVN0cmluZztcbiAgICAgIGNvb2tpZUFycmF5ID0gbGFzdENvb2tpZVN0cmluZy5zcGxpdCgnOyAnKTtcbiAgICAgIGxhc3RDb29raWVzID0ge307XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29va2llID0gY29va2llQXJyYXlbaV07XG4gICAgICAgIGluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkgeyAgLy8gaWdub3JlIG5hbWVsZXNzIGNvb2tpZXNcbiAgICAgICAgICBuYW1lID0gc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgICAgLy8gdGhlIGZpcnN0IHZhbHVlIHRoYXQgaXMgc2VlbiBmb3IgYSBjb29raWUgaXMgdGhlIG1vc3RcbiAgICAgICAgICAvLyBzcGVjaWZpYyBvbmUuICB2YWx1ZXMgZm9yIHRoZSBzYW1lIGNvb2tpZSBuYW1lIHRoYXRcbiAgICAgICAgICAvLyBmb2xsb3cgYXJlIGZvciBsZXNzIHNwZWNpZmljIHBhdGhzLlxuICAgICAgICAgIGlmIChpc0JsYW5rKCg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSkpIHtcbiAgICAgICAgICAgICg8YW55Pmxhc3RDb29raWVzKVtuYW1lXSA9IHNhZmVEZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxhc3RDb29raWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBfY29va2llV3JpdGVyKCkge1xuICAgIGxldCB0aGF0ID0gdGhpcztcblxuICAgIHJldHVybiBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucykge1xuICAgICAgdGhhdC5jb29raWVTdHJpbmcgPSB0aGF0Ll9idWlsZENvb2tpZVN0cmluZyhuYW1lLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkQ29va2llU3RyaW5nKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiBzdHJpbmcge1xuICAgIGxldCBvcHRzOiBDb29raWVPcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG4gICAgbGV0IGV4cGlyZXM6IGFueSA9IG9wdHMuZXhwaXJlcztcbiAgICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcbiAgICAgIGV4cGlyZXMgPSAnVGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBHTVQnO1xuICAgICAgdmFsdWUgPSAnJztcbiAgICB9XG4gICAgaWYgKGlzU3RyaW5nKGV4cGlyZXMpKSB7XG4gICAgICBleHBpcmVzID0gbmV3IERhdGUoZXhwaXJlcyk7XG4gICAgfVxuXG4gICAgbGV0IHN0ciA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgc3RyICs9IG9wdHMucGF0aCA/ICc7cGF0aD0nICsgb3B0cy5wYXRoIDogJyc7XG4gICAgc3RyICs9IG9wdHMuZG9tYWluID8gJztkb21haW49JyArIG9wdHMuZG9tYWluIDogJyc7XG4gICAgc3RyICs9IGV4cGlyZXMgPyAnO2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuICAgIHN0ciArPSBvcHRzLnNlY3VyZSA/ICc7c2VjdXJlJyA6ICcnO1xuXG4gICAgLy8gcGVyIGh0dHA6Ly93d3cuaWV0Zi5vcmcvcmZjL3JmYzIxMDkudHh0IGJyb3dzZXIgbXVzdCBhbGxvdyBhdCBtaW5pbXVtOlxuICAgIC8vIC0gMzAwIGNvb2tpZXNcbiAgICAvLyAtIDIwIGNvb2tpZXMgcGVyIHVuaXF1ZSBkb21haW5cbiAgICAvLyAtIDQwOTYgYnl0ZXMgcGVyIGNvb2tpZVxuICAgIGxldCBjb29raWVMZW5ndGggPSBzdHIubGVuZ3RoICsgMTtcbiAgICBpZiAoY29va2llTGVuZ3RoID4gNDA5Nikge1xuICAgICAgY29uc29sZS5sb2coYENvb2tpZSBcXCcke25hbWV9XFwnIHBvc3NpYmx5IG5vdCBzZXQgb3Igb3ZlcmZsb3dlZCBiZWNhdXNlIGl0IHdhcyB0b28gXG4gICAgICBsYXJnZSAoJHtjb29raWVMZW5ndGh9ID4gNDA5NiBieXRlcykhYCk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL2Nvb2tpZS5zZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0LCBPcGFxdWVUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcbmltcG9ydCB7IG1lcmdlT3B0aW9ucyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQ09PS0lFX09QVElPTlMgPSBuZXcgT3BhcXVlVG9rZW4oJ0NPT0tJRV9PUFRJT05TJyk7XG5cbi8qKiBAcHJpdmF0ZSAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvb2tpZU9wdGlvbnNQcm92aWRlciB7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0T3B0aW9uczogQ29va2llT3B0aW9ucztcbiAgcHJpdmF0ZSBfb3B0aW9uczogQ29va2llT3B0aW9ucztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KENPT0tJRV9PUFRJT05TKSBvcHRpb25zOiBDb29raWVPcHRpb25zID0ge30sXG4gICAgICAgICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBwYXRoOiB0aGlzLl9pbmplY3Rvci5nZXQoQVBQX0JBU0VfSFJFRiwgJy8nKSxcbiAgICAgIGRvbWFpbjogbnVsbCxcbiAgICAgIGV4cGlyZXM6IG51bGwsXG4gICAgICBzZWN1cmU6IGZhbHNlXG4gICAgfTtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKTogQ29va2llT3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb29raWUtb3B0aW9ucy1wcm92aWRlci50cyIsImltcG9ydCB7IENvb2tpZU9wdGlvbnMgfSBmcm9tICcuL2Nvb2tpZS1vcHRpb25zLm1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQmxhbmsob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJlc2VudChvYmo6IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gb2JqICE9PSB1bmRlZmluZWQgJiYgb2JqICE9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOiBhbnkpOiBvYmogaXMgc3RyaW5nIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VPcHRpb25zKG9sZE9wdGlvbnM6IENvb2tpZU9wdGlvbnMsIG5ld09wdGlvbnM/OiBDb29raWVPcHRpb25zKTogQ29va2llT3B0aW9ucyB7XG4gIGlmICghbmV3T3B0aW9ucykge1xuICAgIHJldHVybiBvbGRPcHRpb25zO1xuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aDogaXNQcmVzZW50KG5ld09wdGlvbnMucGF0aCkgPyBuZXdPcHRpb25zLnBhdGggOiBvbGRPcHRpb25zLnBhdGgsXG4gICAgZG9tYWluOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5kb21haW4pID8gbmV3T3B0aW9ucy5kb21haW4gOiBvbGRPcHRpb25zLmRvbWFpbixcbiAgICBleHBpcmVzOiBpc1ByZXNlbnQobmV3T3B0aW9ucy5leHBpcmVzKSA/IG5ld09wdGlvbnMuZXhwaXJlcyA6IG9sZE9wdGlvbnMuZXhwaXJlcyxcbiAgICBzZWN1cmU6IGlzUHJlc2VudChuZXdPcHRpb25zLnNlY3VyZSkgPyBuZXdPcHRpb25zLnNlY3VyZSA6IG9sZE9wdGlvbnMuc2VjdXJlLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZURlY29kZVVSSUNvbXBvbmVudChzdHI6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVKc29uUGFyc2Uoc3RyOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3V0aWxzLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnLi9jb29raWUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb29raWVCYWNrZW5kU2VydmljZSBleHRlbmRzIENvb2tpZVNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgZ2V0IGNvb2tpZVN0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAoPGFueT5nbG9iYWwpLlpvbmUuY3VycmVudC5nZXQoJ3JlcScpLmhlYWRlcnMuY29va2llIHx8ICcnO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCBjb29raWVTdHJpbmcodmFsOiBzdHJpbmcpIHtcbiAgICAoPGFueT5nbG9iYWwpLlpvbmUuY3VycmVudC5nZXQoJ3JlcScpLmhlYWRlcnMuY29va2llID0gdmFsO1xuICAgICg8YW55Pmdsb2JhbCkuWm9uZS5jdXJyZW50LmdldCgncmVzJykuaGVhZGVycy5jb29raWUgPSB2YWw7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb29raWUtYmFja2VuZC5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJy4vY29va2llLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29va2llT3B0aW9uc1Byb3ZpZGVyIH0gZnJvbSAnLi9jb29raWUtb3B0aW9ucy1wcm92aWRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb29raWVTZXJ2aWNlRmFjdG9yeShjb29raWVPcHRpb25zUHJvdmlkZXI6IENvb2tpZU9wdGlvbnNQcm92aWRlcik6IENvb2tpZVNlcnZpY2Uge1xuICByZXR1cm4gbmV3IENvb2tpZVNlcnZpY2UoY29va2llT3B0aW9uc1Byb3ZpZGVyKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy9jb29raWUuZmFjdG9yeS50cyIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ09PS0lFX09QVElPTlMsIENvb2tpZU9wdGlvbnNQcm92aWRlciB9IGZyb20gJy4vc3JjL2Nvb2tpZS1vcHRpb25zLXByb3ZpZGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICcuL3NyYy9jb29raWUuc2VydmljZSc7XG5pbXBvcnQgeyBDb29raWVPcHRpb25zIH0gZnJvbSAnLi9zcmMvY29va2llLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgY29va2llU2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NyYy9jb29raWUuZmFjdG9yeSc7XG5cbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9jb29raWUuc2VydmljZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc3JjL2Nvb2tpZS1iYWNrZW5kLnNlcnZpY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NyYy9jb29raWUtb3B0aW9ucy5tb2RlbFwiO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdXG59KVxuZXhwb3J0IGNsYXNzIENvb2tpZU1vZHVsZSB7XG4gIC8qKlxuICAgKiBVc2UgdGhpcyBtZXRob2QgaW4geW91ciByb290IG1vZHVsZSB0byBwcm92aWRlIHRoZSBDb29raWVTZXJ2aWNlXG4gICAqIEBwYXJhbSB7Q29va2llT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7TW9kdWxlV2l0aFByb3ZpZGVyc31cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29va2llTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBDT09LSUVfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnN9LFxuICAgICAgICB7cHJvdmlkZTogQ29va2llU2VydmljZSwgdXNlRmFjdG9yeTogY29va2llU2VydmljZUZhY3RvcnksIGRlcHM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgbWV0aG9kIGluIHlvdXIgb3RoZXIgKG5vbiByb290KSBtb2R1bGVzIHRvIGltcG9ydCB0aGUgZGlyZWN0aXZlL3BpcGVcbiAgICogQHBhcmFtIHtDb29raWVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtNb2R1bGVXaXRoUHJvdmlkZXJzfVxuICAgKi9cbiAgc3RhdGljIGZvckNoaWxkKG9wdGlvbnM6IENvb2tpZU9wdGlvbnMgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29va2llTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtwcm92aWRlOiBDT09LSUVfT1BUSU9OUywgdXNlVmFsdWU6IG9wdGlvbnN9LFxuICAgICAgICB7cHJvdmlkZTogQ29va2llU2VydmljZSwgdXNlRmFjdG9yeTogY29va2llU2VydmljZUZhY3RvcnksIGRlcHM6IFtDb29raWVPcHRpb25zUHJvdmlkZXJdfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==