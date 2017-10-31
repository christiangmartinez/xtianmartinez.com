import React from 'react'

const About = () => (
  <div className="mdl-grid">
    <div className="about-card mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
      <img className="info-img" src="https://i.imgur.com/LmTU8KY.jpg" alt="chilling in the forest"/>
      <div className="mdl-card__title">
        <h2>Hello! I'm Christian Martinez.</h2>
      </div>
    </div>
    <div className="mdl-cell mdl-cell--2-col"></div>
    <div className="mdl-cell mdl-cell--8-col">
      <div className="about-text">
        I'm a Fullstack Web Developer with a passion for creating things, solving problems, and always finding something new to learn.
      </div>
    </div>
    <div className="mdl-cell mdl-cell--2-col"></div>
  </div>
)

export default About
