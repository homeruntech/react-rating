(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("styled-components"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "styled-components"], factory);
	else if(typeof exports === 'object')
		exports["ReactRating"] = factory(require("react"), require("prop-types"), require("styled-components"));
	else
		root["ReactRating"] = factory(root["React"], root["PropTypes"], root["StyledComponents"]);
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
/******/ 	__webpack_require__.p = "/";
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ratingTypes = exports.options = undefined;

var _utils = __webpack_require__(4);

var options = exports.options = {
  ANIMATE_ON_HOVER: false,
  DISABLE_ANIMATION: false,
  FRACTIONS: 1,
  INITIAL_RATE: 0,
  ON_CHANGE: _utils.noop,
  ON_CLICK: _utils.noop,
  ON_RATE: _utils.noop,
  PRECISION: Math.pow(3, 100),
  READONLY: false,
  START: 0,
  STEP: 1,
  STOP: 5
};

var ratingTypes = exports.ratingTypes = {
  FIXED: 'currentRating',
  HOVER: 'currentRatingHover'
};

exports.default = undefined;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateParams = exports.range = exports.noop = exports.getFractionValue = exports.getClientX = undefined;

var _constants = __webpack_require__(3);

var getClientX = exports.getClientX = function getClientX(event) {
  return event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX;
};

var getFractionValue = exports.getFractionValue = function getFractionValue(index, fractions) {
  var fraction = Math.ceil(index % 1 * fractions) / fractions;

  return Math.floor(index) + Math.floor(fraction * _constants.options.PRECISION) / _constants.options.PRECISION;
};

var noop = exports.noop = function noop() {};

var range = exports.range = function range(length) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_, i) {
    return '' + i;
  };
  return Array.from({ length: length }, map);
};

var validateParams = exports.validateParams = function validateParams(_ref) {
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

exports.default = undefined;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Rating = __webpack_require__(6);

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Rating2.default;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Rate = __webpack_require__(7);

var _Rate2 = _interopRequireDefault(_Rate);

var _constants = __webpack_require__(3);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* babel-plugin-inline-import '../../assets/star_empty.png' */var starEmpty = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAb5JREFUOBG1ks9LG1EQx2c2shuFgiLoUS8VrSYoiD0I8UdVevHQogf/Bc/eAkaECILgn+FB8VIPgpIExYNCKUZFSaXosUJ7ETS74eXrzJqVrBgv4oO3b/bznfm+efuW6D1HKRMb0vnaHnWviYZovqJ/qZVn1RJKmd5B0dp1VuIXU2t2YNikQLykVYZMSpaJlxxYIbBgFfc229hwB3H5IxF3C/3qfLA7VHdvvYKwbWFnBOs3IihEE9+vmRfK/hHc3MYymfIfkFkUt0/EKFgU+cb9P0s6NVammp8juX6NmPsd6C7FbHxFdhh1GurH+fPRP2XPBw4Hmt27+x0py0RH8nOqPxnoy32uJ83gScfmMR7M3ygLBg7iLa6HXTB+1A+fJgMeugUVADotejQbJASrMtWqi1ULGShghm0Rn2usHxeA36Uy1ZRXj9ARVChmYhfMPCVX2E4op5URW0kmXInZRnT0pNNnlUfIAGfTtvv34k72/CWCI+08nhVIQ26TQX1Oa2cDd697gUnoRyr9v+ySxq8si1ftRH5NOpE6PQq2vL34DAwWH3PoODAIrdiPNQHTkRCsekF2uA7Z3sYq9PbwAaS2tg8DVwZvAAAAAElFTkSuQmCC';
/* babel-plugin-inline-import '../../assets/star_full.png' */var starFull = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAUVJREFUOBFjYKAl+L1P1x6E8dnBgk/yLwNDHVTeGZc6RlwSv/cZWP9h+HMEJM/CwGLD6nThKDa1TNgEQWJ/Gf/Ww+SQ2TAxGA12wf//ocw/Dt2UY/zLqMbA+E+VgYFR+///fxkwRSCakZFpBgPD/6sM/5lu/2f+f4vDTv0RI+Pqv2ADfuzX6f7/n6EEWQMhNiMjQw+H45VSsBdADKANvYQ0weRBakF6QHx4GHA4XioB8tpginDSQDVgtVAFGLHwfZ/uMqBfI7EbwLic0+lyFLIc3AUwQUbG/2wwNjqNTQ7DAIb/jDroGuF8LHIoBvy/7ckOVKwC0sDIyHiZkYnJD4yBbKghKlA1UC5SIIJEfr94oQH0/wMmZsZododgAw6HS5tBGMQGiYHkIGrg+lEZ/w/rCv7f74Azf/w/Y8z6f7+BAKouCnkAZSNfcraqTkMAAAAASUVORK5CYII=';


var Wrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'pointer-events: none;' : null;
});

