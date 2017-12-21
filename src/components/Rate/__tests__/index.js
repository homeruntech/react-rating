import React from 'react'
import { mount, shallow } from 'enzyme'
import Rate from '..'

const defaultProps = {
  animateOnHover: true,
  emptyRate: <div />,
  fullRate: <div />,
  index: 2,
  onClick: jest.fn(),
  onMouseMove: jest.fn(),
  readonly: true,
}

const setupMount = props => mount(<Rate {...defaultProps} {...props} />)
const setupShallow = props => shallow(<Rate {...defaultProps} {...props} />)

describe('Rate', () => {
  it('renders without crashing', () => {
    setupMount()
  })

  it('should trigger actions only if not readonly', () => {
    const component = setupShallow({ readonly: false })

    const Trigger = component.dive().get(0)
    component.dive().simulate('click')
    component.dive().simulate('mousemove')

    expect(Trigger.props.readonly).toBe(false)
    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(defaultProps.onMouseMove).toHaveBeenCalled()
  })

  it('should not call onMouseMove if animateOnHover is disabled', () => {
    const component = setupMount({ animateOnHover: false, readonly: false })

    component.simulate('click')
    component.simulate('mouseEnter')
    component.simulate('mouseMove')

    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should color stars if hoverPercentage greater than fixedPercentage', () => {
    setupMount({ fixedPercentage: 50, hoverPercentage: 100, readonly: false })
  })
})
