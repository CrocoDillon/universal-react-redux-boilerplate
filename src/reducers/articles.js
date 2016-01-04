'use strict';

import { FETCH_ARTICLES_SUCCESS, FETCH_ARTICLE_SUCCESS } from '../constants/actions';

// Stores all articles as a flat map
const reducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_ARTICLES_SUCCESS:
    let updates = action.articles.reduce((acc, article) => {
      acc[article.slug] = article;
      return acc;
    }, {});

    return {
      ...state,
      ...updates
    };
  case FETCH_ARTICLE_SUCCESS:
    return {
      ...state,
      [action.article.slug]: action.article
    };
  }

  return state;
};

export default reducer;
