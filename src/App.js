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
          <span className="mdl-layout-title">Christian Martinez</span>
          <div className="mdl-layout-spacer"></div>
          <ul className="mdl-navigation">
            <li className="mdl-navigation__link"><Link to="/">Home</Link></li>
            <li className="mdl-navigation__link"><Link to="/projects">Projects</Link></li>
            <li className="mdl-navigation__link"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
      <main className="mdl-layout__content">
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
      </main>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h3>Fullstack Web Developer</h3>
  </div>
)

const Projects = () => (
  <div>
    <h2>Projects</h2>
  </div>
)

const Contact = () => (
  <div>
    <h2>Contact</h2>
  </div>
)

export default App
