// @flow
import React from 'react'
import { string, shape, bool } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'

import status from '../../../helpers/status'
import { fetchArticle, getArticle, getLoading } from '../redux'

export const BlogArticle = (props: Object) => {
  const { article, loading } = props

  if (!article && loading) {
    return (
      <article>
        <Helmet title="Loading..." />
        <h1>Loading...</h1>
      </article>
    )
  }

  if (!article) {
    status(404)

    return (
      <article>
        <Helmet title="Not Found" />
        <h1>Not Found</h1>
      </article>
    )
  }

  return (
    <article>
      <Helmet title={ article.title } />
      <h1>{ article.title }</h1>
      <div>{ article.body }</div>
    </article>
  )
}

BlogArticle.displayName = 'BlogArticle'

BlogArticle.propTypes = {
  article: shape({
    title: string.isRequired,
    body: string.isRequired
  }),
  loading: bool.isRequired
}

BlogArticle.fetchData = ({ dispatch }, { params }) => dispatch(fetchArticle(params.slug))

const mapStateToProps = (state, { match }) => ({
  article: getArticle(state, match.params.slug),
  loading: getLoading(state)
})

export default connect(mapStateToProps)(BlogArticle)
