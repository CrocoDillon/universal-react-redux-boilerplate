// @flow
import React, { Component } from 'react'
import {renderRoutes} from 'react-router-config'

class App extends Component {

  static displayName = 'App';

  static propTypes = {
  };

  render() {
    const styles = require('./App.scss')
    const { route } = this.props
    return (
      <div className={ styles.container }>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

export default App
