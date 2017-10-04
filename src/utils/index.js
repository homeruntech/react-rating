// @flow
import { options } from '../constants'

export const getClientX = (event: Object): number =>
  (event.touches && event.touches[0] ? event.touches[0].clientX : event.clientX)

export const getFractionValue = (index: number, fractions: number): number => {
  const fraction = Math.ceil((index % 1) * fractions) / fractions

  return Math.floor(index) + (Math.floor(fraction * options.PRECISION) / options.PRECISION)
}

export const noop = () => {}

export const range = (length: number, map: Function = (_, i) => `${i}`): string[] => Array.from({ length }, map)

export const validateParams = ({ start, step, stop }: { start: number, step: number, stop: number }): boolean => {
  if (!Number.isInteger(start)) {
    throw new Error('"start" must be an integer.')
  }

  if (start < 0) {
    throw new Error('"start" must be greater than zero.')
  }

  if (!Number.isInteger(step)) {
    throw new Error('"step" must be an integer.')
  }

  if (step < 0) {
    throw new Error('"step" must be greater than zero.')
  }

  if (!Number.isInteger(stop)) {
    throw new Error('"stop" must be an integer.')
  }

  if (stop <= 0) {
    throw new Error('"stop" must be greater than zero.')
  }

  if (start >= stop) {
    throw new Error('"start" must be lower than "stop".')
  }

  if (step > (stop - start)) {
    throw new Error('"step" must be lower than "(stop - start)".')
  }
}

export default undefined
