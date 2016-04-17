import Koa from 'koa'
import serve from 'koa-static'

import { render } from '../src/server'

const server = new Koa()

server.use(serve('dist'))

server.use(async ctx => {
  const { body } = await render()
  ctx.body = body
})

export default server
