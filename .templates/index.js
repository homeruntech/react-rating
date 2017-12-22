import React from 'react'
import { render } from 'react-dom'
import ReactRating from '@prontopro/react-rating'
import styled from 'styled-components'

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

const App = () => (
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
  </Wrapper>
)

render(<App />, document.getElementById('root'))
