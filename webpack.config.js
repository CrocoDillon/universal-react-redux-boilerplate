'use strict' // eslint-disable-line strict

const path = require('path')
const webpack = require('webpack')

const autoprefixer = require('autoprefixer')

const WebpackToolsPlugin = require('webpack-isomorphic-tools/plugin')
const webpackToolsConfig = require('./webpack.isomorphic.tools')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Globals
const NODE_ENV = process.env.NODE_ENV || 'development'
const __DEV__ = NODE_ENV !== 'production'
const __PROD__ = NODE_ENV === 'production'
const __SERVER__ = false
const __CLIENT__ = true

let config

if (__DEV__) {
  config = {
    context: path.join(__dirname, 'src'),
    entry: {
      app: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        './client.js'
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0'],
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
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions']
            })
          ],
          context: __dirname
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        __DEV__,
        __PROD__,
        __SERVER__,
        __CLIENT__
      }),
      new WebpackToolsPlugin(webpackToolsConfig).development(__DEV__)
    ],
    devtool: 'inline-source-map'
  }
}

if (__PROD__) {
  config = {
    context: path.join(__dirname, 'src'),
    entry: {
      app: './client.js'
    },
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.[chunkhash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['react', ['es2015', { modules: false }], 'stage-0']
          },
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: [
              'css?modules&localIdentName=[hash:base64:4]&importLoaders=1&sourceMap',
              'postcss',
              'sass?sourceMap'
            ]
          })
        }
      ]
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        test: /\.css$/,
        options: {
          postcss: [
            autoprefixer({
              browsers: ['last 2 versions']
            })
          ],
          context: __dirname
        }
      }),
      new ExtractTextPlugin('app.[contenthash:20].css'),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__,
        __PROD__,
        __SERVER__,
        __CLIENT__
      }),
      new WebpackToolsPlugin(webpackToolsConfig).development(__DEV__)
    ],
    devtool: 'source-map'
  }
}

module.exports = config
