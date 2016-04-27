import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './webpack.config'

export const compiler = webpack(config)

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})
const hotMiddleware = webpackHotMiddleware(compiler)

// connect bridges the gap between connect middleware and Koa...
// ...in a very hacky way 😓
const connect = (middleware, mockResponse) => (ctx, next) =>
  new Promise((resolve, reject) => {
    const req = ctx.req
    const res = mockResponse ? {
      get statusCode() {
        return ctx.status
      },
      set statusCode(status) {
        ctx.status = status
      },
      setHeader: (field, value) => {
        ctx.set(field, value)
      },
      end: content => {
        ctx.body = content
        resolve()
      }
    } : ctx.res

    middleware(req, res, () => {
      next().then(resolve, reject)
    })
  })

export default app => {
  app.use(connect(devMiddleware, true))
  app.use(connect(hotMiddleware))
}
