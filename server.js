'use strict';

const koa = require('koa');
const router = require('koa-router')();
const serve = require('koa-static');

const server = koa();
const app = require('./src/server');

if (__DEV__) {
  require('./webpack.server')(server);
}

if (__PROD__) {
  server.use(serve('dist'));
}

router.get('*', function* () {
  yield app.run(this.path).then(({ response, redirect, status }) => {
    if (status) {
      this.status = status;
    }

    if (response) {
      this.body = response;
    } else if (redirect) {
      this.redirect(redirect);
    }
  }).catch((status = 500) => {
    this.status = status;
  });
});
server.use(router.routes());
server.use(router.allowedMethods());

module.exports = server;
