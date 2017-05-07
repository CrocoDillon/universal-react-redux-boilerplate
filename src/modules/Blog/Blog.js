// @flow
import React from 'react'
import { string, shape, element, arrayOf } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchArticles, getArticles } from './redux'

export const Blog = (props: Object) => {
  const styles = require('./Blog.scss')

  const { children, articles } = props

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
      <main className={ styles.article }>
        { children }
      </main>
    </div>
  )
}

Blog.displayName = 'Blog'

Blog.propTypes = {
  children: element.isRequired,
  articles: arrayOf(
    shape({
      slug: string.isRequired,
      title: string.isRequired
    })
  ).isRequired
}

Blog.onEnter = ({ dispatch }) => dispatch(fetchArticles())

const mapStateToProps = state => ({
  articles: getArticles(state)
})

export default connect(mapStateToProps)(Blog)
