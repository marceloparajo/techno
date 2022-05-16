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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addLeadingZeros;
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = assign;
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cloneObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assign_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__assign_index_js__["a" /* default */])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getUTCDayOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_getUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getUTCISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_getUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_getUTCWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = Object(__WEBPACK_IMPORTED_MODULE_4__lib_getUTCWeekYear_index_js__["a" /* default */])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = Object(__WEBPACK_IMPORTED_MODULE_2__lib_getUTCISOWeekYear_index_js__["a" /* default */])(date); // Padding

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = Object(__WEBPACK_IMPORTED_MODULE_3__lib_getUTCWeek_index_js__["a" /* default */])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = Object(__WEBPACK_IMPORTED_MODULE_1__lib_getUTCISOWeek_index_js__["a" /* default */])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = Object(__WEBPACK_IMPORTED_MODULE_0__lib_getUTCDayOfYear_index_js__["a" /* default */])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return __WEBPACK_IMPORTED_MODULE_6__lightFormatters_index_js__["a" /* default */].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(Math.floor(absOffset / 60), 2);
  var minutes = Object(__WEBPACK_IMPORTED_MODULE_5__addLeadingZeros_index_js__["a" /* default */])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return Object(__WEBPACK_IMPORTED_MODULE_0__addLeadingZeros_index_js__["a" /* default */])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ __webpack_exports__["a"] = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTimezoneOffsetInMilliseconds;
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCDayOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(date).getTime() - Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeekYear_index_js__["a" /* default */])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_1__startOfUTCWeek_index_js__["a" /* default */])(date, options).getTime() - Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeekYear_index_js__["a" /* default */])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUTCWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isProtectedDayOfYearToken;
/* harmony export (immutable) */ __webpack_exports__["b"] = isProtectedWeekYearToken;
/* harmony export (immutable) */ __webpack_exports__["c"] = throwProtectedError;
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = requiredArgs;
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/roundingMethods/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRoundingMethod;
var roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: function (value) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  } // Math.trunc is not supported by IE

};
var defaultRoundingMethod = 'trunc';
function getRoundingMethod(method) {
  return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCISODay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCISODay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var day = Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  Object(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeek = Object(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyISOWeek);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_2__getUTCISOWeek_index_js__["a" /* default */])(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/setUTCWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var week = Object(__WEBPACK_IMPORTED_MODULE_0__toInteger_index_js__["a" /* default */])(dirtyWeek);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_2__getUTCWeek_index_js__["a" /* default */])(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var weekStartsOn = 1;
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getUTCISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getUTCISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfUTCISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_2__toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfUTCWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getUTCWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_3__toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getUTCWeekYear_index_js__["a" /* default */])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_2__startOfUTCWeek_index_js__["a" /* default */])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toInteger;
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = add;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.years) : 0;
  var months = duration.months ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.months) : 0;
  var weeks = duration.weeks ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.weeks) : 0;
  var days = duration.days ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.days) : 0;
  var hours = duration.hours ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.hours) : 0;
  var minutes = duration.minutes ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.minutes) : 0;
  var seconds = duration.seconds ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(duration.seconds) : 0; // Add years and months

  var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateWithMonths = months || years ? Object(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addBusinessDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addBusinessDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWeekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isSunday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSunday/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__isSaturday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSaturday/index.js");






/**
 * @name addBusinessDays
 * @category Day Helpers
 * @summary Add the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Add the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 10 business days to 1 September 2014:
 * const result = addBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Sep 15 2014 00:00:00 (skipped weekend days)
 */

function addBusinessDays(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var startedOnWeekend = Object(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  if (isNaN(amount)) return new Date(NaN);
  var hours = date.getHours();
  var sign = amount < 0 ? -1 : 1;
  var fullWeeks = Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(amount / 5);
  date.setDate(date.getDate() + fullWeeks * 7); // Get remaining days not part of a full week

  var restDays = Math.abs(amount % 5); // Loops over remaining days

  while (restDays > 0) {
    date.setDate(date.getDate() + sign);
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date)) restDays -= 1;
  } // If the date is a weekend day and we reduce a dividable of
  // 5 from it, we land on a weekend date.
  // To counter this, we add days accordingly to land on the next business day


  if (startedOnWeekend && Object(__WEBPACK_IMPORTED_MODULE_0__isWeekend_index_js__["a" /* default */])(date) && amount !== 0) {
    // If we're reducing days, we want to add days until we land on a weekday
    // If we're adding days we want to reduce days until we land on a weekday
    if (Object(__WEBPACK_IMPORTED_MODULE_5__isSaturday_index_js__["a" /* default */])(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1));
    if (Object(__WEBPACK_IMPORTED_MODULE_4__isSunday_index_js__["a" /* default */])(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2));
  } // Restore hours to avoid DST lag


  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addHours;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */

function addHours(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * MILLISECONDS_IN_HOUR);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addISOWeekYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name addISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `addISOYears` to `addISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * const result = addISOWeekYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */

function addISOWeekYears(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_2__setISOWeekYear_index_js__["a" /* default */])(dirtyDate, Object(__WEBPACK_IMPORTED_MODULE_1__getISOWeekYear_index_js__["a" /* default */])(dirtyDate) + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var timestamp = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate).getTime();
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMinutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_MINUTE = 60000;
/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */

function addMinutes(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addQuarters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addQuarters
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * const result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */

function addQuarters(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  var months = amount * 3;
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, months);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addSeconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addSeconds
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * const result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */

function addSeconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, amount * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addWeeks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */

function addWeeks(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  var days = amount * 7;
  return Object(__WEBPACK_IMPORTED_MODULE_1__addDays_index_js__["a" /* default */])(dirtyDate, days);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */

function addYears(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, amount * 12);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/areIntervalsOverlapping/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name areIntervalsOverlapping
 * @category Interval Helpers
 * @summary Is the given time interval overlapping with another time interval?
 *
 * @description
 * Is the given time interval overlapping with another time interval? Adjacent intervals do not count as overlapping.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `areRangesOverlapping` to `areIntervalsOverlapping`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   areRangesOverlapping(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   areIntervalsOverlapping(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.inclusive=false] - whether the comparison is inclusive or not
 * @returns {Boolean} whether the time intervals are overlapping
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> false
 *
 * @example
 * // For adjacent time intervals:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 30) }
 * )
 * //=> false
 *
 * @example
 * // Using the inclusive option:
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) }
 * )
 * //=> false
 * areIntervalsOverlapping(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 20), end: new Date(2014, 0, 24) },
 *   { inclusive: true }
 * )
 * //=> true
 */

function areIntervalsOverlapping(dirtyIntervalLeft, dirtyIntervalRight) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    inclusive: false
  };
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.start).getTime();
  var leftEndTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.end).getTime();
  var rightStartTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.start).getTime();
  var rightEndTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  if (options.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/clamp/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__max_index_js__ = __webpack_require__("./node_modules/date-fns/esm/max/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__min_index_js__ = __webpack_require__("./node_modules/date-fns/esm/min/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name clamp
 * @category Interval Helpers
 * @summary Return a date bounded by the start and the end of the given interval
 *
 * @description
 * Clamps a date to the lower bound with the start of the interval and the upper
 * bound with the end of the interval.
 *
 * - When the date is less than the start of the interval, the start is returned.
 * - When the date is greater than the end of the interval, the end is returned.
 * - Otherwise the date is returned.
 *
 * @example
 * // What is Mar, 21, 2021 bounded to an interval starting at Mar, 22, 2021 and ending at Apr, 01, 2021
 * const result = clamp(new Date(2021, 2, 21), {
 *   start: new Date(2021, 2, 22),
 *   end: new Date(2021, 3, 1),
 * })
 * //=> Mon Mar 22 2021 00:00:00
 *
 * @param {Date | Number} date - the date to be bounded
 * @param {Interval} interval - the interval to bound to
 * @returns {Date} the date bounded by the start and the end of the interval
 * @throws {TypeError} 2 arguments required
 */

function clamp(date, _ref) {
  var start = _ref.start,
      end = _ref.end;
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__min_index_js__["a" /* default */])([Object(__WEBPACK_IMPORTED_MODULE_0__max_index_js__["a" /* default */])([date, start]), end]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/closestIndexTo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name closestIndexTo
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestIndexTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Number | undefined} an index of the date closest to the given date or undefined if no valid value is given
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * const result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */

function closestIndexTo(dirtyDateToCompare, dirtyDatesArray) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateToCompare = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return NaN;
  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate, index) {
    var currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = NaN;
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < Number(minDistance)) {
      result = index;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/closestTo/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now, `closestTo` doesn't throw an exception
 *   when the second argument is not an array, and returns Invalid Date instead.
 *
 * @param {Date | Number} dateToCompare - the date to compare with
 * @param {Array<Date> | Array<number>} datesArray - the array to search
 * @returns {Date | undefined} the date from the array closest to the given date or undefined if no valid value is given
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */

function closestTo(dirtyDateToCompare, dirtyDatesArray) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateToCompare = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  if (isNaN(Number(dateToCompare))) return new Date(NaN);
  var timeToCompare = dateToCompare.getTime();
  var datesArray; // `dirtyDatesArray` is undefined or null

  if (dirtyDatesArray == null) {
    datesArray = []; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method
  } else if (typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array. Otherwise, make it empty Array
  } else {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  }

  var result;
  var minDistance;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = new Date(NaN);
      minDistance = NaN;
      return;
    }

    var distance = Math.abs(timeToCompare - currentDate.getTime());

    if (result == null || distance < Number(minDistance)) {
      result = currentDate;
      minDistance = distance;
    }
  });
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compareAsc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareDesc/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */

function compareDesc(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return daysInWeek; });
/* unused harmony export maxTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return millisecondsInMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return millisecondsInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return millisecondsInSecond; });
/* unused harmony export minTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return minutesInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return monthsInQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return monthsInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return quartersInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return secondsInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return secondsInMinute; });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/daysToWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name daysToWeeks
 * @category Conversion Helpers
 * @summary Convert days to weeks.
 *
 * @description
 * Convert a number of days to a full number of weeks.
 *
 * @param {number} days - number of days to be converted
 *
 * @returns {number} the number of days converted in weeks
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 14 days to weeks:
 * const result = daysToWeeks(14)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = daysToWeeks(13)
 * //=> 1
 */

function daysToWeeks(days) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var weeks = days / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["a" /* daysInWeek */];
  return Math.floor(weeks);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInBusinessDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isSameDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isWeekend_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWeekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");








/**
 * @name differenceInBusinessDays
 * @category Day Helpers
 * @summary Get the number of business days between the given dates.
 *
 * @description
 * Get the number of business day periods between the given dates.
 * Business days being days that arent in the weekend.
 * Like `differenceInCalendarDays`, the function removes the times from
 * the dates before calculating the difference.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of business days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many business days are between
 * // 10 January 2014 and 20 July 2014?
 * const result = differenceInBusinessDays(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 0, 10)
 * )
 * //=> 136
 *
 * // How many business days are between
 * // 1 November 2021 and 30 November 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 30)
 * )
 * //=> 21
 *
 * // How many business days are between
 * // 1 November 2021 and 1 December 2021?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 11, 1)
 * )
 * //=> 22
 *
 * // How many business days are between
 * // 1 November 2021 and 1 November 2021 ?
 * const result = differenceInBusinessDays(
 *   new Date(2021, 10, 1),
 *   new Date(2021, 10, 1)
 * )
 * //=> 0
 */

function differenceInBusinessDays(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_5__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_5__toDate_index_js__["a" /* default */])(dirtyDateRight);
  if (!Object(__WEBPACK_IMPORTED_MODULE_3__isValid_index_js__["a" /* default */])(dateLeft) || !Object(__WEBPACK_IMPORTED_MODULE_3__isValid_index_js__["a" /* default */])(dateRight)) return NaN;
  var calendarDifference = Object(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__["a" /* default */])(dateLeft, dateRight);
  var sign = calendarDifference < 0 ? -1 : 1;
  var weeks = Object(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(calendarDifference / 7);
  var result = weeks * 5;
  dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(dateRight, weeks * 7); // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week

  while (!Object(__WEBPACK_IMPORTED_MODULE_2__isSameDay_index_js__["a" /* default */])(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += Object(__WEBPACK_IMPORTED_MODULE_4__isWeekend_index_js__["a" /* default */])(dateRight) ? 0 : sign;
    dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(dateRight, sign);
  }

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_DAY = 86400000;
/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */

function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfDayLeft = Object(__WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__["a" /* default */])(dirtyDateLeft);
  var startOfDayRight = Object(__WEBPACK_IMPORTED_MODULE_1__startOfDay_index_js__["a" /* default */])(dirtyDateRight);
  var timestampLeft = startOfDayLeft.getTime() - Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfDayLeft);
  var timestampRight = startOfDayRight.getTime() - Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfDayRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInCalendarISOYears` to `differenceInCalendarISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * const result = differenceInCalendarISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */

function differenceInCalendarISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDateLeft) - Object(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDateRight);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarISOWeeks
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * const result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */

function differenceInCalendarISOWeeks(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfISOWeekLeft = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(dirtyDateLeft);
  var startOfISOWeekRight = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(dirtyDateRight);
  var timestampLeft = startOfISOWeekLeft.getTime() - Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfISOWeekLeft);
  var timestampRight = startOfISOWeekRight.getTime() - Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfISOWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getQuarter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name differenceInCalendarQuarters
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */

function differenceInCalendarQuarters(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var quarterDiff = Object(__WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__["a" /* default */])(dateLeft) - Object(__WEBPACK_IMPORTED_MODULE_0__getQuarter_index_js__["a" /* default */])(dateRight);
  return yearDiff * 4 + quarterDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarWeeks;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name differenceInCalendarWeeks
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   { weekStartsOn: 1 }
 * )
 * //=> 2
 */

function differenceInCalendarWeeks(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var startOfWeekLeft = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyOptions);
  var startOfWeekRight = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateRight, dirtyOptions);
  var timestampLeft = startOfWeekLeft.getTime() - Object(__WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfWeekLeft);
  var timestampRight = startOfWeekRight.getTime() - Object(__WEBPACK_IMPORTED_MODULE_1__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(startOfWeekRight); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInCalendarYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarYears
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */

function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() - dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.

function compareLocalAsc(dateLeft, dateRight) {
  var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}
/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full days according to the local timezone
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
//=> 92
 */


function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = compareLocalAsc(dateLeft, dateRight);
  var difference = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarDays_index_js__["a" /* default */])(dateLeft, dateRight));
  dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInHours;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_roundingMethods_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * const result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dateLeft, dateRight, options) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_1__differenceInMilliseconds_index_js__["a" /* default */])(dateLeft, dateRight) / __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["b" /* millisecondsInHour */];
  return Object(__WEBPACK_IMPORTED_MODULE_3__lib_roundingMethods_index_js__["a" /* getRoundingMethod */])(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInISOWeekYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subISOWeekYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name differenceInISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `differenceInISOYears` to `differenceInISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOWeekYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */

function differenceInISOWeekYears(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarISOWeekYears_index_js__["a" /* default */])(dateLeft, dateRight));
  dateLeft = Object(__WEBPACK_IMPORTED_MODULE_3__subISOWeekYears_index_js__["a" /* default */])(dateLeft, sign * difference); // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastISOWeekYearNotFull = Number(Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign);
  var result = sign * (difference - isLastISOWeekYearNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dateLeft, dateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dateLeft).getTime() - Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dateRight).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMinutes;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_roundingMethods_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/roundingMethods/index.js");




/**
 * @name differenceInMinutes
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the signed number of full (rounded towards 0) minutes between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of minutes
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * const result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 *
 * @example
 * // How many minutes are between 10:01:59 and 10:00:00
 * const result = differenceInMinutes(
 *   new Date(2000, 0, 1, 10, 0, 0),
 *   new Date(2000, 0, 1, 10, 1, 59)
 * )
 * //=> -1
 */

function differenceInMinutes(dateLeft, dateRight, options) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_1__differenceInMilliseconds_index_js__["a" /* default */])(dateLeft, dateRight) / __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["c" /* millisecondsInMinute */];
  return Object(__WEBPACK_IMPORTED_MODULE_3__lib_roundingMethods_index_js__["a" /* getRoundingMethod */])(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isLastDayOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates using trunc as a default rounding method.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarMonths_index_js__["a" /* default */])(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if (Object(__WEBPACK_IMPORTED_MODULE_4__isLastDayOfMonth_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft)) && difference === 1 && Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInQuarters
 * @category Quarter Helpers
 * @summary Get the number of quarters between the given dates.
 *
 * @description
 * Get the number of quarters between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full quarters
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * const result = differenceInQuarters(new Date(2014, 6, 2), new Date(2013, 11, 31))
 * //=> 2
 */

function differenceInQuarters(dateLeft, dateRight, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__differenceInMonths_index_js__["a" /* default */])(dateLeft, dateRight) / 3;
  return Object(__WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__["a" /* getRoundingMethod */])(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInSeconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dateLeft, dateRight, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__differenceInMilliseconds_index_js__["a" /* default */])(dateLeft, dateRight) / 1000;
  return Object(__WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__["a" /* getRoundingMethod */])(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/roundingMethods/index.js");



/**
 * @name differenceInWeeks
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between two dates. Fractional weeks are
 * truncated towards zero by default.
 *
 * One "full week" is the distance between a local time in one day to the same
 * local time 7 days earlier or later. A full week can sometimes be less than
 * or more than 7*24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 7*24-hour periods, use this instead:
 * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
 *
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @param {Object} [options] - an object with options.
 * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
 * @returns {Number} the number of full weeks
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
 * //=> 2
 *
 * // How many full weeks are between
 * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 8 weeks (54 days),
 * // even if DST starts and the period has
 * // only 54*24-1 hours.
 * const result = differenceInWeeks(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 6)
 * )
 * //=> 8
 */

function differenceInWeeks(dateLeft, dateRight, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__differenceInDays_index_js__["a" /* default */])(dateLeft, dateRight) / 7;
  return Object(__WEBPACK_IMPORTED_MODULE_2__lib_roundingMethods_index_js__["a" /* getRoundingMethod */])(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = differenceInYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInCalendarYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name differenceInYears
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
 * //=> 1
 */

function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  var sign = Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  var difference = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_1__differenceInCalendarYears_index_js__["a" /* default */])(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days

  dateLeft.setFullYear(1584);
  dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastYearNotFull = Object(__WEBPACK_IMPORTED_MODULE_2__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight) === -sign;
  var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachDayOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eachDayOfInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name eachDayOfInterval
 * @category Interval Helpers
 * @summary Return the array of dates within the specified time interval.
 *
 * @description
 * Return the array of dates within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `eachDay` to `eachDayOfInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   eachDay(new Date(2014, 0, 10), new Date(2014, 0, 20))
 *
 *   // v2.0.0 onward
 *
 *   eachDayOfInterval(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) }
 *   )
 *   ```
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of days from the day of the interval start to the day of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * const result = eachDayOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 9, 10)
 * })
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */

