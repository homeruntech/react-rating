import { options } from '../constants';

export var getClientX = function getClientX(event) {
  return event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX;
};

export var getFractionValue = function getFractionValue(index, fractions) {
  var fraction = Math.ceil(index % 1 * fractions) / fractions;

  return Math.floor(index) + Math.floor(fraction * options.PRECISION) / options.PRECISION;
};

export var noop = function noop() {};

export var range = function range(length) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_, i) {
    return '' + i;
  };
  return Array.from({ length: length }, map);
};

export var validateParams = function validateParams(_ref) {
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

export default undefined;