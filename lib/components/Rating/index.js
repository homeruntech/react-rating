'use strict';

exports.__esModule = true;

var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Rate = require('../Rate');

var _Rate2 = _interopRequireDefault(_Rate);

var _constants = require('../../constants');

var _utils = require('../../utils');

var _star_empty = require('../../assets/star_empty.png');

var _star_empty2 = _interopRequireDefault(_star_empty);

var _star_full = require('../../assets/star_full.png');

var _star_full2 = _interopRequireDefault(_star_full);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.div(_templateObject, function (_ref) {
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


    (0, _utils.validateParams)(props);

    _this.state = (_this$state = {}, _this$state[_constants.ratingTypes.FIXED] = _this.getRating(props), _this$state.elements = (0, _utils.range)(stop - start, function (_, i) {
      return 'react-rating-' + i;
    }), _this$state);
    return _this;
  }

  Rating.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.propsAreChanged(nextProps)) {
      var _setState;

      this.setState((_setState = {}, _setState[_constants.ratingTypes.FIXED] = this.getRating(nextProps), _setState));
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
          onTouchMove: _this2.handleMouseMove
        });
      })
    );
  };

  return Rating;
}(_react.PureComponent), _initialiseProps = function _initialiseProps() {
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

      _this3.setState((_this3$setState = {}, _this3$setState[_constants.ratingTypes.FIXED] = calculatedIndex, _this3$setState[_constants.ratingTypes.HOVER] = 0, _this3$setState));
    }
  };

  this.handleMouseLeave = function () {
    var _this3$setState2;

    _this3.setState((_this3$setState2 = {}, _this3$setState2[_constants.ratingTypes.HOVER] = 0, _this3$setState2));
  };

  this.handleMouseMove = function (event, index) {
    var onRate = _this3.props.onRate;
    var currentRatingHover = _this3.state.currentRatingHover;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    if (currentRatingHover !== calculatedIndex) {
      var _this3$setState3;

      onRate(_this3.indexToRate(calculatedIndex));

      _this3.setState((_this3$setState3 = {}, _this3$setState3[_constants.ratingTypes.HOVER] = calculatedIndex, _this3$setState3));
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

    var value = (0, _utils.getFractionValue)(index, fractions);

    return value > stop ? stop : value;
  };
}, _temp);


Rating.defaultProps = {
  animateOnHover: _constants.options.ANIMATE_ON_HOVER,
  disableAnimation: _constants.options.DISABLE_ANIMATION,
  emptyRate: _react2.default.createElement('img', { alt: '', className: 'emptyRate', src: _star_empty2.default }),
  fractions: _constants.options.FRACTIONS,
  fullRate: _react2.default.createElement('img', { alt: '', className: 'fullRate', src: _star_full2.default }),
  initialRate: _constants.options.INITIAL_RATE,
  onChange: _constants.options.ON_CHANGE,
  onClick: _constants.options.ON_CLICK,
  onRate: _constants.options.ON_RATE,
  readonly: _constants.options.READONLY,
  start: _constants.options.START,
  step: _constants.options.STEP,
  stop: _constants.options.STOP
};

Rating.propTypes = process.env.NODE_ENV !== "production" ? {
  animateOnHover: _propTypes2.default.bool,
  disableAnimation: _propTypes2.default.bool,
  emptyRate: _propTypes2.default.element,
  fractions: _propTypes2.default.number,
  fullRate: _propTypes2.default.element,
  initialRate: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onRate: _propTypes2.default.func,
  readonly: _propTypes2.default.bool,
  start: _propTypes2.default.number,
  step: _propTypes2.default.number,
  stop: _propTypes2.default.number
} : {};

exports.default = Rating;
module.exports = exports['default'];