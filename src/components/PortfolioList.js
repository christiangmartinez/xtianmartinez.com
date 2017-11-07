import React from 'react'
import {Link} from 'react-router-dom'
import projectList from '.././ProjectList'

const PortfolioList = () => (
  <div className="mdl-grid">
    {projectList.all().map(p => (
      <div className="img-container mdl-cell--12-col">
        <Link to={`/portfolio/${p.url}`}>
          <div className="overlay">
            <img className="cover-image"
             src={p.coverImg} alt="cover"/>
          </div>
          <div className="project-title">
            {p.title}
            <br/>
            <span className="project-type">
              {p.type}
            </span>
          </div>
        </Link>
      </div>
      ))
    }
  </div>
)

export default PortfolioList
