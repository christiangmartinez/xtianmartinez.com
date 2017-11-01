import React from 'react'

const Contact = () => (
  <div className="mdl-grid">
    <div className="contact-card mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
      <img className="info-img" src="https://www.voordewereldvanmorgen.nl/sites/default/files/styles/blog_image/public/mathyas-kurmann-102977.jpg?itok=JkWv-DqE" alt="mailboxes"/>
      <div className="mdl-card__title">
        <h2 className="img-text">Let's get in touch</h2>
      </div>
    </div>
    <div className="mdl-cell mdl-cell--3-col"></div>
      <div className="mdl-cell mdl-cell--2-col">
        <a href="https://www.linkedin.com/in/cg-martinez/">
          <img className="contact-button"
            src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
            alt="linkedin"/>
        </a>
      </div>
      <div className="mdl-cell mdl-cell--2-col">
        <a href="https://plus.google.com/u/0/102691295531754660425">
          <img className="contact-button"
            src="https://image.flaticon.com/icons/png/512/24/24171.png"
            alt="googleplus"/>
        </a>
      </div>
      <div className="mdl-cell mdl-cell--2-col">
        <a href="https://github.com/christiangmartinez">
          <img className="contact-button"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="github"/>
          </a>
      </div>
    <div className="mdl-cell mdl-cell--3-col"></div>
  </div>
)

export default Contact
