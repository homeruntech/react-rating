import React from 'react'
import { render } from 'react-dom'
import AwesomeReactRating from '@prontopro/awesome-react-rating'

const appElement = document.getElementById('example')

const App = () => (
  <div>
    <AwesomeReactRating />
    <AwesomeReactRating animateOnHover />
  </div>
)

render(<App />, document.getElementById('root'))
