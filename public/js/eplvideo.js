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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/vendors/eplvideo.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	"use strict";

	var DEFAULT = null,
	    MAPPINGS = {
		id: "id",
		a: "attrs",
		w: "width",
		h: "height",
		is: "imageServer",
		st: "style",
		pc: "primary_color",
		bc: "background_color",
		hc: "highlight_color",
		tt: "tag_time_token",
		vs: "videos",
		u: "url",
		tit: "title",
		desc: "description",
		pt: "poster",
		lg: "logo",
		p: "position",
		m: "margin",
		ads: "ads",
		bt: "break_type",
		c: "clickurl",
		tot: "time_offset_type",
		to: "time_offset",
		vu: "vast_urls",
		e: "ecpm",
		skipt: "skip_time"
	},
	    ALLOWED_OPTS = ["controls", "autoplay", "loop", "muted", "height", "width", "poster", "src", "showDescription", "showTitle", "socialSharing", "vast", "vmap", "hasSkipTime"],
	    ATTRS = {
		"1": {
			key: "autoplay",
			val: true
		},
		"2": {
			key: "loop",
			val: true
		},
		"4": {
			key: "muted",
			val: true
		},
		"8": {
			key: "showTitle",
			val: true
		},
		"16": {
			key: "showDescription",
			val: true
		},
		"32": {
			key: "controls",
			val: true
		},
		"64": {
			key: "socialSharing",
			val: true
		},
		"128": {
			key: "analytics",
			val: true
		},
		"256": {
			key: "hideIfNoPreRoll",
			val: true
		},
		"512": {
			key: "hasSkipTime",
			val: true
		}
	},
	    LOGO_POS = ["TL", "TR", "BL", "BR"],
	    ADS_URL = "e-planning.video/vp/tg/1/",
	    CSS = ["video-js.css", "eplvideo.css", "videojs.ads.css", "videojs-dock.css", "videojs-logo-overlay.css", "videojs-social-share.css", "videojs.ima.css"],
	    JS = ["video.js", "videojs.ads.js", "videojs-playlist.js", "videojs-contrib-hls.min.js", "vast-client.js", "videojs-dock.min.js", "videojs-logo-overlay.js", "eplvideo-metrics.js", "videojs-social-share.js", "videojs-ga.js", "eplvideo-playlistControls.js", "videojs.ima.js", "eplvideo-ima.js", "//imasdk.googleapis.com/js/sdkloader/ima3.js"],
	    MSG_MAP = {
		no_videos: "This playlist doesn't have any content"
	},
	    browser = {
		isIOS: isIOS(),
		iOSVersion: iOSVersion()
	},
	    win = window,
	    doc = document,
	    IE = document.all ? true : false,
	    protocol = win.location.protocol,
	    eplplayers = {},
	    client,
	    client_code,
	    platform,
	    eplvideo,
	    spinner;

	/*
  * Auxiliary functionss
  */

	function extendObject(target, base) {
		var i;

		for (i in base) {
			if (base.hasOwnProperty(i)) {
				if (_typeof(target[i]) === "object") {
					extendObject(target[i], base[i]);
				} else {
					target[i] = base[i];
				}
			}
		}
	}
	function getIframeDocument(iframe) {
		return iframe.contentWindow.document;
	}
	function getIframeWindow(iframe) {
		return iframe.contentWindow;
	}
	function getPlayerWindow(player) {
		return player.el().ownerDocument.defaultView;
	}
	function waitForCompleteState(doc, func) {
		if (doc.readyState === "complete") {
			func();
		} else {
			setTimeout(function () {
				waitForCompleteState(doc, func);
			}, 250);
		}
	}
	function defined(thing) {
		if (typeof thing === "undefined") {
			return false;
		}
		return true;
	}
	function isArray(thing) {
		if (Object.prototype.toString.call(thing) === "[object Array]") {
			return true;
		}
		return false;
	}
	function isObj(thing) {
		if (thing !== null && (typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object") {
			return true;
		}
		return false;
	}
	function getRandom() {
		return Math.random();
	}
	function isPluginLoaded(player, pluginName) {
		return typeof player[pluginName] === "function";
	}
	function any(array, fn) {
		if (!defined(array) || array.length < 1) return false;

		function or(p, q) {
			return p || q;
		}

		return array.map(fn).reduce(or, false);
	}
	function setAttributes(el, attrs) {
		for (var attr in attrs) {
			if (!attrs.hasOwnProperty(attr)) continue;
			el.setAttribute(attr, attrs[attr]);
		}
	}
	function create(elemType) {
		return doc.createElement(elemType);
	}
	function getDataset(elem, data) {
		var dataset = {},
		    tmp;

		if (defined(elem.dataset)) {
			dataset = elem.dataset;
		} else {
			// Fallback for older browsers
			for (var i = 0; i < elem.attributes.length; i++) {
				tmp = elem.attributes[i].name.match(/data-(\w+)/);
				if (tmp) {
					dataset[tmp[1]] = elem.attributes[i].value;
				}
			}
		}

		if (data) {
			return dataset[data];
		} else {
			return dataset;
		}
	}
	function displayMsg(player, msg_code) {
		var msgComponent, container, center, content;

		if (!player) return;

		msgComponent = player.getChild("errorDisplay");

		container = doc.createElement("div");
		container.className = "eplvideo-msg-container";

		center = doc.createElement("div");
		center.className = "eplvideo-msg-center";

		content = doc.createElement("div");
		content.className = "eplvideo-msg-content";
		if (MSG_MAP[msg_code]) {
			content.innerText = MSG_MAP[msg_code];
		} else {
			console.error("msg_code %s not defined", msg_code);
		}

		center.appendChild(content);
		container.appendChild(center);

		msgComponent.open().fillWith(container);
	}
	function timeoutWrap(func, timeout) {
		return function () {
			setTimeout(func, timeout);
		};
	}
	function isIOS() {
		var USER_AGENT = window.navigator && window.navigator.userAgent || '',
		    IS_IPAD = /iPad/i.test(USER_AGENT),
		    IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD,
		    IS_IPOD = /iPod/i.test(USER_AGENT),
		    IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

		return IS_IOS;
	}
	function iOSVersion() {
		var USER_AGENT = window.navigator && window.navigator.userAgent || '',
		    match = USER_AGENT.match(/OS (\d+)_/i);

		if (match && match[1]) {
			return match[1];
		}
		return null;
	}

	/*
  * Iframe generator
  */

	function appendScript(domain, head, file) {
		var newScript;
		if (file.substring(0, 2) === "//") {
			newScript = "<script src=" + file + "></script>";
		} else {
			newScript = '<script src="//' + domain + '/video/js/' + file + '"></script>';
		}
		return head + newScript;
	}
	function appendCssTag(domain, head, file) {
		return head + '<link href="//' + domain + '/video/css/' + file + '" rel="stylesheet">';
	}
	function createVideoTag(config) {
		var videoTag = create('video');

		videoTag.id = config.playlist ? config.playlist : config.videos[0].id;
		videoTag.className = "video-js my-custom-skin vjs-sublime-skin vjs-big-play-centered";
		setAttributes(videoTag, {
			"webkit-playsinline": "webkit-playsinline",
			"playsinline": "playsinline"
		});

		if (IE) {
			// Fallback if <IE11. The default settings result in weird viewport calculations
			videoTag.style.height = "0.95vh";
			videoTag.style.width = "95%";
		} else {
			videoTag.style.height = "95vh";
			videoTag.style.width = "100%";
		}

		return videoTag.outerHTML;
	}
	function generateHTML(config) {
		var head = "",
		    body = "",
		    assetsDomain = config.testserver || config.imageServer;

		head = CSS.reduce(appendCssTag.bind(null, assetsDomain), head);
		head = JS.reduce(appendScript.bind(null, assetsDomain), head);

		// Insert BrowserSync tag for development
		if (config.testserver) body += config.bstag || "";

		body += createVideoTag(config);

		return "<!DOCTYPE html><html lang='en'><meta charset='utf-8'>" + "<body>" + head + body + "</body></html>";
	}
	function createSVGSpinner(div) {
		var svgNS = "http://www.w3.org/2000/svg",
		    createSVGElement = doc.createElementNS.bind(doc, svgNS),
		    svg = createSVGElement("svg");

		function appendChilds(el, childs) {
			childs.reduce(function (el, child) {
				el.appendChild(child);
				return el;
			}, el);
		}

		// Create SVG element
		setAttributes(svg, {
			width: 44,
			height: 44,
			viewBox: "0 0 44 44",
			stroke: "#000"
		});

		// Create Group element
		var group = createSVGElement("g");

		setAttributes(group, {
			fill: "none",
			"fill-rule": "evenodd",
			"stroke-width": 2
		});

		// Create Circles
		var circle_1 = createSVGElement("circle");
		var circle_2 = createSVGElement("circle");

		var circle_attrs = {
			cx: 22,
			cy: 22
		};

		setAttributes(circle_1, circle_attrs);
		setAttributes(circle_2, circle_attrs);

		// Create animations

		// frame is used to keep track of current frame in animation
		var frame = 0;
		// setInterval return is saved to spinner for later removal
		spinner.interval = setInterval(function () {
			var duration = 120;
			var offsetFrame = (frame + 60) % duration;

			// Given a frame, the duration of the animation and the start and end values,
			// returns the value the animation should have in that particular frame.
			function easeOut(frame, duration, startV, endV) {
				return (endV - startV) * (Math.pow(frame / duration - 1, 3) + 1) + startV;
			}

			setAttributes(circle_2, {
				r: easeOut(frame, duration, 1, 20),
				"stroke-opacity": easeOut(frame, duration, 1, 0)
			});
			setAttributes(circle_1, {
				r: easeOut(offsetFrame, duration, 1, 20),
				"stroke-opacity": easeOut(offsetFrame, duration, 1, 0)
			});

			frame = (frame + 1) % duration;
		}, 1000 / 60);

		appendChilds(group, [circle_1, circle_2]);

		svg.appendChild(group);

		// Set up container attributes
		div.style.position = "absolute";
		div.style.left = "calc(50% - 22px)";
		div.style.top = "50%";

		div.appendChild(svg);
	}
	function createIframeForPlayer(div, config) {
		var iframe, ifrDocument;

		iframe = create("iframe");
		spinner = create("div");
		iframe.style.border = "none";
		iframe.width = config.responsive ? "100%" : config.width;
		iframe.height = config.responsive ? "100%" : config.height;
		setAttributes(iframe, { allowfullscreen: "allowfullscreen" });

		div.appendChild(iframe);

		ifrDocument = getIframeDocument(iframe);
		ifrDocument.open();
		ifrDocument.write(generateHTML(config));
		ifrDocument.close();

		createSVGSpinner(spinner);
		ifrDocument.querySelector("body").appendChild(spinner);

		return iframe;
	}

	/*
  * AdServer caller
  */

	function getPlayerConfURL(config) {
		return protocol + "//" + platform + "." + ADS_URL + client + "/" + config.player;
	}
	function formatParams(params) {
		var res = "";

		function concatKeyParam(key) {
			return key + "=" + params[key];
		}

		if (params) {
			res = "?" + Object.keys(params).map(concatKeyParam).join("&");
		}

		return res;
	}
	function ajax(settings, success, fail) {
		var xhr = new XMLHttpRequest(),
		    attr,
		    url = settings.url + formatParams(settings.params);

		if (IE) {
			xhr = new win.XDomainRequest();
			xhr.onload = function () {
				success(xhr.responseText);
			};
			xhr.onerror = function () {
				fail(xhr, xhr.responseText);
			};
			// Empty handler, if no handler is set, the request fails in IE9
			xhr.onprogress = function () {};

			xhr.open("get", url);
			setTimeout(function () {
				xhr.send();
			}, 0);
		} else {
			xhr.open("GET", url, true);

			for (attr in settings.opts) {
				if (settings.opts.hasOwnProperty(attr)) {
					xhr[attr] = settings.opts[attr];
				}
			}

			xhr.onreadystatechange = function () {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						success(xhr.response);
					} else {
						fail(xhr, xhr.statusText);
					}
				}
			};

			xhr.send();
		}
	}

	/*
  * Response process functions
  */

	function translateProps(source, dst) {
		var attr, key;

		for (attr in source) {
			if (source.hasOwnProperty(attr)) {
				if (isObj(source[attr]) && !isArray(source[attr])) {
					key = MAPPINGS[attr] || attr;
					dst[key] = {};
					translateProps(source[attr], dst[key]);
				} else if (isArray(source[attr])) {
					key = MAPPINGS[attr] || attr;
					dst[key] = [];

					for (var i = 0; i < source[attr].length; i++) {

						if (isObj(source[attr][i])) {
							dst[key].push({});
							translateProps(source[attr][i], dst[key][i]);
						} else {
							dst[key].push(source[attr][i]);
						}
					}
				} else if (MAPPINGS[attr]) {
					dst[MAPPINGS[attr]] = source[attr];
				} else {
					dst[attr] = source[attr];
				}
			}
		}
	}
	function translateAttrs(playerConf) {
		var bit;

		for (bit in ATTRS) {
			if (ATTRS.hasOwnProperty(bit)) {
				if (playerConf.attrs & bit) {
					playerConf[ATTRS[bit].key] = ATTRS[bit].val;
				}
			}
		}
	}
	function parseResponse(adRsp) {
		var res = {};

		translateProps(adRsp, res);
		translateAttrs(res);

		return res;
	}
	function getPlayerConf(adRsp) {
		var res = {},
		    mapping_values = {},
		    key;

		for (key in ALLOWED_OPTS) {
			if (ALLOWED_OPTS.hasOwnProperty(key)) {
				mapping_values[ALLOWED_OPTS[key]] = true;
			}
		}

		for (key in adRsp) {
			if (adRsp.hasOwnProperty(key)) {
				if (defined(mapping_values[key])) {
					res[key] = adRsp[key];
				}
			}
		}

		return res;
	}
	function getVideoObject(video) {
		return {
			sources: [{
				src: video.url,
				type: "application/x-mpegURL"
			}],
			poster: video.poster + "high.jpg",
			title: video.title,
			description: video.description,
			id: video.id
		};
	}

	/*
  * Script tag process functions
  */

	function isSetupComplete(data, report) {
		function error(str) {
			if (report) {
				console.error(str);
			}
		}

		if (!defined(data.player)) {
			error("Missing <player> parameter in config");
			return false;
		}

		if (!defined(data.video) && !defined(data.playlist)) {
			error("Missing <video> or <playlist> parameter in config");
			return false;
		}

		return true;
	}
	function getClientFromTag() {
		var res = getDataset(doc.querySelector("script[src$='eplvideo.js']"), "client");
		if (!defined(res) || res.split("/").length !== 2) {
			console.error("Missing or malformed data-client attribute on script tag");
		}
		return res;
	}
	function getSkipTimeFromTag() {
		var res = getDataset(doc.querySelector("script[src$='eplvideo.js']"), "skipoffset");
		if (!defined(res)) {
			return null;
		}

		return res;
	}
	function processScriptTags() {
		var scriptTags, max, i, dataset, targetDiv, setupData;

		scriptTags = doc.querySelectorAll("script[src$='eplvideo.js']");

		for (i = 0, max = scriptTags.length; i < max; i++) {
			dataset = getDataset(scriptTags[i]);

			if (isSetupComplete(dataset) && dataset.status !== "done") {

				if (dataset.div && doc.getElementById(dataset.div)) {
					targetDiv = dataset.div;
				} else {
					// If theres no div defined, create one below the current scriptTag
					targetDiv = create("div");
					targetDiv.id = dataset.player + "-" + (dataset.playlist ? dataset.playlist : dataset.video);
					scriptTags[i].parentNode.insertBefore(targetDiv, scriptTags[i].nextSibling);
					targetDiv = targetDiv.id;
				}

				setupData = {
					player: dataset.player,
					responsive: dataset.responsive
				};

				if (dataset.playlist) {
					setupData.playlist = dataset.playlist;
				} else {
					setupData.video = dataset.video;
				}

				if (dataset.testserver) {
					setupData.testserver = dataset.testserver;
					if (defined(win.eplvideo_bstag)) setupData.bstag = win.eplvideo_bstag;
					if (defined(win.eplvideo_mock)) setupData.mock = win.eplvideo_mock;
				}

				eplvideo(targetDiv).setup(setupData);

				dataset.status = "done";
			}
		}
	}

	/*
  * videojs player constructor
  */

	function hideIfNoPreRoll(player_conf, adRsp, player) {
		if (!player_conf.hideIfNoPreRoll) return;

		// Check adSlots
		if (!(prerollIn(adRsp) || player_conf.vast && player_conf.vast.preroll)) return true;

		// Check plugins
		if (!isPluginLoaded(player, "ads")) return true;
		if (!isPluginLoaded(player, "vast")) return true;
		if (!defined(getPlayerWindow(player).DMVAST)) return true;

		return false;
	}
	function prerollIn(adRsp) {
		var res = false;

		function isPreroll(ad) {
			if (ad.time_offset_type === 2 && ad.time_offset === 0) {
				return true;
			}
			return false;
		}

		res = any(adRsp.ads, isPreroll);

		return res;
	}
	function placeTitleBar(player, player_conf) {
		var video = player.playlist()[player.playlist.currentItem()],
		    config,
		    showTitle = player_conf.showTitle,
		    showDesc = player_conf.showDescription;

		if (!showTitle && !showDesc) return;

		if (!isPluginLoaded(player, "dock")) return;

		config = {
			title: showTitle ? video.title : "",
			description: showDesc ? video.description : ""
		};

		player.on("adstart", function () {
			player.dock();
		});
		player.on("adend", function () {
			player.dock(config);
		});
		player.dock(config);
	}
	function placeLogo(player, logo) {
		if (!isPluginLoaded(player, "logoOverlay")) return;

		player.logoOverlay({
			src: logo.url,
			link: logo.clickurl ? logo.clickurl : "",
			margin: logo.margin,
			position: LOGO_POS[logo.position]
		});
	}
	function setSocialSharing(player) {
		if (!isPluginLoaded(player, "socialShare")) return;

		var href;
		try {
			href = win.top.location.href;
		} catch (e) {}

		player.socialShare({
			facebook: {
				shareUrl: href
			},
			twitter: {
				shareUrl: href
			}
		});
	}
	function setAdslotData(adslots, player_conf) {
		var vast_conf = player_conf.vast,
		    filtered,
		    type,
		    offsets = {
			preroll: 0,
			midroll: 50,
			postroll: 100
		};

		function typeFilter(type, adslot) {
			return adslot.time_offset === offsets[type];
		}

		function setType(type, adslot) {
			adslot.vast_urls = [{ url: vast_conf[type] }];
		}

		for (type in vast_conf) {
			if (!vast_conf.hasOwnProperty(type)) continue;

			filtered = adslots.filter(typeFilter.bind(null, type));

			if (filtered.length) {
				filtered.forEach(setType.bind(null, setType));
			} else {
				adslots.push({
					break_type: 1,
					time_offset_type: 2,
					time_offset: offsets[type],
					vast_urls: [{ url: vast_conf[type] }]
				});
			}
		}
	}
	function setVast(player, player_conf, adSlots) {
		var config;

		if (!isPluginLoaded(player, "ads") || !isPluginLoaded(player, "vast")) return;

		if (!defined(adSlots)) {
			adSlots = [];
		}

		if (player_conf.vast) {
			// Override or set adSlot info
			setAdslotData(adSlots, player_conf);
		}

		config = {
			hideIfNoPreRoll: player_conf.hideIfNoPreRoll,
			adSlots: adSlots
		};

		player.ads();
		player.vast(config);
	}
	function setIma(player, player_conf, adSlots) {
		var adUrls = {},
		    vastUrls = {},
		    vmapUrl,
		    offsets = { 0: 'preroll', 50: 'midroll', 100: 'postroll' };

		if (!player_conf.vast) {
			if (!defined(adSlots)) {
				adSlots = [];
			}

			adSlots.forEach(function (adSlot) {
				vastUrls[offsets[adSlot.time_offset]] = adSlot.vast_urls[0].url;
			});
		} else {
			vastUrls = player_conf.vast;
		}

		if (!player_conf.vmap) {
			// to fill once the adserver part is defined and done
		} else {
			vmapUrl = player_conf.vmap;
		}

		adUrls.vast = vastUrls;
		adUrls.vmap = vmapUrl;

		player.eplima(player_conf, adUrls);
	}
	function enableGa(player, iframe) {
		if (typeof win.ga === "function") {
			getIframeWindow(iframe).ga = win.ga;
			player.ga();
		} else {
			console.error("Google Analytics not detected.");
		}
	}
	function enableIOSMute(conf) {
		var defaultControlBarChildren = ['playToggle', 'volumeMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'liveDisplay', 'remainingTimeDisplay', 'customControlSpacer', 'playbackRateMenuButton', 'chaptersButton', 'descriptionsButton', 'subtitlesButton', 'captionsButton', 'audioTrackButton', 'fullscreenToggle'],
		    controlBarChildren = conf.controlBar && conf.controlBar.children || defaultControlBarChildren,
		    volumeMenuIndex = controlBarChildren.indexOf('volumeMenuButton');

		if (volumeMenuIndex !== -1) {
			controlBarChildren[volumeMenuIndex] = 'muteToggle';
		} else {
			controlBarChildren.splice(controlBarChildren.find(playToggle) + 1, 0, 'muteToggle');
		}

		conf.controlBar = conf.controlBar || {};
		conf.controlBar.children = controlBarChildren;
		conf.dontHideMute = true;
	}
	function createPlayer(iframe, adRsp, readyFunc) {
		var logo = adRsp.logo,
		    player_conf = getPlayerConf(adRsp),
		    socialSharing = player_conf.socialSharing,
		    analytics = player_conf.analytics,
		    videos,
		    player,
		    videoEl,
		    videojs;

		videojs = getIframeWindow(iframe).videojs;

		// For contrib-ads and fallback flash tech
		videojs.Html5 = videojs.getComponent("Html5");
		videojs.Flash = videojs.getComponent("Flash");

		if (player_conf.muted && browser.isIOS && browser.iOSVersion >= 10) {
			// from version 10 iOS allows autoplay of muted videos.
			// In this case an unmute button is neccesary for the user
			// to activate sound playback
			enableIOSMute(player_conf);
		}
		// Init the player
		videoEl = getIframeDocument(iframe).querySelector("video");
		player = getIframeWindow(iframe).videojs(videoEl, player_conf);

		player.browser_ = browser;

		if (!IE) {
			if (adRsp.ads || player_conf.vast || player_conf.vmap) setIma(player, player_conf, adRsp.ads);
		}

		// Set title and description listener
		// The function is called async with a timeout wrapper to avoid invalid playlist state
		// see https://github.com/brightcove/videojs-playlist/issues/62 for more details
		player.on("playlistitem", timeoutWrap(placeTitleBar.bind(null, player, player_conf), 10));

		// Process adRsp video list and create video objects
		videos = adRsp.videos.reduce(function (list, video) {
			list.push(getVideoObject(video));
			return list;
		}, []);

		// Load the videos into the playlist
		player.playlist(videos);
		if (!isPluginLoaded(player, "ads")) player.playlist.autoadvance(1);

		// Init playlist controls
		if (isPluginLoaded(player, "playlistControls")) {
			player.playlistControls(adRsp);
		}

		if (IE && videos.length) {
			// Fallback in case of <IE11
			player.src({ src: videos[0].url, type: "video/mp4" });
		}

		if (!videos.length) {
			displayMsg(player, "no_videos");
		}

		// Check if player must be removed if no pre-roll ads were returned
		// or any plugin failed. If so, removes the player and returns null
		if (hideIfNoPreRoll(player_conf, adRsp, player)) {
			player.dispose();
			return null;
		}

		if (player_conf.muted) {
			// Fix for Firefox not muting the player by videojs constructor
			player.muted(true);
		}

		// Initialize plugins accordingly to config
		if (analytics) enableGa(player, iframe);

		if (!IE) {
			// Currently not compatible with <IE11
			if (logo) placeLogo(player, logo);
			if (socialSharing) setSocialSharing(player);
		}

		// Set up metrics
		if (isPluginLoaded(player, "videoMetrics")) player.videoMetrics(adRsp);

		// Remove spinner
		clearInterval(spinner.interval);
		spinner.parentNode && spinner.parentNode.removeChild(spinner);

		// If a readyFunc is provided set it up for the eplima plugin or execute
		// it right away otherwise
		if (readyFunc) {
			if (player.eplima) {
				player.on('ready', readyFunc);
			} else {
				readyFunc();
			}
		}

		return player;
	}

	/*
  * eplVideo player constructor
  */

	function Player(id) {
		var that = this,
		    div = doc.getElementById(id);

		that.events = {};

		that.setup = function (config) {
			if (isSetupComplete(config, true)) {
				callAdSvr.call(that, div, config);
				eplplayers[id] = that;

				return that;
			}
		};
	}
	function callAdSvr(div, config) {
		var that = this,
		    player,
		    ajaxConf;

		config.client = client;
		config.platform = platform;

		ajaxConf = {
			url: getPlayerConfURL(config),
			params: {
				rnd: getRandom()
			},
			opts: {
				responseType: "json",
				withCredentials: true
			}
		};

		if (config.playlist) {
			ajaxConf.params.p = config.playlist;
		} else {
			ajaxConf.params.v = config.video;
		}

		if (IE) {
			// Send to adServer if the browser needs to fallback to older techs
			// currently, the video is sent in mp4 format and not HLS ts parts.
			ajaxConf.params.fb = 1;
		}

		// Send request to retrieve eplvideo player and videos data
		ajax(ajaxConf, processResponse.bind(that, config, div, player), function (xhr, errorCode) {
			if (errorCode === 404) {
				console.error("Invalid %s id", config.playlist ? "playlist" : "video");
			} else {
				console.error("There has been an error retrieving player data: %s", errorCode);
			}

			eplvideo.debug = {
				hxr: xhr
			};
		});

		that.on = function (eventType, handler) {
			if (eventType === "ready") {
				that.events.ready = handler;
			}
		};

		that.off = function (eventType) {
			if (eventType === "ready") {
				delete that.events.ready;
			}
		};
	}
	function processResponse(config, div, player, response) {
		var adRsp = response,
		    iframe,
		    that = this,
		    evts = that.events;

		if (defined(config.testserver) && defined(config.mock)) {
			adRsp = config.mock;
		}

		// Fix for old safari not parsing response
		if (typeof adRsp === "string") {
			adRsp = JSON.parse(adRsp);
		}

		adRsp = parseResponse(adRsp);
		extendObject(adRsp, config);

		iframe = createIframeForPlayer(div, adRsp);

		waitForCompleteState(getIframeDocument(iframe), function () {
			var readyFunc = evts.ready ? evts.ready.bind(that, that) : null;
			player = createPlayer(iframe, adRsp, readyFunc);

			if (!player) {
				div.removeChild(iframe);
				return;
			}

			player.on('eplRemovePlayer', function () {
				that.remove();
			});

			if (window._customSkipTime) {
				player.customSkipTime = parseInt(window._customSkipTime);
			} else if (adRsp.hasSkipTime) {
				player.customSkipTime = adRsp.skip_time;
			}

			that = new VideoWrapper({
				id: div.id,
				div: div,
				player: player,
				iframe: iframe,
				events: evts
			});

			eplplayers[div.id] = that;
		});
	}

	/*
  * eplVideo wrapper
  */

	function VideoWrapper(conf) {
		this.id = conf.id;
		this.div = conf.div;
		this.player = conf.player;
		this.iframe = conf.iframe;
		this.events = conf.events;
		this.player.apiCommand = false;
	}
	VideoWrapper.prototype.getDiv = function () {
		return this.div;
	};
	VideoWrapper.prototype.isPaused = function () {
		return this.player.paused();
	};
	VideoWrapper.prototype.pause = function () {
		var that = this;
		if (!this.player.paused()) {
			this.player.apiCommand = true;
			this.player.one("pause", function () {
				that.player.apiCommand = false;
			});
			this.player.pause();
		}
	};
	VideoWrapper.prototype.play = function () {
		var that = this;
		if (this.player.paused()) {
			this.player.apiCommand = true;
			this.player.one("play", function () {
				that.player.apiCommand = false;
			});
			this.player.play();
		}
	};
	VideoWrapper.prototype.getDuration = function () {
		return this.player.duration();
	};
	VideoWrapper.prototype.getCurrentTime = function () {
		return this.player.currentTime();
	};
	VideoWrapper.prototype.setCurrentTime = function (seconds) {
		this.player.currentTime(seconds);
	};
	VideoWrapper.prototype.getRemainingTime = function () {
		return this.player.remainingTime();
	};
	VideoWrapper.prototype.isEnded = function () {
		return this.player.ended();
	};
	VideoWrapper.prototype.isFullscreen = function () {
		return this.player.isFullscreen();
	};
	VideoWrapper.prototype.enterFullscreen = function () {
		this.player.requestFullscreen();
	};
	VideoWrapper.prototype.exitFullscreen = function () {
		this.player.exitFullscreen();
	};
	VideoWrapper.prototype.load = function () {
		this.player.load();
	};
	VideoWrapper.prototype.isLoop = function () {
		this.player.loop();
	};
	VideoWrapper.prototype.setLoop = function (bool) {
		this.player.loop(bool);
	};
	VideoWrapper.prototype.isMuted = function () {
		return this.player.muted();
	};
	VideoWrapper.prototype.setMute = function (bool) {
		var that = this;

		if (this.player.muted() === bool) {
			return;
		}

		this.player.apiCommand = true;
		this.player.on("volumechange", function () {
			that.player.apiCommand = false;
		});
		this.player.muted(bool);
	};
	VideoWrapper.prototype.isPreload = function () {
		return this.player.preload();
	};
	VideoWrapper.prototype.setPreload = function (bool) {
		this.player.preload(bool);
	};
	VideoWrapper.prototype.setWidth = function (width) {
		this.iframe.width = width;
	};
	VideoWrapper.prototype.skipAds = function (args) {
		this.player.customSkipTime = args.delayInSeconds || null;

		if (this.player.ads.isAdPlaying() && args.delayInSeconds != null) {
			this.player.ima.generateSkipButton(args.delayInSeconds);
		}
	};
	VideoWrapper.prototype.setHeight = function (height) {
		this.iframe.height = height;
	};
	VideoWrapper.prototype.getWidth = function () {
		return this.iframe.width;
	};
	VideoWrapper.prototype.getHeight = function () {
		return this.iframe.height;
	};
	VideoWrapper.prototype.show = function () {
		this.iframe.style.display = "";
		this.player.show();
	};
	VideoWrapper.prototype.hide = function () {
		this.iframe.style.display = "none";
		this.player.hide();
	};
	VideoWrapper.prototype.remove = function () {
		this.player.dispose();
		delete eplplayers[this.id];
		this.div.removeChild(this.iframe);
	};
	VideoWrapper.prototype.on = function (eventType, handler) {
		var wrappedHandler,
		    that = this;

		wrappedHandler = function wrappedHandler(evt) {
			if (evt.target.className.indexOf("ad-playing") != -1) {
				evt.userInitiated = false;
			} else {
				evt.userInitiated = !that.player.apiCommand;
			}
			handler(evt);
		};

		this.events[handler] = wrappedHandler;

		if (eventType === 'ready') {
			this.events.ready = handler;
		} else {
			this.player.on(eventType, wrappedHandler);
		}
	};
	VideoWrapper.prototype.off = function (eventType, handler) {
		if (!defined(handler)) {
			console.error("Second parameter <handler> must be defined");
			return;
		}

		if (typeof handler !== "function") {
			console.error("Handler must be a function");
			return;
		}

		if (eventType === 'ready') {
			delete this.events.ready;
		} else {
			this.player.off(eventType, this.events[handler]);
		}
	};

	/*
  * Main
  */

	eplvideo = function eplvideo(id) {
		if (!defined(doc.getElementById(id))) {
			console.error("Id: %s or element not defined on page.", id);
			return DEFAULT;
		}

		if (!defined(client)) {
			console.error("Missing data-client attribute on script tag");
			return;
		}

		if (eplplayers[id]) {
			return eplplayers[id];
		} else {
			return new Player(id);
		}
	};

	if (!defined(win.eplvideo)) {
		win.eplvideo = eplvideo;
		client_code = getClientFromTag();
		platform = client_code.split("/")[0];
		client = client_code.split("/")[1];

		win._customSkipTime = getSkipTimeFromTag();
	}

	processScriptTags();
})();

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/vendors/eplvideo.js");


/***/ })

/******/ });