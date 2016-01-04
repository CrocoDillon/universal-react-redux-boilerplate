'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticle, showArticle } from '../actions/articles';

const mapStateToProps = (state) => ({
  articles: state.articles
});

class BlogArticle extends Component {
  static onEnter({ dispatch }, nextState) {
    let slug = nextState.params.slug;
    dispatch(fetchArticle(slug));
  }
  render() {
    let { articles, params } = this.props;
    let slug = params.slug;
    let article = articles[slug];

    return article ? (
      <article>
        <h1>{article.title}</h1>
        <div>{article.body || 'Loading...'}</div>
      </article>
    ) : (
      <h1>Not Found :(</h1>
    );
  }
}

export default connect(mapStateToProps)(BlogArticle);
