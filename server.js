'use strict';

const koa = require('koa');
const serve = require('koa-static');

const app = koa();

app.use(serve('public'));
app.use(serve('node_modules/react/dist'));
app.use(serve('node_modules/react-dom/dist'));

app.listen(3000);
