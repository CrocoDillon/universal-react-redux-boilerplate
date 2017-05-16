import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import DataLoader from './DataLoader'
import configureStore from './store'

const store = configureStore(window.__INITIAL_STATE__)

if (__DEV__) {
  const { AppContainer } = require('react-hot-loader')
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store }>
        <BrowserRouter>
          <DataLoader />
        </BrowserRouter>
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
      <BrowserRouter>
        <DataLoader />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
  )
}
