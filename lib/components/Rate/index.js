'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _View = require('./View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


    return _react2.default.createElement(_View2.default, {
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
}(_react.PureComponent);

Rate.defaultProps = {
  fixedPercentage: 0,
  hoverPercentage: 0
};

Rate.propTypes = process.env.NODE_ENV !== "production" ? {
  animateOnHover: _propTypes2.default.bool.isRequired,
  disableAnimation: _propTypes2.default.bool.isRequired,
  emptyRate: _propTypes2.default.node.isRequired,
  index: _propTypes2.default.number.isRequired,
  fixedPercentage: _propTypes2.default.number,
  fullRate: _propTypes2.default.node.isRequired,
  hoverPercentage: _propTypes2.default.number,
  onClick: _propTypes2.default.func.isRequired,
  onMouseMove: _propTypes2.default.func.isRequired,
  readonly: _propTypes2.default.bool.isRequired
} : {};

exports.default = Rate;
module.exports = exports['default'];