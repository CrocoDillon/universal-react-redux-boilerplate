'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import { configureStore } from './store';
import { configureRoutes } from './routes';

const initialState = window.__INITIAL_STATE__;

const history = createBrowserHistory();
const store = configureStore(initialState);
const routes = configureRoutes(store);

syncReduxAndRouter(history, store, (state) => (state.router));

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('app')
);
