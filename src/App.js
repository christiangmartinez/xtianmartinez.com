import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from './containers/About'
import Contact from './containers/Contact'
import Portfolio from './containers/Portfolio'
import ProjectDetail from './containers/ProjectDetail'

const App = () => (
  <Router>
    <div className="mdl-layout mdl-js-layout">
      <header className="mdl-layout__header mdl-layout__header--transparent">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">CHRISTIAN MARTINEZ</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/about">ABOUT</Link>
            <Link className="mdl-navigation__link" to="/portfolio">PORTFOLIO</Link>
            <Link className="mdl-navigation__link" to="/contact">CONTACT</Link>
          </nav>
        </div>
      </header>
      <main className="mdl-layout__content">
        <Route exact path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/portfolio/:url" component={ProjectDetail}/>
      </main>
    </div>
  </Router>
)

export default App
