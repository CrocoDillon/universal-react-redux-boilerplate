const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      'react-hot-loader/patch',
      './src/client.js'
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015-webpack', 'stage-0'],
          plugins: ['react-hot-loader/babel']
        },
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'inline-source-map'
}

module.exports = config
