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
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link"><Link to="/about">ABOUT</Link></a>
            <a className="mdl-navigation__link"><Link to="/portfolio">PORTFOLIO</Link></a>
            <a className="mdl-navigation__link"><Link to="/contact">CONTACT</Link></a>
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
