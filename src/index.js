/* eslint global-require: 0 */
import Koa from 'koa'

const server = new Koa()

if (__DEV__) {
  const webpack = require('../webpack.server').default
  webpack(server)
} else {
  const serve = require('koa-static')
  server.use(serve('dist'))
}

server.use(async ctx => {
  // Dynamic require enables hot reloading on the server
  const { render } = require('./server')
  const { body } = await render()
  ctx.body = body
})

export default server
