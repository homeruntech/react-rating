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

describe('Rate', () => {
  it('renders without crashing', () => {
    mount(<Rate {...defaultProps} />)
  })

  it('should trigger actions only if not readonly', () => {
    const component = shallow(<Rate {...defaultProps} readonly={false} />)
    const Trigger = component.dive().get(0)
    component.dive().simulate('click')

    expect(Trigger.props.readonly).toBe(false)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})
