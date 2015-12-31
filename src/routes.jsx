'use strict';

import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Home, Blog, BlogIndex, BlogArticle, NotFound } from './components';

const configureRoutes = (store) => {
  const connect = (fn) => (nextState, replaceState) => fn(store.dispatch, nextState, replaceState);

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/blog" component={Blog} onEnter={connect(Blog.onEnter)}>
        <IndexRoute component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogArticle} onEnter={connect(BlogArticle.onEnter)} />
      </Route>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
}

export { configureRoutes };
