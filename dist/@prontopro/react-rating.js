/*!
 * @prontopro/react-rating v0.1.5 - https://github.com/ProntoPro/react-rating
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactRating"] = factory(require("react"), require("prop-types"), require("styled-components"));
	else
		root["ReactRating"] = factory(root["React"], root["PropTypes"], root["StyledComponent"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ratingTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(4);


var options = {
  ANIMATE_ON_HOVER: false,
  DISABLE_ANIMATION: false,
  FRACTIONS: 1,
  INITIAL_RATE: 0,
  ON_CHANGE: __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* noop */],
  ON_CLICK: __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* noop */],
  ON_RATE: __WEBPACK_IMPORTED_MODULE_0__utils__["c" /* noop */],
  PRECISION: Math.pow(3, 100),
  READONLY: false,
  START: 0,
  STEP: 1,
  STOP: 5
};

var ratingTypes = {
  FIXED: 'currentRating',
  HOVER: 'currentRatingHover'
};

/* unused harmony default export */ var _unused_webpack_default_export = (undefined);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClientX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFractionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return validateParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(3);


var getClientX = function getClientX(event) {
  return event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX;
};

var getFractionValue = function getFractionValue(index, fractions) {
  var fraction = Math.ceil(index % 1 * fractions) / fractions;

  return Math.floor(index) + Math.floor(fraction * __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* options */].PRECISION) / __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* options */].PRECISION;
};

var noop = function noop() {};

var range = function range(length) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_, i) {
    return '' + i;
  };
  return Array.from({ length: length }, map);
};

var validateParams = function validateParams(_ref) {
  var start = _ref.start,
      step = _ref.step,
      stop = _ref.stop;

  if (!Number.isInteger(start)) {
    throw new Error('"start" must be an integer.');
  }

  if (start < 0) {
    throw new Error('"start" must be greater than zero.');
  }

  if (!Number.isInteger(step)) {
    throw new Error('"step" must be an integer.');
  }

  if (step < 0) {
    throw new Error('"step" must be greater than zero.');
  }

  if (!Number.isInteger(stop)) {
    throw new Error('"stop" must be an integer.');
  }

  if (stop <= 0) {
    throw new Error('"stop" must be greater than zero.');
  }

  if (start >= stop) {
    throw new Error('"start" must be lower than "stop".');
  }

  if (step > stop - start) {
    throw new Error('"step" must be lower than "(stop - start)".');
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (undefined);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Rating__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_Rating__["a" /* default */]);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Rate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_star_empty_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_star_empty_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_star_empty_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_star_full_png__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_star_full_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_star_full_png__);
var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }










var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(_templateObject, function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'pointer-events: none;' : null;
});

var Rating = (_temp = _class = function (_PureComponent) {
  _inherits(Rating, _PureComponent);

  function Rating(props) {
    var _this$state;

    _classCallCheck(this, Rating);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _initialiseProps.call(_this);

    var start = props.start,
        stop = props.stop;


    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["e" /* validateParams */])(props);

    _this.state = (_this$state = {}, _this$state[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].FIXED] = _this.getRating(props), _this$state.elements = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* range */])(stop - start, function (_, i) {
      return 'react-rating-' + i;
    }), _this$state);
    return _this;
  }

  Rating.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.propsAreChanged(nextProps)) {
      var _setState;

      this.setState((_setState = {}, _setState[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].FIXED] = this.getRating(nextProps), _setState));
    }
  };

  Rating.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        animateOnHover = _props.animateOnHover,
        disableAnimation = _props.disableAnimation,
        emptyRate = _props.emptyRate,
        fullRate = _props.fullRate,
        readonly = _props.readonly;
    var elements = this.state.elements;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Wrapper,
      { onMouseLeave: this.handleMouseLeave, readonly: readonly },
      elements.map(function (element, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Rate__["a" /* default */], {
          animateOnHover: animateOnHover,
          disableAnimation: disableAnimation,
          key: element,
          emptyRate: emptyRate,
          index: index,
          fixedPercentage: _this2.getPercentage(index, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].FIXED),
          fullRate: fullRate,
          hoverPercentage: _this2.getPercentage(index, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].HOVER),
          readonly: readonly,
          onClick: _this2.handleClick,
          onMouseMove: _this2.handleMouseMove,
          onTouchMove: _this2.handleMouseMove
        });
      })
    );
  };

  return Rating;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getFractionRoundedValue = function (event) {
    var x = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* getClientX */])(event) - event.currentTarget.getBoundingClientRect().left;

    return _this3.round(x / event.currentTarget.offsetWidth);
  };

  this.getPercentage = function (index, ratingType) {
    var currentRatingValue = _this3.state[ratingType];
    var currentRoundedRatingValue = Math.floor(currentRatingValue);

    if (index === currentRoundedRatingValue) {
      return currentRatingValue % 1 * 100;
    }

    return index - currentRoundedRatingValue < 0 ? 100 : 0;
  };

  this.getRating = function (_ref2) {
    var initialRate = _ref2.initialRate,
        start = _ref2.start,
        step = _ref2.step;
    return (initialRate - start) / step || 0;
  };

  this.handleClick = function (event, index) {
    var _props2 = _this3.props,
        onClick = _props2.onClick,
        onChange = _props2.onChange;
    var currentRating = _this3.state.currentRating;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    onClick(_this3.indexToRate(calculatedIndex), event);

    if (currentRating !== calculatedIndex) {
      var _this3$setState;

      onChange(_this3.indexToRate(calculatedIndex));

      _this3.setState((_this3$setState = {}, _this3$setState[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].FIXED] = calculatedIndex, _this3$setState[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].HOVER] = 0, _this3$setState));
    }
  };

  this.handleMouseLeave = function () {
    var _this3$setState2;

    _this3.setState((_this3$setState2 = {}, _this3$setState2[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].HOVER] = 0, _this3$setState2));
  };

  this.handleMouseMove = function (event, index) {
    var onRate = _this3.props.onRate;
    var currentRatingHover = _this3.state.currentRatingHover;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    if (currentRatingHover !== calculatedIndex) {
      var _this3$setState3;

      onRate(_this3.indexToRate(calculatedIndex));

      _this3.setState((_this3$setState3 = {}, _this3$setState3[__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* ratingTypes */].HOVER] = calculatedIndex, _this3$setState3));
    }
  };

  this.indexToRate = function (index) {
    var _props3 = _this3.props,
        start = _props3.start,
        step = _props3.step;


    return start + Math.floor(index) * step + step * _this3.round(index % 1);
  };

  this.propsAreChanged = function (_ref3) {
    var initialRate = _ref3.initialRate,
        start = _ref3.start,
        stop = _ref3.stop;
    return initialRate !== _this3.props.initialRate || start !== _this3.props.start || stop !== _this3.props.stop;
  };

  this.round = function (index) {
    var _props4 = _this3.props,
        fractions = _props4.fractions,
        stop = _props4.stop;

    var value = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getFractionValue */])(index, fractions);

    return value > stop ? stop : value;
  };
}, _temp);


