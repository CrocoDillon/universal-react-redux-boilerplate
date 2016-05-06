const path = require('path')
const webpack = require('webpack')

const autoprefixer = require('autoprefixer')

const WebpackToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackToolsConfig = require('./webpack.isomorphic.tools')

const config = {
  context: __dirname,
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
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css?modules&localIdentName=[local]__[hash:base64:4]&importLoaders=1&sourceMap',
          'postcss',
          'sass?sourceMap'
        ]
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WebpackToolsPlugin(webpackToolsConfig).development()
  ],
  devtool: 'inline-source-map'
}

module.exports = config
