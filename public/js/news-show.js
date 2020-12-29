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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js":
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**!
 * lg-thumbnail.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(true){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.LgThumbnail = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgThumbnail = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var thumbnailDefaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toggleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function Thumbnail(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, thumbnailDefaults, this.core.s);

        this.thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = this.core.items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
        this.thumbIndex = this.core.index;

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function () {
        var _this = this;
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function () {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                utils.addClass(this.core.outer, 'lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb) {
                if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toggle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function () {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb group">' + '</div>' + '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        utils.addClass(_this.core.outer, 'lg-has-thumb');

        _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', html);

        _this.thumbOuter = _this.core.outer.querySelector('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;

        if (_this.core.s.animateThumb) {
            _this.core.outer.querySelector('.lg-thumb').style.width = _this.thumbTotalWidth + 'px';
            _this.core.outer.querySelector('.lg-thumb').style.position = 'relative';
        }

        if (this.core.s.animateThumb) {
            _this.thumbOuter.style.height = _this.core.s.thumbContHeight + 'px';
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
                getThumb(_this.core.s.dynamicEl[j].src, _this.core.s.dynamicEl[j].thumb, j);
            }
        } else {
            for (var i = 0; i < _this.core.items.length; i++) {
                if (!_this.core.s.exThumbImage) {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].querySelector('img').getAttribute('src'), i);
                } else {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].getAttribute(_this.core.s.exThumbImage), i);
                }
            }
        }

        _this.core.outer.querySelector('.lg-thumb').innerHTML = thumbList;

        $thumb = _this.core.outer.querySelectorAll('.lg-thumb-item');

        for (var n = 0; n < $thumb.length; n++) {

            /*jshint loopfunc: true */
            (function (index) {
                var $this = $thumb[index];
                var vimeoVideoId = $this.getAttribute('data-vimeo-id');
                if (vimeoVideoId) {

                    window['lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n] = function (content) {
                        $this.querySelector('img').setAttribute('src', content[0][_this.core.s.vimeoThumbSize]);
                    };

                    var script = document.createElement('script');
                    script.className = 'lg-script';
                    script.src = '//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n;
                    document.body.appendChild(script);
                }
            })(n);
        }

        // manage active class for thumbnail
        utils.addClass($thumb[_this.core.index], 'active');
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {

            for (var j = 0; j < $thumb.length; j++) {
                utils.removeClass($thumb[j], 'active');
            }

            utils.addClass($thumb[_this.core.index], 'active');
        });

        for (var k = 0; k < $thumb.length; k++) {

            /*jshint loopfunc: true */
            (function (index) {

                utils.on($thumb[index], 'click.lg touchend.lg', function () {

                    setTimeout(function () {

                        // In IE9 and bellow touch does not support
                        // Go to slide if browser does not support css transitions
                        if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                            _this.core.index = index;
                            _this.core.slide(_this.core.index, false, true);
                        }
                    }, 50);
                });
            })(k);
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            _this.animateThumb(_this.core.index);
        });

        utils.on(window, 'resize.lgthumb orientationchange.lgthumb', function () {
            setTimeout(function () {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
            }, 200);
        });
    };

    Thumbnail.prototype.setTranslate = function (value) {
        utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'Transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };

    Thumbnail.prototype.animateThumb = function (index) {
        var $thumb = this.core.outer.querySelector('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
            if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!utils.hasClass($thumb, 'on')) {
                    utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'TransitionDuration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            }

            this.setTranslate(this.left);
        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function () {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        utils.addClass(_this.thumbOuter, 'lg-grab');

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'mousedown.lgthumb', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.outer.scrollLeft += 1;
                _this.core.outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                utils.removeClass(_this.thumbOuter, 'lg-grab');
                utils.addClass(_this.thumbOuter, 'lg-grabbing');
            }
        });

        utils.on(window, 'mousemove.lgthumb', function (e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(window, 'mouseup.lgthumb', function () {
            if (isMoved) {
                isMoved = false;
                utils.removeClass(_this.thumbOuter, 'lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.thumbOuter, 'lg-grabbing');
                utils.addClass(_this.thumbOuter, 'lg-grab');
            }
        });
    };

    Thumbnail.prototype.enableThumbSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchstart.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchmove.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.targetTouches[0].pageX;
                isMoved = true;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchend.lg', function () {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    utils.removeClass(_this.thumbOuter, 'lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });
    };

    Thumbnail.prototype.toggle = function () {
        var _this = this;
        if (_this.core.s.toggleThumb) {
            utils.addClass(_this.core.outer, 'lg-can-toggle');
            _this.thumbOuter.insertAdjacentHTML('beforeend', '<button aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
            utils.on(_this.core.outer.querySelector('.lg-toggle-thumb'), 'click.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-thumb-open')) {
                    utils.removeClass(_this.core.outer, 'lg-thumb-open');
                } else {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function () {
        var _this = this;
        utils.on(window, 'keydown.lgthumb', function (e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                utils.addClass(_this.core.outer, 'lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                utils.removeClass(_this.core.outer, 'lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function (d) {
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            utils.off(window, '.lgthumb');
            if (!d) {
                this.thumbOuter.parentNode.removeChild(this.thumbOuter);
            }
            utils.removeClass(this.core.outer, 'lg-has-thumb');

            var lgScript = document.getElementsByClassName('lg-script');
            while (lgScript[0]) {
                lgScript[0].parentNode.removeChild(lgScript[0]);
            }
        }
    };

    window.lgModules.thumbnail = Thumbnail;
});

},{}]},{},[1])(1)
});


/***/ }),

