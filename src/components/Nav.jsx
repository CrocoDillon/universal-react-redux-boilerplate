'use strict';

import './Nav.scss';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Nav = ({ links }) => (
  <nav className="Nav">
    <ul>
      {links.map(({ to, text, onlyActiveOnIndex = false }, i) => (
        <li key={i}>
          <Link to={to} onlyActiveOnIndex={onlyActiveOnIndex} activeClassName="is-active">{text}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
