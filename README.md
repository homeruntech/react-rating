[![Build Status](http://circleci-badges-max.herokuapp.com/img/filipposarzana/react-rating?token=d1a85b80e64a18a5f60f22b0b1d03398717f30f2)](https://circleci.com/gh/filipposarzana/react-rating)

# React Rating

React Rating is a [react](https://github.com/facebook/react) rating component built with `styled-components` [StyledComponent](https://github.com/styled-components/styled-components) 💅  and inspired by [ReactRating](https://github.com/dreyescat/react-rating/)

## Installation

You can install `react-rating` component using the *yarn* package manager:

```bash
yarn add --save react-rating
```

or *npm*:

```bash
npm install --save react-rating
```

### Dependencies

The `react-rating` component [peer depends](https://docs.npmjs.com/files/package.json#peerdependencies) on the [React](http://facebook.github.io/react/) library.

You can install React using *yarn* or *npm* too:

```bash
yarn add --save react
```

## Usage

1. Import Rating Component

    ```javascript
    import Rating from 'react-rating'
    ```

2. Start using it

    Or with JSX:

    ```jsx
    <Rating />
    ```

## Properties

Property          | Type                                           | Default              | Description
---               | ---                                            | ---                  | ---
`start`           | *Number*                                       | 0                    | Range starting value.
`stop`            | *Number*                                       | 5                    | Range stop value.
`step`            | *Number*                                       | 1                    | Step increment (must be between *start* and *stop*).
`initialRate`     | *Number*                                       | 0                    | Initial rate value.
`emptyRate`       | *React Element*                                | Empty Star           | React Element
`fullRate`        | *React Element*                                | Full Star            | React element
`readonly`        | *Boolean*                                      | false                | Whether the rating can be modified or not.
`animateOnHover`  | *Boolean*                                      | false                | Whether to animate rate hovering or not.
`fractions`       | *Number*                                       | 1                    | Number of equal parts that make up a whole symbol.

## Callbacks

Callback      | Type                           | Description
---           | ---                            | ---
`onChange`    | rate => {}                     | Called when the selected rate is changed.
`onClick`     | (rate, event) => {}            | Called when a rate is clicked.
`onRate`      | rate => {}                     | Called when a rate is entered or left. When a rate is left it is called with `undefined`.

## License

[MIT License](https://github.com/filipposarzana/react-rating/blob/master/LICENSE.md)
