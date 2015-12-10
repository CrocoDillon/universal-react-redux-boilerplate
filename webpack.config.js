'use strict';

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

const config = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/app.jsx'
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'eval'
};

module.exports = config;
