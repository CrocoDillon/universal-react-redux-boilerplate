'use strict';

require('./config');

const koa = require('koa');
const serve = require('koa-static');

const app = koa();

if (__DEV__) {
  require('./webpack.server')(app);
  app.use(serve('public'));
}

if (__PROD__) {
  app.use(serve('dist'));
}

app.listen(3000);
