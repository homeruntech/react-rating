import React from 'react'
import { mount, shallow } from 'enzyme'
import Rate from '../../Rate'
import Rating from '..'

const setup = (props) => {
  const component = shallow(<Rating {...props} />)

  return {
    component,
    props,
  }
}

describe('Rating', () => {
  it('renders without crashing', () => {
    mount(<Rating />)
  })

  it('should mount a specific number of rating', () => {
    const { component } = setup()

    expect(component.find(Rate).length).toBe(5)
    expect(component.setProps({ readonly: true }).prop('readonly')).toBe(true)
  })
})
