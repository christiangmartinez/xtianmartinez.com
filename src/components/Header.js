import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
  <header className="mdl-layout__header mdl-layout__header--transparent">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">CHRISTIAN MARTINEZ</span>
      <div className="mdl-layout-spacer"></div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <Link className="mdl-navigation__link" to="/">HOME</Link>
        <Link className="mdl-navigation__link" to="/portfolio">PORTFOLIO</Link>
        <Link className="mdl-navigation__link" to="/contact">CONTACT</Link>
      </nav>
    </div>
  </header>
)

export default Header
