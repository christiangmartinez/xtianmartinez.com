import React from 'react'
import {Link} from 'react-router-dom'

const TinyHeader = () => (
  <div className="mdl-grid  mdl-js-layout">
      <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/about">ABOUT</Link>
          <Link className="mdl-navigation__link" to="/portfolio">PORTFOLIO</Link>
          <Link className="mdl-navigation__link" to="/contact">CONTACT</Link>
        </nav>
      </div>
  </div>
)
export default TinyHeader