/***/ "./node_modules/lightgallery.js/lib/js/lg-utils.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.lgUtils = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var utils = {
        getAttribute: function getAttribute(el, label) {
            return el[label];
        },

        setAttribute: function setAttribute(el, label, value) {
            el[label] = value;
        },
        wrap: function wrap(el, className) {
            if (!el) {
                return;
            }

            var wrapper = document.createElement('div');
            wrapper.className = className;
            el.parentNode.insertBefore(wrapper, el);
            el.parentNode.removeChild(el);
            wrapper.appendChild(el);
        },

        addClass: function addClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        },

        removeClass: function removeClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },

        hasClass: function hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
        },

        // ex Transform
        // ex TransitionTimingFunction
        setVendor: function setVendor(el, property, value) {
            if (!el) {
                return;
            }

            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        },

        trigger: function trigger(el, event) {
            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (!el) {
                return;
            }

            var customEvent = new CustomEvent(event, {
                detail: detail
            });
            el.dispatchEvent(customEvent);
        },

        Listener: {
            uid: 0
        },
        on: function on(el, events, fn) {
            var _this = this;

            if (!el) {
                return;
            }

            events.split(' ').forEach(function (event) {
                var _id = _this.getAttribute(el, 'lg-event-uid') || '';
                utils.Listener.uid++;
                _id += '&' + utils.Listener.uid;
                _this.setAttribute(el, 'lg-event-uid', _id);
                utils.Listener[event + utils.Listener.uid] = fn;
                el.addEventListener(event.split('.')[0], fn, false);
            });
        },

        off: function off(el, event) {
            if (!el) {
                return;
            }

            var _id = this.getAttribute(el, 'lg-event-uid');
            if (_id) {
                _id = _id.split('&');
                for (var i = 0; i < _id.length; i++) {
                    if (_id[i]) {
                        var _event = event + _id[i];
                        if (_event.substring(0, 1) === '.') {
                            for (var key in utils.Listener) {
                                if (utils.Listener.hasOwnProperty(key)) {
                                    if (key.split('.').indexOf(_event.split('.')[1]) > -1) {
                                        el.removeEventListener(key.split('.')[0], utils.Listener[key]);
                                        this.setAttribute(el, 'lg-event-uid', this.getAttribute(el, 'lg-event-uid').replace('&' + _id[i], ''));
                                        delete utils.Listener[key];
                                    }
                                }
                            }
                        } else {
                            el.removeEventListener(_event.split('.')[0], utils.Listener[_event]);
                            this.setAttribute(el, 'lg-event-uid', this.getAttribute(el, 'lg-event-uid').replace('&' + _id[i], ''));
                            delete utils.Listener[_event];
                        }
                    }
                }
            }
        },

        param: function param(obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        }
    };

    exports.default = utils;
});

/***/ }),

