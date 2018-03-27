'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  position: relative;\n  ', '\n'], ['\n  display: block;\n  position: relative;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n'], ['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

View.propTypes = process.env.NODE_ENV !== "production" ? {
  disableAnimation: _propTypes2.default.bool.isRequired,
  emptyRate: _propTypes2.default.node.isRequired,
  fixedPercentage: _propTypes2.default.number.isRequired,
  fullRate: _propTypes2.default.node.isRequired,
  hoverPercentage: _propTypes2.default.number.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  onMouseMove: _propTypes2.default.func.isRequired,
  readonly: _propTypes2.default.bool.isRequired
} : {};

exports.default = View;
module.exports = exports['default'];