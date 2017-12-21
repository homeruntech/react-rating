import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import View from './View'

class Rate extends PureComponent {
  handleMouseMove = (event) => {
    const { animateOnHover, index, onMouseMove } = this.props

    if (animateOnHover) {
      onMouseMove(event, index)
    }
  }

  handleClick = (event) => this.props.onClick(event, this.props.index)

  render() {
    const { emptyRate, fixedPercentage, fullRate, hoverPercentage, readonly } = this.props

    return (
      <View
        emptyRate={emptyRate}
        fixedPercentage={fixedPercentage}
        fullRate={fullRate}
        hoverPercentage={hoverPercentage}
        onClick={this.handleClick}
        onMouseMove={this.handleMouseMove}
        onTouchEnd={this.handleClick}
        onTouchMove={this.handleMouseMove}
        readonly={readonly}
      />
    )
  }
}

Rate.defaultProps = {
  fixedPercentage: 0,
  hoverPercentage: 0,
}

Rate.propTypes = {
  animateOnHover: PropTypes.bool.isRequired,
  emptyRate: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  fixedPercentage: PropTypes.number,
  fullRate: PropTypes.node.isRequired,
  hoverPercentage: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  readonly: PropTypes.bool.isRequired,
}

export default Rate