/***/ "./node_modules/lightgallery.js/lib/js/lightgallery.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/lightgallery.js/lib/js/lg-utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(require('./lg-utils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(global.lgUtils);
        global.lightgallery = mod.exports;
    }
})(this, function (_lgUtils) {
    'use strict';

    var _lgUtils2 = _interopRequireDefault(_lgUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    /** Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher */
    (function () {

        if (typeof window.CustomEvent === 'function') {
            return false;
        }

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();

    window.utils = _lgUtils2.default;
    window.lgData = {
        uid: 0
    };

    window.lgModules = {};
    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,

        // Set 0, if u don't want to hide the controls 
        hideBarsDelay: 6000,

        useLeft: false,

        // aria-labelledby attribute fot gallery
        ariaLabelledby: '',

        //aria-describedby attribute for gallery
        ariaDescribedby: '',

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: false,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1,
        supportLegacyBrowser: true
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // lightGallery settings
        this.s = _extends({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = 'ontouchstart' in document.documentElement;

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        this.items = [];

        // Gallery items
        if (this.s.dynamic) {
            this.items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.items.push(this.el);
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector);
                } else {
                    this.items = this.el.querySelectorAll(this.s.selector);
                }
            } else {
                this.items = this.el.children;
            }
        }

        // .lg-item

        this.___slide = '';

        // .lg-outer
        this.outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function () {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.items.length) {
            _this.s.preload = _this.items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            _lgUtils2.default.addClass(document.body, 'lg-from-hash');
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        }

        if (_this.s.dynamic) {

            _lgUtils2.default.trigger(this.el, 'onBeforeOpen');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        } else {

            for (var i = 0; i < _this.items.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {

                    // Using different namespace for click because click event should not unbind if selector is same object('this')
                    _lgUtils2.default.on(_this.items[index], 'click.lgcustom', function (e) {

                        e.preventDefault();

                        _lgUtils2.default.trigger(_this.el, 'onBeforeOpen');

                        _this.index = _this.s.index || index;

                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                            _this.build(_this.index);
                            _lgUtils2.default.addClass(document.body, 'lg-on');
                        }
                    });
                })(i);
            }
        }
    };

    Plugin.prototype.build = function (index) {

        var _this = this;

        _this.structure();

        for (var key in window.lgModules) {
            _this.modules[key] = new window.lgModules[key](_this.el);
        }

        // initiate slide function
        _this.slide(index, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.items.length > 1) {

            _this.arrow();

            setTimeout(function () {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        }

        _this.counter();

        _this.closeGallery();

        _lgUtils2.default.trigger(_this.el, 'onAfterOpen');

        // Hide controllers if mouse doesn't move for some period
        if (_this.s.hideBarsDelay > 0) {

            // Hide controls if user doesn't use mouse or touch after opening gallery
            var initialHideBarTimeout = setTimeout(function () {
                _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
            }, _this.s.hideBarsDelay);
            _lgUtils2.default.on(_this.outer, 'mousemove.lg click.lg touchstart.lg', function () {

                // Cancel initalHideBarTimout if user uses mouse or touch events
                // Before it fires
                clearTimeout(initialHideBarTimeout);

                _lgUtils2.default.removeClass(_this.outer, 'lg-hide-items');

                clearTimeout(_this.hideBartimeout);

                // Timeout will be cleared on each slide movement also
                _this.hideBartimeout = setTimeout(function () {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
                }, _this.s.hideBarsDelay);
            });
        }
    };

    Plugin.prototype.structure = function () {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');
        _lgUtils2.default.setVendor(document.querySelector('.lg-backdrop'), 'TransitionDuration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.items.length > 1) {
            controls = '<div class="lg-actions">' + '<button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' + '<button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + '</button>' + '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div role="status" aria-live="polite" class="lg-sub-html"></div>';
        }

        var ariaLabelledby = this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : '';
        var ariaDescribedby = this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : '';

        template = '<div tabindex="-1" aria-modal="true" ' + ariaLabelledby + ' ' + ariaDescribedby + ' role="dialog" class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar lg-group">' + '<button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';

        document.body.insertAdjacentHTML('beforeend', template);
        this.outer = document.querySelector('.lg-outer');
        this.outer.focus();
        this.___slide = this.outer.querySelectorAll('.lg-item');

        if (this.s.useLeft) {
            _lgUtils2.default.addClass(this.outer, 'lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        _lgUtils2.default.on(window, 'resize.lg orientationchange.lg', function () {
            setTimeout(function () {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        _lgUtils2.default.addClass(this.___slide[this.index], 'lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            _lgUtils2.default.addClass(this.outer, 'lg-css3');
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        _lgUtils2.default.addClass(this.outer, this.s.mode);

        if (this.s.enableDrag && this.items.length > 1) {
            _lgUtils2.default.addClass(this.outer, 'lg-grab');
        }

        if (this.s.showAfterLoad) {
            _lgUtils2.default.addClass(this.outer, 'lg-show-after-load');
        }

        if (this.doCss()) {
            var inner = this.outer.querySelector('.lg-inner');
            _lgUtils2.default.setVendor(inner, 'TransitionTimingFunction', this.s.cssEasing);
            _lgUtils2.default.setVendor(inner, 'TransitionDuration', this.s.speed + 'ms');
        }

        setTimeout(function () {
            _lgUtils2.default.addClass(document.querySelector('.lg-backdrop'), 'in');
        });

        setTimeout(function () {
            _lgUtils2.default.addClass(_this.outer, 'lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    };

    // For fixed height gallery
    Plugin.prototype.setTop = function () {
        if (this.s.height !== '100%') {
            var wH = window.innerHeight;
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var lGallery = this.outer.querySelector('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                lGallery.style.top = top + 'px';
            } else {
                lGallery.style.top = '0px';
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function () {
        // check for css animation support
        var support = function support() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function (src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.items[index].getAttribute('data-html');
        }

        if (!src && html) {
            return {
                html5: true
            };
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function () {
        if (this.s.counter) {
            this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML('beforeend', '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function (index) {
        var subHtml = null;
        var currentEle;
        if (this.s.dynamic) {
            subHtml = this.s.dynamicEl[index].subHtml;
        } else {
            currentEle = this.items[index];
            subHtml = currentEle.getAttribute('data-sub-html');
            if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                subHtml = currentEle.getAttribute('title');
                if (subHtml && currentEle.querySelector('img')) {
                    subHtml = currentEle.querySelector('img').getAttribute('alt');
                }
            }
        }

        if (typeof subHtml !== 'undefined' && subHtml !== null) {

            // get first letter of subhtml
            // if first letter starts with . or # get the html form the jQuery object
            var fL = subHtml.substring(0, 1);
            if (fL === '.' || fL === '#') {
                if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                    subHtml = currentEle.querySelector(subHtml).innerHTML;
                } else {
                    subHtml = document.querySelector(subHtml).innerHTML;
                }
            }
        } else {
            subHtml = '';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = subHtml;
        } else {
            this.___slide[index].insertAdjacentHTML('beforeend', subHtml);
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                _lgUtils2.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            } else {
                _lgUtils2.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            }
        }

        _lgUtils2.default.trigger(this.el, 'onAfterAppendSubHtml', {
            index: index
        });
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function (index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function (index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var _alt;
        var getResponsiveSrc = function getResponsiveSrc(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = window.innerWidth;
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;
            _alt = _this.s.dynamicEl[index].alt;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;
        } else {

            if (_this.items[index].getAttribute('data-poster')) {
                _hasPoster = true;
                _poster = _this.items[index].getAttribute('data-poster');
            }

            _html = _this.items[index].getAttribute('data-html');
            _src = _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src');
            _alt = _this.items[index].getAttribute('title');

            if (_this.items[index].querySelector('img')) {
                _alt = _alt || _this.items[index].querySelector('img').getAttribute('alt');
            }

            if (_this.items[index].getAttribute('data-responsive')) {
                var srcItms = _this.items[index].getAttribute('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.items[index].getAttribute('data-srcset');
            _sizes = _this.items[index].getAttribute('data-sizes');
        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.items[index].getAttribute('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-loaded')) {
            if (iframe) {
                _this.___slide[index].insertAdjacentHTML('afterbegin', '<div class="lg-video-cont" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
            } else if (_isVideo) {
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _lgUtils2.default.trigger(_this.el, 'hasVideo', {
                    index: index,
                    src: _src,
                    html: _html
                });
            } else {
                _alt = _alt ? 'alt="' + _alt + '"' : '';
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><img class="lg-object lg-image" ' + _alt + ' src="' + _src + '" /></div>');
            }

            _lgUtils2.default.trigger(_this.el, 'onAferAppendSlide', {
                index: index
            });

            _img = _this.___slide[index].querySelector('.lg-object');
            if (_sizes) {
                _img.setAttribute('sizes', _sizes);
            }

            if (_srcset) {
                _img.setAttribute('srcset', _srcset);

                if (this.s.supportLegacyBrowser) {
                    try {
                        picturefill({
                            elements: [_img[0]]
                        });
                    } catch (e) {
                        console.warn('If you want srcset to be supported for older browsers, ' + 'please include picturefil javascript library in your document.');
                    }
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _lgUtils2.default.addClass(_this.___slide[index], 'lg-loaded');
        }

        _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !_lgUtils2.default.hasClass(document.body, 'lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function () {
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');

                _lgUtils2.default.trigger(_this.el, 'onSlideItemLoad', {
                    index: index,
                    delay: delay || 0
                });
            }, _speed);
        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
        }

        if (rec === true) {
            if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-complete')) {
                _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();
    
    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    */
    Plugin.prototype.slide = function (index, fromTouch, fromThumb) {

        var _prevIndex = 0;
        for (var i = 0; i < this.___slide.length; i++) {
            if (_lgUtils2.default.hasClass(this.___slide[i], 'lg-current')) {
                _prevIndex = i;
                break;
            }
        }

        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && _prevIndex === index) {
            return;
        }

        var _length = this.___slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;
        var _next = false;
        var _prev = false;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.items[index].getAttribute('data-download-url') !== 'false' && (_this.items[index].getAttribute('data-download-url') || _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src'));
                }

                if (_src) {
                    document.getElementById('lg-download').setAttribute('href', _src);
                    _lgUtils2.default.removeClass(_this.outer, 'lg-hide-download');
                } else {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-download');
                }
            }

            _lgUtils2.default.trigger(_this.el, 'onBeforeSlide', {
                prevIndex: _prevIndex,
                index: index,
                fromTouch: fromTouch,
                fromThumb: fromThumb
            });

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function () {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!fromTouch) {

                // remove all transitions
                _lgUtils2.default.addClass(_this.outer, 'lg-no-trans');

                for (var j = 0; j < this.___slide.length; j++) {
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-prev-slide');
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-next-slide');
                }

                if (index < _prevIndex) {
                    _prev = true;
                    if (index === 0 && _prevIndex === _length - 1 && !fromThumb) {
                        _prev = false;
                        _next = true;
                    }
                } else if (index > _prevIndex) {
                    _next = true;
                    if (index === _length - 1 && _prevIndex === 0 && !fromThumb) {
                        _prev = true;
                        _next = false;
                    }
                }

                if (_prev) {

                    //prevslide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-prev-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-next-slide');
                } else if (_next) {

                    // next slide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-next-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function () {
                    _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');

                    // reset all transitions
                    _lgUtils2.default.removeClass(_this.outer, 'lg-no-trans');
                }, 50);
            } else {

                var touchPrev = index - 1;
                var touchNext = index + 1;

                if (index === 0 && _prevIndex === _length - 1) {

                    // next slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                } else if (index === _length - 1 && _prevIndex === 0) {

                    // prev slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                }

                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-prev-slide'), 'lg-prev-slide');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-next-slide'), 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[touchPrev], 'lg-prev-slide');
                _lgUtils2.default.addClass(_this.___slide[touchNext], 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function () {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function () {
                    _this.lgBusy = false;
                    _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                        prevIndex: _prevIndex,
                        index: index,
                        fromTouch: fromTouch,
                        fromThumb: fromThumb
                    });
                }, this.s.speed);
            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                    prevIndex: _prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb
                });
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                if (document.getElementById('lg-counter-current')) {
                    document.getElementById('lg-counter-current').innerHTML = index + 1;
                }
            }
        }
    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index + 1 < _this.___slide.length) {
                _this.index++;
                _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                    index: _this.index
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = 0;
                    _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                        index: _this.index
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-right-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                    index: _this.index,
                    fromTouch: fromTouch
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = _this.items.length - 1;
                    _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                        index: _this.index,
                        fromTouch: fromTouch
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-left-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function () {
        var _this = this;
        if (this.items.length > 1) {
            _lgUtils2.default.on(window, 'keyup.lg', function (e) {
                if (_this.items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        _lgUtils2.default.on(window, 'keydown.lg', function (e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _lgUtils2.default.removeClass(_this.outer, 'lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function () {
        var _this = this;
        _lgUtils2.default.on(this.outer.querySelector('.lg-prev'), 'click.lg', function () {
            _this.goToPrevSlide();
        });

        _lgUtils2.default.on(this.outer.querySelector('.lg-next'), 'click.lg', function () {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function (index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            var next = this.outer.querySelector('.lg-next');
            var prev = this.outer.querySelector('.lg-prev');
            if (index + 1 < this.___slide.length) {
                next.removeAttribute('disabled');
                _lgUtils2.default.removeClass(next, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }

            if (index > 0) {
                prev.removeAttribute('disabled');
                _lgUtils2.default.removeClass(prev, 'disabled');
            } else {
                prev.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(prev, 'disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function (el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            el.style.left = xValue;
        } else {
            _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
        }
    };

    Plugin.prototype.touchMove = function (startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            _lgUtils2.default.addClass(this.outer, 'lg-dragging');

            // move current slide
            this.setTranslate(this.___slide[this.index], distance, 0);

            // move next and prev slide with current slide
            this.setTranslate(document.querySelector('.lg-prev-slide'), -this.___slide[this.index].clientWidth + distance, 0);
            this.setTranslate(document.querySelector('.lg-next-slide'), this.___slide[this.index].clientWidth + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function (distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _lgUtils2.default.addClass(_this.outer, 'lg-slide');
        }

        for (var i = 0; i < this.___slide.length; i++) {
            if (!_lgUtils2.default.hasClass(this.___slide[i], 'lg-current') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-prev-slide') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-next-slide')) {
                this.___slide[i].style.opacity = '0';
            }
        }

        // set transition duration
        setTimeout(function () {
            _lgUtils2.default.removeClass(_this.outer, 'lg-dragging');
            if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToNextSlide(true);
            } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _lgUtils2.default.trigger(_this.el, 'onSlideClick');
            }

            for (var i = 0; i < _this.___slide.length; i++) {
                _this.___slide[i].removeAttribute('style');
            }
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging') && _this.s.mode !== 'lg-slide') {
                _lgUtils2.default.removeClass(_this.outer, 'lg-slide');
            }
        }, _this.s.speed + 100);
    };

    Plugin.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {

            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'touchstart.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        _this.manageSwipeClass();
                        startCoords = e.targetTouches[0].pageX;
                    }
                });
            }

            for (var j = 0; j < _this.___slide.length; j++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[j], 'touchmove.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        e.preventDefault();
                        endCoords = e.targetTouches[0].pageX;
                        _this.touchMove(startCoords, endCoords);
                        isMoved = true;
                    }
                });
            }

            for (var k = 0; k < _this.___slide.length; k++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[k], 'touchend.lg', function () {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords - startCoords);
                        } else {
                            _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                        }
                    }
                });
            }
        }
    };

    Plugin.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'mousedown.lg', function (e) {
                    // execute only on .lg-object
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                            e.preventDefault();

                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = e.pageX;
                                isDraging = true;

                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                _this.outer.scrollLeft += 1;
                                _this.outer.scrollLeft -= 1;

                                // *

                                _lgUtils2.default.removeClass(_this.outer, 'lg-grab');
                                _lgUtils2.default.addClass(_this.outer, 'lg-grabbing');

                                _lgUtils2.default.trigger(_this.el, 'onDragstart');
                            }
                        }
                    }
                });
            }

            _lgUtils2.default.on(window, 'mousemove.lg', function (e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragmove');
                }
            });

            _lgUtils2.default.on(window, 'mouseup.lg', function (e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragend');
                } else if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                    _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _lgUtils2.default.removeClass(_this.outer, 'lg-grabbing');
                    _lgUtils2.default.addClass(_this.outer, 'lg-grab');
                }
            });
        }
    };

    Plugin.prototype.manageSwipeClass = function () {
        var touchNext = this.index + 1;
        var touchPrev = this.index - 1;
        var length = this.___slide.length;
        if (this.s.loop) {
            if (this.index === 0) {
                touchPrev = length - 1;
            } else if (this.index === length - 1) {
                touchNext = 0;
            }
        }

        for (var i = 0; i < this.___slide.length; i++) {
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-next-slide');
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-prev-slide');
        }

        if (touchPrev > -1) {
            _lgUtils2.default.addClass(this.___slide[touchPrev], 'lg-prev-slide');
        }

        _lgUtils2.default.addClass(this.___slide[touchNext], 'lg-next-slide');
    };

    Plugin.prototype.mousewheel = function () {
        var _this = this;
        _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });
    };

    Plugin.prototype.closeGallery = function () {

        var _this = this;
        var mousedown = false;
        _lgUtils2.default.on(this.outer.querySelector('.lg-close'), 'click.lg', function () {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _lgUtils2.default.on(_this.outer, 'mousedown.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }
            });

            _lgUtils2.default.on(_this.outer, 'mouseup.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap') && mousedown) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging')) {
                        _this.destroy();
                    }
                }
            });
        }
    };

    Plugin.prototype.destroy = function (d) {

        var _this = this;

        if (!d) {
            _lgUtils2.default.trigger(_this.el, 'onBeforeClose');
        }

        document.body.scrollTop = _this.prevScrollTop;
        document.documentElement.scrollTop = _this.prevScrollTop;

        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection

                for (var i = 0; i < this.items.length; i++) {
                    _lgUtils2.default.off(this.items[i], '.lg');
                    _lgUtils2.default.off(this.items[i], '.lgcustom');
                }
            }

            var lguid = _this.el.getAttribute('lg-uid');
            delete window.lgData[lguid];
            _this.el.removeAttribute('lg-uid');
        }

        // Unbind all events added by lightGallery
        _lgUtils2.default.off(this.el, '.lgtm');

        // Distroy all lightGallery modules
        for (var key in window.lgModules) {
            if (_this.modules[key]) {
                _this.modules[key].destroy(d);
            }
        }

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        _lgUtils2.default.off(window, '.lg');
        _lgUtils2.default.removeClass(document.body, 'lg-on');
        _lgUtils2.default.removeClass(document.body, 'lg-from-hash');

        if (_this.outer) {
            _lgUtils2.default.removeClass(_this.outer, 'lg-visible');
        }

        _lgUtils2.default.removeClass(document.querySelector('.lg-backdrop'), 'in');
        setTimeout(function () {
            try {
                if (_this.outer) {
                    _this.outer.parentNode.removeChild(_this.outer);
                }

                if (document.querySelector('.lg-backdrop')) {
                    document.querySelector('.lg-backdrop').parentNode.removeChild(document.querySelector('.lg-backdrop'));
                }

                if (!d) {
                    _lgUtils2.default.trigger(_this.el, 'onCloseAfter');
                }
                _this.el.focus();
            } catch (err) {}
        }, _this.s.backdropDuration + 50);
    };

    window.lightGallery = function (el, options) {
        if (!el) {
            return;
        }

        try {
            if (!el.getAttribute('lg-uid')) {
                var uid = 'lg' + window.lgData.uid++;
                window.lgData[uid] = new Plugin(el, options);
                el.setAttribute('lg-uid', uid);
            } else {
                window.lgData[el.getAttribute('lg-uid')].init();
            }
        } catch (err) {
            console.error('lightGallery has not initiated properly', err);
        }
    };
});

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.es2015.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getDefaultSettings = () => ({
	elements_selector: "img",
	container: window,
	threshold: 300,
	throttle: 150,
	data_src: "src",
	data_srcset: "srcset",
	data_sizes: "sizes",
	class_loading: "loading",
	class_loaded: "loaded",
	class_error: "error",
	class_initial: "initial",
	skip_invisible: true,
	callback_load: null,
	callback_error: null,
	callback_set: null,
	callback_processed: null,
	callback_enter: null,
	to_webp: false
});

