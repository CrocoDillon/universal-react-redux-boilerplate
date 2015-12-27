'use strict';

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Home, Blog, BlogIndex, BlogArticle, NotFound } from './components';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/blog" component={Blog}>
      <IndexRoute component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogArticle} />
    </Route>
    <Route path="*" component={NotFound} status={404} />
  </Route>
);

export default routes;
