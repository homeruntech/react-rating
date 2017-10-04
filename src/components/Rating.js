import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import debounce from 'lodash/debounce'
import starEmpty from '../assets/star_empty.png'
import starFull from '../assets/star_full.png'
import { options } from '../constants'
import { range, validateRange } from '../utils'
import Rate from './Rate'

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  ${({ readonly }) => (readonly ? 'pointer-events: none;' : null)}
`

class Rating extends Component {
  constructor(props) {
    super(props)

    const { initialRate, start, step, stop } = props

    if (validateRange({ step, start, stop })) {
      throw new Error('Validation fails.')
    }

    this.getPercentage = this.getPercentage.bind(this)
    this.getRating = this.getRating.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.propsAreChanged = this.propsAreChanged.bind(this)

    this.state = {
      currentRating: this.getRating(),
      elements: range(stop, (_, i) => `react-rating-${i}`),
    }
  }

  componentWillReceiveProps(nextProps) {
    const { initialRate } = nextProps

    if (this.propsAreChanged(nextProps)) {
      this.setState({
        currentRating: this.getRating(),
        isSelected: !initialRate,
      })
    }
  }

  getPercentage(i) {
    const { animateOnHover } = this.props
    const { currentRating, indexOver } = this.state

    const currentRatingValue = animateOnHover ? indexOver || currentRating : currentRating
    const currentRoundedRatingValue = Math.floor(currentRatingValue)

    if (i === currentRoundedRatingValue) {
      return currentRatingValue % 1 * 100
    }

    return i - currentRoundedRatingValue < 0 ? 100 : 0
  }

  getRating() {
    const { initialRate, start, step} = this.props

    return (initialRate - start) / step || 0
  }

  propsAreChanged({ initialRate, start, stop }) {
    return initialRate !== this.props.initialRate || start !== this.props.start || stop !== this.props.stop
  }

  handleClick(event, i) {
    const { onClick, onChange } = this.props
    const { currentRating } = this.state

    const calculatedIndex = i + this.fractionalIndex(event)

    onClick(this.indexToRate(calculatedIndex), event)

    if (currentRating !== calculatedIndex) {
      onChange(this.indexToRate(calculatedIndex))

      this.setState({
        currentRating: calculatedIndex,
        indexOver: undefined,
        isSelected: true,
      })
    }
  }

  handleMouseMove(event, i) {
    const { animateOnHover, onRate } = this.props
    const { indexOver } = this.state

    if (!animateOnHover) {
      return
    }

    const calculatedIndex = i + this.fractionalIndex(event)

    if (indexOver !== calculatedIndex) {
      onRate(this.indexToRate(calculatedIndex))

      this.setState({
        indexOver: calculatedIndex,
      })
    }
  }

  // Calculate the rate of an index according the the start and step.
  indexToRate(index) {
    const { start, step } = this.props

    return start + (Math.floor(index) * step) + (step * this.roundToFraction(index % 1))
  }

  roundToFraction(index) {
    const { fractions, scale, stop } = this.props
    // Get the closest top fraction.
    const fraction = Math.ceil((index % 1) * fractions) / fractions
    // Truncate decimal trying to avoid float precission issues.
    const precision = scale ** 10
    const roundedValue = Math.floor(index) + (Math.floor(fraction * precision) / precision)
    // Handles bugs when the touchend is past the star stop
    return roundedValue > stop ? stop : roundedValue
  }

  fractionalIndex(event) {
    let clientX

    if (event.nativeEvent.type.indexOf('touch') > -1) {
      if (event.nativeEvent.type.indexOf('touchend') > -1) {
        clientX = event.changedTouches[0].clientX
      } else {
        clientX = event.touches[0].clientX
      }
    } else {
      clientX = event.clientX
    }

    const x = clientX - event.currentTarget.getBoundingClientRect().left

    return this.roundToFraction(x / event.currentTarget.offsetWidth)
  }

  render() {
    const { animateOnHover, initialRate, empty, full, readonly } = this.props
    const { currentRating, elements, indexOver, isSelected } = this.state

    return (
      <Wrapper readonly={readonly}>
        {elements.map((element, i) => (
          <Rate
            key={element}
            background={empty}
            icon={full}
            percentage={this.getPercentage(i)}
            readonly={readonly}
            onClick={event => this.handleClick(event, i)}
            onMouseMove={event => this.handleMouseMove(event, i)}
            onTouchMove={event => this.handleMouseMove(event, i)}
            onTouchEnd={event => this.handleClick(event, i)}
          />
        ))}
      </Wrapper>
    )
  }
}

Rating.defaultProps = {
  start: options.START,
  stop: options.STOP,
  step: options.STEP,
  empty: <img alt="" className="empty" src={starEmpty} />,
  initialRate: options.INITIAL_RATE,
  full: <img alt="" className="full" src={starFull} />,
  fractions: options.FRACTIONS,
  scale: 3,
  animateOnHover: options.ANIMATE_ON_HOVER,
  readonly: options.READONLY,
  onChange: options.ON_CHANGE,
  onClick: options.ON_CLICK,
  onRate: options.ON_RATE,
}

Rating.propTypes = {
  start: PropTypes.number,
  stop: PropTypes.number,
  step: PropTypes.number,
  initialRate: PropTypes.number,
  empty: PropTypes.element,
  full: PropTypes.element,
  readonly: PropTypes.bool,
  animateOnHover: PropTypes.bool,
  fractions: PropTypes.number,
  scale: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onRate: PropTypes.func,
}

export default Rating
