export const noop = () => {}

export const range = (length, map = noop) => Array.from({ length }, map)

export const validateRange = ({ start, step, stop }) =>
  start < 0
  || start >= stop
  || step <= 0
  || stop <= 0
  || step > (stop - start)

export default undefined
