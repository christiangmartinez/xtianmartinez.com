import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProjectDetail from './ProjectDetail'

class Project extends React.Component {
  render() {
    return(
      <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--2dp">
        <div className="mdl-card__media">
          <img className="cover-image" src={this.props.project.coverImg} alt="cover"/>
        </div>
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{this.props.project.title}</h2>
        </div>
        <div className="mdl-card__supporting-text">
          {this.props.project.description}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a>
            <Link className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to={'/portfolio/' + this.props.project.url}>LEARN MORE</Link>
          </a>
        </div>
      </div>
    )
  }
}

export default Project
