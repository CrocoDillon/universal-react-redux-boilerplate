import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as blog } from './modules/Blog'

const reducer = combineReducers({
  blog,
  routing: routerReducer
})

export default reducer
