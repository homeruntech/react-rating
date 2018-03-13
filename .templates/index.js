import React, { PureComponent } from 'react'
import { render } from 'react-dom'
import ReactRating from '@prontopro/react-rating'
import styled from 'styled-components'

const Button = styled.button`
  background-color: rgba(55,201,217,0.9);
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: 8px 0;
  outline: none;
  padding: 8px;
`

const ReactExample = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Title = styled.h3`
  margin-bottom: 8px;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

class App extends PureComponent {
  state = {
    initialRate: 0,
  }

  handleRate = () => {
    const initialRate = Math.floor(Math.random() * 5) + 1

    this.setState({ initialRate })
  }

  render() {
    const { initialRate } = this.state

    return (
      <Wrapper>
        <ReactExample className="row">
          <Title>Default</Title>
          <ReactRating />
        </ReactExample>
        <ReactExample className="row">
          <Title>Animate onHover</Title>
          <ReactRating animateOnHover />
        </ReactExample>
        <ReactExample className="row">
          <Title>Animate onHover with animation disabled</Title>
          <ReactRating animateOnHover disableAnimation />
        </ReactExample>
        <ReactExample className="row">
          <Title>ReadOnly</Title>
          <ReactRating readonly />
        </ReactExample>
        <ReactExample className="row">
          <Title>10 StarsRating</Title>
          <ReactRating animateOnHover stop={10} />
        </ReactExample>
        <ReactExample className="row">
          <Title>Rating with initialRate</Title>
          <ReactRating animateOnHover initialRate={initialRate} />

          <Button onClick={this.handleRate}>Generate random rating</Button>
          <Title>Current rating: {initialRate}</Title>
        </ReactExample>
      </Wrapper>
    )
  }
}

render(<App />, document.getElementById('root'))
