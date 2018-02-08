import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import ProjectDetail from './ProjectDetail'

const Main = () => (
  <main className="mdl-layout__content">
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
)

export default Main