function eachDayOfInterval(dirtyInterval, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setDate(currentDate.getDate() + step);
    currentDate.setHours(0, 0, 0, 0);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachHourOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addHours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachHourOfInterval
 * @category Interval Helpers
 * @summary Return the array of hours within the specified time interval.
 *
 * @description
 * Return the array of hours within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The value should be more than 1.
 * @returns {Date[]} the array with starts of hours from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.step` must be a number greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each hour between 6 October 2014, 12:00 and 6 October 2014, 15:00
 * var result = eachHourOfInterval({
 *   start: new Date(2014, 9, 6, 12),
 *   end: new Date(2014, 9, 6, 15)
 * })
 * //=> [
 * //   Mon Oct 06 2014 12:00:00,
 * //   Mon Oct 06 2014 13:00:00,
 * //   Mon Oct 06 2014 14:00:00,
 * //   Mon Oct 06 2014 15:00:00
 * // ]
 */
function eachHourOfInterval(dirtyInterval, options) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setMinutes(0, 0, 0);
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(currentDate));
    currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__addHours_index_js__["a" /* default */])(currentDate, step);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachMinuteOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMinutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMinute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.step=1] - the step to increment by. The starts of minutes from the hour of the interval start to the hour of the interval end
 * @throws {TypeError} 1 argument requie value should be more than 1.
 * @returns {Date[]} the array withred
 * @throws {RangeError} `options.step` must be a number equal or greater than 1
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */
function eachMinuteOfInterval(interval, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_2__startOfMinute_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.start));
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(interval.end);
  var startTime = startDate.getTime();
  var endTime = endDate.getTime();

  if (startTime >= endTime) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  var step = options && 'step' in options ? Number(options.step) : 1;
  if (step < 1 || isNaN(step)) throw new RangeError('`options.step` must be a number equal or greater than 1');

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(currentDate));
    currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__addMinutes_index_js__["a" /* default */])(currentDate, step);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachMonthOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of months from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * var result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */

function eachMonthOfInterval(dirtyInterval) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime();
  var dates = []; // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setDate(1);

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachQuarterOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addQuarters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfQuarter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachQuarterOfInterval
 * @category Interval Helpers
 * @summary Return the array of quarters within the specified time interval.
 *
 * @description
 * Return the array of quarters within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of quarters from the quarter of the interval start to the quarter of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each quarter within interval 6 February 2014 - 10 August 2014:
 * var result = eachQuarterOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * // ]
 */

function eachQuarterOfInterval(dirtyInterval) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateQuarter = Object(__WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__["a" /* default */])(startDate);
  var endDateQuarter = Object(__WEBPACK_IMPORTED_MODULE_1__startOfQuarter_index_js__["a" /* default */])(endDate);
  endTime = endDateQuarter.getTime();
  var quarters = [];
  var currentQuarter = startDateQuarter;

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(currentQuarter));
    currentQuarter = Object(__WEBPACK_IMPORTED_MODULE_0__addQuarters_index_js__["a" /* default */])(currentQuarter, 1);
  }

  return quarters;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachWeekOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachWeekOfInterval
 * @category Interval Helpers
 * @summary Return the array of weeks within the specified time interval.
 *
 * @description
 * Return the array of weeks within the specified time interval.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date[]} the array with starts of weeks from the week of the interval start to the week of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be 0, 1, ..., 6
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each week within interval 6 October 2014 - 23 November 2014:
 * var result = eachWeekOfInterval({
 *   start: new Date(2014, 9, 6),
 *   end: new Date(2014, 10, 23)
 * })
 * //=> [
 * //   Sun Oct 05 2014 00:00:00,
 * //   Sun Oct 12 2014 00:00:00,
 * //   Sun Oct 19 2014 00:00:00,
 * //   Sun Oct 26 2014 00:00:00,
 * //   Sun Nov 02 2014 00:00:00,
 * //   Sun Nov 09 2014 00:00:00,
 * //   Sun Nov 16 2014 00:00:00,
 * //   Sun Nov 23 2014 00:00:00
 * // ]
 */

function eachWeekOfInterval(dirtyInterval, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var startDateWeek = Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(startDate, options);
  var endDateWeek = Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(endDate, options); // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet

  startDateWeek.setHours(15);
  endDateWeek.setHours(15);
  endTime = endDateWeek.getTime();
  var weeks = [];
  var currentWeek = startDateWeek;

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0);
    weeks.push(Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(currentWeek));
    currentWeek = Object(__WEBPACK_IMPORTED_MODULE_0__addWeeks_index_js__["a" /* default */])(currentWeek, 1);
    currentWeek.setHours(15);
  }

  return weeks;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachWeekendOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = eachWeekendOfInterval;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachDayOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSunday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSunday/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isWeekend_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWeekend/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachWeekendOfInterval
 * @category Interval Helpers
 * @summary List all the Saturdays and Sundays in the given date interval.
 *
 * @description
 * Get all the Saturdays and Sundays in the given date interval.
 *
 * @param {Interval} interval - the given interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Lists all Saturdays and Sundays in the given date interval
 * const result = eachWeekendOfInterval({
 *   start: new Date(2018, 8, 17),
 *   end: new Date(2018, 8, 30)
 * })
 * //=> [
 * //   Sat Sep 22 2018 00:00:00,
 * //   Sun Sep 23 2018 00:00:00,
 * //   Sat Sep 29 2018 00:00:00,
 * //   Sun Sep 30 2018 00:00:00
 * // ]
 */

function eachWeekendOfInterval(interval) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var dateInterval = Object(__WEBPACK_IMPORTED_MODULE_0__eachDayOfInterval_index_js__["a" /* default */])(interval);
  var weekends = [];
  var index = 0;

  while (index < dateInterval.length) {
    var date = dateInterval[index++];

    if (Object(__WEBPACK_IMPORTED_MODULE_2__isWeekend_index_js__["a" /* default */])(date)) {
      weekends.push(date);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__isSunday_index_js__["a" /* default */])(date)) index = index + 5;
    }
  }

  return weekends;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachWeekendOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekendOfInterval/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachWeekendOfMonth
 * @category Month Helpers
 * @summary List all the Saturdays and Sundays in the given month.
 *
 * @description
 * Get all the Saturdays and Sundays in the given month.
 *
 * @param {Date|Number} date - the given month
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the given month
 * const result = eachWeekendOfMonth(new Date(2022, 1, 1))
 * //=> [
 * //   Sat Feb 05 2022 00:00:00,
 * //   Sun Feb 06 2022 00:00:00,
 * //   Sat Feb 12 2022 00:00:00,
 * //   Sun Feb 13 2022 00:00:00,
 * //   Sat Feb 19 2022 00:00:00,
 * //   Sun Feb 20 2022 00:00:00,
 * //   Sat Feb 26 2022 00:00:00,
 * //   Sun Feb 27 2022 00:00:00
 * // ]
 */

function eachWeekendOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_1__startOfMonth_index_js__["a" /* default */])(dirtyDate);
  if (isNaN(startDate.getTime())) throw new RangeError('The passed date is invalid');
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__["a" /* default */])(dirtyDate);
  return Object(__WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__["a" /* default */])({
    start: startDate,
    end: endDate
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachWeekendOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekendOfInterval/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name eachWeekendOfYear
 * @category Year Helpers
 * @summary List all the Saturdays and Sundays in the year.
 *
 * @description
 * Get all the Saturdays and Sundays in the year.
 *
 * @param {Date|Number} date - the given year
 * @returns {Date[]} an array containing all the Saturdays and Sundays
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The passed date is invalid
 *
 * @example
 * // Lists all Saturdays and Sundays in the year
 * var result = eachWeekendOfYear(new Date(2020, 1, 1))
 * //=> [
 * //   Sat Jan 03 2020 00:00:00,
 * //   Sun Jan 04 2020 00:00:00,
 * //   ...
 * //   Sun Dec 27 2020 00:00:00
 * // ]
 * ]
 */

function eachWeekendOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__["a" /* default */])(dirtyDate);
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid');
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_2__endOfYear_index_js__["a" /* default */])(dirtyDate);
  return Object(__WEBPACK_IMPORTED_MODULE_0__eachWeekendOfInterval_index_js__["a" /* default */])({
    start: startDate,
    end: endDate
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/eachYearOfInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @param {Interval} interval - the interval. See [Interval]{@link https://date-fns.org/docs/Interval}
 * @returns {Date[]} the array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */

function eachYearOfInterval(dirtyInterval) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var interval = dirtyInterval || {};
  var startDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start);
  var endDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end);
  var endTime = endDate.getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  var dates = [];
  var currentDate = startDate;
  currentDate.setHours(0, 0, 0, 0);
  currentDate.setMonth(0, 1);

  while (currentDate.getTime() <= endTime) {
    dates.push(Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(currentDate));
    currentDate.setFullYear(currentDate.getFullYear() + 1);
  }

  return dates;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDecade/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDecade
 * @category Decade Helpers
 * @summary Return the end of a decade for the given date.
 *
 * @description
 * Return the end of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a decade
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The end of a decade for 12 May 1984 00:00:00:
 * const result = endOfDecade(new Date(1984, 4, 12, 00, 00, 00))
 * //=> Dec 31 1989 23:59:59.999
 */

function endOfDecade(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade, 11, 31);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfHour/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfHour
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * const result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */

function endOfHour(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMinutes(59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */

function endOfISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__endOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name endOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `endOfISOYear` to `endOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `addWeekYears`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * const result = endOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */

function endOfISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  date.setMilliseconds(date.getMilliseconds() - 1);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMinute/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMinute
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * const result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */

function endOfMinute(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setSeconds(59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfQuarter
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * const result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfQuarter(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfSecond/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfSecond
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * const result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */

function endOfSecond(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMilliseconds(999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfToday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__endOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfDay/index.js");

/**
 * @name endOfToday
 * @category Day Helpers
 * @summary Return the end of today.
 * @pure false
 *
 * @description
 * Return the end of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */

function endOfToday() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__endOfDay_index_js__["a" /* default */])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfTomorrow/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = endOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */

function endOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfYesterday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_format_formatters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_format_longFormatters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_1__locale_en_US_index_js__["a" /* default */];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_8__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_3__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(originalDate);
  var utcDate = Object(__WEBPACK_IMPORTED_MODULE_2__subMilliseconds_index_js__["a" /* default */])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = __WEBPACK_IMPORTED_MODULE_5__lib_format_longFormatters_index_js__["a" /* default */][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = __WEBPACK_IMPORTED_MODULE_4__lib_format_formatters_index_js__["a" /* default */][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && Object(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["b" /* isProtectedWeekYearToken */])(substring)) {
        Object(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["c" /* throwProtectedError */])(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && Object(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["a" /* isProtectedDayOfYearToken */])(substring)) {
        Object(__WEBPACK_IMPORTED_MODULE_7__lib_protectedTokens_index_js__["c" /* throwProtectedError */])(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDistance;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_cloneObject_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object(__WEBPACK_IMPORTED_MODULE_7__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_3__locale_en_US_index_js__["a" /* default */];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = Object(__WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__["a" /* default */])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = Object(__WEBPACK_IMPORTED_MODULE_5__lib_cloneObject_index_js__["a" /* default */])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);
    dateRight = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
  } else {
    dateLeft = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
    dateRight = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);
  }

  var seconds = Object(__WEBPACK_IMPORTED_MODULE_2__differenceInSeconds_index_js__["a" /* default */])(dateRight, dateLeft);
  var offsetInSeconds = (Object(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateRight) - Object(__WEBPACK_IMPORTED_MODULE_6__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = Object(__WEBPACK_IMPORTED_MODULE_1__differenceInMonths_index_js__["a" /* default */])(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDistanceStrict;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cloneObject_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");






var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object(__WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_4__locale_en_US_index_js__["a" /* default */];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = Object(__WEBPACK_IMPORTED_MODULE_1__compareAsc_index_js__["a" /* default */])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = Object(__WEBPACK_IMPORTED_MODULE_3__lib_cloneObject_index_js__["a" /* default */])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyBaseDate);
    dateRight = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  } else {
    dateLeft = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
    dateRight = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateRight) - Object(__WEBPACK_IMPORTED_MODULE_0__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNow/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDistance_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNow
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsToNow ` to `formatDistanceToNow`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })
 *   //=> 'in 6 months'
 *   ```
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if now is earlier or later than the passed date
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */

function formatDistanceToNow(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__formatDistance_index_js__["a" /* default */])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDistanceStrict_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__formatDistanceStrict_index_js__["a" /* default */])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDuration/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");

var defaultFormat = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];

/**
 * @name formatDuration
 * @category Common Helpers
 * @summary Formats a duration in human-readable format
 *
 * @description
 * Return human-readable duration string i.e. "9 months 2 days"
 *
 * @param {Duration} duration - the duration to format
 * @param {Object} [options] - an object with options.
 * @param {string[]} [options.format=['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']] - the array of units to format
 * @param {boolean} [options.zero=false] - should zeros be included in the output?
 * @param {string} [options.delimiter=' '] - delimiter string
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {string} the formatted date string
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Format full duration
 * formatDuration({
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> '2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds'
 *
 * @example
 * // Format partial duration
 * formatDuration({ months: 9, days: 2 })
 * //=> '9 months 2 days'
 *
 * @example
 * // Customize the format
 * formatDuration(
 *   {
 *     years: 2,
 *     months: 9,
 *     weeks: 1,
 *     days: 7,
 *     hours: 5,
 *     minutes: 9,
 *     seconds: 30
 *   },
 *   { format: ['months', 'weeks'] }
 * ) === '9 months 1 week'
 *
 * @example
 * // Customize the zeros presence
 * formatDuration({ years: 0, months: 9 })
 * //=> '9 months'
 * formatDuration({ years: 0, months: 9 }, { zero: true })
 * //=> '0 years 9 months'
 *
 * @example
 * // Customize the delimiter
 * formatDuration({ years: 2, months: 9, weeks: 3 }, { delimiter: ', ' })
 * //=> '2 years, 9 months, 3 weeks'
 */
function formatDuration(duration) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var format = (options === null || options === void 0 ? void 0 : options.format) || defaultFormat;
  var locale = (options === null || options === void 0 ? void 0 : options.locale) || __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__["a" /* default */];
  var zero = (options === null || options === void 0 ? void 0 : options.zero) || false;
  var delimiter = (options === null || options === void 0 ? void 0 : options.delimiter) || ' ';
  var result = format.reduce(function (acc, unit) {
    var token = "x".concat(unit.replace(/(^.)/, function (m) {
      return m.toUpperCase();
    }));
    var addChunk = typeof duration[unit] === 'number' && (zero || duration[unit]);
    return addChunk && locale.formatDistance ? acc.concat(locale.formatDistance(token, duration[unit])) : acc;
  }, []).join(delimiter);
  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatISO;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name formatISO
 * @category Common Helpers
 * @summary Format the date according to the ISO 8601 standard (https://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).
 *
 * @description
 * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {String} the formatted date string (in local time zone)
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601, short format (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918T190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, date only:
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 8601 format, time only (local time zone is UTC):
 * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52Z'
 */

function formatISO(date, options) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(date);

  if (isNaN(originalDate.getTime())) {
    throw new RangeError('Invalid time value');
  }

  var format = !(options !== null && options !== void 0 && options.format) ? 'extended' : String(options.format);
  var representation = !(options !== null && options !== void 0 && options.representation) ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var tzOffset = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
    var month = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
    var year = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    // Add the timezone.
    var offset = originalDate.getTimezoneOffset();

    if (offset !== 0) {
      var absoluteOffset = Math.abs(offset);
      var hourOffset = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(Math.floor(absoluteOffset / 60), 2);
      var minuteOffset = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

      var sign = offset < 0 ? '+' : '-';
      tzOffset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
    } else {
      tzOffset = 'Z';
    }

    var hour = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
    var minute = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
    var second = Object(__WEBPACK_IMPORTED_MODULE_1__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'

    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.

    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(time).concat(tzOffset);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO9075/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");




/**
 * @name formatISO9075
 * @category Common Helpers
 * @summary Format the date according to the ISO 9075 standard (https://dev.mysql.com/doc/refman/5.7/en/date-and-time-functions.html#function_get-format).
 *
 * @description
 * Return the formatted date string in ISO 9075 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time, or both.
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.format` must be 'extended' or 'basic'
 * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18 19:00:52'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075, short format:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })
 * //=> '20190918 190052'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, date only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })
 * //=> '2019-09-18'
 *
 * @example
 * // Represent 18 September 2019 in ISO 9075 format, time only:
 * const result = formatISO9075(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })
 * //=> '19:00:52'
 */
function formatISO9075(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 argument required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var options = dirtyOptions || {};
  var format = options.format == null ? 'extended' : String(options.format);
  var representation = options.representation == null ? 'complete' : String(options.representation);

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'");
  }

  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {
    throw new RangeError("representation must be 'date', 'time', or 'complete'");
  }

  var result = '';
  var dateDelimiter = format === 'extended' ? '-' : '';
  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'

  if (representation !== 'time') {
    var day = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
    var month = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
    var year = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.

    result = "".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);
  } // Representation is either 'time' or 'complete'


  if (representation !== 'date') {
    var hour = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
    var minute = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
    var second = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2); // If there's also date, separate it with time with a space

    var separator = result === '' ? '' : ' '; // HHmmss or HH:mm:ss.

    result = "".concat(result).concat(separator).concat(hour).concat(timeDelimiter).concat(minute).concat(timeDelimiter).concat(second);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISODuration/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name formatISODuration
 * @category Common Helpers
 * @summary Format a duration object according as ISO 8601 duration string
 *
 * @description
 * Format a duration object according to the ISO 8601 duration standard (https://www.digi.com/resources/documentation/digidocs/90001437-13/reference/r_iso_8601_duration_format.htm)
 *
 * @param {Duration} duration - the duration to format
 *
 * @returns {String} The ISO 8601 duration string
 * @throws {TypeError} Requires 1 argument
 * @throws {Error} Argument must be an object
 *
 * @example
 * // Format the given duration as ISO 8601 string
 * const result = formatISODuration({
 *   years: 39,
 *   months: 2,
 *   days: 20,
 *   hours: 7,
 *   minutes: 5,
 *   seconds: 0
 * })
 * //=> 'P39Y2M20DT0H0M0S'
 */

function formatISODuration(duration) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  if (typeof duration !== 'object') throw new Error('Duration must be an object');
  var _duration$years = duration.years,
      years = _duration$years === void 0 ? 0 : _duration$years,
      _duration$months = duration.months,
      months = _duration$months === void 0 ? 0 : _duration$months,
      _duration$days = duration.days,
      days = _duration$days === void 0 ? 0 : _duration$days,
      _duration$hours = duration.hours,
      hours = _duration$hours === void 0 ? 0 : _duration$hours,
      _duration$minutes = duration.minutes,
      minutes = _duration$minutes === void 0 ? 0 : _duration$minutes,
      _duration$seconds = duration.seconds,
      seconds = _duration$seconds === void 0 ? 0 : _duration$seconds;
  return "P".concat(years, "Y").concat(months, "M").concat(days, "DT").concat(hours, "H").concat(minutes, "M").concat(seconds, "S");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatRFC3339/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");





/**
 * @name formatRFC3339
 * @category Common Helpers
 * @summary Format the date according to the RFC 3339 standard (https://tools.ietf.org/html/rfc3339#section-5.6).
 *
 * @description
 * Return the formatted date string in RFC 3339 format. Options may be passed to control the parts and notations of the date.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2|3} [options.fractionDigits=0] - number of digits after the decimal point after seconds
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.fractionDigits` must be between 0 and 3
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52))
 * //=> '2019-09-18T19:00:52Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 2 digits of second fraction:
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 2 })
 * //=> '2019-09-18T19:00:52.23Z'
 *
 * @example
 * // Represent 18 September 2019 in RFC 3339 format, 3 digits of second fraction
 * const result = formatRFC3339(new Date(2019, 8, 18, 19, 0, 52, 234), { fractionDigits: 3 })
 * //=> '2019-09-18T19:00:52.234Z'
 */
function formatRFC3339(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var _ref = dirtyOptions || {},
      _ref$fractionDigits = _ref.fractionDigits,
      fractionDigits = _ref$fractionDigits === void 0 ? 0 : _ref$fractionDigits; // Test if fractionDigits is between 0 and 3 _and_ is not NaN


  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively');
  }

  var day = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getDate(), 2);
  var month = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMonth() + 1, 2);
  var year = originalDate.getFullYear();
  var hour = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getHours(), 2);
  var minute = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getMinutes(), 2);
  var second = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getSeconds(), 2);
  var fractionalSecond = '';

  if (fractionDigits > 0) {
    var milliseconds = originalDate.getMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, fractionDigits - 3));
    fractionalSecond = '.' + Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(fractionalSeconds, fractionDigits);
  }

  var offset = '';
  var tzOffset = originalDate.getTimezoneOffset();

  if (tzOffset !== 0) {
    var absoluteOffset = Math.abs(tzOffset);
    var hourOffset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(absoluteOffset / 60), 2);
    var minuteOffset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.

    var sign = tzOffset < 0 ? '+' : '-';
    offset = "".concat(sign).concat(hourOffset, ":").concat(minuteOffset);
  } else {
    offset = 'Z';
  }

  return "".concat(year, "-").concat(month, "-").concat(day, "T").concat(hour, ":").concat(minute, ":").concat(second).concat(fractionalSecond).concat(offset);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatRFC7231/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");



var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/**
 * @name formatRFC7231
 * @category Common Helpers
 * @summary Format the date according to the RFC 7231 standard (https://tools.ietf.org/html/rfc7231#section-7.1.1.1).
 *
 * @description
 * Return the formatted date string in RFC 7231 format.
 * The result will always be in UTC timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {String} the formatted date string
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 18 September 2019 in RFC 7231 format:
 * const result = formatRFC7231(new Date(2019, 8, 18, 19, 0, 52))
 * //=> 'Wed, 18 Sep 2019 19:00:52 GMT'
 */

function formatRFC7231(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError("1 arguments required, but only ".concat(arguments.length, " present"));
  }

  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  var dayName = days[originalDate.getUTCDay()];
  var dayOfMonth = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCDate(), 2);
  var monthName = months[originalDate.getUTCMonth()];
  var year = originalDate.getUTCFullYear();
  var hour = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCHours(), 2);
  var minute = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCMinutes(), 2);
  var second = Object(__WEBPACK_IMPORTED_MODULE_2__lib_addLeadingZeros_index_js__["a" /* default */])(originalDate.getUTCSeconds(), 2); // Result variables.

  return "".concat(dayName, ", ").concat(dayOfMonth, " ").concat(monthName, " ").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second, " GMT");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatRelative/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__format_index_js__ = __webpack_require__("./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








/**
 * @name formatRelative
 * @category Common Helpers
 * @summary Represent the date in words relative to the given base date.
 *
 * @description
 * Represent the date in words relative to the given base date.
 *
 * | Distance to the base date | Result                    |
 * |---------------------------|---------------------------|
 * | Previous 6 days           | last Sunday at 04:30 AM   |
 * | Last day                  | yesterday at 04:30 AM     |
 * | Same day                  | today at 04:30 AM         |
 * | Next day                  | tomorrow at 04:30 AM      |
 * | Next 6 days               | Sunday at 04:30 AM        |
 * | Other                     | 12/31/2017                |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to format
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {String} the date in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.locale` must contain `formatRelative` property
 *
 * @example
 * // Represent the date of 6 days ago in words relative to the given base date. In this example, today is Wednesday
 * const result = formatRelative(addDays(new Date(), -6), new Date())
 * //=> "last Thursday at 12:45 AM"
 */
function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_6__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyDate);
  var baseDate = Object(__WEBPACK_IMPORTED_MODULE_4__toDate_index_js__["a" /* default */])(dirtyBaseDate);

  var _ref = dirtyOptions || {},
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? __WEBPACK_IMPORTED_MODULE_2__locale_en_US_index_js__["a" /* default */] : _ref$locale,
      _ref$weekStartsOn = _ref.weekStartsOn,
      weekStartsOn = _ref$weekStartsOn === void 0 ? 0 : _ref$weekStartsOn;

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property');
  }

  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__["a" /* default */])(date, baseDate);

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value');
  }

  var token;

  if (diff < -6) {
    token = 'other';
  } else if (diff < -1) {
    token = 'lastWeek';
  } else if (diff < 0) {
    token = 'yesterday';
  } else if (diff < 1) {
    token = 'today';
  } else if (diff < 2) {
    token = 'tomorrow';
  } else if (diff < 7) {
    token = 'nextWeek';
  } else {
    token = 'other';
  }

  var utcDate = Object(__WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__["a" /* default */])(date, Object(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(date));
  var utcBaseDate = Object(__WEBPACK_IMPORTED_MODULE_3__subMilliseconds_index_js__["a" /* default */])(baseDate, Object(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(baseDate));
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1__format_index_js__["a" /* default */])(date, formatStr, {
    locale: locale,
    weekStartsOn: weekStartsOn
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/fromUnixTime/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp (in seconds). Decimal values will be discarded.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp (in seconds)
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * const result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var unixTime = Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(dirtyUnixTime);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(unixTime * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDayOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */

function getDayOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_2__differenceInCalendarDays_index_js__["a" /* default */])(date, Object(__WEBPACK_IMPORTED_MODULE_1__startOfYear_index_js__["a" /* default */])(date));
  var dayOfYear = diff + 1;
  return dayOfYear;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDaysInMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDaysInMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */

function getDaysInMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var monthIndex = date.getMonth();
  var lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDaysInYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isLeapYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isLeapYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name getDaysInYear
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in 2012?
 * const result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */

function getDaysInYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (String(new Date(date)) === 'Invalid Date') {
    return NaN;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_1__isLeapYear_index_js__["a" /* default */])(date) ? 366 : 365;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDecade/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDecade
 * @category Decade Helpers
 * @summary Get the decade of the given date.
 *
 * @description
 * Get the decade of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year of decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which decade belongs 27 November 1942?
 * const result = getDecade(new Date(1942, 10, 27))
 * //=> 1940
 */

function getDecade(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  return decade;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getHours
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * const result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */

function getHours(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var hours = date.getHours();
  return hours;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getISODay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISODay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * const result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */

function getISODay(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */

function getISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(date).getTime() - Object(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getISOYear` to `getISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */

function getISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getISOWeeksInYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getISOWeeksInYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * const result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */

function getISOWeeksInYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var thisYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var nextYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__["a" /* default */])(thisYear, 60));
  var diff = nextYear.valueOf() - thisYear.valueOf(); // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMilliseconds
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * const result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */

function getMilliseconds(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var milliseconds = date.getMilliseconds();
  return milliseconds;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMinutes
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * const result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */

function getMinutes(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var minutes = date.getMinutes();
  return minutes;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000;
/**
 * @name getOverlappingDaysInIntervals
 * @category Interval Helpers
 * @summary Get the number of days that overlap in two time intervals
 *
 * @description
 * Get the number of days that overlap in two time intervals
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `getOverlappingDaysInRanges` to `getOverlappingDaysInIntervals`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   getOverlappingDaysInRanges(
 *     new Date(2014, 0, 10), new Date(2014, 0, 20),
 *     new Date(2014, 0, 17), new Date(2014, 0, 21)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   getOverlappingDaysInIntervals(
 *     { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *     { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 *   )
 *   ```
 *
 * @param {Interval} intervalLeft - the first interval to compare. See [Interval]{@link docs/Interval}
 * @param {Interval} intervalRight - the second interval to compare. See [Interval]{@link docs/Interval}
 * @returns {Number} the number of days that overlap in two time intervals
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For overlapping time intervals adds 1 for each started overlapping day:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping time intervals returns 0:
 * getOverlappingDaysInIntervals(
 *   { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
 *   { start: new Date(2014, 0, 21), end: new Date(2014, 0, 22) }
 * )
 * //=> 0
 */

function getOverlappingDaysInIntervals(dirtyIntervalLeft, dirtyIntervalRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var intervalLeft = dirtyIntervalLeft || {};
  var intervalRight = dirtyIntervalRight || {};
  var leftStartTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.start).getTime();
  var leftEndTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalLeft.end).getTime();
  var rightStartTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.start).getTime();
  var rightEndTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(intervalRight.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval');
  }

  var isOverlapping = leftStartTime < rightEndTime && rightStartTime < leftEndTime;

  if (!isOverlapping) {
    return 0;
  }

  var overlapStartDate = rightStartTime < leftStartTime ? leftStartTime : rightStartTime;
  var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime;
  var differenceInMs = overlapEndDate - overlapStartDate;
  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getQuarter
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which quarter is 2 July 2014?
 * const result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */

function getQuarter(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var quarter = Math.floor(date.getMonth() / 3) + 1;
  return quarter;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getSeconds
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * const result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */

function getSeconds(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = date.getSeconds();
  return seconds;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getTime/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getTime;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * const result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getUnixTime/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getTime_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getTime/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * const result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__getTime_index_js__["a" /* default */])(dirtyDate) / 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(dirtyDate, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(date, options).getTime() - Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeekOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");





/**
 * @name getWeekOfMonth
 * @category Week Helpers
 * @summary Get the week of the month of the given date.
 *
 * @description
 * Get the week of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the week of month
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6 inclusively
 *
 * @example
 * // Which week of the month is 9 November 2017?
 * const result = getWeekOfMonth(new Date(2017, 10, 9))
 * //=> 2
 */

function getWeekOfMonth(date, options) {
  var _options$locale, _options$locale$optio;

  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var defaultWeekStartsOn = (options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) || 0;
  var weekStartsOn = (options === null || options === void 0 ? void 0 : options.weekStartsOn) == null ? Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(defaultWeekStartsOn) : Object(__WEBPACK_IMPORTED_MODULE_4__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn);

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var currentDayOfMonth = Object(__WEBPACK_IMPORTED_MODULE_0__getDate_index_js__["a" /* default */])(date);
  if (isNaN(currentDayOfMonth)) return NaN;
  var startWeekDay = Object(__WEBPACK_IMPORTED_MODULE_1__getDay_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__["a" /* default */])(date));
  var lastDayOfFirstWeek = weekStartsOn - startWeekDay;
  if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7;
  var remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
  return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Number} the local week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(dirtyDate, options) {
  var _options$locale, _options$locale$optio;

  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  var startOfNextYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  var startOfThisYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getWeeksInMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lastDayOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name getWeeksInMonth
 * @category Week Helpers
 * @summary Get the number of calendar weeks a month spans.
 *
 * @description
 * Get the number of calendar weeks the month in the given date spans.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // How many calendar weeks does February 2015 span?
 * const result = getWeeksInMonth(new Date(2015, 1, 8))
 * //=> 4
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks does July 2017 span?
 * const result = getWeeksInMonth(new Date(2017, 6, 5), { weekStartsOn: 1 })
 * //=> 6
 */
function getWeeksInMonth(date, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarWeeks_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__lastDayOfMonth_index_js__["a" /* default */])(date), Object(__WEBPACK_IMPORTED_MODULE_2__startOfMonth_index_js__["a" /* default */])(date), options) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/hoursToMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name hoursToMilliseconds
 * @category  Conversion Helpers
 * @summary Convert hours to milliseconds.
 *
 * @description
 * Convert a number of hours to a full number of milliseconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted to milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to milliseconds:
 * const result = hoursToMilliseconds(2)
 * //=> 7200000
 */

function hoursToMilliseconds(hours) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["b" /* millisecondsInHour */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/hoursToMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name hoursToMinutes
 * @category Conversion Helpers
 * @summary Convert hours to minutes.
 *
 * @description
 * Convert a number of hours to a full number of minutes.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to minutes:
 * const result = hoursToMinutes(2)
 * //=> 120
 */

function hoursToMinutes(hours) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["e" /* minutesInHour */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/hoursToSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name hoursToSeconds
 * @category Conversion Helpers
 * @summary Convert hours to seconds.
 *
 * @description
 * Convert a number of hours to a full number of seconds.
 *
 * @param {number} hours - number of hours to be converted
 *
 * @returns {number} the number of hours converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 hours to seconds:
 * const result = hoursToSeconds(2)
 * //=> 7200
 */

function hoursToSeconds(hours) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(hours * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["i" /* secondsInHour */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_index_js__ = __webpack_require__("./node_modules/date-fns/esm/add/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addBusinessDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addBusinessDays/index.js");
/* unused harmony reexport addBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* unused harmony reexport addDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addHours/index.js");
/* unused harmony reexport addHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addISOWeekYears/index.js");
/* unused harmony reexport addISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__addMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMilliseconds/index.js");
/* unused harmony reexport addMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__addMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMinutes/index.js");
/* unused harmony reexport addMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMonths/index.js");
/* unused harmony reexport addMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addQuarters/index.js");
/* unused harmony reexport addQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addSeconds/index.js");
/* unused harmony reexport addSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addWeeks/index.js");
/* unused harmony reexport addWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__addYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addYears/index.js");
/* unused harmony reexport addYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__areIntervalsOverlapping_index_js__ = __webpack_require__("./node_modules/date-fns/esm/areIntervalsOverlapping/index.js");
/* unused harmony reexport areIntervalsOverlapping */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__clamp_index_js__ = __webpack_require__("./node_modules/date-fns/esm/clamp/index.js");
/* unused harmony reexport clamp */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__closestIndexTo_index_js__ = __webpack_require__("./node_modules/date-fns/esm/closestIndexTo/index.js");
/* unused harmony reexport closestIndexTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__closestTo_index_js__ = __webpack_require__("./node_modules/date-fns/esm/closestTo/index.js");
/* unused harmony reexport closestTo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_16__compareAsc_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__compareDesc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareDesc/index.js");
/* unused harmony reexport compareDesc */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__daysToWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/daysToWeeks/index.js");
/* unused harmony reexport daysToWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__differenceInBusinessDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInBusinessDays/index.js");
/* unused harmony reexport differenceInBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* unused harmony reexport differenceInCalendarDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__differenceInCalendarISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js");
/* unused harmony reexport differenceInCalendarISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__differenceInCalendarISOWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js");
/* unused harmony reexport differenceInCalendarISOWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__differenceInCalendarMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* unused harmony reexport differenceInCalendarMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__differenceInCalendarQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarQuarters/index.js");
/* unused harmony reexport differenceInCalendarQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__differenceInCalendarWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarWeeks/index.js");
/* unused harmony reexport differenceInCalendarWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__differenceInCalendarYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarYears/index.js");
/* unused harmony reexport differenceInCalendarYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__differenceInDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInDays/index.js");
/* unused harmony reexport differenceInDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__differenceInHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInHours/index.js");
/* unused harmony reexport differenceInHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__differenceInISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInISOWeekYears/index.js");
/* unused harmony reexport differenceInISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__differenceInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* unused harmony reexport differenceInMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__differenceInMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* unused harmony reexport differenceInMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__differenceInMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMonths/index.js");
/* unused harmony reexport differenceInMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__differenceInQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInQuarters/index.js");
/* unused harmony reexport differenceInQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__differenceInSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* unused harmony reexport differenceInSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__differenceInWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInWeeks/index.js");
/* unused harmony reexport differenceInWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__differenceInYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInYears/index.js");
/* unused harmony reexport differenceInYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__eachDayOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js");
/* unused harmony reexport eachDayOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__eachHourOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachHourOfInterval/index.js");
/* unused harmony reexport eachHourOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__eachMinuteOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachMinuteOfInterval/index.js");
/* unused harmony reexport eachMinuteOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__eachMonthOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachMonthOfInterval/index.js");
/* unused harmony reexport eachMonthOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__eachQuarterOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachQuarterOfInterval/index.js");
/* unused harmony reexport eachQuarterOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__eachWeekOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekOfInterval/index.js");
/* unused harmony reexport eachWeekOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__eachWeekendOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekendOfInterval/index.js");
/* unused harmony reexport eachWeekendOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__eachWeekendOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekendOfMonth/index.js");
/* unused harmony reexport eachWeekendOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__eachWeekendOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachWeekendOfYear/index.js");
/* unused harmony reexport eachWeekendOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__eachYearOfInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/eachYearOfInterval/index.js");
/* unused harmony reexport eachYearOfInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__endOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfDay/index.js");
/* unused harmony reexport endOfDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__endOfDecade_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfDecade/index.js");
/* unused harmony reexport endOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__endOfHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfHour/index.js");
/* unused harmony reexport endOfHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__endOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfISOWeek/index.js");
/* unused harmony reexport endOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__endOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfISOWeekYear/index.js");
/* unused harmony reexport endOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__endOfMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfMinute/index.js");
/* unused harmony reexport endOfMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__endOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js");
/* unused harmony reexport endOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__endOfQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfQuarter/index.js");
/* unused harmony reexport endOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__endOfSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfSecond/index.js");
/* unused harmony reexport endOfSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__endOfToday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfToday/index.js");
/* unused harmony reexport endOfToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__endOfTomorrow_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfTomorrow/index.js");
/* unused harmony reexport endOfTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__endOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfWeek/index.js");
/* unused harmony reexport endOfWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__endOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfYear/index.js");
/* unused harmony reexport endOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__endOfYesterday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfYesterday/index.js");
/* unused harmony reexport endOfYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__format_index_js__ = __webpack_require__("./node_modules/date-fns/esm/format/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_61__format_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__formatDistance_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistance/index.js");
/* unused harmony reexport formatDistance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__formatDistanceStrict_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* unused harmony reexport formatDistanceStrict */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__formatDistanceToNow_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistanceToNow/index.js");
/* unused harmony reexport formatDistanceToNow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__formatDistanceToNowStrict_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* unused harmony reexport formatDistanceToNowStrict */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__formatDuration_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatDuration/index.js");
/* unused harmony reexport formatDuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__formatISO_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatISO/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_67__formatISO_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__formatISO9075_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatISO9075/index.js");
/* unused harmony reexport formatISO9075 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__formatISODuration_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatISODuration/index.js");
/* unused harmony reexport formatISODuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__formatRFC3339_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatRFC3339/index.js");
/* unused harmony reexport formatRFC3339 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__formatRFC7231_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatRFC7231/index.js");
/* unused harmony reexport formatRFC7231 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__formatRelative_index_js__ = __webpack_require__("./node_modules/date-fns/esm/formatRelative/index.js");
/* unused harmony reexport formatRelative */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__fromUnixTime_index_js__ = __webpack_require__("./node_modules/date-fns/esm/fromUnixTime/index.js");
/* unused harmony reexport fromUnixTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__getDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDate/index.js");
/* unused harmony reexport getDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__getDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDay/index.js");
/* unused harmony reexport getDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__getDayOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDayOfYear/index.js");
/* unused harmony reexport getDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__getDaysInMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDaysInMonth/index.js");
/* unused harmony reexport getDaysInMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__getDaysInYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDaysInYear/index.js");
/* unused harmony reexport getDaysInYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__getDecade_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDecade/index.js");
/* unused harmony reexport getDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__getHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getHours/index.js");
/* unused harmony reexport getHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__getISODay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISODay/index.js");
/* unused harmony reexport getISODay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__getISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeek/index.js");
/* unused harmony reexport getISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* unused harmony reexport getISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__getISOWeeksInYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeeksInYear/index.js");
/* unused harmony reexport getISOWeeksInYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__getMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getMilliseconds/index.js");
/* unused harmony reexport getMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__getMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getMinutes/index.js");
/* unused harmony reexport getMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__getMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getMonth/index.js");
/* unused harmony reexport getMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__getOverlappingDaysInIntervals_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js");
/* unused harmony reexport getOverlappingDaysInIntervals */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__getQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getQuarter/index.js");
/* unused harmony reexport getQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__getSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getSeconds/index.js");
/* unused harmony reexport getSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__getTime_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getTime/index.js");
/* unused harmony reexport getTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__getUnixTime_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getUnixTime/index.js");
/* unused harmony reexport getUnixTime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__getWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeek/index.js");
/* unused harmony reexport getWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__getWeekOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeekOfMonth/index.js");
/* unused harmony reexport getWeekOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__getWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeekYear/index.js");
/* unused harmony reexport getWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__getWeeksInMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeeksInMonth/index.js");
/* unused harmony reexport getWeeksInMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__getYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getYear/index.js");
/* unused harmony reexport getYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__hoursToMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/hoursToMilliseconds/index.js");
/* unused harmony reexport hoursToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__hoursToMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/hoursToMinutes/index.js");
/* unused harmony reexport hoursToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_100__hoursToSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/hoursToSeconds/index.js");
/* unused harmony reexport hoursToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_101__intervalToDuration_index_js__ = __webpack_require__("./node_modules/date-fns/esm/intervalToDuration/index.js");
/* unused harmony reexport intervalToDuration */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_102__intlFormat_index_js__ = __webpack_require__("./node_modules/date-fns/esm/intlFormat/index.js");
/* unused harmony reexport intlFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_103__isAfter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isAfter/index.js");
/* unused harmony reexport isAfter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_104__isBefore_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isBefore/index.js");
/* unused harmony reexport isBefore */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_105__isDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isDate/index.js");
/* unused harmony reexport isDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_106__isEqual_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isEqual/index.js");
/* unused harmony reexport isEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_107__isExists_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isExists/index.js");
/* unused harmony reexport isExists */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_108__isFirstDayOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isFirstDayOfMonth/index.js");
/* unused harmony reexport isFirstDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_109__isFriday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isFriday/index.js");
/* unused harmony reexport isFriday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_110__isFuture_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isFuture/index.js");
/* unused harmony reexport isFuture */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_111__isLastDayOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isLastDayOfMonth/index.js");
/* unused harmony reexport isLastDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_112__isLeapYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isLeapYear/index.js");
/* unused harmony reexport isLeapYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_113__isMatch_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isMatch/index.js");
/* unused harmony reexport isMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_114__isMonday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isMonday/index.js");
/* unused harmony reexport isMonday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_115__isPast_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isPast/index.js");
/* unused harmony reexport isPast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_116__isSameDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js");
/* unused harmony reexport isSameDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_117__isSameHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameHour/index.js");
/* unused harmony reexport isSameHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_118__isSameISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameISOWeek/index.js");
/* unused harmony reexport isSameISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_119__isSameISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameISOWeekYear/index.js");
/* unused harmony reexport isSameISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_120__isSameMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameMinute/index.js");
/* unused harmony reexport isSameMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_121__isSameMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameMonth/index.js");
/* unused harmony reexport isSameMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_122__isSameQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameQuarter/index.js");
/* unused harmony reexport isSameQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_123__isSameSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameSecond/index.js");
/* unused harmony reexport isSameSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_124__isSameWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameWeek/index.js");
/* unused harmony reexport isSameWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_125__isSameYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameYear/index.js");
/* unused harmony reexport isSameYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_126__isSaturday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSaturday/index.js");
/* unused harmony reexport isSaturday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_127__isSunday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSunday/index.js");
/* unused harmony reexport isSunday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_128__isThisHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisHour/index.js");
/* unused harmony reexport isThisHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_129__isThisISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisISOWeek/index.js");
/* unused harmony reexport isThisISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_130__isThisMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisMinute/index.js");
/* unused harmony reexport isThisMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_131__isThisMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisMonth/index.js");
/* unused harmony reexport isThisMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_132__isThisQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisQuarter/index.js");
/* unused harmony reexport isThisQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_133__isThisSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisSecond/index.js");
/* unused harmony reexport isThisSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_134__isThisWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisWeek/index.js");
/* unused harmony reexport isThisWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_135__isThisYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThisYear/index.js");
/* unused harmony reexport isThisYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_136__isThursday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isThursday/index.js");
/* unused harmony reexport isThursday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_137__isToday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isToday/index.js");
/* unused harmony reexport isToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_138__isTomorrow_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isTomorrow/index.js");
/* unused harmony reexport isTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_139__isTuesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isTuesday/index.js");
/* unused harmony reexport isTuesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_140__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* unused harmony reexport isValid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_141__isWednesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWednesday/index.js");
/* unused harmony reexport isWednesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_142__isWeekend_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWeekend/index.js");
/* unused harmony reexport isWeekend */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_143__isWithinInterval_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isWithinInterval/index.js");
/* unused harmony reexport isWithinInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_144__isYesterday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isYesterday/index.js");
/* unused harmony reexport isYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_145__lastDayOfDecade_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfDecade/index.js");
/* unused harmony reexport lastDayOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_146__lastDayOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfISOWeek/index.js");
/* unused harmony reexport lastDayOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_147__lastDayOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js");
/* unused harmony reexport lastDayOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_148__lastDayOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js");
/* unused harmony reexport lastDayOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_149__lastDayOfQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfQuarter/index.js");
/* unused harmony reexport lastDayOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_150__lastDayOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfWeek/index.js");
/* unused harmony reexport lastDayOfWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_151__lastDayOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfYear/index.js");
/* unused harmony reexport lastDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_152__lightFormat_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lightFormat/index.js");
/* unused harmony reexport lightFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_153__max_index_js__ = __webpack_require__("./node_modules/date-fns/esm/max/index.js");
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_154__milliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/milliseconds/index.js");
/* unused harmony reexport milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_155__millisecondsToHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/millisecondsToHours/index.js");
/* unused harmony reexport millisecondsToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_156__millisecondsToMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/millisecondsToMinutes/index.js");
/* unused harmony reexport millisecondsToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_157__millisecondsToSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/millisecondsToSeconds/index.js");
/* unused harmony reexport millisecondsToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_158__min_index_js__ = __webpack_require__("./node_modules/date-fns/esm/min/index.js");
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_159__minutesToHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/minutesToHours/index.js");
/* unused harmony reexport minutesToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_160__minutesToMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/minutesToMilliseconds/index.js");
/* unused harmony reexport minutesToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_161__minutesToSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/minutesToSeconds/index.js");
/* unused harmony reexport minutesToSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_162__monthsToQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/monthsToQuarters/index.js");
/* unused harmony reexport monthsToQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_163__monthsToYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/monthsToYears/index.js");
/* unused harmony reexport monthsToYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_164__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* unused harmony reexport nextDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_165__nextFriday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextFriday/index.js");
/* unused harmony reexport nextFriday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_166__nextMonday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextMonday/index.js");
/* unused harmony reexport nextMonday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_167__nextSaturday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextSaturday/index.js");
/* unused harmony reexport nextSaturday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_168__nextSunday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextSunday/index.js");
/* unused harmony reexport nextSunday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_169__nextThursday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextThursday/index.js");
/* unused harmony reexport nextThursday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_170__nextTuesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextTuesday/index.js");
/* unused harmony reexport nextTuesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_171__nextWednesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextWednesday/index.js");
/* unused harmony reexport nextWednesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_172__parse_index_js__ = __webpack_require__("./node_modules/date-fns/esm/parse/index.js");
/* unused harmony reexport parse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_173__parseISO_index_js__ = __webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_173__parseISO_index_js__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_174__parseJSON_index_js__ = __webpack_require__("./node_modules/date-fns/esm/parseJSON/index.js");
/* unused harmony reexport parseJSON */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_175__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");
/* unused harmony reexport previousDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_176__previousFriday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousFriday/index.js");
/* unused harmony reexport previousFriday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_177__previousMonday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousMonday/index.js");
/* unused harmony reexport previousMonday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_178__previousSaturday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousSaturday/index.js");
/* unused harmony reexport previousSaturday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_179__previousSunday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousSunday/index.js");
/* unused harmony reexport previousSunday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_180__previousThursday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousThursday/index.js");
/* unused harmony reexport previousThursday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_181__previousTuesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousTuesday/index.js");
/* unused harmony reexport previousTuesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_182__previousWednesday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousWednesday/index.js");
/* unused harmony reexport previousWednesday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_183__quartersToMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/quartersToMonths/index.js");
/* unused harmony reexport quartersToMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_184__quartersToYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/quartersToYears/index.js");
/* unused harmony reexport quartersToYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_185__roundToNearestMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/roundToNearestMinutes/index.js");
/* unused harmony reexport roundToNearestMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_186__secondsToHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/secondsToHours/index.js");
/* unused harmony reexport secondsToHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_187__secondsToMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/secondsToMilliseconds/index.js");
/* unused harmony reexport secondsToMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_188__secondsToMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/secondsToMinutes/index.js");
/* unused harmony reexport secondsToMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_189__set_index_js__ = __webpack_require__("./node_modules/date-fns/esm/set/index.js");
/* unused harmony reexport set */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_190__setDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setDate/index.js");
/* unused harmony reexport setDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_191__setDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setDay/index.js");
/* unused harmony reexport setDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_192__setDayOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setDayOfYear/index.js");
/* unused harmony reexport setDayOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_193__setHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setHours/index.js");
/* unused harmony reexport setHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_194__setISODay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setISODay/index.js");
/* unused harmony reexport setISODay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_195__setISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setISOWeek/index.js");
/* unused harmony reexport setISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_196__setISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setISOWeekYear/index.js");
/* unused harmony reexport setISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_197__setMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setMilliseconds/index.js");
/* unused harmony reexport setMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_198__setMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setMinutes/index.js");
/* unused harmony reexport setMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_199__setMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setMonth/index.js");
/* unused harmony reexport setMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_200__setQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setQuarter/index.js");
/* unused harmony reexport setQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_201__setSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setSeconds/index.js");
/* unused harmony reexport setSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_202__setWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setWeek/index.js");
/* unused harmony reexport setWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_203__setWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setWeekYear/index.js");
/* unused harmony reexport setWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_204__setYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setYear/index.js");
/* unused harmony reexport setYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_205__startOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js");
/* unused harmony reexport startOfDay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_206__startOfDecade_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfDecade/index.js");
/* unused harmony reexport startOfDecade */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_207__startOfHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfHour/index.js");
/* unused harmony reexport startOfHour */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_208__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* unused harmony reexport startOfISOWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_209__startOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeekYear/index.js");
/* unused harmony reexport startOfISOWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_210__startOfMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMinute/index.js");
/* unused harmony reexport startOfMinute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_211__startOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js");
/* unused harmony reexport startOfMonth */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_212__startOfQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfQuarter/index.js");
/* unused harmony reexport startOfQuarter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_213__startOfSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfSecond/index.js");
/* unused harmony reexport startOfSecond */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_214__startOfToday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfToday/index.js");
/* unused harmony reexport startOfToday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_215__startOfTomorrow_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfTomorrow/index.js");
/* unused harmony reexport startOfTomorrow */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_216__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* unused harmony reexport startOfWeek */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_217__startOfWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* unused harmony reexport startOfWeekYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_218__startOfYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfYear/index.js");
/* unused harmony reexport startOfYear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_219__startOfYesterday_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfYesterday/index.js");
/* unused harmony reexport startOfYesterday */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_220__sub_index_js__ = __webpack_require__("./node_modules/date-fns/esm/sub/index.js");
/* unused harmony reexport sub */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_221__subBusinessDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subBusinessDays/index.js");
/* unused harmony reexport subBusinessDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_222__subDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subDays/index.js");
/* unused harmony reexport subDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_223__subHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subHours/index.js");
/* unused harmony reexport subHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_224__subISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subISOWeekYears/index.js");
/* unused harmony reexport subISOWeekYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_225__subMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js");
/* unused harmony reexport subMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_226__subMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMinutes/index.js");
/* unused harmony reexport subMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_227__subMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMonths/index.js");
/* unused harmony reexport subMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_228__subQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subQuarters/index.js");
/* unused harmony reexport subQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_229__subSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subSeconds/index.js");
/* unused harmony reexport subSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_230__subWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subWeeks/index.js");
/* unused harmony reexport subWeeks */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_231__subYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subYears/index.js");
/* unused harmony reexport subYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_232__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* unused harmony reexport toDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_233__weeksToDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/weeksToDays/index.js");
/* unused harmony reexport weeksToDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_234__yearsToMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/yearsToMonths/index.js");
/* unused harmony reexport yearsToMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_235__yearsToQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/yearsToQuarters/index.js");
/* unused harmony reexport yearsToQuarters */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_236__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");
/* unused harmony namespace reexport */
// This file is generated automatically by `scripts/build/indices.js`. Please, don't change it.














































































































































































































































/***/ }),

/***/ "./node_modules/date-fns/esm/intervalToDuration/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__ = __webpack_require__("./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__differenceInYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__differenceInMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differenceInDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__differenceInHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInHours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__differenceInMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInMinutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__differenceInSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sub_index_js__ = __webpack_require__("./node_modules/date-fns/esm/sub/index.js");











/**
 * @name intervalToDuration
 * @category Common Helpers
 * @summary Convert interval to duration
 *
 * @description
 * Convert a interval object to a duration object.
 *
 * @param {Interval} interval - the interval to convert to duration
 *
 * @returns {Duration} The duration Object
 * @throws {TypeError} Requires 2 arguments
 * @throws {RangeError} `start` must not be Invalid Date
 * @throws {RangeError} `end` must not be Invalid Date
 *
 * @example
 * // Get the duration between January 15, 1929 and April 4, 1968.
 * intervalToDuration({
 *   start: new Date(1929, 0, 15, 12, 0, 0),
 *   end: new Date(1968, 3, 4, 19, 5, 0)
 * })
 * // => { years: 39, months: 2, days: 20, hours: 7, minutes: 5, seconds: 0 }
 */

function intervalToDuration(_ref) {
  var start = _ref.start,
      end = _ref.end;
  Object(__WEBPACK_IMPORTED_MODULE_8__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_9__toDate_index_js__["a" /* default */])(start);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_9__toDate_index_js__["a" /* default */])(end);

  if (!Object(__WEBPACK_IMPORTED_MODULE_7__isValid_index_js__["a" /* default */])(dateLeft)) {
    throw new RangeError('Start Date is invalid');
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_7__isValid_index_js__["a" /* default */])(dateRight)) {
    throw new RangeError('End Date is invalid');
  }

  var duration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  var sign = Object(__WEBPACK_IMPORTED_MODULE_0__compareAsc_index_js__["a" /* default */])(dateLeft, dateRight);
  duration.years = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_1__differenceInYears_index_js__["a" /* default */])(dateLeft, dateRight));
  var remainingMonths = Object(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(dateLeft, {
    years: sign * duration.years
  });
  duration.months = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_2__differenceInMonths_index_js__["a" /* default */])(remainingMonths, dateRight));
  var remainingDays = Object(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingMonths, {
    months: sign * duration.months
  });
  duration.days = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_3__differenceInDays_index_js__["a" /* default */])(remainingDays, dateRight));
  var remainingHours = Object(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingDays, {
    days: sign * duration.days
  });
  duration.hours = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_4__differenceInHours_index_js__["a" /* default */])(remainingHours, dateRight));
  var remainingMinutes = Object(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingHours, {
    hours: sign * duration.hours
  });
  duration.minutes = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_5__differenceInMinutes_index_js__["a" /* default */])(remainingMinutes, dateRight));
  var remainingSeconds = Object(__WEBPACK_IMPORTED_MODULE_10__sub_index_js__["a" /* default */])(remainingMinutes, {
    minutes: sign * duration.minutes
  });
  duration.seconds = Math.abs(Object(__WEBPACK_IMPORTED_MODULE_6__differenceInSeconds_index_js__["a" /* default */])(remainingSeconds, dateRight));
  return duration;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/intlFormat/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name intlFormat
 * @category Common Helpers
 * @summary  Format the date with Intl.DateTimeFormat (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat).
 *
 * @description
 * Return the formatted date string in the given format.
 * The method uses [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) inside.
 * formatOptions are the same as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options)
 *
 * > ⚠️ Please note that before Node version 13.0.0, only the locale data for en-US is available by default.
 *
 * @param {Date|Number} argument - the original date.
 * @param {Object} [formatOptions] - an object with options.
 * @param {'lookup'|'best fit'} [formatOptions.localeMatcher='best fit'] - locale selection algorithm.
 * @param {'narrow'|'short'|'long'} [formatOptions.weekday] - representation the days of the week.
 * @param {'narrow'|'short'|'long'} [formatOptions.era] - representation of eras.
 * @param {'numeric'|'2-digit'} [formatOptions.year] - representation of years.
 * @param {'numeric'|'2-digit'|'narrow'|'short'|'long'} [formatOptions.month='numeric'] - representation of month.
 * @param {'numeric'|'2-digit'} [formatOptions.day='numeric'] - representation of day.
 * @param {'numeric'|'2-digit'} [formatOptions.hour='numeric'] - representation of hours.
 * @param {'numeric'|'2-digit'} [formatOptions.minute] - representation of minutes.
 * @param {'numeric'|'2-digit'} [formatOptions.second] - representation of seconds.
 * @param {'short'|'long'} [formatOptions.timeZoneName] - representation of names of time zones.
 * @param {'basic'|'best fit'} [formatOptions.formatMatcher='best fit'] - format selection algorithm.
 * @param {Boolean} [formatOptions.hour12] - determines whether to use 12-hour time format.
 * @param {String} [formatOptions.timeZone] - the time zone to use.
 * @param {Object} [localeOptions] - an object with locale.
 * @param {String|String[]} [localeOptions.locale] - the locale code
 * @returns {String} the formatted date string.
 * @throws {TypeError} 1 argument required.
 * @throws {RangeError} `date` must not be Invalid Date
 *
 * @example
 * // Represent 10 October 2019 in German.
 * // Convert the date with format's options and locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      weekday: 'long',
 *      year: 'numeric',
 *      month: 'long',
 *      day: 'numeric',
 *    }, {
 *      locale: 'de-DE',
 *  })
 * //=> Freitag, 4. Oktober 2019
 *
 * @example
 * // Represent 10 October 2019.
 * // Convert the date with format's options.
 * const result = intlFormat.default(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      year: 'numeric',
 *      month: 'numeric',
 *      day: 'numeric',
 *      hour: 'numeric',
 *  })
 * //=> 10/4/2019, 12 PM
 *
 * @example
 * // Represent 10 October 2019 in Korean.
 * // Convert the date with locale's options.
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456), {
 *      locale: 'ko-KR',
 *  })
 * //=> 2019. 10. 4.
 *
 * @example
 * // Represent 10 October 2019 in middle-endian format:
 * const result = intlFormat(new Date(2019, 9, 4, 12, 30, 13, 456))
 * //=> 10/4/2019
 */
