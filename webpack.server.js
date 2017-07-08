import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import config from './webpack.config'

export const compiler = webpack(config)

// Based on: https://github.com/dayAlone/koa-webpack-hot-middleware/blob/master/index.js
function applyExpressMiddleware(fn, req, res) {
  const originalEnd = res.end

  return new Promise(resolve => {
    res.end = function (...args) {
      originalEnd.apply(this, args)
      resolve(false)
    }
    fn(req, res, () => {
      resolve(true)
    })
  })
}

const devMiddleware = webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})

export default app => {
  app.use(async (ctx, next) => {
    /* eslint prefer-const: 0 */
    let hasNext = await applyExpressMiddleware(devMiddleware, ctx.req, {
      end(content) {
        ctx.body = content
      },
      setHeader(...args) {
        ctx.set(...args)
      }
    })

    if (hasNext) { await next() }
  })

  app.use(async (ctx, next) => {
    /* eslint prefer-const: 0 */
    let hasNext = await applyExpressMiddleware(webpackHotMiddleware(compiler), ctx.req, ctx.res)

    if (hasNext) { await next() }
  })
}
