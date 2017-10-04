import React from 'react'
import { mount } from 'enzyme'
import { validateParams } from '..'

describe('Utils', () => {
  it('validateParams', () => {
    expect(() => validateParams({ start: 'foo', step: 1, stop: 5 })).toThrowError('"start" must be an integer.')
    expect(() => validateParams({ start: -1, step: 1, stop: 5 })).toThrowError('"start" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 'foo', stop: 5 })).toThrowError('"step" must be an integer.')
    expect(() => validateParams({ start: 0, step: -1, stop: 5 })).toThrowError('"step" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 1, stop: 'foo' })).toThrowError('"stop" must be an integer.')
    expect(() => validateParams({ start: 0, step: 1, stop: -1 })).toThrowError('"stop" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 1, stop: 0 })).toThrowError('"stop" must be greater than zero.')
    expect(() => validateParams({ start: 0, step: 1, stop: 5 })).not.toThrow()
  })
})
