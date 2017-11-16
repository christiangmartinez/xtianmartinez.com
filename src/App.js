import React from 'react'
import Header from './components/Header'
import TinyHeader from './components/TinyHeader'
import Main from './components/Main'

const App = () => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <Header></Header>
    <TinyHeader></TinyHeader>
    <Main></Main>
  </div>
)

export default App
