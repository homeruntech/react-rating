import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Item = styled.a`
  display: flex;
  cursor: pointer;
  position: relative;
`

const Icon = styled.span`
  display: block;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: width .1s ease-out;
  width: ${({ percent }) => `${percent}%`};
  will-change: width;
  ${({ readonly }) => (readonly ? 'pointer-events: none;' : null)}
`

const Rate = ({ background, icon, onClick, onMouseMove, percent, readonly }) => (
  <Item onClick={onClick} onMouseMove={onMouseMove} onTouchMove={onMouseMove} onTouchEnd={onClick} readonly={readonly}>
    {background}
    <Icon percent={percent}>{icon}</Icon>
  </Item>
)

Rate.defaultProps = {
  percent: 0,
}

Rate.propTypes = {
  background: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  percent: PropTypes.number,
  readonly: PropTypes.bool.isRequired,
}

export default Rate
