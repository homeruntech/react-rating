var _templateObject = _taggedTemplateLiteralLoose(['\n  display: block;\n  position: relative;\n  ', '\n'], ['\n  display: block;\n  position: relative;\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n'], ['\n  display: block;\n  height: 100%;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  ', '\n  width: ', ';\n  will-change: width;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var Item = styled.a(_templateObject, function (_ref) {
  var readonly = _ref.readonly;
  return readonly ? 'pointer-events: none;' : 'cursor: pointer;';
});

var Icon = styled.span(_templateObject2, function (_ref2) {
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
  return React.createElement(
    Item,
    {
      onClick: onClick,
      onMouseMove: onMouseMove,
      onTouchMove: onMouseMove,
      readonly: readonly
    },
    emptyRate,
    React.createElement(
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
  disableAnimation: PropTypes.bool.isRequired,
  emptyRate: PropTypes.node.isRequired,
  fixedPercentage: PropTypes.number.isRequired,
  fullRate: PropTypes.node.isRequired,
  hoverPercentage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired
} : {};

export default View;