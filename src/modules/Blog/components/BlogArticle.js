// @flow
import React from 'react'
import { string, shape, bool } from 'prop-types'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import status from '../../../helpers/status'
import { fetchArticle as fetchArticleImport } from '../redux'
import { bindActionCreators } from 'redux';

class BlogArticle extends React.Component {

  componentWillMount() {
    const { fetchArticle, match } = this.props
    console.log("--- componentWillMount FETCH")
    fetchArticle(match.params.slug)
  }

  componentWillReceiveProps(nProps) {
    const { fetchArticle, match, article: {article, loading} } = nProps
    if (!!article && article.slug && !loading && match.params.slug != article.slug) {
      console.log("--- componentWillReceiveProps FETCH")
      console.log(nProps)
      fetchArticle(match.params.slug)
   }
  }

  render() {
    const { article: {article, loading} } = this.props

    if (loading) {
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
}

BlogArticle.fetchData = (store, match) => {
  console.log("--- static fetchData fetchArticleImport FETCH")
  return store.dispatch(fetchArticleImport(match.params.slug))
}

BlogArticle.displayName = 'BlogArticle'

BlogArticle.propTypes = {
  article: shape({
    article: shape({
      title: string.isRequired,
      slug: string.isRequired,
      body: string.isRequired
    }),
    loading: bool.isRequired
  })
}

const mapStateToProps = (state, { match }) => ({
  article: state.blog.article
})

export default connect(mapStateToProps, (dispatch) => bindActionCreators({fetchArticle: fetchArticleImport}, dispatch))(BlogArticle)
