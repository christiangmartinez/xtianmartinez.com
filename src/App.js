import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var About = require('./About');

const App = () => (
  <Router>
    <div className="mdl-layout mdl-js-layout">
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
        <Route exact path="/about" component={About}/>
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}/>
      </main>
    </div>
  </Router>
)

const Work = () => (
  <div className="mdl-grid">
    <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
      <h3 className="mdl-card__title-text">Project Zero</h3>
      <div className="mdl-card__supporting-text">
        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
      </div>
    </div>
    <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
      <h3 className="mdl-card__title-text">Project One</h3>
      <div className="mdl-card__supporting-text">
        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
      </div>
    </div>
    <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
      <h3 className="mdl-card__title-text">Project Two</h3>
      <div className="mdl-card__supporting-text">
        Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.
      </div>
    </div>
  </div>
)

const Contact = () => (
  <div>
    <h3>You can reach me here:</h3>
  </div>
)

export default App
