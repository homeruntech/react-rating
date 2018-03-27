'use strict';

exports.__esModule = true;
exports.ratingTypes = exports.options = undefined;

var _utils = require('../utils');

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