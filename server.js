'use strict';

const koa = require('koa');
const serve = require('koa-static');

const app = koa();

require('./webpack.server')(app);

app.use(serve('public'));
app.use(serve('dist'));

app.listen(3000);
