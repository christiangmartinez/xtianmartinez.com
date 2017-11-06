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
      <div className="img-container mdl-cell--12-col">
        <div className="overlay">
          <img className="cover-image"
           src={this.props.project.coverImg} alt="cover"/>
        </div>
        <div className="project-title">
          {this.props.project.title}
          <br/>
          <span className="project-type">{this.props.project.type}</span>
        </div>
      </div>
    )
  }
}

export default Project
