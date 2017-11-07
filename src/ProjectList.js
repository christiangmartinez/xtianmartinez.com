import React from 'react'

const projectList = {
  projects: [{
    id: 1,
    coverImg:'https://i.imgur.com/JqZ0MIl.jpg',
    title: 'Flaming Space Rocks Tracker',
    type: 'Angular 2/Materialize',
    url: 'space_rocks',
    description: 'proj'
  },{
    id: 2,
    coverImg:'https://i.imgur.com/LA40dA5.png',
    title: 'Mappy',
    type: 'Native Android App',
    url: 'mappy',
    description: 'proj'
  },{
    id: 3,
    coverImg:'https://i.imgur.com/KbECryF.png',
    title: 'Overwatch Roster',
    type: 'Angular 2/Foundation',
    url: 'overwatch_roster',
    description: 'proj'
  }],
  all: function() { return this.projects},
  get: function(id) {
    const isProject = p => p.id === id
    return this.projects.find(isProject)
  }
}

export default projectList
