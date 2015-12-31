'use strict';

import React, { Component } from 'react';

class Template extends Component {
  render() {
    const getAppMarkup = () => {
      return {__html: this.props.markup};
    };
    const getAppState = () => {
      let json = JSON.stringify(this.props.state).replace('</', '<\\/');
      return {__html: `window.__INITIAL_STATE__=${json}`};
    };

    return (
      <html>
        <head>
          <title>Universal React + Redux Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.css.map((css, i) => (<link key={i} rel="stylesheet" href={css} />))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={getAppMarkup()} />
          <script dangerouslySetInnerHTML={getAppState()} />
          {this.props.js.map((js, i) => (<script key={i} src={js}></script>))}
        </body>
      </html>
    );
  }
}

export default Template;
