// @flow
import React, { Component } from 'react'
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config'

import Header from './components/Header'

class App extends Component {

  static displayName = 'App';

  static propTypes = {
    route: object.isRequired
  };

  render() {
    const styles = require('./App.scss')

    const { route } = this.props

    return (
      <div className={ styles.container }>
        <Header />
        { renderRoutes(route.routes) }
      </div>
    )
  }
}

export default App
