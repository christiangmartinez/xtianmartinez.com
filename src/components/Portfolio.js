import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PortfolioList from './PortfolioList'
import ProjectDetail from './ProjectDetail'

const Portfolio = () => (
  <Switch>
    <Route exact path="/portfolio" component={PortfolioList}/>
    <Route path="/portfolio/:url" component={ProjectDetail}/>
  </Switch>
)

export default Portfolio
