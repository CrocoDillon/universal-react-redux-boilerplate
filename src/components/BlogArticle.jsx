'use strict';

import React, { Component } from 'react';

import fetch from '../utils/fetch';

class BlogArticle extends Component {
  render() {
    let slug = this.props.params.slug;

    let article = fetch('/api/articles/' + slug);

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

export default BlogArticle;