function intlFormat(date, formatOrLocale, localeOptions) {
  var _localeOptions;

  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var formatOptions;

  if (isFormatOptions(formatOrLocale)) {
    formatOptions = formatOrLocale;
  } else {
    localeOptions = formatOrLocale;
  }

  return new Intl.DateTimeFormat((_localeOptions = localeOptions) === null || _localeOptions === void 0 ? void 0 : _localeOptions.locale, formatOptions).format(date);
}

function isFormatOptions(opts) {
  return opts !== undefined && !('locale' in opts);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateToCompare = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var dateToCompare = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isEqual/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isEqual
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0),
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */

function isEqual(dirtyLeftDate, dirtyRightDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyLeftDate);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyRightDate);
  return dateLeft.getTime() === dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isExists/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isExists(2018, 1, 31)
 * //=> false
 */
function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError('3 argument required, but only ' + arguments.length + ' present');
  }

  var date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFirstDayOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFirstDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */

function isFirstDayOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDate() === 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFriday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFriday
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */

function isFriday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 5;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isFuture/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isFuture
 * @category Common Helpers
 * @summary Is the given date in the future?
 * @pure false
 *
 * @description
 * Is the given date in the future?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */

function isFuture(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime() > Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isLastDayOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__endOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  return Object(__WEBPACK_IMPORTED_MODULE_1__endOfDay_index_js__["a" /* default */])(date).getTime() === Object(__WEBPACK_IMPORTED_MODULE_2__endOfMonth_index_js__["a" /* default */])(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLeapYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isLeapYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */

function isLeapYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isMatch/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_index_js__ = __webpack_require__("./node_modules/date-fns/esm/parse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isMatch
 * @category Common Helpers
 * @summary validates the date string against given formats
 *
 * @description
 * Return the true if given date is string correct against the given format else
 * will return false.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * isMatch('23 AM', 'HH a')
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `isMatch` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `isMatch` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `isMatch` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `isMatch('50', 'yy') //=> true`
 *
 *    `isMatch('75', 'yy') //=> true`
 *
 *    while `uu` will use the year as is:
 *
 *    `isMatch('50', 'uu') //=> true`
 *
 *    `isMatch('75', 'uu') //=> true`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be checked in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are matched (e.g. when matching string 'January 1st' without a year),
 * the values will be taken from today's using `new Date()` date which works as a context of parsing.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 *
 *
 * @param {String} dateString - the date string to verify
 * @param {String} formatString - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Boolean}
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Match 11 February 2014 from middle-endian format:
 * var result = isMatch('02/11/2014', 'MM/dd/yyyy')
 * //=> true
 *
 * @example
 * // Match 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = isMatch('28-a de februaro', "do 'de' MMMM", {
 *   locale: eo
 * })
 * //=> true
 */
