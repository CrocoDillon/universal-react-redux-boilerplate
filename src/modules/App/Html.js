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

const getInitialState = state => {
  const json = JSON.stringify(state).replace('</', '<\\/')
  return `window.__INITIAL_STATE__=${ json }`
}

const Html = (props: Object) => {
  const { markup, state, assets: { styles, javascript, assets }, helmet } = props

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        { helmet && helmet.title.toComponent() }
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {
          Object.keys(styles).map(key => (
            <link key={ key } rel="stylesheet" href={ styles[key] } />
          ))
        }
        { __DEV__ && <style dangerouslySetInnerHTML={ { __html: getStyles(assets) } } /> }
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={ { __html: markup } } />
        <script dangerouslySetInnerHTML={ { __html: getInitialState(state) } } />
        <script src={ javascript.app } />
      </body>
    </html>
  )
}

Html.displayName = 'Html'

Html.propTypes = {
  markup: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
  assets: PropTypes.shape({
    styles: PropTypes.objectOf(PropTypes.string).isRequired,
    javascript: PropTypes.objectOf(PropTypes.string).isRequired,
    assets: PropTypes.object.isRequired
  }).isRequired,
  helmet: PropTypes.object
}

export default Html
