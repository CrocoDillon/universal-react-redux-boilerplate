import { combineReducers } from 'redux'

import { reducer as blog } from './modules/Blog'

const reducer = combineReducers({
  blog
})

export default reducer
