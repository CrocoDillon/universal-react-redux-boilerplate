/* global webpackTools */
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router'
import { Provider } from 'react-redux'
import Helmet from 'react-helmet'

import { Html } from './modules'
import configureStore from './store'
import configureRoutes from './routes'
import { rewind } from './helpers/status'
import { renderRoutes, matchRoutes } from 'react-router-config'

const store = configureStore()
const routes = configureRoutes(store)

const fetchBranchData = (location) => {
  const branch = matchRoutes(routes, location)
  const promises = branch.map(({ route, match }) => {
    var promise = null
    if(route.fetchData) {
      return route.fetchData(store, match)
    } else {
      return Promise.resolve(null)
    }
  })
  console.log(promises)
  return Promise.all(promises)
}

export const render = location => new Promise((resolve, reject) => {

  fetchBranchData(location).then(data => {
    console.log("then fetchBranchData location: " + location)
    console.log(" data: " + JSON.stringify(data, null, ' '))
    const context = {}
    const markup = ReactDOMServer.renderToString(
      <Provider store={ store }>
        <StaticRouter context={context} location={location}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )
    if (context.url) {
      resolve({ status: 301, redirect: context.url })
    } else {
      const assets = webpackTools.assets()
      const state = store.getState()
      console.log("state: " + JSON.stringify(state, null, ' '))
      const helmet = Helmet.rewind()
      const status = rewind()
      const doctype = '<!DOCTYPE html>'
      const html = ReactDOMServer.renderToStaticMarkup(<Html assets={ assets } markup={ markup } state={ state } helmet={ helmet } />)
      const body = doctype + html
      resolve({ status, body })
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
