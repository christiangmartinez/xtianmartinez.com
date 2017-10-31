import React from 'react'

const Contact = () => (
  <div className="mdl-grid">
    <div className="contact-card mdl-cell mdl-cell--12-col mdl-card mdl-shadow--2dp">
      <img className="info-img" src="https://www.voordewereldvanmorgen.nl/sites/default/files/styles/blog_image/public/mathyas-kurmann-102977.jpg?itok=JkWv-DqE" alt="mailboxes"/>
      <div className="mdl-card__title">
        <h2>Let's get in touch</h2>
      </div>
    </div>
    <div className="mdl-cell mdl-cell--3-col"></div>
      <div className="mdl-cell mdl-cell--2-col">
        <img className="contact-button"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Contact_vmc2015.png/480px-Contact_vmc2015.png"
          alt="email"/>
      </div>
      <div className="mdl-cell mdl-cell--2-col">
      <img className="contact-button"
        src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
        alt="linkedin"/>
      </div>
      <div className="mdl-cell mdl-cell--2-col">
      <img className="contact-button"
        src="https://www.shareicon.net/data/2015/09/25/107228_plus_512x512.png"
        alt="linkedin"/>
      </div>
    <div className="mdl-cell mdl-cell--3-col"></div>
  </div>
)

export default Contact
