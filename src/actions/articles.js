'use strict';

import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE
} from '../constants/actions';

import fetch from '../utils/fetch';

const fetchArticles = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ARTICLES });

  return fetch('/api/articles?fields=slug,title').then(
    (result) => dispatch({ type: FETCH_ARTICLES_SUCCESS, articles: result }),
    (error) => dispatch({ type: FETCH_ARTICLES_FAILURE })
  );
};

const fetchArticle = (slug) => (dispatch, getState) => {
  dispatch({ type: FETCH_ARTICLE });

  return fetch('/api/articles/' + slug).then(
    (result) => dispatch({ type: FETCH_ARTICLE_SUCCESS, article: result }),
    (error) => dispatch({ type: FETCH_ARTICLE_FAILURE })
  );
};

export { fetchArticles, fetchArticle };
