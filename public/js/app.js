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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/app.js":
/***/ (function(module, exports) {

var App = function () {

	var setJqueryExtends = function setJqueryExtends() {
		$.fn.extend({
			animateCss: function animateCss(animationName, callback) {
				var animationEnd = function (el) {
					var animations = {
						animation: 'animationend',
						OAnimation: 'oAnimationEnd',
						MozAnimation: 'mozAnimationEnd',
						WebkitAnimation: 'webkitAnimationEnd'
					};

					for (var t in animations) {
						if (el.style[t] !== undefined) {
							return animations[t];
						}
					}
				}(document.createElement('div'));

				this.addClass('animated ' + animationName).one(animationEnd, function () {
					$(this).removeClass('animated ' + animationName);

					if (typeof callback === 'function') callback();
				});

				return this;
			}
		});
	};

	var handleHeaderStickyScroll = function handleHeaderStickyScroll() {
		var logoSmall = $('#logo-small');
		var logoBig = $('#logo-big');
		var headerMobile = $('.pf-header-mobile');
		var limitScroll = 120;

		$(window).on('scroll', function () {
			var scroll = $(window).scrollTop();
			if (!headerMobile.is(':visible') && scroll >= limitScroll) {
				logoAppear();
			} else {
				logoDisappear();
			}
		});

		var logoAppear = function logoAppear() {
			if (!logoSmall.is(':visible')) {
				logoSmall.show();
				logoSmall.animateCss('slideInUp', function () {
					logoSmall.removeClass('animated slideInUp');
					if ($(window).scrollTop() >= limitScroll) logoBig.hide();
				});
			}
		};

		var logoDisappear = function logoDisappear() {
			if (logoSmall.is(':visible')) {
				logoSmall.animateCss('slideOutDown', function () {
					logoSmall.removeClass('animated slideOutDown');
					logoSmall.hide();
				});
				logoBig.show();
				logoBig.animateCss('slideInDown', function () {});
			}
		};
	};

	return {
		init: function init() {
			setJqueryExtends();
			handleHeaderStickyScroll();
		}
	};
}();

$(document).ready(App.init());

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/app.js");
module.exports = __webpack_require__("./resources/assets/sass/app.scss");


/***/ })

/******/ });