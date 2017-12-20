const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies

const DIST_DIR = path.join(__dirname, '..', 'dist')
const SOURCE_DIR = path.join(__dirname, '..', 'src')

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

module.exports = {
  entry: {
    'react-rating': path.join(SOURCE_DIR, 'index.js'),
    'react-rating.min': path.join(SOURCE_DIR, 'index.js'),
  },
  externals: {
    react: REACT_EXTERNAL,
    'react-dom': REACT_DOM_EXTERNAL,
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: DIST_DIR,
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactRating',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
  ],
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
}
