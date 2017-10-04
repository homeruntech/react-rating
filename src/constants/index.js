import { noop } from '../utils'

export const options = {
  ANIMATE_ON_HOVER: false,
  FRACTIONS: 1,
  INITIAL_RATE: 0,
  ON_CHANGE: noop,
  ON_CLICK: noop,
  ON_RATE: noop,
  PRECISION: 3 ** 100,
  READONLY: false,
  START: 0,
  STEP: 1,
  STOP: 5,
}

export const ratingTypes = {
  FIXED: 'currentRating',
  HOVER: 'currentRatingHover',
}

export default undefined
