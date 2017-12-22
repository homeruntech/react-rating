[![Build Status](https://travis-ci.org/ProntoPro/react-rating.svg?branch=master)](https://travis-ci.org/ProntoPro/react-rating) [![NPM version](https://badge.fury.io/js/%40prontopro%2Freact-rating.svg)](https://www.npmjs.com/package/@prontopro/react-rating)  [![Dependency Status](https://david-dm.org/@prontopro/react-rating.svg)](https://www.npmjs.com/package/@prontopro/react-rating)
[![devDependency Status](https://david-dm.org/@prontopro/react-rating/dev-status.svg)](https://www.npmjs.com/package/@prontopro/react-rating) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/ProntoPro/react-rating/pulls) [![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ProntoPro/react-rating)

# React Rating

React Rating is a [React](https://github.com/facebook/react) Rating component built with `styled-components` [StyledComponents](https://github.com/styled-components/styled-components) 💅  and inspired by [ReactRating](https://github.com/dreyescat/react-rating/)

## Installation

You can install `@prontopro/react-rating` component using the **yarn** package manager:

```bash
yarn add --save @prontopro/react-rating
```

### Dependencies

The `@prontopro/react-rating` component [peer depends](https://docs.npmjs.com/files/package.json#peerdependencies) on the [React](http://facebook.github.io/react/) library.

You can install React using *yarn*:

```bash
yarn add --save react react-dom
```

## Usage

Import Rating Component

```javascript
import Rating from '@prontopro/react-rating'
```

Start using it:

```jsx
<Rating />
```

Or passing some props:

```jsx
<Rating
  animateOnHover
  disableAnimation
  initialRate={3}
  stop={10}
/>
```

## Properties

Property            | Type                         | Default              | Description
---                 | ---                          | ---                  | ---
`animateOnHover`    | *Boolean*                    | false                | Whether to animate rate hovering or not.
`disableAnimation`  | *Boolean*                    | false                | Disable stars animation onClick or onHover.
`emptyRate`         | *React Element*              | Empty Star           | React Element
`fractions`         | *Number*                     | 1                    | Number of equal parts that make up a whole symbol.
`fullRate`          | *React Element*              | Full Star            | React element
`initialRate`       | *Number*                     | 0                    | Initial rate value.
`readonly`          | *Boolean*                    | false                | Whether the rating can be modified or not.
`start`             | *Number*                     | 0                    | Range starting value.
`step`              | *Number*                     | 1                    | Step increment (must be between *start* and *stop*).
`stop`              | *Number*                     | 5                    | Range stop value.

## Callbacks

Callback            | Type                         | Parameters                   | Description
---                 | ---                          | ---                              | ---
`onChange`          | *Function*                   | rate: *Number*                   | Called when the selected rate is changed.
`onClick`           | *Function*                   | (rate: *Number*, event: *Event*) | Called when a rate is clicked.
`onRate`            | *Function*                   | rate: *Number* or *undefined*    | Called when a rate is entered or left. When a rate is left it is called with `undefined`.

## License

[MIT License](https://github.com/ProntoPro/react-rating/blob/master/LICENSE.md)
