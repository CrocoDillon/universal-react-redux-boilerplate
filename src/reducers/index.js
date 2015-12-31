'use strict';

import { combineReducers } from 'redux';
import { routeReducer as router } from 'redux-simple-router';

import articles from './articles';

const reducer = combineReducers({
  router,
  articles
});

export default reducer;
