// @flow
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  const styles = require('./Header.scss')

  return (
    <header className={ styles.Header }>
      <Link to="/" className={ styles.logo }>Universal React + Redux Boilerplate</Link>
      <nav className={ styles.nav }>
        <ul className={ styles.navList }>
          <li className={ styles.navListItem }>
            <Link to="/" className={ styles.navLink } activeClassName={ styles.active } onlyActiveOnIndex>Home</Link>
          </li>
          <li className={ styles.navListItem }>
            <Link to="/blog" className={ styles.navLink } activeClassName={ styles.active }>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
