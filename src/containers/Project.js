import React from 'react'

class Project extends React.Component {
  render() {
    return(
      <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
        <h3 className="mdl-card__title-text">{this.props.project.title}</h3>
        <div className="mdl-card__supporting-text">
          {this.props.project.description}
        </div>
      </div>
    )
  }
}

export default Project
