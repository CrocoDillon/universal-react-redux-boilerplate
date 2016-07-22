// @flow
import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { App, Home, Blog, NotFound } from './modules'

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="blog" component={ Blog } />
    <Route path="*" component={ NotFound } />
  </Route>
)

export default routes
