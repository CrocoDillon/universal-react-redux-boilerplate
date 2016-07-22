// @flow
import React from 'react'
import Helmet from 'react-helmet'

import status from '../../helpers/status'

const NotFound = () => {
  status(404)

  return (
    <main>
      <Helmet title="Not Found" />
      <h1>Not Found</h1>
    </main>
  )
}

NotFound.displayName = 'NotFound'

export default NotFound
