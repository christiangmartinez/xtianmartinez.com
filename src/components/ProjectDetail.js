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
    <div>
      <h1>{project.title}</h1>
    </div>
  )
}
export default ProjectDetail
