'use strict';

import { compose, applyMiddleware, createStore } from 'redux';
import { createMiddleware } from 'redux-promises';

import reducer from './reducers';

const composedStore = compose(
  applyMiddleware(createMiddleware()),
  typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = (initialState) => (
  composedStore(reducer, initialState)
);

export { configureStore };
