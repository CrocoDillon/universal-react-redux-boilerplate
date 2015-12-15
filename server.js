'use strict';

const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');

const server = koa();
const app = require('./src/server');

router.get('/', function* (next) {
  app.run((body) => {
    this.body = body;
  });
});
server.use(router.routes());
server.use(router.allowedMethods());

if (__DEV__) {
  require('./webpack.server')(server);
}

if (__PROD__) {
  server.use(serve('dist'));
}

module.exports = server;
