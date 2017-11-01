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
      <div className="mdl-cell mdl-cell--12-col mdl-shadow--4dp">
        <div>
          <img className="cover-image" src={this.props.project.coverImg} alt="cover"/>
        </div>
      </div>
    )
  }
}

export default Project
