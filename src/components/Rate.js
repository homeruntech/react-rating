import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.a`
  display: flex;
  position: relative;
  ${({ readonly }) => (readonly ? 'pointer-events: none;' : 'cursor: pointer;')}
`

const Icon = styled.span`
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: width .1s ease-out;
  width: ${({ percentage }) => `${percentage}%`};
  will-change: width;
`

const Rate = ({ background, icon, onClick, onMouseMove, percentage, readonly }) => (
  <Item onClick={onClick} onMouseMove={onMouseMove} onTouchMove={onMouseMove} onTouchEnd={onClick} readonly={readonly}>
    {background}
    <Icon percentage={percentage}>{icon}</Icon>
  </Item>
)

Rate.defaultProps = {
  percentage: 0,
}

Rate.propTypes = {
  background: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  percentage: PropTypes.number,
  readonly: PropTypes.bool.isRequired,
}

export default Rate
