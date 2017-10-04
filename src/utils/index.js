import { options } from '../constants'

export const getClientX = event => (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX)

export const getFractionValue = (index, fractions) => {
  const fraction = Math.ceil((index % 1) * fractions) / fractions

  return Math.floor(index) + (Math.floor(fraction * options.PRECISION) / options.PRECISION)
}

export const noop = () => {}

export const paramsAreInvalid = ({ start, step, stop }) =>
  start < 0
  || start >= stop
  || step <= 0
  || stop <= 0
  || step > (stop - start)

export const range = (length, map = noop) => Array.from({ length }, map)

export default undefined
