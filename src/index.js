import Koa from 'koa'

import api from './api'

const server = new Koa()

if (__DEV__) {
  const webpack = require('../webpack.server').default
  webpack(server)
} else {
  const serve = require('koa-static')
  server.use(serve('dist'))
}

server.use(api)

server.use(async ctx => {
  // Dynamic require enables hot reloading on the server
  const { render } = require('./server')
  const { status, redirect, body } = await render(ctx.url)

  ctx.status = status

  if (redirect) {
    ctx.redirect(redirect)
  } else {
    ctx.body = body
  }
})

export default server
