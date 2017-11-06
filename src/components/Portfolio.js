import React from 'react'
import projects from '.././ProjectList'
import Project from './Project'

class Portfolio extends React.Component {
  render() {
    return(
      <div className="mdl-grid">
        {projects.map((project)=> {
          return <Project project={project}/>
          })
        }
      </div>
    )
  }
}


export default Portfolio
