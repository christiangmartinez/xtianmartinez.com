import React from 'react'
import projectList from '.././ProjectList'

const ProjectDetail = (props) =>  {
  const project = projectList.get(
  props.match.params.url
  )

function Websitebutton(props) {
  return (
    <a href={project.website}>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          VIEW WEBSITE
      </button>
    </a>
  )
}

function Repobutton(props) {
  return (
    <a href={project.github}>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          VIEW GITHUB
      </button>
    </a>
  )
}

let button = null
if (project.website != null) {
  button = <Websitebutton />
} else {
  button = <Repobutton />
}

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
    <div className="detail-item mdl-cell mdl-cell--12-col">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
    <div className="mdl-cell mdl-cell--7-col">
      <img className="detail-image" src={project.featureImg0} alt="img"/>
    </div>
    <div className="detail-feature mdl-cell mdl-cell--5-col">
      <p>{project.featureDescription0}</p>
    </div>
    <div className="mdl-cell mdl-cell--7-col">
      <img className="detail-image" src={project.featureImg1} alt="img"/>
    </div>
    <div className="detail-feature mdl-cell mdl-cell--5-col">
      <p>{project.featureDescription1}</p>
    </div>
    <div className="mdl-cell mdl-cell--7-col">
      <img className="detail-image" src={project.featureImg2} alt="img"/>
    </div>
    <div className="detail-feature mdl-cell mdl-cell--5-col">
      <p>{project.featureDescription2}</p>
    </div>
    {button}
    <div className="mdl-cell mdl-cell--12-col"></div>
    {console.log(button)}
  </div>
  )
}
export default ProjectDetail
