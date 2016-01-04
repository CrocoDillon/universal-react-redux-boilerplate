'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import { ensureIdleState } from 'redux-promises';

import Template from './Template';
import { configureStore } from './store';
import { configureRoutes } from './routes';

let js  = __PROD__ ? require('../dist/manifest.json').js  : ['/app.js'];
let css = __PROD__ ? require('../dist/manifest.json').css : [];

export const run = (location) => {
  return new Promise((resolve, reject) => {
    let store = configureStore();
    let routes = configureRoutes(store);

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(500);
      } else if (redirectLocation) {
        let redirect = redirectLocation.pathname + redirectLocation.search;
        let status = 301;

        resolve({ redirect, status });
      } else if (renderProps) {
        ensureIdleState(store).then(() => {
          let markup = ReactDOMServer.renderToString(
            <Provider store={store}>
              <RoutingContext {...renderProps} />
            </Provider>
          );
          let state = store.getState();

          let response = '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(<Template markup={markup} state={state} js={js} css={css} />);
          let status = renderProps.routes.reduce((status, route) => (route.status || status), null);
          resolve({ response, status });
        });
      } else {
        reject(404); // should never happen with the (wildcard) NotFound route
      }
    });
  });
};
