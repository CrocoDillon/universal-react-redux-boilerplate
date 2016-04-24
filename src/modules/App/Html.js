// @flow
import React, { PropTypes } from 'react'

const Html = (props: Object): React$Element => {
  const { markup } = props

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Universal React + Redux Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={ { __html: markup } } />
        <script src="/app.js" />
      </body>
    </html>
  )
}

Html.displayName = 'Html'

Html.propTypes = {
  markup: PropTypes.string.isRequired
}

export default Html
