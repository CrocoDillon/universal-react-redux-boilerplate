// @flow
import React, { PropTypes } from 'react'

// `getStyles` is to prevent FOUC in development
const getStyles = assets =>
  Object
    .keys(assets)
    .map(key => assets[key])
    .reduce((acc, { _style }) => {
      if (_style) {
        acc += _style
      }
      return acc
    }, '')

const Html = (props: Object): React$Element => {
  const { markup, assets: { styles, javascript, assets } } = props

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <title>Universal React + Redux Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {
          Object.keys(styles).map(key => (
            <link key={ key } rel="stylesheet" href={ styles[key] } />
          ))
        }
        <style>{ getStyles(assets) }</style>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={ { __html: markup } } />
        <script src={ javascript.app } />
      </body>
    </html>
  )
}

Html.displayName = 'Html'

Html.propTypes = {
  markup: PropTypes.string.isRequired,
  assets: PropTypes.shape({
    styles: PropTypes.objectOf(PropTypes.string).isRequired,
    javascript: PropTypes.objectOf(PropTypes.string).isRequired,
    assets: PropTypes.object.isRequired
  }).isRequired
}

export default Html
