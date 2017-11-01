import React from 'react'

const About = () => (
  <div className="mdl-grid">
    <div className="about-card mdl-cell mdl-cell--7-col">
      <img className="info-img" src="http://www.funnycatsite.com/pictures/programmer_cat.jpg" alt="cat"/>
    </div>
    <div className="mdl-cell mdl-cell--5-col">
      <div className="about-text">
        <span className="greeting">Hello there!</span>
        <span className="intro">My name is Christian.</span>
        I'm a Fullstack Web Developer with a passion for creating things, solving problems, and always finding something new to learn.
      </div>
    </div>
  </div>
)

export default About