var Rating = function (_PureComponent) {
  _inherits(Rating, _PureComponent);

  function Rating(props) {
    var _this$state;

    _classCallCheck(this, Rating);

    var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

    _initialiseProps.call(_this);

    var start = props.start,
        stop = props.stop;


    (0, _utils.validateParams)(props);

    _this.state = (_this$state = {}, _defineProperty(_this$state, _constants.ratingTypes.FIXED, _this.getRating()), _defineProperty(_this$state, 'elements', (0, _utils.range)(stop - start, function (_, i) {
      return 'react-rating-' + i;
    })), _this$state);
    return _this;
  }

  _createClass(Rating, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.propsAreChanged(nextProps)) {
        this.setState(_defineProperty({}, _constants.ratingTypes.FIXED, this.getRating()));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          animateOnHover = _props.animateOnHover,
          disableAnimation = _props.disableAnimation,
          emptyRate = _props.emptyRate,
          fullRate = _props.fullRate,
          readonly = _props.readonly;
      var elements = this.state.elements;


      return _react2.default.createElement(
        Wrapper,
        { onMouseLeave: this.handleMouseLeave, readonly: readonly },
        elements.map(function (element, index) {
          return _react2.default.createElement(_Rate2.default, {
            animateOnHover: animateOnHover,
            disableAnimation: disableAnimation,
            key: element,
            emptyRate: emptyRate,
            index: index,
            fixedPercentage: _this2.getPercentage(index, _constants.ratingTypes.FIXED),
            fullRate: fullRate,
            hoverPercentage: _this2.getPercentage(index, _constants.ratingTypes.HOVER),
            readonly: readonly,
            onClick: _this2.handleClick,
            onMouseMove: _this2.handleMouseMove,
            onTouchMove: _this2.handleMouseMove,
            onTouchEnd: _this2.handleClick
          });
        })
      );
    }
  }]);

  return Rating;
}(_react.PureComponent);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getFractionRoundedValue = function (event) {
    var x = (0, _utils.getClientX)(event) - event.currentTarget.getBoundingClientRect().left;

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

  this.getRating = function () {
    var _props2 = _this3.props,
        initialRate = _props2.initialRate,
        start = _props2.start,
        step = _props2.step;


    return (initialRate - start) / step || 0;
  };

  this.handleClick = function (event, index) {
    var _props3 = _this3.props,
        onClick = _props3.onClick,
        onChange = _props3.onChange;
    var currentRating = _this3.state.currentRating;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    onClick(_this3.indexToRate(calculatedIndex), event);

    if (currentRating !== calculatedIndex) {
      var _this3$setState;

      onChange(_this3.indexToRate(calculatedIndex));

      _this3.setState((_this3$setState = {}, _defineProperty(_this3$setState, _constants.ratingTypes.FIXED, calculatedIndex), _defineProperty(_this3$setState, _constants.ratingTypes.HOVER, 0), _this3$setState));
    }
  };

  this.handleMouseLeave = function () {
    _this3.setState(_defineProperty({}, _constants.ratingTypes.HOVER, 0));
  };

  this.handleMouseMove = function (event, index) {
    var onRate = _this3.props.onRate;
    var currentRatingHover = _this3.state.currentRatingHover;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    if (currentRatingHover !== calculatedIndex) {
      onRate(_this3.indexToRate(calculatedIndex));

      _this3.setState(_defineProperty({}, _constants.ratingTypes.HOVER, calculatedIndex));
    }
  };

  this.indexToRate = function (index) {
    var _props4 = _this3.props,
        start = _props4.start,
        step = _props4.step;


    return start + Math.floor(index) * step + step * _this3.round(index % 1);
  };

  this.propsAreChanged = function (_ref2) {
    var initialRate = _ref2.initialRate,
        start = _ref2.start,
        stop = _ref2.stop;
    return initialRate !== _this3.props.initialRate || start !== _this3.props.start || stop !== _this3.props.stop;
  };

  this.round = function (index) {
    var _props5 = _this3.props,
        fractions = _props5.fractions,
        stop = _props5.stop;

    var value = (0, _utils.getFractionValue)(index, fractions);

    return value > stop ? stop : value;
  };
};

