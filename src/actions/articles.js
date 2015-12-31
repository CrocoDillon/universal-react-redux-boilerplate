'use strict';

import { FETCH_ARTICLES, FETCH_ARTICLE, SHOW_ARTICLE } from '../constants/actions';

import fetch from '../utils/fetch';

const fetchArticles = () => ({
  type: FETCH_ARTICLES,
  articles: fetch('/api/articles?fields=slug,title')
});

const fetchArticle = (slug) => ({
  type: FETCH_ARTICLE,
  article: fetch('/api/articles/' + slug)
});

const showArticle = (slug) => ({
  type: SHOW_ARTICLE,
  slug: slug
});

export { fetchArticles, fetchArticle, showArticle };
