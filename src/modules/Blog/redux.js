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

const article = (state = {article: {title: null, body: null, slug: null}, loading: false}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      return {
        article: {...state.article},
        loading: true
      }
    case FETCH_ARTICLE_SUCCESS:
      return {
        article: action.response,
        loading: false
      }
  case FETCH_ARTICLE_FAILURE:
      return {
        article: null,
        loading: false
      }
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

export default reducer
