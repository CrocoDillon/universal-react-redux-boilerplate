'use strict';

const koa = require('koa');
const serve = require('koa-static');

const app = koa();

app.use(serve('public'));
app.use(serve('dist'));

app.listen(3000);
