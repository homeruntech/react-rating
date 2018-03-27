'use strict';

exports.__esModule = true;
exports.validateParams = exports.range = exports.noop = exports.getFractionValue = exports.getClientX = undefined;

var _constants = require('../constants');

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