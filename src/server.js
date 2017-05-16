/* global webpackTools */
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

import { Html } from './modules'
import DataLoader, { fetchData } from './DataLoader'
import configureStore from './store'
import { rewind } from './helpers/status'

const doctype = '<!DOCTYPE html>'

export const render = location => {
  const store = configureStore()

  return fetchData(store, location).then(() => {
    const context = {}
    const assets = webpackTools.assets()
    const markup = ReactDOMServer.renderToString(
      <Provider store={ store }>
        <StaticRouter location={ location } context={ context }>
          <DataLoader />
        </StaticRouter>
      </Provider>
    )
    const state = store.getState()
    const helmet = Helmet.rewind()

    if (context.url) {
      const status = 301
      const redirect = context.url
      return { status, redirect }
    }

    const status = rewind()
    const html = ReactDOMServer.renderToStaticMarkup(<Html assets={ assets } markup={ markup } state={ state } helmet={ helmet } />)
    const body = doctype + html

    return { status, body }
  })
}

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