const getTopOffset = function(element) {
	return (
		element.getBoundingClientRect().top +
		window.pageYOffset -
		element.ownerDocument.documentElement.clientTop
	);
};

const isBelowViewport = function(element, container, threshold) {
	const fold =
		container === window
			? window.innerHeight + window.pageYOffset
			: getTopOffset(container) + container.offsetHeight;
	return fold <= getTopOffset(element) - threshold;
};

const getLeftOffset = function(element) {
	return (
		element.getBoundingClientRect().left +
		window.pageXOffset -
		element.ownerDocument.documentElement.clientLeft
	);
};

const isAtRightOfViewport = function(element, container, threshold) {
	const documentWidth = window.innerWidth;
	const fold =
		container === window
			? documentWidth + window.pageXOffset
			: getLeftOffset(container) + documentWidth;
	return fold <= getLeftOffset(element) - threshold;
};

const isAboveViewport = function(element, container, threshold) {
	const fold =
		container === window ? window.pageYOffset : getTopOffset(container);
	return fold >= getTopOffset(element) + threshold + element.offsetHeight;
};

const isAtLeftOfViewport = function(element, container, threshold) {
	const fold =
		container === window ? window.pageXOffset : getLeftOffset(container);
	return fold >= getLeftOffset(element) + threshold + element.offsetWidth;
};