function isMatch(dateString, formatString, options) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__isValid_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__parse_index_js__["a" /* default */])(dateString, formatString, new Date(), options));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isMonday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isMonday
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */

function isMonday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(date).getDay() === 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfDay = Object(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfDay = Object(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameHour/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameHour;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfHour/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameHour
 * @category Hour Helpers
 * @summary Are the given dates in the same hour (and same day)?
 *
 * @description
 * Are the given dates in the same hour (and same day)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour (and same day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 6, 30))
 * //=> true
 * 
 * @example
 * // Are 4 September 2014 06:00:00 and 5 September 06:00:00 in the same hour?
 * var result = isSameHour(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 5, 6, 0))
 * //=> false
 */

function isSameHour(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfHour = Object(__WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfHour = Object(__WEBPACK_IMPORTED_MODULE_0__startOfHour_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameISOWeek
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week (and year)?
 *
 * @description
 * Are the given dates in the same ISO week (and year)?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(new Date(2014, 8, 1), new Date(2014, 8, 7))
 * //=> true
 *
 * @example
 * // Are 1 September 2014 and 1 September 2015 in the same ISO week?
 * var result = isSameISOWeek(new Date(2014, 8, 1), new Date(2015, 8, 1))
 * //=> false
 */

function isSameISOWeek(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyDateRight, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isSameISOYear` to `isSameISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOWeekYear(new Date(2003, 11, 29), new Date(2005, 0, 2))
 * //=> true
 */

function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfYear = Object(__WEBPACK_IMPORTED_MODULE_0__startOfISOWeekYear_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMinute/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameMinute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfMinute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 * 
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */

function isSameMinute(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfMinute = Object(__WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfMinute = Object(__WEBPACK_IMPORTED_MODULE_0__startOfMinute_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * var result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */

function isSameMonth(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfQuarter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameQuarter
 * @category Quarter Helpers
 * @summary Are the given dates in the same quarter (and year)?
 *
 * @description
 * Are the given dates in the same quarter (and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter (and year)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2014, 2, 8))
 * //=> true
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same quarter?
 * var result = isSameQuarter(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */

function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfQuarter = Object(__WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfQuarter = Object(__WEBPACK_IMPORTED_MODULE_0__startOfQuarter_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameSecond/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameSecond;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfSecond/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameSecond
 * @category Second Helpers
 * @summary Are the given dates in the same second (and hour and day)?
 *
 * @description
 * Are the given dates in the same second (and hour and day)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second (and hour and day)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500 in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 * 
 * @example
 * // Are 4 September 2014 06:00:15.000 and 4 September 2014 06:01.15.000 in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 4, 6, 1, 15)
 * )
 * //=> false
 * 
 * @example
 * // Are 4 September 2014 06:00:15.000 and 5 September 2014 06:00.15.000 in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 0, 15),
 *   new Date(2014, 8, 5, 6, 0, 15)
 * )
 * //=> false
 */

function isSameSecond(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfSecond = Object(__WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRightStartOfSecond = Object(__WEBPACK_IMPORTED_MODULE_0__startOfSecond_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 * 
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * var result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeftStartOfWeek = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateLeft, dirtyOptions);
  var dateRightStartOfWeek = Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDateRight, dirtyOptions);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSameYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */

function isSameYear(dirtyDateLeft, dirtyDateRight) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var dateLeft = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateLeft);
  var dateRight = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDateRight);
  return dateLeft.getFullYear() === dateRight.getFullYear();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSaturday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSaturday;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSaturday
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */

function isSaturday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 6;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSunday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isSunday;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSunday
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */

function isSunday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 0;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisHour/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameHour_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameHour/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisHour
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */

function isThisHour(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameHour_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisISOWeek
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */

function isThisISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameISOWeek_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMinute/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameMinute_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameMinute/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMinute
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */

function isThisMinute(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameMinute_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameMonth_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameQuarter_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameQuarter/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisQuarter
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */

function isThisQuarter(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameQuarter_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisSecond/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameSecond_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameSecond/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisSecond
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */

function isThisSecond(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameSecond_index_js__["a" /* default */])(Date.now(), dirtyDate);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameWeek_index_js__["a" /* default */])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisYear
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */

function isThisYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameYear_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThursday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThursday
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */

function isThursday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 4;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__["a" /* default */])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTomorrow/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isSameDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */

function isTomorrow(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__isSameDay_index_js__["a" /* default */])(dirtyDate, Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isTuesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isTuesday
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */

function isTuesday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 2;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isValid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);

  if (!Object(__WEBPACK_IMPORTED_MODULE_0__isDate_index_js__["a" /* default */])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWednesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isWednesday
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * const result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */

function isWednesday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getDay() === 3;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWeekend/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isWeekend;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isWeekend
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * const result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */

function isWeekend(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  return day === 0 || day === 6;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var time = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate).getTime();
  var startTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.start).getTime();
  var endTime = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isYesterday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isYesterday
 * @category Day Helpers
 * @summary Is the given date yesterday?
 * @pure false
 *
 * @description
 * Is the given date yesterday?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */

function isYesterday(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__isSameDay_index_js__["a" /* default */])(dirtyDate, Object(__WEBPACK_IMPORTED_MODULE_1__subDays_index_js__["a" /* default */])(Date.now(), 1));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfDecade/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name lastDayOfDecade
 * @category Decade Helpers
 * @summary Return the last day of a decade for the given date.
 *
 * @description
 * Return the last day of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a decade for 21 December 2012 21:12:00:
 * var result = lastDayOfDecade(new Date(2012, 11, 21, 21, 12, 00))
 * //=> Wed Dec 31 2019 00:00:00
 */

function lastDayOfDecade(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = 9 + Math.floor(year / 10) * 10;
  date.setFullYear(decade + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lastDayOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/lastDayOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name lastDayOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */

function lastDayOfISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__lastDayOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name lastDayOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `lastDayOfISOYear` to `lastDayOfISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `getWeekYear`.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */

function lastDayOfISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year + 1, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  date.setDate(date.getDate() - 1);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lastDayOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name lastDayOfMonth
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the last day of a quarter
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */

function lastDayOfQuarter(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3 + 3;
  date.setMonth(month, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lastDayOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name lastDayOfWeek
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lastDayOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name lastDayOfYear
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the last day of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */

function lastDayOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  date.setFullYear(year + 1, 0, 0);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/lightFormat/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_format_lightFormatters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isValid_index_js__ = __webpack_require__("./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





 // This RegExp consists of three parts separated by `|`:
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name lightFormat
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. Unlike `format`,
 * `lightFormat` doesn't use locales and outputs date using the most popular tokens.
 *
 * > ⚠️ Please note that the `lightFormat` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   |
 * |---------------------------------|---------|-----------------------------------|
 * | AM, PM                          | a..aaa  | AM, PM                            |
 * |                                 | aaaa    | a.m., p.m.                        |
 * |                                 | aaaaa   | a, p                              |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 |
 * |                                 | yy      | 44, 01, 00, 17                    |
 * |                                 | yyy     | 044, 001, 000, 017                |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |
 * |                                 | MM      | 01, 02, ..., 12                   |
 * | Day of month                    | d       | 1, 2, ..., 31                     |
 * |                                 | dd      | 01, 02, ..., 31                   |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |
 * |                                 | hh      | 01, 02, ..., 11, 12               |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |
 * |                                 | HH      | 00, 01, 02, ..., 23               |
 * | Minute                          | m       | 0, 1, ..., 59                     |
 * |                                 | mm      | 00, 01, ..., 59                   |
 * | Second                          | s       | 0, 1, ..., 59                     |
 * |                                 | ss      | 00, 01, ..., 59                   |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |
 * |                                 | SS      | 00, 01, ..., 99                   |
 * |                                 | SSS     | 000, 001, ..., 999                |
 * |                                 | SSSS    | ...                               |
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * const result = lightFormat(new Date(2014, 1, 11), 'yyyy-MM-dd')
 * //=> '2014-02-11'
 */

function lightFormat(dirtyDate, formatStr) {
  Object(__WEBPACK_IMPORTED_MODULE_5__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var originalDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

  if (!Object(__WEBPACK_IMPORTED_MODULE_3__isValid_index_js__["a" /* default */])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = Object(__WEBPACK_IMPORTED_MODULE_2__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(originalDate);
  var utcDate = Object(__WEBPACK_IMPORTED_MODULE_4__subMilliseconds_index_js__["a" /* default */])(originalDate, timezoneOffset);
  var tokens = formatStr.match(formattingTokensRegExp); // The only case when formattingTokensRegExp doesn't match the string is when it's empty

  if (!tokens) return '';
  var result = tokens.map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = __WEBPACK_IMPORTED_MODULE_1__lib_format_lightFormatters_index_js__["a" /* default */][firstCharacter];

    if (formatter) {
      return formatter(utcDate, substring);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matches = input.match(escapedStringRegExp);

  if (!matches) {
    return input;
  }

  return matches[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildFormatLongFn;
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLocalizeFn;
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildMatchFn;
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildMatchPatternFn;
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildFormatLongFn_index_js__["a" /* default */])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ __webpack_exports__["a"] = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildLocalizeFn_index_js__["a" /* default */])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_buildMatchPatternFn_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: Object(__WEBPACK_IMPORTED_MODULE_1__lib_buildMatchPatternFn_index_js__["a" /* default */])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: Object(__WEBPACK_IMPORTED_MODULE_0__lib_buildMatchFn_index_js__["a" /* default */])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ __webpack_exports__["a"] = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_formatDistance_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_formatLong_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_formatRelative_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_localize_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_match_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: __WEBPACK_IMPORTED_MODULE_0__lib_formatDistance_index_js__["a" /* default */],
  formatLong: __WEBPACK_IMPORTED_MODULE_1__lib_formatLong_index_js__["a" /* default */],
  formatRelative: __WEBPACK_IMPORTED_MODULE_2__lib_formatRelative_index_js__["a" /* default */],
  localize: __WEBPACK_IMPORTED_MODULE_3__lib_localize_index_js__["a" /* default */],
  match: __WEBPACK_IMPORTED_MODULE_4__lib_match_index_js__["a" /* default */],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ __webpack_exports__["a"] = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/max/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = max;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `max` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   var date1 = new Date(1989, 6, 10)
 *   var date2 = new Date(1987, 1, 11)
 *   var maxDate = max(date1, date2)
 *
 *   // v2.0.0 onward:
 *   var dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   var maxDate = max(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} the latest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */

function max(dirtyDatesArray) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (result === undefined || result < currentDate || isNaN(Number(currentDate))) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/milliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

// Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
// 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
var daysInYear = 365.2425;
/**
 * @name milliseconds
 * @category Millisecond Helpers
 * @summary
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * @description
 * Returns the number of milliseconds in the specified, years, months, weeks, days, hours, minutes and seconds.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * One month is a year divided by 12.
 *
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {number} the milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // 1 year in milliseconds
 * milliseconds({ years: 1 })
 * //=> 31556952000
 *
 * // 3 months in milliseconds
 * milliseconds({ months: 3 })
 * //=> 7889238000
 */

function milliseconds(_ref) {
  var years = _ref.years,
      months = _ref.months,
      weeks = _ref.weeks,
      days = _ref.days,
      hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var totalDays = 0;
  if (years) totalDays += years * daysInYear;
  if (months) totalDays += months * (daysInYear / 12);
  if (weeks) totalDays += weeks * 7;
  if (days) totalDays += days;
  var totalSeconds = totalDays * 24 * 60 * 60;
  if (hours) totalSeconds += hours * 60 * 60;
  if (minutes) totalSeconds += minutes * 60;
  if (seconds) totalSeconds += seconds;
  return Math.round(totalSeconds * 1000);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/millisecondsToHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name millisecondsToHours
 * @category Conversion Helpers
 * @summary Convert milliseconds to hours.
 *
 * @description
 * Convert a number of milliseconds to a full number of hours.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200000 milliseconds to hours:
 * const result = millisecondsToHours(7200000)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToHours(7199999)
 * //=> 1
 */

function millisecondsToHours(milliseconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["b" /* millisecondsInHour */];
  return Math.floor(hours);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/millisecondsToMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name millisecondsToMinutes
 * @category Conversion Helpers
 * @summary Convert milliseconds to minutes.
 *
 * @description
 * Convert a number of milliseconds to a full number of minutes.
 *
 * @param {number} milliseconds - number of milliseconds to be converted.
 *
 * @returns {number} the number of milliseconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 60000 milliseconds to minutes:
 * const result = millisecondsToMinutes(60000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToMinutes(119999)
 * //=> 1
 */

function millisecondsToMinutes(milliseconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var minutes = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["c" /* millisecondsInMinute */];
  return Math.floor(minutes);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/millisecondsToSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name millisecondsToSeconds
 * @category Conversion Helpers
 * @summary Convert milliseconds to seconds.
 *
 * @description
 * Convert a number of milliseconds to a full number of seconds.
 *
 * @param {number} milliseconds - number of milliseconds to be converted
 *
 * @returns {number} the number of milliseconds converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 1000 miliseconds to seconds:
 * const result = millisecondsToSeconds(1000)
 * //=> 1
 *
 * @example
 * // It uses floor rounding:
 * const result = millisecondsToSeconds(1999)
 * //=> 1
 */

function millisecondsToSeconds(milliseconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var seconds = milliseconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["d" /* millisecondsInSecond */];
  return Math.floor(seconds);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/min/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = min;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - `min` function now accepts an array of dates rather than spread arguments.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   const date1 = new Date(1989, 6, 10)
 *   const date2 = new Date(1987, 1, 11)
 *   const minDate = min(date1, date2)
 *
 *   // v2.0.0 onward:
 *   const dates = [new Date(1989, 6, 10), new Date(1987, 1, 11)]
 *   const minDate = min(dates)
 *   ```
 *
 * @param {Date[]|Number[]} datesArray - the dates to compare
 * @returns {Date} - the earliest of the dates
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */

function min(dirtyDatesArray) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var datesArray; // `dirtyDatesArray` is Array, Set or Map, or object with custom `forEach` method

  if (dirtyDatesArray && typeof dirtyDatesArray.forEach === 'function') {
    datesArray = dirtyDatesArray; // If `dirtyDatesArray` is Array-like Object, convert to Array.
  } else if (typeof dirtyDatesArray === 'object' && dirtyDatesArray !== null) {
    datesArray = Array.prototype.slice.call(dirtyDatesArray);
  } else {
    // `dirtyDatesArray` is non-iterable, return Invalid Date
    return new Date(NaN);
  }

  var result;
  datesArray.forEach(function (dirtyDate) {
    var currentDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);

    if (result === undefined || result > currentDate || isNaN(currentDate.getDate())) {
      result = currentDate;
    }
  });
  return result || new Date(NaN);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/minutesToHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name minutesToHours
 * @category Conversion Helpers
 * @summary Convert minutes to hours.
 *
 * @description
 * Convert a number of minutes to a full number of hours.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 140 minutes to hours:
 * const result = minutesToHours(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = minutesToHours(179)
 * //=> 2
 */

function minutesToHours(minutes) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = minutes / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["e" /* minutesInHour */];
  return Math.floor(hours);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/minutesToMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name minutesToMilliseconds
 * @category Conversion Helpers
 * @summary Convert minutes to milliseconds.
 *
 * @description
 * Convert a number of minutes to a full number of milliseconds.
 *
 * @param {number} minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to milliseconds
 * const result = minutesToMilliseconds(2)
 * //=> 120000
 */

function minutesToMilliseconds(minutes) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(minutes * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["c" /* millisecondsInMinute */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/minutesToSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name minutesToSeconds
 * @category Conversion Helpers
 * @summary Convert minutes to seconds.
 *
 * @description
 * Convert a number of minutes to a full number of seconds.
 *
 * @param { number } minutes - number of minutes to be converted
 *
 * @returns {number} the number of minutes converted in seconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 minutes to seconds
 * const result = minutesToSeconds(2)
 * //=> 120
 */

function minutesToSeconds(minutes) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(minutes * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["j" /* secondsInMinute */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/monthsToQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name monthsToQuarters
 * @category Conversion Helpers
 * @summary Convert number of months to quarters.
 *
 * @description
 * Convert a number of months to a full number of quarters.
 *
 * @param {number} months - number of months to be converted.
 *
 * @returns {number} the number of months converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 6 months to quarters:
 * const result = monthsToQuarters(6)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = monthsToQuarters(7)
 * //=> 2
 */

function monthsToQuarters(months) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var quarters = months / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["f" /* monthsInQuarter */];
  return Math.floor(quarters);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/monthsToYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name monthsToYears
 * @category Conversion Helpers
 * @summary Convert number of months to years.
 *
 * @description
 * Convert a number of months to a full number of years.
 *
 * @param {number} months - number of months to be converted
 *
 * @returns {number} the number of months converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 36 months to years:
 * const result = monthsToYears(36)
 * //=> 3
 *
 * // It uses floor rounding:
 * const result = monthsToYears(40)
 * //=> 3
 */

function monthsToYears(months) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var years = months / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["g" /* monthsInYear */];
  return Math.floor(years);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nextDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextDay(date, day) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var delta = day - Object(__WEBPACK_IMPORTED_MODULE_1__getDay_index_js__["a" /* default */])(date);
  if (delta <= 0) delta += 7;
  return Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextFriday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextFriday
 * @category Weekday Helpers
 * @summary When is the next Friday?
 *
 * @description
 * When is the next Friday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Friday after Mar, 22, 2020?
 * const result = nextFriday(new Date(2020, 2, 22))
 * //=> Fri Mar 27 2020 00:00:00
 */

function nextFriday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 5);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextMonday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */

function nextMonday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 1);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextSaturday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextSaturday
 * @category Weekday Helpers
 * @summary When is the next Saturday?
 *
 * @description
 * When is the next Saturday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Saturday after Mar, 22, 2020?
 * const result = nextSaturday(new Date(2020, 2, 22))
 * //=> Sat Mar 28 2020 00:00:00
 */

function nextSaturday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 6);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextSunday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextSunday
 * @category Weekday Helpers
 * @summary When is the next Sunday?
 *
 * @description
 * When is the next Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Sunday after Mar, 22, 2020?
 * const result = nextSunday(new Date(2020, 2, 22))
 * //=> Sun Mar 29 2020 00:00:00
 */

function nextSunday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 0);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextThursday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextThursday
 * @category Weekday Helpers
 * @summary When is the next Thursday?
 *
 * @description
 * When is the next Thursday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Thursday after Mar, 22, 2020?
 * const result = nextThursday(new Date(2020, 2, 22))
 * //=> Thur Mar 26 2020 00:00:00
 */

function nextThursday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 4);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextTuesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextTuesday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 2);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextWednesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextWednesday
 * @category Weekday Helpers
 * @summary When is the next Wednesday?
 *
 * @description
 * When is the next Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Wednesday after Mar, 22, 2020?
 * const result = nextWednesday(new Date(2020, 2, 22))
 * //=> Wed Mar 25 2020 00:00:00
 */

function nextWednesday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__nextDay_index_js__["a" /* default */])(date, 3);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/_lib/parsers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_getUTCWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/setUTCDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_setUTCISODay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/setUTCISODay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_setUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_setUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/setUTCWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");







var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = Object(__WEBPACK_IMPORTED_MODULE_0__lib_getUTCWeekYear_index_js__["a" /* default */])(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return Object(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return Object(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return Object(__WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__["a" /* default */])(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__lib_startOfUTCWeek_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__lib_setUTCWeek_index_js__["a" /* default */])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(__WEBPACK_IMPORTED_MODULE_5__lib_startOfUTCISOWeek_index_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__lib_setUTCISOWeek_index_js__["a" /* default */])(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = Object(__WEBPACK_IMPORTED_MODULE_1__lib_setUTCDay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = Object(__WEBPACK_IMPORTED_MODULE_2__lib_setUTCISODay_index_js__["a" /* default */])(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (parsers);

/***/ }),

/***/ "./node_modules/date-fns/esm/parse/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__ = __webpack_require__("./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_assign_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_format_longFormatters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_parsers_index_js__ = __webpack_require__("./node_modules/date-fns/esm/parse/_lib/parsers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");










var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 001, ..., 999                |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward (toDate no longer accepts a string)
 *   toDate(1392098430000) // Unix to timestamp
 *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_9__lib_requiredArgs_index_js__["a" /* default */])(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale = options.locale || __WEBPACK_IMPORTED_MODULE_0__locale_en_US_index_js__["a" /* default */];

  if (!locale.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_7__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  }; // If timezone isn't specified, it will be set to the system timezone

  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = __WEBPACK_IMPORTED_MODULE_4__lib_format_longFormatters_index_js__["a" /* default */][firstCharacter];
      return longFormatter(substring, locale.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && Object(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["b" /* isProtectedWeekYearToken */])(token)) {
      Object(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["c" /* throwProtectedError */])(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && Object(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["a" /* isProtectedDayOfYearToken */])(token)) {
      Object(__WEBPACK_IMPORTED_MODULE_6__lib_protectedTokens_index_js__["c" /* throwProtectedError */])(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = __WEBPACK_IMPORTED_MODULE_8__lib_parsers_index_js__["a" /* default */][firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = Object(__WEBPACK_IMPORTED_MODULE_1__subMilliseconds_index_js__["a" /* default */])(date, Object(__WEBPACK_IMPORTED_MODULE_5__lib_getTimezoneOffsetInMilliseconds_index_js__["a" /* default */])(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      Object(__WEBPACK_IMPORTED_MODULE_3__lib_assign_index_js__["a" /* default */])(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseISO;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["b" /* millisecondsInHour */] + minutes * __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["c" /* millisecondsInMinute */] + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["b" /* millisecondsInHour */] + minutes * __WEBPACK_IMPORTED_MODULE_0__constants_index_js__["c" /* millisecondsInMinute */]);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseJSON/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name parseJSON
 * @category Common Helpers
 * @summary Parse a JSON date string
 *
 * @description
 * Converts a complete ISO date string in UTC time, the typical format for transmitting
 * a date in JSON, to a JavaScript `Date` instance.
 *
 * This is a minimal implementation for converting dates retrieved from a JSON API to
 * a `Date` instance which can be used with other functions in the `date-fns` library.
 * The following formats are supported:
 *
 * - `2000-03-15T05:20:10.123Z`: The output of `.toISOString()` and `JSON.stringify(new Date())`
 * - `2000-03-15T05:20:10Z`: Without milliseconds
 * - `2000-03-15T05:20:10+00:00`: With a zero offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+05:45`: With a positive or negative offset, the default JSON encoded format in some other languages
 * - `2000-03-15T05:20:10+0000`: With a zero offset without a colon
 * - `2000-03-15T05:20:10`: Without a trailing 'Z' symbol
 * - `2000-03-15T05:20:10.1234567`: Up to 7 digits in milliseconds field. Only first 3 are taken into account since JS does not allow fractional milliseconds
 * - `2000-03-15 05:20:10`: With a space instead of a 'T' separator for APIs returning a SQL date without reformatting
 *
 * For convenience and ease of use these other input types are also supported
 * via [toDate]{@link https://date-fns.org/docs/toDate}:
 *
 * - A `Date` instance will be cloned
 * - A `number` will be treated as a timestamp
 *
 * Any other input type or invalid date strings will return an `Invalid Date`.
 *
 * @param {String|Number|Date} argument A fully formed ISO8601 date string to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 */

function parseJSON(argument) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);

  if (typeof argument === 'string') {
    var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);

    if (parts) {
      // Group 8 matches the sign
      return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == '-' ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == '-' ? -1 : 1), +parts[6], +((parts[7] || '0') + '00').substring(0, 3)));
    }

    return new Date(NaN);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(argument);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = previousDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subDays/index.js");




/**
 * @name previousDay
 * @category Weekday Helpers
 * @summary When is the previous day of the week?
 *
 * @description
 * When is the previous day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {number} day - day of the week
 * @returns {Date} - the date is the previous day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the previous Monday before Mar, 20, 2020?
 * const result = previousDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 16 2020 00:00:00
 *
 * @example
 * // When is the previous Tuesday before Mar, 21, 2020?
 * const result = previousDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 17 2020 00:00:00
 */
function previousDay(date, day) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var delta = Object(__WEBPACK_IMPORTED_MODULE_1__getDay_index_js__["a" /* default */])(date) - day;
  if (delta <= 0) delta += 7;
  return Object(__WEBPACK_IMPORTED_MODULE_2__subDays_index_js__["a" /* default */])(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousFriday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousFriday
 * @category Weekday Helpers
 * @summary When is the previous Friday?
 *
 * @description
 * When is the previous Friday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Friday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Friday before Jun, 19, 2021?
 * const result = previousFriday(new Date(2021, 5, 19))
 * //=> Fri June 18 2021 00:00:00
 */

function previousFriday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 5);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousMonday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousMonday
 * @category Weekday Helpers
 * @summary When is the previous Monday?
 *
 * @description
 * When is the previous Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Monday before Jun, 18, 2021?
 * const result = previousMonday(new Date(2021, 5, 18))
 * //=> Mon June 14 2021 00:00:00
 */

function previousMonday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 1);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousSaturday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousSaturday
 * @category Weekday Helpers
 * @summary When is the previous Saturday?
 *
 * @description
 * When is the previous Saturday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Saturday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Saturday before Jun, 20, 2021?
 * const result = previousSaturday(new Date(2021, 5, 20))
 * //=> Sat June 19 2021 00:00:00
 */

function previousSaturday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 6);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousSunday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousSunday
 * @category Weekday Helpers
 * @summary When is the previous Sunday?
 *
 * @description
 * When is the previous Sunday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Sunday before Jun, 21, 2021?
 * const result = previousSunday(new Date(2021, 5, 21))
 * //=> Sun June 20 2021 00:00:00
 */

function previousSunday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 0);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousThursday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousThursday
 * @category Weekday Helpers
 * @summary When is the previous Thursday?
 *
 * @description
 * When is the previous Thursday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Thursday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Thursday before Jun, 18, 2021?
 * const result = previousThursday(new Date(2021, 5, 18))
 * //=> Thu June 17 2021 00:00:00
 */

function previousThursday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 4);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousTuesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousTuesday
 * @category Weekday Helpers
 * @summary When is the previous Tuesday?
 *
 * @description
 * When is the previous Tuesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Tuesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Tuesday before Jun, 18, 2021?
 * const result = previousTuesday(new Date(2021, 5, 18))
 * //=> Tue June 15 2021 00:00:00
 */

function previousTuesday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 2);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/previousWednesday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/previousDay/index.js");


/**
 * @name previousWednesday
 * @category Weekday Helpers
 * @summary When is the previous Wednesday?
 *
 * @description
 * When is the previous Wednesday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the previous Wednesday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the previous Wednesday before Jun, 18, 2021?
 * const result = previousWednesday(new Date(2021, 5, 18))
 * //=> Wed June 16 2021 00:00:00
 */

function previousWednesday(date) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_1__previousDay_index_js__["a" /* default */])(date, 3);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/quartersToMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name quartersToMonths
 * @category Conversion Helpers
 * @summary Convert number of quarters to months.
 *
 * @description
 * Convert a number of quarters to a full number of months.
 *
 * @param {number} quarters - number of quarters to be converted
 *
 * @returns {number} the number of quarters converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 quarters to months
 * const result = quartersToMonths(2)
 * //=> 6
 */

function quartersToMonths(quarters) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(quarters * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["f" /* monthsInQuarter */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/quartersToYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name quartersToYears
 * @category Conversion Helpers
 * @summary Convert number of quarters to years.
 *
 * @description
 * Convert a number of quarters to a full number of years.
 *
 * @param {number} quarters - number of quarters to be converted
 *
 * @returns {number} the number of quarters converted in years
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 8 quarters to years
 * const result = quartersToYears(8)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = quartersToYears(11)
 * //=> 2
 */

function quartersToYears(quarters) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var years = quarters / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["h" /* quartersInYear */];
  return Math.floor(years);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/roundToNearestMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");


/**
 * @name roundToNearestMinutes
 * @category Minute Helpers
 * @summary Rounds the given date to the nearest minute
 *
 * @description
 * Rounds the given date to the nearest minute (or number of minutes).
 * Rounds up when the given date is exactly between the nearest round minutes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to round
 * @param {Object} [options] - an object with options.
 * @param {Number} [options.nearestTo=1] - nearest number of minutes to round to. E.g. `15` to round to quarter hours.
 * @returns {Date} the new date rounded to the closest minute
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.nearestTo` must be between 1 and 30
 *
 * @example
 * // Round 10 July 2014 12:12:34 to nearest minute:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34))
 * //=> Thu Jul 10 2014 12:13:00
 *
 * @example
 * // Round 10 July 2014 12:07:30 to nearest quarter hour:
 * var result = roundToNearestMinutes(new Date(2014, 6, 10, 12, 12, 34), { nearestTo: 15 })
 * // rounds up because given date is exactly between 12:00:00 and 12:15:00
 * //=> Thu Jul 10 2014 12:15:00
 */

function roundToNearestMinutes(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present');
  }

  var nearestTo = options && 'nearestTo' in options ? Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.nearestTo) : 1;

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = date.getSeconds(); // relevant if nearestTo is 1, which is the default case

  var minutes = date.getMinutes() + seconds / 60;
  var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo;
  var remainderMinutes = minutes % nearestTo;
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), roundedMinutes + addedMinutes);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/secondsToHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name secondsToHours
 * @category Conversion Helpers
 * @summary Convert seconds to hours.
 *
 * @description
 * Convert a number of seconds to a full number of hours.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in hours
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 7200 seconds into hours
 * const result = secondsToHours(7200)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToHours(7199)
 * //=> 1
 */

function secondsToHours(seconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var hours = seconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["i" /* secondsInHour */];
  return Math.floor(hours);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/secondsToMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name secondsToMilliseconds
 * @category Conversion Helpers
 * @summary Convert seconds to milliseconds.
 *
 * @description
 * Convert a number of seconds to a full number of milliseconds.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in milliseconds
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 seconds into milliseconds
 * const result = secondsToMilliseconds(2)
 * //=> 2000
 */

function secondsToMilliseconds(seconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return seconds * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["d" /* millisecondsInSecond */];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/secondsToMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name secondsToMinutes
 * @category Conversion Helpers
 * @summary Convert seconds to minutes.
 *
 * @description
 * Convert a number of seconds to a full number of minutes.
 *
 * @param {number} seconds - number of seconds to be converted
 *
 * @returns {number} the number of seconds converted in minutes
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 120 seconds into minutes
 * const result = secondsToMinutes(120)
 * //=> 2
 *
 * @example
 * // It uses floor rounding:
 * const result = secondsToMinutes(119)
 * //=> 1
 */

function secondsToMinutes(seconds) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var minutes = seconds / __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["j" /* secondsInMinute */];
  return Math.floor(minutes);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/set/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name set
 * @category Common Helpers
 * @summary Set date values to a given date.
 *
 * @description
 * Set date values to a given date.
 *
 * Sets time values to date from object `values`.
 * A value is not set if it is undefined or null or doesn't exist in `values`.
 *
 * Note about bundle size: `set` does not internally use `setX` functions from date-fns but instead opts
 * to use native `Date#setX` methods. If you use this function, you may not want to include the
 * other `setX` functions that date-fns provides if you are concerned about the bundle size.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Object} values - an object with options
 * @param {Number} [values.year] - the number of years to be set
 * @param {Number} [values.month] - the number of months to be set
 * @param {Number} [values.date] - the number of days to be set
 * @param {Number} [values.hours] - the number of hours to be set
 * @param {Number} [values.minutes] - the number of minutes to be set
 * @param {Number} [values.seconds] - the number of seconds to be set
 * @param {Number} [values.milliseconds] - the number of milliseconds to be set
 * @returns {Date} the new date with options set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `values` must be an object
 *
 * @example
 * // Transform 1 September 2014 into 20 October 2015 in a single line:
 * var result = set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
 * //=> Tue Oct 20 2015 00:00:00
 *
 * @example
 * // Set 12 PM to 1 September 2014 01:23:45 to 1 September 2014 12:00:00:
 * var result = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 12 })
 * //=> Mon Sep 01 2014 12:23:45
 */
function set(dirtyDate, values) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);

  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  if (values.year != null) {
    date.setFullYear(values.year);
  }

  if (values.month != null) {
    date = Object(__WEBPACK_IMPORTED_MODULE_1__setMonth_index_js__["a" /* default */])(date, values.month);
  }

  if (values.date != null) {
    date.setDate(Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.date));
  }

  if (values.hours != null) {
    date.setHours(Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.hours));
  }

  if (values.minutes != null) {
    date.setMinutes(Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.minutes));
  }

  if (values.seconds != null) {
    date.setSeconds(Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.seconds));
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(values.milliseconds));
  }

  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setDate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setDate
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */

function setDate(dirtyDate, dirtyDayOfMonth) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfMonth = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDayOfMonth);
  date.setDate(dayOfMonth);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = date.getDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var delta = 7 - weekStartsOn;
  var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return Object(__WEBPACK_IMPORTED_MODULE_0__addDays_index_js__["a" /* default */])(date, diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setDayOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setDayOfYear
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */

function setDayOfYear(dirtyDate, dirtyDayOfYear) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var dayOfYear = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDayOfYear);
  date.setMonth(0);
  date.setDate(dayOfYear);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */

function setHours(dirtyDate, dirtyHours) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var hours = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyHours);
  date.setHours(hours);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setISODay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getISODay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISODay/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name setISODay
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * const result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */

function setISODay(dirtyDate, dirtyDay) {
  Object(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyDay);
  var currentDay = Object(__WEBPACK_IMPORTED_MODULE_3__getISODay_index_js__["a" /* default */])(date);
  var diff = day - currentDay;
  return Object(__WEBPACK_IMPORTED_MODULE_2__addDays_index_js__["a" /* default */])(date, diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name setISOWeek
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * const result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */

function setISOWeek(dirtyDate, dirtyISOWeek) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeek = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyISOWeek);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_2__getISOWeek_index_js__["a" /* default */])(date) - isoWeek;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name setISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `setISOYear` to `setISOWeekYear`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} isoWeekYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * const result = setISOWeekYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */

function setISOWeekYear(dirtyDate, dirtyISOWeekYear) {
  Object(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var isoWeekYear = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyISOWeekYear);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_3__differenceInCalendarDays_index_js__["a" /* default */])(date, Object(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(date));
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(isoWeekYear, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  date = Object(__WEBPACK_IMPORTED_MODULE_2__startOfISOWeekYear_index_js__["a" /* default */])(fourthOfJanuary);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setMilliseconds
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * const result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */

function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var milliseconds = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMilliseconds);
  date.setMilliseconds(milliseconds);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */

function setMinutes(dirtyDate, dirtyMinutes) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var minutes = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMinutes);
  date.setMinutes(minutes);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getDaysInMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getDaysInMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */

function setMonth(dirtyDate, dirtyMonth) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var month = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyMonth);
  var year = date.getFullYear();
  var day = date.getDate();
  var dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  var daysInMonth = Object(__WEBPACK_IMPORTED_MODULE_2__getDaysInMonth_index_js__["a" /* default */])(dateWithDesiredMonth); // Set the last day of the new month
  // if the original date was the last day of the longer month

  date.setMonth(month, Math.min(day, daysInMonth));
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setMonth_index_js__ = __webpack_require__("./node_modules/date-fns/esm/setMonth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name setQuarter
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * const result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */

function setQuarter(dirtyDate, dirtyQuarter) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var quarter = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyQuarter);
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
  var diff = quarter - oldQuarter;
  return Object(__WEBPACK_IMPORTED_MODULE_2__setMonth_index_js__["a" /* default */])(date, date.getMonth() + diff * 3);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setSeconds
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * const result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */

function setSeconds(dirtyDate, dirtySeconds) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var seconds = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtySeconds);
  date.setSeconds(seconds);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name setWeek
 * @category Week Helpers
 * @summary Set the local week to the given date.
 *
 * @description
 * Set the local week to the given date, saving the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} week - the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the 1st week to 2 January 2005 with default options:
 * var result = setWeek(new Date(2005, 0, 2), 1)
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // Set the 1st week to 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January:
 * var result = setWeek(new Date(2005, 0, 2), 1, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sun Jan 4 2004 00:00:00
 */
function setWeek(dirtyDate, dirtyWeek, options) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var week = Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyWeek);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__getWeek_index_js__["a" /* default */])(date, options) - week;
  date.setDate(date.getDate() - diff * 7);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/differenceInCalendarDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");






/**
 * @name setWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Set the local week-numbering year to the given date.
 *
 * @description
 * Set the local week-numbering year to the given date,
 * saving the week number and the weekday number.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} weekYear - the local week-numbering year of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the new date with the local week-numbering year set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010 with default options:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004)
 * //=> Sat Jan 03 2004 00:00:00
 *
 * @example
 * // Set the local week-numbering year 2004 to 2 January 2010,
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * var result = setWeekYear(new Date(2010, 0, 2), 2004, {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Sat Jan 01 2005 00:00:00
 */
function setWeekYear(dirtyDate, dirtyWeekYear) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  Object(__WEBPACK_IMPORTED_MODULE_4__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var date = Object(__WEBPACK_IMPORTED_MODULE_2__toDate_index_js__["a" /* default */])(dirtyDate);
  var weekYear = Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(dirtyWeekYear);
  var diff = Object(__WEBPACK_IMPORTED_MODULE_0__differenceInCalendarDays_index_js__["a" /* default */])(date, Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(date, options));
  var firstWeek = new Date(0);
  firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeekYear_index_js__["a" /* default */])(firstWeek, options);
  date.setDate(date.getDate() + diff);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/setYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */

function setYear(dirtyDate, dirtyYear) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyYear); // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date

  if (isNaN(date.getTime())) {
    return new Date(NaN);
  }

  date.setFullYear(year);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfDay;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDecade/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDecade
 * @category Decade Helpers
 * @summary Return the start of a decade for the given date.
 *
 * @description
 * Return the start of a decade for the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a decade
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a decade for 21 October 2015 00:00:00:
 * const result = startOfDecade(new Date(2015, 9, 21, 00, 00, 00))
 * //=> Jan 01 2010 00:00:00
 */

