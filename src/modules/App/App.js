// @flow
import React, { Component } from 'react'

import styles from './App.scss'

class App extends Component {

  static displayName = 'App';

  render(): React$Element {
    return (
      <h1 className={ styles.App }>Universal React + Redux Boilerplate</h1>
    )
  }
}

export default App
