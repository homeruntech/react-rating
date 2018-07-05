/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

const DOCS_DIR = path.join(__dirname, '..', 'docs')
const SOURCE_DIR = path.join(__dirname, '..', 'src')
const TEMPLATES_DIR = path.join(__dirname, '..', '.templates')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(TEMPLATES_DIR, 'index.html'),
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  devServer: {
    inline: true,
  },
  entry: path.join(TEMPLATES_DIR, 'index.js'),
  output: {
    filename: '[name].js',
    path: path.join(DOCS_DIR),
    publicPath: './',
  },
  mode: 'development',
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
      '@prontopro/react-rating': SOURCE_DIR,
    },
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    HtmlWebpackPluginConfig,
    new OpenBrowserPlugin(),
  ],
}