function startOfDecade(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var year = date.getFullYear();
  var decade = Math.floor(year / 10) * 10;
  date.setFullYear(decade, 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfHour/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfHour;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfHour
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an hour
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * const result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */

function startOfHour(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMinutes(0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfISOWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfISOWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfISOWeek(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Object(__WEBPACK_IMPORTED_MODULE_0__startOfWeek_index_js__["a" /* default */])(dirtyDate, {
    weekStartsOn: 1
  });
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfISOWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfISOWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getISOWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfISOWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of an ISO week-numbering year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */

function startOfISOWeekYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getISOWeekYear_index_js__["a" /* default */])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfISOWeek_index_js__["a" /* default */])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfMinute/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfMinute;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a minute
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */

function startOfMinute(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setSeconds(0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfMonth/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfMonth;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfMonth(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfQuarter/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfQuarter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */

function startOfQuarter(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var currentMonth = date.getMonth();
  var month = currentMonth - currentMonth % 3;
  date.setMonth(month, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfSecond/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfSecond;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfSecond
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a second
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * const result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */

function startOfSecond(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  date.setMilliseconds(0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__startOfDay_index_js__["a" /* default */])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfTomorrow/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @description
 * Return the start of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfWeek;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(__WEBPACK_IMPORTED_MODULE_1__lib_toInteger_index_js__["a" /* default */])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeekYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfWeekYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWeekYear_index_js__ = __webpack_require__("./node_modules/date-fns/esm/getWeekYear/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__ = __webpack_require__("./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");





/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @returns {Date} the start of a week-numbering year
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(dirtyDate, dirtyOptions) {
  Object(__WEBPACK_IMPORTED_MODULE_3__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(options.firstWeekContainsDate);
  var year = Object(__WEBPACK_IMPORTED_MODULE_0__getWeekYear_index_js__["a" /* default */])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  var date = Object(__WEBPACK_IMPORTED_MODULE_1__startOfWeek_index_js__["a" /* default */])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfYear/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startOfYear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toDate_index_js__ = __webpack_require__("./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */

function startOfYear(dirtyDate) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var cleanDate = Object(__WEBPACK_IMPORTED_MODULE_0__toDate_index_js__["a" /* default */])(dirtyDate);
  var date = new Date(0);
  date.setFullYear(cleanDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfYesterday/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();
  var day = now.getDate();
  var date = new Date(0);
  date.setFullYear(year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/sub/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sub;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__subDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/subMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");




/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */

function sub(date, duration) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.years) : 0;
  var months = duration.months ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.months) : 0;
  var weeks = duration.weeks ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.weeks) : 0;
  var days = duration.days ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.days) : 0;
  var hours = duration.hours ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.hours) : 0;
  var minutes = duration.minutes ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.minutes) : 0;
  var seconds = duration.seconds ? Object(__WEBPACK_IMPORTED_MODULE_3__lib_toInteger_index_js__["a" /* default */])(duration.seconds) : 0; // Subtract years and months

  var dateWithoutMonths = Object(__WEBPACK_IMPORTED_MODULE_1__subMonths_index_js__["a" /* default */])(date, months + years * 12); // Subtract weeks and days

  var dateWithoutDays = Object(__WEBPACK_IMPORTED_MODULE_0__subDays_index_js__["a" /* default */])(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subBusinessDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addBusinessDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addBusinessDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subBusinessDays
 * @category Day Helpers
 * @summary Substract the specified number of business days (mon - fri) to the given date.
 *
 * @description
 * Substract the specified number of business days (mon - fri) to the given date, ignoring weekends.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of business days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the business days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Substract 10 business days from 1 September 2014:
 * const result = subBusinessDays(new Date(2014, 8, 1), 10)
 * //=> Mon Aug 18 2014 00:00:00 (skipped weekend days)
 */

function subBusinessDays(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_1__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_2__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_0__addBusinessDays_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subDays;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addDays_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */

function subDays(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addDays_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subHours/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addHours_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addHours/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subHours
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the hours subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * const result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */

function subHours(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addHours_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subISOWeekYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subISOWeekYears;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addISOWeekYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addISOWeekYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subISOWeekYears
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `subISOYears` to `subISOWeekYears`.
 *   "ISO week year" is short for [ISO week-numbering year](https://en.wikipedia.org/wiki/ISO_week_date).
 *   This change makes the name consistent with
 *   locale-dependent week-numbering year helpers, e.g., `setWeekYear`.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * const result = subISOWeekYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */

function subISOWeekYears(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addISOWeekYears_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subMilliseconds;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMilliseconds_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMinutes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMinutes_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMinutes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMinutes
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * const result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */

function subMinutes(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMinutes_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = subMonths;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */

function subMonths(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addMonths_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addQuarters_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addQuarters/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subQuarters
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the quarters subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * const result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */

function subQuarters(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addQuarters_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subSeconds/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addSeconds_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addSeconds/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subSeconds
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * const result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */

function subSeconds(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addSeconds_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subWeeks/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addWeeks/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subWeeks
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the weeks subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * const result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */

function subWeeks(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addWeeks_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subYears/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addYears_index_js__ = __webpack_require__("./node_modules/date-fns/esm/addYears/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subYears
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the years subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * const result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */

function subYears(dirtyDate, dirtyAmount) {
  Object(__WEBPACK_IMPORTED_MODULE_2__lib_requiredArgs_index_js__["a" /* default */])(2, arguments);
  var amount = Object(__WEBPACK_IMPORTED_MODULE_0__lib_toInteger_index_js__["a" /* default */])(dirtyAmount);
  return Object(__WEBPACK_IMPORTED_MODULE_1__addYears_index_js__["a" /* default */])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = toDate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/weeksToDays/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name weeksToDays
 * @category Conversion Helpers
 * @summary Convert weeks to days.
 *
 * @description
 * Convert a number of weeks to a full number of days.
 *
 * @param {number} weeks - number of weeks to be converted
 *
 * @returns {number} the number of weeks converted in days
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 weeks into days
 * const result = weeksToDays(2)
 * //=> 14
 */

function weeksToDays(weeks) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(weeks * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["a" /* daysInWeek */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/yearsToMonths/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name yearsToMonths
 * @category Conversion Helpers
 * @summary Convert years to months.
 *
 * @description
 * Convert a number of years to a full number of months.
 *
 * @param {number} years - number of years to be converted
 *
 * @returns {number} the number of years converted in months
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 years into months
 * const result = yearsToMonths(2)
 * //=> 24
 */

function yearsToMonths(years) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(years * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["g" /* monthsInYear */]);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/yearsToQuarters/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__ = __webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_index_js__ = __webpack_require__("./node_modules/date-fns/esm/constants/index.js");


/**
 * @name yearsToQuarters
 * @category Conversion Helpers
 * @summary Convert years to quarters.
 *
 * @description
 * Convert a number of years to a full number of quarters.
 *
 * @param {number} years - number of years to be converted
 *
 * @returns {number} the number of years converted in quarters
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Convert 2 years to quarters
 * const result = yearsToQuarters(2)
 * //=> 8
 */

function yearsToQuarters(years) {
  Object(__WEBPACK_IMPORTED_MODULE_0__lib_requiredArgs_index_js__["a" /* default */])(1, arguments);
  return Math.floor(years * __WEBPACK_IMPORTED_MODULE_1__constants_index_js__["h" /* quartersInYear */]);
}

/***/ }),

/***/ "./node_modules/hogan.js/lib/compiler.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g,
      rLineSep = /\u2028/,
      rParagraphSep = /\u2029/;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[delimiters.length - 1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r')
            .replace(rLineSep, '\\u2028')
            .replace(rParagraphSep, '\\u2029');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;
    context.partials[sym] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function(nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda, options.delimiters, !!options.modelGet].join('||');
  }

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      var partials = template.partials;
      for (var name in partials) {
        delete partials[name].instance;
      }
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  }
})( true ? exports : Hogan);


/***/ }),

/***/ "./node_modules/hogan.js/lib/hogan.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

// This file is for use with Node.js. See dist/ for browser files.

var Hogan = __webpack_require__("./node_modules/hogan.js/lib/compiler.js");
Hogan.Template = __webpack_require__("./node_modules/hogan.js/lib/template.js").Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;


/***/ }),

/***/ "./node_modules/hogan.js/lib/template.js":
/***/ (function(module, exports, __webpack_require__) {

/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

var Hogan = {};

(function (Hogan) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options || {};
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.buf = '';
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        // Make sure we consider parent template now
        if (!partials.stackText) partials.stackText = {};
        for (key in partial.subs) {
          if (!partials.stackText[key]) {
            partials.stackText[key] = (this.activeSub !== undefined && partials.stackText[this.activeSub]) ? partials.stackText[this.activeSub] : this.text;
          }
        }
        template = createSpecializedPartial(template, partial.subs, partial.partials,
          this.stackSubs, this.stackPartials, partials.stackText);
      }
      this.partials[symbol].instance = template;

      return template;
    },

    // tries to find a partial in the current scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var found,
          names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          doModelGet = this.options.modelGet,
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
        for (var i = 1; i < names.length; i++) {
          found = findInScope(names[i], val, doModelGet);
          if (found !== undefined) {
            cx = val;
            val = found;
          } else {
            val = '';
          }
        }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false,
          doModelGet = this.options.modelGet;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        val = findInScope(key, v, doModelGet);
        if (val !== undefined) {
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: function(s) { this.buf += s; },

    fl: function() { var r = this.buf; this.buf = ''; return r; },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  //Find a key in an object
  function findInScope(key, scope, doModelGet) {
    var val;

    if (scope && typeof scope == 'object') {

      if (scope[key] !== undefined) {
        val = scope[key];

      // try lookup with get for backbone or similar model data
      } else if (doModelGet && scope.get && typeof scope.get == 'function') {
        val = scope.get(key);
      }
    }

    return val;
  }

  function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.buf = '';

    stackSubs = stackSubs || {};
    partial.stackSubs = stackSubs;
    partial.subsText = stackText;
    for (key in subs) {
      if (!stackSubs[key]) stackSubs[key] = subs[key];
    }
    for (key in stackSubs) {
      partial.subs[key] = stackSubs[key];
    }

    stackPartials = stackPartials || {};
    partial.stackPartials = stackPartials;
    for (key in partials) {
      if (!stackPartials[key]) stackPartials[key] = partials[key];
    }
    for (key in stackPartials) {
      partial.partials[key] = stackPartials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos = /\'/g,
      rQuot = /\"/g,
      hChars = /[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp, '&amp;')
        .replace(rLt, '&lt;')
        .replace(rGt, '&gt;')
        .replace(rApos, '&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})( true ? exports : Hogan);


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./resources/assets/js/mi-perfil/bottom-socket.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"pw-zocalo\" class=\"open ");t.b(t.v(t.f("add_class",c,p,0)));t.b("\"><div class=\"pw-zocalo-top\"><div class=\"pw-zocalo-container\"><figure><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil.com\" style=\"width:120px;height:auto\"></figure><div id=\"pw-zocalo-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></div></div><div class=\"pw-zocalo-container\"><div class=\"pw-zocalo-bloque-a\"><p class=\"pw-zocalo-texto\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-zocalo-texto\">Necesitás confiar.<br>Te queremos ahí.</p></div><div class=\"pw-zocalo-bloque-b\"><h6 style=\"cursor: pointer;\" class=\"pw-zocalo-btn-call-to-action\">");t.b(t.v(t.f("message",c,p,0)));t.b("</h6><p class=\"pw-zocalo-bajada\">Para entrar al universo digital de <span>Perfil</span><br>y acceder a más Periodismo Puro en tiempo real.</p></div><div class=\"pw-zocalo-acciones\"><button class=\"pw-boton-suscripcion pw-zocalo-btn-call-to-action\">");t.b(t.v(t.f("button_title",c,p,0)));t.b("</button><p class=\"mensaje\">En la verdad&nbsp;<br>no hay grieta.</p><p class=\"mensaje\">El único compromiso&nbsp;<br>es con vos.</p></div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"pw-zocalo\" class=\"open {{add_class}}\"><div class=\"pw-zocalo-top\"><div class=\"pw-zocalo-container\"><figure><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil.com\" style=\"width:120px;height:auto\"></figure><div id=\"pw-zocalo-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></div></div><div class=\"pw-zocalo-container\"><div class=\"pw-zocalo-bloque-a\"><p class=\"pw-zocalo-texto\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-zocalo-texto\">Necesitás confiar.<br>Te queremos ahí.</p></div><div class=\"pw-zocalo-bloque-b\"><h6 style=\"cursor: pointer;\" class=\"pw-zocalo-btn-call-to-action\">{{message}}</h6><p class=\"pw-zocalo-bajada\">Para entrar al universo digital de <span>Perfil</span><br>y acceder a más Periodismo Puro en tiempo real.</p></div><div class=\"pw-zocalo-acciones\"><button class=\"pw-boton-suscripcion pw-zocalo-btn-call-to-action\">{{button_title}}</button><p class=\"mensaje\">En la verdad&nbsp;<br>no hay grieta.</p><p class=\"mensaje\">El único compromiso&nbsp;<br>es con vos.</p></div></div></div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./resources/assets/js/mi-perfil/login-menu.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("user_logged",c,p,1),c,p,0,16,782,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <div class=\"pw-logged\"><img src=\"");t.b(t.v(t.d("user.avatar",c,p,0)));t.b("\" class=\"pw-logged-avatar\" alt=\"");t.b(t.v(t.d("user.first_name",c,p,0)));t.b(" ");t.b(t.v(t.d("user.last_name",c,p,0)));t.b("\" style=\"width: 22px; height: 22px;\"> ");t.b(t.v(t.d("user.first_name",c,p,0)));t.b(" ");t.b(t.v(t.d("user.last_name",c,p,0)));t.b(" <div class=\"pw-logged-info\"><ul> ");if(t.s(t.f("unsubscribed",c,p,1),c,p,0,262,373,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <li class=\"suscribite-logged\"><strong><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("\" rel=\"noreferrer\">Suscribite</a></strong></li> ");});c.pop();}t.b(" <li><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/perfil\" rel=\"noreferrer\">Mi Perfil</a></li> ");if(!t.s(t.f("unsubscribed",c,p,1),c,p,1,0,0,"")){t.b(" <li><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("mi-suscripcion\" rel=\"noreferrer\">Mi suscripción</a></li> ");};t.b(" <li><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/logout\">Cerrar sesión</a></li></ul></div></div> ");if(t.s(t.f("unsubscribed",c,p,1),c,p,0,683,764,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(" <a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("\" class=\"pw-suscribite\" rel=\"noreferrer\">Suscribite</a> ");});c.pop();}t.b(" ");});c.pop();}t.b(" ");if(!t.s(t.f("user_logged",c,p,1),c,p,1,0,0,"")){t.b(" <a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/login/?continue=");t.b(t.v(t.f("current_url",c,p,0)));t.b("\" class=\"pw-ingresar\" rel=\"noreferrer\">Ingresar</a> <a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("\" class=\"pw-suscribite\" rel=\"noreferrer\">Suscribite</a> ");};return t.fl(); },partials: {}, subs: {  }}, "{{#user_logged}} <div class=\"pw-logged\"><img src=\"{{user.avatar}}\" class=\"pw-logged-avatar\" alt=\"{{user.first_name}} {{user.last_name}}\" style=\"width: 22px; height: 22px;\"> {{user.first_name}} {{user.last_name}} <div class=\"pw-logged-info\"><ul> {{#unsubscribed}} <li class=\"suscribite-logged\"><strong><a href=\"{{paywall_url}}\" rel=\"noreferrer\">Suscribite</a></strong></li> {{/unsubscribed}} <li><a href=\"{{paywall_url}}id/perfil\" rel=\"noreferrer\">Mi Perfil</a></li> {{^unsubscribed}} <li><a href=\"{{paywall_url}}mi-suscripcion\" rel=\"noreferrer\">Mi suscripción</a></li> {{/unsubscribed}} <li><a href=\"{{paywall_url}}id/logout\">Cerrar sesión</a></li></ul></div></div> {{#unsubscribed}} <a href=\"{{paywall_url}}\" class=\"pw-suscribite\" rel=\"noreferrer\">Suscribite</a> {{/unsubscribed}} {{/user_logged}} {{^user_logged}} <a href=\"{{paywall_url}}id/login/?continue={{current_url}}\" class=\"pw-ingresar\" rel=\"noreferrer\">Ingresar</a> <a href=\"{{paywall_url}}\" class=\"pw-suscribite\" rel=\"noreferrer\">Suscribite</a> {{/user_logged}}", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./resources/assets/js/mi-perfil/metered-modal.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"pw-modal\" class=\"pw-color-invertido\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-a\">Información creíble en un momento para creer</p><p class=\"pw-modal-mensaje-b\">Llegaste a tu límite de notas del mes.</p><p class=\"pw-modal-mensaje-c\"><a href=\"#\" class=\"pw-paywall-metered-modal-btn-call-to-action\">Hacete socio de Perfil</a></p><p class=\"pw-modal-mensaje-d\">Y accedé al Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\" style=\"margin-bottom: 10px;\"><button type=\"button\" class=\"pw-boton-suscripcion pw-paywall-metered-modal-btn-call-to-action\" style=\"margin-bottom: 10px;\">Suscribirme</button><br><span>desde $399 por mes</span></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-e\">En la verdad no hay grieta: el único compromiso es con vos.</p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"pw-modal\" class=\"pw-color-invertido\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-a\">Información creíble en un momento para creer</p><p class=\"pw-modal-mensaje-b\">Llegaste a tu límite de notas del mes.</p><p class=\"pw-modal-mensaje-c\"><a href=\"#\" class=\"pw-paywall-metered-modal-btn-call-to-action\">Hacete socio de Perfil</a></p><p class=\"pw-modal-mensaje-d\">Y accedé al Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\" style=\"margin-bottom: 10px;\"><button type=\"button\" class=\"pw-boton-suscripcion pw-paywall-metered-modal-btn-call-to-action\" style=\"margin-bottom: 10px;\">Suscribirme</button><br><span>desde $399 por mes</span></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-e\">En la verdad no hay grieta: el único compromiso es con vos.</p></div></div></div></div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./resources/assets/js/mi-perfil/mi-perfil.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie__ = __webpack_require__("./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_js_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_js_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("./node_modules/date-fns/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_menu_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/login-menu.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_menu_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__login_menu_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signwall_modal_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/signwall-modal.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signwall_modal_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__signwall_modal_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_socket_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/bottom-socket.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bottom_socket_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__bottom_socket_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metered_modal_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/metered-modal.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__metered_modal_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__metered_modal_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__premium_modal_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/premium-modal.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__premium_modal_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__premium_modal_mustache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middle_invitation_mustache__ = __webpack_require__("./resources/assets/js/mi-perfil/middle-invitation.mustache");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middle_invitation_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__middle_invitation_mustache__);









window.paywallConfig.paywallUrl = 'https://mi.perfil.com/';
window.paywallConfig.cookieDomain = '.perfil.com';
window.paywallConfig.debug = false;
window.paywallConfig.allowedContentTypes = ['articulo'];

window.pw_show_premium_modal = function () {
	var current_url = window.location.href;
	var _container = document.getElementById('pw-content');

	_container.innerHTML = __WEBPACK_IMPORTED_MODULE_6__premium_modal_mustache___default()({
		paywall_url: paywallConfig.paywallUrl,
		current_url: current_url,
		logged: paywall.auth.isLogged()
	});

	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'paywall-premium',
		'ecommerce': {
			'promoView': {
				'promotions': [{
					'id': 'paywall-premium-modal-default',
					'name': 'modal premium paywall default',
					'creative': 'default',
					'position': 'automatico'
				}]
			}
		}
	});

	var buttons = document.getElementsByClassName('pw-paywall-premium-modal-btn-call-to-action');

	Array.from(buttons).forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();

			dataLayer.push({
				'event': 'wallModal',
				'eventCategory': 'paywall',
				'eventAction': 'modal-click',
				'eventLabel': 'paywall-premium',
				'ecommerce': {
					'promoClick': {
						'promotions': [{
							'id': 'paywall-premium-modal-default',
							'name': 'modal premium paywall default',
							'creative': 'default',
							'position': 'automatico'
						}]
					}
				}
			});

			location.href = window.paywallConfig.paywallUrl + '?continue=' + current_url + '&limit=true&msg=exclusivo';
		});
	});
};

window.pw_show_metered_modal = function () {
	var _container = document.getElementById('pw-content');

	_container.innerHTML = __WEBPACK_IMPORTED_MODULE_5__metered_modal_mustache___default()();

	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'paywall-metered',
		'ecommerce': {
			'promoView': {
				'promotions': [{
					'id': 'paywall-metered-modal-default',
					'name': 'modal metered paywall default',
					'creative': 'default',
					'position': 'automatico'
				}]
			}
		}
	});

	var buttons = document.getElementsByClassName('pw-paywall-metered-modal-btn-call-to-action');

	Array.from(buttons).forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();

			dataLayer.push({
				'event': 'wallModal',
				'eventCategory': 'paywall',
				'eventAction': 'modal-click',
				'eventLabel': 'paywall-metered',
				'ecommerce': {
					'promoClick': {
						'promotions': [{
							'id': 'paywall-metered-modal-default',
							'name': 'modal metered paywall default',
							'creative': 'default',
							'position': 'automatico'
						}]
					}
				}
			});

			location.href = window.paywallConfig.paywallUrl + '?limit=true';
		});
	});
};

