import React from 'react'

const Contact = () => (
  <div className="greeting mdl-grid">
    <div className="contact-text mdl-cell--12-col">
      Let's get in touch.
    </div>
    <div className="mdl-cell--3-col"></div>
    <div className="mdl-cell--6-col">
      <a href="mailto:cgmartinez11142@gmail.com">
        <img className="contact-button"
          src="https://i.imgur.com/OpcBdpz.png"
          alt="email"/>
      </a>
      <a href="https://www.linkedin.com/in/cg-martinez/">
        <img className="contact-button"
          src="https://i.imgur.com/2VRQOGk.png"
          alt="linkedin"/>
      </a>
      <a href="https://github.com/christiangmartinez">
        <img className="contact-button"
          src="https://i.imgur.com/mJrumJK.png"
          alt="github"/>
        </a>
        <a href="https://twitter.com/XtiangMz">
        <img className="contact-button"
          src="https://i.imgur.com/qZylLw6.png"
          alt="twitter"/>
        </a>
      </div>
    <div className="mdl-cell--3-col"></div>
  </div>
)

export default Contact
