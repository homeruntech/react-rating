const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies

const EXAMPLES_DIR = path.join(__dirname, '..', '.examples')
const SOURCE_DIR = path.join(__dirname, '..', 'src')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(EXAMPLES_DIR, 'index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: path.join(EXAMPLES_DIR, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.join(EXAMPLES_DIR),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  resolve: {
    alias: {
      '@prontopro/awesome-react-rating': SOURCE_DIR,
    },
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared'),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    HtmlWebpackPluginConfig,
  ],
}
