/* global webpackTools */
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { RouterContext, match } from 'react-router'
import Helmet from 'react-helmet'

import { Html } from './modules'
import routes from './routes'
import { rewind } from './helpers/status'

const doctype = '<!DOCTYPE html>'

export const render = location => new Promise((resolve, reject) => {
  match({ routes, location }, (err, redirect, props) => {
    if (err) {
      reject(err)
    } else if (redirect) {
      const status = 301
      redirect = redirect.pathname + redirect.search
      resolve({ status, redirect })
    } else if (props) {
      const assets = webpackTools.assets()
      const markup = ReactDOMServer.renderToString(<RouterContext { ...props } />)
      const helmet = Helmet.rewind()
      const status = rewind()
      const html = ReactDOMServer.renderToStaticMarkup(<Html assets={ assets } markup={ markup } helmet={ helmet } />)
      const body = doctype + html

      resolve({ status, body })
    } else {
      // Should never happen ¯\_(ツ)_/¯
      const e = new Error('Not Found')
      e.status = 404
      reject(e)
    }
  })
})

if (__DEV__) {
  // Hot reloading on the server
  const { compiler } = require('../webpack.server')

  compiler.plugin('done', () => {
    Object
      .keys(require.cache)
      .filter(module => module.startsWith(__dirname))
      .forEach(module => delete require.cache[module])
    // Refresh Webpack assets
    webpackTools.refresh()
  })
}
