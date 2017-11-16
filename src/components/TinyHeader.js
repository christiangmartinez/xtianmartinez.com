import React from 'react'
import {Link} from 'react-router-dom'

const TinyHeader = () => (
  <div className="mdl-grid mdl-layout--small-screen-only mdl-js-layout">
      <div className="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
  </div>
)
export default TinyHeader
