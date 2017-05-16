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
  case FETCH_ARTICLES_REQUEST:
    console.log("FETCH_ARTICLESSS_REQUEST")
    return state
  case FETCH_ARTICLES_SUCCESS:
    console.log("FETCH_ARTICLESSS_SUCCESS")
    return action.response
  }
  return state
}

const article = (state = {article: {title: null, body: null, slug: null}, loading: false}, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_REQUEST:
      console.log("FETCH_ARTICLE_REQUEST")
      // TODO BUG during server rendering the static fetchData is called
      // the promise resolve and then the page is render
      // then componentWillMount function is called so the fetch to article is done a second time
      // I had to keep state.article here otherwise article will be null by the time the page is send to the client.
      // The same problem happen with loading which is true on the __INITIAL_STATE__ of the client which cause the error
      // generated is different on the client or server:
      // (client) 1 data-reactid="27">Loading...</h1></art
      // (server) 1 data-reactid="27">Alice in Wonderland<
      // ----------
      // Now why my componentDidMount of Blog is not called during server rendering while componentDidMount of BlogArticle is called?
      return {
        article: {...state.article},
        loading: true
      }
    case FETCH_ARTICLE_SUCCESS:
      console.log("FETCH_ARTICLE_SUCCESS")
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
  console.log("fetch url: "+ url)
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
    ).then(
       () => (Promise.resolve())
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