window.pw_render_bottom_socket = function () {
	var user = paywall.auth.user();

	if (!paywallConfig.enableSocket) return false;

	// Si el usuario tiene email de la empresa, no ejecuto esta acción
	if (paywall.auth.isLogged() && user.email.indexOf('@perfil.com') > -1) return 0;

	if (!paywall.auth.isLogged() || !user.subscribed) {
		var last_display = __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('pw_bottom_socket_last_display', { domain: window.paywallConfig.cookieDomain });
		var show = false;

		if (last_display !== undefined) {
			var periodicity = !paywall.auth.isLogged() ? paywallConfig.socketHoursPeriodicity || 3 : paywallConfig.socketHoursPeriodicitySubs || 24;
			var border_date = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["a" /* add */])(Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["e" /* parseISO */])(last_display), {
				hours: periodicity
			});

			if (!Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["b" /* compareAsc */])(border_date, new Date())) show = true;
		} else show = true;

		if (show) setTimeout(pw_show_bottom_socket, 45000);
	}
};

window.pw_show_bottom_socket = function () {
	var current_url = window.location.href;
	var _container = document.getElementById('pw-content');

	_container.innerHTML += __WEBPACK_IMPORTED_MODULE_4__bottom_socket_mustache___default()({
		logged: paywall.auth.isLogged(),
		message: paywall.auth.isLogged() ? 'Suscribite' : 'Registrate Gratis',
		button_title: paywall.auth.isLogged() ? 'Suscribirme' : 'Registrarme',
		add_class: paywall.auth.isLogged() ? 'pw-color-invertido' : ''
	});

	var buttons = document.getElementsByClassName('pw-zocalo-btn-call-to-action');

	Array.from(buttons).forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();
			var target = '';

			if (paywall.auth.isLogged()) {
				dataLayer.push({
					'event': 'wallBanner',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'paywall',
					'ecommerce': {
						'promoClick': {
							'promotions': [{
								'id': 'bottom-banner',
								'name': 'bottom banner',
								'creative': 'default',
								'position': 'automatico'
							}]
						}
					}
				});
				target = window.paywallConfig.paywallUrl + '?continue=' + current_url;
			} else {
				dataLayer.push({
					'event': 'wallBanner',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'signwall',
					'ecommerce': {
						'promoClick': {
							'promotions': [{
								'id': 'bottom-banner',
								'name': 'bottom banner',
								'creative': 'default',
								'position': 'automatico'
							}]
						}
					}
				});
				target = window.paywallConfig.paywallUrl + 'id/register?continue=' + current_url;
			}

			__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('pw_bottom_socket_last_display_n', Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["d" /* formatISO */])(new Date()), { domain: window.paywallConfig.cookieDomain });
			location.href = target;
		});
	});

	document.getElementById('pw-zocalo-close').addEventListener('click', function (e) {
		e.preventDefault();

		var _socket = document.getElementById('pw-zocalo');
		_socket.classList.remove('open');
		_socket.classList.add('closed');
		__WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.set('pw_bottom_socket_last_display', Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["d" /* formatISO */])(new Date()), { domain: window.paywallConfig.cookieDomain });
	});
};

