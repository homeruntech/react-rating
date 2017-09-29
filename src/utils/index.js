// Returns the index of the rate in the range (start, stop, step).
// Returns undefined index if the rate is outside the range.
// NOTE: A range.step of 0 produces an empty range and consequently returns an
// undefined index.
export const indexOf = (range, rate) => {
  // Check the rate is in the proper range [start..stop] according to
  // the start, stop and step properties in props.
  const step = range.step
  const start = step > 0 ? range.start : range.stop
  const stop = step > 0 ? range.stop : range.start
  if (step && start <= rate && rate <= stop) {
    // The index corresponds to the number of steps of size props.step
    // that fits between rate and start.
    // This index does not need to be a whole number because we can have
    // fractional symbols, and consequently fractional/float indexes.
    return (rate - range.start) / step
  }
  return 0
}

export const noop = () => {}

export default undefined
