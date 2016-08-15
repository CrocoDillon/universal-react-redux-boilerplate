import { combineReducers } from 'redux'
import fetch from 'isomorphic-fetch'

const FETCH_ARTICLES_REQUEST = 'blog/FETCH_ARTICLES_REQUEST'
const FETCH_ARTICLES_SUCCESS = 'blog/FETCH_ARTICLES_SUCCESS'
const FETCH_ARTICLES_FAILURE = 'blog/FETCH_ARTICLES_FAILURE'

const FETCH_ARTICLE_REQUEST = 'blog/FETCH_ARTICLE_REQUEST'
const FETCH_ARTICLE_SUCCESS = 'blog/FETCH_ARTICLE_SUCCESS'
const FETCH_ARTICLE_FAILURE = 'blog/FETCH_ARTICLE_FAILURE'

const articles = (state = [], action) => {
  switch (action.type) {
  case FETCH_ARTICLES_SUCCESS:
    return action.response
  }

  return state
}

const article = (state = null, action) => {
  switch (action.type) {
  case FETCH_ARTICLE_REQUEST:
    return 'loading'
  case FETCH_ARTICLE_SUCCESS:
    return action.response
  case FETCH_ARTICLE_FAILURE:
    return null
  }

  return state
}

const reducer = combineReducers({
  articles,
  article
})

const fetchAction = (url, types) => dispatch => {
  const [REQUEST, SUCCESS, FAILURE] = types

  if (__SERVER__) {
    url = `http://localhost:3000${ url }`
  }

  dispatch({
    type: REQUEST
  })

  return fetch(url)
    .then(
      response => response.json()
    )
    .then(
      response => dispatch({
        type: SUCCESS,
        response
      }),
      error => dispatch({
        type: FAILURE,
        message: error.message
      })
    )
}

export const fetchArticles = () => fetchAction(
  '/api/articles',
  [FETCH_ARTICLES_REQUEST, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_FAILURE]
)

export const fetchArticle = slug => fetchAction(
  `/api/articles/${ slug }`,
  [FETCH_ARTICLE_REQUEST, FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_FAILURE]
)

export const getArticles = state => state.blog.articles

export const getArticle = (state, slug) => {
  const { article } = state.blog // eslint-disable-line no-shadow

  return article && article.slug === slug ? article : null
}

export const getLoading = state => state.blog.article === 'loading'

export default reducer
