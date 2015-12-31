'use strict';

import { combineReducers } from 'redux';

import { FETCH_ARTICLES, FETCH_ARTICLE, SHOW_ARTICLE } from '../constants/actions';

// Keeps track which article is currently visible (if any)
const currentReducer = (state = null, action) => {
  switch (action.type) {
  case SHOW_ARTICLE:
    return action.slug;
    break;
  }

  return state;
};

// Keeps track of which articles are being shown in the overview
const overviewReducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_ARTICLES:
    return action.articles.map(({ slug }) => (slug));
    break;
  }

  return state;
};

// Stores all articles as a flat map
const mapReducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_ARTICLES:
    let updates = action.articles.reduce((map, article) => {
      map[article.slug] = article;
      return map;
    }, {});

    return {
      ...state.map,
      ...updates
    };
    break;
  case FETCH_ARTICLE:
    if (!action.article) {
      return state;
    }

    return {
      ...state,
      [action.article.slug]: action.article
    };
    break;
  }

  return state;
};

const reducer = combineReducers({
  current: currentReducer,
  overview: overviewReducer,
  map: mapReducer
});

export default reducer;
