// @flow
import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { App, Home, Blog, BlogIndex, BlogArticle, NotFound } from './modules'

// On server we want to fetch all data for the current route before rendering
const fetchData = store => (nextState, replace, callback) => {
  Promise.all(
    nextState.routes.map(route => {
      if (route.component.onEnter) {
        return route.component.onEnter(store, nextState)
      }
    })
  ).then(() => callback())
}

// On client all data for the current route is already in the store’s initial
// state so we only need to attach onEnter hooks for all route components for
// subsequent routes
const attachOnEnterHooks = store => ({ routes: [rootRoute] }) => {
  const attach = route => {
    if (route.component.onEnter) {
      route.onEnter = nextState => route.component.onEnter(store, nextState)
    }

    if (route.indexRoute) {
      attach(route.indexRoute)
    }
    if (route.childRoutes) {
      route.childRoutes.forEach(r => attach(r))
    }
  }

  attach(rootRoute)
}

const configureRoutes = (store: Object) => { // eslint-disable-line react/display-name
  const onEnter = __SERVER__ ? fetchData(store) : attachOnEnterHooks(store)

  return (
    <Route path="/" component={ App } onEnter={ onEnter }>
      <IndexRoute component={ Home } />
      <Route path="blog" component={ Blog }>
        <IndexRoute component={ BlogIndex } />
        <Route path=":slug" component={ BlogArticle } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Route>
  )
}

export default configureRoutes
