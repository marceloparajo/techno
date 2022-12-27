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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_header_menu__ = __webpack_require__("./resources/assets/js/modules/header-menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sidebar__ = __webpack_require__("./resources/assets/js/modules/sidebar.js");



var SnippetHome = function () {

	var initialize = function initialize() {
		//handleToggleHeaderMenu()
		Object(__WEBPACK_IMPORTED_MODULE_1__modules_sidebar__["a" /* default */])();
	};

	return {
		init: function init() {
			return initialize();
		}
	};
}();

document.addEventListener('DOMContentLoaded', function () {
	return SnippetHome.init();
});

/***/ }),

/***/ "./resources/assets/js/modules/header-menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var handleToggleMainMenu = function handleToggleMainMenu() {
	var _button = document.getElementById('hamburguesa');
	var _container = document.getElementById('menues');

	if (_button === null) return 0;

	_button.addEventListener('click', function (e) {
		e.preventDefault();

		_button.classList.toggle('change');
		_container.classList.toggle('temuestro');
	});
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
	handleToggleMainMenu();
});

/***/ }),

/***/ "./resources/assets/js/modules/sidebar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
	initPerformVideo();
});

var initPerformVideo = function initPerformVideo() {
	var _container = document.getElementById('perform-video');

	if (_container === null) return 0;

	if (navigator.userAgent.search("Firefox") !== -1) return 0;

	var script = document.createElement("script");
	script.type = 'text/javascript';
	script.defer = true;
	script.src = 'https://player.performgroup.com/eplayer.js#47b3f29670c0b844c32971e284.15c1379yp89d01tb3mar0jq831';
	_container.appendChild(script);
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/home.js");


/***/ })

/******/ });