Rating.defaultProps = {
  animateOnHover: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].ANIMATE_ON_HOVER,
  disableAnimation: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].DISABLE_ANIMATION,
  emptyRate: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '', className: 'emptyRate', src: __WEBPACK_IMPORTED_MODULE_6__assets_star_empty_png___default.a }),
  fractions: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].FRACTIONS,
  fullRate: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { alt: '', className: 'fullRate', src: __WEBPACK_IMPORTED_MODULE_7__assets_star_full_png___default.a }),
  initialRate: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].INITIAL_RATE,
  onChange: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].ON_CHANGE,
  onClick: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].ON_CLICK,
  onRate: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].ON_RATE,
  readonly: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].READONLY,
  start: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].START,
  step: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].STEP,
  stop: __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* options */].STOP
};

Rating.propTypes = {
  animateOnHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disableAnimation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  emptyRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  fractions: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  fullRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  initialRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  readonly: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  start: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  step: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  stop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

/* harmony default export */ __webpack_exports__["a"] = (Rating);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__View__ = __webpack_require__(9);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Rate = function (_PureComponent) {
  _inherits(Rate, _PureComponent);

  function Rate() {
    var _temp, _this, _ret;

    _classCallCheck(this, Rate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleMouseMove = function (event) {
      var _this$props = _this.props,
          animateOnHover = _this$props.animateOnHover,
          index = _this$props.index,
          onMouseMove = _this$props.onMouseMove;


      if (animateOnHover) {
        onMouseMove(event, index);
      }
    }, _this.handleClick = function (event) {
      return _this.props.onClick(event, _this.props.index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Rate.prototype.render = function render() {
    var _props = this.props,
        disableAnimation = _props.disableAnimation,
        emptyRate = _props.emptyRate,
        fixedPercentage = _props.fixedPercentage,
        fullRate = _props.fullRate,
        hoverPercentage = _props.hoverPercentage,
        readonly = _props.readonly;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__View__["a" /* default */], {
      disableAnimation: disableAnimation,
      emptyRate: emptyRate,
      fixedPercentage: fixedPercentage,
      fullRate: fullRate,
      hoverPercentage: hoverPercentage,
      onClick: this.handleClick,
      onMouseMove: this.handleMouseMove,
      onTouchMove: this.handleMouseMove,
      readonly: readonly
    });
  };

  return Rate;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Rate.defaultProps = {
  fixedPercentage: 0,
  hoverPercentage: 0
};

Rate.propTypes = {
  animateOnHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  disableAnimation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  emptyRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  index: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  fixedPercentage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  fullRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  hoverPercentage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onMouseMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  readonly: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (Rate);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  position: relative;\n  ', '\n'], ['\n  display: block;\n  position: relative;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n'], ['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }





var Item = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a(_templateObject, function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'pointer-events: none;' : 'cursor: pointer;';
});

var Icon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(_templateObject2, function (_ref2) {
  var disableAnimation = _ref2.disableAnimation;
  return !disableAnimation ? 'transition: width .1s ease-out;' : '';
}, function (_ref3) {
  var fixedPercentage = _ref3.fixedPercentage,
      hoverPercentage = _ref3.hoverPercentage;
  return (hoverPercentage > fixedPercentage ? hoverPercentage : fixedPercentage) + '%';
});

var View = function View(_ref4) {
  var disableAnimation = _ref4.disableAnimation,
      emptyRate = _ref4.emptyRate,
      fixedPercentage = _ref4.fixedPercentage,
      fullRate = _ref4.fullRate,
      hoverPercentage = _ref4.hoverPercentage,
      onClick = _ref4.onClick,
      onMouseMove = _ref4.onMouseMove,
      readonly = _ref4.readonly;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Item,
    {
      onClick: onClick,
      onMouseMove: onMouseMove,
      onTouchMove: onMouseMove,
      readonly: readonly
    },
    emptyRate,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Icon,
      {
        disableAnimation: disableAnimation,
        fixedPercentage: fixedPercentage,
        hoverPercentage: hoverPercentage
      },
      fullRate
    )
  );
};

View.propTypes = {
  disableAnimation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  emptyRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  fixedPercentage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  fullRate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  hoverPercentage: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  onMouseMove: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  readonly: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "star_empty.96dab275.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "star_full.b44c3526.png";

/***/ })
/******/ ])["default"];
});