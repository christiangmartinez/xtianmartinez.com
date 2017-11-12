import React from 'react'
import projectList from '.././ProjectList'

const ProjectDetail = (props) =>  {
  const project = projectList.get(
  props.match.params.url
  )
  if (!project) {
    return <div className="proj-detail mdl-grid">
      <div>
        <h1 className="mdl-cell mdl-cell--12-col">
          Project not found.<br/>
          :(
        </h1>
      </div>
    </div>
  }
  return(
    <div className="proj-detail mdl-grid">
      <div className="detail-item">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="mdl-cell mdl-cell--7-col">
        <img className="detail-image" src={project.featureImg0} alt="img"/>
      </div>
      <div className="detail-feature mdl-cell mdl-cell--5-col">
        <p>{project.featureDescription0}</p>
      </div>
      <div className="detail-feature mdl-cell mdl-cell--5-col">
        <p>{project.featureDescription01}</p>
      </div>
      <div className="mdl-cell mdl-cell--7-col">
        <img className="detail-image" src={project.featureImg1} alt="img"/>
      </div>
  </div>
  )
}
export default ProjectDetail
