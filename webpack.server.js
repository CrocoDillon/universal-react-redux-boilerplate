'use strict';

const webpack = require('webpack');

const config = require('./webpack.config');
const transpiler = webpack(config);
const devMiddleware = require('webpack-dev-middleware')(transpiler, {
  noInfo: true,
  publicPath: config.output.publicPath
});
const hotMiddleware = require('webpack-hot-middleware')(transpiler);

// connect bridges the gap between connect middleware and Koa...
// ...in a very hacky way 😓
const connect = (middleware, mockResponse) => {
  return function* (next) {
    let runNext = yield (done) => {
      let req = this.req;
      let res = mockResponse ? {
        end: (content) => {
          this.body = content;
        },
        setHeader: (field, value) => {
          this.set(field, value);
        }
      } : this.res;
      let oldResEnd = res.end;

      res.end = function () {
        oldResEnd.apply(this, arguments);
        done(null, false);
      };

      middleware(req, res, () => {
        done(null, true);
      });
    };

    if (runNext && next) {
      yield* next;
    }
  };
};

module.exports = (app) => {
  app.use(connect(devMiddleware, true));
  app.use(connect(hotMiddleware));
};
