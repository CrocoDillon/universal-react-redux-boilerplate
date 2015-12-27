'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { match, RoutingContext } from 'react-router';

import Template from './Template';
import routes from './routes';

let js  = __PROD__ ? require('../dist/manifest.json').js  : ['/app.js'];
let css = __PROD__ ? require('../dist/manifest.json').css : [];

export const run = (location) => {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(500);
      } else if (redirectLocation) {
        let redirect = redirectLocation.pathname + redirectLocation.search;
        let status = 301;

        resolve({ redirect, status });
      } else if (renderProps) {
        let markup = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
        let response = '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(<Template markup={markup} js={js} css={css} />);
        let status = renderProps.routes.reduce((status, route) => (route.status || status), null);

        resolve({ response, status });
      } else {
        reject(404); // should never happen with the (wildcard) NotFound route
      }
    });
  });
};
