import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store'
import configureRoutes from './routes'

const history = createHistory()
const store = configureStore(window.__INITIAL_STATE__, history)
const routes = configureRoutes()

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader')
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <ConnectedRouter history={history}>
          {renderRoutes(routes)}
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
  // Hot reloading on the client
  if (module.hot) {
    module.hot.accept()
  }
} else {
  ReactDOM.render(
    <Provider store={ store }>
      <ConnectedRouter history={history}>
        {renderRoutes(routes)}
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
  )
}
