import React from 'react'
import { render } from 'react-dom'
import ReactRating from '@prontopro/react-rating'

const appElement = document.getElementById('example')

const App = () => (
  <div>
    <ReactRating />
    <ReactRating animateOnHover />
  </div>
)

render(<App />, document.getElementById('root'))
