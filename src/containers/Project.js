import React from 'react'

class Project extends React.Component {
  render() {
    return(
      <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media">
          <img className="cover-image" src={this.props.project.coverImg} />
        </div>
        <h3 className="mdl-card__title-text">{this.props.project.title}</h3>
        <div className="mdl-card__supporting-text">
          {this.props.project.description}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            LEARN MORE
          </a>
        </div>
      </div>
    )
  }
}

export default Project
