/* eslint global-require: 0 */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './modules/App'

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader')

  const render = () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('app')
    )
  }
  render()

  // Hot reloading on the client
  if (module.hot) {
    module.hot.accept('./modules/App', render)
  }
} else {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
}
