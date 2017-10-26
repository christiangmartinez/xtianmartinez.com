import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div className="demo-layout-transparent mdl-layout mdl-js-layout">
      <header className="mdl-layout__header mdl-layout__header--transparent">
        <div className="mdl-layout__header-row">
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link"><Link to="/about">ABOUT</Link></a>
            <a className="mdl-navigation__link is-active"><Link to="/work">WORK</Link></a>
            <a className="mdl-navigation__link"><Link to="/contact">CONTACT</Link></a>
          </nav>
        </div>
      </header>
      <main className="mdl-layout__content">
        <div className="mdl-grid content-max-width">
          <Route exact path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </main>
    </div>
  </Router>
)

const About = () => (
  <div>
    <h3>Hello, I'm Christian Martinez, a Full Stack Web Developer</h3>
  </div>
)

const Work = () => (
  <div className="mdl-cell mdl-card mdl-shadow--2dp">
    <div className="mdl-card__title">
      <h2 className="mdl-card__title-text">
        Sample Project
      </h2>
    </div>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

export default App
