const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /(node_modules|__stories__)/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }],
  },
  externals: {
    react: 'commonjs react',
  },
  target: 'node',
}
