import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <div>
        <ul className="Header_links">
          <li className="Header_link"><Link to="/">Home</Link></li>
          <li className="Header_link"><Link to="/projects">Projects</Link></li>
          <li className="Header_link"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <Route exact path="/" component={Home}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
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
