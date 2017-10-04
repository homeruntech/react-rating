import React from 'react'
import { mount } from 'enzyme'
import Rating from '..'

describe('Rating', () => {
  it('renders without crashing', () => {
    mount(<Rating />)
  })
})
