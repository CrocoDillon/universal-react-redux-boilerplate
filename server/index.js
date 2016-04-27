import Koa from 'koa'
import serve from 'koa-static'

import webpack from '../webpack.server'

const server = new Koa()

webpack(server)

server.use(serve('dist'))

server.use(async ctx => {
  // Dynamic require enables hot reloading on the server
  const { render } = require('../src/server') // eslint-disable-line
  const { body } = await render()
  ctx.body = body
})

export default server
