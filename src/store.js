// @flow
import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducer'

const composedStore = compose(
  applyMiddleware(thunk),
  __CLIENT__ && window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const configureStore = (initialState: ?Object) => composedStore(reducer, initialState)

export default configureStore
