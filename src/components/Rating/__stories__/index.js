import React from 'react'
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react'
import Rating from 'components/Rating'

storiesOf('Rating', module)
  .add('All Examples', () => (
    <div>
      <h2 className="title bold">Default</h2>
      <Rating />
      <h2 className="title bold">To 10</h2>
      <Rating animateOnHover stop={10} />
      <h2 className="title bold">Fractional values</h2>
      <Rating animateOnHover fractions={2} />
      <h2 className="title bold">Read-only</h2>
      <Rating animateOnHover fractions={2} readonly />
    </div>
  ))