window.pw_render_login_menu = function () {
	var currentUrl = window.location.href;
	var container = document.getElementById('paywall-login-container');

	container.innerHTML = __WEBPACK_IMPORTED_MODULE_2__login_menu_mustache___default()({
		user_logged: paywall.auth.isLogged(),
		paywall_url: paywallConfig.paywallUrl,
		current_url: currentUrl,
		user: paywall.auth.isLogged() ? paywall.auth.user() : '',
		unsubscribed: paywall.auth.isLogged() ? !paywall.auth.user().subscribed : true
	});
};

window.pw_show_signwall_modal = function () {
	var current_url = window.location.href;
	var _container = document.getElementById('pw-content');

	_container.innerHTML = __WEBPACK_IMPORTED_MODULE_3__signwall_modal_mustache___default()({
		paywall_url: paywallConfig.paywallUrl,
		current_url: current_url
	});

	// Analytics
	dataLayer.push({
		'event': 'wallModal',
		'eventCategory': 'paywall',
		'eventAction': 'modal-impresion',
		'eventLabel': 'signwall',
		'ecommerce': {
			'promoView': {
				'promotions': [{
					'id': 'sign-modal-default',
					'name': 'modal signwall default',
					'creative': 'default',
					'position': 'automatico'
				}]
			}
		}
	});

	document.getElementById('pw-btn-register').addEventListener('click', function (e) {
		e.preventDefault();

		dataLayer.push({
			'event': 'wallModal',
			'eventCategory': 'paywall',
			'eventAction': 'modal-click',
			'eventLabel': 'signwall',
			'ecommerce': {
				'promoClick': {
					'promotions': [{
						'id': 'sign-modal-default',
						'name': 'modal signwall default',
						'creative': 'default',
						'position': 'automatico'
					}]
				}
			}
		});

		location.href = window.paywallConfig.paywallUrl + 'id/register?continue=' + current_url;
	});
};

