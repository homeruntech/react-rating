/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')

const DIST_DIR = path.join(__dirname, '..', 'dist')
const SOURCE_DIR = path.join(__dirname, '..', 'src')

const PROP_TYPES_EXTERNAL = {
  root: 'PropTypes',
  commonjs2: 'prop-types',
  commonjs: 'prop-types',
  amd: 'prop-types',
}

const REACT_EXTERNAL = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}

const REACT_DOM_EXTERNAL = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
}

const STYLED_COMPONENTS_EXTERNAL = {
  root: 'StyledComponents',
  commonjs2: 'styled-components',
  commonjs: 'styled-components',
  amd: 'styled-components',
}

module.exports = {
  entry: {
    'react-rating': path.join(SOURCE_DIR, 'index.js'),
    'react-rating.min': path.join(SOURCE_DIR, 'index.js'),
  },
  externals: {
    'prop-types': PROP_TYPES_EXTERNAL,
    react: REACT_EXTERNAL,
    'react-dom': REACT_DOM_EXTERNAL,
    'styled-components': STYLED_COMPONENTS_EXTERNAL,
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: DIST_DIR,
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactRating',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      include: /\.min\.js$/,
      minimize: true,
      sourceMap: true,
    }),
  ],
}
