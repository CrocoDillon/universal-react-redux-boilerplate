// @flow
import React from 'react'
import { string, shape, element, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Route } from 'react-router-dom'
import { fetchArticles } from './redux'
import {renderRoutes} from 'react-router-config'

class Blog extends React.Component {

  // TODO double rendering is happening on server-side first and then redone on client side
  componentDidMount() {
    this.props.fetchArticles()
  }

  render() {
    const styles = require('./Blog.scss')
    const { articles, route } = this.props
    return (
      <div className={ styles.Blog }>
        <aside className={ styles.overview }>
          <nav>
            <ul>
              { articles.map(({ slug, title }) => (
                  <li key={ slug }>
                    <Link to={ `/blog/${ slug }` }>{ title }</Link>
                  </li>
                )) }
            </ul>
          </nav>
        </aside>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

Blog.fetchData = (store, match) => (store.dispatch(fetchArticles()))

Blog.displayName = 'Blog'


Blog.propTypes = {
  articles: arrayOf(
    shape({
      slug: string.isRequired,
      title: string.isRequired
    })
  ).isRequired
}

const mapStateToProps = state => ({
  articles: state.blog.articles
})

export default connect(mapStateToProps, (dispatch) => bindActionCreators({fetchArticles}, dispatch))(Blog)
