import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './modules/App'

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
