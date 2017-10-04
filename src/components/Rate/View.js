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
  width: ${({ fixedPercentage, hoverPercentage }) =>
    `${(hoverPercentage > fixedPercentage ? hoverPercentage : fixedPercentage)}%`};
  will-change: width;
`

const View = ({
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
    onTouchEnd={onClick}
    onTouchMove={onMouseMove}
    readonly={readonly}
  >
    {emptyRate}
    <Icon fixedPercentage={fixedPercentage} hoverPercentage={hoverPercentage}>{fullRate}</Icon>
  </Item>
)

View.propTypes = {
  emptyRate: PropTypes.node.isRequired,
  fixedPercentage: PropTypes.number.isRequired,
  fullRate: PropTypes.node.isRequired,
  hoverPercentage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired,
}

export default View