function isInsideViewport(element, container, threshold) {
	return (
		!isBelowViewport(element, container, threshold) &&
		!isAboveViewport(element, container, threshold) &&
		!isAtRightOfViewport(element, container, threshold) &&
		!isAtLeftOfViewport(element, container, threshold)
	);
}

/* Creates instance and notifies it through the window element */
const createInstance = function(classObj, options) {
	var event;
	let eventString = "LazyLoad::Initialized";
	let instance = new classObj(options);
	try {
		// Works in modern browsers
		event = new CustomEvent(eventString, { detail: { instance } });
	} catch (err) {
		// Works in Internet Explorer (all versions)
		event = document.createEvent("CustomEvent");
		event.initCustomEvent(eventString, false, false, { instance });
	}
	window.dispatchEvent(event);
};

/* Auto initialization of one or more instances of lazyload, depending on the 
    options passed in (plain object or an array) */
function autoInitialize(classObj, options) {
	if (!options) {
		return;
	}
	if (!options.length) {
		// Plain object
		createInstance(classObj, options);
	} else {
		// Array of objects
		for (let i = 0, optionsItem; (optionsItem = options[i]); i += 1) {
			createInstance(classObj, optionsItem);
		}
	}
}

const replaceExtToWebp = (value, condition) =>
	condition ? value.replace(/\.(jpe?g|png)/gi, ".webp") : value;

