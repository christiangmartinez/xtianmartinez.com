import React from 'react'
import {Link} from 'react-router-dom'
import ProjectDetail from './ProjectDetail'

class Project extends React.Component {
  render() {
    return(
      <div className="img-container mdl-cell--12-col">
        <Link to={`/portfolio/${this.props.project.url}`}>
          <div className="overlay">
            <img className="cover-image"
             src={this.props.project.coverImg} alt="cover"/>
          </div>
          <div className="project-title">
            {this.props.project.title}
            <br/>
            <span className="project-type">
              {this.props.project.type}
            </span>
          </div>
        </Link>
      </div>
    )
  }
}

export default Project
