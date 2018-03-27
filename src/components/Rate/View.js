import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.a`
  display: block;
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
  ${({ disableAnimation }) => (!disableAnimation ? 'transition: width .1s ease-out;' : '')}
  width: ${({ fixedPercentage, hoverPercentage }) =>
    `${(hoverPercentage > fixedPercentage ? hoverPercentage : fixedPercentage)}%`};
  will-change: width;
`

const View = ({
  disableAnimation,
  emptyRate,
  fixedPercentage,
  fullRate,
  hoverPercentage,
  onClick,
  onMouseMove,
  readonly,
}) => (
  <Item
    onClick={onClick}
    onMouseMove={onMouseMove}
    onTouchMove={onMouseMove}
    readonly={readonly}
  >
    {emptyRate}
    <Icon
      disableAnimation={disableAnimation}
      fixedPercentage={fixedPercentage}
      hoverPercentage={hoverPercentage}
    >
      {fullRate}
    </Icon>
  </Item>
)

View.propTypes = {
  disableAnimation: PropTypes.bool.isRequired,
  emptyRate: PropTypes.node.isRequired,
  fixedPercentage: PropTypes.number.isRequired,
  fullRate: PropTypes.node.isRequired,
  hoverPercentage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired,
}

export default View