Rating.defaultProps = {
  animateOnHover: _constants.options.ANIMATE_ON_HOVER,
  disableAnimation: _constants.options.DISABLE_ANIMATION,
  emptyRate: _react2.default.createElement('img', { alt: '', className: 'emptyRate', src: starEmpty }),
  fractions: _constants.options.FRACTIONS,
  fullRate: _react2.default.createElement('img', { alt: '', className: 'fullRate', src: starFull }),
  initialRate: _constants.options.INITIAL_RATE,
  onChange: _constants.options.ON_CHANGE,
  onClick: _constants.options.ON_CLICK,
  onRate: _constants.options.ON_RATE,
  readonly: _constants.options.READONLY,
  start: _constants.options.START,
  step: _constants.options.STEP,
  stop: _constants.options.STOP
};

exports.default = Rating;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _View = __webpack_require__(8);

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rate = function (_PureComponent) {
  _inherits(Rate, _PureComponent);

  function Rate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Rate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Rate.__proto__ || Object.getPrototypeOf(Rate)).call.apply(_ref, [this].concat(args))), _this), _this.handleMouseMove = function (event) {
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

  _createClass(Rate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disableAnimation = _props.disableAnimation,
          emptyRate = _props.emptyRate,
          fixedPercentage = _props.fixedPercentage,
          fullRate = _props.fullRate,
          hoverPercentage = _props.hoverPercentage,
          readonly = _props.readonly;


      return _react2.default.createElement(_View2.default, {
        disableAnimation: disableAnimation,
        emptyRate: emptyRate,
        fixedPercentage: fixedPercentage,
        fullRate: fullRate,
        hoverPercentage: hoverPercentage,
        onClick: this.handleClick,
        onMouseMove: this.handleMouseMove,
        onTouchEnd: this.handleClick,
        onTouchMove: this.handleMouseMove,
        readonly: readonly
      });
    }
  }]);

  return Rate;
}(_react.PureComponent);

Rate.defaultProps = {
  fixedPercentage: 0,
  hoverPercentage: 0
};

exports.default = Rate;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: block;\n  position: relative;\n  ', '\n'], ['\n  display: block;\n  position: relative;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n'], ['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(2);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _styledComponents2.default.a(_templateObject, function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'pointer-events: none;' : 'cursor: pointer;';
});

var Icon = _styledComponents2.default.span(_templateObject2, function (_ref2) {
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
  return _react2.default.createElement(
    Item,
    {
      onClick: onClick,
      onMouseMove: onMouseMove,
      onTouchEnd: onClick,
      onTouchMove: onMouseMove,
      readonly: readonly
    },
    emptyRate,
    _react2.default.createElement(
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

exports.default = View;
module.exports = exports['default'];

/***/ })
/******/ ]);
});