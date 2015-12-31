'use strict';

import { compose, createStore } from 'redux';

import reducer from './reducers';

const composedStore = compose(
  typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = (initialState) => (
  composedStore(reducer, initialState)
);

export { configureStore };
