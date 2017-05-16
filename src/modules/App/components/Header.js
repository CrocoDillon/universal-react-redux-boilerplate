// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const styles = require('./Header.scss')

  return (
    <header className={ styles.Header }>
      <Link to="/" className={ styles.logo }>Universal React + Redux Boilerplate</Link>
      <nav className={ styles.nav }>
        <ul className={ styles.navList }>
          <li className={ styles.navListItem }>
            <NavLink to="/" className={ styles.navLink } activeClassName={ styles.active } exact>Home</NavLink>
          </li>
          <li className={ styles.navListItem }>
            <NavLink to="/blog" className={ styles.navLink } activeClassName={ styles.active }>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.displayName = 'Header'

export default Header
