import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { compiler } from '../webpack.server'

import App, { Html } from './modules/App'

const doctype = '<!DOCTYPE html>'

export const render = () => new Promise((resolve, reject) => {
  try {
    const markup = ReactDOMServer.renderToString(<App />)
    const html   = ReactDOMServer.renderToStaticMarkup(<Html markup={ markup } />)
    const body   = doctype + html

    resolve({ body })
  } catch (e) {
    reject(e)
  }
})

// Hot reloading on the server
compiler.plugin('done', () => {
  Object
    .keys(require.cache)
    .filter(module => module.startsWith(__dirname))
    .forEach(module => delete require.cache[module])
})
