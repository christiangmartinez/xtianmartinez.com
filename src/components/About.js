import React from 'react'

const About = () => (
<div className="mdl-grid">
  <div className="gif-cell mdl-cell mdl-cell--12-col">
    <img className="work-gif" src="https://i.imgur.com/FTlPKVt.gif"/>
  </div>
  <div className="greeting mdl-cell mdl-cell--12-col">
    <div className="hello-there">
      Hello there!
    </div>
    <span className="intro">My name is Christian.</span>
    <br/>
    <br/>
    <p className="about-text">
      I'm a Fullstack Developer with a passion for creating things,<br/>solving problems, and always finding something new to learn.
    </p>
  </div>
</div>
)

export default About
