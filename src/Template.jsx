'use strict';

import React, { Component } from 'react';

class Template extends Component {
  render() {
    const getAppMarkup = () => {
          return {__html: this.props.markup};
        };

    return (
      <html>
        <head>
          <title>Hello world</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {this.props.css.map((css) => (<link rel="stylesheet" href={css} />))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={getAppMarkup()} />
          {this.props.js.map((js) => (<script src={js}></script>))}
        </body>
      </html>
    );
  }
}

export default Template;
