import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import debounce from 'lodash/debounce'
import starEmpty from '../assets/star_empty.png'
import starFull from '../assets/star_full.png'
import { indexOf, noop } from '../utils'
import Rate from './Rate'

const Wrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
`

class Rating extends Component {
  constructor(props) {
    super(props)

    const { initialRate, placeholderRate } = props

    this.state = {
      index: indexOf(props, initialRate || placeholderRate),
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleGetElement = this.handleGetElement.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  componentWillReceiveProps({ initialRate, placeholderRate, start, stop }) {
    this.setState({
      index: indexOf({ start, stop }, initialRate || placeholderRate),
      selected: !initialRate,
    })
  }

  handleGetElement(container) {
    this.ratingContainer = container
  }

  handleClick(event, i) {
    const { onClick, onChange, readonly } = this.props
    const { index } = this.state

    if (readonly) {
      return
    }

    const calculatedIndex = i + this.fractionalIndex(event)

    onClick(this.indexToRate(calculatedIndex), event)

    if (index !== calculatedIndex) {
      onChange(this.indexToRate(calculatedIndex))

      this.setState({
        index: calculatedIndex,
        indexOver: undefined,
        selected: true,
      })
    }
  }

  handleMouseLeave() {
    const { onRate, readonly } = this.props

    if (readonly) {
      return
    }

    onRate()

    this.setState({
      indexOver: undefined,
    })
  }

  handleMouseMove(event, i) {
    const { animateOnHover, onRate, readonly } = this.props
    const { indexOver } = this.state

    if (!animateOnHover || readonly) {
      return
    }

    const calculatedIndex = i + this.fractionalIndex(event)
    console.log(calculatedIndex) // eslint-disable-line no-console

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

  // Calculate the corresponding index for a rate according to the provided
  // props or this.props.
  rateToIndex(rate) {
    return indexOf(this.props, rate)
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
    const {
      animateOnHover,
      start,
      stop,
      step,
      initialRate,
      placeholderRate,
      empty,
      full,
      placeholder,
      readonly,
      fractions,
      scale,
      onChange,
      onClick,
      onRate,
      ...other
    } = this.props
    const symbolNodes = []
    // The symbol with the mouse over prevails over the selected one,
    // provided that we are not in quiet mode.
    const index = animateOnHover ? this.state.indexOver || this.state.index : this.state.index
    // The index of the last full symbol or NaN if index is undefined.
    const lastFullIndex = Math.floor(index)
    // Render the number of whole symbols.

    const icon = !this.state.selected &&
      !initialRate &&
      placeholderRate &&
      (!animateOnHover || this.state.indexOver === undefined) ?
      placeholder : full

    for (let i = 0; i < Math.floor(this.rateToIndex(stop)); i += 1) {
      // Return the percentage of the decimal part of the last full index,
      // 100 percent for those below the last full index or 0 percent for those
      // indexes NaN or above the last full index.
      let percent
      console.log('i - lastFullIndex', i, lastFullIndex) // eslint-disable-line no-console
      if (i - lastFullIndex === 0) {
        percent = (index % 1) * 100
      } else {
        percent = i - lastFullIndex < 0 ? 100 : 0
      }

      console.log('PERCENTAGE', percent) // eslint-disable-line no-console

      symbolNodes.push(
        <Rate
          key={i}
          background={empty}
          icon={icon}
          percent={percent}
          onClick={event => this.handleClick(event, i)}
          onMouseMove={event => this.handleMouseMove(event, i)}
          onTouchMove={event => this.handleMouseMove(event, i)}
          onTouchEnd={event => this.handleClick(event, i)}
        />,
      )
    }

    return (
      <Wrapper ref={this.handleGetElement} onMouseLeave={this.handleMouseLeave} {...other}>
        {symbolNodes}
      </Wrapper>
    )
  }
}

Rating.defaultProps = {
  start: 0,
  stop: 5,
  step: 1,
  empty: <img alt="" className="empty" src={starEmpty} />,
  initialRate: 0,
  placeholderRate: 0,
  placeholder: <img alt="" className="placeholder" src={starEmpty} />,
  full: <img alt="" className="full" src={starFull} />,
  fractions: 1,
  scale: 3,
  animateOnHover: false,
  readonly: false,
  onChange: noop,
  onClick: noop,
  onRate: noop,
}

Rating.propTypes = {
  start: PropTypes.number,
  stop: PropTypes.number,
  step: PropTypes.number,
  initialRate: PropTypes.number,
  placeholderRate: PropTypes.number,
  empty: PropTypes.element,
  placeholder: PropTypes.element,
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
