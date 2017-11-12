import React from 'react'

const projectList = {
  projects: [{
    id: 1,
    coverImg:'https://i.imgur.com/JqZ0MIl.jpg',
    title: 'Flaming Space Rocks Tracker',
    type: 'Angular 2/Materialize',
    url: 'space_rocks',
    description: "Flaming Space Rocks Tracker is an educational web app that teaches the user about asteroids and comets with and interactive timeline and display real-time info of asteroids passing earth using NASA's Near Earth Objects API. ",
    featureImg0: 'https://i.imgur.com/rI2aG68.png',
    featureDescription0: "Up-to-date data of objects currently    passing through earth's orbit with data specific to each  asteroid.",
    featureImg1: 'https://i.imgur.com/gXE3maL.png',
    featureDescription01: "Cards with asteroid info are color-coded. Passing objects that are potentially hazardous are dipslayed on a yellow card."
  },{
    id: 2,
    coverImg:'https://i.imgur.com/Eoce0t8.jpg',
    title: 'Mappy',
    type: 'Native Android',
    url: 'mappy',
    description: "A location based social app. Get a feel for what's going on in your city with a quick glance at a map!",
    featureImg0:'https://i.imgur.com/rI2aG68.png',
    featureDescription0: 'Up-to-date data of objects currently passing through earths orbit with data specific to each asteroid.'
  },{
    id: 3,
    coverImg:'https://i.imgur.com/KbECryF.png',
    title: 'Overwatch Roster',
    type: 'Angular 2/Foundation',
    url: 'overwatch_roster',
    description: 'proj',
    featureImg0:'https://i.imgur.com/rI2aG68.png',
    featureDescription0: 'Up-to-date data of objects currently passing through earths orbit with data specific to each asteroid.'
  }],
  all: function() { return this.projects},
  get: function(url) {
    const isProject = p => p.url === url
    return this.projects.find(isProject)
  }
}

export default projectList
