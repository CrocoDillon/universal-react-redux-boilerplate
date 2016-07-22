import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader')

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <Router routes={ routes } history={ browserHistory } />
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
    <Router routes={ routes } history={ browserHistory } />,
    document.getElementById('app')
  )
}
