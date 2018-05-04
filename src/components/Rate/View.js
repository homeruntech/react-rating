import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.button`
  && {
    -moz-osx-font-smoothing: inherit;
    -webkit-font-smoothing: inherit;
    appearance: none;
    background-color: transparent;
    border: none;
    box-shadow: none;
    display: block;
    line-height: normal;
    margin: 0;
    outline: none;
    padding: 0;
    position: relative;
    vertical-align: middle;
    white-space: normal;

    ${({ readonly }) => (readonly ? 'pointer-events: none;' : 'cursor: pointer;')}

    &:active,
    &:hover,
    &:focus {
      background-color: transparent;
      box-shadow: none;
      cursor: pointer;
      outline: none;
    }
  }
`

const Icon = styled.div`
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
    type="button"
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
