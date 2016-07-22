// @flow
import React, { Component, PropTypes } from 'react'

import Header from './components/Header'

class App extends Component {

  static displayName = 'App';

  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const styles = require('./App.scss')

    const { children } = this.props

    return (
      <div className={ styles.container }>
        <Header />
        { children }
      </div>
    )
  }
}

export default App
