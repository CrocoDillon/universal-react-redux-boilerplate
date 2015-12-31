'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticle, showArticle } from '../actions/articles';

const mapStateToProps = (state) => ({
  article: state.articles.map[state.articles.current]
});

class BlogArticle extends Component {
  static onEnter(dispatch, nextState) {
    let slug = nextState.params.slug;
    dispatch(fetchArticle(slug));
    dispatch(showArticle(slug));
  }
  render() {
    let { article } = this.props;

    return article ? (
      <article>
        <h1>{article.title}</h1>
        <div>{article.body}</div>
      </article>
    ) : (
      <h1>Not Found :(</h1>
    );
  }
}

export default connect(mapStateToProps)(BlogArticle);
