import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const composedStore = compose(
  applyMiddleware(thunk),
  __CLIENT__ && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const configureStore = (initialState) => {
  const store = composedStore(reducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
