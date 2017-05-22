// @flow
// TODO NotFount
import { App, Home, Blog, Header, BlogArticle, NotFound } from './modules'

const configureRoutes = (store) => ([
    { component: App,
      routes: [
        {
          path: '/',
          component: Header,
          routes: [
            {
              path: '/blog',
              component: Blog,
              fetchData: (store, match) => (Blog.fetchData(store, match)),
              routes: [
                {
                  path: '/blog/:slug',
                  component: BlogArticle,
                  fetchData: (store, match) => (BlogArticle.fetchData(store, match))
                }
              ]
            }
          ]
        },
        {
          path: '/',
          component: Home,
          exact: true
        }
      ]
    }
  ]
)

export default configureRoutes
