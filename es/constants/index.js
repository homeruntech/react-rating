import { noop } from '../utils';

export var options = {
  ANIMATE_ON_HOVER: false,
  DISABLE_ANIMATION: false,
  FRACTIONS: 1,
  INITIAL_RATE: 0,
  ON_CHANGE: noop,
  ON_CLICK: noop,
  ON_RATE: noop,
  PRECISION: Math.pow(3, 100),
  READONLY: false,
  START: 0,
  STEP: 1,
  STOP: 5
};

export var ratingTypes = {
  FIXED: 'currentRating',
  HOVER: 'currentRatingHover'
};

export default undefined;