import { getClientX, getFractionValue, noop, range, validateParams } from '..'

describe('getClientX', () => {
  it('should clientX or touches.clientX', () => {
    const desktopEvent = {
      clientX: 10,
    }
    const touchEvent = {
      clientX: 10,
      touches: [{
        clientX: 50,
      }],
    }
    const brokenTouchEvent = {
      clientX: 10,
      touches: [],
    }

    expect(getClientX(desktopEvent)).toBe(10)
    expect(getClientX(touchEvent)).toBe(50)
    expect(getClientX(brokenTouchEvent)).toBe(10)
  })
})

describe('getFractionValue', () => {
  it('should a fractional value of %', () => {
    const integerFractionalValues = [{
      index: 0.375,
      expected: 1,
    }, {
      index: 0.5,
      expected: 1,
    }, {
      index: 0.5625,
      expected: 1,
    }, {
      index: 0.625,
      expected: 1,
    }, {
      index: 0.6875,
      expected: 1,
    }, {
      index: 0.75,
      expected: 1,
    }, {
      index: 0.8125,
      expected: 1,
    }, {
      index: 0.95,
      expected: 1,
    }]

    const floatFractionalValues = [{
      index: 0.375,
      expected: 2,
    }, {
      index: 0.5,
      expected: 2,
    }, {
      index: 0.5625,
      expected: 2,
    }, {
      index: 0.625,
      expected: 2,
    }, {
      index: 0.6875,
      expected: 2,
    }, {
      index: 0.75,
      expected: 2,
    }, {
      index: 0.8125,
      expected: 2,
    }, {
      index: 0.95,
      expected: 2,
    }]

    integerFractionalValues.forEach(value => expect(getFractionValue(value.index, 1)).toBe(value.expected))
    floatFractionalValues.forEach(value => expect(getFractionValue(value.index, 0.5)).toBe(value.expected))
  })
})

describe('noop', () => {
  it('should return undefined', () => {
    expect(noop()).toBeUndefined()
  })
})

describe('range', () => {
  it('should return an array of specified length', () => {
    expect(range()).toEqual([])
    expect(range().length).toBe(0)
    expect(range(-1).length).toBe(0)
    expect(range(5).length).toBe(5)
  })
})

describe('validateParams', () => {
  it('should throw exception if params does not satisfy constraints', () => {
    expect(() => validateParams({ start: 'foo', step: 1, stop: 5 })).toThrowError('"start" must be an integer.')
    expect(() => validateParams({ start: -1, step: 1, stop: 5 })).toThrowError('"start" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 'foo', stop: 5 })).toThrowError('"step" must be an integer.')
    expect(() => validateParams({ start: 0, step: -1, stop: 5 })).toThrowError('"step" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 1, stop: 'foo' })).toThrowError('"stop" must be an integer.')
    expect(() => validateParams({ start: 0, step: 1, stop: -1 })).toThrowError('"stop" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 1, stop: 0 })).toThrowError('"stop" must be greater than zero.')
    expect(() => validateParams({ start: 5, step: 1, stop: 2 })).toThrowError('"start" must be lower than "stop".')
    expect(() => validateParams({ start: 2, step: 3, stop: 4 }))
      .toThrowError('"step" must be lower than "(stop - start)".')
    expect(() => validateParams({ start: 0, step: 1, stop: 5 })).not.toThrow()
  })
})
