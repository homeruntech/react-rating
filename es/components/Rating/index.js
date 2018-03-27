var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n'], ['\n  display: flex;\n  flex: 1 0 auto;\n  ', '\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Rate from '../Rate';
import { options, ratingTypes } from '../../constants';
import { getClientX, getFractionValue, range, validateParams } from '../../utils';
import starEmpty from '../../assets/star_empty.png';
import starFull from '../../assets/star_full.png';

var Wrapper = styled.div(_templateObject, function (_ref) {
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


    validateParams(props);

    _this.state = (_this$state = {}, _this$state[ratingTypes.FIXED] = _this.getRating(props), _this$state.elements = range(stop - start, function (_, i) {
      return 'react-rating-' + i;
    }), _this$state);
    return _this;
  }

  Rating.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.propsAreChanged(nextProps)) {
      var _setState;

      this.setState((_setState = {}, _setState[ratingTypes.FIXED] = this.getRating(nextProps), _setState));
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


    return React.createElement(
      Wrapper,
      { onMouseLeave: this.handleMouseLeave, readonly: readonly },
      elements.map(function (element, index) {
        return React.createElement(Rate, {
          animateOnHover: animateOnHover,
          disableAnimation: disableAnimation,
          key: element,
          emptyRate: emptyRate,
          index: index,
          fixedPercentage: _this2.getPercentage(index, ratingTypes.FIXED),
          fullRate: fullRate,
          hoverPercentage: _this2.getPercentage(index, ratingTypes.HOVER),
          readonly: readonly,
          onClick: _this2.handleClick,
          onMouseMove: _this2.handleMouseMove,
          onTouchMove: _this2.handleMouseMove
        });
      })
    );
  };

  return Rating;
}(PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getFractionRoundedValue = function (event) {
    var x = getClientX(event) - event.currentTarget.getBoundingClientRect().left;

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

      _this3.setState((_this3$setState = {}, _this3$setState[ratingTypes.FIXED] = calculatedIndex, _this3$setState[ratingTypes.HOVER] = 0, _this3$setState));
    }
  };

  this.handleMouseLeave = function () {
    var _this3$setState2;

    _this3.setState((_this3$setState2 = {}, _this3$setState2[ratingTypes.HOVER] = 0, _this3$setState2));
  };

  this.handleMouseMove = function (event, index) {
    var onRate = _this3.props.onRate;
    var currentRatingHover = _this3.state.currentRatingHover;


    var calculatedIndex = index + _this3.getFractionRoundedValue(event);

    if (currentRatingHover !== calculatedIndex) {
      var _this3$setState3;

      onRate(_this3.indexToRate(calculatedIndex));

      _this3.setState((_this3$setState3 = {}, _this3$setState3[ratingTypes.HOVER] = calculatedIndex, _this3$setState3));
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

    var value = getFractionValue(index, fractions);

    return value > stop ? stop : value;
  };
}, _temp);


Rating.defaultProps = {
  animateOnHover: options.ANIMATE_ON_HOVER,
  disableAnimation: options.DISABLE_ANIMATION,
  emptyRate: React.createElement('img', { alt: '', className: 'emptyRate', src: starEmpty }),
  fractions: options.FRACTIONS,
  fullRate: React.createElement('img', { alt: '', className: 'fullRate', src: starFull }),
  initialRate: options.INITIAL_RATE,
  onChange: options.ON_CHANGE,
  onClick: options.ON_CLICK,
  onRate: options.ON_RATE,
  readonly: options.READONLY,
  start: options.START,
  step: options.STEP,
  stop: options.STOP
};

Rating.propTypes = process.env.NODE_ENV !== "production" ? {
  animateOnHover: PropTypes.bool,
  disableAnimation: PropTypes.bool,
  emptyRate: PropTypes.element,
  fractions: PropTypes.number,
  fullRate: PropTypes.element,
  initialRate: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onRate: PropTypes.func,
  readonly: PropTypes.bool,
  start: PropTypes.number,
  step: PropTypes.number,
  stop: PropTypes.number
} : {};

export default Rating;