window.pw_show_middle_body_invitation = function () {
	var current_url = window.location.href;
	var tmpl_message = document.getElementById('tmpl-middle-body-invitation').innerHTML;
	var _container = $('#bodytext');

	var html = __WEBPACK_IMPORTED_MODULE_7__middle_invitation_mustache___default()({
		paywall_url: paywallConfig.paywallUrl,
		current_url: current_url,
		logged: paywall.auth.isLogged(),
		button_title: paywall.auth.isLogged() ? 'Suscribite' : 'Registrate'
	});

	$(rendered).insertBefore(_container);

	var buttons = document.getElementsByClassName('pw-middle-invitation-call-to-action');

	Array.from(buttons).forEach(function (el) {
		el.addEventListener('click', function (e) {
			e.preventDefault();

			if (paywall.auth.isLogged()) {
				dataLayer.push({
					'event': 'wallModal',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'middle-body-subscription-invitation',
					'ecommerce': {
						'promoClick': {
							'promotions': [{
								'id': 'middle-body-invitation',
								'name': 'middle body invitation',
								'creative': 'default',
								'position': 'automatico'
							}]
						}
					}
				});
				location.href = window.paywallConfig.paywallUrl + '?continue=' + current_url;
			} else {
				dataLayer.push({
					'event': 'wallModal',
					'eventCategory': 'paywall',
					'eventAction': 'banner-click',
					'eventLabel': 'middle-body-register-invitation',
					'ecommerce': {
						'promoClick': {
							'promotions': [{
								'id': 'middle-body-invitation',
								'name': 'middle body invitation',
								'creative': 'default',
								'position': 'automatico'
							}]
						}
					}
				});
				location.href = window.paywallConfig.paywallUrl + 'id/register?continue=' + current_url;
			}
		});
	});
};

window.pw_render_middle_invitation = function () {
	var user = paywall.auth.user();

	if ((!paywall.auth.isLogged() || !user.subscribed) && paywallConfig.type === 'metered') pw_show_middle_body_invitation();
};

window.send_fbq_pageView = function () {
	if (!fbq || !window.paywallConfig.facebook_pixel) return 0;
	var facebook_pixel = window.paywallConfig.facebook_pixel;

	var facebook_pixel_options = {};

	if (paywall.auth.isLogged()) {
		var user = paywall.auth.user();
		facebook_pixel_options = {
			em: user.email,
			fn: user.first_name,
			ln: user.last_name,
			ph: user.phone_number
		};
	}

	fbq('init', facebook_pixel, facebook_pixel_options);
	fbq('track', 'PageView');
};

window.send_fbq_viewContent = function () {
	if (!fbq || !window.paywallConfig.facebook_pixel || window.perfilContent.id === undefined) return 0;
	var _window$perfilContent = window.perfilContent,
	    id = _window$perfilContent.id,
	    title = _window$perfilContent.title,
	    paywall_type = _window$perfilContent.paywall_type,
	    canal = _window$perfilContent.canal,
	    author = _window$perfilContent.author,
	    body_length = _window$perfilContent.body_length,
	    date = _window$perfilContent.date;

	// User status

	var user_status = 'not registered';
	if (paywall.auth.isLogged()) {
		var user = paywall.auth.user();
		user_status = user.subscribed ? 'paid subscriber' : 'registered';
	}

	// Date
	var _date = Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["e" /* parseISO */])(date);

	// Session counts
	var paywall_meter = __WEBPACK_IMPORTED_MODULE_0_js_cookie___default.a.get('paywall_meter');
	var session_count_views = paywall_meter ? parseInt(paywall_meter) : 0;

	var options = {
		content_ids: [id],
		content_type: 'product',
		content_name: title,
		content_paywall: paywall_type,
		content_category: canal,
		user_status: user_status,
		session_count_views: session_count_views,
		date: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["c" /* format */])(_date, 'yyyy-mm-dd'),
		hour: Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["c" /* format */])(_date, 'HH:mm:ss'),
		author: author.fullname,
		format: 'article',
		length: body_length
	};

	fbq('track', 'ViewContent', options);
};

paywall.queue.push(['addEventListener', 'checked', function () {
	// Wyleex ID
	paywall.id.init();

	pw_render_login_menu();

	if (typeof fbq !== 'undefined') {
		send_fbq_pageView();
		send_fbq_viewContent();
	}

	pw_render_bottom_socket();

	//pw_render_middle_invitation()
}]);

paywall.queue.push(['addEventListener', 'loginwall', function () {
	pw_show_signwall_modal();
}]);

paywall.queue.push(['addEventListener', 'paywall', function () {
	if (paywallConfig.type === 'premium') pw_show_premium_modal();else if (window.perfilContent !== undefined && window.perfilContent.show_metered_paywall) pw_show_metered_modal();
}]);(function (d, s, e, t) {
	e = d.createElement(s);
	e.type = 'text/java' + s;
	e.defer = true;
	e.src = "https://libs.lavoz.com.ar/paywall/perfil/pw.js";
	t = d.getElementsByTagName(s)[0];
	t.parentNode.insertBefore(e, t);
})(document, 'script');

/***/ }),

/***/ "./resources/assets/js/mi-perfil/middle-invitation.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"pw-pienota\"><div class=\"pw-piedenota-row-noframe\"><div class=\"p pw-piedenota-mensaje-a\">Te hace falta saber.<br>Nos apasiona informar.</div><div class=\"p pw-piedenota-mensaje-a\">Necesitás confiar.<br>Te queremos ahí.</div></div><div class=\"pw-piedenota-row\"><div class=\"pw-piedenota-aside\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/logo_perfil.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-piedenota-content\"><a href=\"javascript:void(0);\" class=\"p pw-piedenota-mensaje-b pw-middle-invitation-call-to-action\">Hacete socio de Perfil</a><div class=\"p pw-piedenota-mensaje-c\">Periodismo Puro en tiempo real.</div></div></div><div class=\"pw-piedenota-row-noframe bg-gris\"><button class=\"pw-boton-suscripcion pw-middle-invitation-call-to-action\">");t.b(t.v(t.f("button_title",c,p,0)));t.b("</button> ");if(!t.s(t.f("logged",c,p,1),c,p,1,0,0,"")){t.b(" <div class=\"p pw-piedenota-enlaces\"><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/login/?continue=");t.b(t.v(t.f("current_url",c,p,0)));t.b("\">Ya tengo cuenta</a></div> ");};t.b(" </div><div class=\"pw-piedenota-row-noframe\"><div class=\"p pw-piedenota-mensaje-d\">En la verdad no hay grieta: el único compromiso es con vos</div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"pw-pienota\"><div class=\"pw-piedenota-row-noframe\"><div class=\"p pw-piedenota-mensaje-a\">Te hace falta saber.<br>Nos apasiona informar.</div><div class=\"p pw-piedenota-mensaje-a\">Necesitás confiar.<br>Te queremos ahí.</div></div><div class=\"pw-piedenota-row\"><div class=\"pw-piedenota-aside\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/logo_perfil.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-piedenota-content\"><a href=\"javascript:void(0);\" class=\"p pw-piedenota-mensaje-b pw-middle-invitation-call-to-action\">Hacete socio de Perfil</a><div class=\"p pw-piedenota-mensaje-c\">Periodismo Puro en tiempo real.</div></div></div><div class=\"pw-piedenota-row-noframe bg-gris\"><button class=\"pw-boton-suscripcion pw-middle-invitation-call-to-action\">{{button_title}}</button> {{^logged}} <div class=\"p pw-piedenota-enlaces\"><a href=\"{{paywall_url}}id/login/?continue={{current_url}}\">Ya tengo cuenta</a></div> {{/logged}} </div><div class=\"pw-piedenota-row-noframe\"><div class=\"p pw-piedenota-mensaje-d\">En la verdad no hay grieta: el único compromiso es con vos</div></div></div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./resources/assets/js/mi-perfil/premium-modal.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"pw-modal\" class=\"pw-color-invertido\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-f\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-modal-mensaje-f\">Necesitás confiar.<br>Te queremos ahí.</p><p class=\"pw-modal-mensaje-g\"><a href=\"#\" class=\"pw-paywall-premium-modal-btn-call-to-action\">Suscribite</a></p><p class=\"pw-modal-mensaje-d\">Para acceder a nuestro<br><span>Contenido Premium</span><br>y más Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\"><button class=\"pw-boton-suscripcion pw-paywall-premium-modal-btn-call-to-action\">Suscribirme</button><p class=\"pw-modal-enlaces\"> ");if(!t.s(t.f("logged",c,p,1),c,p,1,0,0,"")){t.b(" <a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/login/?continue=");t.b(t.v(t.f("current_url",c,p,0)));t.b("\">Ya tengo una cuenta</a> ");};t.b(" </p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"pw-modal\" class=\"pw-color-invertido\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-f\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-modal-mensaje-f\">Necesitás confiar.<br>Te queremos ahí.</p><p class=\"pw-modal-mensaje-g\"><a href=\"#\" class=\"pw-paywall-premium-modal-btn-call-to-action\">Suscribite</a></p><p class=\"pw-modal-mensaje-d\">Para acceder a nuestro<br><span>Contenido Premium</span><br>y más Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\"><button class=\"pw-boton-suscripcion pw-paywall-premium-modal-btn-call-to-action\">Suscribirme</button><p class=\"pw-modal-enlaces\"> {{^logged}} <a href=\"{{paywall_url}}id/login/?continue={{current_url}}\">Ya tengo una cuenta</a> {{/logged}} </p></div></div></div></div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./resources/assets/js/mi-perfil/signwall-modal.mustache":
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__("./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div id=\"pw-modal\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-f\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-modal-mensaje-f\">Necesitás confiar.<br>Te queremos ahí.</p><p class=\"pw-modal-mensaje-g\"><a href=\"https://mi.perfil.com/\">Registrate Gratis</a></p><p class=\"pw-modal-mensaje-d\">Accedé gratis a más Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\"><button type=\"button\" class=\"pw-boton-suscripcion\" id=\"pw-btn-register\">Registrarme</button><p class=\"pw-modal-enlaces\"><a href=\"");t.b(t.v(t.f("paywall_url",c,p,0)));t.b("id/login/?continue=");t.b(t.v(t.f("current_url",c,p,0)));t.b("\">Ya tengo una cuenta</a></p></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-e\">En la verdad no hay grieta: el único compromiso es con vos.</p></div></div></div></div>");return t.fl(); },partials: {}, subs: {  }}, "<div id=\"pw-modal\"><div class=\"pw-modal-box\"><div class=\"pw-modal-content\"><div class=\"pw-modal-top\"><a href=\"/\"><div id=\"pw-modal-close\"><div class=\"bar1\"></div><div class=\"bar2\"></div></div></a></div><div class=\"pw-perfil-logo\"><figure class=\"figure-perfil-logo\"><a href=\"/\"><img src=\"/images/perfil-blanco.svg\" alt=\"Perfil\"></a></figure></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-f\">Te hace falta saber.<br>Nos apasiona informar.</p><p class=\"pw-modal-mensaje-f\">Necesitás confiar.<br>Te queremos ahí.</p><p class=\"pw-modal-mensaje-g\"><a href=\"https://mi.perfil.com/\">Registrate Gratis</a></p><p class=\"pw-modal-mensaje-d\">Accedé gratis a más Periodismo Puro en tiempo real.</p></div><div class=\"pw-modal-row\"><button type=\"button\" class=\"pw-boton-suscripcion\" id=\"pw-btn-register\">Registrarme</button><p class=\"pw-modal-enlaces\"><a href=\"{{paywall_url}}id/login/?continue={{current_url}}\">Ya tengo una cuenta</a></p></div><div class=\"pw-modal-row\"><p class=\"pw-modal-mensaje-e\">En la verdad no hay grieta: el único compromiso es con vos.</p></div></div></div></div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/mi-perfil/mi-perfil.js");


/***/ })

/******/ });