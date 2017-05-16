import { Component } from 'react'
import { object } from 'prop-types'
import { withRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'

import routes from './routes'

export const fetchData = (store, location) => {
  const branch = matchRoutes(routes, location)

  const promises = branch.map(({ route, match }) => {
    if (route.component.fetchData) {
      return route.component.fetchData(store, match)
    }
  })

  return Promise.all(promises)
}

class DataLoader extends Component {

  static displayName = 'DataLoader';

  static contextTypes = {
    store: object
  };

  static propTypes = {
    location: object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    const navigated = nextProps.location !== this.props.location

    if (navigated) {
      const { store } = this.context
      fetchData(store, nextProps.location.pathname)
    }
  }

  render() {
    return renderRoutes(routes)
  }
}

export default withRouter(DataLoader)
