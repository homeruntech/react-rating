import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Rate from '../Rate'
import { options, ratingTypes } from '../../constants'
import { getClientX, getFractionValue, range, validateParams } from '../../utils'
import starEmpty from '../../assets/star_empty.png'
import starFull from '../../assets/star_full.png'

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  ${({ readonly }) => (readonly ? 'pointer-events: none;' : null)}
`

class Rating extends PureComponent {
  constructor(props) {
    super(props)

    const { start, stop } = props

    validateParams(props)

    this.state = {
      [ratingTypes.FIXED]: this.getRating(),
      elements: range((stop - start), (_, i) => `react-rating-${i}`),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.propsAreChanged(nextProps)) {
      this.setState({
        [ratingTypes.FIXED]: this.getRating(),
      })
    }
  }

  getFractionRoundedValue = (event) => {
    const x = getClientX(event) - event.currentTarget.getBoundingClientRect().left

    return this.round(x / event.currentTarget.offsetWidth)
  }

  getPercentage = (index, ratingType) => {
    const currentRatingValue = this.state[ratingType]
    const currentRoundedRatingValue = Math.floor(currentRatingValue)

    if (index === currentRoundedRatingValue) {
      return (currentRatingValue % 1) * 100
    }

    return index - currentRoundedRatingValue < 0 ? 100 : 0
  }

  getRating = () => {
    const { initialRate, start, step } = this.props

    return (initialRate - start) / step || 0
  }

  handleClick = (event, index) => {
    const { onClick, onChange } = this.props
    const { currentRating } = this.state

    const calculatedIndex = index + this.getFractionRoundedValue(event)

    onClick(this.indexToRate(calculatedIndex), event)

    if (currentRating !== calculatedIndex) {
      onChange(this.indexToRate(calculatedIndex))

      this.setState({
        [ratingTypes.FIXED]: calculatedIndex,
        [ratingTypes.HOVER]: 0,
      })
    }
  }

  handleMouseLeave = () => {
    this.setState({
      [ratingTypes.HOVER]: 0,
    })
  }

  handleMouseMove = (event, index) => {
    const { onRate } = this.props
    const { currentRatingHover } = this.state

    const calculatedIndex = index + this.getFractionRoundedValue(event)

    if (currentRatingHover !== calculatedIndex) {
      onRate(this.indexToRate(calculatedIndex))

      this.setState({
        [ratingTypes.HOVER]: calculatedIndex,
      })
    }
  }

  indexToRate = (index) => {
    const { start, step } = this.props

    return start + (Math.floor(index) * step) + (step * this.round(index % 1))
  }

  propsAreChanged = ({ initialRate, start, stop }) => initialRate !== this.props.initialRate
    || start !== this.props.start
    || stop !== this.props.stop

  round = (index) => {
    const { fractions, stop } = this.props
    const value = getFractionValue(index, fractions)

    return value > stop ? stop : value
  }

  render() {
    const { animateOnHover, emptyRate, fullRate, readonly } = this.props
    const { elements } = this.state

    return (
      <Wrapper onMouseLeave={this.handleMouseLeave} readonly={readonly}>
        {elements.map((element, index) => (
          <Rate
            animateOnHover={animateOnHover}
            key={element}
            emptyRate={emptyRate}
            index={index}
            fixedPercentage={this.getPercentage(index, ratingTypes.FIXED)}
            fullRate={fullRate}
            hoverPercentage={this.getPercentage(index, ratingTypes.HOVER)}
            readonly={readonly}
            onClick={this.handleClick}
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleMouseMove}
            onTouchEnd={this.handleClick}
          />
        ))}
      </Wrapper>
    )
  }
}

Rating.defaultProps = {
  animateOnHover: options.ANIMATE_ON_HOVER,
  emptyRate: <img alt="" className="emptyRate" src={starEmpty} />,
  fractions: options.FRACTIONS,
  fullRate: <img alt="" className="fullRate" src={starFull} />,
  initialRate: options.INITIAL_RATE,
  onChange: options.ON_CHANGE,
  onClick: options.ON_CLICK,
  onRate: options.ON_RATE,
  readonly: options.READONLY,
  start: options.START,
  step: options.STEP,
  stop: options.STOP,
}

Rating.propTypes = {
  animateOnHover: PropTypes.bool,
  emptyRate: PropTypes.element,
  fractions: PropTypes.number,
  fullRate: PropTypes.element,
  initialRate: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onRate: PropTypes.func,
  readonly: PropTypes.bool,
  start: PropTypes.number,
  step: PropTypes.number,
  stop: PropTypes.number,
}

export default Rating
