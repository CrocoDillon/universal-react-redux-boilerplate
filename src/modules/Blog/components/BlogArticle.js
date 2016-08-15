// @flow
import React, { PropTypes } from 'react'
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
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }),
  loading: PropTypes.bool.isRequired
}

BlogArticle.onEnter = ({ dispatch }, { params }) => dispatch(fetchArticle(params.slug))

const mapStateToProps = (state, { params }) => ({
  article: getArticle(state, params.slug),
  loading: getLoading(state)
})

export default connect(mapStateToProps)(BlogArticle)
