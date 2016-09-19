import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from './store'
import configureRoutes from './routes'

const store = configureStore(window.__INITIAL_STATE__)
const routes = configureRoutes(store)

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader')

  const render = () => {
    const routes = require('./routes')(store) // eslint-disable-line no-shadow

    ReactDOM.render(
      <AppContainer>
        <Provider store={ store }>
          <Router routes={ routes } history={ browserHistory } />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    )
  }
  render()

  // Hot reloading on the client
  if (module.hot) {
    module.hot.accept('./routes', render)
  }
} else {
  ReactDOM.render(
    <Provider store={ store }>
      <Router routes={ routes } history={ browserHistory } />
    </Provider>,
    document.getElementById('app')
  )
}
