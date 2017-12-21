import React from 'react'
import { mount, shallow } from 'enzyme'
import Rate from '../../Rate'
import Rating from '..'

const setupMount = props => mount(<Rating {...props} />)
const setupShallow = props => shallow(<Rating {...props} />)

describe('Rating', () => {
  it('renders without crashing', () => {
    setupMount()
  })

  it('should mount a specific number of rating', () => {
    const component = setupMount()

    expect(component.find(Rate).length).toBe(5)
    expect(component.setProps({ readonly: true }).prop('readonly')).toBe(true)
  })

  it('should mount with different props', () => {
    const component = setupMount({ readonly: true })

    component.simulate('mouseLeave')

    expect(component.prop('readonly')).toBe(true)
    expect(component.setProps({ initialRate: 3 }).prop('initialRate')).toBe(3)
  })

  it('should call events on mouse events', () => {
    const component = setupMount({ animateOnHover: true, readonly: false })

    const RateStars = component.find(Rate)

    RateStars.forEach(RateStar => {
      RateStar.simulate('click')
      RateStar.simulate('mouseEnter')
      RateStar.simulate('mouseMove')
    })

  })
})