const detectWebp = () => {
	var webpString = "image/webp";
	var canvas = document.createElement("canvas");

	if (canvas.getContext && canvas.getContext("2d")) {
		return canvas.toDataURL(webpString).indexOf(`data:${webpString}`) === 0;
	}

	return false;
};

const runningOnBrowser = typeof window !== "undefined";

const isBot =
	(runningOnBrowser && !("onscroll" in window)) ||
	/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
const supportsClassList =
	runningOnBrowser && "classList" in document.createElement("p");

const supportsWebp = runningOnBrowser && detectWebp();

const addClass = (element, className) => {
	if (supportsClassList) {
		element.classList.add(className);
		return;
	}
	element.className += (element.className ? " " : "") + className;
};

const removeClass = (element, className) => {
	if (supportsClassList) {
		element.classList.remove(className);
		return;
	}
	element.className = element.className.
		replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").
		replace(/^\s+/, "").
		replace(/\s+$/, "");
};

const dataPrefix = "data-";
const processedDataName = "was-processed";
const processedDataValue = "true";

const getData = (element, attribute) => {
	return element.getAttribute(dataPrefix + attribute);
};

const setData = (element, attribute, value) => {
	var attrName = dataPrefix + attribute;
	if (value === null) {
		element.removeAttribute(attrName);
		return;
	}
	element.setAttribute(attrName, value);
};

const setWasProcessedData = element =>
	setData(element, processedDataName, processedDataValue);

