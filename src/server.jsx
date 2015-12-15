'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Template from './Template';
import HelloWorld from './components/HelloWorld';

let js  = __PROD__ ? require('../dist/manifest.json').js  : ['/app.js'];
let css = __PROD__ ? require('../dist/manifest.json').css : [];

export const run = (callback) => {
  let markup = ReactDOMServer.renderToString(<HelloWorld />);

  callback(
    '<!DOCTYPE html>' +
    ReactDOMServer.renderToStaticMarkup(<Template markup={markup} js={js} css={css} />)
  );
};
