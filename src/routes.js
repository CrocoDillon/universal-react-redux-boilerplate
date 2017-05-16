// @flow
import { App, Home, Blog, BlogIndex, BlogArticle, NotFound } from './modules'

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/blog',
        component: Blog,
        routes: [
          {
            path: '/blog',
            component: BlogIndex,
            exact: true
          },
          {
            path: '/blog/:slug',
            component: BlogArticle,
            exact: true
          },
          {
            component: NotFound
          }
        ]
      },
      {
        component: NotFound
      }
    ]
  }
]

export default routes
