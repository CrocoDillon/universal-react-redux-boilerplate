'use strict';

require('./config');

const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');

let config = {};

if (__DEV__) {
  config = {
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
}

if (__PROD__) {
  const fs = require('fs');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

  const reactPath = path.resolve(__dirname, 'node_modules/react/dist/react.min.js');
  const reactDOMPath = path.resolve(__dirname, 'node_modules/react-dom/dist/react-dom.min.js');

  config = {
    entry: {
      app: './src/app.jsx'
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        'react': reactPath,
        'react-dom': reactDOMPath
      }
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'app.[chunkhash].js',
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
          loader: ExtractTextPlugin.extract('style', ['css?sourceMap', 'postcss', 'sass?sourceMap'])
        }
      ],
      noParse: [reactPath]
    },
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ],
    plugins: [
      new ExtractTextPlugin('app.[contenthash:20].css'),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      function () {
        this.plugin('done', (stats) => {
          const manifest = {
            js: [],
            css: []
          };
          const publicPath = '/';

          stats.toJson().assetsByChunkName.app.forEach((asset) => {
            if (/\.js$/.test(asset)) {
              manifest.js.push(publicPath + asset);
            }
            if (/\.css$/.test(asset)) {
              manifest.css.push(publicPath + asset);
            }
          });

          fs.writeFileSync(
            path.join(__dirname, 'dist/manifest.json'),
            JSON.stringify(manifest, null, 2)
          );
        });
      }
    ],
    devtool: 'source-map'
  };
}

module.exports = config;
