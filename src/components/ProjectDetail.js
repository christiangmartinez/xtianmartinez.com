import React from 'react'
import projectList from '.././ProjectList'

const ProjectDetail = (props) =>  {
  const project = projectList.get(
  props.match.params.url
  )
  if (!project) {
    return <div>ya done goofed</div>
  }
  return(
    <div className="proj-detail mdl-grid">
      <div className="mdl-cell--12">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="mdl-cell mdl-cell--6">
        <img className="detail-image" src={project.featureImg0} alt="img"/>
      </div>
      <div className="mdl-cell mdl-cell--1"></div>
      <div className="detail-feature mdl-cell mdl-cell--5">
        <p>{project.featureDescription0}</p>
      </div>
      <div className="mdl-cell mdl-cell--12"></div>
      <div className="detail-feature mdl-cell mdl-cell--5">
        <p>{project.featureDescription01}</p>
      </div>
      <div className="mdl-cell mdl-cell--1"></div>
      <div className="mdl-cell mdl-cell--6">
        <img className="detail-image" src={project.featureImg1} alt="img"/>
      </div>
  </div>
  )
}
export default ProjectDetail