const getWasProcessedData = element =>
	getData(element, processedDataName) === processedDataValue;

const setSourcesInChildren = function(
	parentTag,
	attrName,
	dataAttrName,
	toWebpFlag
) {
	for (let i = 0, childTag; (childTag = parentTag.children[i]); i += 1) {
		if (childTag.tagName === "SOURCE") {
			let attrValue = getData(childTag, dataAttrName);
			setAttributeIfValue(childTag, attrName, attrValue, toWebpFlag);
		}
	}
};

const setAttributeIfValue = function(
	element,
	attrName,
	value,
	toWebpFlag
) {
	if (!value) {
		return;
	}
	element.setAttribute(attrName, replaceExtToWebp(value, toWebpFlag));
};

const setSourcesImg = (element, settings) => {
	const toWebpFlag = supportsWebp && settings.to_webp;
	const srcsetDataName = settings.data_srcset;
	const parent = element.parentNode;

	if (parent && parent.tagName === "PICTURE") {
		setSourcesInChildren(parent, "srcset", srcsetDataName, toWebpFlag);
	}
	const sizesDataValue = getData(element, settings.data_sizes);
	setAttributeIfValue(element, "sizes", sizesDataValue);
	const srcsetDataValue = getData(element, srcsetDataName);
	setAttributeIfValue(element, "srcset", srcsetDataValue, toWebpFlag);
	const srcDataValue = getData(element, settings.data_src);
	setAttributeIfValue(element, "src", srcDataValue, toWebpFlag);
};

const setSourcesIframe = (element, settings) => {
	const srcDataValue = getData(element, settings.data_src);

	setAttributeIfValue(element, "src", srcDataValue);
};

const setSourcesVideo = (element, settings) => {
	const srcDataName = settings.data_src;
	const srcDataValue = getData(element, srcDataName);

	setSourcesInChildren(element, "src", srcDataName);
	setAttributeIfValue(element, "src", srcDataValue);
	element.load();
};

const setSourcesBgImage = (element, settings) => {
	const toWebpFlag = supportsWebp && settings.to_webp;
	const srcDataValue = getData(element, settings.data_src);

	if (srcDataValue) {
		let setValue = replaceExtToWebp(srcDataValue, toWebpFlag);
		element.style.backgroundImage = `url("${setValue}")`;
	}
};

const setSourcesFunctions = {
	IMG: setSourcesImg,
	IFRAME: setSourcesIframe,
	VIDEO: setSourcesVideo
};

const setSources = (element, settings) => {
	const tagName = element.tagName;
	const setSourcesFunction = setSourcesFunctions[tagName];
	if (setSourcesFunction) {
		setSourcesFunction(element, settings);
		return;
	}
	setSourcesBgImage(element, settings);
};

const callbackIfSet = function(callback, argument) {
	if (callback) {
		callback(argument);
	}
};

const genericLoadEventName = "load";
const mediaLoadEventName = "loadeddata";
const errorEventName = "error";

const addEventListener = (element, eventName, handler) => {
	element.addEventListener(eventName, handler);
};

const removeEventListener = (element, eventName, handler) => {
	element.removeEventListener(eventName, handler);
};

const addAllEventListeners = (element, loadHandler, errorHandler) => {
	addEventListener(element, genericLoadEventName, loadHandler);
	addEventListener(element, mediaLoadEventName, loadHandler);
	addEventListener(element, errorEventName, errorHandler);
};

const removeAllEventListeners = (element, loadHandler, errorHandler) => {
	removeEventListener(element, genericLoadEventName, loadHandler);
	removeEventListener(element, mediaLoadEventName, loadHandler);
	removeEventListener(element, errorEventName, errorHandler);
};

const eventHandler = function(event, success, settings) {
	const className = success ? settings.class_loaded : settings.class_error;
	const callback = success ? settings.callback_load : settings.callback_error;
	const element = event.target;

	removeClass(element, settings.class_loading);
	addClass(element, className);
	callbackIfSet(callback, element);
};

const addOneShotEventListeners = (element, settings) => {
	const loadHandler = event => {
		eventHandler(event, true, settings);
		removeAllEventListeners(element, loadHandler, errorHandler);
	};
	const errorHandler = event => {
		eventHandler(event, false, settings);
		removeAllEventListeners(element, loadHandler, errorHandler);
	};
	addAllEventListeners(element, loadHandler, errorHandler);
};

const managedTags = ["IMG", "IFRAME", "VIDEO"];

function revealElement(element, settings, force) {
	if (!force && getWasProcessedData(element)) {
		return; // element has already been processed and force wasn't true
	}
	callbackIfSet(settings.callback_enter, element);
	if (managedTags.indexOf(element.tagName) > -1) {
		addOneShotEventListeners(element, settings);
		addClass(element, settings.class_loading);
	}
	setSources(element, settings);
	setWasProcessedData(element);
	callbackIfSet(settings.callback_set, element);
}

const removeFromArray = (elements, indexes) => {
	while (indexes.length) {
		elements.splice(indexes.pop(), 1);
	}
};

/*
 * Constructor
 */

const LazyLoad = function(instanceSettings) {
	this._settings = Object.assign({}, getDefaultSettings(), instanceSettings);
	this._queryOriginNode =
		this._settings.container === window
			? document
			: this._settings.container;

	this._previousLoopTime = 0;
	this._loopTimeout = null;
	this._boundHandleScroll = this.handleScroll.bind(this);

	this._isFirstLoop = true;
	window.addEventListener("resize", this._boundHandleScroll);
	this.update();
};

