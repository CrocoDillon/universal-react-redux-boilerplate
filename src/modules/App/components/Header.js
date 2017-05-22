// @flow
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { App, Home, Blog, BlogIndex, BlogArticle, NotFound } from '../../'
import {renderRoutes} from 'react-router-config'


// activeClassName={ styles.active }
class Header extends Component {
  render() {
    const styles = require('./Header.scss')

    const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
          <Link className={match ? `${styles.navLink} ${styles.active}` : styles.navLink} to={to}>{label}</Link>
        )} />
    );
    const { route } = this.props
    return (
      <div>
        <header className={ styles.Header }>
          <ActiveLink activeOnlyWhenExact to="/" label="Universal React + Redux Boilerplate" />
          <nav className={ styles.nav }>
            <ul className={ styles.navList }>
              <li className={ styles.navListItem }>
                <ActiveLink activeOnlyWhenExact to="/" label="Home" />
              </li>
              <li className={ styles.navListItem }>
                <ActiveLink activeOnlyWhenExact to="/blog" label="Blog" />
              </li>
            </ul>
          </nav>
        </header>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}

Header.displayName = 'Header'

export default Header
