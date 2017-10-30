import React from 'react'
import projects from './ProjectList'
import Project from './Project'

class Work extends React.Component {
  render(props) {
    return(
      <div className="mdl-grid">
        {this.props.projects.map((project)=> {
          return <Project project={project}/>
        })
      }
      </div>
    )
  }
}


export default Work
