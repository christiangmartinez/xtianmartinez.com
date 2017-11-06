import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import ProjectDetail from './ProjectDetail'

const Main = () => (
  <main className="mdl-layout__content">
    <Route exact path="/about" component={About}/>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/portfolio/:url" component={ProjectDetail}/>
  </main>
)

export default Main