LazyLoad.prototype = {
	_loopThroughElements: function(forceDownload) {
		const settings = this._settings,
			elements = this._elements,
			elementsLength = !elements ? 0 : elements.length;
		let i,
			processedIndexes = [],
			isFirstLoop = this._isFirstLoop;

		if (isFirstLoop) {
			this._isFirstLoop = false;
		}

		if (elementsLength === 0) {
			this._stopScrollHandler();
			return;
		}

		for (i = 0; i < elementsLength; i++) {
			let element = elements[i];
			/* If must skip_invisible and element is invisible, skip it */
			if (settings.skip_invisible && element.offsetParent === null) {
				continue;
			}

			if (
				isBot ||
				forceDownload ||
				isInsideViewport(
					element,
					settings.container,
					settings.threshold
				)
			) {
				if (isFirstLoop) {
					addClass(element, settings.class_initial);
				}
				this.load(element);
				processedIndexes.push(i);
			}
		}

		// Removing processed elements from this._elements.
		removeFromArray(elements, processedIndexes);
	},

	_purgeElements: function() {
		const elements = this._elements,
			elementsLength = elements.length;
		let i,
			processedIndexes = [];

		for (i = 0; i < elementsLength; i++) {
			if (getWasProcessedData(elements[i])) {
				processedIndexes.push(i);
			}
		}
		removeFromArray(elements, processedIndexes);
	},

	_startScrollHandler: function() {
		if (!this._isHandlingScroll) {
			this._isHandlingScroll = true;
			this._settings.container.addEventListener(
				"scroll",
				this._boundHandleScroll
			);
		}
	},

	_stopScrollHandler: function() {
		if (this._isHandlingScroll) {
			this._isHandlingScroll = false;
			this._settings.container.removeEventListener(
				"scroll",
				this._boundHandleScroll
			);
		}
	},

	handleScroll: function() {
		const throttle = this._settings.throttle;

		if (throttle !== 0) {
			let now = Date.now();
			let remainingTime = throttle - (now - this._previousLoopTime);
			if (remainingTime <= 0 || remainingTime > throttle) {
				if (this._loopTimeout) {
					clearTimeout(this._loopTimeout);
					this._loopTimeout = null;
				}
				this._previousLoopTime = now;
				this._loopThroughElements();
			} else if (!this._loopTimeout) {
				this._loopTimeout = setTimeout(
					function() {
						this._previousLoopTime = Date.now();
						this._loopTimeout = null;
						this._loopThroughElements();
					}.bind(this),
					remainingTime
				);
			}
		} else {
			this._loopThroughElements();
		}
	},

	loadAll: function() {
		this._loopThroughElements(true);
	},

	update: function() {
		// Converts to array the nodeset obtained querying the DOM from _queryOriginNode with elements_selector
		this._elements = Array.prototype.slice.call(
			this._queryOriginNode.querySelectorAll(
				this._settings.elements_selector
			)
		);
		this._purgeElements();
		this._loopThroughElements();
		this._startScrollHandler();
	},

	destroy: function() {
		window.removeEventListener("resize", this._boundHandleScroll);
		if (this._loopTimeout) {
			clearTimeout(this._loopTimeout);
			this._loopTimeout = null;
		}
		this._stopScrollHandler();
		this._elements = null;
		this._queryOriginNode = null;
		this._settings = null;
	},

	load: function(element, force) {
		revealElement(element, this._settings, force);
	}
};

/* Automatic instances creation if required (useful for async script loading) */
if (runningOnBrowser) {
	autoInitialize(LazyLoad, window.lazyLoadOptions);
}

/* harmony default export */ __webpack_exports__["a"] = (LazyLoad);


/***/ }),

/***/ "./resources/assets/js/news-show.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload__ = __webpack_require__("./node_modules/vanilla-lazyload/dist/lazyload.es2015.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lightgallery_js__ = __webpack_require__("./node_modules/lightgallery.js/lib/js/lightgallery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lightgallery_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lightgallery_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lg_thumbnail_js__ = __webpack_require__("./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lg_thumbnail_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lg_thumbnail_js__);




var SnippetShowNews = function () {
	var light_gallery_images = window.sharedData.light_gallery_images;


	var initialize = function initialize() {
		initLazyLoad();
		handleClickOpenGallery();
	};

	var handleClickOpenGallery = function handleClickOpenGallery() {
		var buttons = document.getElementsByClassName('btn-open-gallery');

		Array.from(buttons).forEach(function (el) {
			el.addEventListener('click', function (e) {
				e.preventDefault();
				lightGallery(e.currentTarget, {
					dynamic: true,
					dynamicEl: light_gallery_images,
					thumbnail: true
				});
			});
		});
	};

	var handleClickGallery = function handleClickGallery() {
		$('.btn-open-gallery').click(function (e) {
			e.preventDefault();
			$('#gallery-thumbnails a').first().trigger('click');
		});
	};

	var initLazyLoad = function initLazyLoad() {
		var lazyLoad = new __WEBPACK_IMPORTED_MODULE_0_vanilla_lazyload__["a" /* default */]({
			elements_selector: '.lazyload'
		});
	};

	var initBottomGallery = function initBottomGallery() {
		var el = $('#gallery-thumbnails');

		el.lightGallery({
			thumbnail: true
		});

		el.on('onBeforeSlide.lg', function (event, prevIndex, index) {
			//sendHitGalleryAnalytics(index)
		});
	};

	return {
		init: function init() {
			return initialize();
		}
	};
}();

document.addEventListener('DOMContentLoaded', function () {
	return SnippetShowNews.init();
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/news-show.js");


/***/ })

/******/ });