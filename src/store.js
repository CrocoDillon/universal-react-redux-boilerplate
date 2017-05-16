import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducer'

const composedStore = (history) => compose(
  applyMiddleware(thunk),
  applyMiddleware(routerMiddleware(history)),
  __CLIENT__ && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const configureStore = (initialState, history) => {
  const store = composedStore(history)(reducer, initialState)
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    })
  }
  return store
}

export default configureStore
