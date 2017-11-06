import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'

const App = () => (
  <div className="mdl-layout mdl-js-layout">
    <Header></Header>
    <Main></Main>
  </div>
)

export default App
