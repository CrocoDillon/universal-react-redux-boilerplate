'use strict';

import './Blog.scss';

import React, { Component } from 'react';

import { Nav } from '../components';
import fetch from '../utils/fetch';

class Blog extends Component {
  render() {
    let { children } = this.props;

    let articles = fetch('/api/articles');
    let links = articles.map(({ slug, title }) => ({
      to: `/blog/${slug}`,
      text: title
    }));

    return (
      <div className="Blog">
        <aside className="overview">
          <h1>Articles:</h1>
          <Nav links={links} />
        </aside>
        <main className="article">
          {children}
        </main>
      </div>
    );
  }
}

export default Blog;
