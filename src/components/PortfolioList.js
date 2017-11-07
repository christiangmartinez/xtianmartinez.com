import React from 'react'
import projects from '.././ProjectList'
import Project from './Project'

const PortfolioList = () => (
  <div className="mdl-grid">
    {projects.map((project)=> {
      return <Project project={project}/>
      })
    }
  </div>
)

export default PortfolioList
